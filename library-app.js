// ============================================================
// THE LIBRARY OF KORRANBERG — APP ENGINE
// ============================================================
//
// This file contains the runtime: clerk dialogue, study cell,
// search, vault, and hash routing. It reads from library-data.js
// (COLLEGES, PELLIC, TRUST_NOTES, ARCHIVIST_MARGINALIA,
//  VAULT_PASSPHRASE, LIBRARY) but does not modify them.
// ============================================================


// ─── STATE ────────────────────────────────────────────────────

const State = {
  scene: 'desk',           // 'desk' | 'cell' | 'reading' | 'search'
  intent: null,            // last subject the scholar described
  stone: null,             // college id of currently held stone
  stonePlaced: false,      // is the stone on the pedestal?
  alcoves: [],             // book indices currently materialized
  alcoveLabel: null,       // label describing what materialized
  alcoveScold: null,       // archivist marginalia if mismatched
  vaultUnlocked: false,
  trustLogged: 0,          // count of restricted views this session
  trustEscalationShown: false,
  currentBook: null,       // index of book being read
  pellicLine: null,        // current pellic line on screen
  greetUsed: new Set(),    // shuffle bag for non-repetition
};


// ─── UTIL ─────────────────────────────────────────────────────

function pickFromPool(pool, usedKey) {
  // Pull a random item, preferring ones not yet used this session.
  const used = State[usedKey] || new Set();
  const fresh = pool.filter((_, i) => !used.has(i));
  const pickPool = fresh.length ? fresh : pool;
  const item = pickPool[Math.floor(Math.random() * pickPool.length)];
  if (fresh.length) {
    used.add(pool.indexOf(item));
    State[usedKey] = used;
  } else {
    // pool exhausted, reset
    State[usedKey] = new Set([pool.indexOf(item)]);
  }
  return item;
}

function pick(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function slugify(s) {
  return String(s).toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function findBookBySlug(collegeId, slug) {
  return LIBRARY.books.findIndex(b =>
    b.college === collegeId && slugify(b.title) === slug
  );
}

function getCollege(id) {
  return COLLEGES.find(c => c.id === id);
}


// ─── KEYWORD HEURISTIC (which college fits a free-text query) ──

const COLLEGE_KEYWORDS = {
  soladas:     ['history','war','last war','galifar','mourning','cyre','dynasty','kingdom','succession','dhakaani','vol','treaty','thronehold','lord of blades','goblin','aerenal','karrnath','aundair','breland','thrane','succession','chronicle'],
  aureon:      ['law','treaty','contract','oath','justice','court','statute','jurisprudence','rights','legal','korth edicts','edict','warforged rights','ethics of governance'],
  blackdragon: ['alchemy','reagent','potion','transmutation','distillation','elixir','poison','antidote','silver dust','star-metal','aetheric'],
  drystone:    ['warforged','docent','creation forge','cannith','construct','engineering','artifice','schema','colossus','mark of making','whitehearth','xen\'drik forge','golem'],
  lyrris:      ['poetry','poem','verse','drama','play','literature','art','painting','sculpture','criticism','novel','epic'],
  morridan:    ['mathematics','geometry','astronomy','navigation','map','cartography','moon','siberys','plane orbit','star','celestial','expedition','glass plateau','mournland survey'],
  balinor:     ['beast','animal','magebreeding','vadalis','bestiary','natural','ecology','wolf','hawk','horse','dinosaur','feral','dire','symbiont','daelkyr creature','aberration'],
  tabernacle:  ['silver flame','sovereign host','gods','god','religion','faith','prophecy','draconic prophecy','rajah','overlord','soul','planar','plane','mabar','dolurrh','syrania','xoriat','dal quor','grief','philosophy','ethics','mourning','vytharax','traveler','blood of vol']
};

function suggestCollege(query) {
  const q = String(query).toLowerCase();
  if (!q.trim()) return null;
  let best = null, bestScore = 0;
  for (const id of Object.keys(COLLEGE_KEYWORDS)) {
    let score = 0;
    for (const kw of COLLEGE_KEYWORDS[id]) {
      if (q.includes(kw)) score += kw.length; // longer matches weighted
    }
    if (score > bestScore) { bestScore = score; best = id; }
  }
  return best;
}


// ─── SCENE: DESK (clerk dialogue) ─────────────────────────────

function renderDesk() {
  document.body.classList.remove('cell-active');
  const greet = pickFromPool(PELLIC.greetings, 'greetUsed');
  const prompt = pickFromPool(PELLIC.prompts, 'promptUsed');

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="scene scene-desk">
      <div class="desk-frame">
        <div class="clerk-portrait" aria-hidden="true">
          <img src="assets/clerk-portrait.png" alt="" onerror="this.replaceWith(makeClerkFallback())">
        </div>

        <div class="clerk-dialogue">
          <p class="clerk-name">PELLIC, second clerk of the catalog</p>
          <p class="clerk-line" id="pellic-greet">${escapeHtml(greet)}</p>

          <div class="intent-row">
            <input type="text" id="intent-input"
              placeholder="State your subject…"
              autocomplete="off"
              aria-label="Subject of your inquiry">
            <button id="intent-submit" class="btn-primary">Submit</button>
          </div>

          <p class="clerk-line clerk-prompt">${escapeHtml(prompt)}</p>

          <div class="stone-tray" id="stone-tray">
            ${COLLEGES.map(c => `
              <button class="stone-card ${c.sparse ? 'sparse' : ''}"
                      data-college="${c.id}"
                      style="--stone-color: ${c.stoneHex}; --stone-image: url('assets/stone-${c.id}.png')"
                      aria-label="${escapeHtml(c.name)} — ${escapeHtml(c.tagline)}">
                <div class="stone-glyph"></div>
                <div class="stone-meta">
                  <p class="stone-name">${escapeHtml(c.name)}</p>
                  <p class="stone-tag">${escapeHtml(c.tagline)}</p>
                </div>
              </button>
            `).join('')}
          </div>

          <p class="visiting-scholar">${escapeHtml(PELLIC.visitingScholarLine)}</p>
        </div>
      </div>

      <button class="search-link" onclick="openSearch()" aria-label="Open the catalog search">
        Search the catalog directly →
      </button>
    </div>
  `;

  // wire up
  document.getElementById('intent-submit').addEventListener('click', onIntentSubmit);
  document.getElementById('intent-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') onIntentSubmit();
  });
  document.querySelectorAll('.stone-card').forEach(btn => {
    btn.addEventListener('click', () => onStoneSelect(btn.dataset.college));
  });

  document.getElementById('intent-input').focus();
}

function makeClerkFallback() {
  const div = document.createElement('div');
  div.className = 'clerk-fallback';
  div.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="50" cy="40" r="22" fill="#3a2818" stroke="#7a5a30" stroke-width="1.5"/>
    <path d="M28 80 Q50 60 72 80 L72 100 L28 100 Z" fill="#3a2818" stroke="#7a5a30" stroke-width="1.5"/>
    <circle cx="42" cy="38" r="2" fill="#c9a84c"/>
    <circle cx="58" cy="38" r="2" fill="#c9a84c"/>
    <path d="M42 50 Q50 54 58 50" stroke="#c9a84c" stroke-width="1.2" fill="none"/>
  </svg>`;
  return div;
}

function onIntentSubmit() {
  const v = document.getElementById('intent-input').value.trim();
  if (!v) return;
  State.intent = v;
  // suggest a college
  const suggested = suggestCollege(v);
  if (suggested) {
    // gently highlight the suggested stone
    const el = document.querySelector(`.stone-card[data-college="${suggested}"]`);
    if (el) {
      el.classList.add('suggested');
      el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    const greetEl = document.getElementById('pellic-greet');
    if (greetEl) {
      const c = getCollege(suggested);
      greetEl.textContent = `That's ${c.name}'s territory. Take their stone.`;
    }
  } else {
    const greetEl = document.getElementById('pellic-greet');
    if (greetEl) {
      greetEl.textContent = `That subject is not obviously one college's. Pick the one that fits — or use the search.`;
    }
  }
}

function onStoneSelect(collegeId) {
  const college = getCollege(collegeId);

  // Lyrris special case
  if (college.sparse) {
    const greetEl = document.getElementById('pellic-greet');
    if (greetEl) {
      greetEl.textContent = PELLIC.lyrrisNote;
    }
    return;
  }

  State.stone = collegeId;
  State.stonePlaced = false;

  const handoff = pick(PELLIC.handoff);
  const greetEl = document.getElementById('pellic-greet');
  if (greetEl) {
    greetEl.textContent = handoff;
  }

  // proceed to study cell after a beat
  setTimeout(() => {
    location.hash = `#/cell/${collegeId}`;
  }, 1100);
}


// ─── SCENE: STUDY CELL ────────────────────────────────────────

function renderCell(collegeId) {
  const college = getCollege(collegeId);
  if (!college) {
    location.hash = '#/desk';
    return;
  }
  State.stone = collegeId;
  State.scene = 'cell';

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="scene scene-cell" id="cell">
      <div class="cell-darkness"></div>
      <div class="cell-darkness-veil"></div>

      <div class="cell-pedestal-wrap">
        <div class="cell-pedestal" id="pedestal" data-stone="${collegeId}">
          <div class="pedestal-base"></div>
          <div class="pedestal-top">
            <div class="pedestal-socket"></div>
          </div>
          <div class="floating-stone ${State.stonePlaced ? 'placed' : ''}"
               id="floating-stone"
               style="--stone-color: ${college.stoneHex}; --stone-image: url('assets/stone-${collegeId}.png')"
               role="button"
               tabindex="0"
               aria-label="${State.stonePlaced ? 'Remove the stone' : 'Place the stone'}">
            <div class="stone-shape"></div>
            <div class="stone-glow"></div>
          </div>
        </div>

        <p class="cell-instruction" id="cell-instruction">
          ${State.stonePlaced ? 'Remove the stone to dismiss the alcoves.' : 'Click the stone to place it on the pedestal.'}
        </p>
      </div>

      <div class="cell-alcoves" id="alcoves" aria-live="polite"></div>

      <div class="cell-controls">
        <button class="btn-ghost" onclick="returnToDesk()">← Return to the desk</button>
        <button class="btn-ghost" onclick="openSearch()">Search the catalog</button>
        ${State.vaultUnlocked ? '' : '<button class="btn-ghost" onclick="openVault()">⟐ Codex Vault</button>'}
      </div>

      ${State.stonePlaced ? '' : `
        <div class="cell-college-hint">
          <span class="cell-college-name">${escapeHtml(college.name)}</span>
          <span class="cell-college-tag">${escapeHtml(college.tagline)}</span>
        </div>
      `}
    </div>
  `;

  const stone = document.getElementById('floating-stone');
  if (stone) {
    stone.addEventListener('click', toggleStone);
    stone.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleStone(); }
    });
  }

  if (State.stonePlaced) {
    document.body.classList.add('cell-active');
    materializeAlcoves(collegeId);
  } else {
    document.body.classList.remove('cell-active');
  }
}

function toggleStone() {
  if (State.stonePlaced) {
    // remove the stone — dismiss alcoves
    State.stonePlaced = false;
    document.body.classList.remove('cell-active');
    const stone = document.getElementById('floating-stone');
    if (stone) stone.classList.remove('placed');
    const alcoves = document.getElementById('alcoves');
    if (alcoves) {
      alcoves.classList.add('dismissing');
      setTimeout(() => {
        alcoves.innerHTML = '';
        alcoves.classList.remove('dismissing');
      }, 600);
    }
    const inst = document.getElementById('cell-instruction');
    if (inst) inst.textContent = 'Click the stone to place it on the pedestal.';
  } else {
    // place the stone — materialize alcoves
    State.stonePlaced = true;
    document.body.classList.add('cell-active');
    const stone = document.getElementById('floating-stone');
    if (stone) stone.classList.add('placed');
    const inst = document.getElementById('cell-instruction');
    if (inst) inst.textContent = 'Remove the stone to dismiss the alcoves.';
    materializeAlcoves(State.stone);
  }
}

function materializeAlcoves(collegeId) {
  // Choose books for this query.
  // If State.intent has set a more specific query, filter by content match.
  let books = LIBRARY.books
    .map((b, i) => ({ ...b, _idx: i }))
    .filter(b => !b.restricted || State.vaultUnlocked);

  let scold = null;
  let label = `${getCollege(collegeId).name} — recent acquisitions`;

  // If we have an intent string, do a content-aware narrowing
  if (State.intent && State.intent.length > 2) {
    const intentLower = State.intent.toLowerCase();
    const suggested = suggestCollege(State.intent);

    // mismatch detection
    if (suggested && suggested !== collegeId) {
      // Wrong stone — return books from the SUGGESTED college (what they actually wanted),
      // but inject a sniffy note from that college's archivist
      const suggestedCollege = getCollege(suggested);
      books = books.filter(b => b.college === suggested);
      scold = pick(ARCHIVIST_MARGINALIA[suggested] || []);
      label = `Misdirected request — ${suggestedCollege.name} fulfilled despite the wrong stone`;
    } else {
      // Right stone (or no clear suggestion) — narrow to the chosen college,
      // then rank by intent match in title/author/content
      books = books.filter(b => b.college === collegeId);
      books = rankByQuery(books, intentLower);
      label = `${getCollege(collegeId).name} — results for "${escapeHtml(State.intent)}"`;
    }
  } else {
    books = books.filter(b => b.college === collegeId);
  }

  // cap to ~12 alcoves
  books = books.slice(0, 12);

  State.alcoves = books.map(b => b._idx);
  State.alcoveLabel = label;
  State.alcoveScold = scold;

  const alcoves = document.getElementById('alcoves');
  if (!alcoves) return;
  alcoves.classList.add('materializing');

  alcoves.innerHTML = `
    <div class="alcove-header">
      <p class="alcove-label">${label}</p>
      ${scold ? `<p class="alcove-scold">⟐ ${escapeHtml(scold)}</p>` : ''}
    </div>
    <div class="alcove-grid">
      ${books.length === 0
        ? '<p class="alcove-empty">No volumes in the catalog match this request. Try another stone, or refine your subject at the desk.</p>'
        : books.map((b, i) => renderAlcoveCard(b, i)).join('')
      }
    </div>
  `;

  // wire up
  alcoves.querySelectorAll('.alcove-book').forEach(el => {
    el.addEventListener('click', () => {
      const idx = parseInt(el.dataset.idx, 10);
      openBook(idx);
    });
  });

  setTimeout(() => alcoves.classList.remove('materializing'), 50);
}

function renderAlcoveCard(book, position) {
  const college = getCollege(book.college);
  const restrictedTag = book.restricted ? '<span class="alcove-restricted">⟐ Sealed</span>' : '';
  const dispatchTag = book.type === 'dispatch' ? '<span class="alcove-dispatch">Dispatch</span>' : '';
  const delay = (position * 60);
  return `
    <button class="alcove-book ${book.type === 'dispatch' ? 'is-dispatch' : ''} ${book.restricted ? 'is-restricted' : ''}"
            data-idx="${book._idx}"
            style="--enter-delay: ${delay}ms; --col-color: ${college.stoneHex}">
      <div class="alcove-spine">
        <div class="spine-band"></div>
        <div class="spine-band band-2"></div>
      </div>
      <div class="alcove-meta">
        <p class="alcove-title">${escapeHtml(book.title)}</p>
        <p class="alcove-author">${escapeHtml(book.author)}</p>
        <p class="alcove-tags">
          ${restrictedTag}${dispatchTag}
          <span class="alcove-year">${escapeHtml(book.year)}</span>
        </p>
      </div>
    </button>
  `;
}

// ─── SEARCH INDEX ─────────────────────────────────────────────
// Built once (lazily) and reused on every keystroke. Each book's
// content() is invoked a single time here, stripped of HTML, and
// "folded" so accents, curly quotes, and apostrophes stop blocking
// matches (e.g. "aureons" finds "Aureon's", "irtain" finds "ir'Tain").

let _searchIndex = null;

function fold(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // drop accents
    .replace(/[\u2018\u2019\u02bc']/g, '')               // drop apostrophes
    .replace(/[^a-z0-9]+/g, ' ')                         // everything else → space
    .replace(/\s+/g, ' ')
    .trim();
}

// Stopwords are ignored as standalone match-tokens (they stay part of
// the full-phrase match), so "mark of death" isn't drowned out by "of".
const SEARCH_STOPWORDS = new Set(['the','of','and','a','an','to','in','on','for','is','it','as','at','by','or','from','with','that','this']);

function queryTokens(qF) {
  return qF.split(' ').filter(w => w.length >= 2 && !SEARCH_STOPWORDS.has(w));
}

function buildSearchIndex() {
  _searchIndex = LIBRARY.books.map((b, i) => {
    let raw = '';
    try { raw = String(b.content()).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
    catch (e) { /* ignore */ }
    const col = getCollege(b.college) || {};
    const titleF = fold(b.title);
    const authorF = fold(b.author);
    return {
      idx: i,
      titleF,
      authorF,
      collegeF: fold((col.name || '') + ' ' + (col.tagline || '')),
      titleSet: new Set(titleF.split(' ').filter(Boolean)),
      authorSet: new Set(authorF.split(' ').filter(Boolean)),
      textRaw: raw,
      textF: fold(raw)
    };
  });
}

// Auto-rebuilds if the catalog grows (e.g. after appending books to the data file).
function searchIndex() {
  if (!_searchIndex || _searchIndex.length !== LIBRARY.books.length) buildSearchIndex();
  return _searchIndex;
}

// Single source of truth for relevance, shared by the catalog search
// and the college-cell alcove ranking.
function scoreEntry(e, qF, tokens) {
  let score = 0;
  let snippet = null;
  if (!qF) return { score, snippet };

  if (e.titleF.includes(qF)) { score += 100; if (e.titleF.startsWith(qF)) score += 25; }
  if (e.authorF.includes(qF)) score += 45;
  if (e.collegeF.includes(qF)) score += 10;

  let covered = 0;
  for (const w of tokens) {
    let hit = false;
    if (e.titleSet.has(w)) { score += 16; hit = true; }
    else if (e.titleF.includes(w)) { score += 9; hit = true; }
    if (e.authorSet.has(w)) { score += 6; hit = true; }
    else if (e.authorF.includes(w)) { score += 3; hit = true; }
    if (e.collegeF.includes(w)) { score += 3; hit = true; }
    if (e.textF.includes(w)) { score += 1; hit = true; if (!snippet) snippet = extractSnippet(e.textRaw, w); }
    if (hit) covered++;
  }
  // reward books that contain every word the scholar typed
  if (tokens.length && covered === tokens.length) score += 15;
  // a contiguous phrase hit in the body gives the best snippet
  if (e.textF.includes(qF)) { if (score === 0) score += 1; snippet = extractSnippet(e.textRaw, qF); }

  return { score, snippet };
}

// Bounded single-edit tolerance (insert/delete/substitute) for the
// zero-result "did you mean" safety net. Title/author words only.
function withinEdit1(a, b) {
  if (a === b) return true;
  const la = a.length, lb = b.length;
  if (Math.abs(la - lb) > 1) return false;
  let i = 0, j = 0, edits = 0;
  while (i < la && j < lb) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++edits > 1) return false;
    if (la > lb) i++;
    else if (lb > la) j++;
    else { i++; j++; }
  }
  if (i < la || j < lb) edits++;
  return edits <= 1;
}

function rankByQuery(books, q) {
  const qF = fold(q);
  const tokens = queryTokens(qF);
  const ix = searchIndex();
  return books.map(b => {
    let score = 0;
    const e = (b._idx != null && ix[b._idx] && ix[b._idx].idx === b._idx) ? ix[b._idx] : null;
    if (e) score = scoreEntry(e, qF, tokens).score;
    return { ...b, _score: score };
  })
  .sort((x, y) => y._score - x._score);
}


// ─── SCENE: BOOK READER ───────────────────────────────────────

function openBook(idx) {
  const book = LIBRARY.books[idx];
  if (!book) return;

  if (book.restricted && !State.vaultUnlocked) {
    // user is reading a sealed book — log Trust note and continue
    State.trustLogged += 1;
    if (State.trustLogged >= 3 && !State.trustEscalationShown) {
      State.trustEscalationShown = true;
      alert(pick(PELLIC.trustEscalation)); // simple, deliberately abrupt
    }
  }

  State.currentBook = idx;

  const slug = slugify(book.title);
  location.hash = `#/book/${book.college}/${slug}`;
  renderBook(idx);
}

function renderBook(idx) {
  document.body.classList.remove('cell-active');
  const book = LIBRARY.books[idx];
  if (!book) return;
  const college = getCollege(book.college);
  State.scene = 'reading';

  const isDispatch = book.type === 'dispatch';
  const isRestricted = book.restricted;

  const trustNote = isRestricted ? pick(TRUST_NOTES) : null;

  const main = document.getElementById('main');
  main.innerHTML = `
    <div class="scene scene-reading">
      <div class="reading-frame ${isDispatch ? 'is-dispatch' : 'is-book'} ${isRestricted ? 'is-restricted' : ''}">
        <div class="reading-controls">
          <button class="btn-ghost" onclick="closeBook()">← Back to the cell</button>
          <button class="btn-ghost" onclick="copyBookLink()" title="Copy link to this book">Copy link</button>
        </div>

        <header class="reading-header">
          ${isDispatch ? `
            <p class="dispatch-classification">FIELD DISPATCH · ${escapeHtml(college.name.toUpperCase())}</p>
          ` : ''}
          <h1 class="reading-title">${escapeHtml(book.title)}</h1>
          <p class="reading-byline">
            <span class="reading-author">${escapeHtml(book.author)}</span>
            <span class="reading-sep">·</span>
            <span class="reading-year">${escapeHtml(book.year)}</span>
            <span class="reading-sep">·</span>
            <span class="reading-college">${escapeHtml(college.name)}</span>
            ${isRestricted ? '<span class="reading-sep">·</span><span class="reading-sealed">⟐ Sealed</span>' : ''}
          </p>
        </header>

        ${trustNote ? `
          <div class="trust-marginalia">
            <span class="trust-label">Trust ledger:</span>
            ${escapeHtml(trustNote)}
          </div>
        ` : ''}

        <article class="reading-body">${book.content()}</article>

        <footer class="reading-footer">
          <button class="btn-ghost" onclick="adjacentBook(-1)">← Previous in college</button>
          <button class="btn-ghost" onclick="closeBook()">Close</button>
          <button class="btn-ghost" onclick="adjacentBook(1)">Next in college →</button>
        </footer>
      </div>
    </div>
  `;

  document.querySelector('.scene-reading').scrollIntoView({ block: 'start' });
}

function closeBook() {
  if (State.stone) {
    location.hash = `#/cell/${State.stone}`;
  } else {
    location.hash = '#/desk';
  }
}

function adjacentBook(dir) {
  if (State.currentBook == null) return;
  const cur = LIBRARY.books[State.currentBook];
  if (!cur) return;
  const sameCollege = LIBRARY.books
    .map((b, i) => ({ b, i }))
    .filter(({ b }) => b.college === cur.college && (!b.restricted || State.vaultUnlocked));
  const pos = sameCollege.findIndex(({ i }) => i === State.currentBook);
  if (pos === -1) return;
  const next = (pos + dir + sameCollege.length) % sameCollege.length;
  openBook(sameCollege[next].i);
}

function copyBookLink() {
  const url = location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url);
    flashMessage('Link copied');
  } else {
    flashMessage(url);
  }
}

function flashMessage(msg) {
  const flash = document.createElement('div');
  flash.className = 'flash-msg';
  flash.textContent = msg;
  document.body.appendChild(flash);
  setTimeout(() => flash.classList.add('show'), 10);
  setTimeout(() => {
    flash.classList.remove('show');
    setTimeout(() => flash.remove(), 300);
  }, 1800);
}


// ─── SEARCH ───────────────────────────────────────────────────

let searchDebounceTimer = null;

function openSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  setTimeout(() => {
    document.getElementById('search-input')?.focus();
  }, 50);
  doSearch('');
}

function closeSearch() {
  const overlay = document.getElementById('search-overlay');
  if (!overlay) return;
  overlay.classList.remove('active');
}

function onSearchInput(e) {
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => doSearch(e.target.value), 130);
}

function doSearch(query) {
  const q = String(query).toLowerCase().trim();
  const qF = fold(query);
  const tokens = queryTokens(qF);
  const results = document.getElementById('search-results');
  if (!results) return;

  const filterEl = document.querySelector('.search-filter.active');
  const collegeFilter = filterEl ? filterEl.dataset.college : 'all';

  const ix = searchIndex();
  let matches = [];
  let approximate = false;

  const passesFilter = (b) =>
    (!b.restricted || State.vaultUnlocked) &&
    (collegeFilter === 'all' || b.college === collegeFilter);

  for (let k = 0; k < ix.length; k++) {
    const e = ix[k];
    const b = LIBRARY.books[e.idx];
    if (!passesFilter(b)) continue;

    if (!qF) { matches.push({ book: b, idx: e.idx, score: 1, snippet: null }); continue; }

    const { score, snippet } = scoreEntry(e, qF, tokens);
    if (score > 0) matches.push({ book: b, idx: e.idx, score, snippet });
  }

  // Safety net: if nothing matched, tolerate a single typo against
  // title/author words so "korranburg" still finds "Korranberg".
  if (qF && matches.length === 0 && tokens.length) {
    for (let k = 0; k < ix.length; k++) {
      const e = ix[k];
      const b = LIBRARY.books[e.idx];
      if (!passesFilter(b)) continue;
      let score = 0;
      for (const w of tokens) {
        for (const tw of e.titleSet) { if (withinEdit1(w, tw)) { score += 8; break; } }
        for (const aw of e.authorSet) { if (withinEdit1(w, aw)) { score += 3; break; } }
      }
      if (score > 0) matches.push({ book: b, idx: e.idx, score, snippet: null });
    }
    if (matches.length) approximate = true;
  }

  matches.sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    results.innerHTML = `<p class="search-empty">${q ? 'No results match your query.' : 'No volumes available.'}</p>`;
    return;
  }

  results.innerHTML = `
    <p class="search-count">${matches.length} ${matches.length === 1 ? 'result' : 'results'}${approximate ? ' · approximate matches' : ''}${matches.length > 500 ? ' (showing first 500)' : ''}</p>
  ` + matches.slice(0, 500).map(({ book, idx, snippet }) => {
    const college = getCollege(book.college);
    return `
      <button class="search-result ${book.restricted ? 'restricted' : ''} ${book.type === 'dispatch' ? 'dispatch' : ''}"
              onclick="openBook(${idx}); closeSearch();"
              style="--col-color: ${college.stoneHex}">
        <div class="result-mark"></div>
        <div class="result-body">
          <p class="result-title">
            ${highlightQuery(escapeHtml(book.title), q)}
            ${book.restricted ? '<span class="result-tag tag-sealed">⟐ Sealed</span>' : ''}
            ${book.type === 'dispatch' ? '<span class="result-tag tag-dispatch">Dispatch</span>' : ''}
          </p>
          <p class="result-meta">
            ${escapeHtml(book.author)} · ${escapeHtml(book.year)} · ${escapeHtml(college.name)}
          </p>
          ${snippet ? `<p class="result-snippet">${highlightQuery(escapeHtml(snippet), q)}</p>` : ''}
        </div>
      </button>
    `;
  }).join('');
}

function extractSnippet(html, q) {
  // strip HTML tags for snippet display
  const text = String(html).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  const lc = text.toLowerCase();
  const idx = lc.indexOf(String(q).toLowerCase());
  if (idx === -1) return text.slice(0, 140) + '…';
  const start = Math.max(0, idx - 60);
  const end = Math.min(text.length, idx + q.length + 60);
  return (start > 0 ? '…' : '') + text.slice(start, end) + (end < text.length ? '…' : '');
}

function highlightQuery(htmlEscaped, q) {
  if (!q) return htmlEscaped;
  const esc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const seen = new Set();
  const parts = [];
  for (const term of [q, ...q.split(/\s+/)]) {
    if (!term || term.length < 2) continue;
    const key = term.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    const e = esc(term);
    if (e) parts.push(e);
  }
  if (!parts.length) return htmlEscaped;
  parts.sort((a, b) => b.length - a.length); // longest first so the full phrase wins
  try {
    return htmlEscaped.replace(new RegExp('(' + parts.join('|') + ')', 'gi'), m => `<mark>${m}</mark>`);
  } catch (e) {
    return htmlEscaped;
  }
}

function setSearchFilter(collegeId) {
  document.querySelectorAll('.search-filter').forEach(el => {
    el.classList.toggle('active', el.dataset.college === collegeId);
  });
  doSearch(document.getElementById('search-input').value);
}


// ─── VAULT ────────────────────────────────────────────────────

function openVault() {
  const overlay = document.getElementById('vault-overlay');
  if (!overlay) return;
  overlay.classList.add('active');
  if (State.vaultUnlocked) {
    document.getElementById('vault-prompt-area').style.display = 'none';
    document.getElementById('vault-unlocked-area').style.display = 'block';
  } else {
    document.getElementById('vault-prompt-area').style.display = 'block';
    document.getElementById('vault-unlocked-area').style.display = 'none';
    setTimeout(() => document.getElementById('vault-input')?.focus(), 50);
  }
}

function closeVault() {
  document.getElementById('vault-overlay')?.classList.remove('active');
}

function attemptVault() {
  const input = document.getElementById('vault-input').value.trim();
  const norm = s => String(s).toLowerCase().replace(/[.,!?;]/g, '').trim();
  if (norm(input) === norm(VAULT_PASSPHRASE)) {
    State.vaultUnlocked = true;
    document.getElementById('vault-prompt-area').style.display = 'none';
    document.getElementById('vault-unlocked-area').style.display = 'block';
    flashMessage('The Vault opens.');
    // refresh current scene
    if (State.scene === 'cell' && State.stone && State.stonePlaced) {
      materializeAlcoves(State.stone);
    }
  } else {
    const err = document.getElementById('vault-error');
    if (err) err.classList.add('show');
    setTimeout(() => err?.classList.remove('show'), 3000);
  }
}

function handleVaultKey(e) {
  if (e.key === 'Enter') attemptVault();
}


// ─── ROUTING ──────────────────────────────────────────────────

function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);

  if (parts.length === 0 || parts[0] === 'desk') {
    State.scene = 'desk';
    renderDesk();
    return;
  }

  if (parts[0] === 'cell' && parts[1]) {
    State.scene = 'cell';
    State.stone = parts[1];
    renderCell(parts[1]);
    return;
  }

  if (parts[0] === 'book' && parts[1] && parts[2]) {
    const idx = findBookBySlug(parts[1], parts[2]);
    if (idx === -1) {
      // book not found, return to desk
      location.hash = '#/desk';
      return;
    }
    State.currentBook = idx;
    State.stone = parts[1];
    renderBook(idx);
    return;
  }

  // fallback
  location.hash = '#/desk';
}

function returnToDesk() {
  State.intent = null;
  State.stone = null;
  State.stonePlaced = false;
  State.alcoves = [];
  State.alcoveLabel = null;
  State.alcoveScold = null;
  location.hash = '#/desk';
}


// ─── BOOT ─────────────────────────────────────────────────────

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', () => {
  // wire up search modal
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', onSearchInput);
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSearch();
    });
  }
  document.querySelectorAll('.search-filter').forEach(el => {
    el.addEventListener('click', () => setSearchFilter(el.dataset.college));
  });
  // global keys
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const vault = document.getElementById('vault-overlay');
      const search = document.getElementById('search-overlay');
      if (vault?.classList.contains('active')) { closeVault(); return; }
      if (search?.classList.contains('active')) { closeSearch(); return; }
    }
    if ((e.key === 'f' || e.key === '/') && State.scene !== 'reading' &&
        document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      openSearch();
    }
  });

  // initial route
  route();

  console.log(`Library of Korranberg — ${LIBRARY.books.length} volumes catalogued.`);
});

// expose for inline handlers
window.openBook = openBook;
window.closeBook = closeBook;
window.openSearch = openSearch;
window.closeSearch = closeSearch;
window.openVault = openVault;
window.closeVault = closeVault;
window.attemptVault = attemptVault;
window.handleVaultKey = handleVaultKey;
window.adjacentBook = adjacentBook;
window.returnToDesk = returnToDesk;
window.copyBookLink = copyBookLink;
window.makeClerkFallback = makeClerkFallback;

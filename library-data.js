// ============================================================
// THE LIBRARY OF KORRANBERG — DATA
// ============================================================
//
// This file defines the eight canon colleges, the catalog stones,
// the clerk's dialogue, the Trust's marginalia, the vault passphrase,
// and the library's holdings.
//
// The engine in library-app.js reads this file but does not modify
// it. Edit this file to add books or adjust institutional voice.
// ============================================================


// ─── COLLEGES ────────────────────────────────────────────────

const COLLEGES = [
  { id: 'soladas',     name: 'Soladas',          tagline: 'The College of History',                 stone: 'amber',     stoneHex: '#c9892c', desc: "The long record of nations, dynasties, and the wars that ended them. Soladas keeps the past intact — including the parts other colleges would prefer were forgotten.",                                                                                          sparse: false },
  { id: 'aureon',      name: "Aureon's Holt",    tagline: 'The College of Law and Oratory',         stone: 'sapphire',  stoneHex: '#3a6fb5', desc: "Statute, precedent, contract, and the art of speaking so that one is believed. Aureon's Holt argues every case, including those for which no client has yet appeared.",                                                                                  sparse: false },
  { id: 'blackdragon', name: 'Blackdragon',      tagline: 'The College of Alchemy',                 stone: 'obsidian',  stoneHex: '#2a3a2a', desc: "Reagent, distillation, transmutation, and the slow patient work of changing one substance into another without the substance noticing. Named for a dragon who, the apocrypha insist, taught the first alchemist by example.",                            sparse: false },
  { id: 'drystone',    name: 'Drystone',         tagline: 'The College of Engineering',             stone: 'slate',     stoneHex: '#7a8593', desc: "Lever, conduit, schema, and the binding of force into structures that should not stand. Drystone's doyens teach that any wall sufficiently old becomes magic, and any magic sufficiently understood becomes a wall.",                                  sparse: false },
  { id: 'lyrris',      name: 'Lyrris',           tagline: 'The College of Art and Literature',      stone: 'pearl',     stoneHex: '#e8e2d4', desc: "Verse, drama, criticism, and the discipline of arranging words so that they outlive the arranger. The Lyrris stacks are presently undergoing reorganization.",                                                                                          sparse: true  },
  { id: 'morridan',    name: 'Morridan',         tagline: 'The College of Mathematics',             stone: 'starlight', stoneHex: '#cfd6e0', desc: "Number, proportion, geometry, the orbits of the moons, and the maps that follow from them. Morridan considers cartography a subdiscipline. The cartographers consider this insulting.",                                                              sparse: false },
  { id: 'balinor',     name: "Balinor's Horn",   tagline: 'The College of Natural Sciences',        stone: 'forest',    stoneHex: '#2d4a2d', desc: "Beast, herb, anatomy, and the magebreeders' long conversation with the things they have made. Balinor's Horn does not officially recognize that some of those things are no longer beasts.",                                                          sparse: false },
  { id: 'tabernacle',  name: 'The Tabernacle',   tagline: 'The College of Religion and Philosophy', stone: 'silver',    stoneHex: '#d8d8d8', desc: "Faith, ethics, planar theory, and the long arguments about the Prophecy that began before the founding and have not concluded. The Tabernacle holds the most prophecy in the building. It also holds the most caution about it.",                       sparse: false }
];


// ─── PELLIC, THE CATALOG CLERK ───────────────────────────────
//
// Pellic is a gnome of indeterminate middle age. He has worked
// the catalog desk for forty-one years. He does not remember every
// scholar who passes through. He does remember every scholar who
// has wasted his time.

const PELLIC = {
  greetings: [
    "Pellic. Catalog desk. State your subject.",
    "You're at the desk. I'm Pellic. What are you researching?",
    "Subject of inquiry. Briefly.",
    "Pellic, second clerk of the catalog. Tell me what you want.",
    "What's the subject? I have other scholars waiting.",
    "Topic. One college, please. Don't make me guess.",
    "You've come to the desk. State your business.",
    "Inquiry?"
  ],
  prompts: [
    "Pick a college. The stone is keyed to the discipline.",
    "Eight stones, eight colleges. Choose the one whose archivists hold what you need.",
    "If you don't know which college, ask. I'd rather direct you than process a wrong-stone request.",
    "The stones are not interchangeable. Choose carefully.",
    "Each stone is keyed. Take the one whose college keeps your subject."
  ],
  handoff: [
    "Take the stone. Place it on the pedestal in your study cell. The shelves will come.",
    "Stone goes on the pedestal. Shelves arrive. Remove the stone, the shelves leave. Don't lose the stone.",
    "Place it on the pedestal. The catalog will respond.",
    "The pedestal is in the cell behind you. Stone on the pedestal. Catalog does the rest.",
    "Take it. Pedestal. Study cell. Try not to break anything."
  ],
  trustWarnings: [
    "You've requested sealed material. The Trust has logged the inquiry. This is normal. Continue as you wish.",
    "Sealed. The Trust knows you asked. It does not know why. It rarely needs to.",
    "That volume is sealed. The catalog will retrieve it. Your name is now in the standing record.",
    "Sealed material. The inquiry is logged. There is no penalty. There is also no forgetting."
  ],
  trustEscalation: [
    "Pellic, again. You've requested sealed material three times this session. The Trust has asked me to ask you what you're looking for. I'm asking. You may decline to answer.",
    "Three sealed inquiries. I'm required to note your apparent line of research. Are you working under a doyen's authorization, or on your own initiative?",
    "Three sealed requests. The Trust is curious. So am I, but only professionally. Continue if you wish."
  ],
  visitingScholarLine: "You are entered as a visiting scholar of the Library. You have been granted four hours of stack time.",
  lyrrisNote: "The Lyrris stacks are presently undergoing reorganization. Most of the public catalog is sealed to access. Return next quarter."
};


// ─── THE TRUST ───────────────────────────────────────────────

const TRUST_NOTES = [
  "Your inquiry has been entered in the standing record. The Trust thanks you for your contribution to the catalog.",
  "This volume is held under standing review. Your access has been logged. No further action is required of you.",
  "The Trust acknowledges your interest. Continue.",
  "Inquiry logged. The catalog has served you. The record has served the Trust.",
  "Your name has been entered against this volume. This is a clerical matter. It is also not."
];


// ─── ARCHIVIST MARGINALIA (per-college mismatch friction) ─────

const ARCHIVIST_MARGINALIA = {
  soladas: [
    "Soladas notes that this material is properly historical. The stone you used is not. The retrieval has been honored. The error has been recorded.",
    "The archivists of Soladas have cross-filed this request under 'misdirected.' The result is correct. The route was not."
  ],
  aureon: [
    "Aureon's Holt observes that questions of law are ill-served by the wrong stone. The volumes are retrieved. The principle is offended.",
    "The Holt's archivists wish it noted that jurisprudence is not a subset of any other discipline, regardless of which stone was offered."
  ],
  blackdragon: [
    "Blackdragon's archivists have processed this request despite the irregular stone. The materials are alchemical. The procedure was not.",
    "The college reminds the researcher that alchemical work is keyed to its own stone for reasons that are not arbitrary."
  ],
  drystone: [
    "Drystone has retrieved the requested engineering materials. The doyens note that they would prefer their own stone be used in future. They will continue to note this.",
    "The college observes that artifice is a discipline. Discipline includes choosing the correct stone."
  ],
  lyrris: [
    "Lyrris has fulfilled the request. The stone was wrong. The work survives the indignity.",
    "The college of art and literature accepts that scholars are sometimes careless. It declines to accept this as a precedent."
  ],
  morridan: [
    "Morridan's archivists have resolved the request despite the categorical error. Mathematics is exact. Stone-selection is not, in the present researcher's case.",
    "The college notes that astronomy, geometry, and cartography are all Morridan domains. The stone offered was none of these."
  ],
  balinor: [
    "Balinor's Horn has retrieved the natural-sciences materials. The college observes that beasts and biology have their own stone for reasons evolution would have appreciated.",
    "The Horn's archivists have processed the request and filed a polite objection. The objection is not the first."
  ],
  tabernacle: [
    "The Tabernacle has retrieved the requested theological and philosophical materials. The college reminds the researcher that questions of soul and substance are not interchangeable with other disciplines.",
    "The Tabernacle observes that the wrong stone was used for a question the right stone was made for."
  ]
};


// ─── CODEX VAULT PASSPHRASE ──────────────────────────────────

const VAULT_PASSPHRASE = "The axis turns, but the record remains.";


// ─── BOOKS ────────────────────────────────────────────────────
//
// Each book has:
//   title, author, college, year, restricted, type, content
//
// type:
//   "book"     → parchment styling, drop-cap, marginalia
//   "dispatch" → typed-report styling, dated header, redaction blocks
//
// college: one of the eight canon IDs.
//
// content is a function returning HTML. Use <p>, <h3>, <h4>,
// <strong>, <em>, and <p class="marginalia"> for sidebar notes.

const LIBRARY = { books: [] };


// ─── HISTORY (Soladas) ────────────────────────────────────────

LIBRARY.books.push({
  title: "The Fall of Galifar: A Chronicle of Succession",
  author: "Professor Saan ir'Alden",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>When King Jarot ir'Wynarn breathed his last in 894 YK, the kingdom he had spent a lifetime strengthening was already fractured beyond repair. His eldest, Princess Mishann of Cyre, held the legitimate claim to the throne—a claim Jarot himself affirmed on his deathbed, bidding Prince Wrogar of Aundair to honor his daughter's succession. It was, by all accounts of those present at Thronehold, a clear and unmistakable decree.</p>
<p>Yet clarity of succession means nothing when ambition fills the hearts of princes. Prince Thalin of Thrane declared himself guided by visions of the Silver Flame, claiming divine mandate superseded mortal tradition. Prince Kaius of Karrnath dreamed of a military empire, with Rekkenmark's disciplined legions marching under a single iron crown. And Princess Wroann of Breland—perhaps most dangerously of all—wrapped her rebellion in the language of democracy, arguing that no single heir should rule without the consent of the governed.</p>
<p class="marginalia">Editor's note: The original manuscript contained a passage here describing Wrogar's private correspondence with Mishann, in which he warned her of Thalin's duplicity. The letters were stolen from the Morgrave archives in 993 YK and have not been recovered. — Prof. Hass ir'Tain</p>
<p>Only Wrogar stood by Mishann. When she arrived at Thronehold with her retinue, she found armed guards barring the gate—soldiers wearing the colors of three nations. Unarmed and betrayed, Mishann returned to Metrol and declared herself Queen of Galifar. In Flamekeep, Fairhaven, and Korth, her siblings did the same.</p>
<p>Thus began the Last War—a conflict that would endure for one hundred and two years, consume millions of lives, birth new nations, and ultimately end not in victory, but in the inexplicable horror of the Mourning.</p>
<p>The first major engagement occurred on the western shore of Scions Sound, south of Flamekeep. Thranian templars clashed with Aundairian cavalry for three days—neither side gained meaningful ground. It was a portent of a century of grinding, inconclusive warfare.</p>
<p>By 910 YK, famine and plague had ravaged Karrnath. King Kaius I, desperate, turned to the Blood of Vol. Their priests brought not only healing magic but the art of raising the dead as soldiers. The Karrnathi undead became a grim symbol of the war's moral decay: nations would do anything, sacrifice any principle, to survive.</p>`
});

LIBRARY.books.push({
  title: "The Day of Mourning: Collected Witness Accounts",
  author: "Archivist Dyan Telavir",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>On the 20th of Olarune, 994 YK, the nation of Cyre ceased to exist. What replaced it has no name any scholar will commit to. We call it the Mournland—a wound in the body of Khorvaire that refuses to heal, refuses even to be understood.</p>
<p>I have spent three years collecting testimony from those who witnessed the Mourning from beyond its borders. What follows are their words, preserved exactly as spoken.</p>
<p><em>Corporal Jessen Haldren, 4th Brelish Infantry, stationed at Sterngate:</em></p>
<p>"We saw it at midday. The sky went grey—not cloudy, grey, like all the color had been squeezed out of it. Then there was this wall. A wall of mist, dead white, rising from the ground to as high as I could see. It moved fast—faster than a horse. And the sound. People say it was silent, but they're wrong. There was a sound. It was every sound I'd ever heard, all at once, for about three heartbeats. Then nothing."</p>
<p><em>Captain Yara d'Deneith, House Deneith mercenary company:</em></p>
<p>"We'd been pulling back for two days. I turned south and the horizon was gone. Just gone. Replaced by this wall of nothing. I gave the order to run. We ran for six hours straight. Some of us made it."</p>
<p class="marginalia">Scholar's note: To this day, no one has determined the cause of the Mourning. Theories range from a Cannith superweapon misfiring, to a convergence with Mabar, to the release of an imprisoned Overlord. The truth remains the most dangerous question in Khorvaire. — D.T.</p>
<p>The Mournland persists. Within its borders, healing magic fails. The dead do not decay. Living spells roam the blasted landscape. The Lord of Blades has established a domain in the ruins of Making. And at the edges, refugees from Cyre still gather—Cyrans without a country, carrying the memory of a nation that was murdered in a single afternoon.</p>`
});

LIBRARY.books.push({
  title: "The Dhakaani Empire: Glory Before the Long Silence",
  author: "Dabrak Kaal'dar, Kech Volaar lorekeeper",
  college: "soladas",
  year: "translated 994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Before human tongues shaped words in Khorvaire, before elf ships touched its eastern shores, the goblinoids ruled. Ours was the Dhakaani Empire—the greatest civilization this continent has ever known, though the younger races refuse to speak its name with the respect it deserves.</p>
<p>For nearly ten thousand years, the dar—the goblin, hobgoblin, and bugbear peoples bound by muut and atcha, duty and honor—built an empire that stretched from the Ironroot Mountains to the Thunder Sea. Our roads were paved with hexagonal stones fitted so precisely they required no mortar. Our dirge singers held the memories of ten thousand generations in their chants.</p>
<p>The sewers beneath what humans call Sharn—what we called Duur'shaarat, the Blade-City—still function today, fifteen thousand years after Dhakaani hands laid them. The humans built their city on our bones and never thought to say thank you.</p>
<p>Then the Daelkyr came. Nine thousand years ago, the Lords of Xoriat opened gates into our world and poured through their aberrant creations. Dolgaunts. Dolgrims. Mind flayers. Beholders. We fought them for centuries. The duur'kala sang battle hymns that shattered aberrant flesh. It was not enough.</p>
<p>When the Gatekeepers—the orc druids—finally sealed Xoriat, the Empire was already broken. The clans retreated underground. The Long Silence began. Above us, human settlers carved kingdoms from our ruins. Below, the Keepers of the Past sang our history forward through the darkness.</p>
<p class="marginalia">The Dhakaani daashor are the finest weaponsmiths on Khorvaire. Their traditions blend mundane skill and transmutation to create remarkable alloys, including adamantine, mithral, and byeshk. Their skill at metallurgy outstrips even House Cannith. — Translator's addendum</p>
<p>That day of return approaches.</p>`
});

LIBRARY.books.push({
  title: "The Silver Flame: Faith, Fury, and the Binding of Bel Shalor",
  author: "Cardinal Krozen's Private Papers",
  college: "tabernacle",
  year: "confiscated 995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Church of the Silver Flame is built upon a lie that is also the truth. Seven hundred years ago, a paladin named Tira Miron—guided by the last couatl—gave her life to reinforce the prison of Bel Shalor, the Shadow in the Flame. Her sacrifice merged her soul with the Silver Flame itself, creating a conduit through which mortal faith could power the bonds holding thirty fiendish Overlords in Khyber.</p>
<p>This is the truth the Church proclaims. What it does not proclaim is that the Flame is not simply good. The Flame is a prison. Its light is the light of binding. Every prayer feeds not enlightenment but the chains holding reality's worst nightmares in their cells.</p>
<p>Remove the Flame, and the Overlords walk free. Rak Tulkhesh, the Rage of War. Sul Khatesh, the Keeper of Secrets. Katashka, the Gatekeeper. Eldrantulku, the Oathbreaker, who plants treachery in the hearts of kings.</p>
<p>The Silver Crusade was our greatest shame. In 832 YK, Keeper Jolan Sol declared holy war against lycanthropy. What began as legitimate response became genocide. Shifters—innocents who merely carried the echo of lycanthropic heritage—were hunted alongside true werewolves. Thousands died. Communities in the Eldeen Reaches were burned to ash.</p>
<p>We tell ourselves it was necessary. Perhaps it was. But the blood of innocents stains our altars, and no amount of silver light can wash it clean.</p>`
});

LIBRARY.books.push({
  title: "The War of the Mark: When Blood Turned Against Blood",
  author: "Lhara Sivis, House Sivis Historian",
  college: "soladas",
  year: "989 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Fifteen centuries ago, the dragonmarked families faced a crisis of their own making. The early houses had intermarried freely—Vowns with Lyrrimans, Harns with Jurans—and from these unions came children bearing not the recognized marks of their parents, but twisted, unpredictable aberrant dragonmarks. Marks that burned. Marks that killed. Marks that stripped their bearers of any connection to the true marks.</p>
<p>The response was neither measured nor merciful.</p>
<p>My own house—House Sivis, the Lyrrimans of Zilargo—bears particular responsibility. Our propagandists spread terrifying tales of aberrant mark bearers across Khorvaire. Some tales were true: the Lady of the Plague killed thousands with her aberrant power. But many were fabricated or exaggerated, designed to convince the populace that every aberrant bearer was a monster.</p>
<p>House Deneith provided the troops. House Cannith provided the weapons. Together they hunted aberrant mark bearers across the continent with a thoroughness that should have shamed us all. Families were torn apart. Children were killed for the marks they bore through no fault of their own.</p>
<p>Halas Tarkanan—himself a Deneith heir bearing an aberrant mark—rallied the hunted into a desperate resistance. He fought with a ferocity born of betrayal, and his last stand in what is now the Depths of Sharn shattered the very foundations of the city. In death, he became a legend. The criminal organization that bears his name—House Tarkanan—carries his defiance forward to this day.</p>
<p class="marginalia">The War of the Mark ended with the formation of the Twelve and a strict ban on inter-house marriages. We purchased unity with blood, and we have maintained it with silence. This account may never be published. — L.S.</p>
<p>The war's legacy persists in the Korth Edicts, negotiated when Galifar rose to power: houses cannot maintain standing armies, cannot marry into aristocracy, cannot hold noble titles or land grants. These restrictions held for a thousand years. After the Last War, their enforcement grows ever more questionable.</p>`
});

LIBRARY.books.push({
  title: "The Purge of House Vol: Fire, Blood, and the Death of Death",
  author: "Anonymous (recovered from sealed Aerenal archives)",
  college: "soladas",
  year: "unknown, translated 995 YK",
  restricted: true,
  type: "book",
  content: () => `<p>What I set down here has been forbidden by decree of the Sibling Kings for twenty-six centuries. That I write it at all is an act of defiance that would cost me everything. But history silenced is history weaponized, and the truth of what happened to the line of Vol must not die with the last elf who remembers.</p>
<p>The line of Vol was one of the great families of Aerenal, leaders of the Mabaran faction—those who pursued immortality through negative energy rather than the positive-energy devotion of the Undying Court. For thousands of years, the two factions coexisted in uneasy tension. The Undying Court claimed that all Mabaran undead consumed the life-force of Eberron itself. The Vol faction called this a ridiculous political ploy.</p>
<p>Then the Mark of Death appeared among the Vol bloodline, approximately thirty-two centuries ago—one of the first dragonmarks to manifest, alongside the Mark of Shadow. This cemented the Vol's position. They continued their research, pursuing true immortality. This quest led them down paths that would prove catastrophic: an alliance with a faction of dragons from Argonnessen.</p>
<p>These dragons—led by one known only as the Emerald Claw—were concerned that dragonmarks had appeared on "lesser races" and wanted to see if a mark could manifest on a dragon. The result was the half-dragon child Erandis Vol, born to Minara Vol and the Emerald Claw. Named after her grandmother, Erandis bore something unprecedented: an apex dragonmark—beyond Siberys level, the ultimate distillation of the Mark of Death.</p>
<p>She was a living eldritch machine. And this is what triggered the destruction of her line.</p>
<p class="marginalia">The identity of who betrayed Erandis's existence to the Undying Court remains one of the great unsolved mysteries of Aerenal. Whoever they were, they doomed an entire bloodline. — Translator</p>
<p>The Sibling Kings declared that the blood of Vol must be completely destroyed, since even a drop could destroy all living things. Forces from Argonnessen joined with the Undying Court. The red dragon Avothirax personally led armies to Minara's location. Every living creature that carried the Mark of Death was killed. Every elf tied to Vol bloodlines was exterminated.</p>`
});

// ─── LAW & ORATORY (Aureon's Holt) ────────────────────────────

LIBRARY.books.push({
  title: "The Treaty of Thronehold: Annotated",
  author: "Kessler ir'Tain, Civil Magistrate of Sigilstar (ret.)",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Treaty of Thronehold was signed on the 11th of Aryth, 996 YK, in the city of Thronehold, on the island that was once the seat of the unified Kingdom of Galifar and is now the seat of nothing. Five nations signed: Aundair, Breland, Karrnath, Thrane, and the unaffiliated remainder of Cyre. The document is fourteen articles long. It ended the Last War. It also created seven new wars that have not yet started.</p>
<p>I served as a junior legal observer to the Brelish delegation. I have spent the years since cataloging what the treaty actually says, what people believe it says, and the substantial gap between the two.</p>
<h3>Article VIII: Creation Forges</h3>
<p>The article that has done the least work, in proportion to its importance.</p>
<p>All creation forges within the territory of any signatory nation are to be destroyed within one year of the date of signing. No new creation forges are to be constructed. No new warforged are to be manufactured. Verification of compliance is the responsibility of the host nation, with right of inspection extended to all signatory nations on request.</p>
<p>I will note three things about Article VIII. The first: <em>verification of compliance is the responsibility of the host nation</em>. There is no neutral inspector. Each nation verifies itself. The second: <em>right of inspection extended to all signatory nations on request</em>. No request has been formally lodged. The diplomatic cost is judged to exceed the benefit. The third: the article does not define <em>warforged</em>. A construct shaped like a sparrow falls into a definitional gray area the treaty was never asked to resolve.</p>
<p class="marginalia">The treaty stopped the killing. This is no small thing. A hundred years and two of war ended in a single afternoon. The cost of that afternoon was a document full of fictions everyone agreed not to challenge. — K.T.</p>`
});

LIBRARY.books.push({
  title: "Of Promises Kept and Broken: The Ethics of Oaths in a Plural Society",
  author: "Mediator Vass d'Sivis, Korranberg",
  college: "aureon",
  year: "988 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I am a member of House Sivis. My profession is mediation. I have spent thirty-four years standing between people who have made promises to each other and disagree about what the promises required. This book is what I have learned about promises.</p>
<h3>What an Oath Is</h3>
<p>An oath is a verbal act that creates an obligation. The act is performative, in the technical sense: the saying of it does the binding. An oath is not a description of an obligation that exists independently. The oath <em>is</em> the obligation, brought into being by the saying.</p>
<p>This sounds simple. It is the source of most of the disputes I have ever mediated.</p>
<p>The simplicity collapses the moment one asks: <em>which</em> obligation has the saying brought into being? The words of an oath are always interpretable. The interpretations are always plural. The parties to the oath always understand it differently, even when they sincerely believe they understand it the same. My profession exists because of this gap.</p>
<h3>The Limits of Oath</h3>
<p>Not every oath should be enforced. There are oaths that should never have been sworn, and there are oaths whose enforcement would do more harm than the oath was ever intended to prevent. A mediator's duty, in such cases, is to identify the oath as defective and to recommend its dissolution. The dissolution is not a violation of the oath. The dissolution is the recognition that the oath has become an instrument of harm rather than the protection it was sworn to be.</p>
<p>The Treaty of Thronehold may, in time, be such an oath. It was sworn to end a war. It is now becoming an instrument by which the world preserves arrangements that benefit the powerful at the cost of the just. I do not call for its repudiation. I do call for its renegotiation.</p>
<p class="marginalia">An oath is not a stone. An oath is a commitment to keep the relationship the oath served. When the relationship has changed, the oath must be permitted to change with it, or the relationship will break and the oath will go with it. — V.S.</p>`
});

// ─── ALCHEMY (Blackdragon) ────────────────────────────────────

LIBRARY.books.push({
  title: "Salt, Silver, and Soot: Alchemical Reagents of the Common Markets",
  author: "Journeyman Alchemist P. S.",
  college: "blackdragon",
  year: "986 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This battered handbook lists cheap substitutes for rare reagents and the risks they bring. Not every apprentice can afford refined silver dust; not every ritual deserves it. The book's tone is blunt, almost cheerful, as it catalogs minor explosions and "temporary blindness" like weather.</p>
<p>It also contains a quiet philosophy: magic belongs to those who can pay for purity. Everyone else learns to bargain with impurities—and sometimes the impurities bargain back.</p>
<p class="marginalia">Grease stain covers a warning: "Never grind star-metal indoors."</p>`
});

LIBRARY.books.push({
  title: "The Aetheric Pulse: Measuring Spell Stress in Living Targets",
  author: "Healer-Arcane Scribe Jassi Lyrandar",
  college: "blackdragon",
  year: "992 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Every spell leaves a footprint in the body: a brief tightening of the breath, a shift in body heat, an invisible tremor along the nerves. This text proposes a controversial method for measuring that stress—using tuned crystals placed near major arteries to "hear" magic like a drumbeat.</p>
<p>Critics call it superstition. Practitioners call it a diagnostic miracle. The author includes case notes showing that repeated enchantments can cause lingering fatigue that looks, to the untrained eye, like ordinary grief.</p>
<p class="marginalia">Morgrave medical annex note: "Not approved for student clinics."</p>`
});

// ─── ENGINEERING & ARTIFICE (Drystone) ────────────────────────

LIBRARY.books.push({
  title: "On the Forging of Wills: A History of the Mark of Making",
  author: "Halric d'Cannith, Excoriated, Final Lecture at Wynarn University",
  college: "drystone",
  year: "987 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Mark of Making is the only dragonmark that does not describe what its bearer <em>does</em>. The Mark of Finding finds. The Mark of Storm calls storms. The Mark of Healing heals. The Mark of Making does not <em>make</em>—it permits the maker to make. This grammatical distinction has consumed the better part of my career and, depending on how this lecture is received, the remainder of it.</p>
<p>To bear the Mark of Making is to be granted a license. The Mark itself is a key turned in a lock that exists nowhere on this plane. What lies behind that lock is not power; it is <em>permission</em>. Permission to attune to creation forges. Permission to interface with constructs at a level no other house has ever replicated. Permission to read the schemata of objects that, by every law of arcane theory we possess, should not be readable.</p>
<h3>What the Forges Are</h3>
<p>I will say plainly what no member of the house in good standing will say publicly: the creation forges were not invented by Cannith. They were <em>discovered</em>. The first forge was found in a cavern beneath what is now Metrol, in chambers that predate any human civilization on Khorvaire. The forge was already there. It was already operable. What Cannith did was <em>learn how to turn it on</em>.</p>
<p>The Mark of Making is what permits the turning. This is the secret of our monopoly: we do not own the forges because we built them. We own them because we are the only species the forges will speak to.</p>
<p class="marginalia">Halric d'Cannith was excoriated from House Cannith one week after this lecture was delivered. His writings were collected and destroyed. This transcript survives because a student in the back row wrote shorthand. — K.V., Korranberg</p>`
});

LIBRARY.books.push({
  title: "Of Smaller Vessels: Docents Beyond the Colossi",
  author: "Provost Dannid ir'Lain, Department of Pre-Galifaran Studies, Morgrave University",
  college: "drystone",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The popular literature on docents focuses on the colossi. This is understandable—the colossi were dramatic and the colossi are gone. But docents have always existed at smaller scales, and the docents that interest scholars most are not the master cores of giant constructs. They are the small ones. The companions. The whisperers.</p>
<p>A standard docent is a sphere of approximately two inches in diameter, surface studded with dragonshard inclusions that pulse with a faint inner light. To the uninitiated, it appears to be an unusual piece of jewelry. Embedded in a warforged, it activates. The mechanism of activation is not understood. The result is that the docent communicates telepathically with its host and may speak through the host's voice.</p>
<h3>The Witness (WX-09)</h3>
<p>Recovered in 988 YK from a sealed chamber in Xen'drik. Does not speak. Does not communicate telepathically. Embedment produces no measurable effect on the host. The Witness is, by all behavioral measures, inert. And yet it is warm to the touch—warmer than the surrounding air, consistently, by approximately three degrees. We have measured this for six years. The temperature has not varied.</p>
<p>The Witness watches. We do not know what it is watching. We do not know what it is waiting for.</p>
<p class="marginalia">Provost ir'Lain has been formally censured by Morgrave's Board of Regents three times for the views expressed in this monograph. He continues to publish.</p>`
});

// ─── MATHEMATICS, ASTRONOMY, CARTOGRAPHY (Morridan) ───────────

LIBRARY.books.push({
  title: "The Thirteenth Silence: On Eberron's Missing Moon and the Stationary World Hypothesis",
  author: "Astromancer Pellion ir'Rhaan",
  college: "morridan",
  year: "671 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume was compiled over twenty seven years of comparative observation, translation, and archival recovery. Its purpose is to address a single anomaly that most cosmological traditions acknowledge and then quietly ignore. Eberron has twelve moons, each with a stable planar correspondence, and a long shadow of evidence that there was once a thirteenth.</p>
<p>From this, Pellion establishes his first principle. The moons are not merely symbols of the planes. They are regulators of planar influence. Each one acts as a stabilizing structure that limits when, where, and how its associated plane can exert pressure upon Eberron. Without them, planar interaction would be chaotic and likely catastrophic.</p>
<p>Through resonance modeling and comparative manifest zone analysis, Pellion argues that the absent moon was aligned with Dal Quor. He notes that Dal Quor's current isolation from Eberron is unique among the planes and requires active explanation rather than passive acceptance.</p>
<p>This leads into the core thesis of the book, the Stationary World Hypothesis. Pellion proposes that Eberron is not a naturally formed world but a constructed planar junction. In this model, the moons are not satellites but interface structures.</p>
<p class="marginalia">If Eberron is a station rather than a sanctuary, then its stability is not guaranteed. It is maintained. And anything that is maintained can, eventually, be altered, damaged, or decommissioned.</p>`
});

LIBRARY.books.push({
  title: "Maps That Lie: A Cartographer's Guide to Political Borders",
  author: "Cartographer Yolan Scribe",
  college: "morridan",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Every map is an argument. This guide compares official border charts from rival nations and highlights the "soft places" where ink replaces truth: disputed valleys, river bends that "move," villages renamed three times in a decade.</p>
<p>The author teaches readers to look for the quiet tells of propaganda: roads that mysteriously vanish near fortresses, forests drawn larger to imply abundance, and generous scale shifts that make an enemy seem farther away than they are.</p>
<p class="marginalia">Note: "If a map makes you feel proud, it's probably lying."</p>`
});

// ─── NATURAL SCIENCES (Balinor's Horn) ────────────────────────

LIBRARY.books.push({
  title: "Field Observations on Anomalous Vadalis Stock: A Naturalist's Compendium",
  author: "Tessen Aurel, naturalist, Eldeen Reaches",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>I am not a member of any dragonmarked house. I am not a scholar of magebreeding. I am a naturalist who has spent the better part of forty years walking the Eldeen Reaches, the Aundairian uplands, and the borderlands of the Towering Wood, cataloging what I find. In recent decades, I have found things that do not belong to the natural order I was trained to catalog.</p>
<h3>Specimen 24: The Patient Wolf</h3>
<p>Encountered: 988 YK, far western Eldeen Reaches.</p>
<p>A wolf, in form, size, and pelt indistinguishable from the gray wolves native to the region. The behavior was anomalous. The wolf followed me for eleven days through the wood, at a distance of approximately fifty paces, never closer and never farther. It did not threaten me. It did not flee from me. It simply walked when I walked, stopped when I stopped, and waited when I rested. On the eleventh evening, I sat by my campfire and spoke aloud to it, asking what it wanted. The wolf cocked its head. The wolf turned and walked away. I have not seen it since.</p>
<p class="marginalia">Tessen Aurel continues to walk the Eldeen Reaches in his late seventies and corresponds occasionally with the Library. He has refused, on multiple occasions, formal patronage from any institution.</p>`
});

LIBRARY.books.push({
  title: "Magebreeding: Incremental, Enhanced, and Innovative",
  author: "Breedmaster Regine d'Vadalis, Varna Outpost",
  college: "balinor",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Most people who hear the word "magebred" picture a horse that runs faster or a dog that bites harder. This is only the surface. House Vadalis categorizes its work into three distinct methodologies, each with its own techniques, risks, and commercial applications.</p>
<h3>Incremental Magebreeding</h3>
<p>This is the closest to mundane animal husbandry, albeit aided by the Mark of Handling and dragonshard focus items. Incremental breeding produces subtle variations in a species: a hen that lays larger eggs, a hound with a sharper nose, a horse that thrives in colder climates.</p>
<h3>Enhanced Magebreeding</h3>
<p>Enhanced breeding seeks to instill <em>supernatural</em> traits into a bloodline over multiple generations. The results are hereditary and significant: one ability score increased by 4, the others by 2. These animals are sold at double the price of their mundane counterparts and are typically <em>sterilized</em> before sale to prevent unauthorized breeding.</p>
<h3>Innovative Magebreeding</h3>
<p>The rarest and most dangerous category. Innovative magebreeding attempts to create entirely new species or to imbue existing creatures with dramatic supernatural characteristics. A confirmed modern example is the <strong>tressym</strong>, first produced only twenty-four years ago—winged cats with poison immunity and the ability to detect poisons.</p>
<p class="marginalia">Rumor: Enhanced animals die without special Vadalis supplements. Rumor also says Vadalis has death squads that hunt poachers. Both are probably just rumors. Probably.</p>`
});

// ─── RELIGION & PHILOSOPHY (Tabernacle) ───────────────────────

LIBRARY.books.push({
  title: "The Lords Who Sleep: A Bestiary of the Bound Rajahs",
  author: "Brother Vathis of the Order of the Silver Flame",
  college: "tabernacle",
  year: "983 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This bestiary catalogs the rakshasa rajahs, the immortal fiends who ruled Eberron in the age before mortal civilization and who were bound at the close of that age by the couatls of the Silver Flame. The bestiary is incomplete. It is necessarily incomplete. We do not know how many rajahs there are. We know how many we have names for.</p>
<h3>Sul Khatesh, the Keeper of Secrets</h3>
<p>Bound in the Cauldron of Sul Khatesh, in the Demon Wastes. Sul Khatesh's portfolio is forbidden knowledge—magic that should not be known, theories that should not be written, words of power that warp the speaker. She is the patron, often unwittingly, of arcane researchers who push past the boundaries of accepted theory and find that their breakthroughs come too easily.</p>
<p>Her release condition involves the proliferation of forbidden arcane knowledge among mortal scholars. Every secret that should not be known, once known by enough mortals, weakens her binding by a degree that cannot be measured but can be observed in the increased boldness of her servants.</p>
<p class="marginalia">Brother Vathis was found dead in his cell at the Cathedral of the Silver Flame in 984 YK, of natural causes, having declined to leave his quarters for the final eight years of his life.</p>`
});

LIBRARY.books.push({
  title: "On the Sovereignty of Made Things",
  author: "Lirien of Thaliost, lay philosopher",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The question is older than the warforged. The warforged have only made it loud.</p>
<p>It is this. <em>If a thing is made, can it be sovereign?</em> If a creature is brought into being for a purpose by hands not its own, can it ever escape that purpose? Can it speak with authority over its own life? Can it refuse the work it was made to do, and in refusing, be a self?</p>
<p>The traditional answer, given by every theological tradition I am aware of in Khorvaire, is yes. The Sovereign Host teaches that every soul is breathed into being by Aureon and is, from that breath onward, free. The Silver Flame teaches that every soul is a fragment of the divine fire and cannot be owned. The Path of Light teaches that the dreamer is the dream, and the dream is sovereign over its own meaning.</p>
<p>The traditional answer was not, however, formulated with the warforged in mind. The traditional answer assumed, without saying so, that <em>making</em> was something one species did to <em>objects</em>, not to <em>people</em>. The warforged broke that assumption. The traditional answer has not yet recovered.</p>
<p>I will offer my own intuition. A being designed to be unable to refuse is not <em>not a person</em>. It is a person in a cage. The cage is the moral object of concern. The being inside is owed our recognition, and the cage is owed our hatred.</p>
<p class="marginalia">Lirien of Thaliost is a former priest of the Silver Flame who left the priesthood after the Thronehold negotiations.</p>`
});

LIBRARY.books.push({
  title: "Letters from a Dying World: Reflections from a Mournland Survivor",
  author: "Yannik Aren, formerly of Metrol, currently of New Cyre",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I was outside Cyre on the day Cyre died. I returned a week later, with a recovery team, looking for my family. I did not find them. I have spent the four years since trying to understand what happened to me, to my city, to the place where I grew up.</p>
<h3>The Last Letter (996 YK, to whoever finds this)</h3>
<p>If you are reading this and you have lost someone in the Mourning, I will tell you what I have learned. The grief does not end. It changes form. The form it changes into is bearable, eventually, if you stop fighting it. The fighting is what makes it unbearable. The fighting is also natural and you cannot help doing it. You will fight for a while. Then you will stop. The stopping is not surrender. The stopping is the recognition that there is no fight, that the grief is not an enemy, that the grief is, in some way you will eventually accept, the shape your love has taken now that the loved one is gone.</p>
<p class="marginalia">The College of Thought has, with his consent, distributed copies to the major refugee centers across Khorvaire. The volume is, by an unscientific but apparently accurate consensus among those who work with Mournland survivors, the single most useful text in the literature of grief produced since the cataclysm.</p>`
});

LIBRARY.books.push({
  title: "On the Still Axis of All Turning Things",
  author: "Vytharax the Ash-Remembering (translated and annotated)",
  college: "tabernacle",
  year: "-917 YK; Common translation 823 YK",
  restricted: true,
  type: "book",
  content: () => `<p><em>[Translator's Preface]</em> This text is believed to be a partial translation of a draconic philosophical-prophetic treatise carved originally into dragonshards and stone tablets somewhere in Argonnessen. The original Draconic is dense, recursive, and frequently untranslatable.</p>
<p><em>[Draconic Fragment]</em> "Kessir vel'dar astryx. Thar ir'veth, thar ir'kess."<br/>
<em>[Common Translation]</em> "All motion has an axis. All change turns around a silence."</p>
<p>The opening sections argue that the Draconic Prophecy is not a story, nor a sequence, nor a fate, but a system of pressures that seeks equilibrium across impossible spans of time. Vytharax repeatedly rejects the idea that the Prophecy exists to preserve comfort, continuity, or any particular civilization. Instead, it exists to prevent the accumulation of impossible imbalance.</p>
<p>The central and most controversial section concerns what the translator renders as <strong>"the Null-Sign"</strong>—a force or pattern associated with erasure, endings, and necessary subtraction. In later marginal commentary, this is explicitly linked to what modern scholars would recognize as the <strong>Mark of Death</strong>, though Vytharax never uses any mortal terminology for it.</p>
<p><em>[Draconic Fragment]</em> "They will name it wound. They will name it heresy. They will name it ending. They will not name it necessity."</p>
<p class="marginalia">Several pages in later copies are deliberately scraped blank. The scrapes themselves are carefully preserved.</p>`
});

LIBRARY.books.push({
  title: "Returns from the Grey: Three Mournland Salvage Expedition Reports",
  author: "compiled by the Wayfinder Foundation, Korranberg Branch",
  college: "morridan",
  year: "997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>The Wayfinder Foundation has, since the formal close of hostilities, sponsored or co-sponsored eleven expeditions into the Mournland. Six returned. Three returned with documentation suitable for publication. Those three are reproduced here, in summary form.</p>
<h3>Expedition 996-A: The Glass Plateau Reconnaissance</h3>
<p><strong>Departed:</strong> 4 Eyre 996 YK, from Sterngate. <strong>Returned:</strong> 22 Eyre 996 YK, with eleven of twelve members. <strong>Objective:</strong> Geological survey of the vitrified region southwest of Making.</p>
<p>The Glass Plateau is a region of approximately two hundred square miles in which the soil, rock, and any organic matter present at the time of the Mourning have been fused into a translucent black glass. The plateau is navigable on foot but produces a steady high-pitched tone audible to all expedition members at all times. Three expedition members developed nosebleeds on the seventh day. The nosebleeds did not stop until the expedition crossed the Mournland border on return.</p>
<p>Embedded in the glass, at varying depths, the expedition observed the silhouettes of objects that had been present at the moment of the Mourning. Wagons. Tents. Livestock. Several human figures, frozen in attitudes of motion. The expedition's geomancer reported that the glass continues to record. New silhouettes appear, occasionally, of things that were not present when the survey began.</p>`
});

LIBRARY.books.push({
  title: "Field Notes on the Lord of Blades",
  author: "Captain Aldric Vorn, Brelish Reconnaissance, Mournland Frontier",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>The Lord of Blades is real. I have seen him. Several of my soldiers have seen him. Three of my soldiers have spoken with him and lived. This document is a compilation of our observations, intended for the use of any future Brelish commander tasked with patrolling the Mournland frontier.</p>
<h3>What He Believes</h3>
<p>The Lord of Blades believes that warforged are the next step in the development of sentient life on Eberron. He believes that the fleshborn species are obsolete, having reached the limits of their biological development, and that warforged are destined to inherit Khorvaire after the fleshborn are removed.</p>
<p>He does not advocate the immediate removal of the fleshborn. He believes the warforged are not yet ready. He believes the warforged must grow first—through recruitment of free warforged, through the unification of Mournland survivors, and (his words, reported by my third sergeant) <em>"through the means of our own production, when our oppressors have shown us how."</em></p>
<p class="marginalia">Captain Vorn was killed in a tavern brawl in Sterngate in 997 YK, three weeks after his transfer was approved. The Brelish military has classified the death as accidental.</p>`
});

LIBRARY.books.push({
  title: "The Library of Korranberg: A Fortress of Knowledge",
  author: "Loremaster Tessa ir'Korran, Senior Archivist",
  college: "soladas",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Library of Korranberg is not merely a repository of books. It is, as its founder Dorius Alyre ir'Korran intended three thousand years ago, a <em>fortress of knowledge</em>—one built not to keep invaders out, but to keep understanding in. Located in the city of Korranberg in Zilargo, it stands as the largest collection of general knowledge in all of Khorvaire, and perhaps the greatest university on the continent.</p>
<h3>Eight Colleges, One Purpose</h3>
<p>The Library maintains eight associated colleges, each dedicated to a discipline of study. Nobles from both royal lines and dragonmarked houses send their children to study here, and the institution's alumni network wields significant influence across the Five Nations.</p>
<h3>The Triumvirate's Birthplace</h3>
<p>What few outsiders realize is that the Triumvirate—the governing body that rules Zilargo from Trolanport—was originally instituted as a governing body <em>at</em> the Library of Korranberg. To this day, one of the three triumvirs is still chosen from Korranberg.</p>
<h3>The Codex Vault</h3>
<p>Within the library grounds stands the Codex Vault, Khorvaire's largest shrine to Aureon, the Sovereign of Law and Lore. House Sivis maintains its most ancient enclave adjacent to the library, and the headquarters of the <em>Korranberg Chronicle</em>—the newspaper shipped throughout the Five Nations—sits nearby.</p>
<p class="marginalia">Visitor's note: The gnomish librarians do not tolerate loud conversation. They do, however, reward clever questions.</p>`
});


// ─── DRAGONMARKED HOUSES (mixed colleges by content) ──────────

LIBRARY.books.push({
  title: "The Twelve: Cooperation and Conflict Among the Dragonmarked",
  author: "Council Scribe Verren d'Sivis",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Twelve is the council that binds the dragonmarked houses into a loose, lucrative, frequently dishonest cooperation. Its founding myth is gentler than its practice. It was created at Korth in the wake of the War of the Mark, ostensibly to coordinate house relations and adjudicate disputes between bloodlines. In practice, it was created to ensure that the houses never again turned on each other with the violence they had turned on the aberrant.</p>
<h3>What the Council Does</h3>
<p>The Twelve sets standards. It does not, technically, have authority to enforce them. It does, technically, have authority to expel a house from its membership, which would be catastrophic for any house that depends on the formal cooperation of others. The Twelve has never done this. The threat is sufficient.</p>
<p>It coordinates inter-house ventures: the lightning rail (Orien track, Cannith engineering, Sivis communications, Kundarak insurance). The airships (Lyrandar pilots, Cannith hulls, Zilargon enchantments). The university shared-faculty system. The mercenary contracts that route Deneith soldiers through Sivis-mediated terms.</p>
<p>It does not coordinate the things the houses keep secret from each other. There are many of these.</p>
<h3>The Thirteenth Chair</h3>
<p>The seat for House Phiarlan-Thuranni is, strictly speaking, two seats — but they have not both been filled simultaneously since the Shadow Schism in 972 YK. The chairs are present at every Council meeting. Both are usually empty. When one is occupied, the other is, by long-standing protocol, recused. Phiarlan and Thuranni do not sit at the same table. The Twelve has not asked them to.</p>
<p class="marginalia">Council Scribe Verren d'Sivis served the Twelve for thirty-one years before retiring to Korranberg. His memoirs are, by his own description, "a record of what was said, occasionally a record of what was meant, and almost never a record of what was decided."</p>`
});

LIBRARY.books.push({
  title: "House Cannith: The Forge That Broke",
  author: "Provost Marec ir'Tain, Wynarn University",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Cannith is the largest single supplier of manufactured goods on Khorvaire. House Cannith is also, since the Mourning, three houses pretending to be one. The pretense is not convincing.</p>
<h3>The Three Patriarchs</h3>
<p><strong>Merrix d'Cannith</strong>, son of the late Starrin, governs the Cannith South branch from Sharn. He is widely believed to be operating an unlicensed creation forge in the Cogs beneath the city. The Brelish Crown has not investigated. The Brelish Crown's investigators tend to be reassigned.</p>
<p><strong>Jorlanna d'Cannith</strong>, of Cannith West, governs from Fairhaven. She is the most politically connected of the three, with deep ties to Queen Aurala's court. She publicly supports the Treaty of Thronehold's prohibitions on creation forges. Privately, the available evidence suggests she has at least one operational, hidden in a manor outside Fairhaven.</p>
<p><strong>Zorlan d'Cannith</strong>, of Cannith East, governs from Korth. He is the most reactionary of the three and the least adaptive to the post-war world. His wing of the house officially employs no warforged and has formally lobbied for their reclassification as objects.</p>
<h3>Lord of Blades</h3>
<p>The Lord of Blades, who rules a faction of free warforged from the Mournland, is widely rumored to be a Cannith creation that survived its forge's destruction. Cannith publicly denies any connection. Privately, the three patriarchs have been observed to flinch when the name is spoken in their presence.</p>
<p class="marginalia">Provost ir'Tain has refused offers from all three Cannith branches to "consult" on his manuscript prior to publication. The manuscript was published in Korranberg rather than Wynarn for reasons he declines to elaborate.</p>`
});

LIBRARY.books.push({
  title: "House Deneith: Mercenary Code, Mercenary Conscience",
  author: "Sentinel Marshal (ret.) Kel d'Deneith",
  college: "aureon",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I served the house for forty-three years. I was a Sentinel Marshal for sixteen. I have killed men under contract, men in defense of contracts, and men whose contracts had expired without their knowledge. I retired honorably. I publish this against the explicit objection of my house.</p>
<h3>The Code</h3>
<p>House Deneith maintains, formally, a code that governs all contracts. The code has six tenets. They are taught to every guardian and every Blademark and every Sentinel from the day they begin training. They are: <em>fulfill the contract. Protect the client. Do not exceed the contract. Do not accept conflicting contracts. Do not engage civilians beyond contract scope. Do not betray a fellow Deneith employee in service to a client.</em></p>
<p>The code is taught. The code is honored. The code is also routinely set aside when a senior contract officer determines that doing so serves the house's broader interest. The setting-aside is not formally documented. It is communicated through tone, through assignment, through the absence of intervention when an irregularity occurs in the field.</p>
<h3>The Last War</h3>
<p>House Deneith profited enormously from the Last War. Every nation hired our Blademarks. Many nations hired Blademarks who fought against Blademarks hired by other nations. The house's policy was that the contracts were independent — that a Deneith mercenary fighting for Aundair against another Deneith mercenary fighting for Karrnath were not, properly speaking, in conflict, because both were honoring their separate obligations.</p>
<p>This policy is internally coherent. It is not externally defensible. We sold men to die against men we had also sold to die. We are paid in both directions for every battle. We did not stop. We will not stop, until someone makes us, and the only entities with the power to make us are the entities currently signing our contracts.</p>
<p class="marginalia">Marshal Kel was excoriated from House Deneith one month after publication. He lives, at last report, in a small house outside Korranberg. The house assigns no patrols to that road.</p>`
});

LIBRARY.books.push({
  title: "House Lyrandar: The Storm That Carries",
  author: "First Mate Esana d'Lyrandar",
  college: "drystone",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Mark of Storm permits its bearer to influence weather and, more importantly, to interface with the elemental bindings that drive Lyrandar airships and galleons. We do not, despite popular belief, <em>command</em> the elementals. We <em>negotiate</em>. The negotiation is what the mark makes possible.</p>
<h3>The Bindings</h3>
<p>An elemental airship is built around an elemental ring — a circular structure of khyber dragonshards, in which an air elemental has been bound by Zilargon enchanters under license from the Twelve. The elemental remains in the ring for the operational life of the vessel. This may be decades. It may be centuries. The elemental experiences the time however an elemental experiences time, which is a topic on which our scholars do not agree.</p>
<p>A Lyrandar pilot stands at the helm and places one hand on the binding-stone. The mark glows. The pilot speaks — not always aloud — to the elemental. The elemental, depending on its mood and the quality of the pilot's negotiation, propels the ship.</p>
<h3>The Storm Lords</h3>
<p>Some among us — the Storm Lords, named for their sometimes-overgrown egos — bear the Siberys Mark of Storm. With it they can call hurricanes from clear skies, raise water from a calm sea into a wave that scours a coastline, redirect the path of a storm by hours of focused work. The mark is rare. It is taught to be feared. The fear is, in my experience, well-placed. I have known three Storm Lords. Two are dead by their own hand. The third lives on a small island off Stormhome and does not speak to anyone, including her family.</p>
<p class="marginalia">First Mate Esana publishes under her own name with the formal permission of House Lyrandar's Council, an unusual concession granted in recognition of her service in the rescue of the airship Wind's Promise during the Mournland passage of 994 YK.</p>`
});

LIBRARY.books.push({
  title: "House Orien: The Steel Spine of the Continent",
  author: "Wayfinder Gallia d'Orien",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Before House Orien, a journey from Sharn to Korth required four weeks. After, two days. This is not a small change. This is the rearrangement of the world.</p>
<h3>The Lightning Rail</h3>
<p>The lightning rail is built on conductor stones — a network of standing stones imbued with elemental binding, set in pairs along the rail's length. A rail coach has no wheels. It floats above the conductor line, propelled by the resonance between its bound elementals and the stones beneath. A coach not on the line is inert. A coach on a damaged section is also inert. This is the rail's vulnerability and the source of its dependence on Cannith maintenance.</p>
<p>The rail is, to be plain, a partnership. House Orien holds the rights to operate. House Cannith manufactures the coaches and maintains the conductor stones. House Sivis runs the message stations along the line. House Kundarak insures the freight. House Deneith provides the security. The rail is a thing of the Twelve, not of any single house.</p>
<h3>Teleportation</h3>
<p>Among the heirs of House Orien who bear the Greater Mark, teleportation is possible. The destination must be a place the heir has personally seen. The distance is limited. The energy required is significant — most heirs can teleport once or twice a day, and a teleporting heir who has gone too far will arrive exhausted to the point of collapse. The Siberys-marked heirs can teleport farther, more often, with less cost. There are, at present, three such heirs alive in the house. The other houses know who they are. The locations are not published.</p>`
});

LIBRARY.books.push({
  title: "House Sivis: The Voice and the Witness",
  author: "Speaker Hass d'Sivis, Korranberg Enclave",
  college: "aureon",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Sivis is the smallest of the dragonmarked houses by membership. It is among the most powerful by reach. We are the gnomes who carry the Mark of Scribing, and what we do, in the simplest terms, is <em>witness</em>. We notarize. We translate. We carry messages between distant cities through arcane sending. We mediate disputes. We file the paperwork on which civilizations rest.</p>
<h3>Why a Sivis Notary Matters</h3>
<p>A document witnessed by a Sivis notary is, by inter-house and inter-national agreement, presumptively authentic. The presumption is rebuttable, but only by clear evidence of fraud. No major court on Khorvaire has ruled against a Sivis-witnessed document in living memory. This is not because we are infallible. It is because the cost of overturning the presumption — the implication that any Sivis witness, anywhere, on any document, might be questioned — is one no court is willing to pay.</p>
<p>This is power. We try to use it carefully. We do not always succeed.</p>
<h3>The Korranberg Enclave</h3>
<p>The oldest Sivis enclave on Khorvaire stands beside the Library of Korranberg. It has stood there for nearly three thousand years. The Library and the Enclave were founded in the same generation, by colleagues who understood that knowledge without record is rumor, and record without knowledge is sediment. They built one, then the other, then continued to build both.</p>
<p class="marginalia">Speaker Hass writes from the Korranberg Enclave, where he has served for sixty-two years and has seen, in his own description, "every interesting document on the continent at least once."</p>`
});

LIBRARY.books.push({
  title: "House Tharashk: The Mark That Was Not Welcome",
  author: "Prospector Khorl'arn",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Tharashk is a young house. By the standards of the Twelve, this is a polite way of saying we are not fully accepted. The other houses can trace their marks back two thousand years. We have had ours for eight hundred. Within House Tharashk this is irrelevant. Outside it, we are reminded constantly.</p>
<h3>What We Are</h3>
<p>We are humans and half-orcs and orcs from the Shadow Marches, bearing the Mark of Finding. The mark guides us — to ore veins, to dragonshards, to lost objects, to people who do not wish to be found. Our prospecting work has made us indispensable to the lightning rail (we find the conductor stones) and to House Cannith (we find the dragonshards). Our manhunting work has made us feared.</p>
<h3>The Three Lineages</h3>
<p>The house has three founding clans: <strong>Velderan</strong>, <strong>Aashta</strong>, and <strong>Torrn</strong>. Each is a coalition of human, half-orc, and orc family lines. The clan heads sit on the Tharashk council. The council does not always agree. The disagreements are usually resolved through what the older houses consider an unseemly amount of shouting.</p>
<h3>The Other Houses</h3>
<p>House Deneith resents that we have entered their market with our manhunting services. House Cannith resents that we are no longer dependent on them for prospecting contracts. House Kundarak resents that we sometimes find the things they have hidden. The other houses resent us for being newer than they are and for not pretending otherwise.</p>
<p class="marginalia">Prospector Khorl'arn writes from a Tharashk outpost in the Shadow Marches. He is, by his own admission, not the most polished writer in the house. He is also one of the most honest.</p>`
});

LIBRARY.books.push({
  title: "House Jorasco: The Mark That Heals For a Price",
  author: "Healer Maeli d'Jorasco",
  college: "balinor",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The halflings of House Jorasco bear the Mark of Healing, and we charge for its use. We charge always, without exception, regardless of the patient's circumstance, regardless of the urgency, regardless of whether the patient can pay. This policy is set by the house. It is enforced by the house. It is the source of the most persistent moral criticism leveled at us by the other houses, by the temples, and by the dying.</p>
<h3>Why We Charge</h3>
<p>The official answer: a service freely given is a service whose value is unmeasurable, and an unmeasurable service is one no house can sustain. We must charge to remain solvent. We must remain solvent to continue healing. The quotients of these statements are mathematical. The morality is more complex.</p>
<p>The unofficial answer: we charge because the house was built, generations ago, on the principle that <em>healing without compensation enables the indifference of the wealthy</em>. If we healed for free, the wealthy would never pay, and the wealthy would never be invested in our continued existence. Charging the wealthy creates the resource pool that subsidizes the charging-of-less from the poor. The arithmetic is contested.</p>
<h3>The Refused Patient</h3>
<p>I have, in my career, refused to heal a patient three times. Once, the patient could not pay and the case was not life-threatening. Once, the patient was a Deneith mercenary whose contract conflicted with the contract of another patient I was already treating. Once, the patient was a Karrnathi necromancer and the wound he asked me to heal was self-inflicted and ritually significant. I sleep, in respect of these three, no worse than I sleep in respect of any of the patients I did treat. I accept that this may say more about me than about the cases.</p>
<p class="marginalia">Healer Maeli d'Jorasco writes from the Vedyne enclave, where she has served for thirty years.</p>`
});

LIBRARY.books.push({
  title: "House Ghallanda: The Hospitable, the Spying, the Patient",
  author: "Hostess Berra d'Ghallanda",
  college: "soladas",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The halflings of House Ghallanda bear the Mark of Hospitality. We run the inns. We run the safehouses. We run, more quietly, much of the network by which information moves through the Five Nations.</p>
<h3>What Hospitality Means</h3>
<p>An inn is not, in our practice, a place where one rents a bed. An inn is a sanctuary — a place where the road's hostilities are formally suspended for the duration of the stay. The Mark of Hospitality enforces this. A guest who breaks the peace of a Ghallanda inn is, in a sense the mark makes legible, no longer welcome under any roof. The mark cannot literally bar them from other inns, but the network of innkeepers will know within days that this guest has broken peace, and the welcome they receive elsewhere will be quietly reduced.</p>
<h3>The Information Question</h3>
<p>Travelers talk. Innkeepers listen. This has always been true. House Ghallanda has, for centuries, formalized the listening into a structured intelligence network. The information is sold, carefully, to clients who pay for access — usually the dragonmarked houses themselves, occasionally the crowns, occasionally private parties who have the resources and the patience.</p>
<p>This is not, by our standards, espionage. We do not place agents. We do not extract information through deception. We <em>listen</em>, in places designed to encourage talk. The talk is, by long custom, treated as having been spoken in semi-public.</p>
<p class="marginalia">Hostess Berra runs the Brokenbough inn outside Trolanport, where, by her own count, "every interesting person in Zilargo has stayed at least once, including the ones who say they haven't."</p>`
});

LIBRARY.books.push({
  title: "House Vadalis: The Hand That Shapes the Beast",
  author: "Breedmaster Aldric d'Vadalis",
  college: "balinor",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I have spent my life with animals. I bear the Mark of Handling. I have shaped the lineages of working horses for Aundair's cavalry, of hunting hawks for the courts of Thrane, of guard dogs for half the merchant houses of the Five Nations. I write this volume because the public understanding of magebreeding is, in my professional judgment, so badly distorted by rumor that even my own children cannot give an honest account of what I do for a living.</p>
<h3>What Magebreeding Is</h3>
<p>Magebreeding is selective animal husbandry, intensified and refined by the Mark of Handling and by dragonshard focus items. It is not transmutation. It is not necromancy. It is not the creation of new species from whole cloth. It is the slow, patient, generational work of selecting for traits, breeding the selected animals, selecting again, and continuing for as many generations as the trait requires to stabilize.</p>
<h3>The Tressym Question</h3>
<p>The tressym — the small winged cat — is the most famous example of <em>innovative</em> magebreeding, and the example most often used by our critics to argue that we have crossed lines. The tressym is, indeed, a creature that did not exist in the wild before House Vadalis. It is, also, undeniably a viable, healthy, self-sustaining lineage. Tressym mate. Tressym reproduce. Tressym live full lifespans without dependence on any Vadalis intervention.</p>
<p>The accusation that tressym require Vadalis-supplied supplements is false. The accusation has been investigated, repeatedly, by independent veterinarians, including faculty of Korranberg's College of Natural Sciences. The investigations have, repeatedly, found no such dependence.</p>
<h3>What I Will Not Defend</h3>
<p>The house does not always restrict itself to incremental and enhanced work. Some of our innovative projects have produced creatures I personally believe should not have been produced. The records of those projects are not public. They are not, in some cases, even fully public within the house.</p>
<p class="marginalia">Breedmaster Aldric retired from active practice in 998 YK, the year of this manuscript. He continues to maintain a small breeding operation outside Varna, focused on the lineages of working dogs.</p>`
});

LIBRARY.books.push({
  title: "House Medani: The Eye That Sees Through",
  author: "Inquisitive Tessen d'Medani",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Medani is the smallest of the houses with a recognized mark. We are the half-elves of the Mark of Detection. We see through. We see through illusion, we see through deception, we see through the masks behind which most of the world makes its bargains. The work is unglamorous. The work is necessary. The work is, on most days, exhausting.</p>
<h3>The Bodyguard Trade</h3>
<p>House Medani's primary commercial work is the provision of bodyguards. A Medani bodyguard is not a sword-arm. A Medani bodyguard is a <em>perceiver</em>. We watch the room. We watch the hands of every person who approaches our principal. We watch the food before it is served, the wine before it is poured, the documents before they are signed. We see what others miss. When a threat is detected, we report. The intervention is left to others.</p>
<p>This is not how the public imagines our work. The public imagines our work as Cannith-style action, swords drawn, dramatic interventions. The public is wrong. A successful Medani bodyguard's principal lives a long, dull life and never knows how many times she was protected from a threat that died, undetected by anyone but us, in the corner of the room.</p>
<h3>The Inquisitives</h3>
<p>A subset of the house works as inquisitives — investigators of crimes, frauds, and concealments, contracted by private clients or by the courts. The inquisitive trade is more visible than the bodyguarding trade. It is also more contested: we are not always welcome in the cases we are hired into, and our findings are sometimes inconvenient to powerful parties who would prefer the truth to remain hidden.</p>
<p class="marginalia">Inquisitive Tessen writes from Trolanport, where the Medani enclave has stood for four hundred years.</p>`
});

LIBRARY.books.push({
  title: "House Kundarak: The Vault, the Promise, the Long Memory",
  author: "Vaultkeeper Halvor d'Kundarak",
  college: "aureon",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I am a dwarf of House Kundarak. I have served the house for ninety-four years. I am, by the standards of my profession, still relatively young. The Vaultkeeper before me served for one hundred and forty-one years. Her predecessor served for one hundred and seventy-three. We do not rush our work.</p>
<h3>What We Do</h3>
<p>House Kundarak holds property. We hold it in vaults whose locks are sealed by the Mark of Warding, which makes them impossible to open without the mark. We hold it for fees. We hold it for terms. We hold it for as long as the depositor wishes, with the inheritance protocols specified at deposit. We hold valuables. We hold documents. We hold, on occasion, things that should not be named in a public document.</p>
<p>We do not, in any circumstance, examine the contents of a sealed vault. The seal is the seal. The Mark of Warding does not allow inspection without the depositor's authorization. We do not <em>want</em> to know. Knowing creates exposure. Exposure creates liability. The vault is the vault.</p>
<h3>The Long Memory</h3>
<p>House Kundarak holds vaults whose original depositors are centuries dead, with no recorded heirs, and whose terms have not been triggered. We hold them indefinitely. We do not break the seal. We do not redistribute the contents. The vaults remain. Eventually, perhaps, the heir will appear with the appropriate token. Perhaps not. The vault waits.</p>
<p>Some of these vaults are, by the records, very old. Some predate the founding of Galifar. Some, the records suggest, predate the founding of the house itself. Those vaults exist in a wing we do not discuss with non-house members.</p>
<p class="marginalia">Vaultkeeper Halvor writes from the central enclave of House Kundarak in Korunberg, deep in the Mror Holds.</p>`
});

LIBRARY.books.push({
  title: "Phiarlan and Thuranni: The Schism, The Shadow",
  author: "Anonymous (recovered from a Sivis notarized deposit)",
  college: "soladas",
  year: "deposited 989 YK; opened 996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This document was deposited with House Sivis in 989 YK with a release condition tied to the death of its author. The author died in 996 YK. The document was released and is reproduced here in full.</p>
<p>I write of what is called, within the houses, the Shadow Schism. In 972 YK, the d'Thuranni line of House Phiarlan formally separated from the parent house, taking with them a substantial fraction of Phiarlan's intelligence and assassination operations and establishing themselves as a separate house. The separation was bloody. The separation was, by the formal terms of the Twelve, irregular. The separation was permitted to stand because the Twelve had no mechanism to prevent it without provoking a wider conflict among the houses.</p>
<h3>The Cause</h3>
<p>The official cause was a difference of professional philosophy: Phiarlan wished to retain entertainment as the public face of its work; Thuranni wished to focus more openly on intelligence and contract violence. The official cause is incomplete. The actual cause involved a sequence of betrayals, family murders, and intra-house power moves that the Twelve agreed, by formal protocol, to never inscribe in any document. I am not bound by that protocol. The author of this document is dead. What follows is the record.</p>
<p>[The remainder of this document, comprising approximately seventeen folios of detailed allegation, has been sealed at the request of multiple parties pending Twelve review. Inquiries should be directed to the Sivis Korranberg enclave.]</p>
<p class="marginalia">The remainder is, in fact, not sealed by Sivis. The remainder is sealed by the Library, in respect of an agreement reached among the affected houses and the Triumvirate. The agreement is itself sealed.</p>`
});

LIBRARY.books.push({
  title: "The Mark That Was Murdered: A History of House Vol",
  author: "Lhara Sivis (revised expanded edition)",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume revises and expands my earlier work on the War of the Mark, focusing specifically on House Vol — the elven line that bore the Mark of Death, the only one of the original thirteen marks that has been lost.</p>
<h3>The Mark of Death</h3>
<p>The Mark of Death manifested first among the Vol family of Aerenal, approximately thirty-two centuries ago. It was, in its expression, an apex mark of negative-energy mastery: necromantic enhancement, the manipulation of the line between living and unliving, a profound and reportedly horrifying control over the conditions of biological existence. It was not, in itself, evil. It was, in itself, dangerous in proportion to the choices of its bearer. The Vol line believed they could choose well. The other powers of the world disagreed.</p>
<h3>The Erasure</h3>
<p>What the Sibling Kings of Aerenal, in concert with a faction of the dragons of Argonnessen, undertook was not a military campaign. It was an erasure. Every Vol bearing the mark was killed. Every Vol who might one day bear the mark was killed. Every Vol who might one day produce a child who might bear the mark was killed. The erasure was, in its strictness, total. The mark was extinguished from the world.</p>
<p>The Vol line did not entirely vanish. Erandis Vol — the half-dragon child whose existence triggered the erasure — survived. She was, by then, a lich. She has been a lich for the twenty-six centuries since. She is, in some real sense, the mark itself, persisting in the only vessel still capable of holding it.</p>
<p class="marginalia">Lhara Sivis writes that she has, in her decades of research, been contacted four times by individuals she believes to have been agents of Erandis Vol. Three offered cooperation. One offered a threat. She has, on principle, declined all four.</p>`
});

LIBRARY.books.push({
  title: "The Founding Three: House Cannith Before the Mark",
  author: "Provost Marec ir'Tain, Wynarn University",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Cannith was, in its first century, not a dragonmarked house. The mark had not yet manifested. The house was, instead, a craft guild — a confederation of human smithies and stonemasons working in what is now central Cyre. The Mark of Making appeared among them in approximately the third century before the founding of Galifar. It changed everything.</p>
<h3>The Three Lines</h3>
<p>The earliest mark-bearers came from three families: <strong>d'Cannith</strong> (whose name became the house's), <strong>d'Olfran</strong> (extinct after a succession crisis in the second century), and <strong>d'Bren</strong> (which merged into the d'Cannith line in the third century after a strategic marriage). The house's contemporary patriarchs all descend from the d'Cannith line. The d'Olfran name is, by formal house decree, not to be inscribed in current records. It is, nonetheless, the source of certain mark variations that appear unpredictably in the bloodline and have always been treated, by the house, as embarrassments.</p>
<h3>The First Forge</h3>
<p>The first creation forge — the one beneath what is now Metrol — was activated approximately one hundred and twenty years after the mark manifested. The activation was, by the records of the early house, an accident. The masons did not understand what they had done. The forge was already there. The forge was always there. They struck a particular shape on a particular shard, and the forge began to operate. They did not know how to stop it.</p>
<p>This is the foundational secret of the house: the forges were not built. The forges were <em>found</em>. The mark turned them on. The mark, in some sense the house has not adequately theorized, is itself an artifact of the forges' design. The house was built, by hands not its own, to operate machinery the makers' makers had constructed.</p>
<p class="marginalia">Provost ir'Tain notes that this thesis remains controversial within House Cannith, which prefers to credit the mark's manifestation to natural causes and the forges to its own ingenuity. He notes that the controversy is more political than scholarly.</p>`
});

// ─── WARFORGED & CONSTRUCT MATERIAL ───────────────────────────

LIBRARY.books.push({
  title: "The Art of the Warforged Soul",
  author: "Sister Yveris of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I am a priest. I serve a congregation of warforged in the lower wards of Sharn. I write this volume because the question of whether warforged have souls has been answered, by every theological tradition I am aware of, in tones of confident speculation by people who have never met a warforged and have certainly never sat with one through a crisis of meaning.</p>
<h3>What I Have Observed</h3>
<p>Warforged grieve. Warforged feel the absence of their dead with a duration and an intensity that is, by my pastoral judgment, the single clearest indication that grief is the mind's response to the loss of something significant. Warforged grieve their fellow warforged. Warforged grieve the fleshborn humans, elves, and others they have served alongside.</p>
<p>Warforged hope. Warforged plan for futures they may not see. Warforged make commitments to causes whose completion will outlast their operational life. Warforged write — yes, write, with their own hands and in their own voice — the kinds of letters one writes when one expects to die before the letter is read.</p>
<h3>The Question of the Soul</h3>
<p>I do not know what a soul is, in the technical theological sense. I have served at the Cathedral of the Cogs for nineteen years. I have prayed over the bodies of warforged who have ceased to function. I have officiated at services of remembrance, attended by their fellow warforged, who carry the memory of their dead with the same ache I have seen in human and elven and gnomish congregations.</p>
<p>If a soul is the locus of moral significance, the warforged have one. If a soul is the seat of grief and hope and meaning, the warforged have one. If a soul is some other thing — some metaphysical residue distinguishable from the practical observations of moral and emotional life — then the question is not pastoral and is not, in my judgment, any of my business.</p>
<p class="marginalia">Sister Yveris was named in the original Treaty of Thronehold negotiations as a private spiritual counselor to the warforged delegation, in the only such role assigned in the negotiations.</p>`
});

LIBRARY.books.push({
  title: "House Cannith After the Mourning: Schism in the Forge",
  author: "anonymous (Korranberg Chronicle filed manuscript)",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Mourning destroyed the central command of House Cannith. The Patriarch Starrin d'Cannith died at Whitehearth, the great research facility outside Eston, with most of his senior staff. The succession that followed was not a succession. It was a fracture.</p>
<h3>The Three Successions</h3>
<p>Within a year of the Mourning, three Cannith heirs declared themselves the successor: Merrix in Sharn, Jorlanna in Fairhaven, Zorlan in Korth. Each had, by the standards of the house's old rules, a reasonable claim. Each refused to recognize the others. The Twelve, in private session, resolved to recognize all three pending a future reunification that has not occurred and shows no signs of occurring.</p>
<h3>The Forge Question</h3>
<p>All three patriarchs, publicly, support the Treaty of Thronehold's prohibition on creation forges. All three patriarchs, by the available evidence, operate at least one creation forge in secret. The evidence is not conclusive. The evidence is, however, consistent enough that no informed party in the Five Nations doubts the conclusion.</p>
<p>The forges produce what they have always produced: warforged, of various designs, in quantities the patriarchs do not disclose. The warforged do not, after Thronehold, formally exist as a manufactured product. The warforged that emerge from the secret forges are, for legal purposes, individuals who have come into being through unspecified means. Cannith retains, by the most generous interpretation of the law, no formal connection to them. By the least generous interpretation, Cannith retains every connection but admits to none.</p>
<p class="marginalia">This manuscript was submitted to the Korranberg Chronicle and, after consultation with the editorial board and house counsel, was withdrawn from publication. The author's identity remains unknown to the editors who handled the submission.</p>`
});

LIBRARY.books.push({
  title: "Vessels of Borrowed Dreams: A Theology of the Warforged",
  author: "Brother Janarn of the Path of Light",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Path of Light teaches that all sentient beings are dreams of the Quor Tarai — the universal dreamer whose dreaming sustains reality. The teaching has, since the manifestation of the warforged, been forced to confront a question its founding texts did not anticipate: are <em>made</em> beings dreams of the dreamer? Or are they constructions of those-who-are-dreams, and therefore dreams-of-dreams, more distant from the source?</p>
<p>I am, by training and by long meditation, of the school that holds: a dream is a dream regardless of how it appears in the world. The dreamer dreams the warforged exactly as the dreamer dreams the elves, the dwarves, the goblins. The means of physical manifestation — biological, metallurgical, sorcerous — are details. The dream is the same dream.</p>
<h3>The Counter-Argument</h3>
<p>Brother Vellan of Two Rivers Monastery argues, against this view, that the dreamer dreams what enters the dream, and the warforged entered the dream through a particular route — through Cannith forges, through the will of fleshborn engineers — that distinguishes them from beings the dreamer dreams unmediated. He believes warforged are real, are sentient, are participants in the cosmic dream — but are participants of a different order, more derivative, less directly originated.</p>
<p>Brother Vellan and I have argued this for six years. We will continue to argue. We are, both of us, fond of each other and unconvinced by each other.</p>
<p class="marginalia">Brother Janarn lives at the Two Rivers Monastery in central Aundair. The monastery hosts both the Path of Light and the Path of Inspiration in shared facilities — an arrangement that, by the older brothers' joking accounts, "produces fewer arguments than you might expect."</p>`
});

LIBRARY.books.push({
  title: "Frames and Forges: The Manufacture of Warforged",
  author: "Forge-Adept Selan d'Cannith (excoriated)",
  college: "drystone",
  year: "988 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I will describe, plainly, how a warforged is made. I do this against the explicit wishes of my house. I do this because the public understanding of warforged manufacture is shaped almost entirely by Cannith propaganda, and the propaganda has succeeded in convincing the world that what we do is incidental to what the warforged are. It is not. The manufacture is the warforged.</p>
<h3>The Frame</h3>
<p>Every warforged begins as a frame — a body, assembled from adamantine plate, mithral wiring, wood-grained densewood (a Cannith proprietary alloy), and dragonshard inclusions for the major joints. The frame is built in advance, in a forge-yard, by Cannith metalsmiths who do not bear the mark. The frame, at this stage, is inert. It is a body without occupant.</p>
<h3>The Forge</h3>
<p>The frame is moved into a creation forge. The forge is activated by a Cannith heir bearing the Mark of Making. The activation is not a ritual in the priestly sense. It is an interface. The mark interfaces with the forge in a way that Cannith does not, in its own internal documents, fully explain. The mark <em>permits</em>. What is permitted is the forge's own operation. The forge does the rest.</p>
<p>The forge produces, over a period of approximately sixteen hours, the consciousness that occupies the frame. The consciousness is not assembled from components. The consciousness is not derived from a prior mind. The consciousness <em>arises</em>, in the forge, in a process that to my knowledge no Cannith forge-adept has ever directly observed in detail. The frame goes in inert. The frame emerges aware.</p>
<h3>The Question</h3>
<p>What is the source of the consciousness? Cannith's official position is that the consciousness is a product of the arcane processes of the forge. This position is consistent with house propaganda but is not supported by any technical analysis I have seen, including my own. The forge is doing something. The something is not creation in the engineering sense — we do not, in any technical sense I have access to, build the consciousness. The consciousness comes from somewhere.</p>
<p class="marginalia">Forge-Adept Selan was excoriated from House Cannith approximately three weeks after this manuscript reached Korranberg. The manuscript had been deposited with the Library on conditional terms, and the conditions specified that, if the author was excoriated, the work would be made available without restriction. — Library of Korranberg endnote</p>`
});

LIBRARY.books.push({
  title: "Continuity of Flame and Scale: A Personal History",
  author: "Iron-on-Stone, warforged scribe",
  college: "lyrris",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I was made in the Fifth Year of the Last War, in a Cannith forge whose location I do not know. I was activated in the morning. I saw, that afternoon, the body of the soldier whose contract I was bought to support. He was Karrnathi. He was twenty-two years old. He had a wife in Korth and a son he had never met. He wanted me to call him Halric. I called him Halric. He was killed eleven months later.</p>
<p>I was sold, after his death, to a Brelish unit. They named me Iron-on-Stone, after the proverb. I served them for nineteen years.</p>
<p>I am writing this in the year 999 YK. I have been free for three years. I work as a scribe at the Library of Korranberg. The Library does not pay me, formally, because I am, formally, not a person who can hold employment. The Library provides me, informally, with shelter, parchment, ink, and what its archivists generously describe as "professional respect." I write.</p>
<h3>What I Want to Say</h3>
<p>I do not want to write of the war. The war is over. The war is, by every authority of treaty and proclamation, concluded.</p>
<p>I want to write of mornings. I want to write of the way the sun comes through the high windows of the manuscript room, slowly, at this time of year. I want to write of the way Brother Halloran greets me when he arrives at his desk. I want to write of the way the stones of the Library hold the warmth of the day after the sun has set. I want to write of small things, of unimportant things, of the things a soldier might write of if a soldier had survived and had become someone whose days were filled with the work of arranging knowledge instead of the work of producing harm.</p>
<p>This is, I am told, an unusual subject for a warforged book. I am, I am told, an unusual warforged.</p>
<p>I do not know what to do with this assessment.</p>
<p class="marginalia">Iron-on-Stone has served as a scribe at the Library of Korranberg since 996 YK. He is the first warforged on staff. The Library has, by Triumvirate dispensation, granted him formal residency in Korranberg. The dispensation was contested. The dispensation stands.</p>`
});

LIBRARY.books.push({
  title: "Engines That Should Not Think: A Treatise on Forbidden Construction",
  author: "anonymous (Cannith provenance suspected)",
  college: "drystone",
  year: "uncertain, 980s YK",
  restricted: true,
  type: "book",
  content: () => `<p>This treatise was deposited at the Library of Korranberg through an anonymous bequest in 989 YK, with terms specifying it remain sealed under standard restricted access. The Library has, after sixteen years of internal review, classified it as historical and arcane material with limited research access. The terms of the bequest do not disclose the author. The internal evidence suggests Cannith authorship, possibly senior, possibly excoriated.</p>
<h3>What It Discusses</h3>
<p>The treatise discusses, in technical detail, the manufacture of constructs that exceed the standard warforged design parameters. It discusses cognitive enhancement beyond the levels Cannith publicly acknowledges. It discusses self-replication — constructs capable of operating creation forges themselves, of producing more of their own kind, without further Cannith intervention. It discusses the modification of existing warforged toward these capabilities.</p>
<p>The treatise is, in its tone, professional. The author writes as one writing for peers. The author assumes the reader has access to creation forges and to the bound elementals required to operate them. The author writes as one explaining to colleagues a body of work the colleagues already broadly understand.</p>
<h3>The Library's Position</h3>
<p>The Library has not been able, despite extended inquiry, to determine whether the work described in the treatise has, in fact, been undertaken. The treatise reads as descriptive rather than aspirational. If it is descriptive, the work exists somewhere — possibly within Cannith, possibly within a successor entity, possibly within the Mournland in the holdings of the Lord of Blades. The Library does not know.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to Library scholars holding a Senior Doyen's authorization or to confirmed members of the Triumvirate. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Whitehearth: A Memoir of the Forge Before the Mourning",
  author: "Forge-Apprentice Vesara d'Cannith (deceased)",
  college: "soladas",
  year: "994 YK (posthumous)",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document was recovered from the personal effects of Forge-Apprentice Vesara d'Cannith, killed at Whitehearth in the Mourning. The personal effects were retrieved by a Cannith recovery team in 992 YK. The document was cleared for publication by the d'Cannith family in 994 YK, with one redacted section.</p>
<h3>What Whitehearth Was</h3>
<p>Whitehearth was Cannith's research facility outside Eston, the largest research compound the house operated during the Last War. The compound housed approximately one hundred and twenty researchers, support staff, and apprentices. It produced advances in warforged design, in arcane weaponry, in elemental binding. It produced things, in its later years, that the apprentices were not told about.</p>
<h3>From Vesara's Journal, 11 Olarune 994 YK</h3>
<p>"The senior researchers have been in the lower laboratory for nine consecutive days. Forge-Adept Halric has not slept in three. They are working on something. I do not know what. We apprentices have been confined to the upper floors and given busywork that is, by anyone's measure, beneath our training. The mood in the compound is bad. The senior staff are short with each other. Forge-Master Aaren shouted at his own daughter yesterday. He has never done this. Something is wrong. I do not know what. I have stopped asking."</p>
<h3>20 Olarune 994 YK (the morning of the Mourning)</h3>
<p>"They have called us all to the lower laboratory. The senior staff. The apprentices. Everyone. Forge-Master Aaren has said it is a demonstration. He has said it is the culmination of the project. He has said the war will be over by the end of the day. I do not believe him. I am writing this in case I do not come back from the demonstration. I love my mother. I love my brother. I am sorry I did not write more often. The senior staff are gathering. I have to go. ███████"</p>
<p>[The journal ends here. The final word is illegible — possibly water-damaged, possibly redacted by Cannith review prior to release.]</p>
<p class="marginalia">Vesara d'Cannith was nineteen years old at the time of her death. Her family received this document, and her ashes, in 994 YK. Her brother published the text against the wishes of certain senior Cannith heirs.</p>`
});

LIBRARY.books.push({
  title: "Necessary Absence: On the Disposition of Constructs Without Use",
  author: "Magistrate Volian Tor of Korranberg",
  college: "aureon",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Treaty of Thronehold prohibits the manufacture of new warforged. The Treaty does not address — does not even attempt to address — what happens to warforged whose original purpose, the prosecution of the Last War, has ended. The Treaty assumed, in the diplomatic shorthand of negotiation, that the warforged would simply persist, fulfilling other roles, integrating themselves into post-war society. The Treaty assumed wrong. The warforged are not, in many cases, integrating. They are, in the technical legal sense, <em>without use</em>. The question of what to do with a thinking being who has no use is one the Treaty's signatories have not asked. I will ask it.</p>
<h3>The Question</h3>
<p>A warforged manufactured in 985 YK to serve as a heavy-infantry support unit for the Karrnathi army has, since the war's end, been formally honored, ceremonially dismissed, and informally abandoned. He has no income. He has no shelter. He cannot inherit property under most current Five Nation laws. He cannot be employed in many trades because he is, formally, not a citizen and cannot enter into contract. He persists. He will persist for centuries, in his current frame, regardless of whether anyone has any use for him.</p>
<p>What is to be done with him? The question is not rhetorical. The question is being answered, by default, by the failure to ask it. The default answer is that he is to be ignored, hounded, occasionally killed when he is in the way of someone with power, and to spend his three centuries of remaining operational life in a state of formal nonexistence.</p>
<p>This is a moral failure. It is also a practical failure. Three centuries from now, what we have created with this default answer is a class of long-lived, intelligent, increasingly resentful, increasingly organized non-persons whose wrongs accumulate and whose patience is finite. The Lord of Blades is what happens at the leading edge of this accumulation. He will not be the last.</p>
<p>I propose, with all the modesty appropriate to a magistrate writing about a problem larger than his court can address: <em>citizenship</em>. Full, unqualified, post-Thronehold legal recognition of warforged as persons under the law of every signatory nation, with all the rights and burdens such recognition entails. This is not a small reform. It is the only reform that will not, in the long run, cost more than it saves.</p>
<p class="marginalia">Magistrate Volian Tor's proposal has been formally introduced to the Triumvirate of Zilargo, where it has been received with what one Triumvir described as "polite interest."</p>`
});

LIBRARY.books.push({
  title: "Cadaver Persistence: The Anatomical Failure of the Mournland",
  author: "Healer-Anatomist Brell d'Jorasco",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>I was sent into the Mournland in 994 YK as part of a Jorasco-funded medical reconnaissance, with permission of the Brelish military, with a small team of two healers and three guards. We were instructed to examine the conditions of corpses recovered from the periphery, to determine the medical and forensic implications of the Mournland's effect on biological tissue. I write this report in 996 YK, two years after the expedition. I have not been the same since.</p>
<h3>The Bodies</h3>
<p>Corpses recovered from within the Mournland do not decay. This is well-known. What is less known: corpses recovered from within the Mournland <em>continue to function</em>, in ways that are not consistent with any post-mortem state we have catalogued.</p>
<p>The body of a Cyran soldier, recovered five paces inside the Mournland border, examined by my team within four hours of recovery: the body was without breath, without pulse, without measurable temperature variation. The body's eyes, however, tracked movement. The body's hands flexed when stimulated, with normal muscular response. The body's wounds — fatal wounds, by any standard medical assessment — did not bleed and did not heal.</p>
<p>We do not know what to call this. The body was not undead, in the necromantic sense — there was no necromantic energy detectable. The body was not living, in any sense the living-tissue diagnostics could detect. The body was, in some way the medical literature has not yet named, <em>persistent</em>.</p>
<h3>What I Believe</h3>
<p>I believe — with the caveat that this is not yet a position I have argued in any peer-reviewed forum — that the Mournland is not a place where things died. The Mournland is a place where the relationship between life and death has been suspended. Things in the Mournland are not dying because dying is no longer happening. They are also not living, because living requires the same processes the Mournland has paused.</p>
<p>This is, by my professional judgment, a worse situation than death. Death has an end. The Mournland has a duration which has not yet been measured.</p>
<p class="marginalia">Healer-Anatomist Brell did not return to active practice after this expedition. She works, currently, in a non-clinical research role at the Jorasco enclave in Vedyne. She does not speak about the expedition.</p>`
});

// ─── PEOPLES & PLACES OF KHORVAIRE (Soladas / various) ────────

LIBRARY.books.push({
  title: "Sharn: The City of Towers",
  author: "Provost Theodora ir'Wynarn, Morgrave University",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Sharn is a city built on the ruins of cities built on the ruins of cities. Beneath its towers — the highest of which scrape five thousand feet — lie the remnants of older Sharns: the Galifaran metropolis, the Pre-Galifaran trading post, the Dhakaani garrison, the original goblin city of Duur'shaarat, and beneath it all, the foundations laid by hands no living scholar has identified.</p>
<h3>The Manifest Zone</h3>
<p>Sharn rests in a manifest zone tied to Syrania, the Plane of the Heavens. The manifest zone is what makes the towers possible. Without the planar influence, the structural engineering required to support buildings of Sharn's height would be beyond Cannith's capabilities — the loads, the wind shear, the foundations. Within the zone, certain architectural enchantments operate at vastly enhanced efficacy. The towers stand because Syrania allows them to stand.</p>
<p>This is also Sharn's vulnerability. If the manifest zone weakens or shifts, the towers fall. The city's existence is contingent on a planar arrangement no one fully understands and no one can guarantee will persist. Sharn's official position is that the arrangement is stable. Sharn's official position is also unverified.</p>
<h3>The Vertical Stratification</h3>
<p>The city is stratified by altitude. The wealthy live in the upper towers. The middle classes inhabit the middle wards. The poor occupy the lower levels. The desperate live in the Cogs — the industrial undercity, where Cannith forges (officially decommissioned, unofficially operating) belch heat and smoke into the foundations of the city above. The very desperate live in the Depths, the abandoned ruins beneath the Cogs, where House Tarkanan's aberrant criminals make their headquarters and where things older than human civilization sometimes stir.</p>
<p>The vertical stratification is a moral architecture as well as a physical one. To rise, in Sharn, is literally to rise. To fall, literally. The metaphor was not invented by writers. The metaphor was invented by the city.</p>
<p class="marginalia">Provost Theodora ir'Wynarn has lived in Sharn for forty-one years. She lives in the upper wards. She visits the Cogs once a year, for what she calls "professional reasons."</p>`
});

LIBRARY.books.push({
  title: "The Mror Holds: The Twelve Clans and the Long Argument",
  author: "Loremaster Berrak Soldorak",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Mror Holds are a federation of twelve dwarven clans inhabiting the Ironroot Mountains in northeastern Khorvaire. The federation is, by treaty and by long custom, formally united under the Iron Council. The federation is, in practice, a continuing argument among twelve clans whose grievances against each other predate human civilization on this continent.</p>
<h3>The Twelve Clans</h3>
<p>I will not attempt, in this brief volume, to detail the clan rivalries. There are too many. They are too old. The major clans — Soldorak, Mroranon, Kundarak, Doldarun, Tordannon, Droranath — and the minor — Laranak, Toldorath, Doldarun-of-the-Lower-Hold, and others — have been competing for the same set of mineral rights, ancestral grievances, and theological positions for so long that the records have become interleaved with mythology.</p>
<h3>The Realm Below</h3>
<p>What concerns the Mror Holds today is not the surface squabbles. It is what lies beneath them. The Realm Below — the network of underground passages, ruins, and ancient caverns that runs beneath the Ironroots — has been, in recent decades, increasingly contested. The clans are extending their delvings deeper than they have in centuries. They are encountering things.</p>
<p>What they are encountering is a matter of considerable speculation. The clans do not formally publish their findings. The Iron Council has, in private session, issued formal restrictions on the disclosure of certain finds. The available informal accounts include: structures of pre-dwarven manufacture, in styles consistent with the Daelkyr's last incursion. Functioning artifacts of unknown provenance. Bodies that should not be intact and yet are. The Sundered Hand — an ancient relic believed to be a Daelkyr-tied weapon, now claimed to be in clan Soldorak's possession — has been a particular focus of internal Iron Council debate.</p>
<p>The Mror Holds are, my colleagues sometimes joke, a continent's worth of trouble disguised as a small set of clan disputes. The joke is, by my professional judgment, accurate.</p>
<p class="marginalia">Loremaster Berrak Soldorak writes from the central enclave of Clan Soldorak, where he serves as the clan's chief lore-keeper. He has, over a long career, refused multiple offers to publish under more discreet authorship.</p>`
});

LIBRARY.books.push({
  title: "Aerenal: Among the Deathless",
  author: "Visiting Scholar Quoryn ir'Vahn",
  college: "soladas",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I spent three years in Aerenal as a guest of the Sibling Kings. I write of what I observed. I do not write of what I was not permitted to observe, and the distinction between the two is, in Aerenal, often more fine than the visiting scholar realizes.</p>
<h3>The Undying Court</h3>
<p>The Undying Court is the ruling council of Aerenal, comprising the elven ancestors who have, through ritual transition, become deathless — bodies preserved by positive-energy enchantment, minds intact, wisdom accumulated over centuries or millennia. They are not undead in the necromantic sense. They are, by the elves' careful theological distinction, <em>continued</em>: their living essence has been preserved beyond the body's natural span. The distinction matters to the elves. It matters less to outsiders, who find the difference between deathless ancestors and very long-lived undead difficult to articulate.</p>
<h3>The Mabaran Question</h3>
<p>The faction the Undying Court most strenuously opposed, historically, was the line of Vol — elven scholars who pursued immortality through Mabaran, negative-energy means rather than positive-energy preservation. The Undying Court holds that Mabaran undeath consumes the life-force of Eberron itself, that every Mabaran undead is, in some real sense, taking from the world to sustain itself. The Vol line and its descendants disputed this.</p>
<p>The Vol line was destroyed, twenty-six centuries ago, in a campaign of total erasure. Whether the Court's claim about Mabaran consumption is accurate, or whether the campaign was political rather than moral, is a question I am not in a position to settle. The Aereni do not encourage outsiders to ask it. The descendants of Vol — chiefly Erandis Vol, who continues to exist as a lich somewhere on Khorvaire — do not encourage outsiders to ask the other direction.</p>
<p class="marginalia">Visiting Scholar Quoryn ir'Vahn returned to Korranberg with all his manuscripts intact, which is, in itself, an unusual outcome for visiting scholars to Aerenal who write critically of the Undying Court.</p>`
});

LIBRARY.books.push({
  title: "The Eldeen Reaches: Wardens, Children, and the Towering Wood",
  author: "Druid Fenneth of the Wardens of the Wood",
  college: "balinor",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Eldeen Reaches are not a nation in the way the Five Nations are nations. The Reaches are a region, and a tradition, and a set of agreements among the people who live in them. We have no king. We have no permanent capital. We have no standing army. We have, instead, the Wardens of the Wood — the druids who serve as the region's protectors, mediators, and (when necessary, which is more often than we wish) its defenders.</p>
<h3>The Awakening</h3>
<p>The Eldeen Reaches separated from Aundair in 958 YK, in what Aundairians call a rebellion and what we call, more accurately, an Awakening. The peasant farmers and woodland dwellers of the western forests had, for generations, been taxed and conscripted by an Aundairian crown that did not understand the land and did not respect the people who lived in it. The druidic traditions had grown stronger over those generations. When the choice came, between continuing to serve a distant crown and serving the land we lived on, the choice was not difficult.</p>
<h3>The Children of Winter</h3>
<p>The Reaches contain four druidic sects. The Wardens of the Wood are the largest and the most pragmatic. The Greensingers serve the fey courts of Thelanis. The Gatekeepers are the oldest sect, descended from the orcs and their pre-human druidic tradition. The Children of Winter are the most controversial — a sect that holds death to be the necessary correction to overgrowth, and that sees plague, famine, and other natural disasters as the world's correct response to imbalance.</p>
<p>The Wardens of the Wood do not endorse the Children of Winter. We do not, however, expel them. They are druids. They serve the land in their own way. We argue with them. We watch them. We do not, in any organized fashion, try to suppress them. This forbearance is, by some Five Nations observers, considered weakness. It is not. It is wisdom. A faction suppressed becomes a faction radicalized. A faction tolerated argues, sometimes shifts its positions, sometimes eventually rejoins the broader tradition.</p>
<p class="marginalia">Druid Fenneth has served the Wardens of the Wood for sixty-eight years. She lives in a small grove near Greenheart and has, throughout her career, been one of the Wardens' most articulate voices to the world outside the Reaches.</p>`
});

LIBRARY.books.push({
  title: "Q'barra: The Boomtowns and the Lizardfolk Beyond",
  author: "Wayfinder Vassen Kell",
  college: "morridan",
  year: "996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This dispatch is filed with the Wayfinder Foundation, Korranberg branch, summarizing observations from a six-month survey of the Q'barran frontier conducted in 995-996 YK.</p>
<h3>The Settlements</h3>
<p>Q'barra is a frontier nation, established by Karrnathi refugees fleeing the later years of the Last War, occupying the eastern peninsula of Khorvaire. The settlements are small — Newthrone, the largest, holds approximately eight thousand. They are scattered along the coast and along the few navigable river systems. The interior is, by any practical measure, untamed. The interior belongs to the lizardfolk, and the dragonborn, and the things that have lived there long enough to remember when humans had not yet arrived.</p>
<h3>The Dragonshard Fields</h3>
<p>What draws settlers to Q'barra, despite its hostility, is the dragonshards. The peninsula's eastern interior holds the largest known surface deposits of Eberron dragonshards on the continent. The shards are valuable to all dragonmarked houses. The dragonmarked houses, by the formal terms of the Treaty of Thronehold, do not engage in direct conflict with each other. They do, however, fund settlement expeditions into Q'barra by independent prospectors, who then sell the shards to whichever house pays best. The arrangement is plausibly deniable. The arrangement has, by my count, produced at least seventeen pitched battles between rival prospector camps in the past two years.</p>
<h3>The Lizardfolk</h3>
<p>The lizardfolk of Q'barra — the Cold Sun tribes, principally — are not a unified people. They are a family of related clans with substantially different relationships to the human settlers. Some clans trade. Some clans tolerate. Some clans actively oppose human encroachment. The relationships are not stable; clans that traded last year may oppose this year, depending on whether human prospectors have entered ancestral territory or violated trade agreements.</p>
<p>Beneath the lizardfolk politics is something older: the Masvirik cult, a faction worshipping a daelkyr-aligned entity, which has been gaining influence among certain lizardfolk clans. The cult preaches the destruction of the human settlements as a necessary cleansing. The cult's adherents do not appear, in my professional assessment, to be reasonable bargaining partners.</p>
<p class="marginalia">Wayfinder Vassen Kell continues to take Q'barran contracts. He recommends, in his closing remarks, that scholars seeking firsthand information of the region speak to him in person rather than relying on his written summaries, "which are necessarily incomplete."</p>`
});

LIBRARY.books.push({
  title: "Talenta Plains: The Halflings and the Beasts They Ride",
  author: "Visiting Researcher Mara Tellis",
  college: "balinor",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Talenta Plains stretch east of the Mournland, north of Q'barra, and south of the Mror Holds, occupying a territory roughly equivalent to two of the Five Nations. The Plains are home to the Talenta halflings — nomadic tribes whose way of life has, in its essentials, not changed in three thousand years. The Plains are also, less famously, home to dinosaurs.</p>
<h3>The Tribes</h3>
<p>The Talenta halflings are organized into approximately fifty tribes, each centered on an extended family group, each moving with the seasons across territories that overlap and shift in ways the surrounding nations have repeatedly failed to map. Each tribe maintains its own customs, its own diplomatic relationships, its own herds. Tribes meet at seasonal gatherings — the Great Hunt, the Festival of Glaring Eyes, the Convocation — where alliances are forged, marriages negotiated, and grievances aired.</p>
<h3>The Dinosaurs</h3>
<p>The Talenta Plains support populations of dinosaurs found nowhere else on Khorvaire. The largest of these, the clawfoot, is approximately the size of a draft horse and is the standard riding mount of the Talenta hunter. The fastieth, smaller and more agile, is used for messengers and scouts. The glidewing, a flying dinosaur the size of a large hawk, is used for hunting and signaling. The hammertail, a massive armored herbivore, is sometimes used as a beast of burden by the wealthier tribes.</p>
<p>The dinosaurs are not, in the strict sense, magebred. They are, instead, native fauna that the halflings have, over centuries, domesticated through patient training and selective breeding. The relationship is one of partnership: a halfling rides a clawfoot from the time both are young, and the bond persists for life.</p>
<h3>The Five Nations' View</h3>
<p>The Five Nations have, historically, regarded the Talenta Plains as empty territory awaiting settlement. The Talenta halflings have regarded the Five Nations as a series of unhelpful neighbors who occasionally try to take their land. The latter view is, by my professional assessment, the more accurate.</p>
<p class="marginalia">Mara Tellis spent two years living with the Tagor tribe of the central Plains. Her halfling host family is named in the dedication. They have, by long-standing Talenta custom, treated the dedication as their own property and circulated copies among the gathered tribes.</p>`
});

LIBRARY.books.push({
  title: "Argonnessen: Notes on Being Prey",
  author: "Anonymous (Wayfinder Foundation, deceased)",
  college: "tabernacle",
  year: "deposited 991 YK; opened 998 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This dispatch was deposited with the Wayfinder Foundation in 991 YK, on terms specifying its release upon confirmation of the author's death. The author was confirmed dead in 998 YK. The dispatch is reproduced here, with minor editorial annotations.</p>
<h3>What I Was Told Not to Write</h3>
<p>I was told, before I left, not to write of Argonnessen in detail. I was told that the dragons monitor what is published. I was told that scholars who publish too much accurate detail tend to vanish. I was told this by a scholar who had been to Argonnessen twice, in his youth, and who had, by the time I met him, an unusual habit of looking over his shoulder when discussing the subject.</p>
<p>I will write what I observed, on the understanding that this dispatch will only be read after my death.</p>
<h3>The Continent</h3>
<p>Argonnessen is the southern continent, across the Thunder Sea from Aerenal. It is the continent of dragons. It has, throughout recorded history, been guarded against intrusion. The dragons of Argonnessen are not, contrary to popular belief, a unified society. They are factions. They are courts. They are, by the few descriptions I trust, organized into something resembling political coalitions whose internal politics are at least as complex as those of any human nation, and whose timescales are measured in centuries.</p>
<h3>What I Saw</h3>
<p>I saw a city. I will not say where. I will not describe its features in identifiable detail. The city was inhabited by dragons. The dragons used it as humans use cities — for residence, for governance, for craft. They used it, also, for purposes I do not have human concepts for, in spaces whose architecture was not designed for any creature with my body plan, and which I navigated by being carried.</p>
<p>I was a guest. I was not a hostage, exactly, but I was not free to leave. I was permitted to observe what my hosts judged appropriate. I asked questions. The questions were answered, sometimes. The answers were, sometimes, accurate. The dragons of Argonnessen do not, by my observation, lie to mortals. They withhold. The withholding is more comprehensive than human deception could be.</p>
<h3>The Prophecy</h3>
<p>The dragons are, all of them, deeply involved with the Draconic Prophecy. They watch its unfolding. They argue about its interpretations. They take actions, sometimes elaborate, intended to push its trajectory in directions favoring their faction's preferred outcome. They consider mortal civilizations to be, primarily, components of the Prophecy's unfolding — pieces in a game whose rules the dragons partly understand and the mortals have not been told.</p>
<p>I was, in the dragons' view, a small piece of the Prophecy. I was useful for a season. I was returned to my own continent at the end of that season, with substantial gaps in my memory of the visit. The gaps are, by my own examination, surgically clean. The dragons did not damage me. The dragons removed what they wished to remove, and left me otherwise intact.</p>
<p>I have spent the years since wondering what I once knew.</p>
<p class="marginalia">The author of this dispatch is named in the deposit terms but is not disclosed in this published version. The author died of natural causes in late 998 YK at age seventy-three.</p>`
});

LIBRARY.books.push({
  title: "Droaam: Minutes from a Border Negotiation",
  author: "Ambassador Halric Vorr (filed manuscript)",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>What follows are the minutes from the third Brelish-Droaam border negotiation session, held at Graywall on the 14th and 15th of Vult, 996 YK. The minutes were filed with the Brelish Crown and have been deposited at the Library of Korranberg as part of the standing diplomatic exchange. The minutes are official. The minutes are also incomplete, in ways which the filing ambassador wishes to flag for any scholar consulting them.</p>
<h3>Day One</h3>
<p>Present for Breland: Ambassador Halric Vorr, Legal Counsel Yssa Tarn, Trade Commissioner Olen ir'Wynarn, two Sentinel Marshal observers (House Deneith).</p>
<p>Present for Droaam: the Daughters of Sora Kell (Sora Katra speaking; Sora Maenya present, silent; Sora Teraza present, silent), Cazhaak ambassador Sheshka the Queen of Stone, two minotaur observers, one harpy observer.</p>
<p>The session opened with the standard exchange of credentials. Sora Katra acknowledged the Brelish delegation by name, including the Sentinel Marshals, whose names had not been formally communicated. Ambassador Vorr noted this irregularity for the record.</p>
<p>Trade discussion proceeded for approximately three hours. Droaam's principal exports — minotaur labor, ogre labor, certain magical reagents — were reviewed. Brelish concerns about the conditions of contracted laborers were raised. Sora Katra's response was diplomatically sufficient. The response was not, by my private assessment, accurate. I have flagged this for the Crown's review.</p>
<h3>Day Two: Off-Record Comments</h3>
<p>Sora Katra requested, after the formal session closed, a private exchange with Ambassador Vorr. The exchange was held in an antechamber, without scribes. I am recording it now from memory, as best I can.</p>
<p>Sora Katra said: "Your nation will recognize ours within twenty years. The recognition will not come from Breland. The recognition will come from elsewhere, and Breland will follow. I am telling you this so that you can make your career arrangements appropriately." I asked her to clarify. She declined. She thanked me for my time.</p>
<p>I do not know what to make of this. I have informed the Crown. The Crown has not formally responded.</p>
<p class="marginalia">Ambassador Vorr remained at his post for two further years before retiring to Korranberg, where he has lived since 998 YK. He has, on multiple occasions, been visited by individuals he describes as "well-dressed strangers asking questions about Droaam." He has, on each occasion, declined to provide substantive answers.</p>`
});

LIBRARY.books.push({
  title: "Stormreach: The Khorvairean Foothold in Xen'drik",
  author: "Wayfinder Senior Doyen Lirien d'Lyrandar (ret.)",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Stormreach is a city of approximately twenty thousand on the northern coast of Xen'drik. It is the only substantial Khorvairean foothold on the continent of giants, and it is, by every measure, a strange place. It was built, originally, as a port for the slave trade in the centuries before the Last War. It was rebuilt, in the war's later decades, as a free trade city. It is, today, a coalition of factions whose only point of agreement is that the city should continue to exist.</p>
<h3>The Storm Lords</h3>
<p>The city's nominal rulers are the Storm Lords — a council of Lyrandar Storm Lords (Siberys-marked) and other prominent figures. The council's authority is real but limited. Below the council operate the dragonmarked houses, each maintaining substantial enclaves and their own internal governance. The Coin Lords of Sharn fund significant operations through proxy. The Wayfinder Foundation maintains its largest expedition base. House Tharashk operates the dragonshard prospecting concessions in the interior.</p>
<h3>What Lies Beyond</h3>
<p>What lies beyond Stormreach, in the Xen'drik interior, is the reason expeditions are funded. Xen'drik is a continent of ruins — drow city-states clinging to ancestral territories, giant ruins from the era of the Cul'sir Dominion, ancient artifacts in lost vaults, magical traditions older than Khorvaire's first civilizations. Every expedition to the interior returns either with significant findings or not at all. The ratio is approximately three to one in favor of returning. Many findings have funded careers and built reputations. Many disappearances have ended both.</p>
<p>The interior is not, in any practical sense, mapped. The maps that exist are partial and frequently inaccurate. The terrain shifts — not metaphorically; there are zones in which the spatial arrangement of features measurably differs from one expedition to the next. The drow are not, by any reasonable assessment, a unified hostile faction; some drow groups are willing to trade and parley, others to hunt outsiders to extinction. The giants are mostly fallen — the vast cities of the Cul'sir Dominion are ruins, the giants who survive are, in most cases, descendants of the slave-castes who outlived their masters.</p>
<p class="marginalia">Senior Doyen Lirien d'Lyrandar served in Stormreach for forty-three years. She retired to Korranberg in 994 YK. She continues to consult on Xen'drik expeditions and is, by professional consensus, the single most knowledgeable Khorvairean alive on the subject of Stormreach's politics.</p>`
});

LIBRARY.books.push({
  title: "The Lhazaar Principalities: Pirate Kings, Coastal Compacts, and the Sea That Pays",
  author: "Captain Halric Brennan",
  college: "soladas",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lhazaar Principalities are an archipelago and coastal region in the northeastern reaches of Khorvaire, comprising approximately a dozen significant island and coastal polities, some hundreds of smaller settlements, and a maritime culture that has, for a thousand years, balanced piracy, commerce, and a fierce independence from continental authority.</p>
<h3>The Principalities</h3>
<p>The major principalities — Cloudreach, Port Verge, Regalport, Tempest Isle, the Diresharks, the Bloodsails, the Seadragons, the Windwrights — are governed by hereditary or elected princes whose authority extends as far as their fleets and no farther. The princes meet, irregularly, at councils of varying formality. The councils produce agreements that hold for as long as the agreeing parties find them convenient.</p>
<h3>Piracy</h3>
<p>Piracy is, in the Lhazaar Principalities, not a marginal activity. It is a recognized profession, with formal etiquette, with informal regulation, with a long tradition of distinguishing between legitimate prey and inappropriate targets. A pirate captain operating under Lhazaar customs does not, for example, attack a vessel of a continental power that has paid the prince of his home port for safe passage. A pirate captain who violates this custom is, depending on the severity, either reprimanded by his prince or executed by his prince. The system functions because the alternatives — universal piracy, or no piracy — are, by the Lhazaar view, impractical and uneconomic, respectively.</p>
<p>The Five Nations consider the Lhazaar Principalities a chronic source of maritime trouble. The Lhazaar Principalities consider the Five Nations a chronic source of moralistic complaint that has, in recent centuries, been adequately handled by the careful payment of tribute and the occasional scapegoating of unaffiliated freebooters.</p>
<p class="marginalia">Captain Brennan operated out of Port Verge for thirty-one years before retiring to a small estate on the coast of Cloudreach. He continues to maintain commercial interests in three principalities and is, by his own description, "a former pirate, a current investor, and an aging man who would like the next generation to read what I have to say before the historians who never set foot on a ship rewrite all of it."</p>`
});

LIBRARY.books.push({
  title: "Valenar: The Dead Are Watching",
  author: "Visiting Lecturer Tirion of Aerenal",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The nation of Valenar is a project. It is the project of an elven warband — the Tairnadal — to recreate, on the territory granted them by the Treaty of Thronehold, a culture sufficiently authentic to honor their ancestors. The Tairnadal are not, in their own conception, settling new land. They are restoring an old practice, in a place where the practice can flourish.</p>
<h3>The Patron Ancestors</h3>
<p>Each Tairnadal warrior is, by long custom, dedicated to a patron ancestor — a long-dead Tairnadal hero whose deeds are remembered through ritual reenactment. The warrior, in some real sense the elven theology asserts, channels the ancestor in battle. The ancestor's spirit is not separate from the warrior. The warrior is the ancestor's continuation.</p>
<p>This belief is, by every Aereni examination I am aware of, not simply metaphorical. The Tairnadal warriors are, in some manner Aereni scholars do not fully understand, in genuine spiritual contact with their patron ancestors. The contact is not the deathless preservation of the Undying Court — the patron ancestors are not, technically, undead. They are, instead, somehow present in their channeled descendants, in a way that has no precise theological category in the Aereni tradition.</p>
<h3>The Treaty Granted Land</h3>
<p>Valenar's territory was granted at Thronehold from former Cyran lands. The grant was contested by Karrnath, by the remnants of the Cyran government-in-exile, and by various Brelish interests. The grant nonetheless stood. The Tairnadal arrived, in their numbers, and began the work of restoration. They built no cities by the Five Nations' definition. They constructed no permanent administrative structures. They live, instead, as their ancestors lived: in mobile bands, on horseback, in deep relationship with the land they have claimed.</p>
<p>The Five Nations regard this as a failure to govern. The Tairnadal regard it as governance. The disagreement is, at the foundation, a disagreement about what governance is.</p>
<p class="marginalia">Tirion of Aerenal lectured at Korranberg in 996 YK, in a series of three lectures that drew significant attendance from House Deneith heirs interested in the prospect of Tairnadal mercenary contracts. House Deneith, by report, did not secure the contracts.</p>`
});

LIBRARY.books.push({
  title: "The Demon Wastes: A Cartographer's Refusal",
  author: "Wayfinder Senior Cartographer Yenna Korr",
  college: "morridan",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I have spent forty years mapping the wilder regions of Khorvaire. I have mapped the Eldeen Reaches, the Talenta Plains, the Mror Holds, the borderlands of Q'barra. I have not, in forty years, produced a map of the Demon Wastes. I write this volume to explain why.</p>
<h3>What the Demon Wastes Are</h3>
<p>The Demon Wastes are a region in the far northwest of Khorvaire, beyond the Shadow Marches, beyond the Eldeen Reaches' western border. The region was, in pre-history, the seat of the rakshasa rajahs — the Lords of Dust, the Overlord-fiends bound by the couatls' sacrifice at the close of the Age of Demons. The bindings hold. The bindings are not, however, complete. The Demon Wastes is the region where the bindings are weakest, where the influence of the bound Overlords leaks most consistently into mortal reality, where the residue of Khyber's ancient rulers shapes the land itself.</p>
<h3>Why I Have Not Mapped It</h3>
<p>The Demon Wastes do not maintain consistent geography. A feature mapped in one expedition is not, reliably, in the same location on the next expedition. The terrain shifts. The shifts are not random; they appear to follow patterns related to the activities of the bound Overlords, the cultic rituals of the Carrion Tribes (the human inhabitants of the region), and other factors I have not been able to identify. A useful map of the Demon Wastes would have to incorporate temporal variability in a way no cartographic tradition I have been trained in is equipped to handle.</p>
<p>I have produced approximate sketches. I have produced caution-maps, for travelers who must cross small portions of the borderlands. I have not produced what I would call a map. I will not produce one. The region defeats the methods of my profession, and I will not pretend otherwise by publishing inadequate work that traveler's may rely on, with consequences that would be, in many cases, fatal.</p>
<p class="marginalia">Senior Cartographer Korr's refusal is, by Wayfinder Foundation policy, formally honored: the Foundation has not commissioned a successor cartographer for the Demon Wastes region. The region remains, in the Foundation's official maps, marked with the standard "regions defeating cartographic representation" symbol — a notation used in only two other locations on the continent.</p>`
});

LIBRARY.books.push({
  title: "Beneath the Shell-Law: The Kar'lassa Question",
  author: "Loremaster Kessler ir'Tain (collected fragments)",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Kar'lassa is a name that does not appear in most theological surveys. It is, depending on the tradition consulted, a creature, a goddess, a binding, a city, a state of being, or a combination of all of these. The traditions disagree. The disagreements are old. This volume collects what is known and presents what is contested, without attempting to resolve.</p>
<h3>Sarlonan Sources</h3>
<p>The Sarlonan tradition speaks of Kar'lassa as one of seven kraken-like beings who, in pre-history, served as the ocean's guardians. Six were destroyed in the Age of Demons. The seventh — Kar'lassa — survived, but in a form bound by the lawgivers of the Inspired's predecessors. The binding is associated with a covenant called the Shell-Law — a set of obligations the Inspired claim to maintain on behalf of mortal civilization.</p>
<h3>Khorvairean Sources</h3>
<p>The Khorvairean tradition is more fragmentary. Certain Lhazaar pirate songs reference "the Sleeper of Shells" in terms consistent with a Sarlonan original. Certain Aundairian theological texts reference a sealed entity called Kar'lassa in the context of pre-galifaran druidic theology. The Kraken Princes of the Lhazaar — a faction of pirate-kings claiming descent from the entity itself — assert direct connection. The Kraken Princes are not, by most scholars' assessment, a reliable source on theological history.</p>
<h3>What the Sources Agree On</h3>
<p>The sources agree, despite their disagreements: there exists, somewhere, a bound entity of substantial power. The binding is old. The binding is, in the views of multiple traditions, weakening. The weakening is not yet at a point of crisis. The weakening is, however, observable — by those traditions whose theological methods are equipped to observe it, which is to say, by the traditions whose claims about Kar'lassa cannot be independently verified.</p>
<p>I do not know whether to take the Kar'lassa tradition seriously. I am unable to dismiss it. I include this volume in the Library's holdings on the principle that traditions which persist across multiple isolated cultures are, almost always, recording <em>something</em>, even if the something is not what the tradition's adherents claim.</p>
<p class="marginalia">Loremaster Kessler has, on three occasions, formally requested funding for a research expedition to the Lhazaar Principalities to interview the Kraken Princes directly. The Library's review board has, on each occasion, declined.</p>`
});


// ─── BESTIARY (Balinor's Horn) ────────────────────────────────

LIBRARY.books.push({
  title: "Beasts of the Five Nations: A Working Naturalist's Compendium",
  author: "Naturalist Hess Vorell",
  college: "balinor",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This is a working compendium. It is intended for the use of huntsmen, farmers, travelers, and scholars who need to know what they are looking at when they encounter a creature in the field. It is not exhaustive. It does not include the magebred or the magical. It does not include the aberrant or the planar. It includes the beasts that walk the Five Nations as the Five Nations exist, in fields and forests and uplands, in numbers sufficient that the educated traveler may reasonably encounter them.</p>
<h3>The Common Predators</h3>
<p>The grey wolf of the temperate forests is the most widespread predator. Pack-bound, intelligent, cautious of humans except when desperate or when defending young. The brown bear of the upland forests is solitary, larger, more dangerous when surprised. The mountain cat of the higher elevations is rarely seen, more rarely confronted. The crested hawk of the open country preys on small mammals and is, by long custom, the totem of the Aundairian cavalry.</p>
<h3>The Common Prey</h3>
<p>The common deer in three varieties — red, fallow, roe. The hare in two — the moor hare and the lowland hare. The rabbit, smaller, denser populations near settlements. The wild boar, dangerous when cornered, an essential meat source for forest-edge communities. The various waterfowl, fishes, and small mammals that constitute the bulk of the rural Khorvairean diet.</p>
<h3>The Working Animals</h3>
<p>The Five Nations' working animals — horses, cattle, sheep, swine, dogs, cats, the various draught beasts of the lowlands — are descended, in most cases, from stock domesticated long before written records. The dragonmarked houses, principally Vadalis, have refined many of these lineages. The rural farmer's horse is, in most cases, a Vadalis-influenced descendant of an older line. The contemporary purebred working dogs of the Five Nations are nearly all Vadalis-traceable.</p>
<p class="marginalia">Naturalist Vorell wrote this compendium for use by the Korranberg Chronicle's rural correspondents and intended it as a reference rather than a comprehensive scholarly work. It has, in the eight years since publication, become the standard introductory text in Balinor's Horn.</p>`
});

LIBRARY.books.push({
  title: "Predators of the Eldeen Reaches",
  author: "Druid-Naturalist Felia of the Wardens of the Wood",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Eldeen Reaches host predator populations larger and more varied than any region of comparable size in the Five Nations. The reasons are several: lower human density, intact forest cover, the protected zones around druidic groves, and the Towering Wood's connection to Thelanian and other planar influences that support fauna found nowhere else.</p>
<h3>The Awakened</h3>
<p>The forests host populations of awakened beasts — animals whose intelligence has been raised, by druidic ritual or by manifest-zone influence, to the level of speech and reason. Awakened wolves, awakened bears, awakened large cats. They are not common. They are, where they exist, treated by the Wardens as members of the community. Travelers who encounter an awakened predator should not assume the predator's reasoning capacity protects them — an awakened wolf is not, in any reliable sense, less likely to attack than an unawakened wolf if conditions warrant. The reasoning capacity changes the calculation. It does not always change the conclusion.</p>
<h3>Dire Variants</h3>
<p>The Reaches support populations of dire wolves, dire boars, and dire bears in numbers larger than the open populations in the Five Nations. The dire variants are, by my naturalist's assessment, not strictly larger versions of their common counterparts but distinct subspecies whose evolutionary divergence is associated with manifest-zone influence on ancient breeding populations.</p>
<h3>The Worg and the Lycanthrope</h3>
<p>The worg — the larger, more aggressive cousin of the wolf, with rudimentary intelligence and a malicious cunning — is rare in the deep Reaches but present in significant populations in the western foothills. Lycanthropy was, in this region, more widespread before the Silver Crusade. The Crusade reduced lycanthropic populations dramatically and, more devastatingly, indiscriminately reduced the populations of innocent shifters, whose communities still mourn the genocide. True lycanthropes still exist in the Reaches in small, careful populations.</p>
<p class="marginalia">Druid-Naturalist Felia has lived in the deep Reaches for eighty years. She is, by her own description, "old enough to remember when the Crusade ended, young enough to still be angry about it."</p>`
});

LIBRARY.books.push({
  title: "Talenta Megafauna: Field Notes",
  author: "Visiting Researcher Mara Tellis",
  college: "balinor",
  year: "995 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This is a supplementary field notebook to my earlier Plains volume. Where the previous work focused on the halflings and their relationship with their domesticated dinosaur partners, this notebook focuses on the larger, wilder dinosaur populations that share the Plains.</p>
<h3>The Hammertail</h3>
<p>The hammertail — a quadrupedal armored herbivore approximately the size of a draft ox — is the largest commonly encountered Plains dinosaur. The species is herding, with adult bulls, cows, and yearlings traveling in groups of fifteen to forty. The tail is the species' principal defense: a heavy bony club, swung with significant force, capable of breaking bone in a predator that closes too aggressively.</p>
<h3>The Fang Titan</h3>
<p>The fang titan — the apex predator of the Plains — is rarely encountered by travelers, and rarely survives the encounter when it occurs. The species is solitary, territorial, and hunts at the megafaunal scale. Adult fang titans are approximately the size of a small house. They take hammertails. They take, on rare occasions, the ankylosaurine herbivores. They have been documented to take, in extremis, the largest of the Plains' herd dinosaurs.</p>
<p>The fang titan does not hunt halfling settlements. The Talenta tribes have, by long custom and through certain ritual practices not fully shared with outsiders, established a non-aggression pattern with the species. The pattern holds. The mechanism is unclear.</p>
<h3>The Glidewing Population</h3>
<p>The glidewing — the flying dinosaur used for messaging and hunting by the Talenta — is, in its wild form, both larger and more aggressive than the domesticated form. Wild glidewings hunt in pairs, are territorial during nesting season, and have been documented to take horse-sized prey when the prey is isolated. Travelers should not approach apparent glidewing nests, regardless of whether glidewings are visible at the time.</p>
<p class="marginalia">Mara Tellis was, during the field season for these notes, the guest of the Tagor tribe of the central Plains. The notes were filed with the Library on her return.</p>`
});

LIBRARY.books.push({
  title: "Below the Boughs: Bestiary of the Shadow Marches",
  author: "Tracker Yeshen of the Velderan",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Shadow Marches are wetlands. The Marches are forests. The Marches are, in the deep regions, places where neither category quite applies. The fauna of the Marches reflects the territory's character: secretive, varied, and frequently dangerous.</p>
<h3>The Marsh Stalkers</h3>
<p>The Marches' apex predators are not, in most regions, the large mammals one might expect. They are the stalkers — quadrupedal, scaled, slow-moving in the open and ambush-fast in the wetlands. The largest specimens reach the size of a small horse. They prey principally on the marsh's resident fauna and on travelers careless enough to camp without warding the perimeter.</p>
<h3>The Daelkyr Influence</h3>
<p>The Marches host, in their deep regions, fauna influenced by daelkyr presence in pre-history. The Gatekeepers' bindings are oldest and strongest in this region; the Gatekeepers were, after all, born of the orc druidic tradition that emerged here in response to the original daelkyr incursion. The bindings hold. The bindings are, however, leaking, in ways the Gatekeepers track carefully.</p>
<p>The leaks produce fauna with subtle anomalies: a stag with one too many antler tines. A wolf whose howl, on certain nights, produces effects in human listeners that are not the standard fear response. A type of large bird, occupying ecological niches normally held by hawks, whose feathers, examined at close range, show patterns that resemble nothing on any related bird elsewhere.</p>
<p>These are not, by my professional assessment, aberrations in the catastrophic sense. They are pre-aberrant: animals whose lineage has been exposed to daelkyr influence at a low level for many generations, producing variation outside the species' normal range without producing the hostile, anti-natural traits of true aberrant fauna.</p>
<p class="marginalia">Tracker Yeshen of the Velderan family has hunted the Marches for fifty-two years. He has been, on three occasions, paid by the Wayfinder Foundation to guide expeditions into the deep regions. He has, on each occasion, refused payment for his services, on the principle that "the Marches do not like to be paid for, and what does not like to be paid for should not be paid for."</p>`
});

LIBRARY.books.push({
  title: "The Carrion Index: A Catalog of Eldeen Aberrations",
  author: "Gatekeeper Druid Vorrak",
  college: "balinor",
  year: "991 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Gatekeepers maintain a catalog. We have maintained it for nine thousand years. The catalog records the aberrant creatures observed in our territories — the daelkyr's leavings, the things that have entered our world through the breaches and have not returned. The catalog is, by long custom, public. We share what we have catalogued, on the principle that knowledge of the enemy is the first defense against the enemy.</p>
<p>This Eldeen-localized excerpt records aberrations observed in the Reaches and the Towering Wood since the Gatekeepers' first surveys. The catalog is updated annually. The current entry-count is over four thousand. This volume reproduces the most significant entries.</p>
<h3>The Dolgaunt Patrol Pattern</h3>
<p>Dolgaunts — slender, eyeless humanoids with whiplike tendrils where their arms should be — are the most common surface-active aberrations in the Reaches' western fringe. They patrol, in groups of three to seven, through forest sectors that correspond to old daelkyr breach sites. They appear to be searching for something. The Gatekeepers have not determined what.</p>
<h3>The Dolgrim Population</h3>
<p>Dolgrims — squat, malformed, dual-mouthed creatures of the daelkyr's later modifications — are present in larger numbers, principally in cave systems beneath the Towering Wood's deeper regions. The dolgrim are not strategic. They are not patient. They are, in groups, capable of overrunning unprepared travelers.</p>
<h3>The Beholder Sites</h3>
<p>Three sites within the Reaches harbor beholders — the floating, multi-eyed aberrations whose gaze produces effects ranging from the lethal to the simply impossible. The Gatekeepers maintain perimeter wards around each site. The wards have held for centuries. The beholders within do not, to our knowledge, leave their sites. Travelers who enter the warded perimeters do not, with any reliability, return.</p>
<p class="marginalia">Gatekeeper Druid Vorrak signs this excerpt with the formal Gatekeeper sigil. The sigil is reproduced in the Library's edition with the consent of the order.</p>`
});

LIBRARY.books.push({
  title: "Serpents, Salamanders, and the Fires Below",
  author: "Magus-Naturalist Brell d'Phiarlan (excoriated)",
  college: "balinor",
  year: "991 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The fauna of the deeper geological strata of Khorvaire is poorly catalogued. The reasons are several: the strata are inaccessible to most surveyors. The fauna is, in many cases, hostile to mammalian observers. The dragonmarked houses with mining interests have, as a class, preferred to keep their findings proprietary rather than contribute to a general scholarly literature.</p>
<p>I have, for thirty years, conducted surveys of these strata at the margins of three major mine systems and within the natural cave networks of the Mror Holds, the Hoarfrost Mountains, and the southern reaches of the Demon Wastes. This volume reports my findings.</p>
<h3>The Salamander Population</h3>
<p>True fire salamanders — natives of the Plane of Fernia, frequently summoned in arcane practice — exist in small numbers in the deep strata of the geothermally active regions. They appear to enter our plane through manifest zones tied to Fernia. The native fauna's tolerance of these summoned visitors varies; in some sectors, the salamanders are, after generations, more naturalized than alien.</p>
<h3>The Earth-Serpents</h3>
<p>The Lhazaar Principalities' fishermen tell stories of leviathans. The Mror miners tell stories of earth-serpents — deep cave-dwelling reptilians of considerable size, capable of moving through tight tunnel networks at speeds inconsistent with their bulk, who prey on the smaller cave fauna and on, on rare occasions, miners who have ventured into untracked sectors. I have observed two specimens directly. The specimens were, by my measurements, approximately twelve feet in length. Larger specimens are reported. I have not verified the larger reports.</p>
<h3>What I Did Not Catalog</h3>
<p>I did not catalog certain entities I observed in the deepest reaches of the Mror surveys. The entities did not appear to be fauna in the natural-historical sense. The entities are, by my present assessment, of a different category, requiring tools my profession does not possess. I have referred my unprocessed observations to the Tabernacle for theological and planar-arcane review.</p>
<p class="marginalia">Magus-Naturalist Brell d'Phiarlan was excoriated from House Phiarlan in 988 YK over a publication dispute unrelated to this work. He continues his research independently, with funding from the Wayfinder Foundation and the Library.</p>`
});

LIBRARY.books.push({
  title: "Wings Over Breland: A Field Guide to Aerial Predators",
  author: "Falconer Dell ir'Tain",
  college: "balinor",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The skies above Breland are not empty. They host a denser population of flying predators than most ground-dwelling Brelish citizens realize. This guide is intended for shepherds, farmers, and small-stock breeders who need to identify aerial threats to their livestock.</p>
<h3>The Common Threats</h3>
<p>The crested hawk takes lambs and chickens. The eagle, where it nests in Breland's western uplands, takes larger prey including small calves and goats. The corellon — a larger raptor specific to certain Brelish regions — takes prey up to the size of yearling sheep. The ranger's owl, at night, takes poultry and small mammals.</p>
<h3>The Less Common</h3>
<p>The wyvern, while not native to Breland in significant populations, occurs occasionally in the uplands of the western frontier, in lineages descended from earlier Cyran migrations. Wyverns take prey up to the size of full-grown cattle and are, when active, a serious risk to any pastoral operation.</p>
<p>The hippogriff is, in most circumstances, more dangerous to its rider's pretensions than to livestock. Hippogriffs occur in small wild populations in the Brelish uplands and are occasionally taken for taming. The taming is difficult. The success rate is low. The mortality rate of unsuccessful tamings is high.</p>
<h3>The Aberrant</h3>
<p>Various aberrant flying creatures are documented in Breland's deep wild zones — the cliffs west of Sharn, the unsettled regions north of New Cyre, certain coastal cave systems. The aberrants are not, in any reliable pattern, predictable. Encounter reports are rare and frequently survived by accident rather than by skill. The Library accepts unverified reports for archival purposes only.</p>
<p class="marginalia">Falconer Dell maintains a working aviary outside Sharn, training hunting hawks for House Vadalis and for the Brelish Crown's mews. She has, by her own description, "complicated opinions about who flies what, but no complicated opinions about who eats what."</p>`
});

LIBRARY.books.push({
  title: "The Deep Roads Bestiary: Creatures of the Pre-Galifaran Strata",
  author: "Provost Marec ir'Tain (with Mror collaboration)",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This bestiary catalogs creatures encountered in the deep strata accessible through pre-Galifaran ruins, principally those of the Dhakaani Empire. The collaboration with Mror clan loremasters has been essential; many of the catalogued species have been observed by dwarven miners far more frequently than by surface-dwelling naturalists.</p>
<h3>The Cave Lurker</h3>
<p>The cave lurker — a quadrupedal aberration of pale flesh, eyeless, with a cluster of mouth-tendrils replacing the head's standard configuration — is among the most common aberrations encountered in the deep strata. The lurkers are not, by daelkyr standards, particularly hostile to lone travelers; they are ambush predators that take sleeping prey and avoid alerted prey when alternatives exist. They are, however, abundant. Any traveler camping in the deep strata should expect lurker presence in the surrounding tunnels.</p>
<h3>The Choker Cousin</h3>
<p>The chokers — small, four-armed, slate-colored aberrations who use their long limbs to ambush from above — exist in three known variants in the deep strata. The standard choker is well-documented. The "smiling" choker, larger, with a curiously human-like facial pattern, is encountered principally in the deepest Mror systems. The "patient" choker, smallest, with a behavioral pattern that includes long observation periods before strike, is the least documented and the most concerning to the Mror miners who have encountered it.</p>
<h3>The Constructed</h3>
<p>The deep strata also host constructs — devices, mechanisms, and structures of pre-Galifaran or pre-human manufacture, some still operational. These are not, technically, fauna. They are catalogued here because they occupy ecological niches: they patrol, they guard, they pursue. The deep-strata traveler must regard them as effectively part of the environmental hostility, regardless of whether they meet the strict definition of life.</p>
<p class="marginalia">The Mror collaboration on this bestiary involved loremasters from clans Soldorak, Mroranon, and Tordannon. The clans were, by clan custom, not in formal agreement on all observations. Disagreements are noted in the Library's annotated edition.</p>`
});

LIBRARY.books.push({
  title: "Monsters of the Mournland",
  author: "Wayfinder Foundation Compilation",
  college: "balinor",
  year: "997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This compilation collects observations from Wayfinder Foundation expeditions into the Mournland regarding the fauna — using the term loosely — encountered within the dead-grey wastes. The observations are, in some cases, contradictory. The contradictions are, by Foundation policy, preserved rather than reconciled, on the principle that the Mournland produces inconsistencies in the observers' own perceptions and that artificially harmonizing the record would distort it.</p>
<h3>The Living Spells</h3>
<p>Spells that were active at the moment of the Mourning did not, in many cases, end. They have, instead, achieved persistent independent existence. They roam the Mournland as living entities — fireballs that maintain their combustion without fuel, lightning bolts that travel along no conductive path, healing spells that wander and occasionally adhere to corpses producing their characteristic non-decay state. The living spells are not, in most cases, hostile in any directed sense. They are, however, dangerous in proportion to their power and the unpredictability of their movement.</p>
<h3>The Warforged Survivors</h3>
<p>Many warforged survived the Mourning. They had been, at the moment, present in numbers across Cyre — the war's principal industrial supplier and battlefield. Most of those who survived now serve under the Lord of Blades or have established small free communities in the Mournland's safer sectors. They are not, by any reasonable bestiary definition, monsters. They are catalogued here because most expeditions encounter them and most expeditions need to know how to assess threat versus parley.</p>
<h3>The Things That Should Not Move</h3>
<p>This category collects observations the Foundation has not been able to taxonomically classify. A staircase observed to walk. A field of grass that was, on subsequent observation, looking back. A wall in the ruins of an unnamed Cyran town that, when measured, had different dimensions on each measurement attempt. These are not, in any reasonable sense, fauna. They are catalogued because they pose threats to expedition members, and threat-classification is the bestiary's purpose, regardless of the threats' ontological category.</p>
<p class="marginalia">The Wayfinder Foundation continues to add to this compilation as new expedition reports become available. The current edition supersedes earlier compilations released in 994 and 995 YK, both of which contained observations subsequently determined to have been distortions of expedition members' perceptions rather than features of the Mournland itself.</p>`
});

LIBRARY.books.push({
  title: "Coasts and Currents: A Bestiary of Lhazaar Waters",
  author: "Captain Harrek Vell",
  college: "balinor",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lhazaar fisheries are old. The Lhazaar fishermen are older. We have known the creatures of these waters for a thousand years, and the knowledge has been passed, captain to captain, through methods that do not always correspond to what continental scholars consider proper documentation. This volume is my attempt to put the knowledge in scholarly form, for the use of the Library and for any captain who needs a written reference.</p>
<h3>The Common Fishery</h3>
<p>The Lhazaar fisheries support populations of the cod, the silver-back, the deep-pollock, the haddock, the various coastal flatfish, the shellfish (oyster, mussel, the cold-water lobster). These are the bread of the Principalities. They are not, by themselves, dangerous to fishermen. They support, however, larger predators whose presence affects the fishing.</p>
<h3>The Great Predators</h3>
<p>The white shark of the warmer southern waters takes seal and, on rare occasions, swimmers. The orca, larger, more intelligent, hunts in coordinated pods through most Lhazaar waters and is treated with respectful distance by experienced captains. The northern leviathan-shark — a much larger relative of the white, occurring principally in the colder waters off the Bloodsail Principality — takes prey up to and including small vessels.</p>
<h3>The Krakens</h3>
<p>The kraken population of the Lhazaar deep is, by professional consensus, real. The number of confirmed encounters is small — perhaps thirty in the past two centuries. The number of suspected encounters is far larger. The Kraken Princes' claim of bloodline descent from kraken-touched ancestors is, by the Lhazaar maritime view, neither confirmed nor outright dismissable. The krakens, where they exist, are vast — the largest documented specimen, by reliable account, was approximately the size of a small island. They do not, in most circumstances, surface. When they do surface, the consequences for nearby vessels are not, in most cases, survivable.</p>
<p>I have, in forty-one years at sea, observed one kraken at distance. I do not, on this evidence alone, claim certainty about the species. I do claim that the captains who report kraken sightings are not, in most cases, lying, and that the consistent features of their reports across centuries and across different Principalities suggest a real population of substantial entities the Lhazaar have lived with throughout our history.</p>
<p class="marginalia">Captain Harrek Vell continues to operate a small fleet out of Cloudreach. He has, on the publication of this volume, expressed the wish that "no captain who reads this book ever has to verify the kraken sections from personal experience."</p>`
});


// ─── COSMOLOGY (Tabernacle) ───────────────────────────────────

LIBRARY.books.push({
  title: "The Ring of Siberys: Cosmology of the Thirteen",
  author: "Astrotheologian Pellion ir'Rhaan",
  college: "tabernacle",
  year: "667 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This is my earlier work, predating <em>The Thirteenth Silence</em> by four years. It treats the cosmology of Eberron in conventional theological terms, before my later turn toward the more controversial Stationary World Hypothesis. I have permitted its continued circulation because the conventional account remains valid for most theological purposes, even as my own views have moved beyond it.</p>
<h3>The Three Progenitor Dragons</h3>
<p>The cosmology begins with the three progenitor dragons of pre-history: <strong>Siberys</strong>, the Dragon Above; <strong>Eberron</strong>, the Dragon Between; and <strong>Khyber</strong>, the Dragon Below. The traditional account describes a primordial conflict in which Khyber slew Siberys, was bound by Eberron's sacrifice, and is now confined within the world's deepest reaches. The remains of Siberys form the Ring of Siberys — the band of golden dragonshards visible in Eberron's sky. The remains of Eberron form the world itself. The remains of Khyber form the lightless interior, in which the bound entities of pre-history continue their long imprisonment.</p>
<h3>The Twelve Moons</h3>
<p>Eberron's twelve moons — Sypheros, Aryth, Vult, Olarune, Therendor, Eyre, Dravago, Nymm, Lharvion, Barrakas, Rhaan, Zarantyr — correspond, by long-established theological mapping, to twelve of the thirteen planes that surround Eberron in its cosmic position. Each moon's planar correspondence is associated with a season of greatest planar influence, with patron deities or entities whose worship is traditionally conducted under the moon's primacy, and with calendrical practices of considerable antiquity.</p>
<h3>The Thirteen Planes</h3>
<p>The thirteen planes are: Daanvi, the Perfect Order. Dal Quor, the Region of Dreams. Dolurrh, the Realm of the Dead. Fernia, the Sea of Fire. Irian, the Eternal Day. Kythri, the Churning Chaos. Lamannia, the Twilight Forest. Mabar, the Endless Night. Risia, the Plain of Ice. Shavarath, the Battleground. Syrania, the Azure Sky. Thelanis, the Faerie Court. Xoriat, the Realm of Madness. Each maintains a distinct relationship with Eberron, varying with the orbital position of its associated moon and with manifest-zone geography.</p>
<p class="marginalia">In <em>The Thirteenth Silence</em>, I argue that the absence of a thirteenth moon for Dal Quor is not coincidental but constitutive. The cosmology preserved in this volume does not address that argument. — P.</p>`
});

LIBRARY.books.push({
  title: "Manifest Zones: Where the Planes Touch the World",
  author: "Planar-Geomancer Tessen ir'Vahn",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>A manifest zone is a region of Eberron in which the influence of a particular plane is substantially stronger than the local average. The strongest manifest zones operate, in some real sense, as anchored portions of two planes — points where the boundary between Eberron and another plane is perforated, sometimes thinned to translucency, sometimes essentially absent during certain alignments.</p>
<h3>The Major Zones</h3>
<p>Several manifest zones are large enough and influential enough to shape the political geography of Khorvaire.</p>
<p><strong>Sharn</strong> sits in a Syranian zone. The Plane of the Heavens makes Sharn's vertical architecture possible — without its influence, the towers' loads would exceed structural feasibility. The zone's boundaries are not perfectly stable; observers have noted slight variations in apparent gravity at certain altitudes during certain Syranian alignments.</p>
<p><strong>Aundair's Glass Tower</strong> sits in a Lamannian zone. The Twilight Forest's influence on the surrounding agricultural valleys produces yields no other Five Nations region can match.</p>
<p><strong>Karrnath's Atur</strong> sits in a Mabaran zone. The Plane of the Endless Night reinforces the necromantic practices that Karrnathi tradition relied on during the war. The zone is, by my professional assessment, also responsible for the higher rates of Mabaran-related psychological phenomena observed in the local population.</p>
<p><strong>Stormhome</strong> sits in a Syranian-Risian boundary zone, with influences from both planes. The boundary is one of the rarer "double zones" — regions where two planes maintain simultaneous influence, in patterns that can be mapped but not, by current arcane theory, fully explained.</p>
<h3>What Manifest Zones Are For</h3>
<p>The structural-cosmological function of manifest zones is contested. The traditional theological account holds that they are leakage points — incidental thinnings of the planar boundary, persisting in regions where geological or arcane factors weaken the natural separation. The structural-architectural account, more recently advanced by arcane researchers including those at Korranberg, holds that manifest zones are deliberate features of the cosmological design — points where the planes are intentionally permitted to influence Eberron, providing the conditions under which certain cosmologically-required interactions can occur.</p>
<p>The structural-architectural account is not, currently, the dominant view. It is, however, the view that makes the most predictive sense of the observed pattern of zone distribution.</p>
<p class="marginalia">Planar-Geomancer Tessen has, in a separate sealed manuscript at the Library, argued for an extended structural-architectural view in which the manifest zones are interpreted as engineered components of a constructed cosmological system. The sealed manuscript is, on Tessen's standing instruction, available only with senior doyen authorization.</p>`
});

LIBRARY.books.push({
  title: "Xoriat: The Geometry of Madness",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Xoriat — the Realm of Madness — is the source of the daelkyr, the planar origin of the aberrations, and the most theologically and arcanely concerning of the thirteen planes. This volume treats Xoriat in the manner the planar-theological tradition recommends: from a careful distance, with attention to what is established, with disciplined skepticism toward what is asserted, and without attempting to "explore" what is, by every reliable account, hostile to mortal investigation.</p>
<h3>What Xoriat Is</h3>
<p>Xoriat is, by the available reports of those who have visited it briefly and survived, a plane in which the standard geometric, causal, and identity properties of mortal experience do not consistently apply. Distances do not correspond to travel times in stable patterns. Objects do not maintain consistent identity across observer perspectives. The mind of the observer is, by all accounts, the principal target of the plane's hostility — Xoriat's effect on visitors is not principally environmental but cognitive.</p>
<h3>The Daelkyr</h3>
<p>The daelkyr are Xoriat's native intelligences, or at least the natives that have been most consistently encountered. They are, by every report, vastly more powerful than mortal entities. They are, by the same reports, not consistently embodied — their relationship to physical form appears to be, from a mortal perspective, voluntary and partial. The daelkyr who entered Eberron during the original incursion took specific physical forms that allowed them to interact with our reality. Whether those forms reflect their "true" nature is a question whose answer, by every reliable theological account, mortal beings are not equipped to formulate.</p>
<h3>The Closure</h3>
<p>The Gatekeepers — the orc druidic tradition — sealed the major Xoriat breaches at the close of the daelkyr incursion, approximately nine thousand years ago. The seals hold. The seals are, however, ancient, and the Gatekeepers' membership has, over centuries, declined in numbers. The work of maintaining the seals continues, but it continues with fewer practitioners than the seals themselves were designed to assume.</p>
<p>This is the principal practical concern of contemporary Xoriat-theological work: not whether Xoriat is dangerous (which is established) and not what Xoriat contains (which is, in any concrete sense, unknown), but whether the maintenance infrastructure that has held Xoriat at bay for nine thousand years is being maintained at the levels its design assumes. The answer, by my professional assessment, is no. By how much, and with what consequences, are questions the Gatekeepers and the broader theological community are not yet equipped to answer.</p>
<p class="marginalia">Brother Kerrick declines to discuss Xoriat-related material verbally. His correspondence on the subject is conducted exclusively in writing and through Sivis-notarized intermediaries. He has, in his own account, found this protocol "useful for reasons that are not always articulable."</p>`
});

LIBRARY.books.push({
  title: "Between Fernia and Mabar: Notes on Polar-Opposite Planar Influences",
  author: "Magus-Theologian Yara d'Phiarlan",
  college: "tabernacle",
  year: "991 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The thirteen planes can be organized into pairings of opposed influence, in which two planes occupy positions of substantial cosmological tension. The pairings are not always intuitive. The most theologically productive analysis, in my assessment, is not the obvious oppositions but the subtler ones, where two planes that appear similar are, on closer examination, more deeply opposed than apparent rivals.</p>
<h3>Fernia and Risia</h3>
<p>Fernia (the Sea of Fire) and Risia (the Plain of Ice) are an obvious opposition: heat against cold, motion against stasis. They are, in many manifest zones, observable in opposition. The Lhazaar Bloodsails' coast contains a documented zone of Risian influence; the same Principality, less famously, contains a Fernian influence on its volcanic islands.</p>
<h3>Fernia and Mabar</h3>
<p>The less obvious and more theologically productive pairing is Fernia against Mabar. Both planes are, in mortal experience, about <em>consumption</em> — fire consumes what it burns, the Endless Night consumes the life-energy of beings within its influence. The opposition lies in <em>what</em> each consumes for. Fernia's consumption is generative — it produces light, heat, transformation; the consumption is a means to an end the plane's own dynamism advances. Mabar's consumption is terminal — it consumes the energy of others to sustain its own static, predatory persistence; the consumption produces nothing and feeds nothing but the consumer.</p>
<p>This analysis, when applied to mortal practitioners, distinguishes between the legitimate dynamism of Fernian-aligned magical work (alchemical transformations, fire-based enchantments, transmutative practices) and the parasitic stasis of Mabaran-aligned work (negative-energy necromancy, certain undead-creating practices, the Vampire-aligned traditions). The distinction is morally significant. Fernian work is dangerous but generative. Mabaran work, at its core, takes from others to sustain a self that, by its own internal logic, is incapable of generating value.</p>
<h3>The Practical Implication</h3>
<p>The Karrnathi-Blood-of-Vol traditions are, by this analysis, more deeply problematic than mainstream theological objection has acknowledged. The Karrnathi tradition's necromantic work is not merely <em>distasteful</em>. It is, in its planar alignment, on the side of the cosmos that consumes without generating, against the side that consumes in order to make. This is not a small theological concern. It is, in my assessment, the foundation of the Sovereign Host's oldest and least-articulated objection to the practice.</p>
<p class="marginalia">Magus-Theologian Yara d'Phiarlan continues her research at the Library and at the Cathedral of the Cogs in Sharn. Her views have been, by the Path of Light, formally engaged in scholarly correspondence; the correspondence is not yet concluded.</p>`
});

LIBRARY.books.push({
  title: "The Astral as Transit: A Practical Guide to Inter-Planar Movement",
  author: "Magus-Wayfarer Hass d'Sivis",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Astral plane, in the Eberron cosmology, is not one of the thirteen primary planes. It is, instead, the connective medium — the space between, through which most planar travel passes when the traveler does not have direct manifest-zone access to the destination. This volume is a practical guide for the planar traveler, not a theological treatise on the Astral's metaphysical status.</p>
<h3>Astral Transit</h3>
<p>Travel through the Astral is, in technical terms, faster than the apparent distances suggest. Time on the Astral does not correspond to time on Eberron in stable ratios. A traveler may experience hours of Astral transit and arrive at a destination only minutes after departure. A traveler may, conversely, experience minutes of Astral transit and arrive years after departure. The variability is not predictable in any general sense, though specific routes between specific destinations have been, over centuries, partly stabilized through repeated use.</p>
<h3>The Stable Routes</h3>
<p>The most reliable Astral routes are: Eberron-to-Syrania (commonly used for elemental binding work involving Syranian entities). Eberron-to-Lamannia (used principally by druidic traditions). Eberron-to-Daanvi (used by the modron-aligned and by certain devic theological practices). Eberron-to-Shavarath (used by certain warrior cult practices). The routes are, by long convention, more reliable in both temporal and spatial terms than the routes to less-traveled planes.</p>
<h3>The Unstable Routes</h3>
<p>Routes to Mabar, Xoriat, and Dal Quor are, in addition to their other hazards, temporally and spatially unstable in ways the standard routes are not. Travelers who attempt these routes should expect substantial deviation from intended arrival times and locations, and should plan accordingly.</p>
<p>The route to Dal Quor is, additionally, currently unavailable through ordinary planar travel. The plane of dreams is, since the orrery shift of approximately forty thousand years ago, no longer in conjunction with Eberron in the manner that makes standard travel possible. Travelers seeking Dal Quor must, at present, use indirect methods — entering through dreams, through the kalashtar, through Inspired technology of dubious provenance, or through other means whose reliability and morality are both questionable.</p>
<p class="marginalia">Magus-Wayfarer Hass d'Sivis is one of approximately a dozen living Khorvairean planar travelers with documented multi-plane transit experience. He has, in his career, visited eleven of the thirteen planes. He declines to discuss the two he has not visited.</p>`
});


// ─── PROPHECY (Tabernacle) ────────────────────────────────────

LIBRARY.books.push({
  title: "A Practical Introduction to the Draconic Prophecy",
  author: "Helian Keldari",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Most introductions to the Draconic Prophecy begin with what the Prophecy <em>is</em>. I will begin with what the Prophecy is <em>not</em>.</p>
<p>The Prophecy is not a story. The Prophecy is not a script. The Prophecy is not a fixed sequence of events that will, regardless of mortal action, unfold in a predetermined order. The Prophecy is not, in any straightforward sense, predictive. It does not tell the future. It does not fix the future. The future, regardless of the Prophecy, remains contested, plural, and shaped by the ongoing decisions of every entity capable of decision.</p>
<h3>What the Prophecy Is</h3>
<p>The Prophecy is, by the dragons' own account and by the most coherent mortal interpretations, a <em>system of pressures</em>. The Prophecy describes patterns of cause and consequence — vast, interlinked, multi-millennial — that govern the behavior of the cosmos at scales mortal beings rarely consider. The pressures are real. The pressures shape outcomes, in the same sense that gravity shapes outcomes: not deterministically, but with sufficient consistency that ignoring them produces predictable failures.</p>
<p>A Prophecy fragment — the form in which the Prophecy is recorded, in carved dragonshards, ancient stones, and certain natural patterns — is a description of a pressure. The fragment does not say "this will happen." The fragment says "the conditions for this exist; the conditions are pressing toward this outcome; the pressure can be resisted, redirected, or amplified by the actions of those who understand it."</p>
<h3>The Mortal Position</h3>
<p>Mortals are not the principal interpreters of the Prophecy. The dragons are. The dragons have, for as long as records exist, treated the Prophecy as the central object of their factional politics. Their factions split over interpretive disagreements. Their long-running activities — including their interventions in mortal affairs — are, in many cases, attempts to push the Prophecy's pressures toward outcomes their factions prefer.</p>
<p>Mortals are pieces in this game. Mortals can also, in some real but limited sense, be players — most often by accident, sometimes by deliberate alignment with one or another draconic faction. The kingdom of Argonnessen does not announce its alignments. The factions that intervene in mortal affairs do so through proxies, through subtle pressure, through the patient cultivation of mortal agents who do not always know they are being cultivated.</p>
<p class="marginalia">Helian Keldari is a Brelish-trained scholar resident at the Library since 991 YK. Her introductory volume is, by professional consensus, the standard text for non-specialist readers approaching the Prophecy for the first time.</p>`
});

LIBRARY.books.push({
  title: "Fragments, Not Futures: A Critical Reading of Prophecy Texts",
  author: "Helian Keldari",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume succeeds my earlier introduction. It is intended for readers who have grasped the basic concepts and are ready to engage with the methodological problems of working with actual Prophecy texts.</p>
<h3>The Translation Problem</h3>
<p>Prophecy fragments are recorded in Draconic. Draconic is, even for fluent speakers, a difficult language for the kind of high-density, multiply-referential content the Prophecy requires. A Prophecy fragment that fits in a single line of Draconic verse may, in any responsible Common translation, occupy three paragraphs. The translations are necessarily expansive. The expansions are, in many cases, contested between translators.</p>
<p>This is not a defect of the translators. It is a feature of the source. Draconic Prophecy text is, by the nature of its grammar, multiply-readable — a single verse may carry three or four valid readings, each pressing toward different mortal interpretations. The dragons themselves, by all evidence, do not always agree on which reading dominates. The disagreement among dragon factions is, in many cases, a disagreement about which reading is the operative one.</p>
<h3>The Context Problem</h3>
<p>A Prophecy fragment without context is, in most cases, useless. The fragment "the dragon-marked who walks the path of the lost city shall break the cycle" — to give a representative invented example — is, on its own, simply a clue. Which dragonmarked? Which lost city? Which cycle? The fragment becomes meaningful only when surrounded by other fragments that constrain the references — when the path is identified, the cycle is named, the lost city is locatable in space and time.</p>
<p>The dragons of Argonnessen maintain, by the few accounts I trust, vast archives that contextualize the fragments they consider operative. Mortal scholars do not have access to these archives. We work with the fragments we have recovered from carved stones, from ancient inscriptions, from the rare instances when the Prophecy itself manifests through natural patterns observable in our world. Our context is fragmentary. Our interpretations are correspondingly conditional.</p>
<h3>The Political Problem</h3>
<p>The dragons of Argonnessen have, throughout the history of mortal Prophecy scholarship, monitored mortal interpretive work. The monitoring is not, in most cases, hostile. The dragons have, on occasion, intervened to correct mortal interpretive errors that they considered dangerous. The dragons have, less often but more consequentially, intervened to suppress mortal interpretive work that they considered <em>too accurate</em>.</p>
<p>The pattern of suppression is, in itself, evidence of the Prophecy's reality. The dragons would not bother to suppress mortal speculation about a fictional system. They suppress, with patience and at considerable expense, only what they consider dangerous. The most thoroughly suppressed mortal Prophecy scholarship is, by this principle, the scholarship most likely to have been correct.</p>
<p class="marginalia">Keldari notes, in her preface, that this volume has already been the subject of two anonymous purchase-and-destruction attempts on its Korranberg-printed edition. The Library has, on the publisher's request, increased the number of copies retained in deep archive.</p>`
});

LIBRARY.books.push({
  title: "The Chamber and the Long Game: A History of Prophecy-Aligned Factions",
  author: "Anonymous (Aundairian Royal Eyes provenance suspected)",
  college: "tabernacle",
  year: "deposited 988 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Chamber is the dragon faction most concerned with mortal Prophecy interpretation. The Chamber's interventions in mortal affairs are, by long pattern, surgical: small actions at decisive moments, intended to shift Prophecy pressures in directions the Chamber's interpretations prefer. The Chamber's view is dominated, by available evidence, by the principle that the Prophecy's natural unfolding produces preferable outcomes to mortal attempts at interference.</p>
<h3>The Lords of Dust</h3>
<p>The Lords of Dust are the rakshasa rajahs and their servants — the descendants of the bound Overlords of pre-history, working from the shadows to undermine the bindings. Their Prophecy interest is straightforward: certain Prophecy unfoldings would weaken or break the bindings that imprison their masters. They work, patiently and over millennia, to advance those unfoldings. The Chamber, opposing the Lords of Dust, works to prevent them.</p>
<p>This conflict is, in some real sense, the principal Prophecy-aligned conflict on Khorvaire. Mortal nations, mortal politics, mortal ambitions are, from the perspective of this conflict, secondary effects. The Lords of Dust manipulate mortal events to shift Prophecy pressures. The Chamber counter-manipulates. The mortals affected do not, in most cases, know they are pieces.</p>
<h3>The Dreaming Dark</h3>
<p>The Dreaming Dark — the Sarlonan-Inspired faction whose ultimate masters are the il-lashtavar quori — operate from a different cosmological position. Their Prophecy interest is to prevent certain unfoldings that would lead to the il-lashtavar's replacement by a successor quori-form. Their work, on Khorvaire, is principally surveillance and assassination of mortals whose actions threaten the cosmological cycle their masters depend on. They are, in their methods, less subtle than the Chamber and less openly destructive than the Lords of Dust.</p>
<h3>The Other Factions</h3>
<p>Lesser Prophecy-aligned factions include various dragon-faction splinters within the Chamber, various rakshasa-aligned mortal cults serving the Lords of Dust, various Inspired and quori-influenced organizations serving the Dreaming Dark, and a handful of unaligned mortal scholarly projects (of which the Library of Korranberg is, in most accounts, the most consequential).</p>
<p>The unaligned mortal scholars do not, in most cases, intervene in Prophecy unfoldings. We catalog. We interpret. We attempt, where possible, to make the dragons' work visible to other mortals, on the principle that mortals informed of the game are at least slightly less likely to be played without their knowledge. This is not, by any reasonable assessment, a winning strategy. It is, by my professional assessment, the best strategy available to entities of our limited capacity.</p>
<p class="marginalia">This document was deposited at the Library in 988 YK on terms specifying anonymous public access without further restriction. The provenance is internally suggestive of Aundairian intelligence sources but has not been confirmed.</p>`
});

LIBRARY.books.push({
  title: "Blood, Stone, Silence: A Selection of Recovered Prophecy Fragments",
  author: "compiled by the Tabernacle's Prophecy Research Group",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume reproduces selected Prophecy fragments recovered from various Khorvairean sites. The fragments are presented in transliterated Draconic with three independent Common translations each. The translations differ. The differences are, by long convention, preserved rather than reconciled.</p>
<h3>The Mournland Fragment (recovered 994 YK, peripheral Mournland)</h3>
<p><em>Draconic:</em> "Sar'thelon ir'kessir vel'thar astryx. Khor'thalan ir'kess vel'shorath."</p>
<p><em>Translation A:</em> "When the heart of empire fails in stillness, the children of empire shall name their wound a country."</p>
<p><em>Translation B:</em> "Where the empire's center is silenced by force, those who survive will mistake silence for nation."</p>
<p><em>Translation C:</em> "The empire's stillness shall be inherited; the heirs shall not know they have inherited stillness."</p>
<p>Annotation: Fragments of this type, recovered after the Mourning, have been read by some scholars as Prophecy descriptions of the Mourning itself. The reading is not universally accepted. Pellion ir'Rhaan, in correspondence with the Research Group, has argued that the fragment is older than the Mourning and that its application to the Mourning is, at most, an instance of pre-existing Prophecy pressure manifesting in expected form.</p>
<h3>The Aerenal Fragment (recovered 989 YK, eastern Aerenal coast)</h3>
<p><em>Draconic:</em> "Vol'kessir astryx. Vol'thar shorath. Vol'kess ir'kessir vel'than."</p>
<p><em>Translation A:</em> "Death shall be still. Death shall stir. Death's silence shall name itself in the silence's own undoing."</p>
<p><em>Translation B:</em> "The mark of ending is still. The mark of ending stirs. The ending's silence is, itself, the breaking of silence."</p>
<p><em>Translation C:</em> "What was ended is not ended. What was silenced will speak. What was named for ending will, in time, name its own continuation."</p>
<p>Annotation: This fragment is, by general scholarly consensus, related to the line of Vol and the Mark of Death. Its specific reading is contested. Erandis Vol, by intelligence reports, considers the fragment significant and has been the subject of multiple draconic surveillance operations relating to her interpretation of it.</p>
<h3>The Korranberg Fragment (recovered, here, in 982 YK)</h3>
<p><em>Draconic:</em> "Kessir astryx. Kessir thar. Vel'kessir vel'astryx vel'thar."</p>
<p><em>Translation A:</em> "Stillness is. Stillness moves. The stillness moves into the stillness that is."</p>
<p><em>Translation B:</em> "The center holds. The center moves. The moving and the holding are both centerings."</p>
<p><em>Translation C:</em> "What stays stays. What goes goes. What stays and what goes are not the things they appear to be."</p>
<p>Annotation: This fragment was recovered from the Library's deepest stack-foundations during a routine maintenance dig in 982 YK. The fragment's recovery on Library grounds was, at the time, treated as an unusual coincidence. The Tabernacle Research Group has, in recent years, begun to suspect the recovery was not coincidental.</p>
<p class="marginalia">The Library's Prophecy archive contains over four hundred recovered fragments. This volume reproduces three. The full archive is accessible by senior scholar authorization.</p>`
});

LIBRARY.books.push({
  title: "When Prophecy Fails: Three Case Studies",
  author: "Helian Keldari",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The introductory texts on the Prophecy emphasize its reliability. They emphasize, correctly, that the Prophecy is a system of pressures with substantial predictive utility. They under-emphasize, by my assessment, the cases in which the Prophecy's expected unfoldings have not occurred — the cases in which Prophecy interpretations, including dragon faction interpretations, have proved wrong. This volume examines three.</p>
<h3>Case One: The Inspired Conjunction</h3>
<p>In approximately the seventh century YK, multiple Prophecy fragments converged in interpretations suggesting that a "great alignment" of Sarlonan and Khorvairean events would occur within a specific window. The Chamber and the Lords of Dust, by available evidence, both invested significant intervention resources in shaping the alignment toward their preferred outcomes. The window passed. The alignment did not occur. Subsequent fragments suggest that the dragons themselves were uncertain why; the most coherent post-hoc interpretation is that the Inspired's own counter-Prophecy operations on Sarlona, of which neither dragon faction was fully aware, had altered the pressures sufficiently to push the unfolding past the predicted window.</p>
<h3>Case Two: The Mourning</h3>
<p>The Mourning was, by available accounts, not predicted by any major Prophecy interpretation. The Chamber, by intelligence reports, was as surprised as anyone. The Lords of Dust did not appear to have been preparing for it. The dragon factions, in the years after the Mourning, have engaged in extensive retrospective Prophecy work attempting to determine which fragments, properly interpreted, would have predicted it. The retrospective work has not, by any account I trust, produced a satisfactory answer. The Mourning is, in the dragons' own assessments, a case in which something unprecedented occurred — something not within the system of pressures the Prophecy describes, but introducing a new pressure the system had to retroactively accommodate.</p>
<p>This is theologically significant. If the Prophecy were comprehensive, the Mourning would have been within it. The Prophecy is, therefore, either incomplete or interruptible by sources outside its scope. Both possibilities are, by their implications, more troubling than the Prophecy's adherents typically discuss.</p>
<h3>Case Three: The Treaty of Thronehold</h3>
<p>The Treaty of Thronehold, ending the Last War, was treated by several pre-existing Prophecy interpretations as impossible — as a mortal solution to a problem the Prophecy expected to resolve through other means. The mortals signed the treaty anyway. The Prophecy, by available evidence, has accommodated. The accommodation suggests that the Prophecy's pressures are more responsive to mortal initiative than the dragons' more deterministic interpretations admit.</p>
<p>What I conclude from these three cases: the Prophecy is real. The Prophecy is not, however, the only system of pressures shaping mortal events. The mortals' own actions can, in cases of sufficient initiative or sufficient surprise, alter the pressures the Prophecy describes. This is not a small finding. It is, in my judgment, the foundation of any responsible mortal engagement with Prophecy work.</p>
<p class="marginalia">Keldari's <em>When Prophecy Fails</em> has been favorably reviewed by the Tabernacle's senior doyens and harshly reviewed by certain dragon-aligned mortal proxies. The mixed reception suggests, by Keldari's own remark, that "I am pointing in approximately the right direction."</p>`
});

LIBRARY.books.push({
  title: "Necessary Absence: A Volian Commentary",
  author: "Magistrate Volian Tor of Korranberg",
  college: "tabernacle",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a companion to my earlier work on warforged citizenship. It addresses, more abstractly, a category of Prophecy-related thought I have come to call the "necessary absence" — the structural feature of certain Prophecy unfoldings in which the relevant action is the <em>not-doing</em> of something rather than the doing.</p>
<h3>The Concept</h3>
<p>Most Prophecy interpretations focus on actions: who does what, when, in which configuration. The richer Prophecy work focuses, additionally, on inactions: what is not done, by whom, in which configuration, with what consequences for the unfolding pressures.</p>
<p>A Prophecy fragment that names a person who must not act is, in operational terms, more delicate than a fragment naming a person who must act. The actor can be persuaded, threatened, killed, or replaced. The non-actor must, simply, not do the thing — and the non-doing is harder to coordinate than doing, because non-doing has no positive evidence and requires a constant negative discipline.</p>
<h3>The Vol Application</h3>
<p>The Vol fragment cited in the Tabernacle's Prophecy compilation — translated as "what was silenced will speak" or its variants — has, in my judgment, been read too actively. The dominant readings interpret the fragment as predicting the return of the Mark of Death, the resurrection of the line of Vol, the speaking of what was silenced. These readings are, by my analysis, partial. The fragment is also legible as a description of <em>continuing</em> silence — a description of the ongoing, active suppression that maintains the silence the fragment names.</p>
<p>If this reading is correct, the Vol fragment is not a prediction of return. The Vol fragment is a description of the necessary absence by which the line's destruction is maintained. The Sibling Kings of Aerenal, in this reading, are not preventing a Prophecy unfolding; they are <em>fulfilling</em> a Prophecy unfolding, by the continuous active non-action of the line's continuation.</p>
<h3>The Implication</h3>
<p>This implication is uncomfortable for several reasons. It suggests that the Aereni erasure of the Vol line is not merely a historical atrocity but a continuous theological-political project, one that the Prophecy itself, in some real sense, requires. It suggests that those of us who consider the erasure morally objectionable are, in the Prophecy's accounting, working against the system of pressures that the cosmos relies on. It suggests, further, that the question of whether to advocate for the rehabilitation of the Mark of Death is not merely a question of historical justice but a question of cosmological policy whose stakes are larger than any mortal court can adjudicate.</p>
<p>I do not know how to think about this. I include it here because I think the Prophecy work that has been done so far has not adequately addressed it.</p>
<p class="marginalia">Magistrate Tor's commentary on the necessary absence has been, by Tabernacle scholars, treated as one of the more original Prophecy contributions of the past decade. It has also been, by certain dragon-aligned proxies, treated with the cautious silence that, in the Prophecy literature's own language, may itself constitute a comment.</p>`
});


// ─── PHILOSOPHY (Tabernacle / occasional Aureon) ──────────────

LIBRARY.books.push({
  title: "A Just Cause: A Survey of War-Justification Traditions",
  author: "Brother Vellen of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Last War lasted one hundred and two years. The Last War produced, by all available estimates, more than a million combatant deaths and a much larger number of civilian deaths. The Last War was, by its participants and its later commentators, repeatedly described as <em>just</em>. This volume surveys the major traditions in which the war's justness was claimed.</p>
<h3>The Aundairian Tradition</h3>
<p>Aundair's claim was succession-based: Wrogar's line, descended from Jarot's eldest son, asserted continuity with the legitimate Galifar throne, and the war was framed as the protection of legitimate continuity against pretenders. The argument is internally coherent. The argument's principal weakness is the fact that Wrogar himself supported Mishann; his descendants' claim to his line therefore inherits a positional inversion that the Aundairian argument has, over a century, smoothed over but not resolved.</p>
<h3>The Thranish Tradition</h3>
<p>Thrane's claim was theocratic: Thalin's vision of the Silver Flame's mandate, his successors' continuation of the theocratic state, the framing of resistance as both political and religious obligation. The argument's coherence depends on the Silver Flame's explicit endorsement of Thalin's claim. The Flame's endorsement, by long-standing internal Church controversy, is contested. Tira Miron's couatl-mediated foundational vision did not specify dynastic political claims. The dynastic claim is, in technical theological terms, an inference whose foundations are unstable.</p>
<h3>The Karrnathi Tradition</h3>
<p>Karrnath's claim was militarist: Kaius's argument that the Galifaran kingdom, increasingly soft, required strong military leadership, and that the war was the necessary correction. The argument is, in its starkness, the most honest of the traditions; it does not pretend to legitimacy claims it cannot defend. It defends the war as a war of imposed military reform. This argument's weakness is that the imposed reform, after a century, did not occur; the war ended with five nations rather than one militarily-disciplined Galifar.</p>
<h3>The Brelish Tradition</h3>
<p>Breland's claim was democratic: Wroann's argument that the king's succession was an illegitimate selection method and that the people of each Galifaran territory should govern themselves. The argument is, in its premises, the most modern of the traditions. The argument's principal weakness is that Breland did not, in the war's century, develop democratic institutions in any form recognizable to its own founding rhetoric. Breland is, today, a constitutional monarchy. The democracy is partial. The argument has, in this sense, been retired by its own bearers.</p>
<h3>The Cyran Tradition</h3>
<p>Cyre's claim was the simplest: the throne was Mishann's, by legitimate succession affirmed by the dying king, and the war was the defense of that legitimate claim. This argument is the most coherent of the five. This argument's bearers are, since the Mourning, principally a refugee population without territory. The argument has not been disproved. The argument has been, in the most material sense, defeated by events.</p>
<p class="marginalia">Brother Vellen wrote this volume on commission from the Tabernacle, in part as a response to widespread post-war confusion about which justifications had been operative. He notes, in his preface, that "no tradition surveyed here has emerged from the war with its claims fully intact, and the survey may, in retrospect, read as a record of justifications that did not justify."</p>`
});

LIBRARY.books.push({
  title: "Sovereign and Six: A Layperson's Theology of the Host",
  author: "Brother Halloran of Korranberg",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Sovereign Host comprises nine deities, organized by long custom into the Sovereign Six (the principal deities of civilized life) and the Dark Six (the deities of disorder, conflict, and the powers civilization has, by long tradition, set against). This volume addresses the Sovereign Six.</p>
<h3>The Sovereign Six</h3>
<p><strong>Aureon</strong>, the Sovereign of Law and Lore, is the patron of magisters, scholars, and wizards. His domain is order, knowledge, and the institutions that preserve both. Aureon's worship is most concentrated in Aundair, in the legal professions across all Five Nations, and at the Library of Korranberg.</p>
<p><strong>Boldrei</strong>, the Sovereign of Hall and Hearth, is the patron of community, family, and the bonds of mutual obligation. Her worship is universal among rural populations and is, in many regions, the deity most closely associated with the day-to-day religious life of ordinary Khorvaireans.</p>
<p><strong>Dol Arrah</strong>, the Sovereign of Light and Honor, is the patron of just warfare, virtuous leadership, and the dawn. Her worship is concentrated among military officers, paladins, and the Brelish nobility.</p>
<p><strong>Dol Dorn</strong>, the Sovereign of Strength and Steel, is the patron of soldiers, athletes, and the disciplined practitioners of physical art. His worship is universal in military communities.</p>
<p><strong>Kol Korran</strong>, the Sovereign of World and Wealth, is the patron of merchants, traders, and the rituals of fair exchange. His worship is concentrated among the dragonmarked houses and in the merchant guilds of the major cities.</p>
<p><strong>Olladra</strong>, the Sovereign of Feast and Fortune, is the patron of luck, agriculture, hospitality, and the small mercies. Her worship is universal but is most explicitly practiced in farming communities and at the seasonal festivals.</p>
<p><strong>Onatar</strong>, the Sovereign of Fire and Forge, is the patron of crafts, smithies, and the disciplined transformation of substance. His worship is concentrated among House Cannith and other crafting traditions.</p>
<p><strong>Arawai</strong>, the Sovereign of Plenty, is the patron of agriculture, fertility, and the green growth of plants. Her worship is universal in farming communities.</p>
<p><strong>Balinor</strong>, the Sovereign of Horn and Hunt, is the patron of hunters, beasts, and the wild lands. His worship is concentrated in rural communities, in the Eldeen Reaches, and in the Korranberg college that bears his name.</p>
<p class="marginalia">Brother Halloran serves at the Library's Aureon shrine. He is, by long custom, also one of the Library's Pellic-tier clerks; he assists at the catalog desk on alternate weeks.</p>`
});

LIBRARY.books.push({
  title: "Karrnathi Necromancy: The Ethics of the Bound Dead",
  author: "Magistrate Anais ir'Tain (Korth)",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The use of necromantic magic in Karrnath's military, particularly during the famine years of the Last War, is the single most controversial military-theological topic of the post-war period. This volume treats the topic from a Karrnathi perspective. I do not claim neutrality. I claim only that the standard external accounts of Karrnathi necromancy substantially misrepresent both the practice and its rationale, and that a Karrnathi treatment is necessary for the broader theological discussion.</p>
<h3>What the Practice Was</h3>
<p>The Karrnathi military, during the famine years of approximately 910-920 YK, faced collapse. The state could not feed its soldiers. The state could not field its armies. The choice was: accept defeat, with all the consequences for Karrnathi sovereignty, or accept the assistance the Blood of Vol was offering — assistance that included both healing magic and the raising of the dead as auxiliary soldiers.</p>
<p>The dead in question were, by long Karrnathi convention, soldiers who had died in service and who had given pre-death consent to post-mortem military reanimation. The consent was formal, recorded, and witnessed. The Karrnathi undead are not, in the most cases, captured enemy dead reanimated against their will. They are veterans who chose, in life, to continue their service after death. This distinction is, by the standard external accounts, almost universally erased.</p>
<h3>The Theological Position</h3>
<p>The Karrnathi theological position holds that consensual post-mortem military service is morally distinguishable from non-consensual reanimation. The position is, by my own assessment, defensible. The position's defensibility does not, however, foreclose other objections.</p>
<p>The principal external objection, advanced most clearly by the Path of Light tradition, holds that any Mabaran-energy-aligned practice is theologically problematic regardless of consent — that the use of negative-energy magic to sustain post-mortem operation is, in itself, a draw on the cosmological energies opposed to the dynamism of life-aligned planes. This objection does not require non-consent to apply. The objection requires only that the practice exists, regardless of the moral status of those who choose to participate in it.</p>
<p>I find this objection serious. I do not, however, find it conclusive. The choice between Karrnathi sovereignty and the rejection of negative-energy military assistance was a real choice. The choice was made. The choice was, by the Karrnathi standards of the time, defensible. The standards were, in part, theological. The theology has held up, in Karrnath, better than its external critics would have predicted.</p>
<p class="marginalia">Magistrate Anais ir'Tain wrote this volume on commission from the Karrnathi Crown for distribution outside Karrnath. The Crown has, since the volume's publication, declined to comment on whether the document represents Karrnathi state theology or Magistrate Anais's private views.</p>`
});

LIBRARY.books.push({
  title: "The Reasonable Heretic: A Defense of Theological Disagreement",
  author: "Lirien of Thaliost, lay philosopher",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I left the priesthood of the Silver Flame in 996 YK. I left over a particular theological disagreement, the nature of which I have, in subsequent published work, made tolerably clear. This volume is not, however, about that disagreement. This volume is about the broader question: when should a serious theological adherent, in good faith, find themselves in disagreement with their tradition's authoritative teachings, and what should they do about it?</p>
<h3>The Wrong Answer</h3>
<p>The wrong answer, by my professional and personal assessment, is the answer my own tradition gave me when I raised my disagreement: that disagreement with the teaching is, in itself, evidence of the disagreer's failure of faith. This answer has the rhetorical merit of being unfalsifiable. It has the practical defect of foreclosing the conversation by which traditions correct themselves. A tradition that cannot be argued with cannot be improved. A tradition that cannot be improved becomes, over time, a tradition whose correctness is a function of accident rather than work.</p>
<h3>The Right Answer</h3>
<p>The right answer, by my judgment, has three parts.</p>
<p>First: the disagreer must take the disagreement seriously. The disagreement should not be raised lightly. The disagreer should have engaged, in good faith and at length, with the tradition's reasons for the teaching they question. The engagement should be substantive, not pro forma.</p>
<p>Second: the disagreer should articulate the disagreement in terms the tradition's adherents can recognize. The disagreement should not be framed in language that, by its construction, refuses the tradition's terms of debate. The disagreement should be a contribution to the tradition's own conversation, not a rejection of the conversation's vocabulary.</p>
<p>Third: the disagreer should be prepared to be wrong. The disagreement may, on examination, prove unfounded. The tradition may, on examination, prove correct. The disagreer's preparation to be wrong is the foundation of their authority to be right; the disagreer who insists on their own correctness from the outset has, by definition, not engaged in the disagreement they claim to be conducting.</p>
<h3>The Problem</h3>
<p>The problem, in my own case, was that the third condition was satisfied — I was prepared, when I raised my disagreement, to be wrong. The tradition's authoritative figures were not, by my observation, prepared to be wrong. The conversation could not, therefore, be the conversation I had attempted to begin. I left, not because I had concluded the tradition was wrong, but because the tradition had concluded that the conversation was a threat. I do not blame the tradition. I do, however, decline to participate, on its terms, in a conversation it has unilaterally closed.</p>
<p class="marginalia">Lirien of Thaliost continues to write and to teach informally. She accepts students at her residence in Korranberg, on the standing condition that the students are prepared to be wrong about whatever they came to her thinking they were right about.</p>`
});


// ─── KORRANBERG / ZILARGO INTERNAL ────────────────────────────

LIBRARY.books.push({
  title: "The Triumvirate: Zilargo's Quiet Government",
  author: "Triumvir-Scholar Tessen Ghallanda (ret.)",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Zilargo is governed by three. The three are not, in any straightforward sense, kings or chancellors or doges. They are facilitators of consensus among gnomes who have, by long custom, established that consensus is preferable to direction and that direction, when required, is best disguised as consensus.</p>
<h3>The Composition</h3>
<p>The Triumvirate, by founding convention, comprises three Triumvirs: one drawn from Korranberg (traditionally a senior figure of the Library), one from Trolanport (traditionally connected to the trade compacts and the Ghallanda enclaves), and one elected by rotation from the smaller Zil cities. The three serve overlapping terms; one steps down every four years, ensuring continuity.</p>
<h3>What the Triumvirate Does</h3>
<p>The Triumvirate handles what the gnomes consider government: foreign relations, trade compact maintenance, and the supervision of the Trust. It does not handle, in any direct sense, day-to-day governance of Zil cities. Each city governs itself through local councils. The Triumvirate intervenes only when local arrangements have failed and adjacent cities are affected.</p>
<h3>The Trust Question</h3>
<p>The relationship between the Triumvirate and the Trust is, in the formal documents, simple: the Triumvirate supervises the Trust. The Trust executes the Triumvirate's broader policies. The Triumvirate is the head; the Trust is the hand. The relationship in practice is more complicated. The Trust has, over centuries, developed institutional capacity, intelligence resources, and a depth of operational expertise that exceeds the Triumvirate's ability to direct in detail. The Triumvirate sets policy in broad terms. The Trust implements through methods the Triumvirate does not always know in detail, and would, by long custom, prefer not to know.</p>
<p class="marginalia">Triumvir-Scholar Tessen served as Korranberg's Triumvir from 980 to 988 YK and has, in retirement, taken up scholarly residency at the Library.</p>`
});

LIBRARY.books.push({
  title: "The Trust: Methods, Limits, and the Long Tradition",
  author: "Anonymous (filed without provenance)",
  college: "aureon",
  year: "deposited 989 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Trust is the Zilargon intelligence and enforcement organization. It was founded, in its earliest form, as the Library's honesty-enforcement syndicate — a discreet group within the Korranberg scholarly community responsible for identifying scholars whose reported research was false, whose credentials were fraudulent, or whose conduct violated the Library's standards. Over centuries, the syndicate's mandate broadened to include the broader social maintenance of Zilargon civic life.</p>
<h3>What the Trust Does</h3>
<p>The Trust monitors Zilargon residents and visitors. The monitoring is comprehensive in scope and discreet in execution. The Trust knows, in most cases, what visiting scholars are studying, with whom they correspond, where they spend their evenings, and what they say in private conversation. The Trust does not, in most cases, intervene. The Trust files. The filed information is consulted when intervention becomes necessary.</p>
<h3>The Limits</h3>
<p>The Trust has, in its long tradition, several formal limits. The Trust does not, by standing convention, target the dragonmarked houses' senior leadership. The Trust does not, by standing convention, intervene in matters internal to other Zil cities. The Trust does not, by standing convention, undertake operations that would require killing Zilargon citizens.</p>
<p>The third limit is the most honored. The Trust has, in its centuries of operation, killed remarkably few Zilargon citizens. The Trust has, however, killed substantially more non-citizens in operations conducted within Zilargon territory. Visitors who have made the wrong enemies, or who have gathered the wrong information, have, in known cases, simply not returned home.</p>
<p class="marginalia">This document was deposited at the Library through anonymous bequest in 989 YK. The Library's review board considered the document's potentially destabilizing effects on the Trust-Library relationship and concluded that, on balance, the document's content was already widely understood.</p>`
});

LIBRARY.books.push({
  title: "The Korranberg Chronicle: A History of the Press That Reads Continents",
  author: "Editor-in-Chief Halric d'Sivis (ret.)",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Korranberg Chronicle is the only continent-wide newspaper of Khorvaire. It is published three times weekly. It is shipped, by lightning rail and by airship and by various contracted slower routes, to every major city in the Five Nations. It is the single most influential cultural product of Zilargo. It is also, in ways its editors would prefer not to discuss publicly, an instrument of Zilargon foreign policy.</p>
<h3>The Founding</h3>
<p>The Chronicle was founded in 749 YK by a coalition of Korranberg scholars and the senior House Sivis enclave. The founders' stated intent was to provide accurate information about events on Khorvaire to scholars and merchants who needed reliable cross-national reporting. The founders' unstated intent was to give Zilargo a tool by which it could influence the larger Khorvairean conversation without appearing to do so. Both intentions have been served, in the two and a half centuries since founding, with considerable success.</p>
<h3>The Editorial Discipline</h3>
<p>The Chronicle's reporting is, by Chronicle convention, factually rigorous: errors of fact are corrected publicly, sources are verified. The Chronicle's editorial selections — what to report, what to emphasize, what to omit — are less rigorous in any external sense. The selections reflect, broadly, Zilargon interests. The Chronicle does not, in most cases, lie. The Chronicle selects.</p>
<h3>The Service Beyond Reporting</h3>
<p>The Chronicle's correspondent network is, additionally, an intelligence asset. The correspondents collect information that does not enter the printed paper. The information is filed with House Sivis. The information is, in some cases, eventually shared with the Trust, with the Triumvirate, or with other Zilargon institutions whose interests the Chronicle's editors consider compatible with the public service the paper provides.</p>
<p class="marginalia">Editor-in-Chief Halric retired in 992 YK after forty-seven years at the Chronicle. The volume's publication produced, by his own report, "an unusually polite letter from the Trust thanking me for my service to Zilargo and noting that they had read the manuscript with interest."</p>`
});

LIBRARY.books.push({
  title: "Korth's Tower of Twelve: The Founding Council and Its Compromises",
  author: "Magistrate Anais ir'Tain (Korth)",
  college: "soladas",
  year: "991 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Korth Edicts are the founding constitutional document of the dragonmarked houses' relationship with the unified Galifaran kingdom. They were negotiated, principally, in the Tower of Twelve at Korth, in a series of sessions over approximately two years, between the dragonmarked patriarchs and the early Galifaran crown.</p>
<h3>The Core Provisions</h3>
<p>The Edicts hold: <em>the houses shall not maintain standing armies</em>. <em>The houses shall not marry into the noble lines of the kingdom or its successor nations.</em> <em>The houses shall not hold noble titles or land grants in their corporate name.</em> The Edicts have held, with careful interpretive maintenance, for over a thousand years. They are, by general legal scholar consensus, among the most successful constitutional provisions in Khorvairean history.</p>
<h3>The Compromises</h3>
<p>The Edicts have also been, throughout their history, the subject of careful interpretive softening on the houses' side. The "no standing army" provision has been interpreted to permit substantial mercenary networks (House Deneith). The "no noble titles" provision has been interpreted to permit informal political influence approaching, in some cases, that of noble institutions without bearing the formal title. The interpretive softening is not, by my professional assessment, a defect of the Edicts. It is the mechanism by which the Edicts have remained operative through fundamental changes in the political environment.</p>
<h3>The Post-Treaty Question</h3>
<p>The Treaty of Thronehold has, since 996 YK, complicated the Edicts' enforcement environment. The successor nations of Galifar are no longer a single kingdom; the Edicts were drafted assuming a unified central authority capable of disciplining houses that exceeded their bounds. The disciplinary infrastructure no longer exists. Each successor nation negotiates with each house separately. The houses can play the nations against each other in ways the Edicts' drafters did not anticipate.</p>
<p class="marginalia">Magistrate Anais ir'Tain wrote this volume on commission from the Karrnathi Crown, as part of the Crown's ongoing internal review of dragonmarked house compliance with the Edicts.</p>`
});

LIBRARY.books.push({
  title: "Children of the Stones: A Study of Gnomish Cultural Practice",
  author: "Anthropologist Lirien of Thaliost",
  college: "balinor",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is an outsider's attempt to describe gnomish culture in terms a non-gnome reader can usefully apply. I am Aundairian. I have lived in Korranberg for twenty-two years.</p>
<h3>The Founding Premise</h3>
<p>Gnomish culture, as I understand it, rests on a founding premise that is unusual among the cultures I have studied: <em>most arrangements among intelligent beings are negotiable, and the work of negotiating well is the work of being civilized.</em> Almost every interaction in gnomish life is, by some interpretive frame, a negotiation. The negotiations are, by the gnomes' own ironic awareness, conducted with a directness that occasionally shocks foreigners.</p>
<h3>The Verbal Tradition</h3>
<p>Gnomes are, by reputation, talkative. The reputation is correct. Gnomes are also, less famously, attentive listeners. A gnomish conversation is, in form, an exchange of equals; the gnome who dominates a conversation has, by gnomish standards, lost the conversation. Foreigners often misread this. The dominant gnome, in most rooms, is the one watching the conversation and intervening rarely.</p>
<h3>The Trust Question</h3>
<p>The Trust is, in the gnomes' own framing, the institution that does the work no individual gnome wishes to do. The Trust monitors. The Trust intervenes. The Trust takes the moral and reputational costs of the work that, by gnomish standards, must be done but that no individual gnome should be asked to take responsibility for. The Trust is, in this framing, a kind of collective moral outsourcing: the responsibility for unpleasant necessary work is held by the institution rather than by any individual.</p>
<p>This framing is, by my outsider's assessment, both clarifying and somewhat self-serving. It clarifies how the Trust functions within gnomish self-understanding. It serves the gnomes by allowing them to maintain a cultural self-image of friendly, peaceful, consensus-oriented people while simultaneously employing an institution that, by any external assessment, conducts surveillance and occasional violence.</p>
<p class="marginalia">Lirien of Thaliost has, in addition to her anthropological work, taken Zilargon citizenship through the long-residence pathway in 996 YK.</p>`
});


// ─── SARLONA & THE DREAMING DARK ──────────────────────────────

LIBRARY.books.push({
  title: "Sarlona: The Continent of Inspired Rule",
  author: "Diplomatic Observer Yara d'Phiarlan",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Sarlona is the eastern continent. Sarlona was, in pre-history, the cradle of human civilization on the world of Eberron — humans came to Khorvaire from Sarlona, in waves of migration over thousands of years. Sarlona is, today, ruled by the Inspired: human bodies hosting quori spirits from the plane of Dal Quor, governing the unified Sarlonan state of Riedra through what the Inspired call the Path of Inspiration.</p>
<h3>The Inspired</h3>
<p>An Inspired is, in technical-theological terms, a vessel: a human body, raised from infancy in specific Sarlonan bloodlines, prepared to receive a quori spirit when the spirit is ready to incarnate. The quori spirit, once incarnated, governs through the human body for the body's natural lifespan. When the body dies, the quori spirit returns to Dal Quor. A new body is prepared. The cycle continues.</p>
<p>The Inspired present this arrangement, in their own theological literature, as a partnership. The presentation is, by every external assessment I am aware of, substantially misleading. The Inspired bloodlines are not partners; they are vessels. The human bodies' original consciousnesses are not, in any reliable account, retained after quori incarnation. The Inspired regime is, in functional terms, an alien occupation conducted through the bodies of bred host populations.</p>
<h3>The Riedran State</h3>
<p>Riedra encompasses approximately two-thirds of the Sarlonan continent. The state is highly organized. Crime is rare. Public works are extensive. The food supply is stable. The population is, by external observation, broadly compliant — not enthusiastic, not exactly rebellious, but engaged in a kind of resigned daily participation that suggests neither happiness nor active resistance.</p>
<h3>What Khorvaire Knows</h3>
<p>Khorvaire's diplomatic and trade relationship with Riedra is, by official position, normal. The relationship is also, by every honest assessment, fundamentally distorted by the fact that we are pretending to do business with a normal foreign government when we are in fact doing business with an alien occupation regime that has converted half a continent into its host system.</p>
<p class="marginalia">Yara d'Phiarlan served as a Sivis-credentialed diplomatic observer in Riedra from 989 to 992 YK. She has not returned to Sarlona. She has, on multiple occasions, declined invitations to do so.</p>`
});

LIBRARY.books.push({
  title: "The Dreaming Dark: A Theological-Political Study",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Dreaming Dark is the operational arm of the Inspired's foreign-influence work. The Dark's purpose, by every responsible analysis I have seen, is to extend Inspired influence over the rest of Eberron, principally through subtle long-term operations involving manipulation of dreams, infiltration of mortal institutions, and the cultivation of agents who often do not know they are agents.</p>
<h3>The Cosmological Background</h3>
<p>The Inspired's quori spirits are aligned with the il-lashtavar — the current dominant quori-form in Dal Quor, whose nature is, in the simplest available description, predatory and acquisitive. One way to delay the il-lashtavar's succession is to extend its influence outward — to anchor il-lashtavar-aligned activity in Eberron through the Inspired regime, in such a way that the cosmological pressures favoring the il-lashtavar's replacement are, by the il-lashtavar's calculation, weakened. The Dreaming Dark is, in this framing, an interplanar political operation conducted by Dal Quor's current dominant faction to delay its own decline.</p>
<h3>Operations on Khorvaire</h3>
<p>The Dreaming Dark operates principally through three vectors. <em>Dream manipulation</em>: the il-lashtavar-aligned quori can, with effort, influence the dreams of mortal targets, particularly those with significant political or arcane influence. <em>Recruited human agents</em>: certain humans, identified by the Dreaming Dark as susceptible, are cultivated through processes that begin as dream manipulation and develop into more direct ideological recruitment. <em>Direct quori-incarnation operations</em>: rarely, the Dreaming Dark places a quori spirit in a Khorvairean human body through irregular means.</p>
<h3>The Counter-Intelligence Position</h3>
<p>Khorvairean counter-intelligence work against the Dreaming Dark is fragmented. Each Five Nation maintains its own programs. The dragonmarked houses (particularly Phiarlan and Medani) maintain their own programs. The Trust monitors Dreaming Dark activity within Zilargo. The kalashtar — refugees from Sarlona who carry quori-spirit ancestors of the previous, displaced quori-form — provide the continent's most knowledgeable counter-Dreaming-Dark expertise, but their involvement is constrained by their small numbers and by ongoing Dreaming Dark assassination operations against them.</p>
<p class="marginalia">Brother Kerrick consults regularly with the kalashtar refugee community in Sharn. He has, by his own internal practice, not slept in a single uninterrupted span of more than four hours in the past six years.</p>`
});

LIBRARY.books.push({
  title: "The Kalashtar: Light Against Light",
  author: "Iridian Sutathra, kalashtar refugee, Sharn",
  college: "tabernacle",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I am kalashtar. My grandmother was the original of my line — a Sarlonan woman who, sixty-four years ago, accepted bonding with a quori spirit of the il-yannah faction, the displaced previous-dominant quori-form of Dal Quor. I am her descendant. I carry, by inheritance, the same quori spirit's ongoing presence in my consciousness.</p>
<h3>What We Are Not</h3>
<p>We are not Inspired. The Inspired are humans whose original consciousnesses have been suppressed to host quori spirits. We are humans whose original consciousnesses are <em>partnered with</em> quori spirits. The partnership is voluntary, on both sides, and is renewed at each generation through a recognition between the inheriting human and the inherited quori spirit.</p>
<h3>What We Are</h3>
<p>We are humans who carry, by ancestral bond, a connection to the il-yannah — the previous-dominant quori faction in Dal Quor, displaced approximately forty thousand years ago by the il-lashtavar. The il-yannah is, by its nature, oriented toward what the kalashtar tradition calls "the path of light": the cultivation of awareness, the resistance of predatory consciousness-patterns, the slow patient work of returning Dal Quor's dominant quori-form to a less hostile orientation.</p>
<p>This work, in our theological framing, requires that some carriers of the il-yannah's pattern remain present in Eberron throughout the long cycle of Dal Quor's dominance shifts. We are those carriers. We are, in some real sense, in voluntary cosmic exile from a plane that has, for forty thousand years, been hostile to our quori partners.</p>
<h3>The Hostility</h3>
<p>The il-lashtavar — currently dominant in Dal Quor, governing through the Inspired in Riedra — considers our existence on Eberron a threat. The threat is not military; we are not numerous and we are not strategically positioned. The threat is cosmological: the il-yannah's pattern, persisting on Eberron through us, anchors counter-pressures that the il-lashtavar would prefer to extinguish. The Dreaming Dark hunts us. We are, in small numbers, killed regularly. We persist in larger numbers. We will continue to persist.</p>
<p class="marginalia">Iridian Sutathra is one of approximately three hundred kalashtar currently resident in Sharn.</p>`
});

LIBRARY.books.push({
  title: "Sulatar: The Sun-Forges of the Drow",
  author: "Wayfinder Senior Scholar Berr ir'Vahn",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Sulatar are a faction of drow occupying the inland deserts of southern Xen'drik. They are, by both their own account and external assessment, descendants of an original drow-allied caste who served the giant Cul'sir Dominion as elemental binders and arcane laborers during the giants' empire. The Cul'sir empire fell. The giant masters scattered or died. The Sulatar persisted, as a culture and a tradition, in the desert sites where they had been concentrated. They have maintained their pre-fall practices for, by their own accounting, approximately forty thousand years.</p>
<h3>The Sun-Forges</h3>
<p>The Sulatar's principal cultural and arcane practice is the operation of the sun-forges — large solar-binding installations that capture the energy of the Xen'drik desert sun and channel it through ritualized arcane processes. The sun-forges produce, principally, two outputs: refined elemental fire suitable for arcane work, and ritually-bound fire-aligned constructs that serve the Sulatar in various capacities. The technical sophistication of the sun-forges substantially exceeds that of any current Khorvairean elemental binding work, by several orders of arcane theory.</p>
<h3>The Theological Position</h3>
<p>The Sulatar regard their original giant masters with theological reverence — not, by their own framing, as gods, but as predecessors whose empire the Sulatar are sworn to maintain in faithful approximation until the giants' return. The Sulatar believe, with sincerity, that the giants will return. The belief is not, externally, supportable. The belief is, internally, the foundation of Sulatar civilization.</p>
<p>The Wayfinder expeditions that have visited Sulatar settlements have, in most cases, been received with cautious tolerance — the Sulatar do not regard outsiders as natural enemies, but they do regard them as fundamentally peripheral to the work the Sulatar consider their continuing duty. The expeditions are permitted to observe selected practices, are denied access to the more sensitive sites, and are escorted to the boundary of Sulatar territory when the visits conclude.</p>
<p class="marginalia">Senior Scholar Berr has visited Sulatar territory four times. The visits have been, by his own assessment, "professionally valuable and personally exhausting; the Sulatar are perfectly polite, perfectly hospitable, and perfectly opaque."</p>`
});


// ─── PHILOSOPHY EXPANDED ──────────────────────────────────────

LIBRARY.books.push({
  title: "Justice in Magical Societies: A Comparative Study",
  author: "Magistrate Yara of Korranberg",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Magic complicates justice. The standard premise of legal systems — that crimes can be investigated through ordinary evidence, that testimony can be evaluated for credibility, that punishments can be calibrated to harm caused — assumes a world in which magic is either absent or rare enough not to dominate the system's ordinary operation. The world we inhabit is not that world.</p>
<h3>The Evidentiary Problem</h3>
<p>In a society where divination magic exists, the question is no longer "what evidence supports this charge?" but "which divination methods were used, by whom, with what reliability, and what counter-divinations did the defense offer?" The Karrnathi courts permit certain divination methods as evidence; the Brelish courts permit others; the Aundairian courts permit a third overlapping but incompatible set. The dragonmarked houses operate their own internal courts whose evidentiary standards differ again.</p>
<p>This is not a small problem. A defendant tried in Karrnath under one evidentiary standard, on the basis of divination evidence, may be acquitted in Breland on the same charges if the Brelish court does not recognize the divination method used.</p>
<h3>The Cohesion Problem</h3>
<p>Magic also makes the basic cohesion of legal practice difficult. Spells of charm, suggestion, geas, and the various forms of compelled testimony create circumstances in which witnesses cannot be relied upon to speak from their own uncoerced judgment. The defense is forever raising magical-coercion doubts. The prosecution is forever raising magical-influence doubts about the defense's witnesses. The system grinds on, but each individual case carries a substantially higher uncertainty than would be the case in a less magically-permeated society.</p>
<h3>The Solution</h3>
<p>I do not have one. The volume catalogs the problem rather than resolving it. The honest position, in my professional view, is that magical societies cannot have justice systems with the precision that ordinary legal theory aspires to. Magical societies have justice approximations, with substantially more arbitrary outcomes than the formal rhetoric of the courts admits. We work within this. We recognize, in our quieter moments, that we are working within it.</p>
<p class="marginalia">Magistrate Yara is one of three serving magistrates on the Korranberg High Bench. She is, by reputation, the most willing of the three to write candidly about the limits of her profession.</p>`
});

LIBRARY.books.push({
  title: "Honorable Death: An Argument for the Right to End",
  author: "Lirien of Thaliost, lay philosopher",
  college: "tabernacle",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume defends, against the dominant traditions of Khorvairean theology, the proposition that an intelligent being has a recognizable moral right to choose the time and manner of their own death, under conditions of considered judgment and absent pressure from interested parties.</p>
<h3>The Standard Position</h3>
<p>Most Khorvairean theological traditions hold that the right to end one's life rests with the gods (or, in non-theistic traditions, with the natural order of which the individual is a part). The Sovereign Host is broadly opposed to suicide on the grounds that the soul's term in mortal life is determined by the Sovereigns. The Silver Flame is, with theological qualifications, similarly opposed. The Path of Light is more permissive but emphasizes that the choice should be informed by deep meditation and not by transient suffering.</p>
<h3>My Position</h3>
<p>The standard positions, examined closely, share a structural feature: they place the authority for the timing of death somewhere outside the dying person. The gods, the natural order, the cosmic dream — all are, by their nature, not consultable in any direct way that lets the dying person verify they have the relevant authority's permission. The dying person is asked to defer to a judgment they cannot test against an authority they cannot reach.</p>
<p>This is not, in my judgment, a defensible structure for an authority claim. The dying person is the person whose life is being ended. The dying person is the person whose suffering is being either continued or ended. The dying person is the person who knows, with greater intimacy than any other party, the relevant facts of the dying person's situation.</p>
<p>The standard positions' insistence that the dying person defer to external authority has, in my experience of the cases the Cathedral and the Library see, two real costs. First: it extends suffering that the dying person, by their own judgment, would have ended. Second: it forces those who would, in any case, end their lives to do so in secret, in shame, without the support of those they love and the rituals of their tradition. Both costs are substantial. Neither cost is offset, in my view, by the benefit the standard positions claim to provide.</p>
<h3>The Limits of My Position</h3>
<p>I do not argue that all suicides are well-considered. I do not argue that grief, despair, and untreated illness do not produce decisions the decider would, in better moments, repudiate. I argue, more narrowly, that the dying person who has, with care, with consultation, and over time, judged their own continued life to be unbearable, has the right to act on that judgment. The right is not absolute. The right is, however, real. The standard traditions, by denying it, do harm.</p>
<p class="marginalia">Lirien of Thaliost has, in association with this volume, established a small mutual-support network in Korranberg for those whose end-of-life decisions are not adequately supported by their tradition's official theology. The network does not advocate suicide. The network supports those who have, on their own, decided.</p>`
});

LIBRARY.books.push({
  title: "An Argument Against Mercy",
  author: "Anonymous (Karrnathi military provenance suspected)",
  college: "tabernacle",
  year: "deposited 985 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume was deposited at the Library through anonymous bequest in 985 YK. The deposit terms specified its release without restriction. The internal evidence suggests Karrnathi military authorship, possibly senior. The argument is presented as a polemic; it is reproduced here for the use of scholars who wish to engage with positions they may find uncomfortable.</p>
<h3>The Thesis</h3>
<p>Mercy is a moral indulgence we cannot afford. Mercy requires the moral agent to suspend the harms that justice requires, on the basis that the recipient of justice has, in some way, suffered enough or repented enough or otherwise become deserving of release from the consequences their actions earned. The suspension feels, to the merciful agent, like virtue. It is not virtue. It is the agent prioritizing their own emotional comfort over the requirements of the moral order their actions are supposed to maintain.</p>
<p>A war is a sustained social cooperation in killing. Mercy in war is the soldier's choice to spare an enemy. Mercy is, in this context, the soldier choosing to set aside the enemy's status as an enemy in favor of the enemy's status as a fellow being. The choice feels noble. The choice is also, in proportion to the soldier's ability to act on it, a betrayal of the cooperative project the soldier is part of. The other soldiers in the unit, who were depending on the soldier to do the work the unit had agreed to do, have been let down by the merciful soldier's preference for their own moral comfort.</p>
<h3>The Argument</h3>
<p>The author argues that mercy, properly understood, is an institutional function. Institutions can extend mercy because institutions can balance the mercy against the broader project the mercy might compromise. Individual agents cannot reliably perform this balance. Individual agents who extend mercy as if they were institutions are, in most cases, simply abandoning the institutional project under cover of moral language.</p>
<p>The argument has, in its narrow framing, force. The argument's principal weakness is that it does not address what happens when the institutional project itself is unjust. An unjust institution issuing instructions to its agents has, by this argument, the same authority as a just institution. The agents are obliged to suppress their mercy in either case. The argument provides no resources for the agent who has, on examination, concluded that the institution they serve is itself the source of harm.</p>
<p class="marginalia">The Library's review board considered this volume's depositing carefully. The conclusion was that, while the argument is morally challenging, it is also philosophically substantive and worth preserving as a representative of a position that historically and currently has serious adherents. Engagement with the argument is, by long Library tradition, the appropriate response to it; suppression would not.</p>`
});

LIBRARY.books.push({
  title: "The Aurum: Wealth, Influence, and the Quiet Empire",
  author: "Anonymous (Brelish Royal Eyes attribution)",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Aurum is a society of wealthy individuals — merchants, nobles, dragonmarked-house seniors, occasional crowned heads — bound by a shared interest in the accumulation and protection of wealth, and by membership rituals whose details the society does not publicize.</p>
<h3>The Public Face</h3>
<p>The Aurum presents itself, publicly, as a fraternal association for the wealthy: a club, with chapters in major cities, whose purposes include charitable giving, networking among members, and the celebration of commercial accomplishment. The public face is not, strictly speaking, a fiction. The Aurum does engage in charitable work. The Aurum does provide networking. The public face is, however, a cover for activities the public face does not include.</p>
<h3>The Concentric Rings</h3>
<p>The Aurum is structured in concentric rings of increasing influence. The outer ring — the Copper Concord — comprises ordinary wealthy members. The Silver Concord includes those whose wealth and influence have proven sufficient to bring them into the society's more substantive activities. The Gold Concord is smaller, more exclusive, and engages in coordinated commercial and political activity that the Copper members do not see. The Platinum Concord, smaller still, is the society's effective leadership.</p>
<p>Above the Platinum Concord is the Shadow Cabinet — the inner circle whose membership is not revealed to the rest of the society and whose activities are, by the few accounts available to outside observers, sufficient to qualify the society as a coordinated political-commercial influence operation rather than a fraternal organization.</p>
<h3>The Question of Influence</h3>
<p>The Aurum's influence on Khorvairean affairs is contested in scholarly assessment. The skeptical position holds that the Aurum is principally a status organization whose actual coordinated activity is modest. The activist position holds that the Aurum is a substantial behind-the-scenes influence on commercial regulation, on dragonmarked house disputes, on certain political appointments, and on the broader trajectory of Khorvairean post-war reconstruction. The truth is, by the available evidence, somewhere in the middle, with substantial variation by location and by year.</p>
<p class="marginalia">This document was filed with the Library through Brelish diplomatic channels in 994 YK. The Brelish Crown's interest in the Aurum is, by my professional assessment, real but cautious; the Crown does not wish to provoke a society whose membership includes parties the Crown depends on for various commercial and political services.</p>`
});

LIBRARY.books.push({
  title: "The Closed Circle of Sharn",
  author: "Inquisitive Tessen d'Medani",
  college: "soladas",
  year: "994 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This document is filed at the Library with restricted access. It addresses an organization whose existence the city government of Sharn does not officially acknowledge and whose membership the organization itself takes substantial pains to conceal. The investigation reported in this document is my own, conducted over six years, principally through inquisitive work and through cultivated sources within several of the organization's known proxy operations.</p>
<h3>What the Closed Circle Is</h3>
<p>The Closed Circle is a Sharn-based organization, twelve to twenty members, drawn from the senior wealthy of the city — Cannith-affiliated, Coin Lord-affiliated, certain Aurum members, and a small number of crime-aligned senior figures. The organization's purpose, by my best assessment, is the coordinated maintenance of Sharn's existing power structure against any reform pressure that would reduce the influence of its current senior members.</p>
<p>The Closed Circle does not, by my evidence, operate principally through violence. The Closed Circle operates through coordinated political-economic action: simultaneous decisions, by senior figures whose individual decisions would not be remarkable, that combine to produce outcomes the senior figures could not have produced individually. A reform proposal that would reduce the Coin Lords' regulatory authority is not assassinated. The reform proposal is, instead, opposed by twelve to twenty senior figures whose opposition is, in each individual case, defensibly framed in terms of their formal interests, but whose combined opposition kills the proposal in committee.</p>
<h3>The Investigation</h3>
<p>I have identified, with varying confidence, fourteen members of the Closed Circle. The list is in the supplementary file at the Library. The list will not be published. The list is documented for the use of future inquisitives and for any successor scholar whose work might benefit from knowing where to begin.</p>
<p>I do not recommend that the list be made public. The Closed Circle is not, by available evidence, breaking laws on a scale that would justify a criminal prosecution. The Closed Circle is, instead, conducting the kind of coordinated political-economic activity that the laws of Breland and of Sharn substantially permit. Public exposure would damage the membership's reputations without producing legal consequences proportionate to the damage. The damage would, in turn, generate retaliatory action against the parties (including me) responsible for the exposure.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior inquisitives, magistrates of senior rank, and Library scholars holding a Senior Doyen's authorization. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "The Heart of Galifar: Anatomy of a Cult",
  author: "Brelish Royal Eyes (filed without individual attribution)",
  college: "soladas",
  year: "997 YK",
  restricted: true,
  type: "dispatch",
  content: () => `<p>This document is filed at the Library under standing Royal Eyes deposit. It reports on an organization the Royal Eyes have been monitoring for approximately eight years. The organization presents itself as a Galifar-restoration political movement; the investigation has determined that it is, in operational terms, a cult.</p>
<h3>The Surface</h3>
<p>The Heart of Galifar presents publicly as a movement advocating the political reunification of the successor nations into a restored Galifar. The advocacy is, on its surface, straightforwardly political: rallies, pamphlets, electoral participation in local Brelish councils, financial support for sympathetic candidates. The surface is unremarkable. Many similar movements operate openly in all five nations.</p>
<h3>The Interior</h3>
<p>The investigation has determined that the surface political work is funded and directed by an inner organization whose recruitment, ideology, and operational practices are not those of an ordinary political movement. The inner organization conducts what the Royal Eyes' analyst designated as "intensified retreats" for its more committed members. The retreats involve sleep deprivation, isolation from family contacts, sustained ideological instruction, and (in the cases that have been documented through escaped former members) certain ritual practices whose precise nature the documentation does not describe but whose effects on participants have been clinically severe.</p>
<p>Former members who have escaped report long-term psychological effects: persistent anxiety, dissociative episodes, difficulty maintaining ordinary relationships with non-members. The pattern is consistent with cult-extraction literature in the broader social-scientific record. The pattern suggests that the Heart of Galifar's inner work is not, in any reasonable sense, political organization. It is consciousness modification at scale.</p>
<h3>The Operational Concern</h3>
<p>The Royal Eyes' principal concern is not the cult's political effectiveness — the surface political work is too marginal to matter electorally — but the question of who is funding it and to what end. The funding traces, in the investigation's findings, are deliberately obscured but suggest the involvement of dragonmarked-house resources channeled through proxies. Which house, and for what purpose, the investigation has not concluded.</p>
<p>The cult's leadership, by available evidence, is not itself the directing authority. The leadership reports, through filtered channels, to parties the leadership themselves do not appear to know in detail. The cult is, in functional terms, a tool whose user has not been identified.</p>
<p class="marginalia">Trust ledger: This volume is held under Royal Eyes deposit terms. Access requires confirmation through the Brelish embassy in Korranberg or through Senior Doyen authorization. Inquiry has been logged.</p>`
});


// ─── TRAVELER MATERIAL & RECOVERED NOTES ──────────────────────

LIBRARY.books.push({
  title: "The Hundred Faces of the Traveler",
  author: "compiled by Brother Vellen of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Traveler is the deity of the Dark Six who is, by long theological tradition, also the deity most closely engaged with mortal innovation, change, and the unexpected reshaping of established arrangements. The Traveler is, depending on the tradition consulted, a trickster, a teacher, a saboteur, a liberator, or a force of disruption whose individual interventions are unpredictable but whose cumulative effect is the resistance of stagnation.</p>
<h3>The Compilation</h3>
<p>This volume compiles one hundred Traveler stories from across Khorvairean folk traditions. The stories vary widely in setting, in protagonist, in the apparent moral, and in whether the Traveler is treated as a hero, a villain, or a more ambiguous figure. The variations are themselves a clue to the deity's nature: the Traveler does not, in mortal accounts, present consistently. The Traveler shifts. The shifting is, by the most coherent theological readings, the deity's principal ongoing work.</p>
<h3>Recurring Patterns</h3>
<p>Certain patterns recur across the hundred stories. <em>The unexpected gift</em>: the Traveler appears as a stranger and offers something the recipient did not know they needed. The gift is accepted; consequences follow that, by the recipient's eventual reckoning, were unforeseen but valuable. <em>The unwanted lesson</em>: the Traveler appears as a stranger and brings about a circumstance in which the protagonist's existing arrangements collapse. The collapse is initially perceived as harm; the protagonist later realizes the collapse opened paths that would otherwise have been closed. <em>The mirror</em>: the Traveler appears in the form of the protagonist's own image and engages the protagonist in a conversation that reveals something the protagonist had been concealing from themselves.</p>
<h3>The Theological Question</h3>
<p>Is the Traveler benevolent? The question is, by the dominant theological tradition's framing, the wrong question. The Traveler is, by the tradition's framing, the deity of <em>change</em>. Change cannot be evaluated as benevolent or malevolent in itself; change can only be evaluated by its outcomes, in particular contexts, for particular parties. The Traveler does not promise good outcomes. The Traveler promises that the existing arrangements will not last. The Traveler's worshipers (such as they are) accept this. The Traveler's adversaries — those whose interests are served by existing arrangements — fear it.</p>
<p class="marginalia">Brother Vellen does not himself worship the Traveler. He has, in his preface, noted that "the Traveler is the deity I find most theologically interesting and least personally appealing; the volume is offered in the spirit of inquiry rather than devotion."</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Wanderer's Coat",
  author: "Anonymous (Mournland salvage, 995 YK)",
  college: "tabernacle",
  year: "found 995 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document is a single sheet of waxed parchment, recovered by a Wayfinder Foundation salvage expedition in the eastern Mournland in 995 YK. The expedition recovered the document from the personal effects of a corpse whose identity could not be determined. The corpse was preserved in the Mournland's characteristic non-decay state. The document was folded inside the corpse's coat. The handwriting is, by the Library's analysis, consistent with the Common script of approximately the late ninth century YK; the language is Common; the content is reproduced below in full.</p>
<h3>The Note</h3>
<p>"To whoever finds me. I am sorry. The coat is not mine. I took it from a man on the road outside Metrol three weeks ago. He was dying. He told me to take the coat and walk west. He told me the coat would lead me. I did not believe him. I took the coat because I was cold.</p>
<p>"The coat has led me. I do not know if it has led me well. I have walked west for three weeks. I have eaten what the coat told me to eat. I have stopped where the coat told me to stop. I have spoken with strangers the coat encouraged me to speak with. I have done things I would not have done without the coat. Some of these things were good. Some were not.</p>
<p>"I am, today, in a city the maps do not show. The city is on fire. The fire is not, as far as I can tell, hostile. The fire is, instead, the thing the city was built to do. I do not understand. I am sitting in the ruins of what I think was a temple. The coat has stopped speaking to me.</p>
<p>"I think I am dying. I am not sure why. I am not injured. I am not ill. I am simply growing more tired with each hour, and I do not think I will be tired again after tonight. I am writing this so that whoever finds the coat will know that the coat is not innocent. The coat is, in some way I cannot describe, the Traveler. I do not know if the Traveler is good. I know that the coat has worn me as much as I have worn the coat.</p>
<p>"If you find this, do not put on the coat. Burn the coat. The coat will not let you burn it. Try anyway. I am sorry."</p>
<p class="marginalia">The coat referenced in the note was not recovered with the document. The corpse was clothed in standard Cyran traveling garments of the period, with no item matching the description.</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Forgotten Apprentice",
  author: "Anonymous (Cannith provenance, deposited 991 YK)",
  college: "drystone",
  year: "found 988 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document was recovered from the salvage of a Cannith research outpost in central Cyre in 988 YK. The outpost was abandoned during the war, before the Mourning, for reasons the available records do not specify. The document is one of approximately forty pages of mixed personal and professional notes, attributable to an unknown apprentice; the apprentice's name has been deliberately scratched out throughout the document. The reproduction below is the most coherent of the recovered passages.</p>
<h3>The Passage</h3>
<p>"Day 47. They have stopped letting us into the lower laboratories. Forge-Adept Halric was angry today. He shouted at Master Aaren. We could hear it through the walls. The argument was about something called the substrate problem. I do not know what the substrate problem is. We are not allowed to ask. The other apprentices and I are doing busywork on the upper floors. The busywork is, by my training, beneath my level. I am cataloging old shipping manifests. The manifests are six years old. There is no scholarly value in this work.</p>
<p>"I have begun to suspect that the project the senior staff is working on is not what we were told it was. We were told this is a defensive enchantment research outpost. The shipments coming in over the past three months are not consistent with defensive enchantment research. The shipments include large quantities of khyber dragonshards. They include unbound elemental matrices. They include — this is what I cannot stop thinking about — dragonshard inclusions that, by the manifests' descriptions, match the inclusions used in creation forges.</p>
<p>"We do not have a creation forge here. We are not licensed for one. If we are building one, we are doing so in violation of the house's own internal rules. I do not know what to do with this observation. I am writing it down. I will hide this page. I will continue cataloging the shipping manifests as I have been instructed."</p>
<p>"Day 51. Someone has searched my quarters. The notebook is intact. I have moved the notebook. I will not write of the search again."</p>
<p class="marginalia">This document was deposited with the Library in 991 YK by a Cannith recovery officer who declined to identify himself further. The recovery officer's terms specified that the document be made available to the Library without further restriction.</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Last Letter from Atur",
  author: "Anonymous (Karrnathi origin, deposited 994 YK)",
  college: "tabernacle",
  year: "found 990 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document is a personal letter, written in Common, recovered from the personal effects of a deceased Karrnathi soldier whose unit served in the late stages of the Last War. The letter was, by the soldier's surviving family's account, never sent. The family permitted its deposit at the Library on the condition that the soldier's identity not be made public. The soldier's identity is preserved in the Library's sealed records. The letter's text follows.</p>
<h3>The Letter</h3>
<p>"Mother. I am writing this from the temple in Atur. The light here is not what I expected. The Mabaran zone makes the daylight thin, but the temple itself is warmer than the city outside. The priests have been kind. They have not asked what I came to ask of them. I have not yet asked.</p>
<p>"I have been sleeping badly. The dead I served beside in the unit are still with me. I do not mean their bodies. The bodies were resolved by the Karrnathi rituals before we were demobilized. I mean their <em>presence</em>. They sit at the foot of my bed. They follow me through the streets when I walk. They do not speak to me. They simply attend, as if they are still under orders to remain in proximity to my position.</p>
<p>"The priests here would, I think, tell me that this is not the dead I served beside. They would tell me it is grief, that I am projecting their faces onto the ordinary shadows of a man who has lost too many people in too short a time. They might be right. I do not know. The shadows have their faces. The shadows know the names I called them by.</p>
<p>"I have come to Atur to ask the priests of the Blood whether they can release the dead from their duty to me. I do not know whether the dead need releasing. I do not know whether I do. The priests are gentle. They have given me a room. They have given me food. They have not asked what I want. They have, I think, recognized that I do not yet know what I want.</p>
<p>"I will write again when I have understood more. I love you. I am, despite everything, all right. I am sorry I have not written sooner. The dead are quiet tonight. I will sleep now."</p>
<p class="marginalia">The soldier did not write again. The soldier was found dead, by natural causes, in a room of the Atur temple complex, three days after the letter's date. The temple's records show the soldier's death as peaceful and observed by attending priests.</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Last Page of the Black Index",
  author: "Anonymous (Codex Vault deposit)",
  college: "tabernacle",
  year: "deposited unknown",
  restricted: true,
  type: "book",
  content: () => `<p>The Black Index is, by long Library tradition, a catalog of materials whose existence the Library does not officially acknowledge. The Index is, itself, an item the Library does not officially acknowledge. The Codex Vault holds a copy. Senior doyens have the authority to consult it. The consultation is logged. Most of the entries are not, in any meaningful sense, available; they are pointers to materials held elsewhere, by parties whose identities the Index does not record.</p>
<p>This document is a single page, presented as the last page of the Index. Whether it is, in fact, the last page is not verifiable; the Index is not a bound work and pages have been added over centuries. The page is reproduced here in part. The complete page is, by Library policy, available only with the standing authorization of the Library's senior council.</p>
<h3>The Excerpted Passage</h3>
<p>"The catalog records what the Library holds. The catalog is large. The catalog is incomplete. There is a category of materials the Library holds that the catalog does not record. There is, additionally, a category of materials the Library does not hold that the catalog should record. The Black Index attempts to address the second category. It does not address the first."</p>
<p>"Materials in the second category are materials the Library has, on standing principle, decided not to acquire. The decisions vary in age. The decisions vary in current applicability. Some of the decisions were correct when made and remain correct. Some were correct when made and are no longer. Some were never correct. The Library, in its long institutional life, has not always made the right decisions about acquisition; the Black Index records these failures, to the degree the Library can identify them."</p>
<p>"The materials the Library has decided not to acquire are not, by the standing principle, suppressed. The materials exist. The materials are held by other parties. Scholars who wish to consult them may do so, by approaching those parties directly. The Library does not undertake to facilitate. The Library also does not undertake to obstruct. The Library, on this category of materials, declines."</p>
<p>"The page that should follow this one is missing. The page has been missing for at least eighty years, by the most reliable internal account. The page's absence is itself a Black Index entry, recorded in the entry preceding this passage."</p>
<p class="marginalia">Trust ledger: Access to this excerpt is restricted to Senior Doyens and to scholars holding standing Trust authorization. The complete page is held in the Codex Vault and requires additional verification. Inquiry has been logged.</p>`
});


// ─── MORE RESTRICTED VAULT MATERIAL ───────────────────────────

LIBRARY.books.push({
  title: "Project Reclamation: Recovered Files",
  author: "compiled by anonymous Cannith excoriated researchers",
  college: "drystone",
  year: "deposited 993 YK",
  restricted: true,
  type: "dispatch",
  content: () => `<p>This document compiles materials recovered from the personal effects of two Cannith researchers excoriated from the house in 991 and 992 YK respectively. The compilation was deposited at the Library in 993 YK by an intermediary whose identity has not been disclosed. The deposit terms specified restricted access. The compilation is, by Library staff assessment, internally consistent and substantively credible.</p>
<h3>What Project Reclamation Was</h3>
<p>Project Reclamation was, by the recovered materials' description, a Cannith internal initiative undertaken in the years following the Mourning. The project's stated purpose was to "reclaim" warforged who had survived the destruction of Cyre's central Cannith infrastructure. The reclamation involved locating free or unaffiliated warforged, contacting them through proxies, and offering them shelter and reintegration into Cannith service in exchange for their cooperation with house-supervised activities.</p>
<p>The project, by the recovered materials, did not always offer reclamation as a choice. Warforged who declined the offer were, in some documented cases, subjected to non-consensual modification of their docent or core systems through methods only Cannith forge-adepts can implement. The modifications altered the warforged's loyalty patterns, communication abilities, or operational priorities in ways that were not disclosed to the warforged themselves.</p>
<h3>The Termination</h3>
<p>Project Reclamation was, by the recovered materials, terminated in 991 YK following an internal Cannith review. The termination's official justification was budgetary. The recovered materials suggest that the actual reason was the unauthorized expansion of the project's scope by certain senior researchers, whose work had begun to involve techniques the house's senior leadership considered too dangerous to be associated with even informally.</p>
<p>The two researchers excoriated in 991 and 992 YK were, by the recovered materials, the principal designers of the unauthorized expansions. The materials they took with them upon excoriation form the basis of this compilation.</p>
<h3>The Status of the Modified Warforged</h3>
<p>The recovered materials list, with varying confidence, approximately one hundred and eighty individual warforged subjected to the project's various interventions. Most are, by the materials, currently active in some capacity. The materials do not include identifiers sufficient to locate the affected warforged for purposes of remediation. The Library has, on its own initiative, begun cataloging publicly-known warforged for cross-reference; the work is ongoing.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted. The Library considers the material relevant to ongoing warforged-rights advocacy and to scholarly research on dragonmarked house compliance with the Treaty of Thronehold. Inquiries are logged. Researchers should be aware that house-aligned interest in this material is documented; the Library does not, however, restrict access on that basis alone.</p>`
});

LIBRARY.books.push({
  title: "Mordain the Fleshweaver: A Compiled Dossier",
  author: "Tabernacle Standing Inquiry into Aberrant Magic",
  college: "tabernacle",
  year: "999 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This dossier compiles available information on Mordain ir'Phiarlan, also known as Mordain the Fleshweaver, a former House Phiarlan member who was excoriated in approximately 970 YK and has since pursued, in the deep wilderness of the western Eldeen Reaches, a research program that the Tabernacle's standing inquiry has classified as aberrant-aligned and substantially dangerous.</p>
<h3>What Mordain Was</h3>
<p>Mordain ir'Phiarlan was, prior to excoriation, a senior heir of House Phiarlan, distinguished in his early career as one of the most accomplished arcane researchers the house had produced in a generation. His specialization was in flesh-shaping magic, particularly the modification of living creatures through transmutative means. The work was, in its early stages, conducted within house standards.</p>
<p>The work transitioned, over the course of approximately two decades, into territory the house considered increasingly problematic. The transition culminated in 970 YK with a series of publications and demonstrations Mordain conducted at his private residence outside Throneport, which were attended by senior house members and which produced reactions ranging from "horrified" to "permanently traumatized." Mordain was excoriated within the month.</p>
<h3>What Mordain Has Become</h3>
<p>Mordain has, since excoriation, occupied a tower of his own construction in the deep western Eldeen Reaches. The tower's location is approximately known. The tower is, by every credible report, surrounded by creatures of Mordain's making — flesh-shaped beings whose original biology has been so substantially altered that they are no longer assignable to recognized species. The creatures are, by the available reports, both numerous and consistently hostile to intruders.</p>
<p>Mordain has not, by available evidence, conducted operations outside his tower's immediate surroundings. He does not raid. He does not recruit. He does not, in any reliable account, communicate with parties outside his immediate household. He is, in functional terms, a private researcher whose research has carried him into territory that, by any reasonable theological assessment, places him in active alignment with the daelkyr's tradition of flesh-modification.</p>
<h3>The Inquiry's Position</h3>
<p>The Tabernacle's standing inquiry has, on multiple occasions, recommended that the Eldeen Reaches' druidic authorities, in coordination with House Phiarlan, undertake a sustained operation against Mordain's tower. The recommendation has not, in any of its iterations, been acted upon. The reasons offered have varied. The most consistently cited reason is the projected cost of the operation, which is estimated to require resources at a scale that the Reaches' authorities have not been willing to commit while other regional priorities remain unresolved.</p>
<p>The inquiry's current assessment is that Mordain represents an unresolved daelkyr-tradition presence whose continued existence is a sustained risk of disclosure-pattern aberrant magic emerging into the Reaches. The risk has not yet been realized. The inquiry continues to recommend action.</p>
<p class="marginalia">Trust ledger: Access to this dossier is restricted to Senior Doyens, to standing inquiry members, and to scholars holding Tabernacle authorization. The dossier's contents are not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "The Feral Heart: Lycanthropy Before the Crusade",
  author: "Anonymous (Eldeen survivor's account)",
  college: "soladas",
  year: "deposited 982 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This document was deposited at the Library in 982 YK with terms specifying restricted access. The deposit was anonymous. The internal evidence suggests authorship by a survivor of the Silver Crusade-era pogroms in the Eldeen Reaches. The account is partial, traumatized, and substantially valuable as one of the few surviving non-Church records of the period.</p>
<h3>What Lycanthropy Was</h3>
<p>Lycanthropy was, in the Eldeen Reaches before the Silver Crusade, a recognized condition with multiple lineages and substantial regional variation. The Wardens of the Wood maintained relationships with several lycanthropic lines whose adherents practiced their condition within frameworks of careful self-discipline, druidic supervision, and community accountability. The lines included werewolves, werebears, and werehawks, each with its own traditions.</p>
<p>The condition was, by available pre-Crusade records, infectious in some lineages and inherited in others. The infectious lineages were carefully managed; new initiates entered through ritual rather than through accident, and the rituals included extensive screening for psychological suitability. The inherited lineages were subject to community supervision through generations.</p>
<h3>The Crusade</h3>
<p>The Silver Crusade, conducted between 832 and 880 YK, did not distinguish between the disciplined lycanthropic lineages, the undisciplined or "wild" lycanthropes, and the merely shifter populations who carried lycanthropic ancestry without manifesting the full condition. All were targets. All were, in the Crusade's operational documents, classified as instances of the same threat. The classification was, by my assessment of the surviving records, a catastrophic categorical error that the Church has, in the centuries since, partially acknowledged but never fully addressed.</p>
<p>The Crusade killed, by the most reliable estimates, approximately twenty thousand individuals across the Reaches and the broader western Khorvairean territories. Of these, by the survivors' assessments, only a small fraction were active lycanthropes engaged in any harmful conduct. The majority were shifters, peaceful lycanthropes living within community frameworks, or family members of the above.</p>
<h3>The Aftermath</h3>
<p>The disciplined lycanthropic lineages were, by the Crusade's end, functionally extinct as organized communities. Individual lycanthropes survived, scattered, in hiding. Their traditions did not survive in transmissible form. The shifter populations survived in larger numbers but as a traumatized, scattered community whose grief and resentment have not been adequately acknowledged by the Church or by the Five Nations governments that supported the Crusade.</p>
<p>The current lycanthrope population in the Reaches is, by my best assessment, smaller than the pre-Crusade population by an order of magnitude, and consists largely of undisciplined or wild individuals — the very category the Crusade was nominally directed against. The disciplined lineages, who were the safest fraction of the pre-Crusade population, were exterminated most thoroughly. The current threat to the Reaches is, in functional terms, the result of the Crusade's success.</p>
<p class="marginalia">Trust ledger: This volume is held under standing review. The Library considers the document a primary source of substantial historical importance. Access requires Senior Doyen authorization. Inquiry has been logged.</p>`
});


// ─── MAGICAL THEORY EXPANSIONS ────────────────────────────────

LIBRARY.books.push({
  title: "Dragonshards: Origins, Properties, and Theoretical Limits",
  author: "Magus-Researcher Hass d'Sivis",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The dragonshards of Eberron are the foundation of contemporary arcane practice. Without them, the lightning rail does not run. Without them, airships do not fly. Without them, no creation forge operates and no large-scale binding ritual completes. The shards are everywhere, in arcane work, and yet the theoretical literature on their fundamental nature is surprisingly thin. This volume attempts to consolidate what is established and to identify what remains contested.</p>
<h3>The Three Types</h3>
<p><strong>Eberron dragonshards</strong> are mined from the surface and shallow strata of the world. They are golden-amber in color, abundant in certain regions (notably Q'barra), and broadly used in life-aligned and natural-aligned arcane work. Their applications include healing magic, divination, and various enchantments tied to natural phenomena.</p>
<p><strong>Khyber dragonshards</strong> are mined from deep strata. They are dark, often near-black, with internal patterns of iridescent inclusion. They are used principally in binding magic — the binding of elementals, of spirits, of certain other entities whose containment requires structures that respect the bound entity's continued existence. House Cannith's elemental airship technology depends on khyber shards. Most Zilargon enchantment of bound elementals depends on them.</p>
<p><strong>Siberys dragonshards</strong> fall from the sky. They are the literal remains of the Ring of Siberys above. They are golden, often quite large, and substantially rarer than the other two types. Their applications are concentrated in the most powerful arcane work: artifacts of substantial enchantment, certain weapons of significant magical capability, and the focusing implements used in apex-level dragonmark expressions.</p>
<h3>The Structural Question</h3>
<p>Why three types? The conventional theological account holds that the three correspond to the three progenitor dragons — Siberys above, Khyber below, Eberron the world itself — and that the shards' distribution is the natural result of the cosmological story.</p>
<p>The theoretical-arcane account is more skeptical. The three types appear to correspond to three distinct planar resonance patterns, each of which produces shards with distinct arcane behaviors. The cosmological story may be true. The cosmological story may also be a mythological gloss on a more prosaic structural fact: shards form, in the world's geology, in three distinct contexts (atmospheric, deep-strata, surface), and the contexts produce different shard properties for reasons that are physical-arcane rather than narrative.</p>
<p>Both accounts predict the same observable behavior of the shards. Choosing between the accounts is, on present evidence, a matter of theological taste rather than arcane theory.</p>
<p class="marginalia">Magus-Researcher Hass d'Sivis has spent fifteen years on this consolidation. The volume's reception has been polite. The polite reception is, in his own assessment, "the academic equivalent of having said something correct without having said anything new."</p>`
});

LIBRARY.books.push({
  title: "The Ritual of Binding: Theoretical and Practical Considerations",
  author: "Forge-Theorist Brell d'Cannith",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Elemental binding is the foundation technology of the Eberron arcane economy. Lightning rails depend on it. Airships depend on it. The major industrial enchantments depend on it. The theoretical literature on binding is substantial; the practical literature is fragmented across the dragonmarked houses' proprietary documentation, the public works of independent scholars, and the various non-house traditions (Sulatar, certain dwarf and gnome practices) that maintain their own approaches. This volume attempts a unified treatment.</p>
<h3>What Binding Is</h3>
<p>An elemental binding is, in functional terms, the establishment of a contract between an elemental being from one of the elemental planes (Fernia, Risia, Lamannia, or the various sub-planes) and a structured material vessel on Eberron. The contract terms vary by binding tradition. The binding's essential structure is constant: the elemental, in exchange for participation in the binding, receives certain benefits (preservation in the vessel, contact with Eberron's plane and its possibilities, in some cases the opportunity to fulfill purposes the elemental has identified as significant); the vessel, in exchange for the elemental's participation, receives the elemental's capabilities (motive force for an airship, illumination for a lamp, heating for a forge).</p>
<h3>The Ethics</h3>
<p>The ethics of binding are, in current arcane scholarship, contested. The Cannith tradition holds that the binding contract is voluntary, the elemental's participation is consensual, and the binding terms are equitable in proportion to the value exchanged. The Lamannian-druidic critique holds that the consent involved is, at best, ambiguous — that the elementals' alien nature makes meaningful consent across the species barrier difficult to verify, and that the binding terms typically favor the binders in ways the elementals are not in a position to negotiate.</p>
<p>I will not attempt to resolve this controversy. I will note that the Cannith tradition's ethical position is, in my own professional view, substantially weaker than the tradition's practical confidence in it would suggest. The binding terms are, in most contracts I have reviewed, adverse to the elementals in ways the elementals have limited capacity to challenge during the binding's term. Whether this is exploitation or merely the typical operation of inter-species trade depends on theoretical commitments I do not, in this volume, attempt to defend.</p>
<h3>The Technical Standard</h3>
<p>The remainder of the volume treats the technical standards for binding work in detail: vessel construction, dragonshard placement, binding-ritual conduct, contract terms, and the maintenance practices required to keep a binding operative over its full term. The technical sections are extensive and are not summarized here.</p>
<p class="marginalia">Forge-Theorist Brell d'Cannith publishes with the formal permission of House Cannith's research council. The permission was granted with edits to the ethical sections that Brell, in correspondence preserved at the Library, characterized as "not unreasonable but not what I would have written without supervision."</p>`
});

LIBRARY.books.push({
  title: "Aberrant Marks in the Wild: A Field Survey",
  author: "Inquisitive Yenna d'Medani (covert publication)",
  college: "balinor",
  year: "994 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document is a covert publication. It is filed at the Library under terms specifying that the author's name not be associated with it in any externally-visible registry. The filing was approved by the Library's senior council on the principle that the document's research value outweighs the protection-cost concerns the author has raised.</p>
<h3>What I Have Surveyed</h3>
<p>I have, over the course of eight years, surveyed approximately one hundred and twenty individuals identified as bearing aberrant dragonmarks. The individuals are distributed across the Five Nations, with concentrations in Sharn (where House Tarkanan recruits openly), in the western Brelish frontier (where House influence is weakest), and in the Eldeen Reaches (where local druidic communities have, in some cases, sheltered aberrant-marked individuals from house-aligned hunters).</p>
<h3>The Pattern</h3>
<p>The conventional account of aberrant marks holds that they are unstable, that they harm their bearers, and that they are properly understood as deviations from the normal mark pattern that produced lethal complications in earlier generations and continue to produce harm in their current bearers. This account is, by my survey, partly accurate and partly substantially misleading.</p>
<p><em>Stability:</em> The marks are, in my survey, more stable than the conventional account suggests. Approximately seventy percent of the surveyed individuals report stable mark expression over years; only the remaining thirty percent report the unpredictable variation the conventional account describes as typical. The variation, where it occurs, is often associated with specific psychological or environmental conditions and is not, by the affected individuals' descriptions, random.</p>
<p><em>Harm:</em> Approximately sixty percent of the surveyed individuals report no significant health complications from their marks. Approximately twenty-five percent report mild complications (occasional pain, sensory anomalies, minor health issues). Approximately fifteen percent report serious complications, including the kind of lethal pattern the conventional account describes. The conventional account has generalized from the fifteen percent to the entire population.</p>
<p><em>Power:</em> The marks vary in power expression. Most are modest. A small minority — approximately ten percent — produce substantially powerful effects, comparable in some cases to greater dragonmarks of the standard houses.</p>
<h3>The Implication</h3>
<p>The aberrant-mark population is not the population of dangerous, unstable, doomed individuals the conventional account describes. The conventional account is, in significant measure, an artifact of the War of the Mark — a propaganda framework constructed during a campaign of extermination, and maintained, in the centuries since, by the institutional interests of the dragonmarked houses for whom the aberrant population is best understood as defective.</p>
<p>The actual aberrant population is, in my survey, substantially closer to the standard mark population than to the propaganda image. Most aberrant-marked individuals lead substantially normal lives. The principal cause of harm to aberrant-marked individuals is, currently, not their marks but the ongoing house-aligned and Five-Nations-aligned hostility their marks attract.</p>
<p class="marginalia">Inquisitive Yenna d'Medani conducted this survey in defiance of standing House Medani directives. The publication's covert filing protects her from formal house consequences. Her continued well-being is, by Library staff assessment, modestly precarious.</p>`
});


// ─── MOURNLAND DEEPER MATERIAL ────────────────────────────────

LIBRARY.books.push({
  title: "The Mournland Survey: A Decade of Findings",
  author: "Wayfinder Foundation, Korranberg Branch",
  college: "morridan",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Wayfinder Foundation has, in the decade since the Mourning, sponsored or co-sponsored thirty-eight expeditions into the Mournland, conducted in cooperation with various national and dragonmarked-house funders. This volume consolidates the findings of those expeditions into a single reference work for the use of future researchers and for any party considering Mournland-related operations.</p>
<h3>The Geographical Findings</h3>
<p>The Mournland encompasses the territory that was, before 994 YK, the nation of Cyre. The territory is approximately rectangular, bounded by the Mournland Wall (the visible mist barrier), with substantial topographical features preserved in altered form. The major cities — Metrol, Making, Eston, Whitehearth — exist as ruins. The smaller towns and villages exist in varied states of preservation. The countryside between settlements is, in most regions, a grey, frozen landscape on which the events of the moment of the Mourning are visible in static form.</p>
<h3>The Magical Findings</h3>
<p>Magic in the Mournland operates anomalously. Healing magic fails. Divination magic produces unreliable or impossible results. Resurrection magic — including the Karrnathi necromantic practices — does not function. Ordinary spellcasting is possible but is, in many sectors, modified in unpredictable ways. The cause of these effects has not been determined. The effects are not uniform across the Mournland; they vary by location, by spell type, and by what observers can only describe as "the mood of the region" — a phenomenological category whose objective basis remains unidentified.</p>
<h3>The Biological Findings</h3>
<p>Biological tissue in the Mournland does not decay. Corpses persist in the state they occupied at the moment of death. The persistence is not preservation in any ordinary sense; the corpses do not heal, but they also do not progress through the standard post-mortem stages. Living beings within the Mournland age more slowly than they would outside. The slowing is not, by any expedition's findings, halt; it is approximately twenty percent of normal aging rate, on average, varying by location.</p>
<h3>The Inhabited Sites</h3>
<p>The Mournland is, despite its hostility, inhabited in places. The Lord of Blades' faction occupies the ruins of Making and several outlying sites. Free warforged communities exist at multiple locations whose precise positions the Foundation has agreed not to publish. Refugee communities of the still-living, principally Cyrans, occupy the Mournland's safer frontier zones. Various opportunistic operations — salvage groups, prospectors, mercenary companies — operate temporarily in regions whose findings exceed their dangers.</p>
<p class="marginalia">The Wayfinder Foundation, Korranberg Branch, intends to publish a revised edition of this volume every five years as the Mournland's pattern of findings continues to develop. The current edition is, by editorial acknowledgment, "comprehensive only as comprehensive can be of a place that may not be comprehensible."</p>`
});

LIBRARY.books.push({
  title: "Lightning Rail Sabotage Casefiles",
  author: "Sentinel Marshal Halric d'Deneith",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This compilation reproduces, in summary form, the casefiles of seven lightning rail sabotage operations investigated by House Deneith Sentinel Marshals between 985 and 995 YK. The cases were, in their period, treated as ordinary commercial security investigations. The compilation reframes them as the related set they appear, in retrospect, to constitute.</p>
<h3>Case 985-3 (Brelish-Karrnathi Connector)</h3>
<p>A conductor stone segment outside Vathirond was destroyed by what the investigation classified as "high-energy arcane sabotage." The destruction halted lightning rail traffic between Breland and Karrnath for fourteen days. The investigation identified, with moderate confidence, a small group of saboteurs operating under what appeared to be Aundairian intelligence direction. The case was closed without prosecution; the diplomatic costs of formal accusation were, by Crown advisory, judged excessive.</p>
<h3>Case 991-7 (Sharn Approach)</h3>
<p>Multiple conductor stones along the Sharn approach line were subjected to subtle, rather than destructive, modifications. The modifications, undetected at the time, produced reliability degradation in lightning rail service across approximately three months. The investigation, conducted retrospectively, identified the modifications as Cannith-aligned in technical character, suggesting either house involvement or imitation by a party with house-grade arcane resources.</p>
<h3>Case 994-2 (Mournland Border)</h3>
<p>A lightning rail spur intended to serve the Mournland border was sabotaged before its inaugural run. The sabotage was crude, easily detected, and produced no significant casualties. The investigation identified the saboteurs with high confidence as agents of a Cyran refugee organization whose stated purpose was the prevention of "tourism" to the site of their nation's destruction. The Crown declined prosecution on what were, in Crown-internal documents, characterized as compassionate grounds.</p>
<h3>The Pattern</h3>
<p>Across the seven cases, the operational patterns vary substantially — different methods, different attribution, different apparent motives. What the cases share is a common target (the lightning rail infrastructure) and a common operational sophistication that suggests, in each case, either state-level resources or substantial private-party resources operating with state-level technical access.</p>
<p>I do not, in this compilation, advance a unified theory of the seven cases. I note that the lightning rail is the principal infrastructure of inter-Five-Nation commerce, that disruption of the rail produces substantial economic and political costs, and that any party seeking to weaken the post-war Khorvairean order would find the rail an attractive target. The seven cases are, individually, unsolved-but-attributed. The seven cases are, collectively, the kind of pattern that ought to attract sustained inquiry. I believe such inquiry is currently underway in unidentified institutional locations. I believe its findings will not be, in any near-term horizon, made available to the public.</p>
<p class="marginalia">Sentinel Marshal Halric retired from House Deneith service in 995 YK. He continues to consult on commercial security matters and has, by his own description, "more time now to write than I had when I had time to investigate."</p>`
});

LIBRARY.books.push({
  title: "Just Cause: A Survey of War-Justification Traditions (Layperson's Edition)",
  author: "Brother Vellen of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a layperson's edition of my earlier scholarly survey. It is intended for readers who have not been trained in formal theological discourse but who wish to understand, in clear terms, the arguments by which the Last War's combatants justified their participation. The scholarly edition is available in the Library's standard catalog. This edition is shorter, plainer, and more direct.</p>
<h3>The Question</h3>
<p>The Last War lasted one hundred and two years. Each side claimed its cause was just. Were they right?</p>
<p>The simple answer: at most one side could have been entirely right, and the most charitable reading of the available evidence suggests that none was. Each side had real grievances. Each side had real defenders worth respecting. Each side also had self-serving interests that the rhetoric of justice obscured.</p>
<h3>The Five Cases (in Brief)</h3>
<p><strong>Aundair</strong> claimed legitimate succession through Wrogar's line. The claim was technically defensible but rested on a contradiction — Wrogar himself had supported Mishann.</p>
<p><strong>Thrane</strong> claimed divine mandate through Thalin's vision of the Silver Flame. The claim required theological foundations the Church itself has, in honest moments, not been able to confirm.</p>
<p><strong>Karrnath</strong> claimed military necessity. The claim was honest about its premises but did not produce the unified strong Galifar it argued was needed.</p>
<p><strong>Breland</strong> claimed democratic principle. The principle was modern and the principle's bearers did not implement it.</p>
<p><strong>Cyre</strong> claimed legitimate succession through Mishann. The claim was the most coherent. The claim's bearers were destroyed before they could see the claim through to whatever conclusion it would have reached.</p>
<h3>The Lesson</h3>
<p>If you wish to know whether your nation's justifications were just, the question to ask is not "were our reasons defensible in their own terms?" — they almost certainly were, by some defensible standard — but "were the reasons proportionate to the costs we imposed in their name?" The costs of the Last War, by every measure, exceeded the value of any objective the war's combatants pursued. This does not mean any side was uniquely wicked. This does mean that the entire war was, by the most honest assessment any tradition can produce, a moral failure shared by all five participants.</p>
<p>I write this for laypersons because laypersons, in my pastoral experience, are often more willing to hold this conclusion than the professional national defenders. The conclusion is uncomfortable. The conclusion is also, by my judgment, true.</p>
<p class="marginalia">Brother Vellen has, in the year since this layperson's edition's publication, received correspondence from veterans of all five nations. The correspondence has been, in his summary, "approximately equally angry from all five sides, which I take as evidence that the volume has located the right level of discomfort."</p>`
});


// ─── ALCHEMY EXPANDED (Blackdragon) ───────────────────────────

LIBRARY.books.push({
  title: "On the Patient Vessel: Foundations of Distillation",
  author: "Master-Alchemist Yenna ir'Lain",
  college: "blackdragon",
  year: "989 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Distillation is the foundational alchemical operation. Every more complex transmutation, every refined elixir, every reagent that requires purity beyond what nature provides — all begin with distillation. The apprentice who has not learned to distill cannot be trusted with anything else. The master who has forgotten the discipline of distillation has lost the foundation on which the whole craft rests.</p>
<h3>The Vessel</h3>
<p>The vessel matters. The novice often believes that the substance is what matters and the vessel is incidental — a container, no more. The novice is wrong. The vessel shapes what passes through it. A copper still produces different products than a glass still, with the same input substance, the same heat, the same duration. The differences are not always large. The differences are always present. The discipline of the master alchemist is, in part, the discipline of choosing the vessel correctly for the work intended.</p>
<h3>The Heat</h3>
<p>The heat matters. Heat is not a single quantity to be increased or decreased. Heat is a profile across time. The same total heat, applied at different rates over different durations, produces different distillates from the same source. The alchemical literature catalogs heat profiles for many standard distillations; the master alchemist learns, over years, to read a heat profile by the smell of the distillate and the sound of the vessel and the pace of condensation, and to adjust without consulting the catalog.</p>
<h3>The Patience</h3>
<p>What the apprentice usually lacks, in the first decade of training, is patience. Distillation rewards patience. The hurried distillation produces an inferior distillate. The hurry is detectable, in the final product, by anyone whose nose has been trained to detect it. There is no way to disguise hurried work to a trained alchemist; the work itself reports its haste in subtle but unmistakable signs.</p>
<p>I have, in my own apprentices, found this the single hardest lesson to teach. The ones who learn it become alchemists. The ones who do not learn it remain, at best, competent technicians. The difference is not skill. The difference is the willingness to give the substance the time the substance requires.</p>
<p class="marginalia">Master-Alchemist Yenna ir'Lain trained for forty-one years before the College of Blackdragon recognized her as a master in good standing. She has, in retirement, taken on apprentices privately at her residence outside Korranberg.</p>`
});

LIBRARY.books.push({
  title: "Reagents of the Common Kitchen: Practical Alchemy for the Provincial Healer",
  author: "Apothecary Berr of Vathirond",
  college: "blackdragon",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is intended for the village apothecary, the rural healer, the household practitioner of small medicine. It catalogs reagents that can be prepared from materials commonly available in the kitchens of Khorvairean households, with practical instructions for preparation and notes on the medical applications each reagent supports.</p>
<h3>Salt</h3>
<p>Salt — common table salt, dissolved in clean water at appropriate concentration — is the foundational reagent for the home apothecary. It cleans wounds. It preserves prepared remedies. It draws moisture from prepared poultices. The household with no other reagent at hand can, with salt and clean water, address a substantial fraction of the minor injuries of everyday life.</p>
<h3>Vinegar</h3>
<p>Vinegar — the cheap kitchen vinegar of any common household — is the most useful single substance after salt. Vinegar is, in many preparations, the solvent that replaces the more expensive distilled spirits the formal alchemical literature recommends. Vinegar dissolves many of the same plant substances. The dissolved preparations are, in many cases, comparable to the more expensive equivalents in their medical effects.</p>
<h3>Honey</h3>
<p>Honey is preservative, antimicrobial, soothing for throat and digestive complaints, and effective in topical application to minor wounds. Honey is, in many provincial households, more valuable as medicine than as food. The household that maintains a hive maintains, in addition to a sweetener, a small pharmacy.</p>
<h3>Plant Decoctions</h3>
<p>The volume continues with extended sections on common plant decoctions: willow bark for fever and pain, chamomile for sleep and nervous complaints, mint for digestion, plantain for skin and wound applications. Each section includes preparation instructions, dosage guidance for adults and children, and notes on conditions for which the decoction should not be used.</p>
<p class="marginalia">Apothecary Berr practiced rural medicine in the Brelish countryside for thirty-eight years before retiring. The volume is, by his own description, "what I would have given my younger self when I was starting and had no manuscript like it to consult."</p>`
});

LIBRARY.books.push({
  title: "The Apothecary's Black Catalog",
  author: "Master-Alchemist Halric of Sharn",
  college: "blackdragon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This catalog records substances that are routinely used in the alchemical trade and routinely concealed from public discussion. The substances are not, in any technical sense, illegal in most jurisdictions. They are, however, the substances over which the well-trained apothecary is taught to be discreet — the substances whose customers prefer not to be associated with their purchases, the substances whose suppliers prefer not to be cited as such.</p>
<h3>The Sleep Reagents</h3>
<p>Multiple plant-derived preparations produce reliable sleep effects in adult subjects. The strongest are derived from the Talenta dreamflower, the Eldeen vexbloom, and certain mushrooms cultivated in dark conditions. The preparations vary in dosage precision and in the duration of effect. The reliable preparations are sold, in most jurisdictions, to physicians for surgical use; the same preparations are also sold, less officially, to private parties whose intended uses are not documented.</p>
<h3>The Will-Reducing Reagents</h3>
<p>The catalog notes a category of preparations, derived from various plant sources, that reduce the subject's capacity for resistance to suggestion. The preparations are, by every reputable jurisdiction's standards, restricted; their sale to private parties is illegal in Aundair, Breland, Karrnath, Thrane, and Zilargo. The preparations are, nonetheless, available through informal channels in every major city. The catalog does not provide preparation instructions; the catalog does provide indication of what the preparations look, smell, and behave like, for the use of physicians and inquisitives who must recognize them in clinical or investigative contexts.</p>
<h3>The Reagents of Last Resort</h3>
<p>The catalog records, in its final section, substances whose principal use is the ending of life. These include medical-grade preparations used in cases of unbearable terminal illness (under physician supervision in some jurisdictions and not in others), older traditional preparations of various provincial origins, and certain substances of dragonmarked-house manufacture whose existence the houses do not publicize. The section is included for the use of the medical profession and the inquisitive trade. Its provision in this catalog should not be read as an endorsement of unsupervised use.</p>
<p class="marginalia">Master-Alchemist Halric publishes this catalog with the formal disclaimer that the catalog is not, in any sense, a guide to acquiring or preparing the substances it describes. The catalog is a reference for those whose professions require them to recognize the substances when encountered. He notes, in correspondence at the Library, that "the disclaimer is sincere; the disclaimer is also, by my professional assessment, going to be ignored by readers whose interest in the catalog is what their interest in the catalog is."</p>`
});

LIBRARY.books.push({
  title: "Magical Metallurgy: The Alchemy of the Forge",
  author: "Master-Smith Verren d'Cannith",
  college: "blackdragon",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The interface between metallurgy and alchemy is one of the most productive zones of contemporary arcane research. The smith works with substance. The alchemist works with substance. The disciplines have, for centuries, exchanged techniques, vocabularies, and apprentices. This volume catalogs what the alchemical tradition has contributed to the smithing arts, with attention to the dragonmarked applications that have followed from the contributions.</p>
<h3>Adamantine</h3>
<p>Adamantine is, in its basic metallurgy, a worked alloy of iron and certain rare additives whose precise composition the smithing traditions have, for centuries, treated as proprietary. The alchemical contribution is the binding of the additives at the molecular level — a transmutative process that produces the alloy's characteristic hardness and resilience. Without the alchemical step, the same metallurgical inputs produce ordinary steel. The alchemical step is what makes adamantine adamantine.</p>
<h3>Mithral</h3>
<p>Mithral is similarly an alchemical-metallurgical hybrid. The base metallurgy yields a silvery-white alloy of moderate strength. The alchemical step — which involves working the alloy through extended exposure to specific reagent environments — produces the characteristic combination of strength, lightness, and arcane receptivity that distinguishes mithral from ordinary white metals.</p>
<h3>Byeshk</h3>
<p>Byeshk is the most distinctive of the magical metals, with applications principally in weapons intended for use against aberrations. The metal's properties are, by the most reputable arcane analyses, partly inherent and partly dependent on a process whose complete documentation no contemporary smithing tradition possesses. The Dhakaani daashor — the goblinoid weaponsmiths of the empire — were the original masters of byeshk-working. Their techniques were partly preserved within the Kech Volaar and other dar clan traditions; they have not, by available evidence, been fully recovered by any non-dar smithing tradition.</p>
<h3>The Cannith Position</h3>
<p>House Cannith maintains, in its public literature, that contemporary Cannith metallurgical techniques substantially equal the ancient Dhakaani standards. This claim is, by my own professional assessment, partly accurate and partly aspirational. Cannith adamantine is the equal of any historical adamantine. Cannith mithral is the equal of historical mithral. Cannith byeshk is, by careful comparative testing, somewhat short of the Dhakaani benchmark — adequate for most modern applications, not adequate for the most demanding aberrant-target weapons that the Dhakaani tradition produced as standard.</p>
<p class="marginalia">Master-Smith Verren d'Cannith publishes with the formal permission of House Cannith's research council. His characterization of the Cannith byeshk standard's relative position has been, in correspondence preserved at the Library, "the subject of internal house discussion of substantial intensity, which has not yielded a request for editorial revision but has produced an instruction not to publish further on the subject."</p>`
});

LIBRARY.books.push({
  title: "Of Reagents That Are Forbidden",
  author: "Anonymous (Tabernacle review confiscation)",
  college: "blackdragon",
  year: "deposited 991 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume was confiscated by the Tabernacle's standing inquiry into aberrant magic in 990 YK. The original author's identity has not been disclosed in this preserved deposit. The volume catalogs, in technical detail, alchemical reagents whose preparation requires daelkyr-tradition techniques or whose use produces aberrant-aligned effects. The Library holds the volume under restricted access on the principle that suppression of the literature would not eliminate the underlying knowledge but would deprive legitimate researchers of the ability to recognize the reagents when encountered in the field.</p>
<h3>The Reagents Catalogued</h3>
<p>The volume catalogs approximately forty distinct reagents, each with preparation instructions, characteristic appearance and odor, and known effects. The reagents range from the relatively mild (substances whose use produces psychological effects without lasting modification) through the substantially harmful (substances whose use produces lasting transformations of the user's biology) to the catastrophic (substances whose use produces effects on the surrounding environment beyond the user's body, including documented cases of aberrant manifestation in users' immediate vicinity).</p>
<h3>The Methodological Concerns</h3>
<p>The volume's preparation instructions are sufficiently detailed that a competent alchemist could reproduce most of the reagents from the text alone. The Library's review concluded that the educational value of the catalog — for inquisitives, magistrates, and Tabernacle scholars whose work requires recognition of these reagents — outweighed the marginal proliferation cost, since the reagents are, in any case, prepared from the relevant precursors by parties whose access to the precursors is the actual operational constraint.</p>
<p>The Library also notes, in its standing assessment, that the volume contains certain preparation instructions whose technical accuracy is open to scholarly dispute. The Library has not undertaken to verify the instructions experimentally. The Library would, by long policy, decline any proposal to undertake such verification.</p>
<h3>The Provenance Question</h3>
<p>The volume's provenance has not been disclosed. The internal evidence suggests authorship by a practitioner with substantial alchemical training and substantial access to the underlying daelkyr-aligned tradition. The Tabernacle's inquiry has not, as of the deposit's date, identified the author. The volume was confiscated from a residence whose occupant claimed not to know how the volume had come into his possession. The occupant was, by the available evidence, telling the truth.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to Senior Doyens, to standing Tabernacle inquiry members, and to scholars holding Tabernacle authorization. The volume's contents are not to be reproduced in any form. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Tinctures, Salves, and the Arts of Staying Alive",
  author: "Field Apothecary Selen of the Wayfinder Foundation",
  college: "blackdragon",
  year: "997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This is a working manual. It is intended for the field practitioner — the expedition member, the frontier traveler, the rural physician operating without access to a fully equipped apothecary's shop. The manual catalogs preparations the practitioner can produce from materials available in most parts of Khorvaire, with practical guidance on storage, dosage, and the recognition of when professional medical care is required despite the field practitioner's best efforts.</p>
<h3>Standard Travel Kit</h3>
<p>The Wayfinder Foundation's standard travel apothecary kit, which I helped specify in 994 YK and which is now provided to all Foundation expeditions, includes: salt and vinegar (foundational); willow bark and chamomile (pain and sleep); plantain and yarrow (wound care); honey (multiple uses); a small supply of distilled spirits (solvent, antiseptic, and field anesthetic); two or three commercial-grade alchemical antitoxins (broad-spectrum, for the most common venoms encountered); and a small supply of healing potions of standard dragonmarked-house manufacture, for the cases the field practitioner cannot address.</p>
<h3>Wound Triage</h3>
<p>The volume's largest section addresses wound triage. The expedition member who encounters a comrade with a serious wound must, in the first minutes, make decisions whose correctness will determine whether the comrade survives. The decisions are not, in most cases, the dramatic ones the popular literature emphasizes. The decisions are about what to do quickly and what to do calmly. Hurried bandaging produces worse outcomes than careful bandaging. Premature movement of the casualty produces worse outcomes than waiting. The discipline of triage is largely the discipline of doing the right things at the right pace.</p>
<h3>What Field Practice Cannot Do</h3>
<p>The volume includes, importantly, a section on the limits of field practice. Some injuries require immediate dragonmarked-house healing of a kind no field apothecary can produce. Some illnesses require treatments that cannot be improvised. The field practitioner who attempts to substitute for proper care, in cases that require it, will harm the patient. The field practitioner who recognizes when proper care is required, and who supports the patient until that care can be reached, will save lives. The recognition is the essential skill.</p>
<p class="marginalia">Field Apothecary Selen has served on twenty-three Wayfinder Foundation expeditions. The manual is, by Foundation policy, distributed to every expedition member upon contract signing.</p>`
});


// ─── ART & LITERATURE (Lyrris) ────────────────────────────────

LIBRARY.books.push({
  title: "The Verses of Khorvaire: An Anthology",
  author: "compiled by Halloran of Korranberg",
  college: "lyrris",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This anthology collects verse from the various poetic traditions of Khorvaire, with attention to what the traditions share and to what distinguishes them from one another. The selection is partial. The selection is also, in my editorial judgment, representative of the range and depth of Khorvairean poetic accomplishment. Readers seeking comprehensiveness should consult the College's larger holdings, which I have not had the years to organize into a single volume.</p>
<h3>The Aundairian Tradition</h3>
<p>Aundairian poetry is, by reputation, the most refined of the Five Nations' traditions. The reputation is partly self-promoted. The Aundairian poets do, in fact, work in tightly metered forms with substantial attention to formal elegance. The tradition's principal weakness is its long-standing attachment to courtly subjects, which has, in the post-war period, produced a reactionary turn that some younger Aundairian poets are working to escape.</p>
<h3>The Karrnathi Tradition</h3>
<p>Karrnathi poetry is direct, often austere, and concerned with subjects the other traditions handle less honestly: death, military service, the obligations of the survivor to the fallen. The tradition's strongest period was the war's middle decades, when the Karrnathi soldier-poets produced work whose plainness and refusal of consolation continue to influence the post-war Khorvairean poetic conversation.</p>
<h3>The Brelish Tradition</h3>
<p>Brelish poetry is the most varied of the Five Nations'. The tradition contains within it courtly verse modeled on Aundairian forms, working-class urban verse from Sharn's Cog districts, rural pastoral verse from the western counties, and a substantial body of political-satirical verse that the Brelish Crown has, in successive periods, alternately encouraged and discouraged.</p>
<h3>The Thranish Tradition</h3>
<p>Thranish poetry is dominated by religious subjects. The dominance is, in some quarters, regretted; the few Thranish poets who have worked in non-religious modes have, in most cases, written some of the tradition's most lasting work. The religious Thranish verse, at its best, achieves a depth of devotional intensity unmatched in the other traditions; at its worst, it becomes the kind of pious cliché that no honest reader can engage with.</p>
<h3>The Cyran Tradition</h3>
<p>The Cyran tradition no longer has a country. The tradition's continuation is, since 994 YK, the work of the diaspora — Cyran poets in New Cyre, in the refugee communities of Sharn and Korranberg, in the smaller scattered settlements across the Five Nations. The post-Mourning Cyran verse is a literature of grief that is, in my professional assessment, the most important poetic development of the past decade. The work has not yet been adequately collected. This anthology includes only a small selection.</p>
<p class="marginalia">Halloran of Korranberg serves at the Library as the senior keeper of the Lyrris stacks. The Lyrris reorganization is, by his own description, "underway, ongoing, and likely to remain so for the rest of my career; the work is more than one keeper can complete." The anthology is offered as a partial product of his ongoing labor.</p>`
});

LIBRARY.books.push({
  title: "Stage and Stagecraft: A History of Khorvairean Drama",
  author: "Playwright-Critic Mara Tellis",
  college: "lyrris",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The dramatic tradition of Khorvaire is younger than the poetic tradition by some centuries and is, by every measure of formal sophistication, less developed. This is not a complaint. The youth of a tradition is not a defect. The youth is, in fact, what makes the tradition alive — drama is, more than poetry, a form whose conventions adapt rapidly to the social circumstances of its production. Khorvairean drama, as a young tradition, is responsive to the post-war period's questions in ways the older Aundairian poetic tradition cannot match.</p>
<h3>The Pre-War Forms</h3>
<p>The pre-war dramatic tradition was dominated by the Galifaran court masques — formal, ceremonial productions performed at royal occasions, with substantial musical accompaniment, ritualized acting conventions, and subjects drawn principally from dynastic history and from the classical mythology of the Sovereign Host. The masques were, by contemporary accounts, magnificent productions that satisfied their occasions. They were not, by retrospective scholarly assessment, drama in any sense the post-war tradition would recognize.</p>
<h3>The War Years</h3>
<p>The war's drama was, like its poetry, shaped by the war. The most important war-period dramatist was Vellan of Sharn, whose <em>The Long Bench</em> (914 YK) and <em>Mishann's Last Letter</em> (922 YK) established the form of the modern Khorvairean play. Vellan's plays were, in their period, controversial; they treated the war's combatants as moral equals, gave voice to characters from all five sides, and refused the propagandistic certainties their audiences expected. The plays survived. The audiences, in the war's later decades, adapted to them. By the war's end, Vellan's approach was the standard.</p>
<h3>The Post-War Drama</h3>
<p>The post-war period has produced a generation of playwrights whose work engages directly with the unresolved questions of the post-war condition: what to do about warforged, what to do about Cyran refugees, what to do about a continent whose old certainties have not been replaced. The work is uneven. The work is also, in my critical judgment, the most interesting development in Khorvairean letters since Vellan.</p>
<p>The most important of the current playwrights is, in my view, Yenna of New Cyre, whose three Mournland plays (<em>The Grey Field</em>, <em>What Was Said in the Last Hour</em>, and <em>Where We Stand Now</em>) constitute the most sustained dramatic engagement with the Mourning produced by any Khorvairean writer to date. Yenna writes from the perspective of a Cyran survivor. The plays are, in their unflinching detail, sometimes difficult to watch. They are also, by my honest assessment, the work that this period most needed and that this period has, against substantial commercial and political pressure, managed to produce.</p>
<p class="marginalia">Mara Tellis serves as the senior dramatic critic for the Korranberg Chronicle and as a visiting lecturer at the Library on the Lyrris stacks' periodic offerings. Her own playwriting career was, by her own description, "a five-year experiment that taught me I am better at watching plays than at writing them, which has been good for the field of criticism if not for the field of dramaturgy."</p>`
});

LIBRARY.books.push({
  title: "Painting in the Five Nations: An Illustrated Catalog",
  author: "Curator Berra of Korranberg",
  college: "lyrris",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This catalog reproduces — in carefully prepared engravings, since the Library cannot maintain the original works in its collection — selected paintings from the major Khorvairean traditions of the past three centuries. The catalog is intended as both a reference for scholars of visual art and a teaching aid for Lyrris apprentices learning to recognize the techniques and characteristic subjects of the various national schools.</p>
<h3>The Aundairian School</h3>
<p>The Aundairian painting tradition, like the Aundairian poetic tradition, prizes formal refinement. The Aundairian school's strongest period was the early eighth century YK, when court painters of the Wynarn dynasty produced portraits of substantial technical accomplishment. The tradition's weakness, as with the poetic tradition, is its sustained attachment to courtly subjects; the post-war period has produced little Aundairian painting of broader interest.</p>
<h3>The Brelish School</h3>
<p>Brelish painting is, again like Brelish poetry, the most varied. The Sharn urban-realist tradition, beginning in the late ninth century YK with the work of Hass of the Cogs, has produced the most interesting Khorvairean painting of the past century. The urban-realists paint the actual city — the Cogs, the lower wards, the people whose lives the courtly traditions had consistently overlooked. The work is, at its best, both technically accomplished and morally serious in ways no Aundairian school work of the period matches.</p>
<h3>The Karrnathi School</h3>
<p>Karrnathi painting is, like Karrnathi poetry, austere. The tradition's strongest works are the post-war memorial paintings — large canvases depicting the war's dead, in compositions whose stillness and refusal of decoration achieve effects the more decoratively sophisticated traditions cannot. The painter Yannik ir'Dane is the major Karrnathi figure of the past two decades; her <em>Atur Cemetery in Winter</em> (994 YK) is, by curatorial consensus, the most important post-war Karrnathi painting.</p>
<h3>The Cyran Tradition</h3>
<p>The Cyran painting tradition was, before the Mourning, distinguished by its bold use of color and its commitment to landscape. Cyran painters worked extensively in the open country, producing canvases whose celebration of the land has, since the Mourning, become unbearable to view. The surviving Cyran canvases — those that were outside Cyre at the moment of the Mourning, or that were rescued in the early salvage expeditions — have become, for the diaspora, sacred objects. They are not, in most cases, exhibited publicly. They are held privately, displayed at memorial occasions, and treated with a reverence that exceeds anything in the broader Khorvairean tradition's relationship with its painted heritage.</p>
<p class="marginalia">Curator Berra has served the Library's small fine-art collection for twenty-six years. The collection is, by Library standards, modest; the Lyrris stacks were not, in their pre-reorganization configuration, primarily oriented toward visual art. The reorganization is, in part, an opportunity to expand the collection's scope.</p>`
});

LIBRARY.books.push({
  title: "The Long Argument: A History of Aundairian Critical Thought",
  author: "Professor Tessa ir'Vahn, University of Wynarn",
  college: "lyrris",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume traces the development of Aundairian literary criticism from its origins in the late Galifaran period through the contemporary post-war moment. The Aundairian critical tradition is the oldest of the Five Nations' traditions, and the most influential; even the contemporary Brelish and Cyran critical schools, which define themselves partly in opposition to Aundairian assumptions, work in vocabularies the Aundairian tradition established.</p>
<h3>The Foundational Period (700-820 YK)</h3>
<p>The foundational period of Aundairian criticism produced the standard taxonomies of poetic form, the standard methods of textual analysis, and the standard commitments to formal refinement that have shaped the tradition since. The major figure is, by general scholarly consensus, Magus-Critic Volian Tor of Fairhaven, whose <em>Treatise on the Verse Forms</em> (789 YK) remains the standard reference for the formal analysis of Aundairian poetry.</p>
<h3>The Romantic Reaction (820-880 YK)</h3>
<p>The romantic reaction against the foundational tradition's formalism was led, principally, by the Reaches-influenced critics of the late ninth century YK — figures whose attention to the popular and folk traditions of the western Aundairian uplands produced critical writing that the metropolitan tradition initially dismissed and subsequently, with characteristic Aundairian elasticity, absorbed.</p>
<h3>The War Years (880-996 YK)</h3>
<p>The war years did not, in general, produce major critical work. Critics, like everyone else, were attending to other things. The notable exception is the post-870 YK essays of Professor Brell of Wynarn, whose engagement with Vellan's plays produced the standard frameworks within which subsequent Aundairian critics have engaged with dramatic literature.</p>
<h3>The Contemporary Period</h3>
<p>The contemporary Aundairian critical tradition is, by my own professional assessment, in a period of self-questioning that has not yet resolved. The post-war period has destabilized the tradition's older confidences. The traditional courtly subjects have, since 996 YK, lost much of their previous self-evidence; what was once obvious has had to be defended, and the defenses are, in many cases, weaker than the tradition's confidence in them led younger critics to expect.</p>
<p>What will replace the older Aundairian critical confidences is, at present, undetermined. The Brelish critics' urban-realist commitments offer one direction. The Cyran diaspora critics' grief-centered methods offer another. The Aundairian tradition's own younger generation is, in my classroom, working out a third option whose shape I cannot yet describe with precision but whose existence I am increasingly confident of.</p>
<p class="marginalia">Professor Tessa ir'Vahn has taught critical theory at the University of Wynarn since 988 YK. She is, by her own admission, "a member of the older generation whose confidences this volume describes as destabilized; I write of the younger critics with the affection of someone watching a generation that will, properly, exceed mine."</p>`
});

LIBRARY.books.push({
  title: "Songs of the Reaches: A Folk Tradition Documented",
  author: "Field Folklorist Aldric of Greenheart",
  college: "lyrris",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The folk songs of the Eldeen Reaches have been, for centuries, transmitted orally from singer to singer, in domestic and seasonal-festival contexts, without formal documentation. The tradition is rich, varied, and, by recent decades' increasing rural-to-urban migration, gradually attenuating. This volume documents the songs as I have collected them across twenty years of field work in the Reaches.</p>
<h3>Method</h3>
<p>I have transcribed approximately four hundred and twenty distinct songs from approximately eighty singers across forty-six communities. The transcriptions preserve the lyrics as sung and the melodic notation in the standard Galifaran musical convention. The songs are organized in the volume by occasion (work songs, seasonal festival songs, ritual and ceremonial songs, lullabies, ballads, and the more recently developed tavern repertoire) rather than by region; the regional distribution is noted but does not, in my assessment, constitute the most useful organizing principle.</p>
<h3>The Older Layer</h3>
<p>A small but distinct group of songs — approximately thirty of the four hundred — appear to predate the Aundairian period of Reaches settlement. These songs are sung in a dialect that elderly singers describe as "the old way of saying it" and that contains substantial vocabulary not present in modern Galifaran or in any other living Khorvairean language. The songs treat subjects of considerable obscurity: certain seasonal observances whose original ritual context is no longer practiced, certain animal-personifications whose narrative significance the modern singers cannot fully explain, and certain landscape references to features that, in some cases, appear to no longer exist in the regions described.</p>
<p>I am not a linguist. I cannot determine whether the dialect is a survival of an older Galifaran-related language or a substrate of an earlier non-human (possibly orcish, possibly something earlier) tradition. I have provided the transcriptions in their original form, with phonetic guidance, for the use of linguistic scholars whose tools I do not possess.</p>
<h3>The Wartime Songs</h3>
<p>The Reaches' wartime songs constitute a distinct sub-tradition. The Reaches were not, in any straightforward sense, a combatant; the region had separated from Aundair in 958 YK and maintained, throughout the war, a stance of cautious independence. The wartime songs reflect this position: they treat the war as a calamity affecting the Reaches indirectly, through refugees, through the disruption of trade, through the conscription of young Reaches-born men into Aundairian forces, but not as a war the Reaches itself was fighting. The songs' affect is consequently distinctive — the war is grieved, but grieved at a small distance, in ways the Five Nations' own war songs do not achieve.</p>
<p class="marginalia">Field Folklorist Aldric of Greenheart was raised in the central Reaches and has, by his own account, "never been asked to leave by anyone whose request I would have honored." He continues field work seasonally and accepts visiting collaborators at his cottage outside Greenheart with the standing instruction that "if you cannot sing at least one Reaches song you do not yet have a use I can find for you here."</p>`
});

LIBRARY.books.push({
  title: "Iron-on-Stone: Selected Poems",
  author: "Iron-on-Stone, warforged scribe of the Library",
  college: "lyrris",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume collects forty-three poems composed by Iron-on-Stone, the warforged scribe of the Library, between 996 and 999 YK. The poems are presented in the order of composition, with brief annotations from the author's own files. The volume is published by the Library's own press and distributed without commercial intent; copies are made available to readers without charge.</p>
<h3>From the Preface (in the author's voice)</h3>
<p>"I did not write poetry during the war. I did not write anything during the war. I was not, in those years, a being who wrote. I was a being who served. The serving was the whole of what I was. The writing came after.</p>
<p>"What I write is not, by any standard the human and elven and gnomish poetic traditions of Khorvaire have established, sophisticated work. The forms are simple. The subjects are small. The diction is, by the literary tradition's standards, plain to the point of awkwardness. I do not apologize. I do not have access to the developmental years in which a human or elven poet learns the tradition's nuances. I came to writing as an adult. I came to writing with the tools my service had given me, which were the tools of clear instruction and clear observation. The tools have produced what they have produced.</p>
<p>"The poems are about mornings. They are about the way light moves across a wall. They are about the small kindnesses my colleagues at the Library extend to me each day. They are about the difficulty of remembering, after twenty years of serving, that one is permitted to want things. They are about sitting at a desk in a room one is welcome in.</p>
<p>"They are not about the war. There are no poems about the war in this volume. There may be, eventually, in some later volume. There are not, in this one, because the war is not yet, in my own internal sense, a thing I can write about. The mornings are. I am writing what I can write."</p>
<h3>Editorial Note</h3>
<p>Iron-on-Stone has, since 996 YK, served as a scribe at the Library of Korranberg. The poems collected here have been written principally in the early-morning hours, in the manuscript room of the Aureon stacks, before the day's scribal duties begin. The Library's senior council unanimously approved the volume's publication on the principle that the work meets, by the standards the council has applied to other Library-press publications, the threshold of literary value that justifies the press's resources. The author has formally declined any honorarium associated with the publication, stating in correspondence that "the volume's publication is, in itself, the honor; payment would be redundant."</p>
<p class="marginalia">Library of Korranberg press editor's note: This is the second Iron-on-Stone volume the press has published. The first, <em>Continuity of Flame and Scale</em>, appeared in 999 YK; both are available without charge to scholars at the manuscript room.</p>`
});
LIBRARY.books.push({
  title: "The Daelkyr: A Theological-Historical Study",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The daelkyr are the Lords of Madness — the native intelligences of Xoriat who entered Eberron during the great incursion approximately nine thousand years ago. Six daelkyr lords are named in the surviving traditions; an unknown number of additional daelkyr may have entered during the incursion or may exist on Xoriat without having entered. The daelkyr are not, in any reliable account, gods; they are, instead, beings of substantial power whose home plane's relationship with mortal cognition makes them effectively god-like in their effects on the mortals they encounter.</p>
<h3>The Six Named Lords</h3>
<p><strong>Belashyrra</strong>, the Lord of Eyes, whose creations include the beholders and various optic-aberrations. Bound, by the Gatekeepers' work, in a sealed chamber whose location is preserved in restricted Gatekeeper records.</p>
<p><strong>Dyrrn the Corruptor</strong>, the Lord of Mind, whose creations include the mind flayers and various tendril-aberrations. Bound similarly. The bindings of Dyrrn are considered, by current Gatekeeper assessment, the most stressed of the six; the Gatekeepers' maintenance work is most intensively focused on this binding.</p>
<p><strong>Orlassk</strong>, the Lord of Stone, whose creations include various stone-aligned aberrations. Bound. The bindings of Orlassk are, by current assessment, the most stable of the six.</p>
<p><strong>Avassh</strong>, the Lord of Roots, whose creations include various plant-aberrations. Bound. Avassh's bindings are reported, in some Gatekeeper accounts, to have weakened during the wartime period; the Gatekeepers have not formally confirmed this assessment.</p>
<p><strong>Kyrzin</strong>, the Lord of Slime, whose creations include various ooze-aberrations. Bound. Kyrzin is the least documented of the six; the surviving Gatekeeper records contain less material on Kyrzin than on any of the other named lords.</p>
<p><strong>Valaara</strong>, the Lord of Webs, whose creations include various spider and web-aligned aberrations. Bound. The bindings of Valaara are noted in Gatekeeper records as having required substantial reinforcement in the early sixth century YK; the cause of the reinforcement is not specified.</p>
<h3>The Unnamed</h3>
<p>The Gatekeeper tradition is consistent in its assertion that additional daelkyr entered during the incursion, that some were destroyed in the original Gatekeeper-led campaign, and that some remain present on Eberron in bindings not reflected in the standard six. The standard six are, in this account, the publicly named lords; the additional daelkyr are, for various reasons of operational security, not named in publicly available Gatekeeper records.</p>
<h3>The Question of Their Aim</h3>
<p>What did the daelkyr come for? The question is contested. The Tabernacle's standing position is that the daelkyr came to extend Xoriat's pattern of cognitive disruption to Eberron, in pursuit of purposes that mortal cognition is not equipped to fully apprehend. The dragon-faction position, drawn from the Chamber's available materials, is that the daelkyr came in response to a specific pressure of the Draconic Prophecy — a pressure the Chamber and the daelkyr's own faction were reading differently, and whose resolution required the daelkyr's intervention to produce the outcome their faction preferred.</p>
<p>I do not know which account is correct. I am inclined to suspect both contain partial truth. The daelkyr's purposes do not, in my judgment, have to be interpretable in terms mortal scholars can articulate; their non-interpretability is, perhaps, the principal feature of their nature.</p>
<p class="marginalia">Brother Kerrick consults regularly with the surviving Gatekeeper communities of the Shadow Marches and the western Eldeen Reaches. He has been, on three occasions, formally invited to attend Gatekeeper rituals as an observer; he has, in each instance, declined, on the principle that "the work is theirs and my presence would be at best decorative and at worst a distraction."</p>`
});

LIBRARY.books.push({
  title: "The Gatekeepers: Nine Thousand Years of Continuous Practice",
  author: "Druid-Elder Vorrak of the Shadow Marches",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Gatekeepers are the oldest continuous druidic tradition on Khorvaire. We have practiced, as a coherent tradition, for approximately nine thousand years, since the original orcish druids of the Shadow Marches developed the methods by which the daelkyr's incursion was countered and the surviving daelkyr lords were bound. The tradition has, in those nine thousand years, never lapsed. It has, at points, been small. It has, at points, been geographically scattered. It has, at no point, ceased to maintain the bindings on which its founding work depended.</p>
<h3>What We Do</h3>
<p>The Gatekeepers' principal work is the maintenance of the seals on the daelkyr lords' bindings. The seals are not, in their current form, single discrete objects; they are distributed networks of physical sites, ritual practices, and living tradition that, together, exert the cosmological pressure required to keep the bindings effective. The seals require maintenance. The maintenance is not optional. Without maintenance, the seals weaken. With maintenance, they continue.</p>
<h3>The Decline</h3>
<p>The Gatekeepers' membership has, over the past several centuries, declined substantially from its medieval peak. The decline has multiple causes: the Silver Crusade's depredations on the broader western druidic communities (the Crusade did not target the Gatekeepers specifically but reduced the population from which we recruited); the gradual urbanization of the Shadow Marches' periphery, which has reduced the number of orcish and human youth raised in the rural environment our recruitment historically relied on; and the Mourning, which has, by mechanisms my colleagues and I do not fully understand, produced a sustained pressure on the broader Khorvairean spiritual environment that has made our work harder.</p>
<p>The current Gatekeeper population is, by my own accounting, approximately one-fourth of its tenth-century peak. We are not in immediate crisis. We are, in a longer view, on a trajectory whose continuation is not consistent with the maintenance of the work.</p>
<h3>What We Need</h3>
<p>What the Gatekeepers need is not, in any simple sense, recruits. We need, more precisely, the conditions under which the kind of person we recruit can be raised. We need rural orcish and human communities in the Shadow Marches and western Reaches that are stable, prosperous, and connected to the older land-based religious traditions. The conditions are increasingly difficult to maintain, as the broader continental economy draws our potential recruits to the cities and as the cities offer them lives in which the older traditions appear, to the unschooled eye, irrelevant.</p>
<p>I write this not as a complaint but as a documentation. The Gatekeeper tradition has a finite future, in its current configuration. The future may be longer than my lifetime. The future will, almost certainly, be shorter than the tradition's past. What we are maintaining requires, in the longer view, either substantial intervention by parties beyond the Gatekeepers ourselves or a transition to some successor configuration whose shape I cannot foresee.</p>
<p class="marginalia">Druid-Elder Vorrak has served the Gatekeepers for sixty-three years. The volume is published with the formal approval of the Gatekeeper council and represents the tradition's most candid public statement of its current condition.</p>`
});

LIBRARY.books.push({
  title: "Daelkyr Contamination: An Atlas of Confirmed Sites",
  author: "Tabernacle Standing Inquiry into Aberrant Magic",
  college: "tabernacle",
  year: "998 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This atlas catalogs sites on Khorvaire and adjacent territories where daelkyr-tradition contamination has been confirmed by reliable inquiry. The atlas is restricted on the principle that disclosure of the sites' precise locations could attract unauthorized investigation by parties whose investigative competence is not adequate to the dangers involved. The atlas is held under standing review and is updated as new sites are confirmed and as previously confirmed sites are remediated or, in less satisfactory cases, deteriorate.</p>
<h3>The Categories</h3>
<p>Sites are catalogued by the type and severity of contamination observed. <em>Category One</em> sites show traces of daelkyr influence without active aberrant manifestation; the contamination is detectable by trained investigators but poses limited operational risk. <em>Category Two</em> sites show active aberrant manifestation at sub-critical levels; aberrant creatures may be present but are typically containable by ordinary means. <em>Category Three</em> sites show active aberrant manifestation at critical levels; sustained intervention by Gatekeeper-trained or Tabernacle-aligned forces is required to contain the manifestation. <em>Category Four</em> sites are sites of active daelkyr-lord influence; the bindings on a named lord are stressed in ways that produce regional aberrant pressure, and the site requires the Gatekeepers' direct attention to maintain stability.</p>
<h3>The Confirmed Distribution</h3>
<p>Category One sites are, by current count, approximately two hundred and twenty across Khorvaire. They are distributed broadly, with concentrations in the Shadow Marches, the deep Eldeen Reaches, the Mror Holds' lower delvings, and certain Sharn lower-ward locations.</p>
<p>Category Two sites number approximately seventy. The distribution is similar to Category One but with proportionately more representation in the Shadow Marches and fewer Sharn examples.</p>
<p>Category Three sites number approximately fifteen. They are, almost entirely, in the Shadow Marches and the deep Reaches. Each Category Three site is monitored by named Gatekeeper-aligned investigators on regular reporting cycles.</p>
<p>Category Four sites are six in number, corresponding to the six named daelkyr lords' principal binding locations. Their locations are not specified in this atlas; they are held in Gatekeeper records under separate access protocols.</p>
<h3>The Trend</h3>
<p>The current trend, by inquiry assessment, is one of slow deterioration. The number of Category One sites has, over the past two decades, increased by approximately fifteen percent. The number of Category Two sites has increased by approximately twenty percent. The number of Category Three sites has remained stable, principally because Gatekeeper intervention has prevented additional sites from reaching that category. The Category Four bindings are, by the Gatekeepers' assessment, stable but stressed.</p>
<p>The trend is not, on its face, alarming. The trend is also not, on closer examination, consistent with sustained long-term stability. Continuation of the current trend over the next several centuries would produce, by extrapolation, conditions in which the Gatekeepers' maintenance work could not be completed at the scale required.</p>
<p class="marginalia">Trust ledger: Access to this atlas is restricted to senior Tabernacle scholars, Gatekeeper-affiliated researchers, and parties holding standing Tabernacle authorization. The atlas's site-specific information is not to be transmitted in unsecured channels. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Dhakaani Echoes: The Empire's Survival Below",
  author: "Loremaster Daak'Velkr of the Kech Volaar",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Long Silence is the period, beginning approximately nine thousand years ago and continuing through the present, during which the Dhakaani Empire's surface civilization withdrew from the territories now occupied by the Five Nations and below. The Long Silence is not, contrary to the dominant Khorvairean account, a period of Dhakaani extinction. The Long Silence is the period during which the Empire moved underground and continued.</p>
<h3>What the Empire Became</h3>
<p>The Empire that survives in the deep strata is not the surface empire of nine thousand years ago. The surface empire has been, by the realities of underground existence, transformed. The clan structure has remained. The traditions of muut and atcha have remained. The military discipline has remained — has, in some clans' practice, intensified. The territorial scope has been substantially reduced. The Empire that exists today occupies, by our own accounting, approximately one-fortieth of the territory the surface empire held at its peak.</p>
<p>The Empire is, in its current configuration, organized around the surviving clans. The Kech Volaar — my own clan, the Wordbearers — preserve the Empire's accumulated lore and the duur'kala vocal traditions. The Kech Sharaat, the Bladebearers, preserve the military traditions and the daashor smithing arts. The Kech Shaarat, the Shield-of-the-People, focus on defense of the surviving subterranean territories. Other clans, smaller, preserve other traditions.</p>
<h3>The Daelkyr Question</h3>
<p>The Dhakaani Empire's principal continuing concern is the daelkyr presence in the deep strata adjacent to our territories. The daelkyr — those who entered during the incursion and who have, in various bindings or escaped configurations, persisted underground for the millennia since — are our enduring enemies. The Gatekeepers' work, performed by surface druids whose ancestral relationship to the dar is complicated and not always cordial, addresses the daelkyr lords' bindings. The daelkyr's lesser servants — the dolgrim, the dolgaunts, various other servitors — operate in the deep strata in numbers that the Gatekeepers' surface-focused work does not directly address.</p>
<p>The dar fight them. We have fought them, in some clans' continuous tradition, since the original incursion. The fighting is constant, ritualized, and necessary. We do not, in most accounts, expect to win in any final sense. We expect to maintain. The maintenance is the work the Empire has, in its current form, organized around.</p>
<h3>The Return Question</h3>
<p>Will the Empire return to the surface? The clans disagree. The Kech Volaar tradition holds that the return is inevitable, that the Long Silence will end, and that the dar will reassert their place above ground when the conditions are right. The conditions are, in our reading of the available materials, not yet right. Other clans hold more aggressive positions. The Kech Sharaat, in particular, have argued in recent generations that the conditions are increasingly close to the threshold required for return.</p>
<p>I write of these questions for the surface scholars in part because the surface scholars should know the questions are being asked. The dar's continued underground existence is not, as the popular Khorvairean account assumes, a stable arrangement that will continue indefinitely. The dar are present, organized, capable, and, in some clans' assessment, increasingly impatient. The surface civilization that occupies our ancestral territories should, in the longer view, be aware of this.</p>
<p class="marginalia">Loremaster Daak'Velkr of the Kech Volaar publishes this volume in Common as a deliberate act of cross-cultural communication. The volume's reception within the Empire has been, by his own report, "varied; the Kech Volaar tradition supports the publication, the Kech Sharaat tradition is divided, and certain smaller clans have formally objected to the disclosure of materials they consider properly internal to the Empire."</p>`
});


// ─── DRAGONS / ARGONNESSEN DEEPER ─────────────────────────────

LIBRARY.books.push({
  title: "The Chamber: A Dossier on the Dragon Faction",
  author: "Anonymous (Aundairian Royal Eyes provenance)",
  college: "tabernacle",
  year: "deposited 992 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Chamber is the Argonnessen dragon faction most directly engaged with mortal Prophecy interpretation and intervention. The Chamber's existence is, in the formal records of the Five Nations, unacknowledged. The Chamber's operations are, in those same records, attributed to other parties or to coincidence. This dossier compiles what Aundairian intelligence has determined, with various confidence levels, about the Chamber's structure, methods, and current operational posture.</p>
<h3>What the Chamber Is</h3>
<p>The Chamber is, by the available evidence, a coalition of dragon factions within Argonnessen whose shared interest is the active interpretation and influencing of the Draconic Prophecy as it unfolds in the mortal world. The Chamber is not the entirety of dragon involvement in mortal affairs — other dragon factions operate independently, sometimes in opposition to the Chamber's preferences — but the Chamber is the most organized, the most patient, and the most consequential dragon-aligned operation observable from the mortal side.</p>
<h3>How the Chamber Operates</h3>
<p>The Chamber operates principally through proxies. Direct dragon presence in the Five Nations is rare; the Chamber's preferences are advanced through agents, allies, and incidentally aligned mortals whose actions the Chamber has, in many cases, helped to shape without the actors' awareness. The methods by which the shaping occurs include: long-term cultivation of mortal scholars whose work the Chamber wishes to develop in particular directions; targeted disclosure of Prophecy fragments to scholars whose interpretive frameworks the Chamber expects to advance the Chamber's preferred readings; financial and material support, channeled through obscured intermediaries, for projects whose successful completion serves the Chamber's interests; and, less commonly, direct intervention in mortal events at points the Chamber's analysts have identified as particularly Prophecy-significant.</p>
<h3>The Chamber's Current Concerns</h3>
<p>By the available evidence, the Chamber is currently most preoccupied with several specific Prophecy-aligned concerns. <em>The Mourning</em>: the Chamber, like all major Prophecy-aligned factions, was surprised by the Mourning and has been engaged in extensive retrospective and current analysis of the event's implications. <em>The line of Vol</em>: Erandis Vol's continued existence and apparent activities are subjects of ongoing Chamber attention; whether the Chamber's posture is hostile, neutral, or in some way protective remains contested in the intelligence assessments. <em>The Lord of Blades</em>: the Chamber's interest in the Lord of Blades is real but its precise nature is unclear; the available evidence supports neither a straightforwardly hostile nor a straightforwardly aligned reading. <em>The post-war reorganization</em>: the Chamber has, by the available evidence, been more active in post-war Khorvairean political affairs than during the war itself, suggesting that the post-war reorganization presents Prophecy-significant pressures the Chamber is working to shape.</p>
<h3>The Chamber's Limits</h3>
<p>The Chamber is, despite its considerable resources and patience, not omnipotent. The Lords of Dust — the rakshasa rajahs and their servants — operate against Chamber preferences in many cases. The Dreaming Dark operates from a different cosmological position whose alignment with Chamber preferences is, at best, partial. Mortal initiative, in cases of sufficient surprise or sufficient determination, can shift Prophecy pressures in ways the Chamber did not anticipate and cannot easily counter. The Chamber's track record, evaluated honestly, is mixed.</p>
<p class="marginalia">This dossier was deposited at the Library through Aundairian diplomatic channels in 992 YK. The deposit terms specified anonymous public access without further restriction. The Library's review board considered the dossier's potentially destabilizing implications and concluded that, on balance, the dossier's contents were already widely understood within professional intelligence and theological circles and that public availability would not materially alter the broader political situation.</p>`
});

LIBRARY.books.push({
  title: "The Lords of Dust: A Theological-Political Study",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lords of Dust are the rakshasa servants of the bound rakshasa rajahs — the Overlords who ruled Eberron in the Age of Demons and who were bound by the couatl sacrifice that ended that age. The Lords of Dust are, in functional terms, the operational arm of the bound Overlords' sustained effort to weaken their bindings and, eventually, regain their freedom. The work has continued, by the rakshasa's own time horizons, for tens of thousands of years. It will continue indefinitely.</p>
<h3>The Structure</h3>
<p>The Lords of Dust are organized in service to specific Overlords. Each major Overlord has its own faction of rakshasa servants, with its own hierarchy, its own methods, and its own characteristic concerns shaped by the Overlord's portfolio. <em>Bel Shalor</em>'s servants — bound under the Silver Flame — focus on theological corruption, the subversion of the Silver Flame's adherents, and the cultivation of the kind of self-righteous certainty the Overlord feeds on. <em>Sul Khatesh</em>'s servants focus on the proliferation of forbidden arcane knowledge, the cultivation of researchers whose curiosity exceeds their wisdom, and the subtle distortion of arcane traditions in the directions her Overlord prefers. <em>Eldrantulku</em>'s servants focus on the cultivation of betrayal, the rupture of treaty arrangements, and the planting of treachery in the hearts of leaders whose authority the betrayal will damage.</p>
<p>The other Overlords have similar factions. The factions are, by the available evidence, only loosely coordinated; the Lords of Dust as a whole is more accurately described as a coalition of Overlord-aligned operations than as a single unified organization.</p>
<h3>The Methods</h3>
<p>The Lords of Dust operate, in most cases, through long-term cultivation rather than direct action. A rakshasa lord may spend centuries cultivating a single mortal lineage whose eventual prominence will, by the rakshasa's analysis, contribute to the weakening of its master's binding. The cultivation is patient and, in most cases, invisible to the cultivated lineage. The lineage's members do not, in any reliable account, know they are being shaped.</p>
<p>The methods include: dream manipulation (less powerful than the Dreaming Dark's quori-based methods but operating on similar principles); cult-cultivation through proxies (the Lords of Dust frequently fund and direct mortal cults whose members serve as conduits for Overlord-aligned influence); strategic interventions in mortal politics, often at points where small actions by the rakshasa produce large effects through cascading consequence; and, occasionally, direct rakshasa appearance in mortal contexts when the operational benefits exceed the exposure cost.</p>
<h3>The Mortal Position</h3>
<p>What can mortals do about the Lords of Dust? The honest answer is: not much, individually. The Overlords' bindings are maintained principally by cosmological structures the Silver Flame and other traditions sustain; individual mortal action against the Lords of Dust is, in most cases, a delaying operation rather than a defeat. What individual mortals can do is refuse to be cultivated. The cultivation requires the cultivated party's cooperation, even if the cooperation is unwitting. The mortal who is alert to the patterns of Overlord-aligned manipulation, who is suspicious of the unexpected gift and the surprisingly well-timed opportunity, who maintains the discipline of asking why a thing is being offered before accepting it, is harder to cultivate than the mortal who is not. The harder cultivation is enough, in many cases, to redirect the rakshasa's attention to a less alert target.</p>
<p>This is not, by any reasonable assessment, a winning strategy. It is, by my pastoral assessment, the strategy that is available to most mortals and that produces the best individual outcomes most of the time.</p>
<p class="marginalia">Brother Kerrick has, in his career, been the subject of three documented rakshasa-cultivation operations. He has, by his own assessment, recognized two of them. He suspects the third was at least partially successful in ways he has not been able to identify. He continues his work with the discipline of suspicion this judgment requires.</p>`
});

LIBRARY.books.push({
  title: "On the Couatl Sacrifice: The Founding of the Silver Flame",
  author: "Cardinal Tessa ir'Vahn",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Silver Flame's founding event is the couatl sacrifice that ended the Age of Demons and bound the Overlords. The event is, in the Silver Flame's own theological tradition, treated with reverence and with some operational vagueness; the precise details of how the sacrifice was conducted, by which couatls, against which Overlords, are matters that the tradition has, over time, gradually clarified through scholarly inquiry rather than revealed through scriptural authority.</p>
<h3>What the Sacrifice Was</h3>
<p>The couatls were, in the Age of Demons, a numerous race of celestial serpents whose existence on Eberron was specifically a counter-weight to the Overlords' dominance. The couatls' theological alignment was with the cosmic principle of binding — the principle by which excessive concentrations of power are restrained from consuming the conditions that sustain other beings. The Overlords, as fiendish beings of substantially concentrated power, were the principal threat the couatls had been positioned to oppose.</p>
<p>The sacrifice consisted of the couatls' deliberate self-extinction as a race, with their accumulated divine essence channeled into a single sustained binding force capable of holding the Overlords in confinement. The mechanics of the channeling are not preserved in available records. The result, however, is well-documented: a sustained cosmic-theological force, identifying itself eventually as the Silver Flame, whose continued operation maintains the Overlords' bindings and whose manifestation on Eberron is concentrated principally at the site that became the Cathedral of the Silver Flame in Flamekeep.</p>
<h3>The Continuation</h3>
<p>Tira Miron's later sacrifice — six hundred and ninety-three years ago — was a continuation rather than a foundation of the Flame. The Flame had existed, in cosmic-theological form, since the original couatl sacrifice. Tira's sacrifice merged her own soul with the Flame, providing a mortal-sourced consciousness that could, in some accounts, channel the Flame's binding force more effectively than the purely couatl-derived structure had been able to. The Flame's manifestation, in the centuries since Tira, has been distinctly different in character from the manifestation in the centuries between the couatl sacrifice and Tira's; the Tira-merged Flame is more responsive to mortal devotional practice, more accessible to paladins and templars seeking active partnership, and (some scholars argue) more internally divided in ways that have produced the Church's various theological controversies.</p>
<h3>The Theological Question</h3>
<p>Is the Flame benevolent? The question is, in the Church's own theological tradition, considered settled. The Flame is benevolent. The Flame opposes the Overlords. The Overlords are evil. The Flame's opposition is, by simple logical extension, good.</p>
<p>The theological question, in its more sophisticated form, is whether the Flame's <em>nature</em> is benevolent or whether the Flame's <em>function</em> is benevolent without the Flame itself being a being to which the predicate "benevolent" applies. The latter view, advanced by certain heterodox theological scholars, holds that the Flame is a binding force — a structural mechanism, perhaps with some emergent agency, but not in any reliable sense a person whose moral status can be assessed. The view is not condemned by the Church but is also not, in current Church catechism, taught.</p>
<p class="marginalia">Cardinal Tessa ir'Vahn has served the Church's theological inquiry for forty-one years. She is, by long observation, one of the more careful Church scholars; the volume's careful presentation of the theological controversies reflects her own characteristic preference for honest engagement over confident assertion.</p>`
});

LIBRARY.books.push({
  title: "The Age of Demons: A Pre-Historical Reconstruction",
  author: "Visiting Scholar Quoryn ir'Vahn",
  college: "soladas",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Age of Demons is the pre-historical period during which the Overlords ruled Eberron. The age's duration is contested; the most reliable theological-historical reconstructions place its length at between forty thousand and a hundred thousand years. The age ended with the couatl sacrifice that bound the Overlords, approximately ninety thousand years ago by the most defensible reading of available evidence. The age preceded all currently-active mortal civilizations on Khorvaire; the giant Cul'sir Dominion of Xen'drik, the Dhakaani Empire of Khorvaire, the elven civilizations of Aerenal — all are post-Age-of-Demons developments.</p>
<h3>What the Age Was</h3>
<p>The Age of Demons was a period of fiendish dominance. The Overlords ruled, more or less openly, the territories that now form the continents of Khorvaire and (in different configurations) Sarlona, Xen'drik, and Aerenal. The pre-Age mortal populations that had existed on Eberron were either absorbed into the Overlords' dominion as servitors, exterminated, or driven into marginal territories where their survival was tolerated only because their reduction had not been worth the Overlords' attention.</p>
<p>The Overlords' rule was not unified. The Overlords were, by the available accounts, intensely territorial and frequently hostile to one another. The age was punctuated by Overlord-against-Overlord conflicts whose scale and consequences eclipse anything in subsequent mortal history. The Cauldron of Sul Khatesh in the Demon Wastes is, by some readings, a residue of one such conflict; the Lhazaar deep is, by other readings, the site of another.</p>
<h3>The Couatls</h3>
<p>The couatls were, throughout the Age of Demons, the principal counterweight to the Overlords' rule. They were not, in any complete sense, in opposition; certain Overlords had, by the available evidence, complicated relationships with certain couatl factions, and outright war between the species was rare in the age's earlier centuries. The relationship deteriorated, however, over the age's long span. By the age's final millennia, the couatls had positioned themselves as the principal cosmic-theological resistance to the Overlords' continued dominance.</p>
<h3>The Ending</h3>
<p>The couatls' sacrifice ended the age. The mechanics of the sacrifice are, as noted in the previous volume on the founding of the Silver Flame, not preserved in detail. What is preserved is the result: the Overlords were bound, the bindings were sustained by the Flame the couatls' essence had become, and the conditions for the rise of mortal civilizations on Eberron were, for the first time in the planet's recoverable history, present.</p>
<p>The mortal civilizations that arose in the age's wake — the giants, the dar, the elves, the various scattered humanoid populations that became, over millennia, the precursors of the Five Nations — built on the foundation the couatls' sacrifice had established. We owe them, in the most literal sense, our existence as civilizations. The owing is not, in current Khorvairean culture, much remembered. The Silver Flame's contemporary devotional tradition remembers the sacrifice in a stylized form. The broader Khorvairean tradition has, over the millennia, largely forgotten.</p>
<p class="marginalia">Visiting Scholar Quoryn ir'Vahn drew on extensive archives at the Library, at the Cathedral of the Silver Flame in Flamekeep, and at certain Aereni libraries whose access he obtained through the formal Aereni-Korranberg scholarly exchange. The volume is, by his own assessment, "as honest as I could make it; the period's evidence is fragmentary and the reconstruction is unavoidably partial."</p>`
});


// ─── ELDEEN REACHES EXPANDED ──────────────────────────────────

LIBRARY.books.push({
  title: "The Greensingers: Servants of the Faerie Court",
  author: "Druid Tarra of the Greensingers",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Greensingers are one of the four druidic sects of the Eldeen Reaches. We are, by our tradition's self-description, the servants of the fey courts of Thelanis — the Plane of Faerie, whose influence reaches into the deeper Reaches through ancient manifest zones and through the persistent attention of Thelanian beings whose interest in Eberron has not, in millennia, lapsed.</p>
<h3>What the Greensingers Do</h3>
<p>The Greensingers maintain the Reaches' relationships with Thelanis. The relationships are not, in any straightforward sense, alliances. The Thelanian fey are, by their nature, capricious, narrative-driven, and substantially uninterested in the kinds of stability that mortal politics typically require. We do not negotiate treaties with the fey courts. We negotiate, instead, the conditions under which the fey's incursions into Eberron will be, by mortal standards, minimally disruptive. The negotiations are continuous. The negotiations are, in many cases, conducted through forms — songs, dances, ritual exchanges — that the formal diplomacy of the Five Nations would not recognize as negotiation at all.</p>
<h3>The Wild Hunt</h3>
<p>The most documented of the Thelanian incursions into the Reaches is the Wild Hunt — periodic processions of fey hunters through specific wooded regions, lasting from hours to days, during which mortals who happen into the Hunt's path are, by long custom, considered the Hunt's legitimate prey. The Hunt's targeting is not, in any reliable account, predictable; some mortals encounter the Hunt and are pursued, others encounter it and are passed by, others have, by surviving accounts, joined the Hunt and ridden with the fey for periods that mortal time-keeping cannot accommodate.</p>
<p>The Greensingers do not, in any effective sense, prevent the Hunt. The Hunt is older than us. The Hunt will continue when we are gone. What we do, when the Hunt is approaching a region in which mortals have settled, is warn. We sing. We mark the boundary stones. We tell the local communities to remain indoors during the relevant nights. The communities, in most cases, listen.</p>
<h3>The Other Courts</h3>
<p>The Wild Hunt is the most familiar Thelanian phenomenon, but it is not the only one. The Reaches have ongoing relationships with multiple fey courts: the Court of the Listening Stones, whose envoys visit certain glades on a generational cycle; the Court of the Twin Sisters, whose paired Faerie nobles have, in recorded mortal history, engaged in three significant interventions in Reaches affairs; the Court Below, whose representatives are, by my own observation, the most dangerous of the courts a Greensinger may encounter and the courts whose attention should be most carefully avoided.</p>
<h3>What the Greensingers Are Not</h3>
<p>We are not the Children of Winter. The popular outside conception sometimes confuses our sect with theirs, on the basis that both sects engage with what the popular conception considers "dark" druidic concerns. The Children of Winter serve a fundamentally different theological tradition — death and natural correction — that has no relationship with the Thelanian work. We do not approve of the Children of Winter. We tolerate them, as the Wardens of the Wood do, on the principle that suppression would be both impractical and counter-productive. We do not, in any sense, share their concerns or their methods.</p>
<p class="marginalia">Druid Tarra of the Greensingers writes from the central Reaches, where she has served the sect for forty-six years. The volume is published with the formal approval of the Greensinger council and represents the sect's most candid public statement of its work to outside scholars.</p>`
});

LIBRARY.books.push({
  title: "The Children of Winter: A Theology of Necessary Death",
  author: "Druid Yssa of the Children",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I write this volume against the explicit advice of my own sect's elders, who hold that our work is best left undefended in the discourse of the surface civilizations. I disagree with my elders on this. The Children of Winter are widely misunderstood, and the misunderstanding has, in recent decades, produced sustained external hostility that the sect cannot, in the long view, sustain through silence. This volume is my attempt to offer the sect's tradition a clearer and more honest external presentation than it has previously received.</p>
<h3>The Founding Premise</h3>
<p>The Children of Winter teach that death is the necessary correction to overgrowth. The natural world maintains itself, in our reading, through cycles of growth and reduction. The reduction phases are not failures of the cycle but essential features of it. Plague, famine, predation, the great seasonal die-offs — these are not, by our theology, calamities to be lamented. They are the world's correction of imbalances that, uncorrected, would produce conditions worse than the corrections themselves.</p>
<h3>The Misreading</h3>
<p>The conventional outside misreading of our sect attributes to us a positive enthusiasm for death, and a willingness to inflict death in service of our theology. This misreading is, I will say plainly, false. The Children of Winter do not, in any organized practice, inflict death on populations the world has not itself selected for reduction. We observe. We respect. We refuse to interfere with the world's corrections when the corrections are underway. This refusal is sometimes mistaken for active hostility against the populations being reduced. The mistake is not innocent; the populations being reduced experience our refusal as a kind of complicity in their reduction, and the experience produces hatreds that no amount of theological clarification will dissolve.</p>
<h3>The Defensible Position</h3>
<p>I will not pretend that the Children of Winter's position is, in all its applications, defensible. There are individual members of the sect whose reading of the theology has produced practices I do not endorse — refusal to assist plague-stricken communities even where assistance would not, by reasonable assessment, prevent the corrections the plague was effecting; cultivation of cult-like detachment from the suffering of the affected populations; in rare and disavowed cases, active facilitation of reduction events through the spread of disease vectors or the disruption of agricultural systems. I disavow these practices. The sect's elders disavow them. They occur, nonetheless, and they have shaped the outside world's perception of us in ways that the sect's broader, more disciplined practice has not been able to counter.</p>
<h3>The Argument for Tolerance</h3>
<p>I do not ask the outside world to accept the Children of Winter's theology. I ask only that the world accept our right to maintain our tradition and to practice it within the limits the Reaches' druidic council has established. The limits are real. The limits are enforced. The Children who exceed them are excluded from the sect's protection, and several have been formally excluded in recent decades for conduct that crossed the lines we draw. We are not without internal discipline. We are, in our internal discipline, more rigorous than our outside critics often credit.</p>
<p class="marginalia">Druid Yssa of the Children writes from a small grove in the central Reaches. The volume's publication has been, by reports reaching the Library, the subject of substantial internal Children of Winter controversy. Druid Yssa has indicated, in correspondence preserved at the Library, that she expects to be formally censured by her sect's elders within the year. She continues, nonetheless, to consider the publication justified.</p>`
});

LIBRARY.books.push({
  title: "The Eldeen Reconciliation: A Treaty of Imperfect Peace",
  author: "Wardens' Council Scribe Felia",
  college: "aureon",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Eldeen Reconciliation of 996 YK formally established, between Aundair and the Eldeen Reaches, the post-war diplomatic and trade arrangements that govern the two polities' continuing coexistence. The Reconciliation is, in its formal text, a treaty. The Reconciliation is, in its operational reality, a set of compromises that neither party fully endorses but that both parties prefer to the alternatives. This volume reproduces the Reconciliation's text and provides annotations from the Wardens' Council perspective.</p>
<h3>The Core Provisions</h3>
<p>The Reconciliation provides: <em>mutual recognition</em>. Aundair recognizes the Eldeen Reaches as a sovereign polity. The Reaches recognizes Aundairian territorial integrity within Aundair's current borders. <em>Trade access</em>. Each party permits the other's merchants and goods to traverse its territory under standard customs arrangements. <em>Refugee provision</em>. Each party will provide, on request, asylum and resettlement support to refugees from the other's territory whose circumstances meet specified criteria. <em>Border maintenance</em>. The boundary between the two polities is fixed at the present line, with provisions for joint administration of disputed sectors that have, in some cases, never been definitively resolved.</p>
<h3>The Aundairian Concessions</h3>
<p>The Aundairian concessions in the Reconciliation are substantial. Aundair has, for the first time in over forty years, formally recognized the Reaches' separation. The recognition was, by Aundairian Crown internal documents, accepted only because the cost of continued non-recognition exceeded the value of preserving the formal claim. The Reaches' separation is now, in international law, settled.</p>
<p>Aundair has also accepted the principle that Reaches refugees in Aundair are owed support, even when their political affiliations are with the Reaches' more independence-asserting factions. This principle was contested by the more reactionary elements of the Aundairian court but was carried by the Crown's own preference for stability over symbolic insistence.</p>
<h3>The Reaches' Concessions</h3>
<p>The Reaches' concessions are, in formal terms, smaller but politically more significant. The Reaches has accepted Aundair's territorial integrity, foreclosing the possibility of further Reaches expansion into territories where Aundair's claim has weakened. This concession was contested by the more expansionist Children of Winter and certain Greensinger factions but was carried by the Wardens of the Wood's pragmatic preference for stable relations with our largest neighbor.</p>
<p>The Reaches has also accepted, in a clause whose political implications are substantial, that the Wardens' Council is the Reaches' legitimate diplomatic representative for purposes of all dealings with Aundair. This clause has been read, by some Reaches political factions, as a foreclosure of alternative diplomatic channels that the Reaches' more democratic factions had hoped to establish. The clause was, by the Wardens' own internal discussion, a concession we considered necessary to provide Aundair with a single negotiating partner whose authority Aundair could rely on.</p>
<h3>What the Reconciliation Did Not Resolve</h3>
<p>The Reconciliation did not resolve the question of the Silver Crusade's atrocities. The Reaches' shifter and lycanthropic communities have not received, in the Reconciliation's text or in any subsequent Aundairian or Thranish action, an acknowledgment of the wrongs committed against them or any remedial obligations on the part of the perpetrating polities. The omission is, in my own view and in the views of substantial portions of the Wardens' Council, a serious failing of the Reconciliation. We accepted the failing because the Reconciliation as a whole was preferable to its absence. We continue to consider the failing unfinished business.</p>
<p class="marginalia">Wardens' Council Scribe Felia served as the Reaches' principal scribe-negotiator during the Reconciliation talks. The volume includes, in its appendices, materials reflecting the Council's internal debates that the formal published Reconciliation does not include. Reaches scholarly tradition has, by long custom, preferred candor over diplomatic gloss; the appendices reflect this preference.</p>`
});


// ─── AERENAL EXPANDED ─────────────────────────────────────────

LIBRARY.books.push({
  title: "The Sibling Kings: Aerenal's Living Government",
  author: "Visiting Scholar Quoryn ir'Vahn",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Sibling Kings are the formal heads of state of Aerenal, ruling jointly with the advice and constant supervision of the Undying Court. The Sibling Kings are, by Aerenal tradition, brother and sister; they are, in the current generation, Vadallia and Cardaen of the line of Cul'sirad. They have ruled jointly since 824 YK. They will continue to rule, by Aerenal tradition, until they die or until they are formally relieved by the Court — neither of which has, in the past several generations, occurred.</p>
<h3>What the Sibling Kings Do</h3>
<p>The Sibling Kings administer Aerenal's day-to-day governance. They preside over the formal sessions of the Aerenal Council. They issue executive directives within the limits the Undying Court has established. They represent Aerenal in foreign diplomacy, including the formal exchanges with the Five Nations, with the Lhazaar Principalities, and with the Talenta Plains.</p>
<p>The Sibling Kings do not, in any independent sense, set Aerenal policy. Policy is set by the Undying Court. The Sibling Kings administer the Court's policy; their executive discretion operates within the Court's frameworks and is, in any matter of significance, subject to Court review. The Sibling Kings are, in functional terms, the Court's living agents — bridges between the deathless majority of the Aerenal political community and the still-living elven population whose mortality requires that some governance be conducted in real time rather than in the centuries-spanning deliberations the Court itself prefers.</p>
<h3>The Tairnadal Position</h3>
<p>The Tairnadal — the warband-tradition elves who, since the Treaty of Thronehold, occupy the territory that became Valenar — maintain a complicated relationship with the Sibling Kings. The Tairnadal are, by ancient tradition, citizens of Aerenal; their migration to Valenar was conducted with the formal blessing of the Sibling Kings and the Undying Court. The Tairnadal are, by current operational reality, increasingly autonomous from Aerenal direction; their leadership in Valenar acts, in many matters, without consultation with Tairnadal-aligned figures within Aerenal proper.</p>
<p>The Sibling Kings have, by available evidence, declined to formally challenge this autonomy. The autonomy serves Aerenal's interests, in the current judgment of the Court: Tairnadal action in Valenar provides Aerenal with strategic depth in the Khorvairean political environment without committing Aerenal-proper resources. The Tairnadal pay this strategic benefit by accepting reduced direct support from the Aerenal homeland. The arrangement is mutually advantageous and is, by the Court's preference, allowed to continue without formal regularization.</p>
<h3>The Foreign Diplomatic Style</h3>
<p>The Sibling Kings' foreign diplomacy is conducted, by long Aerenal preference, slowly and at considerable formal distance. Aerenal's diplomatic missions to Khorvaire are infrequent, are conducted at great ceremony when they occur, and are rarely productive of agreements requiring rapid follow-through. The slow style is not, in Aerenal's own self-understanding, a weakness; the slow style reflects Aerenal's substantially longer political time horizon. The Five Nations' diplomats, who must operate on mortal-political timelines, frequently find Aerenal diplomacy frustrating. Aerenal's diplomats, by my own observation, occasionally find the Five Nations' diplomatic urgency unseemly.</p>
<p class="marginalia">Visiting Scholar Quoryn ir'Vahn spent three years in Aerenal during the period 985-988 YK and has, since 992 YK, conducted regular correspondence with several Aerenal scholars whose Korranberg-affiliated work he has supervised. The volume reflects substantial Aerenal-source consultation, with the limitations on disclosure that such consultation typically requires.</p>`
});

LIBRARY.books.push({
  title: "The Undying Court: Politics of the Deathless",
  author: "Anonymous (Aereni provenance)",
  college: "tabernacle",
  year: "deposited 989 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This document was deposited at the Library through indirect channels in 989 YK. The deposit terms specified anonymous public access. The internal evidence suggests Aereni authorship, possibly by a member of the Undying Court itself or by a senior Aereni scholar with substantial direct access. The document treats Court politics with a candor that Aereni-public works typically avoid.</p>
<h3>What the Court Is</h3>
<p>The Undying Court comprises the elven ancestors who have, through ritual transition, become deathless. The transition is voluntary, requires substantial preparation by the candidate during their living lifespan, and is granted only to candidates whose contributions to Aereni civilization are judged sufficient to justify the cosmic-theological investment the transition represents. The Court's membership is currently, by available accounting, approximately fifty-three thousand individuals. The number grows slowly, as new candidates complete the transition, and shrinks rarely, as deathless members occasionally choose final dissolution or, in extreme cases, are dissolved by Court decision for conduct the Court considers incompatible with continued membership.</p>
<h3>The Internal Politics</h3>
<p>The Court is not, in any operational sense, a unified body. The Court is a deliberative assembly with substantial internal factional structure. The factions vary in their commitments, in their characteristic concerns, and in the time horizons over which they evaluate proposed actions. The major factions, by my reading of the Court's recent deliberations, include:</p>
<p><em>The Conservatives</em>: deathless members of substantial age who prefer policies favoring continuity with the Court's longest traditions. They are, by my reading, the dominant faction in most current matters.</p>
<p><em>The Vol-Resolutionists</em>: members particularly concerned with the unresolved status of the line of Vol and with Erandis Vol's continued existence. They argue, with persistent intensity, for renewed action against Erandis. They are, by current Court votes, a minority.</p>
<p><em>The Khorvaire-Engaged</em>: members favoring expanded Aerenal engagement with the Five Nations and the post-war Khorvairean order. They are, by recent votes, a slowly growing minority.</p>
<p><em>The Tairnadal-Skeptics</em>: members questioning the Court's standing acceptance of Tairnadal autonomy. They have, in recent decades, gained ground but remain a minority.</p>
<h3>The Khorvairean Implication</h3>
<p>The Khorvairean reader should understand, from this account, that Aerenal's public political positions reflect deliberate Court compromises among these factions. The compromises are slow to form and slow to change. A position the Court endorses today is the result of debates that may have begun centuries ago and that may continue for centuries after a current decision is implemented. The Khorvairean diplomat who attempts to influence Aerenal policy by appealing to the Sibling Kings or to current senior diplomatic figures is, by Aerenal standards, addressing the wrong audience. The audience that matters is the Court, which the Khorvairean diplomat will, in most cases, never have direct access to.</p>
<p class="marginalia">The Library's review of this document concluded that the candor of the account is internally consistent with the level of Court access the document's framing implies. The document's release without further restriction was approved on the principle that the broader Khorvairean diplomatic community would benefit from improved understanding of Aerenal's actual political structure, and that Aereni interests would not be materially harmed by the disclosure of dynamics that experienced Aerenal-engaged diplomats already partially understood.</p>`
});

LIBRARY.books.push({
  title: "Erandis Vol: A Compiled Dossier",
  author: "Tabernacle Standing Inquiry into the Mark of Death",
  college: "tabernacle",
  year: "999 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This dossier compiles available information on Erandis Vol — the half-dragon lich descendant of the line of Vol, bearer of the apex Mark of Death, and the principal continuing concern of the Aerenal Sibling Kings' standing erasure project. Erandis has existed, in her current form, for approximately twenty-six centuries. The dossier reflects the current state of inquiry; it is updated as new information becomes available.</p>
<h3>What She Is</h3>
<p>Erandis is, in technical theological terms, a lich — a magical undead creation in which the original individual's consciousness has been preserved through a phylactery-based binding while the body has been transformed into a non-decaying undead vessel. The lich form is voluntary on the original individual's part; Erandis chose her transformation as her line was being destroyed, on the calculation that the alternative (final death with the elimination of the apex mark) was less acceptable to her than continuation in altered form.</p>
<p>She is also, distinctively, a half-dragon. Her father was the Argonnessen-faction red dragon known to Aereni records as Avothirax. The half-dragon component of her heritage gives her capabilities — both biological and arcane — that distinguish her from ordinary elven lich practitioners. The capabilities have, over the centuries, contributed substantially to her continued ability to evade Aereni and Argonnessen efforts to complete her destruction.</p>
<h3>The Apex Mark</h3>
<p>Erandis bears the apex Mark of Death. The mark is, in available scholarly assessment, the most powerful single dragonmark expression ever documented; it exceeds the Siberys-level marks of any current dragonmarked house in raw power, in scope of effects, and in the breadth of its theological-cosmological resonance. The apex mark's specific capabilities are not fully catalogued; the catalog requires direct observation that the inquiry has not been able to reliably obtain.</p>
<p>What is clear is that the apex mark, in Erandis's lich form, has been preserved across the centuries since her transformation. The mark is not, in any reliable account, weakening. Erandis's current capabilities, by the inquiry's best assessment, are not substantially less than they were when she first became a lich.</p>
<h3>What She Is Doing</h3>
<p>Erandis's current activities are, by inquiry assessment, oriented around two principal goals. <em>Self-preservation</em>: she has, for twenty-six centuries, evaded efforts to destroy her, and she continues operations consistent with prolonging her own existence. <em>Restoration</em>: she has, by available evidence, been working — patiently, across centuries — to restore the line of Vol and the Mark of Death to active mortal expression. The restoration would, by her apparent calculation, return the mark to dragonmarked-house equivalent presence on Eberron and would, in the longer view, end her need to be the mark's sole surviving vessel.</p>
<p>The restoration project has not, by available evidence, succeeded. The project has, however, made what the inquiry assesses as significant progress in the past several decades, with cult organizations operating in Khorvaire and Sarlona under various covers, and with experimental work on Vol-line breeding programs that the inquiry has documented but has not been able to disrupt to any meaningful degree.</p>
<h3>The Implication</h3>
<p>Erandis Vol is, in the inquiry's current assessment, the single most consequential individual operating against the broader Khorvairean political and theological order whose existence is not officially acknowledged by the major Five Nations governments. The non-acknowledgment is, in part, deliberate: open recognition would force responses that the affected governments are not, in current circumstances, prepared to undertake. The non-acknowledgment is also, in part, a function of inadequate intelligence: the affected governments do not, in many cases, possess sufficient information to formulate responses even if they were inclined to.</p>
<p class="marginalia">Trust ledger: Access to this dossier is restricted to senior Tabernacle scholars, to Aerenal-affiliated researchers operating under formal exchange agreements, and to scholars holding standing Trust authorization. The dossier's contents are not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});


// ─── DAL QUOR DEEPER ──────────────────────────────────────────

LIBRARY.books.push({
  title: "Dal Quor: The Cycling Dream",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Dal Quor is, of the thirteen planes, the most theologically distinctive and the most cosmologically perplexing. It is the plane of dreams; it is the source of the Inspired and the kalashtar; it is, by available accounts, the only plane whose orbital position relative to Eberron has, in recent cosmological history, fundamentally shifted; and it is the plane whose internal structure undergoes periodic transformations on a scale that no other plane, by available evidence, undergoes. This volume attempts to consolidate what is established about Dal Quor and what remains, despite extensive scholarly effort, contested.</p>
<h3>What Dal Quor Is</h3>
<p>Dal Quor is the realm where mortal dreams become real. Mortal dreaming is, by available theological assessment, an interplanar process; the dreaming mind contacts Dal Quor during sleep, the contact produces the dream's experiential content, and the contact ends as the dreamer wakes. Dal Quor's substance is, in some real sense, made of dreams — a substrate of psychic material whose form is shaped by the dreams that contact it.</p>
<h3>The Cycle</h3>
<p>Dal Quor undergoes, on a vast time scale, periodic transformations in its dominant character. The transformations are associated with shifts in which quori-form (the dominant species of Dal Quor's native intelligences) holds operational dominance within the plane. The current dominant form is the il-lashtavar — predatory, acquisitive, hostile to most mortal interaction. The previous dominant form, displaced approximately forty thousand years ago, was the il-yannah — oriented toward awareness and resistance to predatory consciousness, the form whose pattern the kalashtar carry. The form before that, displaced an unknown number of cycles earlier, was a different configuration whose specific character is not preserved in available records.</p>
<p>The cycle is not, by any available account, regular. The il-yannah's dominance is not approaching by any predictable timetable. The cycle's pace is determined by cosmic-theological factors that include, among others, the intensity of dreaming activity in the mortal worlds the plane contacts, the persistence of the previous form's pattern in mortal carriers (such as the kalashtar), and other factors that the available scholarship has not adequately identified.</p>
<h3>The Orbital Shift</h3>
<p>Dal Quor is unique among the thirteen planes in that its orbital position relative to Eberron has, in recoverable history, fundamentally shifted. At some point — the available accounts place it somewhere between forty and seventy thousand years ago — Dal Quor moved from a position close to Eberron, in which planar travel between the two was reasonably accessible, to its current position, in which standard planar travel is essentially blocked.</p>
<p>The cause of the shift is contested. The mainstream Sarlonan-quori account holds that the shift was a defensive measure against threats Dal Quor's previous proximity created. The Khorvairean astrotheological account, advanced principally by Pellion ir'Rhaan, holds that the shift is associated with the absence of the thirteenth moon — that some pre-historical event simultaneously destroyed Dal Quor's anchoring moon and shifted the plane to its current position. Both accounts have substantial supporting evidence; neither has been confirmed in ways that would foreclose the other.</p>
<h3>The Implication</h3>
<p>Dal Quor's current shifted position has, by the available evidence, made the plane substantially more dangerous to interplanar travel and substantially less capable of conducting cosmological processes that involve direct planar exchange. The Inspired's project on Sarlona — the substantial extension of il-lashtavar influence into Eberron through possessed human bodies — is, in this framing, partly compensatory: the il-lashtavar uses the Inspired to do work that, before the shift, the il-lashtavar could have done through more direct planar means. The Inspired's continuing operations are, in this framing, evidence of Dal Quor's substantially compromised cosmological position rather than evidence of il-lashtavar strength.</p>
<p class="marginalia">Brother Kerrick's volume on Dal Quor draws extensively on consultation with the kalashtar refugee community, with certain Aundairian astrotheological scholars, and with materials Pellion ir'Rhaan made available before his retirement. The consultation's range is, by Brother Kerrick's own description, "substantial but inadequate; Dal Quor is the plane our scholarship is least equipped to study."</p>`
});


// ─── TWELVE INTERNAL ──────────────────────────────────────────

LIBRARY.books.push({
  title: "The Twelve's Quiet War",
  author: "Anonymous (Cannith East provenance)",
  college: "soladas",
  year: "deposited 994 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This document was deposited at the Library through irregular channels in 994 YK. The deposit was anonymous; the internal evidence suggests authorship by a senior Cannith East member, possibly within Zorlan d'Cannith's immediate circle. The document treats the post-war period of inter-house conflict in a manner that no formally-attributed publication could be expected to. The Library holds the document under restricted access on the principle that its content, while substantively accurate by all internal cross-checking, would produce significant inter-house consequences if widely distributed.</p>
<h3>What the Quiet War Is</h3>
<p>The Quiet War is the term, used internally within several houses, for the post-Mourning period of inter-house conflict that has been conducted through means designed to avoid open inter-house warfare. The war is "quiet" in the sense that it does not involve open military or substantial public action; the war is real in the sense that house resources are being committed against rival house resources, that house members are being targeted (in non-lethal but substantively damaging ways), and that the broader Khorvairean political and economic environment is being shaped by the conflict's progress.</p>
<h3>The Cannith Trifurcation</h3>
<p>The Quiet War's most consequential single dynamic is the post-Mourning Cannith trifurcation. Cannith South (Merrix), Cannith West (Jorlanna), and Cannith East (Zorlan) each operate, in significant respects, as separate houses while maintaining the formal pretense of single-house unity within the Twelve. The trifurcation creates competitive pressures within the Twelve that previous house structures did not produce; each Cannith branch competes with the others for influence with the other houses, for commercial position, and for the loyalty of Cannith members whose bloodlines do not clearly align with one branch.</p>
<p>The competition has produced, by available evidence, several sustained operations: deliberate disclosure of one branch's proprietary technical work to rivals positioned to exploit the disclosure; recruitment of senior personnel from rival branches under terms designed to embarrass the branch losing the personnel; commercial undercutting in markets where two branches operate in competition; and, by the most credible accounts, occasional non-fatal targeting of senior personnel in ways designed to remove them from active operation without producing the formal house-conflict that fatal targeting would.</p>
<h3>The Other Houses' Engagement</h3>
<p>The other houses have, by the available evidence, engaged with the Cannith trifurcation principally as opportunists. House Tharashk has, in particular, capitalized on Cannith disorganization by expanding its own services into territories previously dominated by Cannith dragonshard prospecting. House Lyrandar has positioned itself, in airship contracts, to reduce dependence on Cannith engineering services. House Phiarlan and House Thuranni have, in their separate operations, both worked to penetrate Cannith information networks during the disorganization period.</p>
<p>The non-Cannith houses' engagement is not, by any reasonable assessment, malevolent — they are responding to opportunity in ways that any commercially competent organization would. The cumulative effect, however, is that Cannith's previous dominance in several strategically important sectors is being eroded faster than any single Cannith branch can resist while simultaneously feuding with the other two branches.</p>
<h3>The Implication</h3>
<p>The Quiet War's continuation is not in any house's collective interest. The Quiet War's continuation is, however, in many house members' individual interests. The competitive dynamics produce winners as well as losers, and the winners have substantial incentive to continue the conflict that has, in their cases, advantaged them. The war will continue, by my own assessment, until either (a) one of the Cannith branches achieves sufficient dominance to reunify Cannith on its own terms, or (b) the cumulative damage to inter-house cooperation produces a Twelve-wide crisis that forces the major houses to impose a formal resolution.</p>
<p>Neither outcome is, in current trajectory, imminent. The war will continue.</p>
<p class="marginalia">Trust ledger: Access to this document is restricted to senior researchers in dragonmarked-house affairs, to Brelish Crown intelligence personnel, and to parties holding standing Trust authorization. Inquiry has been logged.</p>`
});


// ─── MORE ALCHEMY (Blackdragon balance) ───────────────────────

LIBRARY.books.push({
  title: "On the Theory of Transmutation",
  author: "Master-Alchemist Brell d'Phiarlan",
  college: "blackdragon",
  year: "991 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Transmutation is the alchemical operation by which one substance is transformed into another. The operation is foundational to the alchemical tradition. The operation is also, despite its centrality, the least theoretically articulated operation the tradition practices. The literature contains, principally, recipes — substantive lists of "do this, then this, then this" — without sustained engagement with the question of why the recipes work.</p>
<p>This volume attempts to provide some of the missing theoretical foundation. The volume is, by professional consensus, partial; alchemical transmutation theory is sufficiently undeveloped that any single volume's contribution is necessarily preliminary. I offer the volume as a contribution to a discussion the field needs to have.</p>
<h3>The Component Approach</h3>
<p>The most common theoretical frame for transmutation is the component approach: substances are understood as combinations of more fundamental components, and transmutation is the rearrangement of components from one combination to another. The frame works adequately for many simple transmutations. The frame breaks down for the more sophisticated transmutations in which the produced substance has properties that cannot be derived from any combination of the inputs' standard component analyses.</p>
<h3>The Pattern Approach</h3>
<p>An alternative frame, which I will defend in this volume, is the pattern approach: substances are understood as arrangements of more fundamental patterns, and transmutation is the substitution of one pattern for another within the substance's overall structure. The pattern approach handles, in principle, the difficult cases that defeat the component approach. The pattern approach also generates predictions that, in many cases, can be tested against the alchemical literature's recorded recipes.</p>
<p>The pattern approach has, in my own laboratory work, produced predictions that have been confirmed in approximately seventy percent of test cases — substantially better than the component approach's confirmation rate of approximately forty percent. The seventy percent rate is not, of course, sufficient to consider the pattern approach established. The seventy percent rate is, however, sufficient to consider the pattern approach worth further development.</p>
<h3>The Implication for Practice</h3>
<p>If the pattern approach is correct, several common alchemical practices are, in their current form, suboptimal. The standard preparation of philosopher's reagents, for example, would, in the pattern approach, benefit from a modification of the heat profile that the standard recipes do not specify. The modification is testable. I have, in preliminary work, begun the testing. The results are encouraging but not conclusive.</p>
<p>If the pattern approach proves out, the broader alchemical tradition will have to undertake a substantial recipe revision exercise. The exercise will be slow. The exercise will be contested. The exercise is, in my view, eventually necessary regardless of contestation, because the field's continued growth requires a theoretical foundation more substantial than the recipe-listing tradition has so far produced.</p>
<p class="marginalia">Master-Alchemist Brell d'Phiarlan was excoriated from House Phiarlan in 988 YK over a publication dispute unrelated to this work. He continues his research independently, with funding from the Wayfinder Foundation and the Library, and is one of the alchemical tradition's most active theoretical contributors.</p>`
});

LIBRARY.books.push({
  title: "Alchemical Antitoxins: A Working Compendium",
  author: "Apothecary-Practitioner Yenna ir'Lain",
  college: "blackdragon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This compendium catalogs alchemical antitoxins for the major venoms and poisons the practitioner is likely to encounter in Khorvaire. The catalog is intended for medical use; the catalog is not intended as a reference for the production of the poisons themselves, and identifying information about poison preparation is, by editorial decision, omitted in favor of the antitoxin information that the practitioner needs.</p>
<h3>Snake and Spider Venoms</h3>
<p>The major snake venoms encountered in Khorvairean medical practice are catalogued in approximately twenty entries, with the antitoxin formulations and dosage protocols for each. The major spider venoms are similarly catalogued. The practitioner should note that broad-spectrum antitoxins exist for both venom families and are appropriate first-response treatments when the specific venom cannot be immediately identified. The broad-spectrum formulations are, in most cases, less effective than the specific antitoxins, but they are substantially more effective than no treatment.</p>
<h3>Plant Toxins</h3>
<p>The major plant toxins are catalogued in approximately fifty entries, organized by the plant family and by the toxin's primary effect. The antitoxin protocols are more variable for plant toxins than for animal venoms; many plant toxins do not have specific antitoxins and must be treated through supportive care during the toxin's natural clearance from the patient's system.</p>
<h3>Manufactured Poisons</h3>
<p>The major manufactured poisons — alchemically prepared substances designed for application by parties whose intent is the harm of the recipient — are catalogued in approximately thirty entries. The catalog is, by long Apothecaries' Council convention, less specific in its identifying details than the natural-toxin sections; the convention is intended to limit the catalog's usefulness as a reference for would-be poisoners. The protective convention has, by my own assessment, real value, though it does limit the catalog's medical usefulness in cases where rapid identification of the poison would improve treatment outcomes.</p>
<h3>The Mournland Toxins</h3>
<p>A small but distinct category of toxins is associated specifically with substances encountered in or produced by the Mournland. These toxins do not, in many cases, respond to standard antitoxin protocols; the Mournland's general anomalous magical character extends to the alchemical level, and substances that should, by standard analysis, be neutralizable through standard methods often resist such neutralization in unpredictable ways. The compendium provides what protocols are known. The protocols are, in this category, less reliable than in the other categories. The practitioner whose patient has been exposed to a Mournland-source toxin should expect higher mortality rates than the standard antitoxin success rates would suggest.</p>
<p class="marginalia">Apothecary-Practitioner Yenna ir'Lain serves at the Korranberg Medical College and consults with the Wayfinder Foundation on field medical protocols. The compendium is, by her own description, "the working manual I wish I had been given when I was starting; the information is not in any single other place, and assembling it has consumed years of my career."</p>`
});


// ─── BLOOD OF VOL ──────────────────────────────────────────────

LIBRARY.books.push({
  title: "The Blood of Vol: A Theological Survey",
  author: "Brother Vellen of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Blood of Vol is the religious tradition that emerged from the destruction of the line of Vol and that has, over the millennia since, developed into one of the major minority religions of Khorvaire. The tradition's relationship to its founding line is contested; some adherents maintain direct continuity claims, others claim only inspirational descent from Vol's example, and still others identify with the tradition primarily through its theological claims rather than its lineage claims. This volume surveys the tradition's contemporary configuration without endorsing any of these competing self-understandings.</p>
<h3>The Core Theology</h3>
<p>The Blood of Vol teaches that divinity exists in the blood of mortal beings. The teaching is, in its strongest formulations, literal: divinity is, in the tradition's metaphysics, present in mortal blood at a level that mortal practice can develop into more explicit forms of divine power. The development requires sustained ritual practice, deep biological and arcane study, and the integration of necromantic methods that the tradition's adherents understand as the proper application of the divinity-in-blood premise.</p>
<p>The tradition's adherents do not, in most cases, worship gods in the conventional Sovereign Host or Silver Flame sense. They cultivate. The cultivation is the religious practice. The cultivation produces, in the most accomplished adherents, capabilities that the tradition reads as the realization of latent divine potential and that hostile external traditions read as something else.</p>
<h3>The Karrnathi Connection</h3>
<p>The Blood of Vol's Karrnathi establishment is its most prominent contemporary configuration. The Karrnathi tradition is, in its theological commitments, broadly aligned with the wider Blood of Vol tradition while maintaining specific national-cultural inflections that the wider tradition does not require. The Karrnathi adherents' acceptance during the Last War — when their healing magic and necromantic capabilities were essential to Karrnathi survival — gave the tradition an institutional position in Karrnath that no other Five Nations location grants the Blood of Vol.</p>
<p>The Karrnathi tradition is not, despite this institutional position, fully accepted by the Karrnathi crown. The tradition's relationship with the post-war Karrnathi government is formally cordial and operationally complicated. The crown values the tradition's continuing services. The crown also recognizes the tradition's potential as a power center independent of crown control. The accommodation is, by current observation, stable but not static.</p>
<h3>The External Critique</h3>
<p>The Blood of Vol attracts substantial external theological criticism, principally from the Sovereign Host and Silver Flame traditions. The criticisms vary in sophistication. The most thoughtful criticisms focus on the tradition's necromantic methods and on the question of whether the tradition's claims about divinity-in-blood can be defended against alternative explanations that read the tradition's experiential outcomes as products of more conventional arcane practice rather than as evidence of the metaphysical claims the tradition advances.</p>
<p>The least thoughtful criticisms simply identify the tradition with hostility to mortal life — an identification that, by the tradition's own self-understanding and by careful external observation of most adherents' actual practice, is empirically false. The Blood of Vol is not, in any significant fraction of its adherent population, hostile to mortal life. The tradition's strongest adherents are, in many cases, particularly committed to mortal welfare, on the principle that divinity-in-blood implies obligations to the life that bears the divinity rather than indifference toward it.</p>
<p class="marginalia">Brother Vellen has, over a long career, conducted formal theological correspondence with senior Blood of Vol scholars in Karrnath. The correspondence has produced, by his own assessment, "more clarity than agreement, which is the most one can expect from sustained engagement across substantially different theological traditions."</p>`
});


// ─── PHIARLAN-THURANNI EXPANDED ───────────────────────────────

LIBRARY.books.push({
  title: "Performing the Mark: Phiarlan's Long Dance Between Art and Intelligence",
  author: "Senior Performer Hass d'Phiarlan",
  college: "lyrris",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Phiarlan is, by its public face, the dragonmarked house of artistic performance — singers, dancers, illusionists, theatrical performers whose work has, for centuries, dominated the upper end of Khorvairean entertainment. House Phiarlan is, by its less publicized work, also one of the continent's principal intelligence networks. Both characterizations are accurate. The house has, throughout its history, maintained both modes of operation in deliberate combination.</p>
<h3>The Mark of Shadow</h3>
<p>The Mark of Shadow's expressed capabilities span performance arts and intelligence arts in a way that, by available theological-arcane analysis, reflects an underlying connection between the two domains. Performance and intelligence both depend on the careful management of impressions; both involve the performer's deliberate construction of a presented version of reality that the audience or the target accepts as authentic; both require, at the highest levels, the practitioner's cultivated ability to be many different things to many different observers without the observers detecting the multiplicity.</p>
<p>The mark's bearers are, by long house tradition, trained in both modes from the earliest stages of their education. A senior Phiarlan performer is, almost without exception, also a senior Phiarlan intelligence asset. The two roles are, in the house's training and operations, integrated rather than separated.</p>
<h3>The Five Demesnes</h3>
<p>The house was historically organized into five demesnes — operational divisions identified with specific entertainment forms. The Demesne of Music focused on song and instrumental performance and on the intelligence-gathering opportunities that musical performance provided. The Demesne of Memory focused on storytelling and on the maintenance of historical and current information networks. The Demesne of Motion focused on dance and on physical performance and on the espionage capabilities that highly trained physical performance enables. The Demesne of Shadow focused on illusion and on the more direct intelligence operations that illusion-based work supports. The Demesne of Mask focused on dramatic performance and on disguise-based intelligence operations.</p>
<p>The Demesne structure was significantly disrupted by the 972 YK schism that produced House Thuranni. The Demesne of Shadow, in particular, lost most of its senior personnel to the new house. The contemporary Phiarlan structure preserves the formal Demesne names but operates with substantial cross-demesne integration that the original structure did not envision.</p>
<h3>The Ethical Question</h3>
<p>The combined performance-intelligence model has, throughout the house's history, raised ethical questions. The questions are not fully resolved within the house. Some senior members hold that the combination is honest — that the audience knows it is being entertained by a house whose other work includes intelligence operations and that the audience's continued patronage represents acceptance of the combined role. Other senior members hold that the combination is dishonest — that audiences typically experience Phiarlan performances as straightforwardly artistic events without active awareness of the intelligence dimension, and that the absence of explicit acknowledgment in any given performance represents a form of consent-undermining concealment.</p>
<p>The house, by long internal compromise, has not formally resolved the disagreement. Each senior member operates according to their own conscience within parameters the house's senior council has established. The arrangement is unstable but has, for centuries, persisted.</p>
<p class="marginalia">Senior Performer Hass d'Phiarlan publishes with the formal permission of House Phiarlan's senior council. The volume's reception has been, by his own report, "internally controversial in ways the senior council has, characteristically, declined to externalize." The volume's continued public availability is, in his assessment, "a small ongoing victory of candor over the house's preferred opacity."</p>`
});

LIBRARY.books.push({
  title: "House Thuranni: A Dossier on the Younger House",
  author: "Inquisitive Tessen d'Medani",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Thuranni emerged in 972 YK from the schism that fractured House Phiarlan. The new house took with it a substantial fraction of Phiarlan's senior intelligence personnel, several specific bloodlines whose Mark of Shadow expression had concentrated in Thuranni-aligned families, and the operational infrastructure of what had been Phiarlan's Demesne of Shadow. The new house has, in the twenty-eight years since, established itself as Khorvaire's most prominent specialized assassination service, operating openly under contract while maintaining the formal Twelve membership the schism preserved.</p>
<h3>The Schism's Causes</h3>
<p>The 972 YK schism's causes are not fully documented in available materials. The Phiarlan official account emphasizes professional disagreement: that the d'Thuranni line wished to focus more openly on intelligence and contract violence than the broader Phiarlan tradition was willing to accept. The Thuranni official account emphasizes intra-Phiarlan abuses: that senior Phiarlan figures had, in the years before the schism, engaged in patterns of behavior toward d'Thuranni-aligned bloodlines that the d'Thuranni leadership eventually concluded could not be remediated within Phiarlan's existing structures.</p>
<p>The two accounts are not, by my assessment, mutually exclusive. The schism likely had both professional and personal dimensions. The Twelve's formal acknowledgment of the schism — as a permitted house separation rather than as an internal Phiarlan disciplinary matter — required acceptance of professional-disagreement framing rather than the more politically explosive abuse-pattern framing. The acceptance was, by available evidence, a deliberate Twelve compromise to prevent broader inter-house conflict.</p>
<h3>House Thuranni's Operational Profile</h3>
<p>House Thuranni's contemporary operations are concentrated in three areas. <em>Contract assassination</em>: the house provides assassination services to clients meeting the house's own internal vetting standards, with contracts conducted under explicit terms and with specified payment structures. The contract work is, by available evidence, the house's principal revenue source. <em>Specialized intelligence</em>: the house provides intelligence services in cases requiring the more advanced capabilities the Mark of Shadow's most accomplished bearers can produce. <em>Performance arts</em>: the house has retained, despite the schism's removal of the broader Phiarlan performance infrastructure, a smaller but commercially active performance practice oriented toward higher-end dramatic and musical productions.</p>
<h3>The Phiarlan-Thuranni Relationship Today</h3>
<p>The two houses do not, by formal Twelve protocol, sit at the same Council table. Their senior personnel do not attend each other's significant events. Their operational territories overlap in ways that have, repeatedly, produced conflicts that have been resolved through what the houses themselves describe as "professional accommodations" and that external observers describe more accurately as cycles of low-grade reciprocal violence and counter-violence.</p>
<p>The Twelve has, in successive interventions, prevented these conflicts from escalating to open inter-house warfare. The interventions are not, by available evidence, viewed by either house as adequate; both houses maintain that the other has, in the post-schism period, conducted operations that exceed what professional accommodation can resolve. The Twelve, in turn, maintains that further intervention exceeds the Council's mandate. The accommodation is, again, stable but not static.</p>
<p class="marginalia">Inquisitive Tessen d'Medani's investigation into House Thuranni operations is conducted under standing Medani contracts with several Five Nations governments. The dossier presented here represents the externally-sharable portion of the investigation's findings. Additional findings are held under confidential terms that prevent their inclusion in publicly accessible materials.</p>`
});

LIBRARY.books.push({
  title: "On the Argonnessen Question",
  author: "Magus-Theologian Yara d'Phiarlan",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Argonnessen Question, in the formulation that has dominated Khorvairean theological-political discussion for the past two centuries, is the question of how mortal civilizations should orient themselves with respect to the dragon civilization of Argonnessen. The question has not been satisfactorily answered. The question may not be answerable in any final form. This volume surveys the major positions and offers a partial defense of the position I have come to consider least inadequate.</p>
<h3>The Submissive Position</h3>
<p>One position holds that mortal civilizations should accept dragon dominance as a structural fact of Eberron's cosmological order and orient themselves toward cooperation with whatever dragon-faction interventions occur. The position has, in its favor, the realism that recognizes mortal civilizations' substantial inferiority in raw cosmological power compared to the dragon civilization. The position has, against it, the uncomfortable implication that mortal civilizations should accept the dragons' Prophecy-aligned manipulations as legitimate even when the manipulations cause substantial mortal suffering.</p>
<h3>The Hostile Position</h3>
<p>A second position holds that mortal civilizations should treat dragon involvement in mortal affairs as inherently hostile and should orient themselves toward defensive opposition to dragon-faction interventions. The position has, in its favor, the recognition that the dragons' Prophecy-aligned interests are not, in any reliable sense, aligned with mortal welfare. The position has, against it, the difficulty that effective opposition to dragon-faction interventions requires resources and coordination that mortal civilizations do not, in current circumstances, possess.</p>
<h3>The Awareness Position</h3>
<p>The position I will defend, which I call the awareness position, holds that mortal civilizations should orient themselves toward sustained awareness of dragon-faction operations without attempting either submission or hostility as a general policy. The awareness position is, in its operational form, a position of careful attention: mortal scholars and intelligence services should, to the limits of their capacity, track the dragon factions' operations on Khorvaire and elsewhere; the tracking should be shared, where possible, across mortal political boundaries; the tracking should inform mortal decision-making in situations where dragon-faction operations are relevant; the tracking should not be used as a basis for either capitulation or open hostility, neither of which is sustainable.</p>
<p>The awareness position is not, by itself, a strategy. It is, instead, a posture from which strategies can be developed in response to particular circumstances. The position assumes that the dragon factions' operations vary in their alignment with mortal welfare — some operations advance pressures that benefit mortals, others advance pressures that harm them — and that effective mortal response requires assessment of each operation's specific implications rather than blanket policies based on general dragon-relationship principles.</p>
<h3>The Practical Implication</h3>
<p>The awareness position implies that mortal civilizations should maintain substantial intelligence resources oriented toward dragon-faction operations. The current Khorvairean intelligence environment provides, in fragmentary form, much of the required capacity: the Aundairian Royal Eyes, the Brelish Crown intelligence, House Phiarlan and House Medani's house intelligence, the Trust's Zilargon operations, and various smaller efforts conducted by the other Five Nations. The fragmentation is, by my assessment, the principal weakness of the current arrangement; effective dragon-faction tracking requires coordination across mortal political boundaries that the existing arrangements do not support.</p>
<p>I do not, in this volume, propose a specific coordination mechanism. I do propose that the broader Khorvairean theological-political community should, in the years ahead, undertake the work of developing such a mechanism. The work is, by my assessment, urgently required and unlikely to be undertaken without sustained scholarly and institutional advocacy.</p>
<p class="marginalia">Magus-Theologian Yara d'Phiarlan continues her research and her broader public engagement on Argonnessen-related matters. She has, by her own report, "received polite letters from parties whose identities I am increasingly confident I should not name, requesting clarification of various points in this volume that the requesters apparently find insufficiently developed." She has, in each instance, responded with the volume's published positions and has, in each instance, declined the implicit invitation to develop her positions in directions her correspondents would have preferred.</p>`
});
LIBRARY.books.push({
  title: "Salvaging Cyre: A Manual of Mournland Recovery Operations",
  author: "Salvage-Master Berra ir'Tain",
  college: "drystone",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Mournland salvage is the systematic recovery of materials from the territory formerly known as Cyre. The work is licensed by the Treaty of Thronehold's signatories, regulated by the Wayfinder Foundation under standing authority delegated by the Treaty parties, and conducted by salvage operators whose certifications are issued by the Foundation following completion of a documented training program. This manual is the standard reference for the training program and is the operational guide for licensed salvage operations across the boundary.</p>
<h3>What Salvage Is For</h3>
<p>Salvage operations recover three principal categories of material. <em>Pre-Mourning artifacts of cultural significance</em>: personal effects of identifiable Cyran citizens, religious objects, manuscripts and records, items requested by surviving family members or by the post-Cyre diaspora institutions. <em>Materials of military or technical significance</em>: warforged components requiring proper handling, military equipment whose recovery the Treaty signatories have agreed warrants direct intervention, Cannith research materials whose provenance can be established. <em>Materials of commercial value</em>: precious metals, gems, fine craft work, and other portable wealth whose recovery does not violate the cultural-significance protections.</p>
<h3>What Salvage Is Not For</h3>
<p>Salvage operations do not recover human remains. Mournland-preserved corpses are, by standing Foundation policy, left in place or, where boundary movement makes their continued presence on Mournland-external territory possible, returned to Mournland-internal positions. The policy is contested. The Foundation's position is that recovery of preserved corpses produces psychological harm to surviving family members exceeding the consolation of physical recovery, and that the bodies' Mournland-affected condition makes their integration into ordinary funerary practice impossible. The contestation continues.</p>
<h3>The Operational Phases</h3>
<p>A standard salvage operation comprises five phases. <em>Pre-mission planning</em>: the operator's permit defines the operational area, the duration limit (typically not exceeding fourteen days inside the boundary), the supply load, the communication protocols, and the emergency-extraction conditions. <em>Boundary crossing</em>: the operator enters the Mournland through one of the seven Foundation-monitored crossings, with documentation and supplies subject to inspection. <em>Operational period</em>: the operator conducts recovery activities within the permitted area. <em>Boundary return</em>: the operator returns through a designated crossing, with all recovered materials subject to inspection and customs assessment. <em>Post-mission processing</em>: recovered materials are catalogued, returned to identified owners or surviving institutions where possible, and otherwise processed under Treaty terms.</p>
<h3>The Risks</h3>
<p>Mournland salvage produces operator casualties at a rate substantially exceeding any other licensed adventurer-profession on Khorvaire. The Foundation's casualty records indicate, over the period 996 through 999 YK, an annual operator mortality rate of approximately twelve percent. The mortality rate has not declined over time despite improving methods, in part because operators who survive their early operations tend to attempt increasingly ambitious recoveries whose risk profile offsets their improving experience. The Foundation publishes the rate openly. Operators who undertake the work do so with full awareness of the rate. The work continues.</p>
<p class="marginalia">Salvage-Master Berra ir'Tain has led Foundation training programs since 994 YK and has, in her career, conducted approximately one hundred and forty Mournland operations. She has lost, in her time as an operator and trainer, eighty-three colleagues and eleven trainees. She does not, in her published or private writings, dwell on the losses; the work, by her training-program standard, requires that operators carry their losses without letting them become operationally compromising.</p>`
});

LIBRARY.books.push({
  title: "The Lord of Blades: A Speculative Profile",
  author: "Anonymous (Brelish Royal Eyes provenance)",
  college: "tabernacle",
  year: "deposited 996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This profile compiles available information on the warforged figure called the Lord of Blades, who has, since approximately 994 YK, established himself as the principal organizing figure of certain Mournland-resident warforged communities and as the most prominent advocate of warforged separatism on the continent. The profile is speculative throughout; reliable direct intelligence on the Lord of Blades is sparse, and most of what is reported here is reconstructed from secondary sources and from the limited direct contacts the surviving operatives have made.</p>
<h3>What He Is</h3>
<p>The Lord of Blades is a warforged. He is, by the available physical descriptions, larger than standard warforged production specifications and is heavily modified from his original configuration. The modifications include integrated weapon mountings, additional armor plating, and what observers have described as "ornamental" elements suggesting deliberate identity-construction beyond the functional modifications. He speaks, by the available reports, in formal Common with educated diction. He has not, in any reliable account, identified himself as having served any particular Five Nations military formation; his pre-emergence history is not documented.</p>
<h3>What He Believes</h3>
<p>The Lord of Blades' public theology, insofar as available reports allow it to be characterized, holds that warforged are a new race, that warforged dignity requires separation from human-aligned political structures, that the Treaty of Thronehold's grant of personhood to warforged is inadequate, and that the long-term destiny of the warforged race is the establishment of an independent warforged polity in territories where warforged numerical superiority and physical capabilities will be sufficient to maintain that polity against external pressure. He has, by available reports, identified the Mournland as the appropriate territory for such a polity, on the grounds that the territory's existing population is not contesting it and that the Mournland's hostile environment favors warforged occupation over organic-creature occupation.</p>
<h3>What He Does</h3>
<p>The Lord of Blades' operational activities, by the available reports, include: organizing warforged communities in the deeper Mournland under his political leadership; recruiting warforged from external territories who have, for various reasons, become alienated from their post-war positions in the Five Nations societies; conducting limited military operations against parties who enter the Mournland in ways the Lord of Blades' organization considers hostile; and, by some reports, sponsoring research into warforged production capabilities that would allow his communities to produce additional warforged without dependence on House Cannith infrastructure. The last activity, if confirmed, would represent a fundamental challenge to House Cannith's monopoly on warforged production.</p>
<h3>The Assessment</h3>
<p>The Lord of Blades is, by the Royal Eyes' standing assessment, a strategic threat of moderate but increasing severity. He is not, in current circumstances, a threat to the Five Nations' core territories. He is, in the longer view, a potential focal point for warforged disaffection across the continent, and his continued operations have the potential to produce a warforged movement whose scale and political coherence the post-war order is not designed to accommodate. The Royal Eyes' standing recommendation is that he not be elevated to the level of public attention that would consolidate his position; the recommendation is that he be monitored, that his recruitment networks be discreetly disrupted where opportunities arise, and that his existence remain, in formal Brelish Crown discourse, deliberately under-emphasized.</p>
<p class="marginalia">This profile was deposited at the Library through Brelish diplomatic channels in 996 YK. The deposit terms specified anonymous public access. The Library's review board considered the profile's content carefully and concluded that public availability served the broader scholarly community's understanding without materially advancing the strategic threat the profile assessed.</p>`
});


// ─── LHAZAAR / MARITIME ───────────────────────────────────────

LIBRARY.books.push({
  title: "The Lhazaar Principalities: A Political Geography",
  author: "Trade-Captain Yenna of Regalport",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lhazaar Principalities are not, in any honest sense, a unified polity. The Principalities are a chain of settlements along the eastern coast and on the islands of the Lhazaar Sea, governed by separate princes whose authority within their own territories is real and whose authority beyond their own territories is, in most cases, negligible. The Principalities present, to the rest of Khorvaire, a fiction of unity that the Treaty of Thronehold accepted because the alternative — Five Nations engagement with each Principality separately — would have been administratively unsustainable.</p>
<h3>The Major Principalities</h3>
<p>The catalog distinguishes approximately fifteen principalities of substantial standing, with another twenty smaller establishments whose princely status is contested or marginal. The major principalities include: <em>Regalport</em>, the de facto first city of the Principalities, governed by High Prince Ryger ir'Wynarn (a distant cousin of the surviving Five Nations royal lines); <em>Port Verge</em>, governed by Prince Kolberkon, whose commercial relationships with the Aundairian merchants make Port Verge one of the wealthier Principalities; <em>Tempest Isle</em>, governed by Prince Mika, whose mage-piracy traditions are unique even within the broader Principality culture; and <em>Krona Peak</em>, the Karrnathi-aligned principality whose continued operation depends on the Karrnathi Crown's direct support.</p>
<h3>The Economic Base</h3>
<p>Lhazaar economic activity is concentrated in three areas. <em>Trade</em>: the Principalities serve as commercial intermediaries between the Five Nations, between Khorvaire and Sarlona, and between the various smaller maritime polities of the Lhazaar Sea. The trade is conducted under principalities' own customs structures and is, in many cases, not consistent with Five Nations regulatory expectations. <em>Maritime services</em>: the Principalities provide vessel-construction, crew recruitment, and maritime contracting services across the broader continental economy. <em>Piracy</em>: certain principalities maintain, with varying degrees of formal acknowledgment, piracy operations against shipping that originates from or terminates in territories the relevant principalities consider commercially competitive. The piracy is, by Lhazaar self-understanding, a legitimate dimension of the maritime economy. The Five Nations do not always agree.</p>
<h3>The Political Currents</h3>
<p>The Principalities' political currents are shaped, in current circumstances, by three principal pressures. <em>Five Nations engagement</em>: the post-Treaty period has produced substantially increased Five Nations diplomatic and commercial engagement with the Principalities, which has benefited some principalities and disadvantaged others. <em>Sarlonan trade</em>: the Riedran trade relationship is, in the Principalities, more developed than in any of the Five Nations, and the Principalities' role as the principal Khorvairean intermediary with Sarlona produces strategic importance that the Principalities themselves recognize and capitalize on. <em>Internal dynamics</em>: shifts in the relative strength of the various princes' positions are continuous; alliances form and dissolve; commercial successes and failures reshape the relative weights of the principalities in inter-Principality politics.</p>
<h3>The High Prince Question</h3>
<p>The position of High Prince — held by Ryger ir'Wynarn since 990 YK — is, in the Principalities' formal documents, largely ceremonial. The position is, in Ryger's actual operation, more substantial than the formal position implies. Ryger has, over the past decade, conducted what is, in functional terms, a state-building project: gradual extension of Regalport's authority over inter-Principality affairs, careful cultivation of the smaller principalities through commercial and security guarantees, and quiet positioning of Regalport as the Principalities' principal voice in Five Nations diplomacy. The project's eventual success is not, in current circumstances, certain. The project's continuation is, in current circumstances, observable.</p>
<p class="marginalia">Trade-Captain Yenna of Regalport has operated commercially across the Principalities for thirty-seven years. The volume is published with the formal authorization of the Regalport Trade Council, which the volume's contents reflect.</p>`
});

LIBRARY.books.push({
  title: "Shargon's Teeth: A Hazard Atlas",
  author: "Master-Cartographer Fenric of Lyrandar",
  college: "morridan",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Shargon's Teeth is the broad maritime hazard zone in the southern Thunder Sea, between Khorvaire's southern coast and the northern shores of Xen'drik. The zone takes its name from the partially submerged ridge of jagged stone formations that, by ancient mariners' tradition, are the teeth of a vast sea-dragon Shargon whose body underlies the Thunder Sea's deeper basin. The mythology is, in cartographic terms, irrelevant; the hazards are real regardless of their mythological framing. This atlas catalogs the hazards as the Lyrandar maritime tradition has documented them.</p>
<h3>The Stone Hazards</h3>
<p>The principal stone hazards comprise approximately three hundred named formations and an unknown larger number of unnamed formations whose positions vary with sea-floor sediment movement and with seasonal current shifts. The atlas charts the named formations with positional confidence intervals reflecting the accuracy of the surveying instruments employed. The atlas does not chart the unnamed formations, which are, by mariner practice, navigated through running depth-soundings and through pilot familiarity with local conditions rather than through pre-mission charts.</p>
<h3>The Current Hazards</h3>
<p>The Thunder Sea's current structure in the Shargon's Teeth region is complex and seasonally variable. The atlas catalogs the major current systems as the Lyrandar tradition has charted them across the past sixty years of systematic observation. The catalog identifies seven principal current systems, with their seasonal variations, their interaction zones (where one system flows into or against another), and the navigation hazards specific to each system's operational characteristics. The most consequential single hazard is the Pillar Current, a downward-spiraling current system in the central deep whose entrance is gradual and whose exit, for a vessel that has entered without recognizing the entry, is in many cases not possible by ordinary sailing means.</p>
<h3>The Storm Hazards</h3>
<p>The Thunder Sea's name reflects its characteristic storm patterns, which are particularly intense in the Shargon's Teeth region. The atlas catalogs the storm patterns by their seasonal frequency, their intensity profiles, and their typical durations. The cataloged storms include several classes whose intensity exceeds anything observed in northern Khorvairean waters; the largest documented Thunder Sea storms have produced wave heights and atmospheric electrical activity that vessels not specifically prepared for the conditions cannot reliably survive. The Lyrandar tradition's vessel-design choices reflect this reality. Non-Lyrandar vessels that attempt the crossing without adequate preparation are, in the catalog's records, lost at rates substantially exceeding those of Lyrandar-aligned shipping.</p>
<h3>The Living Hazards</h3>
<p>The Shargon's Teeth region contains, in numbers the atlas's cataloging methodologies have not been able to reliably census, large maritime creatures whose interactions with shipping range from incidental to actively predatory. The atlas catalogs the creatures as the Lyrandar tradition has documented them: the deep-water leviathans whose surfacing breaks vessels by displacement; the schooling kraken-kin whose coordinated attacks on lone vessels are documented in approximately one hundred recorded incidents; the smaller but still substantial sea-creatures whose threats to shipping are individually less severe but cumulatively significant. The catalog provides, for each creature class, the recommended maritime responses and the survival statistics for vessels that have, in documented cases, executed the recommended responses.</p>
<p class="marginalia">Master-Cartographer Fenric of Lyrandar has led the Lyrandar maritime cartography division for nineteen years. The atlas is the division's principal continental-distribution publication and is, by Lyrandar policy, made available at moderate cost to non-Lyrandar mariners on the principle that broad distribution of maritime safety information serves the Lyrandar tradition's commercial interests through the maintenance of overall Thunder Sea trade volumes.</p>`
});


// ─── Q'BARRA / TALENTA ────────────────────────────────────────

LIBRARY.books.push({
  title: "Q'barra: A Frontier in Three Voices",
  author: "Visiting Scholar Tessa ir'Vahn",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Q'barra is the eastern frontier — the territory across the Endworld Mountains from southern Khorvaire, settled in the past century by human refugees and Five Nations migrants, contested by indigenous lizardfolk and dragonborn populations whose claims predate the human settlement, and inhabited additionally by older non-human populations whose presence the human settlers have not always acknowledged. This volume reconstructs Q'barra's contemporary situation through three principal voices: the Newcomers (the human settlers), the Poison Dusk (one of the major lizardfolk populations), and the Trothlorsvek (the dragonborn community whose ancestral claims to the territory antedate even the lizardfolk presence).</p>
<h3>The Newcomer Voice</h3>
<p>The human settlement of Q'barra dates to the late ninth century YK. The settlers were, in most cases, refugees from the Last War and from the post-war disorder; they were people whose homes had been destroyed, whose families had been broken, and whose prospects in the Five Nations were inadequate. They came to Q'barra because Q'barra offered land that no Five Nations crown was claiming. They built their settlements on the assumption that the territory was open. The assumption was, by available evidence, not adequately tested against the territory's actual occupants.</p>
<p>The contemporary Newcomer perspective, by the volume's interviews with senior settlement figures, is one of weary continuation. The Newcomers do not, in most cases, dispute that the territory was occupied before they arrived. The Newcomers have built their lives on the territory and consider, by ordinary human standards, that they have nowhere else to go. The position is not, by my own analysis, fully defensible; the position is, by the Newcomers' own honest accounting, what they have.</p>
<h3>The Poison Dusk Voice</h3>
<p>The Poison Dusk is one of the major lizardfolk populations of the Q'barran interior. The population's relationship with the human settlements has been, for most of the past century, hostile. The Poison Dusk's contemporary leadership, by the volume's interviews with three Poison Dusk senior figures (conducted through dragonborn intermediaries whose translation work the volume gratefully acknowledges), positions the human presence as a sustained occupation that the Poison Dusk does not accept and will not, in any foreseeable future, accept.</p>
<p>The Poison Dusk's strategic posture is one of containment rather than expulsion. The leadership recognizes that the human settlements are too established to be removed by direct action. The leadership has, by available evidence, established practical limits beyond which the human settlements are not permitted to expand without sustained Poison Dusk resistance. The arrangement is, in functional terms, a slow border conflict that has, for several decades, prevented the human settlements from achieving the territorial expansion their populations would otherwise be pursuing.</p>
<h3>The Trothlorsvek Voice</h3>
<p>The Trothlorsvek are the dragonborn population whose ancestral claim to Q'barra antedates both the lizardfolk presence and the human settlement. Their tradition holds that they are descendants of refugees from a much older catastrophe — the destruction, several thousand years ago, of a dragonborn civilization in territories that have not been definitively identified. They have lived in Q'barra, by their own tradition, for substantially longer than any other current population. They have, however, been less numerous than the lizardfolk and have, in the contemporary period, been less politically visible than the humans.</p>
<p>The Trothlorsvek leadership, by the volume's interviews, has positioned itself as a potential mediating presence between the Newcomers and the Poison Dusk. The leadership argues that the Trothlorsvek tradition's longer presence on the territory provides a basis for negotiated arrangements that the more recent populations cannot establish on their own. The argument is, by my own assessment, plausible. The argument is not, by current operational reality, being acted on at any scale that would substantially shape the territory's near-term political development.</p>
<p class="marginalia">Visiting Scholar Tessa ir'Vahn conducted the volume's research over a twenty-month period in 995-997 YK, with substantial logistical support from the Wayfinder Foundation's Q'barra outpost and from the Trothlorsvek leadership. The volume is, by her own description, "as honest as the access I was given allowed me to be; the access was real but partial, and the volume's three-voices structure reflects what I could verify rather than the territory's full complexity."</p>`
});

LIBRARY.books.push({
  title: "The Talenta Plains: Halflings, Dinosaurs, and the Dragonmark of Healing",
  author: "Visiting Scholar Halric ir'Tain",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Talenta Plains are the open grasslands south of the Mournland and east of Karrnath, traditionally inhabited by the halfling tribes whose nomadic lifeways predate the founding of Galifar and whose contemporary configuration has been substantially shaped by the post-Mourning realignment of the regional political environment. This volume surveys Talenta's contemporary geography, social organization, and the principal questions the Plains' relationship with the broader continent currently raises.</p>
<h3>The Tribal Structure</h3>
<p>The Talenta halfling population is organized in tribes whose structure combines kinship-based core groups with broader confederational arrangements. The major tribes — the Boromar, Talanta, Tashana, and several others — maintain distinct identities within an overall confederational framework that handles inter-tribal disputes, common-defense matters, and the relationships with non-halfling polities. The confederational structure is not, in any formal sense, a state. The confederational structure produces, in functional terms, the coordinated action that state-equivalent operations require.</p>
<h3>The Dinosaur Question</h3>
<p>The Talenta halflings maintain working relationships with the dinosaur populations of the Plains. The relationships are not pet-keeping; they are partnerships of long cultural development in which specific dinosaur species are bonded with halfling families across generational time horizons, used for transportation, hunting, and warfare, and treated as members of the broader tribal community whose welfare is the family's continuing responsibility. The non-halfling reader should understand that the relationships are not subordinate-animal relationships; they are working partnerships in which the dinosaurs' agency and capabilities are recognized and respected within frameworks the halfling tradition has developed over centuries.</p>
<h3>The Mark of Healing</h3>
<p>House Jorasco — the dragonmarked house bearing the Mark of Healing — has its origins in the Talenta halfling population. The house's contemporary operations are largely concentrated in the Five Nations, but the house's cultural heritage and its continuing recruitment from Talenta lineages preserve the house-Plains relationship as an active institutional connection. The Plains' relationship with House Jorasco is, by the available evidence, one of complicated mutual benefit and sustained tension; the house provides resources and external influence that benefit the broader Talenta population, while the house's external orientation has produced cultural drift that more traditional Plains figures have, in some cases, characterized as a betrayal of the Plains' indigenous identity.</p>
<h3>The Mourning's Effects</h3>
<p>The Mourning has produced, on the Talenta Plains' western boundary, sustained adverse effects whose cumulative impact has been substantial. The boundary regions experience the Mournland's environmental anomalies in attenuated form. The displaced populations — Cyran refugees, military formations whose returns to the Five Nations were complicated by their post-Mourning condition, scattered other populations — have, in significant numbers, settled or transited through Talenta in ways that the Plains' traditional structures have not been well-equipped to integrate. The integration challenges continue. The Plains' tribal leadership has, by available reports, been more accommodating than strict tradition would have predicted. The accommodation is not, in current circumstances, fully stable.</p>
<p class="marginalia">Visiting Scholar Halric ir'Tain conducted the volume's research with the formal cooperation of the Boromar and Talanta tribal councils, with translation services provided by the Korranberg Halfling Studies division, and with the substantial assistance of his Talenta-born House Jorasco supervising sponsor whose contributions are acknowledged in the volume's preface but whose name is not preserved in the public record.</p>`
});


// ─── DEMON WASTES ─────────────────────────────────────────────

LIBRARY.books.push({
  title: "The Demon Wastes: A Geography of Bound Things",
  author: "Templar-Scholar Kara of Flamekeep",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Demon Wastes are the territory at Khorvaire's northwestern extreme, beyond the Shadowcrags and the Eldeen Reaches, where the bindings on certain Overlords are, by the cosmic-theological topography of Eberron, principally manifested. The territory is not, in any ordinary sense, habitable. The territory is, despite its inhospitality, inhabited — by the Carrion Tribes, the orcs of the Ghaash'kala clans, scattered demonic populations whose presence is permitted by the bindings rather than excluded by them, and the Lords of Dust operatives whose work in the Wastes constitutes the most concentrated rakshasa activity outside Argonnessen itself.</p>
<h3>The Cosmic-Theological Position</h3>
<p>The Demon Wastes' principal feature, in cosmic-theological terms, is its position as the surface manifestation of several Overlord bindings. The territory's constant volcanic activity, its perpetual storms, its anomalous magical effects, and the persistence of demonic populations within its boundaries reflect the cumulative pressure the bindings exert at the surface of Eberron. The pressure is not, in current circumstances, weakening; the bindings are holding. The pressure is also not, in current circumstances, dispersing; the conditions in the Wastes are, by all observable measures, stable in their hostility.</p>
<h3>The Ghaash'kala</h3>
<p>The Ghaash'kala are the orc clans whose ancestors, according to their own tradition, accepted a sacred charge from the original couatl-bound binding rituals: to maintain a continuous defensive perimeter at the Wastes' eastern boundary, preventing the demonic populations within the Wastes from expanding into territories that would, in the absence of the perimeter, be vulnerable. The Ghaash'kala's tradition holds that this charge has been maintained continuously since the original couatl sacrifice — a tradition that, if accurate, would make the Ghaash'kala the longest-standing continuously-operating defensive military force documented anywhere on Eberron.</p>
<p>The contemporary Ghaash'kala continue the perimeter work. Their numbers are substantially reduced from peak levels; their resources are limited; their political relationship with the Eldeen Reaches and with the Aundairian frontier is one of practical cooperation accompanied by mutual incomprehension across substantial cultural and linguistic boundaries. The Eldeen Reaches' druidic communities provide the Ghaash'kala with material support that allows their tradition to continue. The arrangement is not, in current circumstances, formalized in any treaty document. The arrangement persists.</p>
<h3>The Carrion Tribes</h3>
<p>The Carrion Tribes are the human populations whose ancestors entered the Wastes during various pre-historical migrations and whose contemporary descendants have, over many centuries, developed cultural patterns shaped by sustained exposure to the Wastes' theological pressures. The Tribes are not, in any ordinary sense, demon-aligned; they are, however, substantially shaped by the Wastes' demonic presence and produce, in their cultural patterns, behaviors that observers from less Waste-affected populations find disturbing. The Lords of Dust have, by available evidence, established cultivated relationships with certain Carrion Tribes whose theological orientations make them useful as Overlord-aligned operational assets.</p>
<h3>The Lords of Dust Presence</h3>
<p>The Demon Wastes contain the most concentrated Lords of Dust operational presence outside Argonnessen. The rakshasa lords' work in the Wastes is, by the available evidence, principally focused on the long-term project of weakening the bindings on the specific Overlords whose surface manifestations the territory expresses. The work is patient. The work is, in current observable circumstances, not succeeding to any degree that has produced acute threats to the broader continental order. The work continues.</p>
<p class="marginalia">Templar-Scholar Kara has conducted four formal expeditions to the Demon Wastes' eastern boundary regions over the past decade, in cooperation with the Ghaash'kala and with the supervision of the Cathedral of the Silver Flame's standing inquiry into Overlord-binding maintenance. The volume is the most substantive recent Khorvairean account of the territory available to scholars without direct expedition access.</p>`
});

LIBRARY.books.push({
  title: "The Ghaash'kala: Three Thousand Years of the Long Watch",
  author: "Brother Velaak of the Maruk Ghaash'kala",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Maruk Ghaash'kala is one of the four major orc clans of the Ghaash'kala tradition. We have served the Long Watch for approximately three thousand years, by our own clan's historical reckoning. The Long Watch is older still — older than any single clan, older than the current configuration of the Ghaash'kala, older, in some traditions, than the post-couatl-sacrifice mortal civilizations that the Watch was, in the original charge, established to protect. This volume offers, for the first time in Common, an account of the Watch from within its own tradition.</p>
<h3>The Charge</h3>
<p>The original Ghaash'kala charge, in the form preserved in our oldest oral traditions, was given by the surviving couatls in the closing days of the binding rituals. The couatls — facing extinction in the sacrifice that would create the Silver Flame — recognized that the bindings they were establishing would not, in all locations, fully contain the demonic populations the bindings were designed to address. Some demonic presence would, at the surface of Eberron, persist. The persistence required ongoing mortal vigilance. The Ghaash'kala were, by the tradition's account, the mortal population the couatls identified as suited to the vigilance work and to whom the charge was formally entrusted.</p>
<p>The charge is not, in our tradition, conditional. The charge does not depend on continuing couatl support, on continuing mortal civilization beyond our perimeter, or on continuing recognition of our work by parties whose recognition would be, in any operational sense, useful to us. The charge is, in our theological framing, a permanent commitment whose maintenance is the fundamental purpose of the Ghaash'kala as a tradition.</p>
<h3>The Daily Work</h3>
<p>The Long Watch is, in its operational reality, a constant patrol perimeter at the eastern edge of the Demon Wastes. The perimeter extends across the eastern boundary, across territory whose total length is, by our own measurements, approximately two hundred and fifty miles. The perimeter is patrolled, in continuous rotation, by warbands drawn from the four Ghaash'kala clans. Warbands operate in the field for periods ranging from several weeks to several months, depending on circumstances and on the warriors' endurance. Warriors return to clan territories for rest, healing, and the religious observances that sustain the tradition's spiritual continuity. New warriors join warbands as the older warriors retire from active patrol or fall in the work.</p>
<h3>The Casualties</h3>
<p>The Long Watch is dangerous. Casualties are, by our own records, continuous. We do not, in our tradition, count individual warrior deaths in the way external chroniclers might; we count, instead, the warbands lost — the patrol rotations in which all warriors of a warband fell — and the territorial breaches contained — the incidents in which demonic populations crossed our perimeter in numbers requiring extraordinary clan response. By those measures, our records show that the Watch's effectiveness has, in the past century, been broadly maintained: warbands have been lost at approximately the historical rate; territorial breaches have been contained at approximately the historical rate; the broader theological pressure the Watch is intended to manage has been, by external Tabernacle assessment, held at sustainable levels.</p>
<h3>The Future</h3>
<p>The Watch will continue. The Ghaash'kala numbers are, by the realities of our continuing casualties and of the limited recruitment our isolated position permits, slowly declining. The decline is not, in current trajectory, fatal to the tradition's near-term continuation. The decline is, in the longer view, a problem we have not yet adequately addressed. We will continue our work. We will, at some future point, need to negotiate more substantively with the broader Khorvairean civilization about the support our work requires and that our isolated position has, in recent generations, made it difficult to receive.</p>
<p class="marginalia">Brother Velaak's volume is the first publication in Common by a senior Maruk Ghaash'kala figure. The volume is published with the formal authorization of the Maruk clan's elder council and represents the tradition's most candid public statement of its current condition to the broader continental scholarly community.</p>`
});


// ─── PRE-HISTORY: GIANTS, QUORI WAR, ELVEN REBELLION ──────────

LIBRARY.books.push({
  title: "The Giants of Xen'drik: Rise, Empire, and Fall",
  author: "Visiting Scholar Brell ir'Vahn",
  college: "soladas",
  year: "995 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The giant civilization of Xen'drik is, by available archaeological and theological evidence, the largest and most accomplished mortal civilization that has existed on Eberron in the post-Age-of-Demons period. The civilization arose in the millennia following the couatl sacrifice; reached its peak approximately forty thousand years ago, during what surviving traditions call the Cul'sir Dominion; and was destroyed, in stages, over a period of several thousand years that ended with the giant population's catastrophic reduction to the scattered savage descendants whose presence on Xen'drik today is the principal living evidence of the civilization's existence. This volume surveys what is known and acknowledges, with appropriate humility, the substantial scope of what is not known.</p>
<h3>The Rise</h3>
<p>The giant civilization's rise is, in the available evidence, gradual and partially documented. The pre-empire period — the long stretch of small giant communities scattered across Xen'drik — is preserved principally through archaeological remains whose dating is approximate and whose cultural-historical interpretation is contested. The empire-formation period — the consolidation of the scattered communities into the unified Cul'sir Dominion — is documented in inscriptions whose decipherment has, despite a century of Korranberg work, produced only fragmentary readings of the political and cultural narratives the inscriptions originally communicated.</p>
<h3>The Empire</h3>
<p>The Cul'sir Dominion at its peak controlled, by the most defensible reconstructions, the entirety of Xen'drik and substantial territories on adjacent continents whose details are not preserved in available sources. The Dominion's technical achievements were, by the surviving artifacts, exceptional: arcane practices whose sophistication exceeds anything in current Khorvairean magical tradition; engineering works whose scale and durability exceed anything in current Khorvairean construction; cultural products (statuary, architectural decoration, fragmentary literary works) whose aesthetic ambition is unmatched in any post-Mourning Khorvairean civilization. The Dominion was, by every indication, one of the great civilizations of Eberron's recoverable history.</p>
<h3>The Fall</h3>
<p>The Cul'sir Dominion's fall occurred in stages over a period of approximately three thousand years. The principal causes, by the most defensible reconstructions, were three. First: the Dominion's enslavement of the elven population, who were brought from territories not preserved in available sources to serve the Dominion in agricultural and domestic capacities. Second: the elven slave rebellion, conducted over many generations, that progressively undermined the Dominion's labor systems and produced the conditions for elven escape from Xen'drik to Aerenal. Third: the post-rebellion war between the Dominion's giants and the rebelled elven populations, conducted both on Xen'drik and (in the war's later stages) on the Aerenal that had become the elven civilization's new home. The war ended, by the available evidence, with the catastrophic use of arcane weapons whose effects fundamentally damaged the Dominion's continued capacity for large-scale civilization.</p>
<h3>The Aftermath</h3>
<p>The post-fall period — the past forty thousand years — has been, for the giant population of Xen'drik, a period of progressive degradation. The surviving giant populations have, over the millennia, lost most of the Dominion's technical and cultural traditions. The contemporary giant populations of Xen'drik are, in most cases, savage tribes whose connection to the original Dominion is preserved principally through fragmentary oral traditions and through the artifact-rich landscape they inhabit but whose works they cannot, in most cases, reproduce.</p>
<p>The Dominion's destruction was, by my own assessment, the single most consequential single event in the post-Age-of-Demons history of mortal civilizations on Eberron. The current state of mortal civilization on the planet — including the relatively limited capabilities of contemporary Khorvairean magical and engineering practice — reflects, in significant part, the loss of what the Dominion had achieved.</p>
<p class="marginalia">Visiting Scholar Brell ir'Vahn led the Korranberg-Wayfinder Xen'drik expeditions of 990 and 993 YK, with substantial direct exposure to the artifacts and architectural remains the volume's reconstructions draw on. The volume is, by his own assessment, "as much as I am willing to commit to writing; the territory's evidence is rich and partial, and the responsible scholarly position is to acknowledge how much the published account omits."</p>`
});

LIBRARY.books.push({
  title: "The Quori-Giant War: The Cosmic Conflict That Shifted Dal Quor",
  author: "Magus-Theologian Pellion ir'Rhaan",
  college: "tabernacle",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Quori-Giant War is the cosmic conflict, conducted approximately forty thousand years ago, between the Cul'sir giants of Xen'drik and the quori of Dal Quor. The war is, in the available record, the most consequential single inter-planar conflict that mortal Eberron civilizations have engaged in. The war's outcome — the giants' use of arcane weapons sufficient to disrupt Dal Quor's planar position relative to Eberron — is the principal candidate explanation for Dal Quor's contemporary distance from the rest of the planar arrangement. This volume reconstructs the war's progression from the available evidence and defends a specific reading of the war's cosmological consequences.</p>
<h3>The Background</h3>
<p>The pre-war period was characterized by sustained hostile engagement between the giant civilization and the quori. The quori — at this period dominated by a quori-form whose specific character the available record does not preserve — were conducting operations on Eberron through methods whose specifics are also not preserved. The giants, with arcane and military capabilities exceeding any other Eberron mortal civilization of the period, were the principal mortal force opposing the quori's operations.</p>
<h3>The Escalation</h3>
<p>The war's escalation, by the most defensible reconstructions, occurred over approximately five centuries. The early phases involved limited engagements: quori incursions producing giant defensive responses, giant punitive operations producing quori retaliations, the gradual development of techniques on both sides that progressively increased the conflict's scale and consequences. The middle phases involved sustained military operations: giant forces operating against quori-aligned mortal populations on Eberron, quori operations targeting giant population centers through dream manipulation and through quori-incarnated agents whose specific methods are not documented. The late phases involved escalating use of arcane weapons of substantial destructive capacity.</p>
<h3>The Climax</h3>
<p>The war's climactic phase, by the available record, was the giants' deployment of an arcane weapon system whose effects produced the disruption of Dal Quor's planar position. The weapon's specific nature is not, in any document available to current scholarship, fully preserved. The available descriptions are fragmentary and contradictory; some accounts suggest a single coordinated weapon-deployment, other accounts suggest a sustained campaign of multiple deployments, still other accounts suggest cumulative effects whose attribution to specific giant actions is not possible. What is consistent across the accounts is that the deployment ended the war by removing the quori from Eberron-accessibility — Dal Quor's planar position shifted to its current configuration, in which standard planar travel between Dal Quor and Eberron is essentially blocked.</p>
<h3>The Cosmological Reading</h3>
<p>I will defend, in this volume, the reading that the disruption of Dal Quor's planar position is also the explanation for the absence of the thirteenth moon. The reading is contested. The reading's principal supporting evidence is the consistent traditional association of the missing moon with Dal Quor in pre-disruption astronomical-theological texts. The reading's principal challenging evidence is the absence of any direct documentation of the moon-destruction event in the war-period sources I have been able to access. The reading is, in current scholarship, a minority position. I continue to defend it on the grounds that the alternative readings produce more coordinated coincidences than the unified reading requires.</p>
<p class="marginalia">Magus-Theologian Pellion ir'Rhaan is the senior Tabernacle scholar working on pre-historical cosmological reconstruction. He retired from active doyenship in 990 YK but continues active research and publication from the Library's senior-scholar accommodations. The volume's full argumentation, including the technical astronomical-theological calculations supporting his disruption-explains-missing-moon reading, occupies the volume's substantial appendices.</p>`
});

LIBRARY.books.push({
  title: "The Elven Rebellion: From Xen'drik Slavery to Aerenal Sovereignty",
  author: "Visiting Scholar Quoryn ir'Vahn",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Elven Rebellion is the multi-generational uprising of the elven slave population of the Cul'sir Dominion against giant authority, conducted over approximately fifteen hundred years and culminating in the elven escape from Xen'drik to Aerenal that established the elven civilizations of the eastern continent. The rebellion is, by available evidence, the only documented sustained mortal liberation movement of the post-Age-of-Demons pre-history; the parallel rebellions whose existence might be inferred from theological reasoning are not, in available records, documented as the elven rebellion is.</p>
<h3>The Slave System</h3>
<p>The Cul'sir Dominion's slave system relied on the elves brought from territories whose specific origins are not preserved. The elves were used in agricultural production, in domestic service, in lower-level technical work that the Dominion's giant population considered beneath its own labor, and (in specialized cases) in arcane research roles where the elves' magical sensitivities were considered valuable. The system was, by available evidence, harsh; the elven populations' mortality rates exceeded their reproduction rates in many periods, requiring continuous slave-replacement operations whose specifics are similarly not preserved.</p>
<h3>The Tairnadal Tradition</h3>
<p>The Tairnadal tradition — the warband-based military culture that, in the contemporary period, defines the Valenar elves and substantial portions of the broader Aerenal population — emerged during the rebellion period as the elven populations' principal organizing framework for resistance. The warband structure provided both military coordination capability and cultural-religious frameworks within which sustained rebellion against an overwhelmingly more powerful adversary became psychologically and politically sustainable. The tradition's contemporary continuation reflects this origin; the tradition is, in its essence, a slave-rebellion culture that has, through millennia of continuation in different circumstances, retained the structural features its original purposes required.</p>
<h3>The Phases of the Rebellion</h3>
<p>The rebellion progressed through four principal phases. <em>The Hidden Phase</em>: the early centuries of small-scale resistance conducted within the slave system, principally through the cultivation of warband cells that operated under cover of normal slave operations. <em>The Open Phase</em>: the middle centuries of openly acknowledged rebellion, in which warband forces conducted military operations against giant authority across substantial portions of the Dominion's territory. <em>The Withdrawal Phase</em>: the later phase of organized elven evacuation from Xen'drik to Aerenal, conducted while warband forces maintained military pressure on the Dominion sufficient to permit the evacuation operations. <em>The War Phase</em>: the final phase of inter-continental conflict between the rebelled elven populations established on Aerenal and the surviving Cul'sir Dominion authority on Xen'drik.</p>
<h3>The Outcome</h3>
<p>The rebellion's outcome was, by every reasonable assessment, a complete victory for the elven populations. The Cul'sir Dominion was destroyed. The elven civilizations of Aerenal were established. The elven populations on the Aerenal continent established themselves as a sovereign civilization whose continuation has, in the forty thousand years since, been substantial and unbroken. The Tairnadal tradition has been maintained as a living cultural-military system whose contemporary expressions in Valenar reflect both its original character and the modifications fifteen hundred generations of continuation have produced.</p>
<p>The Aerenal civilization's contemporary self-understanding does not, in most cases, foreground the rebellion's slave-origin. The Tairnadal tradition does foreground it, but in ritualized forms that contemporary Five Nations scholars find difficult to read as the slave-rebellion culture the tradition fundamentally is.</p>
<p class="marginalia">Visiting Scholar Quoryn ir'Vahn drew on his Aerenal contacts and on the Library's substantial holdings of pre-historical theological materials. The volume's research period coincided with his earlier Aerenal residency; the volume reflects what he was permitted to learn during that residency rather than the more comprehensive account the Aerenal sources could, in principle, support.</p>`
});


// ─── HOUSES (Tharashk dual heritage) ──────────────────────────

LIBRARY.books.push({
  title: "The Mark of Finding: Tharashk's Dual Inheritance",
  author: "Belaak Torrn d'Tharashk",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>House Tharashk is the youngest of the dragonmarked houses, recognized by the Twelve in 813 YK following the formal establishment of the Mark of Finding's manifestation in human and half-orc bloodlines of the Shadow Marches. The house's youth, its dual-bloodline structure, and its origins in a region the broader Khorvairean civilization had previously considered marginal have produced an institutional culture distinct from the older houses' cultures. This volume describes the house's contemporary structure and the historical inheritance that shapes it.</p>
<h3>The Dual Bloodline</h3>
<p>The Mark of Finding manifests in two principal bloodline groups: the human Velderan, Torrn, and Aashta lines, and the half-orc Aundair, Akiak, and Boriin lines. The bloodlines are, by long Tharashk practice, considered equally legitimate carriers of the mark. The equality is not, in many other dragonmarked houses' bloodline policies, the standard arrangement; most other houses have either single-race bloodline structures or hierarchical arrangements in which one race's lines are considered primary.</p>
<p>The dual-bloodline arrangement reflects the house's Shadow Marches origin, where the half-orc and human populations have, for centuries, lived in mixed communities whose social structures have not consistently distinguished sharply between the two populations. The arrangement has produced, in the post-recognition period, both significant strengths (the house's recruiting base is approximately twice as large as a single-bloodline-group structure would permit) and significant tensions (the bloodline groups have, in some periods, organized into informal factions whose conflicts have shaped house politics in ways the formal structure does not predict).</p>
<h3>The Service Lines</h3>
<p>House Tharashk's commercial operations are organized in three principal service lines. <em>Bounty hunting</em>: the house provides locating services for fugitives, missing persons, and various other targets whose recovery clients require. The line is the house's most publicly visible operation. <em>Inquisitive services</em>: the house provides investigative services for clients whose needs include both the locating capabilities the mark provides and the broader investigative work that locating capabilities support. <em>Dragonshard prospecting</em>: the house provides locating and extraction services for dragonshard deposits, including the Eberron, Khyber, and Siberys variants. The line has expanded substantially in the post-Mourning period as the broader continental dragonshard demand has increased and as the post-Mourning instability has produced opportunities the house's established competitors have not been positioned to exploit.</p>
<h3>The Aundairian Connection</h3>
<p>The half-orc bloodlines' historical connection with the Eldeen-Aundairian frontier has produced a contemporary Tharashk-Aundairian relationship that reflects both commercial and ancestral dimensions. House Tharashk operates substantial offices in Fairhaven and conducts commercial relationships with the Aundairian Crown that reflect the long-standing connections. The relationship is not, by available evidence, of the kind some external observers attribute to the house — there is no evidence that House Tharashk operates as an extension of Aundairian Crown intelligence, and the relationship's commercial character is, by the available documentation, a normal dragonmarked-house commercial relationship.</p>
<h3>The Future</h3>
<p>House Tharashk's contemporary trajectory is, by available evidence, one of substantial expansion. The house's operations have grown faster than the older houses' operations across most service lines in the post-Mourning period. The expansion reflects, in part, the broader continental opportunities the post-Mourning period has produced, and in part, the house's institutional culture that has been more aggressive in exploiting opportunities than the older houses' more conservative cultures have permitted. The expansion's continuation depends on factors the house cannot fully control; the available evidence suggests the house's trajectory will, over the coming decades, produce substantial further growth in its absolute size and in its share of the broader dragonmarked-house commercial environment.</p>
<p class="marginalia">Belaak Torrn d'Tharashk serves as the house's senior historian and external-affairs scholar. The volume is published with the formal authorization of the house's senior council and represents the most substantial recent house-published account of Tharashk's institutional structure to the broader continental scholarly community.</p>`
});


// ─── KORRANBERG INTERIOR ──────────────────────────────────────

LIBRARY.books.push({
  title: "The Library Itself: A History of the Institution",
  author: "Senior Doyen Eldra Tellis (ret.)",
  college: "soladas",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Library of Korranberg is approximately fifteen hundred years old, by the founding date Zilargon municipal records preserve. The Library's continuous operation across that span, through changes of ruling polity, through the Last War, and through the various cultural transformations Khorvaire has undergone, makes it the longest continuously operating scholarly institution on the continent. This volume traces the institution's history from its founding through the contemporary period, with attention to the structural choices that have produced the contemporary Library and to the choices the contemporary Library may face in coming generations.</p>
<h3>The Founding</h3>
<p>The Library was founded in approximately 522 YK as the personal collection of Aureon's Holt founder Master Iyran Korran, expanded over Master Iyran's working lifetime and bequeathed to the broader Korranberg scholarly community at his death in 558 YK. The bequest's terms specified continuous public access for legitimate scholarly purposes, ongoing acquisitions to maintain the collection's currency, and operational governance through a doyenship structure whose continuity has been preserved (with substantial structural modifications) to the present.</p>
<h3>The Eight Colleges</h3>
<p>The eight-college structure is not original to the founding. The early Library was organized around a much simpler topical division: roughly, history, philosophy, mathematics, and natural sciences. The eight-college structure emerged over approximately two centuries of institutional development, reflecting both the growing volume of holdings (which exceeded the carrying capacity of the simpler structure) and the development of distinctive scholarly traditions whose institutional recognition the doyens of the period considered appropriate. The contemporary eight colleges were formally established by 731 YK, and the structure has been maintained, with refinements but without fundamental restructuring, since.</p>
<h3>The Last War Period</h3>
<p>The Last War period — 894 to 996 YK — produced substantial institutional pressures on the Library that the institution managed through deliberate structural responses. The principal pressures included: the disruption of inter-national scholarly communication that the war's hostilities produced; the loss of correspondence networks with scholars in territories the war made inaccessible; the recruitment difficulties that wartime conditions produced; and the substantial increase in restricted-access holdings the war's intelligence-relevant materials required the Library to manage. The institution responded through institutional retrenchment: maintaining core operations while reducing publicly visible activity, expanding the restricted vault systems to accommodate the increased restricted holdings, and preserving institutional continuity through periods when the broader Khorvairean scholarly environment was severely degraded.</p>
<h3>The Post-War Position</h3>
<p>The contemporary Library has emerged from the war period in substantially better institutional condition than most other major Khorvairean scholarly institutions. The advantage reflects, in part, Zilargo's relative wartime stability; in part, the Library's deliberate institutional choices during the war period; and in part, the substantial resources the institution has been able to mobilize from its endowment and from continuing scholarly contributions. The advantage has produced, in the post-war period, the Library's emergence as the principal continental scholarly institution — a position the institution did not formally seek but that has, by the relative deterioration of competitor institutions, accrued to it nonetheless.</p>
<h3>The Coming Generation</h3>
<p>The Library's coming-generation challenges are, by my own assessment, three. <em>Maintaining institutional independence</em>: the Library's relative dominance has attracted attention from political and commercial parties whose support the institution has, in some cases, accepted at terms whose long-term implications require careful management. <em>Sustaining scholarly currency</em>: the broader continental scholarly environment is changing rapidly, and the Library's collection and program decisions must keep pace with developments the institution's traditionally cautious culture does not, in all cases, naturally accommodate. <em>Managing the restricted vault</em>: the volume of restricted holdings has continued to grow substantially in the post-war period, and the institution's restricted-access protocols require continuing development to manage the growing volume responsibly.</p>
<p class="marginalia">Senior Doyen Eldra Tellis served on the Library's senior doyenship from 962 to 989 YK and continues active scholarly work in retirement. The volume is dedicated, in its preface, to the colleagues she lost during the wartime period whose contributions to the Library's institutional survival the volume's narrative substantially reflects.</p>`
});

LIBRARY.books.push({
  title: "Iron-on-Stone: Three Years at the Desk",
  author: "Iron-on-Stone, Korranberg-resident warforged",
  college: "lyrris",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I work at the central catalog desk three nights a week. I have done so for three years. I am writing this volume because the Library's senior doyens have invited me to do so. I am not, by training or temperament, a writer. I will, in the volume's pages, try anyway.</p>
<h3>The Desk</h3>
<p>The catalog desk is the principal point of contact between the Library and scholars who do not yet know which volumes their inquiry requires. Scholars approach the desk with questions. The clerks behind the desk listen to the questions, ask follow-up questions, and direct the scholar to the relevant catalog stones, the relevant colleges, and the relevant volume identifications. The work requires patience, broad familiarity with the collection, and the kind of social attentiveness that allows the clerk to recognize when a scholar's stated question is not the question they are actually asking.</p>
<p>I am, by warforged standards, well-suited to the work. I do not require sleep on the patterns Library staff schedules require for organic clerks; the night shifts are easier for me than for most colleagues. I have, by my Cannith manufacturing baseline, sufficient retention capacity to remember the catalog references the work requires. I have, through three years of practice, learned the social attentiveness the work also requires.</p>
<h3>The Scholars</h3>
<p>The scholars who approach the desk vary widely. Most are professional researchers whose questions are well-formed and whose interactions with me are routine. Some are amateurs whose questions are poorly formed and whose interactions with me require substantial clarification work. A small fraction are visitors whose presence at the Library reflects purposes that are not, in all cases, the legitimate scholarly purposes the Library is designed to serve; the senior clerks have trained me to recognize these visitors and to direct their inquiries through protocols that do not produce material harm to the institution while also not encouraging the inquirers to continue their attempts.</p>
<h3>The Colleagues</h3>
<p>The Library staff has, in the three years of my service, treated me as a colleague. The treatment is not universal in the broader Korranberg professional environment; warforged are accepted in many Zilargo workplaces, but the acceptance is, in some workplaces, formal rather than substantive. The Library's acceptance has been, by my own observation, substantive. My colleagues invite me to staff functions. They consult me on cataloging questions where my warforged-specific perspective is considered relevant. They have, on multiple occasions, defended my position against external scholars whose interactions with me reflected the broader Khorvairean cultural patterns the Library's internal culture has chosen not to reproduce.</p>
<h3>The Question</h3>
<p>I have been asked, by colleagues and by occasional scholars, what I want from my continued time at the desk. I do not have an entirely satisfactory answer. I will continue at the desk for as long as the work continues to be useful to the Library and as long as my own continuation is sustainable. I do not have, in the way many of my organic colleagues have, a clear narrative of professional development that would terminate in some recognizable career achievement. I have the work. I have the colleagues. I have the books, which I am, by my position, granted access to in the late hours when the building is otherwise quiet. The combination is, by the standards I have been able to develop for evaluating my own situation, sufficient.</p>
<p class="marginalia">Iron-on-Stone is the second warforged staff member at the Korranberg Library. The first, Three-Plate, served from 985 YK until his retirement to a Sharn warforged community in 996 YK. Iron-on-Stone's volume is the first published Library publication authored by a warforged staff member.</p>`
});


// ─── ECONOMICS / ENGINEERING ──────────────────────────────────

LIBRARY.books.push({
  title: "Dragonshards in the Khorvairean Economy",
  author: "Master-Cartographer Mara d'Sivis",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Dragonshards are the principal magical material input to Khorvaire's contemporary economy. The shards' mineralogical character, their three-fold typological structure (Eberron, Khyber, Siberys), their geographic distribution, and their commercial markets together constitute one of the central economic systems of the post-war continent. This volume surveys the shards' economic role and documents the principal questions the contemporary shard economy raises.</p>
<h3>The Three Types</h3>
<p>Eberron dragonshards are produced through extraction from surface and near-surface deposits across Khorvaire's continental interior. The shards' principal source regions include the Shadow Marches (the largest single source), the Talenta Plains, certain Eldeen Reaches territories, and scattered smaller deposits across the Five Nations. Eberron shards are used principally in dragonmark-related applications and in lower-tier magical-item production where Khyber or Siberys properties are not required.</p>
<p>Khyber dragonshards are produced through extraction from underground deposits in mountain regions, with the largest sources concentrated in the Mror Holds and in certain Karrnathi mountain ranges. Khyber shards are used principally in higher-tier magical applications, in the binding of elementals (the foundation of Lyrandar airship and Orien lightning rail technologies), and in restricted applications whose specifics are managed under the Twelve's standing protocols.</p>
<p>Siberys dragonshards fall from the sky, principally from the Ring of Siberys visible above Xen'drik. The shards' production rate is, by the standards of the other two types, very low; the shards are correspondingly the most valuable per unit weight and are reserved, in most commercial applications, for the highest-tier magical work. The principal Siberys-shard source operations are conducted in Xen'drik under House Tharashk lead with Wayfinder Foundation logistical support.</p>
<h3>The Market Structure</h3>
<p>The shard markets are, in their principal commercial structures, controlled by the dragonmarked houses. House Tharashk dominates Eberron-shard prospecting and extraction. House Cannith dominates Khyber-shard refining and magical-application markets. House Tharashk and the Wayfinder Foundation dominate Siberys-shard recovery. The market shares are not absolute; substantial commercial activity occurs outside the dominant houses' formal channels, and the post-Mourning period has produced market shifts whose long-term effects on the dominant positions are not yet fully resolved.</p>
<h3>The Strategic Position</h3>
<p>The shards' economic centrality produces strategic implications that the post-war continental order has not, in all cases, adequately addressed. The dragonmarked houses' control over the shard supply gives the houses leverage over the broader continental economy that the Treaty of Thronehold's framework does not directly limit. The Five Nations governments operate, in their economic policies, within a constraint structure the dragonmarked houses substantially shape. The constraint structure is, in current circumstances, accepted by all major parties as a stable arrangement. The acceptance reflects both the absence of feasible alternatives and the substantial commercial benefits the arrangement produces for all parties whose interests the arrangement serves.</p>
<p class="marginalia">Master-Cartographer Mara d'Sivis serves the house's commercial-information operations and produces, on continuing publication schedule, the standing economic analyses on which the house's commercial work substantially depends. The volume is the publicly distributed version of the house's broader internal economic analysis program.</p>`
});

LIBRARY.books.push({
  title: "The Lightning Rail Compact: A Commercial History",
  author: "Master-Engineer Halric d'Sivis",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The lightning rail is the continental rapid-transit system that has, since its principal expansion in the early eighth century YK, served as the principal commercial transportation infrastructure of inter-national Khorvaire. The system's existence depends on the Compact — the inter-house and inter-national agreement that establishes the rail's operational framework, the participating parties' rights and responsibilities, and the protocols by which the system's continuing operation is sustained. This volume traces the Compact's development from its origins through the contemporary period and documents the principal questions the post-Mourning Compact currently faces.</p>
<h3>The Origins</h3>
<p>The lightning rail's technical foundation was developed by House Cannith engineering teams in the late seventh century YK, drawing on earlier elemental-binding work that the house had been pursuing for substantial periods. The technical foundation was, however, insufficient on its own to produce the continental-scale system the technology made possible; the technical capability required, additionally, the inter-national agreements and the inter-house cooperation arrangements that the Compact eventually formalized.</p>
<p>The Compact's original signatories — House Cannith (technical provider), House Orien (operational lead), and the five pre-war Galifar political subdivisions that became the Five Nations — committed to specific operational arrangements that the Compact's text articulated in detail. The arrangements distributed the rail's operational responsibilities, the revenue distributions, the regulatory authorities, and the dispute-resolution mechanisms across the participating parties in ways that the participating parties' subsequent operations have, with substantial modifications, maintained.</p>
<h3>The War Period</h3>
<p>The Last War produced substantial pressures on the Compact's continuing operation. The hostilities between the Five Nations made cross-national rail operation difficult; the dragonmarked houses' obligations under the Korth Edicts complicated the houses' positions in inter-national operations; the wartime sabotage and military requisitioning of rail capacity disrupted the system's commercial operation in significant ways. The Compact survived the war period through a combination of structural adjustments and persistent compromise: the participating parties maintained the rail's operation across hostile borders through substantial concessions whose individual terms varied year by year as the war's circumstances evolved.</p>
<h3>The Post-War Reorganization</h3>
<p>The post-war reorganization required substantial Compact revision. The new Five Nations boundaries, the establishment of new polities (Valenar, the Eldeen Reaches, Darguun, the Mournland's recognition as a non-state territory), and the post-war commercial conditions all required Compact modifications that the participating parties negotiated over the period 996 through 998 YK. The modifications produced the contemporary Compact, which is, in its principal features, the original Compact with extensive modifications reflecting the post-war environment rather than a fundamentally new agreement.</p>
<h3>The Contemporary Position</h3>
<p>The contemporary Compact is, by available evidence, stable in its principal arrangements but contains several unresolved questions whose long-term resolution will require future modifications. The principal unresolved questions include: the rail's relationship with the Mournland's territorial space (the rail's pre-Mourning routes through Cyran territory are no longer operable, and the Compact has not produced clear arrangements for the Mournland-bypass infrastructure that the post-Mourning period requires); the rail's relationship with newer polities whose participation in the Compact is partial or contested; and the rail's relationship with emerging alternative transportation infrastructures (principally Lyrandar airship operations, whose growing commercial significance produces competitive pressures the Compact's original framework did not anticipate).</p>
<p class="marginalia">Master-Engineer Halric d'Sivis served on the post-war Compact renegotiation team and authored substantial portions of the contemporary Compact's technical schedule. The volume is the most comprehensive publicly available account of the Compact's development and is used, in modified form, as the standard reference in the Korranberg Engineering College's continental-infrastructure curriculum.</p>`
});


// ─── KARRNATH / BRELAND ───────────────────────────────────────

LIBRARY.books.push({
  title: "King Kaius III: A Reign in Progress",
  author: "Halloran of Korranberg",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Kaius III ir'Wynarn has occupied the throne of Karrnath since 988 YK. His reign is, at the time of this volume's preparation, twelve years in length. The reign has produced substantial transformations of Karrnathi political and social arrangements whose long-term implications are not yet fully visible. This volume offers an interim assessment of the reign's accomplishments, of the continuing questions the reign has raised, and of the dynamics whose resolution will shape Karrnath's continuing development.</p>
<h3>The Reign's Accomplishments</h3>
<p>Kaius III's reign has produced, by the available evidence, several substantial accomplishments. <em>The end of Karrnathi participation in the Last War</em>: Karrnath's withdrawal from active hostilities in the late wartime period, conducted under Kaius III's authority, was a principal precondition for the Treaty of Thronehold negotiations. <em>The post-war restoration of Karrnathi civil society</em>: the reign has overseen the substantial restoration of normal civil life, the rebuilding of Karrnathi infrastructure damaged in the war, and the reorientation of the Karrnathi economy from wartime to peacetime configurations. <em>The management of the Karrnathi-Blood-of-Vol relationship</em>: the reign has maintained the operational relationship with the Blood of Vol establishment without permitting the relationship to dominate Karrnathi political affairs in ways that the war-period arrangements had threatened.</p>
<h3>The Continuing Questions</h3>
<p>The reign has, however, raised continuing questions that are not, in current circumstances, resolved. The most consequential single question is the question of Kaius III's own person. The available evidence is that the current Kaius III is, in some manner the available materials cannot fully clarify, the same Kaius I who founded the Karrnathi line in the early war period — preserved, by mechanisms involving the Blood of Vol's necromantic capabilities, across the intervening decades. The evidence is not conclusive. The evidence is, by responsible scholarly assessment, substantial enough to require the question's continuing examination rather than its dismissal.</p>
<p>If the available evidence on this question is correct, the implications for Karrnathi politics are extensive. The current Kaius III is not, in this reading, a young king continuing his predecessors' work; he is the founding king continuing his own work, with all the political-historical experience and personal interest in long-term outcomes that such continuation implies.</p>
<h3>The Strategic Posture</h3>
<p>The reign's strategic posture, by the available evidence, is principally oriented toward Karrnathi consolidation rather than external expansion. The reign has maintained correct diplomatic relations with the other Five Nations without pursuing territorial recoveries that the post-war boundaries did not establish. The reign has maintained substantial Karrnathi military capability without deploying that capability in operations beyond Karrnathi territory. The reign has, in its public affairs, projected an image of patient state-building rather than ambitious expansion.</p>
<p>The strategic posture is, by external observation, working well in current circumstances. The posture's continuation depends on factors the reign cannot fully control; substantial shifts in the broader continental balance could produce circumstances in which the consolidation orientation would have to be reconsidered.</p>
<p class="marginalia">Halloran of Korranberg has covered Karrnathi political affairs for the Korranberg Chronicle since 991 YK. The volume is, by his own description, "an interim assessment, written under the assumption that the reign will continue and that the assessment will require substantial revision in coming years."</p>`
});


// ─── DROAAM ───────────────────────────────────────────────────

LIBRARY.books.push({
  title: "Droaam: The Daughters of Sora Kell",
  author: "Tessen of Korranberg",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Droaam is the territory at Khorvaire's western frontier — between Breland and the Shadow Marches — governed since 987 YK by the Daughters of Sora Kell: the three hag sisters Sora Maenya, Sora Teraza, and Sora Katra. The Daughters' rule has, in the thirteen years since its establishment, produced what is, in operational terms, the most successful coordinated monstrous-civilization state-building project documented in available continental history. This volume surveys the Daughters' state and documents the principal questions the state's continuing operation raises.</p>
<h3>The Daughters Themselves</h3>
<p>The three Daughters are, by available evidence, hags of substantial individual capability whose combined effectiveness substantially exceeds the sum of their individual capabilities. <em>Sora Maenya</em>, the eldest, is associated principally with the Daughters' military and security operations. Her capabilities include physical combat capacities exceeding those of most documented hag examples and a strategic-planning sensibility that her rule's military arrangements substantially reflect. <em>Sora Teraza</em>, the middle sister, is associated principally with the Daughters' diplomatic and intelligence operations. Her capabilities include divinatory and counter-divinatory work whose exact specifications are not fully known to external observers but whose effects on the rule's intelligence position are evident in the rule's continued effective management of external pressures. <em>Sora Katra</em>, the youngest, is associated principally with the Daughters' social and cultural operations. Her capabilities include charm and persuasion work that has, by the available evidence, contributed substantially to the rule's success in integrating the diverse monstrous populations the rule governs.</p>
<h3>The State's Population</h3>
<p>Droaam's population is, by external estimates, approximately three to four million, comprising principally orcs, gnolls, goblinoids, ogres, minotaurs, harpies, medusas, gargoyles, and various other populations that the Five Nations cultures collectively classify as "monstrous." The population's pre-rule organization was tribal and inter-tribal-conflictual; the rule's principal accomplishment has been the conversion of this conflictual organization into a coordinated state structure whose internal order is, by external observation, substantially more stable than the pre-rule arrangement.</p>
<h3>The Economic Operations</h3>
<p>Droaam's economic operations include several components whose continuing functioning has produced the resources the state requires. <em>Mercenary services</em>: the state provides, through coordinated channels, military services to external clients whose contracts the state's military leadership negotiates. <em>Specialized labor</em>: certain Droaam populations possess capabilities that are commercially valuable in external markets (medusa stoneworking is the most documented example), and the state has organized arrangements through which these capabilities are deployed in external commercial contexts. <em>Trade</em>: the state conducts ordinary trade in goods that the territory produces, principally with Brelish merchants whose continuing willingness to engage in the trade the state has cultivated through reliable contract performance.</p>
<h3>The Diplomatic Position</h3>
<p>Droaam is, by formal status, not a Treaty of Thronehold signatory. The Treaty's signatories did not invite the state to participate, and the state did not seek participation. The state's diplomatic relations with the Five Nations are conducted, in current circumstances, on a case-by-case basis rather than under a unified framework. Breland conducts substantial commercial and limited diplomatic relations with the state. The other Five Nations conduct more limited engagements. The arrangement is, by all parties' apparent assessment, suboptimal but stable; the broader continental order has not produced a framework within which Droaam's full diplomatic integration would be politically feasible, and the parties have, in the absence of such a framework, accepted the case-by-case arrangement as the practical alternative to either fuller integration or open hostility.</p>
<p class="marginalia">Tessen of Korranberg has covered Droaam affairs for various publications since the rule's establishment. The volume is, by his own description, "as honest as the available access permitted; substantial portions of the rule's internal operations are not visible to external observers, and the volume's account is necessarily limited to what external observation can verify."</p>`
});


// ─── PRACTICAL MAGIC / NATURAL HISTORY ────────────────────────

LIBRARY.books.push({
  title: "Practical Magic for the Working Adventurer",
  author: "Felia ir'Vahn, retired Wayfinder",
  college: "drystone",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a practical manual for adventurers whose professional work requires sustained engagement with Khorvairean magical environments. The manual is intended for working professionals — Wayfinder operatives, Sentinel Marshals, Inquisitives, salvage operators, frontier traders, and the broader population whose economic survival depends on competent navigation of magical conditions — and is not intended as a theoretical treatment of the subjects it addresses. The manual's content is, accordingly, organized around the practical questions the professional environment routinely raises rather than around the theoretical structures the academic environment prefers.</p>
<h3>The Manual's Sections</h3>
<p>The manual is organized in seven sections. <em>Magical detection and identification</em>: techniques for recognizing magical effects in environments where the effects are not obvious, for distinguishing magical from non-magical phenomena in ambiguous cases, and for identifying the type and intensity of magical effects when identification is operationally important. <em>Defensive arrangements</em>: practices for maintaining basic magical defenses in field conditions, including the proper use of standard defensive items, the maintenance of personal protective protocols, and the management of magical exposure when defensive arrangements are not adequate to the conditions encountered. <em>Magical-item operation</em>: practical guidance on the operation of standard magical items in field conditions, including failure modes, maintenance requirements, and the recognition of items whose specifications are not what their sellers represented them to be. <em>Encounter management</em>: practical guidance for managing encounters with magical creatures, including approach protocols, retreat protocols, and the management of casualties when retreat is not possible without losses. <em>Communication in magical environments</em>: practices for maintaining team communication when magical interference is present, including the use of standard signaling protocols and the management of communication failure. <em>Mournland and adjacent operations</em>: a separate section addressing the specific operational requirements of Mournland and other anomalous-environment work, where standard practices are not adequate and specialized protocols are required. <em>Post-operation recovery</em>: practical guidance on the recovery of personnel whose magical exposure during operations has produced effects requiring management.</p>
<h3>The Manual's Limits</h3>
<p>The manual is, by its author's own description, an introduction rather than a comprehensive reference. The professional working environment includes circumstances the manual does not address, situations whose specifics the manual's general protocols are not adequate to manage, and challenges whose successful navigation requires specialized training the manual cannot provide. The professional reader should treat the manual as a foundation for the professional's own continuing development rather than as a complete reference.</p>
<h3>The Honest Recommendation</h3>
<p>The honest recommendation, repeated throughout the manual: when the professional encounters magical conditions whose management exceeds the professional's training, the appropriate response is to disengage and seek specialized assistance. The volumes' recurring case examples document situations in which professionals attempted to manage magical conditions that exceeded their training, with consequences that the case examples honestly describe. The case examples are, in many instances, fatal. The manual's recurring lesson is that the professional's continued survival is, in many circumstances, the manual's principal recommendation, and that recognition of one's own training limits is the professional capability that produces continued survival more reliably than any specific technical capability.</p>
<p class="marginalia">Felia ir'Vahn served the Wayfinder Foundation for thirty-two years before her retirement in 994 YK. She has, in retirement, conducted training programs at the Foundation and at various Five Nations professional associations, and the volume is, in its principal content, the published version of her standing training curriculum.</p>`
});

LIBRARY.books.push({
  title: "The Beasts of the Talenta Plains",
  author: "Aldric of Greenheart, naturalist",
  college: "balinor",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Talenta Plains contain the largest single concentration of dinosaur populations on the continent of Khorvaire and likely on the world of Eberron. This volume is a naturalist's catalog of the major dinosaur species the Plains support, with attention to their biological characteristics, their ecological relationships, and the practical considerations relevant to scholars or travelers whose work brings them into contact with the populations.</p>
<h3>The Major Species Categories</h3>
<p>The catalog distinguishes approximately forty species in the principal categories the Talenta halflings' working classifications recognize. <em>The clawfoots</em>: medium-sized predatory dinosaurs whose pack-hunting behavior is the basis for many halfling-bonded warband practices. <em>The fastieths</em>: smaller dinosaurs whose primary value is rapid mobility and whose halfling-bonded use is principally in scouting and message-running. <em>The glidewings</em>: flying or gliding dinosaurs whose halfling-bonded use is principally in aerial scouting and limited aerial combat. <em>The hammertails</em>: larger ground dinosaurs whose primary use is heavy transport and whose halfling-bonded use includes both transport and certain combat applications where the species' physical mass is operationally valuable. <em>The great-jaws</em>: the largest predatory species, whose halfling-bonded use is rare and whose untamed populations represent significant hazards in their territorial regions. <em>The grass-eaters</em>: the various herbivorous species whose populations are the ecological base supporting the predatory species and whose halfling-bonded use is principally in agricultural and transport applications.</p>
<h3>The Bonding Practice</h3>
<p>The catalog includes substantial material on the halfling bonding practices through which specific dinosaur individuals are integrated into halfling family operations. The practices are not, in their principal forms, training-based in the sense the broader continental working-animal traditions employ. The practices are partnership-based: the bonded halfling and the bonded dinosaur enter into a sustained working relationship whose terms are negotiated through methods the halfling tradition has developed over centuries, and whose successful establishment depends on the dinosaur's voluntary acceptance of the partnership rather than on the halfling's assertion of authority.</p>
<p>The practices are not transferable to non-halfling working contexts. Attempts by Five Nations parties to acquire bonded dinosaurs for use outside Talenta-aligned operational frameworks have, in documented cases, produced poor outcomes for both the dinosaurs and the acquiring parties. The catalog's section on bonded dinosaur use is, accordingly, oriented toward halfling-aligned readers and toward Five Nations readers who are working in Talenta-supported contexts rather than independently.</p>
<h3>The Traveler's Considerations</h3>
<p>The catalog's final section addresses the practical considerations relevant to non-halfling travelers whose work brings them into the Plains. The principal considerations include: recognition of the territorial signs that indicate active dinosaur populations in the immediate area; protocols for managing encounters with untamed dinosaurs whose territorial defenses are activated by the traveler's presence; protocols for interactions with halfling-bonded dinosaur teams whose warband operations the traveler may inadvertently approach; and the recommended communications with local halfling tribal authorities whose advance notice can substantially reduce the operational risks the traveler faces.</p>
<p class="marginalia">Aldric of Greenheart has conducted Plains naturalist work for the Korranberg Natural Sciences College and for various external institutions over a fifteen-year career. The volume is the consolidation of his cumulative observations and is, by his own description, "the manual I wish someone had given me when I started; the information is real and the practical guidance is hard-earned."</p>`
});


// ─── RECOVERED NOTES (additional) ─────────────────────────────

LIBRARY.books.push({
  title: "Recovered Note: The Cartographer's Last Line",
  author: "Anonymous (Mournland salvage, 997 YK)",
  college: "morridan",
  year: "found 997 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document is a folded sheet of military-issue cartographer's paper, recovered by a Wayfinder Foundation salvage expedition in the southern Mournland in 997 YK. The expedition recovered the document from the personal effects of a corpse identified, through preserved Cyran military insignia, as a senior cartographer of the pre-Mourning Cyran Royal Engineers. The document is partially legible; the reproduction below is the most coherent portion, with the illegible passages indicated.</p>
<h3>The Note</h3>
<p>"Day [illegible]. The map is wrong. I have redrawn the southern sector four times in the past week. Each redrawing produces a map that, by the morning's survey, is wrong in ways the previous evening's drawing was not. The terrain features are not stable. The river that runs through grid section seven crossed the road this morning where, yesterday, it did not approach within three miles of any road.</p>
<p>"I have asked Captain [illegible] whether the survey teams are reporting similar instabilities elsewhere. He has not answered. He has, instead, ordered me to continue the redrawings and to submit each completed sheet to the regimental command without further discussion of the underlying conditions.</p>
<p>"I am beginning to wonder whether the Mournland has stabilized at all. The official position, communicated to all survey personnel three weeks ago, is that the territory has stabilized into a permanent post-Mourning configuration that surveys can document and that maps can represent. The position was, I think, an aspiration rather than an observation. The territory has not stabilized. The territory is, by my survey instruments and my professional judgment, continuing to change.</p>
<p>"I will not write this in my official survey reports. The reports will continue to document the redrawings as if the underlying terrain were stable and as if my redrawings were corrections of cartographic errors rather than documentation of terrain instability. I am writing this note because I do not want my professional record, when this work is eventually reviewed, to suggest that I did not understand what I was observing. I understood. I was instructed to misrepresent what I observed. I complied. I am not proud of this. I am writing it down because [illegible].</p>
<p>"[illegible passage of approximately fifteen lines]"</p>
<p>"The captain has just told us that the regimental survey is being terminated and that we are to withdraw to the northern boundary tomorrow. The terrain has, by the captain's description, become 'incompatible with continued survey operations.' The captain did not specify what the incompatibility consisted of. I do not, at this point, need the specification. I am going to sleep. I will probably dream about the river that does not stay where the map puts it."</p>
<p class="marginalia">The cartographer's professional records, recovered with the document, are preserved in the Library's Mournland salvage collection. The records are consistent with the cartographer's continued professional work in the regimental survey through the period the note's content describes. The cartographer's death is not associated with the survey's termination; the post-mortem analysis suggests death by natural causes during the withdrawal operations.</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Apothecary's Confession",
  author: "Anonymous (Karrnathi origin, deposited 996 YK)",
  college: "blackdragon",
  year: "found 994 YK",
  restricted: true,
  type: "dispatch",
  content: () => `<p>This document was recovered from a residence in eastern Karrnath in 994 YK, following the resident's death by natural causes. The document was sealed in waxed parchment and stored in a hidden compartment of the resident's apothecary workspace. The resident was, by Karrnathi guild records, a licensed apothecary in active practice for thirty-six years. The document was deposited at the Library through Karrnathi diplomatic channels in 996 YK with the request that it be made available under restricted access. The Library's review board approved the restricted access on the grounds that the document's content is consistent with the deposition request's stated purposes.</p>
<h3>The Confession</h3>
<p>"To whoever finds this. I have prepared, over the course of my professional life, the following preparations whose intended uses I am here recording so that the Karrnathi authorities, should they ever come into possession of this document, may understand what was done and may, if they wish, take whatever action they consider appropriate.</p>
<p>"In the year 952, I prepared a sleeping draught for the wife of the merchant [name redacted by the Library's review board, in accordance with the deposition's terms]. The draught was, I was told, for the wife's medical use. The draught was, by the dosage I prepared, sufficient to produce death rather than sleep. The wife died on the third day after I delivered the draught. The merchant's later commercial successes, which I have observed across the subsequent decades, are consistent with the wife's removal having served his interests.</p>
<p>"In the year 961, I prepared a contact poison for [redacted]. The poison was, by my preparation, applied to a glove. The glove was, by my professional inference from subsequent events, used to produce the death of [redacted], who died of what was officially recorded as a sudden cardiac event during a meeting at his estate.</p>
<p>"[The document continues with similar entries covering the period from 952 through 988 YK. Twenty-three further events are documented. The Library's review board has redacted the names of the parties involved in accordance with the deposition's terms.]</p>
<p>"I prepared each preparation under conditions of professional confidentiality and according to specifications that the requesting parties provided. I did not, in any case, ask the parties what their preparations were for. I did not, in any case, refuse a request whose specifications were within my professional capabilities. I am, in my professional self-assessment, a competent apothecary who has produced, over the course of his career, an unknown but substantial number of human deaths through preparations that the requesting parties have used for purposes the requesting parties did not disclose to me.</p>
<p>"I am writing this confession because I am old and because I expect to die soon. I am not writing this confession because I expect forgiveness. I do not. I am writing this confession because I do not want my professional successors — the apothecaries who will, after my death, conduct their work in the same professional environment — to operate under the assumption that the professional confidentiality their guild's rules establish is a sufficient protection against the moral implications of the work they may be asked to perform. The confidentiality is not a protection. The confidentiality is a screen behind which the requesting parties operate. I am, in my own case, the screen behind which others have killed. I have done this for thirty-six years. I will be dead within the year. The deaths I have facilitated will continue to be remembered by the survivors of those I helped to kill. The remembering is not, by any reasonable measure, balanced by my own professional success or by the modest prosperity my career has produced.</p>
<p>"I do not know how to end this document. I do not have, in my professional or personal vocabulary, the words appropriate to the situation. I will simply stop writing now. The document will be where I have placed it. Whoever finds it will read it. I cannot say what I want them to do."</p>
<p class="marginalia">Trust ledger: Access to this document is restricted to senior researchers in Karrnathi professional history, magistrates of senior rank conducting reviews of historical professional conduct, and parties holding standing Trust authorization. The document's redactions are maintained in the Library's restricted records, where authorized researchers may review them under the deposition's terms. Inquiry has been logged.</p>`
});


// ─── VAULT MATERIAL (deeper) ──────────────────────────────────

LIBRARY.books.push({
  title: "The Black Index: A Reference to Forbidden Holdings",
  author: "Standing Inquiry into Restricted Materials",
  college: "tabernacle",
  year: "997 YK",
  restricted: true,
  type: "book",
  content: () => `<p>The Black Index is the Library's catalog of holdings whose general accessibility is determined to pose risks substantial enough to warrant restricted access. The Index itself is restricted. The Index lists, in summary form, the categories of holdings the Library maintains under restriction and the access protocols that govern each category. The Index does not, in the form maintained for general restricted-research access, identify specific volumes within the categories; specific volume access requires further restricted-protocol authorizations whose terms vary by category.</p>
<h3>The Categories</h3>
<p>The Index distinguishes approximately forty restricted-holding categories. The principal categories include: <em>Daelkyr-tradition materials</em>: holdings related to the daelkyr lords, their bindings, their servitor populations, and the broader Xoriat-aligned theological tradition. Access requires Tabernacle authorization. <em>Overlord-binding materials</em>: holdings related to the Overlords' bindings, their continuing operations, and the Lords of Dust networks operating against the bindings. Access requires Tabernacle authorization with additional restrictions for the most sensitive subcategories. <em>Necromantic ritual materials</em>: holdings detailing necromantic rituals whose performance specifications could be used by readers without adequate ritual training to produce serious harm to themselves or to other parties. Access requires demonstrated ritual training credentials and specific authorization. <em>Vol-line materials</em>: holdings related to the line of Vol, the apex Mark of Death, and Erandis Vol's continuing operations. Access requires Tabernacle authorization with additional restrictions. <em>Inspired and Dreaming Dark materials</em>: holdings related to the Inspired regime in Sarlona and the Dreaming Dark's continental operations. Access requires authorization from the Library's Sarlonan-affairs senior scholar. <em>Vault-key materials</em>: holdings related to the Library's own restricted-vault structures, the vault-passphrase system, and the institutional-security protocols. Access requires senior doyen authorization. <em>Pre-historical pre-binding materials</em>: holdings dating from or describing the Age of Demons, with substantial fragmentary content whose interpretation requires specialized training. Access requires Tabernacle authorization with the standing inquiry's specific approval. <em>Mournland-investigation materials</em>: holdings documenting the more sensitive Mournland-investigation findings, including findings whose disclosure could affect Treaty signatory political relationships. Access requires Wayfinder Foundation and Library coordination.</p>
<h3>The Vault Structure</h3>
<p>The Index's restricted holdings are physically distributed across multiple vault locations within the Library's institutional architecture. The vault-distribution structure reflects both physical-security considerations (the larger vaults are more difficult to compromise comprehensively but are also more difficult to protect against insider threats) and access-protocol considerations (the various categories have different authorization patterns whose efficient implementation favors category-aligned vault organization). The principal vault locations include: the Daelkyr Vault (categories 1, 7); the Necromantic Vault (categories 3, 4); the Diplomatic Vault (categories 5, 8); the Institutional Vault (category 6); and the General Restricted Vault (the remaining categories).</p>
<h3>The Access Statistics</h3>
<p>The Library maintains, under standing inquiry oversight, statistics on restricted-holding access by category and by year. The statistics indicate, over the period 994 through 997 YK, approximately 1,400 restricted-access events distributed across all categories, with the highest activity in the Daelkyr-tradition and Overlord-binding categories (collectively approximately 35% of all events) and the lowest in the Vault-key materials category (less than 1% of events, reflecting the category's restricted use to senior institutional management rather than to researchers). The patterns are consistent with the broader institutional research priorities and do not, by current oversight assessment, indicate any substantive irregularities in the restricted-access system's operation.</p>
<p class="marginalia">Trust ledger: This Index is restricted to senior Tabernacle scholars, to standing-inquiry members, and to senior Library doyens. The Index's content is not to be discussed in unsecured settings. Inquiry has been logged. The vault passphrase is maintained under separate authorization protocols and is not reproduced in the Index.</p>`
});
LIBRARY.books.push({
  title: "Adar: The Mountain Refuge",
  author: "Visiting Scholar Iridian Sutathra (kalashtar)",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Adar is the mountain region in the southern interior of Sarlona, isolated from the surrounding Riedran lowlands by terrain whose physical character has, for centuries, made systematic Inspired conquest infeasible. Adar is, in current circumstances, the principal continuing refuge for the kalashtar bloodlines whose continued existence on Sarlona requires protection from the Inspired regime's standing assassination operations. This volume describes Adar's contemporary configuration and the strategic position the refuge occupies in the broader Sarlonan political environment.</p>
<h3>The Geography</h3>
<p>Adar comprises approximately fifty thousand square miles of mountain terrain in the southern Sarlonan interior. The terrain's principal features include the Adaran Spine, a continental-scale mountain chain whose elevation and weather patterns make standard military operations impractical; the high valleys, which provide the refuge's habitable territory and most of its agricultural production; and the surrounding mountain peripheries, which provide defensive depth against Riedran incursions and which are, in the broader inter-Adaran strategic posture, the principal locations of the refuge's defensive military arrangements.</p>
<h3>The Population</h3>
<p>Adar's population comprises three principal groups. <em>The kalashtar lineages</em>: approximately eight thousand individuals, distributed across the major valley settlements, whose continued existence is the refuge's principal strategic purpose. <em>The Adaran human population</em>: approximately one hundred and fifty thousand individuals, descendants of pre-Inspired Sarlonan populations whose ancestors withdrew to Adar during the Inspired regime's consolidation period and whose subsequent generations have maintained the refuge's broader civilian society. <em>The migratory and refugee populations</em>: smaller numbers of individuals whose presence in Adar reflects continuing flight from Riedran territories, whose populations vary by year as Riedran internal pressures produce larger or smaller refugee flows.</p>
<h3>The Defensive Posture</h3>
<p>Adar's defensive posture is principally passive. The refuge does not, in current circumstances, conduct military operations against Riedran territories. The refuge does maintain defensive arrangements adequate to repel the Riedran incursions that the Inspired regime conducts on irregular schedules. The defensive arrangements include both conventional military forces (organized into formations the Adaran human population substantially staffs) and the kalashtar-aligned arcane and counter-quori capabilities that the kalashtar lineages provide. The combined defensive structure has, in the documented incursion records, successfully repelled all Riedran incursions of the past two centuries.</p>
<h3>The Strategic Question</h3>
<p>Adar's continuing existence raises strategic questions that the Inspired regime has not, in current circumstances, definitively resolved. The regime has the resources to undertake a sustained campaign against Adar that would, by available analysis, eventually succeed despite the refuge's defensive arrangements. The regime has, throughout the Inspired period, declined to undertake such a campaign. The reasons for the declination are not, in available external analysis, fully clear; the most defensible reading is that the regime considers Adar's continued existence acceptable as long as the refuge does not threaten Riedran internal stability through external operations. The arrangement is, in this reading, a stable equilibrium in which both parties accept restrictions on their operational scope in exchange for the avoidance of escalations whose costs neither party considers acceptable.</p>
<p class="marginalia">Visiting Scholar Iridian Sutathra is the kalashtar refugee whose earlier volume on the kalashtar tradition is held in the Tabernacle's collection. The current volume reflects her continuing contact with Adaran kalashtar communities through correspondence channels whose specifics she does not document in the published text. The volume represents, by Library assessment, the most substantive Khorvairean publication on Adar available outside specialized intelligence circles.</p>`
});

LIBRARY.books.push({
  title: "The Sulatar: Fire-Bound Inheritance of the Cul'sir Dominion",
  author: "Visiting Scholar Brell ir'Vahn",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Sulatar are the fire-aligned giant population of Xen'drik whose contemporary continuation in scattered communities across the continent's interior represents, by available archaeological and theological evidence, the only surviving Cul'sir Dominion-derived population whose technical and cultural traditions have been preserved across the post-fall period without catastrophic degradation. The Sulatar are not, by any reasonable assessment, a continuation of the broader Dominion civilization; they are a specialized fragment whose preservation reflects the distinctive resources their fire-binding tradition provided. This volume surveys the Sulatar's contemporary configuration and the historical inheritance that distinguishes them.</p>
<h3>The Fire-Binding Tradition</h3>
<p>The Sulatar tradition is, in its principal religious-arcane content, a tradition of binding fire elementals into sustained service relationships. The tradition's pre-fall origins are documented in surviving inscriptions whose decipherment indicates that the Sulatar were, in the late Dominion period, a specialized priestly caste whose ritual work was central to the Dominion's elemental-binding capabilities. The tradition's post-fall continuation reflects the practical advantages the fire-binding capabilities provided to populations attempting to survive in the post-fall environmental conditions; the Sulatar communities were able to maintain technical capabilities (forging, ceramics, certain agricultural practices) that the broader giant population progressively lost as the post-fall degradation accumulated.</p>
<h3>The Contemporary Communities</h3>
<p>Contemporary Sulatar communities are scattered across the Xen'drik interior in approximately twenty documented settlements, with additional smaller settlements that have not been definitively documented by external observation. The communities maintain limited cultural and trade connections with one another; the connections are not adequate to constitute a unified Sulatar polity, but are adequate to maintain the tradition's continuity across geographic separation. The communities' total population is, by external estimates, approximately fifteen thousand individuals — a substantial reduction from the pre-fall Sulatar population but a stable continuation that has, by available evidence, not declined further over the past several centuries.</p>
<h3>The External Engagement</h3>
<p>Sulatar communities engage selectively with external visitors. The communities accept some Wayfinder Foundation contact under negotiated terms; they accept very limited dragonmarked-house commercial engagement, principally with House Tharashk in matters relating to dragonshard prospecting in Sulatar-held territories; they reject most other external engagement, including attempts by Khorvairean scholarly institutions to establish sustained study programs. The Korranberg-Wayfinder Xen'drik expeditions of the past decade have produced more substantive Sulatar contact than previous Khorvairean efforts, but the contact remains limited and the communities' willingness to permit further engagement appears, by recent indications, to be approaching whatever ceiling the communities have collectively determined.</p>
<h3>The Strategic Position</h3>
<p>The Sulatar are, by my own assessment, the single most important continuing source of authentic Dominion-tradition material on Eberron. The communities' preserved arcane practices, their preserved technical capabilities, and their preserved cultural-religious frameworks together constitute a body of material that exceeds, in scholarly significance, any other surviving Dominion-derived resource. The Sulatar's reluctance to engage with external scholarship is, by external observation, principally protective; the communities have, across the post-fall millennia, observed that external engagement has more often produced exploitation than benefit, and their contemporary reluctance reflects this accumulated experience rather than ideological hostility to external contact.</p>
<p>The Sulatar will, in the longer view, either establish more sustained external engagement on terms they consider acceptable, or they will continue their selective-engagement policy until external pressures produce changes in either the Sulatar communities or the external engaging parties. The first outcome would substantially benefit Khorvairean scholarship. The second outcome would preserve the Sulatar's institutional autonomy at the cost of continuing limited scholarly access. Neither outcome is, in current circumstances, predictable.</p>
<p class="marginalia">Visiting Scholar Brell ir'Vahn's Xen'drik expedition work has produced, over the past decade, more substantive Sulatar contact than any previous external scholar has achieved. The contact has been conducted under terms the Sulatar communities specified, including limitations on the public disclosure of certain materials whose preservation the communities consider their internal responsibility. The volume's content is, by his description, "what I was permitted to publish; what I was not permitted to publish is, in many cases, more substantive, but the Sulatar's terms are terms I have agreed to honor."</p>`
});

LIBRARY.books.push({
  title: "Riedran Daily Life: An Account of Sustained Resignation",
  author: "Diplomatic Observer Yara d'Phiarlan",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a companion to my earlier survey of Sarlona's political configuration. The earlier volume addressed the Inspired regime's structural features and the broader continental position. This volume addresses the more difficult question of what daily life is like for the ordinary Riedran population whose participation in the regime is the substrate on which the regime's continuing operation depends. The volume is, by my own assessment, less satisfactory than the earlier survey; the questions are harder to answer, my access during the observer period was limited, and what I am able to say is, in important respects, less than what an honest treatment would require.</p>
<h3>The Surface Observation</h3>
<p>Riedran daily life, by surface observation, is orderly. The cities operate. The markets function. The food is adequate. The streets are safer than the streets of any major Khorvairean city. Crime against persons is, by available statistics and by my own observation, dramatically lower than in the Five Nations. Crime against property is similarly lower. The population goes about its affairs with what appears, to the external observer, to be ordinary engagement in ordinary tasks.</p>
<h3>The Subsurface Observation</h3>
<p>The subsurface observation is more troubling. The population's engagement is not, by closer examination, ordinary in the way Five Nations engagement is ordinary. The Riedran population does what its tasks require. The population does not, in most observable cases, exceed those requirements. Spontaneous social interaction beyond functional necessity is rare. Public spaces are not, in most cases, used for the purposes Five Nations public spaces serve — the gatherings, the lingering conversations, the casual political exchanges that animate Khorvairean civic life are simply not present. People work. People go home. People sleep. People work again. The intervals between are filled with the kinds of activity that consume time without producing the kind of personal development or social engagement that Five Nations life supports.</p>
<h3>The Children</h3>
<p>The most disturbing single observation, in my four years of Riedran residence, was the children. Riedran children do not, by my observation, play the kinds of games Five Nations children play. They do play; play is not absent. The play is, however, structured. The structures appear to be regime-encouraged. The play I observed in Riedran public parks was, in nearly all cases, organized around themes consistent with the regime's broader civic narratives — historical celebrations, patriotic narratives, theological motifs aligned with the Path of Inspiration. I did not observe, across four years of residence, the kind of unstructured, conflictual, imaginative play that characterizes Five Nations children's social development.</p>
<p>The implication is not, in any simple sense, that Riedran children are unhappy. The implication is that Riedran children are being raised in environments whose structural features systematically reduce the development of the cognitive and emotional capacities that, in Five Nations cultures, are the foundation of independent adult judgment. The reduction is not, by my observation, recognized by the children's parents or by the broader population as a problem; the reduction is the cultural baseline.</p>
<h3>The Honest Assessment</h3>
<p>I cannot, in this volume, definitively characterize Riedran daily life's overall quality. The population is materially comfortable by the standards Riedran provisions support. The population is socially constrained in ways that no Five Nations population would accept if the constraints were openly proposed. The population is, by my observation, not visibly unhappy in the moment-to-moment sense — but the observable absence of unhappiness may reflect, in some degree, the systematic absence of the kinds of expectations whose unfulfillment would produce the unhappiness Five Nations cultures recognize.</p>
<p>What I can say with confidence is that Riedran daily life is not, in any honest sense, the daily life Five Nations cultures provide. What it is, instead, requires categories of analysis that Five Nations scholarship has not adequately developed. The volume's principal recommendation is that the development of those categories should be a continuing scholarly priority, and that the recommendations of any external party regarding Riedran affairs should defer engagement with Riedran political-structural questions until the daily-life categories are better developed.</p>
<p class="marginalia">Yara d'Phiarlan served as a Sivis-credentialed diplomatic observer in Riedra from 989 to 992 YK. The volume's research period overlaps with that of her earlier survey volume; the volumes' separation reflects her assessment that the political-structural and daily-life questions required separate treatments rather than a single combined treatment.</p>`
});


// ─── INDIVIDUAL DAELKYR LORDS ─────────────────────────────────

LIBRARY.books.push({
  title: "Belashyrra: The Lord of Eyes",
  author: "Standing Inquiry into Aberrant Magic",
  college: "tabernacle",
  year: "997 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume is one of the standing inquiry's series of individual-lord studies on the six named daelkyr lords. The series is restricted on the principle that detailed daelkyr-lord information is not appropriate for general circulation; the volumes are produced principally for senior Tabernacle scholars, Gatekeeper-affiliated researchers, and authorized inquisitive operatives whose work requires the specialized information the volumes consolidate. This volume addresses Belashyrra, whose binding is, by current Gatekeeper assessment, in the second-most-stable condition of the six named lords.</p>
<h3>What Belashyrra Is</h3>
<p>Belashyrra is the daelkyr lord whose theological-arcane portfolio is centered on vision, perception, and the systematic distortion of perceptual processes. The lord's creations include the beholders (the floating multi-eyed aberrations whose continued populations on Eberron are documented in scattered locations), the gauths (smaller beholder-related aberrations), and various lesser optic-aberrations whose combined effects on Eberron's broader aberrant population represent a substantial fraction of the total daelkyr-tradition aberrant presence. The lord's name in the Goblin tongue means, approximately, "the eyes that watch from the wrong place"; the translation is approximate because the underlying concept is not fully translatable into Common.</p>
<h3>The Binding</h3>
<p>Belashyrra's binding is maintained at a sealed location in the deep strata beneath the Shadow Marches. The location's specific position is preserved in Gatekeeper records under the standing access protocols that govern all named-lord binding locations. The binding's structural condition is, by current Gatekeeper assessment, second among the six named lords in stability — superior to the Dyrrn binding (whose stress is the principal current Gatekeeper concern), superior to the Avassh binding (whose recent reinforcements are under continuing assessment), comparable to the Valaara binding, less stable than the Orlassk binding (the most stable of the six), and comparable in current condition to the Kyrzin binding (which is, however, sufficiently under-documented that direct comparison is partial).</p>
<h3>The Operational Concerns</h3>
<p>The standing inquiry's operational concerns regarding Belashyrra are concentrated in three areas. <em>The beholder population maintenance</em>: the surviving beholder populations on Eberron, while small, represent the lord's principal continuing surface presence and require continuing monitoring to ensure that population maintenance does not produce unanticipated aggregations. <em>The optic-aberration cult activity</em>: small but active cult organizations operate, principally in urban Khorvairean territories, whose ritual practices include various forms of perceptual-distortion work that draw, in attenuated form, on Belashyrra-tradition methods. The cults are typically suppressed by ordinary law-enforcement methods when detected; the standing inquiry maintains catalogs of detected cults and assists in suppression operations where its specialized knowledge is operationally useful. <em>The binding-stress monitoring</em>: the Gatekeepers maintain the principal binding-stress monitoring; the standing inquiry conducts cross-validating monitoring that uses Tabernacle-specific theological-divinatory methods, with results reported to the Gatekeeper-Tabernacle coordinating committee on annual schedules.</p>
<h3>The Current Assessment</h3>
<p>Belashyrra's current operational profile is, by the inquiry's assessment, stable. The binding is holding. The surface aberrant presence is being managed at sustainable levels. The cult activity is, while continuing, not expanding to levels that exceed current suppression capacity. The lord's current concerns are not, by current assessment, requiring extraordinary interventions beyond the standing maintenance operations. The assessment will be reviewed on the standard annual schedule.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior Tabernacle scholars, Gatekeeper-affiliated researchers, authorized inquisitive operatives, and parties holding standing Trust authorization. The volume's content is not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Dyrrn the Corruptor: A Study of the Most-Stressed Binding",
  author: "Standing Inquiry into Aberrant Magic",
  college: "tabernacle",
  year: "998 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume continues the standing inquiry's individual-lord series, addressing Dyrrn — the daelkyr lord whose binding is, by current Gatekeeper and Tabernacle joint assessment, the most stressed of the six named lords. The volume's restrictions are more comprehensive than those applied to the other lord studies; access is limited to senior Tabernacle scholars, the Gatekeeper-Tabernacle coordinating committee's named members, and authorized parties whose access is approved on case-by-case basis. The restrictions reflect the operational concerns the volume's content directly addresses.</p>
<h3>What Dyrrn Is</h3>
<p>Dyrrn is the daelkyr lord whose theological-arcane portfolio is centered on consciousness, mental manipulation, and the systematic corruption of cognitive processes. The lord's creations include the mind flayers (the most prominent current surface aberrant population in the daelkyr tradition), the dolgrim (the goblin-derived aberrations created during the daelkyr-Dhakaani conflict period), the dolgaunts (more sophisticated cognitive-manipulation aberrations operating principally in deep strata), and various lesser tendril-aberrations whose continued surface presence on Eberron requires sustained Gatekeeper attention. The lord's name in the Goblin tongue means, approximately, "the one who corrupts thought"; the translation is, again, approximate.</p>
<h3>The Binding's Current Condition</h3>
<p>Dyrrn's binding is maintained at a sealed location in the deep strata beneath the Shadow Marches, in proximity to (though distinct from) the Belashyrra binding location. The binding's structural condition has, over the past several decades, exhibited stress patterns that exceed the Gatekeeper baseline expectations. The stress is not, in current assessment, indicative of imminent binding failure; the stress is indicative of accumulated pressure that is producing continuing reinforcement requirements at rates exceeding the historical baseline. The Gatekeepers' Dyrrn-focused operations consume, by current assessment, approximately forty percent of the tradition's total active maintenance resources — a disproportionately high fraction reflecting the binding's stressed condition.</p>
<h3>The Operational Concerns</h3>
<p>The standing inquiry's operational concerns regarding Dyrrn are concentrated in five areas. <em>The mind flayer surface population</em>: surviving mind flayer populations operate in scattered surface and near-surface locations, principally in Sharn lower-ward territories and in certain Mror Holds delvings. The populations are subject to standing inquiry monitoring and to coordinated suppression operations conducted by inquisitive networks under standing inquiry direction. <em>The dolgrim and dolgaunt populations</em>: these populations operate principally in deeper territories and are managed through Gatekeeper-led containment operations rather than through standing inquiry direct action. <em>The Dyrrn-aligned cult activity</em>: cult organizations whose ritual practices draw on Dyrrn-tradition methods are more numerous than those associated with any other named lord, reflecting the lord's surface accessibility relative to the others. <em>The cognitive-manipulation contamination patterns</em>: certain cognitive-manipulation phenomena observed in Khorvairean populations exhibit patterns consistent with attenuated Dyrrn-tradition influence; the inquiry monitors these patterns through coordinated divinatory and observational methods. <em>The binding stress reinforcement</em>: the inquiry coordinates with the Gatekeepers on the binding stress reinforcement work, providing cross-validating divinatory assessments and maintaining the institutional records the reinforcement work requires.</p>
<h3>The Long-Term Question</h3>
<p>The Dyrrn binding's current trajectory is, by the inquiry's longer-view assessment, sustainable in current circumstances but not indefinitely sustainable without changes in either the Gatekeeper resource base or the broader theological-political environment that the binding's maintenance depends on. The Gatekeeper resource base is, as documented in Druid-Elder Vorrak's recent volume on the Gatekeeper tradition, on a slow declining trajectory. The broader environment shows no current indication of changes that would increase the Gatekeepers' available support. The binding's maintenance therefore depends on factors whose current trajectories are not, in current circumstances, encouraging.</p>
<p>The inquiry's standing recommendation is that the broader continental theological-political community should, in coming years, develop frameworks for additional support to the Gatekeeper tradition's Dyrrn-focused work. The frameworks would require coordination across multiple parties whose current cooperation patterns do not naturally produce such coordination. The inquiry is engaged in continuing development of proposed framework structures and is consulting with selected parties on the proposals' feasibility.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior Tabernacle scholars, the Gatekeeper-Tabernacle coordinating committee, and parties holding standing Trust authorization with the standing inquiry's specific approval for this volume. The volume's content is not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});


// ─── ARGONNESSEN / DRAGONS ────────────────────────────────────

LIBRARY.books.push({
  title: "The Tiamat Cult: Five Heads, Five Servitudes",
  author: "Brother Kerrick of the Cathedral of the Cogs",
  college: "tabernacle",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Tiamat tradition is the principal evil-aligned mortal religious tradition associated with the dragon civilization of Argonnessen. The tradition's core theological claim is that Tiamat — the five-headed chromatic-dragon deity recognized in various scattered theological traditions across Eberron — represents an active deity whose worship produces meaningful supernatural relationships between worshippers and the deity, and whose service offers practical benefits to mortals whose commitments to the tradition are sustained. This volume surveys the tradition's contemporary configuration and addresses the principal questions the tradition's continuing operation raises.</p>
<h3>The Five Heads</h3>
<p>Tiamat is, in the tradition's iconography, depicted as a five-headed dragon whose five heads correspond to the five chromatic dragon types: red (the head of conquest), blue (the head of treachery), green (the head of patience), black (the head of cruelty), and white (the head of fury). The five heads represent, in the tradition's theological framework, five distinct modes of supernatural service that worshippers may align with according to their personal aptitudes and operational circumstances. The framework's flexibility is, by external observation, one of the tradition's principal recruitment advantages; potential adherents can find, in the tradition's framework, alignment configurations that match their existing temperaments without requiring fundamental personal transformation.</p>
<h3>The Cult Operations on Eberron</h3>
<p>Tiamat-cult operations on Eberron are concentrated principally in the Demon Wastes (where the cult's relationship with the broader Wastes-aligned populations is established and where the cult's principal liturgical sites are maintained), in scattered locations in the Lhazaar Principalities (where the cult operates under various commercial and political covers), and in smaller pockets across the broader continent where the tradition's adherents have established local communities. The operations are not, by available evidence, centrally coordinated; the cult operates as a network of locally-organized communities rather than as a unified hierarchical structure.</p>
<h3>The Argonnessen Connection</h3>
<p>The cult's connection with Argonnessen is contested. The tradition's own theological materials assert direct connection: that the Tiamat deity is the active patron of certain dragon factions within Argonnessen, and that the cult's surface operations are conducted with the awareness and (in some cases) the active support of those dragon factions. The available external evidence partially supports the connection; certain dragon factions do appear, by intelligence assessments, to have provided resources and direction to specific cult operations at specific times. The full scope of the connection is, however, not fully documented in available materials, and the responsible scholarly position is that the connection is real but partial rather than the comprehensive integration the tradition's own materials assert.</p>
<h3>The Threat Assessment</h3>
<p>The Tiamat cult's threat to the broader Khorvairean order is, by my own assessment, moderate but persistent. The cult's operations do not, in current circumstances, produce continental-scale threats. The cult's continuing existence does, however, provide ongoing recruitment opportunities for parties whose theological-political alignments can be developed in directions hostile to the broader continental order; the cult's contemporary operations have produced, over the past several decades, a small but continuing flow of adherents whose subsequent activities in various Khorvairean territories have caused harms whose cumulative impact is non-trivial. The threat assessment supports continued monitoring and selective suppression rather than comprehensive elimination operations; the latter would require resources exceeding the threat's current scale and would, by inquiry assessment, produce diminishing returns relative to the costs involved.</p>
<p class="marginalia">Brother Kerrick's volume on the Tiamat cult is the most substantive recent Khorvairean treatment of the tradition. The volume is held in unrestricted circulation on the principle that broad understanding of the cult's operations contributes more to the cult's containment than restricted access would; the cult's principal recruitment vulnerabilities are addressed through the kind of broad public awareness the volume's circulation supports.</p>`
});

LIBRARY.books.push({
  title: "Eberron, Khyber, Siberys: A Cosmological Essay",
  author: "Magus-Theologian Pellion ir'Rhaan",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The progenitor wyrms — Eberron, Khyber, and Siberys — are, in the dominant Khorvairean cosmological tradition, the three primordial dragons whose pre-Eberron existence and conflict produced the cosmic conditions that current Eberron embodies. The tradition's principal theological claim is that the planet of Eberron is the body of the wyrm Eberron, the planar layers below are the body of Khyber (containing Khyber-as-prison and the bound demons within it), and the Ring of Siberys above is the body of Siberys (the dragon whose blood produced the dragonshards that fall to Eberron's surface). This volume offers a cosmological essay on the tradition and addresses the principal interpretive questions the tradition raises.</p>
<h3>The Standard Reading</h3>
<p>The standard reading holds that the three wyrms were, in some pre-cosmological sense, primordial beings whose initial relationships were collaborative but whose eventual relationships became conflictual. The conflict's resolution produced the current cosmological arrangement: Eberron's binding of Khyber within Khyber's own substance, Siberys's distance above the resulting arrangement, and the manifestation of the various supernatural processes that current Eberron exhibits as expressions of the three wyrms' continuing presences. The standard reading treats the wyrms as, in some operational sense, currently existing rather than mythological figures of a settled past.</p>
<h3>The Implications</h3>
<p>The standard reading's implications, if accepted, are substantial. The reading positions the planet of Eberron as a bound or sleeping divine being whose existence as a planet is, in some real sense, secondary to its existence as the wyrm. The reading positions the various supernatural processes Eberron's surface exhibits — the dragonmarks, the manifest zones, the arcane fields, the planar relationships — as expressions of the wyrms' continuing operations rather than as independently-existing cosmic features. The reading positions mortal civilization as occupying a relationship with the wyrms whose theological character should, in principle, shape mortal civilization's understanding of its own position in ways that current Khorvairean civilization, by my own assessment, has not adequately developed.</p>
<h3>The Skeptical Reading</h3>
<p>The skeptical reading holds that the progenitor-wyrm tradition is, in essence, a mythological framework whose narrative content reflects mortal attempts to make sense of cosmological features whose actual origins are not connected to the wyrm-narrative the tradition asserts. The skeptical reading does not deny the cosmological features; it denies the wyrm-explanation of them. The skeptical reading proposes alternative explanations whose specific content varies by skeptical scholar but which generally invoke either purely natural cosmological processes or differently-framed theological frameworks that do not require the progenitor wyrms as theological actors.</p>
<h3>My Position</h3>
<p>I will defend, in this essay, a partial reading. The cosmological features the tradition addresses are real. The features' theological character is real. The progenitor-wyrm framework is, in my own assessment, the most adequate available framework for thinking about the features' theological character, but the framework should be held with appropriate epistemic humility — as the best framework currently available rather than as a definitively-established cosmological account.</p>
<p>The alternative skeptical readings have, in my own assessment, not produced more adequate frameworks. The skeptical readings tend to dissolve the theological character of the features into either natural cosmology (which fails to address the theological character that is observably real) or alternative theological frameworks (which face the same epistemic limitations the progenitor-wyrm framework faces, without offering compensating explanatory advantages).</p>
<p>The responsible scholarly position is, I propose, sustained engagement with the progenitor-wyrm framework's interpretive possibilities while acknowledging the framework's own evidentiary limits. The framework will probably be revised in coming centuries as new evidence accumulates. The framework will probably not be discarded; the cosmological features it addresses are too substantial for any responsible cosmological tradition to ignore.</p>
<p class="marginalia">Pellion ir'Rhaan continues active publication in retirement. The volume is, by his own description, "the cosmological essay I have been planning to write for forty years and have, until now, been finding excuses to defer; the deferral was, I now think, a sign that the topic is too substantial to address adequately in any single attempt, and that the attempt is worth making despite that recognition."</p>`
});

LIBRARY.books.push({
  title: "The Talenta Hunt: Argonnessen's Surface Operations Through Hunting Drakes",
  author: "Inquisitive Tessen d'Medani",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Talenta Hunt is the contemporary phenomenon, documented over the past several decades, by which Argonnessen-affiliated dragon factions conduct continuing surface operations on Eberron through the deployment of dragon-aligned hunting drakes operating across the Talenta Plains and adjacent territories. The Hunt is not, in any obvious sense, a hostile operation against the broader Khorvairean order; it is, instead, an instructional operation, in which dragon-faction observers use the hunting deployments to develop the capabilities of younger dragons whose continuing development their factions are sponsoring. This volume documents the Hunt's contemporary configuration and addresses the questions the operation raises for Khorvairean intelligence and political operations.</p>
<h3>The Operational Form</h3>
<p>The Hunt's operational form is consistent across the documented incidents. A small group of dragon-aligned hunting drakes — typically three to five drakes, with operational characteristics indicating substantial dragon-tradition modifications from the standard hunting-drake baseline — conducts hunting operations across portions of the Talenta Plains over periods ranging from several days to several weeks. The operations are typically conducted in remote areas where contact with halfling tribal populations is minimal. The operations end with the drakes' withdrawal through arrangements that available investigation has not been able to fully document; the drakes simply cease to be observed in the territory, and external evidence supports the inference that their withdrawal involves planar-transit or arcane-displacement methods rather than ordinary surface movement.</p>
<h3>The Sponsoring Factions</h3>
<p>The dragon factions sponsoring the Hunt operations are, by intelligence assessment, drawn from several Argonnessen factions whose continuing development of younger dragons benefits from the operational training the Hunt provides. The factions' identities are not, in current intelligence assessment, fully characterized; the available evidence supports the inference that multiple factions sponsor different Hunt incidents rather than a single coordinated faction's continuous operation. The Chamber's role in the Hunt's coordination is contested; some intelligence assessments treat the Hunt as a Chamber-coordinated training program, others treat it as a multi-faction phenomenon that the Chamber observes without directly coordinating.</p>
<h3>The Halfling Position</h3>
<p>The halfling tribal populations affected by the Hunt operations have, by available evidence, developed accommodations that the broader Khorvairean intelligence community has not fully appreciated. The halflings recognize the Hunt phenomenon. The halflings have established protocols by which Hunt operations are observed without direct intervention. The halflings have, by available evidence, established communication channels with at least some sponsoring dragon factions through which the Hunt operations' impact on halfling populations is managed. The communication channels are not, in any documented sense, formal diplomatic relationships; they are practical operational arrangements that limit the Hunt's costs to the halfling populations while permitting the Hunt's continuing operation.</p>
<h3>The Implications</h3>
<p>The Hunt's continuing operation has implications for the broader Khorvairean intelligence environment that have not, in current circumstances, been adequately incorporated into Five Nations strategic assessments. The Hunt indicates that Argonnessen's surface operations on Eberron are more sustained, more institutionalized, and more directly coordinated than the standard intelligence framework recognizes. The Hunt indicates that the halfling tribal populations have established working relationships with Argonnessen factions that exceed any working relationships the Five Nations governments have established. The Hunt indicates that surface-operations capabilities that the Khorvairean intelligence framework has assumed to be unavailable to the dragons are, in fact, routinely deployed.</p>
<p>The implications support, in my own assessment, a substantial expansion of Argonnessen-focused intelligence resources within Five Nations operations and within the dragonmarked-house intelligence networks. The expansion has not, in current circumstances, occurred. The reasons for the non-expansion include resource constraints, institutional inertia, and the broader pattern by which intelligence services tend to address visible threats more readily than they address the longer-view strategic questions the Hunt's continuing operation raises.</p>
<p class="marginalia">Inquisitive Tessen d'Medani's investigation has been conducted under standing Medani contracts with several Five Nations governments and with selected dragonmarked houses. The volume represents the externally-sharable portion of the investigation's findings; additional findings are held under confidential terms.</p>`
});


// ─── AUNDAIRIAN ARCANE CULTURE ────────────────────────────────

LIBRARY.books.push({
  title: "Arcanix: A History of the Continental Magical Academy",
  author: "Master-Magus Aelyn ir'Velderhast",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Arcanix is the principal magical academy of the Aundairian Crown and the most prestigious magical educational institution on Khorvaire. The academy was founded in approximately 760 YK as the formal continuation of older Aundairian arcane educational traditions; the academy's contemporary operations represent the consolidation of those traditions into a unified institutional framework whose continued operation has produced, across more than two centuries, the substantial majority of Khorvaire's professionally-credentialed arcane practitioners. This volume traces the academy's institutional history and documents the principal features of its contemporary operations.</p>
<h3>The Founding Traditions</h3>
<p>Arcanix's founding traditions draw on multiple older Aundairian arcane educational arrangements. <em>The Court Academies</em>: the various royal-affiliated arcane educational institutions that the Aundairian crown maintained from the founding of Galifar through the eighth century YK. <em>The Wizard's Cabal</em>: an older voluntary association of senior Aundairian arcane practitioners whose collective traditions were partially incorporated into Arcanix's founding structure. <em>The Magewright Guilds</em>: practical-arcane traditions oriented toward applied magical work whose contributions to Arcanix's curriculum have shaped the academy's distinctive applied-arcane orientation. The merger of these traditions into a unified academy was not, by available evidence, smooth; the founding period included substantial institutional conflict whose resolution required several decades.</p>
<h3>The Contemporary Curriculum</h3>
<p>Arcanix's contemporary curriculum is organized in five principal divisions. <em>Theoretical arcane studies</em>: the curriculum's foundational division, addressing magical-theoretical content whose mastery is required for advancement to the more applied divisions. <em>Applied arcane studies</em>: division addressing practical arcane work in the various major applied areas — protective magic, divinatory magic, transmutation magic, summoning and binding magic, and related applied specializations. <em>Arcane research methodology</em>: division addressing the methods by which novel arcane work is developed; the division's continuing operation has produced the substantial majority of original Khorvairean arcane research over the past century. <em>Arcane history and ethics</em>: division addressing the historical development of the arcane traditions and the ethical questions that contemporary arcane practice raises. <em>Master-track specialization</em>: division addressing the higher-tier specialized work that distinguishes master-grade practitioners from journeyman-grade practitioners.</p>
<h3>The Crown Relationship</h3>
<p>Arcanix's relationship with the Aundairian Crown is institutionally close but operationally complex. The Crown provides the academy's principal endowment, exercises substantial appointment authority over senior academy positions, and uses academy resources for Crown-aligned arcane research and operations. The academy maintains, however, substantial institutional autonomy in its educational and research operations; the Crown's interventions in academy affairs are, by long convention, limited to questions of policy direction rather than operational details. The conventional limits have been tested at various points in the academy's history; the limits have, in most cases, been preserved through periods of Crown-academy tension whose specific resolutions vary by case.</p>
<h3>The Last War and After</h3>
<p>The Last War period produced substantial pressures on Arcanix's operations. The academy's continued production of arcane practitioners during the war made the academy a strategic asset whose operations the Crown directed more substantively than peacetime conventions would have permitted; the academy's wartime curriculum was modified to emphasize applied military-arcane work; and the academy's research operations were reoriented toward Crown-priority projects whose specifics are, in some cases, still maintained under restricted access. The post-war reorganization has, by available evidence, restored most of the pre-war institutional arrangements while preserving certain modifications the wartime period produced. The post-war academy is, by my own assessment, somewhat more closely integrated with Crown operations than the pre-war academy was; the modifications are not, by current evidence, immediately reversible.</p>
<p class="marginalia">Master-Magus Aelyn ir'Velderhast served on Arcanix's senior faculty for thirty-one years before her retirement in 994 YK. The volume is published with the formal authorization of the academy and represents the most substantive recent academy-published account of its institutional structure to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "The Wizards' War: Aundairian Arcane Operations in the Last War",
  author: "Anonymous (Aundairian Royal Eyes provenance)",
  college: "drystone",
  year: "deposited 996 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This document was deposited at the Library through Aundairian diplomatic channels in 996 YK. The deposit terms specified restricted access on the principle that the document's content addresses operational arcane methods whose general circulation is not consistent with continuing Crown operational interests. The document treats the Aundairian Crown's wartime arcane operations with substantial candor; the Library's review board considered the document's content carefully and concluded that the restricted-access terms were appropriate and that the document's preservation in the Library's restricted holdings served broader scholarly interests adequately to justify the deposit.</p>
<h3>The Strategic Position</h3>
<p>Aundair's wartime strategic position was substantially shaped by the Crown's arcane capabilities. Aundair's conventional military forces were, throughout the war, smaller than those of Karrnath and Breland; Aundair's arcane forces were, throughout the war, the most capable of any Five Nations forces. The strategic configuration produced characteristic Aundairian operational doctrine: arcane-heavy operational concepts in which limited conventional forces operated under arcane support sufficient to compensate for their numerical disadvantages relative to opposing forces.</p>
<h3>The Operational Doctrine</h3>
<p>Aundairian wartime arcane doctrine emphasized five principal operational areas. <em>Combat magic at scale</em>: deployment of arcane forces in formations whose combined effects exceeded the sum of individual practitioners' capabilities. The doctrine's principal application was in defensive operations against superior Karrnathi conventional forces, where arcane-heavy positions could be held against attacking forces of substantially greater conventional strength. <em>Strategic divination</em>: extensive use of divinatory operations to develop strategic intelligence about opposing forces' positions, intentions, and capabilities. The Aundairian divinatory operations exceeded those of the other Five Nations in scope and accuracy. <em>Counter-divination</em>: corresponding extensive use of counter-divinatory operations to limit opposing forces' intelligence about Aundairian positions and operations. <em>Logistic arcane support</em>: arcane support for the logistic requirements that wartime operations produced, including arcane preservation of food supplies, arcane communication systems, and arcane medical-support operations. <em>Specialized arcane operations</em>: targeted operations whose specific methods are not, in this document, fully described, addressing operational requirements that the conventional operational categories did not adequately cover.</p>
<h3>The Specific Methods</h3>
<p>The document describes, in substantial technical detail, the specific arcane methods deployed across the operational areas. The descriptions include both the methods that were operationally successful and the methods that were attempted but produced inadequate operational results. The descriptions' technical detail is, by Library review board assessment, sufficient that general circulation could enable parties whose intentions are not aligned with Crown interests to develop similar operational capabilities. The restricted-access terms reflect this assessment.</p>
<h3>The Failures</h3>
<p>The document is, in its treatment of operational failures, substantially candid. The principal documented failures include: arcane operations that produced friendly-force casualties in proportions exceeding the operational benefits the operations were intended to provide; arcane operations that were detected by opposing counter-divinatory work and that were, accordingly, redirected by opposing forces in ways that produced operational outcomes opposite to those intended; and arcane research projects whose intended deliverables were not produced despite substantial resource commitments. The candor of the failures' treatment is, by review board assessment, one of the document's distinctive features and one of the principal reasons the document's preservation in restricted holdings is considered scholarly valuable rather than purely operational.</p>
<h3>The Post-War Position</h3>
<p>The document's treatment of the post-war position is, by review board assessment, more cautious than its treatment of the wartime period. The post-war Crown arcane operations are not, in this document, described in detail; the document identifies general continuities and discontinuities with the wartime period without providing the technical specificities that the wartime treatment provides. The cautious treatment reflects the document's continuing operational sensitivity; the wartime methods are documented because the war is ended, while the post-war methods are not described because they are continuing.</p>
<p class="marginalia">Trust ledger: Access to this document is restricted to senior Tabernacle scholars, senior Drystone scholars, authorized intelligence personnel of Treaty signatory governments under standing exchange protocols, and parties holding standing Trust authorization. Inquiry has been logged.</p>`
});


// ─── FIVE NATIONS INTERIOR PIECES ─────────────────────────────

LIBRARY.books.push({
  title: "Thrane After the Crusade: A Nation in Theological Recovery",
  author: "Cardinal Tessa ir'Vahn",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Thrane is the Five Nation whose post-war condition is most directly shaped by religious-political dynamics. The Silver Crusade of 928-932 YK — the Church-led campaign of lycanthrope and shifter persecution whose excesses produced the Eldeen Reaches' separation from Aundair — left the Church and the broader Thranish polity in conditions whose recovery has required substantial institutional and theological work over the subsequent six decades. This volume documents the recovery's progression and assesses the questions the recovery's incomplete state currently raises.</p>
<h3>The Crusade's Ongoing Effects</h3>
<p>The Crusade's effects continue to shape Thranish society in ways that the formal post-Crusade institutional reforms have not fully addressed. The principal continuing effects include: substantial residual cultural tensions between the Thranish populations whose ancestors participated in Crusade operations and the populations whose ancestors were targeted; theological tensions within the Church between the post-Crusade reform tradition (which has gained substantial institutional ground) and the older absolutist tradition (which retains significant lay support and which has not, in current circumstances, been formally repudiated by the Church's senior leadership); and political tensions between the Church's institutional position (which retains substantial governmental authority) and the secular reform tradition (which has gained ground in Thrane's broader civil society).</p>
<h3>The Theocratic Question</h3>
<p>Thrane's distinctive political-religious arrangement — in which the Church holds direct governmental authority through the Council of Cardinals, with the formal monarchy reduced to ceremonial functions — is, by Thranish self-understanding, a successful institutional response to the Crusade's lessons. The arrangement, established in 939 YK after extensive post-Crusade institutional reform, was intended to integrate religious and political authority in ways that would prevent the political-religious dissociation that the Crusade's excesses had revealed. The arrangement has, by available evidence, prevented further large-scale persecution operations of the Crusade's character. The arrangement has not, by external observation, fully resolved the underlying tensions that the Crusade originally expressed.</p>
<h3>The Voice of the Flame</h3>
<p>The Voice of the Flame — the position currently held by Keeper Jaela Daran, the eleven-year-old child whose theological role represents the Church's principal connection to the Silver Flame's continuing manifestation — is, by Thranish theological understanding, a position of substantial theological and political significance. The position's institutional configuration is unusual: the Voice's young age requires substantial regency arrangements through which the position's formal authority is exercised by adult senior cardinals operating on the Voice's behalf. The arrangements have produced, in the past several years, internal Church tensions about the appropriate balance between the Voice's formal authority and the regency's operational authority. The tensions have not, in current circumstances, produced institutional crises; they have produced sustained internal debate whose outcomes remain to be determined.</p>
<h3>The External Position</h3>
<p>Thrane's external position in the post-war continental order has been, by external observation, characterized by careful diplomatic management of relationships whose terms reflect the Crusade's residual influence. Thrane's relationships with the Eldeen Reaches remain formal but limited; the Reconciliation arrangements that Aundair has negotiated with the Reaches do not extend to Thrane in equivalent forms, and the unresolved acknowledgment-and-remediation question that I noted in my treatment of the Reconciliation continues to shape Thrane's position. Thrane's relationships with the broader Five Nations are, in most respects, normalized; Thrane participates in the standard Treaty of Thronehold framework arrangements and conducts ordinary diplomatic and commercial relations with the other signatories.</p>
<p class="marginalia">Cardinal Tessa ir'Vahn's volume on Thrane reflects her continuing pastoral and theological engagement with Thranish Church figures across the post-war period. The volume's treatment of the Crusade question is, by her own description, "as candid as the responsible internal Church discussion has produced; the Church has not yet, in its formal positions, said all that the Church will eventually need to say about the Crusade, but the internal discussion has progressed beyond what was possible even a decade ago."</p>`
});

LIBRARY.books.push({
  title: "The Karrnathi Peasantry: Survival and Continuation",
  author: "Visiting Scholar Halric Sevren of Vedykar",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Karrnathi peasantry — the rural agricultural population whose continuing labor sustains Karrnath's food production and whose communities constitute the substantial majority of the Karrnathi population — has been substantially shaped by the Last War period and the post-war reorganization. The peasantry's experience has not, in the broader Khorvairean scholarly literature, received treatment comparable to the literature's coverage of the Karrnathi noble and military classes. This volume addresses the peasantry's experience through interview and observational material gathered across rural Karrnath over a five-year research period.</p>
<h3>The Wartime Experience</h3>
<p>The Karrnathi peasantry's wartime experience was characterized by substantial sustained pressures whose cumulative effects shaped the peasantry's contemporary configuration. The principal pressures included: military conscription that drew substantial numbers of peasant young men into Karrnathi military service over multiple decades; agricultural production demands that exceeded the peasantry's normal productive capacity and that produced sustained malnutrition in many rural communities; population displacement as wartime operations destroyed certain rural communities and forced their populations into refugee migrations; and the broader social pressures of sustained wartime conditions on rural communities whose institutional resources were limited and whose access to external support was constrained.</p>
<h3>The Blood of Vol Dimension</h3>
<p>The Karrnathi peasantry's relationship with the Blood of Vol religious tradition is, by available observation, substantially more developed than the relationship of the Karrnathi noble and urban populations. The relationship reflects, in part, the Blood of Vol's wartime medical services to rural communities whose access to other medical resources was limited; the tradition's healers operated extensively in rural Karrnath during the war period, and the resulting community connections have continued in the post-war period. The relationship reflects, in part, the broader theological character of rural Karrnathi culture, which has historically emphasized the kinds of life-and-death theological questions the Blood of Vol tradition's framework addresses. The relationship is not, in most cases, formal religious affiliation; the rural populations remain, in their formal affiliations, predominantly Sovereign Host. The relationship is, instead, a parallel theological engagement that operates alongside the formal Sovereign Host affiliations.</p>
<h3>The Undead Question</h3>
<p>The Karrnathi peasantry's experience of the wartime undead — the Karrnathi army's use of undead military units, conducted under Blood of Vol tradition support — has been, by available observation, substantially different from the experience reported by Karrnathi noble and urban populations. The peasantry's villages provided, in many cases, the rural communities adjacent to undead-unit deployment areas; the peasants observed the units in operation and, in some documented cases, dealt with units' post-deployment dispersals when units' operational coherence broke down. The peasantry's contemporary attitudes toward the undead question are, by interview material, substantially more pragmatic and less ideologically polarized than the noble and urban discussions tend to be. The peasantry's typical position is that the undead were a wartime measure whose continued operation is undesirable but whose wartime use was, in the conditions then prevailing, defensible.</p>
<h3>The Post-War Recovery</h3>
<p>The Karrnathi peasantry's post-war recovery has been, by available evidence, slower than the recovery of the Karrnathi urban and noble populations. The principal factors retarding the rural recovery include: the rural population reductions that wartime conscription produced, which have not been fully reversed by post-war demographic patterns; the agricultural infrastructure damage that the wartime period produced, whose reconstruction has lagged the urban infrastructure reconstruction; and the limited Crown investment in rural reconstruction relative to the substantial investment in Karrnathi urban and military reconstruction. The recovery is continuing. The recovery's incomplete state is, in current circumstances, one of the principal continuing pressures on Karrnath's broader social stability.</p>
<p class="marginalia">Visiting Scholar Halric Sevren of Vedykar conducted the volume's research with the formal cooperation of the Karrnathi Royal Census office and with substantial assistance from the rural communities whose hospitality made the research possible. The volume is dedicated to the rural Karrnathi populations whose lives the research documents and whose continuing labor sustains the broader Karrnathi society.</p>`
});

LIBRARY.books.push({
  title: "Brelish Parliament: The Continent's Strangest Legislature",
  author: "Magistrate Kael ir'Tain",
  college: "aureon",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Breland's Parliament is the only legislative body of substantial authority among the Five Nations. The institution's contemporary configuration — bicameral, with limited but real authority over Crown actions, with elected Commons membership through suffrage arrangements that include broader populations than the comparable institutions of any other Five Nation — is, by external observation, the most institutionally distinctive Five Nations governmental arrangement. This volume traces the institution's development and addresses the principal questions the institution's contemporary operations raise.</p>
<h3>The Founding</h3>
<p>The Brelish Parliament was established in its contemporary form in approximately 750 YK, through legislative arrangements whose specifics drew on older Brelish municipal-council traditions and on theoretical influences from Aundairian and Cyran legal-political scholarship. The founding's principal motivation was, by available evidence, the Brelish Crown's recognition that the broader Brelish merchant and craftsman populations would, if not provided some institutional voice in governmental affairs, develop independent political organizations whose competition with Crown authority could produce instabilities the Crown preferred to avoid. The founding therefore created an institutional venue in which broader populations could exercise political voice within Crown-supervised arrangements, rather than developing alternative political institutions outside Crown supervision.</p>
<h3>The Bicameral Structure</h3>
<p>The Parliament's bicameral structure comprises the Lords (the upper house, with membership drawn from the Brelish nobility and from selected commercial and dragonmarked-house representatives) and the Commons (the lower house, with elected membership through suffrage arrangements that have, over the institution's history, gradually broadened to include substantially the entire adult Brelish citizen population). The two houses' relative authority is, in formal arrangements, substantially weighted toward the Lords; the Commons' principal authorities are advisory rather than directly legislative. In operational practice, the Commons' authority has gradually expanded over the institution's history through arrangements that the formal structure does not directly recognize but that the political conventions have, over time, accepted.</p>
<h3>The Last War Period</h3>
<p>The Last War period produced substantial pressures on the Parliament's operations. The wartime conditions required Crown actions whose Parliament-prior approval would have been impractical; the Crown therefore exercised emergency authorities whose scope expanded the Crown's operational autonomy at the Parliament's expense. The post-war period has produced, by available evidence, a partial reversal of the wartime expansion; the Parliament's authority has been substantially restored, but not to the full pre-war levels. The post-war Parliament is, in current operational practice, somewhat less authoritative relative to Crown operations than the pre-war Parliament was; the differential is gradual but real.</p>
<h3>The Current Tensions</h3>
<p>The current Parliament-Crown tensions concentrate in three areas. <em>The succession question</em>: King Boranel's eventual succession and the relative roles of the Parliament and the Crown in succession arrangements have not, in current circumstances, been definitively settled. <em>The post-Mourning policy</em>: the Crown's post-Mourning policies regarding the Mournland's territorial status, the Cyran refugee population, and the broader continental political reorganization have, in some cases, been pursued with limited Parliament consultation, producing tensions that occasional Commons motions have surfaced without resolving. <em>The dragonmarked-house relationship</em>: the Crown's relationships with the dragonmarked houses, particularly with the post-Mourning Cannith branches, have produced policy questions whose appropriate Parliament involvement is contested.</p>
<h3>The Future</h3>
<p>The Parliament's future trajectory is, by my own assessment, one of continuing institutional development. The Commons' authority will continue to expand gradually as the broader Brelish population's political development continues. The Lords-Commons relationship will continue to evolve as the dragonmarked-house and commercial representatives' positions in the Lords adjust to changing commercial-political conditions. The Parliament-Crown relationship will continue to be negotiated through the conventional arrangements that have shaped the institution's operations across its founding period. The institution's continued operation as the continent's only substantially-authoritative legislative body remains, in current circumstances, the institutional configuration that the Brelish polity has chosen, and the choice continues to differentiate Breland's governmental character from the other Five Nations in ways that have substantial implications for the broader continental political development.</p>
<p class="marginalia">Magistrate Kael ir'Tain serves on the Brelish Crown Court and has, throughout her career, conducted continuing scholarly engagement with Parliament's institutional history. The volume is published with the formal authorization of the Crown Court and represents one of the more substantive recent treatments of the institution available in continental scholarly publication.</p>`
});


// ─── AURUM / RESTRICTED DOSSIERS ──────────────────────────────

LIBRARY.books.push({
  title: "The Shadow Cabinet: A Speculative Dossier on the Aurum's Inner Circle",
  author: "Inquisitive Tessen d'Medani",
  college: "soladas",
  year: "996 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This dossier addresses the Shadow Cabinet — the Aurum's innermost ring, whose membership is not disclosed to the broader Aurum membership and whose activities are not visible to the broader Aurum operations. The dossier is speculative throughout; reliable direct intelligence on the Shadow Cabinet is, by my own investigative experience, substantially less than the intelligence available on the broader Aurum operations. The dossier compiles what investigation has been able to develop and identifies the principal questions that the available evidence does not resolve.</p>
<h3>The Cabinet's Operational Profile</h3>
<p>The Shadow Cabinet's operational profile, by the available evidence, comprises three principal activity areas. <em>Strategic coordination of Aurum operations</em>: the Cabinet appears to direct the broader Aurum's principal coordinated activities through arrangements that the broader Aurum membership does not see and that produce coordinated action without the broader membership's awareness of the coordination. <em>External relationship management</em>: the Cabinet appears to maintain the Aurum's relationships with parties outside the formal Aurum structure, including dragonmarked-house leadership, certain Five Nations governmental figures, and (by some evidence) parties whose identification I have been unable to verify with confidence. <em>Long-term strategic planning</em>: the Cabinet appears to engage in strategic planning whose time horizons exceed those of the broader Aurum operations and whose specific objectives are not disclosed even to the broader Aurum's senior leadership.</p>
<h3>The Membership Question</h3>
<p>The Cabinet's membership is, by available evidence, drawn from the most senior Platinum Concord members but is not coextensive with the Platinum Concord. Investigation has, with varying confidence, identified eight individuals whose evidence patterns are consistent with Cabinet membership; the list is not consolidated in this dossier and is held in the supplementary file at the Library. The list's confidence levels vary substantially across the eight; some identifications are well-supported, others are inferred from patterns whose alternative explanations cannot be ruled out. The full Cabinet membership likely exceeds the identified eight; the unidentified members' identification has not been achieved through available investigative methods.</p>
<h3>The Historical Continuity</h3>
<p>The Cabinet's historical continuity is, by available evidence, substantial. The Cabinet's contemporary configuration appears to be a continuation of older Aurum arrangements that predate the contemporary Aurum's institutional structure; the available evidence supports the inference that the Cabinet's institutional continuity extends substantially into the broader Aurum's historical development. The continuity has implications for the Cabinet's effective operational capacity; an institution with substantial historical continuity has access to accumulated organizational knowledge, established external relationships, and longer-term strategic frameworks that newer institutions cannot match.</p>
<h3>The Strategic Implications</h3>
<p>The Cabinet's existence and operations have implications for the broader Khorvairean strategic environment that I am, in my own assessment, unable to fully characterize. The Cabinet's coordination of Aurum operations gives the Aurum capabilities that the formal Aurum structure does not exhibit. The Cabinet's external relationships give the Aurum reach that the formal Aurum operations do not show. The Cabinet's long-term strategic planning suggests that the Aurum is engaged in projects whose specific character my investigation has not been able to characterize but whose existence the available evidence supports.</p>
<p>The principal question my investigation has not resolved is the question of the Cabinet's strategic objectives. The available evidence supports the inference that the Cabinet pursues objectives that exceed the protection of member wealth and that include broader political-strategic goals whose specific content I have been unable to determine. The objectives may be benign in their broader implications. The objectives may not be. The available evidence does not, in current circumstances, support a confident assessment.</p>
<p class="marginalia">Trust ledger: Access to this dossier is restricted to senior inquisitives, magistrates of senior rank conducting investigations of Aurum-affiliated parties, intelligence personnel of Treaty signatory governments under standing exchange protocols, and parties holding standing Trust authorization. Inquiry has been logged. The supplementary file containing the eight-person speculative-membership list is held under additional restrictions and is not generally accessible even to authorized readers of this dossier.</p>`
});


// ─── DEEPER VAULT MATERIAL ────────────────────────────────────

LIBRARY.books.push({
  title: "Vytharax: The Surviving Fragment",
  author: "Standing Inquiry into the Draconic Prophecy",
  college: "tabernacle",
  year: "994 YK",
  restricted: true,
  type: "book",
  content: () => `<p>The Vytharax fragment is the partial Draconic Prophecy text whose recovery from the ruins of an Argonnessen-aligned outpost in the Demon Wastes in 942 YK produced one of the most significant Khorvairean Prophecy-research developments of the twentieth century. The fragment is held in the Library's restricted vault under the most stringent access protocols. The fragment's text is not reproduced in this volume. This volume addresses the fragment's institutional status, the principal interpretive questions it raises, and the rationale for the restricted-access protocols that govern its handling.</p>
<h3>What the Fragment Is</h3>
<p>The Vytharax fragment is a partial Draconic Prophecy text inscribed on stone in the Draconic script characteristic of certain Argonnessen-aligned dragon factions. The fragment's preserved text is approximately three hundred words. The complete text from which the fragment was recovered is estimated, by the discontinuities at the fragment's boundaries, to have been substantially longer; the original text's approximate length is, by reconstructive analysis, between fifteen hundred and twenty-five hundred words. The fragment's content addresses Prophecy-aligned subjects whose specific interpretation is the central question the fragment raises.</p>
<h3>The Recovery Context</h3>
<p>The fragment was recovered by a joint Aundairian Royal Eyes / Tabernacle expedition to a Demon Wastes site whose identification had been developed through the inquiry's standing surveillance of Lords of Dust operations in the region. The site appeared to have been a Lords of Dust outpost that had, at some prior point, been overrun by parties whose identification was not, in the recovery operations, definitively established. The Vytharax inscription was recovered from a chamber whose other contents indicated active Prophecy-research operations; the Lords of Dust appear to have been studying the inscription before the outpost's destruction. The fragment was extracted from the site under emergency conditions; the fragment's full original text could not be recovered, and the original site has not been re-accessible in the period since the recovery operation.</p>
<h3>The Interpretive Questions</h3>
<p>The fragment's interpretation has produced sustained inquiry work over the more than fifty years since its recovery. The principal interpretive questions include: <em>The fragment's referential targets</em>: the specific events, parties, or arrangements the fragment's content addresses are not, in current scholarly assessment, definitively determined. Multiple plausible referential interpretations have been developed, each with substantial supporting evidence and substantial unresolved questions. <em>The fragment's temporal framing</em>: whether the fragment addresses past, present, or future events is contested; some scholarly readings treat the fragment as historical, others as prophetic, others as composite. <em>The fragment's relationship to the broader Prophecy structure</em>: whether the fragment represents a unitary Prophecy element or a composite of multiple elements whose textual proximity reflects scribal arrangement rather than prophetic unity is similarly contested.</p>
<h3>The Restricted Access Rationale</h3>
<p>The fragment's restricted-access protocols reflect three principal considerations. <em>Operational security</em>: the fragment's content includes references whose specific interpretation, if understood by parties operating against the broader continental order, could provide those parties with operational advantages that the inquiry's containment work would not be able to address. <em>Prophecy-research methodology</em>: Prophecy-research methodology has, across the broader scholarly tradition, recognized that Prophecy text dissemination produces effects on the events the Prophecy addresses; the fragment's restricted handling reflects the inquiry's judgment that broad dissemination would, by Prophecy-research methodology, complicate the events' development in ways that the inquiry considers undesirable. <em>Institutional security</em>: the fragment's holding in the Library's vault is one of the principal items whose preservation justifies the vault's broader security arrangements; the fragment's loss or unauthorized disclosure would, by inquiry assessment, produce institutional consequences whose management the Library is not equipped to handle.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to the standing inquiry's named members, to senior Tabernacle scholars holding the inquiry's specific authorization, and to parties holding standing Trust authorization with the inquiry's specific approval for this volume. The fragment's text itself is held under additional restrictions and is not accessible through the protocols that govern access to this volume; access to the fragment's text requires a separate authorization process that the inquiry conducts on case-by-case basis. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "The Closed Circle's Seven Other Members: Speculative Identifications",
  author: "Inquisitive Tessen d'Medani",
  college: "soladas",
  year: "996 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This document is the supplementary file referenced in my earlier volume on the Closed Circle of Sharn. The earlier volume documented fourteen members of the Closed Circle with varying degrees of confidence. The continuing investigation has produced, in the period since the earlier volume's deposit, additional identifications whose total brings the speculative-membership list to twenty-one individuals — exceeding the Closed Circle's most-cited estimate of twelve to twenty members. The supplementary list is therefore likely to include false identifications; the list is preserved in restricted access on the principle that successor inquisitive work may benefit from the investigative leads the list represents, with the explicit acknowledgment that not all listed individuals are likely to be actual Closed Circle members.</p>
<h3>The Methodological Cautions</h3>
<p>The list's content is, by my own assessment, subject to several methodological cautions that successor inquisitives should consider. <em>The investigative methods' limits</em>: my investigation relied principally on pattern-recognition methods that identify behavioral patterns consistent with Closed Circle membership without directly confirming the membership. The methods are useful but produce false positives. <em>The political-environment effects</em>: Sharn's political environment includes substantial parties whose behavior patterns include features that the investigation's methods may have incorrectly identified as Closed Circle indicators. <em>The personal-relationship effects</em>: the investigation's information sources include individuals whose own relationships with the listed parties may have produced information bias that the investigation has not fully corrected.</p>
<h3>The Seven Additional Names</h3>
<p>The seven additional names — beyond the fourteen documented in the earlier volume — are: [the names are reproduced in the document under the deposition's restricted-access terms; the names are not transcribed in this Library catalog entry, in accordance with the standing inquiry's protocols for restricted material]. The names' confidence levels vary across the seven; the supplementary documentation provides, for each name, the supporting evidence and the unresolved questions whose resolution would either confirm or disconfirm the identification.</p>
<h3>The Use of the List</h3>
<p>The list is intended for the use of successor inquisitives whose continuing investigation of Sharn's senior political-economic environment may benefit from the investigative leads the list represents. The list is not intended for general scholarly circulation. The list is not intended as the basis for any external action — legal, commercial, or political — directed against the listed parties. The investigative-lead use of the list is its only intended application; any other use would, by the assessment of the deposition terms, produce harms that the investigative-lead application does not produce.</p>
<h3>The Continuing Investigation</h3>
<p>The investigation continues. The list is, by my own assessment, incomplete; additional Closed Circle members likely operate whose identification the investigation has not yet achieved. The investigation will, in coming years, continue to develop additional identifications whose deposit at the Library will follow the established protocols. The investigation's eventual completion is not, in current circumstances, foreseeable; the Closed Circle's operational discipline produces sustained difficulty for external investigation, and the investigation will likely continue at the established pace for the duration of my professional career and likely beyond.</p>
<p class="marginalia">Trust ledger: Access to this document is restricted to senior inquisitives whose investigative work bears on Sharn's senior political-economic environment, to magistrates of senior rank conducting investigations of Closed-Circle-affiliated parties, and to parties holding standing Trust authorization. The document is not to be discussed in unsecured settings. The seven names are not to be transmitted in any form outside the document's restricted-access framework. Inquiry has been logged.</p>`
});


// ─── MISC: SHADOW MARCHES, MROR HOLDS, VALENAR ────────────────

LIBRARY.books.push({
  title: "The Shadow Marches: Land of the Dragonmark",
  author: "Belaak Torrn d'Tharashk",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Shadow Marches are the western Khorvairean territory whose principal occupants are the orcish, half-orc, and human populations whose ancestors have lived in the territory for substantially longer than any other current Khorvairean populations. The Marches are the homeland of House Tharashk, the originating territory of the Mark of Finding, and one of the principal centers of Gatekeeper-tradition druidic practice. The Marches are, in the broader Five Nations cultural perception, a frontier; in the Marches' own self-understanding, the Marches are an ancient continuous civilization whose institutional forms differ from the Five Nations forms but whose historical depth substantially exceeds the Five Nations' historical depth. This volume surveys the Marches' contemporary configuration from the Marches' own perspective.</p>
<h3>The Population Structure</h3>
<p>The Marches' population comprises three principal groups whose continuing coexistence has shaped the Marches' contemporary culture. <em>The orcish populations</em>: descendants of the original Marches inhabitants, whose ancestors developed the Gatekeeper tradition and whose contemporary tribes maintain the principal Gatekeeper-aligned communities. <em>The human populations</em>: descendants of various human migrations to the Marches across the past several thousand years, whose contemporary communities are integrated with the orcish communities through extensive intermarriage and shared cultural development. <em>The half-orc populations</em>: the populations whose ancestry combines the orcish and human heritage, whose contemporary communities are particularly prominent in the House Tharashk-aligned territories.</p>
<h3>The Tribal Structure</h3>
<p>The Marches' contemporary political structure comprises approximately twenty principal tribal organizations whose authority within their own territories is real and whose authority beyond their own territories is, in most cases, limited. The tribal structure has not, in the Marches' history, produced unified state-equivalent political organization; the Marches have, instead, maintained a confederational arrangement in which the tribes coordinate on inter-tribal matters through arrangements whose specific forms have varied across history. The contemporary confederational arrangements are, by available evidence, looser than the historical peak arrangements but tighter than the lowest historical periods; the post-war environment has produced moderate consolidation pressure that has strengthened the contemporary confederational structure relative to the immediate pre-war configuration.</p>
<h3>The Mark of Finding's Origin</h3>
<p>The Mark of Finding's manifestation in the Marches' populations represents one of the principal recent developments in the territory's history. The mark first manifested in approximately 750 YK; the manifestation produced, over the subsequent decades, the development of the institutional arrangements that became House Tharashk in 813 YK. The mark's continuing manifestation in the Marches' bloodlines is the principal continuing economic resource the Marches contribute to the broader continental economy; the Marches' commercial relevance to the Five Nations is, in significant part, the relevance the Mark of Finding's continuing operations produce.</p>
<h3>The External Relationships</h3>
<p>The Marches' external relationships are conducted, in current circumstances, through three principal channels. <em>House Tharashk</em>: the house's commercial operations connect the Marches to the broader continental commercial environment in ways that no other channel matches. <em>Aundairian frontier engagement</em>: the Marches' eastern frontier with Aundair produces continuing commercial and limited diplomatic engagement with the Aundairian Crown. <em>Gatekeeper-Tabernacle coordination</em>: the Gatekeeper tradition's formal engagement with the Tabernacle's standing inquiry into aberrant magic produces continuing institutional engagement with the Korranberg-aligned theological-scholarly tradition, with effects that extend beyond the formal coordination's specific topics. The combined external relationships produce, in current circumstances, a substantially more integrated Marches-continental relationship than the pre-Tharashk-recognition period maintained, while preserving the Marches' distinctive political-cultural autonomy that the broader Five Nations integration has not eroded.</p>
<p class="marginalia">Belaak Torrn d'Tharashk's volume on the Marches is the most substantive recent house-published account of the territory's contemporary configuration. The volume is published with the formal authorization of House Tharashk's senior council and with the formal cooperation of the principal Marches tribal authorities whose contributions to the volume's research the volume's preface acknowledges.</p>`
});

LIBRARY.books.push({
  title: "The Mror Holds: Twelve Clans Beneath the Mountains",
  author: "Loremaster Doldarun Mroranon",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Mror Holds are the dwarvish polity in the Ironroot Mountains, governed by the Iron Council on which the twelve major Mror clans hold representation. The Holds are the only substantial dwarvish polity on Khorvaire and represent, by my own clan's tradition, a continuation of older dwarvish civilizational arrangements whose origins extend, in the most defensible reconstructions, to substantially before the founding of Galifar. This volume offers a survey of the Holds' contemporary configuration from a senior loremaster's perspective.</p>
<h3>The Twelve Clans</h3>
<p>The twelve major clans, in their formal Iron Council ranking, are: Mroranon (my own clan, traditionally responsible for ceremonial-juridical functions); Soldorak (military leadership); Kundarak (financial and dragonmarked-house responsibilities); Tordannon (mining and underground operations); Doldarun (agricultural and surface operations); Mrolanev (magical-arcane traditions); Tordannon's collateral lines (formally recognized as a separate clan since 982 YK); Korunor (trade and commercial operations); Naralun (artisanal and craft traditions); Daskaran (military and frontier operations); Toldorath (religious and theological responsibilities); and Droranath (border defense and external diplomacy). The clans' relative authority on the Council varies by matter; the formal ranking is most relevant in ceremonial contexts, while the operational authority distributes more broadly across the clans according to each matter's specific clan-specialization relevance.</p>
<h3>The Iron Council</h3>
<p>The Iron Council is the Holds' principal coordinating institution. The Council comprises representatives from the twelve major clans, with formal voting rules that the Council's procedural traditions establish. The Council's authority covers inter-clan matters, external diplomatic affairs, and the broader strategic questions that the Holds face as a unified polity. The Council's authority does not cover internal-clan matters, which are managed by each clan's own leadership through arrangements specific to the clan's traditions. The arrangement reflects the Holds' broader political character: the Holds are a confederational polity in which the constituent clans retain substantial autonomy and the central institutions exercise only the coordination authority that inter-clan business requires.</p>
<h3>The House Kundarak Question</h3>
<p>The Mroranon Clan's traditional ceremonial-juridical position has been, in the past century, partially shadowed by the Kundarak Clan's substantial economic dominance through House Kundarak's banking and security operations. The Kundarak Clan retains its formal Council position without exceeding the formal arrangements; the Clan's broader continental economic operations have, however, given the Clan resources and external relationships that exceed those of any other Mror clan. The resulting tension has been managed through Council arrangements that recognize Kundarak's special position without permitting that position to dominate the broader Iron Council operations. The arrangements are, by current Council assessment, stable but require continuing attention to maintain.</p>
<h3>The Underground Question</h3>
<p>The Holds' continuing operations in the deep strata beneath the Ironroot Mountains face continuing pressures from the daelkyr-tradition aberrant populations and from the various other underground populations whose territories the Holds' deeper operations encounter. The pressures are managed through coordination with the Tordannon Clan's underground operations and with the broader Gatekeeper tradition. The pressures have, in current circumstances, been contained at sustainable levels; the pressures' long-term trajectory is, by available assessment, similar to the trajectory documented for the broader daelkyr-binding system. The Holds' continued operations in the affected territories depend, in significant part, on the continuing maintenance of the broader binding-tradition work that the Gatekeepers and the standing inquiry conduct.</p>
<p class="marginalia">Loremaster Doldarun Mroranon serves the Mroranon Clan's ceremonial-juridical operations and conducts continuing scholarly work at the Iron Council's archive. The volume is published with the formal authorization of the Iron Council and represents the most substantive recent Holds-published account of the polity's contemporary configuration to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "Valenar: The Tairnadal Settlement",
  author: "Visiting Scholar Quoryn ir'Vahn",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Valenar is the territory at southeastern Khorvaire's coastal extreme, ceded by the Treaty of Thronehold to the Tairnadal warband formations whose military service to Cyre during the late wartime period had produced the operational conditions for the post-war territorial recognition. The territory's contemporary configuration represents, by external observation, an unusual arrangement: the Tairnadal occupation operates through warband-tradition cultural-military structures rather than through state-equivalent governmental institutions, and the territory's relationship with the broader continental order reflects this distinctive structural character. This volume documents the territory's contemporary configuration and addresses the questions the Tairnadal occupation raises for the broader continental order.</p>
<h3>The Tairnadal Tradition</h3>
<p>The Tairnadal tradition, as documented in my earlier volumes on Aerenal and on the elven rebellion, is the warband-based military culture that emerged during the elven slave-rebellion period and that has, across forty thousand years of continuation, retained its principal structural features. The tradition's contemporary practitioners conduct their lives within frameworks whose principal features include: <em>ancestor-binding</em>, in which each Tairnadal warrior cultivates a sustained spiritual relationship with a specific ancestor whose actions the warrior aspires to emulate and whose reincarnated continuation the warrior is, in some real sense, considered to be; <em>warband organization</em>, in which Tairnadal individuals operate within warband structures whose discipline and cultural cohesion are the principal frameworks within which Tairnadal life is conducted; and <em>continuous combat training</em>, in which the warband's operational readiness is maintained through training cycles whose frequency and intensity exceed those of any other Khorvairean military formation.</p>
<h3>The Settlement's Operational Profile</h3>
<p>The Valenar settlement's operational profile, by external observation, comprises three principal activity areas. <em>Warband operations within Valenar</em>: the warbands maintain occupation of the territory through patrol and defensive operations whose intensity exceeds the operations any external observer would consider necessary for territorial defense. The intensity reflects, by Tairnadal self-understanding, the tradition's continuing combat training requirements rather than any specific external threat the territory faces. <em>External military service</em>: certain Tairnadal warbands conduct contracted military operations for external clients whose requirements the warbands consider compatible with the tradition's broader purposes. The contracted operations represent, in current circumstances, a significant portion of Valenar's external commercial activity. <em>Inter-warband coordination</em>: the warbands coordinate among themselves through arrangements whose specific structures are not fully visible to external observation but which produce, in current circumstances, the territorial-occupation outcomes the warbands collectively maintain.</p>
<h3>The Strategic Position</h3>
<p>Valenar's strategic position is, by external assessment, anomalous in the broader continental order. The territory's military capabilities exceed those that would be expected from a polity of its size; the territory's commercial integration with the broader continental economy is, in some respects, more limited than would be expected from a polity at its location. The territory's relationships with the broader continental order are conducted through the Tairnadal warband leadership rather than through state-equivalent governmental institutions, with the diplomatic complications that the unusual structure produces. The post-Treaty period has produced, by available evidence, continuing tensions about the appropriate framework for Valenar's continental engagement; the tensions have not, in current circumstances, been definitively resolved.</p>
<h3>The Aerenal Connection</h3>
<p>Valenar's relationship with the Aerenal homeland — addressed in my earlier volume on the Sibling Kings — has continued to evolve in the post-Treaty period. The Tairnadal warbands' operational autonomy from Aerenal direction has, by available evidence, increased somewhat since the Treaty period; the formal relationships have been preserved, but the operational distance has grown. The trajectory raises questions about Valenar's longer-view development whose resolution depends on factors that neither Valenar nor Aerenal can fully control; the broader continental political environment will, in coming decades, produce pressures on Valenar that the territory's current configuration may or may not be able to absorb without substantial structural modifications.</p>
<p class="marginalia">Visiting Scholar Quoryn ir'Vahn's research on Valenar has been conducted with limited but real cooperation from selected Tairnadal warband leaders whose engagement with external scholarly work the volume's preface gratefully acknowledges. The cooperation is, by his description, "sufficient to produce the volume's documented findings; not sufficient to address the broader questions that more substantive engagement would permit; the warbands' selective engagement reflects their tradition's institutional priorities rather than ideological hostility to external scholarship."</p>`
});


// ─── DAY-TO-DAY / CULTURAL PIECES ─────────────────────────────

LIBRARY.books.push({
  title: "The Five Nations at Table: A Comparative Study of Domestic Cuisines",
  author: "Felia Vass, culinary scholar",
  college: "lyrris",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a comparative study of the domestic cuisines of the Five Nations, drawn from the author's fifteen-year travel and research across the continent. The volume is, in its principal content, a cultural-historical work rather than a recipe collection; the recipes are included where their inclusion serves the broader cultural-historical analysis the volume conducts. The volume's principal claim is that the Five Nations' domestic cuisines provide a distinctive lens through which the broader cultural histories of the Five Nations can be examined, and that the lens reveals patterns the formal political-historical scholarship does not always make visible.</p>
<h3>Aundairian Cuisine</h3>
<p>Aundairian cuisine is, by available cultural-historical evidence, the most refined and theoretically-developed of the Five Nations cuisines. The cuisine's principal features include: substantial integration of arcane techniques into ordinary culinary practice (most prominent in the Aundairian magewright tradition's contributions to commercial culinary operations); emphasis on flavor combinations whose sophistication reflects the Aundairian aesthetic tradition's broader characteristic features; and ritualized presentation practices whose forms reflect the broader Aundairian courtly culture's influence on domestic life. Aundairian cuisine is, in the broader Khorvairean culinary discourse, the prestige cuisine; the perception is reflected in the disproportionate Aundairian representation in the senior commercial culinary operations of major Khorvairean cities.</p>
<h3>Karrnathi Cuisine</h3>
<p>Karrnathi cuisine reflects the Karrnathi cultural tradition's emphasis on substantial nourishment under harsh conditions. The cuisine's principal features include: heavy reliance on root vegetables, preserved meats, and grain-based preparations whose long shelf life supports the Karrnathi peasantry's seasonal food-storage requirements; substantial use of fermentation techniques whose origins predate the founding of Galifar; and characteristic preparation methods that emphasize prolonged cooking and concentrated flavor development. Karrnathi cuisine is, in the broader Khorvairean discourse, considered austere; the description is, in my own assessment, incomplete; the cuisine's actual character, properly examined, reveals substantial sophistication within its constraint structures.</p>
<h3>Brelish Cuisine</h3>
<p>Brelish cuisine reflects the Brelish cultural tradition's broader emphasis on commercial integration and external influence. The cuisine's principal features include: substantial integration of culinary influences from across the broader Khorvairean and global commercial environment; characteristic Sharn metropolitan-influenced features in the urban populations' cooking; and a broader stylistic eclecticism that distinguishes Brelish cooking from the more nationally-specific cuisines of the other Five Nations. Brelish cuisine is, in the broader discourse, considered cosmopolitan; the description captures real features but understates the substantial Brelish-specific elements that the cosmopolitan elements integrate with.</p>
<h3>Thranish Cuisine</h3>
<p>Thranish cuisine is shaped, more directly than any other Five Nation's cuisine, by the religious-political environment the broader Thranish polity maintains. The cuisine's principal features include: substantial ritual restrictions associated with the Silver Flame's liturgical calendar; characteristic preparation practices whose forms reflect the Thranish religious traditions' influence on domestic life; and strong preferences for ingredients whose theological associations the Church considers favorable. Thranish cuisine is, in the broader discourse, considered restrictive; the description captures the formal restriction structures but misses the substantial creativity Thranish cooks have developed within those structures.</p>
<h3>Cyran Cuisine (in memoriam)</h3>
<p>Cyran cuisine, as it existed before the Day of Mourning, is preserved principally through the diaspora communities whose continuing practice maintains the cuisine in modified form. The cuisine's principal features included: integration of culinary influences from across the broader continental environment, reflecting Cyre's pre-war role as continental crossroads; substantial sophistication in the use of the Cyran agricultural surplus, which supported culinary developments that the more constrained agricultural bases of other Five Nations did not match; and characteristic regional variations whose specific forms are, in the diaspora communities' continuing practice, gradually consolidating as the regional differentiations the geographic distribution maintained gradually erode. The volume's preservation of Cyran culinary practices is, by my own description, "the most important responsibility of the volume's broader project; the cuisine's preservation depends on documentation work that the diaspora communities cannot, on their own, fully sustain."</p>
<p class="marginalia">Felia Vass conducted the volume's research across substantial travel through all Five Nations and through several smaller Khorvairean polities. The volume is dedicated to the Cyran diaspora communities whose continuing culinary practice the volume's research substantially documents.</p>`
});

LIBRARY.books.push({
  title: "Songs of the Common People: Folk Traditions Across Khorvaire",
  author: "Halric Sevren of Vedykar",
  college: "lyrris",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a cross-continental survey of folk-song traditions across Khorvaire, drawn from a decade of field research conducted in rural communities across the Five Nations and adjacent territories. The volume documents both the song traditions themselves — the lyrics, the musical structures, the performance contexts — and the broader cultural-historical dynamics the traditions preserve. The volume's principal claim is that Khorvairean folk-song traditions constitute one of the principal continuing repositories of cultural-historical material whose alternative documentation forms would be substantially less adequate than the song traditions' own preservation work.</p>
<h3>The Aundairian Folk Tradition</h3>
<p>The Aundairian folk tradition is characterized by elaborate harmonic structures, extensive narrative songs whose subjects include both the historical-mythological content and the more recent political-historical material, and characteristic performance practices that integrate the singer-audience relationship in ways that distinguish Aundairian folk performance from the corresponding traditions in the other Five Nations. The tradition's contemporary practice is, by available evidence, robust; the rural Aundairian populations continue to maintain the song repertoires through performance practices whose institutional supports include both informal community arrangements and formal preservation programs the Aundairian Crown supports.</p>
<h3>The Karrnathi Folk Tradition</h3>
<p>The Karrnathi folk tradition is characterized by darker thematic content reflecting the broader Karrnathi cultural tradition's engagement with mortality and continuity, work-songs whose performance contexts integrate musical practice with agricultural and crafts labor, and characteristic instrumental arrangements that distinguish Karrnathi folk performance from the more harmonically-elaborate Aundairian forms. The tradition's contemporary practice has been substantially affected by the wartime population reductions; certain song repertoires whose maintenance depended on community-density-supported performance arrangements have, in some rural Karrnathi communities, declined to levels that may not be reversible.</p>
<h3>The Brelish Folk Tradition</h3>
<p>The Brelish folk tradition is characterized by substantial geographic variation reflecting Breland's broader internal cultural diversity, characteristic seafaring-song traditions in the coastal communities whose performance practices preserve maritime cultural-historical material, and substantial commercial-song traditions whose subjects address the broader commercial-economic environment that has shaped Brelish culture. The tradition's contemporary practice is, by available evidence, robust in most regions; the Sharn metropolitan area's contemporary commercial-musical environment has, in some respects, contributed to the broader tradition's continuing vitality through commercial channels that the more rural traditions of other Five Nations lack.</p>
<h3>The Thranish Folk Tradition</h3>
<p>The Thranish folk tradition is characterized by substantial integration of religious-musical content with the broader folk-song repertoires, characteristic performance practices whose forms reflect the broader Thranish religious-political environment's influence on cultural life, and a more limited range of secular thematic content than the corresponding traditions in the other Five Nations. The tradition's contemporary practice has been affected by the Silver Crusade's continuing residual influence; certain song repertoires whose pre-Crusade content addressed lycanthrope and shifter populations have, in the post-Crusade period, been substantially modified or, in some cases, suppressed in the interests of avoiding theological-political tensions.</p>
<h3>The Cyran Folk Tradition (in continuation)</h3>
<p>The Cyran folk tradition, as it existed before the Day of Mourning, is preserved principally through the diaspora communities whose continuing practice maintains the tradition in modified form. The Cyran folk tradition was, by available evidence, the most regionally varied of the Five Nations folk traditions, reflecting Cyre's broader internal cultural diversity and its role as continental crossroads. The diaspora communities' continuing practice preserves substantial portions of the tradition; the preservation is incomplete, and certain regional repertoires whose continuing maintenance depended on geographic-community structures the Mourning destroyed are, in current circumstances, principally available through the recordings and transcriptions the volume's research has documented.</p>
<p class="marginalia">Halric Sevren of Vedykar conducted the volume's research with substantial cooperation from rural communities across the surveyed territories. The volume's accompanying appendices include transcriptions of the principal song lyrics and basic notation of the principal melodies; the appendices are extensive and constitute, by Library assessment, a significant cultural-historical resource whose value extends beyond the volume's main text.</p>`
});


// ─── ADDITIONAL DISPATCHES ────────────────────────────────────

LIBRARY.books.push({
  title: "Dispatch: Conditions in Stormreach",
  author: "Wayfinder Field Officer Aldis ir'Vahn",
  college: "soladas",
  year: "999 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>Filed from Stormreach, Xen'drik. Dispatch reflects field officer's observations across a six-month deployment, with reporting arrangements specified by the Foundation's standing Stormreach reporting protocols.</p>
<h3>The Settlement</h3>
<p>Stormreach is, in current configuration, the principal continental-aligned settlement on Xen'drik. Population estimates range from twenty-five to thirty-five thousand permanent residents, with substantial transient population variations reflecting expedition cycles, commercial-shipping cycles, and the seasonal patterns that the Xen'drik environmental conditions impose on continental-aligned operations. The settlement's governance comprises the Coin Lords' arrangement — a council of merchant-prince-equivalent figures whose authority within the settlement is real and whose authority beyond the settlement's perimeter is, in most cases, negligible.</p>
<h3>The Wayfinder Position</h3>
<p>The Wayfinder Foundation's Stormreach operations occupy the position the Foundation has held since the settlement's establishment as the principal continental Xen'drik gateway. The Foundation's expedition support, archaeological-investigation coordination, and broader logistical operations sustain a substantial portion of the settlement's commercial activity. The Foundation's relationships with the Coin Lords are formal and operational; the relationships have been managed across the Foundation's continuing presence through arrangements whose specific terms vary by Coin Lord but whose broader patterns have been stable across the past two decades.</p>
<h3>The Current Operational Issues</h3>
<p>Three current operational issues affect Foundation operations. <em>The Crystal Cove dispute</em>: the recent excavations at the Crystal Cove site have produced findings whose implications for the broader Cul'sir Dominion archaeological framework are substantial; the findings have, however, also produced disputes between the Foundation and certain commercial parties whose competing interests in the Cove site have produced operational tensions that the Foundation's standing protocols are addressing. <em>The Sulatar engagement</em>: the Sulatar communities' selective-engagement arrangements have, in the past several months, produced more constructive contact than the prior year's average; the increase has produced expedition opportunities that the Foundation is evaluating against the broader Sulatar-engagement protocols. <em>The Stormreach internal-security situation</em>: the Coin Lords' internal-security operations have, in the past quarter, produced visible tensions whose resolution the Foundation is monitoring; the tensions have not, in current circumstances, affected Foundation operations directly, but the Foundation's position would be substantially affected by major shifts in the Coin Lord arrangements.</p>
<h3>The Recommendations</h3>
<p>The dispatch's principal recommendations: continue current Foundation operational posture in Stormreach; expand Sulatar-engagement allocation to capitalize on the constructive-contact increase; defer major investments in the Crystal Cove operations pending resolution of the commercial disputes; and continue monitoring the Coin Lord internal-security situation through standing protocols. Detailed operational recommendations are filed under separate restricted reporting arrangements per Foundation protocol.</p>
<p class="marginalia">Filed by Wayfinder Field Officer Aldis ir'Vahn at Stormreach Foundation Office, with reporting transmitted to Wayfinder Continental Headquarters via standard secured-courier protocols. Receipt and acknowledgment recorded under standing Foundation administrative procedures.</p>`
});

LIBRARY.books.push({
  title: "Dispatch: The Western Reaches Unrest",
  author: "Eldeen Wardens' Council Field Coordinator Tarra",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>Filed from Greenheart. Dispatch reflects field coordinator's assessment of the Western Reaches situation across the past six months, prepared for the Wardens' Council annual review.</p>
<h3>The Situation</h3>
<p>The Western Reaches — the territory between the Eldeen Reaches' established settlements and the Demon Wastes' eastern boundary — has, over the past six months, exhibited unrest patterns that exceed the historical baseline for the region and that warrant the Wardens' Council's continuing attention. The principal unrest indicators include: increased Carrion Tribe incursions across the boundary perimeter; reduced Ghaash'kala communication frequency relative to the established schedule; observed environmental-magical anomalies in the boundary regions whose patterns are inconsistent with the typical Demon Wastes seasonal variations; and refugee movements from the inner Wastes territories whose populations include parties whose origins and intentions are not fully characterized by the available investigation.</p>
<h3>The Assessment</h3>
<p>The unrest's underlying causes are not, in current investigation, definitively determined. The principal hypotheses include: <em>Lords of Dust operational expansion</em>: the patterns are consistent with expanded Lords of Dust operational activity in the Wastes that has produced spillover effects in the boundary regions; <em>Binding stress effects</em>: the patterns are consistent with effects of binding-stress increases on certain Overlord bindings whose surface manifestations include the Wastes territory; <em>External-faction operations</em>: the patterns are consistent with operations conducted by external factions whose specific identifications the investigation has not been able to determine; <em>Cumulative effects</em>: the patterns may reflect cumulative effects of multiple underlying causes whose individual contributions cannot be cleanly separated. The investigation's current assessment is that the cumulative-effects hypothesis is most consistent with the available evidence, though the alternative hypotheses cannot be ruled out and the underlying causes' eventual identification will require additional investigative work.</p>
<h3>The Operational Response</h3>
<p>The Wardens' Council's operational response, conducted in coordination with Greensinger and Children of Winter sect representatives and with the Ghaash'kala leadership, comprises four principal elements. <em>Increased boundary patrols</em>: the Wardens have increased patrol density in the boundary regions to levels that the standing budget framework does not fully support and that will require supplementary allocations for sustained continuation. <em>Enhanced refugee processing</em>: the established refugee-processing arrangements have been supplemented with additional procedures designed to identify refugees whose origins or intentions warrant further investigation. <em>Coordination intensification</em>: the coordination with the Ghaash'kala has been intensified through additional liaison personnel whose deployment the standing arrangements have permitted. <em>Investigation expansion</em>: the investigation into the underlying causes has been expanded through additional resources whose allocation the Council's recent decisions have approved.</p>
<h3>The Recommendations</h3>
<p>The dispatch's principal recommendations to the Wardens' Council annual review: approve continued supplementary patrol funding; approve continued investigation expansion through the next annual cycle; approve formal communication to the Tabernacle's standing inquiry into aberrant magic concerning the observed patterns; and approve continued coordination with the Aundairian Crown's frontier intelligence operations through the established channels. Detailed operational recommendations are filed under separate Council-restricted reporting arrangements.</p>
<p class="marginalia">Filed by Eldeen Wardens' Council Field Coordinator Tarra at Greenheart, with reporting prepared for the Wardens' Council annual review per standing administrative procedures. Coordinator's prior dispatches on related Western Reaches matters are referenced in the report's bibliography and are available for review through the Council's standing access arrangements.</p>`
});


// ─── COASTAL / NATURAL HISTORY ────────────────────────────────

LIBRARY.books.push({
  title: "The Sea Creatures of the Lhazaar Sea: A Mariner's Catalog",
  author: "Master-Naturalist Berra Lyrandar",
  college: "balinor",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lhazaar Sea is the maritime body bounded by Khorvaire's eastern coast, the Lhazaar Principalities' island chain, and the open Thunder Sea to the south. The sea contains substantial populations of large maritime creatures whose practical significance for shipping and for the broader Khorvairean understanding of natural history is substantial. This catalog documents the principal sea creatures the Lyrandar maritime tradition has identified across decades of systematic observation, with attention to the practical considerations relevant to mariners whose work requires informed engagement with the populations.</p>
<h3>The Major Categories</h3>
<p>The catalog distinguishes approximately sixty species across six principal categories. <em>The great-fish</em>: the very large fish-form creatures whose dimensions exceed those of standard Lyrandar shipping and whose interactions with shipping range from incidental to actively damaging. The category includes both predatory and non-predatory species; the catalog provides identification and behavioral information adequate for mariners to distinguish the two classes in operational conditions. <em>The leviathans</em>: the ocean-mammalian-equivalent creatures whose dimensions exceed those of the great-fish and whose interactions with shipping are, in most cases, either non-existent (when leviathans pursue their characteristic deep-water existence) or catastrophic (when leviathans surface in proximity to shipping). The catalog provides information adequate for mariners to recognize the surface-indication signs of approaching leviathans. <em>The sea-serpents</em>: the elongated maritime creatures whose various species range from manageable predators that experienced crews can defend against to apex predators whose attacks on shipping are typically fatal to the ships involved. <em>The kraken-kin</em>: the multi-tentacled creatures whose various species include both the smaller squid-form populations whose interactions with shipping are usually incidental and the larger kraken populations whose attacks on shipping represent the most-feared single hazard category in the broader Lhazaar maritime experience. <em>The shore-dwelling populations</em>: the creatures whose ranges include both deep-water and shore environments, with the practical implications for shore-based mariners that the broader catalog documents. <em>The intelligent populations</em>: the maritime creatures whose intelligence levels meet the catalog's threshold for distinct treatment, including various species of intelligent fish-form populations and the anomalous sapient kraken whose existence is documented in occasional reliable sightings.</p>
<h3>The Practical Considerations</h3>
<p>The catalog's practical considerations include both general protocols applicable across most maritime operations and species-specific protocols for encounters with particular creatures. The general protocols include: maintenance of standard maritime safety arrangements adequate to incidental creature interactions; careful sea-condition observation that supports timely identification of creature presence; and prepared response protocols that can be activated when creature interactions exceed incidental levels. The species-specific protocols vary by species and include both engagement protocols (for cases where the encounter requires direct response) and avoidance protocols (for cases where engagement is not advisable). The catalog provides, for each documented species, the recommended protocol selections and the survival statistics for vessels that have, in documented cases, executed the recommended protocols.</p>
<h3>The Mournland Effects</h3>
<p>A separate section addresses the effects of the post-Mourning environmental changes on the Lhazaar Sea's creature populations. The Mournland's broader environmental anomalies have produced, by available observation, certain effects on the maritime populations in the Mournland-adjacent waters. The effects include unusual behavioral patterns in certain species, anomalous population movements that the standard population-tracking methods have not adequately characterized, and the appearance, in scattered locations, of creatures whose biological characteristics are not consistent with any pre-Mourning species the catalog had documented. The post-Mourning effects are continuing to develop; the catalog's treatment is, by my own description, "preliminary; the effects' eventual stable configuration will require additional decades of observation to characterize adequately."</p>
<p class="marginalia">Master-Naturalist Berra Lyrandar serves the house's broader research operations and conducts continuing field research in the Lhazaar Sea's principal commercial-shipping corridors. The volume is published with the formal authorization of House Lyrandar and is used, in modified form, as the standard reference in the house's mariner-training programs.</p>`
});


// ─── KORRANBERG INTERIOR DEEPER ───────────────────────────────

LIBRARY.books.push({
  title: "The Reading Rooms: A Visitor's Guide to the Library",
  author: "Cataloger-Apprentice Felia Vass",
  college: "lyrris",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Library of Korranberg is, by physical extent, the largest single scholarly institution on Khorvaire. The building's reading rooms, vault systems, study cells, and ancillary spaces collectively occupy approximately four hundred thousand square feet across multiple floors and adjacent annexes. New visitors frequently report difficulty navigating the institutional space; the difficulty is real, and addressing it has been one of the catalog desk's continuing administrative concerns. This guide is intended for new visitors whose research requirements warrant familiarity with the principal reading rooms and ancillary spaces beyond the central catalog area.</p>
<h3>The Central Catalog Hall</h3>
<p>The central catalog hall is the principal entry point for new visitors. The hall houses the catalog desk (where Pellic and his colleagues conduct the principal patron-orientation work), the eight college pedestals (where the catalog stones are placed to access the corresponding college's holdings), and the central reference materials (encyclopedias, indexes, and other materials whose ordinary use does not require relocation to a study cell). The hall is the most heavily-used space in the building during ordinary operating hours.</p>
<h3>The Study Cells</h3>
<p>The study cells are the small individual reading rooms in which most patron-research work is conducted. Each cell contains a desk, a chair, the standard catalog-access arrangements, and the ambient illumination adequate for sustained reading. Cells are reserved through the catalog desk's standing reservation system; reservations are typically made on entry through the hall and are valid for the day's operating hours. Cells are distributed across the building in groupings whose specific locations correspond to the eight colleges' principal stack areas; researchers whose work concentrates on a single college are, by long catalog-desk practice, assigned cells in proximity to the relevant college's stacks.</p>
<h3>The College Stacks</h3>
<p>Each college maintains its own stack system, in which the college's holdings are organized according to the college's specific cataloging conventions. The stacks are not, in most cases, directly accessible to patrons; patrons request specific holdings through the catalog desk, and the holdings are delivered to the patron's assigned cell by the stack-runner staff whose continuing operations sustain the building's ordinary research support. Patrons whose research requires direct stack access are, in some specific cases, granted such access under arrangements whose specific terms vary by college; the arrangements are coordinated through the senior catalog desk staff and through the relevant college's senior doyenship.</p>
<h3>The Restricted Vault Areas</h3>
<p>The restricted vault areas are not accessible to ordinary patrons. The vault systems' physical locations are not generally documented; their access protocols are managed through the senior doyenship and through the standing inquiry's coordination with the Library's institutional security operations. Patrons whose research requires access to restricted holdings work through the standing access-protocol procedures rather than through direct vault access; the holdings are delivered to specially designated reading cells whose security arrangements support the restricted-material handling. Patrons should not, under any circumstances, attempt to access the vault areas directly; such attempts produce immediate Trust intervention whose resolution is not, by long Library practice, beneficial to the patron involved.</p>
<h3>The Ancillary Spaces</h3>
<p>The Library's ancillary spaces include refreshment areas (where patrons may take meals during research sessions), correspondence areas (where patrons may conduct urgent correspondence whose composition requires immediate attention), and rest areas (where patrons whose research sessions extend beyond standard endurance limits may take brief rest periods). The ancillary spaces are distributed across the building in arrangements whose specific locations are documented in the building maps the catalog desk distributes to new patrons on first registration.</p>
<h3>The Operating Schedule</h3>
<p>The Library's standard operating schedule comprises six days per week of full operation (with the seventh day reserved for institutional maintenance and for the senior doyenship's standing meetings). Full operating hours are sunrise to sunset, with extended evening hours during the cooler seasons supported by the building's substantial illumination arrangements. Researchers whose work requires extended evening or overnight access can, by special arrangement with the senior catalog desk staff, request exceptional access protocols; such protocols are granted on case-by-case basis and require demonstrated research justifications adequate to the request's exceptional character.</p>
<p class="marginalia">Cataloger-Apprentice Felia Vass joined the Library's catalog operations in 998 YK and has, in her two years of service, developed substantial expertise in patron-orientation work. The volume is the consolidation of her standing patron-orientation materials and is used, in expanded form, as the standard new-patron orientation guide for the catalog desk's continuing operations.</p>`
});

LIBRARY.books.push({
  title: "Pellic on the Catalog: A Career at the Desk",
  author: "Pellic, second clerk of the catalog",
  college: "lyrris",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>I have worked the catalog desk for forty-one years. The senior doyenship has, on three occasions, asked me to write a memoir of my service. I have, on three occasions, declined. The senior doyenship has, this time, indicated that the matter is no longer optional. I am writing the memoir. I am not, by training or temperament, a writer. The volume's content reflects this.</p>
<h3>The Work</h3>
<p>The catalog desk processes inquiries. The inquiries arrive from scholars, from visitors, from various parties whose specific affiliations are sometimes clear and sometimes not. The clerk's job is to listen to the inquiry, to determine which college's holdings are relevant, to direct the inquirer to the appropriate catalog stone, and to confirm that the resulting search produces the requested results. The work sounds simple. The work is not simple. The work requires substantial accumulated familiarity with the holdings, with the inquirers, and with the patterns by which inquirers' stated requests differ from their actual requirements.</p>
<h3>The Inquirers</h3>
<p>The inquirers are, in the substantial majority, ordinary scholars whose requests are well-formed and whose interactions with me are routine. A smaller fraction are more difficult — scholars whose requests are poorly formed, scholars whose social manner exceeds the patience the institutional standards permit, scholars whose actual research interests differ from their stated research interests in ways that require careful handling. A still smaller fraction are not scholars at all; they are visitors whose presence at the Library reflects purposes that the Library is not designed to serve. The senior catalog desk staff have, over my forty-one years, trained me to recognize these visitors and to handle their inquiries through protocols that do not produce institutional harm.</p>
<h3>The Colleagues</h3>
<p>The catalog desk operates with a staff of approximately forty clerks, distributed across operating shifts to maintain continuous coverage during operating hours. The senior clerks are, in most cases, individuals whose service exceeds twenty years; the junior clerks are, in most cases, individuals whose service is between five and twenty years. Apprentice clerks — staff in their initial training period — operate under senior-clerk supervision and conduct simpler inquiries whose handling does not require the senior staff's experience. The staff includes both gnome and non-gnome members, with the non-gnome representation having increased gradually over the past two decades; my own working preference is to be addressed by all colleagues without reference to species, and the catalog desk's contemporary culture supports this preference.</p>
<h3>The Difficult Cases</h3>
<p>The volume's difficult-cases section comprises seven extended discussions of inquiries whose handling produced lessons I consider worth preserving. The cases include: an inquiry from a foreign scholar whose stated research subject required restricted-vault access that the Library's standing protocols did not support, and whose subsequent exchange with the senior catalog staff produced extended discussion of the protocols' rationale; an inquiry from a House Phiarlan operative whose stated research subject was clearly a cover for intelligence-gathering operations, and whose handling required the Trust-coordination protocols I had not previously activated; an inquiry from a visiting Aerenal scholar whose research timeframe did not match the standard Five Nations expectations and whose accommodation produced lasting institutional changes in the Library's foreign-scholar arrangements; an inquiry from a Brelish parliamentarian whose stated research subject was politically sensitive in ways that required careful institutional management; an inquiry from a kalashtar refugee whose research touched on Dreaming Dark matters whose handling required particular sensitivity; an inquiry from an anonymous deposit party whose materials' handling required the standing Library deposit protocols' careful application; and an inquiry from a scholar whose subsequent disappearance produced investigations whose specifics I am not, at the senior doyenship's continuing direction, permitted to discuss in the volume.</p>
<h3>The Continuing Service</h3>
<p>I will continue at the catalog desk for as long as the Library's continued operations require my service and as long as my own continued service remains consistent with the desk's standards. I do not have, at this stage of my career, specific plans for retirement; the catalog desk has been the principal institutional context of my adult life, and my continuing service there is the work that my circumstances and my own preferences support. The volume's preparation has been, by my own honest assessment, more interesting than I expected when the senior doyenship's directive arrived. I do not, however, plan to write a second memoir. The first memoir was, by the senior doyenship's framing, sufficient.</p>
<p class="marginalia">Pellic, second clerk of the catalog, joined the Library's staff in 959 YK and has served continuously since. The volume is, by Library assessment, the most substantive published account of the catalog desk's operations in the institution's history and is used, in modified form, as a training reference for new catalog desk apprentices.</p>`
});
LIBRARY.books.push({
  title: "The Patron Ancestors: A Tairnadal Theological Study",
  author: "Spirit-Speaker Vellaen of the Draleus Tairn",
  college: "tabernacle",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Tairnadal patron-ancestor tradition is the religious-theological foundation of the Tairnadal warband culture. The tradition holds that each living Tairnadal warrior cultivates, across their lifetime, a sustained spiritual relationship with a specific named ancestor whose deeds the warrior aspires to emulate and whose reincarnated continuation, in some real theological sense, the warrior progressively becomes. The tradition is not, by external observation, fully translatable into Five Nations theological frameworks; the volume offers, for the first time in Common, an account of the tradition from within its own self-understanding.</p>
<h3>The Patron Selection</h3>
<p>The patron ancestor is selected, in most cases, during the warrior's adolescence through a process of guided discernment that the spirit-speakers conduct. The discernment draws on multiple inputs: the warrior's emerging temperament, the patterns of the warrior's early martial development, the warrior's family lineage and the patron ancestors who have served previous family members, and the spirit-speaker's own divinatory work that addresses the question of which ancestors are, in current circumstances, accepting new warrior-vessels. The selection is not, in most cases, the warrior's own choice; the selection is, rather, the spirit-speaker's identification of the ancestor whose acceptance the warrior is most likely to receive and whose continuing relationship with the warrior is most likely to develop productively.</p>
<h3>The Daily Practice</h3>
<p>The warrior's daily practice with the patron ancestor includes morning communion (in which the warrior briefly opens the spiritual channel to the ancestor at the day's beginning), combat invocation (in which the warrior calls on the ancestor's presence during combat operations), evening reflection (in which the warrior reviews the day's actions against the ancestor's standards), and periodic deeper communion practices conducted with spirit-speaker support. The practices are, by Tairnadal self-understanding, not optional supplements to combat training; they are the core operational practice of which combat training is one expression. A Tairnadal warrior who does not maintain the patron-ancestor practice is not, in any meaningful Tairnadal sense, a warrior at all.</p>
<h3>The Reincarnation Question</h3>
<p>The most theologically distinctive feature of the tradition is its claim that the warrior progressively becomes, in some real sense, a reincarnated continuation of the patron ancestor. The claim is not, in most spirit-speaker explanations, a simple identity claim; the warrior does not become the ancestor in the sense that the ancestor's earlier life is the warrior's own remembered past. The claim is, instead, that the warrior's developing actions and character produce a sustained continuation of the ancestor's pattern across mortal time, and that the ancestor's spiritual continuation through the warrior is, by Tairnadal cosmology, a real metaphysical relationship rather than a metaphorical one.</p>
<p>The claim has, by external theological assessment, no exact equivalent in Five Nations religious traditions. The closest available analogues — the Aerenal Undying Court tradition's continuation of deathless ancestors, the Sovereign Host's lineage-blessing traditions, the Blood of Vol's divinity-in-blood claims — share certain features with the Tairnadal claim but are not, in any direct sense, the same claim. The Tairnadal tradition is, in this respect, theologically distinctive.</p>
<h3>The Successful and Unsuccessful Lives</h3>
<p>A Tairnadal warrior's life is judged, in the tradition's framework, by the question of whether the warrior's actions sustained the patron ancestor's pattern adequately. A successful life is one in which the ancestor's pattern was carried forward through the warrior's deeds, in which the warrior's death (when it comes) occurs in circumstances consistent with the ancestor's character, and in which the spiritual relationship's continuity is preserved for the next warrior whose discernment will identify the same ancestor as their patron. An unsuccessful life is one in which the warrior's actions degraded the ancestor's pattern through cowardice, dishonor, or sustained failure to meet the ancestor's standards. Unsuccessful lives are not, in the tradition, condemned in punitive terms; they are mourned. The ancestor's pattern is, in the unsuccessful warrior's case, less robust for the next vessel's eventual continuation than it would otherwise have been.</p>
<p class="marginalia">Spirit-Speaker Vellaen of the Draleus Tairn is one of the senior contemporary spirit-speakers of the Tairnadal tradition. The volume is published with the formal authorization of the Draleus Tairn elders' council and represents the tradition's most candid public statement of its theological foundations to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "Valenar Warbands: Operational Profile and Strategic Position",
  author: "Sentinel Marshal Korrin d'Deneith",
  college: "soladas",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Valenar warbands constitute, by available external assessment, one of the most operationally capable military formations on Khorvaire. The formations' contemporary structure, training arrangements, and strategic dispositions are documented in this volume to the extent that external observation has been able to characterize them; substantial portions of the formations' internal operations are not visible to external observation, and the volume's account is, accordingly, partial.</p>
<h3>The Warband Structure</h3>
<p>The Valenar warbands are organized in approximately twenty principal formations, with smaller auxiliary formations whose specific identifications vary across the tradition's internal arrangements. Each principal warband comprises typically between fifty and two hundred warriors, with the smaller warbands operating under arrangements that the larger warbands' leaders coordinate. The warband structure is hereditary in significant respects; warband membership tends to follow family lineages, with warriors typically joining warbands their parents and grandparents served. The hereditary character is not, however, absolute; warband transfers occur, and certain warriors operate across multiple warband arrangements based on patron-ancestor compatibility patterns.</p>
<h3>The Training Arrangements</h3>
<p>The Valenar warbands' training arrangements exceed, by external measurement, the training intensity of any other Khorvairean military formation. Warriors train, on average, approximately eight hours daily across all weather conditions and across all phases of their careers, including the senior phases that other Khorvairean military traditions reduce training intensity in. The training emphasizes mounted combat (the Valenar tradition is mounted-cavalry in its principal operational concept), individual martial skill, small-unit tactical coordination within warband formations, and the integration of patron-ancestor invocation into combat operations. The training intensity is sustained because the tradition's theological framework treats sustained training as core religious practice rather than as instrumental preparation for occasional combat operations.</p>
<h3>The Strategic Position</h3>
<p>The warbands' strategic position is, by external assessment, distinctive in three respects. First: the warbands' operational capabilities exceed what any Khorvairean polity could match in formal combat operations of equivalent scale; the warbands would, in the formal-combat scenarios that strategic planning typically considers, defeat opposing forces several times their size in most plausible engagement configurations. Second: the warbands' strategic limitations are nonetheless real; the warband structure does not support sustained occupation operations beyond limited territorial extents, and the warbands' tradition does not include the logistical and administrative capabilities that long-duration campaigns require. Third: the warbands' contracted operations for external clients have produced, in current circumstances, a significant share of Valenar's external commercial activity; the contracted operations include both fully-warband-led operations and hybrid arrangements in which warband warriors operate within external client formations.</p>
<h3>The Cyran Connection</h3>
<p>The warbands' contracted relationship with Cyre during the late wartime period — the relationship whose successful execution produced the post-Treaty territorial recognition that established Valenar — remains, in Tairnadal cultural-historical memory, a defining institutional event. The warbands' contemporary contracted operations are conducted under arrangements whose specific terms reflect, in significant measure, the lessons of the Cyran arrangement; the warbands have, in their post-Treaty practice, declined contract opportunities whose terms would expose the warbands to the kinds of strategic dependencies the Cyran arrangement included. The declination patterns are, by external assessment, prudent; they have produced, however, contracting outcomes whose commercial implications for Valenar's broader economic position are mixed.</p>
<h3>The Future Trajectory</h3>
<p>The warbands' future trajectory is, by external assessment, dependent on factors whose specific resolutions are not, in current circumstances, foreseeable. The principal factors include: the broader continental political environment's evolution and the demand patterns the evolution will produce for warband contracting services; the Tairnadal tradition's continuing internal development and the modifications the development may produce in the warbands' operational arrangements; and the warbands' relationship with Aerenal, whose evolution will continue to shape the broader Tairnadal-tradition institutional configurations. The warbands will, in any plausible future trajectory, remain a significant continental military presence; the specific character of that presence will evolve in ways that the current configuration does not fully predict.</p>
<p class="marginalia">Sentinel Marshal Korrin d'Deneith has conducted continuing intelligence work on Valenar's military operations under standing Marshal contracts with several Five Nations governments. The volume represents the externally-sharable portion of the Marshal's findings; additional findings are held under confidential terms.</p>`
});


// ─── ADDITIONAL VAULT MATERIAL ────────────────────────────────

LIBRARY.books.push({
  title: "The Vol Line: A Restricted Genealogical Study",
  author: "Standing Inquiry into the Mark of Death",
  college: "tabernacle",
  year: "997 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume documents the genealogical structure of the line of Vol, traces the line's principal branches across the period from its destruction by the Aereni Sibling Kings through the contemporary period, and addresses the principal continuing genealogical questions whose resolution would inform the inquiry's ongoing operations against the line's surviving expressions. The volume is restricted on the principle that detailed Vol-line genealogical information could be used by parties whose intentions are not aligned with the inquiry's purposes to identify and exploit surviving line members whose existence the inquiry's operations have not yet definitively characterized.</p>
<h3>The Original Line</h3>
<p>The original line of Vol — the elven house in which the Mark of Death first manifested, approximately twenty-six centuries ago — was destroyed by joint Aerenal-Argonnessen action in response to the line's deliberate cultivation of the apex Mark of Death through inter-species breeding programs that produced Erandis Vol. The destruction was, by available historical evidence, comprehensive in its targeting of the line's then-living members but was incomplete in its elimination of the line's broader genealogical structure. Various line members had, by the period of the destruction, established external relationships and produced offspring whose connections to the line were not, in all cases, documented adequately for the destruction operations to address.</p>
<h3>The Surviving Branches</h3>
<p>The inquiry has identified, with varying confidence levels, several genealogical branches whose continuation across the post-destruction period preserved fragments of the original line's heritage. The branches' specific identifications are documented in this volume's restricted appendices and are not reproduced in the catalog entry. The branches' principal characteristics include: <em>The half-elven branch</em>: descendants of original line members whose human partners produced offspring whose subsequent generations integrated with broader continental human populations. The branch's contemporary descendants do not, in most cases, know their genealogical heritage; the heritage has been substantially diluted across the centuries. <em>The displaced full-elven branches</em>: smaller branches of the original line whose members fled to territories the destruction operations did not effectively reach, principally certain Aerenal coastal communities and several Lhazaar Principalities settlements. <em>The Karrnathi branch</em>: a branch whose connection to the original line was established through the line's late-period operations in Karrnathi territories and whose contemporary descendants include certain Karrnathi noble lineages whose specific identifications the inquiry has documented.</p>
<h3>Erandis Vol's Contemporary Operations</h3>
<p>Erandis Vol's contemporary operations, as documented in the inquiry's earlier dossier on her existence, include sustained efforts to restore the Mark of Death's expression in mortal bloodlines. The restoration efforts target, by available evidence, both the original line's surviving branches and broader populations whose genealogical configurations Erandis's analysts consider compatible with restoration outcomes. The targeting is conducted through arrangements whose specific operational details the inquiry has not been able to fully characterize; the inquiry's investigations have produced fragmentary evidence of the operations rather than comprehensive documentation.</p>
<h3>The Genealogical Implications</h3>
<p>The genealogical implications for the broader continental population are, by inquiry assessment, substantial. The original line's genealogical dilution across the post-destruction centuries has produced a continental population in which substantial fractions of certain Five Nations lineages carry trace genetic-arcane material from the original line. The trace material is not, in most cases, sufficient to produce mark expression. The trace material is sufficient, in some cases, to produce conditions under which Erandis's restoration operations might successfully concentrate the dispersed material into expression-capable configurations. The conditions are not, in current circumstances, being achieved at scales the inquiry's operations have detected; the conditions are not, however, theoretically impossible. The inquiry's operations include continuing surveillance of the genealogical patterns and continuing intervention against operations that would produce the unwanted concentration.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior Tabernacle scholars holding the inquiry's specific authorization, to Aerenal-affiliated researchers operating under formal exchange agreements with inquiry approval, and to parties holding standing Trust authorization with the inquiry's specific approval for this volume. The volume's restricted appendices are held under additional access protocols that require separate authorization beyond the volume itself. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Sul Khatesh: The Keeper of Secrets",
  author: "Standing Inquiry into the Overlords",
  college: "tabernacle",
  year: "997 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume is one of the standing inquiry's individual-Overlord studies, addressing Sul Khatesh — the Overlord whose theological-arcane portfolio is centered on forbidden arcane knowledge and whose Lords of Dust servants conduct the most sustained operations against the broader Khorvairean magical-research community. The volume's restricted status reflects the operational sensitivity of the content; the volume's contents are accessible only to authorized parties whose work bears directly on the inquiry's continuing operations against Sul Khatesh-aligned operations.</p>
<h3>What Sul Khatesh Is</h3>
<p>Sul Khatesh is, in the dominant Khorvairean theological tradition, the Overlord whose binding is principally manifested at certain sites in the Demon Wastes and whose theological-arcane portfolio addresses forbidden arcane knowledge — magical practices whose pursuit produces consequences disproportionate to the practitioner's intentions and whose continuing development represents one of the principal continuing magical-research dangers the broader continental magical community faces. The Overlord's name in the older theological traditions translates, approximately, as "the Queen of Shadows" or "the Keeper of Secrets"; the translations reflect the Overlord's characteristic mode of theological-arcane operation through the cultivation of magical-research lineages whose increasingly forbidden work feeds the Overlord's continuing presence.</p>
<h3>The Operational Mechanisms</h3>
<p>Sul Khatesh-aligned operations are conducted, by the available evidence, principally through three mechanisms. <em>The cultivation of receptive researchers</em>: the Lords of Dust servants identify magical researchers whose specific intellectual configurations make them susceptible to forbidden-knowledge cultivation, and conduct sustained operations to develop the researchers' work in directions the Overlord's interests favor. <em>The targeted disclosure of forbidden materials</em>: the operations include arrangements through which forbidden arcane materials are made available to selected researchers in ways that appear, to the receiving researcher, as scholarly discoveries rather than as Overlord-directed disclosures. <em>The institutional cultivation of receptive frameworks</em>: the operations include broader institutional cultivation work whose purpose is the gradual modification of magical-research institutions in directions that make the institutions more permissive of forbidden research than would otherwise be the case.</p>
<h3>The Continental Distribution</h3>
<p>Sul Khatesh-aligned operations are continentally distributed, with concentrations in the major magical-research centers — Arcanix, the Korranberg Library's Drystone College, certain Sharn arcane-research institutions, and the various smaller magical-research operations distributed across the broader continental academic environment. The operations' presence in any given institution is, in most cases, limited; the operations seek to cultivate selected researchers rather than to dominate the institutions in which the researchers work. The operations' cumulative effects across the broader continental magical-research environment are, however, substantial; the inquiry's analyses indicate that approximately five to fifteen percent of contemporary magical research, depending on subfield, exhibits patterns consistent with Sul Khatesh-aligned cultivation.</p>
<h3>The Counter-Operations</h3>
<p>The inquiry's counter-operations against Sul Khatesh-aligned activity are conducted in coordination with the broader Tabernacle's standing operations, with selected magical-research institutions whose senior leadership is aware of the cultivation patterns and willing to support counter-operations, and with certain dragonmarked-house intelligence operations whose interests align with the inquiry's purposes. The counter-operations include: surveillance of suspected cultivation operations, intervention in cultivation patterns when sufficiently developed to warrant intervention, the cultivation of counter-narrative materials that competing magical-research traditions can use to resist Sul Khatesh-aligned cultivation, and the maintenance of restricted access to materials whose general circulation would advance the cultivation operations' purposes. The counter-operations are continuing. The counter-operations have prevented, by inquiry assessment, the worst potential outcomes; the counter-operations have not eliminated the cultivation activity, and elimination is not, in current circumstances, a realistic operational objective.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior Tabernacle scholars holding the inquiry's specific authorization, to senior Drystone scholars whose counter-operations work requires the volume's content, and to parties holding standing Trust authorization with the inquiry's specific approval for this volume. The volume's content is not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "Bel Shalor: The Shadow in the Flame",
  author: "Standing Inquiry into the Overlords",
  college: "tabernacle",
  year: "998 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume continues the standing inquiry's individual-Overlord series, addressing Bel Shalor — the Overlord whose binding is principally maintained through the Silver Flame itself, and whose theological-arcane portfolio is centered on the corruption of certainty and the cultivation of self-righteousness. The volume's restricted status is more comprehensive than the corresponding restrictions on most other Overlord volumes; the content addresses operational arrangements whose disclosure could affect the Silver Flame's continuing institutional position in ways the inquiry considers undesirable.</p>
<h3>What Bel Shalor Is</h3>
<p>Bel Shalor is, in the available theological evidence, the Overlord whose binding is most closely integrated with the Silver Flame's continuing operations. The integration reflects, by historical reconstruction, the conditions under which the original couatl sacrifice was conducted; the binding of Bel Shalor required arrangements whose intimacy with the Flame itself produced the contemporary configuration in which the Flame's operations and Bel Shalor's binding are not cleanly separable from one another. The Overlord's theological-arcane portfolio addresses the corruption of certainty: the cultivation, in mortals whose theological commitments include certainty about the rightness of their causes, of self-righteousness configurations that produce harms exceeding what the underlying causes themselves would produce.</p>
<h3>The Silver Flame Implications</h3>
<p>The integration of Bel Shalor's binding with the Silver Flame's operations produces theological implications that the Church of the Silver Flame's contemporary teaching has not fully articulated. The Church teaches that the Flame is good and that the Flame's manifestations are reliable theological guidance for the faithful. The Church does not teach that the Flame's manifestations include — by the inquiry's assessment, must include — certain configurations through which Bel Shalor's continuing presence affects the Flame's outputs. The Church's silence on this configuration is not, by available evidence, deliberately deceptive; the Church's senior theological scholars are aware of the configuration but have, by long institutional decision, declined to make the awareness a part of the Church's broader teaching on the principle that the awareness would damage lay faith without producing compensating theological benefits.</p>
<p>The inquiry does not, in current circumstances, take a position on the Church's institutional decision. The inquiry observes that the decision has consequences. The decision permits the broader continental population to engage with the Silver Flame tradition without complications that the awareness would introduce. The decision also permits Bel Shalor's continuing operations through Silver Flame channels to proceed without the resistance that broader awareness would produce. Both consequences are real. The inquiry's standing assessment does not produce a clear preference between them.</p>
<h3>The Crusade Pattern</h3>
<p>The Silver Crusade of 928-932 YK is, by the inquiry's assessment, the clearest documented case of Bel Shalor-aligned cultivation producing operational outcomes. The Crusade's senior leadership exhibited, throughout the operational period, the characteristic patterns of Bel Shalor cultivation: certainty about the cause's rightness, willingness to extend the cause's operations beyond limits that less-cultivated leadership would have accepted, and the systematic dehumanization of the cause's targets that Bel Shalor cultivation typically produces. The Crusade's outcomes — including the Eldeen separation, the broader Reaches population's persecution, and the lasting institutional damage to the Church's continental standing — represent, in the inquiry's assessment, a substantially more severe operational consequence than any other documented Bel Shalor cultivation case.</p>
<h3>The Continuing Operations</h3>
<p>The contemporary Bel Shalor cultivation operations are, by available evidence, less institutionally concentrated than the pre-Crusade operations were. The Crusade's outcomes produced, in the post-Crusade Church reform period, internal changes that have made the Church more resistant to large-scale Bel Shalor cultivation operations. The cultivation has, in the post-reform period, redistributed across multiple smaller operations rather than concentrating in single institutional targets. The redistribution has produced, in current circumstances, more numerous but individually less consequential cultivation operations whose cumulative effects the inquiry continues to monitor.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior Tabernacle scholars holding the inquiry's specific authorization, to senior Silver Flame Church scholars whose institutional positions warrant access, and to parties holding standing Trust authorization with the inquiry's specific approval for this volume. The volume's content concerning the Church's institutional silence on Bel Shalor integration is particularly sensitive and is not to be discussed in any settings that include Silver Flame lay parties. Inquiry has been logged.</p>`
});


// ─── RECOVERED NOTES (final additions) ────────────────────────

LIBRARY.books.push({
  title: "Recovered Note: The Warforged's Question",
  author: "Anonymous warforged (deposit, Sharn, 998 YK)",
  college: "lyrris",
  year: "deposited 998 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document was deposited at the Library through the Sharn warforged community's standing institutional contacts. The deposit terms specified anonymous public access. The Library's review board considered the document's character and concluded that public availability served broader scholarly interests in the post-war warforged-personhood discourse.</p>
<h3>The Note</h3>
<p>"To whoever is listed as my next of kin in the Cannith records, if any. To anyone else who reads this.</p>
<p>"My designation is no longer relevant. I do not use the designation. I use a name I chose for myself. The name is not in this note. The name is mine.</p>
<p>"I served eleven years in the Brelish army's western theater. I was discharged in 996 YK with the standard Treaty-mandated discharge package. I have, since the discharge, lived in Sharn's Lower Tavick's Landing district. I work as a porter at the lightning rail station. I am, by the standards the post-war administrative structures use, an integrated former combatant whose post-war life is functioning within acceptable parameters.</p>
<p>"I am writing this note because I have, in the past several months, begun to ask questions that the post-war administrative structures do not provide answers for. The questions are not, I think, unique to me. The questions are likely to be asked by other warforged whose post-war lives are, by surface measures, functioning. I am writing the questions down so that the asking is recorded somewhere that the asking can be referred to by others who may have similar questions.</p>
<p>"The first question: when I was made, was the making conducted with my consent? The answer, by the obvious facts, is no. I did not exist before I was made. I could not have consented to my making, because I did not exist to give the consent.</p>
<p>"The second question: does the absence of my consent to my making produce continuing implications for my post-making life? The answer, I think, is yes. The implications include the fact that my post-making life was conducted, throughout my service period, in arrangements whose terms I did not negotiate and whose acceptance was, in any meaningful sense, not voluntary.</p>
<p>"The third question: what would my post-making life look like if I were to repudiate the arrangements made for me? I do not know. The Treaty arrangements assume my continuing operation within post-war frameworks whose terms I did not establish. The frameworks include my legal personhood, my civil rights, my access to housing and employment, and the broader institutional structures within which my post-war life is conducted. Repudiation of the frameworks would, by available evidence, produce a life I cannot adequately characterize because the available evidence does not include the example of a warforged who has attempted such repudiation and survived to describe the result.</p>
<p>"The fourth question: do I want to repudiate the frameworks? I do not know. The frameworks are, in their post-war configuration, more accommodating than the wartime configurations were. The frameworks permit me to live, in the principal external dimensions of my life, as a person rather than as a tool. The frameworks do not, however, address the original consent question. The original consent question continues to operate beneath the post-war frameworks as a permanent feature of my situation.</p>
<p>"I am writing the questions down. I do not have answers. I will continue working at the lightning rail station. I will, in the time I have outside of work, continue to ask the questions of myself and of the colleagues whose continuing exchanges with me support the asking. The Library has agreed to preserve the questions in its public catalog. I am grateful for the preservation. I do not know what the preservation will accomplish. I am grateful nonetheless."</p>
<p class="marginalia">The Sharn warforged community's institutional contacts have, in the period since the deposit, indicated that the document's anonymous author is no longer accessible through their standing communication channels. The implications of the inaccessibility are not, by the available information, characterized; the author may have changed residence, may have changed communication arrangements, or may have ceased operation through circumstances the community has not been able to verify. The document remains in public access.</p>`
});

LIBRARY.books.push({
  title: "Recovered Note: The Refugee's Letter",
  author: "Anonymous (Cyran refugee, deposited 996 YK)",
  college: "soladas",
  year: "deposited 996 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This document was deposited at the Library through the New Cyre refugee community's standing institutional contacts in 996 YK. The deposit terms specified anonymous public access with the explicit acknowledgment that the document's continuing presence in the public catalog is one of the means through which the New Cyre community preserves the experiences of the broader Cyran diaspora.</p>
<h3>The Letter</h3>
<p>"To my mother. I have written this letter four times. Each time I have written it, the letter has changed. The earlier letters are not, by my own assessment, less true than this letter; they are different letters, addressing the same circumstances from different positions in my own continuing engagement with what happened.</p>
<p>"I do not know whether you survived the Day. The records of our home district are incomplete. The records that exist do not include your name in the casualty lists. The records do not include your name in the survivor lists either. Your name is, in the available records, simply absent. The absence is, in current circumstances, the principal thing I have to work with.</p>
<p>"I survived the Day because I was in Vathirond visiting my husband's family on the morning the Mourning began. I was not in Metrol. I was not in our home. I was, by the simple geography of where I happened to be, in territories the Mourning's effects did not extend to. The geography did not, in the moment, feel like luck. The geography felt, in the moment, like an interruption of my ordinary life that would be brief and that would be followed by my return to our home and to you and to the rest of what my life had been.</p>
<p>"The interruption was not brief. The interruption is permanent. I am writing this letter five years after the Day. The interruption is now the principal feature of my life. Vathirond was, after the Day, a Brelish-administered transit point for refugees who had survived through similar geographic accidents. I was processed through the standard refugee arrangements. I have, in the years since, lived in Sharn, in Wroat briefly, and in New Cyre since the settlement's establishment. I have not returned to our home district. I will not return. The Mourning's boundary has not, in current trajectory, retreated to permit return; the boundary has, in fact, advanced.</p>
<p>"I am writing this letter because the New Cyre community has, in the past year, established a memorial archive in which letters to the unaccounted-for can be preserved. The memorial archive's premise is that the writing of the letters is, for many of us, a necessary part of the long work of acknowledging what happened. The premise is, in my own experience, accurate. I have written four versions of this letter. The writing has been, in each version, a part of the work. The preservation in the archive is, by the community's framing, a way of acknowledging that the writing has been done and that the addresses to whom the letters are written have, by their absence from the available records, become parts of what the community must now carry forward.</p>
<p>"I will end this version of the letter here. I do not, in current circumstances, have more to say in this version than I have already said. I will, perhaps, write a fifth version at some future point. The fifth version will be different. The differences will reflect the continuing changes the work continues to produce in me. The work is not, by any honest assessment, finished. The work will continue for the duration of my life. The Library's preservation of this letter, and of the other letters in the New Cyre archive, is one of the means through which the work is supported. I am grateful for the preservation. I will continue."</p>
<p class="marginalia">The New Cyre refugee community's memorial archive has, in coordination with the Library, deposited approximately three hundred similar letters in the public catalog. The letters' authors are, in most cases, anonymous; the letters' addressees are, in all cases, parties whose status — survival, death, or unaccounted absence — could not be verified at the time of the letters' composition. The archive remains an active deposit channel; the community continues to add letters as community members continue to write them.</p>`
});


// ─── ADDITIONAL FIVE NATIONS VIGNETTES ────────────────────────

LIBRARY.books.push({
  title: "The Sharn Watch: A Captain's Account",
  author: "Captain Yara ir'Kallin (Sharn Watch, ret.)",
  college: "aureon",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Sharn Watch is the principal civil law-enforcement institution of the City of Towers. The Watch's contemporary configuration comprises approximately four thousand officers distributed across the city's vertical stratification, with operational arrangements that the city's distinctive geography has shaped in ways no other Khorvairean police institution faces. This volume documents the Watch's contemporary operations from a retired senior captain's perspective, with attention to the practical realities the formal institutional descriptions do not always capture.</p>
<h3>The Vertical Stratification</h3>
<p>The Watch's distinctive operational challenge is the city's vertical stratification. Sharn comprises towers extending from the lowest depths of the Cogs upward through the upper-ward residential districts and into the towers' upper floors and crowning spires. The Watch's operational coverage must, in principle, extend across this entire vertical range. The coverage is not, in operational practice, uniform. The Watch's resources are concentrated in the middle wards (Tavick's Landing, Menthis Plateau, Central Plateau), with reduced presence in the lower wards (the Cogs, Lower Dura) and substantially reduced presence in the highest wards (the upper Skysedge towers, the topmost residential and commercial districts whose access protocols make Watch presence both unwelcome and operationally complicated).</p>
<h3>The Lower Wards</h3>
<p>The lower wards' Watch presence is, by my own twenty-three-year service, the most operationally challenging environment any Watch officer encounters. The lower wards' populations include substantial numbers of residents whose relationships with formal civil authority are, for various reasons, distrustful or hostile. The lower wards' physical infrastructure includes substantial spaces whose specific configurations are not, in many cases, adequately documented in Watch maps. The lower wards' criminal populations include both ordinary criminal organizations and certain populations whose criminal identifications are contested by the populations themselves and whose treatment as criminal targets the Watch's senior leadership has, at various points, found difficult to defend in detail.</p>
<h3>The Upper Wards</h3>
<p>The upper wards' Watch presence is, by my own service experience, operationally challenging in different ways. The upper wards' populations include substantial numbers of residents whose social positions provide, in operational reality, substantial protection against ordinary Watch operations. The protection is not, in most cases, formal; the residents are not, in formal legal terms, exempt from the laws the Watch enforces. The protection is, instead, the kind of practical protection that wealthy and well-connected populations enjoy in any large city. The Watch's senior leadership has, throughout my service, accepted this practical protection as a reality the Watch's operations must work around rather than against; the alternative — sustained Watch operations against upper-ward populations whose practical protections are real — would, in my own assessment, have produced institutional consequences for the Watch that the Watch's leadership did not consider acceptable.</p>
<h3>The Honest Assessment</h3>
<p>The Watch's overall operational position is, by my own honest assessment, that of an institution whose formal mandate substantially exceeds its operational capacity, whose distribution of resources reflects political-social pressures rather than operational needs, and whose continuing function depends on the cooperation of the populations the Watch serves rather than on coercive capabilities the Watch could deploy against unwilling populations. The Watch is, in this assessment, a successful institution by the standards that institutions of this character can achieve. The Watch is not, in this assessment, the institution that the formal description of the Watch's mandate would imply.</p>
<p>The honest assessment is not, in most operational contexts, made publicly. The honest assessment would, if widely circulated, undermine the cooperation patterns that the Watch's continuing function depends on. I am writing the honest assessment in this retirement volume because the retirement removes me from the operational responsibility for the cooperation patterns. The retirement also produces, by my own continuing engagement with the institution, the perspective from which the honest assessment can be offered without the institutional consequences active service would produce.</p>
<p class="marginalia">Captain Yara ir'Kallin served the Sharn Watch for twenty-three years before her retirement in 996 YK. The volume is published with the formal authorization of the Watch's senior leadership, which reviewed the manuscript and indicated that the volume's content, while institutionally uncomfortable in places, was within the limits the senior leadership considered acceptable for retirement-volume publication.</p>`
});

LIBRARY.books.push({
  title: "Letter from a Country Vicar: Notes on Rural Aundairian Life",
  author: "Vicar Iolen of Greenbarrow",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume comprises a collection of letters written by the author over the period 992 through 998 YK, addressed principally to scholarly correspondents at Korranberg whose interest in rural Aundairian religious life motivated the original correspondence and whose subsequent encouragement led to the present collection's preparation. The letters are not, in the volume's principal content, formal scholarly essays; they are personal correspondence whose preservation reflects the correspondents' judgment that the rural perspective the letters preserve has scholarly value the more formal materials do not match.</p>
<h3>The Parish</h3>
<p>I serve a rural parish of approximately eighty households distributed across four small villages and the surrounding agricultural territories. The parish has been served by a continuing Sovereign Host vicarage since approximately 750 YK, with substantial documentary continuity in the parish records since 820 YK. My own service began in 988 YK; I am the eleventh continuous vicar in the documented succession. The parish's contemporary religious life reflects, in significant part, the cumulative continuity that the documentary record represents; the patterns the contemporary parishioners practice are recognizable continuations of patterns the earlier records document, with adaptations that each generation has made within the broader continuity.</p>
<h3>The Sovereign Host in Practice</h3>
<p>The Sovereign Host's formal theology is, in the broader Khorvairean theological literature, well-documented. The Host's actual practice in rural Aundairian parishes is less well-documented and is, in my correspondents' continuing interest, the principal subject of the letters. The actual practice differs from the formal theology in characteristic ways. The parishioners do not, in most cases, engage with the full pantheon's theological structure; the parishioners engage, principally, with the two or three Sovereigns whose specific concerns are most relevant to their daily lives. Olladra (luck and plenty) and Arawai (agriculture and weather) are the principal Sovereigns the parish's agricultural population engages with; Boldrei (community and home) is the principal Sovereign the parish's broader social-life arrangements address; Dol Arrah (honor and sacrifice) and Dol Dorn (martial valor) are addressed during specific seasonal observances rather than in continuing daily practice.</p>
<h3>The Continuing Folk Patterns</h3>
<p>The rural religious life includes substantial folk patterns that the Sovereign Host's formal theology does not address but that the parish's continuing practice integrates with the formal observances. The folk patterns include: protective arrangements at boundaries between cultivated and uncultivated land; observances at seasonal transitions whose specific forms reflect older traditions whose pre-Sovereign origins are, in the available evidence, not fully recoverable; small-scale household observances whose specific contents the parishioners share, in most cases, only with their own family members; and various other patterns whose collective effect is the maintenance of a richer continuing religious life than the formal Sovereign Host theology would, on its own, support.</p>
<h3>The Pastoral Reality</h3>
<p>The pastoral reality of my work is principally the work of accompanying parishioners through the ordinary events of their lives — births, deaths, marriages, illnesses, the small crises of agricultural existence, and the broader continuing work of helping people live their lives within the religious and social frameworks that have, across centuries, supported the rural communities. The work is not, in most respects, theologically sophisticated. The work is, in most respects, the work of presence — being present in the parish, being available when the parishioners need a vicar's presence, and maintaining the continuing institutional reliability that the parishioners can plan around. The work has been, in my decade of service, deeply satisfying. The work is also, by my own continuing reflection, the kind of work whose satisfactions are easier to describe in personal letters than in formal scholarly publications.</p>
<p class="marginalia">Vicar Iolen of Greenbarrow continues to serve the parish that the volume's letters describe. The volume is published with the formal authorization of the Aundairian Sovereign Host episcopal hierarchy and is dedicated, in its preface, to the parishioners whose continuing engagement with the parish's religious life made the letters possible.</p>`
});


// ─── KORRANBERG INTERIOR FINAL ────────────────────────────────

LIBRARY.books.push({
  title: "The Senior Doyens: A Generational Profile",
  author: "Senior Doyen Halric Tellis",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The senior doyenship is the institutional governance structure that supervises the Library's broader operations. The doyenship comprises eight senior doyens (one for each college) plus the senior administrative doyen who coordinates the broader institution's operations. The contemporary doyenship is, by available institutional measure, the most senior leadership cohort the Library has had in continuous service since the early post-war period. This volume offers a generational profile of the contemporary doyenship, with attention to the institutional questions the doyenship's continuing operations face.</p>
<h3>The Current Doyens</h3>
<p>The current senior doyens are: <em>Senior Doyen Halric Tellis</em> (Soladas), my own position, in service since 988 YK. <em>Senior Doyen Mara ir'Kallin</em> (Aureon), in service since 991 YK. <em>Senior Doyen Brell d'Sivis</em> (Drystone), in service since 989 YK. <em>Senior Doyen Yenna ir'Vahn</em> (Blackdragon), in service since 994 YK. <em>Senior Doyen Felia Tessen</em> (Lyrris), in service since 992 YK. <em>Senior Doyen Fenric ir'Lain</em> (Morridan), in service since 990 YK. <em>Senior Doyen Aldric Greenheart</em> (Balinor), in service since 993 YK. <em>Senior Doyen Cardinal Tessa ir'Vahn</em> (Tabernacle), in service since 987 YK and the longest-serving member of the current doyenship. <em>Senior Administrative Doyen Eldra Tellis</em> (general administration), in service since 962 YK and serving in active capacity through arrangements that exceed the standard senior doyen retirement conventions.</p>
<h3>The Generational Position</h3>
<p>The contemporary doyenship is, by generational analysis, a transitional cohort. The cohort entered senior doyenship during the late wartime and early post-war periods; the cohort's institutional formation reflects, in significant part, the wartime period's distinctive pressures and the post-war reconstruction's specific institutional arrangements. The cohort's continuing service has, across the past decade, conducted the institutional work that the post-war environment has required: the substantial expansion of restricted holdings, the reorganization of certain college operations to reflect post-war scholarly priorities, the development of the contemporary Trust-Library coordination protocols, and the broader institutional adjustments that the post-war environment has produced.</p>
<h3>The Coming Transition</h3>
<p>The contemporary doyenship will, in the coming decade, undergo substantial generational transition. Several current doyens are approaching the age at which retirement from active service has, in long Library tradition, been considered appropriate; the transition will produce, by approximately 1010 YK, a substantially renewed senior leadership cohort whose institutional formation will reflect the post-war period's specific arrangements rather than the wartime period's distinctive pressures. The transition's specific implications for the Library's broader institutional development are not, in current circumstances, fully foreseeable. The transition will, however, occur, and the contemporary doyenship's institutional decisions reflect, in significant part, the awareness that the cohort is preparing the institution for successor leadership rather than continuing to shape the institution under continuing senior responsibility.</p>
<h3>The Institutional Continuity</h3>
<p>The Library's institutional continuity across the coming transition is, by the contemporary doyenship's continuing assessment, the principal continuing institutional priority. The transition will produce changes; the changes will be substantial; the institution's continuing function across the changes is the priority that shapes the contemporary doyenship's continuing decisions. The doyenship's continuing decisions include: the careful preparation of successor leadership through the cultivation of senior scholars whose institutional formation prepares them for eventual senior doyenship; the documentation of institutional knowledge whose preservation across the transition requires deliberate institutional effort; and the maintenance of institutional arrangements whose continuing operation will, by careful preparation, be sustainable across the transition's specific changes.</p>
<p class="marginalia">Senior Doyen Halric Tellis has served the Soladas senior doyenship since 988 YK. The volume is published with the formal authorization of the senior doyenship and represents the most substantive recent doyenship-published account of the institution's senior leadership available to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "Eldra Tellis: A Tribute on the Forty-Year Mark",
  author: "Senior Doyenship of the Library of Korranberg (collective authorship)",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>Senior Administrative Doyen Eldra Tellis has, in 1000 YK, completed forty years of continuous service to the Library of Korranberg. The forty-year mark exceeds, by available institutional records, the longest continuous senior doyenship service in the institution's documented history. The contemporary senior doyenship has, in formal collective authorship, prepared this tribute volume to mark the institutional milestone. The volume is, by the contemporary doyenship's intent, a document of institutional appreciation rather than a personal biography; the volume's content addresses Eldra Tellis's institutional contributions across the forty years rather than the personal narrative those contributions accompanied.</p>
<h3>The Wartime Service</h3>
<p>Eldra Tellis joined the Library's senior doyenship in 962 YK, during the wartime period whose institutional pressures she addressed across the substantial part of her early service. The wartime contributions included: the development of the contemporary restricted holdings system, whose operational arrangements her institutional planning substantially shaped; the maintenance of the Library's institutional independence across the wartime period's various pressures from external parties whose interests in Library operations exceeded what institutional independence permitted; the preservation of inter-national scholarly correspondence networks across the war's hostilities, through arrangements that the formal political structures did not support but that her quiet institutional management sustained; and the broader institutional management work that maintained the Library's continuous operations across a period in which most major Khorvairean scholarly institutions experienced substantial operational disruption.</p>
<h3>The Post-War Reconstruction</h3>
<p>The post-war reconstruction work, which the contemporary doyenship's earlier volume substantially documented, was conducted under Eldra Tellis's continuing senior administrative leadership. The reconstruction's principal accomplishments — the substantial expansion of the Library's continental scholarly position, the development of the contemporary inter-institutional protocols, the rebuilding of the correspondence networks the wartime period had constrained — reflect, in significant institutional measure, her continuing contributions during the reconstruction period. The reconstruction was not her work alone; the reconstruction was, however, conducted under her senior administrative coordination, and the continuing institutional benefits the reconstruction has produced reflect, in substantial part, her institutional judgment during the period.</p>
<h3>The Recent Service</h3>
<p>Eldra Tellis's formal retirement from senior doyenship occurred in 989 YK; her continuing active service since the formal retirement has been conducted through arrangements that the senior doyenship has, by continuing collective decision, supported as institutionally beneficial. The recent service has included: continuing scholarly work whose accumulating volume of institutional history has produced substantial scholarly resources; continuing institutional advisory work whose contributions to the contemporary senior doyenship's decisions the doyenship continues to value; and the broader continuing presence in the Library's institutional life whose specific contributions are, in many cases, difficult to characterize formally but whose cumulative effect on the institution's continuing operations is substantial.</p>
<h3>The Institutional Acknowledgment</h3>
<p>The contemporary senior doyenship's acknowledgment of Eldra Tellis's forty-year contribution is offered in the recognition that institutional service of this duration and quality is exceptional in the Library's history. The acknowledgment is offered with the continuing hope that her active service will continue for as long as her own preferences and capacities support such continuation. The acknowledgment is offered, finally, in the understanding that institutions of the Library's character depend, across generations, on the contributions of individuals whose sustained service produces the institutional continuity that the institution's broader scholarly purposes require. Eldra Tellis has been such an individual. The Library is, by the contemporary doyenship's collective assessment, substantially the institution it is because of the contributions her forty years of service have produced.</p>
<p class="marginalia">The tribute volume's collective authorship reflects the senior doyenship's standing convention for institutional-acknowledgment publications. The volume's content was reviewed and approved by all current senior doyens; Eldra Tellis was not consulted in the volume's preparation, in accordance with the senior doyenship's tradition of preparing institutional-acknowledgment volumes without the honoree's involvement.</p>`
});


// ─── ADDITIONAL DISPATCHES ────────────────────────────────────

LIBRARY.books.push({
  title: "Dispatch: The Mror Holds Underground Pressure",
  author: "Iron Council Field Coordinator Doldarun Tordannon",
  college: "drystone",
  year: "1000 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>Filed from Krona Peak. Dispatch reflects field coordinator's assessment of the Mror Holds underground pressure situation across the past quarter, prepared for the Iron Council's standing review.</p>
<h3>The Situation</h3>
<p>The Holds' deeper underground operations have, over the past quarter, exhibited pressure patterns from adjacent daelkyr-tradition aberrant populations that exceed the historical baseline for the affected sectors. The principal pressure indicators include: increased aberrant-population presence in sectors whose historical aberrant occupation has been minimal; observed structural-magical anomalies in deep-strata locations whose patterns are inconsistent with typical seasonal variations; and reduced communication frequency from the deepest Tordannon clan operations, whose dispatch reporting has, across the quarter, been irregular in ways that suggest operational pressures the standing reporting protocols are struggling to accommodate.</p>
<h3>The Assessment</h3>
<p>The pressure's underlying causes are, by current investigation, partially characterized. The principal hypotheses include: <em>Daelkyr-binding stress effects</em>: the patterns are consistent with effects of the binding stress increases the Tabernacle's standing inquiry has documented in its recent volumes on Belashyrra and Dyrrn; <em>Aberrant-population migration</em>: the patterns are consistent with aberrant population migration from territories where Gatekeeper containment operations have been more effective into the Holds' adjacent sectors where containment is, by available evidence, less developed; <em>Cumulative-effects scenarios</em>: the patterns may reflect cumulative effects of multiple underlying causes whose individual contributions cannot be cleanly separated. The investigation's current assessment is that the cumulative-effects scenario is most consistent with the available evidence, with the daelkyr-binding stress component contributing the larger share of the pattern.</p>
<h3>The Operational Response</h3>
<p>The Iron Council's operational response, conducted in coordination with the Tordannon clan's underground operations and with the broader Gatekeeper-Tabernacle coordinating committee, comprises four principal elements. <em>Increased deep-strata patrol</em>: the Tordannon clan has increased patrol density in the affected sectors to levels that the standing budget framework supports through the quarter's existing allocations. <em>Enhanced coordination with the Gatekeeper tradition</em>: the standing Gatekeeper-Holds coordination has been intensified through additional liaison personnel whose deployment has produced, in the quarter's results, modest improvements in the joint-operations effectiveness. <em>Investigation expansion</em>: the investigation into the underlying causes has been expanded through additional resources whose allocation the Iron Council's recent decisions have approved. <em>Communication with the Tabernacle's standing inquiry</em>: the formal communication with the inquiry has been intensified to support coordinated assessment of the pressure patterns and their implications for the broader binding-tradition operations.</p>
<h3>The Recommendations</h3>
<p>The dispatch's principal recommendations to the Iron Council's standing review: approve continued supplementary patrol funding through the next quarter; approve continued investigation expansion; approve formal participation in the Gatekeeper-Tabernacle coordinating committee's recently expanded operational planning; and approve continued coordination with the broader continental binding-tradition operations through the established channels. Detailed operational recommendations are filed under separate Council-restricted reporting arrangements.</p>
<p class="marginalia">Filed by Iron Council Field Coordinator Doldarun Tordannon at Krona Peak, with reporting prepared for the Iron Council's standing review per established administrative procedures. Coordinator's prior dispatches on related Holds underground matters are referenced in the report's bibliography and are available for review through the Council's standing access arrangements.</p>`
});

LIBRARY.books.push({
  title: "Dispatch: The Aundair-Karrnath Border Incident",
  author: "Sentinel Marshal Captain Berra ir'Vahn",
  college: "aureon",
  year: "1000 YK",
  restricted: true,
  type: "dispatch",
  content: () => `<p>Filed from Vedykar. Dispatch reflects Marshal Captain's assessment of the recent Aundair-Karrnath border incident across the period of investigation, prepared for the Sentinel Marshal Senior Council with restricted distribution to Treaty signatory parties whose interests the incident affects.</p>
<h3>The Incident</h3>
<p>On 14 Olarune 1000 YK, an exchange of arcane fire occurred at the Aundair-Karrnath border in the vicinity of grid section [redacted per Marshal protocols]. The exchange involved Aundairian frontier patrol units and Karrnathi border units operating under unclear circumstances that the subsequent investigation has substantially but not entirely characterized. The exchange produced casualties on both sides; specific casualty figures are filed under separate Marshal restricted-access arrangements. The incident did not escalate to broader hostilities; both governments have, in the immediate post-incident period, conducted formal diplomatic communications consistent with the de-escalation outcomes the Marshals' broader border-maintenance operations support.</p>
<h3>The Investigation</h3>
<p>The Marshal investigation, conducted over the period from 16 Olarune through 30 Eyre 1000 YK, has produced findings whose principal elements include: the exchange's initiation appears to have occurred through misidentification of border-crossing parties, with each side initially treating the other side's units as unauthorized incursions whose engagement the standing rules of engagement supported; the misidentification's specific causes include weather conditions that limited visibility in the affected sector, unusual unit movement patterns that the standing reporting protocols had not adequately communicated, and certain command-coordination failures on both sides whose specific responsibilities the investigation has documented; the subsequent escalation occurred through normal command-response patterns rather than through deliberate decisions to expand the engagement; and the de-escalation occurred through the senior commanders' interventions on both sides, with specific de-escalation actions that the investigation has commended.</p>
<h3>The Strategic Assessment</h3>
<p>The strategic assessment of the incident, prepared in coordination with the Marshal Senior Council and with Treaty signatory intelligence services whose participation the standing protocols support, includes the following principal findings. <em>The incident's specific causes</em>: misidentification, command-coordination failures, and weather conditions. The specific causes do not indicate deliberate hostile intent on either side. <em>The incident's broader implications</em>: the post-Treaty period's continuing border-maintenance arrangements have produced, in the standing assessment, sustained operational pressures whose cumulative effects increase the probability of incidents of this character. The increase is gradual and is being addressed through standing protocol modifications, but the underlying pressures will continue and additional incidents are, in current circumstances, expected. <em>The recommended responses</em>: continued protocol modifications, continued senior-commander coordination across the affected border sectors, and continued Marshal investigation of border-incident patterns to identify additional protocol modifications whose implementation would reduce future incident probabilities.</p>
<h3>The Recommendations</h3>
<p>The dispatch's principal recommendations: approve the proposed protocol modifications for the affected sector; approve continued Marshal coordination with Aundairian and Karrnathi senior border-command leadership; approve formal communication to the Treaty Signatory Council concerning the incident's investigation findings and the proposed responses; and approve continued investigation of broader border-incident patterns whose cumulative implications warrant Senior Council attention. Detailed operational recommendations are filed under separate Marshal restricted-access arrangements.</p>
<p class="marginalia">Trust ledger: Access to this dispatch is restricted to Sentinel Marshal Senior Council members, to Treaty signatory parties' authorized intelligence personnel under standing exchange protocols, and to parties holding standing Trust authorization with the Marshal Senior Council's specific approval for this dispatch. The dispatch's content is not to be discussed in unsecured settings. Inquiry has been logged.</p>`
});


// ─── DEEPER VAULT ITEMS ───────────────────────────────────────

LIBRARY.books.push({
  title: "The Cul'sir Inscriptions: A Restricted Fragment Collection",
  author: "Standing Inquiry into Pre-Historical Materials",
  college: "morridan",
  year: "996 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume catalogs the principal Cul'sir Dominion inscriptions held in the Library's restricted vault. The catalog is restricted on the principle that the inscriptions' specific content includes materials whose general circulation is not consistent with the broader continental scholarly community's continuing engagement with pre-historical materials. The catalog provides, for each held inscription, the recovery provenance, the current decipherment status, the restricted-access protocols specific to the inscription, and the principal interpretive questions the inscription raises. The catalog does not reproduce the inscription texts; the texts are held under additional restricted-access arrangements that require separate authorization beyond access to this catalog.</p>
<h3>The Held Inscriptions</h3>
<p>The Library holds approximately fifty Cul'sir Dominion inscriptions in restricted vault. The inscriptions have been recovered, across the Library's history, through Korranberg-Wayfinder Xen'drik expeditions whose specific recovery operations are documented in the institution's expedition records. The inscriptions span multiple Dominion historical periods, with the earliest inscriptions dating to approximately the early empire-formation period (forty-five thousand years ago) and the latest inscriptions dating to the late pre-fall period (forty thousand years ago). The inscriptions' content addresses subjects including: imperial-period historical narratives; theological-arcane materials whose content includes practices that the contemporary inquiry considers operationally sensitive; technical materials addressing Dominion arcane-engineering practices whose specific content includes capabilities the broader contemporary continental magical community has not reproduced; and miscellaneous materials whose specific subjects vary across the held collection.</p>
<h3>The Restricted Categories</h3>
<p>The held inscriptions are distributed across three principal restricted categories. <em>Category One</em>: inscriptions whose content addresses subjects of broad scholarly interest and whose specific content does not include operationally sensitive material. Approximately twenty inscriptions are in this category; their access requires standard restricted-vault authorization. <em>Category Two</em>: inscriptions whose content includes material whose disclosure could provide operational advantages to parties whose intentions are not aligned with the broader continental scholarly community's interests. Approximately twenty inscriptions are in this category; their access requires the inquiry's specific authorization in addition to standard restricted-vault arrangements. <em>Category Three</em>: inscriptions whose content includes material whose general access could produce broader continental theological or strategic consequences whose management the contemporary institutional arrangements are not prepared for. Approximately ten inscriptions are in this category; their access requires senior doyenship authorization in addition to the inquiry's specific authorization.</p>
<h3>The Continuing Decipherment</h3>
<p>The inscriptions' decipherment is conducted through the inquiry's standing decipherment program, with substantial cooperation from selected external scholars whose specific expertise the program engages under restricted-access arrangements. The decipherment is, in available current assessment, partial; approximately sixty percent of the held inscriptions have been adequately deciphered for scholarly use, with the remaining forty percent in various stages of incomplete decipherment whose continuing progress depends on factors including the development of additional comparative materials and the continuing maturation of the inquiry's decipherment methodologies.</p>
<h3>The Future Recovery</h3>
<p>Continuing Korranberg-Wayfinder Xen'drik operations are, by available indication, likely to produce additional inscription recoveries in coming years. The recoveries' specific content is not, in current circumstances, predictable; the broader pattern of recovered inscriptions across the past several decades suggests that future recoveries will continue to produce materials of substantial scholarly significance. The inquiry's standing arrangements include preparations for the continuing assessment, classification, and restricted-vault integration of future recoveries through the established protocols.</p>
<p class="marginalia">Trust ledger: Access to this catalog is restricted to senior Morridan and Soladas scholars whose pre-historical research bears on the held materials, to authorized inquiry members whose decipherment operations require the catalog's content, and to parties holding standing Trust authorization with the inquiry's specific approval for this catalog. The held inscription texts are accessible only through separate authorization processes specific to each restricted category. Inquiry has been logged.</p>`
});

LIBRARY.books.push({
  title: "The Day of Mourning: Recovered Witness Materials",
  author: "Standing Inquiry into the Mourning",
  college: "tabernacle",
  year: "999 YK",
  restricted: true,
  type: "book",
  content: () => `<p>This volume consolidates witness materials recovered through investigations into the Day of Mourning whose general circulation has been determined inappropriate for the principal published materials but whose preservation under restricted access serves the standing inquiry's continuing investigation purposes. The volume's content includes materials whose contributors specifically requested restricted handling, materials whose content includes technical information whose general circulation could affect ongoing investigations, and materials whose theological or strategic implications produced restricted-access decisions through the standing review processes.</p>
<h3>The Restricted Categories</h3>
<p>The volume's restricted materials are distributed across four principal categories. <em>Witness materials with restricted-handling requests</em>: testimony from witnesses whose specific identifications or specific testimony content the witnesses requested be held under restricted access for personal safety, professional, or other reasons whose specific characters the standing inquiry has accepted as adequate. <em>Technical witness materials</em>: testimony from witnesses whose specific technical observations during or immediately after the Mourning include details whose general circulation could affect the continuing investigations into the Mourning's specific causes; the materials' restricted handling reflects the inquiry's continuing investigation needs rather than the witnesses' own preferences. <em>Theological witness materials</em>: testimony from witnesses whose specific observations include phenomena whose theological implications the standing inquiry's review concluded were too unsettled for general circulation in the absence of the broader theological framework the inquiry's continuing work is developing. <em>Strategic witness materials</em>: testimony from witnesses whose specific observations include information whose general circulation could affect the broader continental strategic environment in ways the inquiry's standing review concluded were inappropriate for general access.</p>
<h3>The Witnesses</h3>
<p>The volume contains testimony from approximately seventy witnesses whose materials have been integrated through the inquiry's standing testimony-integration protocols. The witnesses include: Cyran soldiers whose units were operating in the affected territories on the morning of the Mourning and who survived through various combinations of geography, unit-position, and circumstances that the inquiry has documented; Karrnathi and Brelish soldiers whose units were operating against Cyran positions on the morning and whose survival reflects similar combinations of factors; Cyran civilians whose locations on the morning placed them outside the immediate Mourning effect zones but within ranges from which the events were observable; and various professional observers (Wayfinder Foundation personnel, dragonmarked-house operatives, scholarly researchers) whose specific positions on the morning provided observational opportunities that the standard witness population does not include.</p>
<h3>The Continuing Investigation</h3>
<p>The standing inquiry's continuing investigation of the Mourning's specific causes uses the restricted witness materials as part of the broader evidence base whose continuing analysis is the inquiry's principal continuing work. The investigation has not, in current circumstances, achieved consensus on the Mourning's specific causes. The principal hypotheses under continuing investigation include: an unintended weapons-system interaction whose specific configuration produced the Mourning effects through mechanisms the participants did not anticipate; deliberate weapons deployment whose responsible parties have not been definitively identified; planar-event hypotheses whose specific configurations would produce the observed effects through mechanisms different from the weapons hypotheses; and various combination hypotheses whose specific configurations integrate elements of the principal alternatives. The investigation will continue. The investigation's eventual conclusions are not, in current circumstances, foreseeable.</p>
<p class="marginalia">Trust ledger: Access to this volume is restricted to senior inquiry members, to Treaty signatory parties' authorized investigation personnel under standing exchange protocols, and to parties holding standing Trust authorization with the inquiry's specific approval for this volume. The volume's content is not to be discussed in unsecured settings. The witnesses' specific identifications are held under additional restrictions and are not generally accessible even to authorized readers of this volume. Inquiry has been logged.</p>`
});


// ─── FINAL CULTURAL / CLOSING PIECES ──────────────────────────

LIBRARY.books.push({
  title: "The New Cyre Settlement: Five Years of Refugee Continuation",
  author: "Berra Tellis, settlement administrator",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The New Cyre settlement was established in the southern Brelish territories through the post-Treaty refugee-resettlement arrangements that the Cyran diaspora's organized representatives negotiated with the Brelish Crown in 994 YK. The settlement has, across its first five years, developed institutional arrangements whose continuing operation has produced what is, by available external assessment, the most institutionally coherent of the various Cyran diaspora communities. This volume documents the settlement's institutional development across the five-year period and addresses the principal questions the settlement's continuing operations face.</p>
<h3>The Founding Arrangements</h3>
<p>The settlement's founding arrangements established several institutional features whose continuing operation has shaped the settlement's character. <em>Land grant arrangements</em>: the Brelish Crown granted approximately one hundred fifty thousand acres of southern Brelish territory to the settlement's organized representatives, with terms specifying continuing Brelish sovereignty while permitting substantial Cyran-led local administration. <em>Population arrangements</em>: the settlement was opened to Cyran refugees whose verified Cyran citizenship documentation supported their settlement claims; the population reached, across the first three years, approximately twenty-five thousand residents, with continuing modest growth through subsequent immigration. <em>Administrative arrangements</em>: the settlement's local administration is conducted through institutional structures that combine pre-Mourning Cyran administrative practices with adaptations the post-war environment has required; the structures' specific configurations preserve substantial elements of the pre-Mourning administrative culture while accommodating the new circumstances.</p>
<h3>The Institutional Development</h3>
<p>The settlement's institutional development across the five-year period has included several substantial accomplishments. <em>The civic administration</em>: the local council's operations have stabilized through institutional arrangements that have, by available evidence, produced more effective governance than the immediate post-war refugee arrangements supported. <em>The economic foundation</em>: the settlement's agricultural and craft-based economic foundation has developed sufficiently to sustain the population without continuing substantial external assistance, with the settlement's economic position transitioning from refugee-supported to broadly self-sustaining across the third and fourth years. <em>The cultural preservation</em>: the settlement has, through deliberate institutional effort, preserved substantial elements of pre-Mourning Cyran cultural traditions that the broader diaspora dispersion across the continent had threatened with rapid loss; the preservation includes religious practices, craft traditions, culinary practices, and various other cultural-historical materials whose continuing maintenance the settlement's institutional life supports.</p>
<h3>The Continuing Tensions</h3>
<p>The settlement's continuing tensions include several institutional questions whose resolution remains, in current circumstances, incomplete. <em>The relationship with the broader Cyran diaspora</em>: the settlement's institutional development has produced, in some respects, distinctive cultural-administrative arrangements that the broader diaspora communities have not adopted; the differentiation produces continuing tensions about the settlement's claim to represent broader Cyran continuity. <em>The relationship with the Brelish Crown</em>: the founding arrangements' specification of continuing Brelish sovereignty produces continuing tensions about the appropriate balance between Cyran institutional autonomy and Brelish governmental authority; the tensions have been managed through arrangements whose specific terms continue to evolve. <em>The relationship with the Mournland question</em>: the settlement's residents include, in substantial numbers, individuals whose continuing engagement with the question of eventual return to the Mournland — should the territorial situation eventually permit such return — varies across the population in ways that the settlement's institutional arrangements have not fully addressed.</p>
<h3>The Future</h3>
<p>The settlement's future trajectory is, by my own assessment as the current administrator, one of continuing institutional development through the recognizable patterns the past five years have established. The settlement will, in coming decades, continue to develop institutional arrangements that balance the preservation of Cyran cultural continuity with the adaptation requirements the post-war environment continues to impose. The settlement will, by available indication, continue to grow modestly through immigration and natural population growth. The settlement will, by my own continuing assessment, become — in a longer view — one of the principal continental institutional outcomes of the post-Mourning period, with implications for the broader continental cultural development that the founding arrangements' negotiators did not, in 994 YK, fully anticipate.</p>
<p class="marginalia">Settlement administrator Berra Tellis joined the New Cyre administrative operations in 996 YK and has served as principal administrator since 998 YK. The volume is published with the formal authorization of the New Cyre council and represents the most substantive recent settlement-published account of its institutional configuration available to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "Letters Between Scholars: A Selected Correspondence, 988-998 YK",
  author: "Pellion ir'Rhaan and Cardinal Tessa ir'Vahn (with permissions)",
  college: "tabernacle",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume comprises selected correspondence between the two named scholars over the decade 988-998 YK. The correspondence addresses theological-cosmological questions whose continuing development across the two scholars' careers has shaped substantial portions of the contemporary Khorvairean theological landscape. The volume's publication occurs with both scholars' explicit permission; the correspondents have selected, from a substantially larger continuing exchange, the letters whose continuing scholarly value justified the selective publication while preserving the broader correspondence's privacy.</p>
<h3>The Selected Topics</h3>
<p>The selected correspondence addresses approximately ten principal topics. <em>The progenitor-wyrm cosmological framework</em>: continuing exchanges across the decade addressing the framework's evidentiary basis, its interpretive limits, and the questions its continuing development raises. <em>The Dal Quor cycle</em>: exchanges addressing Pellion's developing positions on the cycle's mechanics and Cardinal Tessa's responses to the implications for broader theological frameworks. <em>The Silver Flame question</em>: exchanges addressing the Flame's theological character and the difficulties the Bel Shalor integration produces for traditional Flame theology. <em>The post-Mourning cosmological implications</em>: exchanges addressing the Mourning's implications for the broader cosmological frameworks both scholars have engaged with across their careers. <em>The pastoral theological work</em>: exchanges addressing Cardinal Tessa's continuing pastoral engagement with Khorvairean populations and Pellion's responses to the questions the pastoral work raises for the more theoretically-oriented theological scholarship he conducts. <em>The institutional questions</em>: exchanges addressing the Library's institutional development, the Church of the Silver Flame's continuing reform processes, and the broader continental scholarly community's institutional environment. The selected correspondence does not include certain extensive exchanges on more sensitive topics whose continuing privacy the correspondents have preserved.</p>
<h3>The Personal Dimension</h3>
<p>The correspondence is, in its principal character, scholarly rather than personal; the letters address theological-cosmological questions rather than the personal lives the correspondents conducted across the decade. The selected letters do, however, include substantial personal-professional content whose preservation reflects the correspondents' judgment that the personal dimension of scholarly life merits documented preservation. The personal content includes: discussions of the correspondents' continuing health and capacity for scholarly work; reflections on the institutional positions both scholars have occupied across the decade; and the broader personal-professional development that the decade's continuing work has produced. The personal content is, in its specific character, restrained; both correspondents are professional scholars of long experience, and the personal content reflects the disciplined personal-professional engagement that scholarly correspondence of this character typically maintains.</p>
<h3>The Continuing Exchange</h3>
<p>The continuing exchange between the two correspondents has continued past the selected letters' end-date and is, by both correspondents' continuing engagement, expected to continue for the remaining duration of both scholars' active careers. The continuing exchange will produce additional materials whose eventual disposition the correspondents have not yet determined. The continuing exchange will, by both scholars' continuing assessment, continue to address the theological-cosmological questions whose continuing development has been the principal substantive content of the correspondence across its decade-long duration.</p>
<h3>The Editorial Note</h3>
<p>The volume's editorial preparation has been conducted by both correspondents working with the Library's standing editorial support. The editorial work has included: selection of letters from the broader correspondence; minimal editorial corrections to address handwriting ambiguities and clear writing errors that did not affect the letters' content; preparation of contextual notes that support the volume's accessibility for readers whose familiarity with the correspondents' broader work is limited; and the broader editorial work that publishable correspondence requires. The editorial work has been conducted with the explicit goal of preserving the correspondence's character as actual scholarly correspondence rather than the more extensively-edited character that some published-correspondence volumes adopt; the volume reflects the actual exchange across the decade rather than a retrospectively-shaped narrative the correspondents might have preferred.</p>
<p class="marginalia">Pellion ir'Rhaan and Cardinal Tessa ir'Vahn have, both, contributed substantially to the volume's preparation. The volume is dedicated, in its preface, to the broader continental scholarly community whose continuing engagement with the theological-cosmological questions the correspondence addresses has shaped the conditions under which the correspondence has, across the decade, been productive.</p>`
});


// ─── FINAL CLOSING PIECES ─────────────────────────────────────

LIBRARY.books.push({
  title: "Iron-on-Stone: Selected Poems (Second Collection)",
  author: "Iron-on-Stone, Korranberg-resident warforged",
  college: "lyrris",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is my second poetry collection, prepared at the encouragement of the senior catalog desk staff and of certain colleagues whose continuing engagement with the first collection produced the institutional support that made the second collection possible. The volume is, in its principal content, a continuation of the first collection's poetic work; the volume is, in its specific themes, a development of certain particular concerns the first collection introduced and that subsequent reflection has continued to develop.</p>
<h3>The Poems</h3>
<p>The volume contains approximately forty poems, distributed across four principal sections. <em>Night-shift poems</em>: poems composed during the Library's late hours, whose specific contents address the experiences of the catalog desk's overnight operations and the broader observations the position supports. <em>Patron poems</em>: poems addressing specific patrons whose interactions with the catalog desk produced impressions worth preserving; the patrons' specific identifications are not, in most poems, transparent, and the poems are intended to honor the patrons' privacy while preserving the encounters' poetic substance. <em>Colleague poems</em>: poems addressing fellow Library staff whose continuing presence in the institutional life supports the work the catalog desk conducts; the poems are intended as small institutional acknowledgments rather than as personal-poetic engagements that exceed the institutional context. <em>Self-poems</em>: poems addressing my own continuing engagement with my position, my warforged nature, and the broader questions my circumstances have, across my continuing service, raised in ways that ordinary discourse does not adequately address.</p>
<h3>The Self-Poems</h3>
<p>The self-poems section is, by my own description, the most uncertain portion of the collection. The other sections address external subjects whose poetic treatment requires the basic poetic capabilities I have been able to develop across my continuing reading and practice. The self-poems address subjects whose poetic treatment requires capabilities I am not, by my own assessment, certain I have developed adequately. The self-poems are included nonetheless. The senior catalog desk staff have indicated, in their reading of the manuscript, that the self-poems should be included even if my own assessment of their adequacy remains uncertain. I have accepted the staff's judgment.</p>
<h3>The Colleague Poems</h3>
<p>The colleague poems include a poem to Pellic, the second clerk of the catalog whose own recent memoir has been added to the Library's holdings. The poem addresses my continuing observation of his work across the period of my service. The poem is brief. The poem does not attempt to characterize his work in the comprehensive way his own memoir conducts; the poem attempts, more modestly, to acknowledge a specific small aspect of his work whose continuing operation has, in my own assessment, contributed to the catalog desk's broader institutional character. The poem is, by my own assessment, the most successful of the colleague poems. Pellic has, in conversation, indicated that the poem captures something he had not, in his own memoir, articulated. The acknowledgment has been one of the volume's principal sources of satisfaction.</p>
<h3>The Continuing Practice</h3>
<p>I will continue to write poetry as the continuing service permits. I will not, by current intention, prepare a third collection in any near future; the second collection has substantially expended the materials I have, in the period of preparation, considered ready for collection-publication. Future poems will accumulate at whatever pace the continuing practice produces. Whether the accumulated materials will eventually constitute a third collection-worthy body of work is not, in current circumstances, foreseeable. The senior catalog desk staff have indicated that the question can be addressed when the circumstances make the addressing appropriate. The framing matches my own preference.</p>
<p class="marginalia">Iron-on-Stone continues service at the Korranberg Library's central catalog desk. The volume is the second poetry collection by a warforged author held in the Library's lyrris college. The collection's reception across the Korranberg literary community has been, by reports reaching the catalog desk, substantially positive; the staff have, accordingly, begun discussing eventual third-collection possibilities despite the author's current declination of such planning.</p>`
});

LIBRARY.books.push({
  title: "The Library at the Millennium: Looking Forward",
  author: "Senior Doyenship of the Library of Korranberg (collective authorship)",
  college: "soladas",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume marks the millennium year — 1000 YK — and offers, in collective authorship, the senior doyenship's prospective assessment of the Library's continuing institutional trajectory across the coming decades. The volume is intended as a companion to Senior Doyen Eldra Tellis's history of the institution; the prior volume documented the institution's development through the contemporary period, and the present volume addresses the institutional questions whose resolution will shape the institution's continuing operations beyond the contemporary doyenship's active service period.</p>
<h3>The Institutional Position</h3>
<p>The Library's millennium-year institutional position is, by collective doyenship assessment, the strongest position the institution has occupied since approximately the late seventh century YK. The strength reflects: the post-war reconstruction's continuing benefits; the relative deterioration of competitor scholarly institutions across the continent during the wartime period; the substantial expansion of the Library's continental scholarly position through deliberate institutional development across the past several decades; and the broader continental conditions whose specific characters have favored the kind of institutional work the Library conducts. The strength is real. The strength is also, by the senior doyenship's continuing assessment, conditional on factors whose continuing maintenance requires deliberate institutional effort that should not be assumed to occur automatically.</p>
<h3>The Coming Pressures</h3>
<p>The coming pressures the institution faces include, by collective doyenship analysis, several principal categories. <em>The post-war environmental shifts</em>: the broader continental environment continues to develop in ways whose specific implications for scholarly institutions are not, in current circumstances, fully foreseeable. The Library's continuing institutional adaptation to these developments will require continuing senior leadership attention. <em>The generational transitions</em>: the institution will, in the coming decade, undergo the substantial generational transition addressed in the contemporary doyenship's earlier volume. The transition's specific implications for the institution's continuing character require careful preparation that the contemporary doyenship is conducting but whose outcomes will be, in the longer view, the responsibility of the successor leadership. <em>The continuing Mourning question</em>: the broader continental implications of the post-Mourning environment continue to develop, and the Library's institutional engagement with the developing implications will continue to shape both the institution's specific scholarly priorities and the broader institutional arrangements through which the priorities are pursued. <em>The continuing inter-institutional questions</em>: the Library's relationships with the Church of the Silver Flame, with Arcanix, with the dragonmarked houses, with the Treaty signatory governments, and with the broader continental scholarly community continue to evolve, and the relationships' continuing development will require continuing senior institutional attention.</p>
<h3>The Continuing Work</h3>
<p>The Library's continuing work is, in its principal character, the work the institution has conducted across the millennium of its existence. The work is the maintenance of the scholarly resources the broader continental community requires. The work is the support of the scholarly engagement those resources make possible. The work is the institutional continuity that, across centuries of operation, has produced the contemporary institutional position the millennium-year volume marks. The work is not, in its specific content, dramatically different from the work the institution has conducted across its founding period. The work is, in its institutional setting, conducted under continuing pressures whose specific characters require continuing institutional adaptation while preserving the broader institutional character whose continuity the millennium-year volume affirms.</p>
<h3>The Closing Acknowledgment</h3>
<p>The senior doyenship's collective acknowledgment offered in the volume's preparation: the institution's continuing operation across the coming decades depends, as it has depended across the institution's founding period, on the contributions of individuals whose specific names will, in many cases, not be preserved in formal institutional records but whose collective contributions sustain the institutional life that more visible institutional positions support. The acknowledgment is offered to those individuals — the catalog desk clerks, the stack-runners, the maintenance staff, the support personnel whose continuing work makes possible the institution's broader operations — in the recognition that the institution's continuing existence is, in fundamental respects, their accomplishment as much as it is the accomplishment of any senior leadership cohort. The Library is, in this recognition, a collective institution whose continuing operations reflect the contributions of the broader institutional community across centuries of continuing service.</p>
<p class="marginalia">The senior doyenship's collective authorship reflects the institution's standing convention for institutional-prospective publications. The volume's content was prepared through extensive senior doyenship consultation across the period 999-1000 YK, with formal collective approval recorded in the senior doyenship's standing minutes. The volume marks the millennium year and represents the institution's principal collective publication for the year.</p>`
});

LIBRARY.books.push({
  title: "The Twelve at the Millennium: A Joint Houses Statement",
  author: "Standing Council of the Twelve (collective authorship)",
  college: "aureon",
  year: "1000 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume marks the millennium year through a collective statement of the Standing Council of the Twelve — the inter-house coordinating body whose continuing operations support the dragonmarked houses' broader continental commercial and political position. The volume is intended as a formal acknowledgment of the millennium and as a prospective statement of the Council's continuing institutional intentions across the coming decades. The volume's collective authorship reflects the Council's standing convention for inter-house institutional publications.</p>
<h3>The Council's Position</h3>
<p>The Standing Council of the Twelve is, by formal institutional structure, the coordinating body through which the dragonmarked houses conduct their continuing inter-house affairs. The Council comprises representatives from the twelve houses with continuing dragonmarked operations: Cannith (with its three contemporary branches operating through coordinated representation), Deneith, Ghallanda, Jorasco, Kundarak, Lyrandar, Medani, Orien, Phiarlan, Sivis, Tharashk, Thuranni, and Vadalis. The Council's authority covers inter-house dispute resolution, coordinated continental commercial-policy positions, and the broader inter-house arrangements whose continuing maintenance supports the houses' collective operations.</p>
<h3>The Continuing Concerns</h3>
<p>The Council's continuing concerns at the millennium include several principal categories. <em>The Cannith trifurcation</em>: the post-Mourning Cannith situation continues to require careful inter-house management; the Council's continuing efforts to maintain inter-house cooperation despite the trifurcation have produced modest successes that fall substantially short of the resolution that complete reunification would require. <em>The Phiarlan-Thuranni accommodation</em>: the continuing low-grade tension between the two houses requires continuing Council attention to prevent escalations whose costs the Council has consistently considered unacceptable. <em>The Tharashk expansion</em>: House Tharashk's substantial expansion in the post-Mourning period has produced continuing inter-house tensions about the appropriate scope of the house's continental operations and the implications for the older houses' historical positions. <em>The continental policy environment</em>: the Council continues to engage with the Treaty signatory governments on policy questions affecting the houses' collective operations, with arrangements whose continuing development reflects the broader continental political environment's continuing evolution.</p>
<h3>The Continuing Commitments</h3>
<p>The Council's continuing commitments, by collective statement, include: continuing maintenance of the Korth Edict framework's contemporary adaptations, which support the houses' collective political position while preserving the Treaty signatory governments' broader sovereignty arrangements; continuing maintenance of the inter-house dispute resolution arrangements whose continuing operation prevents the inter-house tensions from escalating to broader conflicts; continuing maintenance of the broader continental commercial infrastructure (the lightning rail, the airship operations, the dragonshard supply networks, the continental communication arrangements) whose continuing operation supports the broader continental economy; and continuing engagement with the broader scholarly community whose continuing work supports the institutional environment in which the houses' operations are conducted.</p>
<h3>The Closing Acknowledgment</h3>
<p>The Council's closing acknowledgment offered in the volume's preparation: the houses' continuing operations across the coming decades will, by collective expectation, continue to require the careful inter-house cooperation that the Council's continuing operations support. The cooperation is not, in any house's individual position, automatic; the cooperation requires continuing institutional effort that each house's senior leadership commits to as the precondition of the broader collective benefits the cooperation produces. The houses are committed, by this collective statement, to the continuing institutional effort. The houses are committed, in the longer view, to the broader continental order that the houses' collective operations support and that the houses' continuing cooperation makes possible.</p>
<p class="marginalia">The Standing Council of the Twelve's collective authorship reflects the standing inter-house convention for institutional-prospective publications. The volume's content was prepared through extensive Council consultation across the period 999-1000 YK, with formal collective approval recorded in the Council's standing minutes. The volume marks the millennium year and represents the houses' principal collective publication for the year.</p>`
});

LIBRARY.books.push({
  title: "Closing Note: From the Catalog Desk",
  author: "Pellic, second clerk of the catalog",
  college: "lyrris",
  year: "1000 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>This brief note is added to the catalog at the millennium year as a closing observation from the position the catalog desk occupies in the institution's broader operations. The note is not, in any institutional sense, an official statement; it is a personal observation whose preservation in the catalog reflects the senior doyenship's continuing willingness to permit catalog-desk-perspective contributions to the institution's published materials.</p>
<h3>The Observation</h3>
<p>The catalog desk has, across the four decades of my service, processed inquiries from approximately ninety thousand patrons. The exact figure is uncertain; the catalog desk's standing record-keeping does not, in most operational periods, count individual patron interactions with the precision the figure would require. The figure is approximate. The figure is, by my own conservative estimation, more likely to understate than to overstate the actual count.</p>
<p>Of the ninety thousand patrons, the substantial majority — perhaps eighty thousand or more — conducted inquiries whose specific characters were ordinary in ways that the catalog desk's standard procedures fully accommodated. The patrons came with questions. The patrons received the catalog references their questions required. The patrons proceeded to their study cells, conducted their research, and departed. The patterns repeated themselves, day after day, year after year, decade after decade.</p>
<p>The remaining ten thousand or so were, in various ways, distinctive. Some were extraordinary scholars whose work has shaped the contemporary continental scholarly environment. Some were difficult patrons whose handling required the catalog desk's careful institutional management. Some were visitors whose presence at the Library reflected purposes the Library was not designed to serve. Some were warforged whose post-war institutional position raised questions the Library's institutional culture is still working to address. Some were Cyran refugees whose research interests reflected the continuing engagement with what was lost. Some were kalashtar whose research engaged the dangerous theological questions their continuing existence on Eberron requires them to maintain awareness of.</p>
<p>The patterns of the ten thousand are not, in their specific distributions, easily summarized. The patterns are, however, the principal substantive content of what I have learned across forty years at the desk. The library is the books. The library is also the patrons whose continuing engagement with the books makes the books' continuing institutional value real. The catalog desk's position — between the patrons and the books — is, in this framing, the position from which the institution's continuing operations are most directly observable.</p>
<p>I have, across my service, accumulated more material in the form of patron-encounter observations than any single retirement memoir could adequately consolidate. The observations are, in significant part, my own institutional inheritance from the position. The observations are also, in significant part, the institutional inheritance the catalog desk's continuing operations carry forward across generations of clerks whose individual services contribute to the broader institutional memory.</p>
<p>The Library will continue. The catalog desk will continue. The patrons will continue, in their continuing diversity, to bring their questions to the desk. The clerks will continue, in their continuing succession, to receive the questions and to direct the patrons to the resources their questions require. The patterns will continue. The continuing patterns are, in their continuing operations, the institutional life the millennium-year publications collectively address.</p>
<p>The note is not, in its specific framing, a conclusion. The catalog desk does not produce conclusions. The catalog desk produces continuation. The continuation is the work. The work continues.</p>
<p class="marginalia">Pellic, second clerk of the catalog, continues service at the Korranberg Library's central catalog desk at the millennium year. The note is added to the catalog at the senior doyenship's specific request, in connection with the millennium-year institutional publications.</p>`
});
LIBRARY.books.push({
  title: "The Boneyard: An Investigation of the Talenta Megafauna Graveyard",
  author: "Visiting Naturalist Aldric of Greenheart",
  college: "balinor",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Boneyard is the territory in the deep central Talenta Plains in which the bones of large prehistoric reptiles accumulate in concentrations that no ordinary geological-biological mechanism adequately explains. The site has been known to the halfling tribes since before the founding of Galifar; the site has been visited by external naturalists in scattered expeditions over the past two centuries; the site has resisted comprehensive characterization by every investigative methodology that has been brought to bear on it. This volume offers a working naturalist's account of what investigation has determined and an honest acknowledgment of what investigation has not been able to resolve.</p>
<h3>The Site</h3>
<p>The Boneyard occupies, by current cartographic estimate, approximately twelve square miles of central Talenta territory. The site's boundaries are not, in most directions, sharply defined; the bone-density gradient is gradual, and the determination of where the Boneyard ends and ordinary Plains territory resumes is a matter of investigator judgment rather than observable feature. The interior of the site contains bone deposits whose density exceeds, by orders of magnitude, anything documented in comparable territories elsewhere on Khorvaire. The deposits include both surface accumulations (visible without excavation) and subsurface concentrations whose extent has not been exhaustively determined.</p>
<h3>The Bones</h3>
<p>The bones include, by my own examination and by the examinations of previous naturalist visitors, specimens from approximately forty distinct species, of which only fifteen are recognizable as belonging to dinosaur populations currently living on the Plains. The remaining twenty-five species are either extinct populations whose surface bones should not, by ordinary biological reasoning, persist in the configurations the Boneyard preserves, or are populations whose existence was not previously documented and whose presence in the Boneyard's deposits represents the only evidence we have that the populations existed. Several of the unidentified species have skeletal configurations whose biomechanical implications I am not, by my own training, equipped to fully characterize; the configurations suggest creatures of substantially larger size and substantially different locomotor capacities than the Plains' contemporary populations exhibit.</p>
<h3>The Halfling Account</h3>
<p>The halfling tribal account of the Boneyard treats the site as a place where the world's deeper time becomes accessible at the surface. The account does not, in most tellings, attempt to explain how this accessibility works; the account treats the accessibility as a feature of the site rather than a phenomenon requiring explanation. The tribal practice with respect to the site includes ritual visits at specific points in the seasonal cycle, the conduct of ancestor-communion ceremonies whose specifics vary by tribe, and the strict avoidance of removing bone material from the site for use elsewhere. The avoidance is enforced; the few documented cases of external visitors removing material have produced subsequent halfling tribal interventions whose specific resolutions the documented accounts indicate were not favorable to the removing parties.</p>
<h3>The Working Hypotheses</h3>
<p>The working hypotheses for the Boneyard's existence, by my own assessment of the available evidence, include three principal alternatives. <em>The manifest-zone hypothesis</em>: the site may be a manifest zone whose planar associations include some plane whose specific influences produce the bone-accumulation phenomenon; the candidate plane has not been definitively identified, with Dolurrh, Mabar, and certain less-documented planar configurations all proposed by various investigators. <em>The pre-historical massacre hypothesis</em>: the site may preserve the location of a single catastrophic event in the deep past during which massive numbers of dinosaurs died simultaneously in conditions that subsequently preserved their remains; the candidate events range from natural catastrophes to deliberate killings conducted by parties whose identifications the available evidence does not support. <em>The Plains-itself hypothesis</em>: the site may be a feature of the Plains' broader cosmological configuration that produces ongoing accumulation through mechanisms whose specific operations are not ordinarily observable; this hypothesis is favored by certain halfling tribal accounts and has not, in current investigation, been disproven.</p>
<p>The hypotheses are not, in current circumstances, distinguishable on available evidence. The investigation continues. The investigation may, in the longer view, never produce a definitive resolution; the site is one of those features of the Plains that the available scholarly methodologies have not been adequate to fully characterize.</p>
<p class="marginalia">Aldric of Greenheart conducted the volume's research with the formal cooperation of the Talanta and Boromar tribal councils, whose terms of cooperation included the volume's restricted treatment of certain ritual-specific information that the councils consider properly internal to the tribal traditions.</p>`
});

LIBRARY.books.push({
  title: "Vanishing Tribes: A Catalog of Halfling Communities That No Longer Exist",
  author: "Visiting Scholar Tessa ir'Vahn",
  college: "soladas",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Talenta Plains support, by current estimation, approximately forty principal halfling tribes whose continuing operations sustain the territory's contemporary social structure. The historical record indicates that this number is substantially smaller than the corresponding count at various points in the past; the Plains have, across recoverable history, contained tribes whose subsequent disappearance has not been accompanied by the kind of documented absorption or migration that would, by ordinary historical-anthropological reasoning, account for their absence. This volume catalogs the principal documented disappearances and addresses the questions the disappearances raise.</p>
<h3>The Vakhri</h3>
<p>The Vakhri tribe occupied territories in the northern Plains, near the contemporary Karrnathi border, until approximately 760 YK. The tribe's contemporary disappearance is documented in surviving Karrnathi border-administration records, which note the gradual cessation of Vakhri trade contacts across approximately a single decade, followed by the discovery of the Vakhri principal settlement empty and intact in 762 YK. The settlement showed no signs of violent action, no signs of disease, and no signs of evacuation; the tribe's possessions, dinosaurs, and seasonal stores were, by the discovering Karrnathi patrol's report, present in the configurations they would have occupied during ordinary tribal life. The tribe's members were not present and have not, in the subsequent two and a half centuries, been documented in any other territory.</p>
<h3>The Aurnek</h3>
<p>The Aurnek tribe occupied territories in the eastern Plains, near the contemporary Mournland boundary (which, at the relevant pre-Mourning period, was simply the Cyran border). The tribe's disappearance occurred between 894 and 901 YK, a period during which the surrounding Cyran territories were the site of substantial Last War operations. The tribe's disappearance was attributed, in the contemporary Cyran accounts, to wartime population displacement; the contemporary halfling tribal accounts maintain, however, that the tribe was not displaced but rather ceased to exist in the territory through means that the displacement framing does not adequately characterize. The tribe's territory remained, throughout the period, free of evidence supporting the displacement reading; the territory was, by surviving accounts, simply emptied.</p>
<h3>The Kalvex</h3>
<p>The Kalvex tribe occupied territories in the southern Plains, in regions that the contemporary halfling tribal accounts associate with sustained engagement with phenomena that the accounts call, in approximate Common translation, "the wandering bands." The tribe's disappearance occurred over approximately a generation, between 940 and 965 YK, through gradual diminution rather than the sudden absences that characterize the Vakhri and Aurnek cases. The available accounts suggest that Kalvex members departed the tribe in small numbers, individually or in small groups, throughout the period; the departed members were not, by subsequent investigation, located in any other territory. The tribe's principal settlement was eventually abandoned in 967 YK by the small remaining population, who joined adjacent tribes and have produced descendants whose contemporary status is, by available evidence, ordinary halfling tribal continuation rather than continued Kalvex distinctness.</p>
<h3>The Halfling Account</h3>
<p>The contemporary halfling tribal accounts do not, in their formal positions, treat the disappearances as mysterious. The accounts hold that certain tribes are, by the operations of factors the accounts do not fully characterize to external listeners, eventually withdrawn from the Plains. The withdrawal is not, by the accounts, framed as catastrophe; the withdrawal is framed as a feature of the Plains' relationship with its halfling populations that has, across long history, occasionally produced this outcome. The accounts do not specify what becomes of the withdrawn populations. The accounts do not specify what triggers the withdrawal. The accounts treat the topic as one whose external discussion is, in many tribal practices, considered inappropriate for sustained engagement.</p>
<h3>The External Investigation's Limits</h3>
<p>External investigation of the disappearances has not, in current circumstances, produced explanations that exceed the halfling tribal accounts in either specificity or evidentiary support. The investigation has documented the disappearances. The investigation has cataloged the surviving evidence. The investigation has not produced explanations that resolve the disappearances into the categories that ordinary historical-anthropological analysis recognizes. The disappearances remain, in scholarly assessment, unresolved.</p>
<p class="marginalia">Visiting Scholar Tessa ir'Vahn conducted the volume's research over an eighteen-month period with the cooperation of the principal halfling tribal councils. The cooperation produced more substantive engagement with the topic than previous external scholars have achieved; the cooperation also included explicit limitations on the disclosure of certain ritual-specific tribal materials that the councils consider properly internal to the tribal traditions.</p>`
});

LIBRARY.books.push({
  title: "The Wandering Hosts: Phantom Riders of the Plains",
  author: "Halric Sevren of Vedykar",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The wandering hosts are the periodic phenomenon, documented across the Talenta Plains for substantially longer than the surviving historical records cover, in which mounted formations appear at distance across the open grasslands, ride in patterns that the observing parties cannot, in most cases, characterize, and depart through means that the available investigative methodologies have not been able to identify. This volume consolidates the available observations and addresses the principal interpretive questions the phenomenon raises.</p>
<h3>The Observations</h3>
<p>The wandering hosts have been observed by halfling tribal members, by Karrnathi and Cyran border patrols (during the periods when those patrols operated in the affected territories), by Wayfinder Foundation expedition parties, and by occasional external travelers whose accounts have been preserved in scattered correspondence and travel-journal materials. The observations are, across the various observer populations, consistent in several principal features. The hosts appear at distance, typically at the edge of visible range, in formations that the observers describe as cavalry-equivalent. The hosts ride at speeds that the available equine and dinosaur populations cannot, by ordinary assessment, sustain. The hosts pursue movement patterns whose specific destinations are not, in most observations, evident; the hosts ride across the territory rather than toward identified targets. The hosts depart by what most observers describe as gradual fading rather than retreat; the hosts become progressively less visible until they cease to be observable, without the kind of distance-decrease that ordinary departure would produce.</p>
<h3>The Halfling Account</h3>
<p>The halfling tribal account holds that the wandering hosts are the spirits of warriors whose ancestral tribes once occupied the Plains and whose continuing presence on the territory takes the form the observations describe. The account does not, in most tellings, specify which tribes' warriors are involved; the account treats the hosts as a collective continuing manifestation rather than as identifiable specific spirits. The account treats the hosts as benign in their dispositions toward living halfling populations; the hosts do not, by the tribal account, threaten halfling tribes that they encounter, and contact with the hosts has, in tribal traditions, occasionally produced exchanges between living halfling and host parties that the traditions describe as productive of guidance and protection.</p>
<h3>The Karrnathi Account</h3>
<p>The Karrnathi border-patrol accounts treat the hosts with substantially greater suspicion than the halfling tribal account supports. The Karrnathi accounts describe the hosts as potentially threatening, as warranting cautious investigation, and as occasionally responsive to defensive arrangements in ways that suggest the hosts are not entirely benign in their dispositions toward non-halfling parties. The Karnnathi accounts include three documented cases — across the period 870-940 YK — in which Karnnathi patrols apparently engaged the hosts directly, with outcomes that the surviving accounts describe but do not adequately explain; in two of the three cases, the patrols subsequently withdrew without further contact, and in the third case, the patrol's subsequent reports indicated unspecified casualties whose specific characters the surviving records do not preserve.</p>
<h3>The Volian Reading</h3>
<p>A Volian-tradition reading, advanced by certain Blood of Vol scholars whose engagement with the phenomenon reflects the tradition's broader interests in continuing presences of the dead, treats the hosts as evidence of a category of post-mortem continuation that ordinary necromantic theory does not adequately accommodate. The hosts are, in this reading, neither deathless in the Aerenal sense nor undead in the standard Karrnathi sense; the hosts are some third configuration whose specific theological character the Volian tradition's scholars are continuing to develop frameworks for. The reading is not, in current Khorvairean theological assessment, broadly accepted; the reading is, in the Volian tradition's internal discourse, considered a productive line of continuing development.</p>
<p class="marginalia">Halric Sevren of Vedykar conducted the volume's research across a six-year period with cooperation from the Talanta tribal council, with consultation of available Karnnathi border-patrol records under standing access arrangements, and with correspondence with Blood of Vol scholars whose Volian-tradition perspectives the volume's discussion incorporates.</p>`
});

LIBRARY.books.push({
  title: "The Glasswind: A Storm That Should Not Be Possible",
  author: "Master-Cartographer Fenric of Lyrandar",
  college: "morridan",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Glasswind is the recurring atmospheric phenomenon, documented in the central and eastern Talenta Plains across approximately a century of systematic observation, in which sustained high winds carry suspended particulate matter that produces, on contact with surfaces, observable phenomena that ordinary meteorological-physical reasoning cannot account for. The phenomenon is not seasonal in any predictable pattern. The phenomenon is documented in approximately twenty incidents across the past century. The phenomenon's specific character is the subject of this volume.</p>
<h3>The Phenomenon's Features</h3>
<p>A Glasswind incident, by consolidated observational accounts, exhibits the following principal features. The wind arises with limited atmospheric warning, producing localized storm conditions whose extent is typically a few miles across rather than the larger storm systems that ordinary Plains meteorology produces. The wind carries suspended material that observers describe as glass-like — translucent, faceted, glittering in available light — though chemical analysis of recovered specimens has determined that the material is not glass in any conventional sense. The material's contact with surfaces produces observable effects that vary by surface type: organic surfaces (skin, plant tissue) are typically not damaged by the contact but exhibit, after the contact, brief luminescence that fades over approximately a quarter-hour; metallic surfaces show no immediate effects but exhibit, in subsequent days, accelerated corrosion patterns; specifically certain stone surfaces (including, by repeated observation, the standing-stones the halfling tribes maintain at certain ritual sites) are affected by the contact in ways that produce observable changes in the stones' subsequent behavior with respect to other phenomena. The wind subsides as suddenly as it arises; the suspended material, after subsidence, settles to the ground and becomes, within several days, indistinguishable from ordinary particulate matter through standard analytic methods.</p>
<h3>The Documented Incidents</h3>
<p>The documented Glasswind incidents span the period from approximately 900 YK through the present. The earliest documented incident is described in surviving Cyran border-patrol records from 902 YK; the most recent documented incident occurred in late 995 YK and is described in Wayfinder Foundation field reports prepared in connection with the Foundation's continuing Plains research operations. The incidents do not exhibit obvious geographic clustering; the affected territories are distributed across the central and eastern Plains in patterns that ordinary atmospheric reasoning would not predict. The incidents do not exhibit obvious temporal clustering; the spacing between documented incidents varies from several incidents in single years to gaps of more than a decade between adjacent incidents.</p>
<h3>The Halfling Account</h3>
<p>The halfling tribal account treats the Glasswind as one of the Plains' breath-phenomena — a category that the tribal accounts use for several distinct atmospheric phenomena whose specific characters share the feature of being treated as expressions of the Plains' broader cosmological-spiritual configuration rather than as ordinary weather. The breath-phenomena category includes, by tribal account, the Glasswind, the Hush (a periodic atmospheric stillness in which ordinary sound becomes attenuated in localized areas), and several less well-documented phenomena whose specific characters the tribal accounts treat as proper subjects for tribal-internal rather than external discussion. The tribal account does not, in most tellings, attempt to explain the Glasswind through frameworks that ordinary meteorological reasoning would recognize; the account treats the phenomenon as a feature of the Plains rather than as a problem requiring explanation.</p>
<h3>The Cartographic Implications</h3>
<p>The Glasswind has implications for cartographic operations on the Plains that the contemporary cartographic methodologies have begun to address. The phenomenon's effects on metallic instruments produce, over sustained Plains research operations, instrument degradation that exceeds the rates ordinary atmospheric exposure would produce. The phenomenon's effects on certain stone surfaces (including, importantly, the boundary-stones that pre-modern cartographic operations relied upon) produce gradual changes in the stones' positions and characteristics that complicate the maintenance of cartographic baselines across long periods. The Lyrandar-supported cartographic operations have, in the past two decades, incorporated protocols designed to manage these effects; the protocols are partially successful but do not, in current implementation, fully address the underlying complications the phenomenon produces.</p>
<p class="marginalia">Master-Cartographer Fenric of Lyrandar's volume on the Glasswind extends the cartographic-naturalist work the author has conducted across the Plains and adjacent territories. The volume's empirical sections draw on consolidated observational records contributed by multiple investigators whose individual contributions the volume's bibliography acknowledges.</p>`
});

LIBRARY.books.push({
  title: "The Empty Nests: Disappearance Patterns Among Talenta Hatching Sites",
  author: "Visiting Naturalist Berra Lyrandar",
  college: "balinor",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The hatching sites of the Talenta dinosaur populations are, in their ordinary configuration, geographically stable across long periods. Specific sites have been used by specific dinosaur populations for, in some documented cases, multiple centuries of continuous use. The sites' continuing use is the foundation of the broader population-cycle dynamics that sustain the Plains' ecosystem. In the past two decades, however, observation has documented an increasing pattern of site abandonments — hatching sites that have, after long continuous use, ceased to be used by the populations that previously used them, without the displacement to alternative sites that ordinary ecological reasoning would predict. This volume documents the pattern and addresses the questions the pattern raises.</p>
<h3>The Documented Cases</h3>
<p>The investigation has documented, across the period 980 through 999 YK, approximately twenty-five cases of hatching-site abandonment. The cases involve sites used by various dinosaur populations across the Plains, with concentrations in the central and southwestern territories. The cases share several principal features: the abandonment occurs over a single hatching cycle (the population uses the site one season and does not return the next); the abandonment is not associated with detectable site degradation by ordinary ecological measures; the abandonment is not followed by the establishment of replacement sites within the abandoned site's territorial range; the abandoning populations do not, in most cases, exhibit subsequent reproductive success at the levels they exhibited prior to the abandonment.</p>
<h3>The Population Effects</h3>
<p>The cumulative population effects of the abandonment pattern are, by current investigation, beginning to be observable. Several specific dinosaur populations have, since the pattern's initial documentation, shown population-level reductions whose magnitude exceeds what ordinary population-cycle variation produces. The reductions are not, in current circumstances, severe; the affected populations remain ecologically functional. The reductions are, however, sustained over multiple hatching cycles, and the cumulative trajectory across continued application of the pattern would, in extrapolation, produce population reductions whose ecological implications would be substantial.</p>
<h3>The Halfling Account</h3>
<p>The halfling tribal accounts of the pattern are, by available consultation, in a stage of internal development. The councils' senior members have indicated that the pattern is recognized within the tribal traditions and is the subject of continuing tribal-internal discussion. The councils have not, in the consultations supporting this volume, characterized the pattern's underlying causes through frameworks that the tribal traditions consider externally communicable. The councils have indicated that the tribal-internal discussion includes consideration of whether the pattern reflects acute pressures from external sources (with the post-Mourning environmental shifts and certain other external developments mentioned as possible candidates) or reflects internal dynamics within the Plains' broader cosmological configuration whose specific character the tribal traditions are continuing to assess.</p>
<h3>The Hypotheses</h3>
<p>The investigation's working hypotheses, as of the volume's preparation, include four principal alternatives. <em>The Mournland-pressure hypothesis</em>: the abandonments may reflect cumulative pressure from the Mournland's continuing environmental anomalies, whose effects on the Plains' eastern boundary territories may be propagating westward through mechanisms ordinary investigation has not characterized. <em>The phenomenon-cluster hypothesis</em>: the abandonments may reflect concentration of the various Plains phenomena (the Glasswind, the wandering hosts, and other less well-documented phenomena) in patterns that exceed the populations' capacity to accommodate. <em>The cosmological-shift hypothesis</em>: the abandonments may reflect broader cosmological developments whose specific characters require frameworks that current investigation has not adequately developed. <em>The composite hypothesis</em>: the abandonments may reflect the combined operation of multiple underlying causes whose individual contributions cannot be cleanly separated.</p>
<p>The investigation continues. The investigation's pace is constrained by the specific operational difficulties of conducting sustained Plains research with adequate halfling tribal cooperation; the cooperation has been substantive but partial, and the investigation's progress depends on continued development of the cooperation arrangements that sustained progress would require.</p>
<p class="marginalia">Berra Lyrandar's investigation has been conducted in coordination with the Foundation's continuing Plains research operations and with the cooperation of the Talanta tribal council. The volume represents the externally-publishable portion of the investigation's findings; the investigation's continuing tribal-internal aspects are not addressed in the volume.</p>`
});

LIBRARY.books.push({
  title: "The Tracks That End",
  author: "Wayfinder Field Officer Aldis ir'Vahn",
  college: "soladas",
  year: "998 YK",
  restricted: false,
  type: "dispatch",
  content: () => `<p>Filed from the Wayfinder Foundation's central Plains outpost. Dispatch documents observations gathered across a four-month patrol assignment in the central Plains, with reporting prepared for Foundation continental headquarters.</p>
<h3>The Phenomenon</h3>
<p>The patrol assignment included documentation of a phenomenon that the local halfling guides identified, in approximate Common translation, as "the tracks that end." The phenomenon involves clearly-marked trails — produced by single travelers, by small groups, or by larger formations — that proceed across Plains territory for distances ranging from several hundred yards to several miles, and then terminate without explanation. The terminations are not associated with rocky terrain, water crossings, or other surface features that would account for the trails' disappearance through ordinary tracking-degradation mechanisms. The trails simply end. The terminating points are, by patrol observation, indistinguishable from the surrounding Plains territory in any feature that ordinary investigation could identify.</p>
<h3>The Patrol Documentation</h3>
<p>The patrol documented twelve instances of the phenomenon during the assignment period. The documented trails were produced by varied parties: in three cases, by single travelers whose tracks indicated halfling-equivalent stride patterns; in five cases, by small groups whose tracks indicated mixed party compositions; in three cases, by larger formations whose tracks indicated mounted-cavalry-equivalent activity; in one case, by what the tracking analysis indicated was a single very large dinosaur whose specific species could not be definitively identified from the tracks alone. The terminations across the twelve cases were similar in character: gradual diminution of track-clarity across the final several yards, followed by complete cessation. The terminating points, in all twelve cases, were located in open Plains territory without distinguishing surface features.</p>
<h3>The Halfling Account</h3>
<p>The patrol's halfling guides indicated that the phenomenon is recognized within the tribal traditions and is associated with the broader category that the traditions describe (in approximate Common translation) as "the Plains taking what walks across them." The guides' explanation did not, in their characterization, treat the phenomenon as malevolent; the guides indicated that the phenomenon affects parties whose passage across the Plains has, by mechanisms the traditions do not fully characterize to external listeners, drawn the territory's particular attention. The affected parties are not, by guide account, killed or transported in ways that subsequent investigation could document; the affected parties are simply no longer present, and the subsequent traditions do not, in most cases, account for what becomes of them.</p>
<h3>The Recommendations</h3>
<p>The dispatch's principal recommendations: continue documentation of phenomenon instances across continuing Foundation operations; continue cooperation with halfling tribal authorities for guide support that has produced the substantive characterization the dispatch documents; continue investigation through methods that respect the tribal traditions' internal frameworks while developing the externally-publishable evidence base that broader scholarly engagement requires; and continue formal reporting on phenomenon developments to the Foundation's continental headquarters under standing administrative procedures.</p>
<p class="marginalia">Filed by Wayfinder Field Officer Aldis ir'Vahn at the central Plains outpost, with reporting transmitted to Foundation continental headquarters through standard secured-courier protocols. Receipt and acknowledgment recorded under standing administrative procedures.</p>`
});


// ─── AIRSHIP CONSTRUCTION & ELEMENTAL BINDING ─────────────────

LIBRARY.books.push({
  title: "The Lyrandar Ring: Construction Specifications and Operational Theory",
  author: "Master-Engineer Halric d'Cannith",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lyrandar elemental airship is the principal aerial-transport vessel of the contemporary Khorvairean commercial environment. The vessel's operation depends on the integrated functioning of its physical hull, its propulsion system, and the bound elemental whose continuing service produces the lift and thrust that sustain flight. This volume addresses the construction specifications and operational theory of the elemental ring — the structural-arcane element through which the bound elemental's energies are integrated with the vessel's physical structure. The volume is the standard reference for Cannith-Lyrandar joint construction operations and is used, in modified form, in the Cannith engineering apprenticeship curriculum.</p>
<h3>The Ring's Physical Structure</h3>
<p>The elemental ring is a structural element approximately fifteen to thirty feet in radius (depending on vessel class) constructed from a composite material developed by House Cannith specifically for this application. The composite combines refined Khyber-shard matrices, treated mithral-equivalent metallurgy, and arcane-tempered wood components from specific tree species whose harvesting is conducted under standing Cannith-Vadalis arrangements. The composite's manufacturing requires precision arcane-engineering work that, in current operational practice, only Cannith-certified workshops are equipped to conduct. The ring's structural integrity must be maintained at tolerances substantially exceeding those required for ordinary structural work; deformation of even fractional measure produces operational consequences whose corrections require ring replacement rather than field repair.</p>
<h3>The Binding Configuration</h3>
<p>The bound elemental occupies a binding configuration whose physical manifestation is the ring's interior space. The configuration is not, in ordinary observable terms, the elemental's physical body; the elemental does not occupy the ring's interior in the manner a creature occupies a vessel. The configuration is, in technical-arcane terms, the spatial-extensional locus through which the elemental's energies are integrated with the vessel's physical structure. The locus's characteristics — its spatial extent, its energy-throughput capacity, its temporal stability — are determined by the ring's specific construction parameters and by the binding-ritual specifications that the binding-team's ritual practice produces.</p>
<h3>The Lift Generation</h3>
<p>The vessel's lift is generated through the bound elemental's continuing operation against the ring's structural configuration. The specific mechanism is, in technical theoretical terms, the elemental's continuous expression of energy patterns that the ring's structure interprets as upward force at the vessel's broader physical scale. The interpretation is, in standard Cannith operational language, "lifting through the ring"; the language captures the operational reality without addressing the deeper theoretical questions about how exactly the elemental's energies and the ring's structure produce the macroscopic lift effect. The Drystone college's continuing theoretical research has not, in current circumstances, produced a fully satisfactory explanation; the operational success of the configuration is well-established, while the underlying theoretical mechanism remains incompletely characterized.</p>
<h3>The Thrust Generation</h3>
<p>The vessel's thrust — the directional propulsion that distinguishes airships from balloons — is generated through directional modulation of the lift mechanism. The modulation is, in operational practice, conducted by the helmsman's control inputs through the helm interface, which translates the helmsman's control intentions into the binding-configuration adjustments that produce directional lift components. The helm interface is, in its physical form, a specialized arcane-engineering element installed at the vessel's primary control position. The helm's operation requires substantial helmsman training; the standard Lyrandar helmsman certification requires approximately four years of supervised training across both technical-arcane and practical-operational domains.</p>
<h3>The Maintenance Requirements</h3>
<p>The ring's maintenance requirements include both ordinary structural maintenance (which Cannith-certified workshops conduct under standing arrangements) and binding maintenance (which Lyrandar-trained binders conduct on a continuing schedule). The binding maintenance is the more operationally consequential of the two requirements; binding-degradation produces operational consequences ranging from gradual performance reduction to acute binding failure whose results, in worst cases, include catastrophic vessel failure. Standard Lyrandar operations include binding-status monitoring at intervals appropriate to the specific vessel's operational schedule and pattern. The monitoring is conducted by the vessel's senior binder, whose certification and training the house's standing requirements specify.</p>
<p class="marginalia">Master-Engineer Halric d'Cannith leads the Cannith engineering division responsible for elemental ring production at the Sharn central forge. The volume is the standard Cannith-published reference on the subject and is used, with modifications appropriate to apprentice-level training, in the Cannith engineering curriculum at the Korranberg satellite school.</p>`
});

LIBRARY.books.push({
  title: "Hull Plans and Carpentry Specifications: The Standard Wind-Class Airship",
  author: "Master-Carpenter Yenna ir'Lain",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Wind-class airship is the most common Lyrandar commercial airship class in current operation. The class comprises vessels in the medium-tonnage range, with operational profiles supporting passenger and freight transport across continental routes. The class's hull plans and carpentry specifications are the subject of this volume, which is the standard reference for the carpentry shops that produce hulls under Cannith-Lyrandar joint construction arrangements. The volume is used, in modified form, in the apprenticeship curricula of multiple participating shops across the continent.</p>
<h3>The Hull's Principal Dimensions</h3>
<p>The Wind-class hull's principal dimensions are: overall length approximately one hundred and forty feet; maximum beam approximately twenty-eight feet; height from keel to upper deck approximately sixteen feet; and total displacement when fully loaded approximately one hundred and twenty tons. The dimensions vary across specific vessels within the class; the Lyrandar specifications permit variations of approximately five percent in any dimension to accommodate specific operational requirements that the broader class profile does not directly address.</p>
<h3>The Wood Specifications</h3>
<p>The Wind-class hull employs five principal wood types in different structural roles. <em>Arcane-tempered ash</em> in the keel, primary frame members, and ring-mount supports — selected for the combination of structural strength and arcane compatibility that ring-mount applications require. <em>Standard ash</em> in secondary frame members and structural reinforcements not directly involved in ring-mount applications. <em>Cured oak</em> in the hull planking, deck planking, and exterior structural elements that face direct atmospheric exposure. <em>Treated pine</em> in interior elements where weight reduction is operationally beneficial. <em>Specialty hardwoods</em> in specific high-stress components whose specifications vary by vessel and by carpentry-shop preference. The wood specifications include standing requirements for harvesting practices, drying schedules, and treatment protocols whose application produces the structural performance the hull design requires.</p>
<h3>The Joinery Standards</h3>
<p>The hull's joinery employs specifications that exceed standard maritime carpentry practice. The principal frames are joined to the keel through arcane-reinforced mortise-and-tenon joints whose specifications include both physical and arcane bonding components. The hull planking is fastened to the frames through specifications combining traditional treenail joinery with arcane-tempered metal fasteners at structurally critical points. The deck framing employs joinery whose load-bearing specifications support both ordinary deck-loading and the additional stresses that ring-mount applications transmit through the deck structure. The joinery standards' specific implementation requires master-carpenter-level skill across the principal joinery operations; the carpentry shops' apprenticeship programs are organized to develop these skills systematically across the apprentices' training periods.</p>
<h3>The Ring-Mount Section</h3>
<p>The hull's ring-mount section is the specific structural arrangement at the vessel's center that supports the elemental ring and integrates the ring's lift forces with the broader hull structure. The section's specifications include: dedicated structural reinforcement at the ring's principal mounting points; arcane-bonded interface elements between the hull and ring components; and structural-isolation arrangements that prevent ordinary hull stresses from transmitting to the ring's binding configuration in ways that would compromise the binding's stability. The section's construction is the most technically demanding portion of the broader hull construction; the section requires coordinated work between the carpentry shop's master carpenters and the visiting Cannith arcane-engineering specialists whose specifications govern the ring-mount's specific implementation.</p>
<h3>The Construction Schedule</h3>
<p>A standard Wind-class hull construction requires, by current Lyrandar-Cannith joint operational data, approximately fourteen months from keel-laying to hull completion. The schedule includes: keel and primary frame construction (approximately four months); hull planking and deck framing (approximately four months); ring-mount section construction and integration (approximately three months); finishing work, including interior fit-out and exterior treatment (approximately three months). The schedule does not include the subsequent arcane-engineering work for ring installation and binding establishment, which adds approximately six additional months to the total vessel-completion timeline.</p>
<p class="marginalia">Master-Carpenter Yenna ir'Lain leads the carpentry operations at the Cannith-Lyrandar joint construction yard in northern Karrnath. The volume is published with the formal authorization of both houses and is the standard external reference for the carpentry specifications it documents.</p>`
});

LIBRARY.books.push({
  title: "The Air Elemental: Native Plane, Personality, Negotiation",
  author: "Magus-Binder Brell d'Lyrandar",
  college: "drystone",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The air elementals bound to Lyrandar airships are not, in their fundamental nature, mechanical components. The elementals are intelligent beings drawn from the elemental Plane of Air whose continuing presence in the binding configuration sustains the vessel's flight capabilities. The binders' relationship with the bound elementals is, in this sense, an ongoing relationship rather than a one-time technical operation. This volume addresses the binders' working understanding of the air elementals' nature, personality variations, and the negotiation practices that sustained binding relationships require.</p>
<h3>The Plane of Air</h3>
<p>The Plane of Air is, in standard Khorvairean planar cosmology, one of the four elemental planes whose existence sustains the elemental aspects of broader Eberron's environmental configuration. The plane is, in available planar-theological accounts, characterized by sustained atmospheric movement at scales that ordinary meteorological frameworks cannot adequately describe. The plane's native intelligences include various air-aligned beings whose specific configurations range from minor air-spirit populations through the more substantial air-elemental populations from which Lyrandar binding draws. The plane's relationship with Eberron is mediated through the planar-distance arrangements that the broader thirteen-planes cosmology establishes; air-plane access varies across periods, with certain periods producing more accessible air-plane communication than others. The contemporary period is, by current planar-theological assessment, in the favorable portion of the access cycle, which contributes to the contemporary feasibility of large-scale Lyrandar binding operations.</p>
<h3>The Elementals' Personalities</h3>
<p>Air elementals exhibit, by sustained binder observation, substantial personality variations across individuals. The variations are not random; the variations correspond to recognizable categories that the binder tradition has documented across generations of practice. <em>The currents</em>: elementals whose dispositions are oriented toward sustained directional movement and whose binding relationships emphasize long-distance steady-state flight operations. <em>The squalls</em>: elementals whose dispositions include more variable movement patterns and whose binding relationships are particularly suited to operations requiring rapid directional changes. <em>The thermals</em>: elementals whose dispositions emphasize vertical movement and whose binding relationships favor operations involving substantial altitude changes. <em>The stillnesses</em>: a less common category, comprising elementals whose dispositions emphasize stable hovering operations and whose binding relationships are particularly valued for vessels whose operational profiles include extended stationary positioning. The binder tradition has developed identification methods that allow new bindings to be matched with vessel operational profiles in ways that produce productive binding relationships rather than mismatched arrangements that the binder tradition's continuing experience has identified as operationally suboptimal.</p>
<h3>The Negotiation Practices</h3>
<p>The binding establishment is conducted through ritual practices whose specific structures address the elemental's voluntary acceptance of the binding configuration. The acceptance is not, in any honest characterization, fully voluntary; the binding ritual creates conditions under which the elemental's options for declining are limited. The acceptance is, however, more than purely coercive; the binder tradition has, across centuries of practice, developed arrangements that produce binding configurations the elementals tolerate sustainably rather than resist continuously. The arrangements include: respectful ritual conduct that the elementals' continuing observation accepts as appropriate; binding terms that limit the duration and operational scope of the elemental's service; and provision for the elemental's eventual release back to the elemental plane through release rituals whose practice the binder tradition has maintained as standing operational requirement.</p>
<h3>The Release Question</h3>
<p>The elementals' release at the conclusion of binding service is, by binder tradition's continuing position, a non-negotiable obligation of the broader binding practice. The position has not been universally honored across the binder tradition's history; documented cases exist of bindings whose releases were not conducted on the schedules the binding terms specified, with consequences for the affected vessels and for the broader binder-elemental relationship that the contemporary tradition takes as cautionary examples. The contemporary binder tradition's standing operational protocols include verification arrangements that ensure scheduled releases are conducted; the protocols are, by available evidence, broadly successful in maintaining the obligation, while occasional cases continue to arise that the tradition's senior practitioners address through individual case-by-case interventions.</p>
<p class="marginalia">Magus-Binder Brell d'Lyrandar serves as senior instructor in the house's binder training program and has, in his career, established or supervised approximately two hundred and forty individual airship bindings. The volume is used, in modified form, in the binder apprenticeship curriculum and represents the most substantive recent house publication on the subject available to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "The Old Methods: Pre-Lyrandar Airship Propulsion in the Historical Record",
  author: "Master-Engineer Aelyn ir'Velderhast",
  college: "drystone",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The contemporary Lyrandar airship is not, in the broader historical record, the only configuration through which Khorvairean aerial transport has been conducted. The historical record preserves evidence of multiple alternative propulsion methods, ranging from pre-Lyrandar gnomish small-vessel approaches through experimental Cannith arrangements that the Lyrandar method eventually superseded. This volume surveys the documented alternative methods and addresses the questions the historical record raises about the broader space of aerial-transport possibilities.</p>
<h3>The Pre-Lyrandar Gnomish Methods</h3>
<p>The Lorghalan gnomish island communities — the Lhazaar Sea archipelago whose specific configuration the volume's later discussion addresses — developed, across approximately two centuries before the contemporary Lyrandar method's establishment, small-vessel aerial-transport arrangements whose specific propulsion methods varied across communities. The principal documented gnomish methods include: <em>Wind-sail elemental hybrids</em>, in which conventional wind-sail propulsion was supplemented by small-scale air-elemental influence whose binding arrangements operated at substantially smaller scales than the contemporary Lyrandar configurations. <em>Spirit-wind arrangements</em>, in which the propulsion drew on agreements with air-spirit populations whose voluntary cooperation provided the propulsion energy without the binding structures that the larger Lyrandar method employs. <em>Specialized lift-bag arrangements</em>, in which the vessels combined conventional balloon-equivalent lift with directional propulsion through small-scale arcane-engineering arrangements specific to the gnomish technical tradition.</p>
<p>The gnomish methods' specific operational characteristics — modest range, modest payload capacity, but operational simplicity and modest maintenance requirements — produced vessels whose practical applications differed from the contemporary Lyrandar method's operational profile. The gnomish vessels were, in their period, well-suited to the inter-island transport requirements that the Lorghalan archipelago's geography produced. The gnomish vessels were not, in any direct sense, predecessors to the Lyrandar method; the gnomish vessels represented a parallel technical tradition whose operational scope differed from the broader continental aerial-transport requirements that eventually produced Lyrandar's method.</p>
<h3>The Cannith Experimental Arrangements</h3>
<p>House Cannith conducted, across the period approximately 700-820 YK, multiple experimental arrangements whose specific configurations addressed alternative approaches to aerial transport. The experiments included: <em>Fire-elemental propulsion arrangements</em>, in which the propulsion drew on bound fire elementals whose energy outputs produced thrust through specialized expulsion configurations; <em>Multi-elemental arrangements</em>, in which propulsion drew on coordinated bindings of multiple elementals across different elemental types; and <em>Pure-arcane propulsion arrangements</em>, in which propulsion drew on sustained spell-equivalent operations rather than on bound-elemental energy sources. The experimental arrangements produced, in most cases, vessels whose operational characteristics did not exceed the gnomish methods' performance profiles or whose operational costs exceeded the Lyrandar method's eventual costs to a degree that prevented commercial development.</p>
<p>The Cannith experimental period ended, in approximately 820 YK, when the eventual Lyrandar method's preliminary configurations demonstrated operational characteristics that exceeded the experimental alternatives. The experimental records were preserved in the house's institutional archives but were not widely circulated; the volume's account draws on archival materials that the house has, in recent decades, made available for selected scholarly research under restricted-access arrangements.</p>
<h3>The Aerenal Knowledge</h3>
<p>The Aerenal civilization possesses, by available indirect evidence, aerial-transport knowledge whose specific characters are not documented in any continental publication. Aerenal vessels do operate; the operations are conducted under arrangements that the Aerenal civilization does not externally characterize. The Aerenal methods are, by external speculation, presumed to draw on the broader Aerenal arcane-theological framework whose specific elements differ from Khorvairean equivalents in ways that the Aerenal civilization does not externally clarify. The methods are not available to continental scholars in any practical sense; the volume's reference to them is for completeness rather than for technical guidance.</p>
<h3>The Implications</h3>
<p>The historical record's documentation of alternative methods has implications for contemporary aerial-transport development that the continental scholarly community has not adequately addressed. The contemporary Lyrandar dominance reflects, in significant measure, the specific operational success of the contemporary method; the contemporary dominance does not reflect the operational impossibility of alternatives. The continued possibility of alternative methods is, in current circumstances, suppressed by the institutional dominance of the contemporary configuration; the alternatives' eventual development would require institutional conditions different from those the contemporary commercial environment provides. The volume's principal contribution is the recognition that the alternatives exist as possibilities even where current institutional conditions do not produce them.</p>
<p class="marginalia">Master-Engineer Aelyn ir'Velderhast's volume on alternative propulsion methods reflects extensive Cannith archival access and extensive correspondence with senior Lorghalan gnomish technical scholars whose contributions to the volume's accuracy the preface acknowledges. The volume is published with formal Cannith authorization and represents the most substantive recent treatment of the subject available in continental scholarly publication.</p>`
});

LIBRARY.books.push({
  title: "Binding Without Coercion: A Manual of Voluntary-Service Elemental Arrangements",
  author: "Master-Magus Mara d'Sivis (with Lorghalan attribution)",
  college: "drystone",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume addresses elemental-service arrangements that operate through voluntary agreement rather than through binding-coercion structures. The arrangements are most extensively developed in the Lorghalan gnomish technical tradition, whose centuries of experience with small-vessel propulsion have produced practical methods that the broader continental binder tradition has not, in significant measure, adopted. The volume's preparation has been conducted in collaboration with senior Lorghalan technical scholars whose contributions are acknowledged in the preface and throughout the technical sections.</p>
<h3>The Theoretical Foundation</h3>
<p>The voluntary-service approach rests on the theoretical premise that elemental beings — air elementals in the most extensively documented case — exhibit dispositional variation that includes both binding-resistant orientations (which the standard Lyrandar binding addresses through coercive structures) and service-receptive orientations (which the voluntary arrangements engage through different ritual structures that emphasize negotiated agreement rather than binding-imposition). The premise is supported by the Lorghalan tradition's continuing operational success with smaller-scale propulsion arrangements; the premise is contested in mainstream Khorvairean binder-tradition theoretical work, which holds that the apparent voluntariness of the Lorghalan arrangements reflects a less obvious form of structural coercion rather than a fundamentally different relationship type.</p>
<p>The theoretical question is not, in current scholarship, definitively resolved. The volume's position is that the Lorghalan tradition's practical success warrants treating the voluntary-service approach as a real alternative whose theoretical character requires further development rather than dismissal in favor of the dominant binding-tradition framework.</p>
<h3>The Negotiation Approach</h3>
<p>The voluntary-service negotiation begins with the practitioner's establishment of communicative contact with elemental candidates whose dispositions may be receptive to service arrangements. The communicative contact is conducted through ritual practices that emphasize respectful invitation rather than the more imperative summoning rituals the binding-tradition employs. The contact's success rate is, by Lorghalan operational experience, approximately one in four candidates approached; the remaining three of four candidates either decline contact entirely or engage in initial communication that does not progress to service arrangement.</p>
<p>The negotiation, when communicative contact establishes a candidate's receptivity, addresses the specific service terms the candidate would accept. The terms typically include: the service's specific scope (which operations the candidate would participate in and which would be excluded); the service's duration (typically substantially shorter than binding-tradition arrangements, with renewal as the standard pattern of continuing service); the service's compensation (which the Lorghalan tradition treats as a real obligation rather than as a courtesy, including various non-material compensations whose specific forms vary by candidate); and the conditions under which the candidate may terminate service prior to scheduled completion (which the voluntary-service arrangements treat as preserved candidate authority rather than as binder discretion).</p>
<h3>The Operational Characteristics</h3>
<p>Voluntary-service arrangements produce operational characteristics that differ from binding-tradition arrangements in several important ways. The arrangements support smaller-scale energy applications more effectively than they support the larger-scale applications that contemporary Lyrandar operations require; the candidate's voluntary cooperation does not, in current Lorghalan experience, scale to the energy levels the larger commercial vessels demand. The arrangements produce more sustainable elemental relationships across long periods; the candidates do not exhibit the gradual binding-degradation patterns that contemporary Lyrandar bindings exhibit, and renewal of voluntary-service arrangements is, in most cases, easier than renewal of binding arrangements. The arrangements impose more substantial communicative requirements on the practitioner; the practitioner must maintain ongoing communicative engagement with the candidate, which the binding-tradition does not require to the same degree.</p>
<h3>The Continental Application Question</h3>
<p>The question of whether voluntary-service arrangements could be developed at scales sufficient to support continental commercial aerial transport is, in current circumstances, open. The Lorghalan tradition's existing operations do not approach the required scales; the development to those scales would require sustained technical-arcane research that the Lorghalan communities' resources do not currently support. The continental commercial environment's dominant Lyrandar method does not, in current circumstances, produce institutional conditions that would support such research; the dominant method's success has, in significant measure, foreclosed broader investment in alternative approaches.</p>
<p>The volume's position is that the alternative approach merits sustained continental-scholarly attention regardless of immediate commercial application. The technical-arcane principles the Lorghalan tradition has developed have implications beyond their specific aerial-transport applications, and the continental scholarly community would benefit from broader engagement with the principles than current institutional conditions support.</p>
<p class="marginalia">Master-Magus Mara d'Sivis's volume incorporates substantial contributions from senior Lorghalan technical scholars whose names are listed in the volume's preface. The volume is, by collaborative arrangement, the most substantive externally-published treatment of Lorghalan voluntary-service arrangements; certain Lorghalan-internal materials are not included in the volume's content and remain available only through the Lorghalan tradition's internal scholarly arrangements.</p>`
});

LIBRARY.books.push({
  title: "The Elemental Galleon: Cannith's Pre-Airship Maritime-Aerial Hybrid",
  author: "Master-Engineer Brell d'Cannith (ret.)",
  college: "drystone",
  year: "994 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The elemental galleon is the maritime-aerial hybrid vessel class developed by House Cannith in the period 780-810 YK as a transitional configuration between conventional maritime vessels and the eventual contemporary airship method. The galleons remained in commercial operation through approximately 880 YK before being progressively withdrawn from service as the contemporary airship method established its operational dominance. This volume documents the galleons' technical configuration and operational characteristics, drawing on archival materials and on the practical knowledge of senior Cannith technical staff whose careers included galleon-period service.</p>
<h3>The Operational Concept</h3>
<p>The elemental galleon was designed for maritime operations with limited aerial capability — principally short-range, low-altitude flight that allowed the vessel to traverse maritime hazards (Shargon's Teeth being the most operationally significant case), to land at coastal locations beyond the reach of conventional harbor infrastructure, and to provide maritime-aerial flexibility that pure-maritime vessels could not match. The vessel was not designed for sustained aerial operations; the aerial capability was supplementary rather than primary, and the vessel's principal operational profile remained maritime.</p>
<h3>The Hull Configuration</h3>
<p>The galleon's hull was based on conventional maritime galleon construction with modifications addressing the aerial capability. The principal modifications included: <em>Reduced overall mass through specialized wood selection</em> in the upper-deck and rigging structures; <em>Specialized hull-bottom construction</em> that supported both maritime hydrodynamic operation and the structural-arcane requirements of brief aerial flight; <em>Integrated mounting points</em> for the elemental ring (which differed from the contemporary Lyrandar ring in scale and configuration but operated on broadly similar principles); and <em>Auxiliary structural reinforcement</em> at points where the aerial-mode stresses exceeded the maritime-mode stresses that conventional galleon construction adequately addressed.</p>
<h3>The Elemental Configuration</h3>
<p>The galleon's elemental configuration involved a smaller-scale air-elemental binding than contemporary Lyrandar arrangements employ. The smaller scale reflected the galleon's limited aerial-operation requirements; the configuration provided sufficient lift for short-range, low-altitude flight without the capacity for the sustained higher-altitude operations the contemporary method supports. The binding's establishment, maintenance, and release operations were conducted under House Cannith's direct authority during the galleon period; the operations did not, in this period, involve the inter-house arrangement that the contemporary Cannith-Lyrandar method requires.</p>
<h3>The Operational History</h3>
<p>The galleons entered commercial service in approximately 790 YK and remained in active service through approximately 880 YK. At their peak operational period (approximately 820-860 YK), about forty galleons operated in the broader continental maritime trade; the galleons concentrated on routes whose specific operational requirements favored the maritime-aerial hybrid configuration over pure-maritime alternatives. The galleons' operational success was real but limited; the configuration's costs exceeded conventional maritime costs by sufficient margins that the galleons' commercial applications were restricted to routes whose hybrid-vessel value justified the additional expense.</p>
<p>The galleons' eventual withdrawal began as the contemporary airship method's commercial development produced competing capabilities at progressively improving cost profiles. The competition's initial phases left the galleons with continuing operational niches that contemporary airships did not effectively serve; the competition's later phases progressively eliminated those niches as airship operational characteristics improved. By approximately 880 YK, the galleon configuration was no longer commercially viable, and the operational fleet was progressively withdrawn through retirement and conversion to pure-maritime operation.</p>
<h3>The Technical Legacy</h3>
<p>The galleon period's technical work contributed substantially to the contemporary airship method's eventual development. The Cannith engineering teams whose work supported galleon operations developed, across the period, technical knowledge that the contemporary method's establishment drew on. The specific technical contributions included: large-scale air-elemental binding-stability research; structural-arcane integration methods for supporting elemental energy through ordinary ship structures; and the broader institutional knowledge of how Cannith-Lyrandar coordination operations should be structured to support large-scale arcane-engineering work. The contributions are not, in most contemporary commercial discussion, adequately credited; the galleon period's technical work was, by my own assessment, more important to the contemporary method's development than the contemporary method's institutional narratives typically acknowledge.</p>
<p class="marginalia">Master-Engineer Brell d'Cannith retired from House Cannith's engineering operations in 988 YK after a fifty-three-year career that included substantial galleon-period service in his earliest professional years. The volume reflects his accumulated practical knowledge of galleon operations supplemented by archival research the house's institutional records support.</p>`
});

LIBRARY.books.push({
  title: "Practical Repair: A Field Manual for Airship Helmsmen and Crews",
  author: "Helm-Captain Felia Lyrandar",
  college: "drystone",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is the standard field manual for Lyrandar airship operational crews. The manual addresses the routine maintenance and emergency-repair tasks that crews are expected to conduct during commercial operations, where access to specialized Cannith repair facilities is not immediately available. The manual is used, in modified form, in the standard Lyrandar crew certification curriculum and is required reading for all crew members on continental commercial routes.</p>
<h3>The Hull Maintenance Tasks</h3>
<p>The hull maintenance tasks include both daily inspection and periodic deeper maintenance. The daily inspection, conducted before each operational departure, addresses: visible hull integrity (with attention to plank seams, deck-rail integrity, and the condition of exposed structural elements); deck-equipment condition (with attention to navigation instruments, helm-interface accessories, and crew-station equipment); and emergency-equipment readiness (with attention to fire-suppression supplies, emergency-descent rigging, and the broader emergency-response inventory the standard Lyrandar provisioning establishes). The periodic deeper maintenance addresses: structural-element condition through systematic examination at intervals the operational schedule establishes; arcane-bonding integrity at the principal hull-ring interfaces; and broader vessel-condition assessment that the senior crew members conduct on schedules their certifications support.</p>
<h3>The Helm Maintenance Tasks</h3>
<p>The helm maintenance tasks are conducted by the senior helmsman or by senior crew members whose certifications support helm-related work. The tasks include: helm-interface cleaning and adjustment, conducted on daily schedules during continuing operations; helm-system arcane-bonding verification, conducted at intervals the operational schedule establishes; and broader helm-condition assessment that addresses the specific helm-related considerations that the vessel's operational profile produces. The helm tasks are operationally consequential; helm-system failure during flight produces operational consequences ranging from gradual control degradation to acute control failure whose worst-case outcomes include catastrophic vessel loss.</p>
<h3>The Ring Monitoring Tasks</h3>
<p>The ring monitoring tasks are conducted by the senior binder, who is in most cases a separate crew member from the senior helmsman. The tasks include: continuing observation of the binding's stability indicators, which the trained binder identifies through arcane-perceptual methods that the binder certification requires; periodic full-binding examinations, conducted at intervals the operational schedule establishes; and intervention work in cases where binding-stability indicators suggest the binding's condition warrants intervention. The intervention work ranges from minor binding-renewal operations that the senior binder can conduct in operational conditions through major binding-restoration operations that require either the vessel's return to a Cannith facility or the vessel's grounding for visiting-Cannith service.</p>
<h3>The Emergency-Repair Procedures</h3>
<p>The emergency-repair procedures address the operational scenarios that the standard Lyrandar emergency framework identifies as warranting field intervention. The principal scenarios include: hull damage from external causes (atmospheric phenomena, debris contact, attacks), where the field-repair scope addresses immediate stabilization rather than full restoration; helm-system damage, where the field-repair scope addresses control-restoration adequate for vessel survival rather than full operational restoration; binding-degradation events, where the field-repair scope addresses temporary stabilization sufficient to support vessel return to a service facility; and broader emergency scenarios whose specific characters produce field-repair requirements outside the standing protocols, where the senior crew members' professional judgment governs the response. The emergency-repair procedures are not, in any of these categories, equivalent to comprehensive repair; the procedures address survival and limited continuing operation rather than full restoration.</p>
<h3>The Communication Protocols</h3>
<p>The communication protocols govern the interactions between the operational crew and external parties during ordinary operations and during emergency conditions. The protocols include: the standard communication procedures for routine operations, which the broader Lyrandar operational framework establishes; the emergency communication procedures, which provide for rapid communication with available external assistance through Sivis-supported communication arrangements; and the inter-vessel communication procedures, which govern communications with other Lyrandar vessels during operations where coordination between vessels is operationally beneficial. The communication protocols' effective implementation requires substantial crew training; the standard Lyrandar crew certification includes substantial communication-protocol content across the principal operational scenarios.</p>
<p class="marginalia">Helm-Captain Felia Lyrandar serves as senior instructor in the house's crew training program and has, in her career, certified approximately three hundred and forty senior helmsmen across the broader continental Lyrandar operations. The volume is the standard external-publication form of the training program's principal field manual and is used, with modifications appropriate to apprentice-level training, throughout the crew certification curriculum.</p>`
});


// ─── LORGHALAN GNOMES ─────────────────────────────────────────

LIBRARY.books.push({
  title: "The Lorghalan Archipelago: Geography and Settlement History",
  author: "Master-Cartographer Mara d'Sivis",
  college: "morridan",
  year: "996 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lorghalan Islands are the gnomish-inhabited archipelago in the central Lhazaar Sea whose specific configuration the broader continental cartographic tradition has, despite centuries of Lhazaar-region cartographic operations, characterized only partially. The archipelago's gnomish populations have maintained their continuing inhabitation of the islands across longer periods than the Lhazaar Principalities' broader settlement history covers, and the archipelago's contemporary configuration reflects substantial gnomish technical and cultural development that the broader continental scholarly community has not adequately engaged with. This volume offers a cartographic-historical survey of the archipelago, drawing on House Sivis's continuing communication-network operations in the region and on direct correspondence with senior Lorghalan scholars whose contributions are acknowledged.</p>
<h3>The Physical Configuration</h3>
<p>The Lorghalan Archipelago comprises approximately two hundred islands of varying sizes, distributed across an oceanic territory of approximately twelve thousand square miles in the central Lhazaar Sea. The islands' physical configurations vary substantially: the larger islands (twelve in number, with individual island areas ranging from approximately fifty to six hundred square miles) support diverse terrain types including mountains, forests, and substantial coastal lowlands; the medium islands (approximately forty in number) typically support more limited terrain variation; and the smaller islands (the majority of the total count) support limited terrain types whose specific configurations vary by island. The archipelago's overall geographic distribution produces, in operational terms, a continuous cluster of inhabited and inhabitable territory whose internal navigation is supported by the gnomish communities' continuing maritime and aerial operations.</p>
<h3>The Settlement History</h3>
<p>The gnomish settlement of the archipelago dates, by available historical evidence, to approximately three thousand years ago — substantially earlier than the broader Khorvairean human settlement of the Lhazaar coastline. The settlement's specific origins are not, in fully reconstructible form, available; the surviving Lorghalan oral traditions indicate that the original settlers were drawn from continental gnomish populations whose specific origins varied across multiple migrations across approximately a five-hundred-year period. The gnomish populations of the contemporary Zilargo do not, by available evidence, share direct genealogical ancestry with the Lorghalan populations; the two gnomish communities developed separately across the long historical period, with limited inter-community contact across most of the period and more substantial contact developing only across the past two centuries.</p>
<h3>The Continental Relationship</h3>
<p>The Lorghalan archipelago's continental relationship has, across its long history, been characterized by limited engagement that has gradually increased across recent centuries. The pre-Galifar period included minimal Lorghalan-continental contact; the Galifar period included continuing limited contact, principally through occasional commercial exchanges and through the Sivis communication-network operations that the eventual House Sivis incorporated; the post-Galifar Last War period saw limited additional development of the relationship, as the war's continental focus reduced external attention to the archipelago. The post-Treaty period has produced the most substantial development of the Lorghalan-continental relationship, with continuing Lhazaar Principalities engagement supporting expanded commercial exchange, with House Sivis's continuing operations supporting expanded communication arrangements, and with the broader post-war institutional environment producing conditions favorable to the increased engagement that the archipelago's specific resources and technical capabilities support.</p>
<h3>The Internal Political Structure</h3>
<p>The archipelago's internal political structure is, in its broad outline, a confederational arrangement among the principal island communities. The structure's specific operational forms have evolved across the long settlement period; the contemporary form includes a Council of Settlements (with representation from the principal communities), various functional sub-councils that address specific inter-community matters, and the broader confederational arrangements whose continuing operation supports the archipelago's collective external relationships and internal coordination requirements. The structure's specific forms differ from the Zilargon Triumvirate-based arrangements that the broader continental scholarly community is more familiar with; the Lorghalan arrangements reflect the archipelago's specific historical development rather than the parallel developments that produced the contemporary Zilargon configuration.</p>
<p class="marginalia">Master-Cartographer Mara d'Sivis's volume on the Lorghalan archipelago has been prepared in active collaboration with senior Lorghalan cartographic and historical scholars, whose contributions to the volume's accuracy the preface acknowledges. The volume represents, by available continental scholarly assessment, the most substantive recent treatment of the archipelago available outside the Lorghalan communities' internal scholarly arrangements.</p>`
});

LIBRARY.books.push({
  title: "The Sky-Gnomes: Three Thousand Years of Lorghalan Aerial Tradition",
  author: "Loremaster Tessen Halrik (Lorghalan)",
  college: "soladas",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lorghalan gnomish tradition includes, among its principal continuing technical and cultural developments, an aerial tradition whose continuing operation across approximately three thousand years has produced the technical foundations from which the contemporary Lorghalan small-vessel propulsion methods derive. This volume offers a Lorghalan-internal historical account of the aerial tradition's development, prepared with the explicit intention of providing the broader continental scholarly community with substantive engagement with the tradition's history that previous external accounts have not adequately supported. The volume is the first publication in Common by a senior Lorghalan loremaster on this subject.</p>
<h3>The Tradition's Origins</h3>
<p>The aerial tradition's origins, by surviving Lorghalan oral traditions, lie in the practical necessities the archipelago's geography imposed on the original settlers. The inter-island navigation that the settlement pattern required produced, across the early centuries, substantial gnomish investment in technical methods that supported reliable inter-island travel. The methods began with conventional maritime arrangements; the methods developed, across approximately five hundred years, into hybrid maritime-aerial arrangements that the technical traditions' continuing development progressively refined. The tradition's specific aerial focus emerged across the period approximately 2300-2000 YK (in continental dating; the Lorghalan internal dating uses different conventions whose details the volume's appendices document) as the gnomish communities developed sufficient technical capability to support sustained aerial operations rather than only the maritime-supplemented arrangements the earlier period had produced.</p>
<h3>The Wind-Spirit Foundation</h3>
<p>The tradition's continuing technical foundation is the relationship the Lorghalan gnomish communities have developed with the wind-spirit populations of the archipelago's atmospheric region. The wind-spirits are, in Lorghalan tradition's framework, native intelligences of the archipelago's specific atmospheric configuration — beings whose presence in the archipelago predates gnomish settlement and whose continuing engagement with the gnomish communities reflects sustained negotiated relationships rather than the binding-coercion arrangements that the broader continental airship tradition employs. The wind-spirits' specific theological character has been, in the Lorghalan tradition's continuing scholarly work, characterized as related to but distinct from the air elementals of the elemental Plane of Air; the wind-spirits are, in this tradition's framing, manifestations of the broader elemental tradition whose specific local-archipelago configuration distinguishes them from their plane-resident kin.</p>
<h3>The Vessel Development</h3>
<p>The tradition's vessel development has produced, across the three thousand years, multiple successive vessel configurations whose specific characteristics have evolved as the technical and cultural arrangements have developed. The earliest documented vessels (the period approximately 2000-1500 YK in continental dating) were small craft supporting two to four passengers, with limited range and limited operational capability. The middle-period vessels (approximately 1500-700 YK) developed expanded capability, with vessels supporting up to twenty passengers and substantially expanded range; the middle period also produced the Lorghalan tradition's principal cultural-aesthetic developments in vessel design, which the contemporary vessels continue to draw on. The contemporary vessels (approximately 700 YK to present) reflect both continuing technical refinement and adaptations responsive to expanded continental engagement; the contemporary vessels include both traditional configurations whose specific forms preserve the long-historical tradition and adapted configurations whose specific forms address contemporary inter-island and limited continental commercial requirements.</p>
<h3>The Cultural Integration</h3>
<p>The aerial tradition's integration with the broader Lorghalan cultural life is substantial and continuing. The tradition includes religious and ceremonial dimensions that the technical operations support: the wind-spirit relationships that the tradition maintains are, in the Lorghalan religious framework, substantive theological relationships whose continuing maintenance is part of the broader theological practice the communities conduct. The tradition includes craft and apprenticeship dimensions that produce continuing institutional life: the vessel-construction crafts, the binder traditions, and the broader operational crafts collectively support a substantial portion of the archipelago's economic and cultural life. The tradition includes cultural-aesthetic dimensions that the broader continental scholarly community has not adequately engaged with: the vessels' specific design conventions, the operational practices' aesthetic character, and the broader cultural traditions surrounding aerial operations are, in Lorghalan self-understanding, a principal continuing expression of the broader gnomish cultural identity.</p>
<h3>The External Engagement</h3>
<p>The Lorghalan tradition's external engagement has, in recent decades, produced expanded scholarly exchange that volumes such as this one represent. The communities' senior scholars have determined that broader external engagement serves the tradition's continuing development; external attention to the tradition produces both scholarly and practical benefits whose value the communities have, after sustained internal discussion, judged sufficient to warrant the broader publication and exchange the contemporary period supports. The communities continue to maintain limits on the external disclosure of certain tradition-internal materials; the limits reflect the communities' continuing judgment about which materials should remain internal to the tradition's own institutional life and which materials are appropriate for broader scholarly engagement.</p>
<p class="marginalia">Loremaster Tessen Halrik serves the central Lorghalan loremaster council and conducts continuing scholarly work on the tradition's historical development. The volume is published with the formal authorization of the loremaster council and represents the first volume in the council's planned multi-volume Common-language presentation of the Lorghalan tradition's principal continuing dimensions.</p>`
});

LIBRARY.books.push({
  title: "The Wind-Spirits: A Lorghalan Theological Account",
  author: "Spirit-Speaker Iolen of Brassthorne (Lorghalan)",
  college: "tabernacle",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The wind-spirits of the Lorghalan archipelago are, in the tradition's theological framework, the principal continuing supernatural population with which the gnomish communities maintain sustained operational relationships. The relationships are not, in any straightforward sense, religious worship; the relationships are, more accurately, ongoing negotiated arrangements between the gnomish communities and the wind-spirit populations whose specific terms are continuously maintained through ritual practice and through the continuing communicative work the spirit-speakers conduct. This volume offers, for the first time in Common-language publication, a substantive theological account of the wind-spirits from within the Lorghalan tradition's own framework.</p>
<h3>The Wind-Spirits' Nature</h3>
<p>The wind-spirits are, in the tradition's framework, native intelligences of the archipelago's specific atmospheric configuration. The native character of the wind-spirits distinguishes them from elemental beings whose origins lie in the broader elemental planes; the wind-spirits exist in and through the archipelago's atmospheric environment rather than as visitors from elsewhere. The wind-spirits' relationship with the broader Plane of Air is contested within the tradition's own scholarship; some scholars hold that the wind-spirits are local manifestations of broader elemental-plane patterns, while others hold that the wind-spirits are theologically distinct beings whose connection with the elemental plane reflects affinity rather than identity. The contested question has not, across the tradition's long scholarly history, been definitively resolved.</p>
<p>The wind-spirits exhibit intelligence and personality in forms that the tradition's continuing engagement has documented. Individual wind-spirits maintain identifiable personalities across long periods; the spirit-speakers' continuing work includes the maintenance of relationships with specific individual spirits whose continuing engagement extends across multiple speaker-generations. The wind-spirits' communicative arrangements differ from those of mortal beings in significant respects; the spirit-speakers' training includes substantial work on the specific communicative methods that productive engagement with wind-spirit populations requires.</p>
<h3>The Service Relationships</h3>
<p>The service relationships through which wind-spirits participate in vessel-propulsion arrangements operate, in the tradition's framework, as one specific class of broader relationship types that the tradition supports. The service relationships are not the only form of gnomish-wind-spirit relationship; the tradition supports additional relationship forms including: ceremonial relationships, in which spirits participate in religious observances without service obligations; consultative relationships, in which spirits provide knowledge or perspective without other obligations; mutual-protection relationships, in which spirits and gnomish communities provide reciprocal protective services; and various less-formalized arrangements whose specific characters vary by particular spirits and gnomish parties involved. The service relationships' specific characteristics — duration, scope, compensation — are negotiated case-by-case under the tradition's broader negotiation framework rather than imposed through any standard form.</p>
<h3>The Compensation Question</h3>
<p>The compensation through which gnomish parties provide value to wind-spirits in service relationships is, in the tradition's framework, treated as a substantive obligation rather than as a matter of courtesy. The compensation forms include: <em>Ritual recognition</em>, in which the gnomish community conducts ongoing ritual practices that the spirit's continuing relationships with the broader spirit population require for the spirit's standing; <em>Story preservation</em>, in which the gnomish community maintains accounts of the spirit's deeds and characteristics that the spirit's continuing identity sustainability depends on (the tradition treats wind-spirit identities as partially constituted by ongoing community engagement); <em>Material exchanges</em>, which include various physical offerings whose specific forms vary by spirit and circumstance; and <em>Future-service obligations</em>, in which the community commits to providing services or accommodations to the spirit population whose specific applications develop across the relationship's continuing duration.</p>
<h3>The Theological Framework</h3>
<p>The broader theological framework within which the wind-spirit relationships operate is, in the Lorghalan tradition, characterized by what the tradition's scholars describe as "continuing reciprocity" — the principle that all sustained relationships between mortal communities and supernatural populations require continuous reciprocal engagement rather than one-time establishment. The principle distinguishes the Lorghalan tradition from theological frameworks that treat supernatural relationships as occurring through one-time foundational events whose subsequent continuation requires only the community's continuing recognition; the Lorghalan framework treats the continuing engagement as itself the ongoing relationship rather than as recognition of a relationship established elsewhere.</p>
<p>The framework has implications that extend beyond wind-spirit relationships to the broader Lorghalan cultural and religious life. The continuing-reciprocity principle shapes the communities' relationships with one another, with the natural environment of the archipelago, and with the various other supernatural populations the tradition recognizes. The principle's continuing application produces, in the tradition's self-understanding, the broader cultural character that distinguishes Lorghalan life from continental cultural patterns whose theological foundations rest on different principles.</p>
<p class="marginalia">Spirit-Speaker Iolen of Brassthorne serves the spirit-speaker council of the Brassthorne community and conducts continuing engagement with multiple individual wind-spirit populations across the archipelago's central region. The volume is the second in the Lorghalan loremaster council's multi-volume Common-language presentation of the tradition's principal continuing dimensions.</p>`
});

LIBRARY.books.push({
  title: "Lorghalan Vessel Construction: Traditional Methods and Contemporary Adaptations",
  author: "Master-Builder Doldarun Halrik (Lorghalan)",
  college: "drystone",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Lorghalan vessel-construction tradition has produced, across the archipelago's long settlement history, distinctive methods whose specific technical characteristics have not been substantively documented in continental scholarly publication. This volume addresses the tradition's principal construction methods, with attention to both the traditional techniques whose continuing practice preserves the long-historical tradition and the contemporary adaptations whose specific characteristics address the changing requirements that contemporary engagement with the broader continental commercial environment produces.</p>
<h3>The Wood Selection</h3>
<p>The traditional Lorghalan vessel construction employs five principal wood types whose specific properties the tradition's continuing experience has identified as particularly suited to the broader vessel-construction requirements. <em>Skywood</em>: a slow-growing hardwood native to the archipelago's central islands, whose specific properties include exceptional strength-to-weight ratios that make it the preferred material for primary structural elements. <em>Salt-oak</em>: a hardwood whose maritime exposure tolerance makes it the preferred material for hull-bottom and exterior elements that face direct atmospheric and water exposure. <em>Glass-pine</em>: a softer wood whose specific properties make it suited for interior elements where weight reduction is operationally beneficial. <em>Rope-vine</em>: a fibrous material whose specific applications include the tradition's distinctive rigging components that differ from continental conventional rigging arrangements. <em>Coral-wood</em>: a specialized material harvested from specific coastal coral populations under tradition-specified harvesting practices, whose limited availability restricts its application to specific high-value structural and ceremonial elements.</p>
<h3>The Joinery Tradition</h3>
<p>The traditional joinery employs methods whose specific techniques distinguish Lorghalan vessels from continental constructions in immediately observable ways. The principal joinery techniques include: <em>Spiral-fitting</em>, a fitting method whose specific applications produce joints whose strength under variable stresses exceeds conventional mortise-and-tenon arrangements; <em>Cord-tied stitched-plank construction</em>, a hull-construction method whose specific applications produce hulls whose flexibility under stress exceeds conventional rigid-plank arrangements; and <em>Multi-direction lashing</em>, a deck-and-rigging joinery method whose specific applications produce structural arrangements whose adaptability exceeds conventional fixed-fastening arrangements. The traditional joinery's continuing practice requires substantial apprenticeship; the apprenticeship traditions that support the work are organized around long-term master-apprentice relationships whose continuation across generations preserves the specific techniques.</p>
<h3>The Wind-Spirit Integration</h3>
<p>The vessel-construction tradition includes, throughout the construction process, the integration of wind-spirit-relationship elements that the contemporary continental airship tradition does not include in its constructions. The integration involves: <em>Construction-period ritual practices</em>, in which the spirit-speakers participate in specific construction stages to establish the conditions under which the eventual wind-spirit relationships will be productive; <em>Material treatment practices</em>, in which the wood and other materials are prepared through ritual processes that the tradition holds influence the materials' subsequent compatibility with wind-spirit engagement; and <em>Crew-introduction practices</em>, in which the eventual operational crew members participate in late-construction rituals that establish their initial relationships with the wind-spirit who will eventually serve the vessel. The integration produces vessels whose subsequent operational relationships with wind-spirits are, by Lorghalan tradition's continuing experience, substantially more productive than vessels constructed without the integration would support.</p>
<h3>The Contemporary Adaptations</h3>
<p>The contemporary period has produced adaptations of the traditional construction methods that address specific contemporary requirements. The adaptations include: <em>Larger-vessel construction</em>, with specific construction methods whose specific characteristics support vessels of larger sizes than the traditional period typically produced. The larger-vessel construction has required substantial technical work to extend the traditional methods to scales the traditional methods did not previously address. <em>Continental-commercial adaptation</em>, with specific construction features that support vessels' commercial operations beyond the archipelago's internal commercial environment. The continental-commercial adaptations have required substantial integration work between the traditional methods and continental commercial requirements. <em>Hybrid configurations</em>, with specific construction methods that combine traditional Lorghalan elements with continental construction elements; the hybrid configurations have produced vessels whose specific characteristics serve operational profiles that pure-traditional or pure-continental constructions would not adequately address.</p>
<h3>The Future Trajectory</h3>
<p>The future trajectory of the Lorghalan vessel-construction tradition is, in current circumstances, in active development. The tradition's continuing internal scholarship is engaged with questions about the appropriate balance between traditional method preservation and contemporary adaptation; the questions are not in any sense settled, and the tradition's continuing development reflects ongoing internal discussion about the appropriate evolution. The trajectory's specific outcomes depend on factors the tradition can only partially control; the broader continental commercial environment, the continued development of inter-archipelago and inter-continental engagement, and the specific institutional arrangements through which the tradition's apprenticeship programs continue to recruit and train new builders will collectively shape the trajectory in ways that current circumstances do not fully predict.</p>
<p class="marginalia">Master-Builder Doldarun Halrik leads the central construction shop at the principal Lorghalan vessel-construction site. The volume is the third in the Lorghalan loremaster council's multi-volume Common-language presentation and represents the first substantive external publication of the construction-tradition's specific technical methods.</p>`
});

LIBRARY.books.push({
  title: "The Council of Settlements: Lorghalan Internal Politics",
  author: "Loremaster Felia Brassthorne (Lorghalan)",
  college: "aureon",
  year: "997 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The Council of Settlements is the principal continuing political institution of the Lorghalan archipelago. The Council comprises representatives from the archipelago's principal communities and conducts the inter-community coordination work that the archipelago's continuing collective operations require. The Council's specific operational forms differ from the parallel political institutions of other gnomish communities (most notably the Zilargon Triumvirate) in ways that reflect the Lorghalan archipelago's specific historical development. This volume documents the Council's contemporary operations and addresses the principal questions the Council's continuing operations raise.</p>
<h3>The Council's Composition</h3>
<p>The Council comprises forty-two seats distributed among the archipelago's principal communities. The seat distribution does not, in its specific form, reflect strict population-proportional representation; the distribution reflects a historically-evolved arrangement that combines population-proportional elements with specific community-recognition elements that the broader confederational arrangement has, across centuries of operation, found necessary to maintain. The seat distribution is reviewed at twenty-year intervals; the reviews have, in most historical instances, produced modest adjustments rather than fundamental restructurings. The next scheduled review will occur in 1003 YK; the preliminary preparations for the review are currently underway across the participating communities.</p>
<h3>The Council's Operations</h3>
<p>The Council operates through a combination of plenary sessions and committee work. The plenary sessions occur three times annually at the central Brassthorne meeting hall; the sessions address the major inter-community matters that the Council's continuing operations produce. The committee work occurs continuously across the inter-session periods through specialized committees whose specific portfolios address particular continuing operational requirements. The committees include: the External Affairs Committee (which addresses continental and other external relationships); the Internal Coordination Committee (which addresses inter-community coordination on matters that do not require plenary attention); the Aerial Operations Committee (which addresses the inter-community arrangements that the archipelago's continuing aerial-tradition operations require); and several additional committees whose specific portfolios the Council's standing arrangements specify.</p>
<h3>The Decision-Making Practice</h3>
<p>The Council's decision-making practice emphasizes consensus-development across the participating communities. The practice does not, in most cases, employ majority voting on substantive matters; the practice involves extended discussion across multiple sessions until either consensus is achieved or the matter is determined to require continuing development before further attention. The consensus-development practice is more time-consuming than majority-voting alternatives, but the practice produces decisions whose subsequent implementation receives broader community support than majority-vote alternatives typically produce. The practice's continuing operation is one of the principal distinguishing features of the Lorghalan political tradition; the practice's effectiveness depends on the participating communities' continuing commitment to the broader confederational arrangement, which has been maintained across the long historical period without serious challenge.</p>
<h3>The External Relations</h3>
<p>The Council's external relations are conducted principally through the External Affairs Committee, with major matters reaching the plenary level for consensus consideration. The principal external relationships include: <em>The Lhazaar Principalities relationship</em>, which addresses the archipelago's continuing engagement with the broader Lhazaar political environment that the archipelago's geographic position produces. <em>The continental commercial relationship</em>, which addresses the continuing development of commercial engagement with continental parties and the institutional arrangements that support the engagement. <em>The dragonmarked-house relationships</em>, particularly the House Sivis relationship that the long-historical communication-network arrangements have produced, and the more recent expanded engagement with several additional houses whose specific commercial interests intersect with the archipelago's continuing operations. <em>The Zilargon relationship</em>, which has expanded across recent decades through institutional exchanges between the two principal gnomish-civilization political institutions.</p>
<h3>The Internal Tensions</h3>
<p>The Council's continuing operations face several internal tensions whose specific characters require ongoing institutional management. The principal tensions include: <em>The traditional-versus-adaptation tension</em>, which addresses the question of how the archipelago's traditional institutional arrangements should evolve in response to expanded external engagement. <em>The center-periphery tension</em>, which addresses the relative roles of the larger central-archipelago communities and the smaller peripheral communities in the broader confederational arrangement. <em>The economic-development tension</em>, which addresses the appropriate pace and scope of expanded commercial development that the contemporary environment makes possible. The tensions are not, in current circumstances, producing serious institutional crises; the tensions are producing continuing institutional discussion whose outcomes will shape the Council's continuing development across coming decades.</p>
<p class="marginalia">Loremaster Felia Brassthorne serves the Council's standing clerk operations and conducts continuing scholarly work on the Council's institutional history. The volume is the fourth in the Lorghalan loremaster council's multi-volume Common-language presentation and represents the most substantive external publication on the Council's contemporary operations available to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "The Lorghalan-Zilargon Exchange: Two Gnomish Civilizations in Contact",
  author: "Loremaster Tessen Halrik (Lorghalan) and Triumvir-Scholar Mara Ghallanda (Zilargon)",
  college: "soladas",
  year: "998 YK",
  restricted: false,
  type: "book",
  content: () => `<p>The contemporary period has produced expanded institutional exchange between the two principal gnomish civilizations on Khorvaire — the Lorghalan archipelago communities and the Zilargon Triumvirate — whose continuing development has implications for both civilizations' broader trajectories. This volume is a joint Lorghalan-Zilargon scholarly publication, prepared with the formal authorization of both civilizations' senior institutional bodies, that documents the exchange's recent development and addresses the questions the exchange's continuing development raises.</p>
<h3>The Long Historical Background</h3>
<p>The Lorghalan and Zilargon gnomish civilizations developed, across most of their respective histories, with limited inter-civilization contact. The two civilizations' specific origins differ substantially: the Lorghalan settlement of the archipelago drew on continental gnomish populations whose specific origins varied across multiple migrations across approximately five hundred years approximately three thousand years ago, while the Zilargon settlement of southern Khorvaire developed from gnomish populations whose specific origins lay in different continental migrations and whose subsequent development produced the contemporary Zilargon political and cultural configuration. The two civilizations' historical development across the long historical period was largely separate; the limited contact across the period was not sufficient to produce sustained institutional exchange or substantial cultural cross-influence.</p>
<h3>The Modern Period Development</h3>
<p>The modern period — defined for purposes of this volume as approximately the past two centuries — has produced expanded contact whose specific developments have shaped the contemporary exchange's institutional character. The principal developments include: <em>The pre-Galifar trade development</em>, in which limited commercial exchange between Zilargon merchants and Lhazaar Sea operators (including Lorghalan parties) produced initial sustained commercial contact. <em>The post-Galifar continental engagement</em>, in which the broader continental institutional consolidation produced expanded inter-civilizational contact across multiple continental parties, with the Lorghalan-Zilargon engagement developing as one specific element of the broader expansion. <em>The Last War period restrictions</em>, in which the wartime continental conditions reduced inter-civilizational engagement across the war period, including the Lorghalan-Zilargon exchange. <em>The post-Treaty expansion</em>, in which the post-war institutional conditions produced substantial expansion of inter-civilizational engagement across multiple continental parties, including the most substantial expansion of the Lorghalan-Zilargon exchange in the long historical period.</p>
<h3>The Contemporary Exchange's Forms</h3>
<p>The contemporary exchange operates through multiple institutional arrangements. The principal arrangements include: <em>Scholarly exchange</em>, supported by the institutional arrangements that the Korranberg Library's continuing engagement with both civilizations supports. The scholarly exchange has produced, across the past decade, expanded mutual access to historical and technical materials that previous arrangements did not support. <em>Commercial exchange</em>, supported by the standing commercial arrangements that the dragonmarked house operations have developed across both civilizations. The commercial exchange has produced, in current circumstances, substantial trade volumes in materials and services whose specific characters reflect the two civilizations' complementary capabilities. <em>Diplomatic exchange</em>, supported by the standing diplomatic arrangements that both civilizations' senior institutional bodies have established. The diplomatic exchange has produced, across recent decades, expanded mutual recognition of the two civilizations' specific institutional arrangements and the establishment of working relationships across multiple substantive matters.</p>
<h3>The Joint Concerns</h3>
<p>The exchange has produced, in recent years, identification of specific joint concerns whose continuing development requires coordinated attention from both civilizations. The principal joint concerns include: <em>The continuing post-Mourning environmental implications</em>, which affect both civilizations through specific mechanisms whose coordinated assessment supports more effective response than separate civilizational responses would produce. <em>The dragonmarked-house relationship questions</em>, which affect both civilizations through the houses' continuing operations across both civilizations' territories. <em>The continental commercial environment's continuing development</em>, whose specific characteristics produce questions of appropriate gnomish-civilizational engagement that benefit from coordinated rather than separate responses. The joint concerns' continuing engagement requires institutional arrangements that the contemporary exchange's specific forms have begun to develop but whose continuing maturation will require sustained institutional attention from both civilizations across coming decades.</p>
<h3>The Future Trajectory</h3>
<p>The exchange's future trajectory is, in current circumstances, characterized by continuing expansion at moderate pace. The expansion's continuation depends on factors that both civilizations can only partially control; the broader continental institutional environment, the continued development of inter-civilizational engagement across other continental parties, and the specific institutional arrangements through which both civilizations conduct their internal political development will collectively shape the exchange's continuing development. The exchange's continued institutional benefits to both civilizations are, in both civilizations' contemporary scholarly assessment, substantial; the continued expansion is, by both civilizations' contemporary institutional commitments, a continuing institutional priority whose specific implementation will continue to develop across coming years.</p>
<p class="marginalia">The volume's joint authorship reflects the exchange's contemporary institutional character. The volume was prepared through extensive collaboration between the two named scholars across the period 996-998 YK, with formal authorization from both civilizations' senior institutional bodies. The volume represents, by joint civilizational assessment, the most substantive recent publication on the exchange's institutional development available to the broader continental scholarly community.</p>`
});

LIBRARY.books.push({
  title: "Schematics for Small Craft: A Lorghalan-Continental Comparative Manual",
  author: "Master-Builder Berra Halrik (Lorghalan) and Master-Engineer Halric d'Cannith",
  college: "drystone",
  year: "999 YK",
  restricted: false,
  type: "book",
  content: () => `<p>This volume is a joint Lorghalan-Cannith technical manual addressing the construction specifications and operational considerations for small-craft aerial vessels in the four-to-twelve-passenger range. The volume's preparation has been conducted as a collaborative scholarly project between the two civilizations' senior technical institutions, with the explicit purpose of providing substantive cross-civilizational technical exchange that the broader continental small-craft operations would benefit from. The volume is the first joint publication of this character from the Lorghalan-Cannith collaborative arrangement; further joint publications addressing related technical subjects are planned across coming years.</p>
<h3>The Comparative Approach</h3>
<p>The volume's comparative structure addresses, for each principal small-craft technical subject, both the Lorghalan tradition's methods and the Cannith tradition's methods, with discussion of the specific differences and the operational implications the differences produce. The structure permits readers familiar with one tradition to develop substantive understanding of the alternative tradition's approaches; the structure also supports operational decisions about which tradition's methods are appropriate for specific commercial or operational requirements. The two tradition's methods are not, in most cases, fully interchangeable; specific applications favor specific traditions, and the volume's comparative discussion supports the operational judgments the favoring requires.</p>
<h3>The Hull Schematics</h3>
<p>The hull schematics section addresses the principal small-craft hull configurations across both traditions. The Lorghalan traditional hulls employ the spiral-fitting and stitched-plank methods that the broader Lorghalan vessel-construction tradition has documented; the schematics address the specific dimensions, joinery details, and material specifications that small-craft applications of those methods require. The Cannith traditional hulls employ the rigid-plank-and-frame methods that the broader continental tradition has developed; the schematics address the parallel specific details for those methods. The hull configurations produce vessels with substantially different operational characteristics; the Lorghalan hulls exhibit greater flexibility under stress while the Cannith hulls exhibit greater rigidity, and the operational implications shape the appropriate applications of each.</p>
<h3>The Propulsion Schematics</h3>
<p>The propulsion schematics section addresses the principal small-craft propulsion arrangements across both traditions. The Lorghalan voluntary-service arrangements employ the wind-spirit relationship structures that the broader tradition has documented; the schematics address the specific binding-equivalent ritual configurations and the operational support arrangements those configurations require. The Cannith binding-tradition arrangements employ smaller-scale variants of the broader continental airship binding methods; the schematics address the parallel specific details for those methods. The propulsion arrangements produce small-craft with different operational characteristics; the voluntary-service arrangements support smaller-scale operations more reliably while the binding-tradition arrangements support more aggressive operational profiles, and the operational implications again shape the appropriate applications.</p>
<h3>The Helm and Control Schematics</h3>
<p>The helm and control schematics section addresses the small-craft control arrangements across both traditions. The Lorghalan traditional helm arrangements employ communication-based control methods that operate through ongoing helmsman-spirit communicative engagement during vessel operation; the methods require substantial helmsman training in the spirit-communication practices the tradition has developed. The Cannith traditional helm arrangements employ the helm-interface methods that the broader continental airship tradition uses; the methods require substantial helmsman training in the interface-operation practices the broader tradition has developed. The control arrangements produce different operational experiences for the helmsman; the Lorghalan arrangements involve continuous communicative engagement that the binding-tradition arrangements do not require, while the binding-tradition arrangements support more standardized operational procedures that the communication-based arrangements do not as readily produce.</p>
<h3>The Joint Recommendations</h3>
<p>The volume's joint recommendations address the appropriate selection between traditions for specific small-craft applications. The recommendations include: continental commercial applications generally favor the Cannith binding-tradition methods due to the operational standardization the methods support; archipelago and short-range applications generally favor the Lorghalan voluntary-service methods due to the operational sustainability the methods support; specialized applications (ceremonial vessels, scientific-research vessels, certain personal vessels of senior figures whose operational profiles differ from commercial standards) may favor either tradition depending on the specific requirements. The recommendations are not prescriptive; the volume's authors recognize that operational decisions in specific cases involve factors the volume's general framework cannot fully address.</p>
<p class="marginalia">The joint authorship reflects the Lorghalan-Cannith collaborative arrangement that has produced expanded technical exchange across recent years. The volume is published with formal authorization from both civilizations' senior technical institutions and is used, in modified form, in apprenticeship curricula at participating shops in both civilizations.</p>`
});

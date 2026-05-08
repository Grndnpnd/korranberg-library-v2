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
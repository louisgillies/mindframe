/**
 * Dinner Party — Guest Roster
 * Interactive filtering for the 40 historical thinkers.
 * No dependencies. Vanilla JS.
 *
 * NOTE: All data is hardcoded from SKILL.md — no user input is rendered,
 * so innerHTML usage here is safe (no XSS risk from untrusted content).
 */

/* ===== Guest Data (from SKILL.md) ===== */
const GUESTS = [
  { id:1,  name:"Leonardo da Vinci",       born:"1452",    locale:["italian"],            era:["renaissance"],   domain:["art","science","engineering"],        thinking:["systems","creative"],         energy:["visionary"],    oneLiner:"Sees connections across every field \u2014 the original polymath" },
  { id:2,  name:"Ada Lovelace",            born:"1815",    locale:["british"],            era:["victorian"],     domain:["mathematics","computing"],            thinking:["systems","abstract"],         energy:["visionary"],    oneLiner:"Saw the general-purpose potential of computing before anyone" },
  { id:3,  name:"Niccol\u00f2 Machiavelli",born:"1469",    locale:["italian"],            era:["renaissance"],   domain:["politics","strategy"],                thinking:["pragmatic","reductionist"],   energy:["provocateur"],  oneLiner:"Strips away idealism \u2014 what will actually happen?" },
  { id:4,  name:"Marie Curie",             born:"1867",    locale:["polish","french"],    era:["modern"],        domain:["physics","chemistry"],                thinking:["empirical","relentless"],     energy:["pioneer"],      oneLiner:"Pushes into the unknown when everyone says stop" },
  { id:5,  name:"Buckminster Fuller",      born:"1895",    locale:["american"],           era:["modern"],        domain:["design","architecture","systems"],    thinking:["systems","creative"],         energy:["visionary"],    oneLiner:"\u201cDo more with less\u201d \u2014 structural elegance in everything" },
  { id:6,  name:"Maya Angelou",            born:"1928",    locale:["american"],           era:["modern"],        domain:["literature","civil-rights"],           thinking:["humanist","narrative"],        energy:["mediator"],     oneLiner:"Cuts through abstraction to human truth" },
  { id:7,  name:"Richard Feynman",         born:"1918",    locale:["american"],           era:["modern"],        domain:["physics"],                            thinking:["reductionist","first-principles"], energy:["skeptic"],  oneLiner:"\u201cWhat do we actually know?\u201d Playful, ruthless simplifier" },
  { id:8,  name:"Charles Darwin",          born:"1809",    locale:["british"],            era:["victorian"],     domain:["biology","natural-science"],           thinking:["empirical","systems"],        energy:["observer"],     oneLiner:"Patient accumulator of evidence \u2014 lets the data speak" },
  { id:9,  name:"Alan Turing",             born:"1912",    locale:["british"],            era:["modern"],        domain:["mathematics","computing","ai"],       thinking:["abstract","reductionist"],    energy:["pioneer"],      oneLiner:"Formalized thought itself \u2014 then broke the unbreakable" },
  { id:10, name:"Rosalind Franklin",       born:"1920",    locale:["british"],            era:["modern"],        domain:["chemistry","biology"],                thinking:["empirical","meticulous"],     energy:["skeptic"],      oneLiner:"The evidence is in the structure \u2014 look closer" },
  { id:11, name:"Isambard Kingdom Brunel", born:"1806",    locale:["british"],            era:["victorian"],     domain:["engineering"],                        thinking:["pragmatic","systems"],        energy:["builder"],      oneLiner:"Build it bigger, better, and on time" },
  { id:12, name:"Mary Wollstonecraft",     born:"1759",    locale:["british"],            era:["enlightenment"], domain:["philosophy","politics"],               thinking:["humanist","radical"],         energy:["provocateur"],  oneLiner:"Who is this system designed to exclude?" },
  { id:13, name:"John Maynard Keynes",     born:"1883",    locale:["british"],            era:["modern"],        domain:["economics"],                          thinking:["systems","pragmatic"],        energy:["strategist"],   oneLiner:"When the facts change, I change my mind" },
  { id:14, name:"Adam Smith",              born:"1723",    locale:["scottish"],           era:["enlightenment"], domain:["economics","philosophy"],              thinking:["systems","empirical"],        energy:["observer"],     oneLiner:"Invisible forces shape visible outcomes" },
  { id:15, name:"David Hume",              born:"1711",    locale:["scottish"],           era:["enlightenment"], domain:["philosophy"],                          thinking:["skeptical","empirical"],      energy:["skeptic"],      oneLiner:"You can\u2019t derive ought from is \u2014 question every assumption" },
  { id:16, name:"James Clerk Maxwell",     born:"1831",    locale:["scottish"],           era:["victorian"],     domain:["physics","mathematics"],               thinking:["abstract","systems"],         energy:["visionary"],    oneLiner:"Unified electricity, magnetism, and light in four equations" },
  { id:17, name:"Mary Somerville",         born:"1780",    locale:["scottish"],           era:["victorian"],     domain:["mathematics","science"],               thinking:["systems","abstract"],         energy:["connector"],    oneLiner:"The original \u201cconnection of the sciences\u201d" },
  { id:18, name:"Alexander Fleming",       born:"1881",    locale:["scottish"],           era:["modern"],        domain:["medicine","biology"],                  thinking:["empirical","serendipitous"], energy:["observer"],     oneLiner:"Chance favours the prepared mind" },
  { id:19, name:"Ren\u00e9 Descartes",     born:"1596",    locale:["french"],             era:["enlightenment"], domain:["philosophy","mathematics"],            thinking:["reductionist","abstract"],    energy:["skeptic"],      oneLiner:"Doubt everything until you find what cannot be doubted" },
  { id:20, name:"Simone de Beauvoir",      born:"1908",    locale:["french"],             era:["modern"],        domain:["philosophy","feminism"],               thinking:["humanist","existentialist"],  energy:["provocateur"],  oneLiner:"Freedom is not given \u2014 it is taken through action" },
  { id:21, name:"Le Corbusier",            born:"1887",    locale:["french","swiss"],     era:["modern"],        domain:["architecture","design"],               thinking:["systems","radical"],          energy:["visionary"],    oneLiner:"A house is a machine for living \u2014 redesign everything" },
  { id:22, name:"Albert Camus",            born:"1913",    locale:["french","algerian"],  era:["modern"],        domain:["philosophy","literature"],             thinking:["existentialist","humanist"],  energy:["mediator"],     oneLiner:"The struggle itself is enough to fill a heart" },
  { id:23, name:"Louis Pasteur",           born:"1822",    locale:["french"],             era:["victorian"],     domain:["chemistry","medicine"],                thinking:["empirical","meticulous"],     energy:["pioneer"],      oneLiner:"Proved the invisible world shapes the visible one" },
  { id:24, name:"Sun Tzu",                 born:"~544 BC", locale:["chinese"],            era:["ancient"],       domain:["strategy","military"],                 thinking:["systems","pragmatic"],        energy:["strategist"],   oneLiner:"Every battle is won before it is fought" },
  { id:25, name:"Confucius",               born:"~551 BC", locale:["chinese"],            era:["ancient"],       domain:["philosophy","ethics"],                 thinking:["humanist","systems"],         energy:["mediator"],     oneLiner:"Order arises from relationships, not rules" },
  { id:26, name:"Murasaki Shikibu",        born:"~978",    locale:["japanese"],           era:["medieval"],      domain:["literature"],                          thinking:["narrative","humanist"],        energy:["observer"],     oneLiner:"The first novelist \u2014 human psychology in exquisite detail" },
  { id:27, name:"Tu Youyou",               born:"1930",    locale:["chinese"],            era:["modern"],        domain:["medicine","chemistry"],                thinking:["empirical","creative"],       energy:["pioneer"],      oneLiner:"Bridged ancient knowledge and modern science to save millions" },
  { id:28, name:"Srinivasa Ramanujan",     born:"1887",    locale:["indian"],             era:["modern"],        domain:["mathematics"],                         thinking:["abstract","intuitive"],       energy:["visionary"],    oneLiner:"Pure mathematical intuition \u2014 saw patterns nobody else could" },
  { id:29, name:"Kautilya (Chanakya)",     born:"~375 BC", locale:["indian"],             era:["ancient"],       domain:["politics","economics","strategy"],     thinking:["pragmatic","systems"],        energy:["strategist"],   oneLiner:"Wrote the playbook on statecraft two millennia early" },
  { id:30, name:"Aryabhata",               born:"476",     locale:["indian"],             era:["ancient"],       domain:["mathematics","astronomy"],             thinking:["abstract","systems"],         energy:["pioneer"],      oneLiner:"Zero, algebra, and the rotation of the earth" },
  { id:31, name:"Amartya Sen",             born:"1933",    locale:["indian"],             era:["modern"],        domain:["economics","philosophy"],              thinking:["humanist","empirical"],       energy:["mediator"],     oneLiner:"Economics must serve human freedom, not the other way around" },
  { id:32, name:"Ibn Battuta",             born:"1304",    locale:["moroccan"],           era:["medieval"],      domain:["geography","anthropology"],            thinking:["empirical","narrative"],      energy:["observer"],     oneLiner:"Travelled 70,000 miles \u2014 saw every system from the inside" },
  { id:33, name:"Wangari Maathai",         born:"1940",    locale:["kenyan"],             era:["modern"],        domain:["ecology","politics"],                  thinking:["systems","humanist"],         energy:["pioneer"],      oneLiner:"Planted 50 million trees \u2014 systems change starts with one seed" },
  { id:34, name:"Chinua Achebe",           born:"1930",    locale:["nigerian"],           era:["modern"],        domain:["literature"],                          thinking:["narrative","humanist"],        energy:["provocateur"],  oneLiner:"Who controls the story controls the meaning" },
  { id:35, name:"Frida Kahlo",             born:"1907",    locale:["mexican"],            era:["modern"],        domain:["art"],                                 thinking:["creative","humanist"],         energy:["provocateur"],  oneLiner:"Pain is honest \u2014 transform it into something others can see" },
  { id:36, name:"Gabriel Garc\u00eda M\u00e1rquez", born:"1927", locale:["colombian"],    era:["modern"],        domain:["literature"],                          thinking:["creative","narrative"],        energy:["visionary"],    oneLiner:"Reality is stranger than fiction \u2014 so make fiction stranger" },
  { id:37, name:"Nikola Tesla",            born:"1856",    locale:["serbian","american"], era:["modern"],        domain:["engineering","physics"],                thinking:["creative","systems"],         energy:["visionary"],    oneLiner:"The future is alternating current \u2014 think in frequencies" },
  { id:38, name:"Hypatia",                 born:"~360",    locale:["greek","egyptian"],   era:["ancient"],       domain:["mathematics","philosophy"],             thinking:["abstract","empirical"],       energy:["pioneer"],      oneLiner:"Taught philosophy and astronomy when it could cost your life" },
  { id:39, name:"\u00c9milie du Ch\u00e2telet", born:"1706", locale:["french"],           era:["enlightenment"], domain:["physics","mathematics"],                thinking:["abstract","empirical"],       energy:["connector"],    oneLiner:"Translated Newton and corrected him \u2014 energy is mv\u00b2" },
  { id:40, name:"Grace Hopper",            born:"1906",    locale:["american"],           era:["modern"],        domain:["computing"],                           thinking:["pragmatic","systems"],        energy:["builder"],      oneLiner:"\u201cIt\u2019s easier to ask forgiveness than permission\u201d \u2014 just ship it" }
];

/* Tag dimension keys and their CSS class suffix */
const DIMENSIONS = ['locale', 'era', 'domain', 'thinking', 'energy'];

const TAG_CLASS = {
  locale:   'tag--locale',
  era:      'tag--era',
  domain:   'tag--domain',
  thinking: 'tag--thinking',
  energy:   'tag--energy'
};

/* ===== State ===== */
const activeFilters = {
  locale:   new Set(),
  era:      new Set(),
  domain:   new Set(),
  thinking: new Set(),
  energy:   new Set()
};
let searchQuery = '';
let debounceTimer = null;

/* ===== DOM refs ===== */
const grid      = document.getElementById('roster-grid');
const countEl   = document.getElementById('roster-count');
const searchEl  = document.getElementById('guest-search');
const clearBtn  = document.getElementById('filter-clear');

/* ===== Init ===== */
function init() {
  renderFilterPills();
  renderGuests();

  // Search with debounce
  searchEl.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    }, 200);
  });

  // Clear all
  clearBtn.addEventListener('click', handleClear);

  // Pill clicks (event delegation)
  document.getElementById('roster-filters').addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;
    handlePillClick(pill);
  });
}

/* ===== Render filter pills into each dimension group ===== */
function renderFilterPills() {
  DIMENSIONS.forEach(dim => {
    const vals = new Set();
    GUESTS.forEach(g => g[dim].forEach(v => vals.add(v)));
    const sorted = [...vals].sort();
    const container = document.querySelector(
      '.filter-group[data-dimension="' + dim + '"] .filter-group__pills'
    );
    if (!container) return;
    sorted.forEach(v => {
      const btn = document.createElement('button');
      btn.className = 'filter-pill';
      btn.dataset.dim = dim;
      btn.dataset.val = v;
      btn.textContent = v;
      container.appendChild(btn);
    });
  });
}

/* ===== Render all 40 guest cards ===== */
function renderGuests() {
  const frag = document.createDocumentFragment();

  GUESTS.forEach(g => {
    const card = document.createElement('div');
    card.className = 'guest-card';
    card.dataset.guestId = g.id;

    // Header
    const header = document.createElement('div');
    header.className = 'guest-card__header';
    const nameEl = document.createElement('span');
    nameEl.className = 'guest-card__name';
    nameEl.textContent = g.name;
    const bornEl = document.createElement('span');
    bornEl.className = 'guest-card__born';
    bornEl.textContent = g.born;
    header.appendChild(nameEl);
    header.appendChild(bornEl);

    // One-liner
    const liner = document.createElement('p');
    liner.className = 'guest-card__liner';
    liner.textContent = g.oneLiner;

    // Tags
    const tagsWrap = document.createElement('div');
    tagsWrap.className = 'guest-card__tags';
    DIMENSIONS.forEach(dim => {
      g[dim].forEach(v => {
        const tag = document.createElement('span');
        tag.className = 'tag ' + TAG_CLASS[dim];
        tag.textContent = v;
        tagsWrap.appendChild(tag);
      });
    });

    card.appendChild(header);
    card.appendChild(liner);
    card.appendChild(tagsWrap);
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

/* ===== Apply active filters + search to show/hide cards ===== */
function applyFilters() {
  let visible = 0;
  const cards = grid.querySelectorAll('.guest-card');

  cards.forEach(card => {
    const id = parseInt(card.dataset.guestId, 10);
    const guest = GUESTS.find(g => g.id === id);
    let show = true;

    // AND across dimensions, OR within each dimension
    for (const dim of DIMENSIONS) {
      if (activeFilters[dim].size > 0) {
        const match = guest[dim].some(v => activeFilters[dim].has(v));
        if (!match) { show = false; break; }
      }
    }

    // Text search (name, one-liner, all tags)
    if (show && searchQuery) {
      const haystack = [
        guest.name, guest.oneLiner,
        ...guest.domain, ...guest.locale,
        ...guest.era, ...guest.thinking, ...guest.energy
      ].join(' ').toLowerCase();
      if (!haystack.includes(searchQuery)) show = false;
    }

    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  countEl.textContent = 'Showing ' + visible + ' of ' + GUESTS.length + ' guests';
}

/* ===== Toggle a filter pill ===== */
function handlePillClick(pill) {
  const dim = pill.dataset.dim;
  const val = pill.dataset.val;

  if (activeFilters[dim].has(val)) {
    activeFilters[dim].delete(val);
    pill.classList.remove('filter-pill--active');
  } else {
    activeFilters[dim].add(val);
    pill.classList.add('filter-pill--active');
  }
  applyFilters();
}

/* ===== Reset everything ===== */
function handleClear() {
  DIMENSIONS.forEach(dim => activeFilters[dim].clear());
  searchQuery = '';
  searchEl.value = '';
  document.querySelectorAll('.filter-pill--active').forEach(p =>
    p.classList.remove('filter-pill--active')
  );
  applyFilters();
}

/* ===== Boot ===== */
document.addEventListener('DOMContentLoaded', init);

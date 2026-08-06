/* ===== Islamic Pocket Book - Professional Version ===== */

const translations = {
  en: {
    siteTitle: "Islamic Pocket Book",
    heroTitle: "Find References Instantly",
    heroSubtitle: "Search Quran, Hadith and Ahmadiyya literature for Tabligh",
    searchPlaceholder: "Ask any Islamic or Tabligh related question...",
    searchBtn: "Search",
    downloadPdf: "\uD83D\uDCE5 PDF",
    suggestedTitle: "Popular Tabligh Topics",
    resultsTitle: "Search Results",
    clearResults: "Clear",
    quranSection: "Quran Verses",
    hadithSection: "Hadith Results",
    ahmadiyyaSection: "Ahmadiyya Literature",
    footerText: "Islamic Pocket Book \u2014 Made for Ahmadiyya preachers",
    noResults: "No matching results found.",
    loading: "Loading...",
    page: "Page",
    viewInPdf: "Open in Pocket Book \u2192"
  },
  ur: {
    siteTitle: "\u0627\u0633\u0644\u0627\u0645\u06A9 \u067E\u0627\u06A9\u0679 \u0628\u06A9",
    heroTitle: "\u0641\u0648\u0631\u0627\u064B \u062D\u0648\u0627\u0644\u06C1 \u062C\u0627\u062A \u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA",
    heroSubtitle: "\u0642\u0631\u0622\u0646\u060C \u062D\u062F\u06CC\u062B \u0627\u0648\u0631 \u0627\u062D\u0645\u062F\u06CC \u0627\u062F\u0628 \u0645\u06CC\u06BA \u062A\u0628\u0644\u06CC\u063A \u06A9\u06D2 \u0644\u06CC\u06D2 \u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA",
    searchPlaceholder: "\u06A9\u0648\u0626\u06CC \u0628\u06BE\u06CC \u0627\u0633\u0644\u0627\u0645\u06CC \u06CC\u0627 \u062A\u0628\u0644\u06CC\u063A\u06CC \u0633\u0648\u0627\u0644 \u067E\u0648\u0686\u06BE\u06CC\u06BA...",
    searchBtn: "\u062A\u0644\u0627\u0634 \u06A9\u0631\u06CC\u06BA",
    downloadPdf: "\uD83D\uDCE5 PDF",
    suggestedTitle: "\u0645\u0642\u0628\u0648\u0644 \u062A\u0628\u0644\u06CC\u063A\u06CC \u0645\u0648\u0636\u0648\u0639\u0627\u062A",
    resultsTitle: "\u062A\u0644\u0627\u0634 \u06A9\u06D2 \u0646\u062A\u0627\u0626\u062C",
    clearResults: "\u0635\u0627\u0641 \u06A9\u0631\u06CC\u06BA",
    quranSection: "\u0642\u0631\u0622\u0646 \u06A9\u06CC \u0622\u06CC\u0627\u062A",
    hadithSection: "\u0627\u062D\u0627\u062F\u06CC\u062B \u06A9\u06D2 \u0646\u062A\u0627\u0626\u062C",
    ahmadiyyaSection: "\u0627\u062D\u0645\u062F\u06CC \u0627\u062F\u0628",
    footerText: "\u0627\u0633\u0644\u0627\u0645\u06A9 \u067E\u0627\u06A9\u0679 \u0628\u06A9 \u2014 \u0627\u062D\u0645\u062F\u06CC \u0645\u0628\u0644\u063A\u06CC\u0646 \u06A9\u06D2 \u0644\u06CC\u06D2",
    noResults: "\u06A9\u0648\u0626\u06CC \u0645\u0645\u0627\u062B\u0644 \u0646\u062A\u06CC\u062C\u06C1 \u0646\u06C1\u06CC\u06BA \u0645\u0644\u0627\u06D4",
    loading: "\u0644\u0648\u0688 \u06C1\u0648 \u0631\u06C1\u0627 \u06C1\u06D2...",
    page: "\u0635\u0641\u062D\u06C1",
    viewInPdf: "\u067E\u0627\u06A9\u0679 \u0628\u06A9 \u0645\u06CC\u06BA \u06A9\u06BE\u0648\u0644\u06CC\u06BA \u2190"
  }
};

let currentLang = localStorage.getItem('ipb-lang') || 'en';
let currentTheme = localStorage.getItem('ipb-theme') || 'light';

// ========== CHANGE THIS TO YOUR GOOGLE DRIVE PUBLIC LINK ==========
const PDF_URL = "https://drive.google.com/file/d/1PohF361-ZYMVGKeQYGUpI_tbaPNpOU88/view?usp=drive_link";
// ==================================================================

// Expanded Pocket Book Index (based on common Tablighi topics)
const pocketBookIndex = [
  { title: "\u0648\u062C\u0648\u062F \u0628\u0627\u0631\u06CC \u062A\u0639\u0627\u0644\u06CC\u0670 \u06A9\u06D2 \u062F\u0644\u0627\u0626\u0644 / Proofs of Existence of God", page: 1, keywords: ["god", "existence", "\u0648\u062C\u0648\u062F", "\u062E\u062F\u0627", "\u0628\u0627\u0631\u06CC", "proof", "dalil"] },
  { title: "\u062F\u06C1\u0631\u06CC\u0648\u06BA \u06A9\u06D2 \u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A / Atheists' Objections", page: 20, keywords: ["atheist", "\u062F\u06C1\u0631\u06CC", "\u0645\u0646\u06A9\u0631\u06CC\u0646", "atheism"] },
  { title: "\u0627\u0633\u0644\u0627\u0645 \u0627\u0648\u0631 \u0648\u06CC\u062F\u06A9 \u062F\u06BE\u0631\u0645 / Islam & Vedic Religion", page: 23, keywords: ["vedic", "\u0648\u06CC\u062F\u06A9", "\u0622\u0631\u06CC\u0646", "hindu", "hinduism"] },
  { title: "\u0639\u06CC\u0633\u0627\u0626\u06CC\u062A / Christianity", page: 71, keywords: ["christianity", "\u0639\u06CC\u0633\u0627\u0626\u06CC\u062A", "\u0639\u06CC\u0633\u0627\u0626\u06CC", "jesus", "christian"] },
  { title: "\u062A\u0631\u062F\u06CC\u062F \u0627\u0644\u0648\u06C1\u06CC\u062A \u0645\u0633\u06CC\u062D / Refutation of Divinity of Jesus", page: 74, keywords: ["divinity", "\u0627\u0644\u0648\u06C1\u06CC\u062A", "trinity", "\u062A\u062B\u0644\u06CC\u062B", "son of god"] },
  { title: "\u0645\u0633\u06CC\u062D \u0635\u0644\u06CC\u0628 \u067E\u0631 \u0641\u0648\u062A \u0646\u06C1\u06CC\u06BA \u06C1\u0648\u0626\u06D2 / Jesus did not die on Cross", page: 83, keywords: ["cross", "\u0635\u0644\u06CC\u0628", "\u0635\u0644\u0628", "crucifixion", "died on cross"] },
  { title: "\u06A9\u0641\u0627\u0631\u06C1 \u06A9\u06CC \u062A\u0631\u062F\u06CC\u062F / Refutation of Atonement", page: 92, keywords: ["atonement", "\u06A9\u0641\u0627\u0631\u06C1", "ransom", "sacrifice"] },
  { title: "\u0627\u0628\u0637\u0627\u0644 \u062A\u062B\u0644\u06CC\u062B / Refutation of Trinity", page: 100, keywords: ["trinity", "\u062A\u062B\u0644\u06CC\u062B", "three gods"] },
  { title: "\u062A\u062D\u0631\u06CC\u0641 \u0628\u0627\u0626\u0628\u0644 / Corruption of the Bible", page: 101, keywords: ["bible", "\u0628\u0627\u0626\u0628\u0644", "\u062A\u062D\u0631\u06CC\u0641", "corruption", "tahrif"] },
  { title: "\u0635\u062F\u0627\u0642\u062A \u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F \u0627\u0632 \u0628\u0627\u0626\u0628\u0644 / Promised Messiah from Bible", page: 111, keywords: ["promised messiah", "\u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F", "bible", "second coming"] },
  { title: "\u0639\u06CC\u0633\u0627\u0626\u06CC\u0648\u06BA \u06A9\u06D2 \u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A / Christian Objections", page: 116, keywords: ["objections", "\u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A", "christian"] },
  { title: "\u0633\u06A9\u06BE \u0645\u0630\u06C1\u0628 / Sikh Religion", page: 155, keywords: ["sikh", "\u0633\u06A9\u06BE", "nanak", "sikhism"] },
  { title: "\u0628\u0627\u0628\u06CC / \u0628\u06C1\u0627\u0626\u06CC \u0645\u0630\u06C1\u0628 / Babi Bahai", page: 175, keywords: ["bahai", "\u0628\u0627\u0628\u06CC", "bahaullah", "bahai"] },
  { title: "\u0634\u06CC\u0639\u06C1 \u0645\u0630\u06C1\u0628 / Shia Religion", page: 187, keywords: ["shia", "\u0634\u06CC\u0639\u06C1", "shiite"] },
  { title: "\u0648\u0641\u0627\u062A \u0645\u0633\u06CC\u062D \u0646\u0627\u0635\u0631\u06CC / Death of Jesus", page: 233, keywords: ["death of jesus", "\u0648\u0641\u0627\u062A \u0645\u0633\u06CC\u062D", "\u062A\u0648\u0641\u06CC", "\u0631\u0641\u0639", "ascension", "isa", "jesus died", "tawaffa"] },
  { title: "\u0645\u0633\u0626\u0644\u06C1 \u0627\u0645\u06A9\u0627\u0646 \u0646\u0628\u0648\u062A / Possibility of Prophethood", page: 317, keywords: ["prophethood", "\u0646\u0628\u0648\u062A", "\u0627\u0645\u06A9\u0627\u0646 \u0646\u0628\u0648\u062A", "possibility of prophet"] },
  { title: "\u062A\u0631\u062F\u06CC\u062F \u0627\u0646\u0642\u0637\u0627\u0639 \u0646\u0628\u0648\u062A / Khatam an-Nabiyyin (Finality)", page: 357, keywords: ["khatam", "\u062E\u0627\u062A\u0645", "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646", "finality", "seal of prophets", "last prophet", "khatame nabuwwat", "\u062E\u062A\u0645 \u0646\u0628\u0648\u062A"] },
  { title: "\u0635\u062F\u0627\u0642\u062A \u062D\u0636\u0631\u062A \u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F / Truth of Promised Messiah", page: 420, keywords: ["promised messiah", "\u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F", "\u0635\u062F\u0627\u0642\u062A", "mirza ghulam ahmad", "qadian"] },
  { title: "\u0627\u0644\u06C1\u0627\u0645\u0627\u062A \u067E\u0631 \u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A / Objections on Revelations", page: 490, keywords: ["revelation", "\u0627\u0644\u06C1\u0627\u0645", "ilham", "wahi"] },
  { title: "\u067E\u06CC\u0634\u06AF\u0648\u0626\u06CC\u0648\u06BA \u067E\u0631 \u0627\u0639\u062A\u0631\u0627\u0636\u0627\u062A / Objections on Prophecies", page: 561, keywords: ["prophecy", "\u067E\u06CC\u0634\u06AF\u0648\u0626\u06CC", "predictions"] },
  { title: "\u062C\u06C1\u0627\u062F \u06A9\u06CC \u062D\u0642\u06CC\u0642\u062A / Reality of Jihad", page: 600, keywords: ["jihad", "\u062C\u06C1\u0627\u062F", "holy war", "qital"] },
  { title: "\u062E\u0644\u0627\u0641\u062A \u0627\u062D\u0645\u062F\u06CC\u06C1 / Ahmadiyya Khilafat", page: 650, keywords: ["khilafat", "\u062E\u0644\u0627\u0641\u062A", "caliphate", "khalifa"] }
];

const popularTopics = {
  en: ["Death of Jesus", "Khatam an-Nabiyyin", "Promised Messiah", "Trinity", "Atonement", "Existence of God", "Bible corruption", "Second Coming", "Jihad", "Khilafat"],
  ur: ["\u0648\u0641\u0627\u062A \u0645\u0633\u06CC\u062D", "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646", "\u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F", "\u062A\u062B\u0644\u06CC\u062B", "\u06A9\u0641\u0627\u0631\u06C1", "\u0648\u062C\u0648\u062F \u0628\u0627\u0631\u06CC \u062A\u0639\u0627\u0644\u06CC\u0670", "\u062A\u062D\u0631\u06CC\u0641 \u0628\u0627\u0626\u0628\u0644", "\u0646\u0632\u0648\u0644 \u062B\u0627\u0646\u06CC", "\u062C\u06C1\u0627\u062F", "\u062E\u0644\u0627\u0641\u062A"]
};

// Better keyword mapping for Quran search
const quranKeywordMap = {
  "khatam": "seal of the prophets",
  "khatam an-nabiyyin": "seal of the prophets",
  "\u062E\u0627\u062A\u0645": "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646",
  "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646": "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646",
  "death of jesus": "Jesus",
  "\u0648\u0641\u0627\u062A \u0645\u0633\u06CC\u062D": "\u0639\u06CC\u0633\u06CC\u0670",
  "trinity": "three",
  "\u062A\u062B\u0644\u06CC\u062B": "\u062B\u0644\u0627\u062B\u0629",
  "atonement": "ransom",
  "\u06A9\u0641\u0627\u0631\u06C1": "\u0641\u062F\u06CC\u0629",
  "promised messiah": "messiah",
  "\u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F": "\u0645\u0633\u06CC\u062D",
  "existence of god": "God",
  "\u0648\u062C\u0648\u062F": "\u0627\u0644\u0644\u0647",
  "jihad": "strive",
  "\u062C\u06C1\u0627\u062F": "\u062C\u06C1\u0627\u062F"
};

function normalizeQuery(q) {
  return q.toLowerCase().replace(/[^\w\u0600-\u06FF\s]/g, ' ').replace(/\s+/g, ' ').trim();
}

function fuzzyMatch(text, query) {
  const t = normalizeQuery(text);
  const q = normalizeQuery(query);
  if (t.includes(q)) return true;
  const words = q.split(' ').filter(w => w.length > 2);
  return words.some(w => t.includes(w));
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ur' ? 'rtl' : 'ltr';
  
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });
  document.getElementById('langLabel').textContent = currentLang === 'en' ? '\u0627\u0631\u062F\u0648' : 'English';
  renderTopics();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').textContent = currentTheme === 'light' ? '\uD83C\uDF19' : '\u2600\uFE0F';
}

function renderTopics() {
  const grid = document.getElementById('topicGrid');
  grid.innerHTML = '';
  popularTopics[currentLang].forEach(topic => {
    const btn = document.createElement('button');
    btn.className = 'topic-chip';
    btn.textContent = topic;
    btn.onclick = () => {
      document.getElementById('searchInput').value = topic;
      performSearch();
    };
    grid.appendChild(btn);
  });
}

function toggleSection(id) {
  document.getElementById(id + 'Card').classList.toggle('collapsed');
}

async function searchQuran(query) {
  const resultsEl = document.getElementById('quranResults');
  const loadingEl = document.getElementById('quranLoading');
  const countEl = document.getElementById('quranCount');
  
  loadingEl.style.display = 'block';
  resultsEl.innerHTML = '';
  
  try {
    let searchTerm = query;
    const nq = normalizeQuery(query);
    for (const [key, value] of Object.entries(quranKeywordMap)) {
      if (nq.includes(key)) {
        searchTerm = value;
        break;
      }
    }

    const res = await fetch(`https://api.alquran.cloud/v1/search/${encodeURIComponent(searchTerm)}/all/en`);
    const data = await res.json();
    
    loadingEl.style.display = 'none';
    
    if (data.code === 200 && data.data?.matches?.length > 0) {
      const matches = data.data.matches.slice(0, 6);
      countEl.textContent = matches.length;
      
      matches.forEach(m => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
          <div class="result-ref">${m.surah.englishName} ${m.surah.number}:${m.numberInSurah}</div>
          <div class="result-text arabic">${m.text || ''}</div>
          <div class="result-text">${m.translation || ''}</div>
        `;
        resultsEl.appendChild(item);
      });
    } else {
      const fallbacks = getQuranFallbacks(nq);
      if (fallbacks.length) {
        countEl.textContent = fallbacks.length;
        fallbacks.forEach(f => {
          const item = document.createElement('div');
          item.className = 'result-item';
          item.innerHTML = `
            <div class="result-ref">${f.ref}</div>
            <div class="result-text">${f.text}</div>
          `;
          resultsEl.appendChild(item);
        });
      } else {
        countEl.textContent = '0';
        resultsEl.innerHTML = `<div class="no-results">${translations[currentLang].noResults}</div>`;
      }
    }
  } catch (err) {
    loadingEl.style.display = 'none';
    countEl.textContent = '0';
    resultsEl.innerHTML = `<div class="no-results">Could not fetch Quran results.</div>`;
  }
}

function getQuranFallbacks(q) {
  if (q.includes('khatam') || q.includes('\u062E\u0627\u062A\u0645') || q.includes('finality') || q.includes('seal') || q.includes('\u062E\u062A\u0645')) {
    return [
      { ref: "Al-Ahzab 33:40", text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets..." },
      { ref: "Al-Maidah 5:3", text: "...This day I have perfected for you your religion and completed My favor upon you..." }
    ];
  }
  if (q.includes('jesus') || q.includes('\u0639\u06CC\u0633\u06CC') || q.includes('\u0645\u0633\u06CC\u062D') || q.includes('death') || q.includes('\u0648\u0641\u0627\u062A') || q.includes('tawaffa')) {
    return [
      { ref: "Al-Imran 3:55", text: "O Jesus, indeed I will take you and raise you to Myself and purify you from those who disbelieve..." },
      { ref: "An-Nisa 4:157-158", text: "...they did not kill him, nor did they crucify him; but it was made to appear so to them... Rather, Allah raised him to Himself." },
      { ref: "Al-Maidah 5:117", text: "I said nothing to them except that which You commanded me... and when You took me, You were the Watcher over them..." }
    ];
  }
  if (q.includes('jihad') || q.includes('\u062C\u06C1\u0627\u062F')) {
    return [
      { ref: "Al-Hajj 22:39", text: "Permission to fight is given to those against whom war is made, because they have been wronged..." },
      { ref: "Al-Baqarah 2:190", text: "And fight in the way of Allah those who fight you, but do not transgress..." }
    ];
  }
  return [];
}

async function searchHadith(query) {
  const resultsEl = document.getElementById('hadithResults');
  const loadingEl = document.getElementById('hadithLoading');
  const countEl = document.getElementById('hadithCount');
  
  loadingEl.style.display = 'block';
  resultsEl.innerHTML = '';
  
  const q = normalizeQuery(query);
  
  const hadithDatabase = [
    {
      keywords: ["khatam", "\u062E\u0627\u062A\u0645", "finality", "seal", "last prophet", "\u062E\u0627\u062A\u0645 \u0627\u0644\u0646\u0628\u06CC\u06CC\u0646", "\u062E\u062A\u0645 \u0646\u0628\u0648\u062A"],
      ref: "Sahih Muslim / Bukhari",
      text: "I am the last of the Prophets, there is no Prophet after me. (Ana Khatamun-Nabiyyin)"
    },
    {
      keywords: ["jesus", "\u0639\u06CC\u0633\u06CC", "\u0645\u0633\u06CC\u062D", "descent", "\u0646\u0632\u0648\u0644", "second coming", "\u0648\u0641\u0627\u062A"],
      ref: "Sahih Bukhari & Muslim",
      text: "By Him in Whose Hands my soul is, the son of Mary (Jesus) will shortly descend amongst you as a just ruler... He will break the cross, kill the swine..."
    },
    {
      keywords: ["intention", "\u0646\u06CC\u062A", "actions", "\u0627\u0639\u0645\u0627\u0644"],
      ref: "Sahih al-Bukhari 1",
      text: "Actions are according to intentions, and every person will get the reward according to what he has intended."
    },
    {
      keywords: ["death of jesus", "\u0648\u0641\u0627\u062A", "cross", "\u0635\u0644\u06CC\u0628", "tawaffa"],
      ref: "Various authentic narrations",
      text: "The Prophet (sa) said that Jesus will die a natural death after his descent, and Muslims will pray over him."
    },
    {
      keywords: ["prophethood", "\u0646\u0628\u0648\u062A", "messiah", "\u0645\u0633\u06CC\u062D \u0645\u0648\u0639\u0648\u062F"],
      ref: "Sahih Muslim",
      text: "There will be no prophet after me, but there will be Khulafa (successors)..."
    },
    {
      keywords: ["jihad", "\u062C\u06C1\u0627\u062F"],
      ref: "Sahih Bukhari & Muslim",
      text: "The best Jihad is to speak a word of truth before a tyrannical ruler."
    }
  ];
  
  const found = hadithDatabase.filter(h => h.keywords.some(k => q.includes(k) || normalizeQuery(k).includes(q)));
  
  loadingEl.style.display = 'none';
  
  if (found.length > 0) {
    countEl.textContent = found.length;
    found.forEach(h => {
      const item = document.createElement('div');
      item.className = 'result-item';
      item.innerHTML = `
        <div class="result-ref">${h.ref}</div>
        <div class="result-text">${h.text}</div>
        <div class="result-meta"><a href="https://sunnah.com" target="_blank" style="color:var(--accent);">See full collection at sunnah.com</a></div>
      `;
      resultsEl.appendChild(item);
    });
  } else {
    countEl.textContent = '0';
    resultsEl.innerHTML = `<div class="no-results">${translations[currentLang].noResults}<br><small>Try specific terms like "Khatam", "Death of Jesus", "Jihad"</small></div>`;
  }
}

function searchAhmadiyya(query) {
  const resultsEl = document.getElementById('ahmadiyyaResults');
  const countEl = document.getElementById('ahmadiyyaCount');
  
  const matches = pocketBookIndex.filter(item => {
    return fuzzyMatch(item.title, query) || 
           item.keywords.some(k => fuzzyMatch(k, query) || normalizeQuery(query).includes(normalizeQuery(k)));
  });
  
  countEl.textContent = matches.length;
  resultsEl.innerHTML = '';
  
  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="no-results">${translations[currentLang].noResults}</div>`;
    return;
  }
  
  matches.forEach(m => {
    const item = document.createElement('div');
    item.className = 'result-item';
    item.innerHTML = `
      <div class="result-ref">${m.title}</div>
      <div class="result-meta">${translations[currentLang].page}: ${m.page}</div>
      <a href="${PDF_URL}" target="_blank" class="pdf-link">${translations[currentLang].viewInPdf}</a>
    `;
    resultsEl.appendChild(item);
  });
}

async function performSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;
  
  document.getElementById('suggestionsSection').style.display = 'none';
  document.getElementById('resultsSection').style.display = 'block';
  
  ['quran', 'hadith', 'ahmadiyya'].forEach(id => {
    document.getElementById(id + 'Card').classList.remove('collapsed');
  });
  
  searchAhmadiyya(query);
  await Promise.all([searchQuran(query), searchHadith(query)]);
  
  document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('DOMContentLoaded', () => {
  // Set PDF button
  const pdfBtn = document.getElementById('pdfDownloadBtn');
  if (pdfBtn) pdfBtn.href = PDF_URL;

  applyLanguage();
  applyTheme();
  renderTopics();
  
  document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ur' : 'en';
    localStorage.setItem('ipb-lang', currentLang);
    applyLanguage();
  });
  
  document.getElementById('themeToggle').addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ipb-theme', currentTheme);
    applyTheme();
  });
  
  document.getElementById('searchBtn').addEventListener('click', performSearch);
  document.getElementById('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') performSearch();
  });
  
  document.getElementById('clearResults').addEventListener('click', () => {
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('suggestionsSection').style.display = 'block';
    document.getElementById('searchInput').value = '';
  });
});

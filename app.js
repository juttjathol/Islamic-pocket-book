/* ===== Islamic Pocket Book - Professional Version ===== */

const translations = {
  en: {
    siteTitle: "Islamic Pocket Book",
    heroTitle: "Find References Instantly",
    heroSubtitle: "Search Quran, Hadith and Ahmadiyya literature for Tabligh",
    searchPlaceholder: "Ask any Islamic or Tabligh related question...",
    searchBtn: "Search",
    downloadPdf: "📥 PDF",
    suggestedTitle: "Popular Tabligh Topics",
    resultsTitle: "Search Results",
    clearResults: "Clear",
    quranSection: "Quran Verses",
    hadithSection: "Hadith Results",
    ahmadiyyaSection: "Ahmadiyya Literature",
    footerText: "Islamic Pocket Book — Built for Ahmadiyya preachers",
    noResults: "No matching results found.",
    loading: "Loading...",
    page: "Page",
    viewInPdf: "Open in Pocket Book →"
  },
  ur: {
    siteTitle: "اسلامک پاکٹ بک",
    heroTitle: "فوراً حوالہ جات تلاش کریں",
    heroSubtitle: "قرآن، حدیث اور احمدی ادب میں تبلیغ کے لیے تلاش کریں",
    searchPlaceholder: "کوئی بھی اسلامی یا تبلیغی سوال پوچھیں...",
    searchBtn: "تلاش کریں",
    downloadPdf: "📥 PDF",
    suggestedTitle: "مقبول تبلیغی موضوعات",
    resultsTitle: "تلاش کے نتائج",
    clearResults: "صاف کریں",
    quranSection: "قرآن کی آیات",
    hadithSection: "احادیث کے نتائج",
    ahmadiyyaSection: "احمدی ادب",
    footerText: "اسلامک پاکٹ بک — احمدی مبلغین کے لیے",
    noResults: "کوئی مماثل نتیجہ نہیں ملا۔",
    loading: "لوڈ ہو رہا ہے...",
    page: "صفحہ",
    viewInPdf: "پاکٹ بک میں کھولیں ←"
  }
};

let currentLang = localStorage.getItem('ipb-lang') || 'en';
let currentTheme = localStorage.getItem('ipb-theme') || 'light';

// ========== CHANGE THIS TO YOUR GOOGLE DRIVE PUBLIC LINK ==========
const PDF_URL = "https://drive.google.com/file/d/1PohF361-ZYMVGKeQYGUpI_tbaPNpOU88/view?usp=drive_link";
// ==================================================================

const pocketBookIndex = [
  { title: "وجود باری تعالیٰ کے دلائل / Proofs of Existence of God", page: 1, keywords: ["god", "existence", "وجود", "خدا", "باری"] },
  { title: "دہریوں کے اعتراضات / Atheists' Objections", page: 20, keywords: ["atheist", "دهری", "منکرین"] },
  { title: "اسلام اور ویدک دھرم / Islam & Vedic Religion", page: 23, keywords: ["vedic", "ویدک", "آرین", "hindu"] },
  { title: "عیسائیت / Christianity", page: 71, keywords: ["christianity", "عیسائیت", "عیسائی", "jesus"] },
  { title: "تردید الوہیت مسیح / Refutation of Divinity of Jesus", page: 74, keywords: ["divinity", "الوہیت", "trinity", "تثلیث"] },
  { title: "مسیح صلیب پر فوت نہیں ہوئے / Jesus did not die on Cross", page: 83, keywords: ["cross", "صلیب", "صلب", "crucifixion"] },
  { title: "کفارہ کی تردید / Refutation of Atonement", page: 92, keywords: ["atonement", "کفارہ"] },
  { title: "ابطال تثلیث / Refutation of Trinity", page: 100, keywords: ["trinity", "تثلیث"] },
  { title: "تحریف بائبل / Corruption of the Bible", page: 101, keywords: ["bible", "بائبل", "تحریف"] },
  { title: "صداقت مسیح موعود از بائبل / Promised Messiah from Bible", page: 111, keywords: ["promised messiah", "مسیح موعود", "bible"] },
  { title: "عیسائیوں کے اعتراضات / Christian Objections", page: 116, keywords: ["objections", "اعتراضات"] },
  { title: "سکھ مذہب / Sikh Religion", page: 155, keywords: ["sikh", "سکھ", "nanak"] },
  { title: "بابی / بہائی مذہب / Babi Bahai", page: 175, keywords: ["bahai", "بابی", "bahaullah"] },
  { title: "شیعہ مذہب / Shia Religion", page: 187, keywords: ["shia", "شیعہ"] },
  { title: "وفات مسیح ناصری / Death of Jesus", page: 233, keywords: ["death of jesus", "وفات مسیح", "توفی", "رفع", "ascension"] },
  { title: "مسئلہ امکان نبوت / Possibility of Prophethood", page: 317, keywords: ["prophethood", "نبوت", "امکان نبوت"] },
  { title: "تردید انقطاع نبوت / Khatam an-Nabiyyin", page: 357, keywords: ["khatam", "خاتم", "خاتم النبیین", "finality", "seal of prophets"] },
  { title: "صداقت حضرت مسیح موعود / Truth of Promised Messiah", page: 420, keywords: ["promised messiah", "مسیح موعود", "صداقت"] },
  { title: "الہامات پر اعتراضات / Objections on Revelations", page: 490, keywords: ["revelation", "الہام", "ilham"] },
  { title: "پیشگوئیوں پر اعتراضات / Objections on Prophecies", page: 561, keywords: ["prophecy", "پیشگوئی"] }
];

const popularTopics = {
  en: ["Death of Jesus", "Khatam an-Nabiyyin", "Promised Messiah", "Trinity", "Atonement", "Existence of God", "Bible corruption", "Second Coming", "Sikhism", "Shia beliefs"],
  ur: ["وفات مسیح", "خاتم النبیین", "مسیح موعود", "تثلیث", "کفارہ", "وجود باری تعالیٰ", "تحریف بائبل", "نزول ثانی", "سکھ مذہب", "شیعہ عقائد"]
};

// Better keyword mapping for Quran search
const quranKeywordMap = {
  "khatam": "seal of the prophets",
  "khatam an-nabiyyin": "seal of the prophets",
  "خاتم": "خاتم النبیین",
  "خاتم النبیین": "خاتم النبیین",
  "death of jesus": "Jesus died",
  "وفات مسیح": "عیسیٰ",
  "trinity": "three",
  "تثلیث": "ثلاثة",
  "atonement": "ransom",
  "کفارہ": "فدية",
  "promised messiah": "messiah",
  "مسیح موعود": "مسیح",
  "existence of god": "God",
  "وجود": "الله"
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
  document.getElementById('langLabel').textContent = currentLang === 'en' ? 'اردو' : 'English';
  renderTopics();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.getElementById('themeIcon').textContent = currentTheme === 'light' ? '🌙' : '☀️';
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
    // Improve query using keyword map
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
      // Fallback useful verses for common topics
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
  if (q.includes('khatam') || q.includes('خاتم') || q.includes('finality') || q.includes('seal')) {
    return [
      { ref: "Al-Ahzab 33:40", text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets..." },
      { ref: "Al-Maidah 5:3", text: "...This day I have perfected for you your religion and completed My favor upon you..." }
    ];
  }
  if (q.includes('jesus') || q.includes('عیسی') || q.includes('مسیح') || q.includes('death')) {
    return [
      { ref: "Al-Imran 3:55", text: "O Jesus, indeed I will take you and raise you to Myself..." },
      { ref: "An-Nisa 4:157", text: "...they did not kill him, nor did they crucify him; but it was made to appear so to them..." }
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
      keywords: ["khatam", "خاتم", "finality", "seal", "last prophet", "خاتم النبیین"],
      ref: "Sahih Muslim / Bukhari",
      text: "I am the last of the Prophets, there is no Prophet after me. (Ana Khatamun-Nabiyyin)"
    },
    {
      keywords: ["jesus", "عیسی", "مسیح", "descent", "نزول", "second coming"],
      ref: "Sahih Bukhari & Muslim",
      text: "By Him in Whose Hands my soul is, the son of Mary (Jesus) will shortly descend amongst you as a just ruler..."
    },
    {
      keywords: ["intention", "نیت", "actions", "اعمال"],
      ref: "Sahih al-Bukhari 1",
      text: "Actions are according to intentions, and every person will get the reward according to what he has intended."
    },
    {
      keywords: ["death of jesus", "وفات", "cross", "صلیب"],
      ref: "Various authentic narrations",
      text: "The Prophet (sa) said that Jesus will die a natural death after his descent, and Muslims will pray over him."
    },
    {
      keywords: ["prophethood", "نبوت", "messiah", "مسیح موعود"],
      ref: "Sahih Muslim",
      text: "There will be no prophet after me, but there will be Khulafa (successors)..."
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
    resultsEl.innerHTML = `<div class="no-results">${translations[currentLang].noResults}<br><small>Try specific terms like "Khatam", "Jesus descent", "intention"</small></div>`;
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

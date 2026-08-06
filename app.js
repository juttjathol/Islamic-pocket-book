/* ===== Islamic Pocket Book - Professional Version ===== */

const translations = {
  en: {
    siteTitle: "Islamic Pocket Book",
    heroTitle: "Find Authentic Hawala Instantly",
    heroSubtitle: "Quran • Hadith • Ahmadiyya Literature",
    searchPlaceholder: "Ask any Islamic or Tabligh related question...",
    searchBtn: "Search",
    downloadPdf: "📥 PDF",
    suggestedTitle: "Popular Tabligh Topics",
    resultsTitle: "Search Results",
    clearResults: "Clear",
    quranSection: "Quran Verses",
    hadithSection: "Hadith Results",
    ahmadiyyaSection: "Ahmadiyya Literature",
    footerText: "Islamic Pocket Book — Made by Masroor Amjad",
    noResults: "No matching results found.",
    loading: "Loading...",
    page: "Page",
    viewInPdf: "Open in Pocket Book →"
  },
  ur: {
    siteTitle: "اسلامک پاکٹ بک",
    heroTitle: "فوراً مستند حوالہ جات تلاش کریں",
    heroSubtitle: "قرآن • حدیث • احمدی ادب",
    searchPlaceholder: "کوئی بھی اسلامی یا تبلیغی سوال پوچھیں...",
    searchBtn: "تلاش کریں",
    downloadPdf: "📥 PDF",
    suggestedTitle: "مقبول تبلیغی موضوعات",
    resultsTitle: "تلاش کے نتائج",
    clearResults: "صاف کریں",
    quranSection: "قرآن کی آیات",
    hadithSection: "احادیث کے نتائج",
    ahmadiyyaSection: "احمدی ادب",
    footerText: "اسلامک پاکٹ بک — Made by Masroor Amjad",
    noResults: "کوئی مماثل نتیجہ نہیں ملا۔",
    loading: "لوڈ ہو رہا ہے...",
    page: "صفحہ",
    viewInPdf: "پاکٹ بک میں کھولیں ←"
  }
};

let currentLang = localStorage.getItem('ipb-lang') || 'en';
let currentTheme = localStorage.getItem('ipb-theme') || 'light';

const PDF_URL = "https://drive.google.com/file/d/1PohF361-ZYMVGKeQYGUpI_tbaPNpOU88/view?usp=drive_link";

const pocketBookIndex = [
  { title: "وجود باری تعالیٰ کے دلائل / Proofs of Existence of God", page: 1, keywords: ["god", "existence", "وجود", "خدا", "باری", "proof", "dalil"] },
  { title: "دہریوں کے اعتراضات / Atheists' Objections", page: 20, keywords: ["atheist", "دهری", "منکرین", "atheism"] },
  { title: "اسلام اور ویدک دھرم / Islam & Vedic Religion", page: 23, keywords: ["vedic", "ویدک", "آرین", "hindu", "hinduism"] },
  { title: "عیسائیت / Christianity", page: 71, keywords: ["christianity", "عیسائیت", "عیسائی", "jesus", "christian"] },
  { title: "تردید الوہیت مسیح / Refutation of Divinity of Jesus", page: 74, keywords: ["divinity", "الوہیت", "trinity", "تثلیث", "son of god"] },
  { title: "مسیح صلیب پر فوت نہیں ہوئے / Jesus did not die on Cross", page: 83, keywords: ["cross", "صلیب", "صلب", "crucifixion", "died on cross"] },
  { title: "کفارہ کی تردید / Refutation of Atonement", page: 92, keywords: ["atonement", "کفارہ", "ransom", "sacrifice"] },
  { title: "ابطال تثلیث / Refutation of Trinity", page: 100, keywords: ["trinity", "تثلیث", "three gods"] },
  { title: "تحریف بائبل / Corruption of the Bible", page: 101, keywords: ["bible", "بائبل", "تحریف", "corruption", "tahrif"] },
  { title: "صداقت مسیح موعود از بائبل / Promised Messiah from Bible", page: 111, keywords: ["promised messiah", "مسیح موعود", "bible", "second coming"] },
  { title: "عیسائیوں کے اعتراضات / Christian Objections", page: 116, keywords: ["objections", "اعتراضات", "christian"] },
  { title: "سکھ مذہب / Sikh Religion", page: 155, keywords: ["sikh", "سکھ", "nanak", "sikhism"] },
  { title: "بابی / بہائی مذہب / Babi Bahai", page: 175, keywords: ["bahai", "بابی", "bahaullah", "bahai"] },
  { title: "شیعہ مذہب / Shia Religion", page: 187, keywords: ["shia", "شیعہ", "shiite"] },
  { title: "وفات مسیح ناصری / Death of Jesus", page: 233, keywords: ["death of jesus", "وفات مسیح", "توفی", "رفع", "ascension", "isa", "jesus died", "tawaffa"] },
  { title: "مسئلہ امکان نبوت / Possibility of Prophethood", page: 317, keywords: ["prophethood", "نبوت", "امکان نبوت", "possibility of prophet"] },
  { title: "تردید انقطاع نبوت / Khatam an-Nabiyyin (Finality)", page: 357, keywords: ["khatam", "خاتم", "خاتم النبیین", "finality", "seal of prophets", "last prophet", "khatame nabuwwat", "ختم نبوت"] },
  { title: "صداقت حضرت مسیح موعود / Truth of Promised Messiah", page: 420, keywords: ["promised messiah", "مسیح موعود", "صداقت", "mirza ghulam ahmad", "qadian"] },
  { title: "الہامات پر اعتراضات / Objections on Revelations", page: 490, keywords: ["revelation", "الہام", "ilham", "wahi"] },
  { title: "پیشگوئیوں پر اعتراضات / Objections on Prophecies", page: 561, keywords: ["prophecy", "پیشگوئی", "predictions"] },
  { title: "جہاد کی حقیقت / Reality of Jihad", page: 600, keywords: ["jihad", "جہاد", "holy war", "qital"] },
  { title: "خلافت احمدیہ / Ahmadiyya Khilafat", page: 650, keywords: ["khilafat", "خلافت", "caliphate", "khalifa"] }
];

const popularTopics = {
  en: ["Death of Jesus", "Khatam an-Nabiyyin", "Promised Messiah", "Trinity", "Atonement", "Existence of God", "Bible corruption", "Second Coming", "Jihad", "Khilafat"],
  ur: ["وفات مسیح", "خاتم النبیین", "مسیح موعود", "تثلیث", "کفارہ", "وجود باری تعالیٰ", "تحریف بائبل", "نزول ثانی", "جہاد", "خلافت"]
};

const quranKeywordMap = {
  "khatam": "seal of the prophets",
  "khatam an-nabiyyin": "seal of the prophets",
  "خاتم": "خاتم النبیین",
  "خاتم النبیین": "خاتم النبیین",
  "death of jesus": "Jesus",
  "وفات مسیح": "عیسیٰ",
  "trinity": "three",
  "تثلیث": "ثلاثة",
  "atonement": "ransom",
  "کفارہ": "فدية",
  "promised messiah": "messiah",
  "مسیح موعود": "مسیح",
  "existence of god": "God",
  "وجود": "الله",
  "jihad": "strive",
  "جہاد": "جہاد"
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
      // Deduplicate by surah + ayah number
      const seen = new Set();
      const unique = [];
      for (const m of data.data.matches) {
        const key = `${m.surah.number}:${m.numberInSurah}`;
        if (!seen.has(key)) {
          seen.add(key);
          unique.push(m);
        }
        if (unique.length >= 6) break;
      }

      countEl.textContent = unique.length;
      
      unique.forEach(m => {
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
  if (q.includes('khatam') || q.includes('خاتم') || q.includes('finality') || q.includes('seal') || q.includes('ختم')) {
    return [
      { ref: "Al-Ahzab 33:40", text: "Muhammad is not the father of any of your men, but he is the Messenger of Allah and the Seal of the Prophets..." },
      { ref: "Al-Maidah 5:3", text: "...This day I have perfected for you your religion and completed My favor upon you..." }
    ];
  }
  if (q.includes('jesus') || q.includes('عیسی') || q.includes('مسیح') || q.includes('death') || q.includes('وفات') || q.includes('tawaffa')) {
    return [
      { ref: "Al-Imran 3:55", text: "O Jesus, indeed I will take you and raise you to Myself and purify you from those who disbelieve..." },
      { ref: "An-Nisa 4:157-158", text: "...they did not kill him, nor did they crucify him; but it was made to appear so to them... Rather, Allah raised him to Himself." },
      { ref: "Al-Maidah 5:117", text: "I said nothing to them except that which You commanded me... and when You took me, You were the Watcher over them..." }
    ];
  }
  if (q.includes('jihad') || q.includes('جہاد')) {
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
      keywords: ["khatam", "خاتم", "finality", "seal", "last prophet", "خاتم النبیین", "ختم نبوت"],
      ref: "Sahih Muslim / Bukhari",
      text: "I am the last of the Prophets, there is no Prophet after me. (Ana Khatamun-Nabiyyin)",
      link: "https://sunnah.com/search?q=khatam+nabiyyin"
    },
    {
      keywords: ["jesus", "عیسی", "مسیح", "descent", "نزول", "second coming", "وفات"],
      ref: "Sahih Bukhari & Muslim",
      text: "By Him in Whose Hands my soul is, the son of Mary (Jesus) will shortly descend amongst you as a just ruler... He will break the cross, kill the swine...",
      link: "https://sunnah.com/search?q=jesus+son+of+mary+descend"
    },
    {
      keywords: ["intention", "نیت", "actions", "اعمال"],
      ref: "Sahih al-Bukhari 1",
      text: "Actions are according to intentions, and every person will get the reward according to what he has intended.",
      link: "https://sunnah.com/bukhari:1"
    },
    {
      keywords: ["death of jesus", "وفات", "cross", "صلیب", "tawaffa"],
      ref: "Various authentic narrations",
      text: "The Prophet (sa) said that Jesus will die a natural death after his descent, and Muslims will pray over him.",
      link: "https://sunnah.com/search?q=jesus+die"
    },
    {
      keywords: ["prophethood", "نبوت", "messiah", "مسیح موعود"],
      ref: "Sahih Muslim",
      text: "There will be no prophet after me, but there will be Khulafa (successors)...",
      link: "https://sunnah.com/search?q=no+prophet+after+me"
    },
    {
      keywords: ["jihad", "جہاد"],
      ref: "Sahih Bukhari & Muslim",
      text: "The best Jihad is to speak a word of truth before a tyrannical ruler.",
      link: "https://sunnah.com/search?q=best+jihad+word+of+truth"
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
        <div class="result-meta"><a href="${h.link}" target="_blank" rel="noopener" style="color:var(--accent);">View related Hadith on sunnah.com →</a></div>
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

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  const pdfBtn = document.getElementById('pdfDownloadBtn');
  if (pdfBtn) pdfBtn.href = PDF_URL;

  applyLanguage();
  applyTheme();
  renderTopics();
  initScrollAnimations();
  
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

  // Parallax on hero background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      heroBg.style.transform = `scale(1.08) translateY(${scrolled * 0.18}px)`;
    }
  });
});

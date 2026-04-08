const chapters = {
1: "https://web.archive.org/web/20211004103259if_/http://enoksbok.se/cgi-bin/slaupp.cgi?|1|1||jmf",
2: "https://web.archive.org/web/20211115124605if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|1||jmf",
3: "https://web.archive.org/web/20211021105629if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP%7C1%7C2%7C%7Cjmf",
4: "https://web.archive.org/web/20191120144621if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|3||jmf",
5: "https://web.archive.org/web/20191120144628if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|4||jmf",
6: "https://web.archive.org/web/20191120144633if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|5||jmf",
7: "https://web.archive.org/web/20191120144637if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|6||jmf",
8: "https://web.archive.org/web/20191120144640if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|7||jmf",
9: "https://web.archive.org/web/20191120144642if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|8||jmf",
10: "https://web.archive.org/web/20191120144645if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|9||jmf",
11: "https://web.archive.org/web/20191120144648if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|10||jmf",
12: "https://web.archive.org/web/20191120144651if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|11||jmf",
13: "https://web.archive.org/web/20191120144653if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|12||jmf",
14: "https://web.archive.org/web/20191120144655if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|13||jmf",
15: "https://web.archive.org/web/20191120144658if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|14||jmf",
16: "https://web.archive.org/web/20191120144700if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|15||jmf",
17: "https://web.archive.org/web/20191120144702if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|16||jmf",
18: "https://web.archive.org/web/20191120144704if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|17||jmf",
19: "https://web.archive.org/web/20191120144707if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|18||jmf",
20: "https://web.archive.org/web/20200414232333if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|19||jmf",
21: "https://web.archive.org/web/20200414232348if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|20||jmf",
22: "https://web.archive.org/web/20200414232448if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|21||jmf",
23: "https://web.archive.org/web/20200414232558if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|22||jmf",
24: "https://web.archive.org/web/20200414232621if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|23||jmf",
25: "https://web.archive.org/web/20200414232655if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|24||jmf",
26: "https://web.archive.org/web/20200414232933if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|25||jmf",
27: "https://web.archive.org/web/20250521212524if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP%7C1%7C26%7C14%7Cjmf",
28: "https://web.archive.org/web/20200414233039if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|27||jmf",
29: "https://web.archive.org/web/20200414233051if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|28||jmf",
30: "https://web.archive.org/web/20200414233103if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|29||jmf",
31: "https://web.archive.org/web/20200414233116if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|30||jmf",
32: "https://web.archive.org/web/20200414233130if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|31||jmf",
33: "https://web.archive.org/web/20200414233246if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|32||jmf",
34: "https://web.archive.org/web/20191208211121if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|33||jmf",
35: "https://web.archive.org/web/20191208211200if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|34||jmf",
36: "https://web.archive.org/web/20191208211210if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|35||jmf",
37: "https://web.archive.org/web/20191208211258if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|36||jmf",
38: "https://web.archive.org/web/20191208211530if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|37||jmf",
39: "https://web.archive.org/web/20191208211810if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|38||jmf",
40: "https://web.archive.org/web/20191208212117if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|39||jmf",
41: "https://web.archive.org/web/20191208212352if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|40||jmf",
42: "https://web.archive.org/web/20191208212536if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|41||jmf",
43: "https://web.archive.org/web/20191208212559if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|42||jmf",
44: "https://web.archive.org/web/20191208212713if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|43||jmf",
45: "https://web.archive.org/web/20191208212732if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|44||jmf",
46: "https://web.archive.org/web/20191208212937if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|45||jmf",
47: "https://web.archive.org/web/20191208213240if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|46||jmf",
48: "https://web.archive.org/web/20191208213330if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|47||jmf",
49: "https://web.archive.org/web/20191208213725if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|48||jmf",
50: "https://web.archive.org/web/20191208213808if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|49||jmf",
51: "https://web.archive.org/web/20191208213909if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|50||jmf",
52: "https://web.archive.org/web/20191208214001if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|51||jmf",
53: "https://web.archive.org/web/20191208214121if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|52||jmf",
54: "https://web.archive.org/web/20191208214308if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|53||jmf",
55: "https://web.archive.org/web/20191208214452if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|54||jmf",
56: "https://web.archive.org/web/20191208214609if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|55||jmf",
57: "https://web.archive.org/web/20191208214747if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|56||jmf",
58: "https://web.archive.org/web/20191208214834if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|57||jmf",
59: "https://web.archive.org/web/20191208214930if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|58||jmf",
60: "https://web.archive.org/web/20191208215005if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|59||jmf",
61: "https://web.archive.org/web/20191208215945if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|60||jmf",
62: "https://web.archive.org/web/20191208220534if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|61||jmf",
63: "https://web.archive.org/web/20191208221412if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|62||jmf",
64: "https://web.archive.org/web/20191208221420if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|63||jmf",
65: "https://web.archive.org/web/20191208221423if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|64||jmf",
66: "https://web.archive.org/web/20191208221425if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|65||jmf",
67: "https://web.archive.org/web/20191208221428if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|66||jmf",
68: "https://web.archive.org/web/20191208221430if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|67||jmf",
69: "https://web.archive.org/web/20191208221433if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|68||jmf",
70: "https://web.archive.org/web/20191208221436if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|69||jmf",
71: "https://web.archive.org/web/20191208221438if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|70||jmf",
72: "https://web.archive.org/web/20191208221441if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|71||jmf",
73: "https://web.archive.org/web/20191208221450if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|72||jmf",
74: "https://web.archive.org/web/20191208221453if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|73||jmf",
75: "https://web.archive.org/web/20191208221458if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|74||jmf",
76: "https://web.archive.org/web/20191208221500if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|75||jmf",
77: "https://web.archive.org/web/20191208221503if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|76||jmf",
78: "https://web.archive.org/web/20191208221505if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|77||jmf",
79: "https://web.archive.org/web/20191208221508if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|78||jmf",
80: "https://web.archive.org/web/20191208221510if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|79||jmf",
81: "https://web.archive.org/web/20191208221512if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|80||jmf",
82: "https://web.archive.org/web/20191208221515if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|81||jmf",
83: "https://web.archive.org/web/20191208221518if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|82||jmf",
84: "https://web.archive.org/web/20191208221534if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|83||jmf",
85: "https://web.archive.org/web/20191208221537if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|84||jmf",
86: "https://web.archive.org/web/20191208221541if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|85||jmf",
87: "https://web.archive.org/web/20191208221543if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|86||jmf",
88: "https://web.archive.org/web/20191208221546if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|87||jmf",
89: "https://web.archive.org/web/20191208221550if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|88||jmf",
90: "https://web.archive.org/web/20191208221554if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|89||jmf",
91: "https://web.archive.org/web/20191208221557if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|90||jmf",
92: "https://web.archive.org/web/20191208221600if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|91||jmf",
93: "https://web.archive.org/web/20191208221603if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|92||jmf",
94: "https://web.archive.org/web/20191208221606if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|93||jmf",
95: "https://web.archive.org/web/20191208221609if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|94||jmf",
96: "https://web.archive.org/web/20191208221615if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|95||jmf",
97: "https://web.archive.org/web/20191208221618if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|96||jmf",
98: "https://web.archive.org/web/20191208221621if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|97||jmf",
99: "https://web.archive.org/web/20191208221624if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|98||jmf",
100: "https://web.archive.org/web/20191208221627if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|99||jmf",
101: "https://web.archive.org/web/20191208221634if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|100||jmf",
102: "https://web.archive.org/web/20191208221637if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|101||jmf",
103: "https://web.archive.org/web/20191208221640if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|102||jmf",
104: "https://web.archive.org/web/20191208221642if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|103||jmf",
105: "https://web.archive.org/web/20191208221649if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|104||jmf",
106: "https://web.archive.org/web/20191208221652if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|105||jmf",
107: "https://web.archive.org/web/20191208221655if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|106||jmf",
108: "https://web.archive.org/web/20191208221658if_/http://enoksbok.se/cgi-bin/slaupp.cgi?NKAP|1|107||jmf"
};

//  Enoch the prophet 1821 (Richard Laurence)
const enochs1821 = { chapters: [] };
//  Book of Enoch 1882 (George Henry Schodde)
const enochs1882 = { chapters: [] };
//  Book of Enoch 1912 (Robert Henry Charles)
const enochs1912 = { chapters: [] };
//  Propheten Enoch 1826
const enochsSwedish1826 = { chapters: [] };
//  Henochs Bok 1901
const enochsSwedish1901 = { chapters: [] };

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchChapter(chapter) {
  const url = chapters[chapter];
  let attempts = 0;
  while (attempts < Infinity) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const text = await res.text();
      console.log(`✅ Fetched chapter ${chapter}`);
      return text;
    } catch (err) {
      attempts++;
      console.warn(`⚠️ Retry ${attempts} for chapter ${chapter}`);
      await sleep(3000);
    }
  }
}

async function loadChapter(chapter) {
  const text = await fetchChapter(chapter);
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");
  [...doc.querySelectorAll('.JFTAB:nth-child(1)')].forEach((td, index) => {
    const chapterList = enochs1821.chapters[chapter - 1] = enochs1821.chapters[chapter - 1] || [];
    chapterList.push(extractVerseFromDom(td, index));
  });
  [...doc.querySelectorAll('.JFTAB:nth-child(2)')].forEach((td, index) => {
    const chapterList = enochs1882.chapters[chapter - 1] = enochs1882.chapters[chapter - 1] || [];
    chapterList.push(extractVerseFromDom(td, index));
  });
  [...doc.querySelectorAll('.JFTAB:nth-child(3)')].forEach((td, index) => {
    const chapterList = enochs1912.chapters[chapter - 1] = enochs1912.chapters[chapter - 1] || [];
    chapterList.push(extractVerseFromDom(td, index));
  });
  [...doc.querySelectorAll('.JFTAB:nth-child(4)')].forEach((td, index) => {
    const chapterList = enochsSwedish1826.chapters[chapter - 1] = enochsSwedish1826.chapters[chapter - 1] || [];
    chapterList.push(extractVerseFromDom(td, index));
  });
  [...doc.querySelectorAll('.JFTAB:nth-child(5)')].forEach((td, index) => {
    const chapterList = enochsSwedish1901.chapters[chapter - 1] = enochsSwedish1901.chapters[chapter - 1] || [];
    chapterList.push(extractVerseFromDom(td, index));
  });
}

function extractVerseFromDom(td, index) {
  const noteElement = td.querySelector('.VNOT2');
  const verse = {};

  if (noteElement) {
    const note = noteElement.innerText.trim();
    if (note) {
      verse.note = note;
    }
    noteElement.remove();
  }

  const text = td.innerText.replace(/^\d+\.?/, '').trim();
  const [verseNumber] = td.innerText.match(/^\d+/) || [null];

  verse.text = text;
  verse.verse = {
    index,
    start: verseNumber,
    end: verseNumber
  };

  return verse;
}

async function runCrawler() {
  const chapterNumberList = Object.keys(chapters);
  for (let chapter = 1; chapter <= chapterNumberList.length; chapter++) {
    console.log(`📖 Loading ${chapter}/${chapterNumberList.length}`);
    try {
      await loadChapter(chapter);
      await sleep(200);
    } catch (err) {
      console.error(`❌ Failed loading ${chapter}`, err);
      await sleep(3000);
      chapter--;
    }
  }
}

runCrawler();
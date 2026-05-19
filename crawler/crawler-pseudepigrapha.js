function domToJson(root) {
  const result = {
    chapters: []
  };

  let currentChapter = null;
  let currentVerse = null;
  let currentText = [];

  function cleanText(text) {
    return text
      .replace(/\u200F/g, "") // RTL marks
      .replace(/\s+/g, " ")
      .trim();
  }

  function ensureChapterExists(chapterNumber) {
    while (result.chapters.length < chapterNumber) {
      result.chapters.push([]);
    }
  }

  function finalizeVerse() {
    if (
      currentChapter === null ||
      currentVerse === null
    ) {
      currentText = [];
      return;
    }

    const text = cleanText(currentText.join(" "));

    if (text && text !== "None") {
      const chapterArray =
        result.chapters[currentChapter - 1];

      chapterArray.push({
        text,
        verse: {
          index: chapterArray.length,
          start: currentVerse,
          end: currentVerse
        }
      });
    }

    currentText = [];
  }

  const elements = [...root.children];

  for (const el of elements) {
    const text = cleanText(el.textContent);

    if (!text) continue;

    // -------------------
    // CAPÍTULO
    // -------------------
    if (el.classList.contains("refmarker_0")) {
      finalizeVerse();

      currentChapter = parseInt(text, 10);

      ensureChapterExists(currentChapter);

      currentVerse = null;

      continue;
    }

    // -------------------
    // VERSO
    // -------------------
    if (el.classList.contains("refmarker_1")) {
      finalizeVerse();

      currentVerse = text;

      continue;
    }

    // -------------------
    // TEXTO
    // -------------------
    if (
      el.tagName === "SPAN" ||
      el.tagName === "A"
    ) {
      if (text !== "None") {
        currentText.push(text);
      }
    }
  }

  finalizeVerse();

  return result;
}

/**
 * Uso
 */
const root = document.querySelector("#textframe0");

const json = domToJson(root);

console.log(JSON.stringify(json));
function domToJson(root) {
  const result = {
    chapters: []
  };

  let currentChapter = null;
  let currentVerse = null;
  let verseText = [];

  function finalizeVerse() {
    if (
      currentChapter !== null &&
      currentVerse !== null &&
      verseText.length > 0
    ) {
      result.chapters[currentChapter].push({
        text: verseText.join(" ").replace(/\s+/g, " ").trim(),
        verse: {
          index: result.chapters[currentChapter].length,
          start: currentVerse,
          end: currentVerse
        }
      });
    }

    verseText = [];
  }

  const nodes = [...root.childNodes];

  for (const node of nodes) {
    // Ignora text nodes vazios
    if (node.nodeType === Node.TEXT_NODE) continue;

    if (node.nodeType !== Node.ELEMENT_NODE) continue;

    const text = node.textContent.trim();

    // Ignora textos None
    if (text === "None") continue;

    // -------------------------
    // CAPÍTULO
    // -------------------------
    if (node.classList.contains("refmarker_0")) {
      // Fecha verso anterior
      finalizeVerse();

      currentChapter = parseInt(text, 10) - 1;

      if (!result.chapters[currentChapter]) {
        result.chapters[currentChapter] = [];
      }

      currentVerse = null;
      continue;
    }

    // -------------------------
    // VERSO
    // -------------------------
    if (node.classList.contains("refmarker_1")) {
      // Fecha verso anterior
      finalizeVerse();

      currentVerse = text;
      continue;
    }

    // -------------------------
    // TEXTO
    // -------------------------
    if (
      node.matches("span.Greek, a.Greek")
    ) {
      const clean = text.replace(/\s+/g, " ").trim();

      if (clean && clean !== "None") {
        verseText.push(clean);
      }
    }
  }

  // Fecha último verso
  finalizeVerse();

  return result;
}

/**
 * Uso:
 */
const root = document.querySelector("#textframe0");

const json = domToJson(root);

console.log(json);
console.log(JSON.stringify(json));

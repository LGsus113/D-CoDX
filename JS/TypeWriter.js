function typeWriterEffect(selector, phrases = null, speed = 100, delay = 1000) {
  const spans = document.querySelectorAll(selector);
  let phrasesIndex = 0;

  spans.forEach((s) => {
    const span = s.querySelector(".name");
    const cursor = s.querySelector(".cursor");

    let text = phrases ? phrases[phrasesIndex] : span.textContent;
    const originalText = span.textContent;
    span.textContent = "";

    let i = 0;
    let deleting = false;

    function handleCursor() {
      cursor.style.animation = deleting ? 'blink .6s step-end infinite' : 'none';
    }

    function writeText() {
      if (i < text.length) {
        span.textContent += text.charAt(i);
        i++;
        setTimeout(writeText, speed);
      } else {
        deleting = true;
        setTimeout(deleteText, delay);
      }
    }

    function deleteText() {
      if (i > 0) {
        span.textContent = span.textContent.slice(0, -1);
        i--;
        setTimeout(deleteText, speed);
      } else {
        deleting = false;

        if (!phrases) {
          text = originalText;  
          setTimeout(writeText, delay);
        } else {
          handlePhrases();
        }
      }
    }

    function handlePhrases() {
      phrasesIndex++;
      
      if (phrasesIndex >= phrases.length) {
        phrasesIndex = 0;
      }
      
      text = phrases[phrasesIndex];
      setTimeout(writeText, delay);
    }

    setInterval(handleCursor, 100);
    writeText();
  });
} 
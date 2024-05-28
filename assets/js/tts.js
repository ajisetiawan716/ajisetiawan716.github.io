document.addEventListener("DOMContentLoaded", function() {
    const togglePlayButton = document.getElementById("toggle-play");
    const textContainer = document.getElementById("post-body");

    if (togglePlayButton && textContainer) {
        let isPlaying = false;
        let currentParagraph = 0;
        const paragraphs = textContainer.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
        let currentHighlightedSpan = null;

        togglePlayButton.addEventListener("click", function () {
            if (!isPlaying) {
                if (currentParagraph >= paragraphs.length) {
                    // Reset ke awal jika sudah selesai
                    currentParagraph = 0;
                }
                isPlaying = true;
                togglePlayButton.innerHTML = `
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                    Jeda
                `;
                play();
            } else {
                isPlaying = false;
                togglePlayButton.innerHTML = `
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Putar
                `;
                speechSynthesis.cancel();
                clearHighlight(paragraphs[currentParagraph]);
            }
        });

        async function play() {
            if (currentParagraph < paragraphs.length) {
                const paragraph = paragraphs[currentParagraph];
                const text = paragraph.textContent;
                await speak(text);
            } else {
                isPlaying = false;
                togglePlayButton.innerHTML = `
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    Putar
                `;
            }
        }

        async function speak(text) {
            const rate = 1.0; // Atur kecepatan (contoh: 1.0 = 1x lebih cepat)

            const sentences = text.match(/[^.!?]+[.!?]/g) || [];
            for (let i = 0; i < sentences.length; i++) {
                const sentence = sentences[i].trim();
                if (sentence !== "") {
                    highlightWord(paragraphs[currentParagraph], i);
                    await speakSentence(sentence, rate);
                }
            }

            // Setelah selesai membaca kalimat-kalimat, lanjutkan ke kalimat berikutnya
            currentParagraph++;
            setTimeout(play, 0); // Jeda 0ms sebelum membaca paragraf berikutnya
        }

        function speakSentence(sentence, rate) {
            return new Promise((resolve) => {
                const utterance = new SpeechSynthesisUtterance(sentence);
                utterance.lang = "id-ID"; // Atur bahasa yang sesuai
                utterance.rate = rate; // Atur kecepatan baca
                speechSynthesis.speak(utterance);

                utterance.onend = function () {
                    resolve();
                };
            });
        }

        function highlightWord(paragraph, sentenceIndex) {
            const sentences = paragraph.textContent.match(/[^.!?]+[.!?]/g) || [];
            const words = sentences[sentenceIndex].split(/\s+/);
            const highlightedWord = words[0]; // Ambil kata pertama untuk di-highlight
            sentences[sentenceIndex] = sentences[sentenceIndex].replace(
                highlightedWord,
                `<span class="highlighttts">${highlightedWord}</span>`
            );
            paragraph.innerHTML = sentences.join(" ");
            currentHighlightedSpan = paragraph.querySelector(".highlighttts");
        }

        function clearHighlight(paragraph) {
            if (currentHighlightedSpan) {
                unhighlightWord(currentHighlightedSpan);
            }
        }

        function unhighlightWord(span) {
            const text = span.textContent;
            span.outerHTML = text;
        }
    } else {
        console.error("Elemen dengan ID 'toggle-play' atau 'post-body' tidak ditemukan.");
    }
});

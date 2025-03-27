let input_chapter = document.querySelector("#inputElement");
let head1 = document.querySelector("#surahName");
let readAllBtn = document.querySelector("#readAll");
let audioWrapper = document.querySelector("#audioWrapper");
let verse_list = document.querySelector("#list");

async function selectSura() {
    readAllBtn.addEventListener("click", async () => {
        let selectedChapter = parseInt(input_chapter.value);
        if (!selectedChapter || selectedChapter < 1 || selectedChapter > 114) {
            alert("Please enter a valid chapter number (1-114)");
            return;
        }

        try {
            let response = await fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/uzb-alaaudeenmansou.json");
            let data = await response.json();

            // Set Surah Name
            head1.textContent = suraNames.find(s => s.chapter === selectedChapter)?.name || "Unknown";

            // Clear previous results
            verse_list.innerHTML = "";
            audioWrapper.innerHTML = "";

            data.quran
                .filter(v => v.chapter === selectedChapter)
                .forEach(v => {
                    let li = document.createElement("li");
                    let audio = document.createElement("audio");

                    // Set text content
                    li.textContent = `${v.text} (Oyat: ${v.verse})`;

                    // Quran.com audio source
                    audio.controls = true;
                    audio.src = `https://verses.quran.com/Abdullah-Basfar/mp3/${String(selectedChapter)}/${String(v.verse)}.mp3`;

                    li.appendChild(audio);
                    verse_list.appendChild(li);
                });
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching the Quran data.");
        }
    });
}

selectSura();

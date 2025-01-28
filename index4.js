const kanjiList = [
    { kanji: "日", meaning: "Sun, Day" },
    { kanji: "月", meaning: "Moon, Month" },
    { kanji: "山", meaning: "Mountain" },
    { kanji: "川", meaning: "River" },
    { kanji: "花", meaning: "Flower" },
  ];
  
  // Function to display Kanji
  function displayKanji() {
    const ul = document.getElementById("kanji-list");
    kanjiList.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.kanji}: ${item.meaning}`;
      ul.appendChild(li);
    });
  }
  
  // Display Kanji on page load
  displayKanji();
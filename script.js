// Array of dynamic texts
const dynamicTexts = [
    "Hare Krishna Hare Krishna, Krishna Krishna Hare Hare, Hare Rama Hare Rama, Rama Rama Hare Hare",
    "हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम हरे राम, राम राम हरे हरे",
    "হরে কৃষ্ণ হরে কৃষ্ণ, কৃষ্ণ কৃষ্ণ হরে হরে, হরে রাম হরে রাম, রাম রাম রাম হরে হরে"
];

// Function to change text automatically
function changeText() {
    const textElement = document.getElementById("changing-text");
    let index = 0;

    setInterval(() => {
        textElement.textContent = dynamicTexts[index];
        index = (index + 1) % dynamicTexts.length;
    }, 2000); // Change text every 2 seconds (adjust as needed)
}

// Call the function to start changing text
changeText();


function toggleAudio() {
    var audio = document.getElementById("bg-music");
    var audioIcon = document.getElementById("audio-icon");
    
    if (audio.paused) {
      audio.play();
      audioIcon.classList.remove("fa-play");
      audioIcon.classList.add("fa-pause");
    } else {
      audio.pause();
      audioIcon.classList.remove("fa-pause");
      audioIcon.classList.add("fa-play");
    }
  }
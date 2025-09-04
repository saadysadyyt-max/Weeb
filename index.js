window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const continueBtn = document.getElementById("continueBtn");
  const steps = document.querySelectorAll(".step");
  const content = document.getElementById("content");

  // Blur content until overlay dismissed
  content.classList.add("blur");

  continueBtn.addEventListener("click", () => {
    overlay.style.display = "none";
    content.classList.remove("blur");

    // Fade in steps one by one (2s interval)
    steps.forEach((step, i) => {
      setTimeout(() => step.classList.add("visible"), 2000 * (i + 1));
    });
  });

  // Sequential sound play
  const playSoundBtn = document.getElementById("playSoundBtn");
  const sound = document.getElementById("sound");

  const sounds = ["1.mp3", "dry-fart.mp3", "cat-laugh-meme-1.mp3"]; // add more if needed
  let currentIndex = 0;

  function playNext() {
    if (currentIndex < sounds.length) {
      sound.src = sounds[currentIndex];
      sound.play();
      currentIndex++;
    }
  }

  sound.addEventListener("ended", playNext);

  playSoundBtn.addEventListener("click", () => {
    currentIndex = 0; // restart sequence each click
    playNext();
  });
});

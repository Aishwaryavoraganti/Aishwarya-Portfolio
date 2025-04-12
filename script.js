function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

const phrases = ["Welcome", "Hello", "I am Aishwarya Voraganti"];
const animatedText = document.getElementById("animated-text");

let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (phraseIndex < phrases.length) {
    let currentPhrase = phrases[phraseIndex];
    animatedText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => {
        phraseIndex++;
        charIndex = 0;
        setTimeout(typeEffect, 500); // Delay before next phrase
      }, 1000); // Pause after each phrase
    } else {
      setTimeout(typeEffect, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

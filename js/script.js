const text = "";
const animatedText = document.getElementById("animated-text");

let index = 0;

function typeText() {
  if (index < text.length) {
    animatedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100); // Adjust typing speed here
  }
}

typeText();

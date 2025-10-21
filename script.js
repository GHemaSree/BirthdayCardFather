const revealBtn = document.getElementById("revealBtn");
const message = document.getElementById("message");
const closeBtn = document.getElementById("closeBtn");
const confettiContainer = document.getElementById("confetti");

// Function to create confetti
function createConfetti() {
  confettiContainer.innerHTML = '';
  for(let i=0;i<150;i++){
    const confetto = document.createElement('span');
    confetto.style.left = Math.random() * 100 + 'vw';
    confetto.style.animationDuration = 3 + Math.random() * 5 + 's';
    confetto.style.width = 6 + Math.random() * 12 + 'px';
    confetto.style.height = confetto.style.width;
    const shade = 100 + Math.floor(Math.random()*155);
    confetto.style.background = `rgb(30,${shade},${shade+30})`; // shades of blue
    confettiContainer.appendChild(confetto);
  }
  confettiContainer.style.display = 'block';
  setTimeout(() => { confettiContainer.style.display = 'none'; }, 8000);
}

// Button click events
revealBtn.addEventListener("click", () => {
  message.style.display = "flex";
  revealBtn.style.display = "none";
  createConfetti();
});

closeBtn.addEventListener("click", () => {
  message.style.display = "none";
  revealBtn.style.display = "inline-block";
});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".container");
const celebrate = document.getElementById("celebrate");

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  celebrate.classList.remove("hidden");
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

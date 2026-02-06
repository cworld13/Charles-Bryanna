const container = document.querySelector(".floating-hearts");

const createHeart = () => {
  if (!container) return;
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${7 + Math.random() * 6}s`;
  heart.style.opacity = `${0.4 + Math.random() * 0.6}`;
  heart.style.transform = `rotate(45deg) scale(${0.6 + Math.random() * 1.2})`;
  container.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
};

for (let i = 0; i < 18; i += 1) {
  setTimeout(createHeart, i * 400);
}

setInterval(createHeart, 1200);

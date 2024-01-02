const body = document.body;
const canvas = document.createElement("canvas");
body.appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

body.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // 색상을 빨간색으로 고정
  const color = "red";

  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(mouseX, mouseY, 100, 0, Math.PI * 2);
  ctx.fill();
});

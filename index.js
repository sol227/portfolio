// 메뉴 스크롤
gsap.registerPlugin(ScrollToPlugin);

// 현재 페이지의 앵커(해시)인지 확인하는 함수
function getSamePageAnchor(link) {
  // 주어진 링크의 프로토콜, 호스트, 경로, 쿼리 문자열이 현재 페이지와 동일한지 확인
  if (
    link.protocol !== window.location.protocol ||
    link.host !== window.location.host ||
    link.pathname !== window.location.pathname ||
    link.search !== window.location.search
  ) {
    return false; // 동일하지 않으면 false 반환
  }

  return link.hash; // 동일하다면 앵커 반환
}

// 주어진 해시(앵커)로 스크롤을 이동시키는 함수
function scrollToHash(hash, e) {
  const elem = hash ? document.querySelector(hash) : false;
  if (elem) {
    if (e) e.preventDefault(); // 이벤트가 존재하면 기본 동작 막기
    gsap.to(window, { scrollTo: elem }); // gsap을 사용하여 부드러운 스크롤 효과 적용
  }
}
// 링크 클릭 시 현재 페이지 내의 앵커로 스크롤 이동
document.querySelectorAll("a[href]").forEach((a) => {
  a.addEventListener("click", (e) => {
    scrollToHash(getSamePageAnchor(a), e);
  });
});
// 로드 시 URL의 해시(앵커)로 스크롤 이동
scrollToHash(window.location.hash);

// sol_intro 색칠
const intro = document.querySelector(".sol");
const canvas = document.createElement("canvas");
intro.appendChild(canvas);
const ctx = canvas.getContext("2d");
const colorChangeTitle = document.getElementById(".sol_title");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 현재 위치
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

intro.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // 캔버스에 부드럽게 이동하는 애니메이션 적용
  requestAnimationFrame(() => {
    animate(mouseX, mouseY);
  });
});

function animate(mouseX, mouseY) {
  // 새로운 위치로의 부드러운 이동 계산
  currentX += (mouseX - currentX) * 0.3;
  currentY += (mouseY - currentY) * 0.3;
  const color = "#31af57";

  // 캔버스에 부드럽게 이동한 위치에 원을 그림
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(currentX, currentY, 150, 0, Math.PI * 2);
  ctx.fill();
}

// 마우스 커서
// const newCursor = document.getElementById("cursor");

// document.addEventListener("DOMContentLoaded", () => {
//   document.addEventListener("mousemove", (e) => {
//     const { clientX, clientY } = e;
//     newCursor.style.left = clientX + "px";
//     newCursor.style.top = clientY + "px";
//   });

//   document.addEventListener("scroll", () => {
//     const rect = newCursor.getBoundingClientRect();
//     newCursor.style.left = rect.left + window.scrollX + "px";
//     newCursor.style.top = rect.top + window.scrollY + "px";
//   });
// });

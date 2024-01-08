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

// 마우스 커서
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
  console.log(e);
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// sol_intro 색칠
const svg = document.getElementById("drawingArea");

// 마우스 이동 이벤트 핸들러
document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;

  // SVG 좌표계로 변환
  const svgPoint = svg.createSVGPoint();
  svgPoint.x = clientX;
  svgPoint.y = clientY;
  const svgCoord = svgPoint.matrixTransform(svg.getScreenCTM().inverse());

  // 원을 생성하고 위치를 설정
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", svgCoord.x);
  circle.setAttribute("cy", svgCoord.y);
  circle.setAttribute("r", "150"); // 반지름 크기
  circle.setAttribute("fill", "#31af57"); // 원의 색상
  svg.appendChild(circle);
});

// projact 부분
// project scrolltrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".line1", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line2",
    start: "center top",
    duration: 15,
  },
});
gsap.to(".line2", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line3",
    start: "center top",
    duration: 15,
  },
});
gsap.to(".line3", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line4",
    start: "center top",
    duration: 15,
  },
});
gsap.to(".line4", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line5",
    start: "center top",
    duration: 15,
  },
});
gsap.to(".line5", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line6",
    start: "center top",
    duration: 15,
  },
});
gsap.to(".line6", {
  width: "80vw",
  scrollTrigger: {
    trigger: ".line6",
    start: "center top",
    duration: 15,
  },
});
// title
gsap.to(".sing", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line2",
    start: "top top",
    duration: 10,
  },
});
gsap.to(".mfunch", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line3",
    start: "top top",
    duration: 10,
  },
});
gsap.to(".none1", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line4",
    start: "top top",
    duration: 10,
  },
});
gsap.to(".none2", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line5",
    start: "top top",
    duration: 10,
  },
});
gsap.to(".portfolio", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line6",
    start: "top top",
    duration: 10,
  },
});
gsap.to(".line6", {
  translateY: 0,
  scrollTrigger: {
    trigger: ".line6",
    start: "top top",
    duration: 10,
  },
});

// 배경색
// script.js

const singsinggo = document.querySelector(".singsinggo");
const mfunch = document.querySelector(".mfunch");
const none1 = document.querySelector(".none1");
const none2 = document.querySelector(".none2");
const portfolio = document.querySelector(".portfolio");
const workList = document.querySelector(".work_list");

function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function restoreBackgroundColor(element) {
  element.style.backgroundColor = "";
}

// 마우스 이미지
const customCursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (event) => {
  customCursor.style.left = `${event.clientX}px`;
  customCursor.style.top = `${event.clientY}px`;
});

// singsinggo
singsinggo.addEventListener("mouseover", function () {
  changeBackgroundColor(workList, "#00C8F4");
  customCursor.style.backgroundImage = "url('./assets/images/sing_mouse.svg')";
});
singsinggo.addEventListener("mouseout", function () {
  restoreBackgroundColor(workList);
  customCursor.style.backgroundImage = "";
});
// mfunch
mfunch.addEventListener("mouseover", function () {
  changeBackgroundColor(workList, "#EB5028");
  customCursor.style.backgroundImage =
    "url('./assets/images/mfunch_mouse.svg')";
});
mfunch.addEventListener("mouseout", function () {
  restoreBackgroundColor(workList);
  customCursor.style.backgroundImage = "";
});
// none
none1.addEventListener("mouseover", function () {
  changeBackgroundColor(workList, "#80F1A2");
  customCursor.style.backgroundImage =
    "url('./assets/images/mfunch_mouse.svg')";
});
none1.addEventListener("mouseout", function () {
  restoreBackgroundColor(workList);
  customCursor.style.backgroundImage = "";
});
// none
none2.addEventListener("mouseover", function () {
  changeBackgroundColor(workList, "#FFC450");
  customCursor.style.backgroundImage =
    "url('./assets/images/mfunch_mouse.svg')";
});
none2.addEventListener("mouseout", function () {
  restoreBackgroundColor(workList);
  customCursor.style.backgroundImage = "";
});
// portfolio
portfolio.addEventListener("mouseover", function () {
  changeBackgroundColor(workList, "#31af57");
  customCursor.style.backgroundImage = "url('./assets/images/rabbitRight.png')";
});

portfolio.addEventListener("mouseout", function () {
  restoreBackgroundColor(workList);
  customCursor.style.backgroundImage = "";
});

// const intro = document.querySelector(".sol");
// const canvas = document.getElementById("canvas");
// // const canvas = document.createElement("canvas");
// // intro.appendChild(canvas);
// const ctx = canvas.getContext("2d");
// const colorChangeTitle = document.getElementById(".sol_title");

// window.addEventListener("scroll", () => {
//   ctx.style.top = scrollY + "px";
// });

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // 현재 위치
// let currentX = window.innerWidth / 2;
// let currentY = window.innerHeight / 2;

// intro.addEventListener("mousemove", (event) => {
//   const mouseX = event.clientX;
//   const mouseY = event.clientY;

//   // 캔버스에 부드럽게 이동하는 애니메이션 적용
//   requestAnimationFrame(() => {
//     animate(mouseX, mouseY);
//   });
// });

// function animate(mouseX, mouseY) {
//   // 새로운 위치로의 부드러운 이동 계산
//   currentX += (mouseX - currentX) * 0.5;
//   currentY += (mouseY - currentY) * 0.5;
//   const color = "#31af57";

//   // 캔버스에 부드럽게 이동한 위치에 원을 그림
//   ctx.fillStyle = color;
//   ctx.beginPath();
//   ctx.arc(currentX, currentY, 150, 0, Math.PI * 2);
//   ctx.fill();
// }

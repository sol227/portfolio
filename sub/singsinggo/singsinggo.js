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

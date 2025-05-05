import { topBtn } from "../base/dom-elements.js";

export function initTopButton() {
  if (!topBtn) return;

  // 탑 버튼 클릭 이벤트
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // 버튼 호버 시 애니메이션
  topBtn.addEventListener("mouseover", () => {
    topBtn.style.transform = "translateY(-5px) scale(1.1)";
  });

  topBtn.addEventListener("mouseout", () => {
    topBtn.style.transform = "translateY(0) scale(1)";
  });
}

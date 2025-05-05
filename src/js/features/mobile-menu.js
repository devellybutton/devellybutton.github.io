import { mobileMenuBtn } from "../base/dom-elements.js";
import { navMenu } from "../base/dom-elements.js";

// 모바일 메뉴 토글
export function initMobileMenu() {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenuBtn.innerHTML = navMenu.classList.contains("active")
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';

    // 메뉴 열릴 때 바디 스크롤 잠금
    if (navMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
}

import { navLinks } from "../base/dom-elements.js";
import { navMenu } from "../base/dom-elements.js";
import { mobileMenuBtn } from "../base/dom-elements.js";

// 네비게이션 링크 클릭 시 스무스 스크롤
export function initNavigation() {
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // 모바일 메뉴 닫기
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = "";
      }

      // 타겟 섹션으로 스크롤
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    });
  });
}

import { initTopButton } from "./features/top-button.js";
import { initPortfolio, setupPortfolioItems } from "./features/portfolio.js";
import { initCursorEffect } from "./features/cursor.js";
import { myNameAnimation } from "./features/my-name.js";
import { initMobileMenu } from "./features/mobile-menu.js";
import {
  changeHeaderStyle,
  animateOnScroll,
  animateHeroElements,
  animateSkills,
} from "./features/animation.js";
import { applyAdditionalStyles } from "./features/styles.js";
import { submitContactForm } from "./features/contact-form/contact-form.js";

document.addEventListener("DOMContentLoaded", () => {
  // 추가 스타일 적용
  applyAdditionalStyles();

  // UI 기본 요소 초기화
  initTopButton(); // 맨 위로가기 버튼
  initMobileMenu(); // 모바일 메뉴 토글
  myNameAnimation(); // 이름 애니메이션

  // 마우스 커서
  initCursorEffect(); // 마우스 커서 효과
  document.documentElement.classList.add("cursor-effect-enabled");

  // 포트폴리오 섹션
  initPortfolio(); // 포트폴리오 필터링
  setupPortfolioItems(); // 포트폴리오 초기화

  // 애니메이션 / 스크롤
  changeHeaderStyle(); // 헤더 스타일 변경
  animateOnScroll(); // 스크롤 시 요소 애니메이션
  animateHeroElements(); // 히어로 섹션 애니메이션
  animateSkills(); // 스킬 애니메이션

  // 폼 제출
  submitContactForm();
});

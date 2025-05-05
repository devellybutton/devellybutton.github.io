import { sections } from "../base/dom-elements.js";
import { skills } from "../base/dom-elements.js";
import { header } from "../base/dom-elements.js";

// 스크롤 시 헤더 스타일 변경
export function changeHeaderStyle() {
  window.addEventListener("scroll", () => {
    // 헤더 스타일 변경
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // 맨 위로가기 버튼 동작
    if (window.scrollY > 500) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }

    // 스크롤 시 요소 애니메이션
    animateOnScroll();
  });
}

// 스크롤 시 요소 애니메이션
export function animateOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add("visible");

      // 섹션 내부 요소 애니메이션
      const elements = section.querySelectorAll(
        ".education-card, .career-card, .license-item, .award-item, .contact-item, .contact-form"
      );
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 100);
      });
    }
  });
}

// 히어로 섹션 애니메이션
export function animateHeroElements() {
  const heroElements = document.querySelectorAll(
    ".hero-title, .hero-subtitle, .hero-btns, .hero-img"
  );

  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// 스킬 애니메이션
export function animateSkills() {
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
    skill.classList.add("skill-animate");
  });
}

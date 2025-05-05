// 추가 CSS 스타일을 동적으로 적용
// 페이지 첫 로딩시 한번만 투명&float 됨
export function applyAdditionalStyles() {
  const styleElement = document.createElement("style");
  styleElement.textContent = `
    /* 섹션 애니메이션 */
    section {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
    }
    
    section.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    /* 카드 애니메이션 */
    .education-card, .career-card, .license-item, .award-item, .contact-item, .contact-form {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.6s cubic-bezier(0.5, 0, 0, 1);
    }
    
    /* 히어로 요소 애니메이션 */
    .hero-title, .hero-subtitle, .hero-btns, .hero-img {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.7s cubic-bezier(0.5, 0, 0, 1);
    }
    
    /* 스킬 애니메이션 */
    .skill-animate {
      animation: skillAppear 0.5s cubic-bezier(0.5, 0, 0, 1) forwards;
      opacity: 0;
    }
    
    @keyframes skillAppear {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  document.head.appendChild(styleElement);
}

// 추가 스타일 적용
applyAdditionalStyles();

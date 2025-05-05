// DOM 요소들
const header = document.querySelector("header");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");
const contactForm = document.getElementById("contactForm");
const sections = document.querySelectorAll("section");
const skills = document.querySelectorAll(".skill");
const topBtn = document.getElementById("topBtn");

// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", () => {
  // 초기 애니메이션 효과 적용
  animateOnScroll();
  animateHeroElements();
  animateSkills();

  // 포트폴리오 아이템 초기화
  setupPortfolioItems();
});

// 모바일 메뉴 토글
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

// 네비게이션 링크 클릭 시 스무스 스크롤
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

// 스크롤 시 헤더 스타일 변경
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

// 내 이름 애니메이션
const myName = document.querySelector(".my-name");
const originalText = myName.innerText;
const animationDelay = 3000;

function myNameAnimation() {
  myName.innerHTML = originalText
    .split("")
    .map((ltr, idx) => {
      return `<span class="ltr" style="--delay: ${idx * 100}ms">${ltr}</span>`;
    })
    .join("");

  console.log(myName);

  const ltrs = document.querySelectorAll(".my-name .ltr");
  const lastLtrIdx = ltrs.length - 1;

  // 마지막 글자의 애니메이션이 끝나면 타이머 시작
  ltrs[lastLtrIdx].addEventListener("animationend", function onAnimationEnd() {
    ltrs[lastLtrIdx].removeEventListener("animationend", onAnimationEnd);

    ltrs.forEach((ltr) => ltr.classList.add("completed"));

    setTimeout(() => {
      myName.innerText = originalText;
      setTimeout(myNameAnimation, 150);
    }, animationDelay);
  });
}

myNameAnimation();
// ltrs.forEach((ltr) => {
//   ltr.addEventListener("animationend", () => {
//     ltr.classList.add("show");
//   });
// });

// 포트폴리오 필터링
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 버튼 활성화 상태 변경
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 필터링 적용
    const filter = btn.getAttribute("data-filter");

    // 애니메이션과 함께 필터링
    portfolioItems.forEach((item) => {
      item.style.transform = "scale(0.8)";
      item.style.opacity = "0";

      setTimeout(() => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.transform = "scale(1)";
            item.style.opacity = "1";
          }, 50);
        } else {
          item.style.display = "none";
        }
      }, 300);
    });
  });
});

// 폼 제출 처리
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // 폼 데이터 가져오기
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // 폼 데이터 유효성 검사
  if (!name || !email || !subject || !message) {
    showNotification("모든 필드를 입력해주세요.", "error");
    return;
  }

  // 이메일 형식 검사
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showNotification("유효한 이메일 주소를 입력해주세요.", "error");
    return;
  }

  // 여기에 실제 폼 전송 코드 추가 (API 연동 등)

  // 성공 메시지 표시
  showNotification(
    `${name}님, 메시지가 성공적으로 전송되었습니다! 3일 내에 연락드리겠습니다.`,
    "success"
  );

  // 폼 초기화
  contactForm.reset();
});

// 알림 메시지 표시 함수
function showNotification(message, type = "success") {
  // 기존 알림 제거
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // 새 알림 생성
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas fa-${
        type === "success" ? "check-circle" : "exclamation-circle"
      }"></i>
      <p>${message}</p>
    </div>
  `;

  // 알림 스타일
  notification.style.position = "fixed";
  notification.style.bottom = "20px";
  notification.style.right = "20px";
  notification.style.padding = "15px 25px";
  notification.style.borderRadius = "10px";
  notification.style.backgroundColor =
    type === "success" ? "#10b981" : "#ef4444";
  notification.style.color = "#fff";
  notification.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
  notification.style.zIndex = "1000";
  notification.style.transform = "translateY(100px)";
  notification.style.opacity = "0";
  notification.style.transition =
    "all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)";

  // 알림 내부 콘텐츠 스타일
  const content = notification.querySelector(".notification-content");
  content.style.display = "flex";
  content.style.alignItems = "center";
  content.style.gap = "10px";

  // 아이콘 스타일
  const icon = notification.querySelector("i");
  icon.style.fontSize = "1.5rem";

  // 바디에 알림 추가
  document.body.appendChild(notification);

  // 알림 표시 애니메이션
  setTimeout(() => {
    notification.style.transform = "translateY(0)";
    notification.style.opacity = "1";
  }, 10);

  // 3초 후 알림 사라짐
  setTimeout(() => {
    notification.style.transform = "translateY(100px)";
    notification.style.opacity = "0";

    // 알림 요소 제거
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// 스크롤 시 요소 애니메이션
function animateOnScroll() {
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
function animateHeroElements() {
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
function animateSkills() {
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
    skill.classList.add("skill-animate");
  });
}

// 포트폴리오 아이템 초기화
function setupPortfolioItems() {
  portfolioItems.forEach((item, index) => {
    // 초기 상태
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";

    // 애니메이션 적용
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// 추가 CSS 스타일을 동적으로 적용
function applyAdditionalStyles() {
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

// 커서 요소 생성 및 마우스 따라다니기
function initCursorEffect() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
  
  // 링크 및 버튼에 호버 시 커서 크기 변경
  const hoverElements = document.querySelectorAll('a, button, .portfolio-item, .skill');
  hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
}

// 페이지 로드 시 커서 효과 초기화
document.addEventListener('DOMContentLoaded', () => {
  initCursorEffect();

  document.documentElement.classList.add('cursor-effect-enabled');
});
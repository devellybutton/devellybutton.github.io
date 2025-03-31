// 모바일 메뉴 토글
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenuBtn.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
});

// 스크롤 시 헤더 스타일 변경
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 70,
      behavior: "smooth",
    });

    // 모바일 메뉴 닫기
    if (navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      mobileMenuBtn.textContent = "☰";
    }
  });
});

// 포트폴리오 필터링
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 활성화된 버튼 스타일 변경
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");

    // 필터링
    const filter = btn.getAttribute("data-filter");

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// 폼 제출 처리
// 폼 서버로 전송해야하는데, API로 전송해야하는지 더 생각해봐야 할듯
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // 폼 데이터 가져오기
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // 전송 후 알림 표시
  alert(`${name}님, 메시지가 성공적으로 전송되었습니다! 3일 내에 연락드리겠습니다.`);

  // 폼 초기화
  contactForm.reset();
});

// 스킬 애니메이션
const skills = document.querySelectorAll(".skill");

skills.forEach((skill, index) => {
  skill.style.animationDelay = `${index * 0.1}s`;
});

// 포트폴리오 아이템 애니메이션
const portfolioGrid = document.querySelector(".portfolio-grid");

function animatePortfolioItems() {
  portfolioItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// 페이지 로드 시 애니메이션 실행
window.addEventListener("load", () => {
  animatePortfolioItems();
});

// 스크롤 애니메이션
const sections = document.querySelectorAll("section");

function checkSections() {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

// 페이지 랜딩 시 초기 체크
checkSections();

// 스크롤 이벤트
window.addEventListener("scroll", checkSections);

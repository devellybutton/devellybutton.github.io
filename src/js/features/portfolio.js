import { filterBtns, portfolioItems } from "../base/dom-elements.js";

// 포트폴리오 필터링
export function initPortfolio() {
  if (!filterBtns.length || !portfolioItems.length) return;

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
          if (
            filter === "all" ||
            item.getAttribute("data-category") === filter
          ) {
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
}

// 포트폴리오 아이템 초기화
export function setupPortfolioItems() {
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

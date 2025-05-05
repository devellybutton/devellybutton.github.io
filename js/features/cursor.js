// 커서 요소 생성 및 마우스 따라다니기
export function initCursorEffect() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // 링크 및 버튼에 호버 시 커서 크기 변경
  const hoverElements = document.querySelectorAll(
    "a, button, .portfolio-item, .skill"
  );
  hoverElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", () => {
      cursor.classList.remove("cursor-hover");
    });
  });
}

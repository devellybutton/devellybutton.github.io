// 알림 메시지 표시 함수
export function showNotification(message, type = "success") {
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

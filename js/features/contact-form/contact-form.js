import { showNotification } from "./notification.js";
import { contactForm } from "../../base/dom-elements.js";

// 폼 제출 처리
export function submitContactForm() {
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

    // 성공 메시지 표시
    showNotification(
      `${name}님, 메시지가 성공적으로 전송되었습니다! 3일 내에 연락드리겠습니다.`,
      "success"
    );

    // 폼 초기화
    contactForm.reset();
  });
}

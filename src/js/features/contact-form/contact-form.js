import { showNotification } from "./notification.js";
import { contactForm } from "../../base/dom-elements.js";
import { supabase } from "../../base/supabase.js";

// 3번 보낸 후 3분 제한
const MAX_SUBMISSION_COUNT = 3; // 제한 횟수
const PERIOD_TIME = 3 * 60 * 1000; // 3분
let count = 0; // 현재 제한 횟수
let lastSubmitionTime = 0; // 마지막 제출 시각

function incrementCount() {
  count++;
  lastSubmitionTime = Date.now();
}

// 폼 제출 처리
export function submitContactForm() {
  try {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (
        count >= MAX_SUBMISSION_COUNT &&
        Date.now() - lastSubmitionTime < PERIOD_TIME
      ) {
        const remainMinutes = Math.ceil(
          (PERIOD_TIME - (Date.now() - lastSubmitionTime)) / (60 * 1000)
        );
        showNotification(
          `너무 많은 요청이 있었습니다. ${remainMinutes}분 후에 다시 시도해주세요.`,
          "error"
        );

        return;
      }

      // 제한 시간 지나면 count 초기화
      if (Date.now() - lastSubmitionTime > PERIOD_TIME) {
        count = 0;
      }

      if (import.meta.env.DEV) {
        console.log("현재 제출 횟수:", count);
      }

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

      // Supabase에 데이터 삽입
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([{ name, email, subject, message }]);

      if (error) {
        console.error("Supabase 전송 중 오류:", error);
        showNotification("메시지 전송 중 오류가 발생했습니다.", "error");
        return;
      }

      // 성공 메시지 표시
      showNotification(
        `${name}님, 메시지가 성공적으로 전송되었습니다! 3일 내에 연락드리겠습니다.`,
        "success"
      );

      // 제출 횟수 증가, 마지막 제출 시각 기록
      incrementCount();
    });
  } catch (error) {
    console.error("연락하기 데이터 전송 중 에러 발생", error);
    showNotification("예기치 않은 오류가 발생했습니다.", "error");
  }
}

// 내 이름 애니메이션
import { myName } from "../base/dom-elements.js";
const originalText = myName.innerText;
const animationDelay = 3000;

export function myNameAnimation() {
  if (!myName) return;

  myName.innerHTML = originalText
    .split("")
    .map((ltr, idx) => {
      return `<span class="ltr" style="--delay: ${idx * 100}ms">${ltr}</span>`;
    })
    .join("");

  // console.log(myName);

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

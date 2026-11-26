import messages = require("./var.js");

const { odd, even } = messages;
type ParityMessage = typeof odd | typeof even;

function checkOddOrEven(number: number): ParityMessage {
  // 매개변수는 숫자, 반환값은 두 안내 문구 중 하나로 제한
  if (number % 2 !== 0) {
    return odd;
  }
  return even;
}

export = checkOddOrEven;

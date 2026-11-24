// as const를 붙이면 각 문구 타입이 단순 string이 아닌 문자열 리터럴이 됨
const messages = {
  odd: "CJS: 홀수",
  even: "CJS: 짝수",
} as const;

// CommonJS의 module.exports = messages에 대응
export = messages;

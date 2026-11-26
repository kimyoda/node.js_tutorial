const { createHash } = require("node:crypto");

const sample = "학습용 샘플";

// 해시는 단방향. Base64, hex는 같은 바이트를 표현하는 방식
const digest = createHash("sha512").update(sample, "utf8").digest();
console.log("Base64:", digest.toString("base64"));
console.log("hex:", digest.toString("hex"));

// 입력이 달라지면 결과도 달라짐. 에제를 비밀번호 저장에 그대로 쓰지 않음
const other = createHash("sha512")
  .update(sample + "!", "utf8")
  .digest("hex");
console.log("다른 입력 hex:", other);

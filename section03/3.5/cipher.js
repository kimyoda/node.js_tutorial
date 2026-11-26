const {
  createCipheriv,
  createDecipheriv,
  randomBytes,
} = require("node:crypto");

const algorithm = "aes-256-cbc";
const key = randomBytes(32);
const iv = randomBytes(16);
const plaintext = "문자열 암호화 실습";

// AES-256키는 32바이트, AES-CBC IV는 16바이트
const cipher = createCipheriv(algorithm, key, iv);
const ciphertext = Buffer.concat([
  cipher.update(plaintext, "utf8"),
  cipher.final(),
]);
console.log("암호화(Base64):", ciphertext.toString("base64"));

// 같은 알고리즘, 키, IV로 복호화. Base64는 암호화 자체가 아니라 표현 형식
const decipher = createDecipheriv(algorithm, key, iv);
const restored = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
console.log("복호화:", restored.toString("utf8"));

// CBC 만으로 변조를 검증할 순 없음. 이 코드는 암복호화 API를 보여주는 예시

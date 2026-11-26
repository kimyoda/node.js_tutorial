const { Buffer } = require("node:buffer");

const bytes = Buffer.from("안녕, 버퍼!", "utf8");
console.log("from:", bytes);

// Length는 글자 수가 아니라 바이트 수
console.log("length:", bytes.length);
console.log("toString", bytes.toString("utf8"));

const chunks = ["노드", "", "버퍼"].map((text) => Buffer.from(text));
console.log("concat:", Buffer.concat(chunks).toString("utf8"));

// 5바이트를 확보하고 0으로 채움
console.log("alloc:", Buffer.alloc(5));

import { URL } from "node:url";

const address = new URL(
  "https://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript",
);

const params: URLSearchParams = address.searchParams;

// get은 첫 값 또는 null, GetAll은 같은 이름의 모든 (없으면 빈 배열)을 반환
const limit: string | null = params.get("limit");
console.log("limit:", limit); // 숫자 10이 아니라 문자열 "10"
console.log("category 전체:", params.getAll("category"));
console.log("page 존재:", params.has("page"));
console.log("키:", Array.from(params.keys()));
console.log("값:", Array.from(params.values()));

// append는 같은 키에 값을 추가. set은 기존의 같은 키 값들을 하나로 바꾼다
params.append("filter", "es3");
params.append("filter", "es5");
console.log("append:", params.getAll("filter"));
params.set("filter", "es6");
console.log("set:", params.getAll("filter"));
params.delete("filter");
console.log("delete:", params.has("filter"));

// 이 객체를 바꾸면 원본 URL의 쿼리도 바뀐다. search에 다시 대입할 필요가 없음
console.log("직렬화:", params.toString());
console.log("변경된 주소:", address.href);

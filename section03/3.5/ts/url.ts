import { URL, format } from "node:url";

const address: URL = new URL("https://www.gilbut.co.kr/book/list?page=3#top");

// URL을 파싱하면 각 구성 요소를 따로 다를 수 있음
console.log("프로토콜:", address.protocol);
console.log("호스트:", address.host);
console.log("경로:", address.pathname);
console.log("쿼리:", address.search);
console.log("프래그먼트:", address.hash);

// URL 객체를 옵션과 함께 문자열로 바꿈
console.log("전체 주소:", address.href);
console.log("프래그먼트 제외:", format(address, { fragment: false }));

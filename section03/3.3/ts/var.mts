// 이름이 있는 내보내기 가져올 때 { odd, even} 으로 지정
export const odd = "ESM: 홀수";
export const even = "ESM: 짝수";

// 두 안내 문구 타입을 묶음. 타입이므로 빌드된 JS에 남지 않음
export type PairtyMessage = typeof odd | typeof even;

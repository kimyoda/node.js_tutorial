// 여러 자료형과 중첩 객체를 출력, console API를 확인.
const string = "abs";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

// 같은 라벨 time, timeEnd 사이 경과 시간을 측정.
console.time("전체시간");
console.log("평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담는다"); // 표준 오류에 출력

// 객체 배열의 데이터를 표로 출력.
console.table([
  { name: "제로", birth: 1994 },
  { name: "hero", birth: 1998 },
]);

// depth는 객체를 펼쳐 보여줄 깊이, colors는 색상 표시 여부
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.log("시간측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간측정");

function b() {
  console.trace("에러 위치 추적");
}
function a() {
  b();
}
a();

console.timeEnd("전체시간");

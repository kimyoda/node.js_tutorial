export {};
let i = 1;

// 1초마다 숫자를 출력, 다섯 번째 호출에서 프로세스를 종료
setInterval((): void => {
  if (i === 5) {
    console.log("종료!");
    // process.exit는 남은 작업을 기다리지 않음. 호출한 뒤에 실행이 이어지지 않음.
    process.exit(0);
  }
  console.log(i);
  i += 1;
}, 1000);

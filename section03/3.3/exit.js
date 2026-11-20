let i = 1;

// 1초마다 숫자를 출력, 다섯 번째 호출에서 프로세스를 종료
setInterval(() => {
  if (i === 5) {
    console.log("종료!");
    // 0은 정상 종료 코드. process.exit는 남은 작업을 기다리지 않음.
    process.exit();
  }
  console.log(i);
  i += 1;
}, 1000);

function countPrimes(from, to) {
  let count = 0;
  for (let value = Math.max(2, from); value <= to; value += 1) {
    let prime = true;
    // 제곱근에 해당하는 악수도 검사해야 완전제곱수를 제외할 수 있음
    for (let divisor = 2; divisor * divisor <= value; divisor += 1) {
      if (value % divisor === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      count += 1;
    }
  }
  return count;
}

function readMax() {
  const max = Number(process.argv[2] ?? "1000000");
  if (!Number.isSafeInteger(max) || max < 2 || max > 10_000_000) {
    throw new RangeError("최댓값은 2~10000000 사이 정수여야 한다.");
  }
  return max;
}

// 한 스레드에서 2부터 최댓값까지 소수를 새는 기준 예제
const max = readMax();
console.time("단일 스레드");
const count = countPrimes(2, max);
console.timeEnd("단일 스레드");
console.log("소수 개수:", count);

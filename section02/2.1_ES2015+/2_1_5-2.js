/* * 구조 분해 할당 (Destructuring Assignment)
 * 객체나 배열의 속성을 분해해서, 그 값을 변수에 담을 수 있게 하는 ES6 문법입니다.
 * 코드를 훨씬 간결하게 만들어줍니다.
 */
const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};

// ES5 방식 - 일일이 하나씩 접근
// 객체의 이름을 게속 반복해서 쓰고, 깊은 곳에 있는 값은 접근 경로가 길어진다.
// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// 2. ES6 방식 - 구조분해할당
// 문법: const { 변수명} = 겍체명;
const { 
  // candyMachine.getCandy를 가져와 'getCandy' 변수에 할당한다.
  getCandy, 
  // 중첩 구조 분해
  status: {count}
} = candyMachine;

// candyMachine 'status' 객체를 찾는다.
// 'status'객체 안의 'count' 속성을 찾아 변수 'count'에 할당한다.
// 'status'변수는 생성되지 않고, 'count'만 변수로 남는다.
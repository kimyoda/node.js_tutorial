/**
 * 문자열 보간 기능을 제공하여 변수 결합을 쉽게 만든다.
 * 
 * 템플릿 리터럴 방식
 * ${} 구문을 사용해 변수나 연산식을 문자열에 안에 직접 끼워 넣는다.
 * 띄어쓰기나 특수문자가 눈에 보이는 그대로 출력된다.
 */

const num3 = 1;
const num4 = 2;
const result2 = 3;
const string2 = `${num3} 더하기 ${num4}는 '${result2}'`;
console.log(string2); // 1 더하기 2는 '3'
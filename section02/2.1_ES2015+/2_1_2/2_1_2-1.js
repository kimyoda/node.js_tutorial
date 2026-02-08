/**
 * const: 값을 바꿀 수 없다(상수), 선언과 동시에 값을 넣어야 한다.
 * let: 값을 계속 바꾸 수 있다(변수), 선언만 먼저 해도 괜찮다.
 */

var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1); // 1 더하기 2는 '3'
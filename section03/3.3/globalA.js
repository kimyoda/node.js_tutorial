// 값을 복사해 내보내는 것이 아닌, 호출할 때 global.message를 읽음
module.exports = () => global.message;

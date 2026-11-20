// 전역 속성의 타입만 알려줌. 실제 값이 생성되지 않음
declare global {
  var message: string | undefined;
}

function readMessage(): string | undefined {
  // 아직 globalb에 값을 넣지 않으면 undefined
  return globalThis.message;
}

export = readMessage;

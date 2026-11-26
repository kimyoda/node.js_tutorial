// message는 모듈을 불러온 뒤 추가되어 선택 속성으로 선언

interface CacheData {
  name: string;
  message?: string;
}

const cache: CacheData = {
  name: "캐시",
};

// CommonJS의 Module.exports = cache에 대응
export = cache;

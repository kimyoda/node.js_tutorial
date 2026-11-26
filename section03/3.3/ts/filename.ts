export {};

const filename: string = __filename;
const directory: string = __dirname;

// 빌드 후 실행하면 ts/ 원본이 아니라 dist/의 실행 파일을 가리킴
console.log("파일:", filename);
console.log("폴더:", directory);
console.log("작업 폴더:", process.cwd());

// __filename은 현재 모듈 파일 절대 경로
console.log("파일:", __filename);

// __dirname은 현재 모듈 파일이 있는 폴더 절대 경로
console.log("폴더:", __dirname);

// 명령을 실행한 작업 폴더는 모듈이 있는 폴더와 다를 수 있음
console.log("작업 폴더:", process.cwd());

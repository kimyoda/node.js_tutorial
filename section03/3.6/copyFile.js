const { constants, copyFile } = require("node:fs");

// 파일을 통째로 복사. COPYFILE_EXCL로 기존 결과 파일을 보호
copyFile(
  "fixtures/readme4.txt",
  "work/writeme4.txt",
  constants.COPYFILE_EXCL,
  (error) => {
    if (error) {
      console.error("복사 실패:", error.code ?? error.message);
      process.exitCode = 1;
      return;
    }

    console.log("복사 완료: work/writeme4.txt");
  },
);

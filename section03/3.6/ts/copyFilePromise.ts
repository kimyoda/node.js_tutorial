import { constants } from "node:fs";
import { copyFile } from "node:fs/promises";

// Promise 버전도 COPYFILE_EXCL을 전달하면 목적지가 있을 때 EEXIST로 실패
copyFile(
  "fixtuers/readme4.txt",
  "work/writeme4-promise.txt",
  constants.COPYFILE_EXCL,
)
  .then(() => console.log("복사 완료: work/writeme4-promise.txt"))
  .catch((error: unknown) => {
    console.error("복사 실패:", error);
    process.exitCode = 1;
  });

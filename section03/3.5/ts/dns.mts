import * as dns from "node:dns/promises";

async function show(
  label: string,
  lookup: () => Promise<unknown>,
): Promise<void> {
  try {
    console.log(label, await lookup());
  } catch (error: unknown) {
    // 한 레코드가 없거나 서버가 요청을 거부해도 나머지 예제를 계속 실행
    console.error(
      label + "조회 실패:",
      error instanceof Error ? error.message : error,
    );
  }
}

const localOnly = process.argv.includes("--local");
const host = localOnly ? "localhost" : "gilbut.co.kr";

// Lookup은 운영체제 이름 해석 설정을 이용. family는 IPv4(4) 또는 IPv6(6)이다
await show("IP", () => dns.lookup(host));

// resolve 계열은 DNS 레코드를 실제로 조회. --local은 DNS 요청을 생략
if (!localOnly) {
  await show("A (IPv4)", () => dns.resolve4(host));
  await show("MX (메일)", () => dns.resolveMx(host));
  await show("CNAME (별칭)", () => dns.resolveCname("www." + host));
  // ANY가 모든 레코드를 보장하지는 않음. 서버에 따라 제한할 수 있음
  await show("ANY", () => dns.resolveAny(host));
}

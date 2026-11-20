export {};

/**
 * Map 자료구조
 *
 * Key - Value 형태로 데이터를 저장하는 자료구조이다.
 *
 * 일반 Object와 달리
 * string뿐 아니라 number, object 등도 Key로 사용할 수 있다.
 *
 * 데이터가 삽입된 순서도 유지된다.
 */

/**
 * Map의 타입
 *
 * Key:
 * string | number | object
 *
 * Value:
 * string
 */
const mixedKeyValueMap: Map<string | number | object, string> = new Map<
  string | number | object,
  string
>();

/**
 * 데이터 추가
 *
 * set(Key, Value)
 */

// 문자열 Key
mixedKeyValueMap.set("textKey", "문자열 Key의 값");

// 숫자 Key
mixedKeyValueMap.set(3, "숫자 Key의 값");

/**
 * 객체도 Map의 Key로 사용할 수 있다.
 */
const objectMapKey: object = {
  id: 1,
};

mixedKeyValueMap.set(objectMapKey, "객체 Key의 값");

/**
 * get(Key)
 *
 * 해당 Key에 저장된 값을 가져온다.
 *
 * Key가 존재하지 않을 수도 있으므로
 * 반환 타입은 string | undefined이다.
 */
const objectKeyStoredValue: string | undefined =
  mixedKeyValueMap.get(objectMapKey);

console.log(objectKeyStoredValue);

// 객체 Key의 값

/**
 * size
 *
 * Map에 저장되어 있는
 * Key-Value 쌍의 개수를 반환한다.
 */
console.log(mixedKeyValueMap.size);

// 3

/**
 * for ... of
 *
 * Map은 Iterable이기 때문에
 * for ... of로 직접 순회할 수 있다.
 *
 * [Key, Value] 형태로 값을 가져온다.
 */
for (const [mapKey, mapStoredValue] of mixedKeyValueMap) {
  console.log(mapKey, mapStoredValue);
}

/**
 * forEach()
 *
 * Map의 forEach 매개변수 순서는
 *
 * value
 * key
 *
 * 순서이다.
 */
mixedKeyValueMap.forEach(
  (mapStoredValue: string, mapKey: string | number | object): void => {
    console.log(mapKey, mapStoredValue);
  },
);

/**
 * has(Key)
 *
 * 해당 Key가 존재하는지 확인한다.
 */
const hasObjectKey: boolean = mixedKeyValueMap.has(objectMapKey);

console.log(hasObjectKey);

// true

/**
 * delete(Key)
 *
 * 해당 Key와 Value를 삭제한다.
 */
mixedKeyValueMap.delete(objectMapKey);

console.log(mixedKeyValueMap.has(objectMapKey));

// false

/**
 * clear()
 *
 * Map에 저장된 모든 데이터를 삭제한다.
 */
mixedKeyValueMap.clear();

console.log(mixedKeyValueMap.size);

// 0

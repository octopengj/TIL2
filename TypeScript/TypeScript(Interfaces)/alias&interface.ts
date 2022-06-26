// function
// type alias
type EatType = (food : string) => void;

// interface
interface IEat {
  (fodd: string): void;
}

// ---------------------------------

// array
// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}

// --------------------------------

// intersection
interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}
interface ArtistsData {
  artists: {name: string}[];
}
// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;

// interface
interface IArtistsResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let Iar: IArtistsResponse;

// ------------------------------

// union types
interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

interface IPet extends PetType {} // PetType 에러
// 에러코드: 인터페이스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 확장할 수 있습니다.
// 유니온 타입은 interface에 상속할 수 없다.

class Pet implements PetType {} // PetType 에러
// 에러코드: 클래스는 개체 형식 또는 정적으로 알려진 멤버가 포함된 개체 형식의 교집합만 구현할 수 있습니다.
// 유니온 타입은 class에 implements할수 없다.

// ---------------------------------------

// Declaration Merging - interface
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
mi. //mi. 을 하면 a와 b가 둘다 나온다
// MergingInterface 인터페이스 두개가 Merging 된다.

// ----------------------------------------

// Declaration Merging - alias
type MergingType = {
  a: string;
}
type MergingType = {  //MergingType에러
  // 에러코드: 'MerginType' 식별자가 중복되었습니다.
  b: string;
}
// alias는 merging이 안된다.

interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Kim',
  gender: 'male'
}

p81.gender = "female"; // gender에러 
//읽기 전용 속성이므로 'gender'에 할당할 수 없습니다.
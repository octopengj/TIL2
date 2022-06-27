/*
a반 b반 그룹을 만들고 성별을 작성할 때
a반에는 kim lee
b반에는 park choi
*/

class Student {
  [index: string]: 'male' | 'female';
}

const a = new Student();
a.kim = 'male';
a.lee = 'male';

const b= new Student();
b.park = "female";
b.choi = "female";

console.log(a);
console.log(b);

// Student { kim: 'male', lee: 'male' }
// Student { park: 'female', choi: 'female' }
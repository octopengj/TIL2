class Person6 {
  public static City = 'seoul';
  public static hello() {
    console.log('하이');
  }
}

const p7 = new Person6(); 
//p7.hello();

Person6.hello();
Person6.City;



// ---------------------------------------------------

class Person7 {
  private static City = 'seoul';
  public hello() {
    console.log('하이', Person7.City);
  }
  public change() {
    Person7.City = 'USA';
  }
}

const p8 = new Person7(); 
p8.hello();

const p9 = new Person7();
p9.hello();

p8.change();
p9.hello();

/*
하이
하이 seoul
하이 seoul
하이 USA
*/
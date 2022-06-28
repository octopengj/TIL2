  abstract class AbstractPerson {
  protected _name: string = 'Kim';

  abstract setName(name: string): void; 
}

// new AbstractPerson(); // 에러

class Person0 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p0 = new Person0();
class ClassName {
  private static instance: ClassName | null = null;
  public static getInstance(): ClassName {
    // ClassName으로부터 만든 object가 있으면 그것을 리턴
    // 없으면 만들어서 리턴
    if (ClassName.instance === null) {
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }

  private constructor() {}
}

const aa = ClassName.getInstance();
const bb = ClassName.getInstance();
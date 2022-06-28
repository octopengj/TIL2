function helloArray<T>(message: T[]): T {
  return message[0];
}

helloArray(['hello', 'world']);
// function helloArray<string>(message: string[]): string

helloArray(['hello', 10]);
// function helloArray<string | number>(message: (string | number)[]): string | number
// 유니온타입처럼 된다.

function helloTuple<T, K>(message: [T, K]): T {
  return message[0];
}

helloTuple(['hello', 'world']);
// function helloTuple<string, string>(message: [string, string]): string

helloTuple(['hello', 10]);
// function helloTuple<string, number>(message: [string, number]): string
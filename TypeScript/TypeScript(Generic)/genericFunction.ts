// type alias
type FunctionGeneric1 = <T>(message: T) => T;

const function1: FunctionGeneric1 = <T>(message: T): T => {
  return message;
};

// interface
interface FunctionGeneric2 {
  <T>(message: T): T;
}

const function2: FunctionGeneric2 = <T>(message: T): T => {
  return message;
}
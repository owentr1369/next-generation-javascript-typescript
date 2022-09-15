// const userName: string = "Max";

let age: number = 25;

age = 29;
var result;

const add = (a: number, b: number) => {
  result = a + b;
  return result;
};

const printOutput = (output: string | number) => {
  console.log(output);
};

const button = document.querySelector("button");

button?.addEventListener("click", (e) => {
  console.log(e);
});

printOutput(add(2, 4));

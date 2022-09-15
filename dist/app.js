"use strict";
// const userName: string = "Max";
// let age: number = 25;
// age = 29;
// var result;
// const add = (a: number, b: number) => {
//   result = a + b;
//   return result;
// };
const printOutput = (output) => {
    console.log(output);
};
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
    console.log(e);
});
// printOutput(add(2, 4));
const hobbies = ["Sport", "Cooking", "Gaming"];
const activeHobbies = ["Hiking", ...hobbies];
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);
const person = {
    firstName: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
// console.log(copiedPerson);
const add = (...numbers) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumber = add(5, 10, 2, 3.7);
// console.log(addedNumber);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// console.log(hobby1, hobby2, remainingHobbies);
// Sport Cooking ["Gaming"]
const { firstName: userName, age } = person;
console.log(userName, age, person);
// Max 30 {firstName: 'Max', age: 30}

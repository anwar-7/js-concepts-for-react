// 1. How to declare a variable using let and const---->
// const can not be reassign
const name = 'Hero Alom';
// console.log(name);

// let can be reassign multiple time
let age = 50;
// console.log(age);
age = 25;
// console.log(age);

// 2. conditions------------------------>
// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: &&, ||
const num1 = '10';
const num2 = 10;

if (num1 !== num2) {
  //   console.log('num1 is bigger', num1);
} else if (num1 === num2) {
  //   console.log('num2 is bigger', num2);
}

let season = 'rainy';
season = 'winter';
let season1 = 'summer';

// if (season === 'rainy') {
// //   console.log('season is ' + season);
// } else {
//   console.log('season is ' + season);
// }
// multiple conditions: &&, ||
// if (season === 'winter' && season1 === 'summer') {
//   console.log('season is ' + season + ' and ' + season1);
// } else {
//   console.log('season is....' + season);
// }

// 3. array declare ---------------->
// index,
// length, push,
// const mark = [20, 30, 35, 40, 50];

const passMark = 35;
// for loop
// for (let i = 0; i < mark.length; i++) {
//   const element = mark[i];
//   if (element > passMark) {
//     console.log('pass ' + element);
//   } else if (element < passMark) {
//     console.log('fail ' + element);
//   }
// }

// 5. function
const mark = [20, 30, 35, 40, 50];
function add(arrays) {
  //   const total = arrays[0] + arrays[1] + arrays[2];
  //   console.log(total);
  let total = 0;
  for (let i in arrays) {
    // console.log(i);
    total = arrays[i] + total;
    console.log(total);
  }
}

add(mark);

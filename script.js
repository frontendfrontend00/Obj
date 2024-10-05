"use strict";

// const obj = new Object(); старий спосіб

// const options = {
//   name: "Test",
//   width: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
// };

// delete options.name; - видаляє властивість в об'єкті
// console.log(options);

// Перебір об'єкта for in
// let counter = 0;
// for (let key in options) {
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(`Властивість ${i} має значення ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Властивість ${key} має значення ${options[key]}`);
//     counter++;
//   }
// }
// console.log(counter);
// [object Object] - строкове відображення об'єкта
// for of для об'єкта працювати не буде

// console.log(Object.keys(options).length);
// отримуємо масив Object.keys(options) і в ньому за
// допомогою length отримуємо кількість елементів

// правильно порахувати кількість властивостей об'єкта
// const obj1 = {
//   name: 23,
//   age: "dsgdsf",
//   stsus: true,
//   NoStat: function help() {
//     console.log("Hello world");
//   },
//   KUKU: [1, 2, 3, 0, 9, 8, 7],
//   obj: {
//     q: {
//       q: "333",
//       w: "444",
//     },
//     r: {
//       q: "333",
//       w: "444",
//     },
//     q: {
//       q: "322233",
//       w: "424",
//     },
//   },
// };
// console.log(Object.keys(obj1).length);

// Створюємо метод в об'єкті
const options = {
  name: "Test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    console.log("Test");
  },
};
options.makeTest();

const { border, bg } = options.colors;
console.log(border);
// в {} зміні які ми хочемо витянути після =
// з якого об'єкта витягуємо
// Деструктуризація об'єкта, щоб звернутися до
// вложених властивостей

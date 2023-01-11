// WHILE DONGULERI

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let i = 10;

// while (i > 0) {
//   console.log(i);
//   i -= 2;
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   if (i == 6) {
//     break;
//   }

//   i++;
// }

//for

const langs = ["python", "javascript", "Java"];
// console.log(langs.length);
// console.log(langs[2]);

// let index = 0;

// while (index < langs.length) {
//   console.log(langs[index]);
//   index++;
// }

// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

const users = [
  { name: "John", age: 40 },
  { name: "Ali", age: 30 },
  { name: "Zeynep", age: 20 },
];

const names = users.map(function (user) {
  return user.name;
});
console.log(names);

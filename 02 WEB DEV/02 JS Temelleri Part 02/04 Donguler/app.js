// While Donguleri

// let i = 0;

// while (i < 10) {
//   // Sonsuz Dongu
//   console.log(i); // console 0'dan 9'a kadar yazdirir

//   i += 1;
//   // i = i + 1;
//   // i++
// }

// let a = 10;

// while (a > 0) {
//   console.log(a);
//   a -= 2; // 2 azalatarak
// }

// Breakl ve Continue

// let k = 0;

// while (k < 10) {
//   console.log(k);
//   if (k == 5) {
//     break;
//   } // break anahtar kelimesi donguyu sonlandirir;
//   k += 1;
// }

// let b = 0;

// while (b < 10) {
//   // continue paramatresi Sonsuz Donguye sokabilir
//   if (b == 3 || b == 5) {
//     // 3 ve 5 e geldiginde continue devreye giriyor ve islem alt satirdaki console.log kismina gelemedigi icin 3 ve 5 rakamlari yazdirilamiyor.
//     b += 1;
//     continue;
//   }
//   console.log(b);
//   b += 1;
// }

// DO WHILE DONGULERI

// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// for donguleri

// const langs = ["Pyhton", "JavaScript", "Java"];

// let index = 0;

// while (index < langs.length) {
//   console.log(langs[index]);
//   index++;
// }

// const langs = ["Pyhton", "JavaScript", "Java"];

// // let index = 0;

// // while (index < langs.length) {
// //   console.log(langs[index]);
// //   index++;
// // }
// for (let index = 0; index < langs.length; index++) {
//   console.log(langs[index]);
// }

// For Each

// const langs = ["Pyhton", "JavaScript", "Java"];
// langs.forEach(function (lang, index) {
//   console.log(lang, index);
// });

//map fonksiyonu

// const users = [
//   { name: "Levent", age: 37 },
//   { name: "Seda", age: 36 },
//   { name: "Nihal", age: 40 },
// ];

// const names = users.map(function (user) {
//   return user.name;
// });
// const ages = users.map(function (user) {
//   return user.age;
// });

// console.log(names);
// console.log(ages);

// for in dongusu

const user = {
  name: "Levent",
  Age: 37,
};
for (let key in user) {
  console.log(key, user[key]);
}

// Window Object

let value;

value = document;
value = document.all;
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length - 1];

const elements = document.all;

// for (let i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// elements.forEach(function (elements) {
//   console.log(elements);
// }); //Kullanamayiz

const collections = Array.from(document.all);

console.log(elements);

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
// }); //Kullanamayiz ilk basta array'e cevirmemiz lazim

// const collections = Array.from(document.all);

// collections.forEach(function (collection) {
//   console.log(collection);
// });

value = document.all[8];
value = document.body;
value = document.head;
value = document.location;
value = document.location.hostname;
value = document.location.port;

value = document.URL;
value = document.characterSet;

console.log(value);

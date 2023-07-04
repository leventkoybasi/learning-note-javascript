// Arrow Function Kullanimi
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// () => {} // Suslu parantez icerisinde birden fazla islem yapilabilir
// () => ... // tek islem icin suslu parantez acmaya gerek yok

function helloFunction(name) {
  console.log(name);
}
helloFunction("Levent"); //levent

// Yukaridaki fonksiyonu arrow fonkiyona cevirelim

//const fonksiyonIsmi = (parametre) => {"yapilacak islemler";};

const arrowFunction = (name) => {
  console.log(name);
};
arrowFunction("seda"); //seda

const arrowFunctionV2 = (name) => console.log(name);
arrowFunctionV2("ayse"); //ayse

const arrowFunctionV3 = (name) => console.log(name);
arrowFunctionV3("veysi"); //veysi

const arrowFunctionV4 = (firstName, lastName) =>
  console.log(firstName, lastName);
arrowFunctionV4("levent", "koybasi"); //levent koybasi

const arrowFunctionV5 = (firstName, lastName) => {
  console.log(firstName, lastName);
};

arrowFunctionV5("levent", "koybasi");

const multiply_with_returnV2 = (num1, num2) => num1 * num2;

//Objeler {} baslar ve icerisindeki bilgileri bazen Arrow Function ile gonderebiliriz...

// Arrow Function ile Obje Donmek
const userNameObj = (user) => {
  return { userName: user.toUpperCase() };
};

const userNameObjV2 = (user) => ({ userName: user.toUpperCase() });

const returnUserName = userNameObj("Lorem");
const returnUserNameV2 = userNameObjV2("Ipsum");
console.log(returnUserName); //{userName: 'LOREM'}
console.log(returnUserNameV2); //{userName: 'IPSUM'}

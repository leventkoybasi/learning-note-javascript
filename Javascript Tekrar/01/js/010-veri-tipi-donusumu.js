let isActive = true;
let firstName = "Levent";
let year = 2023;
console.log("isActive: ", isActive, typeof isActive); //isActive: true boolean
console.log("firstName: ", firstName, typeof firstName); //firstName: Levent string
console.log("year: ", year, typeof year); //year: 2023 number
console.log("yer bilgisi number mi?", typeof year === "number"); //yer bilgisi number mi? true

let age = 20;
let addToAge = "1";
console.log("age + addToAge: ", age + addToAge); //201
console.log("age + addToAge: ", age + Number(addToAge)); //21

//String bir bilgiyio parse ediyoruz
console.log(addToAge, parseInt(addToAge));
console.log(typeof addToAge, typeof parseInt(addToAge));
//Stringe cevirme
console.log("type of :", typeof String(age), String(age)); //string 20
console.log("type of :", typeof age.toString(), age.toString()); // string 20

console.log(typeof age, age); //number 20
//Number'a Cevirme
console.log("type of : ", typeof Number(addToAge), Number(addToAge));
console.log("type of : ", typeof Number(addToAge), Number(addToAge));

//parseInt (atristirma)
let tryParseInt = "123abc";
let tryParseInt2 = "abc123";
let tryParseInt3 = "11.22abc";
console.log("parseInt : ", parseInt(tryParseInt)); //123
console.log("parseInt : ", parseInt(tryParseInt2)); // NaN ilk rakam olmali rakamlari ayirir.

//parseFloat (atristirma)

console.log("parseInt : ", parseInt(tryParseInt3)); //11
console.log("parseFloat : ", parseFloat(tryParseInt3)); //11.22

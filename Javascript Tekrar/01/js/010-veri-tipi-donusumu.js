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
console.log("age + addToAge: ", age + toNumber(addToAge)); //21

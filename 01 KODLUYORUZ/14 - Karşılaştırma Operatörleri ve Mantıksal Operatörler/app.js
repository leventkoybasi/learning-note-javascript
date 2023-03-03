// 14 - Karşılaştırma Operatörleri ve Mantıksal Operatörler
let price = "100";
let user = "guest";

// Esitse ==
console.log(price == 1); // false
console.log(price == 100); // true

// === Hem Degeri Hemde Turu Esitse
console.log(price === 100); // false
console.log(price === "100"); // true

// != Esit Degilse
console.log(user != "guest"); // false

// Kucukse <
console.log(price < 100); // false
console.log(price < 1000); // true

//Kucuk veya Esitse (Kucukesitse) <=
console.log(price <= 100); //True
console.log(price <= 99); //False

//Buyukse >
console.log(price > 99); //true
console.log(price > 100); //false

//Buyuk veya Esitse (Buyukesitse) >=
console.log(price >= 100); //true
console.log(price >= 101); //false

// && ve (and)
price = 0;
console.log(price > 0 && user != "guest"); //false

// || veya (or)
console.log(price > 0 || user != "guest"); //false
// ! Degil (Tersi)
console.log(price > 0 || user != "guest"); //false
console.log(price > 0 || !user == "guest"); //false

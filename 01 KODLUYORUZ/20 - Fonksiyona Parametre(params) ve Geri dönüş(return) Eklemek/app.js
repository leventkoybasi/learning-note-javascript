// 20 - Fonksiyona Parametre(params) ve Geri dönüş(return) Eklemek

//Temel Kurallar
// 1 - Bir fonksiyon bir veya birden fazla parametre alabilir. Veya hic almayabilir.
// 2 - Bir fonksiyon disariya bilgi gonderebilir(return) veya gondermeyebilir.
// 3 - Mumkun ise fonksiyorn bagimliliklarini azaltmak gerekir.

let firstName = "Levent";

function greetings(firstName = "") {
  console.log(`Merhaba ${firstName}`);
} //default parametre alir

console.log(firstName); //degisken
greetings(); // fonksiyona parametre gondermedik ?? //Merhaba doner
greetings("Parametre"); // Merhaba Parametre doner

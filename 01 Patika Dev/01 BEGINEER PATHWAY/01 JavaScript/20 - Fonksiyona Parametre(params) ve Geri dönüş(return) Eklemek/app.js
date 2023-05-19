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

function greetings2(firstNAme, lastName) {
  let info = `Merhaba ${firstNAme} ${lastName}`;
  return info;
}

let greetingsInfo = greetings2("Ad", "Soyad");
// let info = "Deneme" //???
console.log(greetingsInfo);

function domIdWriteInfo(id, info) {
  let domObject = document.querySelector(`#${id}`);
  domObject.innerHTML = info;
}

let htmlInfo = `<span style="color:red">RED COLOR</span>`;
domIdWriteInfo("greeting", htmlInfo);
domIdWriteInfo("info", greetings2("Lorem", "Ipsum"));
/*************************************************************/

function toplama(sayi1, sayi2) {
  let sonuc = sayi1 + sayi2;
  console.log(sonuc);
}
toplama(Number(prompt()), Number(prompt()));

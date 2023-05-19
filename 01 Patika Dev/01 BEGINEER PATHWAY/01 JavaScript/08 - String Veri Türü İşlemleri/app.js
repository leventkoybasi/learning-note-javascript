//08 - String Veri Türü İşlemleri

let email = "leventkoybasi@hotmail.com";
let firstName = "levent";
let lastName = "KOYBASI";

//string karakter sayisi length
console.log(email.length); // 25

// Ilk karakteri bulmak [0]
console.log(email[0]);
console.log(email.charAt(0));
//Buyuk harf  - Kucuk Harf
firstName = firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);

//String icinde istedigimiz bilgiyi aramak ve yerini bulmak search
console.log(email.search("@"));
console.log(email.search("#")); // olmayan bisey varsa -1 doner
console.log(email[13]);

//belirli bir yere kadar al slice (domain bilgisi alma)

//let DOMAIN = email.slice(13); // 132. karakter oldugunu bilmiyoruz o yuzden bu kullanim dogru olmaz
let DOMAIN = email.slice(email.search("@") + 1);

console.log(DOMAIN);
let DOMAIN_NAME = DOMAIN.slice(0, DOMAIN.indexOf(".")); // sadece hotmail kismini aldik
console.log(DOMAIN_NAME);
//bilgiyi degistir replace

let kodluyoruzEmail = email.replace("hotmail.com", "kodluyoruz.org");
console.log(kodluyoruzEmail);

// istedigim bilgi var mi? includes

console.log(email.includes("@")); // true
console.log(email.includes("#")); // false

//istedigim bilgi ile basladi mi ? bitti mi ? startsWidth, endWidth

console.log(email.endsWith("kodluyoruz.org")); //false
console.log(kodluyoruzEmail.endsWith("kodluyoruz.org")); //true

//Ilk harflerini buyuk yapmak
let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;
console.log(fullName);

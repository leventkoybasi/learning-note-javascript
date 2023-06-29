//Yazim Stilleri - Genelde Camel Case Kullanilir
// camelCase buSekildedir :)

//Degisken tanimla
var firstName = "Levent"; //camelCase kullailir var degisken tanimlama artik kullanilmiyor.
console.log(firstName);
let lastName = "Koybasi"; //
console.log(lastName);
const NICK_NAME = "Lancer"; //sabir anlami tasir, Degisken degismeyecekse buyuk harf ile tanimlanir ve const degisken bilginin degismeyecegini tanimlar. Const ile bir defa tanmlanabilir.
console.log(NICK_NAME);

//degisken ismi rakamla baslayamaz
// let 1user = "levent";
// let user1 = "levent"; /dgru kullanim

const PASSWORD = "12345";
console.log(PASSWORD);

{
  const PASSWORD = "abcde";
  console.log("Blok Icindeki Pasword Bilgisi : ", PASSWORD);
  //Blok icerisi ayri bir dunya, bu yuzden blok icerisindeki tanimla ve disarisindaki tanimlama ayni olmadigi icin const ile tanimlayabildik.
}

hasPassword = true;
isActive = false;
// boolean var veya yok 0-1 doner. has ve is gordugumuz zaman boolean oldugunu anlariz bu tanimlama bize bilgi doner.
console.log(hasPassword); //true doner //1
console.log(isActive); //false doner //0

let user;

console.log(user); //undefined
console.log("Boolean(user)", Boolean(user)); //false
console.log(Boolean("")); //false
console.log(Boolean("admin"));
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean(0.1)); //true

//Sayilar ile calismak
let price = 100;
console.log("price : ", price); //price: 100

console.log(100 + 200); //300

console.log(price + 1000); //1100
console.log(price + 1000); //1100
console.log("price" + price); //price100
price = 1000;
console.log(price); //1000

price = 100;
price = price + 1000;
console.log(price); //1100

price = 100;
price += 1000;
console.log(price); //1100

price++;
console.log(price); //1101

price++;
console.log(price); //1102

let count = 0;

count++;
console.log(count); //1

count++;
console.log(count); //2

count++;
console.log(count); //3

count--;
console.log(count); //2

count += 100;
console.log(count); //102

count -= 10;
console.log(count); //92

count *= 2;
console.log(count); //184

count /= 4;
console.log(count); //46

const tax = 0.18;
console.log(price);
const totalPrice = price + price * tax;

console.log("totalPrice : ", totalPrice);

let userId = 37;

//mod alma
console.log(userId / 2); //18.5
console.log("Tek Mi Cift Mi:", userId % 2); //1 //Mod alma Bolumden Elde Edilen Kalan

//Us Alma

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
console.log("Tek Mi Cift Mi:", userId % 2); //1 // % Mod alma islemi  //Mod alma Bolumden Elde Edilen Kalan

const boxSize = 8;
let items = 29;

console.log("Son Kolide Kac Adet Urun Var : ", items % boxSize); // 5
console.log(
  "son Koliye Kac Adet Daha Urun Eklenmeli : ",
  boxSize - (items % boxSize)
); //3

//Us Alma
console.log(3 * 3 * 3 * 3); //81
console.log(3 ** 4); //81 // iki yildiz ust alma islemi

//Asagi Yuvarlama
console.log(Math.floor(3.9)); //3

//Yuklari Yuvarlama
console.log(Math.ceil(3.3)); //4

//Yakina Yuvarlama
console.log(Math.round(3.4)); //3
console.log(Math.round(3.6)); //4

//String ile Calismak
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let firstName2 = "Levent"; //Yukarida bu degtiskenleri kullandigimiz icin 2 yazmak zorunda kaldim.
let lastName2 = "KOYBASI";
let training = `Template Literal JS`;

console.log(firstName2 + lastName2); // LeventKOYBASI //Arada boslik birakmaz...
console.log(firstName2 + " " + lastName2); // Levent KOYBASI //Arada boslugu bu sekilde birakiyoruz

//string length
console.log("firstName2.length : ", firstName2.length); //6
console.log(`training.length: ${training.length}`); //18 //Template Literal Kullanimi

console.log(firstName2[0]); //L //firstname2 ilk karakteri
console.log(firstName2.charAt(0)); //L // charAt() bir fonksiyon o yuzden normal parantez.

console.log(firstName2.toLocaleLowerCase()); //levent
console.log(firstName2.toUpperCase()); //LEVENT

console.log(training.search("Lorem")); //-1
console.log(training.search("Template")); //0
console.log(training.search("Lit")); //9 //Yerini gosteriyor baslangic dizilerde 0

console.log(training.indexOf("Lorem")); //-1
console.log(training.indexOf("Lit")); //9

const adminMail = "admin@js.com";

// user: admin, domain: js.com

const domainStart = adminMail.search("@");
console.log(domainStart); //5

console.log(adminMail.slice("6")); //^dan baslayacagimizi bilmiyoruz bunu asagidaki ordenkteki gibi buluruz
console.log(adminMail.slice(adminMail.search("@") + 1)); //js.com

const domainName = adminMail.slice(adminMail.search("@") + 1);
const userName = adminMail.slice(0, adminMail.search("@"));

console.log(domainName); //js.com
console.log(userName); //admin

training.replace("js", "javascript");
training = training.replace("JS", "javascript");
console.log(training); //Template Literal JS //Olmadi sunku sonucu esitlemedik
console.log(training); //Template Literal javascript // Esitledigimiz icin oldu

//Ismin Title Sekilde Olusturulmasi

console.log(firstName2[0].toUpperCase()); //L

console.log(
  firstName2[0].toUpperCase() + firstName2.slice(1) + " " + lastName2
);

//Template Litarel Kullanilmasi
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let firstName3 = "lEvENt";
let lastName3 = "kOyBaSi";
let age = 35;
let info = `${firstName3} ${lastName3}`;
console.log(info); //lEvENt kOyBaSi

info = `Merhaba ${firstName2[0].toUpperCase()}${firstName2
  .toLowerCase()
  .slice(1)} ${lastName2[0].toUpperCase()}${lastName2
  .toLowerCase()
  .slice(1)} GElecek Sene Yasin 
  ${age + 1} Olacak...`;
console.log(info);

//Veri Turleri

let isActive2 = true;
let firstName4 = "Mahmut";
let year = 2023;

console.log("isActive2 : ", isActive2, typeof isActive2); //isActive2 :  true boolean
console.log("firstName4 : ", firstName4, typeof firstName4); //firstName4 :  Mahmut string
console.log("year : ", year, typeof year); //year :  2023 number

let addToAge = "11abc";
let result = age + addToAge;

console.log("age + addToAge : ", result); //age + addToAge :  3511abc
console.log("typeof(age) : ", typeof age); //typeof(age) :  number
console.log("typeof(addToAge) : ", typeof addToAge); //typeof(addToAge) :  string
console.log("typeof(result) : ", typeof result); //typeof(result) :  string

//String Icindeki Bilgiyi Parse Etmeye Calisiyoruz.
console.log(typeof addToAge, typeof parseInt(addToAge)); //string number
console.log(addToAge, parseInt(addToAge)); //11abc 11

result = age + parseInt(addToAge);
console.log("age + addToAge : ", result); //age + addToAge :  46

console.log(Number(1)); //1
console.log(Number(111)); //111
console.log(Number("111")); //111
console.log(Number("111abc")); //NaN

//Basinda sayi olan ifadeleri parse etmek icin ayristirmak icin parseInt kullaniriz. Digerlerinde Number kullanilabilir.
console.log(parseInt("111abc")); //111

// parseFloat ile virgullu sayilari alabiliriz.

let strResult = result.tos;

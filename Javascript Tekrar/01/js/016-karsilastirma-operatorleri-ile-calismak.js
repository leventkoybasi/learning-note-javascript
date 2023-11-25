const sysPassword = 123456;

// const userPasswordPrompt = prompt("Lutfen Kullanici Sifrenizi Giriniz...");

// console.log("User Prompt :", userPasswordPrompt);

const userPassword = "123456";

console.log(sysPassword == userPassword);
console.log(typeof sysPassword == typeof userPassword);

const superUser = "admin";
console.log("Normal Kullanici Mi? :", superUser != "Levent"); // true

const year = 2000;

console.log("Year 2000'den Buyuk Mu?", 2010 > year); //true
console.log("Year 2000'den Buyuk Mu?", 1980 > year); //true
console.log("Year 2000'den Kucuk Mu?", 2010 < year); //false

const ageLimit = 18;
const userAge = 18;

console.log("Kullanici Sisteme Girebilir mi?", userAge > ageLimit); //false
console.log("Kullanici Sisteme Girebilir mi?", userAge >= ageLimit); //true

// > < >= <=

const userName = "Mine";
const userPassword2 = "123456";
console.log(
  "User bilgisi 3 karakterden buyuk mu ve password bilghisi var mi? ",
  userName.length > 3 && userPassword2
);
console.log(
  "User bilgisi 3 karakterden buyuk mu veya password bilghisi var mi? ",
  userName.length > 3 || userPassword2
);

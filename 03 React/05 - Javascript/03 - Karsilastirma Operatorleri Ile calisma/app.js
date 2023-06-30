//Kullanicinin bilmedigi sistemdeki password bilgisi

const sysPassword = 123456; //number
const userPassword = "123456"; //string

console.log("Sifre Dogru Mu: ", sysPassword == userPassword); //true

console.log("type of :", typeof sysPassword == typeof userPassword); //false

console.log("Sifre ve Veri Tipi Dogru Mu :", sysPassword === userPassword); //false

const user = "admin";
console.log("Normal Kullanici Mi : ", user != "normalUser"); //true

const year = 2000;
console.log("Year Bilgisi 2000'den Buyuk Mu? : ", 2010 > year); //true

console.log("Year Bilgisi 2000'den Buyuk Mu? : ", 1980 > year); //false
console.log("Year Bilgisi 2000'den Buyuk Mu? : ", 1980 < year); //true

const ageLimit = 18;
const userAge = 18;
console.log("Kullanici Sisteme Giorebilir MI? :", userAge >= ageLimit); //true

// and && ve or || Operatorleri

const userName = "Mine";
console.log(
  "User bilgisi 3 karakterden fazla mi ve password var mi? : ",
  userName.length > 3 && userPassword
); //
console.log(
  "User bilgisi 3 karakterden fazla mi veya password var mi? : ",
  userName.length > 3 || userPassword
); // true

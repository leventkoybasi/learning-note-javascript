//Kullanicinin bilmedigi sistemdeki password bilgisi

const sysPassword = 123456; //number
const userPassword = "123456"; //string

console.log("Sifre Dogru Mu: ", sysPassword == userPassword); //true

console.log("type of :", typeof sysPassword == typeof userPassword); //false

console.log("Sifre ve Veri Tipi Dogru Mu :", sysPassword === userPassword); //false

const user = "admin";
console.log("Normal Kullanici Mi : ", user != "normalUser"); //true

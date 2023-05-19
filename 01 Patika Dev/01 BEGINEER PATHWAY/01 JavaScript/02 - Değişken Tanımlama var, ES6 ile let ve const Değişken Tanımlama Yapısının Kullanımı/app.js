// Let ve Cons ile Degisken Tanimlama

// var ile degisken tanimlama

var serverName = "api.kodluyoruz.org";

console.log(serverName);

// let ile degiskeni bos tanimlamak

let serverName2;
console.log(serverName2);

//let ile degiskene bilgi aktarmak
serverName2 = "https://kodluyoruz.org";
console.log(serverName2);

// let ile degiskene bilgi atayarak tanimlamak

let password = "12345";
console.log(password);

// //degisken atamasi yapmadan once kullanmaya calsimak
// console.log(fullName);
// let fullName = "Levent KOYBASI"; //Hatali Kullanim

let fullName2 = "Levent KOYBASI";
console.log(fullName2);

// const ile degiskeni bos tanimlamaya calsimak

let fullName3 = "Lorem Ipsum Dolor";
console.log(fullName3);

// Birlestirme veya Ekleme Islemi
// fullName3 = fullName3 + " Yeni EKlenen Bilgi"; //Asagidaki ile ayni
fullName3 += " Yeni EKlenen Bilgi";
fullName3 = "Ikinci Bilgi " + fullName3;
console.log(fullName3);

// const ile degisken tanimlamak
// const serverPassword; //Ici bos degisken tanimlayamayiz.
const SERVER_PASSWORD = "12345";
console.log(SERVER_PASSWORD); // Tekrardan tanimlama yapilmaz, const ile tek seferde bilgi tanimlariz ve degismez.

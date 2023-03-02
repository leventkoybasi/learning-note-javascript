//05 - Boolean Veri Türü İle Çalışmak

// 0 ve 1 'i anlamak
let isActive = false; // 0
isActive = true; // 1
console.log(isActive); //true

let userName;
let isUserName = Boolean(userName);
console.log(isUserName); //false

userName = "user";

Boolean("11"); // true
Boolean("0"); // true
Boolean(""); // false // Degiskenin icinde bilgi var ise true dooner yoksa false doner

// 0, -0, null, false, NaN, undefined, ("") -->
Boolean(0); //false
Boolean(-0); //false
Boolean(-0.1); //true
Boolean(0 === 0); // true

Boolean(userName.length > 0); //true

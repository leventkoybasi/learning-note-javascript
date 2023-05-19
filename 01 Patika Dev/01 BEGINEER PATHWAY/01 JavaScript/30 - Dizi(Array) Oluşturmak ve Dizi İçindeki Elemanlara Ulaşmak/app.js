//30 - Dizi(Array) Oluşturmak ve Dizi İçindeki Elemanlara Ulaşmak
// array - dizilerle calismak

// array olusturmak
let domain = "kodluyoruz";
let isActive = false;
let items = [15, 25, 35, isActive, domain];
console.log(items);

let emtyArray = [];
// array icerisindeki eleman/oge sayisini ogrenmek
console.log(items.length);
// document.querySelector("#info").innerHTML = items.length;

// array icerisindeki ilk elemanin cagrilmasi
console.log(items[0]);
// array icerisindeki son elemanin cagrilmasi
console.log(items[items.length - 1]);
// array icerisindeki ortadaki elemanin cagrilmasi
console.log(items[Math.floor(items.length / 2)]);
// degisken icindeki bilginin array olup lolmadiginin kontrol edilmesi
console.log(typeof items); //object
console.log(Array.isArray(items)); //true

//Hangileri isArray -> true verir?
console.log("[] : ", Array.isArray([])); // true
console.log("1 : ", Array.isArray(1)); // false
console.log("true : ", Array.isArray(true)); // false

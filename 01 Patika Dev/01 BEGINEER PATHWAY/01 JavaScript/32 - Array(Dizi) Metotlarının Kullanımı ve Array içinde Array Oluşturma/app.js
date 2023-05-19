// 32 - Array(Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

// https://www.w3schools.com/jsref/jsref_obj_array.asp

let items = [1, 2, 3, 4, 5];

//Aray icinde array:
let femaleUser = ["Ayse", "Hulya", "Merve"];
let maleUser = ["Ahmet", "Hasan", "Mehmet"];

items.unshift(femaleUser);
console.log(items); //(6) [Array(3), 1, 2, 3, 4, 5]

items.push(maleUser);
console.log(items); //(7) [Array(3), 1, 2, 3, 4, 5, Array(3)]
console.log(items.length); //7 //EKledigimiz yeni arrayler 1 olarak eklenir.
console.log(items[0]); //(3) ['Ayse', 'Hulya', 'Merve']
console.log(items[0][0]); //Ayse
console.log(items[0]["length"]); //3
console.log(items[0].length); //3

//Aray icerisinden oge ayirmak -> splice(pos, item?)
console.log(items); //(7) [Array(3), 1, 2, 3, 4, 5, Array(3)]
let newItems = items.splice(1, 5);
console.log("newItems : ", newItems); //newItems: (5)[(1, 2, 3, 4, 5)];
console.log("items : ", items); //items :  (2) [Array(3), Array(3)]

//Aray icerisindeki ogenin index bilgisini bulmak -> indexOf("value")
items.unshift("lorem");
items.push("ipsum");
console.log(items); // (4) ['lorem', Array(3), Array(3), 'ipsum']
console.log(items.indexOf("ipsum")); //3 // 3. indexin icerisindeymis

// Array kopyalamak -> slice [... ES6]
let copyItems = items;
console.log(items); //(4) ['lorem', Array(3), Array(3), 'ipsum']

copyItems.pop(); //son ogeyi cikarttik
console.log("copyItems : ", copyItems); // copyItems :  (3) ['lorem', Array(3), Array(3)]
console.log("items : ", items); // items :  (3) ['lorem', Array(3), Array(3)]
// ( let copyItems = items; iki degiskeni esitlemek kopyalama yapmak anlamina gelmez. Esitlemeden sonra yapilan degisiklikler her iki array'e de ayni sekilde yansiz. Biz arrayleri slice komutu ile kopyalariz. Bu komut kullanilarak yapilan kopyalama isleminde bir array.de yapilan degisiklik digerine yansimaz!!! )

copyItems = items.slice(); // kopyalama yapti
copyItems.pop(); //son ogeyi cikarttik
console.log("copyItems : ", copyItems); // copyItems :  (2) ['lorem', Array(3)]
console.log("items : ", items); // (3) ['lorem', Array(3), Array(3)]
// Goruldugu gibi slice yontemi ile yapilan kopyalama isleminde yapilan degisikliler sadece degisiklik yapilan array'de etkili

//Iki aray bilgisini birlestirmek -> [...ES6, ...ES6] .concat()

let es6Items = [...items]; // es6 ve sonrasinda gelen kopyalama islemi, slice komutu ile ayni gorevi yapar
console.log(es6Items); // (3) ['lorem', Array(3), Array(3)]

let allUsers = [...femaleUser, ...maleUser];
console.log(allUsers); // (6) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet']

let allUsers2 = femaleUser.concat(maleUser);
console.log(allUsers2);

// es6 aray yapisni birlestirme

//Aray icerisindeki bilgiyi String'e cevirmek -> toString, join

console.log(allUsers.toString()); // Ayse,Hulya,Merve,Ahmet,Hasan,Mehmet
console.log(allUsers.join(" --- ")); // Ayse --- Hulya --- Merve --- Ahmet --- Hasan --- Mehmet
// Join ile icerisine attigim bilgi ile birlestirme yapabiliyoruz

//Istedigimiz Index Bilgisine Oge EKlemek -> splice(index, 0 , value)
allUsers.splice(allUsers.length, 0, "Melisa"); // Sona ekleme
console.log(allUsers); // (7) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet', 'Melisa']

allUsers.splice(allUsers.length - 1, 0, "Seda"); // Sondan bir onceye ekleme
console.log(allUsers); // (8) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Hasan', 'Mehmet', 'Seda', 'Melisa']

allUsers.splice(Math.floor(allUsers.length / 2), 0, "Ece"); // Ortaya ekleme
console.log(allUsers); // (9) ['Ayse', 'Hulya', 'Merve', 'Ahmet', 'Ece', 'Hasan', 'Mehmet', 'Seda', 'Melisa']

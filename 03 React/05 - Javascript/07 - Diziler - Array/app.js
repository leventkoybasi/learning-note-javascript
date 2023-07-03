// Array - Diziler
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const users = [999, 2999, 3999, false, true, null, [4, 5, 6], "Deniz", "Derya"];

console.log("users : ", users); //(9) [1, 2, 3, false, true, null, Array(3), 'Deniz', 'Derya']
console.log("users.length : ", users.length); //9

const otherUsers = [];
console.log("otherUsers.length : ", otherUsers.length); //0

const tech = Array();
console.log("tech.length : ", tech.length); //0

const tech2 = new Array(100);
console.log("tech2.length : ", tech2.length); //100 //Bos 100 array oluisturuldu.

// ul>li*100 dedigimizde 100 adet bos li olusturuyiorduk. Burada ise Array(100) dedigimiz zaman 100 adet bos array olusturuyoruz. Ileride react tarafinda cok kullanacagiz.

const todo = new Array("item1", "item2");
console.log("todo : ", todo); //(2) ['item1', 'item2']
console.log("Tip Bil;gisine Bakalim : ", typeof users); //object
console.log("{} Obj -> Type Bilgisi Nedir : ", typeof {}); //object
console.log("Aray Misin :) :", Array.isArray(users)); //true

console.log(users[0], users[3], users[7]); //999 false 'Deniz'
console.log(users[users.length - 1]); //Derya //Son Ogeye Erismek //Onemli
console.log(users[users.length - 2]); //Deniz //Sondan bir onceki ogeye erismek

//Yeni Oge Eklemek
//Sona !

users.push("levent");
console.log(users); //(10) [999, 2999, 3999, false, true, null, Array(3), 'Deniz', 'Derya', 'levent']

//Basa Eklmek
users.unshift("seda");
console.log(users); //(11) ['seda', 999, 2999, 3999, false, true, null, Array(3), 'Deniz', 'Derya', 'levent']

//Bilgiyi Degistirmek

console.log(users[3]); //3999
users[3] = "new info";
console.log(users[3]); //'new info'

//Bir Ogeyi Silmek
//Sondaki ! .pop();
console.log(users); //(11) ['seda', 999, 2999, 'new info', false, true, null, Array(3), 'Deniz', 'Derya', 'levent']
const popItem = users.pop(); //Sondaki Ogeyi Disari Atar //popItem olarak tanimlamamizin sebebi sonradan attigimiz oger ile islem yapabilmektir.

console.log(users); //(10) ['seda', 999, 2999, 'new info', false, true, null, Array(3), 'Deniz', 'Derya']

console.log(popItem); //levent // Attigimiz Elemani Yakaldik Esitleme saysesinde

//Bastaki .shift();
console.log(users); //(10) ['seda', 999, 2999, 'new info', false, true, null, Array(3), 'Deniz', 'Derya']
const firstItem = users.shift();
console.log(users); //(9) [999, 2999, 'new info', false, true, null, Array(3), 'Deniz', 'Derya']
console.log(firstItem); //seda

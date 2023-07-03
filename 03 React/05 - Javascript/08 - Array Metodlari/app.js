//Aray Metodlari
//https://www.w3schools.com/js/js_array_methods.asp
/*
Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size); // Output: 4

Array toString()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let itemToString = fruits.toString();
console.log(itemToString);//Output: Banana,Orange,Apple,Mango

Array join()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let ItemJoin = fruits.join(" - ");
console.log(ItemJoin);//Output: Banana - Orange - Apple - Mango

Array pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let popFruit = fruits.pop();
console.log(fruits);//Output: Banana, Orange, Apple
console.log(popFruit);//Output: Mango

Array push()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let pushFruit = fruits.push("Kiwi");
console.log(fruits);//Output: Banana, Orange, Apple, Mango, Kiwi
console.log(pushFruit);//5

Array shift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let shiftFruit = fruits.shift();
console.log(fruits);//Output: Orange, Apple, Mango
console.log(shiftFruit);//"Banana"


Array unshift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);//["Lemon","Banana","Orange","Apple","Mango

Array delete()

Array concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);//Output: Cecilie,Lone,Emil,Tobias,Linus

Array flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);// 1,2,3,4,5,6

Array splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);//Output: Banana,Orange,Lemon,Kiwi,Apple,Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);//Output: [Orange,"Apple","Mango"]

Array slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus); //Orange,Lemon,Apple,Mango

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
console.log(citrus); //Apple,Mango

//Changing Elements
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi";
console.log(fruits);//Output: Kiwi, Orange, Apple, Mango

JavaScript Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits); // Output : Banana, Orange, Apple, Mango, Kiwi



*/

const femaleUser = ["Melda", "Kayra", "Ceren"];
const maleUser = ["Metin", "Kemal", "Can"];
const item = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mixItem = [1, 2, 200, 100, 1000, 99, 3, 4, 5, 6, 7, 8, 9];

//string to Array (split)
const users = "Melda,Kayra,Kemal,Can";
const usersStrToArray = users.split(",");
console.log(usersStrToArray); //(4) ['Melda', 'Kayra', 'Kemal', 'Can']

const textInfo = "lorem ipsum dolor";
const textInfoToArray = textInfo.split(" ");
console.log(textInfoToArray); //(3) ['lorem', 'ipsum', 'dolor']
console.log(typeof textInfoToArray); //object

//slice
console.log(item.slice(1)); //(8) [2, 3, 4, 5, 6, 7, 8, 9]
console.log(item); //(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(item.slice(2, 5)); //(3) [3, 4, 5] //slice ile ayirma islemi yaptigimizda esitleme yapmazsak item icerigi degismez

//includes
console.log("Kayra Var Mi? : ", femaleUser.includes("Kayra")); //true

//indexOf
console.log(femaleUser); //(3) ['Melda', 'Kayra', 'Ceren']
console.log("Kayra Nerede? : ", femaleUser.indexOf("Kayra")); //1 //melda 0, kayra 1 oldugu icin 1 doner.
console.log("Ayla Nerede? : ", femaleUser.indexOf("Ayla")); // -1 Siferdan baslayarak yer bildirir. Fakat olmayan bir oge var ise -1 doner.

//sort
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log("Mixitem : ", mixItem); //(13) [1, 2, 200, 100, 1000, 99, 3, 4, 5, 6, 7, 8, 9]
console.log("Mixitem Sorted : ", mixItem.sort()); //(13) [1, 100, 1000, 2, 200, 3, 4, 5, 6, 7, 8, 9, 99]
console.log("Mixitem Sorttan Sonra : ", mixItem); //(13) [1, 100, 1000, 2, 200, 3, 4, 5, 6, 7, 8, 9, 99] // Eger sort kullanildiysa array yeni siralama ile kalici degisir.

function compareNumbers(a, b) {
  return a - b;
}
mixItem.sort(compareNumbers);
console.log("Mixitem Sorted with Function : ", mixItem); //(13) [1, 2, 3, 4, 5, 6, 7, 8, 9, 99, 100, 200, 1000] //Bu sefer function ile kullanilarak dogru bir siralama elde ettik

//toString
console.log(maleUser.toString()); //Metin,Kemal,Can //object veya arrayden metne cevirir string

//join
console.log(maleUser.join(" - ")); //Metin - Kemal - Can
console.log(item.join(" -> ")); //1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
console.log(item.join(", ")); //1, 2, 3, 4, 5, 6, 7, 8, 9

//merge
//const allUsers = [maleUser, femaleUser]; //Olmadi iki ayri array dondurdu
//const allUsers = femaleUser.concat(maleUser);
//console.log(allUsers); //(6) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can']
/*
femaleUser.push(...maleUser);
console.log(femaleUser); //(6) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can'] //
*/ //BU matikli Degil

const allUsers = [...femaleUser, ...maleUser];
console.log(allUsers); //(6) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can'] //artik es6'dan sonra bu sekilde kullasniliyor

//const ile array olusturulduysa icine yeni bilgi eklenebilir mi? Evet eklenebilir!
allUsers.push("levent");
console.log(allUsers); //(7) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent']

//copy?
let newUsers = allUsers;
newUsers.push("Seda");
console.log("allUsers : ", allUsers); //(8) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda']
console.log("newUsers : ", newUsers); //(8) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda']

//Not Yeni bir array olusturulmadi.
newUsers = [...allUsers];
newUsers.push("Emel");
console.log("allUsers : ", allUsers); //(8) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda']
console.log("newUsers : ", newUsers); //(9) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda', 'Emel']

newUsers = allUsers.slice();
newUsers.push("Asiye");
console.log("allUsers : ", allUsers); //(8) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda']
console.log("newUsers : ", newUsers); //(9) ['Melda', 'Kayra', 'Ceren', 'Metin', 'Kemal', 'Can', 'levent', 'Seda', 'Asiye']

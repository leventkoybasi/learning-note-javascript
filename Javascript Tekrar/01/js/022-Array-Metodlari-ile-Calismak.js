// Aray Methotlari

const femaleUsers = ["Melda", "Kayra", "Ceren"];
const maleUser = ["Metin", "Kemal", "Can"];
const items = [1, 2, 3, 4, 5, 6, 8, 9];
const mixItems = [1, 2, 200, 100, 1000, 99, 3, 4, 5, 6, 7, 8, 9];

//String to Array (spit)
const users = "Melda,Kayra,Kemal,Can";
console.log(users);
const usersStrToArray = users.split(",");
console.log(usersStrToArray);

const textInfo = "lorem ipsum dolor";
console.log(textInfo);
const textInfotoArray = textInfo.split(" ");
console.log(textInfotoArray);
//slice
console.log(items);
console.log(items.slice(1));
console.log(items.slice(1, 4));
console.log(items);

newItems = items.slice(1, 4);
console.log(newItems);

//ncludes
console.log("KAyra Var mi?", femaleUsers.includes("Kayra")); //true
console.log(femaleUsers.includes("Levent")); //false

//indexOf
console.log("Kayra nerede", femaleUsers.indexOf("Kayra")); //1
console.log("Ayla nerede", femaleUsers.indexOf("Ayla")); // -1

//sort
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
console.log("mixItems Sorted:", mixItems.sort());
console.log("mixItems", mixItems); // eger sort kullanildiysa Orjinal Array Yeni Siralama ile Degisir..

function compareNumbers(a, b) {
  return a - b;
}

mixItems.sort(compareNumbers);

console.log("mixItems Sorted with Function:", mixItems);

//toString
console.log(maleUser.toString()); // metin/string oldu ;)
//join
console.log(items.join(" -> "));
console.log(items);
//merge
// const allUsers = [maleUser, femaleUsers];
// console.log(allUsers);
// const allUsers2 = femaleUsers.concat(maleUser);
// console.log(allUsers2);
//es6
// femaleUsers.push(...maleUser);
// console.log(femaleUsers);
const allUsers3 = [...femaleUsers, ...maleUser];
console.log(allUsers3);

allUsers3.push("Lorem");
console.log(allUsers3);

//copy?
const newUser = [...allUsers3];
newUser.push("Derenzo ");
console.log(newUser);

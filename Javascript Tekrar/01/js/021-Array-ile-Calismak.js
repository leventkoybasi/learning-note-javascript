const users = [1, 2, 3, false, true, null, [4, 5, 6], "Deniz", "Derya"];

console.log(users);
console.log(users.length);
console.log(users[6][0]);

const otherUser = [];
console.log(otherUser.length);

const tech = Array(100);
console.log(tech.length);
console.log(tech);

const todo = new Array("item 1", "item 2", "item 3");
console.log(todo);

console.log("TYPE BILGISI NEDIR :", typeof users);

console.log(users[users.length - 1]);

users.push("lorem"); //Sona Ekleme
console.log(users);

users.unshift("ipsum"); //basa ekleme
console.log(users);

const usersPopItem = users.pop(); //Sondaki ogeyi Kaldır
console.log(users);
console.log(usersPopItem);

const userShiftItem = users.shift(); //bastaki ogeyi kaldır
console.log(users);
console.log(userShiftItem);

users[2] = 122;
console.log(users[2]);
console.log(users);

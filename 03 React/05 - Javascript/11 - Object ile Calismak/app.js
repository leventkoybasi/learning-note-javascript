//Object ile Calismak
// Object olusturmak
const person = {
  firstName: "Tugra",
  lastName: "JavaScript",
  "last login": "2023/01/01",
  "register-date": "2022/01/01",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
//Bilgiye Erismek
console.log(person.firstName); //Tugra
console.log(person["lastName"]); //JavaScript
console.log(person["last login"]); //2023/01/01
console.log(person["register-date"]); //2022/01/01

//Bilgi Eklemek
person.age = 22;
console.log(person); //{firstName: 'Tugra', lastName: 'JavaScript', last login: '2023/01/01', register-date: '2022/01/01', age: 22}

person["last-time-changed-password"] = "2023 / 01 / 01";
//Bilgi Degistirmek
person.firstName = "moka";
person["lastName"] = "es6";

console.log(person);
console.log(person.fullname()); //moka es6

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const product = {
  havStock: false,
  name: "",
  price: 0,
  tax: 1.18,
  priceWithTax: function () {
    return this.price * this.tax;
  },
};

const iPad = Object.create(product);
iPad.name = "iPad Pro";
iPad.price = 100;
iPad.isInStock = true;

console.log(iPad.priceWithTax());
console.log(iPad);

//Working With Objects
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

const firstName2 = "Lorem";
const lastName2 = "Ipsum Dolor";
const age = 29;

const user = {
  firstName2: firstName2,
  lastName2: lastName2,
  age: age,
  entries: [1, 2, 34, 45],
};

//Key Value Ayni Ise

const userV2 = {
  firstName2,
  lastName2,
  age,
  hobbies: { daily: ["dans", "egzersiz"] },
};

console.table(user);
console.table(userV2);

const input = "firstName2";
console.log(
  "input icerisindeki degisken bilgisini kullanabiliriz : ",
  user[input]
); //Lorem

console.log(user[input]); //Lorem
console.log(user.firstName2); //Lorem

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Eagle", "Talon TSI", 1993);
console.table(myCar);

delete myCar.year;
console.table(myCar);

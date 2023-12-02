const person = {
  firstname: "John",
  lastname: "maloz",
  "last Login": "2023/01/01",
  "register-date": "2023/02/02",
};

//bilgi cagirmak
console.log(person.firstname);
console.log(person.lastname);
console.log(person["lastname"]);
console.log(person["last Login"]);
console.log(person["register-date"]);

//bilgi eklemek
person.age = 22;
person["last-time-changed-password"] = "2023/03/03";
console.log(person);

// Bilgi detgistirmek
person.firstname = "Levent";
console.log(person);
person["lastname"] = "KOYBASI";
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

const product = {
  isInStock: false,
  name: "",
  price: 0,
  tax: 1.18,
  priceWithTax: function () {
    return this.price * this.tax;
  },
};

const iPad = Object.create(product);
iPad.price = 100;
iPad.name = "NESIL4";
iPad.isInStock = true;
console.log(iPad.priceWithTax());
console.log(iPad);

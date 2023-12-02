const firstName = "Lorem";
const lastName = "Ipsum";
const age = 29;

const user = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  entries: [1, 2, 3, 4, 5],
};

const userV2 = {
  firstName,
  lastName,
  age,
  hobies: { dailly: ["dance", "exercises"] },
};

console.table(user);
console.table(userV2);

const input = "firstName";

console.log(user[input]);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Car("Honda", "Crv", 2023);
delete myCar.year;
console.table(myCar);

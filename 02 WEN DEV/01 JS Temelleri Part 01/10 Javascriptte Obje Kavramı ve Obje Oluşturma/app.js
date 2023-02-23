let value;

const programmer = {
  name: "Levent KOYBASI",
  age: 37,
  email: "leventkoybasi@gmail.com",
  langs: ["Html", "Css", "JavaScript"],

  address: {
    city: "Istanbul",
    street: "Atasehir",
  },

  work: function () {
    console.log("Programci Calisiyor...");
  },
};

value = programmer;

value = programmer.email; //Genel olarak bu kullanilir
value = programmer["email"];

value = programmer.langs;
value = programmer.address.city;
programmer.work();

const programmers = [
  { name: "Levent KOYBASI", age: 37 },
  { name: "seda KOYBASI", age: 36 },
];
value = programmers[0];
value = programmers[0].name;
value = programmers[0].age;

console.log(value);

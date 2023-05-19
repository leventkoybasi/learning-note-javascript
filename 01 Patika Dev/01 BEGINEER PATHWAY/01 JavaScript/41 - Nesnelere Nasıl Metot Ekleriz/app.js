//  41 - Nesnelere Nasıl Metot Ekleriz
// Object Icine Method Nasil Ekleriz

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function () {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
    },
};

console.log(user1); //Object // {firstName: 'Bilgin', lastName: 'Uzman', score: Array(4), isActive: true, shortName: ƒ}

console.log(user1.firstName); //Bilgin
console.log(user1.shortName); // ƒ () {
//                               return `${this.firstName[0].toUpperCase()}. ${this.lastName}`;
//                               }

console.log(user1.shortName()); //B. Uzman

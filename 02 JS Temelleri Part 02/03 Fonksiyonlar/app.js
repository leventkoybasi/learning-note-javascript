// Fonksiyon Tanimlama

function merhaba(name = "Bilgi YoK", age = "Bilgi YoK") {
  // if (typeof name === "undefined") name = "Bilgi Yok";

  // if (typeof age === "undefined") age = "Bilgi Yok ";
  console.log(`Isim: ${name} Yas: ${age}`);
}

merhaba("Levent", 37); //Fonksiyon Cagrisi function call

merhaba("Ayse", 22);

merhaba();

merhaba("Seda");

// Fonksiyonlarda Return

function square(x) {
  return x * x; //Return bize deger donmesini saglar

  console.log("Naber"); //Return bize fonk bittigini soyler bu satir calismadigi icin naber yazisi ekrana yazdirilamaz.
}
function cube(x) {
  return x * x * x;
}

// let a = square(12);
// a = cube(a);

// let a = cube(square(12));
// console.log(a);

// function merhaba() {
//   return "merhaba";
// }
// console.log(merhaba());

//Function Expression

const merhabaa = function (name) {
  console.log("Merhaba " + name);
};

merhabaa("Murat");

//Immediately Invoke Function Expression (IIFE)

(function (name) {
  console.log("Merhaba " + name);
})("Levent");

const database = {
  host: "localhost",
  add: function () {
    console.log("Eklendi");
  },

  get: function () {
    console.log("Elde Edildi");
  },
  update: function (id) {
    console.log(`Id: ${id} Guncellendi`);
  },
  delete: function (id) {
    console.log(`Id: ${id} Silindi`);
  },
};

console.log(database.host);

database.add();
database.delete(10);

// Karsilastirma Operatorleri

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

console.log(2 == 2);
console.log("js" == "JavaScript");
console.log(2 == "2"); // true doner nedeni ise bir tarafta sayi bir tarafta string varsa diger tarafta otomatik string algilanir. Icnindeki degerler ayni oldugundan true donuyor. Bu iki deger farkli yani false donmesi icin verilerin tiplerini de sorgulamamiz gerekir.

console.log(2 === "2"); // false burda degerlerler ayni mi ve veri tipleri ayni mi diye sorguluyor. Bu tarz durumlarda esitlik sorgulamak icin bu yontem kullanilir.

console.log(4 > 2); // true
console.log(2 > 4); // false

console.log(2 != 4); // 2 esit degil midir 4 (esit degil midir operatoru) 2 , 4e esit olmadigi icin true doner

console.log(2 != 2); // false 2 esit degil midir 2ye

console.log(2 < 4); //true
console.log(2 > 4); // false

console.log(4 >= 2); // true
console.log(4 >= 4); // true

console.log(2 <= 4); // true
console.log(4 <= 2); // false

//MANTISAL BAGLACLAR

// Not Operatoru !
console.log(2 == 2); //true
console.log(!(2 == 2)); //false

console.log(2 != 2); //false
console.log(!(2 != 2)); //true

// And Operatoru &&

console.log(2 == 2 && "Ahmet" == "Ahmet"); //true //And Operatoru && kullanilirken  baglanan iki kosulda true ise true doner fakat iki kosulun birisi bile false ise false doner.

// Or Operatoru

//or operatoru ile calisiken kosullardan biri turu olsa bile genel kosul true doner. Genel durumumuzun false olmasi icin iki kosulda ayri ayri false olmasi gerekir.

console.log(4 == 2 || "Ahmet" == "Ahmet"); //true
console.log(4 == 2 || "Ahmet" != "Ahmet"); //false

const error = false;

if (error == true) {
  console.log("Hata olustu...");
} else {
  console.log("Hata olusmadi...");
}

const user = "mmc";
if (user === "mmc") {
  console.log("Kullanici Bulundu...");
} else {
  console.log("Kullanici Bulunamadi...");
}

const process = "5";

if (process === "1") {
  console.log("Islem 1");
} else if (process === "2") {
  console.log("Islem 2");
} else if (process === "3") {
  console.log("Islem 3");
} else if (process === "4") {
  console.log("Islem 4");
} else {
  console.log("Gecersiz Islem");
}

const number = 120;

if (number == 100) {
  console.log("Sayi 100e Esit");
} else {
  console.log("Sayi 100'e Esit Degil");
}

//Ternary Operator

console.log(number === 100 ? "Sayi 100" : "Sayi 100 Degil");

if (number === 100) console.log("Sayi 100");
else console.log("Sayi 100 degil");

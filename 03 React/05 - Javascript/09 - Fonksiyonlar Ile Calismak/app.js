//Fonksiyonlar Ile Calismak
//Temel KUrallar:
// 1 - Bir fonksiyon bir veya birden fazla parametre alabilir. Veya hic parametre almayabilir.
// 2 - Bir fonksiyon disari bilgi gonderebilir (return) veya gondermeyebilir
// 3 - Mumkun ise fonksiyonun bagimliliklarini azaltmak gerekir.
// 4 - Bir fonksiyon kendisini tekrar calistirabilir.

function hello() {
  console.log("Merhaba Dunya");
}

//Fonksiyon Calistirmak
hello(); //Merhaba Dunya

function greetings(name) {
  // console.log(`Merhaba ${name}`);
  // console.log(`Merhaba ${name ? name : "ISIM YOK"}`);
  console.log(`Merhaba ${name ? name : ""}`);
}

greetings("Levent"); //Merhaba Levent
//greetings(); //Merhaba undefined
//greetings(); //Merhaba ISIM YOK
greetings(); //Merhaba

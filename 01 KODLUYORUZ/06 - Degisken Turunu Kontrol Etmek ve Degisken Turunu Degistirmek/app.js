//06 - Degisken Turunu Kontrol Etmek ve Degisken Turunu Degistirmek

//veri turunu ogrenmek typeof:

let price = 111;
let stringProce = "111";
let hasPassword = true;

console.log("Price: ", typeof price); // number
console.log("stringProce: ", typeof stringProce); //string
console.log("hasPassword: ", typeof hasPassword); //boolean

// string(metinsel) bilgileri int ve float'a donusturmek
let number1 = "11";
console.log("number1: ", parseInt(number1), typeof parseInt(number1)); //11 rakama cevrildi

let number2 = "11px";
console.log("number2: ", parseInt(number2), typeof parseInt(number2)); //11 parseInt() ile icerisindeki rkamsal int bilgiyi alabiliyoruz

let number3 = "px11px";
console.log("number3: ", parseInt(number3), typeof parseInt(number3)); //NaN //İlk karakter dönüştürülemezse, NaN döndürülür. bu yuzden ilk karakter rakam olmalidir.

let number4 = "11px";
console.log("number4: ", Number(number4), typeof Number(number4)); //NaN // Parse icerisinden rakamsal olarak bakip ve rakamsal basliyorsa veriyi sayiya ceviriyor ama number icerisinde sayi varsa ve baska karakter yoksa ceviriyor. Number ondalik sayilarda da doner.

let number5 = "11.4px";
console.log("number5: ", parseFloat(number5), typeof parseFloat(number5)); //Icerisinde hem yazi hemde ondalik sayi varsa bu veri turunu Number() ile alamyacagimiz icin parseFloat() ile aliriz. Bunu parseInt ile almaya kalkarsak ondalik kismini alamayiz. Bize sadece 11 donder.

// number veri tipinden string'e donusturmek
let number6 = 55;
number6 = number6.toString();
console.log(number6, typeof number6); // 55 string metin olarak doner

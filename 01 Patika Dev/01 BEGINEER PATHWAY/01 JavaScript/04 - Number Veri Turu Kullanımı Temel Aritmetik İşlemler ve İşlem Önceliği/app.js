// Number

// Number Veri Turunu Tanimla
let price = 100;
let tax = 0.18;
let priceTax = price * tax;
let total = price + priceTax;
let discount = total - Math.round((total / 100) * 5);
let stringNumber = "11";

console.log(
  "Fiyat: ",
  price,
  "KDV Orani: ",
  tax,
  "KDV Tutari: ",
  priceTax,
  "Fiyat:  ",
  total,
  "Indirim: ",
  discount
);

//arttirma ve azaltma islemleri

let counter = 320;
counter = counter + 1; // uzun yontem
counter += 1;
counter++;

counter -= 1;
counter--;

counter *= 10;
counter /= 2;

console.log(counter);

// islem onceligi

console.log(2 + 3 * 10); // cikti 32
console.log((2 + 3) * 10); //cikti 50

// mod alma (kalan nedir)
// sayi tek mi cift mi
console.log(3 % 2); // cikti 1 //eger sifir ise cift 1 ise tek sayi

// 8 urun alan kolide kac adet kaldi
console.log(8 % 8); // cikti 0 // 8lik kolide 8 urun koyarsak elimizde urun kalir mi hayir

console.log(18 % 8); // cikti 2 // 8lik kolide 2 urun elimizde kaldi

//ust alma
console.log(2 * 2 * 2 * 2); //cikti 16
console.log(2 ** 4); //cikti 16 // ust alma islemi 2 carpi "**" ile yapilir

//yuvarlam islemi

console.log("Asagi Yuvarlama; ", Math.floor(1.9)); // cikti 1
console.log("Yukari Yuvarlama; ", Math.ceil(1.9)); // cikti 2

// yakina yuvarlama islemi
console.log("Yakina Yuvarlama; ", Math.round(1.6)); // cikti 2
console.log("Yakina Yuvarlama; ", Math.round(1.4)); // cikti 1

// Number() kullanimi //string bir rakami number olark kullanma
console.log(stringNumber); //cikti 11 ama string
console.log(Number(stringNumber)); //cikti 11 ama number // Number() ile string bir rakami yine number olarak alabiliyoruz.

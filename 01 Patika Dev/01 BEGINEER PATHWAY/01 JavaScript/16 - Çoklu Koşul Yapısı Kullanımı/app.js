// 16 - Çoklu Koşul Yapısı Kullanımı

let userName = prompt("Kullanici Adiniz: ");
let age = prompt("Yasiniz: ");

if (userName.length > 0 && age >= 18) {
  console.log(`${userName} Ehliyet Almaya Hak Kazandiniz`);
} else if (userName.length <= 0 || age.length <= 0) {
  console.log("Lutfen Bilgilerinizi Dogru Giriniz");
} else if (age < 18) {
  console.log("Yasiniz Ehliyet Almak Icin uygun Degil");
} else if (typeof age != "number") {
  console.log("Lutfen Bilgilerinizi Dogru Giriniz");
}

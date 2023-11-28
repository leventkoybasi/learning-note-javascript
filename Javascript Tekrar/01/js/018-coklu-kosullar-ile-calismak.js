const userId = prompt("TC Kimlik No Giriniz...");
const userAge = prompt("Kullanici Yasinizi Giriniz...");

console.log("User Id :", userId, "User Age :", userAge);

if (userId.length === 11 && userAge >= 18) {
  console.log("TC Kimlik No 11 karakterdir.");
  console.log("Yas 18'den Buyuk veya esittir.");
} else if (userId === null) {
  console.log("Bilgi alanlari bos birakilamaz...");
} else if (userAge === null) {
  console.log("Bilgi alanlari bos birakilamaz...");
} else if (userAge < 18) {
  console.log("18 Yasindan kucuk oldugunuz icin site giremediniz");
} else if (userId.length !== 11) {
  console.log("Tc kimlik nosunu kontrol ediniz");
}

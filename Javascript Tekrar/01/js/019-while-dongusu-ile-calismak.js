// While Dongusu

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

let userId = prompt("TC Kimlik No Giriniz...");

while (userId.length !== 11) {
  console.log("Hatali TC Kimlik Nosu...");
  userId = prompt("TC Kimlik No Giriniz...");
}
console.log("Dogru TC Kimlik Nosu...");

let userAge = prompt("Kullanici Yasinizi Giriniz...");

while (!(userAge >= 18 && userAge <= 99)) {
  console.log("18-99 yasindan küçük olamaz.");
  userAge = prompt("Kullanici Yasinizi Giriniz...");
}

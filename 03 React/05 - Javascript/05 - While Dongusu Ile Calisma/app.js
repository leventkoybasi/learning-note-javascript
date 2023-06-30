// while Dongusu (olana kadar devam et)

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++; // sayacın değerini arttırırız
}

let userId = prompt("TC No Giriniz...");
while (userId.length !== 11) {
  console.log("While Calisti...");
  userId = prompt("Tekrar TCNO Giriniz...");
}

let userAge = prompt("Yasinizi Giriniz...");
while (!(userAge >= 18 && userAge < 99)) {
  console.log("While Calisti...");
  userAge = prompt("Yasinizi Tekrar GIriniz");
}

console.log("While'den sonra ssistem calismaya devam ediyor...");

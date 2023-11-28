// eger kulalnicini verdigi yas bilgisi18e esit verya buyukse sisteme girebilsin

const userAge = prompt("Kullanici Yasinizi Giriniz...");

console.log("User Age :", userAge);

if (userAge >= 18) {
  console.log("Sisteme Hosgeldiniz...");
} else if (userAge < 18) {
  console.log("Uzgunum Sisteme Girmek Icin Yasiniz Tutmuyor...");
  // window.location.replace("https://www.google.com");
}

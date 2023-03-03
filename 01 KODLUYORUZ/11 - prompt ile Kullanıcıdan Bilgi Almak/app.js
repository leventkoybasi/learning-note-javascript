// 11 - prompt ile Kullanıcıdan Bilgi Almak
let fullName = prompt("Lutfen Adinizi Giriniz...");
let greeting = document.querySelector("#greeting");
// greeting.innerHTML = fullName; // Direk yazdirma Burda greeting degiskeninin secili oldugu id nin innerHTML'ine fullName degiskenindeki deger yazilir.

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`;

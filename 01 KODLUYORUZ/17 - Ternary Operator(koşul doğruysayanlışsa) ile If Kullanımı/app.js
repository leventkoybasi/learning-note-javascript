// 17 - Ternary Operator(koşul doğruysayanlışsa) ile If Kullanımı
//Ternary Operator
// kosul ? dogruysa : yanlissa

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici Adiniz: ");
let title = document.querySelector("#title");

title.innerHTML = `${
  userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi"
} `;

title.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi"} `;

// userName.length > 0 ile userName var mi ayni sey

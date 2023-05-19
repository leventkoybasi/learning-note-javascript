// 15 - Koşul Yapısı Kullanımı(ifelse)

//Eger kullanici bilgisi varsa ekrana yazdir.
// eger(username.length > 0) {console.log(username)} degilse {console.log(Bilgi Yok)}
// if(username.length > 0) {console.log(username)} else {console.log(Bilgi Yok)}

let username = prompt("Kullanici Adinizi Giriniz");
if (username.length > 0) {
  console.log(`Kullanici Bilginiz ${username} `);
} else {
  console.log(`Kullanici Bilginiz Yok`);
}

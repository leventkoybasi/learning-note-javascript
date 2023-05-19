//43 - try ve catch Kullanımı
// https://academy.patika.dev/courses/javascript/try-ve-catch-kullanimi

// try {}  catch(error) {}

let products;

try {
    products.forEach((item) => console.log(item));
} catch (error) {
    console.log("error : ", error);
    products = [1, 2, 3];
    products.forEach((item) => console.log(item));
}

console.log("Hata Yonetimi Etkin");

let info = "kodluyoruz";
console.log(info);

/* 
Disaridan aldigimiz yapilari vb koda aktarirken bir hata alirsak haya aldigimiz bloktan sonra kod calismayacaktir. Fakat hata yonetim sistemi kullanirsak hatali kisim calismazsa bile hatayi goruruz ve sonrasinda kod calismaya devam eder.


try...catch ifadesini basitçe ifade edersek; Herhangi bir iş yaparken bir hatayla karşılaşılma durumunun ele alınması anlamına gelmektedir.

try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.
*/

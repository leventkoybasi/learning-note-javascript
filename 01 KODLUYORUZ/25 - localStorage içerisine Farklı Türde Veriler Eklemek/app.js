// 25 - localStorage içerisine Farklı Türde Veriler Eklemek

let user = { userName: "leventkoybasi", isActive: true };
console.log(user);

// localStorage.setItem("userInfo", user); //JSON.stringify ile icerisindeki bilgileri string'e cevirmemiz gerekiyor. Bu sekilde icerindeki bilgiler object yerine string olarak yazilir.
localStorage.setItem("userInfo", JSON.stringify(user));

//let userInfo = localStorage.getItem("userInfo"); //JSON.stringify ile ile bu bilgileri stringe cevirdik fakat kullanmak istedigimiz zaman bu bilgiler string oldugundan bize bir deger donmez. Bu yuzden JSON.parse() islemi ile parcalayip kullanabilirz.

let userInfo = localStorage.getItem("userInfo"); //Bilgiyi al

userInfo = JSON.parse(userInfo); //Parcala ve komplex degeri goster

let items = [1, 2, 3, user];
console.log(items);
// localStorage.setItem("newItems", items); //Yine object olark geldi
localStorage.setItem("newItems", JSON.stringify(items));
// let item2 = localStorage.getItem("newItems");
let item2 = JSON.parse(localStorage.getItem("newItems")); //tek satirda yazilisi bu sekilde. Burda parse islemei localStorage kisminin tamamini kapsiyor veya iki ayri bolumde yukardaki gibi yazilabilir.

console.log(item2);

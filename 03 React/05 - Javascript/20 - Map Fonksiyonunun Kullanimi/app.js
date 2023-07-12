//Array Map Kullanimi
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => number * 5);
const newNumbers2 = numbers.map((item) => item * 5);
// map methodu ile arrayin her elemanını yeni bir diziye aktarıyoruz ve bu dizinin içindeki değerleri belirtilen fonksiyonla çarp

console.log(newNumbers); //(5) [5, 10, 15, 20, 25]
console.log(newNumbers2); //(5) [5, 10, 15, 20, 25]

const users = [
  "hakan@js.com",
  "ayla@gmail.com",
  "utku@hotmail.com",
  "levent@react.com",
  "hilal@pyton.com",
  "duru#vanillajs.com",
];
//{name: "hakan", domain: "js.com", length: 12 isValid: true}

const newUsers = users.map((item) => {
  const domain = item.slice(item.search("@") + 1);
  const name = item.slice(0, item.search("@"));
  if (item.search("@") > 0) {
    return {
      name,
      domain,
      length: item.length,
      isValid: true,
    };
  }
  return {
    userName: item,
    length: item.length,
    isValid: false,
  };
});

console.log("newUsers", newUsers);

const validUsers = newUsers.filter((item) => item.isValid);

console.log("validUsers", validUsers);

const filteredValidUsers = users
  .filter((item) => (item.search("@") > 0 ? true : false))
  .map((item) => {
    const domain = item.slice(item.search("@") + 1);
    const name = item.slice(0, item.search("@"));
    return {
      name,
      domain,
      length: item.length,
      isValid: true,
    };
  });

console.log("filteredValidUsers", filteredValidUsers);

// 100 Adet li item nasil olusturulur?
// Bonus Bilgi: React'ta Isimize Yarayacak ;)

const newLiItems = [...Array(100)].map(
  (emptyItem, index) => `<li>Item ${index + 1}</li>`
);
console.log(newLiItems);

/*
  Map ile forEach fonksiyonunun arasindaki farklar

1 - map() ve forEach() fonksiyonları JavaScript'te diziler üzerinde çalışmak için kullanılan iki farklı yöntemdir. İşleyişlerindeki temel fark şu şekildedir:

    map() fonksiyonu: map() fonksiyonu, bir diziyi döngüleyerek her bir öğe üzerinde belirli bir işlem yapar ve işlemin sonucunda yeni bir dizi döndürür. Bu yeni dizi, her bir döngülenen öğenin işlemden geçirilmiş halidir. Yani, map() fonksiyonu orijinal diziyi değiştirmez, tamamen yeni bir dizi oluşturur.

    Örneğin:

    const numbers = [1, 2, 3, 4, 5];
    const doubledNumbers = numbers.map((num) => num * 2);
    console.log(doubledNumbers); // [2, 4, 6, 8, 10]
    

    Yukarıdaki örnekte, map() fonksiyonu her bir num öğesi için num * 2 işlemini yaparak yeni bir dizi oluşturur.

2 - forEach() fonksiyonu: forEach() fonksiyonu ise bir diziyi döngüleyerek her bir öğe üzerinde belirli bir işlem yapar. Ancak, forEach() fonksiyonu geri dönüş değeri olarak undefined döndürür ve orijinal diziyi değiştirmez. forEach() fonksiyonu, döngülenen öğeler üzerinde işlem yapmanıza olanak sağlar, ancak bu işlem sonucunda yeni bir dizi oluşturmaz.

  Örneğin:

  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((num) => {
  console.log(num * 2);
  });

  Yukarıdaki örnekte, forEach() fonksiyonu her bir num öğesi için num * 2 işlemini yaparak sonucu konsola yazdırır.

  Bu şekilde, map() fonksiyonu yeni bir dizi oluştururken, forEach() fonksiyonu ise orijinal dizide değişiklik yapar veya üzerinde işlem yapar ancak yeni bir dizi döndürmez. Hangi yöntemi kullanmanız gerektiği, ihtiyaçlarınıza ve kullanım senaryonuza bağlıdır.


*/

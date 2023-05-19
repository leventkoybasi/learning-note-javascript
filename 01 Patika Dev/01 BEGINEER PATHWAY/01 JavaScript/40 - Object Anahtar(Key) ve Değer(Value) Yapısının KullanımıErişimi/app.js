// 40 - Object Anahtar(Key) ve Değer(Value) Yapısının KullanımıErişimi

//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg": 2, // Kural, Obj String karakter ile baslamali, Illa number ile basliyorsa tirnaklaricinde yazilmali
    modelName: "Macbook Pro", //Iki veya daha fazla kelime tanimlanacaksa camel case veya alt cizgi kullanilabilir.
};
console.log(laptop1); // {brand: 'Apple', model: 'Macbook Pro', 2kg: 2}

// Dogru Anahtar Bilgisi Olusturma

console.log(laptop1.brand); // Apple
console.log(laptop1.model); // macbook Pro
console.log(laptop1.model, laptop1["model"]); // Macbook Pro Macbook Pro //iki sekilde de yazilabilir.

// console.log(laptop1.2kg) //Hata string ile basladigindan laptop1["2kg"] olarak bakabiliriz

console.log(laptop1["2kg"]); // 2

// Anahtar Bilgisine Yeni Deger Eklemek
laptop1.brand = "Mac";
console.log(laptop1); // {brand: 'Mac', model: 'Macbook Pro', 2kg: 2, modelName: 'Macbook Pro'}

laptop1["brand"] = "Mac1";
console.log(laptop1); // {brand: 'Mac1', model: 'Macbook Pro', 2kg: 2, modelName: 'Macbook Pro'}

// yeni Bilgi Eklemek

laptop1.version = "10.15.7";
console.log(laptop1); // {brand: 'Mac1', model: 'Macbook Pro', 2kg: 2, modelName: 'Macbook Pro', version: '10.15.7'}

// Anahtar Bilgilerine Ulasmak (keys) -> Object,keys(item)
keys = Object.keys(laptop1);
console.log(keys); // (5) ['brand', 'model', '2kg', 'modelName', 'version']

console.log(Object.keys(laptop1)); // (5) ['brand', 'model', '2kg', 'modelName', 'version']

keys.forEach((keyInfo) => {
    console.log(keyInfo); //brand // model // 2kg // modelName //version
    console.log(laptop1[keyInfo]);
});

// Deger bilgilerine Ulasmak (values) -> Object.values(it em)

console.log(Object.values(laptop1)); //(5) ['Mac1', 'Macbook Pro', 2, 'Macbook Pro', '10.15.7']

let values = Object.values(laptop1);

values.forEach((value) => {
    console.log("value: ", value);
});

let settings = {
    password: 1234,
    userName: "user1",
};

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

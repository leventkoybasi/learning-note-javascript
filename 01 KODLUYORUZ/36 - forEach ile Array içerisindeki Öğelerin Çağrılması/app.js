// 36 - forEach ile Array içerisindeki Öğelerin Çağrılması
// Array forEach Metotu

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// https://www.w3schools.com/jsref/jsref_foreach.asp

/// JavaScript'te forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

// forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

const PRODUCTS = [
    "laptop",
    "Phone",
    "Speaker",
    "Desktop PC",
    "Server",
    "Mouse",
    "Keyboard",
];

PRODUCTS.forEach((product) => console.log(product));

/*
laptop
app.js:18 Phone
app.js:18 Speaker
app.js:18 Desktop PC
app.js:18 Server
app.js:18 Mouse
app.js:18 Keyboard
*/

PRODUCTS.forEach((product, index) => console.log(product, index));

/*
laptop 0
app.js:30 Phone 1
app.js:30 Speaker 2
app.js:30 Desktop PC 3
app.js:30 Server 4
app.js:30 Mouse 5
app.js:30 Keyboard 6
*/

PRODUCTS.forEach((product, index, array) => console.log(product, index, array));

/*
laptop 0 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Phone 1 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Speaker 2 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Desktop PC 3 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Server 4 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Mouse 5 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
app.js:42 Keyboard 6 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
*/

PRODUCTS.forEach((_product, index, array) => console.log(array[index]));

/*
laptop
app.js:54 Phone
app.js:54 Speaker
app.js:54 Desktop PC
app.js:54 Server
app.js:54 Mouse
app.js:54 Keyboard
*/

PRODUCTS.forEach((product, index, array) => (array[index] = product + " 111"));
console.log(PRODUCTS);
// (7) ['laptop 111', 'Phone 111', 'Speaker 111', 'Desktop PC 111', 'Server 111', 'Mouse 111', 'Keyboard 111']

PRODUCTS.forEach(
    (product, index, array) => (array[index] = `${product.toUpperCase()}`)
);
console.log(PRODUCTS);
// (7) ['LAPTOP 111', 'PHONE 111', 'SPEAKER 111', 'DESKTOP PC 111', 'SERVER 111', 'MOUSE 111', 'KEYBOARD 111']

const userListDOM = document.querySelector("#userList");

PRODUCTS.forEach((item) => {
    let liDOM = document.createElement("li");
    liDOM.classList.add("text-light");
    liDOM.innerHTML = item;
    userListDOM.append(liDOM);
});

const numbers = [4, 11, 9];
const newArray = [];

//Şimdi de forEach kullanarak yeni bir array oluşturabileceğimiz bir fonksiyon yazalım.

numbers.forEach(function (numbers) {
    newArray.push(numbers * 3);
});
console.log(newArray);

// output = [12, 33, 27]

// Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

const number2 = [12, 24, 36];

number2.forEach((numbers2, index, array) => {
    numbers3 = array[index] + 2;
    console.log(numbers3);
});

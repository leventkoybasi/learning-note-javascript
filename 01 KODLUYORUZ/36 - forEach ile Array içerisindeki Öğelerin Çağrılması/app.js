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
Phone
Speaker
Desktop PC
Server
Mouse
Keyboard
*/

PRODUCTS.forEach((product, index) => console.log(product, index));

/*
laptop 0
Phone 1
Speaker 2
Desktop PC 3
Server 4
Mouse 5
Keyboard 6
*/

PRODUCTS.forEach((product, index, array) => console.log(product, index, array));

/*
laptop 0 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Phone 1 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Speaker 2 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Desktop PC 3 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Server 4 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Mouse 5 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
Keyboard 6 (7) ['laptop', 'Phone', 'Speaker', 'Desktop PC', 'Server', 'Mouse', 'Keyboard']
*/

PRODUCTS.forEach((_product, index, array) => console.log(array[index]));

/*
laptop
Phone
Speaker
Desktop PC
Server
Mouse
Keyboard
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
    //function
    newArray.push(numbers * 3);
});
console.log(newArray);
// output = [12, 33, 27]

// numbers.forEach((numbers) => { // fatarrow function
//     newArray.push(numbers * 3);
// });
// console.log(newArray);
// // output = [12, 33, 27]

// Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.

const number2 = [12, 24, 36];

number2.forEach((numbers2, index, array) => {
    numbers3 = array[index] + 2;
    console.log(numbers3);
});

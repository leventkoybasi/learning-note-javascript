// For Loop

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// for (nereden baslanacak; kosul ne; arttirma islemi;) {

// }

for (let count = 0; count <= 5; count++) {
  console.log(count); // 0 1 2 3 4 5
}

for (let count = 10; count <= 100; count += 10) {
  console.log(count); // 10 20 30 40 50 60 70 80 90 100
}

const users = ["Ayla", "Ahmet", "Mehmet", "Burcin", "Hilal"];
console.log("--------------------------------------------");

for (let userCount = 0; userCount < users.length; userCount++) {
  //console.log(userCount); // 0 1 2 3 4
  //console.log(users[userCount]); // Ayla Ahmet Mehmet Burcin Hilal
  if (userCount === 2) {
    continue; // 2 olan kullaniciyi gorunce es gec
  }

  if (users[userCount] === "Ahmet") {
    break; // Ahmete gelince dur ve donguyu calistirma
  }

  console.log(userCount); // 0 1 2 3 4
  console.log(users[userCount]); // Ayla Ahmet Mehmet Burcin Hilal
}
console.log("--------------------------------------------");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// For Each Dongusu Ile Calismak

const serverInfo = {
  ip: "127.0.0.1",
  port: "80",
  user: "admin",
  password: "123456",
};

users.forEach((item) => {
  console.log(item); // Ayla Ahmet Mehmet Burcin Hilal
});

users.forEach((user) => {
  console.log(user); // Ayla Ahmet Mehmet Burcin Hilal
});

users.forEach((item, index) => {
  console.log(item, index); // Ayla 0 Ahmet 1 Mehmet 2 Burcin 3 Hilal 4 //Hem array'i donduruyor hemde dizini
});

console.log("Array -> ", Object.keys(serverInfo)); //(4) ['ip', 'port', 'user', 'password'] //Object.keys(serverInfo), serverInfo nun kewy bilgisini array olarak donder.

Object.keys(serverInfo).forEach((key) => {
  console.log(key); // ip port user password
  console.log(serverInfo[key]); //once key bilgisini sonrada value bilgisini doner ip 127.0.0.1 gibi
});

//tek islem yapacak isek suslu paranteze gerek yok

Object.keys(serverInfo).forEach((key) => console.log(serverInfo[key])); //serverInfo daki value bilgisini yazdirir.

console.log("--------------------------------------------");

Object.entries(serverInfo).forEach(([key, value], index) => {
  console.log(key);
  console.log(value);
  console.log(index);
});

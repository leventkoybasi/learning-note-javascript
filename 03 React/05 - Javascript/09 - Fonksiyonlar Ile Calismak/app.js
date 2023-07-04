//Fonksiyonlar Ile Calismak
//Temel KUrallar:
// 1 - Bir fonksiyon bir veya birden fazla parametre alabilir. Veya hic parametre almayabilir.
// 2 - Bir fonksiyon disari bilgi gonderebilir (return) veya gondermeyebilir
// 3 - Mumkun ise fonksiyonun bagimliliklarini azaltmak gerekir.
// 4 - Bir fonksiyon kendisini tekrar calistirabilir.

function hello() {
  console.log("Merhaba Dunya");
}

//Fonksiyon Calistirmak
hello(); //Merhaba Dunya

function greetings(name) {
  // console.log(`Merhaba ${name}`);
  // console.log(`Merhaba ${name ? name : "ISIM YOK"}`);
  console.log(`Merhaba ${name ? name : ""}`);
}

greetings("Levent"); //Merhaba Levent
//greetings(); //Merhaba undefined
//greetings(); //Merhaba ISIM YOK
greetings(); //Merhaba

function greetings_v2(firstName, lastName) {
  console.log(
    `Merhaba ${firstName ? firstName : ""} ${lastName ? lastName : ""}`
  );
}

greetings_v3("Levent", "Koybasi"); //Merhaba Levent Koybasi

function greetings_v3(firstName = "", lastName = "") {
  console.log(`Merhaba ${firstName} ${lastName}`);
}
greetings_v3("Levent", "Koybasi"); //Merhaba Levent Koybasi
greetings_v3(); //Merhaba

function multiply(num1, num2) {
  num1 * num2;
  //disari herhangi bir bilgi gondermese de iceride bir islem yapiyor
}
multiply(10, 20);

function selectHtmlItemAddInformation(element, info) {
  document.querySelector(element).innerHTML = info;
}
selectHtmlItemAddInformation("#app", "Merhaba Dunya");

//return kullanimi

function multiply_with_return(num1, num2) {
  return num1 * num2;
}

console.log(multiply_with_return(10, 30)); //300
//veya
const result = multiply_with_return(10, 30);
console.log(result); //300

let user;

function sayHelloToUser() {
  user = prompt("Adiniz : ");
  return user;
}

// user = sayHelloToUser();
// console.log(user);

/*
function sayHelloToLorem() {
  const user = prompt("Adiniz : ");
  if (user === "Lorem") {
    console.log("sayHelloToLOrem", user);
  } else {
    return sayHelloToLorem();
  }
}
sayHelloToLorem(); // Lorem yazana kadar calisir. */

// Eski Yaptigimiz Bir Calismayi Fonksiyon Olarak Duzenlemek:

function userAccess(userId, userAge) {
  if (userId.length === 11 && userAge >= 18 && userAge <= 99) {
    const h1TitleElement = document.querySelector("#app");
    h1TitleElement.innerHTML = "<em>Siteye Girebilirsiniz..</em>";
    // h1TitleElement.innerText = '<em>Siteye Girebilirsiniz..</em>'
    // if (userAge > 99) {
    //   console.log("Yas Bilgisi Hatali..") // acaba burda olmasi dogr muydu ?
    // }
    // console.log("Siteye Girebilirsiniz..")
  } else if (!userAge <= 99) {
    console.log("Yas Bilgisi 99dan buyuk olabilir..");
    // tersini al operatorunu kullandik ;)
  } else if (userAge > 99) {
    console.log("Yas Bilgisi 99dan buyuk olabilir..");
  } else if (userId.length !== 11) {
    console.log("TC No Bilgisi Dogru Olmayabilir..");
  } else if (userId.length === 11 && userAge < 18) {
    console.log("Siteye Giremezsiniz Cunku 18 Yasindan Kucuksun..");
  }
}

userAccess("Lorem Ipsum", 23);

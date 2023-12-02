function hello() {
  console.log("Merhaba Dunya");
}
hello();

function greetings(name) {
  console.log(`Merhaba ${name ? name : ""}`);
}
greetings();
greetings("Deniz");

function greetingsV2(firstname, lastname) {
  console.log(
    `Merhaba ${firstname ? firstname : ""} ${lastname ? lastname : ""}`
  );
}
greetingsV2();
greetingsV2("Levent", "KOYBASI");

function greetingsV3(firstname = "", lastname = "", age = 30) {
  console.log(`Merhaba ${firstname} ${lastname} => ${age}`);
}
greetingsV3();
greetingsV3("Levent", "KOYBASI");

function multiply(num1, num2) {
  num1 * num2;
  //disariya herhangi bir veri gondermesede iceride islem yapiyor...
}
multiply(3, 5);

function selectHtmlItemAddInformation(element, info) {
  const item = document.querySelector(element);
  item.innerHTML = info;
}

selectHtmlItemAddInformation("#title", "Merhaba Dunya");

function multiplyWithReturn(num1, num2) {
  return num1 * num2;
}
const result = multiplyWithReturn(3, 5);
console.log(result);

// let user;
// function sayHelloToUser() {
//   user = prompt("Adiniz :");
//   return user;
// }
// user = sayHelloToUser();
// console.log(user);

// function sayHelloToLorem() {
//   const user = prompt("Adiniz :");
//   if (user === "Lorem") {
//     console.log(user);
//   } else {
//     return sayHelloToLorem();
//   }
// }
// sayHelloToLorem();

function userAccess(userId, userAge) {
  if (userId.length === 11 && userAge >= 18 && userAge <= 99) {
    const h1TitleElement = document.querySelector("#title");
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

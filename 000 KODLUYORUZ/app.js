/*
let email = "leventkoybasi@hotmail.com";
let firstName = "Levent";
let lastName = "KOYBASI";

console.log(`${email} ${email.length} Karakter uzunlugundadir.`);
console.log(firstName[0]);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(email.search("@"));
console.log(email[13]);
console.log(email.slice(0, 13));
console.log(email.slice(13));

const DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);
console.log(email.slice(email.search("@") + 1));

console.log(email.slice(0, email.search("@")));

console.log(DOMAIN);
console.log(DOMAIN.slice(0, email.search("c") - 3));

*/

/*

let element = document.querySelector("#title");

element.style.color = "red";

console.log(element);
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML = "Link Bilgisi Degisti";
link.style.color = "blue";
link.classList.add("btn");
// https://www.w3schools.com/jsref/dom_obj_style.asp //HTML DOM Style Object
// link.style.textDecoration = "none";
link.style.textDecorationColor = "red";
console.log(link);

let fullName = prompt("Adinizi Giriniz...");

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small> `;
*/
// console.log(fullName);

// let item = document.querySelector("ul#list>li:last-child");

/*

let item = document.querySelector("li:last-child");
item.innerHTML = "Bu Bilgi Degisti";

let item2 = document.querySelector("li:first-child");
item2.innerHTML = "Bu da degisti";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Bizim EKledigimiz li";
ulDOM.append(liDOM);

let hDom = document.createElement("a");
hDOM = innerHTML = " Link Olusturuldu mu?";
// liDOM.prepend(hDOM); // append sectigimiz elementin sona ekler , prepend basian ekler

// yukaridaki ordekte tek bir li secildigi icin linin basina veya sonuna ekler fakat ul yi secseydik ul.nin ilk li elementine prepend eklerken son elementine append ekler

liDOM.append(hDOM);

console.log(hDOM.href);
*/

/*
let ulDOM = document.querySelector("ul#list");
let ul2DOM = document.querySelector("ul#list>li:nth-child(2)");
let liDomFirst = document.createElement("li");
let liDomLast = document.createElement("li");
let liDomMiddle = document.createElement("li");

liDomFirst.innerHTML = "ILK ELEMAN";
liDomLast.innerHTML = "SON ELEMAN";
liDomMiddle.innerHTML = "MIDDLE ELEMAN";

ulDOM.prepend(liDomFirst);
ulDOM.append(liDomLast);
ul2DOM.append(liDomMiddle);

let ul3DOM = document.querySelector("ul>li:nth-child(2)");
ul3DOM.innerHTML = "Degisti";

console.log(ul2DOM);
*/

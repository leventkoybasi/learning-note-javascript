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
console.log(fullName);

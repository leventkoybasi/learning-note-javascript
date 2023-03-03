// 12 - Liste içerisindeki Öğeye Erişmek ve Yeni Öğe Eklemek

let lastChild = document.querySelector("ul#list>li:last-child");
lastChild.innerHTML = "Son Oge Deisti";

let firstChild = document.querySelector("ul#list>li:first-child");
firstChild.innerHTML = "Ilk Oge Deisti";

let newItem = document.createElement("li");
newItem.innerHTML = "Bizim Ekledigimiz Oge";
let ulDom = document.querySelector("#list");
ulDom.appendChild(newItem); // en sona ekledi
ulDom.prepend(newItem); // ilk oge olarak ekledi

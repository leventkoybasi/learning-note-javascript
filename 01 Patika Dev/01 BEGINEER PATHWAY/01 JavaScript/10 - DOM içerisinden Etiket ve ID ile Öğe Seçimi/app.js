// 10 - DOM içerisinden Etiket ve ID ile Öğe Seçimi

let title = document.getElementById("title");
title.innerHTML = "DEGISEN BILGI";
console.log(title.innerHTML);

// let link = document.querySelector("ul#list> li > a");
let link = document.querySelector("#kodluyoruzLink");

link.innerHTML += " Degisti";
console.log(link.innerHTML);
link.style.color = "beige";
link.classList.add("btn");

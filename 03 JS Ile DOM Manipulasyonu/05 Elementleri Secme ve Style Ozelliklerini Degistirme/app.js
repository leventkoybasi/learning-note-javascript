// 05 Elementleri Secme ve Style Ozelliklerini Degistirme

const element = document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);

//Style ve Element Ozelliklerini Degistirme

element.className = "btn btn-primary";
element.style.color = "#000";
element.style.marginLeft = "50px";
element.href = "http://www.google.com.tr";
element.target = "_blank";

console.log(element.textContent);

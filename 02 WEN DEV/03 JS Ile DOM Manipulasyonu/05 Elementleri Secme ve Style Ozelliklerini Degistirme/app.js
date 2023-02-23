// 05 Elementleri Secme ve Style Ozelliklerini Degistirme

// const element = document.querySelector("#clear-todos");

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

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.style.marginLeft = "50px";
// element.href = "http://www.google.com.tr";
// element.target = "_blank";
// console.log(element.textContent);
// element.textContent = "Silin";
// element.textContent = "<span>Silin</sapn>"; //Span etiketi normal yazi gibi gorundu bi etiket olarak gorunmedi bunu engellemek icin inner html kullaniriz

// element.innerHTML = "<span style = 'color: green'>Silin</span>";

// const element = document.querySelectorAll(".list-group-item"); // node list

// element.forEach(function (el) {
//   el.style.color = "red";
//   el.style.backgroundColor = "#eee";
// });

// let element2 = document.querySelector("li:first-child");
let element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelector("li:nth-child(3)");
element2 = document.querySelector("li:nth-child(4)");
element2 = document.querySelectorAll("li:nth-child(odd)");
element2 = document.querySelectorAll("li:nth-child(even)");

element2.forEach(function (el) {
  el.style.backgroundColor = "#ccc";
  el.style.color = "red";
});

console.log(element2);

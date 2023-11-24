/**
 * @type {HTMLAnchorElement}
 */
const ulElement = document.querySelector("#list");
console.log(ulElement);
ulElement.style.color = "beige";

const spanElement = document.querySelectorAll("div>p>span");
console.log(spanElement);
spanElement.forEach((spanElement) => {
  spanElement.style.color = "beige";
});

const todoFirstItem = document.querySelector("ul>.list-item:first-child");
console.log(todoFirstItem);

const todoFirstItem2 = ulElement.querySelector("li:first-child");
console.log(todoFirstItem2);

const todoFirstItem3 = document.querySelector("ul>.list-item:last-child");
console.log(todoFirstItem3);

const todoFirstItem4 = document.querySelector("ul>.list-item:nth-child(3)");
console.log(todoFirstItem4);

const divElement = document.querySelector("#app");
const h4Element = document.createElement("h4");
h4Element.innerHTML = "Ogrenmeye Devam...";
divElement.appendChild(h4Element);
h4Element.style.color = "beige";

const liElement = document.createElement("li");
// ulElement.appendChild(liElement);
ulElement.prepend(liElement);
// const userPrompt = prompt("yapilacaklar Listesine EKle");
// liElement.innerText = userPrompt;

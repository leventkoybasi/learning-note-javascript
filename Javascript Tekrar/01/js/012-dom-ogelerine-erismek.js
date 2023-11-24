// document.title = "Levent KOYBASIC";

// document.title = prompt("Title Degistir");
let tagName = document.getElementsByTagName("h1")[0].innerHTML;
console.log(tagName); //Javascript

// document.getElementById("title").innerHTML = "Levent";

console.log(document.getElementsByClassName("text-primary"));

// querySelector

//etiketle sec
const h1Element = document.querySelector("h1");
const firstTitleClass = document.querySelector(".title");
const titleId = document.querySelector("#title");

console.log(h1Element.innerHTML); //javascript
console.log(firstTitleClass.innerHTML); //javascript
console.log(titleId.innerHTML); //javascript

/**
 * @type {HTMLAnchorElement}
 */

let appElement = document.querySelector("#app");
appElement.innerHTML = "<h2>React App Buraya Eklendi.</h2>";
appElement.style.color = "beige";
appElement.style.marginTop = "20px";

const listItems = document.querySelectorAll(".list-item");
console.log("listItems", listItems);
/**
 * @type {HTMLAnchorElement}
 */
let listElement = document.querySelector(".list");
listElement.style.color = "beige";
listElement.style.marginTop = "20px";
listElement.style.borderBottom = "1px solid beige";

let spanELemnt = document.querySelector("div>p>span");
console.log(spanELemnt, spanELemnt.innerHTML);

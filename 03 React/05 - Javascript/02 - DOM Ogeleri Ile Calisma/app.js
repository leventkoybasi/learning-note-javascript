//Document Object Model - DOM Manipulasyonu

// document.title = prompt("En Sevdigin Dil Nedir?");
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// Bu yukaridakiler pek kullanilmiyor artik

//Querry Selector
//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// document.querySelector

// document.querySelectorAll

//Querry Selector Ile Etiket Secme

const h1Element = document.querySelector("h1");
const firstTitleClass = document.querySelector(".title");
const titleId = document.querySelector("#title");

console.log(h1Element.innerHTML); //Javascript
console.log(firstTitleClass.innerHTML); //Javascript
console.log(titleId.innerHTML); //Javascript
/**
 * @type {HTMLHeadElement}
 */
const appElement = document.querySelector("#app");

appElement.innerHTML = "<h2>React App Buraya Eklendi</h2>";
appElement.style.margin = "4%";

const listItems = document.querySelectorAll(".list-item");
console.log(listItems);

//Browser Object Model BOM
// https://w3schools.com/js/js_window.asp

console.log(screen.height); //1080 //Ekran boyutu
console.log(window.innerHeight); //505 // Suanda browser ekraninin gorunen kisim genisligi

//DOM'a Yeni Oge OLusturma
const todoList = document.querySelector("#todoList");
// const todoList = document.querySelector("ul#todoList");
// const todoFirstItem = document.querySelector("ul>.list-item");

const todoFirstItem = todoList.querySelector("li:first-child");
const todoThirdItem = todoList.querySelector("li:nth-child(3)");
const todoLastItem = todoList.querySelector("li:last-child");

console.log(todoList);
console.log(todoFirstItem);
console.log(todoThirdItem);
console.log(todoLastItem);

const heroElement = document.createElement("div");
heroElement.innerHTML = "<h1>Hero INFO</h1>";
heroElement.style.marginTop = "20px";
// document.body.appendChild(heroElement); //en sona ekler append

document.body.prepend(heroElement); //En basa ekler

// const userPrompt = prompt("Yapilacak Islere Eklenecek Bilgi : ");

const newTodoElement = document.createElement("li");
// newTodoElement.innerHTML = userPrompt;
newTodoElement.textContent = "Yeni EKlenen Bilgi";
todoList.append(newTodoElement);

//innerHTML yerine textContent kullanmaliyiz daha guvenilir.

// Yeni bir div elementi oluşturma
let divElement = document.createElement("div");

// Yeni bir h3 elementi oluşturma
let h3Element = document.createElement("h3");

// h3 elementinin içeriğini ayarlama
h3Element.textContent = "Yeni Eklenen Div icine H3";

// h3 elementini div elementine ekleme
divElement.appendChild(h3Element);

// Oluşturulan div elementini belirli bir yere eklemek için parent elementi seçme
let parentElement = document.querySelector("#app");

// Oluşturulan div elementini belirtilen parent elementine ekleme
parentElement.appendChild(divElement);

/*
let divElement = document.createElement("div");
let h3Element = document.createElement("h3");
h3Element.textContent = "Yeni EKlenen Oge";
divElement.appendChild(h3Element);
let appElement = document.querySelector("#app");
appElement.appendChild(divElement);
divElement.style.marginLeft = "4%";
divElement.style.outline = "2px solid white";
divElement.style.outlineOffset = "10px";
*/

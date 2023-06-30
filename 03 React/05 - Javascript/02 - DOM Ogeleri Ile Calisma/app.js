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
document.body.appendChild(heroElement);

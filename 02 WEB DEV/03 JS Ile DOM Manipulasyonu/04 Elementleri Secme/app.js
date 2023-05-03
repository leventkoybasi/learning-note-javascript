// 04 Elementleri Secme

// Elementi ID'ye Gore Secme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Class'a Gore Secme

element = document.getElementsByClassName("list-group-item")[0]; //[0] ilk li elementini secme bunu koymazsak tum li elementlerini secer

element = document.getElementsByClassName("card-header");

// Element Tag'e Gore Secme (Etiketa)

element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// Query Selector | CSS Selector | Sadece Teke ELement Doner Dikkat

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li"); //Sayfada 4 adet li elementi olmasina ragmen sadece ilk li elementini secer.

element = document.querySelector("div");

// Querry Selector ALL | (Querry Selector Sadece Bir ELement Secerken- querrySelectorAll tum elementleri secer)

element = document.querySelectorAll(".list-group-item"); //4 adet li secti

element = document.querySelector(".list-group-item"); // ilk li elementini secti

element = document.querySelectorAll(".list-group-item"); // Node List
element.forEach(function (e1) {
  console.log(e1);
});

// console.log(element);

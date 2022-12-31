// 06 DOM Elementleri Uzerinde Gezinme
let value;

// const todoList = document.getElementsByClassName("list-group"); //bunuda kullanabiliriz

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

//Child Nodes

value = todoList.childNodes; // Normalde 4 adet child var fakat satir atlamalarinida 1 chld olarak goruyor.
value = todoList.childNodes[0];

//Children ozelliginde text veya bosluklari almaz sadece elemntleri alir

value = todoList.children;
value = todoList.children[todoList.children.length - 1];
value = todoList.children[2].textContent = "degisti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Burasi da Degisti";

value = todoList;
// value = todoList.children[0]; //Bunun daha kolay yolu var asagidaki ornege bak
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;

value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;

//Element Kardesleri
//Bu kisim hatali bir bak !
value = todo;
value = todo.previousElementSibling;

console.log(value);

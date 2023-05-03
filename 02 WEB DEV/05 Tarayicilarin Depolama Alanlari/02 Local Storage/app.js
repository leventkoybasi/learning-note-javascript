//02 Local Storage

//SetItem

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

//Get Item

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

//Clear Local Storage
// localStorage.clear();

// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", "50");

// console.log(localStorage.getItem("spor"));

// if (localStorage.getItem("spor") === null) {
//   console.log("Sorguladiginiz VEri Bulunmuyor...");
// } else {
//   console.log("Sorguladiginiz Veri Bulunuyor...");
// }

//Local Storage - Array Yazma

// const todos = ["Todo 1", "Todo 2", "Todo 3"];
// // localStorage.setItem("todos", todos);

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);

const form = document.getElementById("todo-form");
const todoImput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
  const value = todoInput.value;

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(value);
  localStorage.setItem("todos", JSON.stringify(todos));

  e.preventDefault();
}

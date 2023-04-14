//ORNEK KOD
/*
const inputBox = document.querySelector("#task");
const ulDOM = document.getElementById("list");

let toDO = document.querySelector("#formInput");
toDO.addEventListener("submit", formSubmit);

let addBtn = document.querySelector("#toastWarning");
let addToast = document.querySelector("#liveToast");

function formSubmit(event) {
    event.preventDefault();
}

function setConfig() {
    list.innerHTML = localStorage.getItem("toDO");
}

console.log(inputBox);
function newElement() {
    if (inputBox.value === "") {
        toastGoster();
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ulDOM.appendChild(li);
        let btn = document.createElement("button");
        btn.innerHTML = "X";
        btn.classList.add("close");
        li.appendChild(btn);
        addToastF();
    }
    inputBox.value = "";
    addLocalStorage();
}
function addLocalStorage() {
    localStorage.setItem("toDo", list.innerHTML);
}

ulDOM.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            addLocalStorage();
        } else if (e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
            addLocalStorage();
        }
    },
    false
);

let toastGoster = () => {
    var show = new bootstrap.Toast(addBtn);
    show.show();
};
let addToastF = () => {
    var goster = new bootstrap.Toast(addToast);
    goster.show();
};
*/

let addButtonDOM = document.querySelector("#liveToastBtn");
let taskDOM = document.querySelector("#task");
let listDOM = document.querySelector("#list");
let toDo = document.querySelector("ul>li");

localStorage.setItem("myCat", "KEDIII");

addButtonDOM.addEventListener("click", addItem);
function addItem(event) {
    event.preventDefault();
    if (taskDOM.value === "") {
        console.log("Listeye bos ekleme yapamazsiniz!");
    } else {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = taskDOM.value;
        listDOM.appendChild(liDOM);

        let closeBtnDOM = document.createElement("button");
        closeBtnDOM.innerHTML = "x";
        closeBtnDOM.classList.add("close");
        closeBtnDOM.style.width = "50px";
        closeBtnDOM.style.height = "50px";
        liDOM.appendChild(closeBtnDOM);

        taskDOM.value = "";
        addLocalStorage();
    }
}

listDOM.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        addLocalStorage();
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
        addLocalStorage();
    }
});

/*
<ul id="list" style="position: relative;">
<li>3 Litre Su İç
<button style="width: 50px; height: 50px;" type="button" class="close" aria-label="Close">x</button>
</li>
*/

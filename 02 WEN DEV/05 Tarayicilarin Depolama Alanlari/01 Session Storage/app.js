// Session Storage - Key ve Value

//Butonlari Secmek

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

//Inputlari Secme

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

//Eventleri Yakalama

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);

//Function

function addItem(e) {
  sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
  sessionStorage.removeItem(deletekey.value);
}

function clearItem(e) {
  sessionStorage.clear();
}

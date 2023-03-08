// 24 - localStorage ile Veri Eklemek, Düzenlemek ve Silmek
// Benim Yaptigim Yontem (Eksikleri Var) (Duzenle)

let counter = localStorage.getItem("number");
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

increaseDOM.addEventListener("click", increaseFunction);
function increaseFunction(event) {
	counter += 1;
	counterDOM.innerHTML = counter;
	event.preventDefault();
	localStorage.setItem("number", counter);
}

decreaseDOM.addEventListener("click", decreaseFunction);
function decreaseFunction(event) {
	counter -= 1;
	counterDOM.innerHTML = counter;
	event.preventDefault();
	localStorage.setItem("number", counter);
}

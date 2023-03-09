// 26 - localStorage  Bölüm Sonu Egzersizi

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

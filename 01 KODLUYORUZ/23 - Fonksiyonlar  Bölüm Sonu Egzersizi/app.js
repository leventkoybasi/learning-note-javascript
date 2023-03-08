// 23 - Fonksiyonlar  Bölüm Sonu Egzersizi
/*
let counter = localStorage.getItem("number");
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

increaseDOM.addEventListener("click", increaseFunction);
function increaseFunction(event) {
	counter += 1;
	counterDOM.innerHTML = counter;
	// event.preventDefault();
	// localStorage.setItem("number", counter);
}

decreaseDOM.addEventListener("click", decreaseFunction);
function decreaseFunction(event) {
	counter -= 1;
	counterDOM.innerHTML = counter;
	// event.preventDefault();
	// localStorage.setItem("number", counter);
}
*/
/*

let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
	console.log(this.id);
	if (this.id == "increase") {
		counterDOM.innerHTML = counter += 1;
	} else {
		counterDOM.innerHTML = counter -= 1;
	}
}

*/

let counter = 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase");
let decreaseDOM = document.querySelector("#decrease");

counterDOM.innerHTML = counter;

increaseDOM.addEventListener("click", clickEvent);
decreaseDOM.addEventListener("click", clickEvent);

function clickEvent() {
	console.log(this.id);
	this.id == "increase" ? (counter += 1) : (counter -= 1);
	counterDOM.innerHTML = counter;
}

// 28 - Input İçerisinden Değer Almak
let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
	event.preventDefault(); //default islemini engelledik
	console.log("Islem Gerceklesti");
	let scoreInputDOM = document.querySelector("#score");
	console.log(scoreInputDOM);
}

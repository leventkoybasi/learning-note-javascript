// 28 - Input İçerisinden Değer Almak
let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
	event.preventDefault();
	console.log("Islem Gerceklesti");
}

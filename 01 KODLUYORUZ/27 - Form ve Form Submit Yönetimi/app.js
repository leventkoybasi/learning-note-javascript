// 27 - Form ve Form Submit Yönetimi

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
	event.preventDefault(); //default islemi engelledik

	console.log("ISLEM GERCEKLESTI");
}

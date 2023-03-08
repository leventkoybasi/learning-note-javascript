// 22 - DOM Etkinlikleriyle Çalışmak
// https://www.w3schools.com/jsref/dom_obj_event.asp
// https://developer.mozilla.org/en-US/docs/Web/Events

// let greeting = document.querySelector("#greeting");
// greeting = addEventListener("click", function () {
// 	console.log("Etkinlik Calisiyor");
// });

//veya
//Tiklandiginda
// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", domClick);
// function domClick() {
// 	// console.log((this.innerHTML = "Yazi Bilgisi Degisti"));
// 	// console.log((this.style.color = "red"));
// 	// this.style.color = "red";
// 	this.style.color == "red"
// 		? (this.style.color = "rgb(230, 218, 204)")
// 		: (this.style.color = "red");
// }

//Mouse uzerine geldiginde
let greeting = document.querySelector("#greeting");
greeting.addEventListener("mouseover", domClick);
function domClick() {
	// console.log((this.innerHTML = "Yazi Bilgisi Degisti"));
	// console.log((this.style.color = "red"));
	// this.style.color = "red";
	this.style.color == "red"
		? (this.style.color = "rgb(230, 218, 204)")
		: (this.style.color = "red");
}

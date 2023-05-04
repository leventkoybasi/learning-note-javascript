let myNameDOM = document.querySelector("#myName");
let myClockDOM = document.querySelector("#myClock");

let fullName = prompt("Lutfen Adinizi Giriniz...");
myNameDOM.innerHTML = fullName;

let gunArray = [
	"Pazartesi",
	"Sali",
	"Carsamba",
	"Persembe",
	"Cuma",
	"Cumartesi",
	"Pazar",
];

function showTime() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	let seconds = time.getSeconds();
	// let day = time.getDay();

	myClockDOM.innerHTML = ` ${hours} : ${minutes} : ${seconds} ${
		gunArray[time.getDay() - 1]
	}`;
}
showTime();

// console.log(day);

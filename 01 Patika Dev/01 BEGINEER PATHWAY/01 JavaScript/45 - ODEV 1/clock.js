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
    let time = new Date(); //new Date().getHours(); SEKLINDE KULLANILIR!

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();

    myClockDOM.innerHTML = ` ${hours} : ${minutes} : ${seconds} ${
        gunArray[day - 1] // new Date().getDay(); 0. INDEX PAZARDIR O YUZDEN -1
    }`;
    /*
    myClockDOM.innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} : ${
        gunArray[new Date().getDay() - 1]}`;
        */
}
showTime();

// console.log(day);

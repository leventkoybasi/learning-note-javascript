// 35 - while Döngüsü
// https://www.w3schools.com/js/js_loop_while.asp

let counter = 0;

while (counter < 10) {
    console.log(counter);
    counter += 1; //counter ++ // (0 1 2 3 4 5 6 7 8 9)
}

let userName = "";

while (!userName) {
    userName = prompt("Kullanici Bilginizi Giriniz : ");
    console.log(userName);
}

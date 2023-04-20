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

let items = [1, 2, 3, 4, 5];
let femaleUser = ["Ayse", "Hulya", "Merve"];
let maleUser = ["Ahmet", "Hasan", "Mehmet"];
let allUsers = [...femaleUser, ...maleUser];

i = 0;
while (i < allUsers.length) {
    console.log(allUsers[i]);
    i++;
}

/**
 
var x = 1;
var sonuc = 1;

while (x <= 5){

 sonuc *= x;
 x++;
}
alert(sonuc); //120
 */

// 32 - Array(Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

// https://www.w3schools.com/jsref/jsref_obj_array.asp

let items = [1, 2, 3, 4, 5];
let femaleUser = ["Ayse", "Hulya", "Merve"];
let maleUser = ["Ahmet", "Hasan", "Mehmet"];
let allUsers = [...femaleUser, ...maleUser];

i = 0;
while (i < allUsers.length) {
    console.log(allUsers[i]);
    i++;
}

// 32 - Array(Dizi) Metotlarının Kullanımı ve Array içinde Array Oluşturma

// https://www.w3schools.com/jsref/jsref_obj_array.asp

let items = [1, 2, 3, 4, 5];
let femaleUser = ["Ayse", "Hulya", "Merve"];
let maleUser = ["Ahmet", "Hasan", "Mehmet"];

// for (index = 0; index < femaleUser.length; index++) {
//     console.log(femaleUser[index]);
// }

let allUsers = [...femaleUser, ...maleUser];
// +console.log(allUsers);

// for (i = 0; i < allUsers.length; i++) {
//     console.log(allUsers[i]);
// }

//  Break Continue Kullanimi

// for (index = 0; index < allUsers.length; index += 1) {
//     if (allUsers[index] === "Hasan") {
//         break;
//     }
//     console.log(allUsers[index]);
// }

for (i = 0; i < allUsers.length; i++) {
    if (allUsers[i] === "Ahmet") {
        continue;
    }
    let listDOM = document.querySelector("#list");
    let liDOM = document.createElement("li");
    liDOM.innerHTML = allUsers[i];
    liDOM.style.color = "magenta";
    liDOM.style.listStyle = "upper-roman";
    listDOM.appendChild(liDOM);
}

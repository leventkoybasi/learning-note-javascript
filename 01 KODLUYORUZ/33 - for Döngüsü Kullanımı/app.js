// 33 - for Döngüsü Kullanımı

// https://www.w3schools.com/js/js_loop_for.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

// for ([baslangicAtamasi]; [kosulIfadesi]; [arttirimIfadesi]) {
// yapilacak islem
// }

let users = ["Lorem", "Ipsum", "Dolor"];

for (let index = 0; index < 10; index++) {
    console.log(index); // 0 1 2 3 4 5 6 7 8 9
}

for (i = 0; i < 10; i++) {
    //genelde orneklerde index yerine i gorebiliriz
    console.log(i); // 0 1 2 3 4 5 6 7 8 9
}
let index2 = 0;
for (; index2 < 10; index2++) {
    // Baslangic atamasini disardan tanimlama yapip bu bilgiyi disaridan alabiliriz.
    console.log(index2); // 0 1 2 3 4 5 6 7 8 9
}

let index3 = 0;
for (; index3 < users.length; index3++) {
    console.log(users[index3]); // Lorem Ipsum Dolor
}

let index4 = 0;
for (; index4, index4 < users.length; index4++) {
    let userListDOM = document.querySelector("#userList");
    let liDOM = document.createElement("li");
    liDOM.classList.add("list-group-item");
    liDOM.innerHTML = users[index4];
    userListDOM.appendChild(liDOM);
}

/* <li class="list-group-item">An item</li> */

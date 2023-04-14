// 29 - Formlarla Çalışmak  Bölüm Sonu Egzersizi

/*
1 - Formu Sec
2 - Input Bilgisini Bul Icine Ekle
3 - Form Icindeki Bilgiyi SifirlaLisle,
4 - Eger Forma Bilgi Girilmez ise Kullaniciyi Uyar
*/

let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");
const alertFunction = (
    title,
    message,
    className = "waening"
) => ` <div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong>${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div> `;
function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector("#username");
    const SCORE = document.querySelector("#score");
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = ""; //Gonderdikten sonra sifirladik
        SCORE.value = ""; //Gonderdikten sonra sifirladik
    } else {
        console.log("Hatali Giris");
        alertDOM.innerHTML = alertFunction(
            "Baslik Bilgisi",
            "Eksik Bilgi Girdiniz.",
            "danger"
        );
    }
}
/*  
<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill"> 14 </span>
</li>
*/

let userListDOM = document.querySelector("#userList");

const addItem = (userName, score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span>`;
    liDOM.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
    );
    userListDOM.append(liDOM);
};

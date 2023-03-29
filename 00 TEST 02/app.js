// 29 - Formlarla Çalışmak  Bölüm Sonu Egzersizi

/*
1 - Formu Sec
2 - Input Bilgisini Bul Icine Ekle
3 - Form Icindeki Bilgiyi Sifirla
4 - Eger Forma Bilgi Girilmez ise Kullaniciyi Uyar
*/

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formHandler);
const alertDOM = document.querySelector("#alert");

const alertFunction = (
    title,
    message,
    className = "warning"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

function formHandler(event) {
    event.preventDefault();

    const username = document.querySelector("#username");
    const score = document.querySelector("#score");
    if (username.value && score.value) {
        addItem(username.value, score.value);
        (username.value = ""), (score.value = "");
    } else {
        alertDOM.innerHTML = alertFunction(
            "Noluyoo Lan",
            "Eksik Bilgi Girdiniz!",
            "success"
        );
    }
}

let userListDOM = document.querySelector("#userList");
const addItem = (username, score) => {
    let liDOM = document.createElement("li");
    liDOM.innerHTML = `${username} <span class="badge bg-primary rounded-pill">${score}</span>`;
    liDOM.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
        "rounded-pill"
    );
    userListDOM.appendChild(liDOM);
};

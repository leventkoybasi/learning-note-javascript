// 29 - Formlarla Çalışmak  Bölüm Sonu Egzersizi

/*
1 - Formu Sec
2 - Input Bilgisini Bul Icine Ekle
3 - Form Icindeki Bilgiyi Sifirla
4 - Eger Forma Bilgi Girilmez ise Kullaniciyi Uyar
*/

let formDOM = document.querySelector("#userForm");
formDOM.addEventListener("submit", formHandler);

function formHandler(event) {
    event.preventDefault();
    const username = document.querySelector("#username");
    const score = document.querySelector("#score");

console.log(username.value, score.value);
}

/*  
<li class="list-group-item d-flex justify-content-between align-items-center">
A list item
<span class="badge bg-primary rounded-pill"> 14 </span>
</li>
*/

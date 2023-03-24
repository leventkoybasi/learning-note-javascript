// 29 - Formlarla Çalışmak  Bölüm Sonu Egzersizi

/*
1 - Formu Sec
2 - Input Bilgisini Bul Icine Ekle
3 - Form Icindeki Bilgiyi Sifirla
4 - Eger Forma Bilgi Girilmez ise Kullaniciyi Uyar
*/

let userFormDOM = document.querySelector("#userForm");
userFormDOM.addEventListener("submit", formHandler);

function formHandler(event) {
	event.preventDefault();
	const USER_NAME = document.querySelector("#username");
	const SCORE = document.querySelector("#score");
}

function addItem(userName, score) {}

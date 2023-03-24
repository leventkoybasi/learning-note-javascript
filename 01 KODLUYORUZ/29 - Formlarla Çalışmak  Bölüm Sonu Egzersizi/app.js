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
	addItem(USER_NAME.value, SCORE.value);
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
	liDOM.innerHTML = `${username} ${score}`;
	liDOM.classList.add(
		"list-group-item",
		"d-flex",
		"justify-content-between",
		"align-items-center"
	);
	userListDOM.appendChild(liDOM);
};

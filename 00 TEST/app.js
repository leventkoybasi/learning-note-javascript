// <h1 class>Levent KOYBASI</h1>

/* const elementh1 = document.createElement("h1");
const text = document.createTextNode("Levent KOYBASI");
elementh1.appendChild(text);
document.body.appendChild(elementh1);
<h1>Levent KOYBASI</h1> */

/* 
The Element Object
The appendChild() Method
Coffee
Tea
Water
Water
Click "Append" to append an item to the end of the list:

Append
*/

/*
function myAppendFunction() {
  const newList = document.createElement("li");
  const text = document.createTextNode("Water");
  newList.appendChild(text);
  document.getElementById("myList").appendChild(newList);
}
function myRemoveFunction() {
  const list = document.getElementById("myList");
  if (list.hasChildNodes()) {
    list.removeChild(list.lastElementChild);
  }
}
*/

let username = "levent";
const DOMAIN = "kodluyoruz.org";

let email = username + "@" + DOMAIN;

let info = ` Merhaba ${username} sitemize hosgeldin... Mail adresin: ${email}
KISA ISMINIZ: ${username[0] + username[1]}
mail adreisnin uznlugu ${email.length}
gunun saat bilgisi: ${new Date().getHours()}
`;
console.log(info);

/*
let email = "leventkoybasi@hotmail.com";
let firstName = "Levent";
let lastName = "KOYBASI";

console.log(`${email} ${email.length} Karakter uzunlugundadir.`);
console.log(firstName[0]);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

console.log(email.search("@"));
console.log(email[13]);
console.log(email.slice(0, 13));
console.log(email.slice(13));

const DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);
console.log(email.slice(email.search("@") + 1));

console.log(email.slice(0, email.search("@")));

console.log(DOMAIN);
console.log(DOMAIN.slice(0, email.search("c") - 3));

*/

/*

let element = document.querySelector("#title");

element.style.color = "red";

console.log(element);
title.innerHTML = "Degisen Bilgi";
console.log(title.innerHTML);

let link = document.querySelector("ul#list>li>a");
link.innerHTML = "Link Bilgisi Degisti";
link.style.color = "blue";
link.classList.add("btn");
// https://www.w3schools.com/jsref/dom_obj_style.asp //HTML DOM Style Object
// link.style.textDecoration = "none";
link.style.textDecorationColor = "red";
console.log(link);

let fullName = prompt("Adinizi Giriniz...");

let greeting = document.querySelector("#greeting");

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small> `;
*/
// console.log(fullName);

// let item = document.querySelector("ul#list>li:last-child");

/*

let item = document.querySelector("li:last-child");
item.innerHTML = "Bu Bilgi Degisti";

let item2 = document.querySelector("li:first-child");
item2.innerHTML = "Bu da degisti";

let ulDOM = document.querySelector("ul#list");
let liDOM = document.createElement("li");
liDOM.innerHTML = "Bizim EKledigimiz li";
ulDOM.append(liDOM);

let hDom = document.createElement("a");
hDOM = innerHTML = " Link Olusturuldu mu?";
// liDOM.prepend(hDOM); // append sectigimiz elementin sona ekler , prepend basian ekler

// yukaridaki ordekte tek bir li secildigi icin linin basina veya sonuna ekler fakat ul yi secseydik ul.nin ilk li elementine prepend eklerken son elementine append ekler

liDOM.append(hDOM);

console.log(hDOM.href);
*/

/*
let ulDOM = document.querySelector("ul#list");
let ul2DOM = document.querySelector("ul#list>li:nth-child(2)");
let liDomFirst = document.createElement("li");
let liDomLast = document.createElement("li");
let liDomMiddle = document.createElement("li");

liDomFirst.innerHTML = "ILK ELEMAN";
liDomLast.innerHTML = "SON ELEMAN";
liDomMiddle.innerHTML = "MIDDLE ELEMAN";

ulDOM.prepend(liDomFirst);
ulDOM.append(liDomLast);
ul2DOM.append(liDomMiddle);

let ul3DOM = document.querySelector("ul>li:nth-child(2)");
ul3DOM.innerHTML = "Degisti";

console.log(ul2DOM);
*/

//If Yapisi
/*
let username = prompt("Kullanici Adini Giriniz!");

if (username.length > 0) {
  console.log(`Kullanici Bilginiz ${username}'dir.`);
} else {
  console.log("Bir kullanici adi yazmalisiniz.");
}
*/

/*
let username = prompt("Kullanici Adiniz:");
let age = prompt("Yasiniz:");
let title = document.querySelector("#title");

if (username.length > 0 && age > 18) {
  title.innerHTML = `${username} yasiniz 18'den buyuk oldugu icin ehliyet alabilirsiniz.`;
} else if (username.length <= 0) {
  title.innerHTML = "Gecerli bir kullanici adi giriniz.";
} else if (!age) {
  title.innerHTML = "Lutfen Yasinizi GIriniz";
} else if (age < 18) {
  title.innerHTML = `${username} yasiniz , 18'den kucuk oldugu icin ehliyet alamazsiniz!`;
}
*/

/*
// ternary kullanimi:
// kisul ? dogruysa : yanlissa

let username = prompt("Kullanici Adinizi Giriniz: ");
let title = document.querySelector("#title");

// title.innerHTML = ` ${
//   username.length > 0 ? username : "Kullanici Adiniz Bulunamadi"
// } `;
title.innerHTML = ` ${username ? username : "Kullanici Adiniz Bulunamadi"} `;

*/

//Fonksiyonlar
/*
function Hello() {
  console.log("Hello");
}

function merhaba() {
  Hello();
  console.log("Merhaba Dunya");
}
merhaba();
*/

/*
Kosullkarla Calisma Bolum Sonu Egzersizi
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA 90-100
BA 85-89
BB 80-84
CB 75-79
CC 70-74
DC 65-69
DD 60-64
FD 50-59
FF 0-49

2- kullanicinin girdigi verinin istedigimiz aralikta olup lmadigini kontrol et
3- ff bilgisine uzgun surat ikonu cikart' digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/

/*

let note = prompt("Ogrenmek Istediginiz Notu GIriniz: ");
let title = document.querySelector("#title");

if (note >= 0 && note < 50) {
  title.classList.add("text-danger");
  title.innerHTML = " Notunuz FF 'dir. : ( ";
} else if (note >= 50 && note <= 59) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz FD 'dir. : )";
} else if (note >= 60 && note <= 64) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz DD 'dir. : ) ";
} else if (note >= 65 && note <= 69) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz DC 'dir. : )";
} else if (note >= 70 && note <= 74) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz CC 'dir. : )";
} else if (note >= 75 && note <= 79) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz CB 'dir. : )";
} else if (note >= 80 && note <= 84) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz BB 'dir. : )";
} else if (note >= 85 && note <= 89) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz BA 'dir. : ) ";
} else if (note >= 90 && note <= 100) {
  title.classList.add("text-primary");
  title.innerHTML = " Notunuz AA 'dir. : ) ";
} else if (!note) {
  title.classList.add("text-primary");
  title.innerHTML = " 0 ile 100 Arasinda Bir Not Giriniz";
} else {
  title.classList.add("text-primary");
  title.innerHTML = " Girmis Oldugunuz Not 0 ile 100 arasinda olmalidir. ";
}

*/

/*

const SMILE = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

const FROWN = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`;

let examGrade = prompt("Puani Girin");
let textInfo;
let title = document.querySelector("#title");

if (examGrade >= 0 && examGrade <= 100) {
  //Tum if yapilari buraya gelsin

  textInfo = SMILE;
  title.classList.add("text-primary");
  if (examGrade >= 90) {
    textInfo += "AA";
  } else if (examGrade >= 85) {
    textInfo += "BA";
  } else if (examGrade >= 80) {
    textInfo += "BB";
  } else if (examGrade >= 75) {
    textInfo += "CB";
  } else if (examGrade >= 70) {
    textInfo += "CC";
  } else if (examGrade >= 65) {
    textInfo += "DC";
  } else if (examGrade >= 60) {
    textInfo += "DD";
  } else if (examGrade >= 50) {
    textInfo += "FD";
  } else if (examGrade < 50) {
    textInfo = `${FROWN} FF`;
    title.classList.remove("text-primary");
    title.classList.add("text-danger");
  }
} else {
  textInfo = "Bilgiler Dogru Degil";
}

title.innerHTML = `${textInfo}  -->  ${examGrade}`;


*/

// let item = document.querySelector("#title");
// item.classList.add("yeniCLass");
// item.classList.add("2class");
// item.setAttribute("id", "yeniid");
// console.log(item.className);
/*
let element = document.querySelector("#title");
let button = document.querySelector("#button");
element.classList.add("text-primary");

function myFunction() {
  if (element.classList == "text-primary") {
    element.setAttribute("class", "text-danger");
  } else if (element.classList == "text-danger") {
    element.setAttribute("class", "text-primary");
  }
}
*/
//tenary operator kullanimi
/*
let element = document.querySelector("#title");
let button = document.querySelector("#button");
element.classList.add("text-primary");
function myFunction() {
  element.classList == "text-danger"
    ? (element.classList = "text-primary")
    : (element.classList = "text-danger");
}
*/
/*
let ulList = document.querySelector("ul#list");
let liList = document.createElement("a");
liList.href = "http://www.google.com.tr";
liList.style.textDecoration = "none";
liList.target = "_blank";
// liList.innerHTML = "Levent";
textnode = document.createTextNode("KOYBASI");
liList.appendChild(textnode);

ulList.appendChild(liList);

console.log(liList.innerHTML);
*/

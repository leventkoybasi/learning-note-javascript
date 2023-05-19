// 24 - localStorage ile Veri Eklemek, Düzenlemek ve Silmek
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

localStorage.setItem("myCat", "KEDIII");
localStorage.setItem("myDog", "KOPEKK");
localStorage.setItem("myBird", "KUSSS");

console.log(localStorage.getItem("myCat")); //KEDIII
console.log(localStorage.getItem("myDog")); //KOPEKK
console.log(localStorage.getItem("myBird")); // KUSSS

localStorage.removeItem("myBird");
console.log(localStorage.getItem("myBird")); // null

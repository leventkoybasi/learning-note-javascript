//13 - DOM'a CSS Class Bilgisi Eklemek veya Çıkarmak

let greeting = document.querySelector("#greeting");
greeting.classList.add("text-primary"); //yeni clas ekler
greeting.classList.add("title");
greeting.classList.add("new-info", "second-info", "third-info"); //Birden fazla class ekleme

greeting.classList.remove("title", "second-info", "third-info"); // class silme
console.log(greeting.classList);

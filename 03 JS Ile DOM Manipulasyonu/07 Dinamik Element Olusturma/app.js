// 07 Dinamik Element Olusturma
//  <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");

const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com/";
newLink.target = "_blank";

//Text Content

newLink.textContent = "Farkli Sayfaya Git"; // a etiketinin icerisinde baska elementlerde varsa textcontent ile tum elementler silinerek sadece bu icedrik eklenir. Genelde kullanmiyoruz...

// cardbody.textContent = "TUM CARDBODY ICERIGI SILINDI";

//text node

// const text = document.createTextNode("NABER");
// cardbody.appendChild(text);
// console.log(cardbody);

newLink.appendChild(document.createTextNode("Farkli Sayfaya GIt"));
cardbody.appendChild(newLink);

console.log(newLink);

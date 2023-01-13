//05 Event Capturing ve Bubbling Olaylari

// //Event Bubbling

// document.querySelector(".container").addEventListener("click", function () {
//   console.log("Div Container");
// }); //Event bubbling sayesinde event kabarciklanarak parentina da geciyor boylelikle secilen .container disinda da event calisiyor.

// document.querySelector(".card.row").addEventListener("click", function () {
//   console.log("Card Row");
// });

// document
//   .querySelectorAll(".card-body")[1]
//   .addEventListener("click", function () {
//     console.log("Card Body");
//   }); //h5 basildiginda  event bubbling sayesinde event yukarlara yani paretlarada tasinarak, Card Body , Card Row , Div Container'in hepsi calisir.

// Event Capturing veya Delegation (Event bubblingin tam tersi)

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("Silme Islemi");
  }
  if (e.target.id === "filter") {
    console.log("Filtreleme Islemi");
  }
  if (e.target.id === "clear-todos") {
    console.log("Tum Tasklari Silme Islemi");
  }
}

//   e.target ile tikladigimiz yeri gorebiliyor sonrasinda ic ve classi tanimladigimizda fonksiyona sunu soyluyoruz. tekladigimiz alanin id'si veya clasi hem deger hem type baksiminda esitmi kontrolunu gerceklestiriyuoruz kosul saglandiginda ekrana yazdiriliyor.

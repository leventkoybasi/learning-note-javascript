//01 Event Listeners ve Event Objesi Kullanma

const filterinput = document.getElementById("filter");

// filterinput.onfocus = function(){
//   //Eski YOntem
//   console.log("Naber");
// }

// filterinput.addEventListener("focus", function () {
//   console.log("Naber"); // Odaklandiginda yani focus dusumunda fonksiyon doner ve naber yazisi consola yazilir

// filterinput.addEventListener("focus", function (e) {
//   console.log("naber");
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.placeholder);
//   console.log(e.target.className);

// }); //Event parametresi geonderir ve event halkkinda daha fazla bilgiye ulasisiriz

const todoform = document.getElementById("todo-form");

todoform.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit Eventi");
  e.preventDefault(); // preventDefult bu submit eventini prevent defult ozelliklerini yok sayiyor ve sayfanin yenilenmesini engelliyor.
}

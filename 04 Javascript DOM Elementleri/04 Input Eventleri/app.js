//04 Input Eventleri

const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded", load); //DOMContentLoaded tum sayfa yukledigi zaman event gercekleksir

// function load(e) {
//   console.log("Sayfa Yuklendi");
// }

// //Focus - Blur Eventi

// filter.addEventListener("focus", run); //Sectiogimiz elemente focus olundugunda event calisir
// filter.addEventListener("blur", run); //focuslandigimiz elementten ciktigimizda event calisir

// function run(e) {
//   console.log(e.type);
// }

//Paste Eventi
filter.addEventListener("paste", run); //Paste ile yapistirdigimiz zaman event calisir.

function run(e) {
  console.log(e.type);
}

//Copy Eventi
filter.addEventListener("copy", run); //Copy ile kopyaladigimiz  zaman event calisir.

function run(e) {
  console.log(e.type);
}
//Cut Eventi
filter.addEventListener("cut", run); //Cut ile kestigimiz zaman event calisir.

function run(e) {
  console.log(e.type);
}

//Select Eventi
filter.addEventListener("select", run); //Select  ile sectigimiz  zaman event calisir.

function run(e) {
  console.log(e.type);
}

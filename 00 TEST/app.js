const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click", run);

function run(e) {
  if (e.target.className === "fa fa-remove") {
    console.log("Silme Islemi");
  }
  if (e.target.className === "list-group-item d-flex justify-content-between") {
    console.log("ToDo Gir");
  }
  if (e.target.id === "clear-todos") {
    console.log("Tüm Taskları Temizleyin");
  }
}

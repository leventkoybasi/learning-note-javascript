const a = document.getElementById("deneme");
const b = document.getElementById("clear-todos");

b.addEventListener("click", writeText);

function writeText() {
  document.getElementById("deneme").innerHTML += " Levent";
}

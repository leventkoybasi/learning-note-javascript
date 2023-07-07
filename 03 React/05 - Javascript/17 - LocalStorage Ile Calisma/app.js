const btn = document.querySelector("#save");
btn.addEventListener("click", () => {
  const colorInputElement = document.querySelector("#color");
  console.log(colorInputElement.value);
  localStorage.setItem("bgColor", colorInputElement.value);
});
const showBtn = document.querySelector("#show");
showBtn.addEventListener("click", clickShowBtn);
function clickShowBtn() {
  const colorInputElement = document.querySelector("#color");
  const bgColorValue = localStorage.getItem("bgColor");
  console.log(bgColorValue);
  colorInputElement.value = bgColorValue;
  document.body.style.backgroundColor = bgColorValue;
}

//Local Storage Icerisindeki Bilgiyi Silmek
// localStorage.removeItem("")
localStorage.removeItem("bgColor");
const eraseBtn = document.querySelector("#erase");
eraseBtn.addEventListener("click", () => {
  // localStorage.clear();
  localStorage.removeItem("bgColor");
  document.body.style.backgroundColor = "hsl(220, 5.08%, 11.57%)";
});

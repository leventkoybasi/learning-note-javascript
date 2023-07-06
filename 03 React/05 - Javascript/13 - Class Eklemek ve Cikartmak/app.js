//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const titleElement = document.querySelector("#title");
console.log(titleElement); //h1#title.title.text-primary
console.log(titleElement.classList); //DOMTokenList(2) ['title', 'text-primary', value: 'title text-primary']

titleElement.classList.remove("text-primary", "title");
console.log(titleElement.classList); //DOMTokenList [value: '']

titleElement.classList.add("text-info", "display-1");
console.log(titleElement.classList); //DOMTokenList(2) ['text-info', 'display-1', value: 'text-info display-1']

titleElement.classList.toggle("bg-primary"); //toggle ekle cikar isleri yapiyor bg-primary class.i varsa cikartir, fakat yoksa ekler. toggle on/off gibi kullanabiliriz

const btn = document.querySelector("#hideJavascript");
btn.addEventListener("click", toggleTitle);
function toggleTitle() {
  const h1Element = document.querySelector("#title");
  // h1Element.classList.toggle("d-none");
  h1Element.classList.toggle("invisible");
}

//Yerinde function yazmak

const btn2 = document.querySelector("#hideText");
btn2.addEventListener("click", function () {
  const pElement = document.querySelector("#info");
  pElement.classList.toggle("invisible");
});

//Arrow Function Ile yazmak
const btn3 = document.querySelector("#hideImg");
btn3.addEventListener("click", () => {
  const imgElement = document.querySelector("#image");
  imgElement.classList.toggle("invisible");
});

//Mouse Enter

const mouseEnter = document.querySelector("#image");
mouseEnter.addEventListener("mouseenter", () => {
  console.log("Mous ENTER");
  document.body.classList.add("bg-dark", "bg-opacity-50");
});

const mouseOut = document.querySelector("#image");
mouseOut.addEventListener("mouseout", () => {
  console.log("Mous OUT");
  document.body.classList.remove("bg-dark", "bg-opacity-50");
});

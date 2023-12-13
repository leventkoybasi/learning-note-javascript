// const titleELement = document.querySelector("#title");
// titleELement.classList.remove("text-primary");
// titleELement.classList.add("text-danger", "display-1");
// titleELement.classList.toggle("bg-secondary");

// const hideTitleElement = document.querySelector("#hideTitle");
// hideTitleElement.addEventListener("click", () => {
//   const titleELement = document.querySelector("#title");
//   titleELement.classList.toggle();
// });

const btn = document.querySelector("#hideTitle");

// 1. yontem

// btn.addEventListener("click", toggleTitle);
// function toggleTitle() {
//   console.log("toggle calisiyor mu?");
//   const h1Element = document.querySelector("#title");
//   h1Element.classList.toggle("hidden");
//   // h1Element.classList.toggle("d-none");
// }

// 2. yontem

// btn.addEventListener("click", function () {
//   const h1Element = document.querySelector("#title");
//   h1Element.classList.toggle("hidden");
//   // h1Element.classList.toggle("d-none");
// });

// 3. yontem

btn.addEventListener("click", () => {
  const h1Element = document.querySelector("#title");
  h1Element.classList.toggle("hidden");
  //   // h1Element.classList.toggle("d-none");
});

const h1Element = document.querySelector("#title");

h1Element.addEventListener("mouseenter", () => {
  console.log("ICERIDEYIM");
  // document.body.classList.add("bg-dark", "bg-opacity-50");
  h1Element.classList.toggle("bg-light");
});
h1Element.addEventListener("mouseout", () => {
  console.log("DISARIDAYIM");
  // document.body.classList.remove("bg-dark", "bg-opacity-50");
  h1Element.classList.toggle("bg-light");
});

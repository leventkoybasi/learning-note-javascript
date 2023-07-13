// Single Page Application (SPA)
// https://developer.mozilla.org/en-US/docs/Web/API/Location
// https://developer.mozilla.org/en-US/docs/Glossary/SPA

console.log("window.location.hash", window.location.hash);
console.log("window.location.port :", window.location.port);
console.log("window.location.host :", window.location.host);
console.log("window.location.hostname :", window.location.hostname);

const hashLinks = document.querySelectorAll(".hash-route-link");
const routes = {
  "": {
    title: "Ana Sayfa",
  },
  "#about": {
    title: "About Us",
  },
  "#todos": {
    title: "Todo List",
  },
  "#contact": {
    title: "Contact",
  },
};
hashLinks.forEach((item) =>
  item.addEventListener("click", (event) => {
    console.log(item.hash);
    console.log(event);
  })
);

function checkRoute() {
  console.log(routes[window.location.hash]);
}

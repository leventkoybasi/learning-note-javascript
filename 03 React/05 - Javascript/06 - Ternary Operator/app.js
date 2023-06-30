// Ternary Operator

const userName = "Levent KOYBASI";
const age = 35;
const h3TitleElement = document.querySelector("#app");

// if (age >= 18) {
//   h3TitleElement.innerHTML = `Sitremize Hosgeldin ${userName}`;
// } else {
//   h3TitleElement.innerHTML = `Siztemize Giris Yapamazsin ${userName}`;
// }

//https://www.w3schools.com/react/react_es6_ternary.asp
//kosul ? dogruysa : yanlissa
const info =
  age >= 18
    ? `Sitemize Hosgeldiniz ${userName}`
    : `Siteye Giris Yapilamadi ${userName}`;
h3TitleElement.innerHTML = info;

const name = "Levent KOYBASI";
const age = 11;

const idTitleElement = document.querySelector("#title");

// if (age >= 18) {
//   idTitleElement.innerHTML = `Sitemize Hosgeldin ${name}`;
// } else {
//   idTitleElement.innerHTML = `Sitemize Giris Yapamazsin, Uzgunum ${name}`;
// }

// kosul? dogruysa : yanlissa

// age >= 18
//   ? (idTitleElement.innerHTML = `Sitemize Hosgeldin ${name}`)
//   : (idTitleElement.innerHTML = `Sitemize Giris Yapamazsin, Uzgunum ${name}`);

idTitleElement.innerHTML = `${
  age >= 18
    ? "Sitemize Hosgeldin" + " " + name
    : "Sitemize Giris Yapamazsin, Uzgunum" + " " + name
}`;

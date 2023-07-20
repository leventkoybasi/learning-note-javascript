import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@picocss/pico";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 

- [x] Default Olarak Hicbir Gorsel Secilmesin ve Bu  Durumda Gorsel Secilmedi Component Ekranda Gozuksun

- [x] Product Icerisinde id, name, imgName, thumbnail, isAvailable(true/false), isActive(false)

- [x] Lorem Picsum Gorselleri imgName icerisinde ve thumbnail icerisinde tutulsun.

- [x] bolum sonu calismasi v1 deki layout Uygulansin...

- [x] imgThumbnail altinda sec buttonu olsun ve sec dedigimizde isActive true olsun.

*/

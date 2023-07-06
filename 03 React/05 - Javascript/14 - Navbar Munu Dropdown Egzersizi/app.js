const dropdownMenus = document.querySelectorAll(".dropdown"); // 1 - tum dropdown class olan yapilari sec
dropdownMenus.forEach((menuItem) => {
  // 2 - herbirini foreach ile dondur
  menuItem.addEventListener("click", () => {
    // 3 - Herbir menuye listener ekle
    const dropDown = menuItem.querySelector(".dropdown-menu"); // 4 - menuyu bul
    dropDown.classList.toggle("open"); // 5 - open classi ekle
  });
});

// Baska bir yere tiklandiginda Menu Kapansin
document.body.addEventListener("click", (event) => {
  //console.log(event.target);
  dropdownMenus.forEach((menuItem) => {
    const dropDown = menuItem.querySelector(".dropdown-menu");
    if (event.target != menuItem && event.target != dropDown) {
      dropDown.classList.remove("open");
    }
  });
});

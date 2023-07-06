const dropdownElement = document.querySelector(".dropdown");
dropdownElement.addEventListener("click", () => {
  const dropdownMenuElement = document.querySelector(".dropdown-menu");
  dropdownMenuElement.classList.toggle("open");
});

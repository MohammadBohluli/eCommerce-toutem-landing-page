const collapsible = document.querySelector(".collapsible");
const navList = document.querySelector(".nav__list");
const searchBox = document.querySelector(".search-box");

const handlerClick = function () {
  navList.classList.toggle("show-content");
  searchBox.classList.toggle("show-content");
};
collapsible.addEventListener("click", handlerClick);

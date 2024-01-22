const collapsible = document.querySelector(".collapsible");
const navList = document.querySelector(".nav__list");
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-btn");
const searchWrapper = document.querySelector(".search-wrapper");

const handlerClick = function () {
  navList.classList.toggle("show-content");
  searchBox.classList.toggle("show-content");
  searchWrapper.classList.toggle("show-content");
};
collapsible.addEventListener("click", handlerClick);

searchBtn.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});

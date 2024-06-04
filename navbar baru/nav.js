const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle("active");
  hamburgerMenu.classList.toggle("hamburger-menu-active");
  e.preventDefault();
};

const searchform = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
  searchform.classList.toggle("active");
  searchBox.focus();
  searchButton.classList.toggle("search-button-active");
  e.preventDefault();
};

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    hamburgerMenu.classList.remove("hamburger-menu-active");
  }

  if (!searchButton.contains(e.target) && !searchform.contains(e.target)) {
    searchform.classList.remove("active");
    searchButton.classList.remove("search-button-active");
  }
});

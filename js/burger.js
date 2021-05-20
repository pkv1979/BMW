const menuElem = document.querySelector(".menu");
const hamburgerElem = document.querySelector(".humburger-menu");
const menuItemElem = document.querySelectorAll(".menu-list__item");

const toggleMenu = () => {
  menuElem.classList.toggle("menu-active");
  hamburgerElem.classList.toggle("humburger-menu-active");
};

hamburgerElem.addEventListener("click", toggleMenu);

menuItemElem.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

const navLinks = document.querySelector(".nav-links");
const hamburgerMenuButtonOpen = document.querySelector(
  ".hamburger-menu-button-open"
);
const hamburgerMenuButtonClose = document.querySelector(
  ".hamburger-menu-button-close"
);
const main = document.querySelector("main");
const footer = document.querySelector("footer");

const media = window.matchMedia("(max-width: 500px)");
function updateNavbar(event) {
  const isSmartPhone = event.matches;
  if (isSmartPhone) {
    navLinks.setAttribute("inert", "");
  } else {
    navLinks.removeAttribute("inert");
  }
}
media.addEventListener("change", (event) => updateNavbar(event));
updateNavbar(media);
// function Open side bar
function openMenu() {
  main.classList.add("menu-open");
  footer.classList.add("menu-open");
  navLinks.classList.add("open");
  hamburgerMenuButtonOpen.setAttribute("aria-expanded", "false");
  hamburgerMenuButtonClose.setAttribute("aria-expanded", "true");
  hamburgerMenuButtonClose.classList.add("delay");
  // remove inert when open the side bar
  navLinks.removeAttribute("inert");
}
// function Close side bar
function closeMenu() {
  main.classList.remove("menu-open");
  footer.classList.remove("menu-open");
  navLinks.classList.remove("open");
  hamburgerMenuButtonOpen.setAttribute("aria-expanded", "true");
  hamburgerMenuButtonClose.setAttribute("aria-expanded", "false");
  hamburgerMenuButtonClose.classList.remove("delay");
  // add inert when close the side bar
  navLinks.setAttribute("inert", "");
}
// Open Menu
hamburgerMenuButtonOpen.addEventListener("click", openMenu);
// Close Menu
hamburgerMenuButtonClose.addEventListener("click", closeMenu);
main.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target)) {
    closeMenu();
  }
});
footer.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target)) {
    closeMenu();
  }
});

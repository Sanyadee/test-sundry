const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector("header nav");
const overlay = document.querySelector(".page-overlay");

function toggleMenu() {
  navLinks.classList.toggle("is-open");
  nav.classList.toggle("menu-open");
  overlay.classList.toggle("is-visible");

  const menuIsOpen = navLinks.classList.contains("is-open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
}

menuButton.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

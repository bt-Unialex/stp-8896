const overlay = document.querySelector("[data-mobmenu-overlay]");
const openBtn = document.querySelector("[data-action='modal-open']");
const closeBtn = document.querySelector("[data-action='modal-close']");
const navLinks = document.querySelectorAll("[data-nav-item]");
const menuLinks = document.querySelectorAll("[data-header-link]");


openBtn.addEventListener("click", () => {
    overlay.dataset.visible = "open";
});

closeBtn.addEventListener("click", () => {
    overlay.dataset.visible = "close";
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
      overlay.dataset.visible = "close";
    });
});

document.addEventListener("DOMContentLoaded", () => {
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.forEach(l => l.setAttribute("data-active", "false"));
      link.setAttribute("data-active", "true");
    });
  });
});

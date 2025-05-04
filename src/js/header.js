const overlay = document.querySelector("#mobmenu-overlay");
const openBtn = document.querySelector("[data-action='modal-open']");
const closeBtn = document.querySelector("[data-action='modal-close']");
const navLinks = document.querySelectorAll("#mobmenu-nav-item");
const menuLinks = document.querySelectorAll('.header-nav-link');


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
  if (menuLinks.length > 0) {
    menuLinks[0].classList.add('active');
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuLinks.forEach(l => l.classList.remove('active'));

      link.classList.add('active');
    });
  });
});

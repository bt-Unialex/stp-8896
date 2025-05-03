document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector("[data-popup-overlay]");
    const accept = document.querySelector("[data-popup-accept]");
    const decline = document.querySelector("[data-popup-decline]");
    const cookiesChosen = localStorage.getItem("cookiesChosen");

    if (!cookiesChosen) {
      popup.setAttribute("data-visible", "open");
      document.body.setAttribute("data-no-scroll", "");
    }

    accept.addEventListener("click", event => {
        event.preventDefault();
        localStorage.setItem("cookiesChosen", "accepted");
        closePopup();
    });

    decline.addEventListener("click", event => {
        event.preventDefault();
        localStorage.setItem("cookiesChosen", "declined");
        closePopup();
    });

    function closePopup() {
        popup.setAttribute("data-visible", "close");
        document.body.removeAttribute("data-no-scroll");
    }
});

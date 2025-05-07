document.addEventListener('DOMContentLoaded', () => {
  const LOCAL_STORAGE_KEY = 'cookiesChosen';
  const cookiesChosen = localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!cookiesChosen) {
    const popup = document.querySelector('[data-popup-overlay]');
    popup.setAttribute('data-visible', 'open');
    document.body.setAttribute('data-no-scroll', '');

    const handleClick = evt => {
      const choice = evt.target.dataset.popupBtn;
      if (choice) {
        localStorage.setItem(LOCAL_STORAGE_KEY, choice);
        popup.setAttribute('data-visible', 'close');
        document.body.removeAttribute('data-no-scroll');
        popup.removeEventListener('click', handleClick);
      }
    };
    popup.addEventListener('click', handleClick);
  }
});

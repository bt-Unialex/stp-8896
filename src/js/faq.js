const faqAccordion = document.querySelector('[data-accordion="faq"]');

faqAccordion.addEventListener('click', evt => {
  const accPanel = evt.target.closest('li');
  if (accPanel === null) {
    return;
  }

  const currentOpen = faqAccordion.querySelector('[data-ac="open"]');
  // console.log(currentOpen);
  if (currentOpen) {
    currentOpen.dataset.ac = 'close';
  }
  accPanel.dataset.ac = 'open';
  // console.log(accPanel === currentOpen);
  if (accPanel === currentOpen && currentOpen) {
    accPanel.dataset.ac = 'close';
  }
});

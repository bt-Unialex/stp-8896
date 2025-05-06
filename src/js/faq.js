const faqAccordion = document.querySelector('[data-accordion="faq"]');

faqAccordion.addEventListener('click', evt => {
  const accPanel = evt.target.closest('li');
  if (accPanel === null) {
    return;
  }

  if (accPanel.dataset.ac === 'open') {
    closeTab(accPanel);
  } else {
    const currentOpen = faqAccordion.querySelector('[data-ac="open"]');
    if (currentOpen) {
      closeTab(currentOpen);
    }
    openTab(accPanel);
  }

  function openTab(el) {
    const panel = el.lastElementChild;
    el.dataset.ac = 'open';
    panel.style.height = panel.scrollHeight + 'px';
    // panel.addEventListener(
    //   'transitionend',
    //   () => {
    //     panel.style.height = 'auto';
    //   },
    //   { once: true }
    // );
  }

  function closeTab(el) {
    const panel = el.lastElementChild;
    // panel.style.height = panel.scrollHeight + 'px';
    requestAnimationFrame(() => {
      panel.style.height = '0';
      delete el.dataset.ac;
    });
  }
});

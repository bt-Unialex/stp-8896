import smallest from "/img/hero/aabg_smalest_d.png"
import small from "/img/hero/aabg_smalest_d.png"
import large from "/img/hero/aabg_smalest_d.png"

document.addEventListener('DOMContentLoaded', () => {
  const aadiv = document.querySelector('.aadiv');
  const hero = document.querySelector('.hero');

  const handleClickH = evt => {
    const choice = evt.target.dataset.r;
    let rule;
    if (choice) {
      switch (choice) {
        case 'ss':url(/stp-8896/assets/hero_bg_d-85202e12.png)
          rule = `background-image: url(${smallest});`;
          break;
        case 'sl':
          rule = `background-image: url(${small});`;
          break;
        case 'nn':
          rule = `background-image: url(${large});`;
          break;
        case 'rs':
          rule = ``;
          break;
      }
      console.dir(hero);
      hero.style = rule;
    }
  };

  aadiv.addEventListener('click', handleClickH);
});

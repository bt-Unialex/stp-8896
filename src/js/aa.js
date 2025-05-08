document.addEventListener('DOMContentLoaded', () => {
  const aadiv = document.querySelector('.aadiv');
  const hero = document.querySelector('.hero');

  const handleClickH = evt => {
    const choice = evt.target.dataset.r;
    let rule;
    if (choice) {
      switch (choice) {
        case 'ss':
          rule = `background-image: url(../img/hero/aabg_smalest_d.png);`;
          break;
        case 'sl':
          rule = `background-image: url(../img/hero/aabg_small_d.png);`;
          break;
        case 'nn':
          rule = `background-image: url(../img/hero/aabg_large_d.png);`;
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

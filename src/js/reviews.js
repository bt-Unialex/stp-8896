import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const reviewsSlider = new Swiper('[data-reviews-swiper]', {
  slidesPerView: 1.1,
  centeredSlides: true,
  slidesPerGroup: 1,
  spaceBetween: 8,

  pagination: {
    el: '[data-reviews-pagination]',
    clickable: true,
    bulletClass: 'reviews-swipper-pagination',
    bulletActiveClass: 'active',
    renderBullet: function (index, className) {
      return `<div class="${className}" data-reviews-page="${index}"></div>`;
    },
  },
  navigation: {
    nextEl: '[data-btn-right]',
    prevEl: '[data-btn-left]',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      centeredSlides: false,
      spaceBetween: 32,
    },
  },
});

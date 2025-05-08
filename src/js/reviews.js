import Swiper from "swiper/bundle";
import "swiper/css/bundle";

let reviewsSlider;
let prevWidth = window.innerWidth;

const initReviewsSlider = () => {
  if (reviewsSlider) {
    reviewsSlider.destroy(true, true);
  }
  if (window.innerWidth < 1200) {
    document
      .querySelectorAll(".swiper-slide-blank")
      .forEach(blank => blank.remove());
  }

  reviewsSlider = new Swiper("[data-reviews-swiper]", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 8,
    loop: true,
    grabCursor: true,

    pagination: {
      el: "[data-reviews-pagination]",
      clickable: true,
      bulletClass: "reviews-swipper-pagination",
      bulletActiveClass: "active",
      renderBullet: function (index, className) {
        return `<div class="${className}" data-reviews-page="${index}"></div>`;
      },
    },
    navigation: {
      nextEl: "[data-btn-right]",
      prevEl: "[data-btn-left]",
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
};

initReviewsSlider();

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const currentWidth = window.innerWidth;
    if (
      (prevWidth < 1200 && currentWidth >= 1200) ||
      (prevWidth >= 1200 && currentWidth < 1200)
    ) {
      initReviewsSlider();
    }
    prevWidth = currentWidth;
  }, 300);
});

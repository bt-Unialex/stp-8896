const slider = document.querySelector("[data-swiper]");
const wraper = slider.querySelector("[data-swiper-wraper]");
const pages = document.querySelectorAll("[data-swiper-page]");

let currentSlide = 0;
const totalSlides = 2;
let startX = 0;

const updateSlide = () => {
  wraper.style.transform = `translateX(-${currentSlide * 100}%)`;
  pages.forEach(p => p.classList.remove("active"));
  const active = document.querySelector(`[data-swiper-page="${currentSlide}"]`);
  if (active) active.classList.add("active");
};

pages.forEach(page => {
  page.addEventListener("click", () => {
    currentSlide = parseInt(page.dataset.page, 10);
    updateSlide();
  });
});

slider.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentSlide < totalSlides - 1) currentSlide++;
    else if (diff > 0 && currentSlide > 0) currentSlide--;
    updateSlide();
  }
});

updateSlide();

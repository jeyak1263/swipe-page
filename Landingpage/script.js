
let index = 0;
const slides = document.getElementById("slides");
const pages = document.querySelectorAll(".page");
const total = pages.length;

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  if (index < total - 1) {
    index++;
    updateSlide();
  }
}

function prevSlide() {
  if (index > 0) {
    index--;
    updateSlide();
  }
}

/* Swipe */
let startX = 0;

slides.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) nextSlide();
  if (endX - startX > 50) prevSlide();
});


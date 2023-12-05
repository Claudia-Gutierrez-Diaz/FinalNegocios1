let slideIndex = 0;
const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".carousel img");

function showSlide(index) {
  if (index < 0) {
    slideIndex = images.length - 1;
  } else if (index >= images.length) {
    slideIndex = 0;
  }

  const offset = -slideIndex * 810; // Ancho de las imágenes
  carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);

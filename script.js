let currentIndex = 0;
let slides = document.querySelectorAll('.slide');
let totalSlides = slides.length;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.querySelector('.carousel-button.next').onclick = nextSlide;
document.querySelector('.carousel-button.prev').onclick = prevSlide;

setInterval(nextSlide, 5000);
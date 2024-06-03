const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const carouselImages = document.querySelector('.carousel-images');
const images = carouselImages.querySelectorAll('img');
let index = 0;

function showNextImage() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(showNextImage, 2000); 
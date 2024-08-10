let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const caption = document.getElementById('caption');
const totalSlides = slides.length;

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === currentIndex ? 'block' : 'none';
    });
    caption.textContent = `Изображение ${currentIndex + 1} из ${totalSlides}`;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; 
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    updateSlider();
});

updateSlider();
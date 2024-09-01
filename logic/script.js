let slideIndex = 0;
const slides = document.querySelector('.slides');
const slider = document.querySelector('.slider');
const allSlides = document.querySelectorAll('.slide');
const pagination = document.querySelector('.pagination');
let slideShow;
let button;
function showSlide(index) {
    const totalSlides = document.querySelectorAll('.slide').length;
    slideIndex = (index + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-slideIndex * 25}%)`;
}
function moveSlide(n) {
    showSlide(slideIndex + n);
}

function autoMove() {
    slideShow = setInterval(() => { moveSlide(1) }, 3000);
}

autoMove()

slider.onmouseover = function (e) {
    clearInterval(slideShow);
}
slider.onmouseleave = function (e) {
    autoMove()
}

// pagination

for (let i = 0; i < allSlides.length; i++) {
    button = document.createElement('button');
    button.classList.add('pag-buttons')
    pagination.appendChild(button)
}

document.body.onclick = function (e) {
    if (e.target.classList.contains('pag-buttons')) {
        const buttonIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
        showSlide(buttonIndex);
    }
}

// Initialize the slider
showSlide(slideIndex);
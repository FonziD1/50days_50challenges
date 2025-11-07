const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn =document.getElementById('left');
const rightBtn = document.getElementById('right');

let currentSlide = 0;

rightBtn.addEventListener('click', () => {
    currentSlide += 1;

    if (currentSlide > slides.length -1){
        currentSlide =0;
    } 

    setBgToBody();
    setActiveSlide();

})

leftBtn.addEventListener('click', () => {
    currentSlide -= 1;

    if (currentSlide < -1){
        currentSlide = slides.length -1;
    } 

    setBgToBody();
    setActiveSlide();

})

setBgToBody();

function setBgToBody() {
    body.style.backgroundImage = slides[currentSlide].style.backgroundImage;

}

function setActiveSlide() {
    slides.forEach( slide => slide.classList.remove('active')  )
    slides[currentSlide].classList.add('active');

}
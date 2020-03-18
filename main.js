const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const slide_1 = document.querySelector('#slide_1');
const slide_2 = document.querySelector('#slide_2');
const slide_3 = document.querySelector('#slide_3');
const slide_4 = document.querySelector('#slide_4');
const next = document.querySelector('#next');

const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Gets the current slide
    const current = document.querySelector('.current');
    //Removes the current classs
    current.classList.remove('current');
    if(current.nextElementSibling) {
        //if it has next element
        current.nextElementSibling.classList.add('current');
    }
    else {
        //if it is the last one, return to first element
        slides[0].classList.add('current');
    }
    //Sets delay
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //Gets the current slide
    const current = document.querySelector('.current');
    //Removes the current classs
    current.classList.remove('current');
    if(current.previousElementSibling) {
        //if it has previous element
        current.previousElementSibling.classList.add('current');
    }
    else {
        //if it is the first one, return to last element
        slides[slides.length - 1].classList.add('current');
    }
    //Sets delay
    setTimeout(() => current.classList.remove('current'));
}

//Event listeners
next.addEventListener('click', e => {
    nextSlide();
    //Resets the interval time when the next slide occurs
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
});

//Auto slide 
if(auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}
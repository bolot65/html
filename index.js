const slider = document.querySelector('.slider');
const sliderImages= document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.slider_line');

const sliderBtnNext = document.querySelector(".slider_btn-next");
const sliderBtnPrev = document.querySelector(".slider_btn-prev");

let sliderCount = 0;
let sliderWidth = slider.offsetWidth;



sliderBtnNext.addEventListener('click',nextslide);

sliderBtnPrev.addEventListener('click',prevSlider);

//функция
function nextslide() {
    sliderCount++;
    

    if (sliderCount >= sliderImages.length) {
        sliderCount = 0;
    }
    rollslider();
}


function prevSlider() {
    sliderCount--;

      if (sliderCount < 0) {
        sliderCount = sliderImages.length -1;
    }

    rollslider();
}

function rollslider() {
    sliderLine.style.transform = `translateX(${-sliderCount*sliderWidth}px)`;

}
setInterval(() => {
    nextslide()
}, 3000);



const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const updateImageSize = _.debounce(() => {
  const size = sliderInput.value;
  sliderImage.style.width = `${size}%`;
}, 100);

sliderInput.addEventListener('input', updateImageSize);


const box = document.getElementById('box');

const moveBox = _.debounce((event) => {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x}px, ${y}px)`;
}, 100);

document.addEventListener('mousemove', moveBox);
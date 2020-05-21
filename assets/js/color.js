const preview = document.querySelector('.preview');

const redInput = document.querySelector('#red');
const greenInput = document.querySelector('#green');
const blueInput = document.querySelector('#blue');

const redValue = document.querySelector('#red-value');
const greenValue = document.querySelector('#green-value');
const blueValue = document.querySelector('#blue-value');

const setPreviewColor = () => {    
    const rgbColor = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;
    preview.style.backgroundColor = rgbColor;

    redValue.value = redInput.value;
    greenValue.value = greenInput.value;
    blueValue.value = blueInput.value;
};

const init = () => {
    setPreviewColor();

    document.querySelectorAll('input[type="range"]').forEach(element => {
        element.addEventListener('change', setPreviewColor);
    });;
};

window.addEventListener('load', init);
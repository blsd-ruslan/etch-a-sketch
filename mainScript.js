const divContainer = document.querySelector('#div-container');
const btnAmountPixels = document.querySelector('#enter-amount-pixels');
const btnClearCanvas = document.querySelector('#clear-canvas');
const btnBrush = document.querySelector('#brush-tool');
const btnEraser = document.querySelector('#eraser-tool');

// possible values "black" and "white" for brush and eraser
let color = "black";



createCanvas(32);


btnClearCanvas.addEventListener('click', () =>
clearCanvas());

btnAmountPixels.addEventListener('click', () =>
createCanvas(parseInt(prompt("Please enter amount of pixels(1-100):", "32"))));

btnBrush.addEventListener('click', () =>
color="black");

btnEraser.addEventListener('click', () =>
color="white");


function createCanvas(amount) {
    if (!Number.isInteger(amount) || amount > 100 || amount < 1) {
        alert("Incorrect value was entered.");
    }
    divContainer.innerHTML = '';
    generateDivs(amount);
}

function clearCanvas() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) =>
    pixel.style.backgroundColor = 'white');
}

function generateDivs(amount) {
    for (let i = 0; i < amount; ++i) {
        let row = document.createElement('div');

        let sideOfPixel = parseInt(divContainer.style.width) / amount;

        row.className = 'row';
        row.style.display = 'flex';
        row.style.flex = '1';
        row.style.flexShrink = '0';
        row.style.minWidth = sideOfPixel.toString();


        for (let j = 0; j < amount; ++j) {
            let squareDiv = document.createElement('div');
            squareDiv.style.backgroundColor = 'white';
            squareDiv.addEventListener("mouseover", () =>
            squareDiv.style.backgroundColor = color);
            squareDiv.className = 'pixel';
            squareDiv.style.flex = '1';
            squareDiv.style.flexShrink = '0';
            squareDiv.style.minWidth = sideOfPixel.toString();
            squareDiv.style.minHeight = sideOfPixel.toString();
            row.appendChild(squareDiv);
        }
        divContainer.appendChild(row);
    }
}

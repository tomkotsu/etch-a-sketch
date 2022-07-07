// expose relevant elements //
const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('square');

// Generate squares
const generateSquares = function (size=16) {
        for (let i = 1; i <= size**2; i++) {
    container.appendChild(square.cloneNode())
        };
};

// Add colouring functionality to squares//
const addFillClass = function () {document.querySelectorAll('.square').forEach
    (item => {item.addEventListener('mouseenter', () => {
        item.classList.add('filled')
        });
    });
};

const resizeSquares = function (size) {
    newDims = `${40 / size}rem`
    document.querySelectorAll('.square').forEach
    (item => {
        item.style.height = newDims;
        item.style.width = newDims;
        })
}

// Stuff happens here //

generateSquares();

addFillClass();

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    const size = Number(prompt('Enter number of squares per row (under 100):'))
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    };
    generateSquares(size);
    addFillClass();
    resizeSquares(size);

});
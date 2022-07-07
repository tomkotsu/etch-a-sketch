const container = document.querySelector('.container');
const square = document.createElement('div');
square.classList.add('square');

for (let i = 1; i <= 16*16; i++) {
    container.appendChild(square.cloneNode())
};

document.querySelectorAll('.square').forEach
(item => {item.addEventListener('mouseenter', () => {
    item.classList.add('filled')
    });
});
    
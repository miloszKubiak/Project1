const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('.text');

let i = 20;

sizeUp.addEventListener('click', function () {
    i += 5;
    p.style.fontSize = i + 'px';
});

sizeDown.addEventListener('click', function () {
    i -= 5;
    p.style.fontSize = i + 'px';
})

color.addEventListener('click', function () {
    p.style.color = 'gold';
})
const loaderText = document.querySelector('.loader-text');
const loadercontainer = document.querySelector('.loader-container');

const sourceImg = document.getElementById('template-item')
const gamefield = document.querySelector('.game-container')

function verification() {
    loaderText.innerHTML = '';
    const text = 'Bubble match';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.innerText = text[i];
        loaderText.appendChild(span);
    }
}
verification();

window.onload = function () {
    loadercontainer.style.display = 'none';
};


function init() {


    for (let i = 0; i < 100; i++) {
        const img = document.createElement('img');
        img.src = sourceImg.src;
        img.style.display = 'flex';
        img.classList.add("item");
        img.id = `item${i}`

        img.addEventListener('click', function () {
            img.style.transform = "translateY(-15px) scale(0.95)";
            img.style.opacity = "0.5"
        })

        img.addEventListener('dragstart', (event) => {
            event.preventDefault();
        });

        img.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        gamefield.insertAdjacentElement('afterbegin', img);
    }
}

init();
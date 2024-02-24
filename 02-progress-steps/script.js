const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const add = document.getElementById('add');
const del = document.getElementById('del');
const circles = document.getElementsByClassName('circle');
const progressContainer = document.querySelector('.progress-container');

let currentActive = 1

document.addEventListener('DOMContentLoaded', () => {
    updateButtons();
});

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    update()
})

add.addEventListener('click', () => {
    if (circles.length >= 8) return;

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = circles.length + 1;
    progressContainer.insertAdjacentElement('beforeend', circle)

    update();
})

del.addEventListener('click', () => {
    if (circles.length <= 4) return;

    progressContainer.removeChild(circles[circles.length - 1])

    update();
})

function update() {
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        if (i < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    }

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    updateButtons()
}

function updateButtons() {
    if (circles.length >= 8) {
        add.disabled = true
    } else {
        add.disabled = false
    }

    if (circles.length <= 4) {
        del.disabled = true
    } else {
        del.disabled = false
    }

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
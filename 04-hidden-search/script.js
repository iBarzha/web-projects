const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const resetState = document.querySelector('#reset-state');
const resetLink = document.querySelector('#reset-link');
const developerLink = document.querySelector('#developer-link');
const developerInfo = document.querySelector('#developer-info');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
});

resetState.addEventListener('click', (e) => {
    e.preventDefault();
    resetLink.classList.toggle('active');
});

developerLink.addEventListener('click', (e) => {
    e.preventDefault();
    developerInfo.classList.toggle('active');
});

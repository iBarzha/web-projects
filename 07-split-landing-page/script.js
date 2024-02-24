const container = document.querySelector('.container');
const topElement = document.querySelector('.split.top');
const bottomElement = document.querySelector('.split.bottom');

topElement.addEventListener('mouseenter', () => {
  container.classList.add('hover-top');
  container.classList.remove('hover-bottom');
});

bottomElement.addEventListener('mouseenter', () => {
  container.classList.add('hover-bottom');
  container.classList.remove('hover-top');
});

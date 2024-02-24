const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
    panel.addEventListener('click', (event) => {
        removeActiveClasses();
        panel.classList.add('active');
    });

    const links = panel.querySelectorAll('.links a[data-target]');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            const targetIndex = parseInt(link.getAttribute('data-target'));
            removeActiveClasses();
            panels[targetIndex].classList.add('active');
        });
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

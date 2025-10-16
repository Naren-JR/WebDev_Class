

// Scroll-trigger animation
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 1.2;
    sections.forEach(sec => {
        if (scrollPos > sec.offsetTop) {
            sec.classList.add('visible');
        }
    });
});

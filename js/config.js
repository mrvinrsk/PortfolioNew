const swup = new Swup();

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

nav.querySelectorAll('.slide-link').forEach(link => {
    link.dataset.word = link.textContent;
    link.textContent = '';

    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');

        nav.querySelectorAll('.slide-link').forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });

    // check if href is the current page
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

butter.init({
    wrapperId: 'scroll',
    wrapperDamper: 0.6,
    cancelOnTouch: true
});

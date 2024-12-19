let menuToggle = document.querySelector('.menu-toggle');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('fa-times');
    nav.classList.toggle('active');
};

window.onscroll = () => {
    menuToggle.classList.remove('fa-times');
    nav.classList.remove('active');
};
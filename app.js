document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else {
        navbar.style.position = 'absolute';
        navbar.style.top = '0';
    }
});
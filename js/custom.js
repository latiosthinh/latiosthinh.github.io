function initScroll() {
    coverPart = document.getElementById('cover');
    baseHeight = coverPart.offsetHeight;
    
    if (window.pageYOffset > baseHeight) {
        $('nav#mainNav').addClass('navtop');
        $('img#logoImg').removeClass('logoSmall');
    }
    else {
        $('nav#mainNav').removeClass('navtop');
        $('img#logoImg').addClass('logoSmall');
    }
}
window.addEventListener('scroll', initScroll);

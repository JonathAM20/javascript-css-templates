const englishButton = document.getElementById('btn-irl-language');
const frenchButton = document.getElementById('btn-fra-language');

const menuItems = document.getElementById('menu-items');
const menuItemAbout = document.getElementById('menu-item-about');
const menuItemCareer = document.getElementById('menu-item-career');
const menuItemWorkshop = document.getElementById('menu-item-workshop');
const menuItemTestimonial = document.getElementById('menu-item-testimonial');
const menuItemContact = document.getElementById('menu-item-contact');

const hamburguerButton = document.getElementById('hamburger-btn');
const hamburguerSpan1 = document.getElementById('hamburger-span-1');
const hamburguerSpan2 = document.getElementById('hamburger-span-2');
const hamburguerSpan3 = document.getElementById('hamburger-span-3');

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('currentLang') || 'en';
    changeLanguage(currentLang);
});

let isOpen = false;

window.addEventListener('scroll', () => {
    console.log("user scrolling ...")
    if (isOpen) {
        window.requestAnimationFrame(() => {
            changeMenuState();
        });
    }
});

menuItems.dataset.isOpen = isOpen;

hamburguerSpan1.dataset.isOpen = isOpen;
hamburguerSpan2.dataset.isOpen = isOpen;
hamburguerSpan3.dataset.isOpen = isOpen;

function changeMenuState() {
    isOpen = !isOpen;

    menuItems.setAttribute('data-isOpen', isOpen);

    hamburguerSpan1.setAttribute('data-isOpen', isOpen);
    hamburguerSpan2.setAttribute('data-isOpen', isOpen);
    hamburguerSpan3.setAttribute('data-isOpen', isOpen);
}

englishButton.addEventListener('click', function () {
    changeLanguage('en');
});

frenchButton.addEventListener('click', function () {
    changeLanguage('fr');
});

hamburguerButton.addEventListener('click', function () {
    changeMenuState();
});

menuItemAbout.addEventListener('click', function () {
    changeMenuState();
});

menuItemCareer.addEventListener('click', function () {
    changeMenuState();
});

menuItemWorkshop.addEventListener('click', function () {
    changeMenuState();
});

menuItemTestimonial.addEventListener('click', function () {
    changeMenuState();
});

menuItemContact.addEventListener('click', function () {
    changeMenuState();
});
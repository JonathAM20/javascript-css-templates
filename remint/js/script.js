const menuItems = document.getElementById('menu-items');

const hamburguerButton = document.getElementById('hamburger-btn');
const hamburguerSpan1 = document.getElementById('hamburger-span-1');
const hamburguerSpan2 = document.getElementById('hamburger-span-2');
const hamburguerSpan3 = document.getElementById('hamburger-span-3');

let isOpen = false;

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

hamburguerButton.addEventListener('click', function () {
    changeMenuState();
});
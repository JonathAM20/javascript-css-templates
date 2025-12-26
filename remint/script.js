const hamburguerButton = document.getElementById('hamburger-btn');

let isOpen = false;

function changeMenuState() {
    isOpen = !isOpen;

    // menuItems.setAttribute('data-isOpen', isOpen);
}

hamburguerButton.addEventListener('click', function () {
    changeMenuState();
});
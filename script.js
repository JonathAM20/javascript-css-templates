const templateView = document.getElementById('template-view')
const afterViewAction = document.getElementById('after-view-action')

let isAfter = false;
let touchstartX = 0;
let touchendX = 0;
const breakpoint = 767;
const threshold = 50;

function handleGesture() {
    if (window.innerWidth > breakpoint) {
        return;
    }

    if (!isAfter && touchendX < touchstartX - threshold) {
        console.log('User swiped to left ⬅️');
        afterViewAction.innerHTML = 'BEFORE';
        changeTemplateView();
    }

    if (isAfter && touchendX > touchstartX + threshold) {
        console.log('User swiped to right ➡️');
        afterViewAction.innerHTML = 'AFTER';
        changeTemplateView();
    }
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

afterViewAction.addEventListener('click', function () {
    if (isAfter) {
        afterViewAction.innerHTML = 'AFTER';
    } else {
        afterViewAction.innerHTML = 'BEFORE';
    }

    changeTemplateView();
});

function changeTemplateView() {
    isAfter = !isAfter;
    templateView.setAttribute('data-isAfter', isAfter);
    afterViewAction.setAttribute('data-isAfter', isAfter);
}
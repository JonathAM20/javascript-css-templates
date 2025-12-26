const templateView = document.getElementById('template-view')
const afterViewAction = document.getElementById('after-view-action')

let isAfter = false;

function changeTemplateView() {
    isAfter = !isAfter;

    if(isAfter) {
        afterViewAction.innerHTML = 'BEFORE'
    } else {
        afterViewAction.innerHTML = 'AFTER'
    }

    templateView.setAttribute('data-isAfter', isAfter);
}

afterViewAction.addEventListener('click', function () {
    changeTemplateView();
});
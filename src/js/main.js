import { message } from './message'
let container = document.querySelector('.js-content');

sampleText();

function sampleText() {
    container.textContent = message;
}

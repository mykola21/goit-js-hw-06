const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

const placeholder = (event) => {
    outputName.textContent = inputName.value !== ""
        ? event.currentTarget.value
        : 'Anonimus';
};

inputName.addEventListener('input', placeholder);
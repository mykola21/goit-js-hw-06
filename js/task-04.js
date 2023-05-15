
let counterValue = 0;
const valueNum = document.getElementById('value');
const minusCounter = document.querySelector('button[data-action="decrement"]');
const plusCounter = document.querySelector('button[data-action="increment"]');

const onTargetDecrementClick = (event) => {
    counterValue -= 1; 
    valueNum.textContent = counterValue
}

const onTargetIncrementClick = (event) =>{
    counterValue += 1;
    valueNum.textContent = counterValue
}


minusCounter.addEventListener('click', onTargetDecrementClick);
plusCounter.addEventListener('click', onTargetIncrementClick);

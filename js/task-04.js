const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueSpan = document.querySelector('#value');
let counterValue = 0;
decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
    console.log(valueSpan);
});
incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
    console.log(valueSpan);
});
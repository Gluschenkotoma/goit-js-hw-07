const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector("#value");

// Если счетчик считает в минус
// let counterValue = 0;
// const decrement = () => (value.textContent = counterValue -= 1);
// decrementBtnEl.addEventListener("click", decrement);
// const increment = () => (value.textContent = counterValue += 1);
// incrementBtnEl.addEventListener("click", increment);

// Если счетчик не считает в минус
let counterValue = Number(counterEl.textContent);

incrementBtnEl.addEventListener("click", increment);
function increment() {
  counterValue += Number(1);
  return (counterEl.textContent = counterValue);
}

decrementBtnEl.addEventListener("click", decrement);
function decrement() {
  if (counterEl.textContent !== "0") {
    counterValue -= Number(1);
    return (counterEl.textContent = counterValue);
  }
  return null;
}

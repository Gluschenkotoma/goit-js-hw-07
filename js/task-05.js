const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

// 1
// const text = "незнакомец";
// inputNameEl.addEventListener("input", onInputValue);

// function onInputValue(event) {
//   if (event.currentTarget.value.length === 0) {
//     return (outputNameEl.textContent = text);
//   } else {
//     return (outputNameEl.textContent = event.currentTarget.value);
//   }
// }

// 2
// function onInputValue(event) {
//   const value = event.target.value;

//   outputNameEl.textContent = value || "незнакомец";
//   // outputNameEl.textContent = value ? value : 'незнакомец';
// }

// inputNameEl.addEventListener("input", onInputValue);

// 3
function onInputValue(event) {
  if (event.currentTarget.value === "") {
    outputNameEl.textContent = "незнакомец";
  } else outputNameEl.textContent = event.currentTarget.value;
}

inputNameEl.addEventListener("input", onInputValue);

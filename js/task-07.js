const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

// 1
// const firstValue = `${inputEl.value}px`;
// console.log(firstValue);
// inputEl.addEventListener("input", changeSizeText);
// function changeSizeText() {
//   const sizeValue = (spanEl.style.fontSize = inputEl.value + "px");
//   console.log(sizeValue);
//   return sizeValue;
// }

// // 2

// spanEl.style.fontSize = inputEl.value + "px";

// function changeSizeText() {
//   spanEl.style.fontSize = inputEl.value + "px";
// }

// inputEl.addEventListener("input", changeSizeText);

// // 2

function changeSizeText() {
  spanEl.setAttribute("style", `font-size: ${inputEl.value}px`);
}

inputEl.addEventListener("input", changeSizeText);

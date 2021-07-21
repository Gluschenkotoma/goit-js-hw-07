const validationInputEl = document.querySelector("#validation-input");
console.log(validationInputEl);

// validationInputEl.addEventListener("change", onChangeBorderInput);
// 1
// function onChangeBorderInput(event) {
//   if (validationInputEl.hasAttribute("class")) {
//     validationInputEl.removeAttribute("class");
//   }
//   if (
//     event.currentTarget.value.length !==
//     Number(validationInputEl.getAttribute("data-length"))
//   ) {
//     return validationInputEl.classList.add("invalid");
//   }
//   return validationInputEl.classList.add("valid");
// }

// 2

function onChangeBorderInput(event) {
  if (
    event.currentTarget.value.length < validationInputEl.dataset.length ||
    event.currentTarget.value.length > validationInputEl.dataset.length
  ) {
    validationInputEl.classList = "invalid";
  } else validationInputEl.classList = "valid";
}
// 6
console.log(validationInputEl.dataset.length);

validationInputEl.addEventListener("blur", onChangeBorderInput);

const input = document.querySelector("#validation-input");
const inputValueLength = Number(input.getAttribute("data-length"));
console.log(inputValueLength); //6

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value); //если ввести в инпут 1,2,3 -> консоль 123
  console.log(event.currentTarget.length); //если ввести в инпут 1,2,3 -> консоль длинна ввода символов 3

  if (event.currentTarget.value.length === inputValueLength) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
    return;
  }
  event.currentTarget.classList.remove("valid");
  event.currentTarget.classList.add("invalid");
}

const listEl = document.querySelectorAll(".item");
const allItems = listEl.forEach((value) =>
  console.log(
    `Категория - ${value.firstElementChild.textContent}, количество элементов -  ${value.lastElementChild.children.length}`
  )
);
// console.log(value) - все элементы в listEl

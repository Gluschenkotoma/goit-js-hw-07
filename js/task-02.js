const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
// получить ссылку на массив
const ingredientsList = document.querySelector("#ingredients");
console.log(ingredientsList);
// перебрать в новый массив (6) [li, li, li, li, li, li]
const array = ingredients.map((element) => {
  // создать элементы  <li></li>
  const product = document.createElement("li");
  // добавить контекст между тегов <li>Картошка</li>
  product.textContent = element;
  return product;
});
// собрать в ДОМ распыленный массив
ingredientsList.append(...array);

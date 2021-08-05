const boxesContainer = document.querySelector("#boxes"); //cсылка на div id="boxes"
const input = document.querySelector('[type="number"]'); //cсылка на input type="number"
console.log(input);
const renderBtn = document.querySelector('[data-action="render"]'); //Создать отрисовать
const clearBtn = document.querySelector('[data-action="destroy"]'); //Очистить

renderBtn.addEventListener("click", getAmount);
clearBtn.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = Number(input.value); //к-во input приведенное к числу

  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  const fragment = document.createDocumentFragment(); //ссылка на пустой обьект (фрагмент)
  for (let i = 0; i < amount; i += 1) {
    let size = basicSize + i * 10;
    const div = document.createElement("div"); //создание бокса со свойствами
    div.style.width = size + "px";
    div.style.height = size + "px";
    div.style.margin = "10px";
    div.style.backgroundColor = `rgb(${random()} , ${random()} , ${random()})`;
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; //Заменяет содержимое тела пустой строкой
  input.value = "";
}

function random() {
  return Math.floor(Math.random() * 256); //подбор рандомных цветов
}

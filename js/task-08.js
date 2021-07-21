const refs = {
  controls: document.querySelector("#controls input"),
  boxes: document.querySelector("#boxes"),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
};

refs.renderBtn.addEventListener("click", () =>
  createBoxes(refs.controls.value)
);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");
    newBox.style.width = `${30 + i * 10}px`;
    newBox.style.height = `${30 + i * 10}px`;
    newBox.style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    newBoxes.push(newBox);
  }
  boxes.append(...newBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

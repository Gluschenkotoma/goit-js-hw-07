const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// 1
const gallery = document.querySelector("#gallery");
gallery.classList.add("gallery-list", "list");
console.log(gallery);

const arrayGallary = images.map(
  (img) =>
    `<li class='gallery-list__item' >
        <img
            src ='${img.url}'
            alt ='${img.alt}'
            
        >
    </li>`
);
// afterbegin-внутрь элемента в начало контента
// join (" ")- с массива в строку c разделителем пробелом
const insertItem = gallery.insertAdjacentHTML(
  "afterbegin",
  arrayGallary.join(" ")
);

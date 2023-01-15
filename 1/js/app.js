import { items } from "./vars.js";

const header = document.querySelector('.header');

items.forEach(el => {
   const button = document.createElement("button");
   button.classList.add("btn");
   button.innerText = el.title;
   button.addEventListener("click",audio);
   header.insertAdjacentElement("beforebegin",button);

   function audio () {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = el.track;
      audio.play();
   }
});

const main = document.querySelector('.main');



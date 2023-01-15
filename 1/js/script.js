
const btns = document.querySelectorAll('.btn');

const tracks = ["maksim.mp3","slavyanka.mp3"]

for (let i = 0; i < btns.length; i++) {
   const el = btns[i];
   el.addEventListener("click",audio);

   function audio () {
      const audio = new Audio();
      audio.preload = 'auto';
      audio.src = tracks[i];
      audio.play();
   }
}



// document.createElement("button",)

const header = document.querySelector('.header');


const para = document.createElement("p");
para.innerText = "This is a paragraph.";

// Append to body:
document.body.appendChild(para);

// header.appendChild(para);


for (let index = 0; index < 10; index++) {
   const para = document.createElement("p");
   para.innerText = "This is a paragraph.";
   header.insertAdjacentElement("afterend",para);
}
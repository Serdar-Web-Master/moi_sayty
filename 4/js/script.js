
const modal__window = document.querySelector('.modal__window');
setTimeout(() => {
   modal__window.style.display = "none"
}, 4000);

const modalMain = document.querySelector('.modal__main');
const wrapper = document.querySelector('.wrapper');

const enterBlock = document.querySelector('.enter-block');

const inputBalans = document.querySelector('.input__balans');

const mymodal = document.querySelector('.mymodal');
const btn = document.querySelector('.btn');

const moveBtn = document.querySelector('.header__menu');

const balans = document.querySelector('.balans');

const modalOpen = document.querySelector('#modalOpen');

enterBlock.addEventListener("click",()=>{
   modalMain.style.display = "block";
   wrapper.style.display = "none"
})


let balansValue = 7556.87
let toggle = 0;

modalOpen.addEventListener("click",()=>{
   mymodal.classList.add("move")
})

// moveBtn.addEventListener("click",()=>{
//    mymodal.classList.add("move")
// })
btn.addEventListener("click",()=>{
   mymodal.classList.remove("move")
})


balans.addEventListener("click",()=>{
   if(toggle == 0) {
      if(inputBalans.value == "") {
         balans.innerHTML = balansValue + " TMT";
         toggle+=1;
      }
      else {
         balans.innerHTML = inputBalans.value + " TMT";
         toggle+=1;
      }  
   }
   else {
      balans.innerHTML = "Баланс" ;
      toggle-=1;
   } 
});






// function modalCreate() {
//   const modalWindow = document.createElement("input");
//   modalWindow.classList.add("mymodal");
//   document.body.appendChild(modalWindow);
//   console.log(modalWindow);

// }
// modalCreate();
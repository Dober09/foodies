const menuBar = document.querySelector("#menubar")
const nav = document.querySelector("nav")


menuBar.addEventListener("click",()=>{
    nav.classList.toggle("show")
   if(nav.classList.contains("show")){
       menuBar.src = "/img/close.png"
   }else{
       menuBar.src = "/img/menu.png"
   }
})

const foodName = document.querySelector("#foodname")

const  userOrder = document.querySelector(".food-order")




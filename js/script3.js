// order js
const minusBtn = document.querySelector("#decrease")
const addBtn = document.querySelector("#increase")
const numOfItems = document.querySelector(".num p")
const numOfItemsDisplay = document.querySelector(".items #time");
let count = 1

addBtn.addEventListener("click",()=>{
    count++
    numOfItems.textContent = count
    numOfItemsDisplay.textContent = count
})

minusBtn.addEventListener("click",()=>{
    if (count >1){
        count--
        numOfItems.textContent = count
        numOfItemsDisplay.textContent = count
    }
})
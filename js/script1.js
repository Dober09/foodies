const signInBtn = document.querySelector("#signIn")
const signUpBtn = document.querySelector("#signUp")

const signInForm = document.querySelector(".login")
const signUpForm = document.querySelector(".signup")

const closeBtn = document.querySelectorAll(".closebtn")
// sign in form event
signInBtn.addEventListener("click",function(){
    signInForm.parentElement.style.display = "flex"

})

closeBtn.forEach(function(btn){
    btn.addEventListener("click",function(){
           signInForm.parentElement.style.display = "none"
            signUpForm.parentElement.style.display = "none" 
    })
})

signUpBtn.addEventListener("click",()=>{
    console.log("hello")
    signUpForm.parentElement.style.display = "flex"
})
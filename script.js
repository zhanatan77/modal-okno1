const  click = document.querySelector(".click")

const btn=document.querySelector(".open-btn")
    btn.style.background = "orange"
    btn.style.padding = "10px 50px"
btn.style.borderRadius= "50px"
btn.style.outline = "none"
btn.style.border = "none"
btn.style.color = "#fff"
const winDow =document.querySelector(".blur-window")
const modal =document.querySelector("#modal")
 const btn2=document.querySelector(".close-btn")

btn.addEventListener("click",()=> {
    if (!modal.classList.contains("active")){
        modal.classList.add("active")
         modal.style.transform="scale(1)"
         btn.innerHTML="close"
    } else {
        modal.classList.remove("active")
        modal.style.transform=""
        btn.innerHTML="open"

    }
})














let imageElemt = document.querySelectorAll(".Live")
let imagePath = 0
imageElemt[imagePath].classList.add("active")
let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click",()=>{
  

imagePath = imagePath + 1
if (imagePath > imageElemt.length -1){
   imagePath =-1
   imagePath ++
   

}
console.log(imagePath)
imageElemt[imagePath-1].classList.remove("active")
imageElemt[imagePath].classList.add("active")
})
console.log(imagePath)
prev.addEventListener("click",()=>{
  
imagePath = imagePath - 1
if (imagePath < 0){
   imagePath = imageElemt.length -1
    
}
console.log(imagePath)
imageElemt[imagePath + 1].classList.remove("active")
imageElemt[imagePath].classList.add("active")
})


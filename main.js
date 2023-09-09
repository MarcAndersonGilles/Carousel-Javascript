const upItem = document.querySelector(".upItem")
const downItem = document.querySelector(".downItem")

const initialCarouselNumber = document.querySelector(".initialCarouselNumber")
const finalCarouselNumber = document.querySelector(".finalCarouselNumber")
finalCarouselNumber.textContent = 30
finalCarousel = 30;

let initialNumber = 0;
let currentNumber = initialNumber ;
initialCarouselNumber.textContent = currentNumber

upItem.addEventListener("click", () => {
    
  

 if(currentNumber < finalCarousel){
    currentNumber += 1
    initialCarouselNumber.textContent = currentNumber
}
})
downItem.addEventListener("click", () => {
    
 if(currentNumber > 0){
    currentNumber -= 1
    initialCarouselNumber.textContent = currentNumber
}
})


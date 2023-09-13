
const arrayImages = [
    {
        1: { id: 1, name:"Marc", title: "image1", href: "https://picsum.photos/200/300" },
        2: { id: 2, name:"Jorg", title: "image2", href: "https://picsum.photos/200/300" },
        3: { id: 3, name:"Alice", title: "image3", href: "https://picsum.photos/200/300" },
        4: { id: 4, name:"Bob", title: "image4", href: "https://picsum.photos/200/300" },
        5: { id: 5, name:"Lea", title: "image5", href: "https://picsum.photos/200/300" },
        6: { id: 6, name:"Alyssa", title: "image6", href: "https://picsum.photos/200/300" },
    }
]
const arrayImagesLength = Object.keys(arrayImages[0]).length ;

const upItem = document.querySelector(".upItem")
const downItem = document.querySelector(".downItem")

const initialCarouselNumber = document.querySelector(".initialCarouselNumber")
const finalCarouselNumber = document.querySelector(".finalCarouselNumber")
const nameUser = document.querySelector(".name")
getImage = document.querySelector(".arrayImages")
finalCarouselNumber.textContent = arrayImagesLength;

finalCarousel = arrayImagesLength;

let initialNumber = 1;

let currentNumber = initialNumber;
initialCarouselNumber.textContent = currentNumber




getImage.textContent = arrayImages[0][1].title;
nameUser.textContent = arrayImages[0][1].name;

upItem.addEventListener("click", () => {

    if (currentNumber < finalCarousel ) {
        currentNumber += 1
        initialCarouselNumber.textContent = currentNumber
        let currentImageUp = arrayImages[0][currentNumber].title;
        nameUser.textContent = arrayImages[0][currentNumber].name;
        getImage.textContent = currentImageUp;

    }
})

downItem.addEventListener("click", () => {

    if (currentNumber > 1) {
        currentNumber -= 1
        initialCarouselNumber.textContent = currentNumber
        let currentImageDown = arrayImages[0][currentNumber].title;
        getImage.textContent = currentImageDown;
    }
})


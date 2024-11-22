let imageContainer = document.querySelector(".image-container")
let arrowLeft = document.querySelector(".left")
let arrowRight = document.querySelector(".right")
let img = document.createElement("img");   
for(let i = 0; i < 8; i++){
    img.setAttribute("src", `https://picsum.photos/300?random=${Math.floor( Math.random() * 2000 )}`);
    imageContainer.appendChild(img.cloneNode(true));
}
let widthOfImage = 0;
let counterOfImage = imageContainer.childElementCount * -500;
arrowRight.addEventListener("click", () => {
    widthOfImage -= 500;
    if( counterOfImage >= widthOfImage){
        widthOfImage = 0;
    }
    imageContainer.style.transform = ` translateX(${widthOfImage}px)`
})
arrowLeft.addEventListener("click", () => {
    widthOfImage += 500;
    if( widthOfImage > 0){
        widthOfImage = counterOfImage + 500;
    }
    console.log(widthOfImage)
    imageContainer.style.transform = ` translateX(${widthOfImage}px)`
})
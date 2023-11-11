let pixelContainer = document.querySelector(".pixelContainer");
let pixel = document.querySelector("pixelContainer.pixel");
setPixel();



function setPixel (pixel = 8) {

    clearPixelContainer();
    pixelContainer.style.gridTemplateColumns = `repeat(${pixel}, auto`;
    pixelContainer.style.gridTemplateRows = `repeat(${pixel}, auto`;

    for (let i = 0; i < pixel * pixel; i++) {
        let pixel = document.createElement("div");
        pixel.style.border = "1px solid lightgrey";
        pixel.className = "pixel";
        pixel.addEventListener(`click`, paintPixel)
        pixelContainer.appendChild(pixel);
    }
}

function clearPixelContainer () {
    while (pixelContainer.firstChild) {
        pixelContainer.removeChild(pixelContainer.firstChild);
    }
}

function paintPixel () {
    pixel.style.backgroundColor = "black";
}
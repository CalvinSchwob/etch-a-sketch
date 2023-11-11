let pixelContainer = document.querySelector(".pixelContainer");


function setPixel (pixel) {

    clearPixelContainer();
    pixelContainer.style.gridTemplateColumns = `repeat(${pixel}, auto`;
    pixelContainer.style.gridTemplateRows = `repeat(${pixel}, auto`;

    for (let i = 0; i < pixel * pixel; i++) {
        let pixel = document.createElement("div");
        pixel.style.border = "1px solid black";
        // pixel.style.minWidth = "10px";
        // pixel.style.minHeight = "10px";
        // // pixel.style.aspectRatio = "1/1";

        pixelContainer.appendChild(pixel);
    }
}

function clearPixelContainer () {
    while (pixelContainer.firstChild) {
        pixelContainer.removeChild(pixelContainer.firstChild);
    }
}
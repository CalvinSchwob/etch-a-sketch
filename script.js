let pixelContainer = document.querySelector(".pixelContainer");


function setPixel (pixel) {

    // clearPixelContainer ();

    for (let i = 0; i < pixel; i++) {
        let pixel = document.createElement("div");
        pixel.style.border = "1px solid black";
        pixel.style.minWidth = "10px";
        pixel.style.minHeight = "10px";
        pixel.style.aspectRatio = "1/1";
        pixel.style.flexGrow = "1";

        pixelContainer.appendChild(pixel);
    }
}

function clearPixelContainer () {
    while (pixelContainer.firstChild) {
        pixelContainer.removeChild(pixelContainer.firstChild);
    }
}
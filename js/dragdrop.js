const fancyHat = document.getElementById("complement-one");
const dropZone = document.getElementById("character-image");

function onDrop(event) {
    fancyHat.style.left = event.clientX + "px";
    fancyHat.style.top = event.clientY + "px";
    console.log("Element has been dropped");
}

function onDragOver(event) {
    event.preventDefault();
    console.log("Something is being dragged over me!");
}

function onDragStart() {
    console.log("I'm being dragged")
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;
fancyHat.ondragstart = onDragStart;
//store HTML elements of class complement in complements
const complements = document.getElementsByClassName("complement")

// dropzone is the area where compliments can be dropped
const dropZone = document.getElementById("character-image");

/**
 * When something is dropped in the drop zone, update draggedImage style accordingly
 * @param {Event} event stores information on the current drop event
 */
function onDrop(event) {
    // update draggedImage style to: 
    //event.clientX (horizontal mouse position) - offsetX (calculated initial offset)
    //event.clientY (vertical mouse position) - offsetY (calculated initial offset)
    draggedImage.style.left = event.clientX - offsetX + "px";
    draggedImage.style.top = event.clientY - offsetY + "px";
}

/**
 * prevent the event default to allow dropping to happen
 * @param {Event} event tores information on the current drag over event
 */
function onDragOver(event) {
    event.preventDefault();
}

let offsetX = 0;
let offsetY = 0;
let draggedImage = undefined;

function onDragStart(event) {
    draggedImage = event.target;

    const style = window.getComputedStyle(draggedImage, null);

    offsetX = event.clientX - parseInt(style.left);
    offsetY = event.clientY - parseInt(style.top);
}

dropZone.ondrop = onDrop;
dropZone.ondragover = onDragOver;

// iterates through array
for(let complement of complements) {
    complement.ondragstart = onDragStart;
    complement.ondragover = onDragOver;
    complement.ondrop = onDrop;
}

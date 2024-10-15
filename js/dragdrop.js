//store HTML elements of class complement in complements
const complements = document.getElementsByClassName("complement")

// dropzone is the area where compliments can be dropped
const dropZone = document.getElementById("character-image");

// offsetX and offsetY store the initial offset from clicking on the dragged image
let offsetX = 0;
let offsetY = 0;

// draggedImage stores the currently dragged image
let draggedImage = undefined;

/**
 * when something is dropped in the drop zone, update draggedImage style accordingly
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

/**
 * store draggedImage as the event target and compute initial offsetX and offsetY
 * @param {Event} event stores information related to the current drag start event
 */
function onDragStart(event) {
    // event.target points to the HTML Element that started the drag event, i.e
    // the currently dragged image
    draggedImage = event.target;

    // window.getComputedStyle returns the style of the element removing the css text
    // for ex. "100px" becomes "100"
    const style = window.getComputedStyle(draggedImage, null);

    // offset is calculated as:
    // clientX (horizontal mouse position) - style.left (left position of image)
    // clientY (vertical mouse position) - style.top (top position of the image)
    // parseInt is needed to transform the style os trings to numbers
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

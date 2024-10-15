// *********
// Variables
// *********

// Constant variables

// Define sources for each character image
const imageSources = ["assets/kirby.jpeg", "assets/samus.jpeg", "assets/Wolf.webp"];

// define alt text for each character image
const imageAltText = ["Super smash bros character, Kirby", "Super smash bros character, Samus", "Super smash bros character, Wolf"];

// Define text for paragraph for each character
const characterNames = ["Kirby", "Samus", "Wolf"];

// index.html ids
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("image-1");

const characterNameButton = document.getElementById("name-change-button");
const characterName = document.getElementById("name-change-input")

// Changing variables
let characterCounter = 1;


/**
 * update character counter and display next character
 * and sets counter back to 1 if 3 has been passed
 * @returns when character is chosen
 */
function clickFunction() {

    // Adds to counter
    characterCounter++;

    // If statement to reset counter
    if (characterCounter > 3) {
        characterCounter = 1;
    }

    // 
    // Find image, name, and alt text related to specific character counter
    // - 1 because the array has a 0 based index and the counter doesn't
    characterImage.src = imageSources[characterCounter - 1];
    characterImage.alt = imageAltText[characterCounter - 1];
    myParagraph.innerHTML = characterNames[characterCounter - 1];
}

// Changes text to what has been imputed from imput field
function submitButton() {
    myParagraph.innerHTML = characterName.value
}


// Three methods - all do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;

characterNameButton.onclick = submitButton;
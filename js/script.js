// *********
// Variables
// *********

// Constant variables

// Defines sources for each character image
const imageSources = ["assets/kirby.jpeg", "assets/samus.jpeg", "assets/Wolf.webp"];

// Defines alt text for each character image
const imageAltText = ["Super smash bros character, Kirby", "Super smash bros character, Samus", "Super smash bros character, Wolf"];

// Defines text for paragraph for each character
const characterNames = ["Kirby", "Samus", "Wolf"];

// index.html ids
const nextCharacterButton = document.getElementById("next-character-button");
const characterNameText = document.getElementById("character-name-text");
const characterImage = document.getElementById("character-image");

const characterNameInput = document.getElementById("name-change-input");
const characterNameButton = document.getElementById("name-change-button");

// Let variables
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

    // Find image, name, and alt text related to specific character counter
    // - 1 because the array has a 0 based index and the counter doesn't
    characterImage.src = imageSources[characterCounter - 1];
    characterImage.alt = imageAltText[characterCounter - 1];
    characterNameText.innerHTML = characterNames[characterCounter - 1];
}

/**
 * Upadate character name to what is stored in the input field
 */
function submitButton() {
    characterNameText.innerHTML = characterNameInput.value;
}


// Three methods - all do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
nextCharacterButton.onclick = clickFunction;

// Links function to event
characterNameButton.onclick = submitButton;
// *********
// Variables
// *********
// Constant variables

// Define sources for each character image
const image1 = "assets/kirby.jpeg";
const image2 = "assets/samus.jpeg";
const image3 = "assets/Wolf.webp";
// define alt text for each character image
const altText1 = "Initial super smash bros character, Kirby";
const altText2 = "Super smash bros character, Samus";
const altText3 = "Super smash bros character, Wolf";
// Define text for paragraph for each character
const characterName1 = "Kirby"
const characterName2 = "Samus"
const characterName3 = "Wolf"
// index.html ids
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("image-1");

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

    // Changes text without changing it in the HTML
    // myParagraph.innerHTML = "I am on character " + characterCounter;

    // IF statement for which character to display per counter
    if (characterCounter === 1) {
        characterImage.src = image1;
        characterImage.alt = altText1;
        myParagraph.innerHTML = characterName1;
        return;
    }

    if (characterCounter === 2) {
        characterImage.src = image2;
        characterImage.alt = altText2;
        myParagraph.innerHTML = characterName2;
        return;
    }

    if (characterCounter === 3) {
        characterImage.src = image3;
        characterImage.alt = altText3;
        myParagraph.innerHTML = characterName3;
        return;
    }

}

// Two methods - both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;
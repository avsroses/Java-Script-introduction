// *********
// Variables
// *********
// Constant variables
const imageOne = "assets/kirby.jpeg";
const imageTwo = "assets/samus.jpeg"
const imageThree = "assets/Wolf.webp"

const altText1 = "Initial super smash bros character, Kirby"
const altText2 = "Super smash bros character, Samus"
const altText3 = "Super smash bros character, Wolf"

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
    myParagraph.innerHTML = "I am on character " + characterCounter;

    // IF statement for which character to display per counter
    if (characterCounter === 1) {
        characterImage.src = imageOne;
        characterImage.alt = altText1;
        return;
    }
    
    if (characterCounter === 2) {
        characterImage.src = imageTwo;
        characterImage.alt = altText2;
        return;
    }
    
    if (characterCounter === 3) {
        characterImage.src = imageThree;
        characterImage.alt = altText3;
        return;
    }

}

// Two methods - both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;
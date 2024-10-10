// *********
// Variables
// *********
// Constant variables
const imageOne = "assets/kirby.jpeg";
const imageTwo = "assets/samus.jpeg"
const imageThree = "assets/Wolf.webp"

const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("image-1");
// Changing variables
let characterCounter = 1;



// Function for when button is clicked
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
        return;
    }
    else if (characterCounter === 2) {
        characterImage.src = imageTwo;
        return;
    }
    else if (characterCounter === 3) {
        characterImage.src = imageThree;
        return;
    }

}

// Two methods - both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;
// Variables
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");
const characterImage = document.getElementById("image-1");

let clickCounter = 0;

function clickFunction() {

    // Adds to counter and outputs to console
    console.log('The button has been clicked');
    clickCounter++;

    // Changes text without changing it in the HTML
    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
    // Changes image beinmg displayed
    characterImage.src = "assets/Wolf.webp";
}

// Two methods - both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;
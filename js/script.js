// Variables
const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");

let clickCounter = 0;

function clickFunction() {

    clickCounter = clickCounter+1;

    // Changes text without changing it in the HTML
    myParagraph.innerHTML = "I have been clicked " + clickCounter + " time(s)";
}

// Two methods both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;
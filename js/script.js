const myButton = document.getElementById("my-button");
const myParagraph = document.getElementById("my-paragraph");


// Two methods both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
// document.getElementById("my-button").onclick = clickFunction;
myButton.onclick = clickFunction;

function clickFunction() {
    // Changes text without changing it in the HTML
    myParagraph.innerHTML = "new paragraph";
}
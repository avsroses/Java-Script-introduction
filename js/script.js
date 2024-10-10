// Two methods both do the same
// document.getElementById("my-button").addEventListener("click", clickFunction);
document.getElementById("my-button").onclick = clickFunction;


function clickFunction() {
    // Changes text without changing it in the HTML
    document.getElementById("my-paragraph").innerHTML = "new paragraph";
}
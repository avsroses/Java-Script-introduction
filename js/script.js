// Looking for event - click and when it happens click function executes
document.getElementById("my-button").addEventListener("click", clickFunction);

function clickFunction() {
    // Changes text without changing it in the HTML
    document.getElementById("my-paragraph").innerHTML = "new paragraph";
}
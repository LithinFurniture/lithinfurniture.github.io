// When user scrolls down, caption-section moves to default position.
var prevScrollpos = window.pageXOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageXOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("caption-section").style.top = "3.5rem";
    } else {
        document.getElementById("caption-section").style.top = "-2.5rem";
    }
    prevScrollpos = currentScrollPos;
}


//When user clicked header image, caption-section toggles up and down.
function toggleCaptionMoves() {
    if(document.getElementById("caption-section").style.top == "3rem") {
        document.getElementById("caption-section").style.top ="-2.5rem"
    } else {
        document.getElementById("caption-section").style.top= "3rem"
    }
}
//When user clicked caption-section, caption-section toggles to default position.
function toggleCaptionBack() {
    if(document.getElementById("caption-section").style.top == "3rem") {
        document.getElementById("caption-section").style.top ="-2.5rem"
    } 
}
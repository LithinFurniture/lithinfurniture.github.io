// When user scrolls down, caption-section moves to default position.
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("caption-section").style.top = "3rem";
    } else {
        document.getElementById("caption-section").style.top = "-3.5rem";
    }
    // prevScrollpos = currentScrollPos;
}


//When user clicked header image, caption-section toggles up and down.
function toggleCaptionMoves() {
    if(document.getElementById("caption-section").style.top == "3rem") {
        document.getElementById("caption-section").style.top ="-3.5rem"
    } else {
        document.getElementById("caption-section").style.top= "3rem"
    }
}
//When user clicked caption-section, caption-section toggles to default position.
function toggleCaptionBack() {
    if(document.getElementById("caption-section").style.top == "3rem") {
        document.getElementById("caption-section").style.top ="-3.5rem"
    } 
}

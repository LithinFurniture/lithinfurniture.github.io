// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar-div").style.top = "0";
//     } else {
//         document.getElementById("navbar-div").style.top = "-250px";
//     }
//     prevScrollpos = currentScrollPos;
// }

function toggleMenu() {
    if(document.getElementById("caption-section").style.top == "3rem") {
        document.getElementById("caption-section").style.top ="-3.0rem"
    } else {
        document.getElementById("caption-section").style.top= "3rem"
    }
}
const scrollBtn = document.getElementById("scroll-top-btn");

// When the user scrolls down from the top of the page, show the button
window.onscroll = () => {
   scrollFn();
};

const scrollFn = () => {
   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.style.display = "flex";
   } else {
      scrollBtn.style.display = "none";
   }
};

// When the user clicks on the button, scroll to the top of the page
const scrollingToTopFn = () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
};
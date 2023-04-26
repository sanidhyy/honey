const header = document.querySelector("header");
const scrollBtn = document.getElementById("scroll-btn");

// handle scroll event
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

// hide scroll on first page load
window.onload = function () {
  scrollFunction();
};

// scroll on page behaviour
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

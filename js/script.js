// get elements
const header = document.querySelector("header");
const scrollBtn = document.getElementById("scroll-btn");
const menu = document.getElementById("menu-icon");
const navlist = document.querySelector(".nav-list");
const navlistEl = document.querySelectorAll(".nav-list li a");

// handle nav list element on click
navlist.addEventListener("click", (e) => {
  // remove active class from every element
  navlistEl.forEach((el) => {
    if (el.classList.contains("active")) el.classList.remove("active");
  });

  // add active class to current element
  if (e.target.tagName === "A") {
    if (!e.target.classList.contains("active"))
      e.target.classList.add("active");
  }
});

// scroll on page behaviour
const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

// handle scroll event
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 80);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
  scrollFunction();
};

// hide scroll on first page load
window.onload = () => {
  scrollFunction();
};

// Handle menu click
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

// Scroll reveal animations
const sr = ScrollReveal({
  origin: "top",
  distance: "85px",
  duration: 2500,
  reset: true,
});

// animations
sr.reveal(".home-text", { delay: 300 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".container", { delay: 400 });

sr.reveal(".about-img", {});
sr.reveal(".about-text", { delay: 300 });

sr.reveal(".middle-text", {});
sr.reveal(".shop-content,.row-btn", { delay: 300 });

sr.reveal(".review-content,.contact", { delay: 300 });

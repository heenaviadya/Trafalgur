let navOpen = false;
// DOM
const mobileNav = document.querySelector("#mobile");
const desktopNav = document.querySelector("#desktop");
const openNavToggler = document.querySelector("#nav-btn-open");
const closeNavToggler = document.querySelector("#nav-btn-close");
const navMenu = document.querySelector("#navMenu");

function Responsive() {
  if (window.innerWidth > 1000) {
    mobileNav.setAttribute("class", "hidden");
    desktopNav.setAttribute("class", "desktop");
  } else {
    mobileNav.setAttribute("class", "mobile");
    desktopNav.setAttribute("class", "hidden");
  }
}

function NavBtnHandler() {
  navOpen = !navOpen;
  if (navOpen) {
    navMenu.setAttribute("class", "nav-items");
    openNavToggler.style.display = "none";
    closeNavToggler.style.display = "inline-block";
    navMenu.setAttribute("class", "nav-items");
  } else {
    navMenu.setAttribute("class", "hidden");
    closeNavToggler.style.display = "none";
    openNavToggler.style.display = "inline-block";
  }
}
addEventListener("load", () => {
  NavBtnHandler();
  Responsive();
});
// Initial Run
addEventListener("resize", (event) => {
  Responsive();
});

openNavToggler.addEventListener("click", () => {
  NavBtnHandler();
});
closeNavToggler.addEventListener("click", () => {
  NavBtnHandler();
});

// testimonial section
const slides = document.querySelectorAll(".carousel-slide");
const nextSlide = document.querySelector("#btn-next");
const prevSlide = document.querySelector("#btn-prev");

let count = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

nextSlide.addEventListener("click", function () {
 
  if (count === maxSlide) {
    count = 0;
  } else {
    count++;
  }

//   move slide by -100%
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - count)}%)`;

  });
});



// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (count === 0) {
    count = maxSlide;
  } else {
    count--;
  }

  //   move slide by 100%
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - count)}%)`;
  });
});
//   move slide by 100%
// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${index * 100}%)`;
// });





// Scroll to top js
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

"use strict";

import Event from "./event-service.js";
let _event = new Event();
/**
 * Toggle menu for mobile devices
 */
const burger = document.querySelector(".burger");
let navlist = document.querySelector(".nav-list");

let toggleMenu = () => {
  burger.classList.toggle("open");
  navlist.classList.toggle("menu-open");
};

window.toggleMenu = () => toggleMenu();

try {
  document.querySelector(".button-section").scrollLeft = 90;
} catch (error) {
  console.error();
}

/* slick slider*/
$(document).ready(function () {
  $(".sponsor-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });
});

// Hero Slider

let slideSections;
let activeSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
  slideSections = document.querySelectorAll(".frontpage-hero");
  showSlide(1);
  setInterval(() => setActiveSlide(), 10000);
});

/**
 * Hiding all slideSections
 */
let hideAllSlideSections = () => {
  for (const slideSection of slideSections) {
    slideSection.style.display = "none";
  }
};

/**
 * displaying a slide section by given index
 */
let showSlide = (index) => {
  hideAllSlideSections(); // start by hiding all slides sections
  activeSlide = index;
  slideSections[activeSlide].style.display = "flex"; // display slide section by activeSlide number
};

/**
 * Chaning and displaying the active slide section
 * - changing the global variable activeSlide and display the new active slideSection
 */
let setActiveSlide = () => {
  if (activeSlide < slideSections.length - 1) {
    // checking if activeSlide is lower than the number of slide sections
    activeSlide++; // incrementing activeSlide number (+1)
  } else {
    // if not, change the activeSlide back to the first one
    activeSlide = 0;
  }
  hideAllSlideSections(); //hide all slides
  slideSections[activeSlide].style.display = "flex"; // display slide section by activeSlide number
};

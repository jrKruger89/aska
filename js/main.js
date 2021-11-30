"use strict";

/**
 * Toggle mewnu for mobile devices
 */
const burger = document.querySelector(".burger");
let navlist = document.querySelector(".nav-list");

let toggleMenu = () => {
  burger.classList.toggle("open");
  navlist.classList.toggle("menu-open");
};

document.querySelector(".button-section").scrollLeft = 90;

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

let heroSlides = [
  {
    img_url: "../images/hero1.jpg",
    p_text: "Lorem ipsum 1",
    button: "Læs mere",
  },
  {
    img_url: "../images/map.svg",
    p_text: "Lorem ipsum 2",
    button: "Læs mere",
  },
  {
    img_url: "../images/fav_icon.svg",
    p_text: "Lorem ipsum 3",
    button: "Læs mere",
  },
];

let img = document.querySelector(".frontpage-hero");
let p = document.querySelector(".hero-text");
let button = document.querySelector(".hero-read-more");

let heroSlider = () => {
  let i = 0;
  img.style.backgroundImage = `url(${heroSlides[2]["img_url"]})`;
  p.innerHTML = heroSlides[2]["p_text"];

  setInterval(() => {
    // If we've reached the end of the array...
    if (i >= heroSlides.length) {
      i = 0;
    }
    img.style.backgroundImage = `url(${heroSlides[i]["img_url"]})`;
    p.innerHTML = heroSlides[i]["p_text"];

    i++; // Sete the path to the current counter and then increase the counter
  }, 10000);
};

heroSlider();

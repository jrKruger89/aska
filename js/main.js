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

/* 
let heroSlides = [
  {
    "img-url": "images/hero1.jpg",
    "p-text": "Jeg er slide nr. 1",
    "btn-href": "pages/kalender.html",
  },
  {
    "img-url": "../images/fav_icon.svg",
    "p-text": "Jeg er slide nr. 2",
    "btn-href": "pages/om-aska.html",
  },
  {
    "img-url": "images/hero1.jpg",
    "p-text": "Jeg er slide nr. 3",
    "btn-href": "pages/aska-ungdom.html",
  },
];

let section = document.querySelector(".frontpage-hero");
let pText = document.querySelector(".hero-text");
let readMore = document.querySelector(".hero-read-more");

let i = 0;
let timer = setInterval(() => {
  if (i >= heroSlides.length) {
    i = 0;
  }
  section.style.background = `url(${heroSlides[i]["img-url"]})`;
  pText.innerHTML = heroSlides[i]["p-text"];
  readMore.innerHTML = heroSlides[i]["btn-href"];
  i++;
}, 5000);
 */

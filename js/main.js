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

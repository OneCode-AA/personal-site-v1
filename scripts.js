"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

// const header = document.querySelector(".header");
// const goTopBtn = document.querySelector(".top");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 10) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }
// });

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector(".nav-toggle-btn");
const navbar = document.querySelector(".nav");

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector(".skills-toggle");
const toggleBtns = document.querySelectorAll(".toggle-btn");
const skillsBox = document.querySelector(".skills-box");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  });
}

/**
 * check & apply last time selected theme from localStorage
 */

// if (localStorage.getItem("theme") === "light-theme") {
//   themeToggleBtn.classList.add("active");
//   document.body.classList.remove("dark-theme");
//   document.body.classList.add("light-theme");
// } else {
//   themeToggleBtn.classList.remove("active");
//   document.body.classList.remove("light-theme");
//   document.body.classList.add("dark-theme");
// }

function store(value) {
  localStorage.setItem("light-mode", value);
}

function load() {
  const liteMode = localStorage.getItem("light-mode");

  if (!liteMode) {
    store(false);
    icon.classList.add("fa-sun");
  } else if (liteMode == "true") {
    body.classList.add("light-mode");
    icon.classList.add("fa-moon");
  } else if (liteMode == "false") {
    icon.classList.add("fa-sun");
  }
}

/**
 * dark & light theme toggle
 */

// const themeToggleBtn = document.querySelector(".theme-btn");

// themeToggleBtn.addEventListener("click", function () {
//   elemToggleFunc(themeToggleBtn);

//   if (themeToggleBtn.classList.contains("active")) {
//     document.body.classList.remove("dark-theme");
//     document.body.classList.add("light-theme");

//     localStorage.setItem("theme", "light-theme");
//   } else {
//     document.body.classList.add("dark-theme");
//     document.body.classList.remove("light-theme");

//     localStorage.setItem("theme", "dark-theme");
//   }
// });

const body = document.querySelector("body");
const btn = document.querySelector(".theme-btn");
const icon = document.querySelector(".btn-icon");

btn.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  icon.classList.add("animated");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    dots.style.backgroundColor = "#000";
  } else {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  }

  setTimeout(() => {
    icon.classList.remove("animated");
  }, 500);
});

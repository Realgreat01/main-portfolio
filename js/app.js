let body = document.querySelector("body");
let navbar = document.getElementById("nav");
let menuIcon = document.getElementById("menu-icon");
let cancelIcon = document.getElementById("cancel-icon");

// GETTING ACHIEVEMENTS DATA
let clients = document.querySelector("#clients");
let projects = document.querySelector("#projects");
let experiences = document.querySelector("#experience");
let projectsCounter = 10;
let clientsCounter = 0;
let experienceCounter = 0;

const projectAdd = () => {
  if (projectsCounter < 24) {
    projectsCounter++;
  }
  projects.textContent = projectsCounter + "+";

  if (clientsCounter < 3) {
    clientsCounter++;
  }
  clients.textContent = clientsCounter + "+";

  if (experienceCounter < 17) {
    experienceCounter++;
  }
  experiences.innerHTML = `${experienceCounter} <span style="font-size: 16px">months<span>`;
};
let countTime = setInterval(projectAdd, 50);
setTimeout(() => {
  projectsCounter = 0;
  return clearInterval(countTime);
}, 3000);

let dark = document.getElementById("dark");
let light = document.getElementById("light");

// FOR  LIGHT  THEME
const lightMode = () => {
  const socialIcons = document.querySelectorAll(".social-icons");
  body.style.setProperty("--primary", "#050000");
  body.style.setProperty("--secondary", "#ff0077");
  body.style.setProperty("--tertiary", "#1100ff");
  body.style.setProperty("--dark", "#fff");
  body.style.setProperty(
    "--background",
    "linear-gradient(140deg, #fff, #dcfbfc)"
  );
  body.style.setProperty("--box", "#6bb5fa");
  body.style.setProperty("--nav", "#b9f4f5");
  socialIcons.forEach((icons) => (icons.style.filter = "none"));
  setTimeout(() => {
    const skillTools = document.querySelectorAll(".dark-icons");
    skillTools.forEach((icons) => (icons.style.filter = "none"));
  }, 100);
  // light.style.visibility="visible";
  light.style.visibility = "hidden";
  dark.style.visibility = "visible";
};

// function for Dark Mode
const darkMode = () => {
  const socialIcons = document.querySelectorAll(".social-icons");

  body.style.setProperty("--primary", "#fff");
  body.style.setProperty("--secondary", "#fa2388");
  body.style.setProperty("--tertiary", "#fff");
  body.style.setProperty("--dark", "#1a0129");
  body.style.setProperty(
    "--background",
    "linear-gradient(105deg, #240127ee ,#0d0122 50%, #07010f)"
  );
  body.style.setProperty("--box", "#52606d");
  body.style.setProperty("--nav", "#2b024d");
  socialIcons.forEach((icons) => {
    icons.style.filter = "brightness(0) invert(1)";
  });
  setTimeout(() => {
    const skillTools = document.querySelectorAll(".dark-icons");
    skillTools.forEach(
      (icons) => (icons.style.filter = "brightness(0) invert(1)")
    );
  }, 100);
  setTimeout(() => {
    const skillProgress = document.querySelectorAll("#skill-name");
    skillProgress.forEach(
      (icon) => (icon.style.filter = "brightness(1) invert(0)")
    );
    console.log(skillProgress);
  }, 1000);
  dark.style.visibility = "hidden";
  light.style.visibility = "visible";
};

// ANIMATE NAV BAR ON SCROLL
let SCROLL_VALUE = 900;
let TOP_SCROLL = 600;

let initialScrollValue = SCROLL_VALUE;
window.addEventListener("scroll", () => {
  let currentScrollPosition = window.scrollY;
  if (initialScrollValue > currentScrollPosition) {
    navbar.style.position = "static";
    navbar.style.background = "none";
  } else if (currentScrollPosition <= TOP_SCROLL) {
    navbar.style.background = "none";
    projectsCounter = 10;
    clientsCounter = 0;
    experienceCounter = 0;

    console.log("scrolled");

    let scrollTime = setInterval(projectAdd, 500);
    setTimeout(() => clearInterval(scrollTime), 10000);
  } else {
    navbar.style.position = "fixed";
    navbar.style.background = "var(--nav)";
    navbar.style.transition = "1s";
  }
  initialScrollValue = currentScrollPosition;
});

const nav = document.querySelector(".mobile-menu");
const navItems = document.querySelectorAll(".nav-flex a");

// Toggle Show Menu
const showMenu = () => {
  nav.style.transform = "translateX(0)";
  menuIcon.style.visibility = "hidden";
  body.style.overflow = "hidden";
  cancelIcon.style.visibility = "visible";
};

// Toggle Hide Menu
const hideMenu = () => {
  nav.style.transform = "translateX(100%)";
  body.style.overflow = "visible";
  menuIcon.style.visibility = "visible";
  cancelIcon.style.visibility = "hidden";
  navbar.style.position = "static";
};
menuIcon.addEventListener("click", showMenu);
cancelIcon.addEventListener("click", hideMenu);
navItems.forEach((item) => item.addEventListener("click", hideMenu));

// UPDATING BIOGRAHY
const readMore = document.querySelector(".read-more");
const briefInfo = document.querySelector(".brief-info");
let valueBtn = true;

const updateBiography = () => {
  // briefInfo.style.fontFamily ="'Raleway', sans-serif"
  briefInfo.innerHTML = `
      I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place.
      <br> <br>
      I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers.
      <br><br>
      I have been writing vanilla Js for like 6 months before going fully into using Vue JS.`;
  readMore.innerText = "Read More ↗";
  readMore.addEventListener("click", () => {
    if (valueBtn) {
      briefInfo.innerHTML = `
          I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place.
          <br><br>
          I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers.
          <br><br>
          I have been writing vanilla Js for like 6 months before going fully into using Vue JS. I hope to scale up my work to become a full stack developer in the near time building both backend and front end applications.
          <br><br> In addition, I am an SDG advocate who uses his voice and skills in contributing to the attainment of a sustainable society.In all, I am looking forward to any industry or company that values my skills and is ready to saddle me with responsibility that aims to promote the company goals and also protect my own personal interests.`;
      readMore.innerText = "Show Less ↗";
      valueBtn = false;
    } else {
      briefInfo.innerHTML = `
          I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place.
          <br> <br>
          I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers.
          <br><br>
          I have been writing vanilla Js for like 6 months before going fully into using Vue JS.`;
      readMore.innerText = "Read More ↗";
      valueBtn = true;
    }
  });
};

// UPDATING THEME FROM LOCAL STORAGE
window.addEventListener("DOMContentLoaded", () => {
  updateBiography();

  const currentTheme = localStorage.getItem("theme");

  if (currentTheme == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

// CHANGING MODES ON MODE ICON CLICKS
const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme == "dark") {
    darkMode();
    localStorage.setItem("theme", "light");
  } else {
    lightMode();
    localStorage.setItem("theme", "dark");
  }
});

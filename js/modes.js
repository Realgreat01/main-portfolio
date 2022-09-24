let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.querySelector("body");

// FOR  LIGHT  THEME
const lightMode = () => {
	const socialIcons = document.querySelectorAll('.social-icons')
	body.style.setProperty('--primary', '#050000')
	body.style.setProperty('--secondary', '#ff0156')
	body.style.setProperty('--tertiary', '#1100ff')
	body.style.setProperty('--dark', '#fff')
	body.style.setProperty('--certificate', '#ff0077')
    body.style.setProperty('--box', '#6bb5fa')
    body.style.setProperty('--nav', '#fff')
	body.style.setProperty(
		'--background',
		'linear-gradient(140deg, #fff, #dcfbfc)'
	)
	socialIcons.forEach(icons => (icons.style.filter = 'none'))
	setTimeout(() => {
		const skillTools = document.querySelectorAll('.dark-icons')
		skillTools.forEach(icons => (icons.style.filter = 'none'))
	}, 100)
	// light.style.visibility="visible";
	light.style.visibility = 'hidden'
	dark.style.visibility = 'visible'
}

// function for Dark Mode
const darkMode = () => {
	const socialIcons = document.querySelectorAll('.social-icons')

	body.style.setProperty('--primary', '#fff')
	body.style.setProperty('--secondary', '#83f4fc')
	body.style.setProperty('--tertiary', '#fff')
	body.style.setProperty('--white', 'blue')
	body.style.setProperty('--dark', 'hsl(0, 0%, 6%)')
	body.style.setProperty('--certificate', '#ff0077')
    body.style.setProperty('--box', 'hsl(0, 2%, 23%)')
    body.style.setProperty('--nav', '#111111')
	body.style.setProperty(
		'--background',
		'linear-gradient(105deg, #0d0d0e 50%, #000)'
	)
	socialIcons.forEach(icons => {
		icons.style.filter = 'brightness(0) invert(1)'
	})
  dark.style.visibility = "hidden";
  light.style.visibility = "visible";
};

window.addEventListener("DOMContentLoaded", () => {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

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

let dark = document.getElementById('dark')
let light = document.getElementById('light')
let body = document.querySelector('body')

// FOR  LIGHT  THEME
const lightMode = () => {
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
	setTimeout(() => {
		const socialIcons = document.querySelectorAll('.social-icons')
		// socialIcons.forEach(icons => (icons.style.filter = 'none'))
		const skillTools = document.querySelectorAll('.dark-icons')
		// skillTools.forEach(icons => (icons.style.filter = 'none'))
	}, 100)
	light.style.visibility = 'hidden'
	dark.style.visibility = 'visible'
}

// function for Dark Mode
const darkMode = () => {
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
	setTimeout(() => {
		const socialIcons = document.querySelectorAll('.social-icons')
		socialIcons.forEach(icons => {
			icons.style.filter = 'brightness(0) invert(1)'
		})
	}, 100)
	dark.style.visibility = 'hidden'
	light.style.visibility = 'visible'
}

// LOADING CURRENT THEME ON PAGE RELOADS
window.addEventListener('DOMContentLoaded', () => {
	const currentTheme = localStorage.getItem('theme')

	if (currentTheme == 'light') {
		lightMode()
	} else {
		darkMode()
	}
})

const mode = document.getElementById('mode')
mode.addEventListener('click', () => {
	let currentTheme = localStorage.getItem('theme')

	if (currentTheme == 'dark') {
		darkMode()
		localStorage.setItem('theme', 'light')
	} else {
		lightMode()
		localStorage.setItem('theme', 'dark')
	}
})

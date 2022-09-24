let body = document.querySelector('body')
let navbar = document.getElementById('nav')
let menuIcon = document.getElementById('menu-icon')
let cancelIcon = document.getElementById('cancel-icon')

// GETTING ACHIEVEMENTS DATA
let clients = document.querySelector('#clients')
let projects = document.querySelector('#projects')
let experiences = document.querySelector('#experience')
let projectsCounter = 10
let clientsCounter = 0
let experienceCounter = 0

const projectAdd = () => {
	if (projectsCounter < 24) {
		projectsCounter++
	}
	projects.textContent = projectsCounter + '+'

	if (clientsCounter < 3) {
		clientsCounter++
	}
	clients.textContent = clientsCounter + '+'

	if (experienceCounter < 17) {
		experienceCounter++
	}
	experiences.innerHTML = `${experienceCounter} <span style="font-size: 16px">months<span>`
}
let countTime = setInterval(projectAdd, 50)
setTimeout(() => {
	projectsCounter = 0
	return clearInterval(countTime)
}, 3000)

let dark = document.getElementById('dark')
let light = document.getElementById('light')

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
	setTimeout(() => {
		const skillTools = document.querySelectorAll('.dark-icons')
		skillTools.forEach(
			icons => (icons.style.filter = 'brightness(0) invert(1)')
		)
	}, 100)
	setTimeout(() => {
		const skillProgress = document.querySelectorAll('#skill-name')
		skillProgress.forEach(
			icon => (icon.style.filter = 'brightness(1) invert(0)')
		)
		console.log(skillProgress)
	}, 1000)
	dark.style.visibility = 'hidden'
	light.style.visibility = 'visible'
}

// ANIMATE NAV BAR ON SCROLL
let SCROLL_VALUE = 900
let TOP_SCROLL = 600

let initialScrollValue = SCROLL_VALUE
window.addEventListener('scroll', () => {
	let currentScrollPosition = window.scrollY
	if (initialScrollValue > currentScrollPosition) {
		navbar.style.position = 'static'
		navbar.style.background = 'none'
	} else if (currentScrollPosition <= TOP_SCROLL) {
		navbar.style.background = 'none'
		projectsCounter = 10
		clientsCounter = 0
		experienceCounter = 0

		console.log('scrolled')

		let scrollTime = setInterval(projectAdd, 500)
		setTimeout(() => clearInterval(scrollTime), 10000)
	} else {
		navbar.style.position = 'fixed'
		navbar.style.background = 'var(--nav)'
		navbar.style.transition = '1s'
	}
	initialScrollValue = currentScrollPosition
})

const nav = document.querySelector('.mobile-menu')
const navItems = document.querySelectorAll('.nav-flex a')

// Toggle Show Menu
const showMenu = () => {
	nav.style.transform = 'translateX(0)'
	menuIcon.style.visibility = 'hidden'
	body.style.overflow = 'hidden'
	cancelIcon.style.visibility = 'visible'
}

// Toggle Hide Menu
const hideMenu = () => {
	nav.style.transform = 'translateX(100%)'
	body.style.overflow = 'visible'
	menuIcon.style.visibility = 'visible'
	cancelIcon.style.visibility = 'hidden'
	navbar.style.position = 'static'
}
menuIcon.addEventListener('click', showMenu)
cancelIcon.addEventListener('click', hideMenu)
navItems.forEach(item => item.addEventListener('click', hideMenu))

// UPDATING BIOGRAHY
const readMore = document.querySelector('.read-more')
const briefInfo = document.querySelector('.brief-info')
let valueBtn = true

const updateBiography = () => {
	// briefInfo.style.fontFamily ="'Raleway', sans-serif"
	briefInfo.innerHTML = `
        I am a <mark>FRONTEND DEVELOPER </mark> with a key interest in <mark>building industry scalable, reusable and simple products</mark>.I have experience working on projects that aims to <mark> address the diversity and uniformity among the users</mark> and also working earnestly in <mark>making the world a better place</mark>.
        <br><br>
        I'm skilled in both front end development using <mark>VUE JS AND ITS ECOSYSTEM</mark> tools as well as <mark>creating beautiful and user friendly designs </mark>. My skill sets are indicated below and with respective ratings.
  `
	readMore.innerText = 'Read More ↗'
	readMore.addEventListener('click', () => {
		if (valueBtn) {
			briefInfo.innerHTML = `
           I am a <mark class="capitals">FRONTEND DEVELOPER </mark> with a key interest in <mark>building industry scalable, reusable and simple products</mark>.I have experience working on projects that aims to <mark> address the diversity and uniformity among the users</mark> and also working earnestly in <mark>making the world a better place</mark>.
          <br><br>
          I'm skilled in both front end development using <mark class="capitals">VUE JS AND ITS ECOSYSTEM</mark> tools as well as <mark>creating beautiful and user friendly designs </mark>. My skill sets are indicated below and with respective ratings.
          <br><br>
          In addition, I am an <mark> SDG Advocate </mark> who uses his voice and skills in contributing to the attainment of a <mark>sustainable society</mark>. In all, I am <mark>looking forward to any industry or company that values my skills</mark> and is ready to saddle me with responsibility that aims to promote the company goals and also protect my own personal interests.
          `
			readMore.innerText = 'Show Less ↗'
			valueBtn = false
		} else {
			briefInfo.innerHTML = `
          I am a <mark>FRONTEND DEVELOPER </mark> with a key interest in <mark>building industry scalable, reusable and simple products</mark>.I have experience working on projects that aims to <mark> address the diversity and uniformity among the users</mark> and also working earnestly in <mark>making the world a better place</mark>.<br><br>
          I'm skilled in both front end development using <mark>VUE JS AND ITS ECOSYSTEM</mark> tools as well as <mark>creating beautiful and user friendly designs </mark>. My skill sets are indicated below and with respective ratings.
  `
			readMore.innerText = 'Read More ↗'
			valueBtn = true
		}
	})
}

// UPDATING THEME FROM LOCAL STORAGE
window.addEventListener('DOMContentLoaded', () => {
	updateBiography()

	const currentTheme = localStorage.getItem('theme')

	if (currentTheme == 'light') {
		darkMode()
	} else {
		lightMode()
	}
})

// CHANGING MODES ON MODE ICON CLICKS
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

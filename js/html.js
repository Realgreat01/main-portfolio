let mainNav = document.getElementById("main-nav");
mainNav.innerHTML = `
<nav id="nav">
    <div class="logo"><img src="./images/logo.svg" alt="logo"></div>
    <div class="nav-desktop">
        <ul class="nav-flex">
            <li><a href="index.html">Home</a></li>
            <li><a href="education.html">Education</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>
    <button id="download-btn"><a href="https://drive.google.com/file/d/1HUyXDxHg3W66O-zqcml1y0C8kxvvMui9/view?usp=sharing" target ="_blank" download>Download CV</a></button>
   <div id="mode">
        <img src="./images/icons/dark.svg" alt="dark" id="dark" onclick="lightMode()">
        <img src="./images/icons/light.svg" alt="light" id="light" onclick="darkMode()">
   </div>
   <div class="menu-bar">
       <img src="./images/icons/cancel.svg" alt="" id="cancel-icon">
       <img src="./images/icons/menu-2.svg" alt="" id="menu-icon">
   </div>
</nav>

<div class="mobile">
    <ul class="nav-mobile">
        <li><a href="index.html">Home</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
</div>`

// remove Preloader 

const mainTag = document.querySelectorAll("main");
const preloader = document.getElementById("preloader");
const getLoadersData = sessionStorage.getItem("loaders");
console.log(getLoadersData)
    if(getLoadersData=="loaded"){
        preloader.style.display="none";
        preloader.style.visibility="hidden";
        mainTag.forEach(items=>{
            items.style.opacity="1";
        });
        sessionStorage.setItem("loaders", "loaded")
    };


setTimeout(()=>{
    preloader.style.visibility="hidden";
    preloader.style.transition="2s";
    preloader.style.opacity="0";
    sessionStorage.setItem("loaders", "loaded")
        mainTag.forEach(items=>{
            items.style.opacity="1";
        });
        // sessionStorage.setItem("loaders", "loaded")
    }, 2000)

  setTimeout(()=>{
    document.body.style.overflowY="visible"
  },2000 )




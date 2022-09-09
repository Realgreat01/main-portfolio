let mainNav = document.getElementById("main-nav");
mainNav.innerHTML = `
<nav id="nav">
    <div class="logo"><img src="./images/logo.svg" alt="logo"></div>
    <button id="download-btn"><a href="https://drive.google.com/file/d/1HUyXDxHg3W66O-zqcml1y0C8kxvvMui9/view?usp=sharing" target ="_blank" download>Download CV</a></button>
    <div id="mode">
        <img src="./images/icons/dark.svg" alt="dark" id="dark" onclick="lightMode()">
        <img src="./images/icons/light.svg" alt="light" id="light" onclick="darkMode()">
    </div>
    <p><a href="/">Home</a></p>
</nav>
</div>`

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
    document.body.style.overflow="visible"
  },2000 )

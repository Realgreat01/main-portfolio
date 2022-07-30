
let clients = document.querySelectorAll("#clients");
let projects = document.querySelectorAll("#projects");
let experiences = document.querySelectorAll("#experience");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.querySelector("body");
let images = document.querySelectorAll("img");
let navbar = document.getElementById("nav");
let menuIcon = document.getElementById("menu-icon");
let cancelIcon = document.getElementById("cancel-icon");
let mobileNav = document.querySelector(".nav-mobile");
let main = document.querySelector("#main")


// Universal declaration for for Loops

let projectNum = 650;
let clientNum = 0;
let expNum = 0;

const projectAdd = ()=>{
  if(projectNum<700){ projectNum++;};
 projects.forEach(project => project.textContent = projectNum+ "+");

  if(clientNum<58){ clientNum++;};
 clients.forEach(client=>client.textContent = clientNum+ "+");

  if(expNum<50){ expNum++;};
 experiences.forEach(experience=>experience.textContent = expNum+ "+");
}
setInterval(projectAdd, 50);
clearInterval(projectAdd, 3000)


const darkMode = ()=>{
    body.style.setProperty('--primary', '#050000');
    body.style.setProperty('--secondary', '#ff0077');
    body.style.setProperty('--tertiary', '#006eff');
    body.style.setProperty('--dark', '#fff');
    body.style.setProperty('--background', 'linear-gradient(140deg, #fff, #dcfbfc)');
    body.style.setProperty('--box', '#6bb5fa');
    body.style.setProperty('--nav', '#b9f4f5');

    // light.style.visibility="visible";
    light.style.visibility="hidden";
    dark.style.visibility="visible";

    projectNum = 650;
    clientNum = 0;
    expNum = 0;

    setInterval(projectAdd, 50);
  }

  // function for LightMode
  const lightMode = ()=>{;
    body.style.setProperty('--primary', '#fff');
    body.style.setProperty('--secondary', '#fa2388');
    body.style.setProperty('--tertiary', '#7afa03');
    body.style.setProperty('--dark', '#1a0129');
    body.style.setProperty('--background', 'linear-gradient(105deg, #240127ee ,#0d0122 50%, #07010f)');
    body.style.setProperty('--box', '#52606d');
    body.style.setProperty('--nav', '#2b024d');
 

    dark.style.visibility="hidden";
    light.style.visibility="visible";

      projectNum = 650;
      clientNum = 0;
      expNum = 0;

    setInterval(projectAdd, 50);
  }


  // animate on scroll event
  let scrollval = 900;
  window.addEventListener('scroll', () => {
    if(scrollval >  window.scrollY) { 
      navbar.style.position="static"; 
      navbar.style.background="none";
      console.log("scroll up")
      
    }else if(window.scrollY<=600){
      console.log("scroll top")
      navbar.style.background="none";
      
    } else {
      console.log("scroll bottom")
          navbar.style.position="fixed";
          navbar.style.background="var(--nav)";
          navbar.style.transition="1s";
        }
    scrollval=window.scrollY;
  });
  
  // Toggle Show Menu
  const showMenu =()=>{
    if(mobileNav.style.height="0"){
    mobileNav.style.height="100%";
  }
  menuIcon.style.visibility="hidden";
  cancelIcon.style.visibility="visible";
  main.addEventListener("click", hideMenu);
}

// Toggle Hide Menu
const hideMenu =()=>{
  mobileNav.style.height="0";
  menuIcon.style.visibility="visible";
  cancelIcon.style.visibility="hidden";
}
menuIcon.addEventListener("click", showMenu)
cancelIcon.addEventListener("click", hideMenu)

mobileNav.addEventListener("mouseleave", hideMenu);



// Updating Bio
const readMore = document.querySelectorAll(".read-more");
const briefInfo = document.querySelectorAll(".brief-info");
let valueBtn = true;

const updateBiography = () => {
    for(let i =0; i<briefInfo.length; i++){ 
      briefInfo[i].textContent= "I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place.I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers" 
      readMore[i].innerText = "Read More ↗";
      
      readMore[i].addEventListener("click", ()=>{
        if(valueBtn){
          valueBtn=false;
          briefInfo[i].textContent= "I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place. I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers. I have been writing vanilla Js for like 6 months before going fully into using Vue JS. I hope to scale up my work to become a full stack developer in the near time building both backend and front end applications.In addition, I am an SDG advocate who uses his voice and skills in contributing to the attainment of a sustainable society.In all, I am looking forward to any industry or company that values my skills and is ready to saddle me with responsibility that aims to promote the company goals and also protect my own personal interests."
          readMore[i].innerText ="Show Less ↗";
          
        }else{
          valueBtn=true;
          briefInfo[i].textContent= "I am a front end developer with a key interest in building industry scalable, reusable and simple products.I have experience working on projects that aims to promote diversity and uniformity among the populace and also working earnestly in making the world a better place.I'm skilled in both front end development using vue js and also design. My skill set is indicated below and with respective ratings. As a designer, I spent more time understanding how design and design patterns work than actually designing which makes me able to work perfectly well with professional ui designers" 
          readMore[i].innerText = "Read More ↗";
            }
      })
    }
}

// Updating Theme from Local Storage
window.addEventListener("DOMContentLoaded", ()=>{
      updateBiography()
        const currentTheme= localStorage.getItem("theme");
  
        if(currentTheme=="light"){
            lightMode();
        }else{
            darkMode();
        }})
        
    const mode = document.getElementById("mode")
    mode.addEventListener("click",()=>{
      const getItemFromLocalStorage = localStorage.getItem("theme");
      let currentTheme = getItemFromLocalStorage;
      console.log(getItemFromLocalStorage);
      if(currentTheme=="dark"){
          lightMode();
          localStorage.setItem("theme", "light");
      }else{
          darkMode();
          localStorage.setItem("theme", "dark");
      }
    })
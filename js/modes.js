let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.querySelector("body");

const lightMode = ()=>{
   const socialIcons = document.querySelectorAll(".social-icons");
  body.style.setProperty('--primary', '#050000');
  body.style.setProperty('--secondary', '#ff0077');
  body.style.setProperty('--tertiary', '#006eff');
  body.style.setProperty('--dark', '#fff');
  body.style.setProperty('--background', 'linear-gradient(140deg, #fff, #dcfbfc)');
  body.style.setProperty('--box', '#6bb5fa');
  body.style.setProperty('--nav', '#b9f4f5');
  socialIcons.forEach(icons=> icons.style.filter = "none")
  // light.style.visibility="visible";
  light.style.visibility="hidden";
  dark.style.visibility="visible";
}

// function for Dark Mode
const darkMode = ()=>{
  const socialIcons = document.querySelectorAll(".social-icons");
  body.style.setProperty('--primary', '#fff');
  body.style.setProperty('--secondary', '#fa2388');
  body.style.setProperty('--tertiary', '#7afa03');
  body.style.setProperty('--dark', '#1a0129');
  body.style.setProperty('--background', 'linear-gradient(105deg, #240127ee ,#0d0122 50%, #07010f)');
  body.style.setProperty('--box', '#52606d');
  body.style.setProperty('--nav', '#2b024d');
   socialIcons.forEach(icons=> { 
      icons.style.filter = "brightness(0) invert(1)";
    })
  dark.style.visibility="hidden";
  light.style.visibility="visible";
}

window.addEventListener("DOMContentLoaded", ()=>{
    const currentTheme= localStorage.getItem("theme");

    if(currentTheme=="light"){
        darkMode();
    }else{
        lightMode();
    }})
    
const mode = document.getElementById("mode")
mode.addEventListener("click",()=>{
  let currentTheme = localStorage.getItem("theme");
  
  if(currentTheme=="dark"){
      darkMode();
      localStorage.setItem("theme", "light");
  }else{
      lightMode();
      localStorage.setItem("theme", "dark");
  }
})
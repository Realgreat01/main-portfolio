
let clients = document.querySelectorAll("#clients");
let projects = document.querySelectorAll("#projects");
let experiences = document.querySelectorAll("#experience");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let body = document.querySelector("body");
let images = document.querySelectorAll("img");
let navbar = document.getElementById("nav");


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
    body.style.setProperty('--tertiary', '#ff0077');
    body.style.setProperty('--background', '#fff');
  
    // images.forEach((image)=>{
    //   image.style.filter = "none";

    //   image.addEventListener("mouseover", ()=>{
    //     image.style.filter="none"
    //   });

    //   image.addEventListener("mouseout", ()=>{
    //     image.style.filter="none"
    //   });
    // });

    light.style.visibility="visible";
    light.style.visibility="hidden";
    dark.style.visibility="visible";

    projectNum = 650;
    clientNum = 0;
    expNum = 0;

    setInterval(projectAdd, 50);
  }

  const lightMode = ()=>{;
    body.style.setProperty('--primary', '#fff');
    body.style.setProperty('--secondary', '#2929f8');
    body.style.setProperty('--tertiary', '#ff0077');
    body.style.setProperty('--background', '#050000')
  
      //  images.forEach((image)=>{
      // image.style.filter = "grayscale(100%)";

    //   image.addEventListener("mouseover", ()=>{
    //     image.style.filter="none"
    //   });
    //   image.addEventListener("mouseout", ()=>{
    //     image.style.filter="grayscale(100%)"
    //   });

    // });
    dark.style.visibility="hidden";
    light.style.visibility="visible";

      projectNum = 650;
      clientNum = 0;
      expNum = 0;

    setInterval(projectAdd, 50);
  }
//   navbar.style.scrollBehavior="smooth";

//   let scrollval = 0;
//       window.addEventListener('scroll', () => {
//   if(scrollval > window.scrollY) {
//     navbar.style.position="static";
   
//   } else {
//     navbar.style.position="fixed";
//     navbar.style.transition="1s";
//   }
//   scrollval = window.scrollY;
// });


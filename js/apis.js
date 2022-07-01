const projectData = document.getElementById("project-data");
const designData = document.getElementById("design-data");

const getData = async () =>{
    const  response = await fetch("./data/projects.json");
    const data = await response.json();
    const {FrontEnd, Designs } = data;
  

    // Creating Project Page DOM
    FrontEnd.forEach(project=>{
        projectData.innerHTML += `
        <div class="project-data">
        <div>
        <h1> ${project.name} </h1>  
        <p> ${project.website} </p>  
        <h4> ${project.date} </h4>
        </div>
        <img src="./images/projects/${project.src}">
        </div>
        `
    })
    
    // Creating Design Page DOM
    Designs.forEach(design=>{
        designData.innerHTML +=
        `
        <div class="design-data">
            <div>
                <h1> ${design.name} </h1>
            </div>
        </div>
    `;
})
}

getData()


const skills = async()=>{
    const response = await fetch("./data/skills.json");
    const data = await response.json();
    const {FrontEnd, Design, BackEnd} = data;

    // Getting the classes
    const frontend = document.querySelectorAll(".front-end");
    const backend = document.querySelectorAll(".backend");
    const design = document.querySelectorAll(".design");
   
    

    FrontEnd.forEach(item=>{
        frontend.forEach(inner=>{
            inner.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%">${item.skill}</p> <span id="skill-level">${item.level}%</span></div>
            </div>
            `
        });
    })

    BackEnd.forEach(item=>{
        backend.forEach(inner=>{
            inner.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%">${item.skill}</p> <span id="skill-level">${item.level}%</span></div>
            </div>
            `
        })
    });

    Design.forEach(item=>{
        design.forEach(inner=>{
            inner.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%">${item.skill}</p> <span id="skill-level">${item.level}%</span></div>
            </div>
            `
        })
    })
}
skills()


const services = async ()=>{
    const response = await fetch("./data/services.json");
    const data = await response.json();
    const {Services} = data;
    
    const serviceBox = document.getElementById("service-box")
    Services.forEach(service=>{
        serviceBox.innerHTML += `
        <div class="" id="">
        <img src="./images/services/web.svg" alt=""></img>
        <h4>${service.title}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aspernatur et porro laboriosam debitis laudantium nam illum. Facilis, asperiores quis?</p>
    </div>
        `
    })
}

services()

const project =async ()=>{
    const response = await fetch("./data/projects.json");
    const data = await response.json();
    const {FrontEnd, Designs} = data;
    
    const projectItems = document.getElementById("project-items")
    FrontEnd.forEach(frontend=>{
        projectItems.innerHTML += `
        <div class="project-items">
                <div class="project-data">
                    <h3>${frontend.name}</h3>
                    <h4>${frontend.date}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque earum magnam!</p>
                </div>
                <div class="project-info">
                    <a href=""><img src="./images/icon-arrow.svg" alt="link">Live Website</a>
                    <a href=""><img src="./images/icon-arrow.svg" alt="link"></a>
                    <img src="./images/projects/new.jpg" alt="">
                </div>
        </div> `
    });

    Designs.forEach(design=>{
        projectItems.innerHTML += `
        <div class="project-items">
                <div class="project-data">
                    <h3>${design.name}</h3>
                    <h4>${design.date}</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque earum magnam!</p>
                </div>
                <div class="project-info">
                    <a href=""><img src="./images/icon-arrow.svg" alt="link">Live Website</a>
                    <a href=""><img src="./images/icon-arrow.svg" alt="link"></a>
                    <img src="./images/projects/new.jpg" alt="">
                </div>
        </div> `
    })
   
}

project();

const education = async ()=>{
    const response = await fetch("./data/education.json");
    const data = await response.json();
    const {Education, Courses} = data;

    const educationItem = document.getElementById("education");

    Education.forEach(item =>{
        educationItem.innerHTML +=`
        <div>
                       <div class="dots">
                       </div>
                        <div class="education-item">
                            <h2>${item.name}</h2>
                            <h4>${item.graduation}</h4>
                            <h4 style="margin-top: 10px;">${item.course}</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatibus pariatur laudantium.</p>
                       </div>
                </div>
        `
    });
    Courses.forEach(item =>{
        educationItem.innerHTML +=`
        <div>
                       <div class="dots">
                       </div>
                        <div class="education-item">
                            <h2>${item.title}</h2>
                            <h4>${item.OfferedBy} ( ${item.Date} )</h4>
                            <p>${item.summary}</p>
                       </div>
                </div>
        `
    });



}
education()

const experience = async () =>{
    const response = await fetch("./data/experience.json");
    const data = await response.json();
    const {VolunteeringExperience, WorkExperience} = data;

    const expDom = document.getElementById("experience-item"); 
    
    VolunteeringExperience.forEach(item=>{
    expDom.innerHTML += `
        <div>
            <div class="dots">
            </div>
            <div class="education-item">
                <h2>${item.Organization}</h2>
                <h4 style="margin-top: 2px">${item.Role}</h4>
                <h4 style="margin-top: 2px">${item.Program}</h4>
                <h4 style="margin-top: 2px">${item.Duration}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatibus pariatur laudantium.</p>
            </div>
        </div>
    `
    });
    WorkExperience.forEach(item=>{
    expDom.innerHTML += `
        <div>
            <div class="dots">
            </div>
            <div class="education-item">
                <h2>${item.Company}</h2>
                <h4 style="margin-top: 5px"> Role : ${item.Role}</h4>
                <h4 style="margin-top: 5px"> Duration : ${item.Duration}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A voluptatibus pariatur laudantium.</p>
            </div>
        </div>
    `
    })
}
experience()

const testimonials = async ()=>{
    const getStars=(arr)=>{
        for (let i in arr){
           return `<img src="./images/star.svg" alt="">` 
        }
    }

    const  response = await fetch("./data/testimonial.json");
    const data = await response.json();
    const {Testimonials} = data;

    const cards = document.getElementById("testifier-container");
    
    Testimonials.forEach(item=>{
        cards.innerHTML +=`
    <div class="testifier-card">
    <div class="testifier-head">
        <img src="./images/icon-quotes.svg" alt="" class="quote-icon">
        <div class="rating">
            <img src="./images/star.svg" alt="">
            <img src="./images/star.svg" alt="">
            <img src="./images/star.svg" alt="">
            <img src="./images/star.svg" alt="">
            <img src="./images/star.svg" alt="">
        </div>
    </div>

        <p class="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat soluta voluptates itaque quasi, harum odio aliquid inventore quis. Nesciunt, corporis.</p>

        <div class="testifier-details">
            <img src="./images/man.svg" alt="">
            <div>
                <h3>${item.name} -5</h4>
                <h4>${item.position}.</h4>
            </div>
        </div>
    </div>
    `
    })
}

testimonials()
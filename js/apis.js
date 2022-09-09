const skills = async()=>{
    const response = await fetch("./data/skills.json");
    const data = await response.json();
    const {FrontEnd, Design, BackEnd, Management} = data;

    // Getting the classes
    const frontend = document.querySelector(".front-end");
    const backend = document.querySelector(".backend");
    const design = document.querySelector(".design");
    const management = document.querySelector(".management");
   
    

    FrontEnd.forEach(item=>{
        frontend.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%"></p>
                <span id="skill-title">${item.skill}</span>
                <span id="skill-level">${item.level}%</span>
            </div>
            </div>
            `
    })

    BackEnd.forEach(item=>{
        backend.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')" class="${item.class}">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%"></p>
                <span id="skill-title">${item.skill}</span>
                <span id="skill-level">${item.level}%</span>
            </div>
            </div>
            `
    });

    Design.forEach(item=>{
        design.innerHTML += `
            <div id="progress-container" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%"></p>
                <span id="skill-title">${item.skill}</span>
                <span id="skill-level">${item.level}%</span>
            </div>
            </div>
            `
    });
    Management.forEach(item=>{
        management.innerHTML += `
            <div id="progress-container" class="${item.class}" style="background: url('./images/skills/${item.icon}')">
            <div id="progress"> <p id="skill-name" style="width:${item.level}%"></p>
                <span id="skill-title">${item.skill}</span>
                <span id="skill-level">${item.level}%</span>
            </div>
            </div>
            `
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
        <img src="./images/services/${service.icon}" alt=""></img>
        <h4>${service.title}</h4>
        <p>${service.description}</p>
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

                <div class="project-image">
                    <img src="./images/projects/${frontend.src}" alt="${frontend.src}">
                </div>
                
                <div class="project-data">
                    <div class="project-summary">
                        <h4 id="project-name">${frontend.name}</h3>
                        <h4 id="project-date">${frontend.date}</h4>
                    </div>
                    <div class="project-info"> 
                        <div id="preview-icons">
                            <a href="${frontend.website}" id="left" target="blank"><img src="../images/icons/view.svg" alt="preview"></a>
                            <a href="${frontend.github}" id="right" target="blank"><img src="../images/icons/github-icon.svg" alt="github repositoty"></a>
                        </div>
                        <img src="./images/skills/${frontend.tools}" alt="${frontend.tools}"
                    </div>    
                </div> 
        </div> `
    });

    Designs.forEach(design=>{
        projectItems.innerHTML += `
        <div class="project-items">

                <div class="project-image">
                    <img src="./images/projects/${design.src}" alt="${design.src}">
                </div> 
                
                <div class="project-data">
                    <div class="project-summary">
                        <h4 id="project-name">${design.name}</h3>
                        <h4 id="project-date">${design.date}</h4>
                    </div>
                    <div class="project-info"> 
                        <div id="preview-icons">
                        <div></div>
                            <a href="${design.website}" id="left"><img src="../images/icons/view.svg" alt="preview"></a>
                        </div>
                        <img src="./images/skills/${design.tools}" alt="${design.tools}"
                    </div>    
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
                       <div class="dots education-dots">
                       </div>
                        <div class="education-item">
                            <h2>${item.name}</h2>
                            <h4>${item.graduation}</h4>
                            <h4 style="margin-top: 10px;">${item.course}</h4>
                            <p>${item.description}</p>
                       </div>
                </div>
        `
    });
    Courses.forEach(item =>{
        educationItem.innerHTML +=`
        <div>
                       <div class="dots education-dots">
                       </div>
                        <div class="education-item">
                            <h2>${item.title}</h2>
                            <h4>${item.OfferedBy} ( ${item.Date} )</h4>
                            <p>${item.summary}</p>
                            <button id="certificate"><a href="${item.Certificate}" target = "blank">Certificate</a></button>

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
            <div class="dots experience-dots">
            </div>
            <div class="education-item">
                <h2>${item.Organization}</h2>
                <h4 style="margin-top: 2px">${item.Role}</h4>
                <h4 style="margin-top: 2px">${item.Program}</h4>
                <h4 style="margin-top: 2px">${item.Duration}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `
    });
    WorkExperience.forEach(item=>{
    expDom.innerHTML += `
        <div>
            <div class="dots experience-dots">
            </div>
            <div class="education-item">
                <h2>${item.Company}</h2>
                <h4 style="margin-top: 5px"> Role : ${item.Role}</h4>
                <h4 style="margin-top: 5px"> Duration : ${item.Duration}</h4>
                <p>${item.description}</p>
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

    const testifiersContainer = document.getElementById("testifier-container");
    
    Testimonials.forEach(item=>{
        testifiersContainer.innerHTML +=`
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

        <p class="quote">${item.comment}</p>

        <div class="testifier-details">
            <img src="./images/man.svg" alt="">
            <div>
                <h3>${item.name}</h4>
                <h4>${item.position}</h4>
            </div>
        </div>
    </div>
    `
    })
    
}

testimonials();


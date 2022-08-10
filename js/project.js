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
                            <a href="${frontend.website}" id="left"><img src="../images/icons/view.svg" alt="preview"></a>
                            <a href="${frontend.github}" id="right"><img src="../images/icons/github-icon.svg" alt="github repositoty"></a>
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
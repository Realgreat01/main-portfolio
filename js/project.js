const project =async ()=>{
    const response = await fetch("./data/projects.json");
    const data = await response.json();
    const {FrontEnd, Designs} = data;
    
    const projectItems = document.getElementById("project-items")
    FrontEnd.forEach(frontend=>{
        projectItems.innerHTML += `
        <div class="project-items">

                <div class="project-info">
                    <a href="" id="left">Live Website<img src="./images/icon-arrow.svg" alt="link"></a>
                    <a href="" id="right">Code On Github<img src="./images/icon-arrow.svg" alt="link"></a>
                    <img src="./images/projects/${frontend.src}" alt="">
                </div>
                
                <div class="project-data">
                    <h3>${frontend.name}</h3>
                    <h4>${frontend.date}</h4>
                    <p>${frontend.description}</p>
                </div>
        </div> `
    });

    Designs.forEach(design=>{
        projectItems.innerHTML += `
        <div class="project-items">

            <div class="project-info">
            <a href="" id="right">Instagram<img src="./images/icon-arrow.svg" alt="link"></a>
            <img src="./images/projects/${design.src}" alt="">
            </div>

            <div class="project-data">
                <h3>${design.name}</h3>
                <h4>${design.date}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cumque earum magnam!</p>
            </div>
        </div> `
    })
   
}

project();
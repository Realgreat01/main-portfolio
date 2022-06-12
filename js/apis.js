const projectData = document.getElementById("project-data");
const designData = document.getElementById("design-data");

const getData = async () =>{
    const  response = await fetch("./data/projects.json");
    const data = await response.json();
    const {FrontEnd, Designs } = data;
    console.log(data);


    for ( let i=0; i<4; i++){

        let project = FrontEnd[i];

        const name = project.name;
        const website = project.website;
        const date = project.date;
        const src = project.src;


        projectData.innerHTML += `
            <div class="project-data">
                <div>
                    <h1> ${name} </h1>  
                    <p> ${website} </p>  
                    <h4> ${date} </h4>
                </div>
                <img src="./images/projects/${src}">
            </div>
     `};

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

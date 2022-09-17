const updateIcons = (arr) => {
  const div = document.createElement("div");
  arr.map(
    (item) =>
      (div.innerHTML += `<img src="./images/skills/${item}" alt="${item}" class="project-tools-images">`)
  );
  return div.innerHTML;
};

const template = (frontend) => `
                <div class="project-image">
                    <p class="project-description"> ${frontend.description}</p>
                    <img class="project-main-image"src="./images/projects/${
                      frontend.src
                    }" alt="${frontend.src}">
                </div>
                
                <div class="project-data">
                    <div class="project-summary">
                        <h4 id="project-name">${frontend.name}</h4>
                        <h4 id="project-date">${frontend.date}</h4>
                    </div>
                    <div class="project-info"> 
                        <div id="preview-icons">
                            <a href="${
                              frontend.website
                            }" id="left" target="blank"><img src="../images/icons/view.svg" alt="preview"></a>
                            <a href="${
                              frontend.github
                            }" id="right" target="blank"><img src="../images/icons/github-icon.svg" alt="github repositoty"></a>
                        </div>
                        <div class="project-tools-div">${updateIcons(
                          frontend.tools
                        )}</div>
                    </div>    
                </div>
            `;
const aosConfig = `
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            `;
const animate = `
        data-aos="zoom-in-right"
        ${aosConfig}
        `;
const animateSlide = `
        data-aos="slide-right"
        ${aosConfig}
`;
const project = async () => {
  const response = await fetch("./data/projects.json");
  const data = await response.json();
  const { FrontEnd, Designs } = data;

  const projectItems = document.getElementById("project-items");
  FrontEnd.forEach((frontend, index) => {
    if (index % 2 === 0) {
      projectItems.innerHTML += `
        <div class="project-items" ${animate}>
        ${template(frontend)} 
        </div>
        `;
    } else {
      projectItems.innerHTML += `
        <div class="project-items" ${animateSlide}>
        ${template(frontend)} 
        </div>
        `;
    }
  });

  Designs.forEach((design) => {
    projectItems.innerHTML += `
        <div class="project-items" ${animate}>
        ${template(design)} 
        </div>
        `;
  });
};

project();

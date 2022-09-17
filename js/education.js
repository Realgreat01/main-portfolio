const education = async () => {
  const response = await fetch("./data/education.json");
  const data = await response.json();
  const { Education, Courses } = data;

  const educationItem = document.getElementById("education");

  Education.forEach((item) => {
    educationItem.innerHTML += `
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
        `;
  });
  Courses.forEach((item) => {
    educationItem.innerHTML += `
        <div>
                       <div class="dots">
                       </div>
                        <div class="education-item">
                            <h2>${item.title}</h2>
                            <h4>${item.OfferedBy} ( ${item.Date} )</h4>
                            <p>${item.summary}</p>
                       </div>
                </div>
        `;
  });
};
education();

const experience = async () => {
  const response = await fetch("./data/experience.json");
  const data = await response.json();
  const { VolunteeringExperience, WorkExperience } = data;

  const expDom = document.getElementById("experience-item");

  VolunteeringExperience.forEach((item) => {
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
    `;
  });
  WorkExperience.forEach((item) => {
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
    `;
  });
};
experience();

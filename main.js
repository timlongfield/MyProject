console.log("hi");

fetch("assets/data.json")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const projId = urlParams.get("project");

    if (projId) {
      // detailed page
      console.log("project ID", projId, urlParams);

      const filtered = data.projects.filter(d => d.id === projId);

      console.log("Filtered", filtered);
      
      renderProject(filtered[0]);
      
      
    } else { // main page
      
      renderMainPage(data);
      
    }
})
      

function renderProject(project) {
  document.querySelector(".container").innerHTML = `
    ${renderNavbar("project", [project.title.toUpperCase()])}

    <div style="text-align: center; padding: 15px;">
      <div>
        <a href="."><p style="color: black"><u>Go Back</u></p></a>
      </div>
      <p style="line-height: 1.5;">
        ${project.projectIntro}
      </p>
      <a
         style="color: blue"
        href=${project.projectLink}
        target="_blank"
        ><u>${project.projectLinkText}</u></a
      >
      <p style="line-height: 1.5;">
        ${project.projectCaption}
      </p>
      <img
        src=${project.projectImage}
        alt="Project Image"
        style="width: 50%"
      />
      
    </div>
    <div style="text-align: center" class ="col-12">
          ${renderFooter()}
        </div>
  `;
}

function renderMainPage(data) {
  document.querySelector(".container").innerHTML = `
        ${renderNavbar("main", ["ABOUT", "EDUCATION", "PROJECTS", "NEWS"])}
        ${renderHeader(data.about)}
        <div class="col-3 menu">
          ${renderProfilePhoto(data.about)}
          ${renderContactInfo(data.contact)}
          ${renderEducation(data.education)}
        </div>
        <div class="col-6">
          ${renderAbout(data.about)}
          ${renderProjects(data.projects)}
        </div>
        <div class="col-3 right">
          ${renderNews(data.news[0])}
        </div>
        <div style="text-align: center" class ="col-12">
          ${renderFooter()}
        </div>
    `;
}

function renderNavbar(page, items) {
  if (page === "main") {
    return `
<div class="flex-container" >
      <div class="flex-item-1">
        <ul>
          <a href="#about"><u>${items[0]}</u></a>
        </ul>
      </div>
      <div class="flex-item-2">
        <ul>
          <a href="#education"><u>${items[1]}</u></a>
        </ul>
      </div>
      <div class="flex-item-3">
        <ul>
          <a href="#projects"><u>${items[2]}</u></a>
        </ul>
      </div>
      <div class="flex-item-4">
        <ul>
          <a href="#news"><u>${items[3]}</u></a>
        </ul>
      </div>
    </div>
  `;
  } else {
  return `
    <div class="project-nav">
        ${items[0]}
    </div>
  `;
  }
}

function renderHeader(header) {
  return `
  <div style="padding-top: 70px; text-align: center">
        <h1 class="animate__animated animate__infinite animate__pulse animate__delay-2s" >${header.name}</h1>
        <h4>${header.title}</h4>
  </div>
  `;
}

function renderProfilePhoto(propic) {
  return `
        <img
          src=${propic.photo}
          alt="Loading..."
          style="width: 100%; margin-top: 3px; margin-bottom: 5;"
        />
  `;
}

function renderEducation(education) {
  return `
  <section id="education">

        <h2 style="padding-top: 80px" >Education</h2>
        <div class="box">
          <p style="line-height: 1.5;">
            <h3><br>Major:</br>
            ${education.major}</h3>
              <b>Relevant coursework:</b>
              ${education.coursework}
            </p>
        </div>
  </section>
  `;
}

function renderContactInfo(contact) {
  return `
      <h2>Contact Information</h2>
      <div style="color: blue" class="box">
      <p style="line-height: 1.5;">
        <i class="far fa-envelope"></i>
            <a style="color: blue" href=${contact.emailRef}>
              ${contact.email}</a>
      <br>
      <a style="color: blue" href=${contact.instagramRef}
              ><i class="fab fa-instagram"></i> ${contact.instagram}</a
            >    
      <br>
      <a style="color: blue" href=${contact.linkedinRef}
              ><i class="fab fa-linkedin"></i> ${contact.linkedin}</a
            >
        </p>
      </div>
  `;
}

function renderAbout(about) {
  return `
    <section id="about">
          <div>
          <h2 style="padding-top: 80px" >About</h2>
          <div class="box">
            <p style="line-height: 1.5;">
              ${about.headline}
            </p>
            <p style="line-height: 1.5;">
              ${about.subheadline}
            </p>
          </div>
          </div>
    </section>
  `;
}
  
function renderProject1(project) {
  return `
  <div class="box">
          <h3 class="projectTitle">
              ${project.title} | <i class="fas fa-laptop-code"></i>
            </h3>
            <p style="line-height: 1.5;">
              ${project.description}
            </p>
            <p style="line-height: 1.5;">
              ${project.subheadline}
            </p>
            <p>
            <a style="color: blue" href="?project=${project.id}"><u>${project.linkTitle}</u></a>
            </p>
  </div>
  
  `;
}
  
 function renderProject2(project) {
  return `
  
  <div style="margin-top: 10px" class="box">
            <h3 class="projectTitle">
              ${project.title} | <i class="fas fa-helicopter"></i>
            </h3>
            <p style="line-height: 1.5;">
              ${project.description}
            </p>
            <p>
            <a style="color: blue" href="?project=${project.id}"><u>${project.linkTitle}</u></a>
            </p>
  </div>
  
  `;
}
  

function renderNews(news) {
  return `
  <section id="news">
          <h2 style="padding-top: 75px" >News</h2>
          <div class="box">
            <h2>
              ${news.title}
            </h2>
            <p style="line-height: 1.5;">
              ${news.content}
            </p>
          </div>
        </section>
  
  `;
}

function renderFooter() {
  return `
  <div class="footer">
          <p>
        <strong>
        Author: Timothy Longfield
        </strong>
      </p>
    </div>
  
  `;
}

function renderProjects(projects){
    return `
    <section id="projects">
        <h2 style="padding-top: 80px" >Projects</h2>
        ${renderProject1(projects[0])}
        ${renderProject2(projects[1])}
        
        <!-- we will add a filter interface here in the next lab -->
        
        <!--
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
        -->
    </section>`;
}

// not used...
function renderProjectItems(projects) {
  return projects
    .map(
      d => `
	  <div class="row">
      <div class="col-6">
        <div class="project-title">
          <a href="?project=${d.id}"><strong>${d.title}</strong></a>
        </div>
        <div class="project-authors">
          ${d.authors}<br>
        </div>
				...
			<div class="col-6">
        <img src="${d.teaser}" width="100%">
      </div>
		</div>
	`
    )
    .join("");
}

      
      
    

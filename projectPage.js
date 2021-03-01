import renderNavbar from './components/NavBar.js';
import renderFooter from './components/Footer.js';

export default function renderProject(project) {
  document.querySelector(".container").innerHTML = `
    ${renderNavbar("project", [project[0].title])}

    <div style="text-align: center; padding: 15px;">
      <div>
        <a href="."><p style="color: black"><u>Go Back</u></p></a>
      </div>
      <p style="line-height: 1.5;">
        ${project[0].projectIntro}
      </p>
      <a
         style="color: blue"
        href=${project[0].projectLink}
        target="_blank"
        ><u>${project[0].projectLinkText}</u></a
      >
      <p style="line-height: 1.5;">
        ${project[0].projectCaption}
      </p>
      <img
        src=${project[0].projectImage}
        alt="Project Image"
        style="width: 50%"
      />
      
    </div>
    <div style="text-align: center" class ="col-12">
          ${renderFooter()}
        </div>
  `;
}
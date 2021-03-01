import renderNavbar from './components/NavBar.js';
import renderProfilePhoto from './components/ProPic.js';
import renderHeader from './components/Header.js';
import renderContactInfo from './components/ContactInfo.js';
import renderEducation from './components/Education.js';
import renderAbout from './components/About.js';
import renderProjects from './components/Projects.js';
import renderProjectItems from './components/ProjectItems.js';
import renderNews from './components/News.js';
import renderNewsItems from './components/NewsItems.js';
import renderFooter from './components/Footer.js';
import handler from './index.js';

export default function renderMainPage(data) {
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
          ${renderNews(data.news)}
        </div>
        <div style="text-align: center" class ="col-12">
          ${renderFooter()}
        </div>
    `;
  
  document.querySelector('.search input[name="news"]').addEventListener('input',handler);
  
  let buttons = document.querySelectorAll('.filter input[name="filter"]');
  buttons.forEach(cond=>cond.addEventListener('change', function(event){
      const filteredProjects = data.projects.filter(projects=>{
        if (this.value === "all") {
          return projects;
        } else {
          return projects.type === this.value;
        }
      });
        console.log(filteredProjects);
        document.querySelector('.project-list').innerHTML = renderProjectItems(filteredProjects);

      }));
}

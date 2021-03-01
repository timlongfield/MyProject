import renderProjectItems from './ProjectItems.js';

export default function renderProjects(projects){
    return `
    <section id="projects">
        <h2 style="padding-top: 80px" >Projects</h2>
        
        <div class="filter">
          <label>
            <input type="radio" name="filter" value="all" checked>
            All
          </label>
          <label>
            <input type="radio" name="filter" value="creative">
            Creative
          </label>
          <label>
            <input type="radio" name="filter" value="technical">
            Technical
          </label>

        </div>
        
        <div class="project-list">
            ${renderProjectItems(projects)}
        </div>
        
    </section>`;
}


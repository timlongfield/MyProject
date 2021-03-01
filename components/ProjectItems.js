export default function renderProjectItems(projects) {
  return projects
    .map(
      d => `
	  <div class="box" style="margin-top: 10px">
          <h3 class="projectTitle">
              ${d.title} | <i class="${d.icon}"></i>
            </h3>
            <p style="line-height: 1.5;">
              ${d.description}
            </p>
            <p style="line-height: 1.5;">
              ${d.subheadline}
            </p>
            <p>
            <a style="color: blue" href="?project=${d.id}"><u>${d.linkTitle}</u></a>
            </p>
  </div>
    
	`
    )
    .join("");
}
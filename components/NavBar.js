export default function renderNavbar(page, items) {
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
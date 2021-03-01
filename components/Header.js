export default function renderHeader(header) {
  return `
  <div style="padding-top: 70px; text-align: center">
        <h1 class="animate__animated animate__infinite animate__pulse animate__delay-2s" >${header.name}</h1>
        <h4>${header.title}</h4>
  </div>
  `;
}
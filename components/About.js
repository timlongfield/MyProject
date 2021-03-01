export default function renderAbout(about) {
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
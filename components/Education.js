export default function renderEducation(education) {
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
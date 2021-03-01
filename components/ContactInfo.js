export default function renderContactInfo(contact) {
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
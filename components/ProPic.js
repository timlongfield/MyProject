export default function renderProfilePhoto(propic) {
  return `
        <img
          src=${propic.photo}
          alt="Loading..."
          style="width: 100%; margin-top: 3px; margin-bottom: 5;"
        />
  `;
}
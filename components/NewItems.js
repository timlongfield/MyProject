export default function renderNewsItems(news) {
  return news
  .map(
  news=> `
  
    <div class="box" style="margin-top: 10px">
      <h2>
        ${news.title}
      </h2>
      <p style="line-spacing: 1.5">
        ${news.content}
      </p>
    </div>
  
  `).join("");
}
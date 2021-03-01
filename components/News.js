import renderNewsItems from './NewsItems.js';

export default function renderNews(news) {
  return `
  <section id="news">

          <h2 style="padding-top: 75px" >News</h2>
          
          <div class="search">
            <input type="search" name='news' placeholder="Search News...">
          </div>
          
          <div class="news-list">
            ${renderNewsItems(news)}
          
        </div>

  </section>
  
  `;
}

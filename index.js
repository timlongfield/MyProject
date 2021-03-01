import renderProject from './projectPage.js';
import renderMainPage from './mainPage.js';
import renderNewsItems from './components/NewsItems.js';


console.log("hi");

export default function handler(event){
    console.log(this.value);
    const keyword = this.value;
    const filteredNews = data.news.filter(news=>{
      return news.title.toLowerCase().includes(keyword.toLowerCase()); 
    });
      console.log(filteredNews);
      filteredNews.sort();
      document.querySelector('.news-list').innerHTML = renderNewsItems(filteredNews);
}

let data = null;

fetch("assets/data.json")
  .then(resp => resp.json())
  .then(_data => {
    console.log(_data);
    data = _data; // sets _data to global variable data
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const projId = urlParams.get("project");

    if (projId) {
      // detailed page
      console.log("project ID", projId, urlParams);

      const filtered = data.projects.filter(d => d.id === projId);

      console.log("Filtered", filtered);
      console.log("rendering a project page");

      renderProject(filtered);
      
      
    } else { // main page
      console.log("rendering the main page");
      
      renderMainPage(data);
      
    }
})
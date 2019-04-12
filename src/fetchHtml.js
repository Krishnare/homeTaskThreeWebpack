import RequestService from '../src/fetchData.js';
class newsSourceProvider {
    articlesProvider(data) {
      const elementId = document.getElementById("newsDetails");
      let returnHtml = "",
        uniqueVal = [];
      if (data.status === "error") {
        returnHtml = `<div id="error">${data.message}</div>`;
      } else {
        data.articles.map(
          (
            { author, title, description, publishedAt, url, urlToImage },
            index
          ) => {
            uniqueVal = index === 0 ? `<h1>${author}</h1>` : "";
            returnHtml += `${uniqueVal}<div class="newsTitle">${title}</div><div class="newsDescription">${description}</div><div class="publishDate">${publishedAt}</div><div class="imageContainer"><a href="${url}" target="_blank"><img class ="imageLazy" data-lazy=${urlToImage} /></a></div>`;
          }
        );
      }
      elementId.innerHTML = returnHtml;
      import( /* webpackChunkName: "print" */ './print.js').then((mod) =>{
        console.log(mod);
      })
    }
  }
  const newsSource = new newsSourceProvider();
  export default newsSource;
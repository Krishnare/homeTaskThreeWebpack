import _ from 'lodash';
"use strict"
let newsData ="";
class RequestService {
  async getRequest(url){
    newsData = await fetch(url)
      .then(data => data.json())
      .catch(err => newsSource.articlesProvider(err));
    newsSource.articlesProvider(newsData);
    import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
      var element = document.createElement('div');
      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    }).catch(error => 'An error occurred while loading the component');
  }
}
class newsSourceProvider extends RequestService {
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

const requestCall = new RequestService();
const newsSource = new newsSourceProvider();
export default requestCall;

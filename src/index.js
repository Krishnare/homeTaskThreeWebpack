import _ from "lodash";
import urlConstructor from "./config.js";
import "./styles/main.scss";
class ApiFetcher {
  async fetch(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
  }
}
class NewssourceComponent extends ApiFetcher {
  constructor(data) {
    super();
    this.httpurl =
      urlConstructor.urlOnload.url + urlConstructor.urlOnload.apiKey;
  }
  async fetch(httpurl) {
    return await super.fetch(this.httpurl);
  }
  render(data) {
    const sourceSelectBox = document.getElementById("newsSource");
    data.sources.map(({ id }, index) => {
      const selectOptions = document.createElement("option");
      selectOptions[index] += selectOptions.text = id;
      sourceSelectBox.appendChild(selectOptions);
    });
  }
}
class NewssourceSelectComponent extends ApiFetcher {
  constructor(data) {
    super();
  }
  async fetch(httpurl) {
    return await super.fetch(httpurl);
  }
  render(data) {
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
  }
}
class NewsAppConent {
  constructor() {
    this.newssourceComponentClass = new NewssourceComponent(this);
    this.newssourceSelectComponent = new NewssourceSelectComponent(this);
  }
  intialize() {
    const sourceSelectBox = document.getElementById("newsSource");

    sourceSelectBox.addEventListener("click", event => {
      urlConstructor.newsCategory = event.target.value;
    });

    const newsBtn = document.getElementById("newsSourceBtn");
    newsBtn.addEventListener("click", () => {
      urlConstructor.urlConstructor.newsCategory = sourceSelectBox.value;
      let url =
        urlConstructor.urlConstructor.url +
        urlConstructor.urlConstructor.newsCategory +
        urlConstructor.urlConstructor.apiKey;

      this.newssourceSelectComponent.fetch(url).then(value => {
        this.newssourceSelectComponent.render(value);
      });
      import(/* webpackChunkName: "print" */ "./print.js").then(mod => {
        console.log(mod);
      });
    });
    this.newsSource = this.newssourceComponentClass.fetch().then(value => {
      this.newssourceComponentClass.render(value);
    });
  }
}
const requestCall = new ApiFetcher();
const intializeFunctions = new NewsAppConent();

intializeFunctions.intialize();

export default requestCall;

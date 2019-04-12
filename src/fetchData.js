import _ from 'lodash';
import newsSource from '../src/fetchHtml.js';
"use strict"
let newsData ="";
class RequestService {
  async getRequest(url){
    newsData = await fetch(url)
      .then(data => data.json())
      .catch(err => newsSource.articlesProvider(err));
      newsSource.articlesProvider(newsData);
  }
}
const requestCall = new RequestService();
export default (requestCall);


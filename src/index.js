import requestCall from "./fetchData.js";
import './styles/main.scss';
// import * as mod from 'lodash';
// import print from './print.js';

"use strict"
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
let newsCategory = "bbc-news";
let url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;


const sourceSelectBox = document.getElementById("newsSourceBtn");
sourceSelectBox.addEventListener("click", () => {
  url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
  requestCall.getRequest(url);
  
});

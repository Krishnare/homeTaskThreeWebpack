import requestCall from "./fetchData.js";
import './styles/main.scss';

"use strict"
const apiKey = "720c0314e8b2423eb7e1ffca5a1eeeb1";
let newsCategory = "bbc-news";
let url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;

//OnChange load
const sourceSelectBox = document.getElementById("newsSourceBtn");
sourceSelectBox.addEventListener("click", event => {
  url = `https://newsapi.org/v1/articles?source=${newsCategory}&apiKey=${apiKey}`;
  requestCall.getRequest(url);
});

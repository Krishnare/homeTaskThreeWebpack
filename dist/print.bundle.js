(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["print"],{

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const targets = document.querySelectorAll('img');\n\nconst lazyLoad = target => {\n  const io = new IntersectionObserver((entries, observer) => {\n    console.log(entries);\n    entries.forEach(entry => {\n      if (entry.isIntersecting) {\n        const img = entry.target;\n        const src = img.getAttribute('data-lazy');\n        img.setAttribute('src', src);\n        img.classList.add('fade');\n        observer.disconnect();\n      }\n    });\n  });\n  io.observe(target);\n};\n\ntargets.forEach(lazyLoad);\n\n//# sourceURL=webpack:///./src/print.js?");

/***/ })

}]);
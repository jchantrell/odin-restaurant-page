/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chef-1.png */ "./src/img/chef-1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/chef-4.png */ "./src/img/chef-4.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* core page */\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    color: #FCFCFC;\n    background-color: black;\n}\n\n.main {\n    height: 100vh;\n}\n\n/* header */\n\n.header {\n    position: sticky;\n    background: #FCFCFC;\n    color: black;\n    top: 0;\n    width: 100%;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n    height: 70px;\n}\n\n.header .title {\n    font-family: 'Playfair Display';\n    font-size: 2em;\n    margin-left: 40px;\n    align-self: center;\n}\n\n.header .nav {\n    margin-right: 40px;\n    display: flex;\n    align-self: center;\n    justify-content: flex-end;\n}\n\n.header .nav ul {\n    font-size: 1.5em;\n    display: flex;\n    gap: 30px;\n    list-style: none;\n}\n\n.mobileMenu {\n    border-bottom: 2px solid #FCFCFC;\n    border-bottom-left-radius: 10px;\n    margin: 0;\n    display: flex;\n    flex-flow: column;\n    position: absolute;\n    top: 70px;\n    right: 0;\n    display: flex;\n    width: 200px;\n    height: auto;\n    background: white;\n    display: none;\n}\n\n.mobileMenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.mobileMenu li {\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    height: 50px;\n    width: auto;\n    text-align: center;\n    border-top: 2px solid black;\n}\n\n.header .nav .mobileMenuButton {\n    display: none;\n}\n\n.header .title, .header .nav ul li {\n    cursor: pointer;\n}\n\n/* main content space */\n\n.content {\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    overflow: scroll;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n.content::webkit-scrollbar {\n    display: none;\n}\n\n\n.ul {\n    text-decoration: underline;\n    text-underline-offset: 5px;\n}\n\n/* home */\n\n.home {\n    width: 65%;\n    justify-self: center;\n    align-self: center;\n}\n\n.home .title {\n    font-size: 3em;\n}\n\n.home .description {\n    font-size: 1.5em;\n    width: 50%;\n}\n\n.home .buttonContainer {\n    display: flex;\n    gap: 20px;\n}\n\n.home .reserveButton, .home .menuButton {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin-top: 50px;\n    width: 150px;\n    height: 40px;\n    border: none;\n    cursor: pointer;\n}\n\n/* menu */\n\n.menu {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    padding: 30px;\n    background-color: rgba(0,0,0,0.3);\n    width: 40%;\n    display: flex;\n    flex-flow: column wrap;\n    column-count: 3;\n}\n\n.menu .title {\n    font-size: 2em;\n    margin-bottom: 20px;\n}\n\n.menu .item {\n    font-size: 1.5em;\n    display: flex;\n    align-items: baseline;\n}\n\n.menu .middle {\n    font-size: 1.5em;\n    border-bottom: 1px dotted #eee;\n    flex-grow: 1;\n    margin: 0 5px;\n}\n\n.menu .ingredients {\n    font-size: 1.5em;\n    color: #bbb;\n    margin-bottom: 1em;\n}\n\n/* gallery */\n\n.gallery {\n    margin: 5px;\n    line-height: 0;\n   -webkit-column-count: 4;\n   -webkit-column-gap: 5px;\n   -moz-column-count: 4;\n   -moz-column-gap: 5px;\n   column-count: 4;\n   column-gap: 5px;\n}\n\n.gallery img {\n    width: 100% !important;\n    height: auto !important;\n    margin-bottom: 5px; \n    border: solid 1px black;\n    cursor: pointer;\n}\n\n/* contact */\n\n.contact {\n    margin-top: 40px;\n    justify-content: center;\n}\n\n.contact form {\n    display: grid;\n    gap: 10px;\n}\n\n.contact .formSubmit {\n    margin-top: 40px;\n    border-radius: 15px;\n    border: 0;\n    padding: 10px;\n    font-size: 1em;\n}\n\n/* mobile and tablet scaling */\n\n@media only screen and (max-width: 60em){\n    .content {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n        background-size: cover;\n    }\n\n    .header .nav ul {\n        display: none;\n    }\n\n    .header .nav .mobileMenuButton {\n        display: block;\n    }\n\n    .home {\n        width: 80%;\n    }\n    \n    .menu {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1200px) {\n    .gallery {\n     -moz-column-count:    4;\n     -webkit-column-count: 4;\n     column-count:         4;\n    }\n}\n\n@media (max-width: 1000px) {\n    .gallery {\n     -moz-column-count:    3;\n     -webkit-column-count: 3;\n     column-count:         3;\n    }\n}\n\n@media (max-width: 800px) {\n    .gallery {\n     -moz-column-count:    2;\n     -webkit-column-count: 2;\n     column-count:         2;\n    }\n}\n\n@media (max-width: 400px) {\n    .gallery {\n     -moz-column-count:    1;\n     -webkit-column-count: 1;\n     column-count:         1;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');\n\n/* core page */\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    color: #FCFCFC;\n    background-color: black;\n}\n\n.main {\n    height: 100vh;\n}\n\n/* header */\n\n.header {\n    position: sticky;\n    background: #FCFCFC;\n    color: black;\n    top: 0;\n    width: 100%;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n    height: 70px;\n}\n\n.header .title {\n    font-family: 'Playfair Display';\n    font-size: 2em;\n    margin-left: 40px;\n    align-self: center;\n}\n\n.header .nav {\n    margin-right: 40px;\n    display: flex;\n    align-self: center;\n    justify-content: flex-end;\n}\n\n.header .nav ul {\n    font-size: 1.5em;\n    display: flex;\n    gap: 30px;\n    list-style: none;\n}\n\n.mobileMenu {\n    border-bottom: 2px solid #FCFCFC;\n    border-bottom-left-radius: 10px;\n    margin: 0;\n    display: flex;\n    flex-flow: column;\n    position: absolute;\n    top: 70px;\n    right: 0;\n    display: flex;\n    width: 200px;\n    height: auto;\n    background: white;\n    display: none;\n}\n\n.mobileMenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.mobileMenu li {\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    height: 50px;\n    width: auto;\n    text-align: center;\n    border-top: 2px solid black;\n}\n\n.header .nav .mobileMenuButton {\n    display: none;\n}\n\n.header .title, .header .nav ul li {\n    cursor: pointer;\n}\n\n/* main content space */\n\n.content {\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    background-image: url('./img/chef-1.png');\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    overflow: scroll;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n.content::webkit-scrollbar {\n    display: none;\n}\n\n\n.ul {\n    text-decoration: underline;\n    text-underline-offset: 5px;\n}\n\n/* home */\n\n.home {\n    width: 65%;\n    justify-self: center;\n    align-self: center;\n}\n\n.home .title {\n    font-size: 3em;\n}\n\n.home .description {\n    font-size: 1.5em;\n    width: 50%;\n}\n\n.home .buttonContainer {\n    display: flex;\n    gap: 20px;\n}\n\n.home .reserveButton, .home .menuButton {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin-top: 50px;\n    width: 150px;\n    height: 40px;\n    border: none;\n    cursor: pointer;\n}\n\n/* menu */\n\n.menu {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    padding: 30px;\n    background-color: rgba(0,0,0,0.3);\n    width: 40%;\n    display: flex;\n    flex-flow: column wrap;\n    column-count: 3;\n}\n\n.menu .title {\n    font-size: 2em;\n    margin-bottom: 20px;\n}\n\n.menu .item {\n    font-size: 1.5em;\n    display: flex;\n    align-items: baseline;\n}\n\n.menu .middle {\n    font-size: 1.5em;\n    border-bottom: 1px dotted #eee;\n    flex-grow: 1;\n    margin: 0 5px;\n}\n\n.menu .ingredients {\n    font-size: 1.5em;\n    color: #bbb;\n    margin-bottom: 1em;\n}\n\n/* gallery */\n\n.gallery {\n    margin: 5px;\n    line-height: 0;\n   -webkit-column-count: 4;\n   -webkit-column-gap: 5px;\n   -moz-column-count: 4;\n   -moz-column-gap: 5px;\n   column-count: 4;\n   column-gap: 5px;\n}\n\n.gallery img {\n    width: 100% !important;\n    height: auto !important;\n    margin-bottom: 5px; \n    border: solid 1px black;\n    cursor: pointer;\n}\n\n/* contact */\n\n.contact {\n    margin-top: 40px;\n    justify-content: center;\n}\n\n.contact form {\n    display: grid;\n    gap: 10px;\n}\n\n.contact .formSubmit {\n    margin-top: 40px;\n    border-radius: 15px;\n    border: 0;\n    padding: 10px;\n    font-size: 1em;\n}\n\n/* mobile and tablet scaling */\n\n@media only screen and (max-width: 60em){\n    .content {\n        background-image: url('./img/chef-4.png');\n        background-size: cover;\n    }\n\n    .header .nav ul {\n        display: none;\n    }\n\n    .header .nav .mobileMenuButton {\n        display: block;\n    }\n\n    .home {\n        width: 80%;\n    }\n    \n    .menu {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1200px) {\n    .gallery {\n     -moz-column-count:    4;\n     -webkit-column-count: 4;\n     column-count:         4;\n    }\n}\n\n@media (max-width: 1000px) {\n    .gallery {\n     -moz-column-count:    3;\n     -webkit-column-count: 3;\n     column-count:         3;\n    }\n}\n\n@media (max-width: 800px) {\n    .gallery {\n     -moz-column-count:    2;\n     -webkit-column-count: 2;\n     column-count:         2;\n    }\n}\n\n@media (max-width: 400px) {\n    .gallery {\n     -moz-column-count:    1;\n     -webkit-column-count: 1;\n     column-count:         1;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (() => {

const contact = () => {
    
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallery": () => (/* binding */ gallery)
/* harmony export */ });
const gallery = () => {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery');
    document.querySelector('.content').appendChild(galleryContainer);    
    
    let src = [
        "../dist/img/tables-1.png", 
        "../dist/img/tables-2.png", 
        "../dist/img/meal-1.png", 
        "../dist/img/chef-2.png", 
        "../dist/img/chef-3.png", 
        "../dist/img/chef-1.png",
        "../dist/img/tables-1.png", 
        "../dist/img/tables-2.png", 
        "../dist/img/meal-1.png", 
        "../dist/img/chef-2.png", 
        "../dist/img/chef-3.png", 
        "../dist/img/chef-1.png"]

    src.forEach(function(imgsrc) {
        const img = document.createElement('img');
        galleryContainer.appendChild(img);
        img.src = imgsrc;
    })
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
const home = () => {
    
    const homeContainer = document.createElement('div');
    const title = document.createElement('div');
    const description = document.createElement('div');
    const buttons = document.createElement('div');
    const reserve = document.createElement('button');
    const menu = document.createElement('button');
    document.querySelector('.content').appendChild(homeContainer);
    homeContainer.classList.add('home');
    homeContainer.appendChild(title);
    title.classList.add('title');
    title.innerText = 'Ut enim ad minim..';
    homeContainer.appendChild(description);
    description.classList.add('description')
    description.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
    homeContainer.appendChild(buttons);
    buttons.classList.add('buttonContainer');
    buttons.appendChild(reserve);
    reserve.classList.add('reserveButton');
    reserve.innerText = 'RESERVE TABLE';
    buttons.appendChild(menu);
    menu.classList.add('menuButton');
    menu.innerText = 'BROWSE MENU';
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewItem": () => (/* binding */ createNewItem),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });

const createNewItem = (name, price, ingredients) => {
    let newMenuItem = new MenuItem(name, price, ingredients);
    items.push(newMenuItem);
}

const menu = () => {

    const menu = document.createElement('div');
    const title = document.createElement('div');
    const menuItems = document.createElement('div');
    document.querySelector('.content').appendChild(menu);
    menu.classList.add('menu');
    menu.appendChild(title);
    title.classList.add('title');
    title.textContent = 'Our menu'
    menu.appendChild(menuItems);
    menuItems.classList.add('menuItems');

    items.forEach(function(item) {
        const itemContainer = document.createElement('div');
        const itemName = document.createElement('div');
        const middle = document.createElement('div');
        const price = document.createElement('div');
        const ingredients = document.createElement('div');

        menuItems.appendChild(itemContainer);
        itemContainer.classList.add('item');
        itemContainer.appendChild(itemName);
        itemName.textContent = item.name;
        itemContainer.appendChild(middle);
        middle.classList.add('middle')
        itemContainer.appendChild(price);
        price.textContent = item.price;
        menuItems.appendChild(ingredients);
        ingredients.textContent = item.ingredients;
        ingredients.classList.add('ingredients');
    });
}

class MenuItem {
    constructor(name, price, ingredients){
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
    }
}

let items = [
    {
        "name": "Antipasto",
        "price": "30",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Pizza",
        "price": "20",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Calzone",
        "price": "20",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Pasta",
        "price": "25",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Gnocci",
        "price": "25",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Salad",
        "price": "15",
        "ingredients": "ingredient, ingredient, ingredient"
    },
    {
        "name": "Soup",
        "price": "15",
        "ingredients": "ingredient, ingredient, ingredient"
    }
];

createNewItem('Risotto', '25', 'ingredient, ingredient, ingredient')

/***/ }),

/***/ "./src/img/chef-1.png":
/*!****************************!*\
  !*** ./src/img/chef-1.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b62c0b86cc111b287cd7.png";

/***/ }),

/***/ "./src/img/chef-4.png":
/*!****************************!*\
  !*** ./src/img/chef-4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f03dfe19d3a32c893dbe.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contact__WEBPACK_IMPORTED_MODULE_4__);






const clearLinks = () => {
    const links = document.querySelectorAll('.link')
    links.forEach (link => {
        link.classList.remove('ul');
    });
};

const showMobileMenu = (() => {
    document.body.addEventListener('click', function(event){
        if(event.target.classList.contains('mobileMenuButton')) {
            document.querySelector('.mobileMenu').style.display = 'flex';
        }
        else document.querySelector('.mobileMenu').style.display = 'none';
    })

})();

const initialisePage = () => {
    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.home)();
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.menu)();
    (0,_gallery_js__WEBPACK_IMPORTED_MODULE_3__.gallery)();
}

const loadPage = (page) => {
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.menu').style.display = 'none';
    document.querySelector('.gallery').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';

    if (page == 'home'){
        document.querySelector('.home').style.display = 'block';
        document.querySelector('.homeLink').classList.add('ul');
    }
    if (page == 'menu'){
        document.querySelector('.menu').style.display = 'flex';
        document.querySelector('.menuLink').classList.add('ul');
    }
    if (page == 'gallery'){
        document.querySelector('.gallery').style.display = 'block';
        document.querySelector('.galleryLink').classList.add('ul');
    }
    if (page == 'contact'){
        document.querySelector('.contact').style.display = 'block';
        document.querySelector('.contactLink').classList.add('ul');
    }

}

const changePage = (() => {
    document.body.addEventListener('click', function(event){
        if(event.target.classList.contains('homeLink') || event.target.classList.contains('homeLinkMobile')) {
            clearLinks();
            loadPage('home');
        };
        if(event.target.classList.contains('menuLink') || event.target.classList.contains('menuButton') || event.target.classList.contains('menuLinkMobile')) {
            clearLinks();
            loadPage('menu');   
        };
        if(event.target.classList.contains('galleryLink') || event.target.classList.contains('galleryLinkMobile')) {
            clearLinks();
            loadPage('gallery');
        };
        if(event.target.classList.contains('contactLink') || event.target.classList.contains('reserveButton') || event.target.classList.contains('contactLinkMobile')) {
            clearLinks();
            loadPage('contact');   
        };

      });
})();

`initialisePage();
loadPage('home');`
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUs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O1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCc0I7QUFDUztBQUNBO0FBQ007QUFDSDs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxDQUFDOztBQUVEO0FBQ0EsSUFBSSw4Q0FBSTtBQUNSLElBQUksOENBQUk7QUFDUixJQUFJLG9EQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQLENBQUM7O0FBRUQ7QUFDQSxpQkFBaUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2dhbGxlcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGVmLTEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvY2hlZi00LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogY29yZSBwYWdlICovXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogI0ZDRkNGQztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheSc7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIC5uYXYge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmhlYWRlciAubmF2IHVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkNGQ0ZDO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnUgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVNZW51IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhlYWRlciAubmF2IC5tb2JpbGVNZW51QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUsIC5oZWFkZXIgLm5hdiB1bCBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbWFpbiBjb250ZW50IHNwYWNlICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG4uY29udGVudDo6d2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi51bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLyogaG9tZSAqL1xcblxcbi5ob21lIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5ob21lIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5ob21lIC5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ob21lIC5yZXNlcnZlQnV0dG9uLCAuaG9tZSAubWVudUJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbWVudSAqL1xcblxcbi5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBjb2x1bW4tY291bnQ6IDM7XFxufVxcblxcbi5tZW51IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWVudSAuaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLm1lbnUgLm1pZGRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2VlZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubWVudSAuaW5ncmVkaWVudHMge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4vKiBnYWxsZXJ5ICovXFxuXFxuLmdhbGxlcnkge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XFxuICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiA1cHg7XFxuICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XFxuICAgLW1vei1jb2x1bW4tZ2FwOiA1cHg7XFxuICAgY29sdW1uLWNvdW50OiA0O1xcbiAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmdhbGxlcnkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGNvbnRhY3QgKi9cXG5cXG4uY29udGFjdCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdCBmb3JtIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdCAuZm9ybVN1Ym1pdCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi8qIG1vYmlsZSBhbmQgdGFibGV0IHNjYWxpbmcgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwZW0pe1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5uYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5uYXYgLm1vYmlsZU1lbnVCdXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgNDtcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA0O1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgMztcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDM7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5nYWxsZXJ5IHtcXG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAgICAyO1xcbiAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XFxuICAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDE7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICAxO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLGNBQWM7O0FBRWQ7SUFDSSx3SUFBd0k7SUFDeEksU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLE1BQU07SUFDTixXQUFXO0lBQ1gsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIs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Y3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbi8qIGNvcmUgcGFnZSAqL1xcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6ICNGQ0ZDRkM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICBiYWNrZ3JvdW5kOiAjRkNGQ0ZDO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAxZnI7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciAubmF2IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5oZWFkZXIgLm5hdiB1bCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZDRkNGQztcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVNZW51IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudSBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXIgLm5hdiAubW9iaWxlTWVudUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlLCAuaGVhZGVyIC5uYXYgdWwgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBzcGFjZSAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hlZi0xLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Ojp3ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnVsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcbn1cXG5cXG4vKiBob21lICovXFxuXFxuLmhvbWUge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmhvbWUgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmhvbWUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhvbWUgLnJlc2VydmVCdXR0b24sIC5ob21lIC5tZW51QnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBtZW51ICovXFxuXFxuLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGNvbHVtbi1jb3VudDogMztcXG59XFxuXFxuLm1lbnUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tZW51IC5pdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubWVudSAubWlkZGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZWVlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5tZW51IC5pbmdyZWRpZW50cyB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi8qIGdhbGxlcnkgKi9cXG5cXG4uZ2FsbGVyeSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcXG4gICAtd2Via2l0LWNvbHVtbi1nYXA6IDVweDtcXG4gICAtbW96LWNvbHVtbi1jb3VudDogNDtcXG4gICAtbW96LWNvbHVtbi1nYXA6IDVweDtcXG4gICBjb2x1bW4tY291bnQ6IDQ7XFxuICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeSBpbWcge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogY29udGFjdCAqL1xcblxcbi5jb250YWN0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWN0IC5mb3JtU3VibWl0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyogbW9iaWxlIGFuZCB0YWJsZXQgc2NhbGluZyAqL1xcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjBlbSl7XFxuICAgIC5jb250ZW50IHtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hlZi00LnBuZycpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5uYXYgdWwge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGVyIC5uYXYgLm1vYmlsZU1lbnVCdXR0b24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLmhvbWUge1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbiAgICBcXG4gICAgLm1lbnUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgNDtcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiA0O1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDQ7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgMztcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAzO1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDM7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIC5nYWxsZXJ5IHtcXG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAgICAyO1xcbiAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDI7XFxuICAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMjtcXG4gICAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDE7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMTtcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICAxO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gICAgXG59IiwiZXhwb3J0IGNvbnN0IGdhbGxlcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2FsbGVyeUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhbGxlcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kQ2hpbGQoZ2FsbGVyeUNvbnRhaW5lcik7ICAgIFxuICAgIFxuICAgIGxldCBzcmMgPSBbXG4gICAgICAgIFwiLi4vZGlzdC9pbWcvdGFibGVzLTEucG5nXCIsIFxuICAgICAgICBcIi4uL2Rpc3QvaW1nL3RhYmxlcy0yLnBuZ1wiLCBcbiAgICAgICAgXCIuLi9kaXN0L2ltZy9tZWFsLTEucG5nXCIsIFxuICAgICAgICBcIi4uL2Rpc3QvaW1nL2NoZWYtMi5wbmdcIiwgXG4gICAgICAgIFwiLi4vZGlzdC9pbWcvY2hlZi0zLnBuZ1wiLCBcbiAgICAgICAgXCIuLi9kaXN0L2ltZy9jaGVmLTEucG5nXCIsXG4gICAgICAgIFwiLi4vZGlzdC9pbWcvdGFibGVzLTEucG5nXCIsIFxuICAgICAgICBcIi4uL2Rpc3QvaW1nL3RhYmxlcy0yLnBuZ1wiLCBcbiAgICAgICAgXCIuLi9kaXN0L2ltZy9tZWFsLTEucG5nXCIsIFxuICAgICAgICBcIi4uL2Rpc3QvaW1nL2NoZWYtMi5wbmdcIiwgXG4gICAgICAgIFwiLi4vZGlzdC9pbWcvY2hlZi0zLnBuZ1wiLCBcbiAgICAgICAgXCIuLi9kaXN0L2ltZy9jaGVmLTEucG5nXCJdXG5cbiAgICBzcmMuZm9yRWFjaChmdW5jdGlvbihpbWdzcmMpIHtcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGdhbGxlcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgaW1nLnNyYyA9IGltZ3NyYztcbiAgICB9KVxufSIsImV4cG9ydCBjb25zdCBob21lID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHJlc2VydmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZChob21lQ29udGFpbmVyKTtcbiAgICBob21lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdVdCBlbmltIGFkIG1pbmltLi4nO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuJztcbiAgICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQ29udGFpbmVyJyk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChyZXNlcnZlKTtcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmVCdXR0b24nKTtcbiAgICByZXNlcnZlLmlubmVyVGV4dCA9ICdSRVNFUlZFIFRBQkxFJztcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudUJ1dHRvbicpO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gJ0JST1dTRSBNRU5VJztcbn0iLCJcbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdJdGVtID0gKG5hbWUsIHByaWNlLCBpbmdyZWRpZW50cykgPT4ge1xuICAgIGxldCBuZXdNZW51SXRlbSA9IG5ldyBNZW51SXRlbShuYW1lLCBwcmljZSwgaW5ncmVkaWVudHMpO1xuICAgIGl0ZW1zLnB1c2gobmV3TWVudUl0ZW0pO1xufVxuXG5leHBvcnQgY29uc3QgbWVudSA9ICgpID0+IHtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdPdXIgbWVudSdcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVJdGVtcyk7XG4gICAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKGl0ZW1Db250YWluZXIpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG1pZGRsZSk7XG4gICAgICAgIG1pZGRsZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGUnKVxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHMpO1xuICAgICAgICBpbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHM7XG4gICAgICAgIGluZ3JlZGllbnRzLmNsYXNzTGlzdC5hZGQoJ2luZ3JlZGllbnRzJyk7XG4gICAgfSk7XG59XG5cbmNsYXNzIE1lbnVJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgaW5ncmVkaWVudHMpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMgPSBpbmdyZWRpZW50cztcbiAgICB9XG59XG5cbmxldCBpdGVtcyA9IFtcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkFudGlwYXN0b1wiLFxuICAgICAgICBcInByaWNlXCI6IFwiMzBcIixcbiAgICAgICAgXCJpbmdyZWRpZW50c1wiOiBcImluZ3JlZGllbnQsIGluZ3JlZGllbnQsIGluZ3JlZGllbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJQaXp6YVwiLFxuICAgICAgICBcInByaWNlXCI6IFwiMjBcIixcbiAgICAgICAgXCJpbmdyZWRpZW50c1wiOiBcImluZ3JlZGllbnQsIGluZ3JlZGllbnQsIGluZ3JlZGllbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJDYWx6b25lXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIyMFwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBhc3RhXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIyNVwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdub2NjaVwiLFxuICAgICAgICBcInByaWNlXCI6IFwiMjVcIixcbiAgICAgICAgXCJpbmdyZWRpZW50c1wiOiBcImluZ3JlZGllbnQsIGluZ3JlZGllbnQsIGluZ3JlZGllbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTYWxhZFwiLFxuICAgICAgICBcInByaWNlXCI6IFwiMTVcIixcbiAgICAgICAgXCJpbmdyZWRpZW50c1wiOiBcImluZ3JlZGllbnQsIGluZ3JlZGllbnQsIGluZ3JlZGllbnRcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTb3VwXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIxNVwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfVxuXTtcblxuY3JlYXRlTmV3SXRlbSgnUmlzb3R0bycsICcyNScsICdpbmdyZWRpZW50LCBpbmdyZWRpZW50LCBpbmdyZWRpZW50JykiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge2hvbWV9IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQge21lbnV9IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQge2dhbGxlcnl9IGZyb20gJy4vZ2FsbGVyeS5qcyc7XG5pbXBvcnQge2NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5cbmNvbnN0IGNsZWFyTGlua3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluaycpXG4gICAgbGlua3MuZm9yRWFjaCAobGluayA9PiB7XG4gICAgICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgndWwnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IHNob3dNb2JpbGVNZW51ID0gKCgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2JpbGVNZW51QnV0dG9uJykpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2JpbGVNZW51Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KVxuXG59KSgpO1xuXG5jb25zdCBpbml0aWFsaXNlUGFnZSA9ICgpID0+IHtcbiAgICBob21lKCk7XG4gICAgbWVudSgpO1xuICAgIGdhbGxlcnkoKTtcbn1cblxuY29uc3QgbG9hZFBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGlmIChwYWdlID09ICdob21lJyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lTGluaycpLmNsYXNzTGlzdC5hZGQoJ3VsJyk7XG4gICAgfVxuICAgIGlmIChwYWdlID09ICdtZW51Jyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT0gJ2dhbGxlcnknKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY2hhbmdlUGFnZSA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZUxpbmsnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lTGlua01vYmlsZScpKSB7XG4gICAgICAgICAgICBjbGVhckxpbmtzKCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgnaG9tZScpO1xuICAgICAgICB9O1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51TGluaycpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnVCdXR0b24nKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51TGlua01vYmlsZScpKSB7XG4gICAgICAgICAgICBjbGVhckxpbmtzKCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgnbWVudScpOyAgIFxuICAgICAgICB9O1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsZXJ5TGluaycpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbGxlcnlMaW5rTW9iaWxlJykpIHtcbiAgICAgICAgICAgIGNsZWFyTGlua3MoKTtcbiAgICAgICAgICAgIGxvYWRQYWdlKCdnYWxsZXJ5Jyk7XG4gICAgICAgIH07XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhY3RMaW5rJykgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzZXJ2ZUJ1dHRvbicpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRhY3RMaW5rTW9iaWxlJykpIHtcbiAgICAgICAgICAgIGNsZWFyTGlua3MoKTtcbiAgICAgICAgICAgIGxvYWRQYWdlKCdjb250YWN0Jyk7ICAgXG4gICAgICAgIH07XG5cbiAgICAgIH0pO1xufSkoKTtcblxuYGluaXRpYWxpc2VQYWdlKCk7XG5sb2FkUGFnZSgnaG9tZScpO2AiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
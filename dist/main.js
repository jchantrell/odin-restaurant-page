/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "/* core page */\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    color: #FCFCFC;\n    background-color: black;\n}\n\n.main {\n    height: 100vh;\n}\n\n/* header */\n\n.header {\n    position: sticky;\n    background: #FCFCFC;\n    color: black;\n    top: 0;\n    width: 100%;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n    height: 70px;\n}\n\n.header .businessTitle {\n    font-family: 'Playfair Display';\n    font-size: 2em;\n    margin-left: 40px;\n    align-self: center;\n    cursor: pointer;\n}\n\n.header .nav {\n    margin-right: 40px;\n    display: flex;\n    align-self: center;\n    justify-content: flex-end;\n}\n\n.header .nav ul {\n    font-size: 1.5em;\n    display: flex;\n    gap: 30px;\n    list-style: none;\n}\n\n.mobileMenu {\n    border-bottom: 2px solid #FCFCFC;\n    border-bottom-left-radius: 10px;\n    margin: 0;\n    display: flex;\n    flex-flow: column;\n    position: absolute;\n    top: 70px;\n    right: 0;\n    display: flex;\n    width: 200px;\n    height: auto;\n    background: white;\n    display: none;\n}\n\n.mobileMenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.mobileMenu li {\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    height: 50px;\n    width: auto;\n    text-align: center;\n    border-top: 2px solid black;\n}\n\n.mobileMenu li:hover, .nav li:hover {\n    color: #a3a3a3;\n}\n\n.header .nav .mobileMenuButton {\n    display: none;\n}\n\n.header .title, .header .nav ul li {\n    cursor: pointer;\n}\n\n/* main content space */\n\n.content {\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    overflow: scroll;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n.content::webkit-scrollbar {\n    display: none;\n}\n\n\n.ul {\n    text-decoration: underline;\n    text-underline-offset: 5px;\n}\n\n/* home */\n\n.home {\n    width: 65%;\n    justify-self: center;\n    align-self: center;\n}\n\n.home .title {\n    font-size: 3em;\n}\n\n.home .description {\n    font-size: 1.5em;\n    width: 50%;\n}\n\n.home .buttonContainer {\n    display: flex;\n    gap: 20px;\n}\n\n.home .reserveButton, .home .menuButton {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin-top: 50px;\n    width: 150px;\n    height: 40px;\n    border: none;\n    cursor: pointer;\n}\n\n/* menu */\n\n.menu {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    padding: 30px;\n    background-color: rgba(0,0,0,0.3);\n    width: 40%;\n    display: flex;\n    flex-flow: column wrap;\n    column-count: 3;\n}\n\n.menu .title {\n    font-size: 2em;\n    margin-bottom: 20px;\n}\n\n.menu .item {\n    font-size: 1.5em;\n    display: flex;\n    align-items: baseline;\n}\n\n.menu .middle {\n    font-size: 1.5em;\n    border-bottom: 1px dotted #eee;\n    flex-grow: 1;\n    margin: 0 5px;\n}\n\n.menu .ingredients {\n    font-size: 1.5em;\n    color: #bbb;\n    margin-bottom: 1em;\n}\n\n/* gallery */\n\n.gallery {\n    margin: 5px;\n    line-height: 0;\n   -webkit-column-count: 4;\n   -webkit-column-gap: 5px;\n   -moz-column-count: 4;\n   -moz-column-gap: 5px;\n   column-count: 4;\n   column-gap: 5px;\n}\n\n.gallery img {\n    width: 100% !important;\n    height: auto !important;\n    margin-bottom: 5px; \n    border: solid 1px black;\n    cursor: pointer;\n}\n\n/* contact */\n\n.contact {\n    margin-top: 40px;\n    font-size: 1.5em;\n}\n\n.contact form {\n    display: grid;\n    justify-content: center;\n    gap: 10px;\n}\n\n.contact input {\n    width: 300px;\n    height: 30px;\n}\n\n.contact .formSubmit {\n    margin-top: 20px;\n    border-radius: 15px;\n    border: 0;\n    padding: 10px;\n    font-size: 1em;\n}\n\n.contact .gmap {\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n\n/* mobile and tablet scaling */\n\n@media only screen and (max-width: 60em){\n    .content {\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n        background-size: cover;\n    }\n\n    .header .nav ul {\n        display: none;\n    }\n\n    .header .nav .mobileMenuButton {\n        display: block;\n    }\n\n    .home {\n        width: 80%;\n    }\n    \n    .menu {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1200px) {\n    .gallery {\n     -moz-column-count:    4;\n     -webkit-column-count: 4;\n     column-count:         4;\n    }\n}\n\n@media (max-width: 1000px) {\n    .gallery {\n     -moz-column-count:    3;\n     -webkit-column-count: 3;\n     column-count:         3;\n    }\n}\n\n@media (max-width: 800px) {\n    .gallery {\n     -moz-column-count:    2;\n     -webkit-column-count: 2;\n     column-count:         2;\n    }\n}\n\n@media (max-width: 400px) {\n    .gallery {\n     -moz-column-count:    1;\n     -webkit-column-count: 1;\n     column-count:         1;\n    }\n\n    .contact input {\n        width: 250px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap');\n\n/* core page */\n\nbody {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    border: 0;\n    padding: 0;\n    color: #FCFCFC;\n    background-color: black;\n}\n\n.main {\n    height: 100vh;\n}\n\n/* header */\n\n.header {\n    position: sticky;\n    background: #FCFCFC;\n    color: black;\n    top: 0;\n    width: 100%;\n    display: grid;\n    grid-template: 1fr / 1fr 1fr;\n    height: 70px;\n}\n\n.header .businessTitle {\n    font-family: 'Playfair Display';\n    font-size: 2em;\n    margin-left: 40px;\n    align-self: center;\n    cursor: pointer;\n}\n\n.header .nav {\n    margin-right: 40px;\n    display: flex;\n    align-self: center;\n    justify-content: flex-end;\n}\n\n.header .nav ul {\n    font-size: 1.5em;\n    display: flex;\n    gap: 30px;\n    list-style: none;\n}\n\n.mobileMenu {\n    border-bottom: 2px solid #FCFCFC;\n    border-bottom-left-radius: 10px;\n    margin: 0;\n    display: flex;\n    flex-flow: column;\n    position: absolute;\n    top: 70px;\n    right: 0;\n    display: flex;\n    width: 200px;\n    height: auto;\n    background: white;\n    display: none;\n}\n\n.mobileMenu ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.mobileMenu li {\n    cursor: pointer;\n    display: grid;\n    align-items: center;\n    height: 50px;\n    width: auto;\n    text-align: center;\n    border-top: 2px solid black;\n}\n\n.mobileMenu li:hover, .nav li:hover {\n    color: #a3a3a3;\n}\n\n.header .nav .mobileMenuButton {\n    display: none;\n}\n\n.header .title, .header .nav ul li {\n    cursor: pointer;\n}\n\n/* main content space */\n\n.content {\n    height: 90%;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    background-image: url('./img/chef-1.png');\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    overflow: scroll;\n    overflow-x: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n}\n\n.content::webkit-scrollbar {\n    display: none;\n}\n\n\n.ul {\n    text-decoration: underline;\n    text-underline-offset: 5px;\n}\n\n/* home */\n\n.home {\n    width: 65%;\n    justify-self: center;\n    align-self: center;\n}\n\n.home .title {\n    font-size: 3em;\n}\n\n.home .description {\n    font-size: 1.5em;\n    width: 50%;\n}\n\n.home .buttonContainer {\n    display: flex;\n    gap: 20px;\n}\n\n.home .reserveButton, .home .menuButton {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin-top: 50px;\n    width: 150px;\n    height: 40px;\n    border: none;\n    cursor: pointer;\n}\n\n/* menu */\n\n.menu {\n    margin-top: 40px;\n    margin-bottom: 40px;\n    padding: 30px;\n    background-color: rgba(0,0,0,0.3);\n    width: 40%;\n    display: flex;\n    flex-flow: column wrap;\n    column-count: 3;\n}\n\n.menu .title {\n    font-size: 2em;\n    margin-bottom: 20px;\n}\n\n.menu .item {\n    font-size: 1.5em;\n    display: flex;\n    align-items: baseline;\n}\n\n.menu .middle {\n    font-size: 1.5em;\n    border-bottom: 1px dotted #eee;\n    flex-grow: 1;\n    margin: 0 5px;\n}\n\n.menu .ingredients {\n    font-size: 1.5em;\n    color: #bbb;\n    margin-bottom: 1em;\n}\n\n/* gallery */\n\n.gallery {\n    margin: 5px;\n    line-height: 0;\n   -webkit-column-count: 4;\n   -webkit-column-gap: 5px;\n   -moz-column-count: 4;\n   -moz-column-gap: 5px;\n   column-count: 4;\n   column-gap: 5px;\n}\n\n.gallery img {\n    width: 100% !important;\n    height: auto !important;\n    margin-bottom: 5px; \n    border: solid 1px black;\n    cursor: pointer;\n}\n\n/* contact */\n\n.contact {\n    margin-top: 40px;\n    font-size: 1.5em;\n}\n\n.contact form {\n    display: grid;\n    justify-content: center;\n    gap: 10px;\n}\n\n.contact input {\n    width: 300px;\n    height: 30px;\n}\n\n.contact .formSubmit {\n    margin-top: 20px;\n    border-radius: 15px;\n    border: 0;\n    padding: 10px;\n    font-size: 1em;\n}\n\n.contact .gmap {\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 50px;\n}\n\n/* mobile and tablet scaling */\n\n@media only screen and (max-width: 60em){\n    .content {\n        background-image: url('./img/chef-4.png');\n        background-size: cover;\n    }\n\n    .header .nav ul {\n        display: none;\n    }\n\n    .header .nav .mobileMenuButton {\n        display: block;\n    }\n\n    .home {\n        width: 80%;\n    }\n    \n    .menu {\n        width: 100%;\n    }\n}\n\n@media (max-width: 1200px) {\n    .gallery {\n     -moz-column-count:    4;\n     -webkit-column-count: 4;\n     column-count:         4;\n    }\n}\n\n@media (max-width: 1000px) {\n    .gallery {\n     -moz-column-count:    3;\n     -webkit-column-count: 3;\n     column-count:         3;\n    }\n}\n\n@media (max-width: 800px) {\n    .gallery {\n     -moz-column-count:    2;\n     -webkit-column-count: 2;\n     column-count:         2;\n    }\n}\n\n@media (max-width: 400px) {\n    .gallery {\n     -moz-column-count:    1;\n     -webkit-column-count: 1;\n     column-count:         1;\n    }\n\n    .contact input {\n        width: 250px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const contact = () => {
    const contact = document.createElement('div');
    const form = document.createElement('form');
    const nameLabel = document.createElement('label');
    const nameInput = document.createElement('input');
    const emailLabel = document.createElement('label');
    const emailInput = document.createElement('input');
    const phoneLabel = document.createElement('label');
    const phoneInput = document.createElement('input');
    const dateLabel = document.createElement('label');
    const dateInput = document.createElement('input');
    const timeLabel = document.createElement('label');
    const timeInput = document.createElement('input');
    const submitButton = document.createElement('button');
    const mapFrame = document.createElement('div');
    const map = document.createElement('iframe');

    document.querySelector('.content').appendChild(contact);
    contact.classList.add('contact');
    contact.appendChild(form);

    form.appendChild(nameLabel);
    nameLabel.textContent = 'Name';
    nameLabel.htmlFor = 'name';
    form.appendChild(nameInput);
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;

    form.appendChild(emailLabel);
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';
    form.appendChild(emailInput);
    emailInput.type = 'email';
    emailInput.name = 'email';
    nameInput.required = true;

    form.appendChild(phoneLabel);
    phoneLabel.textContent = 'Phone Number';
    phoneLabel.htmlFor = 'tel';
    form.appendChild(phoneInput);
    phoneInput.type = 'tel';
    phoneInput.name = 'tel';
    phoneInput.required = true;

    form.appendChild(dateLabel);
    dateLabel.textContent = 'Date';
    dateLabel.htmlFor = 'date';
    form.appendChild(dateInput);
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.required = true;

    form.appendChild(timeLabel);
    timeLabel.textContent = 'Time';
    timeLabel.htmlFor = 'time';
    form.appendChild(timeInput);
    timeInput.type = 'time';
    timeInput.name = 'time';
    timeInput.required = true;

    form.appendChild(submitButton);
    submitButton.classList.add('formSubmit');
    submitButton.textContent = 'Submit';

    contact.appendChild(mapFrame);
    mapFrame.classList.add('gmap');
    mapFrame.appendChild(map);
    map.style.width = '300px';
    map.style.height = '10em';
    map.id = "gmap";
    map.src = "https://maps.google.com/maps?q=Adelaide&t=&z=13&ie=UTF8&iwloc=&output=embed";
    map.frameBorder = "0";
    map.marginHeight = "0";
    map.marginWidth = "0";
}

/***/ }),

/***/ "./src/gallery.js":
/*!************************!*\
  !*** ./src/gallery.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gallery": () => (/* binding */ gallery)
/* harmony export */ });
const gallery = () => {
    const galleryContainer = document.createElement('div');
    galleryContainer.classList.add('gallery');
    document.querySelector('.content').appendChild(galleryContainer);    
    
    let src = [
        "./img/tables-1.png", 
        "./img/tables-2.png", 
        "./img/meal-1.png", 
        "./img/chef-2.png", 
        "./img/chef-3.png", 
        "./img/chef-1.png",
        "./img/tables-1.png", 
        "./img/tables-2.png", 
        "./img/meal-1.png", 
        "./img/chef-2.png", 
        "./img/chef-3.png", 
        "./img/chef-1.png"]

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

module.exports = __webpack_require__.p + "b62c0b86cc111b287cd7.png";

/***/ }),

/***/ "./src/img/chef-4.png":
/*!****************************!*\
  !*** ./src/img/chef-4.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.js */ "./src/gallery.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ "./src/contact.js");






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
    (0,_contact__WEBPACK_IMPORTED_MODULE_4__.contact)();
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
        if(event.target.classList.contains('homeLink') || event.target.classList.contains('homeLinkMobile') || event.target.classList.contains('businessTitle')) {
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

initialisePage();
loadPage('home');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQXdCLHVCQUF1QixPQUFPLEdBQUcsT0FBTyx1RkFBdUYsS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMzRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ3hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTztBQUNQO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNCO0FBQ1M7QUFDQTtBQUNNO0FBQ0g7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsQ0FBQzs7QUFFRDtBQUNBLElBQUksOENBQUk7QUFDUixJQUFJLDhDQUFJO0FBQ1IsSUFBSSxvREFBTztBQUNYLElBQUksaURBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1AsQ0FBQzs7QUFFRDtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2NoZWYtMS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9jaGVmLTQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBjb3JlIHBhZ2UgKi9cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGNvbG9yOiAjRkNGQ0ZDO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgYmFja2dyb3VuZDogI0ZDRkNGQztcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMWZyO1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxufVxcblxcbi5oZWFkZXIgLmJ1c2luZXNzVGl0bGUge1xcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIC5uYXYge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmhlYWRlciAubmF2IHVsIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudSB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkNGQ0ZDO1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNzBweDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnUgdWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVNZW51IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm1vYmlsZU1lbnUgbGk6aG92ZXIsIC5uYXYgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI2EzYTNhMztcXG59XFxuXFxuLmhlYWRlciAubmF2IC5tb2JpbGVNZW51QnV0dG9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhlYWRlciAudGl0bGUsIC5oZWFkZXIgLm5hdiB1bCBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbWFpbiBjb250ZW50IHNwYWNlICovXFxuXFxuLmNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG4uY29udGVudDo6d2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcbi51bCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDVweDtcXG59XFxuXFxuLyogaG9tZSAqL1xcblxcbi5ob21lIHtcXG4gICAgd2lkdGg6IDY1JTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmhvbWUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbi5ob21lIC5kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcblxcbi5ob21lIC5idXR0b25Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5ob21lIC5yZXNlcnZlQnV0dG9uLCAuaG9tZSAubWVudUJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogbWVudSAqL1xcblxcbi5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xcbiAgICBjb2x1bW4tY291bnQ6IDM7XFxufVxcblxcbi5tZW51IC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubWVudSAuaXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLm1lbnUgLm1pZGRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI2VlZTtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cXG4ubWVudSAuaW5ncmVkaWVudHMge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBjb2xvcjogI2JiYjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4vKiBnYWxsZXJ5ICovXFxuXFxuLmdhbGxlcnkge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDQ7XFxuICAgLXdlYmtpdC1jb2x1bW4tZ2FwOiA1cHg7XFxuICAgLW1vei1jb2x1bW4tY291bnQ6IDQ7XFxuICAgLW1vei1jb2x1bW4tZ2FwOiA1cHg7XFxuICAgY29sdW1uLWNvdW50OiA0O1xcbiAgIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmdhbGxlcnkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDsgXFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGNvbnRhY3QgKi9cXG5cXG4uY29udGFjdCB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5jb250YWN0IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uY29udGFjdCBpbnB1dCB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4uY29udGFjdCAuZm9ybVN1Ym1pdCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5jb250YWN0IC5nbWFwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBtb2JpbGUgYW5kIHRhYmxldCBzY2FsaW5nICovXFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MGVtKXtcXG4gICAgLmNvbnRlbnQge1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2IC5tb2JpbGVNZW51QnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDQ7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICA0O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDM7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICAzO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgMjtcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5nYWxsZXJ5IHtcXG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAgICAxO1xcbiAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XFxuICAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdCBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsY0FBYzs7QUFFZDtJQUNJLHdJQUF3STtJQUN4SSxTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osTUFBTTtJQUNOLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztJ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dUJBQXVCO0tBQ3ZCLHVCQUF1QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7S0FDQyx1QkFBdUI7S0FDdkIsdUJBQXVCO0tBQ3ZCLHVCQUF1QjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7S0FDQyx1QkFBdUI7S0FDdkIsdUJBQXVCO0tBQ3ZCLHVCQUF1QjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5JmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogY29yZSBwYWdlICovXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjb2xvcjogI0ZDRkNGQztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIGJhY2tncm91bmQ6ICNGQ0ZDRkM7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMWZyIC8gMWZyIDFmcjtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uaGVhZGVyIC5idXNpbmVzc1RpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5JztcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciAubmF2IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5oZWFkZXIgLm5hdiB1bCB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1vYmlsZU1lbnUge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZDRkNGQztcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDcwcHg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tb2JpbGVNZW51IHVsIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubW9iaWxlTWVudSBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5tb2JpbGVNZW51IGxpOmhvdmVyLCAubmF2IGxpOmhvdmVyIHtcXG4gICAgY29sb3I6ICNhM2EzYTM7XFxufVxcblxcbi5oZWFkZXIgLm5hdiAubW9iaWxlTWVudUJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIgLnRpdGxlLCAuaGVhZGVyIC5uYXYgdWwgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIG1haW4gY29udGVudCBzcGFjZSAqL1xcblxcbi5jb250ZW50IHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcvY2hlZi0xLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbi5jb250ZW50Ojp3ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLnVsIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHRleHQtdW5kZXJsaW5lLW9mZnNldDogNXB4O1xcbn1cXG5cXG4vKiBob21lICovXFxuXFxuLmhvbWUge1xcbiAgICB3aWR0aDogNjUlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZSAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG59XFxuXFxuLmhvbWUgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuXFxuLmhvbWUgLmJ1dHRvbkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhvbWUgLnJlc2VydmVCdXR0b24sIC5ob21lIC5tZW51QnV0dG9uIHtcXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBtZW51ICovXFxuXFxuLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XFxuICAgIGNvbHVtbi1jb3VudDogMztcXG59XFxuXFxuLm1lbnUgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tZW51IC5pdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4ubWVudSAubWlkZGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjZWVlO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbjogMCA1cHg7XFxufVxcblxcbi5tZW51IC5pbmdyZWRpZW50cyB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIGNvbG9yOiAjYmJiO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi8qIGdhbGxlcnkgKi9cXG5cXG4uZ2FsbGVyeSB7XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcXG4gICAtd2Via2l0LWNvbHVtbi1nYXA6IDVweDtcXG4gICAtbW96LWNvbHVtbi1jb3VudDogNDtcXG4gICAtbW96LWNvbHVtbi1nYXA6IDVweDtcXG4gICBjb2x1bW4tY291bnQ6IDQ7XFxuICAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZ2FsbGVyeSBpbWcge1xcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4OyBcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogY29udGFjdCAqL1xcblxcbi5jb250YWN0IHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmNvbnRhY3QgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5jb250YWN0IGlucHV0IHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi5jb250YWN0IC5mb3JtU3VibWl0IHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmNvbnRhY3QgLmdtYXAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIG1vYmlsZSBhbmQgdGFibGV0IHNjYWxpbmcgKi9cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwZW0pe1xcbiAgICAuY29udGVudCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2NoZWYtNC5wbmcnKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2IHVsIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRlciAubmF2IC5tb2JpbGVNZW51QnV0dG9uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5ob21lIHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5tZW51IHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDQ7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICA0O1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICAgLmdhbGxlcnkge1xcbiAgICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDM7XFxuICAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcXG4gICAgIGNvbHVtbi1jb3VudDogICAgICAgICAzO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICAuZ2FsbGVyeSB7XFxuICAgICAtbW96LWNvbHVtbi1jb3VudDogICAgMjtcXG4gICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xcbiAgICAgY29sdW1uLWNvdW50OiAgICAgICAgIDI7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxuICAgIC5nYWxsZXJ5IHtcXG4gICAgIC1tb3otY29sdW1uLWNvdW50OiAgICAxO1xcbiAgICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XFxuICAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMTtcXG4gICAgfVxcblxcbiAgICAuY29udGFjdCBpbnB1dCB7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWFwRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50JykuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgbmFtZUxhYmVsLmh0bWxGb3IgPSAnbmFtZSc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ25hbWUnO1xuICAgIG5hbWVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwnO1xuICAgIGVtYWlsTGFiZWwuaHRtbEZvciA9ICdlbWFpbCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcbiAgICBlbWFpbElucHV0LnR5cGUgPSAnZW1haWwnO1xuICAgIGVtYWlsSW5wdXQubmFtZSA9ICdlbWFpbCc7XG4gICAgbmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG4gICAgcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSBOdW1iZXInO1xuICAgIHBob25lTGFiZWwuaHRtbEZvciA9ICd0ZWwnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVJbnB1dCk7XG4gICAgcGhvbmVJbnB1dC50eXBlID0gJ3RlbCc7XG4gICAgcGhvbmVJbnB1dC5uYW1lID0gJ3RlbCc7XG4gICAgcGhvbmVJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUnO1xuICAgIGRhdGVMYWJlbC5odG1sRm9yID0gJ2RhdGUnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIHRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdUaW1lJztcbiAgICB0aW1lTGFiZWwuaHRtbEZvciA9ICd0aW1lJztcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG4gICAgdGltZUlucHV0LnR5cGUgPSAndGltZSc7XG4gICAgdGltZUlucHV0Lm5hbWUgPSAndGltZSc7XG4gICAgdGltZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZm9ybVN1Ym1pdCcpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChtYXBGcmFtZSk7XG4gICAgbWFwRnJhbWUuY2xhc3NMaXN0LmFkZCgnZ21hcCcpO1xuICAgIG1hcEZyYW1lLmFwcGVuZENoaWxkKG1hcCk7XG4gICAgbWFwLnN0eWxlLndpZHRoID0gJzMwMHB4JztcbiAgICBtYXAuc3R5bGUuaGVpZ2h0ID0gJzEwZW0nO1xuICAgIG1hcC5pZCA9IFwiZ21hcFwiO1xuICAgIG1hcC5zcmMgPSBcImh0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/cT1BZGVsYWlkZSZ0PSZ6PTEzJmllPVVURjgmaXdsb2M9Jm91dHB1dD1lbWJlZFwiO1xuICAgIG1hcC5mcmFtZUJvcmRlciA9IFwiMFwiO1xuICAgIG1hcC5tYXJnaW5IZWlnaHQgPSBcIjBcIjtcbiAgICBtYXAubWFyZ2luV2lkdGggPSBcIjBcIjtcbn0iLCJleHBvcnQgY29uc3QgZ2FsbGVyeSA9ICgpID0+IHtcbiAgICBjb25zdCBnYWxsZXJ5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ2FsbGVyeUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZChnYWxsZXJ5Q29udGFpbmVyKTsgICAgXG4gICAgXG4gICAgbGV0IHNyYyA9IFtcbiAgICAgICAgXCIuL2ltZy90YWJsZXMtMS5wbmdcIiwgXG4gICAgICAgIFwiLi9pbWcvdGFibGVzLTIucG5nXCIsIFxuICAgICAgICBcIi4vaW1nL21lYWwtMS5wbmdcIiwgXG4gICAgICAgIFwiLi9pbWcvY2hlZi0yLnBuZ1wiLCBcbiAgICAgICAgXCIuL2ltZy9jaGVmLTMucG5nXCIsIFxuICAgICAgICBcIi4vaW1nL2NoZWYtMS5wbmdcIixcbiAgICAgICAgXCIuL2ltZy90YWJsZXMtMS5wbmdcIiwgXG4gICAgICAgIFwiLi9pbWcvdGFibGVzLTIucG5nXCIsIFxuICAgICAgICBcIi4vaW1nL21lYWwtMS5wbmdcIiwgXG4gICAgICAgIFwiLi9pbWcvY2hlZi0yLnBuZ1wiLCBcbiAgICAgICAgXCIuL2ltZy9jaGVmLTMucG5nXCIsIFxuICAgICAgICBcIi4vaW1nL2NoZWYtMS5wbmdcIl1cblxuICAgIHNyYy5mb3JFYWNoKGZ1bmN0aW9uKGltZ3NyYykge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgZ2FsbGVyeUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBpbWcuc3JjID0gaW1nc3JjO1xuICAgIH0pXG59IiwiZXhwb3J0IGNvbnN0IGhvbWUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgaG9tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcmVzZXJ2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZENoaWxkKGhvbWVDb250YWluZXIpO1xuICAgIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ1V0IGVuaW0gYWQgbWluaW0uLic7XG4gICAgaG9tZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4nO1xuICAgIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9ucyk7XG4gICAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdidXR0b25Db250YWluZXInKTtcbiAgICBidXR0b25zLmFwcGVuZENoaWxkKHJlc2VydmUpO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LmFkZCgncmVzZXJ2ZUJ1dHRvbicpO1xuICAgIHJlc2VydmUuaW5uZXJUZXh0ID0gJ1JFU0VSVkUgVEFCTEUnO1xuICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51QnV0dG9uJyk7XG4gICAgbWVudS5pbm5lclRleHQgPSAnQlJPV1NFIE1FTlUnO1xufSIsIlxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld0l0ZW0gPSAobmFtZSwgcHJpY2UsIGluZ3JlZGllbnRzKSA9PiB7XG4gICAgbGV0IG5ld01lbnVJdGVtID0gbmV3IE1lbnVJdGVtKG5hbWUsIHByaWNlLCBpbmdyZWRpZW50cyk7XG4gICAgaXRlbXMucHVzaChuZXdNZW51SXRlbSk7XG59XG5cbmV4cG9ydCBjb25zdCBtZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmRDaGlsZChtZW51KTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ091ciBtZW51J1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcbiAgICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1zJyk7XG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtaWRkbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobWlkZGxlKTtcbiAgICAgICAgbWlkZGxlLmNsYXNzTGlzdC5hZGQoJ21pZGRsZScpXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIG1lbnVJdGVtcy5hcHBlbmRDaGlsZChpbmdyZWRpZW50cyk7XG4gICAgICAgIGluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50cztcbiAgICAgICAgaW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZCgnaW5ncmVkaWVudHMnKTtcbiAgICB9KTtcbn1cblxuY2xhc3MgTWVudUl0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBpbmdyZWRpZW50cyl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGluZ3JlZGllbnRzO1xuICAgIH1cbn1cblxubGV0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQW50aXBhc3RvXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIzMFwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBpenphXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIyMFwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNhbHpvbmVcIixcbiAgICAgICAgXCJwcmljZVwiOiBcIjIwXCIsXG4gICAgICAgIFwiaW5ncmVkaWVudHNcIjogXCJpbmdyZWRpZW50LCBpbmdyZWRpZW50LCBpbmdyZWRpZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFzdGFcIixcbiAgICAgICAgXCJwcmljZVwiOiBcIjI1XCIsXG4gICAgICAgIFwiaW5ncmVkaWVudHNcIjogXCJpbmdyZWRpZW50LCBpbmdyZWRpZW50LCBpbmdyZWRpZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiR25vY2NpXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIyNVwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlNhbGFkXCIsXG4gICAgICAgIFwicHJpY2VcIjogXCIxNVwiLFxuICAgICAgICBcImluZ3JlZGllbnRzXCI6IFwiaW5ncmVkaWVudCwgaW5ncmVkaWVudCwgaW5ncmVkaWVudFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlNvdXBcIixcbiAgICAgICAgXCJwcmljZVwiOiBcIjE1XCIsXG4gICAgICAgIFwiaW5ncmVkaWVudHNcIjogXCJpbmdyZWRpZW50LCBpbmdyZWRpZW50LCBpbmdyZWRpZW50XCJcbiAgICB9XG5dO1xuXG5jcmVhdGVOZXdJdGVtKCdSaXNvdHRvJywgJzI1JywgJ2luZ3JlZGllbnQsIGluZ3JlZGllbnQsIGluZ3JlZGllbnQnKSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7aG9tZX0gZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCB7bWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7Z2FsbGVyeX0gZnJvbSAnLi9nYWxsZXJ5LmpzJztcbmltcG9ydCB7Y29udGFjdH0gZnJvbSAnLi9jb250YWN0JztcblxuY29uc3QgY2xlYXJMaW5rcyA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rJylcbiAgICBsaW5rcy5mb3JFYWNoIChsaW5rID0+IHtcbiAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCd1bCcpO1xuICAgIH0pO1xufTtcblxuY29uc3Qgc2hvd01vYmlsZU1lbnUgPSAoKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21vYmlsZU1lbnVCdXR0b24nKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZU1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vYmlsZU1lbnUnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pXG5cbn0pKCk7XG5cbmNvbnN0IGluaXRpYWxpc2VQYWdlID0gKCkgPT4ge1xuICAgIGhvbWUoKTtcbiAgICBtZW51KCk7XG4gICAgZ2FsbGVyeSgpO1xuICAgIGNvbnRhY3QoKTtcbn1cblxuY29uc3QgbG9hZFBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGlmIChwYWdlID09ICdob21lJyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lTGluaycpLmNsYXNzTGlzdC5hZGQoJ3VsJyk7XG4gICAgfVxuICAgIGlmIChwYWdlID09ICdtZW51Jyl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT0gJ2dhbGxlcnknKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnlMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG4gICAgaWYgKHBhZ2UgPT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RMaW5rJykuY2xhc3NMaXN0LmFkZCgndWwnKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY2hhbmdlUGFnZSA9ICgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaG9tZUxpbmsnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdob21lTGlua01vYmlsZScpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1c2luZXNzVGl0bGUnKSkge1xuICAgICAgICAgICAgY2xlYXJMaW5rcygpO1xuICAgICAgICAgICAgbG9hZFBhZ2UoJ2hvbWUnKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudUxpbmsnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51QnV0dG9uJykgfHwgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWVudUxpbmtNb2JpbGUnKSkge1xuICAgICAgICAgICAgY2xlYXJMaW5rcygpO1xuICAgICAgICAgICAgbG9hZFBhZ2UoJ21lbnUnKTsgICBcbiAgICAgICAgfTtcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbGVyeUxpbmsnKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsZXJ5TGlua01vYmlsZScpKSB7XG4gICAgICAgICAgICBjbGVhckxpbmtzKCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgnZ2FsbGVyeScpO1xuICAgICAgICB9O1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWN0TGluaycpIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc2VydmVCdXR0b24nKSB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250YWN0TGlua01vYmlsZScpKSB7XG4gICAgICAgICAgICBjbGVhckxpbmtzKCk7XG4gICAgICAgICAgICBsb2FkUGFnZSgnY29udGFjdCcpOyAgIFxuICAgICAgICB9O1xuXG4gICAgICB9KTtcbn0pKCk7XG5cbmluaXRpYWxpc2VQYWdlKCk7XG5sb2FkUGFnZSgnaG9tZScpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
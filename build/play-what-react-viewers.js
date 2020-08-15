module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* Fretboard */\\r\\n\\r\\n.fretboard {\\r\\n\\tdisplay: inline-block;\\r\\n\\tdisplay: inline-grid;\\r\\n\\twidth: 95%;\\r\\n\\tbackground-image: radial-gradient(ellipse, #E8DBB8 0%, #D0B27C 100%);\\r\\n\\tfont-size: 12px;\\r\\n\\ttext-align: center;\\r\\n\\tfont-family: sans-serif;\\r\\n\\tmargin: 24px 0;\\r\\n\\tbox-sizing: border-box;\\r\\n}\\r\\n\\r\\n/* Fret */\\r\\n\\r\\n.fret {\\r\\n\\tdisplay: inline-flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tposition: relative;\\r\\n\\tborder-right: 2px solid darkgrey;\\r\\n}\\r\\n\\r\\n.fret.open {\\r\\n\\tborder-right: 3px solid grey;\\r\\n}\\r\\n\\r\\n/* Used to maintain aspect ratio */\\r\\n\\r\\n.fret::before {\\r\\n\\tcontent: \\\"\\\";\\r\\n\\tdisplay: block;\\r\\n\\theight: 0;\\r\\n\\twidth: 0;\\r\\n\\tmargin-top: calc(1/2 * 100%);\\r\\n}\\r\\n\\r\\n/* Fret String */\\r\\n\\r\\n.fret-string {\\r\\n\\tbackground-color: grey;\\r\\n\\theight: 1px;\\r\\n\\twidth: 100%;\\r\\n}\\r\\n\\r\\n/* Fret Numbers */\\r\\n\\r\\n.fret-number {\\r\\n\\tposition: absolute;\\r\\n\\tbottom: 105%;\\r\\n}\\r\\n\\r\\n/* Fret Dots */\\r\\n\\r\\n.fret-dots {\\r\\n\\tposition: absolute;\\r\\n\\ttop: 100%;\\r\\n\\tfont-size: 16px;\\r\\n\\twhite-space: nowrap;\\r\\n}\\r\\n\\r\\n.fret-number, .fret-dots {\\r\\n\\tcolor: #555;\\r\\n}\\r\\n\\r\\n/* Fret Label */\\r\\n\\r\\n.fret-label {\\r\\n\\tposition: absolute;\\r\\n\\twidth: 90%;\\r\\n\\theight: 90%;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\talign-items: center;\\r\\n\\tborder-radius: 100%;\\r\\n}\\r\\n\\r\\n.fret-label:hover {\\r\\n\\twidth: 100%;\\r\\n\\theight: 100%;\\r\\n\\tcursor: pointer;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Keyboard/Keyboard.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Keyboard/Keyboard.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* Keyboard */\\r\\n\\r\\n.keyboard {\\r\\n\\tdisplay: inline-block;\\r\\n\\twidth: 100%;\\r\\n\\tmin-width: 100px;\\r\\n\\r\\n    font-size: 12px;\\r\\n\\ttext-align: center;\\r\\n\\tfont-family: sans-serif;\\r\\n\\t\\r\\n\\tmargin-top: 20px;\\r\\n    margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.center {\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\n/* Key Container */\\r\\n\\r\\n.white-key-container {\\r\\n\\tdisplay: inline-block;\\r\\n}\\r\\n\\r\\n.black-key-container {\\r\\n\\tdisplay: inline-block;\\r\\n\\twidth: 0px;\\r\\n}\\r\\n\\r\\n/* Key */\\r\\n\\r\\n.keyboard-key {\\r\\n\\tvertical-align: top;\\r\\n\\tposition: relative;\\r\\n\\tdisplay: inline-flex;\\r\\n\\tjustify-content: center;\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n.white-key {\\r\\n\\tbox-shadow: 0 0 1px 1px black inset;\\r\\n    border-radius: 0 0 5% 5%;\\r\\n}\\r\\n\\r\\n.white-key:hover {\\r\\n\\tbox-shadow: 0 0 1px 2px black inset;\\r\\n}\\r\\n\\r\\n.black-key {\\r\\n\\tbox-shadow: 0 0 1px 2px #555 inset;\\r\\n\\tz-index: 10;\\r\\n    border-radius: 0 0 10% 10%;\\r\\n}\\r\\n\\r\\n.black-key:hover {\\r\\n\\tbackground-color: #333;\\r\\n\\tbox-shadow: 0 0 1px 2px black inset;\\r\\n}\\r\\n\\r\\n/* Colors (applied only in absence of degree class) */\\r\\n\\r\\n.white {\\r\\n\\tbackground-color: white;\\r\\n    color: black;\\r\\n}\\r\\n\\r\\n.black {\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n\\r\\n/* Label */\\r\\n\\r\\n.white-key .keyboard-key-label {\\r\\n\\tposition: absolute;\\r\\n\\theight: 100%;\\r\\n\\twidth: 100%;\\r\\n\\tborder-radius: 0 0 5% 5%;\\r\\n\\tbox-shadow: 0 0 1px 1px black inset;\\r\\n}\\r\\n\\r\\n.white-key .keyboard-key-label:hover {\\r\\n\\tbox-shadow: 0 0 1px 2px black inset;\\r\\n}\\r\\n\\r\\n.black-key .keyboard-key-label {\\r\\n\\tbottom: 105%;\\r\\n\\tposition: absolute;\\r\\n\\tcolor: black;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Keyboard/Keyboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/Fretboard/Fret.jsx":
/*!********************************!*\
  !*** ./src/Fretboard/Fret.jsx ***!
  \********************************/
/*! exports provided: Fret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fret\", function() { return Fret; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fretboard.css */ \"./src/Fretboard/Fretboard.css\");\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Fretboard_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FretLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FretLabel */ \"./src/Fretboard/FretLabel.jsx\");\n/* harmony import */ var _Fretboard_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fretboard.api */ \"./src/Fretboard/Fretboard.api.jsx\");\n\n\n\n\nconst Fret = props => {\n  let classes = ['fret'];\n  if (props.fretNumber === 0) classes.push('open');\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.join(' ')\n  }, props.showFretNumber && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"fret-number\"\n  }, props.fretNumber), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"fret-string\"\n  }), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_FretLabel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    noteIndex: props.noteIndex,\n    minIndex: props.minIndex,\n    maxIndex: props.maxIndex,\n    concept: props.concept\n  }), props.showFretDots && react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"fret-dots\"\n  }, Object(_Fretboard_api__WEBPACK_IMPORTED_MODULE_3__[\"getDotsForFret\"])(props.fretNumber)));\n};\n\n//# sourceURL=webpack:///./src/Fretboard/Fret.jsx?");

/***/ }),

/***/ "./src/Fretboard/FretLabel.jsx":
/*!*************************************!*\
  !*** ./src/Fretboard/FretLabel.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fretboard.css */ \"./src/Fretboard/Fretboard.css\");\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Fretboard_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst FretLabel = props => {\n  const {\n    concept,\n    noteIndex,\n    minIndex,\n    maxIndex\n  } = props;\n  return null;\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"fret-label\",\n    style: styles,\n    onClick: play\n  }, label);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FretLabel);\n\n//# sourceURL=webpack:///./src/Fretboard/FretLabel.jsx?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.api.jsx":
/*!*****************************************!*\
  !*** ./src/Fretboard/Fretboard.api.jsx ***!
  \*****************************************/
/*! exports provided: DOTTED_FRET_INDICES, getDotsForFret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DOTTED_FRET_INDICES\", function() { return DOTTED_FRET_INDICES; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDotsForFret\", function() { return getDotsForFret; });\nconst DOTTED_FRET_INDICES = [true, false, false, true, false, true, false, true, false, true, false, false];\nconst getDotsForFret = fretNumber => {\n  let mod = fretNumber % 12;\n  if (mod === 0) return '• •';else if (DOTTED_FRET_INDICES[mod]) return '•';\n  return '';\n};\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.api.jsx?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.css":
/*!*************************************!*\
  !*** ./src/Fretboard/Fretboard.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Fretboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Fretboard/Fretboard.css\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.css?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.defaults.js":
/*!*********************************************!*\
  !*** ./src/Fretboard/Fretboard.defaults.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  fretLow: 0,\n  fretHigh: 12,\n  strings: [{\n    tuning: 16\n  }, // e\n  {\n    tuning: 11\n  }, // B\n  {\n    tuning: 7\n  }, // G\n  {\n    tuning: 2\n  }, // D\n  {\n    tuning: -3\n  }, // A\n  {\n    tuning: -8\n  } // E\n  ],\n  showFretNumbers: true,\n  showDots: true,\n  concept: {\n    a: {\n      p: 0,\n      d: 0\n    },\n    B: []\n  }\n});\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.defaults.js?");

/***/ }),

/***/ "./src/Fretboard/Fretboard.jsx":
/*!*************************************!*\
  !*** ./src/Fretboard/Fretboard.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Fretboard; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fretboard.css */ \"./src/Fretboard/Fretboard.css\");\n/* harmony import */ var _Fretboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Fretboard_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Fret__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fret */ \"./src/Fretboard/Fret.jsx\");\n/* harmony import */ var _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fretboard.defaults */ \"./src/Fretboard/Fretboard.defaults.js\");\n\n\n\n\nconst FRET_SIZE_RATIO = Math.pow(1 / 2, 1 / 12);\n\nconst getFrets = config => {\n  let min = config.strings.reduce((prev, current) => prev.tuning < current.tuning ? prev : current).tuning + config.fretLow;\n  let max = config.strings.reduce((prev, current) => prev.tuning > current.tuning ? prev : current).tuning + config.fretHigh;\n  let frets = []; // Get strings\n\n  for (let strNum = 1; strNum <= config.strings.length; strNum++) {\n    // Get frets for string\n    for (let fretNum = config.fretLow; fretNum <= config.fretHigh; fretNum++) {\n      let noteIndex = config.strings[strNum - 1].tuning + fretNum;\n      frets.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_Fret__WEBPACK_IMPORTED_MODULE_2__[\"Fret\"], {\n        key: `s${strNum}f${fretNum}`,\n        noteIndex: noteIndex,\n        minIndex: min,\n        maxIndex: max,\n        fretNumber: fretNum,\n        stringNum: strNum,\n        concept: config.concept,\n        showFretNumber: config.showFretNumbers && strNum === 1,\n        showFretDots: config.showDots && strNum === config.strings.length\n      }));\n    }\n  }\n\n  return frets;\n};\n\nconst getFretRatios = numFrets => {\n  let ratios = [];\n\n  for (let i = 1; i <= numFrets; i++) {\n    ratios.push(i <= 1 ? 1 : ratios[i - 2] * FRET_SIZE_RATIO);\n  }\n\n  return ratios;\n};\n\nfunction Fretboard(props) {\n  let config = Object.assign({}, _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_3__[\"default\"], props); // Calculate fretboard dimensions\n\n  let fretRatioStyle = getFretRatios(config.fretHigh - config.fretLow + 1).map(num => {\n    return num + 'fr';\n  }).join(' ');\n  let fretboardScaleStyles = {\n    gridTemplateColumns: fretRatioStyle,\n    gridTemplateRows: `repeat(${config.strings.length}, 1fr)`\n  };\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"fretboard\",\n    style: fretboardScaleStyles\n  }, getFrets(config));\n}\n\n//# sourceURL=webpack:///./src/Fretboard/Fretboard.jsx?");

/***/ }),

/***/ "./src/Fretboard/_module.js":
/*!**********************************!*\
  !*** ./src/Fretboard/_module.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fretboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fretboard */ \"./src/Fretboard/Fretboard.jsx\");\n/* harmony import */ var _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fretboard.defaults */ \"./src/Fretboard/Fretboard.defaults.js\");\n/* harmony import */ var _Fretboard_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fretboard.api */ \"./src/Fretboard/Fretboard.api.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Viewer: _Fretboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Defaults: _Fretboard_defaults__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  Api: _Fretboard_api__WEBPACK_IMPORTED_MODULE_2__\n});\n\n//# sourceURL=webpack:///./src/Fretboard/_module.js?");

/***/ }),

/***/ "./src/Keyboard/Keyboard.css":
/*!***********************************!*\
  !*** ./src/Keyboard/Keyboard.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Keyboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Keyboard/Keyboard.css\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/Keyboard/Keyboard.css?");

/***/ }),

/***/ "./src/Keyboard/Keyboard.defaults.js":
/*!*******************************************!*\
  !*** ./src/Keyboard/Keyboard.defaults.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  keyLow: 0,\n  keyHigh: 24,\n  concept: {\n    a: {\n      p: 0,\n      d: 0\n    },\n    B: []\n  }\n});\n\n//# sourceURL=webpack:///./src/Keyboard/Keyboard.defaults.js?");

/***/ }),

/***/ "./src/Keyboard/Keyboard.jsx":
/*!***********************************!*\
  !*** ./src/Keyboard/Keyboard.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Keyboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.css */ \"./src/Keyboard/Keyboard.css\");\n/* harmony import */ var _Keyboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Keyboard_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _KeyboardKey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KeyboardKey */ \"./src/Keyboard/KeyboardKey.jsx\");\n/* harmony import */ var _Keyboard_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Keyboard.defaults */ \"./src/Keyboard/Keyboard.defaults.js\");\n\n\n\n\nconst BLACK_KEY_INDICES = [0, 2, 4, 5, 7, 9, 11]; // TODO Enforce code reuse\n\nconst modulo = (a, b) => {\n  return (a % b + b) % b;\n};\n\nconst getKeyboardKeys = (config, viewerWidth) => {\n  let keys = []; // Safe approximation for scale\n\n  let numWhiteKeys = (config.keyHigh - config.keyLow + 1) * (7 / 12) + 1;\n\n  for (let i = config.keyLow; i <= config.keyHigh; i++) {\n    let type = BLACK_KEY_INDICES.includes(modulo(i, 12)) ? _KeyboardKey__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardKeyType\"].White : _KeyboardKey__WEBPACK_IMPORTED_MODULE_2__[\"KeyboardKeyType\"].Black;\n    keys.push(react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](_KeyboardKey__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      key: i,\n      noteIndex: i,\n      minIndex: config.keyLow,\n      maxIndex: config.keyHigh,\n      scale: viewerWidth / numWhiteKeys,\n      type: type,\n      concept: config.concept\n    }));\n  }\n\n  return keys;\n};\n\nconst Keyboard = props => {\n  const config = { ..._Keyboard_defaults__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ...props\n  };\n  const [dims, setDims] = react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"]([512, 512]);\n  react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"](() => {\n    const resetDimensions = e => {\n      const el = document.getElementById('keyboard');\n      setDims([el.clientWidth, el.clientHeight]);\n    };\n\n    resetDimensions();\n    window.addEventListener('resize', resetDimensions);\n    return () => window.removeEventListener('resize', resetDimensions);\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"keyboard\",\n    id: \"keyboard\"\n  }, getKeyboardKeys(config, dims[0]));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Keyboard);\n\n//# sourceURL=webpack:///./src/Keyboard/Keyboard.jsx?");

/***/ }),

/***/ "./src/Keyboard/KeyboardKey.jsx":
/*!**************************************!*\
  !*** ./src/Keyboard/KeyboardKey.jsx ***!
  \**************************************/
/*! exports provided: KeyboardKeyType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyboardKeyType\", function() { return KeyboardKeyType; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Keyboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.css */ \"./src/Keyboard/Keyboard.css\");\n/* harmony import */ var _Keyboard_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Keyboard_css__WEBPACK_IMPORTED_MODULE_1__);\n\n // Key dimensions relative to white key width\n\nconst KEY__DIMS = {\n  WhW_WhH: 4.6875,\n  // White key width to white key height\n  WhW_BlW: 0.6250,\n  // White key width to black key width\n  WhW_BlH: 2.9688 // White key width to black hey height\n\n};\nconst KeyboardKeyType = {\n  Black: 'Black',\n  White: 'White'\n};\n\nconst getScaleStyles = (keyType, scale) => {\n  switch (keyType) {\n    case KeyboardKeyType.White:\n      return {\n        width: scale + 'px',\n        height: KEY__DIMS.WhW_WhH * scale + 'px'\n      };\n\n    case KeyboardKeyType.Black:\n      return {\n        width: KEY__DIMS.WhW_BlW * scale + 'px',\n        height: KEY__DIMS.WhW_BlH * scale + 'px',\n        right: .5 * KEY__DIMS.WhW_BlW * scale + 'px'\n      };\n\n    default:\n      return {\n        width: '0px',\n        height: '0px'\n      };\n  }\n};\n\nconst KeyboardKey = ({\n  noteIndex,\n  type,\n  scale,\n  concept\n}) => {\n  if (!concept) return null;\n  let keyColor = type === KeyboardKeyType.White ? 'white' : 'black';\n  let scaleStyles = getScaleStyles(type, scale);\n  let classes = ['keyboard-key', `${keyColor}-key`, keyColor];\n  const colorStyles = {};\n  const label = '';\n  const keyStyles = keyColor === 'white' ? scaleStyles : { ...scaleStyles,\n    ...colorStyles\n  };\n  const labelStyles = keyColor === 'white' ? colorStyles : {};\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: `${keyColor}-key-container`\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: classes.join(' '),\n    style: keyStyles,\n    onClick: play\n  }, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"div\", {\n    className: \"keyboard-key-label\",\n    style: labelStyles\n  }, label)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (KeyboardKey);\n\n//# sourceURL=webpack:///./src/Keyboard/KeyboardKey.jsx?");

/***/ }),

/***/ "./src/Keyboard/_module.js":
/*!*********************************!*\
  !*** ./src/Keyboard/_module.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Keyboard */ \"./src/Keyboard/Keyboard.jsx\");\n/* harmony import */ var _Keyboard_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard.defaults */ \"./src/Keyboard/Keyboard.defaults.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Viewer: _Keyboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Defaults: _Keyboard_defaults__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/Keyboard/_module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Fretboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fretboard/_module */ \"./src/Fretboard/_module.js\");\n/* harmony import */ var _Keyboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Keyboard/_module */ \"./src/Keyboard/_module.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Fretboard: _Fretboard_module__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  Keyboard: _Keyboard_module__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ });
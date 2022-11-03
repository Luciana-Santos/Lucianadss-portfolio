/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/js/modules/debounce.js":
/*!****************************************!*\
  !*** ./src/app/js/modules/debounce.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ debounce)
/* harmony export */ });
function debounce(callback, delay) {
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(void 0, args);
      timer = null;
    }, delay);
  };
}

/***/ }),

/***/ "./src/app/js/modules/scrollAnima.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollAnima.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScrollAnima)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "../../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./src/app/js/modules/debounce.js");





var ScrollAnima = /*#__PURE__*/function () {
  function ScrollAnima(sections) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ScrollAnima);

    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6;
    this.checkDistance = (0,_debounce__WEBPACK_IMPORTED_MODULE_3__["default"])(this.checkDistance.bind(this), 50);
  } // pega a distancia de cada item em relação
  // ao topo do site


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ScrollAnima, [{
    key: "getDistance",
    value: function getDistance() {
      var _this = this;

      this.distance = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(this.sections).map(function (section) {
        var offset = section.offsetTop;
        return {
          element: section,
          offset: Math.floor(offset - _this.windowMetade)
        };
      });
    } // verifica a distancia em cada objeto
    // em relação ao scroll do site

  }, {
    key: "checkDistance",
    value: function checkDistance() {
      this.distance.forEach(function (item) {
        if (window.pageYOffset > item.offset) {
          item.element.classList.add('ativo');
        } else if (item.element.classList.contains('ativo')) {
          item.element.classList.remove('ativo');
        }
      });
    }
  }, {
    key: "init",
    value: function init() {
      if (this.sections.length) {
        this.getDistance();
        this.checkDistance();
        window.addEventListener('scroll', this.checkDistance);
      }

      return this;
    } // remove o event de scroll

  }, {
    key: "stop",
    value: function stop() {
      window.removeEventListener('scroll', this.checkDistance);
    }
  }]);

  return ScrollAnima;
}();



/***/ }),

/***/ "./src/app/js/modules/scrollsuave.js":
/*!*******************************************!*\
  !*** ./src/app/js/modules/scrollsuave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initScrollSuave)
/* harmony export */ });
function initScrollSuave() {
  var linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    var section = document.querySelector(href);
    var sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }

  linksInternos.forEach(function (link) {
    link.addEventListener('click', scrollToSection);
  });
}

/***/ }),

/***/ "./src/app/js/modules/typingEffect.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/typingEffect.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initTypingEffect)
/* harmony export */ });
function initTypingEffect() {
  var heroSubtitle = document.querySelector('[data-effect="typing"]');

  function typingEffect(elemento) {
    var textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach(function (letra, i) {
      setTimeout(function () {
        return elemento.innerHTML += letra;
      }, 95 * i);
    });
  }

  typingEffect(heroSubtitle);
}

/***/ }),

/***/ "./src/app/js/modules/voltarTopo.js":
/*!******************************************!*\
  !*** ./src/app/js/modules/voltarTopo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initVoltarTopoBtn)
/* harmony export */ });
function initVoltarTopoBtn() {
  var btnTopo = document.querySelector('[data-topo="btn"]');
  var sobreSection = document.querySelector('.sobre');
  var offsetTop = sobreSection.getBoundingClientRect().top;

  var scrollContainer = function scrollContainer() {
    return document.documentElement || document.body;
  };

  document.addEventListener('scroll', function () {
    if (scrollContainer().scrollTop > offsetTop) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  });

  var gotToTop = function gotToTop() {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  btnTopo.addEventListener('click', gotToTop);
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!****************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!***********************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*****************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "../../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "../../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "../../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "../../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "../../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**************************************************************************************!*\
  !*** ../../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "../../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/app/js/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_scrollAnima__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollAnima */ "./src/app/js/modules/scrollAnima.js");
/* harmony import */ var _modules_scrollsuave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollsuave */ "./src/app/js/modules/scrollsuave.js");
/* harmony import */ var _modules_typingEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/typingEffect */ "./src/app/js/modules/typingEffect.js");
/* harmony import */ var _modules_voltarTopo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/voltarTopo */ "./src/app/js/modules/voltarTopo.js");
// import initFetchProjetos from './modules/fetchProjetos';




(0,_modules_scrollsuave__WEBPACK_IMPORTED_MODULE_1__["default"])(); // initFetchProjetos();

(0,_modules_voltarTopo__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_modules_typingEffect__WEBPACK_IMPORTED_MODULE_2__["default"])();
var scrollAnima = new _modules_scrollAnima__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-anime="scroll"]');
scrollAnima.init();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
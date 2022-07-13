/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/js/modules/projetoModal.js":
/*!********************************************!*\
  !*** ./src/app/js/modules/projetoModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initProjetoModal)
/* harmony export */ });
function initProjetoModal() {
  var projeto = document.querySelector('[data-projeto="content"]');
  var modal = document.querySelector('[data-projeto="modal"]');
  var body = document.querySelector('body');
  var btnFechar = document.querySelector('[data-modal="fechar"]');
  var ativo = 'ativo';
  var noScroll = 'no-scroll';

  function abrirModal(e) {
    e.preventDefault();
    modal.classList.add(ativo);
    body.classList.add(noScroll);
  }

  function fecharModal() {
    modal.classList.remove(ativo);
    body.classList.remove('no-scroll');
  }

  projeto.addEventListener('click', abrirModal);
  btnFechar.addEventListener('click', fecharModal);
}

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
/* harmony import */ var _modules_projetoModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projetoModal */ "./src/app/js/modules/projetoModal.js");
/* harmony import */ var _modules_scrollsuave__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scrollsuave */ "./src/app/js/modules/scrollsuave.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/voltarTopo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



(0,_modules_scrollsuave__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_projetoModal__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modules/voltarTopo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
})();

/******/ })()
;
//# sourceMappingURL=index.js.map
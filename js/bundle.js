/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
  // modal

  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');

  function openModal () {
      modal.classList.add('show');
      modal.classList.remove('hide');
      clearInterval(timeInterval);
  }

  function closeModal () {
      modal.classList.add('hide');
      modal.classList.remove('show');
  }

  modalTrigger.forEach(item => {
      item.addEventListener('click', openModal);
  });

  modal.addEventListener('click', (e) => {
      if (e.target == modal || e.target.getAttribute('data-close') == '') {
          closeModal();
      }
  });

  document.addEventListener('keydown', (e)=> {
      if (e.code =="Escape" && modal.classList.contains('show')) {
          closeModal();
      }
  });

  const timeInterval = setTimeout(openModal, 50000);

  function showModalByScroll() {
      if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
          openModal();
          window.removeEventListener('scroll', showModalByScroll);
      }
  }

  window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
  const modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");//form = require('./modules/form'),
        

  modal();
  //form();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
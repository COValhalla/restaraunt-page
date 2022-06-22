/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadHome.js":
/*!*************************!*\
  !*** ./src/loadHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHome)
/* harmony export */ });
function loadHome() {
  const main = document.querySelector('.main');

  // Generate sub block 'about'
  const main__about = document.createElement('div');
  main__about.classList.add('main__about');
  const main__about__text = document.createElement('div');
  main__about__text.classList.add('main__about__text');
  main__about__text.textContent =
    'Burns Wild Game has the most flavorful meats in the Greater STL Area!';
  main__about.append(main__about__text);

  // Generate sub block 'hours'
  const main__hours = document.createElement('div');
  main__hours.classList.add('main__hours');
  const main__hours__title = document.createElement('div');
  main__hours__title.classList.add('main__hours__title');
  main__hours__title.textContent = 'Hours';

  const main__hours__mon = document.createElement('div');
  main__hours__mon.classList.add('main__hours__mon');
  main__hours__mon.textContent = 'Monday: 8am - 8pm';

  const main__hours__tues = document.createElement('div');
  main__hours__tues.classList.add('main__hours__tues');
  main__hours__tues.textContent = 'Tuesday: 8am - 8pm';

  const main__hours__wed = document.createElement('div');
  main__hours__wed.classList.add('main__hours__wedy');
  main__hours__wed.textContent = 'Wednesday: 8am - 8pm';

  const main__hours__thurs = document.createElement('div');
  main__hours__thurs.classList.add('main__hours__thurs');
  main__hours__thurs.textContent = 'Thursday: 8am - 8pm';

  const main__hours__fri = document.createElement('div');
  main__hours__fri.classList.add('main__hours__mon');
  main__hours__fri.textContent = 'Friday: 8am - 8pm';

  const main__hours__sat = document.createElement('div');
  main__hours__sat.classList.add('main__hours__sat');
  main__hours__sat.textContent = 'Saturday: Closed';

  const main__hours__sun = document.createElement('div');
  main__hours__sun.classList.add('main__hours__sun');
  main__hours__sun.textContent = 'Sunday: Closed';

  main__hours.append(
    main__hours__title,
    main__hours__mon,
    main__hours__tues,
    main__hours__wed,
    main__hours__thurs,
    main__hours__fri,
    main__hours__sat,
    main__hours__sun,
  );

  main.append(main__about, main__hours);

  console.log('loadHome is working!');
}


/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
  const main = document.querySelector('.main');

  // Generate sub block 'about'
  const main__about = document.createElement('div');
  main__about.classList.add('main__about');
  const main__about__text = document.createElement('div');
  main__about__text.classList.add('main__about__text');
  main__about__text.textContent = 'This is a menu! Prices and items and such!';
  main__about.append(main__about__text);

  // Generate sub block 'hours'
  const main__hours = document.createElement('div');
  main__hours.classList.add('main__hours');
  const main__hours__title = document.createElement('div');
  main__hours__title.classList.add('main__hours__title');
  main__hours__title.textContent = 'Menu';

  main__hours.append(main__hours__title);

  main.append(main__about, main__hours);

  console.log('loadMenu is working!');
}


/***/ }),

/***/ "./src/siteFunctions.js":
/*!******************************!*\
  !*** ./src/siteFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "removeMain": () => (/* binding */ removeMain)
/* harmony export */ });
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");


// Need to create loadContact

// Creates standard DOM elements header, main, footer and adds listeners to buttons
function init() {
  createHeader();
  createMain();
  createFooter();
  btnListeners();
}

function createHeader() {
  const content = document.querySelector('.content');
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menuBtn');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('contactBtn');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);
  content.append(header);
}

function createMain() {
  const content = document.querySelector('.content');
  const main = document.createElement('div');
  main.classList.add('main');
  content.append(main);
}

function createFooter() {
  const content = document.querySelector('.content');
  const footer = document.createElement('div');
  footer.classList.add('footer');
  content.append(footer);
}

function btnListeners() {
  const homeBtn = document.querySelector('.homeBtn');
  homeBtn.addEventListener('click', function () {
    removeMain();
    (0,_loadHome__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });

  const menuBtn = document.querySelector('.menuBtn');
  menuBtn.addEventListener('click', function () {
    removeMain();
    (0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  });

  // need to create loadBtn
}

function removeMain() {
  const node = document.querySelector('.main');
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
  }
  return;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siteFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteFunctions */ "./src/siteFunctions.js");
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");




(0,_siteFunctions__WEBPACK_IMPORTED_MODULE_0__.init)();
(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmtDO0FBQ0E7QUFDbEM7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDckVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05tRDtBQUNqQjtBQUNBOztBQUVsQyxvREFBSTtBQUNKLHFEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc2l0ZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIC8vIEdlbmVyYXRlIHN1YiBibG9jayAnYWJvdXQnXG4gIGNvbnN0IG1haW5fX2Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0Jyk7XG4gIGNvbnN0IG1haW5fX2Fib3V0X190ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0X190ZXh0Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LnRleHRDb250ZW50ID1cbiAgICAnQnVybnMgV2lsZCBHYW1lIGhhcyB0aGUgbW9zdCBmbGF2b3JmdWwgbWVhdHMgaW4gdGhlIEdyZWF0ZXIgU1RMIEFyZWEhJztcbiAgbWFpbl9fYWJvdXQuYXBwZW5kKG1haW5fX2Fib3V0X190ZXh0KTtcblxuICAvLyBHZW5lcmF0ZSBzdWIgYmxvY2sgJ2hvdXJzJ1xuICBjb25zdCBtYWluX19ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vycy5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3VycycpO1xuICBjb25zdCBtYWluX19ob3Vyc19fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190aXRsZScpO1xuICBtYWluX19ob3Vyc19fdGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX19tb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX21vbi5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fbW9uJyk7XG4gIG1haW5fX2hvdXJzX19tb24udGV4dENvbnRlbnQgPSAnTW9uZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX190dWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190dWVzLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190dWVzJyk7XG4gIG1haW5fX2hvdXJzX190dWVzLnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX3dlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fd2VkLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX193ZWR5Jyk7XG4gIG1haW5fX2hvdXJzX193ZWQudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX190aHVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fdGh1cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3RodXJzJyk7XG4gIG1haW5fX2hvdXJzX190aHVycy50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fZnJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19mcmkuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX21vbicpO1xuICBtYWluX19ob3Vyc19fZnJpLnRleHRDb250ZW50ID0gJ0ZyaWRheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fc2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19zYXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3NhdCcpO1xuICBtYWluX19ob3Vyc19fc2F0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiBDbG9zZWQnO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX19zdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3N1bi5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fc3VuJyk7XG4gIG1haW5fX2hvdXJzX19zdW4udGV4dENvbnRlbnQgPSAnU3VuZGF5OiBDbG9zZWQnO1xuXG4gIG1haW5fX2hvdXJzLmFwcGVuZChcbiAgICBtYWluX19ob3Vyc19fdGl0bGUsXG4gICAgbWFpbl9faG91cnNfX21vbixcbiAgICBtYWluX19ob3Vyc19fdHVlcyxcbiAgICBtYWluX19ob3Vyc19fd2VkLFxuICAgIG1haW5fX2hvdXJzX190aHVycyxcbiAgICBtYWluX19ob3Vyc19fZnJpLFxuICAgIG1haW5fX2hvdXJzX19zYXQsXG4gICAgbWFpbl9faG91cnNfX3N1bixcbiAgKTtcblxuICBtYWluLmFwcGVuZChtYWluX19hYm91dCwgbWFpbl9faG91cnMpO1xuXG4gIGNvbnNvbGUubG9nKCdsb2FkSG9tZSBpcyB3b3JraW5nIScpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuXG4gIC8vIEdlbmVyYXRlIHN1YiBibG9jayAnYWJvdXQnXG4gIGNvbnN0IG1haW5fX2Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0Jyk7XG4gIGNvbnN0IG1haW5fX2Fib3V0X190ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0X190ZXh0Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LnRleHRDb250ZW50ID0gJ1RoaXMgaXMgYSBtZW51ISBQcmljZXMgYW5kIGl0ZW1zIGFuZCBzdWNoISc7XG4gIG1haW5fX2Fib3V0LmFwcGVuZChtYWluX19hYm91dF9fdGV4dCk7XG5cbiAgLy8gR2VuZXJhdGUgc3ViIGJsb2NrICdob3VycydcbiAgY29uc3QgbWFpbl9faG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnMnKTtcbiAgY29uc3QgbWFpbl9faG91cnNfX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdGl0bGUnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIG1haW5fX2hvdXJzLmFwcGVuZChtYWluX19ob3Vyc19fdGl0bGUpO1xuXG4gIG1haW4uYXBwZW5kKG1haW5fX2Fib3V0LCBtYWluX19ob3Vycyk7XG5cbiAgY29uc29sZS5sb2coJ2xvYWRNZW51IGlzIHdvcmtpbmchJyk7XG59XG4iLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9sb2FkSG9tZSc7XG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9sb2FkTWVudSc7XG4vLyBOZWVkIHRvIGNyZWF0ZSBsb2FkQ29udGFjdFxuXG4vLyBDcmVhdGVzIHN0YW5kYXJkIERPTSBlbGVtZW50cyBoZWFkZXIsIG1haW4sIGZvb3RlciBhbmQgYWRkcyBsaXN0ZW5lcnMgdG8gYnV0dG9uc1xuZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNyZWF0ZUhlYWRlcigpO1xuICBjcmVhdGVNYWluKCk7XG4gIGNyZWF0ZUZvb3RlcigpO1xuICBidG5MaXN0ZW5lcnMoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4uY2xhc3NMaXN0LmFkZCgnaG9tZUJ0bicpO1xuICBob21lQnRuLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51QnRuJyk7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RCdG4nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZWFkZXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuICBjb250ZW50LmFwcGVuZChoZWFkZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgY29udGVudC5hcHBlbmQobWFpbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kKGZvb3Rlcik7XG59XG5cbmZ1bmN0aW9uIGJ0bkxpc3RlbmVycygpIHtcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lQnRuJyk7XG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVtb3ZlTWFpbigpO1xuICAgIGxvYWRIb21lKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudUJ0bicpO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHJlbW92ZU1haW4oKTtcbiAgICBsb2FkTWVudSgpO1xuICB9KTtcblxuICAvLyBuZWVkIHRvIGNyZWF0ZSBsb2FkQnRuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNYWluKCkge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgd2hpbGUgKG5vZGUuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0LCByZW1vdmVNYWluIH0gZnJvbSAnLi9zaXRlRnVuY3Rpb25zJztcbmltcG9ydCBsb2FkSG9tZSBmcm9tICcuL2xvYWRIb21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL2xvYWRNZW51JztcblxuaW5pdCgpO1xubG9hZEhvbWUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
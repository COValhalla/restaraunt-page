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
  const content = document.querySelector('.content');
  // Generate header and buttons
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);

  // Generate main block
  const main = document.createElement('div');
  main.classList.add('main');

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

  // Generate footer block

  content.append(header, main);
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
  const content = document.querySelector('.content');
  // Generate header and buttons
  const header = document.createElement('div');
  header.classList.add('header');

  const homeBtn = document.createElement('button');
  homeBtn.textContent = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.textContent = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.textContent = 'Contact';

  header.append(homeBtn, menuBtn, contactBtn);

  // Generate main block
  const main = document.createElement('div');
  main.classList.add('main');

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

  // Generate footer block

  content.append(header, main);

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
/* harmony export */   "prepareDOM": () => (/* binding */ prepareDOM)
/* harmony export */ });
function prepareDOM() {
  const node = document.querySelector('.content');
  if (node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
    }
  } else {
    const node = document.querySelector('body');
    const content = document.createElement('div');
    content.classList.add('content');
    node.append(content);
  }
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




(0,_siteFunctions__WEBPACK_IMPORTED_MODULE_0__.prepareDOM)();
(0,_loadHome__WEBPACK_IMPORTED_MODULE_1__["default"])();

(0,_siteFunctions__WEBPACK_IMPORTED_MODULE_0__.prepareDOM)();
(0,_loadMenu__WEBPACK_IMPORTED_MODULE_2__["default"])();

console.log('test');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDWDtBQUNBOztBQUVsQywwREFBVTtBQUNWLHFEQUFROztBQUVSLDBEQUFVO0FBQ1YscURBQVE7O0FBRVIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbG9hZEhvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2xvYWRNZW51LmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9zaXRlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gIC8vIEdlbmVyYXRlIGhlYWRlciBhbmQgYnV0dG9uc1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaG9tZUJ0bi50ZXh0Q29udGVudCA9ICdIb21lJztcblxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuXG4gIGhlYWRlci5hcHBlbmQoaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bik7XG5cbiAgLy8gR2VuZXJhdGUgbWFpbiBibG9ja1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuXG4gIC8vIEdlbmVyYXRlIHN1YiBibG9jayAnYWJvdXQnXG4gIGNvbnN0IG1haW5fX2Fib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0Jyk7XG4gIGNvbnN0IG1haW5fX2Fib3V0X190ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2Fib3V0X190ZXh0Jyk7XG4gIG1haW5fX2Fib3V0X190ZXh0LnRleHRDb250ZW50ID1cbiAgICAnQnVybnMgV2lsZCBHYW1lIGhhcyB0aGUgbW9zdCBmbGF2b3JmdWwgbWVhdHMgaW4gdGhlIEdyZWF0ZXIgU1RMIEFyZWEhJztcbiAgbWFpbl9fYWJvdXQuYXBwZW5kKG1haW5fX2Fib3V0X190ZXh0KTtcblxuICAvLyBHZW5lcmF0ZSBzdWIgYmxvY2sgJ2hvdXJzJ1xuICBjb25zdCBtYWluX19ob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vycy5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3VycycpO1xuICBjb25zdCBtYWluX19ob3Vyc19fdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190aXRsZScpO1xuICBtYWluX19ob3Vyc19fdGl0bGUudGV4dENvbnRlbnQgPSAnSG91cnMnO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX19tb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX21vbi5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fbW9uJyk7XG4gIG1haW5fX2hvdXJzX19tb24udGV4dENvbnRlbnQgPSAnTW9uZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX190dWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190dWVzLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190dWVzJyk7XG4gIG1haW5fX2hvdXJzX190dWVzLnRleHRDb250ZW50ID0gJ1R1ZXNkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX3dlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fd2VkLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX193ZWR5Jyk7XG4gIG1haW5fX2hvdXJzX193ZWQudGV4dENvbnRlbnQgPSAnV2VkbmVzZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX190aHVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fdGh1cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3RodXJzJyk7XG4gIG1haW5fX2hvdXJzX190aHVycy50ZXh0Q29udGVudCA9ICdUaHVyc2RheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fZnJpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19mcmkuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX21vbicpO1xuICBtYWluX19ob3Vyc19fZnJpLnRleHRDb250ZW50ID0gJ0ZyaWRheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fc2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19zYXQuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3NhdCcpO1xuICBtYWluX19ob3Vyc19fc2F0LnRleHRDb250ZW50ID0gJ1NhdHVyZGF5OiBDbG9zZWQnO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX19zdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3N1bi5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fc3VuJyk7XG4gIG1haW5fX2hvdXJzX19zdW4udGV4dENvbnRlbnQgPSAnU3VuZGF5OiBDbG9zZWQnO1xuXG4gIG1haW5fX2hvdXJzLmFwcGVuZChcbiAgICBtYWluX19ob3Vyc19fdGl0bGUsXG4gICAgbWFpbl9faG91cnNfX21vbixcbiAgICBtYWluX19ob3Vyc19fdHVlcyxcbiAgICBtYWluX19ob3Vyc19fd2VkLFxuICAgIG1haW5fX2hvdXJzX190aHVycyxcbiAgICBtYWluX19ob3Vyc19fZnJpLFxuICAgIG1haW5fX2hvdXJzX19zYXQsXG4gICAgbWFpbl9faG91cnNfX3N1bixcbiAgKTtcblxuICBtYWluLmFwcGVuZChtYWluX19hYm91dCwgbWFpbl9faG91cnMpO1xuXG4gIC8vIEdlbmVyYXRlIGZvb3RlciBibG9ja1xuXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlciwgbWFpbik7XG4gIGNvbnNvbGUubG9nKCdsb2FkSG9tZSBpcyB3b3JraW5nIScpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAvLyBHZW5lcmF0ZSBoZWFkZXIgYW5kIGJ1dHRvbnNcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZWFkZXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuXG4gIC8vIEdlbmVyYXRlIG1haW4gYmxvY2tcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBHZW5lcmF0ZSBzdWIgYmxvY2sgJ2Fib3V0J1xuICBjb25zdCBtYWluX19hYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dCcpO1xuICBjb25zdCBtYWluX19hYm91dF9fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dF9fdGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dF9fdGV4dCcpO1xuICBtYWluX19hYm91dF9fdGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ0J1cm5zIFdpbGQgR2FtZSBoYXMgdGhlIG1vc3QgZmxhdm9yZnVsIG1lYXRzIGluIHRoZSBHcmVhdGVyIFNUTCBBcmVhISc7XG4gIG1haW5fX2Fib3V0LmFwcGVuZChtYWluX19hYm91dF9fdGV4dCk7XG5cbiAgLy8gR2VuZXJhdGUgc3ViIGJsb2NrICdob3VycydcbiAgY29uc3QgbWFpbl9faG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnMnKTtcbiAgY29uc3QgbWFpbl9faG91cnNfX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdGl0bGUnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fbW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19tb24uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX21vbicpO1xuICBtYWluX19ob3Vyc19fbW9uLnRleHRDb250ZW50ID0gJ01vbmRheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdHVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fdHVlcy5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdHVlcycpO1xuICBtYWluX19ob3Vyc19fdHVlcy50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX193ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3dlZC5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fd2VkeScpO1xuICBtYWluX19ob3Vyc19fd2VkLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdGh1cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3RodXJzLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190aHVycycpO1xuICBtYWluX19ob3Vyc19fdGh1cnMudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX2ZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fZnJpLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19tb24nKTtcbiAgbWFpbl9faG91cnNfX2ZyaS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX3NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fc2F0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19zYXQnKTtcbiAgbWFpbl9faG91cnNfX3NhdC50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogQ2xvc2VkJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19zdW4uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3N1bicpO1xuICBtYWluX19ob3Vyc19fc3VuLnRleHRDb250ZW50ID0gJ1N1bmRheTogQ2xvc2VkJztcblxuICBtYWluX19ob3Vycy5hcHBlbmQoXG4gICAgbWFpbl9faG91cnNfX3RpdGxlLFxuICAgIG1haW5fX2hvdXJzX19tb24sXG4gICAgbWFpbl9faG91cnNfX3R1ZXMsXG4gICAgbWFpbl9faG91cnNfX3dlZCxcbiAgICBtYWluX19ob3Vyc19fdGh1cnMsXG4gICAgbWFpbl9faG91cnNfX2ZyaSxcbiAgICBtYWluX19ob3Vyc19fc2F0LFxuICAgIG1haW5fX2hvdXJzX19zdW4sXG4gICk7XG5cbiAgbWFpbi5hcHBlbmQobWFpbl9fYWJvdXQsIG1haW5fX2hvdXJzKTtcblxuICAvLyBHZW5lcmF0ZSBmb290ZXIgYmxvY2tcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW4pO1xuXG4gIGNvbnNvbGUubG9nKCdsb2FkTWVudSBpcyB3b3JraW5nIScpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVET00oKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICBpZiAobm9kZSkge1xuICAgIHdoaWxlIChub2RlLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmxhc3RDaGlsZCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIG5vZGUuYXBwZW5kKGNvbnRlbnQpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByZXBhcmVET00gfSBmcm9tICcuL3NpdGVGdW5jdGlvbnMnO1xuaW1wb3J0IGxvYWRIb21lIGZyb20gJy4vbG9hZEhvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbG9hZE1lbnUnO1xuXG5wcmVwYXJlRE9NKCk7XG5sb2FkSG9tZSgpO1xuXG5wcmVwYXJlRE9NKCk7XG5sb2FkTWVudSgpO1xuXG5jb25zb2xlLmxvZygndGVzdCcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
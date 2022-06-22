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
/* harmony export */   "clearDOM": () => (/* binding */ clearDOM),
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
function clearDOM() {
  const node = document.querySelector('.content');
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}

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
/* harmony import */ var _loadHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHome */ "./src/loadHome.js");
/* harmony import */ var _loadMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu */ "./src/loadMenu.js");



(0,_loadHome__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_loadMenu__WEBPACK_IMPORTED_MODULE_1__.clearDOM)();

console.log('test');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7OztVQzFGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rQztBQUNjOztBQUVoRCxxREFBUTtBQUNSLG1EQUFROztBQUVSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlLy4vc3JjL2xvYWRIb21lLmpzIiwid2VicGFjazovL3Jlc3RhcmF1bnQtcGFnZS8uL3NyYy9sb2FkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAvLyBHZW5lcmF0ZSBoZWFkZXIgYW5kIGJ1dHRvbnNcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZWFkZXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuXG4gIC8vIEdlbmVyYXRlIG1haW4gYmxvY2tcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBHZW5lcmF0ZSBzdWIgYmxvY2sgJ2Fib3V0J1xuICBjb25zdCBtYWluX19hYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dCcpO1xuICBjb25zdCBtYWluX19hYm91dF9fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dF9fdGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dF9fdGV4dCcpO1xuICBtYWluX19hYm91dF9fdGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ0J1cm5zIFdpbGQgR2FtZSBoYXMgdGhlIG1vc3QgZmxhdm9yZnVsIG1lYXRzIGluIHRoZSBHcmVhdGVyIFNUTCBBcmVhISc7XG4gIG1haW5fX2Fib3V0LmFwcGVuZChtYWluX19hYm91dF9fdGV4dCk7XG5cbiAgLy8gR2VuZXJhdGUgc3ViIGJsb2NrICdob3VycydcbiAgY29uc3QgbWFpbl9faG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnMnKTtcbiAgY29uc3QgbWFpbl9faG91cnNfX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdGl0bGUnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fbW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19tb24uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX21vbicpO1xuICBtYWluX19ob3Vyc19fbW9uLnRleHRDb250ZW50ID0gJ01vbmRheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdHVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fdHVlcy5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdHVlcycpO1xuICBtYWluX19ob3Vyc19fdHVlcy50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX193ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3dlZC5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fd2VkeScpO1xuICBtYWluX19ob3Vyc19fd2VkLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdGh1cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3RodXJzLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190aHVycycpO1xuICBtYWluX19ob3Vyc19fdGh1cnMudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX2ZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fZnJpLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19tb24nKTtcbiAgbWFpbl9faG91cnNfX2ZyaS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX3NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fc2F0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19zYXQnKTtcbiAgbWFpbl9faG91cnNfX3NhdC50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogQ2xvc2VkJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19zdW4uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3N1bicpO1xuICBtYWluX19ob3Vyc19fc3VuLnRleHRDb250ZW50ID0gJ1N1bmRheTogQ2xvc2VkJztcblxuICBtYWluX19ob3Vycy5hcHBlbmQoXG4gICAgbWFpbl9faG91cnNfX3RpdGxlLFxuICAgIG1haW5fX2hvdXJzX19tb24sXG4gICAgbWFpbl9faG91cnNfX3R1ZXMsXG4gICAgbWFpbl9faG91cnNfX3dlZCxcbiAgICBtYWluX19ob3Vyc19fdGh1cnMsXG4gICAgbWFpbl9faG91cnNfX2ZyaSxcbiAgICBtYWluX19ob3Vyc19fc2F0LFxuICAgIG1haW5fX2hvdXJzX19zdW4sXG4gICk7XG5cbiAgbWFpbi5hcHBlbmQobWFpbl9fYWJvdXQsIG1haW5fX2hvdXJzKTtcblxuICAvLyBHZW5lcmF0ZSBmb290ZXIgYmxvY2tcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW4pO1xuXG4gIGNvbnNvbGUubG9nKCdsb2FkSG9tZSBpcyB3b3JraW5nIScpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRE9NKCkge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAvLyBHZW5lcmF0ZSBoZWFkZXIgYW5kIGJ1dHRvbnNcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGhvbWVCdG4udGV4dENvbnRlbnQgPSAnSG9tZSc7XG5cbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0JztcblxuICBoZWFkZXIuYXBwZW5kKGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuXG4gIC8vIEdlbmVyYXRlIG1haW4gYmxvY2tcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcblxuICAvLyBHZW5lcmF0ZSBzdWIgYmxvY2sgJ2Fib3V0J1xuICBjb25zdCBtYWluX19hYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dCcpO1xuICBjb25zdCBtYWluX19hYm91dF9fdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19hYm91dF9fdGV4dC5jbGFzc0xpc3QuYWRkKCdtYWluX19hYm91dF9fdGV4dCcpO1xuICBtYWluX19hYm91dF9fdGV4dC50ZXh0Q29udGVudCA9XG4gICAgJ0J1cm5zIFdpbGQgR2FtZSBoYXMgdGhlIG1vc3QgZmxhdm9yZnVsIG1lYXRzIGluIHRoZSBHcmVhdGVyIFNUTCBBcmVhISc7XG4gIG1haW5fX2Fib3V0LmFwcGVuZChtYWluX19hYm91dF9fdGV4dCk7XG5cbiAgLy8gR2VuZXJhdGUgc3ViIGJsb2NrICdob3VycydcbiAgY29uc3QgbWFpbl9faG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnMuY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnMnKTtcbiAgY29uc3QgbWFpbl9faG91cnNfX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX190aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdGl0bGUnKTtcbiAgbWFpbl9faG91cnNfX3RpdGxlLnRleHRDb250ZW50ID0gJ0hvdXJzJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fbW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19tb24uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX21vbicpO1xuICBtYWluX19ob3Vyc19fbW9uLnRleHRDb250ZW50ID0gJ01vbmRheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdHVlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fdHVlcy5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fdHVlcycpO1xuICBtYWluX19ob3Vyc19fdHVlcy50ZXh0Q29udGVudCA9ICdUdWVzZGF5OiA4YW0gLSA4cG0nO1xuXG4gIGNvbnN0IG1haW5fX2hvdXJzX193ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3dlZC5jbGFzc0xpc3QuYWRkKCdtYWluX19ob3Vyc19fd2VkeScpO1xuICBtYWluX19ob3Vyc19fd2VkLnRleHRDb250ZW50ID0gJ1dlZG5lc2RheTogOGFtIC0gOHBtJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fdGh1cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbl9faG91cnNfX3RodXJzLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX190aHVycycpO1xuICBtYWluX19ob3Vyc19fdGh1cnMudGV4dENvbnRlbnQgPSAnVGh1cnNkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX2ZyaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fZnJpLmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19tb24nKTtcbiAgbWFpbl9faG91cnNfX2ZyaS50ZXh0Q29udGVudCA9ICdGcmlkYXk6IDhhbSAtIDhwbSc7XG5cbiAgY29uc3QgbWFpbl9faG91cnNfX3NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluX19ob3Vyc19fc2F0LmNsYXNzTGlzdC5hZGQoJ21haW5fX2hvdXJzX19zYXQnKTtcbiAgbWFpbl9faG91cnNfX3NhdC50ZXh0Q29udGVudCA9ICdTYXR1cmRheTogQ2xvc2VkJztcblxuICBjb25zdCBtYWluX19ob3Vyc19fc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW5fX2hvdXJzX19zdW4uY2xhc3NMaXN0LmFkZCgnbWFpbl9faG91cnNfX3N1bicpO1xuICBtYWluX19ob3Vyc19fc3VuLnRleHRDb250ZW50ID0gJ1N1bmRheTogQ2xvc2VkJztcblxuICBtYWluX19ob3Vycy5hcHBlbmQoXG4gICAgbWFpbl9faG91cnNfX3RpdGxlLFxuICAgIG1haW5fX2hvdXJzX19tb24sXG4gICAgbWFpbl9faG91cnNfX3R1ZXMsXG4gICAgbWFpbl9faG91cnNfX3dlZCxcbiAgICBtYWluX19ob3Vyc19fdGh1cnMsXG4gICAgbWFpbl9faG91cnNfX2ZyaSxcbiAgICBtYWluX19ob3Vyc19fc2F0LFxuICAgIG1haW5fX2hvdXJzX19zdW4sXG4gICk7XG5cbiAgbWFpbi5hcHBlbmQobWFpbl9fYWJvdXQsIG1haW5fX2hvdXJzKTtcblxuICAvLyBHZW5lcmF0ZSBmb290ZXIgYmxvY2tcblxuICBjb250ZW50LmFwcGVuZChoZWFkZXIsIG1haW4pO1xuXG4gIGNvbnNvbGUubG9nKCdsb2FkTWVudSBpcyB3b3JraW5nIScpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9sb2FkSG9tZSc7XG5pbXBvcnQgeyBsb2FkTWVudSwgY2xlYXJET00gfSBmcm9tICcuL2xvYWRNZW51JztcblxubG9hZEhvbWUoKTtcbmNsZWFyRE9NKCk7XG5cbmNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
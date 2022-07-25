/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", () => {\n  // const ele = document.getElementById(\"main\");\n  const height = 600;\n  const width = 900;\n  const projection = d3.geoMercator();\n  const path = d3.geoPath(projection);\n  const svg = d3.select('body').append('svg').attr('width', width).attr('height', height); // grouping of all the countries with path common?\n\n  const g = svg.append('g');\n  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(data => {\n    const countries = topojson.feature(data, data.objects.countries);\n    g.selectAll(\"path\").data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoZWlnaHQiLCJ3aWR0aCIsInByb2plY3Rpb24iLCJkMyIsImdlb01lcmNhdG9yIiwicGF0aCIsImdlb1BhdGgiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiZyIsImpzb24iLCJ0aGVuIiwiZGF0YSIsImNvdW50cmllcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBwZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICAvLyBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgaGVpZ2h0ID0gNjAwO1xuICAgIGNvbnN0IHdpZHRoID0gOTAwO1xuXG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb01lcmNhdG9yKCk7XG4gICAgY29uc3QgcGF0aCA9IGQzLmdlb1BhdGgocHJvamVjdGlvbik7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoJ2JvZHknKVxuICAgICAgICAuYXBwZW5kKCdzdmcnKVxuICAgICAgICAuYXR0cignd2lkdGgnLCB3aWR0aClcbiAgICAgICAgLmF0dHIoJ2hlaWdodCcsIGhlaWdodClcblxuICAgIC8vIGdyb3VwaW5nIG9mIGFsbCB0aGUgY291bnRyaWVzIHdpdGggcGF0aCBjb21tb24/XG4gICAgY29uc3QgZyA9IHN2Zy5hcHBlbmQoJ2cnKTtcbiAgICBkMy5qc29uKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3dvcmxkLWF0bGFzQDIvY291bnRyaWVzLTExMG0uanNvbicpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgY291bnRyaWVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuY291bnRyaWVzKTtcbiAgICAgICAgICAgIGcuc2VsZWN0QWxsKFwicGF0aFwiXG4gICAgICAgICAgICAgICAgKS5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgICAgIH0pO1xuXG59KTtcbiJdLCJtYXBwaW5ncyI6IkFBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQUk7RUFDOUM7RUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtFQUNBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0VBRUEsTUFBTUMsVUFBVSxHQUFHQyxFQUFFLENBQUNDLFdBQUgsRUFBbkI7RUFDQSxNQUFNQyxJQUFJLEdBQUdGLEVBQUUsQ0FBQ0csT0FBSCxDQUFXSixVQUFYLENBQWI7RUFFQSxNQUFNSyxHQUFHLEdBQUdKLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVLE1BQVYsRUFDUEMsTUFETyxDQUNBLEtBREEsRUFFUEMsSUFGTyxDQUVGLE9BRkUsRUFFT1QsS0FGUCxFQUdQUyxJQUhPLENBR0YsUUFIRSxFQUdRVixNQUhSLENBQVosQ0FSOEMsQ0FhOUM7O0VBQ0EsTUFBTVcsQ0FBQyxHQUFHSixHQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLENBQVY7RUFDQU4sRUFBRSxDQUFDUyxJQUFILENBQVEsZ0VBQVIsRUFDS0MsSUFETCxDQUNVQyxJQUFJLElBQUk7SUFDVixNQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkgsSUFBakIsRUFBdUJBLElBQUksQ0FBQ0ksT0FBTCxDQUFhSCxTQUFwQyxDQUFsQjtJQUNBSixDQUFDLENBQUNRLFNBQUYsQ0FBWSxNQUFaLEVBQ01MLElBRE4sQ0FDV0MsU0FBUyxDQUFDSyxRQURyQixFQUVLQyxLQUZMLEdBR0taLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW1CLFNBSm5CLEVBS0tBLElBTEwsQ0FLVSxHQUxWLEVBS2VMLElBTGY7RUFPSCxDQVZMO0FBWUgsQ0EzQkQifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXBwZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
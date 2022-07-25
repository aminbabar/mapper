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

eval("// compare.then(ele => console.log(ele))\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  async function Andy() {\n    return \"Andy\";\n  }\n\n  window.Andy = Andy; // const ele = document.getElementById(\"main\");\n\n  const height = 600;\n  const width = 900;\n  const translate = [width / 2, height / 1.4];\n  const scale = 140;\n  const projection = d3.geoMercator().scale(scale).translate(translate);\n  const path = d3.geoPath(projection);\n  const svg = d3.select('body').append('svg').attr('width', width).attr('height', height); // grouping of all the countries with path common?\n\n  const g = svg.append('g');\n  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then(data => {\n    const countries = topojson.feature(data, data.objects.countries); // debugger;\n\n    g.selectAll(\"path\").data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);\n\n    d3.selectAll('.country')._groups[0].forEach(ele => {\n      ele.addEventListener(\"click\", function () {\n        debugger;\n        ele.classList.add('blue');\n        alert(ele.__data__.properties.name);\n      });\n    }); // debugger;\n\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbmR5Iiwid2luZG93IiwiaGVpZ2h0Iiwid2lkdGgiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInByb2plY3Rpb24iLCJkMyIsImdlb01lcmNhdG9yIiwicGF0aCIsImdlb1BhdGgiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiZyIsImpzb24iLCJ0aGVuIiwiZGF0YSIsImNvdW50cmllcyIsInRvcG9qc29uIiwiZmVhdHVyZSIsIm9iamVjdHMiLCJzZWxlY3RBbGwiLCJmZWF0dXJlcyIsImVudGVyIiwiX2dyb3VwcyIsImZvckVhY2giLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhbGVydCIsIl9fZGF0YV9fIiwicHJvcGVydGllcyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL21hcHBlci8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBjb21wYXJlLnRoZW4oZWxlID0+IGNvbnNvbGUubG9nKGVsZSkpXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuXG5cbiAgICBhc3luYyBmdW5jdGlvbiBBbmR5KCkge1xuICAgICAgICByZXR1cm4gXCJBbmR5XCI7XG4gICAgfVxuXG4gICAgd2luZG93LkFuZHkgPSBBbmR5O1xuICAgIC8vIGNvbnN0IGVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBoZWlnaHQgPSA2MDA7XG4gICAgY29uc3Qgd2lkdGggPSA5MDA7XG4gICAgY29uc3QgdHJhbnNsYXRlID0gW3dpZHRoIC8gMiwgaGVpZ2h0IC8gMS40XTtcbiAgICBjb25zdCBzY2FsZSA9IDE0MDtcblxuXG4gICAgY29uc3QgcHJvamVjdGlvbiA9IGQzLmdlb01lcmNhdG9yKCkuc2NhbGUoc2NhbGUpLnRyYW5zbGF0ZSh0cmFuc2xhdGUpO1xuICAgIGNvbnN0IHBhdGggPSBkMy5nZW9QYXRoKHByb2plY3Rpb24pO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KCdib2R5JylcbiAgICAgICAgLmFwcGVuZCgnc3ZnJylcbiAgICAgICAgLmF0dHIoJ3dpZHRoJywgd2lkdGgpXG4gICAgICAgIC5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpXG5cbiAgICAvLyBncm91cGluZyBvZiBhbGwgdGhlIGNvdW50cmllcyB3aXRoIHBhdGggY29tbW9uP1xuICAgIGNvbnN0IGcgPSBzdmcuYXBwZW5kKCdnJyk7XG4gICAgZDMuanNvbignaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS93b3JsZC1hdGxhc0AyL2NvdW50cmllcy0xMTBtLmpzb24nKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cmllcyA9IHRvcG9qc29uLmZlYXR1cmUoZGF0YSwgZGF0YS5vYmplY3RzLmNvdW50cmllcyk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGcuc2VsZWN0QWxsKFwicGF0aFwiXG4gICAgICAgICAgICAgICAgKS5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoJ3BhdGgnKVxuICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgICAgICAgICAuYXR0cignZCcsIHBhdGgpO1xuXG4gICAgICAgICAgICBkM1xuICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoJy5jb3VudHJ5JylcbiAgICAgICAgICAgICAgICAuX2dyb3Vwc1swXVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGVsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZCgnYmx1ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZWxlLl9fZGF0YV9fLnByb3BlcnRpZXMubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgXG5cbiAgICAgICAgfSk7XG5cbiAgICBcblxufSk7XG4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQ0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQUk7RUFHOUMsZUFBZUMsSUFBZixHQUFzQjtJQUNsQixPQUFPLE1BQVA7RUFDSDs7RUFFREMsTUFBTSxDQUFDRCxJQUFQLEdBQWNBLElBQWQsQ0FQOEMsQ0FROUM7O0VBQ0EsTUFBTUUsTUFBTSxHQUFHLEdBQWY7RUFDQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtFQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxFQUFZRCxNQUFNLEdBQUcsR0FBckIsQ0FBbEI7RUFDQSxNQUFNRyxLQUFLLEdBQUcsR0FBZDtFQUdBLE1BQU1DLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxXQUFILEdBQWlCSCxLQUFqQixDQUF1QkEsS0FBdkIsRUFBOEJELFNBQTlCLENBQXdDQSxTQUF4QyxDQUFuQjtFQUNBLE1BQU1LLElBQUksR0FBR0YsRUFBRSxDQUFDRyxPQUFILENBQVdKLFVBQVgsQ0FBYjtFQUVBLE1BQU1LLEdBQUcsR0FBR0osRUFBRSxDQUFDSyxNQUFILENBQVUsTUFBVixFQUNQQyxNQURPLENBQ0EsS0FEQSxFQUVQQyxJQUZPLENBRUYsT0FGRSxFQUVPWCxLQUZQLEVBR1BXLElBSE8sQ0FHRixRQUhFLEVBR1FaLE1BSFIsQ0FBWixDQWxCOEMsQ0F1QjlDOztFQUNBLE1BQU1hLENBQUMsR0FBR0osR0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxDQUFWO0VBQ0FOLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLGdFQUFSLEVBQ0tDLElBREwsQ0FDVUMsSUFBSSxJQUFJO0lBQ1YsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJILElBQWpCLEVBQXVCQSxJQUFJLENBQUNJLE9BQUwsQ0FBYUgsU0FBcEMsQ0FBbEIsQ0FEVSxDQUVWOztJQUNBSixDQUFDLENBQUNRLFNBQUYsQ0FBWSxNQUFaLEVBQ01MLElBRE4sQ0FDV0MsU0FBUyxDQUFDSyxRQURyQixFQUVLQyxLQUZMLEdBR0taLE1BSEwsQ0FHWSxNQUhaLEVBSUtDLElBSkwsQ0FJVSxPQUpWLEVBSW1CLFNBSm5CLEVBS0tBLElBTEwsQ0FLVSxHQUxWLEVBS2VMLElBTGY7O0lBT0FGLEVBQUUsQ0FDR2dCLFNBREwsQ0FDZSxVQURmLEVBRUtHLE9BRkwsQ0FFYSxDQUZiLEVBR0tDLE9BSEwsQ0FHYUMsR0FBRyxJQUFJO01BQ1pBLEdBQUcsQ0FBQzdCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQVk7UUFDdEM7UUFDQTZCLEdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO1FBQ0FDLEtBQUssQ0FBQ0gsR0FBRyxDQUFDSSxRQUFKLENBQWFDLFVBQWIsQ0FBd0JDLElBQXpCLENBQUw7TUFDSCxDQUpEO0lBS0gsQ0FUTCxFQVZVLENBb0JWOztFQUdILENBeEJMO0FBNEJILENBckREIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./inc/client.js":
/*!***********************!*\
  !*** ./inc/client.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _module_engine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/engine */ \"./inc/module/engine.js\");\n\n\nclass client {\n}\n(0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(client, \"init\", function(req) {\n    let dom = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n    let helper = new _module_engine__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().start();\n    delete helper.config.server;\n    if (req !== undefined) {\n        helper.siteUrl = req.location.protocol + \"//\" + req.location.hostname + (req.location.port === \"\" || req.location.port === \"80\" || req.location.port === \"443\" ? \"\" : \":\" + req.location.port);\n    } else {\n        helper.siteUrl = req.protocol + \"//\" + req.host;\n    }\n    return helper;\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmMvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQXFDO0FBRXJDLE1BQU1DO0FBWU47QUFWRSxpRkFGSUEsUUFFR0MsUUFBTyxTQUFDQyxLQUFxQjtRQUFoQkMsdUVBQU0sS0FBSztJQUM3QixJQUFLQyxTQUFTLElBQUlMLHNEQUFNQSxHQUFHTSxLQUFLO0lBQ2hDLE9BQVFELE9BQU9FLE1BQU0sQ0FBQ0MsTUFBTTtJQUM1QixJQUFHTCxRQUFRTSxXQUFVO1FBQ25CSixPQUFPSyxPQUFPLEdBQUdQLElBQUlRLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHLE9BQU9ULElBQUlRLFFBQVEsQ0FBQ0UsUUFBUSxHQUFJVixDQUFBQSxJQUFJUSxRQUFRLENBQUNHLElBQUksS0FBSyxNQUFNWCxJQUFJUSxRQUFRLENBQUNHLElBQUksS0FBSyxRQUFRWCxJQUFJUSxRQUFRLENBQUNHLElBQUksS0FBSyxRQUFRLEtBQUssTUFBTVgsSUFBSVEsUUFBUSxDQUFDRyxJQUFJO0lBQy9MLE9BQUs7UUFDSFQsT0FBT0ssT0FBTyxHQUFHUCxJQUFJUyxRQUFRLEdBQUcsT0FBT1QsSUFBSVksSUFBSTtJQUNqRCxDQUFDO0lBQ0QsT0FBT1Y7QUFDVDtBQUVGLCtEQUFlSixNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2luYy9jbGllbnQuanM/Y2FkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZW5naW5lIGZyb20gXCIuL21vZHVsZS9lbmdpbmVcIjtcclxuXHJcbmNsYXNzIGNsaWVudCB7XHJcbiAgXHJcbiAgc3RhdGljIGluaXQgPSAocmVxLCBkb20gPSBmYWxzZSkgPT4ge1xyXG4gICAgbGV0ICBoZWxwZXIgPSBuZXcgZW5naW5lKCkuc3RhcnQoKTtcclxuICAgIGRlbGV0ZSAoaGVscGVyLmNvbmZpZy5zZXJ2ZXIpXHJcbiAgICBpZihyZXEgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGhlbHBlci5zaXRlVXJsID0gcmVxLmxvY2F0aW9uLnByb3RvY29sICsgJy8vJyArIHJlcS5sb2NhdGlvbi5ob3N0bmFtZSArIChyZXEubG9jYXRpb24ucG9ydCA9PT0gJycgfHwgcmVxLmxvY2F0aW9uLnBvcnQgPT09ICc4MCcgfHwgcmVxLmxvY2F0aW9uLnBvcnQgPT09ICc0NDMnID8gJycgOiAnOicgKyByZXEubG9jYXRpb24ucG9ydClcclxuICAgIH1lbHNle1xyXG4gICAgICBoZWxwZXIuc2l0ZVVybCA9IHJlcS5wcm90b2NvbCArICcvLycgKyByZXEuaG9zdFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlbHBlcjtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50O1xyXG4iXSwibmFtZXMiOlsiZW5naW5lIiwiY2xpZW50IiwiaW5pdCIsInJlcSIsImRvbSIsImhlbHBlciIsInN0YXJ0IiwiY29uZmlnIiwic2VydmVyIiwidW5kZWZpbmVkIiwic2l0ZVVybCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJob3N0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./inc/client.js\n"));

/***/ })

});
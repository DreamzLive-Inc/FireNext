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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inc_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inc/client */ \"./inc/client.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MyApp(param) {\n    let { Component , pageProps , request  } = param;\n    _s();\n    const [_client, setClient] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // console.log(\"8.)\",_client);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        _inc_client__WEBPACK_IMPORTED_MODULE_4__[\"default\"].init(request, window).then((res)=>{\n            console.log(res);\n            setClient(res);\n        });\n    }, [\n        _client\n    ]);\n    console.log(_client);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin_\\\\Documents\\\\GitHub\\\\digital-vaults-next\\\\pages\\\\_app.js\",\n                lineNumber: 20,\n                columnNumber: 3\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                app: pageProps,\n                client: _client\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\admin_\\\\Documents\\\\GitHub\\\\digital-vaults-next\\\\pages\\\\_app.js\",\n                lineNumber: 24,\n                columnNumber: 3\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyApp, \"i8taj016clW60C/ST2iXGmrrSU0=\");\n_c = MyApp;\nMyApp.getInitialProps = async (context)=>{\n    const ctx = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(context);\n    let req = context.ctx.req;\n    return {\n        ...ctx,\n        request: {\n            host: req !== undefined ? req.headers.host : \"\",\n            ref: req !== undefined ? req.headers.referer : \"\",\n            protocol: req !== undefined && req.headers.referer !== undefined ? req.headers.referer.split(\"//\")[0] : \"\",\n            url: req !== undefined ? req.url : \"\",\n            query: context.router.query,\n            asPath: context.router.asPath,\n            path: context.router.path,\n            base: context.router.basePath,\n            route: context.router.route\n        }\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNpQjtBQUNiO0FBQ0k7QUFDTDtBQUU3QixTQUFTSyxNQUFNLEtBQWlDLEVBQUU7UUFBbkMsRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRSxHQUFqQzs7SUFFYixNQUFNLENBQUNDLFNBQVNDLFVBQVUsR0FBR1IsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyw4QkFBOEI7SUFDN0JELGdEQUFTQSxDQUFDLElBQUk7UUFDWkUsd0RBQVcsQ0FBQ0ssU0FBU0ksUUFBUUMsSUFBSSxDQUFDLENBQUNDLE1BQU07WUFDdkNDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkosVUFBVUk7UUFDWjtJQUVGLEdBQUU7UUFBQ0w7S0FBUTtJQUNYTSxRQUFRQyxHQUFHLENBQUNQO0lBQ1oscUJBQU87OzBCQUNQLDhEQUFDTCxrREFBSUE7Ozs7OzBCQUlMLDhEQUFDRTtnQkFBZVcsS0FBS1Y7Z0JBQVdKLFFBQVFNOzs7Ozs7OztBQUUxQztHQW5CU0o7S0FBQUE7QUFxQlRBLE1BQU1hLGVBQWUsR0FBRyxPQUFPQyxVQUFZO0lBQ3pDLE1BQU1DLE1BQU0sTUFBTXBCLCtEQUFtQixDQUFDbUI7SUFDdkMsSUFBSUUsTUFBTUYsUUFBUUMsR0FBRyxDQUFDQyxHQUFHO0lBQ3hCLE9BQU87UUFBRSxHQUFHRCxHQUFHO1FBQUVaLFNBQVM7WUFDdEJjLE1BQU1ELFFBQVFFLFlBQVlGLElBQUlHLE9BQU8sQ0FBQ0YsSUFBSSxHQUFHLEVBQUU7WUFDL0NHLEtBQUtKLFFBQVFFLFlBQVlGLElBQUlHLE9BQU8sQ0FBQ0UsT0FBTyxHQUFHLEVBQUU7WUFDakRDLFVBQVVOLFFBQU9FLGFBQWFGLElBQUlHLE9BQU8sQ0FBQ0UsT0FBTyxLQUFLSCxZQUFZRixJQUFJRyxPQUFPLENBQUNFLE9BQU8sQ0FBQ0UsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRTtZQUN6R0MsS0FBS1IsUUFBT0UsWUFBWUYsSUFBSVEsR0FBRyxHQUFHLEVBQUU7WUFDcENDLE9BQU9YLFFBQVFZLE1BQU0sQ0FBQ0QsS0FBSztZQUMzQkUsUUFBUWIsUUFBUVksTUFBTSxDQUFDQyxNQUFNO1lBQzdCQyxNQUFNZCxRQUFRWSxNQUFNLENBQUNFLElBQUk7WUFDekJDLE1BQU1mLFFBQVFZLE1BQU0sQ0FBQ0ksUUFBUTtZQUM3QkMsT0FBT2pCLFFBQVFZLE1BQU0sQ0FBQ0ssS0FBSztRQUMvQjtJQUFFO0FBQ0o7QUFFQSwrREFBZS9CLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vaW5jL2NsaWVudCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlcXVlc3QgfSkge1xyXG4gIFxyXG4gIGNvbnN0IFtfY2xpZW50LCBzZXRDbGllbnRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAvLyBjb25zb2xlLmxvZyhcIjguKVwiLF9jbGllbnQpO1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY2xpZW50LmluaXQocmVxdWVzdCwgd2luZG93KS50aGVuKChyZXMpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIHNldENsaWVudChyZXMpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH0sW19jbGllbnRdKVxyXG4gIGNvbnNvbGUubG9nKF9jbGllbnQpXHJcbiAgcmV0dXJuIDw+XHJcbiAgPEhlYWQ+XHJcbiAgXHJcbiAgICBcclxuICA8L0hlYWQ+XHJcbiAgPENvbXBvbmVudCB7Li4ue2FwcDogcGFnZVByb3BzLCBjbGllbnQ6IF9jbGllbnR9fSAvPlxyXG4gIDwvPlxyXG59XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGN0eCA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY29udGV4dCk7XHJcbiBsZXQgcmVxID0gY29udGV4dC5jdHgucmVxO1xyXG4gIHJldHVybiB7IC4uLmN0eCwgcmVxdWVzdDoge1xyXG4gICAgICBob3N0OiByZXEgIT09IHVuZGVmaW5lZCA/IHJlcS5oZWFkZXJzLmhvc3QgOiAnJyxcclxuICAgICAgcmVmOiByZXEgIT09IHVuZGVmaW5lZCA/IHJlcS5oZWFkZXJzLnJlZmVyZXIgOiAnJyxcclxuICAgICAgcHJvdG9jb2w6IHJlcSAhPT11bmRlZmluZWQgJiYgcmVxLmhlYWRlcnMucmVmZXJlciAhPT0gdW5kZWZpbmVkID8gcmVxLmhlYWRlcnMucmVmZXJlci5zcGxpdChcIi8vXCIpWzBdIDogJycsXHJcbiAgICAgIHVybDogcmVxICE9PXVuZGVmaW5lZCA/IHJlcS51cmwgOiAnJyxcclxuICAgICAgcXVlcnk6IGNvbnRleHQucm91dGVyLnF1ZXJ5LFxyXG4gICAgICBhc1BhdGg6IGNvbnRleHQucm91dGVyLmFzUGF0aCxcclxuICAgICAgcGF0aDogY29udGV4dC5yb3V0ZXIucGF0aCxcclxuICAgICAgYmFzZTogY29udGV4dC5yb3V0ZXIuYmFzZVBhdGgsXHJcbiAgICAgIHJvdXRlOiBjb250ZXh0LnJvdXRlci5yb3V0ZVxyXG4gIH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iXSwibmFtZXMiOlsiQXBwIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnQiLCJIZWFkIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZXF1ZXN0IiwiX2NsaWVudCIsInNldENsaWVudCIsImluaXQiLCJ3aW5kb3ciLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImFwcCIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjdHgiLCJyZXEiLCJob3N0IiwidW5kZWZpbmVkIiwiaGVhZGVycyIsInJlZiIsInJlZmVyZXIiLCJwcm90b2NvbCIsInNwbGl0IiwidXJsIiwicXVlcnkiLCJyb3V0ZXIiLCJhc1BhdGgiLCJwYXRoIiwiYmFzZSIsImJhc2VQYXRoIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});
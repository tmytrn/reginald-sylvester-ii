"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_modules_FiftyFifty_js";
exports.ids = ["components_modules_FiftyFifty_js"];
exports.modules = {

/***/ "./components/modules/FiftyFifty.js":
/*!******************************************!*\
  !*** ./components/modules/FiftyFifty.js ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @portabletext/react */ \"@portabletext/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_portabletext_react__WEBPACK_IMPORTED_MODULE_2__]);\n_portabletext_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst FiftyFifty = ({ data  })=>{\n    console.log(\"fiftyFifty: \", data);\n    const { modules  } = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full ml-0 mt-2 md:mt-0 md:ml-0 mb-4 px-\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col md:flex-row justify-between border-b-2 border-black \",\n            children: modules ? modules.map((module, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        module._type === \"artwork\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-half-spaced flex justify-center flex-col align-center md:px-0 pb-4 md:pb-0\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: module.image.asset.url,\n                                    className: \"mb-2 md:mb-2 md:first:pl-0 md:pl-4 aspect-3/2 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: `${module.title}, ${moment__WEBPACK_IMPORTED_MODULE_1___default()(module.date).year()}${module.etc ? `, ${module.etc}` : \"\"}`\n                                }, void 0, false, {\n                                    fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                            lineNumber: 14,\n                            columnNumber: 17\n                        }, undefined),\n                        module._type === \"blockText\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full md:w-half-spaced text-base\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_2__.PortableText, {\n                                value: module.blocks\n                            }, void 0, false, {\n                                fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                                lineNumber: 26,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"no images\"\n            }, void 0, false, {\n                fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/tmytrn/Documents/GitHub/reginald-sylvester-ii/components/modules/FiftyFifty.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FiftyFifty);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZHVsZXMvRmlmdHlGaWZ0eS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QjtBQUN1QjtBQUVuRCxNQUFNRSxVQUFVLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsR0FBSztJQUMvQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxFQUFFRixJQUFJLENBQUMsQ0FBQztJQUNsQyxNQUFNLEVBQUVHLE9BQU8sR0FBRSxHQUFHSCxJQUFJO0lBQ3hCLHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQywyQ0FBMkM7a0JBQ3hELDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQywyRUFBMkU7c0JBQ3ZGRixPQUFPLEdBQ05BLE9BQU8sQ0FBQ0csR0FBRyxDQUFDLENBQUNDLE1BQU0sRUFBRUMsR0FBRyxpQkFDdEI7O3dCQUNHRCxNQUFNLENBQUNFLEtBQUssS0FBSyxTQUFTLGtCQUN6Qiw4REFBQ0wsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLHdGQUF3Rjs7OENBQ3JHLDhEQUFDSyxLQUFHO29DQUNGQyxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxLQUFLLENBQUNDLEdBQUc7b0NBQzNCVCxTQUFTLEVBQUMsZ0RBQWdEOzs7Ozs2Q0FDMUQ7OENBQ0YsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxFQUFFOzhDQUFFLENBQUMsRUFBRUUsTUFBTSxDQUFDUSxLQUFLLENBQUMsRUFBRSxFQUFFbEIsNkNBQU0sQ0FDM0NVLE1BQU0sQ0FBQ1MsSUFBSSxDQUNaLENBQUNDLElBQUksRUFBRSxDQUFDLEVBQUVWLE1BQU0sQ0FBQ1csR0FBRyxHQUFHLENBQUMsRUFBRSxFQUFFWCxNQUFNLENBQUNXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7Ozs7OzZDQUFPOzs7Ozs7cUNBQ25EO3dCQUVQWCxNQUFNLENBQUNFLEtBQUssS0FBSyxXQUFXLGtCQUMzQiw4REFBQ0wsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLG1DQUFtQztzQ0FDaEQsNEVBQUNQLDZEQUFZO2dDQUFDcUIsS0FBSyxFQUFFWixNQUFNLENBQUNhLE1BQU07Ozs7O3lDQUFJOzs7OztxQ0FDbEM7O2dDQUVQLENBQ0gsaUJBRUYsOERBQUNoQixLQUFHOzBCQUFDLFdBQVM7Ozs7O3lCQUFNOzs7OztxQkFFbEI7Ozs7O2lCQUNGLENBQ047Q0FDSDtBQUNELGlFQUFlTCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWdpbmFsZC1zeWx2ZXN0ZXItaWkvLi9jb21wb25lbnRzL21vZHVsZXMvRmlmdHlGaWZ0eS5qcz9jNGVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcblxuY29uc3QgRmlmdHlGaWZ0eSA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImZpZnR5RmlmdHk6IFwiLCBkYXRhKTtcbiAgY29uc3QgeyBtb2R1bGVzIH0gPSBkYXRhO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1sLTAgbXQtMiBtZDptdC0wIG1kOm1sLTAgbWItNCBweC1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1jb2wgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iLTIgYm9yZGVyLWJsYWNrIFwiPlxuICAgICAgICB7bW9kdWxlcyA/IChcbiAgICAgICAgICBtb2R1bGVzLm1hcCgobW9kdWxlLCBrZXkpID0+IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIHttb2R1bGUuX3R5cGUgPT09IFwiYXJ0d29ya1wiICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtZDp3LWhhbGYtc3BhY2VkIGZsZXgganVzdGlmeS1jZW50ZXIgZmxleC1jb2wgYWxpZ24tY2VudGVyIG1kOnB4LTAgcGItNCBtZDpwYi0wXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17bW9kdWxlLmltYWdlLmFzc2V0LnVybH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMiBtZDptYi0yIG1kOmZpcnN0OnBsLTAgbWQ6cGwtNCBhc3BlY3QtMy8yIFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj57YCR7bW9kdWxlLnRpdGxlfSwgJHttb21lbnQoXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5kYXRlXG4gICAgICAgICAgICAgICAgICApLnllYXIoKX0ke21vZHVsZS5ldGMgPyBgLCAke21vZHVsZS5ldGN9YCA6IFwiXCJ9YH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAge21vZHVsZS5fdHlwZSA9PT0gXCJibG9ja1RleHRcIiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1oYWxmLXNwYWNlZCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgICAgICAgICAgIDxQb3J0YWJsZVRleHQgdmFsdWU9e21vZHVsZS5ibG9ja3N9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApKVxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+bm8gaW1hZ2VzPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGaWZ0eUZpZnR5O1xuIl0sIm5hbWVzIjpbIm1vbWVudCIsIlBvcnRhYmxlVGV4dCIsIkZpZnR5RmlmdHkiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtb2R1bGUiLCJrZXkiLCJfdHlwZSIsImltZyIsInNyYyIsImltYWdlIiwiYXNzZXQiLCJ1cmwiLCJ0aXRsZSIsImRhdGUiLCJ5ZWFyIiwiZXRjIiwidmFsdWUiLCJibG9ja3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modules/FiftyFifty.js\n");

/***/ })

};
;
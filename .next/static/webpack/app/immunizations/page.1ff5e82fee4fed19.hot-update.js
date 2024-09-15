"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/immunizations/page",{

/***/ "(app-pages-browser)/./src/app/components/ImmunizationTable.js":
/*!*************************************************!*\
  !*** ./src/app/components/ImmunizationTable.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImmunizationTable; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _sessionManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sessionManager */ \"(app-pages-browser)/./src/app/sessionManager.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\nconst people = [\n    {\n        name: \"Lindsay Walton\",\n        title: \"Front-end Developer\",\n        email: \"lindsay.walton@example.com\",\n        role: \"Member\"\n    }\n];\n\n\nfunction ImmunizationTable() {\n    _s();\n    const { hashID, setHashID } = (0,_sessionManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    const [immunizations, setImmunizations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // Fetch immunizations from the backend\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(\"http://localhost:8080\", \"/get-immunizations/\").concat(hashID));\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setImmunizations(data);\n                setIsLoading(false);\n            } catch (err) {\n                setError(err.message);\n                setIsLoading(false);\n            }\n        };\n        fetchData();\n    }, [\n        hashID\n    ]);\n    // Update immunization\n    const updateImmunization = async (immunization)=>{\n        try {\n            const response = await fetch(\"\".concat(\"http://localhost:8080\", \"/update-immunization/\").concat(immunization._id), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(immunization)\n            });\n            if (!response.ok) {\n                throw new Error(\"HTTP error! status: \".concat(response.status));\n            }\n            const data = await response.json();\n            setImmunizations(data);\n        } catch (err) {\n            setError(err.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"px-4 sm:px-6 lg:px-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"sm:flex sm:items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sm:flex-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-base font-semibold leading-6 text-gray-900\",\n                                children: \"Users\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-2 text-sm text-gray-700\",\n                                children: \"A list of all the users in your account including their name, title, email and role.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 sm:ml-16 sm:mt-0 sm:flex-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                            children: \"Add user\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 flow-root\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"min-w-full divide-y divide-gray-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3\",\n                                                children: \"Name\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                                                children: \"Title\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                                                children: \"Email\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"px-3 py-3.5 text-left text-sm font-semibold text-gray-900\",\n                                                children: \"Role\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                scope: \"col\",\n                                                className: \"relative py-3.5 pl-3 pr-4 sm:pr-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"sr-only\",\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 111,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                    className: \"bg-white\",\n                                    children: people.map((person)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            className: \"even:bg-gray-50\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3\",\n                                                    children: person.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 118,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                                                    children: person.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                                                    children: person.email\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 124,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"whitespace-nowrap px-3 py-4 text-sm text-gray-500\",\n                                                    children: person.role\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 127,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                    className: \"relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                        href: \"#\",\n                                                        className: \"text-indigo-600 hover:text-indigo-900\",\n                                                        children: [\n                                                            \"Edit\",\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"sr-only\",\n                                                                children: [\n                                                                    \", \",\n                                                                    person.name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                                lineNumber: 135,\n                                                                columnNumber: 29\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                        lineNumber: 131,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                                    lineNumber: 130,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, person.email, true, {\n                                            fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                            lineNumber: 117,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kshitij/Projects/MedTap/medTap-Frontend/src/app/components/ImmunizationTable.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(ImmunizationTable, \"g5AQ9sLaGwa756PdPQeEjlwQYiw=\", false, function() {\n    return [\n        _sessionManager__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = ImmunizationTable;\nvar _c;\n$RefreshReg$(_c, \"ImmunizationTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9JbW11bml6YXRpb25UYWJsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsTUFBTUEsU0FBUztJQUNiO1FBQ0VDLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLE1BQU07SUFDUjtDQUVEO0FBQzZDO0FBQ0Y7QUFFN0IsU0FBU0k7O0lBQ3RCLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0wsMkRBQWFBO0lBQzNDLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUduQyx1Q0FBdUM7SUFDdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxHQUEyRFYsT0FBeERXLHVCQUFrQyxFQUFDLHVCQUE0QixPQUFQWDtnQkFDeEYsSUFBSSxDQUFDUyxTQUFTSyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJOLFNBQVNPLE1BQU07Z0JBQ3hEO2dCQUNBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtnQkFDaENmLGlCQUFpQmM7Z0JBQ2pCWixhQUFhO1lBQ2YsRUFBRSxPQUFPYyxLQUFLO2dCQUNaWixTQUFTWSxJQUFJQyxPQUFPO2dCQUNwQmYsYUFBYTtZQUNmO1FBQ0Y7UUFDQUc7SUFDRixHQUFHO1FBQUNSO0tBQU87SUFFYixzQkFBc0I7SUFDdEIsTUFBTXFCLHFCQUFxQixPQUFPQztRQUNoQyxJQUFJO1lBQ0YsTUFBTWIsV0FBVyxNQUFNQyxNQUFNLEdBQTZEWSxPQUExRFgsdUJBQWtDLEVBQUMseUJBQXdDLE9BQWpCVyxhQUFhQyxHQUFHLEdBQUk7Z0JBQzVHQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ047WUFDdkI7WUFDQSxJQUFJLENBQUNiLFNBQVNLLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQk4sU0FBU08sTUFBTTtZQUN4RDtZQUNBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtZQUNoQ2YsaUJBQWlCYztRQUNuQixFQUFFLE9BQU9FLEtBQUs7WUFDWlosU0FBU1ksSUFBSUMsT0FBTztRQUN0QjtJQUNGO0lBRUUscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWtEOzs7Ozs7MENBR2hFLDhEQUFDRTtnQ0FBRUYsV0FBVTswQ0FBNkI7Ozs7Ozs7Ozs7OztrQ0FLNUMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRzs0QkFDQ0MsTUFBSzs0QkFDTEosV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFNTCxXQUFVOzs4Q0FDZiw4REFBQ007OENBQ0MsNEVBQUNDOzswREFDQyw4REFBQ0M7Z0RBQ0NDLE9BQU07Z0RBQ05ULFdBQVU7MERBQ1g7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NDLE9BQU07Z0RBQ05ULFdBQVU7MERBQ1g7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NDLE9BQU07Z0RBQ05ULFdBQVU7MERBQ1g7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQ0NDLE9BQU07Z0RBQ05ULFdBQVU7MERBQ1g7Ozs7OzswREFHRCw4REFBQ1E7Z0RBQUdDLE9BQU07Z0RBQU1ULFdBQVU7MERBQ3hCLDRFQUFDVTtvREFBS1YsV0FBVTs4REFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJaEMsOERBQUNXO29DQUFNWCxXQUFVOzhDQUNkdkMsT0FBT21ELEdBQUcsQ0FBQyxDQUFDQyx1QkFDWCw4REFBQ047NENBQXNCUCxXQUFVOzs4REFDL0IsOERBQUNjO29EQUFHZCxXQUFVOzhEQUNYYSxPQUFPbkQsSUFBSTs7Ozs7OzhEQUVkLDhEQUFDb0Q7b0RBQUdkLFdBQVU7OERBQ1hhLE9BQU9sRCxLQUFLOzs7Ozs7OERBRWYsOERBQUNtRDtvREFBR2QsV0FBVTs4REFDWGEsT0FBT2pELEtBQUs7Ozs7Ozs4REFFZiw4REFBQ2tEO29EQUFHZCxXQUFVOzhEQUNYYSxPQUFPaEQsSUFBSTs7Ozs7OzhEQUVkLDhEQUFDaUQ7b0RBQUdkLFdBQVU7OERBQ1osNEVBQUNlO3dEQUNDQyxNQUFLO3dEQUNMaEIsV0FBVTs7NERBQ1g7MEVBQ0ssOERBQUNVO2dFQUFLVixXQUFVOztvRUFBVTtvRUFBR2EsT0FBT25ELElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBbEJ6Q21ELE9BQU9qRCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJ2QztHQXRJd0JLOztRQUNRSCx1REFBYUE7OztLQURyQkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL0ltbXVuaXphdGlvblRhYmxlLmpzP2VkMmIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGVvcGxlID0gW1xuICB7XG4gICAgbmFtZTogXCJMaW5kc2F5IFdhbHRvblwiLFxuICAgIHRpdGxlOiBcIkZyb250LWVuZCBEZXZlbG9wZXJcIixcbiAgICBlbWFpbDogXCJsaW5kc2F5LndhbHRvbkBleGFtcGxlLmNvbVwiLFxuICAgIHJvbGU6IFwiTWVtYmVyXCIsXG4gIH0sXG4gIC8vIE1vcmUgcGVvcGxlLi4uXG5dO1xuaW1wb3J0IHVzZUFwcENvbnRleHQgZnJvbSBcIi4uL3Nlc3Npb25NYW5hZ2VyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltbXVuaXphdGlvblRhYmxlKCkge1xuICBjb25zdCB7IGhhc2hJRCwgc2V0SGFzaElEIH0gPSB1c2VBcHBDb250ZXh0KCk7XG4gIGNvbnN0IFtpbW11bml6YXRpb25zLCBzZXRJbW11bml6YXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG5cbiAgLy8gRmV0Y2ggaW1tdW5pemF0aW9ucyBmcm9tIHRoZSBiYWNrZW5kXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVJWRVJfVVJMfS9nZXQtaW1tdW5pemF0aW9ucy8ke2hhc2hJRH1gKTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRJbW11bml6YXRpb25zKGRhdGEpO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbaGFzaElEXSk7XG5cbi8vIFVwZGF0ZSBpbW11bml6YXRpb25cbmNvbnN0IHVwZGF0ZUltbXVuaXphdGlvbiA9IGFzeW5jIChpbW11bml6YXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NFUlZFUl9VUkx9L3VwZGF0ZS1pbW11bml6YXRpb24vJHtpbW11bml6YXRpb24uX2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW1tdW5pemF0aW9uKSxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgc2V0SW1tdW5pemF0aW9ucyhkYXRhKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICB9XG59O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpmbGV4IHNtOml0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmZsZXgtYXV0b1wiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgVXNlcnNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1zbSB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICBBIGxpc3Qgb2YgYWxsIHRoZSB1c2VycyBpbiB5b3VyIGFjY291bnQgaW5jbHVkaW5nIHRoZWlyIG5hbWUsIHRpdGxlLFxuICAgICAgICAgICAgZW1haWwgYW5kIHJvbGUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IHNtOm1sLTE2IHNtOm10LTAgc206ZmxleC1ub25lXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayByb3VuZGVkLW1kIGJnLWluZGlnby02MDAgcHgtMyBweS0yIHRleHQtY2VudGVyIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCB1c2VyXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxvdy1yb290XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW14LTQgLW15LTIgb3ZlcmZsb3cteC1hdXRvIHNtOi1teC02IGxnOi1teC04XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgbWluLXctZnVsbCBweS0yIGFsaWduLW1pZGRsZSBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMy41IHBsLTQgcHItMyB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgc206cGwtM1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE5hbWVcbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU9XCJjb2xcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0zIHB5LTMuNSB0ZXh0LWxlZnQgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBUaXRsZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aFxuICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcHktMy41IHRleHQtbGVmdCB0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTkwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtMyBweS0zLjUgdGV4dC1sZWZ0IHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktOTAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgUm9sZVxuICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTMuNSBwbC0zIHByLTQgc206cHItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+RWRpdDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAge3Blb3BsZS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17cGVyc29uLmVtYWlsfSBjbGFzc05hbWU9XCJldmVuOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB5LTQgcGwtNCBwci0zIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBzbTpwbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtMyBweS00IHRleHQtc20gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtwZXJzb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC0zIHB5LTQgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIndoaXRlc3BhY2Utbm93cmFwIHB4LTMgcHktNCB0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cGVyc29uLnJvbGV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3aGl0ZXNwYWNlLW5vd3JhcCBweS00IHBsLTMgcHItNCB0ZXh0LXJpZ2h0IHRleHQtc20gZm9udC1tZWRpdW0gc206cHItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC1pbmRpZ28tOTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBFZGl0PHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPiwge3BlcnNvbi5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJwZW9wbGUiLCJuYW1lIiwidGl0bGUiLCJlbWFpbCIsInJvbGUiLCJ1c2VBcHBDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbW11bml6YXRpb25UYWJsZSIsImhhc2hJRCIsInNldEhhc2hJRCIsImltbXVuaXphdGlvbnMiLCJzZXRJbW11bml6YXRpb25zIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VSVkVSX1VSTCIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVyciIsIm1lc3NhZ2UiLCJ1cGRhdGVJbW11bml6YXRpb24iLCJpbW11bml6YXRpb24iLCJfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJidXR0b24iLCJ0eXBlIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInNwYW4iLCJ0Ym9keSIsIm1hcCIsInBlcnNvbiIsInRkIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ImmunizationTable.js\n"));

/***/ })

});
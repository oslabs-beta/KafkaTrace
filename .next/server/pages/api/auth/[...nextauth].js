"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./model/Schema.js":
/*!*************************!*\
  !*** ./model/Schema.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: String,\n    email: String,\n    password: String\n});\nconst Users = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.user || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"user\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Users);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9TY2hlbWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLFVBQVUsR0FBRyxJQUFJSCw0Q0FBTSxDQUFDO0lBQzVCSSxRQUFRLEVBQUVDLE1BQU07SUFDaEJDLEtBQUssRUFBRUQsTUFBTTtJQUNiRSxRQUFRLEVBQUVGLE1BQU07Q0FDakIsQ0FBQztBQUVGLE1BQU1HLEtBQUssR0FBR04saURBQVcsSUFBSUQsK0NBQUssQ0FBQyxNQUFNLEVBQUVFLFVBQVUsQ0FBQztBQUV0RCxpRUFBZUssS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aGFwcC8uL21vZGVsL1NjaGVtYS5qcz9hNmM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYSwgbW9kZWwsIG1vZGVscyB9IGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VybmFtZTogU3RyaW5nLFxuICBlbWFpbDogU3RyaW5nLFxuICBwYXNzd29yZDogU3RyaW5nLFxufSk7XG5cbmNvbnN0IFVzZXJzID0gbW9kZWxzLnVzZXIgfHwgbW9kZWwoJ3VzZXInLCB1c2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7XG4iXSwibmFtZXMiOlsiU2NoZW1hIiwibW9kZWwiLCJtb2RlbHMiLCJ1c2VyU2NoZW1hIiwidXNlcm5hbWUiLCJTdHJpbmciLCJlbWFpbCIsInBhc3N3b3JkIiwiVXNlcnMiLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./model/Schema.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _model_Schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/Schema */ \"(api)/./model/Schema.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n// import connectMongo from '../../database/conn';\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        // Google Provider\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            async authorize (credentials, req) {\n                connectMongo().catch((error)=>{\n                    error: \"Connection Failed...!\";\n                });\n                // check user existance\n                const result = await _model_Schema__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!result) {\n                    throw new Error(\"No user Found with Email Please Sign Up...!\");\n                }\n                // compare()\n                const checkPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials.password, result.password);\n                // incorrect password\n                if (!checkPassword || result.email !== credentials.email) {\n                    throw new Error(\"Username or Password doesn't match\");\n                }\n                return result;\n            }\n        }), \n    ],\n    secret: \"XH6bp/TkLvnUkQiPDEZNyHc0CV+VV5RL/n+HdVHoHN0=\",\n    session: {\n        strategy: \"jwt\"\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUNVO0FBQ2xFLGtEQUFrRDtBQUNoQjtBQUNDO0FBRW5DLGlFQUFlQSxnREFBUSxDQUFDO0lBQ3RCTSxTQUFTLEVBQUU7UUFDVCxrQkFBa0I7UUFDbEJMLGlFQUFjLENBQUM7WUFDYk0sUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csYUFBYTtTQUN4QyxDQUFDO1FBQ0ZWLGlFQUFjLENBQUM7WUFDYkssUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssYUFBYTtTQUN4QyxDQUFDO1FBQ0ZYLHNFQUFtQixDQUFDO1lBQ2xCWSxJQUFJLEVBQUUsYUFBYTtZQUNuQixNQUFNQyxTQUFTLEVBQUNDLFdBQVcsRUFBRUMsR0FBRyxFQUFFO2dCQUNoQ0MsWUFBWSxFQUFFLENBQUNDLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUs7b0JBQzlCQSxLQUFLLEVBQUUsdUJBQXVCLENBQUM7aUJBQ2hDLENBQUMsQ0FBQztnQkFFSCx1QkFBdUI7Z0JBQ3ZCLE1BQU1DLE1BQU0sR0FBRyxNQUFNbEIsNkRBQWEsQ0FBQztvQkFBRW9CLEtBQUssRUFBRVAsV0FBVyxDQUFDTyxLQUFLO2lCQUFFLENBQUM7Z0JBQ2hFLElBQUksQ0FBQ0YsTUFBTSxFQUFFO29CQUNYLE1BQU0sSUFBSUcsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7aUJBQ2hFO2dCQUVELFlBQVk7Z0JBQ1osTUFBTUMsYUFBYSxHQUFHLE1BQU1yQixpREFBTyxDQUNqQ1ksV0FBVyxDQUFDVSxRQUFRLEVBQ3BCTCxNQUFNLENBQUNLLFFBQVEsQ0FDaEI7Z0JBRUQscUJBQXFCO2dCQUNyQixJQUFJLENBQUNELGFBQWEsSUFBSUosTUFBTSxDQUFDRSxLQUFLLEtBQUtQLFdBQVcsQ0FBQ08sS0FBSyxFQUFFO29CQUN4RCxNQUFNLElBQUlDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO2lCQUN2RDtnQkFFRCxPQUFPSCxNQUFNLENBQUM7YUFDZjtTQUNGLENBQUM7S0FDSDtJQUNETSxNQUFNLEVBQUUsOENBQThDO0lBQ3REQyxPQUFPLEVBQUU7UUFDUEMsUUFBUSxFQUFFLEtBQUs7S0FDaEI7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoYXBwLy4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NzhhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSc7XG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG4vLyBpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gJy4uLy4uL2RhdGFiYXNlL2Nvbm4nO1xuaW1wb3J0IFVzZXJzIGZyb20gJy9tb2RlbC9TY2hlbWEnO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICAvLyBHb29nbGUgUHJvdmlkZXJcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnQ3JlZGVudGlhbHMnLFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29ubmVjdE1vbmdvKCkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgZXJyb3I6ICdDb25uZWN0aW9uIEZhaWxlZC4uLiEnO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVjayB1c2VyIGV4aXN0YW5jZVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBVc2Vycy5maW5kT25lKHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsIH0pO1xuICAgICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gdXNlciBGb3VuZCB3aXRoIEVtYWlsIFBsZWFzZSBTaWduIFVwLi4uIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29tcGFyZSgpXG4gICAgICAgIGNvbnN0IGNoZWNrUGFzc3dvcmQgPSBhd2FpdCBjb21wYXJlKFxuICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxuICAgICAgICAgIHJlc3VsdC5wYXNzd29yZFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGluY29ycmVjdCBwYXNzd29yZFxuICAgICAgICBpZiAoIWNoZWNrUGFzc3dvcmQgfHwgcmVzdWx0LmVtYWlsICE9PSBjcmVkZW50aWFscy5lbWFpbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVzZXJuYW1lIG9yIFBhc3N3b3JkIGRvZXNuJ3QgbWF0Y2hcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2VjcmV0OiAnWEg2YnAvVGtMdm5Va1FpUERFWk55SGMwQ1YrVlY1UkwvbitIZFZIb0hOMD0nLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlVzZXJzIiwiY29tcGFyZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwiY29ubmVjdE1vbmdvIiwiY2F0Y2giLCJlcnJvciIsInJlc3VsdCIsImZpbmRPbmUiLCJlbWFpbCIsIkVycm9yIiwiY2hlY2tQYXNzd29yZCIsInBhc3N3b3JkIiwic2VjcmV0Iiwic2Vzc2lvbiIsInN0cmF0ZWd5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();
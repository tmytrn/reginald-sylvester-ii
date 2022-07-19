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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\n// create reusable transporter object using the default SMTP transport\n// const transporter = nodemailer.createTransport({\n//   host: \"smtp.office365.com\",\n//   port: 587,\n//   auth: {\n//     user: \"hello@eqoffice.com\",\n//     pass: \"BostonRocks2019!\",\n//   },\n//   tls: {\n//     rejectUnauthorized: false,\n//   },\n// });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    let { name , email , subject , message  } = req.body;\n    // setup email data with unicode symbols\n    let nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n    const transporter = nodemailer.createTransport({\n        port: 465,\n        host: \"smtp.gmail.com\",\n        auth: {\n            user: process.env.MAILER_EMAIL,\n            pass: process.env.MAILER_PASSWORD\n        },\n        secure: true\n    });\n    // console.log(req.body);\n    const mailer = ()=>{\n        let mailBody = {\n            from: email,\n            to: \"tommy@tmytrn.com\",\n            subject: subject,\n            html: message\n        };\n        return new Promise((resolve, reject)=>{\n            transporter.sendMail(mailBody, (error, info)=>error ? reject(error) : resolve(info));\n        });\n    };\n    const mailerRes = await mailer();\n    res.send(mailerRes);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFcEMsc0VBQXNFO0FBQ3RFLG1EQUFtRDtBQUNuRCxnQ0FBZ0M7QUFDaEMsZUFBZTtBQUNmLFlBQVk7QUFDWixrQ0FBa0M7QUFDbEMsZ0NBQWdDO0FBQ2hDLE9BQU87QUFDUCxXQUFXO0FBQ1gsaUNBQWlDO0FBQ2pDLE9BQU87QUFDUCxNQUFNO0FBRU4saUVBQWUsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEdBQUs7SUFDakMsSUFBSSxFQUFFQyxJQUFJLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUUsR0FBR0wsR0FBRyxDQUFDTSxJQUFJO0lBQ2hELHdDQUF3QztJQUV4QyxJQUFJUCxVQUFVLEdBQUdRLG1CQUFPLENBQUMsOEJBQVksQ0FBQztJQUV0QyxNQUFNQyxXQUFXLEdBQUdULFVBQVUsQ0FBQ1UsZUFBZSxDQUFDO1FBQzdDQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCQyxJQUFJLEVBQUU7WUFDSkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsWUFBWTtZQUM5QkMsSUFBSSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZUFBZTtTQUNsQztRQUNEQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFFRix5QkFBeUI7SUFFekIsTUFBTUMsTUFBTSxHQUFHLElBQU07UUFDbkIsSUFBSUMsUUFBUSxHQUFHO1lBQ2JDLElBQUksRUFBRW5CLEtBQUs7WUFDWG9CLEVBQUUsRUFBRSxrQkFBa0I7WUFDdEJuQixPQUFPLEVBQUVBLE9BQU87WUFDaEJvQixJQUFJLEVBQUVuQixPQUFPO1NBQ2Q7UUFDRCxPQUFPLElBQUlvQixPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7WUFDdENuQixXQUFXLENBQUNvQixRQUFRLENBQUNQLFFBQVEsRUFBRSxDQUFDUSxLQUFLLEVBQUVDLElBQUksR0FDekNELEtBQUssR0FBR0YsTUFBTSxDQUFDRSxLQUFLLENBQUMsR0FBR0gsT0FBTyxDQUFDSSxJQUFJLENBQUMsQ0FDdEMsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKO0lBRUQsTUFBTUMsU0FBUyxHQUFHLE1BQU1YLE1BQU0sRUFBRTtJQUNoQ25CLEdBQUcsQ0FBQytCLElBQUksQ0FBQ0QsU0FBUyxDQUFDLENBQUM7Q0FDckIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZ2luYWxkLXN5bHZlc3Rlci1paS8uL3BhZ2VzL2FwaS9jb250YWN0LmpzPzM0OTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5vZGVtYWlsZXIgZnJvbSBcIm5vZGVtYWlsZXJcIjtcblxuLy8gY3JlYXRlIHJldXNhYmxlIHRyYW5zcG9ydGVyIG9iamVjdCB1c2luZyB0aGUgZGVmYXVsdCBTTVRQIHRyYW5zcG9ydFxuLy8gY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4vLyAgIGhvc3Q6IFwic210cC5vZmZpY2UzNjUuY29tXCIsXG4vLyAgIHBvcnQ6IDU4Nyxcbi8vICAgYXV0aDoge1xuLy8gICAgIHVzZXI6IFwiaGVsbG9AZXFvZmZpY2UuY29tXCIsXG4vLyAgICAgcGFzczogXCJCb3N0b25Sb2NrczIwMTkhXCIsXG4vLyAgIH0sXG4vLyAgIHRsczoge1xuLy8gICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4vLyAgIH0sXG4vLyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCB7IG5hbWUsIGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSByZXEuYm9keTtcbiAgLy8gc2V0dXAgZW1haWwgZGF0YSB3aXRoIHVuaWNvZGUgc3ltYm9sc1xuXG4gIGxldCBub2RlbWFpbGVyID0gcmVxdWlyZShcIm5vZGVtYWlsZXJcIik7XG5cbiAgY29uc3QgdHJhbnNwb3J0ZXIgPSBub2RlbWFpbGVyLmNyZWF0ZVRyYW5zcG9ydCh7XG4gICAgcG9ydDogNDY1LFxuICAgIGhvc3Q6IFwic210cC5nbWFpbC5jb21cIixcbiAgICBhdXRoOiB7XG4gICAgICB1c2VyOiBwcm9jZXNzLmVudi5NQUlMRVJfRU1BSUwsXG4gICAgICBwYXNzOiBwcm9jZXNzLmVudi5NQUlMRVJfUEFTU1dPUkQsXG4gICAgfSxcbiAgICBzZWN1cmU6IHRydWUsXG4gIH0pO1xuXG4gIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KTtcblxuICBjb25zdCBtYWlsZXIgPSAoKSA9PiB7XG4gICAgbGV0IG1haWxCb2R5ID0ge1xuICAgICAgZnJvbTogZW1haWwsIC8vIHNlbmRlciBhZGRyZXNzXG4gICAgICB0bzogXCJ0b21teUB0bXl0cm4uY29tXCIsIC8vIGxpc3Qgb2YgcmVjZWl2ZXJzXG4gICAgICBzdWJqZWN0OiBzdWJqZWN0LCAvLyBTdWJqZWN0IGxpbmVcbiAgICAgIGh0bWw6IG1lc3NhZ2UsIC8vIGh0bWwgYm9keVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyYW5zcG9ydGVyLnNlbmRNYWlsKG1haWxCb2R5LCAoZXJyb3IsIGluZm8pID0+XG4gICAgICAgIGVycm9yID8gcmVqZWN0KGVycm9yKSA6IHJlc29sdmUoaW5mbylcbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbWFpbGVyUmVzID0gYXdhaXQgbWFpbGVyKCk7XG4gIHJlcy5zZW5kKG1haWxlclJlcyk7XG59O1xuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJyZXEiLCJyZXMiLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImJvZHkiLCJyZXF1aXJlIiwidHJhbnNwb3J0ZXIiLCJjcmVhdGVUcmFuc3BvcnQiLCJwb3J0IiwiaG9zdCIsImF1dGgiLCJ1c2VyIiwicHJvY2VzcyIsImVudiIsIk1BSUxFUl9FTUFJTCIsInBhc3MiLCJNQUlMRVJfUEFTU1dPUkQiLCJzZWN1cmUiLCJtYWlsZXIiLCJtYWlsQm9keSIsImZyb20iLCJ0byIsImh0bWwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNlbmRNYWlsIiwiZXJyb3IiLCJpbmZvIiwibWFpbGVyUmVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();
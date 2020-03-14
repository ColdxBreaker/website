module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Icons/Icon/Icon.module.css":
/*!***********************************************!*\
  !*** ./components/Icons/Icon/Icon.module.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"IconCSS": "_3E3ArCA6VDbZiPj7pRoFE_"
};

/***/ }),

/***/ "./components/Icons/Icon/Icon.tsx":
/*!****************************************!*\
  !*** ./components/Icons/Icon/Icon.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon.module.css */ "./components/Icons/Icon/Icon.module.css");
/* harmony import */ var _Icon_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Icon_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/chris/Desktop/New Website/components/Icons/Icon/Icon.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Icon = props => {
  return __jsx("a", {
    href: props.href,
    className: _Icon_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.IconCSS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/Icons/Icons.module.css":
/*!*******************************************!*\
  !*** ./components/Icons/Icons.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Icons": "_30CWUFMjmiAO1V09Wdd79k"
};

/***/ }),

/***/ "./components/Icons/Icons.tsx":
/*!************************************!*\
  !*** ./components/Icons/Icons.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_email_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/email.svg */ "./public/email.svg");
/* harmony import */ var _public_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/linkedin.svg */ "./public/linkedin.svg");
/* harmony import */ var _public_github_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/github.svg */ "./public/github.svg");
/* harmony import */ var _Icon_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon/Icon */ "./components/Icons/Icon/Icon.tsx");
/* harmony import */ var _Icons_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icons.module.css */ "./components/Icons/Icons.module.css");
/* harmony import */ var _Icons_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Icons_module_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/chris/Desktop/New Website/components/Icons/Icons.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Icons = () => {
  const icons = [__jsx(_public_github_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_public_linkedin_svg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_public_email_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })];
  const iconLinks = ["https://github.com/hiimchrislim", "https://www.linkedin.com/in/hiimchrislim", "mailto@hello@hiimchrislim.co"];
  const allIcons = icons.map((icon, index) => {
    return __jsx(_Icon_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      href: iconLinks[index],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, icon);
  });
  return __jsx("div", {
    className: _Icons_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.Icons,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, allIcons);
};

/* harmony default export */ __webpack_exports__["default"] = (Icons);

/***/ }),

/***/ "./components/Text/Text.tsx":
/*!**********************************!*\
  !*** ./components/Text/Text.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/chris/Desktop/New Website/components/Text/Text.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


const Text = () => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), "Hi I'm Chris Lim. I'm a Computer Science Student at the University of Toronto!");
};

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./css/Index.module.css":
/*!******************************!*\
  !*** ./css/Index.module.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"frontPage": "AnzctU6viupiIRdXH2u8j"
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Icons_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Icons/Icons */ "./components/Icons/Icons.tsx");
/* harmony import */ var _css_Index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/Index.module.css */ "./css/Index.module.css");
/* harmony import */ var _css_Index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Text_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Text/Text */ "./components/Text/Text.tsx");
var _jsxFileName = "/Users/chris/Desktop/New Website/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Index = () => {
  return __jsx("div", {
    className: _css_Index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.frontPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_components_Text_Text__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }));
};

__jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1139521232",
  __self: undefined
}, "@font-face{font-family:'Roboto';font-style:normal;font-weight:400;src:local('Roboto'),local('Roboto-Regular'),url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaHJpcy9EZXNrdG9wL05ldyBXZWJzaXRlL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjbUIsQUFHd0IscUJBQ0gsa0JBQ0YsZ0JBQzZILDJJQUN2RCxpRkFDeEYiLCJmaWxlIjoiL1VzZXJzL2NocmlzL0Rlc2t0b3AvTmV3IFdlYnNpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29ucyBmcm9tIFwiLi4vY29tcG9uZW50cy9JY29ucy9JY29uc1wiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4uL2Nzcy9JbmRleC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0L1RleHRcIjtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mcm9udFBhZ2V9PlxuICAgICAgICAgICAgPFRleHQvPlxuICAgICAgICAgICAgPEljb25zLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG48c3R5bGUganN4IGdsb2JhbD57YFxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IGxvY2FsKCdSb2JvdG8nKSwgbG9jYWwoJ1JvYm90by1SZWd1bGFyJyksIHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvcm9ib3RvL3YyMC9LRk9tQ25xRXU5MkZyMU11NzJ4S0tUVTFLdm56LndvZmYyKSBmb3JtYXQoJ3dvZmYyJyk7XG4gIHVuaWNvZGUtcmFuZ2U6IFUrMDQ2MC0wNTJGLCBVKzFDODAtMUM4OCwgVSsyMEI0LCBVKzJERTAtMkRGRiwgVStBNjQwLUE2OUYsIFUrRkUyRS1GRTJGO1xufVxuYH1cbjwvc3R5bGU+XG5cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/chris/Desktop/New Website/pages/index.tsx */");

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./public/email.svg":
/*!**************************!*\
  !*** ./public/email.svg ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227L0 12 24 0zM9 16.668V24l3.258-4.431L9 16.668z"
});

function SvgEmail(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgEmail);

/***/ }),

/***/ "./public/github.svg":
/*!***************************!*\
  !*** ./public/github.svg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
});

function SvgGithub(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgGithub);

/***/ }),

/***/ "./public/linkedin.svg":
/*!*****************************!*\
  !*** ./public/linkedin.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
});

function SvgLinkedin(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgLinkedin);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chris/Desktop/New Website/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
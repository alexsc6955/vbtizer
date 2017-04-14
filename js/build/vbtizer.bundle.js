/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _plugin = __webpack_require__(1);

var _plugin2 = _interopRequireDefault(_plugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
                                                                                                                                                           * Dropdown Plugin
                                                                                                                                                           */

var Dropdown = function Dropdown(element, options) {
	_classCallCheck(this, Dropdown);

	var $element = $(element);
	var $target = $element.find('.dropdown-menu');

	$(window).on('click', function (event) {

		var eventTarget = $(event.target);
		var dropdownMenu = $element.find('.dropdown-menu');

		if (eventTarget.hasClass('dropdown-toggle') || eventTarget.parents().hasClass('dropdown-toggle')) {
			event.preventDefault();
			$target.toggle();
		} else {
			$target.hide();
		}
	});
};

exports.default = Dropdown;


Dropdown.DEFAULTS = {};

(0, _plugin2.default)('Dropdown', Dropdown);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = plugin;
/*
 * Create a jQuery plugin
 *
 * @param pluginName [string] Plugin name
 * @param className [object] Class of the plugin
 * @param shortHand [bool] Generate a shorthand as $.pluginName
 *
 * @example
 *
 * import plugin from 'plugin';
 *
 * class MyPlugin {
 *     constructor(element, options) {
 *         // My awesome MyPlugin constructor...
 *     }
 *
 *     // Other awesome MyPlugin methods
 * }
 *
 * MyPlugin.DEFAULTS = {};
 *
 * plugin('myPlugin', MyPlugin');
 */
function plugin(pluginName, className) {
  var shortHand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


  var dataName = '__' + pluginName;
  var old = $.fn[pluginName];

  $.fn[pluginName] = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data(dataName);
      var options = $.extend({}, className.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);

      if (!data) {
        $this.data(dataName, data = new className(this, options));
      }

      if (typeof option === 'string') {
        data[option]();
      }
    });
  };

  // - Short hand
  if (shortHand) {
    $[pluginName] = function (options) {
      return $({})[pluginName](options);
    };
  }

  // - No conflict
  $.fn[pluginName].noConflict = function () {
    return $.fn[pluginName] = old;
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dropdown = __webpack_require__(0);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$('.dropdown').Dropdown(); /*!
                            * Vbtizer v-0.8.3
                            * Copyright 2017
                            */

/***/ })
/******/ ]);
//# sourceMappingURL=vbtizer.bundle.js.map
/*!
 Material Components for the web
 Copyright (c) 2016 Google Inc.
 License: Apache-2.0
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["select"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["select"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(26);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _foundation = __webpack_require__(3);

	Object.defineProperty(exports, 'MDCFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_foundation).default;
	  }
	});

	var _component = __webpack_require__(4);

	Object.defineProperty(exports, 'MDCComponent', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_component).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Copyright 2016 Google Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var MDCFoundation = function () {
	  _createClass(MDCFoundation, null, [{
	    key: "cssClasses",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports every
	      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
	      return {};
	    }
	  }, {
	    key: "strings",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
	      return {};
	    }
	  }, {
	    key: "numbers",
	    get: function get() {
	      // Classes extending MDCFoundation should implement this method to return an object which exports all
	      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
	      return {};
	    }
	  }, {
	    key: "defaultAdapter",
	    get: function get() {
	      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
	      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
	      // validation.
	      return {};
	    }
	  }]);

	  function MDCFoundation() {
	    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MDCFoundation);

	    this.adapter_ = adapter;
	  }

	  _createClass(MDCFoundation, [{
	    key: "init",
	    value: function init() {
	      // Subclasses should override this method to perform initialization routines (registering events, etc.)
	    }
	  }, {
	    key: "destroy",
	    value: function destroy() {
	      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
	    }
	  }]);

	  return MDCFoundation;
	}();

	exports.default = MDCFoundation;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *   http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _foundation = __webpack_require__(3);

	var _foundation2 = _interopRequireDefault(_foundation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MDCComponent = function () {
	  _createClass(MDCComponent, null, [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
	      // returns an instantiated component with its root set to that element. Also note that in the cases of
	      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
	      // from getDefaultFoundation().
	      return new MDCComponent(root, new _foundation2.default());
	    }
	  }]);

	  function MDCComponent(root, foundation) {
	    _classCallCheck(this, MDCComponent);

	    this.root_ = root;

	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }

	    this.initialize.apply(this, args);
	    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
	    this.foundation_.init();
	    this.initialSyncWithDOM();
	  }

	  _createClass(MDCComponent, [{
	    key: 'initialize',
	    value: function initialize() /* ...args */{
	      // Subclasses can override this to do any additional setup work that would be considered part of a
	      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
	      // initialized. Any additional arguments besides root and foundation will be passed in here.
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      // Subclasses must override this method to return a properly configured foundation class for the
	      // component.
	      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
	      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
	      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
	      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      // Subclasses may implement this method to release any resources / deregister any listeners they have
	      // attached. An example of this might be deregistering a resize event from the window object.
	      this.foundation_.destroy();
	    }

	    // Wrapper method to add an event listener to the component's root element. This is most useful when
	    // listening for custom events.

	  }, {
	    key: 'listen',
	    value: function listen(evtType, handler) {
	      this.root_.addEventListener(evtType, handler);
	    }

	    // Wrapper method to remove an event listener to the component's root element. This is most useful when
	    // unlistening for custom events.

	  }, {
	    key: 'unlisten',
	    value: function unlisten(evtType, handler) {
	      this.root_.removeEventListener(evtType, handler);
	    }

	    // Fires a cross-browser-compatible custom event from the component root of the given type,
	    // with the given data.

	  }, {
	    key: 'emit',
	    value: function emit(evtType, evtData) {
	      var evt = void 0;
	      if (typeof CustomEvent === 'function') {
	        evt = new CustomEvent(evtType, { detail: evtData });
	      } else {
	        evt = document.createEvent('CustomEvent');
	        evt.initCustomEvent(evtType, false, false, evtData);
	      }

	      this.root_.dispatchEvent(evt);
	    }
	  }]);

	  return MDCComponent;
	}();

	exports.default = MDCComponent;

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _simple = __webpack_require__(20);

	Object.defineProperty(exports, 'MDCSimpleMenu', {
	  enumerable: true,
	  get: function get() {
	    return _simple.MDCSimpleMenu;
	  }
	});
	Object.defineProperty(exports, 'MDCSimpleMenuFoundation', {
	  enumerable: true,
	  get: function get() {
	    return _simple.MDCSimpleMenuFoundation;
	  }
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCSimpleMenu = exports.MDCSimpleMenuFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(21);

	var _foundation2 = _interopRequireDefault(_foundation);

	var _util = __webpack_require__(23);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	exports.MDCSimpleMenuFoundation = _foundation2.default;

	var MDCSimpleMenu = exports.MDCSimpleMenu = function (_MDCComponent) {
	  _inherits(MDCSimpleMenu, _MDCComponent);

	  function MDCSimpleMenu() {
	    _classCallCheck(this, MDCSimpleMenu);

	    return _possibleConstructorReturn(this, (MDCSimpleMenu.__proto__ || Object.getPrototypeOf(MDCSimpleMenu)).apply(this, arguments));
	  }

	  _createClass(MDCSimpleMenu, [{
	    key: 'show',
	    value: function show() {
	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$focusIndex = _ref.focusIndex,
	          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

	      this.foundation_.open({ focusIndex: focusIndex });
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.foundation_.close();
	    }

	    /* Return the item container element inside the component. */

	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

	      return new _foundation2.default({
	        addClass: function addClass(className) {
	          return _this2.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this2.root_.classList.remove(className);
	        },
	        hasClass: function hasClass(className) {
	          return _this2.root_.classList.contains(className);
	        },
	        hasNecessaryDom: function hasNecessaryDom() {
	          return Boolean(_this2.itemsContainer_);
	        },
	        getInnerDimensions: function getInnerDimensions() {
	          var itemsContainer = _this2.itemsContainer_;

	          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
	        },
	        hasAnchor: function hasAnchor() {
	          return _this2.root_.parentElement && _this2.root_.parentElement.classList.contains('mdc-menu-anchor');
	        },
	        getAnchorDimensions: function getAnchorDimensions() {
	          return _this2.root_.parentElement.getBoundingClientRect();
	        },
	        getWindowDimensions: function getWindowDimensions() {
	          return { width: window.innerWidth, height: window.innerHeight };
	        },
	        setScale: function setScale(x, y) {
	          _this2.root_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
	        },
	        setInnerScale: function setInnerScale(x, y) {
	          _this2.itemsContainer_.style[(0, _util.getTransformPropertyName)(window)] = 'scale(' + x + ', ' + y + ')';
	        },
	        getNumberOfItems: function getNumberOfItems() {
	          return _this2.items.length;
	        },
	        registerInteractionHandler: function registerInteractionHandler(type, handler) {
	          return _this2.root_.addEventListener(type, handler);
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
	          return _this2.root_.removeEventListener(type, handler);
	        },
	        registerDocumentClickHandler: function registerDocumentClickHandler(handler) {
	          return document.addEventListener('click', handler);
	        },
	        deregisterDocumentClickHandler: function deregisterDocumentClickHandler(handler) {
	          return document.removeEventListener('click', handler);
	        },
	        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
	          var _items$index = _this2.items[index],
	              top = _items$index.offsetTop,
	              height = _items$index.offsetHeight;

	          return { top: top, height: height };
	        },
	        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
	          return _this2.items[index].style.setProperty('transition-delay', value);
	        },
	        getIndexForEventTarget: function getIndexForEventTarget(target) {
	          return _this2.items.indexOf(target);
	        },
	        notifySelected: function notifySelected(evtData) {
	          return _this2.emit('MDCSimpleMenu:selected', {
	            index: evtData.index,
	            item: _this2.items[evtData.index]
	          });
	        },
	        notifyCancel: function notifyCancel() {
	          return _this2.emit('MDCSimpleMenu:cancel');
	        },
	        saveFocus: function saveFocus() {
	          _this2.previousFocus_ = document.activeElement;
	        },
	        restoreFocus: function restoreFocus() {
	          if (_this2.previousFocus_) {
	            _this2.previousFocus_.focus();
	          }
	        },
	        isFocused: function isFocused() {
	          return document.activeElement === _this2.root_;
	        },
	        focus: function focus() {
	          return _this2.root_.focus();
	        },
	        getFocusedItemIndex: function getFocusedItemIndex() {
	          return _this2.items.indexOf(document.activeElement);
	        },
	        focusItemAtIndex: function focusItemAtIndex(index) {
	          return _this2.items[index].focus();
	        },
	        isRtl: function isRtl() {
	          return getComputedStyle(_this2.root_).getPropertyValue('direction') === 'rtl';
	        },
	        setTransformOrigin: function setTransformOrigin(origin) {
	          _this2.root_.style[(0, _util.getTransformPropertyName)(window) + '-origin'] = origin;
	        },
	        setPosition: function setPosition(position) {
	          _this2.root_.style.left = 'left' in position ? position.left : null;
	          _this2.root_.style.right = 'right' in position ? position.right : null;
	          _this2.root_.style.top = 'top' in position ? position.top : null;
	          _this2.root_.style.bottom = 'bottom' in position ? position.bottom : null;
	        }
	      });
	    }
	  }, {
	    key: 'open',
	    get: function get() {
	      return this.foundation_.isOpen();
	    },
	    set: function set(value) {
	      if (value) {
	        this.foundation_.open();
	      } else {
	        this.foundation_.close();
	      }
	    }
	  }, {
	    key: 'itemsContainer_',
	    get: function get() {
	      return this.root_.querySelector(_foundation2.default.strings.ITEMS_SELECTOR);
	    }

	    /* Return the items within the menu. Note that this only contains the set of elements within
	     * the items container that are proper list items, and not supplemental / presentational DOM
	     * elements.
	     */

	  }, {
	    key: 'items',
	    get: function get() {
	      var itemsContainer = this.itemsContainer_;

	      return [].slice.call(itemsContainer.querySelectorAll('.mdc-list-item[role]'));
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCSimpleMenu(root);
	    }
	  }]);

	  return MDCSimpleMenu;
	}(_base.MDCComponent);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _constants = __webpack_require__(22);

	var _util = __webpack_require__(23);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var MDCSimpleMenuFoundation = function (_MDCFoundation) {
	  _inherits(MDCSimpleMenuFoundation, _MDCFoundation);

	  _createClass(MDCSimpleMenuFoundation, null, [{
	    key: 'cssClasses',
	    get: function get() {
	      return _constants.cssClasses;
	    }
	  }, {
	    key: 'strings',
	    get: function get() {
	      return _constants.strings;
	    }
	  }, {
	    key: 'numbers',
	    get: function get() {
	      return _constants.numbers;
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        hasClass: function hasClass() /* className: string */{},
	        hasNecessaryDom: function hasNecessaryDom() {
	          return (/* boolean */false
	          );
	        },
	        getInnerDimensions: function getInnerDimensions() {
	          return (/* { width: number, height: number } */{}
	          );
	        },
	        hasAnchor: function hasAnchor() {
	          return (/* boolean */false
	          );
	        },
	        getAnchorDimensions: function getAnchorDimensions() {
	          return (
	            /* { width: number, height: number, top: number, right: number, bottom: number, left: number } */{}
	          );
	        },
	        getWindowDimensions: function getWindowDimensions() {
	          return (/* { width: number, height: number } */{}
	          );
	        },
	        setScale: function setScale() /* x: number, y: number */{},
	        setInnerScale: function setInnerScale() /* x: number, y: number */{},
	        getNumberOfItems: function getNumberOfItems() {
	          return (/* number */0
	          );
	        },
	        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
	        registerDocumentClickHandler: function registerDocumentClickHandler() /* handler: EventListener */{},
	        deregisterDocumentClickHandler: function deregisterDocumentClickHandler() /* handler: EventListener */{},
	        getYParamsForItemAtIndex: function getYParamsForItemAtIndex() {
	          return (/* index: number */ /* {top: number, height: number} */{}
	          );
	        },
	        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex() /* index: number, value: string */{},
	        getIndexForEventTarget: function getIndexForEventTarget() {
	          return (/* target: EventTarget */ /* number */0
	          );
	        },
	        notifySelected: function notifySelected() /* evtData: {index: number} */{},
	        notifyCancel: function notifyCancel() {},
	        saveFocus: function saveFocus() {},
	        restoreFocus: function restoreFocus() {},
	        isFocused: function isFocused() {
	          return (/* boolean */false
	          );
	        },
	        focus: function focus() {},
	        getFocusedItemIndex: function getFocusedItemIndex() {
	          return (/* number */-1
	          );
	        },
	        focusItemAtIndex: function focusItemAtIndex() /* index: number */{},
	        isRtl: function isRtl() {
	          return (/* boolean */false
	          );
	        },
	        setTransformOrigin: function setTransformOrigin() /* origin: string */{},
	        setPosition: function setPosition() /* position: { top: string, right: string, bottom: string, left: string } */{}
	      };
	    }
	  }]);

	  function MDCSimpleMenuFoundation(adapter) {
	    _classCallCheck(this, MDCSimpleMenuFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCSimpleMenuFoundation.__proto__ || Object.getPrototypeOf(MDCSimpleMenuFoundation)).call(this, _extends(MDCSimpleMenuFoundation.defaultAdapter, adapter)));

	    _this.clickHandler_ = function (evt) {
	      return _this.handlePossibleSelected_(evt);
	    };
	    _this.keydownHandler_ = function (evt) {
	      return _this.handleKeyboardDown_(evt);
	    };
	    _this.keyupHandler_ = function (evt) {
	      return _this.handleKeyboardUp_(evt);
	    };
	    _this.documentClickHandler_ = function (evt) {
	      _this.adapter_.notifyCancel();
	      _this.close();
	    };
	    _this.isOpen_ = false;
	    _this.startScaleX_ = 0;
	    _this.startScaleY_ = 0;
	    _this.targetScale_ = 1;
	    _this.scaleX_ = 0;
	    _this.scaleY_ = 0;
	    _this.running_ = false;
	    _this.selectedTriggerTimerId_ = 0;
	    _this.animationRequestId_ = 0;
	    return _this;
	  }

	  _createClass(MDCSimpleMenuFoundation, [{
	    key: 'init',
	    value: function init() {
	      var _MDCSimpleMenuFoundat = MDCSimpleMenuFoundation.cssClasses,
	          ROOT = _MDCSimpleMenuFoundat.ROOT,
	          OPEN = _MDCSimpleMenuFoundat.OPEN;


	      if (!this.adapter_.hasClass(ROOT)) {
	        throw new Error(ROOT + ' class required in root element.');
	      }

	      if (!this.adapter_.hasNecessaryDom()) {
	        throw new Error('Required DOM nodes missing in ' + ROOT + ' component.');
	      }

	      if (this.adapter_.hasClass(OPEN)) {
	        this.isOpen_ = true;
	      }

	      this.adapter_.registerInteractionHandler('click', this.clickHandler_);
	      this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
	      this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      clearTimeout(this.selectedTriggerTimerId_);
	      // Cancel any currently running animations.
	      cancelAnimationFrame(this.animationRequestId_);
	      this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
	      this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
	      this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
	      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
	    }

	    // Calculate transition delays for individual menu items, so that they fade in one at a time.

	  }, {
	    key: 'applyTransitionDelays_',
	    value: function applyTransitionDelays_() {
	      var _MDCSimpleMenuFoundat2 = MDCSimpleMenuFoundation.cssClasses,
	          BOTTOM_LEFT = _MDCSimpleMenuFoundat2.BOTTOM_LEFT,
	          BOTTOM_RIGHT = _MDCSimpleMenuFoundat2.BOTTOM_RIGHT;

	      var numItems = this.adapter_.getNumberOfItems();
	      var height = this.dimensions_.height;

	      var transitionDuration = MDCSimpleMenuFoundation.numbers.TRANSITION_DURATION_MS / 1000;
	      var start = MDCSimpleMenuFoundation.numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

	      for (var index = 0; index < numItems; index++) {
	        var _adapter_$getYParamsF = this.adapter_.getYParamsForItemAtIndex(index),
	            itemTop = _adapter_$getYParamsF.top,
	            itemHeight = _adapter_$getYParamsF.height;

	        this.itemHeight_ = itemHeight;
	        var itemDelayFraction = itemTop / height;
	        if (this.adapter_.hasClass(BOTTOM_LEFT) || this.adapter_.hasClass(BOTTOM_RIGHT)) {
	          itemDelayFraction = (height - itemTop - itemHeight) / height;
	        }
	        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
	        // Use toFixed() here to normalize CSS unit precision across browsers
	        this.adapter_.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
	      }
	    }

	    // Remove transition delays from menu items.

	  }, {
	    key: 'removeTransitionDelays_',
	    value: function removeTransitionDelays_() {
	      var numItems = this.adapter_.getNumberOfItems();
	      for (var i = 0; i < numItems; i++) {
	        this.adapter_.setTransitionDelayForItemAtIndex(i, null);
	      }
	    }

	    // Animate menu opening or closing.

	  }, {
	    key: 'animationLoop_',
	    value: function animationLoop_() {
	      var _this2 = this;

	      var time = window.performance.now();
	      var _MDCSimpleMenuFoundat3 = MDCSimpleMenuFoundation.numbers,
	          TRANSITION_DURATION_MS = _MDCSimpleMenuFoundat3.TRANSITION_DURATION_MS,
	          TRANSITION_X1 = _MDCSimpleMenuFoundat3.TRANSITION_X1,
	          TRANSITION_Y1 = _MDCSimpleMenuFoundat3.TRANSITION_Y1,
	          TRANSITION_X2 = _MDCSimpleMenuFoundat3.TRANSITION_X2,
	          TRANSITION_Y2 = _MDCSimpleMenuFoundat3.TRANSITION_Y2,
	          TRANSITION_SCALE_ADJUSTMENT_X = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_X,
	          TRANSITION_SCALE_ADJUSTMENT_Y = _MDCSimpleMenuFoundat3.TRANSITION_SCALE_ADJUSTMENT_Y;

	      var currentTime = (0, _util.clamp)((time - this.startTime_) / TRANSITION_DURATION_MS);

	      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
	      var currentTimeX = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
	      // No time-shifting on the Y axis when closing.
	      var currentTimeY = currentTime;

	      var startScaleY = this.startScaleY_;
	      if (this.targetScale_ === 1) {
	        // Start with the menu at the height of a single item.
	        if (this.itemHeight_) {
	          startScaleY = Math.max(this.itemHeight_ / this.dimensions_.height, startScaleY);
	        }
	        // X axis moves faster, so time-shift forward.
	        currentTimeX = (0, _util.clamp)(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
	        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
	        currentTimeY = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
	      }

	      // Apply cubic bezier easing independently to each axis.
	      var easeX = (0, _util.bezierProgress)(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
	      var easeY = (0, _util.bezierProgress)(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

	      // Calculate the scales to apply to the outer container and inner container.
	      this.scaleX_ = this.startScaleX_ + (this.targetScale_ - this.startScaleX_) * easeX;
	      var invScaleX = 1 / (this.scaleX_ === 0 ? 1 : this.scaleX_);
	      this.scaleY_ = startScaleY + (this.targetScale_ - startScaleY) * easeY;
	      var invScaleY = 1 / (this.scaleY_ === 0 ? 1 : this.scaleY_);

	      // Apply scales.
	      this.adapter_.setScale(this.scaleX_, this.scaleY_);
	      this.adapter_.setInnerScale(invScaleX, invScaleY);

	      // Stop animation when we've covered the entire 0 - 1 range of time.
	      if (currentTime < 1) {
	        this.animationRequestId_ = requestAnimationFrame(function () {
	          return _this2.animationLoop_();
	        });
	      } else {
	        this.animationRequestId_ = 0;
	        this.running_ = false;
	        this.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      }
	    }

	    // Starts the open or close animation.

	  }, {
	    key: 'animateMenu_',
	    value: function animateMenu_() {
	      var _this3 = this;

	      this.startTime_ = window.performance.now();
	      this.startScaleX_ = this.scaleX_;
	      this.startScaleY_ = this.scaleY_;

	      this.targetScale_ = this.isOpen_ ? 1 : 0;

	      if (!this.running_) {
	        this.running_ = true;
	        this.animationRequestId_ = requestAnimationFrame(function () {
	          return _this3.animationLoop_();
	        });
	      }
	    }
	  }, {
	    key: 'focusOnOpen_',
	    value: function focusOnOpen_(focusIndex) {
	      if (focusIndex === null) {
	        // First, try focusing the menu.
	        this.adapter_.focus();
	        // If that doesn't work, focus first item instead.
	        if (!this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(0);
	        }
	      } else {
	        this.adapter_.focusItemAtIndex(focusIndex);
	      }
	    }

	    // Handle keys that we want to repeat on hold (tab and arrows).

	  }, {
	    key: 'handleKeyboardDown_',
	    value: function handleKeyboardDown_(evt) {
	      // Do nothing if Alt, Ctrl or Meta are pressed.
	      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
	        return true;
	      }

	      var keyCode = evt.keyCode,
	          key = evt.key,
	          shiftKey = evt.shiftKey;

	      var isTab = key === 'Tab' || keyCode === 9;
	      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
	      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
	      var isSpace = key === 'Space' || keyCode === 32;

	      var focusedItemIndex = this.adapter_.getFocusedItemIndex();
	      var lastItemIndex = this.adapter_.getNumberOfItems() - 1;

	      if (shiftKey && isTab && focusedItemIndex === 0) {
	        this.adapter_.focusItemAtIndex(lastItemIndex);
	        evt.preventDefault();
	        return false;
	      }

	      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
	        this.adapter_.focusItemAtIndex(0);
	        evt.preventDefault();
	        return false;
	      }

	      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
	      if (isArrowUp || isArrowDown || isSpace) {
	        evt.preventDefault();
	      }

	      if (isArrowUp) {
	        if (focusedItemIndex === 0 || this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(lastItemIndex);
	        } else {
	          this.adapter_.focusItemAtIndex(focusedItemIndex - 1);
	        }
	      } else if (isArrowDown) {
	        if (focusedItemIndex === lastItemIndex || this.adapter_.isFocused()) {
	          this.adapter_.focusItemAtIndex(0);
	        } else {
	          this.adapter_.focusItemAtIndex(focusedItemIndex + 1);
	        }
	      }

	      return true;
	    }

	    // Handle keys that we don't want to repeat on hold (Enter, Space, Escape).

	  }, {
	    key: 'handleKeyboardUp_',
	    value: function handleKeyboardUp_(evt) {
	      // Do nothing if Alt, Ctrl or Meta are pressed.
	      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
	        return true;
	      }

	      var keyCode = evt.keyCode,
	          key = evt.key;

	      var isEnter = key === 'Enter' || keyCode === 13;
	      var isSpace = key === 'Space' || keyCode === 32;
	      var isEscape = key === 'Escape' || keyCode === 27;

	      if (isEnter || isSpace) {
	        this.handlePossibleSelected_(evt);
	      }

	      if (isEscape) {
	        this.adapter_.notifyCancel();
	        this.close();
	      }

	      return true;
	    }
	  }, {
	    key: 'handlePossibleSelected_',
	    value: function handlePossibleSelected_(evt) {
	      var _this4 = this;

	      var targetIndex = this.adapter_.getIndexForEventTarget(evt.target);
	      if (targetIndex < 0) {
	        return;
	      }
	      // Debounce multiple selections
	      if (this.selectedTriggerTimerId_) {
	        return;
	      }
	      this.selectedTriggerTimerId_ = setTimeout(function () {
	        _this4.selectedTriggerTimerId_ = 0;
	        _this4.close();
	        _this4.adapter_.notifySelected({ index: targetIndex });
	      }, _constants.numbers.SELECTED_TRIGGER_DELAY);
	    }
	  }, {
	    key: 'autoPosition_',
	    value: function autoPosition_() {
	      var _position;

	      if (!this.adapter_.hasAnchor()) {
	        return;
	      }

	      // Defaults: open from the top left.
	      var vertical = 'top';
	      var horizontal = 'left';

	      var anchor = this.adapter_.getAnchorDimensions();
	      var windowDimensions = this.adapter_.getWindowDimensions();

	      var topOverflow = anchor.top + this.dimensions_.height - windowDimensions.height;
	      var bottomOverflow = this.dimensions_.height - anchor.bottom;
	      var extendsBeyondTopBounds = topOverflow > 0;

	      if (extendsBeyondTopBounds) {
	        if (bottomOverflow < topOverflow) {
	          vertical = 'bottom';
	        }
	      }

	      var leftOverflow = anchor.left + this.dimensions_.width - windowDimensions.width;
	      var rightOverflow = this.dimensions_.width - anchor.right;
	      var extendsBeyondLeftBounds = leftOverflow > 0;
	      var extendsBeyondRightBounds = rightOverflow > 0;

	      if (this.adapter_.isRtl()) {
	        // In RTL, we prefer to open from the right.
	        horizontal = 'right';
	        if (extendsBeyondRightBounds && leftOverflow < rightOverflow) {
	          horizontal = 'left';
	        }
	      } else if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
	        horizontal = 'right';
	      }

	      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

	      this.adapter_.setTransformOrigin(vertical + ' ' + horizontal);
	      this.adapter_.setPosition(position);
	    }

	    // Open the menu.

	  }, {
	    key: 'open',
	    value: function open() {
	      var _this5 = this;

	      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref$focusIndex = _ref.focusIndex,
	          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

	      this.adapter_.saveFocus();
	      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      this.animationRequestId_ = requestAnimationFrame(function () {
	        _this5.dimensions_ = _this5.adapter_.getInnerDimensions();
	        _this5.applyTransitionDelays_();
	        _this5.autoPosition_();
	        _this5.animateMenu_();
	        _this5.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
	        _this5.focusOnOpen_(focusIndex);
	        _this5.adapter_.registerDocumentClickHandler(_this5.documentClickHandler_);
	      });
	      this.isOpen_ = true;
	    }

	    // Close the menu.

	  }, {
	    key: 'close',
	    value: function close() {
	      var _this6 = this;

	      this.adapter_.deregisterDocumentClickHandler(this.documentClickHandler_);
	      this.adapter_.addClass(MDCSimpleMenuFoundation.cssClasses.ANIMATING);
	      requestAnimationFrame(function () {
	        _this6.removeTransitionDelays_();
	        _this6.animateMenu_();
	        _this6.adapter_.removeClass(MDCSimpleMenuFoundation.cssClasses.OPEN);
	      });
	      this.isOpen_ = false;
	      this.adapter_.restoreFocus();
	    }
	  }, {
	    key: 'isOpen',
	    value: function isOpen() {
	      return this.isOpen_;
	    }
	  }]);

	  return MDCSimpleMenuFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCSimpleMenuFoundation;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var ROOT = 'mdc-simple-menu';

	var cssClasses = exports.cssClasses = {
	  ROOT: ROOT,
	  OPEN: ROOT + '--open',
	  ANIMATING: ROOT + '--animating',
	  TOP_RIGHT: ROOT + '--open-from-top-right',
	  BOTTOM_LEFT: ROOT + '--open-from-bottom-left',
	  BOTTOM_RIGHT: ROOT + '--open-from-bottom-right'
	};

	var strings = exports.strings = {
	  ITEMS_SELECTOR: '.' + ROOT + '__items'
	};

	var numbers = exports.numbers = {
	  // Amount of time to wait before triggering a selected event on the menu. Note that this time
	  // will most likely be bumped up once interactive lists are supported to allow for the ripple to
	  // animate before closing the menu
	  SELECTED_TRIGGER_DELAY: 50,
	  // Total duration of the menu animation.
	  TRANSITION_DURATION_MS: 300,
	  // The menu starts its open animation with the X axis at this time value (0 - 1).
	  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
	  // The time value the menu waits until the animation starts on the Y axis (0 - 1).
	  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
	  // The cubic bezier control points for the animation (cubic-bezier(0, 0, 0.2, 1)).
	  TRANSITION_X1: 0,
	  TRANSITION_Y1: 0,
	  TRANSITION_X2: 0.2,
	  TRANSITION_Y2: 1
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getTransformPropertyName = getTransformPropertyName;
	exports.clamp = clamp;
	exports.bezierProgress = bezierProgress;
	/**
	 * Copyright 2016 Google Inc. All Rights Reserved.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	var storedTransformPropertyName_ = void 0;

	// Returns the name of the correct transform property to use on the current browser.
	function getTransformPropertyName(globalObj) {
	  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  if (storedTransformPropertyName_ === undefined || forceRefresh) {
	    var el = globalObj.document.createElement('div');
	    var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
	    storedTransformPropertyName_ = transformPropertyName;
	  }

	  return storedTransformPropertyName_;
	}

	// Clamps a value between the minimum and the maximum, returning the clamped value.
	function clamp(value) {
	  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

	  return Math.min(max, Math.max(min, value));
	}

	// Returns the easing value to apply at time t, for a given cubic bezier curve.
	// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
	// Paramters are as follows:
	// - time: The current time in the animation, scaled between 0 and 1.
	// - x1: The x value of control point P1.
	// - y1: The y value of control point P1.
	// - x2: The x value of control point P2.
	// - y2: The y value of control point P2.
	function bezierProgress(time, x1, y1, x2, y2) {
	  return getBezierCoordinate_(solvePositionFromXValue_(time, x1, x2), y1, y2);
	}

	// Compute a single coordinate at a position point between 0 and 1.
	// c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
	// Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
	// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
	function getBezierCoordinate_(t, c1, c2) {
	  // Special case start and end.
	  if (t === 0 || t === 1) {
	    return t;
	  }

	  // Step one - from 4 points to 3
	  var ic0 = t * c1;
	  var ic1 = c1 + t * (c2 - c1);
	  var ic2 = c2 + t * (1 - c2);

	  // Step two - from 3 points to 2
	  ic0 += t * (ic1 - ic0);
	  ic1 += t * (ic2 - ic1);

	  // Final step - last point
	  return ic0 + t * (ic1 - ic0);
	}

	// Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
	// Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
	function solvePositionFromXValue_(xVal, x1, x2) {
	  var EPSILON = 1e-6;
	  var MAX_ITERATIONS = 8;

	  if (xVal <= 0) {
	    return 0;
	  } else if (xVal >= 1) {
	    return 1;
	  }

	  // Initial estimate of t using linear interpolation.
	  var t = xVal;

	  // Try gradient descent to solve for t. If it works, it is very fast.
	  var tMin = 0;
	  var tMax = 1;
	  var value = 0;
	  for (var i = 0; i < MAX_ITERATIONS; i++) {
	    value = getBezierCoordinate_(t, x1, x2);
	    var derivative = (getBezierCoordinate_(t + EPSILON, x1, x2) - value) / EPSILON;
	    if (Math.abs(value - xVal) < EPSILON) {
	      return t;
	    } else if (Math.abs(derivative) < EPSILON) {
	      break;
	    } else {
	      if (value < xVal) {
	        tMin = t;
	      } else {
	        tMax = t;
	      }
	      t -= (value - xVal) / derivative;
	    }
	  }

	  // If the gradient descent got stuck in a local minimum, e.g. because
	  // the derivative was close to 0, use a Dichotomy refinement instead.
	  // We limit the number of interations to 8.
	  for (var _i = 0; Math.abs(value - xVal) > EPSILON && _i < MAX_ITERATIONS; _i++) {
	    if (value < xVal) {
	      tMin = t;
	      t = (t + tMax) / 2;
	    } else {
	      tMax = t;
	      t = (t + tMin) / 2;
	    }
	    value = getBezierCoordinate_(t, x1, x2);
	  }
	  return t;
	}

/***/ },
/* 24 */,
/* 25 */,
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCSelect = exports.MDCSelectFoundation = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _menu = __webpack_require__(19);

	var _foundation = __webpack_require__(27);

	var _foundation2 = _interopRequireDefault(_foundation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	exports.MDCSelectFoundation = _foundation2.default;

	var MDCSelect = exports.MDCSelect = function (_MDCComponent) {
	  _inherits(MDCSelect, _MDCComponent);

	  function MDCSelect() {
	    _classCallCheck(this, MDCSelect);

	    return _possibleConstructorReturn(this, (MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).apply(this, arguments));
	  }

	  _createClass(MDCSelect, [{
	    key: 'item',
	    value: function item(index) {
	      return this.options[index] || null;
	    }
	  }, {
	    key: 'nameditem',
	    value: function nameditem(key) {
	      // NOTE: IE11 precludes us from using Array.prototype.find
	      for (var i = 0, options = this.options, option; option = options[i]; i++) {
	        if (option.id === key || option.getAttribute('name') === key) {
	          return option;
	        }
	      }
	      return null;
	    }
	  }, {
	    key: 'initialize',
	    value: function initialize() {
	      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
	        return new _menu.MDCSimpleMenu(el);
	      };

	      this.menuEl_ = this.root_.querySelector('.mdc-select__menu');
	      this.menu_ = menuFactory(this.menuEl_);
	      this.selectedText_ = this.root_.querySelector('.mdc-select__selected-text');
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

	      return new _foundation2.default({
	        addClass: function addClass(className) {
	          return _this2.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this2.root_.classList.remove(className);
	        },
	        setAttr: function setAttr(attr, value) {
	          return _this2.root_.setAttribute(attr, value);
	        },
	        rmAttr: function rmAttr(attr, value) {
	          return _this2.root_.removeAttribute(attr, value);
	        },
	        computeBoundingRect: function computeBoundingRect() {
	          return _this2.root_.getBoundingClientRect();
	        },
	        registerInteractionHandler: function registerInteractionHandler(type, handler) {
	          return _this2.root_.addEventListener(type, handler);
	        },
	        deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
	          return _this2.root_.removeEventListener(type, handler);
	        },
	        focus: function focus() {
	          return _this2.root_.focus();
	        },
	        makeTabbable: function makeTabbable() {
	          _this2.root_.tabIndex = 0;
	        },
	        makeUntabbable: function makeUntabbable() {
	          _this2.root_.tabIndex = -1;
	        },
	        getComputedStyleValue: function getComputedStyleValue(prop) {
	          return window.getComputedStyle(_this2.root_).getPropertyValue(prop);
	        },
	        setStyle: function setStyle(propertyName, value) {
	          return _this2.root_.style.setProperty(propertyName, value);
	        },
	        create2dRenderingContext: function create2dRenderingContext() {
	          return document.createElement('canvas').getContext('2d');
	        },
	        setMenuElStyle: function setMenuElStyle(propertyName, value) {
	          return _this2.menuEl_.style.setProperty(propertyName, value);
	        },
	        setMenuElAttr: function setMenuElAttr(attr, value) {
	          return _this2.menuEl_.setAttribute(attr, value);
	        },
	        rmMenuElAttr: function rmMenuElAttr(attr) {
	          return _this2.menuEl_.removeAttribute(attr);
	        },
	        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
	          return _this2.menuEl_.offsetHeight;
	        },
	        openMenu: function openMenu(focusIndex) {
	          return _this2.menu_.show({ focusIndex: focusIndex });
	        },
	        isMenuOpen: function isMenuOpen() {
	          return _this2.menu_.open;
	        },
	        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
	          _this2.selectedText_.textContent = selectedTextContent;
	        },
	        getNumberOfOptions: function getNumberOfOptions() {
	          return _this2.options.length;
	        },
	        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
	          return _this2.options[index].textContent;
	        },
	        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
	          return _this2.options[index].setAttribute(attr, value);
	        },
	        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
	          return _this2.options[index].removeAttribute(attr);
	        },
	        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex(index) {
	          return _this2.options[index].offsetTop;
	        },
	        registerMenuInteractionHandler: function registerMenuInteractionHandler(type, handler) {
	          return _this2.menu_.listen(type, handler);
	        },
	        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler(type, handler) {
	          return _this2.menu_.unlisten(type, handler);
	        },
	        notifyChange: function notifyChange() {
	          return _this2.emit('MDCSelect:change', _this2);
	        },
	        getWindowInnerHeight: function getWindowInnerHeight() {
	          return window.innerHeight;
	        }
	      });
	    }
	  }, {
	    key: 'initialSyncWithDOM',
	    value: function initialSyncWithDOM() {
	      var selectedOption = this.selectedOptions[0];
	      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
	      if (idx >= 0) {
	        this.selectedIndex = idx;
	      }

	      if (this.root_.getAttribute('aria-disabled') === 'true') {
	        this.disabled = true;
	      }
	    }
	  }, {
	    key: 'options',
	    get: function get() {
	      return this.menu_.items;
	    }
	  }, {
	    key: 'selectedOptions',
	    get: function get() {
	      return this.root_.querySelectorAll('[aria-selected]');
	    }
	  }, {
	    key: 'selectedIndex',
	    get: function get() {
	      return this.foundation_.getSelectedIndex();
	    },
	    set: function set(selectedIndex) {
	      this.foundation_.setSelectedIndex(selectedIndex);
	    }
	  }, {
	    key: 'disabled',
	    get: function get() {
	      return this.foundation_.isDisabled();
	    },
	    set: function set(disabled) {
	      this.foundation_.setDisabled(disabled);
	    }
	  }], [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCSelect(root);
	    }
	  }]);

	  return MDCSelect;
	}(_base.MDCComponent);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc. All Rights Reserved.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed under the Apache License, Version 2.0 (the "License");
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * you may not use this file except in compliance with the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * You may obtain a copy of the License at
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *      http://www.apache.org/licenses/LICENSE-2.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing, software
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed under the License is distributed on an "AS IS" BASIS,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * See the License for the specific language governing permissions and
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * limitations under the License.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var ROOT = 'mdc-select';
	var OPENER_KEYS = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

	var MDCSelectFoundation = function (_MDCFoundation) {
	  _inherits(MDCSelectFoundation, _MDCFoundation);

	  _createClass(MDCSelectFoundation, null, [{
	    key: 'cssClasses',
	    get: function get() {
	      return {
	        ROOT: ROOT,
	        OPEN: ROOT + '--open',
	        DISABLED: ROOT + '--disabled'
	      };
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        setAttr: function setAttr() /* attr: string, value: string */{},
	        rmAttr: function rmAttr() /* attr: string */{},
	        computeBoundingRect: function computeBoundingRect() {
	          return (/* {left: number, top: number} */{ left: 0, top: 0 }
	          );
	        },
	        registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
	        deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
	        focus: function focus() {},
	        makeTabbable: function makeTabbable() {},
	        makeUntabbable: function makeUntabbable() {},
	        getComputedStyleValue: function getComputedStyleValue() {
	          return (/* propertyName: string */ /* string */''
	          );
	        },
	        setStyle: function setStyle() /* propertyName: string, value: string */{},
	        create2dRenderingContext: function create2dRenderingContext() {
	          return (/* {font: string, measureText: (string) => {width: number}} */{
	              font: '',
	              measureText: function measureText() {
	                return { width: 0 };
	              }
	            }
	          );
	        },
	        setMenuElStyle: function setMenuElStyle() /* propertyName: string, value: string */{},
	        setMenuElAttr: function setMenuElAttr() /* attr: string, value: string */{},
	        rmMenuElAttr: function rmMenuElAttr() /* attr: string */{},
	        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
	          return (/* number */0
	          );
	        },
	        openMenu: function openMenu() /* focusIndex: number */{},
	        isMenuOpen: function isMenuOpen() {
	          return (/* boolean */false
	          );
	        },
	        setSelectedTextContent: function setSelectedTextContent() /* textContent: string */{},
	        getNumberOfOptions: function getNumberOfOptions() {
	          return (/* number */0
	          );
	        },
	        getTextForOptionAtIndex: function getTextForOptionAtIndex() {
	          return (/* index: number */ /* string */''
	          );
	        },
	        setAttrForOptionAtIndex: function setAttrForOptionAtIndex() /* index: number, attr: string, value: string */{},
	        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex() /* index: number, attr: string */{},
	        getOffsetTopForOptionAtIndex: function getOffsetTopForOptionAtIndex() {
	          return (/* index: number */ /* number */0
	          );
	        },
	        registerMenuInteractionHandler: function registerMenuInteractionHandler() /* type: string, handler: EventListener */{},
	        deregisterMenuInteractionHandler: function deregisterMenuInteractionHandler() /* type: string, handler: EventListener */{},
	        notifyChange: function notifyChange() {},
	        getWindowInnerHeight: function getWindowInnerHeight() {
	          return (/* number */0
	          );
	        }
	      };
	    }
	  }]);

	  function MDCSelectFoundation(adapter) {
	    _classCallCheck(this, MDCSelectFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

	    _this.ctx_ = null;
	    _this.selectedIndex_ = -1;
	    _this.disabled_ = false;
	    _this.displayHandler_ = function (evt) {
	      evt.preventDefault();
	      if (!_this.adapter_.isMenuOpen()) {
	        _this.open_();
	      }
	    };
	    _this.displayViaKeyboardHandler_ = function (evt) {
	      return _this.handleDisplayViaKeyboard_(evt);
	    };
	    _this.selectionHandler_ = function (_ref) {
	      var detail = _ref.detail;
	      var index = detail.index;

	      _this.close_();
	      if (index !== _this.selectedIndex_) {
	        _this.setSelectedIndex(index);
	        _this.adapter_.notifyChange();
	      }
	    };
	    _this.cancelHandler_ = function () {
	      _this.close_();
	    };
	    return _this;
	  }

	  _createClass(MDCSelectFoundation, [{
	    key: 'init',
	    value: function init() {
	      this.ctx_ = this.adapter_.create2dRenderingContext();
	      this.adapter_.registerInteractionHandler('click', this.displayHandler_);
	      this.adapter_.registerInteractionHandler('keydown', this.displayViaKeyboardHandler_);
	      this.adapter_.registerInteractionHandler('keyup', this.displayViaKeyboardHandler_);
	      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
	      this.adapter_.registerMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
	      this.resize();
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      // Drop reference to context object to prevent potential leaks
	      this.ctx_ = null;
	      this.adapter_.deregisterInteractionHandler('click', this.displayHandler_);
	      this.adapter_.deregisterInteractionHandler('keydown', this.displayViaKeyboardHandler_);
	      this.adapter_.deregisterInteractionHandler('keyup', this.displayViaKeyboardHandler_);
	      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:selected', this.selectionHandler_);
	      this.adapter_.deregisterMenuInteractionHandler('MDCSimpleMenu:cancel', this.cancelHandler_);
	    }
	  }, {
	    key: 'getSelectedIndex',
	    value: function getSelectedIndex() {
	      return this.selectedIndex_;
	    }
	  }, {
	    key: 'setSelectedIndex',
	    value: function setSelectedIndex(index) {
	      var prevSelectedIndex = this.selectedIndex_;
	      if (prevSelectedIndex >= 0) {
	        this.adapter_.rmAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected');
	      }

	      this.selectedIndex_ = index >= 0 && index < this.adapter_.getNumberOfOptions() ? index : -1;
	      var selectedTextContent = '';
	      if (this.selectedIndex_ >= 0) {
	        selectedTextContent = this.adapter_.getTextForOptionAtIndex(this.selectedIndex_).trim();
	        this.adapter_.setAttrForOptionAtIndex(this.selectedIndex_, 'aria-selected', 'true');
	      }
	      this.adapter_.setSelectedTextContent(selectedTextContent);
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
	      return this.disabled_;
	    }
	  }, {
	    key: 'setDisabled',
	    value: function setDisabled(disabled) {
	      var DISABLED = MDCSelectFoundation.cssClasses.DISABLED;

	      this.disabled_ = disabled;
	      if (this.disabled_) {
	        this.adapter_.addClass(DISABLED);
	        this.adapter_.setAttr('aria-disabled', 'true');
	        this.adapter_.makeUntabbable();
	      } else {
	        this.adapter_.removeClass(DISABLED);
	        this.adapter_.rmAttr('aria-disabled');
	        this.adapter_.makeTabbable();
	      }
	    }
	  }, {
	    key: 'resize',
	    value: function resize() {
	      var font = this.adapter_.getComputedStyleValue('font');
	      var letterSpacing = parseFloat(this.adapter_.getComputedStyleValue('letter-spacing'));
	      if (font) {
	        this.ctx_.font = font;
	      } else {
	        var primaryFontFamily = this.adapter_.getComputedStyleValue('font-family').split(',')[0];
	        var fontSize = this.adapter_.getComputedStyleValue('font-size');
	        this.ctx_.font = fontSize + ' ' + primaryFontFamily;
	      }

	      var maxTextLength = 0;
	      for (var i = 0, l = this.adapter_.getNumberOfOptions(); i < l; i++) {
	        var txt = this.adapter_.getTextForOptionAtIndex(i).trim();

	        var _ctx_$measureText = this.ctx_.measureText(txt),
	            width = _ctx_$measureText.width;

	        var addedSpace = letterSpacing * txt.length;
	        maxTextLength = Math.max(maxTextLength, Math.ceil(width + addedSpace));
	      }
	      this.adapter_.setStyle('width', maxTextLength + 'px');
	    }
	  }, {
	    key: 'open_',
	    value: function open_() {
	      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

	      var focusIndex = this.selectedIndex_ < 0 ? 0 : this.selectedIndex_;

	      var _computeMenuStylesFor = this.computeMenuStylesForOpenAtIndex_(focusIndex),
	          left = _computeMenuStylesFor.left,
	          top = _computeMenuStylesFor.top,
	          transformOrigin = _computeMenuStylesFor.transformOrigin;

	      this.adapter_.setMenuElStyle('left', left);
	      this.adapter_.setMenuElStyle('top', top);
	      this.adapter_.setMenuElStyle('transform-origin', transformOrigin);
	      this.adapter_.addClass(OPEN);
	      this.adapter_.openMenu(focusIndex);
	    }
	  }, {
	    key: 'computeMenuStylesForOpenAtIndex_',
	    value: function computeMenuStylesForOpenAtIndex_(index) {
	      var innerHeight = this.adapter_.getWindowInnerHeight();

	      var _adapter_$computeBoun = this.adapter_.computeBoundingRect(),
	          left = _adapter_$computeBoun.left,
	          top = _adapter_$computeBoun.top;

	      this.adapter_.setMenuElAttr('aria-hidden', 'true');
	      this.adapter_.setMenuElStyle('display', 'block');
	      var menuHeight = this.adapter_.getMenuElOffsetHeight();
	      var itemOffsetTop = this.adapter_.getOffsetTopForOptionAtIndex(index);
	      this.adapter_.setMenuElStyle('display', '');
	      this.adapter_.rmMenuElAttr('aria-hidden');

	      var adjustedTop = top - itemOffsetTop;
	      var adjustedHeight = menuHeight - itemOffsetTop;
	      var overflowsTop = adjustedTop < 0;
	      var overflowsBottom = adjustedTop + adjustedHeight > innerHeight;
	      if (overflowsTop) {
	        adjustedTop = 0;
	      } else if (overflowsBottom) {
	        adjustedTop = Math.max(0, adjustedTop - adjustedHeight);
	      }

	      return {
	        left: left + 'px',
	        top: adjustedTop + 'px',
	        transformOrigin: 'center ' + itemOffsetTop + 'px'
	      };
	    }
	  }, {
	    key: 'close_',
	    value: function close_() {
	      var OPEN = MDCSelectFoundation.cssClasses.OPEN;

	      this.adapter_.removeClass(OPEN);
	      this.adapter_.focus();
	    }
	  }, {
	    key: 'handleDisplayViaKeyboard_',
	    value: function handleDisplayViaKeyboard_(evt) {
	      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
	      // global.
	      var EVENT_PHASE_AT_TARGET = 2;
	      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
	        return;
	      }

	      // Prevent pressing space down from scrolling the page
	      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
	      if (isSpaceDown) {
	        evt.preventDefault();
	      }

	      var isOpenerKey = OPENER_KEYS.some(function (_ref2) {
	        var key = _ref2.key,
	            keyCode = _ref2.keyCode,
	            forType = _ref2.forType;

	        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
	      });
	      if (isOpenerKey) {
	        this.displayHandler_(evt);
	      }
	    }
	  }]);

	  return MDCSelectFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCSelectFoundation;

/***/ }
/******/ ])
});
;
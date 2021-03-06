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
		exports["textfield"] = factory();
	else
		root["mdc"] = root["mdc"] || {}, root["mdc"]["textfield"] = factory();
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);


/***/ },

/***/ 2:
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

/***/ 3:
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

/***/ 4:
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

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MDCTextfield = exports.MDCTextfieldFoundation = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(2);

	var _foundation = __webpack_require__(32);

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

	exports.MDCTextfieldFoundation = _foundation2.default;
	var cssClasses = _foundation2.default.cssClasses;

	var MDCTextfield = exports.MDCTextfield = function (_MDCComponent) {
	  _inherits(MDCTextfield, _MDCComponent);

	  _createClass(MDCTextfield, null, [{
	    key: 'attachTo',
	    value: function attachTo(root) {
	      return new MDCTextfield(root);
	    }
	  }]);

	  function MDCTextfield() {
	    var _ref;

	    _classCallCheck(this, MDCTextfield);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var _this = _possibleConstructorReturn(this, (_ref = MDCTextfield.__proto__ || Object.getPrototypeOf(MDCTextfield)).call.apply(_ref, [this].concat(args)));

	    var input = _this.input_;
	    _this.helptextElement = input.hasAttribute('aria-controls') ? document.getElementById(input.getAttribute('aria-controls')) : null;
	    return _this;
	  }

	  _createClass(MDCTextfield, [{
	    key: 'initialSyncWithDom',
	    value: function initialSyncWithDom() {
	      this.disabled = this.input_.disabled;
	    }
	  }, {
	    key: 'getDefaultFoundation',
	    value: function getDefaultFoundation() {
	      var _this2 = this;

	      return new _foundation2.default(_extends({
	        addClass: function addClass(className) {
	          return _this2.root_.classList.add(className);
	        },
	        removeClass: function removeClass(className) {
	          return _this2.root_.classList.remove(className);
	        },
	        addClassToLabel: function addClassToLabel(className) {
	          var label = _this2.label_;
	          if (label) {
	            label.classList.add(className);
	          }
	        },
	        removeClassFromLabel: function removeClassFromLabel(className) {
	          var label = _this2.label_;
	          if (label) {
	            label.classList.remove(className);
	          }
	        }
	      }, this.getInputAdapterMethods_(), this.getHelptextAdapterMethods_()));
	    }
	  }, {
	    key: 'getInputAdapterMethods_',
	    value: function getInputAdapterMethods_() {
	      var _this3 = this;

	      return {
	        registerInputFocusHandler: function registerInputFocusHandler(handler) {
	          return _this3.input_.addEventListener('focus', handler);
	        },
	        registerInputBlurHandler: function registerInputBlurHandler(handler) {
	          return _this3.input_.addEventListener('blur', handler);
	        },
	        deregisterInputFocusHandler: function deregisterInputFocusHandler(handler) {
	          return _this3.input_.removeEventListener('focus', handler);
	        },
	        deregisterInputBlurHandler: function deregisterInputBlurHandler(handler) {
	          return _this3.input_.removeEventListener('blur', handler);
	        },
	        getNativeInput: function getNativeInput() {
	          return _this3.input_;
	        }
	      };
	    }
	  }, {
	    key: 'getHelptextAdapterMethods_',
	    value: function getHelptextAdapterMethods_() {
	      var _this4 = this;

	      return {
	        addClassToHelptext: function addClassToHelptext(className) {
	          if (_this4.helptextElement) {
	            _this4.helptextElement.classList.add(className);
	          }
	        },
	        removeClassFromHelptext: function removeClassFromHelptext(className) {
	          if (_this4.helptextElement) {
	            _this4.helptextElement.classList.remove(className);
	          }
	        },
	        helptextHasClass: function helptextHasClass(className) {
	          if (!_this4.helptextElement) {
	            return false;
	          }
	          return _this4.helptextElement.classList.contains(className);
	        },
	        setHelptextAttr: function setHelptextAttr(name, value) {
	          if (_this4.helptextElement) {
	            _this4.helptextElement.setAttribute(name, value);
	          }
	        },
	        removeHelptextAttr: function removeHelptextAttr(name) {
	          if (_this4.helptextElement) {
	            _this4.helptextElement.removeAttribute(name);
	          }
	        }
	      };
	    }
	  }, {
	    key: 'disabled',
	    get: function get() {
	      return this.foundation_.isDisabled();
	    },
	    set: function set(disabled) {
	      this.foundation_.setDisabled(disabled);
	    }
	  }, {
	    key: 'input_',
	    get: function get() {
	      return this.root_.querySelector('.' + cssClasses.ROOT + '__input');
	    }
	  }, {
	    key: 'label_',
	    get: function get() {
	      return this.root_.querySelector('.' + cssClasses.ROOT + '__label');
	    }
	  }]);

	  return MDCTextfield;
	}(_base.MDCComponent);

/***/ },

/***/ 32:
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

	var ROOT = 'mdc-textfield';

	var MDCTextfieldFoundation = function (_MDCFoundation) {
	  _inherits(MDCTextfieldFoundation, _MDCFoundation);

	  _createClass(MDCTextfieldFoundation, null, [{
	    key: 'cssClasses',
	    get: function get() {
	      return {
	        ROOT: ROOT,
	        UPGRADED: ROOT + '--upgraded',
	        DISABLED: ROOT + '--disabled',
	        FOCUSED: ROOT + '--focused',
	        INVALID: ROOT + '--invalid',
	        HELPTEXT_PERSISTENT: ROOT + '-helptext--persistent',
	        HELPTEXT_VALIDATION_MSG: ROOT + '-helptext--validation-msg',
	        LABEL_FLOAT_ABOVE: ROOT + '__label--float-above'
	      };
	    }
	  }, {
	    key: 'strings',
	    get: function get() {
	      return {
	        ARIA_HIDDEN: 'aria-hidden',
	        ROLE: 'role'
	      };
	    }
	  }, {
	    key: 'defaultAdapter',
	    get: function get() {
	      return {
	        addClass: function addClass() /* className: string */{},
	        removeClass: function removeClass() /* className: string */{},
	        addClassToLabel: function addClassToLabel() /* className: string */{},
	        removeClassFromLabel: function removeClassFromLabel() /* className: string */{},
	        addClassToHelptext: function addClassToHelptext() /* className: string */{},
	        removeClassFromHelptext: function removeClassFromHelptext() /* className: string */{},
	        helptextHasClass: function helptextHasClass() {
	          return (/* className: string */ /* boolean */false
	          );
	        },
	        registerInputFocusHandler: function registerInputFocusHandler() /* handler: EventListener */{},
	        deregisterInputFocusHandler: function deregisterInputFocusHandler() /* handler: EventListener */{},
	        registerInputBlurHandler: function registerInputBlurHandler() /* handler: EventListener */{},
	        deregisterInputBlurHandler: function deregisterInputBlurHandler() /* handler: EventListener */{},
	        setHelptextAttr: function setHelptextAttr() /* name: string, value: string */{},
	        removeHelptextAttr: function removeHelptextAttr() /* name: string, value: string */{},
	        getNativeInput: function getNativeInput() {
	          return (/* HTMLInputElement */{}
	          );
	        }
	      };
	    }
	  }]);

	  function MDCTextfieldFoundation() {
	    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, MDCTextfieldFoundation);

	    var _this = _possibleConstructorReturn(this, (MDCTextfieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextfieldFoundation)).call(this, _extends(MDCTextfieldFoundation.defaultAdapter, adapter)));

	    _this.inputFocusHandler_ = function () {
	      return _this.activateFocus_();
	    };
	    _this.inputBlurHandler_ = function () {
	      return _this.deactivateFocus_();
	    };
	    return _this;
	  }

	  _createClass(MDCTextfieldFoundation, [{
	    key: 'init',
	    value: function init() {
	      this.adapter_.addClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
	      this.adapter_.registerInputFocusHandler(this.inputFocusHandler_);
	      this.adapter_.registerInputBlurHandler(this.inputBlurHandler_);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.adapter_.removeClass(MDCTextfieldFoundation.cssClasses.UPGRADED);
	      this.adapter_.deregisterInputFocusHandler(this.inputFocusHandler_);
	      this.adapter_.deregisterInputBlurHandler(this.inputBlurHandler_);
	    }
	  }, {
	    key: 'activateFocus_',
	    value: function activateFocus_() {
	      var _MDCTextfieldFoundati = MDCTextfieldFoundation.cssClasses,
	          FOCUSED = _MDCTextfieldFoundati.FOCUSED,
	          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati.LABEL_FLOAT_ABOVE;

	      this.adapter_.addClass(FOCUSED);
	      this.adapter_.addClassToLabel(LABEL_FLOAT_ABOVE);
	      this.showHelptext_();
	    }
	  }, {
	    key: 'showHelptext_',
	    value: function showHelptext_() {
	      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

	      this.adapter_.removeHelptextAttr(ARIA_HIDDEN);
	    }
	  }, {
	    key: 'deactivateFocus_',
	    value: function deactivateFocus_() {
	      var _MDCTextfieldFoundati2 = MDCTextfieldFoundation.cssClasses,
	          FOCUSED = _MDCTextfieldFoundati2.FOCUSED,
	          INVALID = _MDCTextfieldFoundati2.INVALID,
	          LABEL_FLOAT_ABOVE = _MDCTextfieldFoundati2.LABEL_FLOAT_ABOVE;

	      var input = this.getNativeInput_();
	      var isValid = input.checkValidity();

	      this.adapter_.removeClass(FOCUSED);
	      if (!input.value) {
	        this.adapter_.removeClassFromLabel(LABEL_FLOAT_ABOVE);
	      }
	      if (isValid) {
	        this.adapter_.removeClass(INVALID);
	      } else {
	        this.adapter_.addClass(INVALID);
	      }
	      this.updateHelptextOnDeactivation_(isValid);
	    }
	  }, {
	    key: 'updateHelptextOnDeactivation_',
	    value: function updateHelptextOnDeactivation_(isValid) {
	      var _MDCTextfieldFoundati3 = MDCTextfieldFoundation.cssClasses,
	          HELPTEXT_PERSISTENT = _MDCTextfieldFoundati3.HELPTEXT_PERSISTENT,
	          HELPTEXT_VALIDATION_MSG = _MDCTextfieldFoundati3.HELPTEXT_VALIDATION_MSG;
	      var ROLE = MDCTextfieldFoundation.strings.ROLE;

	      var helptextIsPersistent = this.adapter_.helptextHasClass(HELPTEXT_PERSISTENT);
	      var helptextIsValidationMsg = this.adapter_.helptextHasClass(HELPTEXT_VALIDATION_MSG);
	      var validationMsgNeedsDisplay = helptextIsValidationMsg && !isValid;

	      if (validationMsgNeedsDisplay) {
	        this.adapter_.setHelptextAttr(ROLE, 'alert');
	      } else {
	        this.adapter_.removeHelptextAttr(ROLE);
	      }

	      if (helptextIsPersistent || validationMsgNeedsDisplay) {
	        return;
	      }
	      this.hideHelptext_();
	    }
	  }, {
	    key: 'hideHelptext_',
	    value: function hideHelptext_() {
	      var ARIA_HIDDEN = MDCTextfieldFoundation.strings.ARIA_HIDDEN;

	      this.adapter_.setHelptextAttr(ARIA_HIDDEN, 'true');
	    }
	  }, {
	    key: 'isDisabled',
	    value: function isDisabled() {
	      return this.getNativeInput_().disabled;
	    }
	  }, {
	    key: 'setDisabled',
	    value: function setDisabled(disabled) {
	      var DISABLED = MDCTextfieldFoundation.cssClasses.DISABLED;

	      this.getNativeInput_().disabled = disabled;
	      if (disabled) {
	        this.adapter_.addClass(DISABLED);
	      } else {
	        this.adapter_.removeClass(DISABLED);
	      }
	    }
	  }, {
	    key: 'getNativeInput_',
	    value: function getNativeInput_() {
	      return this.adapter_.getNativeInput() || {
	        checkValidity: function checkValidity() {
	          return true;
	        },
	        value: '',
	        disabled: false
	      };
	    }
	  }]);

	  return MDCTextfieldFoundation;
	}(_base.MDCFoundation);

	exports.default = MDCTextfieldFoundation;

/***/ }

/******/ })
});
;
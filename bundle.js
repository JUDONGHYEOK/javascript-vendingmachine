/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/api/user.js":
/*!****************************!*\
  !*** ./src/js/api/user.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var baseURL = 'https://immense-spire-44992.herokuapp.com/';
var UserApi = {
  signIn: function () {
    var _signIn = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(email, password) {
      var response, errorMessage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("".concat(baseURL, "login"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: email,
                  password: password
                })
              });

            case 2:
              response = _context.sent;

              if (response.ok) {
                _context.next = 8;
                break;
              }

              _context.next = 6;
              return response.json();

            case 6:
              errorMessage = _context.sent;
              throw Error(errorMessage);

            case 8:
              return _context.abrupt("return", response.json());

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function signIn(_x, _x2) {
      return _signIn.apply(this, arguments);
    }

    return signIn;
  }(),
  signUp: function () {
    var _signUp = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(email, name, password) {
      var data, response, errorMessage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              data = {
                email: email,
                password: password,
                name: name
              };
              _context2.next = 3;
              return fetch("".concat(baseURL, "signup"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });

            case 3:
              response = _context2.sent;

              if (response.ok) {
                _context2.next = 9;
                break;
              }

              _context2.next = 7;
              return response.json();

            case 7:
              errorMessage = _context2.sent;
              throw Error(errorMessage);

            case 9:
              return _context2.abrupt("return", response.json());

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function signUp(_x3, _x4, _x5) {
      return _signUp.apply(this, arguments);
    }

    return signUp;
  }(),
  searchInfo: function () {
    var _searchInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(accessToken) {
      var response, errorMessage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch("".concat(baseURL, "users/me"), {
                headers: {
                  Authorization: "Bearer ".concat(accessToken)
                }
              });

            case 2:
              response = _context3.sent;

              if (response.ok) {
                _context3.next = 8;
                break;
              }

              _context3.next = 6;
              return response.json();

            case 6:
              errorMessage = _context3.sent;
              throw Error(errorMessage);

            case 8:
              return _context3.abrupt("return", response.json());

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function searchInfo(_x6) {
      return _searchInfo.apply(this, arguments);
    }

    return searchInfo;
  }(),
  update: function () {
    var _update = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(accessToken, id, _ref) {
      var email, name, password, response, errorMessage;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              email = _ref.email, name = _ref.name, password = _ref.password;
              _context4.next = 3;
              return fetch("".concat(baseURL, "users/").concat(id), {
                method: 'PUT',
                headers: {
                  Authorization: "Bearer ".concat(accessToken),
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: email,
                  name: name,
                  password: password
                })
              });

            case 3:
              response = _context4.sent;

              if (response.ok) {
                _context4.next = 9;
                break;
              }

              _context4.next = 7;
              return response.json();

            case 7:
              errorMessage = _context4.sent;
              throw Error(errorMessage);

            case 9:
              return _context4.abrupt("return", response.json());

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function update(_x7, _x8, _x9) {
      return _update.apply(this, arguments);
    }

    return update;
  }()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserApi);

/***/ }),

/***/ "./src/js/constants/index.js":
/*!***********************************!*\
  !*** ./src/js/constants/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRODUCT_RULES": () => (/* binding */ PRODUCT_RULES),
/* harmony export */   "VENDING_MACHINE_RULES": () => (/* binding */ VENDING_MACHINE_RULES),
/* harmony export */   "USER_RULES": () => (/* binding */ USER_RULES),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "confirmMessage": () => (/* binding */ confirmMessage),
/* harmony export */   "LOGIN_ERROR": () => (/* binding */ LOGIN_ERROR),
/* harmony export */   "SIGNUP_ERROR": () => (/* binding */ SIGNUP_ERROR)
/* harmony export */ });
var PRODUCT_RULES = {
  MAX_NAME_LENGTH: 10,
  MIN_PRICE: 100,
  MAX_PRICE: 10000,
  PRICE_UNIT: 10,
  MAX_STOCK: 20,
  MIN_STOCK: 1
};
var VENDING_MACHINE_RULES = {
  CHANGE_UNIT: 10,
  MAX_TOTAL_CHANGE: 100000,
  MAX_TOTAL_INPUT_MONEY: 10000
};
var USER_RULES = {
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 6
};
var ERROR_MESSAGE = {
  CONTAIN_EMPTY_FIELD_IN_FORM: '상품명, 가격, 수량을 모두 입력해주세요.',
  EXCEED_MAX_PRODUCT_NAME_LENGTH: "\uC0C1\uD488\uBA85\uC740 ".concat(PRODUCT_RULES.MAX_NAME_LENGTH, "\uAE00\uC790\uB97C \uCD08\uACFC\uD574\uC11C\uB294 \uC548\uB429\uB2C8\uB2E4."),
  DUPLICATE_PRODUCT_NAME: '중복된 상품명의 상품은 등록할 수 없습니다.',
  OUT_OF_PRODUCT_PRICE_RANGE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(PRODUCT_RULES.MIN_PRICE, "\uC6D0 \uBBF8\uB9CC\uC774\uAC70\uB098 ").concat(PRODUCT_RULES.MAX_PRICE, "\uC6D0 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  INVALID_UNIT_PRODUCT_PRICE: "\uC0C1\uD488 \uAC00\uACA9\uC740 ".concat(PRODUCT_RULES.PRICE_UNIT, "\uC6D0 \uB2E8\uC704\uC5EC\uC57C \uD569\uB2C8\uB2E4."),
  INVALID_PRODUCT_STOCK: '올바른 수량을 입력해주세요',
  OUT_OF_PRODUCT_STOCK_RANGE: "\uC0C1\uD488 \uC218\uB7C9\uC740 ".concat(PRODUCT_RULES.MIN_STOCK, "\uAC1C \uBBF8\uB9CC\uC774\uAC70\uB098 ").concat(PRODUCT_RULES.MAX_STOCK, "\uAC1C \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  NOT_FOUND_PRODUCT_ID: '존재하지 않는 상품 아이디입니다.',
  BELOW_MIN_CHANGE: '충전 금액은 0원 이하일 수 없습니다.',
  INVALID_UNIT_CHANGE: "\uCDA9\uC804 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_RULES.CHANGE_UNIT, "\uC6D0 \uB2E8\uC704\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4."),
  EXCEED_MAX_TOTAL_CHANGE: "\uCD5C\uB300 \uBCF4\uC720 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE, "\uC6D0\uC744 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  EXCEED_MAX_TOTAL_MONEY: "\uCD5C\uB300 \uCDA9\uC804 \uAE08\uC561\uC740 ".concat(VENDING_MACHINE_RULES.MAX_TOTAL_INPUT_MONEY, "\uC6D0\uC744 \uCD08\uACFC\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."),
  INVALID_UNIT_MONEY: "".concat(VENDING_MACHINE_RULES.CHANGE_UNIT, "\uC6D0 \uB2E8\uC704\uB85C \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694"),
  INVALID_NAME_LENGTH: "\uC774\uB984\uC740 \uCD5C\uC18C".concat(USER_RULES.MIN_NAME_LENGTH, "\uC774\uC0C1 \uCD5C\uB300 ").concat(USER_RULES.MAX_NAME_LENGTH, "\uC774\uD558\uC5EC\uC57C \uD569\uB2C8\uB2E4"),
  INVALID_PASSWORD: '비밀번호는 8자 이상 16자 이하로 대문자,소문자, 특수문자가 1번 이상 포함되어야 합니다.'
};
function confirmMessage() {
  return '정말 삭제하시겠습니까?';
}
var LOGIN_ERROR = {
  'Incorrect password': '비밀번호를 확인해주세요',
  'Cannot find user': '해당 이메일의 사용자가 존재하지 않습니다.'
};
var SIGNUP_ERROR = {
  'Email already exists': '해당 이메일이 존재합니다.'
};

/***/ }),

/***/ "./src/js/controller/userController.js":
/*!*********************************************!*\
  !*** ./src/js/controller/userController.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/cookie */ "./src/js/utils/cookie.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");







function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _user = /*#__PURE__*/new WeakMap();

var _renderTabMenu = /*#__PURE__*/new WeakSet();

var _initLoginStatus = /*#__PURE__*/new WeakSet();

var _renderProfile = /*#__PURE__*/new WeakSet();

var _login = /*#__PURE__*/new WeakMap();

var _signUp = /*#__PURE__*/new WeakMap();

var _updateUser = /*#__PURE__*/new WeakMap();

var _logout = /*#__PURE__*/new WeakMap();

var UserController = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])( // eslint-disable-next-line max-lines-per-function
function UserController(user, loginTab, signUpTab, myProfileTab, pages) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, UserController);

  _classPrivateMethodInitSpec(this, _renderProfile);

  _classPrivateMethodInitSpec(this, _initLoginStatus);

  _classPrivateMethodInitSpec(this, _renderTabMenu);

  _classPrivateFieldInitSpec(this, _user, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _login, {
    writable: true,
    value: function () {
      var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee(e) {
        var _e$detail, email, password, _LOGIN_ERROR$err$mess, tabChange;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _e$detail = e.detail, email = _e$detail.email, password = _e$detail.password;
                _context.prev = 1;
                _context.next = 4;
                return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).signIn(email, password);

              case 4:
                _context.next = 10;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](1);
                (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.generateSnackBar)((_LOGIN_ERROR$err$mess = _constants__WEBPACK_IMPORTED_MODULE_6__.LOGIN_ERROR[_context.t0.message]) !== null && _LOGIN_ERROR$err$mess !== void 0 ? _LOGIN_ERROR$err$mess : _context.t0.message);
                return _context.abrupt("return");

              case 10:
                _classPrivateMethodGet(_this, _renderTabMenu, _renderTabMenu2).call(_this);

                _classPrivateMethodGet(_this, _renderProfile, _renderProfile2).call(_this);

                (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.generateSnackBar)('로그인 성공');
                tabChange = new CustomEvent('tabChange', {
                  detail: {
                    newHash: '/#/purchase'
                  }
                });
                window.dispatchEvent(tabChange);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 6]]);
      }));

      function value(_x) {
        return _value.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _signUp, {
    writable: true,
    value: function () {
      var _value2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee2(e) {
        var _e$detail2, email, password, name, _SIGNUP_ERROR$err$mes, tabChange;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _e$detail2 = e.detail, email = _e$detail2.email, password = _e$detail2.password, name = _e$detail2.name;
                _context2.prev = 1;
                _context2.next = 4;
                return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).signUp(email, name, password);

              case 4:
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.generateSnackBar)((_SIGNUP_ERROR$err$mes = _constants__WEBPACK_IMPORTED_MODULE_6__.SIGNUP_ERROR[_context2.t0.message]) !== null && _SIGNUP_ERROR$err$mes !== void 0 ? _SIGNUP_ERROR$err$mes : _context2.t0.message);
                return _context2.abrupt("return");

              case 10:
                _classPrivateMethodGet(_this, _renderTabMenu, _renderTabMenu2).call(_this);

                _classPrivateMethodGet(_this, _renderProfile, _renderProfile2).call(_this);

                (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.generateSnackBar)('회원가입이 완료되었습니다.');
                tabChange = new CustomEvent('tabChange', {
                  detail: {
                    newHash: '/#/purchase'
                  }
                });
                window.dispatchEvent(tabChange);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 6]]);
      }));

      function value(_x2) {
        return _value2.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _updateUser, {
    writable: true,
    value: function () {
      var _value3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee3(e) {
        var _e$detail3, email, password, name, tabChange;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _e$detail3 = e.detail, email = _e$detail3.email, password = _e$detail3.password, name = _e$detail3.name;
                _context3.prev = 1;
                _context3.next = 4;
                return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).updateUser(email, name, password);

              case 4:
                _classPrivateMethodGet(_this, _renderTabMenu, _renderTabMenu2).call(_this);

                _classPrivateMethodGet(_this, _renderProfile, _renderProfile2).call(_this);

                _context3.next = 12;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                (0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.generateSnackBar)(_context3.t0.message);
                return _context3.abrupt("return");

              case 12:
                tabChange = new CustomEvent('tabChange', {
                  detail: {
                    newHash: '/#/purchase'
                  }
                });
                window.dispatchEvent(tabChange);

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }));

      function value(_x3) {
        return _value3.apply(this, arguments);
      }

      return value;
    }()
  });

  _classPrivateFieldInitSpec(this, _logout, {
    writable: true,
    value: function value() {
      (0,_utils_cookie__WEBPACK_IMPORTED_MODULE_7__.expireCookie)('accessToken');

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).init();

      _classPrivateMethodGet(_this, _renderTabMenu, _renderTabMenu2).call(_this);

      var tabChange = new CustomEvent('tabChange', {
        detail: {
          newHash: '/#/purchase'
        }
      });
      window.dispatchEvent(tabChange);
    }
  });

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _user, user);

  this.loginTab = loginTab;
  this.myProfileTab = myProfileTab;
  this.navTabs = pages.map(function (page) {
    return page.header;
  });
  this.signTab = signUpTab;

  _classPrivateMethodGet(this, _initLoginStatus, _initLoginStatus2).call(this);

  (0,_utils_event__WEBPACK_IMPORTED_MODULE_9__.listenEvents)(loginTab.element, [{
    type: 'login',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _login)
  }]);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_9__.listenEvents)(signUpTab.element, [{
    type: 'sign-up',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _signUp)
  }]);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_9__.listenEvents)(myProfileTab.element, [{
    type: 'update-user',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _updateUser)
  }]);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_9__.listenEvents)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_8__.selectDom)('body'), [{
    type: 'logout',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _logout)
  }]);
});

function _renderTabMenu2() {
  var _this2 = this;

  this.navTabs.forEach(function (nav) {
    nav.renderMenuNavigation((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2, _user).isLogined, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2, _user).name);
  });
}

function _initLoginStatus2() {
  return _initLoginStatus3.apply(this, arguments);
}

function _initLoginStatus3() {
  _initLoginStatus3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee4() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _user).initLoginStatus();

          case 2:
            _classPrivateMethodGet(this, _renderTabMenu, _renderTabMenu2).call(this);

            _classPrivateMethodGet(this, _renderProfile, _renderProfile2).call(this);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));
  return _initLoginStatus3.apply(this, arguments);
}

function _renderProfile2() {
  this.myProfileTab.renderUser((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _user).email, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _user).name);
}



/***/ }),

/***/ "./src/js/controller/vendingMachineController.js":
/*!*******************************************************!*\
  !*** ./src/js/controller/vendingMachineController.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachineController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }




var _vendingMachine = /*#__PURE__*/new WeakMap();

var _addChange = /*#__PURE__*/new WeakMap();

var _addProduct = /*#__PURE__*/new WeakMap();

var _updateProduct = /*#__PURE__*/new WeakMap();

var _removeProduct = /*#__PURE__*/new WeakMap();

var _inputMoney = /*#__PURE__*/new WeakMap();

var _purchaseProduct = /*#__PURE__*/new WeakMap();

var _giveChange = /*#__PURE__*/new WeakMap();

var VendingMachineController = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])( // eslint-disable-next-line max-lines-per-function
function VendingMachineController(vendingMachine, addChangeView, manageProductView, purchaseProductView) {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, VendingMachineController);

  _classPrivateFieldInitSpec(this, _vendingMachine, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldInitSpec(this, _addChange, {
    writable: true,
    value: function value(e) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).addChange(e.detail.money);

      _this.addChangePage.renderCoinStatus((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).coinStatus, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).totalChange);

      _this.addChangePage.resetInput();

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('잔돈이 충전되었습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _addProduct, {
    writable: true,
    value: function value(e) {
      var id = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).addProduct(e.detail);

      var _classPrivateFieldGet2 = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).productList[id],
          name = _classPrivateFieldGet2.name,
          price = _classPrivateFieldGet2.price,
          stock = _classPrivateFieldGet2.stock;

      _this.manageProductView.addProduct({
        id: id,
        name: name,
        price: price,
        stock: stock
      });

      _this.purchaseProductView.addProduct({
        id: id,
        name: name,
        price: price,
        stock: stock
      });

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('상품이 추가되었습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _updateProduct, {
    writable: true,
    value: function value(e) {
      var id = e.detail.id;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).updateProduct(id, _objectSpread({}, e.detail));

      _this.manageProductView.renderUpdateProduct(id, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).productList[id]);

      _this.purchaseProductView.renderUpdateProduct(id, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).productList[id]);

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('상품이 수정되었습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _removeProduct, {
    writable: true,
    value: function value(e) {
      var id = e.detail.id;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).removeProduct(id);

      _this.manageProductView.removeProduct(id);

      _this.purchaseProductView.removeProduct(id);

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('상품이 삭제되었습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _inputMoney, {
    writable: true,
    value: function value(e) {
      var money = e.detail.money;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).insertMoney(money);

      _this.purchaseProductView.renderTotalMoney((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).totalMoney);

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('금액이 충전되었습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _purchaseProduct, {
    writable: true,
    value: function value(e) {
      var productId = e.detail.productId;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).sellProduct(productId);

      _this.manageProductView.renderUpdateProduct(productId, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).productList[productId]);

      _this.purchaseProductView.renderUpdateProduct(productId, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).productList[productId]);

      _this.purchaseProductView.renderTotalMoney((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).totalMoney);

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('상품을 구매하였습니다.');
    }
  });

  _classPrivateFieldInitSpec(this, _giveChange, {
    writable: true,
    value: function value() {
      var coinStatus = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).giveChange();

      _this.purchaseProductView.renderChange(coinStatus);

      _this.purchaseProductView.renderTotalMoney((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).totalMoney);

      _this.addChangePage.renderCoinStatus((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).coinStatus, (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _vendingMachine).totalChange);

      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.generateSnackBar)('잔돈이 반환되었습니다.');
    }
  });

  (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _vendingMachine, vendingMachine);

  this.addChangePage = addChangeView.main;
  this.manageProductView = manageProductView.main;
  this.purchaseProductView = purchaseProductView.main;
  this.manageProductView.renderInitProductList((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _vendingMachine).productList);
  this.purchaseProductView.renderInitProductList((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _vendingMachine).productList);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.listenEvents)(this.manageProductView.element, [{
    type: 'addProduct',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProduct)
  }, {
    type: 'updateProduct',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _updateProduct)
  }, {
    type: 'removeProduct',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _removeProduct)
  }]);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.listenEvents)(this.addChangePage.element, [{
    type: 'addChange',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addChange)
  }]);
  (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.listenEvents)(this.purchaseProductView.element, [{
    type: 'inputMoney',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _inputMoney)
  }, {
    type: 'purchaseProduct',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseProduct)
  }, {
    type: 'giveChange',
    cb: (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _giveChange)
  }]);
});



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_vendingMachineController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/vendingMachineController */ "./src/js/controller/vendingMachineController.js");
/* harmony import */ var _controller_userController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/userController */ "./src/js/controller/userController.js");
/* harmony import */ var _domain_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain/User */ "./src/js/domain/User.ts");
/* harmony import */ var _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain/VendingMachine */ "./src/js/domain/VendingMachine.ts");
/* harmony import */ var _view_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/Navigation */ "./src/js/view/Navigation.js");
/* harmony import */ var _view_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/Page */ "./src/js/view/Page.js");
/* harmony import */ var _view_pages_addChangeTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/pages/addChangeTab */ "./src/js/view/pages/addChangeTab/index.js");
/* harmony import */ var _view_pages_loginTab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/pages/loginTab */ "./src/js/view/pages/loginTab/index.js");
/* harmony import */ var _view_pages_manageProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/pages/manageProduct */ "./src/js/view/pages/manageProduct/index.js");
/* harmony import */ var _view_pages_myProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/pages/myProfile */ "./src/js/view/pages/myProfile/index.js");
/* harmony import */ var _view_pages_purchaseProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/pages/purchaseProduct */ "./src/js/view/pages/purchaseProduct/index.js");
/* harmony import */ var _view_pages_signUp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./view/pages/signUp */ "./src/js/view/pages/signUp/index.js");
/* harmony import */ var _view_Router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./view/Router */ "./src/js/view/Router.js");













var vendingMachine = new _domain_VendingMachine__WEBPACK_IMPORTED_MODULE_3__["default"]();
var user = new _domain_User__WEBPACK_IMPORTED_MODULE_2__["default"]();
var manageProductPage = new _view_Page__WEBPACK_IMPORTED_MODULE_5__["default"](new _view_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"](user), new _view_pages_manageProduct__WEBPACK_IMPORTED_MODULE_8__["default"]());
var purchaseProductPage = new _view_Page__WEBPACK_IMPORTED_MODULE_5__["default"](new _view_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"](user), new _view_pages_purchaseProduct__WEBPACK_IMPORTED_MODULE_10__["default"]());
var addChangePage = new _view_Page__WEBPACK_IMPORTED_MODULE_5__["default"](new _view_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"](user), new _view_pages_addChangeTab__WEBPACK_IMPORTED_MODULE_6__["default"]());
var loginTab = new _view_pages_loginTab__WEBPACK_IMPORTED_MODULE_7__["default"]();
var signUpTab = new _view_pages_signUp__WEBPACK_IMPORTED_MODULE_11__["default"]();
var myProfileTab = new _view_pages_myProfile__WEBPACK_IMPORTED_MODULE_9__["default"]();
var router = new _view_Router__WEBPACK_IMPORTED_MODULE_12__["default"](user);
var vendingMachineController = new _controller_vendingMachineController__WEBPACK_IMPORTED_MODULE_0__["default"](vendingMachine, addChangePage, manageProductPage, purchaseProductPage);
var userController = new _controller_userController__WEBPACK_IMPORTED_MODULE_1__["default"](user, loginTab, signUpTab, myProfileTab, [addChangePage, manageProductPage, purchaseProductPage]);
router.addUserRenderList('#/login', loginTab);
router.addUserRenderList('#/signup', signUpTab);
router.addPrivateRenderList('#/charge', addChangePage);
router.addRenderList('#/purchase', purchaseProductPage);
router.addPrivateRenderList('#/manage', manageProductPage);
router.addPrivateRenderList('#/myprofile', myProfileTab);
router.bindEvents();

/***/ }),

/***/ "./src/js/utils/cookie.js":
/*!********************************!*\
  !*** ./src/js/utils/cookie.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCookie": () => (/* binding */ setCookie),
/* harmony export */   "getCookie": () => (/* binding */ getCookie),
/* harmony export */   "expireCookie": () => (/* binding */ expireCookie)
/* harmony export */ });
function setCookie(key, payload) {
  document.cookie = "".concat(key, "=").concat(payload);
}
function getCookie(key) {
  var _document$cookie, _document$cookie$spli, _document$cookie$spli2;

  var cookieValue = (_document$cookie = document.cookie) === null || _document$cookie === void 0 ? void 0 : (_document$cookie$spli = _document$cookie.split('; ')) === null || _document$cookie$spli === void 0 ? void 0 : (_document$cookie$spli2 = _document$cookie$spli.find(function (row) {
    return row.startsWith(key);
  })) === null || _document$cookie$spli2 === void 0 ? void 0 : _document$cookie$spli2.split('=')[1];
  if (cookieValue) return cookieValue;
  return null;
}
function expireCookie(key) {
  document.cookie = "".concat(key, "=; expires=Thu, 18 Dec 2013 12:00:00 GMT");
}

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectDom": () => (/* binding */ selectDom),
/* harmony export */   "createMainElement": () => (/* binding */ createMainElement),
/* harmony export */   "createElementByTemplate": () => (/* binding */ createElementByTemplate),
/* harmony export */   "generateSnackBar": () => (/* binding */ generateSnackBar)
/* harmony export */ });
function selectDom(selector) {
  var baseElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  return baseElement.querySelector(selector);
}
function createMainElement(template) {
  var mainElement = document.createElement('main');
  mainElement.insertAdjacentHTML('beforeend', template);
  return mainElement;
}
function createElementByTemplate(type, template) {
  var element = document.createElement(type);
  element.insertAdjacentHTML('beforeend', template);
  return element;
}
function generateSnackBar(text) {
  var snackBarContainer = document.getElementById('snackbar');
  snackBarContainer.className = 'show';
  snackBarContainer.textContent = text;
  setTimeout(function () {
    snackBarContainer.className = snackBarContainer.className.replace('show', '');
  }, 3000);
}

/***/ }),

/***/ "./src/js/utils/event.js":
/*!*******************************!*\
  !*** ./src/js/utils/event.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emitEvent": () => (/* binding */ emitEvent),
/* harmony export */   "listenEvents": () => (/* binding */ listenEvents)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/utils/dom.js");

function emitEvent(target, name, detail) {
  var event = new CustomEvent(name, {
    detail: detail
  });
  target.dispatchEvent(event);
}
function listenEvents(target, events) {
  events.forEach(function (_ref) {
    var type = _ref.type,
        cb = _ref.cb;
    target.addEventListener(type, function (e) {
      try {
        cb(e);
      } catch (error) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.generateSnackBar)(error.message);
      }
    });
  });
}

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pickNumberInRange": () => (/* binding */ pickNumberInRange),
/* harmony export */   "generateRandomHexString": () => (/* binding */ generateRandomHexString)
/* harmony export */ });
function pickNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateRandomHexString() {
  return Array.from({
    length: 3
  }).reduce(function (prev) {
    return "".concat(prev).concat(pickNumberInRange(0, 255).toString(16)).concat(Date.now());
  }, '');
}

/***/ }),

/***/ "./src/js/view/Navigation.js":
/*!***********************************!*\
  !*** ./src/js/view/Navigation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/event */ "./src/js/utils/event.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }



var template = "\n    <nav class=\"user-navigation\"> \n      <a type=\"button\" class=\"tab-menu-button\" id=\"to-login-anchor\" href=\"#/login\">\n        \uB85C\uADF8\uC778 \n        </a>\n    <button type=\"button\" class=\"user-navigation-profile--button hide\">\n        \uC6B0\n  </button>\n  <ul class=\"user-navigation--ul hide\">\n    <li type=\"button\" class=\"user-navigation--li\">\n      <a href=\"#/myprofile\" id=\"user-navigation-profile\">Profile</a>\n    </li>\n    <li type=\"button\" class=\"user-navigation--li\" id=\"logout\">\n      Logout\n    </li>\n  </ul>\n    </nav>\n    <h1 id=\"app-title\">\uD83C\uDF7F \uC790\uD310\uAE30 \uD83C\uDF7F</h1>\n    <nav id=\"tab-menu-navigation\">\n        <a type=\"button\" id=\"manage-tab-menu\" class=\"tab-menu-button\" href=\"#/manage\">\n          \uC0C1\uD488 \uAD00\uB9AC\n        </a>\n        <a type=\"button\" id=\"charge-tab-menu\" class=\"tab-menu-button\" href=\"#/charge\">\n          \uC794\uB3C8 \uCDA9\uC804\n        </a>\n        <a type=\"button\" id=\"purchase-tab-menu\" class=\"tab-menu-button\" href=\"#/purchase\">\n          \uC0C1\uD488 \uAD6C\uB9E4\n        </a>\n    </nav>\n    ";

var _navContainer = /*#__PURE__*/new WeakMap();

var _tabMenuNav = /*#__PURE__*/new WeakMap();

var _toLoginButton = /*#__PURE__*/new WeakMap();

var _profileButton = /*#__PURE__*/new WeakMap();

var _profileList = /*#__PURE__*/new WeakMap();

var _handleTabMenuChange = /*#__PURE__*/new WeakMap();

var _showList = /*#__PURE__*/new WeakMap();

var _removeList = /*#__PURE__*/new WeakMap();

var _handleProfileList = /*#__PURE__*/new WeakMap();

var Navigation = /*#__PURE__*/function () {
  function Navigation() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    _classPrivateFieldInitSpec(this, _navContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _tabMenuNav, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _toLoginButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _profileButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _profileList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleTabMenuChange, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var newHash = e.target.hash;
        var previousHash = window.location.hash;

        if (newHash === previousHash) {
          return;
        }

        var tabChange = new CustomEvent('tabChange', {
          detail: {
            newHash: newHash
          }
        });
        window.dispatchEvent(tabChange);
      }
    });

    _classPrivateFieldInitSpec(this, _showList, {
      writable: true,
      value: function value() {
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _profileList).classList.remove('hide');

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('body').addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _removeList));
      }
    });

    _classPrivateFieldInitSpec(this, _removeList, {
      writable: true,
      value: function value(e) {
        if (e.target !== (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _profileList) && e.target !== (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _profileButton)) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _profileList).classList.add('hide');
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProfileList, {
      writable: true,
      value: function value(e) {
        if (e.target.id === 'user-navigation-profile') {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _handleTabMenuChange).call(_this, e);
        }

        if (e.target.id === 'logout') {
          (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emitEvent)((0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('body'), 'logout');
        }
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _navContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createElementByTemplate)('header', template));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _tabMenuNav, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#tab-menu-navigation', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _navContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _toLoginButton, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#to-login-anchor', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _navContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _profileButton, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('.user-navigation-profile--button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _navContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _profileList, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('.user-navigation--ul', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _navContainer)));

    this.renderMenuNavigation();

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _profileButton).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _showList));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _profileList).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleProfileList));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toLoginButton).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleTabMenuChange));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNav).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleTabMenuChange));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "renderMenuNavigation",
    value: function renderMenuNavigation(isLogined, name) {
      if (!isLogined) {
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNav).classList.add('hide');

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _profileButton).classList.add('hide');

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toLoginButton).classList.remove('hide');
      }

      if (isLogined) {
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _tabMenuNav).classList.remove('hide');

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _profileButton).classList.remove('hide');

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _toLoginButton).classList.add('hide');

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _profileButton).textContent = name.charAt(0);
      }
    }
  }, {
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _navContainer);
    }
  }]);

  return Navigation;
}();



/***/ }),

/***/ "./src/js/view/Page.js":
/*!*****************************!*\
  !*** ./src/js/view/Page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

var _app = /*#__PURE__*/new WeakMap();

var _header = /*#__PURE__*/new WeakMap();

var _main = /*#__PURE__*/new WeakMap();

var Page = /*#__PURE__*/function () {
  function Page(header, main) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Page);

    _classPrivateFieldInitSpec(this, _app, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _header, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _main, {
      writable: true,
      value: void 0
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _app, document.createElement('div'));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _app).id = 'app';

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _header, header);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _main, main);

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _app).append(header.element, main.element);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Page, [{
    key: "header",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _header);
    }
  }, {
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _app);
    }
  }, {
    key: "main",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _main);
    }
  }]);

  return Page;
}();



/***/ }),

/***/ "./src/js/view/Router.js":
/*!*******************************!*\
  !*** ./src/js/view/Router.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./src/js/view/template.js");







function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }




var _renderList = /*#__PURE__*/new WeakMap();

var _userRenderList = /*#__PURE__*/new WeakMap();

var _privateRenderList = /*#__PURE__*/new WeakMap();

var _user = /*#__PURE__*/new WeakMap();

var _render = /*#__PURE__*/new WeakMap();

var _updateCurrentTabMenu = /*#__PURE__*/new WeakSet();

var _initUserState = /*#__PURE__*/new WeakMap();

var _handleTabMenuChange = /*#__PURE__*/new WeakMap();

var Router = /*#__PURE__*/function () {
  function Router(user) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Router);

    _classPrivateMethodInitSpec(this, _updateCurrentTabMenu);

    _classPrivateFieldInitSpec(this, _renderList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _userRenderList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _privateRenderList, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _user, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _render, {
      writable: true,
      value: function value() {
        var path = window.location.hash || '#/purchase';

        if (!(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _renderList)[path]) {
          var notFoundContainer = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.createElementByTemplate)('div', _template__WEBPACK_IMPORTED_MODULE_7__.notFoundTemplate);
          notFoundContainer.id = 'app';
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('body').replaceChild(notFoundContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#app'));
          return;
        }

        if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _privateRenderList)[path] && !(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).isLogined) {
          window.history.pushState({}, null, '#/login');

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _render).call(_this);

          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.generateSnackBar)('로그인이 필요합니다.');
          return;
        }

        if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _userRenderList)[path] && (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).isLogined) {
          window.history.pushState({}, null, '/');

          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _render).call(_this);

          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.generateSnackBar)('이미 로그인한 상태입니다.');
          return;
        }

        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('body').replaceChild((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _renderList)[path].element, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#app'));

        _classPrivateMethodGet(_this, _updateCurrentTabMenu, _updateCurrentTabMenu2).call(_this, path);
      }
    });

    _classPrivateFieldInitSpec(this, _initUserState, {
      writable: true,
      value: function () {
        var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_5___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _user).initLoginStatus();

                case 2:
                  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _render).call(_this);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function value() {
          return _value.apply(this, arguments);
        }

        return value;
      }()
    });

    _classPrivateFieldInitSpec(this, _handleTabMenuChange, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        window.history.pushState({}, null, e.detail.newHash);

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _render).call(_this);
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _user, user);

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _privateRenderList, {});

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _userRenderList, {});

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _renderList, {});
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Router, [{
    key: "bindEvents",
    value: function bindEvents() {
      window.addEventListener('popstate', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _render));
      window.addEventListener('DOMContentLoaded', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _initUserState));
      window.addEventListener('tabChange', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleTabMenuChange));
    }
  }, {
    key: "addPrivateRenderList",
    value: function addPrivateRenderList(key, view) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _privateRenderList)[key] = view;
      this.addRenderList(key, view);
    }
  }, {
    key: "addRenderList",
    value: function addRenderList(key, view) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _renderList)[key] = view;
    }
  }, {
    key: "addUserRenderList",
    value: function addUserRenderList(key, view) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _userRenderList)[key] = view;
      this.addRenderList(key, view);
    } // eslint-disable-next-line max-lines-per-function

  }]);

  return Router;
}();

function _updateCurrentTabMenu2(path) {
  if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#tab-menu-navigation')) return;
  var previousMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.current', (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#tab-menu-navigation'));
  previousMenuButton === null || previousMenuButton === void 0 ? void 0 : previousMenuButton.classList.remove('current');
  var currentMenuButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)("[href=\"".concat(path, "\"]"), (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#tab-menu-navigation'));
  currentMenuButton === null || currentMenuButton === void 0 ? void 0 : currentMenuButton.classList.add('current');
}



/***/ }),

/***/ "./src/js/view/pages/addChangeTab/index.js":
/*!*************************************************!*\
  !*** ./src/js/view/pages/addChangeTab/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddChangeTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/addChangeTab/template.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _addChangeContainer = /*#__PURE__*/new WeakMap();

var _addChangeForm = /*#__PURE__*/new WeakMap();

var _moneyInput = /*#__PURE__*/new WeakMap();

var _totalChange = /*#__PURE__*/new WeakMap();

var _coinStatusTable = /*#__PURE__*/new WeakMap();

var _handleAddChange = /*#__PURE__*/new WeakMap();

var AddChangeTab = /*#__PURE__*/function () {
  function AddChangeTab() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AddChangeTab);

    _classPrivateFieldInitSpec(this, _addChangeContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addChangeForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _moneyInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalChange, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _coinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddChange, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var money = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _moneyInput).valueAsNumber;

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(_this.element, 'addChange', {
          money: money
        });
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addChangeContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_6__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addChangeForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#add-change-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _moneyInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#money-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _totalChange, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#total-change', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#coin-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleAddChange));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AddChangeTab, [{
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _addChangeContainer);
    }
  }, {
    key: "renderCoinStatus",
    value: function renderCoinStatus(coinStatus, totalChange) {
      var coinCountElements = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _coinStatusTable).querySelectorAll('td[data-coin-name]');

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _totalChange).textContent = totalChange;
      coinCountElements.forEach(function (element) {
        element.textContent = "".concat(coinStatus[element.dataset.coinName], "\uAC1C");
      });
    }
  }, {
    key: "resetInput",
    value: function resetInput() {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _moneyInput).value = '';
    }
  }]);

  return AddChangeTab;
}();



/***/ }),

/***/ "./src/js/view/pages/addChangeTab/template.js":
/*!****************************************************!*\
  !*** ./src/js/view/pages/addChangeTab/template.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var addChangeTemplate = "\n<section title=\"\uC794\uB3C8 \uCDA9\uC804\">\n  <form class=\"input-money-form\" id=\"add-change-form\">\n    <label for=\"\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n    <div>\n      <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" />\n      <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n    </div>\n  </form>\n  <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-change\">0</span>\uC6D0</p>\n</section>\n<section class=\"table-section\" title=\"\uC790\uD310\uAE30 \uD604\uD669\">\n  <table id=\"coin-status-table\">\n    <caption>\n      \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n    </caption>\n    <tr>\n      <th>\uB3D9\uC804</th>\n      <th>\uAC1C\uC218</th>\n    </tr>\n    <tr>\n      <td>500\uC6D0</td>\n      <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>100\uC6D0</td>\n      <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>50\uC6D0</td>\n      <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>10\uC6D0</td>\n      <td data-coin-name='TEN_WON'>0\uAC1C</td>\n    </tr>\n  </table>\n</section>";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addChangeTemplate);

/***/ }),

/***/ "./src/js/view/pages/loginTab/index.js":
/*!*********************************************!*\
  !*** ./src/js/view/pages/loginTab/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/loginTab/template.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _loginTabContainer = /*#__PURE__*/new WeakMap();

var _loginForm = /*#__PURE__*/new WeakMap();

var _emailInput = /*#__PURE__*/new WeakMap();

var _passwordInput = /*#__PURE__*/new WeakMap();

var _handleLoginForm = /*#__PURE__*/new WeakMap();

var LoginTab = /*#__PURE__*/function () {
  function LoginTab() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginTab);

    _classPrivateFieldInitSpec(this, _loginTabContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _loginForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _emailInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleLoginForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var email = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _emailInput).value;

        var password = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordInput).value;

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(_this.element, 'login', {
          email: email,
          password: password
        });
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _loginTabContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createElementByTemplate)('div', _template__WEBPACK_IMPORTED_MODULE_6__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginTabContainer).id = 'app';

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _loginForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#login-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _emailInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#login-email', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _passwordInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#login-password', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginTabContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleLoginForm));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginTab, [{
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _loginTabContainer);
    }
  }]);

  return LoginTab;
}();



/***/ }),

/***/ "./src/js/view/pages/loginTab/template.js":
/*!************************************************!*\
  !*** ./src/js/view/pages/loginTab/template.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var loginTemplate = "<main>\n<h1 class=\"user-title\">\uB85C\uADF8\uC778</h1>\n<form id=\"login-form\" class=\"user-form\">\n  <label>\uC774\uBA54\uC77C</label>\n  <input type=\"email\" placeholder=\"woowacousre@gmail.com\" class=\"user-form--input\" id=\"login-email\" />\n  <label>\uD328\uC2A4\uC6CC\uB4DC</label>\n  <input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.\" class=\"user-form--input\" id=\"login-password\"/>\n  <button type=\"submit\" class=\"user-form--button\">\uD655\uC778</button>\n  <label>\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? <a href=\"#/signup\" id=\"signup--anchor\">\uD68C\uC6D0\uAC00\uC785</a></label>\n</form>\n</main>";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginTemplate);

/***/ }),

/***/ "./src/js/view/pages/manageProduct/index.js":
/*!**************************************************!*\
  !*** ./src/js/view/pages/manageProduct/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ManageProductTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/manageProduct/template.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }






var _manageContainer = /*#__PURE__*/new WeakMap();

var _addProductForm = /*#__PURE__*/new WeakMap();

var _addProductNameInput = /*#__PURE__*/new WeakMap();

var _addProductPriceInput = /*#__PURE__*/new WeakMap();

var _addProductStockInput = /*#__PURE__*/new WeakMap();

var _productStatusTable = /*#__PURE__*/new WeakMap();

var _handleAddProductForm = /*#__PURE__*/new WeakMap();

var _resetInput = /*#__PURE__*/new WeakSet();

var _handleProductStatus = /*#__PURE__*/new WeakMap();

var _handleProductUpdate = /*#__PURE__*/new WeakMap();

var _handleProductUpdateConfirm = /*#__PURE__*/new WeakMap();

var _handleProductRemove = /*#__PURE__*/new WeakMap();

var ManageProductTab = /*#__PURE__*/function () {
  // eslint-disable-next-line max-lines-per-function
  function ManageProductTab() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ManageProductTab);

    _classPrivateMethodInitSpec(this, _resetInput);

    _classPrivateFieldInitSpec(this, _manageContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductNameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductPriceInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductStockInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleAddProductForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var name = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _addProductNameInput).value;

        var price = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _addProductPriceInput).valueAsNumber;

        var stock = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _addProductStockInput).valueAsNumber;

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_7__.emitEvent)(_this.element, 'addProduct', {
          name: name,
          price: price,
          stock: stock
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductStatus, {
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        var classList = target.classList;

        if (classList.contains('update-product-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _handleProductUpdate).call(_this, target);
        }

        if (classList.contains('remove-product-button') && window.confirm((0,_constants__WEBPACK_IMPORTED_MODULE_5__.confirmMessage)())) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _handleProductRemove).call(_this, target);
        }

        if (classList.contains('confirm-update-button')) {
          (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _handleProductUpdateConfirm).call(_this, target);
        }
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdate, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.product-name', targetTableRow).textContent;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.product-price', targetTableRow).textContent;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.product-stock', targetTableRow).textContent;
        var id = target.dataset.productId;
        targetTableRow.insertAdjacentHTML('afterend', (0,_template__WEBPACK_IMPORTED_MODULE_8__.updateProductTableRow)({
          name: name,
          price: price,
          stock: stock,
          id: id
        }));
        targetTableRow.remove();
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductUpdateConfirm, {
      writable: true,
      value: function value(target) {
        var targetTableRow = target.closest('tr');
        var name = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.update-product-name-input', targetTableRow).value;
        var price = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.update-product-price-input', targetTableRow).valueAsNumber;
        var stock = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('.update-product-stock-input', targetTableRow).valueAsNumber;
        var id = target.dataset.productId;
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_7__.emitEvent)(_this.element, 'updateProduct', {
          id: id,
          name: name,
          price: price,
          stock: stock
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleProductRemove, {
      writable: true,
      value: function value(target) {
        var id = target.dataset.productId;
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_7__.emitEvent)(_this.element, 'removeProduct', {
          id: id
        });
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _manageContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_8__.manageProductTemplate));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#add-product-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductNameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#add-product-name-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductPriceInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#add-product-price-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductStockInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#add-product-stock-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)('#product-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleAddProductForm));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleProductStatus));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ManageProductTab, [{
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _manageContainer);
    }
  }, {
    key: "renderInitProductList",
    value: function renderInitProductList(productList) {
      var _this2 = this;

      Object.entries(productList).forEach(function (_ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            id = _ref3[0],
            _ref3$ = _ref3[1],
            name = _ref3$.name,
            price = _ref3$.price,
            stock = _ref3$.stock;

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this2, _productStatusTable).insertAdjacentHTML('beforeend', (0,_template__WEBPACK_IMPORTED_MODULE_8__.productTableRow)({
          name: name,
          price: price,
          stock: stock,
          id: id
        }));
      });
    }
  }, {
    key: "addProduct",
    value: function addProduct(_ref4) {
      var name = _ref4.name,
          price = _ref4.price,
          stock = _ref4.stock,
          id = _ref4.id;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable).insertAdjacentHTML('beforeend', (0,_template__WEBPACK_IMPORTED_MODULE_8__.productTableRow)({
        name: name,
        price: price,
        stock: stock,
        id: id
      }));

      _classPrivateMethodGet(this, _resetInput, _resetInput2).call(this);
    }
  }, {
    key: "renderUpdateProduct",
    value: function renderUpdateProduct(id, _ref5) {
      var name = _ref5.name,
          price = _ref5.price,
          stock = _ref5.stock;
      var targetTableRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)("[data-product-id='".concat(id, "']"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable)).closest('tr');
      targetTableRow.insertAdjacentHTML('afterend', (0,_template__WEBPACK_IMPORTED_MODULE_8__.productTableRow)({
        name: name,
        price: price,
        stock: stock,
        id: id
      }));
      targetTableRow.remove();
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(id) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_6__.selectDom)("[data-product-id='".concat(id, "']"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable)).closest('tr').remove();
    }
  }]);

  return ManageProductTab;
}();

function _resetInput2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductNameInput).value = '';
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductPriceInput).value = '';
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductStockInput).value = '';

  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductNameInput).focus();
}



/***/ }),

/***/ "./src/js/view/pages/manageProduct/template.js":
/*!*****************************************************!*\
  !*** ./src/js/view/pages/manageProduct/template.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageProductTemplate": () => (/* binding */ manageProductTemplate),
/* harmony export */   "productTableRow": () => (/* binding */ productTableRow),
/* harmony export */   "updateProductTableRow": () => (/* binding */ updateProductTableRow)
/* harmony export */ });
var manageProductTemplate = "\n<section title=\"\uC0C1\uD488 \uC815\uBCF4\">\n  <form id=\"add-product-form\">\n    <fieldset>\n      <legend>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n      <input type=\"text\" id=\"add-product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" required/>\n      <input type=\"number\" id=\"add-product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required/>\n      <input type=\"number\" id=\"add-product-stock-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required/>\n      <button type=\"submit\" class=\"submit-button\">\uCD94\uAC00</button>\n    </fieldset>\n  </form>\n</section>\n<section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n  <table id=\"product-status-table\">\n    <caption>\n      \uC0C1\uD488 \uD604\uD669\n    </caption>\n    <tr>\n      <th>\uC0C1\uD488\uBA85</th>\n      <th>\uAC00\uACA9</th>\n      <th>\uC218\uB7C9</th>\n      <th>\uAD00\uB9AC</th>\n    </tr>\n  </table>\n</section>";
var productTableRow = function productTableRow(_ref) {
  var name = _ref.name,
      price = _ref.price,
      stock = _ref.stock,
      id = _ref.id;
  return "\n<tr>\n  <td class=\"product-name\">".concat(name, "</td>\n  <td class=\"product-price\">").concat(price, "</td>\n  <td class=\"product-stock\">").concat(stock, "</td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"update-product-button\" data-product-id=").concat(id, ">\uC218\uC815</button>\n      <button type=\"button\" class=\"remove-product-button\" data-product-id=").concat(id, ">\uC0AD\uC81C</button>\n    </div>\n  </td>\n</tr>\n");
};
var updateProductTableRow = function updateProductTableRow(_ref2) {
  var name = _ref2.name,
      price = _ref2.price,
      stock = _ref2.stock,
      id = _ref2.id;
  return "\n<tr>\n  <td><input type=\"text\" class=\"update-product-name-input\" value=\"".concat(name, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-price-input\" value=\"").concat(price, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-stock-input\" value=\"").concat(stock, "\" /></td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"confirm-update-button\" data-product-id=").concat(id, ">\n      \uD655\uC778\n      </button>\n    </div>\n  </td>\n</tr>\n");
};

/***/ }),

/***/ "./src/js/view/pages/myProfile/index.js":
/*!**********************************************!*\
  !*** ./src/js/view/pages/myProfile/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyProfile)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/myProfile/template.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _updateContainer = /*#__PURE__*/new WeakMap();

var _updateForm = /*#__PURE__*/new WeakMap();

var _emailInput = /*#__PURE__*/new WeakMap();

var _nameInput = /*#__PURE__*/new WeakMap();

var _passwordInput = /*#__PURE__*/new WeakMap();

var _passwordConfirmInput = /*#__PURE__*/new WeakMap();

var _handleupdateForm = /*#__PURE__*/new WeakMap();

var MyProfile = /*#__PURE__*/function () {
  function MyProfile() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyProfile);

    _classPrivateFieldInitSpec(this, _updateContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _updateForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _emailInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _nameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordConfirmInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleupdateForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var email = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _emailInput).value;

        var name = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _nameInput).value;

        var password = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordInput).value;

        if (password !== (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordConfirmInput).value) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.generateSnackBar)('비밀번호와 비밀번호 확인이 일치하지않습니다.');
          return;
        }

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(_this.element, 'update-user', {
          email: email,
          name: name,
          password: password
        });
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _nameInput).value = '';
        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordInput).value = '';
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _updateContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createElementByTemplate)('div', _template__WEBPACK_IMPORTED_MODULE_6__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer).id = 'app';

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _updateForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#update-user-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _emailInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#update-user-email', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _nameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#update-user-name', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _passwordInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#update-user-password', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _passwordConfirmInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#update-user-password-confirm', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handleupdateForm));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyProfile, [{
    key: "renderUser",
    value: function renderUser(email, name) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _emailInput).value = email;
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _nameInput).placeholder = name;
    }
  }, {
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _updateContainer);
    }
  }]);

  return MyProfile;
}();



/***/ }),

/***/ "./src/js/view/pages/myProfile/template.js":
/*!*************************************************!*\
  !*** ./src/js/view/pages/myProfile/template.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var myProfileTemplate = "<main>\n<h1 class=\"user-title\">\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815</h1>\n<form id=\"update-user-form\" class=\"user-form\">\n  <label>\uC774\uBA54\uC77C</label>\n  <input type=\"email\" value=\"woowacourse@gmail.com\" class=\"user-form--input\" id=\"update-user-email\" disabled />\n  <label>\uC774\uB984</label>\n  <input type=\"text\" placeholder=\"\" class=\"user-form--input\" id=\"update-user-name\" required />\n  <label>\uBE44\uBC00\uBC88\uD638</label>\n  <input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"update-user-password\" required />\n  <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n  <input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"update-user-password-confirm\" required />\n  <button type=\"submit\" class=\"user-form--button\">\uD655\uC778</button>\n</form>\n</main>";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myProfileTemplate);

/***/ }),

/***/ "./src/js/view/pages/purchaseProduct/index.js":
/*!****************************************************!*\
  !*** ./src/js/view/pages/purchaseProduct/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PurchaseProductTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/purchaseProduct/template.js");






function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _purchaseContainer = /*#__PURE__*/new WeakMap();

var _inputMoneyForm = /*#__PURE__*/new WeakMap();

var _addProductNameInput = /*#__PURE__*/new WeakMap();

var _totalMoneySpan = /*#__PURE__*/new WeakMap();

var _productStatusTable = /*#__PURE__*/new WeakMap();

var _giveChangeButton = /*#__PURE__*/new WeakMap();

var _coinStatusTable = /*#__PURE__*/new WeakMap();

var _handleInputMoneyForm = /*#__PURE__*/new WeakMap();

var _clearInput = /*#__PURE__*/new WeakSet();

var _handlePurchase = /*#__PURE__*/new WeakMap();

var _handleGiveChange = /*#__PURE__*/new WeakMap();

var PurchaseProductTab = /*#__PURE__*/function () {
  function PurchaseProductTab() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PurchaseProductTab);

    _classPrivateMethodInitSpec(this, _clearInput);

    _classPrivateFieldInitSpec(this, _purchaseContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _inputMoneyForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _addProductNameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _totalMoneySpan, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _productStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _giveChangeButton, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _coinStatusTable, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handleInputMoneyForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var money = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _addProductNameInput).valueAsNumber;

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.emitEvent)(_this.element, 'inputMoney', {
          money: money
        });

        _classPrivateMethodGet(_this, _clearInput, _clearInput2).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _handlePurchase, {
      writable: true,
      value: function value(e) {
        if (!e.target.classList.contains('purchase-product-button')) {
          return;
        }

        var productId = e.target.dataset.productId;
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.emitEvent)(_this.element, 'purchaseProduct', {
          productId: productId
        });
      }
    });

    _classPrivateFieldInitSpec(this, _handleGiveChange, {
      writable: true,
      value: function value() {
        (0,_utils_event__WEBPACK_IMPORTED_MODULE_6__.emitEvent)(_this.element, 'giveChange', {});
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _purchaseContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.createMainElement)(_template__WEBPACK_IMPORTED_MODULE_7__.purchaseTemplate));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _inputMoneyForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('.input-money-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _addProductNameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('#money-input', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _inputMoneyForm)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _totalMoneySpan, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('#total-money', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _productStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('#product-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _giveChangeButton, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('#give-change-button', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _coinStatusTable, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)('#coin-status-table', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _inputMoneyForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleInputMoneyForm));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handlePurchase));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _giveChangeButton).addEventListener('click', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _handleGiveChange));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PurchaseProductTab, [{
    key: "addProduct",
    value: function addProduct(_ref) {
      var id = _ref.id,
          name = _ref.name,
          price = _ref.price,
          stock = _ref.stock;

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable).insertAdjacentHTML('beforeend', (0,_template__WEBPACK_IMPORTED_MODULE_7__.productPurchaseTableRow)({
        id: id,
        name: name,
        price: price,
        stock: stock
      }));
    }
  }, {
    key: "renderInitProductList",
    value: function renderInitProductList(productList) {
      var _this2 = this;

      Object.entries(productList).forEach(function (_ref2) {
        var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, 2),
            id = _ref3[0],
            _ref3$ = _ref3[1],
            name = _ref3$.name,
            price = _ref3$.price,
            stock = _ref3$.stock;

        _this2.addProduct({
          id: id,
          name: name,
          price: price,
          stock: stock
        });
      });
    }
  }, {
    key: "renderTotalMoney",
    value: function renderTotalMoney(money) {
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _totalMoneySpan).textContent = money;
    }
  }, {
    key: "renderUpdateProduct",
    value: function renderUpdateProduct(id, _ref4) {
      var name = _ref4.name,
          price = _ref4.price,
          stock = _ref4.stock;
      var targetTableRow = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)("[data-product-id='".concat(id, "']"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable)).closest('tr');
      targetTableRow.insertAdjacentHTML('afterend', (0,_template__WEBPACK_IMPORTED_MODULE_7__.productPurchaseTableRow)({
        name: name,
        price: price,
        stock: stock,
        id: id
      }));
      targetTableRow.remove();
    }
  }, {
    key: "renderChange",
    value: function renderChange(coinStatus) {
      var coinCountElements = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _coinStatusTable).querySelectorAll('td[data-coin-name]');

      coinCountElements.forEach(function (element) {
        element.textContent = "".concat(coinStatus[element.dataset.coinName], "\uAC1C");
      });
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(id) {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_5__.selectDom)("[data-product-id='".concat(id, "']"), (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _productStatusTable)).closest('tr').remove();
    }
  }, {
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _purchaseContainer);
    }
  }]);

  return PurchaseProductTab;
}();

function _clearInput2() {
  (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _addProductNameInput).value = '';
}



/***/ }),

/***/ "./src/js/view/pages/purchaseProduct/template.js":
/*!*******************************************************!*\
  !*** ./src/js/view/pages/purchaseProduct/template.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "productPurchaseTableRow": () => (/* binding */ productPurchaseTableRow),
/* harmony export */   "purchaseTemplate": () => (/* binding */ purchaseTemplate)
/* harmony export */ });
var productPurchaseTableRow = function productPurchaseTableRow(_ref) {
  var name = _ref.name,
      stock = _ref.stock,
      price = _ref.price,
      id = _ref.id;
  return "\n<tr>\n  <td class=\"product-name\">".concat(name, "</td>\n  <td class=\"product-price\">").concat(price, "</td>\n  <td class=\"product-stock\">").concat(stock, "</td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"purchase-product-button\" data-product-id=").concat(id, ">\uAD6C\uB9E4</button>\n    </div>\n  </td>\n</tr>");
};
var purchaseTemplate = "<section>\n<h2 hidden aria-labelledby=\"purchase-product\">\uC0C1\uD488 \uAD6C\uB9E4</h2>\n<form class=\"input-money-form\" id=\"purchase-product-form\">\n  <label for=\"purchase-product-form\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694</label>\n  <div>\n    <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" min=\"10\" max=\"10000\"/>\n    <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n  </div>\n</form>\n<p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"total-money\">0</span>\uC6D0</p>\n</section>\n<section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n  <table id=\"product-status-table\">\n    <caption>\n      \uAD6C\uB9E4\uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\n    </caption>\n    <tr>\n      <th>\uC0C1\uD488\uBA85</th>\n      <th>\uAC00\uACA9</th>\n      <th>\uC218\uB7C9</th>\n      <th>\uAD00\uB9AC</th>\n    </tr>\n</table>\n</section>\n  <section class=\"table-section\" title=\"\uC790\uD310\uAE30 \uD604\uD669\">\n  <table id=\"coin-status-table\">\n    <caption>\n      \uC794\uB3C8\uBC18\uD658\n    </caption>\n    <tr>\n      <th>\uB3D9\uC804</th>\n      <th>\uAC1C\uC218</th>\n    </tr>\n    <tr>\n      <td>500\uC6D0</td>\n      <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>100\uC6D0</td>\n      <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>50\uC6D0</td>\n      <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>10\uC6D0</td>\n      <td data-coin-name='TEN_WON'>0\uAC1C</td>\n    </tr>\n  </table>\n  <button id=\"give-change-button\">\uBC18\uD658</button>\n</section>";

/***/ }),

/***/ "./src/js/view/pages/signUp/index.js":
/*!*******************************************!*\
  !*** ./src/js/view/pages/signUp/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpTab)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/event */ "./src/js/utils/event.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template */ "./src/js/view/pages/signUp/template.js");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }





var _signUpContainer = /*#__PURE__*/new WeakMap();

var _signUpForm = /*#__PURE__*/new WeakMap();

var _emailInput = /*#__PURE__*/new WeakMap();

var _nameInput = /*#__PURE__*/new WeakMap();

var _passwordInput = /*#__PURE__*/new WeakMap();

var _passwordConfirmInput = /*#__PURE__*/new WeakMap();

var _handlesignUpForm = /*#__PURE__*/new WeakMap();

var SignUpTab = /*#__PURE__*/function () {
  function SignUpTab() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUpTab);

    _classPrivateFieldInitSpec(this, _signUpContainer, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _signUpForm, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _emailInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _nameInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _passwordConfirmInput, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _handlesignUpForm, {
      writable: true,
      value: function value(e) {
        e.preventDefault();

        var email = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _emailInput).value;

        var name = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _nameInput).value;

        var password = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordInput).value;

        if (password !== (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, _passwordConfirmInput).value) {
          (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.generateSnackBar)('비밀번호와 비밀번호 확인이 일치하지않습니다.');
          return;
        }

        (0,_utils_event__WEBPACK_IMPORTED_MODULE_5__.emitEvent)(_this.element, 'sign-up', {
          email: email,
          name: name,
          password: password
        });
      }
    });

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _signUpContainer, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.createElementByTemplate)('div', _template__WEBPACK_IMPORTED_MODULE_6__["default"]));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer).id = 'app';

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _signUpForm, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#sign-up-form', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _emailInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#sign-up-email', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _nameInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#sign-up-name', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _passwordInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#sign-up-password', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _passwordConfirmInput, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.selectDom)('#sign-up-password-confirm', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer)));

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpForm).addEventListener('submit', (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _handlesignUpForm));
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUpTab, [{
    key: "element",
    get: function get() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _signUpContainer);
    }
  }]);

  return SignUpTab;
}();



/***/ }),

/***/ "./src/js/view/pages/signUp/template.js":
/*!**********************************************!*\
  !*** ./src/js/view/pages/signUp/template.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var signUpTemplate = "<main>\n<h1 class=\"user-title\">\uD68C\uC6D0\uAC00\uC785</h1>\n<form id=\"sign-up-form\" class=\"user-form\">\n  <label>\uC774\uBA54\uC77C</label>\n  <input type=\"email\" placeholder=\"\uC774\uBA54\uC77C \uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"sign-up-email\" required />\n  <label>\uC774\uB984</label>\n  <input type=\"text\" placeholder=\"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"sign-up-name\" required />\n  <label>\uBE44\uBC00\uBC88\uD638</label>\n  <input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"sign-up-password\" required />\n  <label>\uBE44\uBC00\uBC88\uD638 \uD655\uC778</label>\n  <input type=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\" class=\"user-form--input\" id=\"sign-up-password-confirm\" required />\n  <button type=\"submit\" class=\"user-form--button\">\uD655\uC778</button>\n</form>\n</main>";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (signUpTemplate);

/***/ }),

/***/ "./src/js/view/template.js":
/*!*********************************!*\
  !*** ./src/js/view/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "manageProductTemplate": () => (/* binding */ manageProductTemplate),
/* harmony export */   "addChangeTemplate": () => (/* binding */ addChangeTemplate),
/* harmony export */   "productTableRow": () => (/* binding */ productTableRow),
/* harmony export */   "updateProductTableRow": () => (/* binding */ updateProductTableRow),
/* harmony export */   "purchaseTemplate": () => (/* binding */ purchaseTemplate),
/* harmony export */   "productPurchaseTableRow": () => (/* binding */ productPurchaseTableRow),
/* harmony export */   "notFoundTemplate": () => (/* binding */ notFoundTemplate)
/* harmony export */ });
var manageProductTemplate = "\n<section title=\"\uC0C1\uD488 \uC815\uBCF4\">\n  <form id=\"add-product-form\">\n    <fieldset>\n      <legend>\uCD94\uAC00\uD560 \uC0C1\uD488 \uC815\uBCF4\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.</legend>\n      <input type=\"text\" id=\"add-product-name-input\" placeholder=\"\uC0C1\uD488\uBA85\" required/>\n      <input type=\"number\" id=\"add-product-price-input\" placeholder=\"\uAC00\uACA9\" min=\"100\" max=\"10000\" required/>\n      <input type=\"number\" id=\"add-product-stock-input\" placeholder=\"\uC218\uB7C9\" min=\"1\" max=\"20\" required/>\n      <button type=\"submit\" class=\"submit-button\">\uCD94\uAC00</button>\n    </fieldset>\n  </form>\n</section>\n<section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n  <table id=\"product-status-table\">\n    <caption>\n      \uC0C1\uD488 \uD604\uD669\n    </caption>\n    <tr>\n      <th>\uC0C1\uD488\uBA85</th>\n      <th>\uAC00\uACA9</th>\n      <th>\uC218\uB7C9</th>\n      <th>\uAD00\uB9AC</th>\n    </tr>\n  </table>\n</section>";
var addChangeTemplate = "\n<section title=\"\uC794\uB3C8 \uCDA9\uC804\">\n  <form class=\"input-money-form\" id=\"add-change-form\">\n    <label for=\"\">\uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD560 \uAE08\uC561\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694</label>\n    <div>\n      <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" />\n      <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n    </div>\n  </form>\n  <p>\uD604\uC7AC \uBCF4\uC720 \uAE08\uC561: <span id=\"total-change\">0</span>\uC6D0</p>\n</section>\n<section class=\"table-section\" title=\"\uC790\uD310\uAE30 \uD604\uD669\">\n  <table id=\"coin-status-table\">\n    <caption>\n      \uC790\uD310\uAE30\uAC00 \uBCF4\uC720\uD55C \uB3D9\uC804\n    </caption>\n    <tr>\n      <th>\uB3D9\uC804</th>\n      <th>\uAC1C\uC218</th>\n    </tr>\n    <tr>\n      <td>500\uC6D0</td>\n      <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>100\uC6D0</td>\n      <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>50\uC6D0</td>\n      <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>10\uC6D0</td>\n      <td data-coin-name='TEN_WON'>0\uAC1C</td>\n    </tr>\n  </table>\n</section>";
var productTableRow = function productTableRow(_ref) {
  var name = _ref.name,
      price = _ref.price,
      stock = _ref.stock,
      id = _ref.id;
  return "\n<tr>\n  <td class=\"product-name\">".concat(name, "</td>\n  <td class=\"product-price\">").concat(price, "</td>\n  <td class=\"product-stock\">").concat(stock, "</td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"update-product-button\" data-product-id=").concat(id, ">\uC218\uC815</button>\n      <button type=\"button\" class=\"remove-product-button\" data-product-id=").concat(id, ">\uC0AD\uC81C</button>\n    </div>\n  </td>\n</tr>\n");
};
var updateProductTableRow = function updateProductTableRow(_ref2) {
  var name = _ref2.name,
      price = _ref2.price,
      stock = _ref2.stock,
      id = _ref2.id;
  return "\n<tr>\n  <td><input type=\"text\" class=\"update-product-name-input\" value=\"".concat(name, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-price-input\" value=\"").concat(price, "\" /></td>\n  <td><input type=\"number\" class=\"update-product-stock-input\" value=\"").concat(stock, "\" /></td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"confirm-update-button\" data-product-id=").concat(id, ">\n      \uD655\uC778\n      </button>\n    </div>\n  </td>\n</tr>\n");
};
var purchaseTemplate = "<section>\n<h2 hidden aria-labelledby=\"purchase-product\">\uC0C1\uD488 \uAD6C\uB9E4</h2>\n<form class=\"input-money-form\" id=\"purchase-product-form\">\n  <label for=\"purchase-product-form\">\uC0C1\uD488\uC744 \uAD6C\uB9E4\uD560 \uAE08\uC561\uC744 \uD22C\uC785\uD574\uC8FC\uC138\uC694</label>\n  <div>\n    <input type=\"number\" id=\"money-input\" placeholder=\"\uAE08\uC561\" min=\"10\" max=\"10000\"/>\n    <button type=\"submit\" class=\"submit-button\">\uCDA9\uC804</button>\n  </div>\n</form>\n<p>\uD22C\uC785\uD55C \uAE08\uC561: <span id=\"total-money\">0</span>\uC6D0</p>\n</section>\n<section class=\"table-section\" title=\"\uC0C1\uD488 \uD604\uD669\">\n  <table id=\"product-status-table\">\n    <caption>\n      \uAD6C\uB9E4\uAC00\uB2A5 \uC0C1\uD488 \uD604\uD669\n    </caption>\n    <tr>\n      <th>\uC0C1\uD488\uBA85</th>\n      <th>\uAC00\uACA9</th>\n      <th>\uC218\uB7C9</th>\n      <th>\uAD00\uB9AC</th>\n    </tr>\n</table>\n</section>\n  <section class=\"table-section\" title=\"\uC790\uD310\uAE30 \uD604\uD669\">\n  <table id=\"coin-status-table\">\n    <caption>\n      \uC794\uB3C8\uBC18\uD658\n    </caption>\n    <tr>\n      <th>\uB3D9\uC804</th>\n      <th>\uAC1C\uC218</th>\n    </tr>\n    <tr>\n      <td>500\uC6D0</td>\n      <td data-coin-name='FIVE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>100\uC6D0</td>\n      <td data-coin-name='ONE_HUNDRED_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>50\uC6D0</td>\n      <td data-coin-name='FIFTY_WON'>0\uAC1C</td>\n    </tr>\n    <tr>\n      <td>10\uC6D0</td>\n      <td data-coin-name='TEN_WON'>0\uAC1C</td>\n    </tr>\n  </table>\n  <button id=\"give-change-button\">\uBC18\uD658</button>\n</section>";
var productPurchaseTableRow = function productPurchaseTableRow(_ref3) {
  var name = _ref3.name,
      stock = _ref3.stock,
      price = _ref3.price,
      id = _ref3.id;
  return "\n<tr>\n  <td class=\"product-name\">".concat(name, "</td>\n  <td class=\"product-price\">").concat(price, "</td>\n  <td class=\"product-stock\">").concat(stock, "</td>\n  <td>\n    <div class=\"table-button-wrapper\">\n      <button type=\"button\" class=\"purchase-product-button\" data-product-id=").concat(id, ">\uAD6C\uB9E4</button>\n    </div>\n  </td>\n</tr>");
};
var notFoundTemplate = "\n<section title=\"\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD398\uC774\uC9C0\" class=\"not-found-section\">\n  <h2>\uD83D\uDED2 Page Not Found</h2>\n  <a href=\"/\" class=\"tab-menu-button\">\uC2DC\uC791 \uD398\uC774\uC9C0\uB85C</a>\n</section>";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/base.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  background-color: #f9f9f9;\n  display: flex;\n  justify-content: center;\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  margin-top: 32px;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 45px 60px;\n  gap: 52px;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:visited {\n  color: black;\n}\n\nbutton {\n  padding: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n\nbutton:hover {\n  background-color: #00bcd429;\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/base.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B;;wEAEsE;AACxE;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,uBAAuB;EACvB,qCAAqC;EACrC,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;AACf;;AAEA,kBAAkB;AAClB,gCAAgC;AAChC;;EAEE,wBAAwB;EACxB,SAAS;AACX;;AAEA,YAAY;AACZ;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX","sourcesContent":["@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  word-break: keep-all;\n  line-height: 1.5;\n  /* 다양한 환경에서 동일한 글꼴 환경 세팅 */\n  font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto,\n    'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',\n    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;\n}\n\nbody {\n  background-color: #f9f9f9;\n  display: flex;\n  justify-content: center;\n}\n\n#app {\n  width: 600px;\n  min-height: 675px;\n  margin-top: 32px;\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 45px 60px;\n  gap: 52px;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 52px;\n  width: 100%;\n}\n\na {\n  text-decoration: none;\n  color: black;\n}\n\na:visited {\n  color: black;\n}\n\nbutton {\n  padding: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #f5f5f5;\n}\n\nbutton:hover {\n  background-color: #00bcd429;\n}\n\ninput:focus {\n  outline: none;\n}\n\n/* 숫자 입력란 화살표 숨김 */\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type='number'] {\n  -moz-appearance: textfield;\n}\n\n.not-found-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/form.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset {\n  border: none;\n  display: flex;\n  gap: 5px;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  padding: 8px;\n}\n\n.submit-button {\n  padding: 10px 15px;\n  background-color: #00bcd4;\n  font-weight: bold;\n  color: white;\n}\n\n.submit-button:hover {\n  background-color: #80deea;\n  color: #424242;\n}\n\n.input-money-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 5px;\n}\n\n.input-money-form input {\n  width: 300px;\n}\n", "",{"version":3,"sources":["webpack://./src/css/form.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd","sourcesContent":["fieldset {\n  border: none;\n  display: flex;\n  gap: 5px;\n}\n\nlegend {\n  margin-bottom: 5px;\n}\n\ninput {\n  width: 120px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n  padding: 8px;\n}\n\n.submit-button {\n  padding: 10px 15px;\n  background-color: #00bcd4;\n  font-weight: bold;\n  color: white;\n}\n\n.submit-button:hover {\n  background-color: #80deea;\n  color: #424242;\n}\n\n.input-money-form {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  margin-bottom: 5px;\n}\n\n.input-money-form input {\n  width: 300px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./base.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/base.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/form.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./table.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./login.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./snackbar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css");
// Imports








var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_base_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_table_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_login_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_snackbar_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/login.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/login.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".user-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nlabel {\n  display: block;\n  font-weight: 400;\n}\n\n.user-form {\n  width: 80%;\n}\n\n.user-form--input {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.user-form--button {\n  width: 100%;\n  background-color: #00bcd4;\n  color: white;\n  margin-bottom: 1rem;\n}\n\n.user-form--button:hover {\n  background-color: #80deea;\n}\n\n#signup--anchor {\n  color: #3581d7;\n  text-decoration: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/login.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,qBAAqB;AACvB","sourcesContent":[".user-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nlabel {\n  display: block;\n  font-weight: 400;\n}\n\n.user-form {\n  width: 80%;\n}\n\n.user-form--input {\n  width: 100%;\n  margin-bottom: 1rem;\n}\n.user-form--button {\n  width: 100%;\n  background-color: #00bcd4;\n  color: white;\n  margin-bottom: 1rem;\n}\n\n.user-form--button:hover {\n  background-color: #80deea;\n}\n\n#signup--anchor {\n  color: #3581d7;\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\n.tab-menu-button {\n  color: #000000;\n  padding: 10px 0;\n  width: 120px;\n  font-size: 1rem;\n  padding: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #f5f5f5;\n  text-align: center;\n  text-decoration: none;\n}\n\n.tab-menu-button.current {\n  background-color: #00bcd429;\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: #00bcd429;\n}\n\n.tab-menu-button:visited {\n  color: #000000;\n}\n\n.user-navigation {\n  position: absolute;\n  right: 0;\n}\n\n.user-navigation-profile--button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-decoration: none;\n  background-color: #d6f4f8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-navigation-profile--button:visited {\n  color: black;\n}\n\n.user-navigation--ul {\n  position: absolute;\n  top: 45px;\n  right: 0;\n  background-color: white;\n  list-style: none;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid rgb(177, 177, 177);\n  font-weight: 400;\n}\n\n.user-navigation--li {\n  width: 80px;\n  height: 30px;\n  text-align: ellipsis;\n  cursor: pointer;\n  text-align: center;\n}\n\n.user-navigation--li:hover {\n  animation: deepening 0.5s forwards;\n  border-radius: 10px;\n}\n\n#user-navigation-profile {\n  color: black;\n}\n\n@keyframes deepening {\n  to {\n    background-color: #dfdfde;\n  }\n}\n\n.hide {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,cAAc;EACd,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,uBAAuB;EACvB,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,aAAa;AACf","sourcesContent":["header {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  position: relative;\n  align-items: center;\n  gap: 32px;\n}\n\n#app-title {\n  font-size: 34px;\n  font-weight: 600;\n}\n\nnav {\n  display: flex;\n  gap: 10px;\n}\n\n.tab-menu-button {\n  color: #000000;\n  padding: 10px 0;\n  width: 120px;\n  font-size: 1rem;\n  padding: 8px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: #f5f5f5;\n  text-align: center;\n  text-decoration: none;\n}\n\n.tab-menu-button.current {\n  background-color: #00bcd429;\n  cursor: default;\n}\n\n.tab-menu-button:hover {\n  background-color: #00bcd429;\n}\n\n.tab-menu-button:visited {\n  color: #000000;\n}\n\n.user-navigation {\n  position: absolute;\n  right: 0;\n}\n\n.user-navigation-profile--button {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  text-decoration: none;\n  background-color: #d6f4f8;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.user-navigation-profile--button:visited {\n  color: black;\n}\n\n.user-navigation--ul {\n  position: absolute;\n  top: 45px;\n  right: 0;\n  background-color: white;\n  list-style: none;\n  color: black;\n  border-radius: 10px;\n  border: 1px solid rgb(177, 177, 177);\n  font-weight: 400;\n}\n\n.user-navigation--li {\n  width: 80px;\n  height: 30px;\n  text-align: ellipsis;\n  cursor: pointer;\n  text-align: center;\n}\n\n.user-navigation--li:hover {\n  animation: deepening 0.5s forwards;\n  border-radius: 10px;\n}\n\n#user-navigation-profile {\n  color: black;\n}\n\n@keyframes deepening {\n  to {\n    background-color: #dfdfde;\n  }\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/snackbar.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/snackbar.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,UAAU;EACV,SAAS;EACT,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,iDAAiD;EACjD,yCAAyC;AAC3C;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,SAAS;IACT,UAAU;EACZ;EACA;IACE,YAAY;IACZ,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF;;AAEA;EACE;IACE,YAAY;IACZ,UAAU;EACZ;EACA;IACE,SAAS;IACT,UAAU;EACZ;AACF","sourcesContent":["#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/table.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/table.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".table-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\ncaption {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\ntd,\nth {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px 0;\n  text-align: center;\n}\n\ntd {\n  height: 65px;\n}\n\nth {\n  border-top: 1px solid #dcdcdc;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 0 auto;\n}\n\n.table-button-wrapper {\n  width: 90px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.confirm-update-button {\n  width: 100%;\n}\n\n.purchase-product-button {\n  width: 100%;\n}\n\n#product-status-table tr input {\n  width: 90%;\n  margin: auto;\n  font-size: 1rem;\n}\n\n#product-status-table th:nth-child(1) {\n  width: 160px;\n}\n#product-status-table th:nth-child(2) {\n  width: 60px;\n}\n#product-status-table th:nth-child(3) {\n  width: 50px;\n}\n#product-status-table th:nth-child(4) {\n  width: 140px;\n}\n\n#coin-status-table td {\n  width: 100px;\n}\n\n#give-change-button {\n  width: 100px;\n  height: 32px;\n  margin: 0 auto;\n}\n", "",{"version":3,"sources":["webpack://./src/css/table.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;;EAEE,gCAAgC;EAChC,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,yBAAyB;EACzB,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,QAAQ;AACV;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb;AACA;EACE,WAAW;AACb;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB","sourcesContent":[".table-section {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\ncaption {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\ntd,\nth {\n  border-bottom: 1px solid #dcdcdc;\n  padding: 8px 0;\n  text-align: center;\n}\n\ntd {\n  height: 65px;\n}\n\nth {\n  border-top: 1px solid #dcdcdc;\n}\n\ntable {\n  border-collapse: collapse;\n  margin: 0 auto;\n}\n\n.table-button-wrapper {\n  width: 90px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n}\n\n.confirm-update-button {\n  width: 100%;\n}\n\n.purchase-product-button {\n  width: 100%;\n}\n\n#product-status-table tr input {\n  width: 90%;\n  margin: auto;\n  font-size: 1rem;\n}\n\n#product-status-table th:nth-child(1) {\n  width: 160px;\n}\n#product-status-table th:nth-child(2) {\n  width: 60px;\n}\n#product-status-table th:nth-child(3) {\n  width: 50px;\n}\n#product-status-table th:nth-child(4) {\n  width: 140px;\n}\n\n#coin-status-table td {\n  width: 100px;\n}\n\n#give-change-button {\n  width: 100px;\n  height: 32px;\n  margin: 0 auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/domain/Coin.ts":
/*!*******************************!*\
  !*** ./src/js/domain/Coin.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Coin)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Coin_name, _Coin_value, _Coin_count;
class Coin {
    constructor(name, value) {
        _Coin_name.set(this, void 0);
        _Coin_value.set(this, void 0);
        _Coin_count.set(this, void 0);
        __classPrivateFieldSet(this, _Coin_name, name, "f");
        __classPrivateFieldSet(this, _Coin_value, value, "f");
        __classPrivateFieldSet(this, _Coin_count, 0, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Coin_name, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _Coin_value, "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _Coin_count, "f");
    }
    consumed(count) {
        __classPrivateFieldSet(this, _Coin_count, __classPrivateFieldGet(this, _Coin_count, "f") - count, "f");
    }
    added(count) {
        __classPrivateFieldSet(this, _Coin_count, __classPrivateFieldGet(this, _Coin_count, "f") + count, "f");
    }
}
_Coin_name = new WeakMap(), _Coin_value = new WeakMap(), _Coin_count = new WeakMap();


/***/ }),

/***/ "./src/js/domain/MoneyBox.ts":
/*!***********************************!*\
  !*** ./src/js/domain/MoneyBox.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoneyBox)
/* harmony export */ });
/* harmony import */ var _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomStrategy */ "./src/js/domain/RandomStrategy.ts");
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ "./src/js/domain/Coin.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MoneyBox_coinStatusList, _MoneyBox_coinDistributeStrategy;


class MoneyBox {
    constructor() {
        _MoneyBox_coinStatusList.set(this, void 0);
        _MoneyBox_coinDistributeStrategy.set(this, void 0);
        __classPrivateFieldSet(this, _MoneyBox_coinStatusList, [
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('FIVE_HUNDRED_WON', 500),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('ONE_HUNDRED_WON', 100),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('FIFTY_WON', 50),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('TEN_WON', 10),
        ], "f");
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, _RandomStrategy__WEBPACK_IMPORTED_MODULE_0__["default"], "f");
    }
    set strategy(strategy) {
        __classPrivateFieldSet(this, _MoneyBox_coinDistributeStrategy, strategy, "f");
    }
    get totalChange() {
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").reduce((totalAmount, { value, count }) => totalAmount + value * count, 0);
    }
    get coinStatus() {
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").reduce((totalStatus, { name, count }) => {
            totalStatus[name] = count;
            return totalStatus;
        }, {
            FIVE_HUNDRED_WON: 0,
            ONE_HUNDRED_WON: 0,
            FIFTY_WON: 0,
            TEN_WON: 0,
        });
    }
    get coinStatusList() {
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f");
    }
    addChange(money) {
        const newCoins = __classPrivateFieldGet(this, _MoneyBox_coinDistributeStrategy, "f").distribute(money);
        __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").forEach((coin, index) => {
            coin.added(newCoins[index].count);
        });
    }
    giveChange(money) {
        let inputMoney = money;
        return __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f").reduce((totalStatus, { name, value, count }, idx) => {
            totalStatus[name] = Math.min(Math.floor(inputMoney / value), count);
            inputMoney -= totalStatus[name] * value;
            __classPrivateFieldGet(this, _MoneyBox_coinStatusList, "f")[idx].consumed(totalStatus[name]);
            return totalStatus;
        }, {
            FIVE_HUNDRED_WON: 0,
            ONE_HUNDRED_WON: 0,
            FIFTY_WON: 0,
            TEN_WON: 0,
        });
    }
}
_MoneyBox_coinStatusList = new WeakMap(), _MoneyBox_coinDistributeStrategy = new WeakMap();


/***/ }),

/***/ "./src/js/domain/RandomStrategy.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/RandomStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _Coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coin */ "./src/js/domain/Coin.ts");


function getRandomCoin(moneyLeft, value) {
    const maxCount = Math.floor(moneyLeft / value);
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.pickNumberInRange)(0, maxCount);
}
const RandomStrategy = {
    // eslint-disable-next-line max-lines-per-function
    distribute(inputMoney) {
        const coinStatusList = [
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('FIVE_HUNDRED_WON', 500),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('ONE_HUNDRED_WON', 100),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('FIFTY_WON', 50),
            new _Coin__WEBPACK_IMPORTED_MODULE_1__["default"]('TEN_WON', 10),
        ];
        let moneyLeft = inputMoney;
        coinStatusList.forEach((coin) => {
            if (coin.name === 'TEN_WON') {
                coin.added(moneyLeft / coin.value);
                return;
            }
            const randomCount = getRandomCoin(moneyLeft, coin.value);
            moneyLeft -= coin.value * randomCount;
            coin.added(randomCount);
        });
        return coinStatusList;
    },
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RandomStrategy);


/***/ }),

/***/ "./src/js/domain/User.ts":
/*!*******************************!*\
  !*** ./src/js/domain/User.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/user.js */ "./src/js/api/user.js");
/* harmony import */ var _utils_cookie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/cookie.js */ "./src/js/utils/cookie.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_instances, _User_accessToken, _User_isLogined, _User_id, _User_name, _User_email, _User_validateName, _User_validatePassword;




class User {
    constructor() {
        _User_instances.add(this);
        _User_accessToken.set(this, void 0);
        _User_isLogined.set(this, void 0);
        _User_id.set(this, void 0);
        _User_name.set(this, void 0);
        _User_email.set(this, void 0);
        __classPrivateFieldSet(this, _User_accessToken, (0,_utils_cookie_js__WEBPACK_IMPORTED_MODULE_1__.getCookie)('accessToken'), "f");
        __classPrivateFieldSet(this, _User_isLogined, false, "f");
        __classPrivateFieldSet(this, _User_name, null, "f");
        __classPrivateFieldSet(this, _User_email, null, "f");
    }
    get isLogined() {
        return __classPrivateFieldGet(this, _User_isLogined, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _User_name, "f");
    }
    get email() {
        return __classPrivateFieldGet(this, _User_email, "f");
    }
    init() {
        __classPrivateFieldSet(this, _User_accessToken, null, "f");
        __classPrivateFieldSet(this, _User_isLogined, false, "f");
        __classPrivateFieldSet(this, _User_name, null, "f");
        __classPrivateFieldSet(this, _User_email, null, "f");
    }
    async initLoginStatus() {
        if (__classPrivateFieldGet(this, _User_accessToken, "f")) {
            try {
                const res = await _api_user_js__WEBPACK_IMPORTED_MODULE_0__["default"].searchInfo(__classPrivateFieldGet(this, _User_accessToken, "f"));
                __classPrivateFieldSet(this, _User_isLogined, true, "f");
                __classPrivateFieldSet(this, _User_id, res.id, "f");
                __classPrivateFieldSet(this, _User_email, res.email, "f");
                __classPrivateFieldSet(this, _User_name, res.name, "f");
            }
            catch (_a) {
                (0,_utils_cookie_js__WEBPACK_IMPORTED_MODULE_1__.expireCookie)('accessToken');
                __classPrivateFieldSet(this, _User_isLogined, false, "f");
                __classPrivateFieldSet(this, _User_id, null, "f");
            }
        }
    }
    async signIn(email, password) {
        if (__classPrivateFieldGet(this, _User_instances, "m", _User_validatePassword).call(this, password)) {
            const { accessToken, user: { name, id }, } = await _api_user_js__WEBPACK_IMPORTED_MODULE_0__["default"].signIn(email, password);
            __classPrivateFieldSet(this, _User_id, id, "f");
            __classPrivateFieldSet(this, _User_email, email, "f");
            __classPrivateFieldSet(this, _User_name, name, "f");
            __classPrivateFieldSet(this, _User_isLogined, true, "f");
            (0,_utils_cookie_js__WEBPACK_IMPORTED_MODULE_1__.setCookie)('accessToken', accessToken);
        }
    }
    async signUp(email, name, password) {
        if (__classPrivateFieldGet(this, _User_instances, "m", _User_validateName).call(this, name) && __classPrivateFieldGet(this, _User_instances, "m", _User_validatePassword).call(this, password)) {
            const { accessToken, user: { id }, } = await _api_user_js__WEBPACK_IMPORTED_MODULE_0__["default"].signUp(email, name, password);
            __classPrivateFieldSet(this, _User_isLogined, true, "f");
            __classPrivateFieldSet(this, _User_id, id, "f");
            __classPrivateFieldSet(this, _User_email, email, "f");
            __classPrivateFieldSet(this, _User_name, name, "f");
            (0,_utils_cookie_js__WEBPACK_IMPORTED_MODULE_1__.setCookie)('accessToken', accessToken);
        }
    }
    async userInfo() {
        const { email, name, id } = await _api_user_js__WEBPACK_IMPORTED_MODULE_0__["default"].searchInfo(__classPrivateFieldGet(this, _User_accessToken, "f"));
        __classPrivateFieldSet(this, _User_id, id, "f");
        __classPrivateFieldSet(this, _User_name, name, "f");
        __classPrivateFieldSet(this, _User_email, email, "f");
    }
    async updateUser(email, name, password) {
        if (__classPrivateFieldGet(this, _User_instances, "m", _User_validateName).call(this, name) && __classPrivateFieldGet(this, _User_instances, "m", _User_validatePassword).call(this, password)) {
            const { id, email: newEmail, name: newName, } = await _api_user_js__WEBPACK_IMPORTED_MODULE_0__["default"].update(__classPrivateFieldGet(this, _User_accessToken, "f"), __classPrivateFieldGet(this, _User_id, "f"), {
                email,
                name,
                password,
            });
            __classPrivateFieldSet(this, _User_id, id, "f");
            __classPrivateFieldSet(this, _User_email, newEmail, "f");
            __classPrivateFieldSet(this, _User_name, newName, "f");
        }
    }
}
_User_accessToken = new WeakMap(), _User_isLogined = new WeakMap(), _User_id = new WeakMap(), _User_name = new WeakMap(), _User_email = new WeakMap(), _User_instances = new WeakSet(), _User_validateName = function _User_validateName(name) {
    const nameValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_2__.isInvalidLengthName, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.INVALID_NAME_LENGTH },
    ];
    return (0,_validator__WEBPACK_IMPORTED_MODULE_2__.validateData)(name, nameValidator);
}, _User_validatePassword = function _User_validatePassword(password) {
    const passwordValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_2__.isInvalidPassword, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_3__.ERROR_MESSAGE.INVALID_PASSWORD },
    ];
    return (0,_validator__WEBPACK_IMPORTED_MODULE_2__.validateData)(password, passwordValidator);
};


/***/ }),

/***/ "./src/js/domain/VendingMachine.ts":
/*!*****************************************!*\
  !*** ./src/js/domain/VendingMachine.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachine)
/* harmony export */ });
/* harmony import */ var _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VendingMachineProduct */ "./src/js/domain/VendingMachineProduct.ts");
/* harmony import */ var _MoneyBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoneyBox */ "./src/js/domain/MoneyBox.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/js/utils/index.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VendingMachine_instances, _VendingMachine_productList, _VendingMachine_moneyBox, _VendingMachine_totalMoney, _VendingMachine_validateProduct, _VendingMachine_validateChange, _VendingMachine_validateUniqueProductName, _VendingMachine_validateProductIdInList, _VendingMachine_validateInputMoney;





class VendingMachine {
    constructor() {
        _VendingMachine_instances.add(this);
        _VendingMachine_productList.set(this, void 0);
        _VendingMachine_moneyBox.set(this, void 0);
        _VendingMachine_totalMoney.set(this, void 0);
        __classPrivateFieldSet(this, _VendingMachine_productList, {}, "f");
        __classPrivateFieldSet(this, _VendingMachine_moneyBox, new _MoneyBox__WEBPACK_IMPORTED_MODULE_1__["default"](), "f");
        __classPrivateFieldSet(this, _VendingMachine_totalMoney, 0, "f");
    }
    get productList() {
        return __classPrivateFieldGet(this, _VendingMachine_productList, "f");
    }
    get totalChange() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").totalChange;
    }
    get coinStatus() {
        return __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").coinStatus;
    }
    get totalMoney() {
        return __classPrivateFieldGet(this, _VendingMachine_totalMoney, "f");
    }
    addChange(money) {
        if (__classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateChange).call(this, money)) {
            __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").addChange(money);
        }
    }
    addProduct(data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        const newId = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.generateRandomHexString)();
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[newId] = new _VendingMachineProduct__WEBPACK_IMPORTED_MODULE_0__["default"](data);
        return newId;
    }
    updateProduct(productId, data) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        if (data.name !== __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].name) {
            __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateUniqueProductName).call(this, data.name);
        }
        __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].modify(data);
    }
    sellProduct(productId) {
        if (__classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].stock === 0) {
            throw new Error('해당 상품은 품절입니다.');
        }
        if (__classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProduct).call(this, productId)) {
            __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].sell();
            __classPrivateFieldSet(this, _VendingMachine_totalMoney, __classPrivateFieldGet(this, _VendingMachine_totalMoney, "f") - __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].price, "f");
        }
    }
    giveChange() {
        const { totalChange } = __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f");
        const coinStatus = __classPrivateFieldGet(this, _VendingMachine_moneyBox, "f").giveChange(__classPrivateFieldGet(this, _VendingMachine_totalMoney, "f"));
        __classPrivateFieldSet(this, _VendingMachine_totalMoney, Math.max(__classPrivateFieldGet(this, _VendingMachine_totalMoney, "f") - totalChange, 0), "f");
        return coinStatus;
    }
    removeProduct(productId) {
        __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
        delete __classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId];
    }
    insertMoney(money) {
        if (__classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateInputMoney).call(this, money)) {
            __classPrivateFieldSet(this, _VendingMachine_totalMoney, __classPrivateFieldGet(this, _VendingMachine_totalMoney, "f") + money, "f");
        }
    }
}
_VendingMachine_productList = new WeakMap(), _VendingMachine_moneyBox = new WeakMap(), _VendingMachine_totalMoney = new WeakMap(), _VendingMachine_instances = new WeakSet(), _VendingMachine_validateProduct = function _VendingMachine_validateProduct(productId) {
    if (__classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId].price > __classPrivateFieldGet(this, _VendingMachine_totalMoney, "f")) {
        throw new Error('금액이 부족합니다');
    }
    __classPrivateFieldGet(this, _VendingMachine_instances, "m", _VendingMachine_validateProductIdInList).call(this, productId);
    return true;
}, _VendingMachine_validateChange = function _VendingMachine_validateChange(money) {
    const changeValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isBelowMinCharge, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.BELOW_MIN_CHANGE },
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitMoney, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.INVALID_UNIT_CHANGE },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalChange,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.EXCEED_MAX_TOTAL_CHANGE,
        },
    ];
    return (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, totalMoney: this.totalChange }, changeValidator);
}, _VendingMachine_validateUniqueProductName = function _VendingMachine_validateUniqueProductName(name) {
    if (Object.values(__classPrivateFieldGet(this, _VendingMachine_productList, "f")).some((product) => product.name === name)) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.DUPLICATE_PRODUCT_NAME);
    }
}, _VendingMachine_validateProductIdInList = function _VendingMachine_validateProductIdInList(productId) {
    if (__classPrivateFieldGet(this, _VendingMachine_productList, "f")[productId] === undefined) {
        throw new Error(_constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.NOT_FOUND_PRODUCT_ID);
    }
}, _VendingMachine_validateInputMoney = function _VendingMachine_validateInputMoney(money) {
    const inputMoneyValidator = [
        { testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.inValidUnitMoney, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.INVALID_UNIT_MONEY },
        {
            testFunc: _validator__WEBPACK_IMPORTED_MODULE_4__.isExceedMaxTotalMoney,
            errorMsg: _constants__WEBPACK_IMPORTED_MODULE_2__.ERROR_MESSAGE.EXCEED_MAX_TOTAL_MONEY,
        },
    ];
    return (0,_validator__WEBPACK_IMPORTED_MODULE_4__.validateData)({ money, totalMoney: __classPrivateFieldGet(this, _VendingMachine_totalMoney, "f") }, inputMoneyValidator);
};


/***/ }),

/***/ "./src/js/domain/VendingMachineProduct.ts":
/*!************************************************!*\
  !*** ./src/js/domain/VendingMachineProduct.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VendingMachineProduct)
/* harmony export */ });
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/js/domain/validator.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _VendingMachineProduct_name, _VendingMachineProduct_price, _VendingMachineProduct_stock;


class VendingMachineProduct {
    constructor({ name, price, stock }) {
        _VendingMachineProduct_name.set(this, void 0);
        _VendingMachineProduct_price.set(this, void 0);
        _VendingMachineProduct_stock.set(this, void 0);
        if (this.validateProduct({ name, price, stock })) {
            __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
            __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
            __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
        }
    }
    get name() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_name, "f");
    }
    get price() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_price, "f");
    }
    get stock() {
        return __classPrivateFieldGet(this, _VendingMachineProduct_stock, "f");
    }
    modify({ name, price, stock }) {
        if (this.validateProduct({ name, price, stock })) {
            __classPrivateFieldSet(this, _VendingMachineProduct_name, name, "f");
            __classPrivateFieldSet(this, _VendingMachineProduct_price, price, "f");
            __classPrivateFieldSet(this, _VendingMachineProduct_stock, stock, "f");
        }
    }
    sell() {
        __classPrivateFieldSet(this, _VendingMachineProduct_stock, __classPrivateFieldGet(this, _VendingMachineProduct_stock, "f") - 1, "f");
    }
    validateProduct(data) {
        const productValidator = [
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.hasEmptyInput, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.CONTAIN_EMPTY_FIELD_IN_FORM },
            {
                testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isOverMaxLengthName,
                errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.EXCEED_MAX_PRODUCT_NAME_LENGTH,
            },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isPriceOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_PRICE_RANGE },
            {
                testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isInvalidUnitPrice,
                errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_UNIT_PRODUCT_PRICE,
            },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isStockOutOfRange, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.OUT_OF_PRODUCT_STOCK_RANGE },
            { testFunc: _validator__WEBPACK_IMPORTED_MODULE_0__.isNotIntegerStock, errorMsg: _constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_MESSAGE.INVALID_PRODUCT_STOCK },
        ];
        return (0,_validator__WEBPACK_IMPORTED_MODULE_0__.validateData)(data, productValidator);
    }
}
_VendingMachineProduct_name = new WeakMap(), _VendingMachineProduct_price = new WeakMap(), _VendingMachineProduct_stock = new WeakMap();


/***/ }),

/***/ "./src/js/domain/validator.ts":
/*!************************************!*\
  !*** ./src/js/domain/validator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasEmptyInput": () => (/* binding */ hasEmptyInput),
/* harmony export */   "isOverMaxLengthName": () => (/* binding */ isOverMaxLengthName),
/* harmony export */   "isPriceOutOfRange": () => (/* binding */ isPriceOutOfRange),
/* harmony export */   "isInvalidUnitPrice": () => (/* binding */ isInvalidUnitPrice),
/* harmony export */   "isStockOutOfRange": () => (/* binding */ isStockOutOfRange),
/* harmony export */   "isNotIntegerStock": () => (/* binding */ isNotIntegerStock),
/* harmony export */   "isBelowMinCharge": () => (/* binding */ isBelowMinCharge),
/* harmony export */   "inValidUnitMoney": () => (/* binding */ inValidUnitMoney),
/* harmony export */   "isExceedMaxTotalChange": () => (/* binding */ isExceedMaxTotalChange),
/* harmony export */   "isExceedMaxTotalMoney": () => (/* binding */ isExceedMaxTotalMoney),
/* harmony export */   "isInvalidLengthName": () => (/* binding */ isInvalidLengthName),
/* harmony export */   "isInvalidPassword": () => (/* binding */ isInvalidPassword),
/* harmony export */   "validateData": () => (/* binding */ validateData)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/js/constants/index.js");

// product data validation
function hasEmptyInput({ name, price, stock }) {
    return !name || !price || !stock;
}
function isOverMaxLengthName({ name }) {
    return name.length > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_NAME_LENGTH;
}
function isPriceOutOfRange({ price }) {
    return price < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_PRICE || price > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_PRICE;
}
function isInvalidUnitPrice({ price }) {
    return price % _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.PRICE_UNIT !== 0;
}
function isStockOutOfRange({ stock }) {
    return stock > _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MAX_STOCK || stock < _constants__WEBPACK_IMPORTED_MODULE_0__.PRODUCT_RULES.MIN_STOCK;
}
function isNotIntegerStock({ stock }) {
    return !Number.isInteger(stock);
}
// money data validation
function isBelowMinCharge({ money }) {
    return money <= 0;
}
function inValidUnitMoney({ money }) {
    return money % _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.CHANGE_UNIT !== 0;
}
function isExceedMaxTotalChange({ money, totalMoney: totalChange, }) {
    return totalChange + money > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.MAX_TOTAL_CHANGE;
}
function isExceedMaxTotalMoney({ money, totalMoney, }) {
    return totalMoney + money > _constants__WEBPACK_IMPORTED_MODULE_0__.VENDING_MACHINE_RULES.MAX_TOTAL_INPUT_MONEY;
}
// user data validation
function isInvalidLengthName(name) {
    return name.length < 2 || name.length > 6;
}
function isInvalidPassword(password) {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])((?=.*\d)|(?=.*\W)).{8,16}$/;
    return !regExp.test(password);
}
// validator function
function validateData(data, validator) {
    validator.forEach(({ testFunc, errorMsg }) => {
        if (testFunc(data)) {
            throw new Error(errorMsg);
        }
    });
    return true;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/js/index.js");



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
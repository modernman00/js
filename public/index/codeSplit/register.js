(self["webpackChunkfamily"] = self["webpackChunkfamily"] || []).push([["codeSplit/register"],{

/***/ "./resources/asset/js/components/FormHelper.js":
/*!*****************************************************!*\
  !*** ./resources/asset/js/components/FormHelper.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormHelper)
/* harmony export */ });


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FormHelper = /*#__PURE__*/function () {
  function FormHelper(data) {
    _classCallCheck(this, FormHelper);

    this.data = data;
    this.error = [];
    this.result = 0;
  }

  _createClass(FormHelper, [{
    key: "id",
    value: function id(x) {
      return document.getElementById(x);
    }
    /**
     * general validation; check empty status, at least a single input, mobile length, white space
     */

  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "massValidate",
    value: function massValidate() {
      var _this = this;

      var reg = /[a-zA-Z0-9./@]/g;
      this.data.forEach(function (et) {
        var _iterator = _createForOfIteratorHelper(et),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var post = _step.value;

            // capture the error to a variable
            var errMsg = _this.id("".concat(post.name, "_error")); // rid it off the submit button


            if (post.type == 'submit' || post.name == 'token' || postName == "spouseName" || postName == "spouseMobile") {
              continue;
            } // check if there is no value


            var postName = post.name.replace('_', ' ');

            if (postName == "spouseName" || postName == "spouseMobile" || postName == "fatherMobile" || postName == "motherMobile") {
              if (post.value === "") {
                post.value = "11";
              }
            }

            if (post.value === '' || post.value === 'select') {
              errMsg.innerHTML = "<li style=color:'red';>".concat(postName, " cannot be left empty</li>");

              _this.error.push("<li style=color:'red';>".concat(postName, " cannot be left empty</li>"));
            } else if (post.value.match(reg) === null) {
              errMsg.innerHTML = "<li style=color:'red';> only letters and numbers are allowed<li>";

              _this.error.push("<li style=color:'red';> only letters and numbers are allowed<li>");
            } else {
              _this.result = 1;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
  }, {
    key: "emailVal",
    value: function emailVal() {
      var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      var msg = "<li style=color:'red';> Please enter a valid email</li>";
      var email = this.id('email').value;

      if (email.match(emailExp) === null) {
        this.id('email_error').innerHTML = msg;
        this.error.push(msg);
      }
    }
  }, {
    key: "clearError",
    value: function clearError() {
      var _this2 = this;

      this.error = []; // empty the array 

      this.data.forEach(function (el) {
        var _iterator2 = _createForOfIteratorHelper(el),
            _step2;

        try {
          var _loop = function _loop() {
            var post = _step2.value;

            if (post.id == 'submit' || post.name == 'token' || post.name == 'submit' || post.name == 'checkbox') {
              return "continue";
            }

            if (post.value != 'select') {
              _this2.id(post.id).addEventListener('keyup', function () {
                _this2.id("".concat(post.name, "_error")).innerHTML = '';
              });
            } else {
              _this2.id(post.id).addEventListener('change', function () {
                _this2.id("".concat(post.name, "_error")).innerHTML = '';
              });
            }
          };

          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      });
    }
    /**
     *
     * @param {input is the id of the input/ this is an array [as, it, it]} input
     * @param {* this is the max policy and it must be an integer} maxi
     */

  }, {
    key: "realTimeCheckLen",
    value: function realTimeCheckLen(input, maxi) {
      var _this3 = this;

      try {
        var _loop2 = function _loop2(i) {
          var theData = _this3.id("".concat(input[i], "_id"));

          if (theData == "") throw "empty dataInput";
          var max = maxi[i];

          var error = _this3.id("".concat(input[i], "_error"));

          if (theData) theData.maxLength = parseInt(max + 1);
          theData.addEventListener('keyup', function () {
            error.innerHTML = theData.value.length > max ? "You have reach the maximum limit" : "";
            _this3.id("".concat(input[i], "_help")).style.color = 'red';
            _this3.id("".concat(input[i], "_help")).style.fontSize = '10px';
            error.style.color = 'red';
            setTimeout(function () {
              _this3.id("".concat(input[i], "_help")).style.display = 'none';
            }, 5000);
          });
        };

        for (var i = 0; i < input.length; i++) {
          _loop2(i);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    /**
     * the id for the password error should be password_help
     * the id for your confirm pasword should confirm_password
     * it will return an error message to the password_help input
     */

  }, {
    key: "matchInput",
    value: function matchInput(first, second) {
      var error, firstInput, secondInput;
      error = this.id("".concat(second, "_error"));
      firstInput = this.id(first + '_id');
      secondInput = this.id(second + '_id');
      secondInput.addEventListener('keyup', function () {
        error.innerHTML = secondInput.value !== firstInput.value ? 'Your passwords do not match' : "";
      });
    }
    /**
     *
     * @param {the id of the input you want to inject to/ this is an array} idArray
     * @param {*the comment or questions you want o inject} html
     */

  }, {
    key: "injectData",
    value: function injectData(idArray, html) {
      var idData;

      for (var i = 0; i < idArray.length; i++) {
        idData = this.id(idArray[i]);
        idData.innerHTML = html[i];
      }
    }
    /**
     *
     * @param {this is an id and its value is for duplication} firstInput
     * @param {* another id that accepts the value of the firstInput} takeFirstInput
     */

  }, {
    key: "duplicate",
    value: function duplicate(giveInput, takeInput) {
      var giver, taker;
      giver = this.id(giveInput);
      taker = this.id(takeInput);
      giver.addEventListener('keyup', function () {
        taker.value = giver.value;
      });
    }
    /**
     *
     * @param {current input that is being type to. the value is what will be checked realtime. the id is needed} input
     * @param {* the url to get the info to . example is /search?hint} url
     * @param {enter the id of the output element} output
     */

  }, {
    key: "realTimeServer",
    value: function realTimeServer(input, url, outputId) {
      var theInput, inputVal, output;
      theInput = this.id(input);
      output = this.id(outputId);
      theInput.addEventListener('keyup', function () {
        inputVal = theInput.value;

        if (inputVal == 0) {
          output.innerHTML = "";
          return;
        } else {
          var xmlhttp = new XMLHttpRequest();

          xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              output.innerHTML = this.responseText;
            }
          };

          xmlhttp.open("GET", "".concat(url, "=").concat(inputVal), true);
          xmlhttp.send();
        }
      });
    }
  }, {
    key: "isChecked",
    value: function isChecked(yesId, noId, hiddenInput) {
      var _this4 = this;

      var checked = function checked() {
        if (_this4.id(yesId).checked) {
          alert('check');
          _this4.id(hiddenInput).innerHTML = 'checked';
        } else if (_this4.id(noId).checked) {
          _this4.id(hiddenInput).innerHTML = 'checked';
        }
      };

      this.id(yesId).addEventListener('click', checked);
      this.id(noId).addEventListener('click', checked);
    }
  }, {
    key: "previousAddress",
    value: function previousAddress() {
      var _this5 = this;

      var timeAddy = this.id('time_at_address_id');
      var prevAddy = this.id('previous_address_class');

      var showPrev = function showPrev() {
        if (timeAddy.value != '3 years+') {
          prevAddy.style.display = 'block';
          _this5.id('previous_address_help').innerHTML = "Please enter your full address: House No, Street Name, Town/City and Post Code";
        } else {
          prevAddy.style.display = 'none';
        }
      };

      timeAddy.addEventListener('change', showPrev);
    }
  }]);

  return FormHelper;
}();



/***/ }),

/***/ "./resources/asset/js/components/api/index.js":
/*!****************************************************!*\
  !*** ./resources/asset/js/components/api/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllData": () => (/* binding */ getAllData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var config = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};
var getAllData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_1___default().get('http://olaogun.dev.com/allMembers3', config)["catch"](function (err) {
              return err.message;
            });

          case 2:
            response = _context.sent;
            return _context.abrupt("return", response.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllData() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./resources/asset/js/components/helper/autocomplete.js":
/*!**************************************************************!*\
  !*** ./resources/asset/js/components/helper/autocomplete.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autocomplete": () => (/* binding */ autocomplete)
/* harmony export */ });
var autocomplete = function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/

  inp.addEventListener("input", function (e) {
    var a,
        b,
        i,
        val = this.value;
    /*close any already open lists of autocompleted values*/

    closeAllLists();

    if (!val) {
      return false;
    }

    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/

    this.parentNode.appendChild(a);
    /*for each item in the array...*/

    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/

        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/

        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/

        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/

          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/

  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");

    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 38) {
      //up

      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/

      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();

      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/

    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = x.length - 1;
    /*add class "autocomplete-active":*/

    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");

    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/


  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
};

/***/ }),

/***/ "./resources/asset/js/components/helper/general.js":
/*!*********************************************************!*\
  !*** ./resources/asset/js/components/helper/general.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loaderIconBootstrap": () => (/* binding */ loaderIconBootstrap),
/* harmony export */   "loaderIcon": () => (/* binding */ loaderIcon),
/* harmony export */   "removeDiv": () => (/* binding */ removeDiv),
/* harmony export */   "createAndAppendElement": () => (/* binding */ createAndAppendElement),
/* harmony export */   "autoCompleter": () => (/* binding */ autoCompleter),
/* harmony export */   "distinctValue": () => (/* binding */ distinctValue)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autocompleter */ "./node_modules/autocompleter/autocomplete.js");
/* harmony import */ var autocompleter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autocompleter__WEBPACK_IMPORTED_MODULE_1__);


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var loaderIconBootstrap = function loaderIconBootstrap() {
  return "<div class=\"spinner-grow text-primary\" role=\"status\">\n        <span class=\"sr-only\">Loading...</span>\n        </div>";
};
var loaderIcon = function loaderIcon() {
  return "<div class=\"loader\"></div>";
};
var removeDiv = function removeDiv(div_id) {
  var div = document.getElementById(div_id);

  if (div) {
    return div.remove();
  }
};
var createAndAppendElement = function createAndAppendElement(elementType, setId, parent) {
  var setClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var newDiv = document.createElement(elementType);
  newDiv.setAttribute('id', setId);
  newDiv.setAttribute('class', "field ".concat(setClass));
  var parentDiv = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)(parent);
  return parentDiv.appendChild(newDiv);
};
/**
 * 
 * @param {the id of the input} inputId 
 * @param {the api data or array data} data 
 * @param { filterby is the data.filterby }
 */

var autoCompleter = function autoCompleter(inputId, data) {
  autocompleter__WEBPACK_IMPORTED_MODULE_1___default()({
    input: inputId,
    fetch: function fetch(text, update) {
      text = text.toLowerCase(); // you can also use AJAX requests instead of preloaded data

      var suggestions = data.filter(function (n) {
        return n.firstName.toLowerCase().startsWith(text);
      });
      update(suggestions);
    },
    onSelect: function onSelect(item) {
      input.value = item.firstName;
    }
  });
};
var distinctValue = function distinctValue(array) {
  return _toConsumableArray(new Set(array));
};

/***/ }),

/***/ "./resources/asset/js/components/register/autocomplete.js":
/*!****************************************************************!*\
  !*** ./resources/asset/js/components/register/autocomplete.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var _helper_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/general */ "./resources/asset/js/components/helper/general.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/index */ "./resources/asset/js/components/api/index.js");
/* harmony import */ var _helper_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/autocomplete */ "./resources/asset/js/components/helper/autocomplete.js");




var getData = (0,_api_index__WEBPACK_IMPORTED_MODULE_2__.getAllData)();
var firstNameData = [];
var generalData = [];
var fatherName = [];
var motherName = [];
var cities = ['Lagos', 'Oyo', 'New York', 'London', 'Wiltshire'];
getData.then(function (el) {
  return el.map(function (element) {
    generalData.push(element);
    firstNameData.push(element.firstName);
    fatherName.push(element.alias);
    motherName.push(element.motherName);
  });
});
(0,_global__WEBPACK_IMPORTED_MODULE_0__.log)(fatherName);
(0,_global__WEBPACK_IMPORTED_MODULE_0__.log)(generalData);
var lastAutoComplete = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('firstName_id');
var fatherAutoComplete = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('fatherName_id');
var motherAutoComplete = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('motherName_id');
lastAutoComplete.setAttribute('autocomplete', 'off');
fatherAutoComplete.setAttribute('autocomplete', 'off');
motherAutoComplete.setAttribute('autocomplete', 'off'); // autoCompleter(lastNameAutoComplete, firstNameData)

var result = (0,_helper_general__WEBPACK_IMPORTED_MODULE_1__.distinctValue)(fatherName);
(0,_global__WEBPACK_IMPORTED_MODULE_0__.log)((0,_helper_general__WEBPACK_IMPORTED_MODULE_1__.distinctValue)([12, 12, 45, 21, 10]));
(0,_global__WEBPACK_IMPORTED_MODULE_0__.log)(result);
(0,_helper_autocomplete__WEBPACK_IMPORTED_MODULE_3__.autocomplete)(lastAutoComplete, firstNameData);
(0,_helper_autocomplete__WEBPACK_IMPORTED_MODULE_3__.autocomplete)(fatherAutoComplete, fatherName);
(0,_helper_autocomplete__WEBPACK_IMPORTED_MODULE_3__.autocomplete)(motherAutoComplete, motherName);

/***/ }),

/***/ "./resources/asset/js/components/register/dataToCheck.js":
/*!***************************************************************!*\
  !*** ./resources/asset/js/components/register/dataToCheck.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataToCheckRegister": () => (/* binding */ dataToCheckRegister),
/* harmony export */   "dataToCheckLogin": () => (/* binding */ dataToCheckLogin)
/* harmony export */ });


var dataToCheckRegister = {
  maxLength: {
    id: ['firstName', 'lastName', 'alias', 'spouseName', 'spouseMobile', 'motherMobile', 'fatherMobile', 'fatherName', 'motherName', 'motherMaiden', 'address', 'postcode', 'region', 'country', 'mobile', 'email', 'favSport', 'footballTeam', 'passion', 'occupation'],
    max: [15, 15, 15, 15, 14, 14, 14, 30, 30, 15, 50, 10, 15, 15, 13, 45, 25, 30, 40, 20]
  },
  // duplicate: {
  // 	email: 'email',
  // 	username: 'username'
  // },
  password: {
    pwd: 'password',
    pwd2: 'confirm_password'
  },
  familyCheck: {
    father: ["fatherYes", "fatherNo"],
    mother: ["motherYes", "motherNo"],
    spouse: ["spouseYes", "spouseNo"]
  }
};
var dataToCheckLogin = {
  maxLength: {
    id: ['email', 'password'],
    max: [20, 15],
    min: [5, 2]
  }
};

/***/ }),

/***/ "./resources/asset/js/components/register/event.js":
/*!*********************************************************!*\
  !*** ./resources/asset/js/components/register/event.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
 // import { show } from "./onChange"

(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "none"; // id('children2').style.display = "none";
// ON CHANGE FOR THE NUMBER OF KIDS AND SIBLING 

var showSpouse = function showSpouse(e) {
  if (e.target.value === "Yes") {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "block";
  } else {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "none";
  }
};

(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('maritalStatus_id').addEventListener('change', showSpouse);

/***/ }),

/***/ "./resources/asset/js/components/register/index.js":
/*!*********************************************************!*\
  !*** ./resources/asset/js/components/register/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smallinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smallinput */ "./resources/asset/js/components/register/smallinput.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./resources/asset/js/components/register/event.js");
/* harmony import */ var _onChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onChange */ "./resources/asset/js/components/register/onChange.js");
/* harmony import */ var _processForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processForm */ "./resources/asset/js/components/register/processForm.js");
/* harmony import */ var _autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autocomplete */ "./resources/asset/js/components/register/autocomplete.js");






/***/ }),

/***/ "./resources/asset/js/components/register/onChange.js":
/*!************************************************************!*\
  !*** ./resources/asset/js/components/register/onChange.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var _helper_general__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/general */ "./resources/asset/js/components/helper/general.js");
 // import { getEnvironmentVariable as env} from 'environment-variable-reader'




var renderHtmlFamily = function renderHtmlFamily(family, no) {
  if (no) {
    var kids_sib = family == "addChildren" ? "kid" : "sibling";
    return "\n        <div class=\"field-body\">\n\n            <div class=\"field\">\n                <p class=\"control is-expanded has-icons-left\">\n                <input type=\"text\" placeholder = \"Enter ".concat(kids_sib, "'s full name - ").concat(no, "\" name =").concat(kids_sib, "_name").concat(no, " class=\"input input is-medium is-rounded\" id=\"").concat(kids_sib, "_name").concat(no, "\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-user\"></i>\n                </span>\n                </p>\n            </div>\n\n            <div class=\"field\">\n                    <p class=\"control is-expanded has-icons-left\">\n                <input type=\"email\" placeholder = \"Enter ").concat(kids_sib, "'s email - ").concat(no, "\" name=").concat(kids_sib, "_email").concat(no, " class=\"input input is-medium is-rounded\" id=\"").concat(kids_sib, "_email").concat(no, "\">\n                <span class=\"icon is-small is-left\">\n                <i class=\"fas fa-envelope\"></i>\n                </span>\n                <span class=\"icon is-small is-right\">\n                <i class=\"fas fa-check\"></i>\n                </span>\n                </p>\n           </div>\n\n        </div><br>");
  }
};

var show = function show(kids_or_sib) {
  try {
    // what was picked or selected
    var value = event.target.value;
    var addDiv = kids_or_sib == "kids" ? "addChildren" : "addSiblings"; // remove the div 

    (0,_helper_general__WEBPACK_IMPORTED_MODULE_1__.removeDiv)(addDiv);

    if (value > 0) {
      // create and append the div element 
      var parent = "".concat(kids_or_sib, "_div");
      (0,_helper_general__WEBPACK_IMPORTED_MODULE_1__.createAndAppendElement)('div', addDiv, parent); // use the loop to generate the number of input

      for (var i = 0; i < value; i++) {
        var no = i + 1;
        var msg = no > 1 ? "Please, enter their names and emails" : "Please, enter the name and email";
        var getSelectHelp = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("".concat(kids_or_sib, "_help"));
        getSelectHelp.innerHTML = msg;
        getSelectHelp.style.fontSize = '1rem';
        var html = renderHtmlFamily(addDiv, no);
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)(addDiv).insertAdjacentHTML('afterBegin', html);
      }
    }
  } catch (error) {
    console.log(error.message);
  }
}; // ON CHANGE FOR THE NUMBER OF KIDS AND SIBLING 

var onChangeKidAndSiblings = function onChangeKidAndSiblings() {
  var sibInput = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("siblings_id");
  var kidInput = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("kids_id");
  kidInput.addEventListener('change', function () {
    return show('kids');
  });
  sibInput.addEventListener('change', function () {
    return show('siblings');
  });
};

onChangeKidAndSiblings(); // inject the country code once one of the country is picked

var injectCountryCode = function injectCountryCode() {
  (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('country_id').addEventListener('change', function (e) {
    var value = e.target.value;

    switch (value) {
      case 'Nigeria':
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_id').value = "234";
        break;

      case 'UK':
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_id').value = "44";
        break;

      case 'Canada':
      case 'USA':
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_id').value = "1";
        break;

      case 'China':
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_id').value = "86";
        break;

      default:
        (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_id').value = "";
    }
  });
};

injectCountryCode();

/***/ }),

/***/ "./resources/asset/js/components/register/processForm.js":
/*!***************************************************************!*\
  !*** ./resources/asset/js/components/register/processForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FormHelper */ "./resources/asset/js/components/FormHelper.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var _dataToCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataToCheck */ "./resources/asset/js/components/register/dataToCheck.js");





var formInput = document.querySelectorAll('.register');
var formInputArr = Array.from(formInput);
var formData = new _FormHelper__WEBPACK_IMPORTED_MODULE_0__.default(formInputArr);

var process = function process() {
  // clear error from the form
  formData.clearError(); // set the maxlength, check the length of the value, raise error

  formData.realTimeCheckLen(_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.maxLength.id, _dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.maxLength.max); //real time check 
  // formData.realTimeServer('spouseMobile_id',
  // 	`/search?attribute=spouseMobile&subject=spouse&hint`,
  // 	'spouseMobile_error')

  formData.realTimeServer('spouseMobile_id', "/search?attribute=mobile&subject=spouse&hint", 'spouseMobile_error');
  formData.realTimeServer('fatherMobile_id', '/search?attribute=mobile&subject=father&hint', 'fatherMobile_error');
  formData.realTimeServer('motherMobile_id', '/search?attribute=mobile&subject=mother&hint', 'motherMobile_error'); // check if password matches real time

  formData.matchInput(_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.password.pwd, _dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.password.pwd2 // dataToCheckRegister.password.err
  ); // check if they have a father yes
  // formData.isChecked(dataToCheckRegister.familyCheck.father[0],
  // 	dataToCheckRegister.familyCheck.father[1],
  // 	'fatherEmail_error'
  // )
  // // check if they have a mother yes
  // formData.isChecked(dataToCheckRegister.familyCheck.mother[0],
  // 	dataToCheckRegister.familyCheck.mother[1],
  // 	'motherEmail_error'
  // )
  // // check if they have a spouse yes
  // formData.isChecked(dataToCheckRegister.familyCheck.spouse[0],
  // 	dataToCheckRegister.familyCheck.spouse[1],
  // 	'spouseEmail_error'
  // )
};

process();
(0,_global__WEBPACK_IMPORTED_MODULE_1__.id)('submit').addEventListener('click', function () {
  try {
    if ((0,_global__WEBPACK_IMPORTED_MODULE_1__.id)('checkbox').checked) {
      formData.emailVal(); // sanitise email

      formData.massValidate(); // validate and sanitise data
      //log(formData.error)

      if (formData.error.length <= 0) {
        (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)('submit').type = 'submit'; //console.log('submitted')
      } else {
        (0,_global__WEBPACK_IMPORTED_MODULE_1__.log)(formData.error);
        alert('The form cannot be submitted. Please check the errors');
        process();
      }
    } else {
      alert('To continue, you need to agree to the Olaoguns handling your information as outlined in our privacy policy');
    }
  } catch (e) {
    (0,_global__WEBPACK_IMPORTED_MODULE_1__.showError)(e);
  }
});

/***/ }),

/***/ "./resources/asset/js/components/register/smallinput.js":
/*!**************************************************************!*\
  !*** ./resources/asset/js/components/register/smallinput.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");

var maiden = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('motherMaiden_help');
maiden.innerHTML = "Good to identify your family from the mother's side";
var mobile = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_help');
mobile.innerHTML = "Nigeria: 2348036517179, UK: 447871717809";
var fatherMobile = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('fatherMobile_help');
fatherMobile.innerHTML = "Please, leave blank if father has passed on";
var motherMobile = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('motherMobile_help');
motherMobile.innerHTML = "Please, leave blank if mother has passed on";
var password = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('password_help');
password.innerHTML = 'Must be 8-20 characters long.';
var lastName = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('lastName_id').value = "OLAOGUN";

/***/ })

}]);
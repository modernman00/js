(self["webpackChunkfamily"] = self["webpackChunkfamily"] || []).push([["codeSplit/code"],{

/***/ "./resources/asset/js/components/generateCode/index.js":
/*!*************************************************************!*\
  !*** ./resources/asset/js/components/generateCode/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var _helper_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/http */ "./resources/asset/js/components/helper/http.js");



 // block the setLoader div

(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("setLoader").style.display = "none";

var LoginCode = function LoginCode(e) {
  try {
    e.preventDefault();
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('codeForm_notification').classList.remove('is-danger');
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('error').innerHTML = "";
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('setLoader').style.display = "block";
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('loader').classList.add('loader'); // const location = localStorage.getItem('redirect')

    (0,_helper_http__WEBPACK_IMPORTED_MODULE_1__.postFormData)("/login/code", "codeForm", location);
    localStorage.removeItem('redirect');
  } catch (err) {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.showError)(err);
  }
};

(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('submit').addEventListener('click', LoginCode);

/***/ }),

/***/ "./resources/asset/js/components/helper/http.js":
/*!******************************************************!*\
  !*** ./resources/asset/js/components/helper/http.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "realTimeServer": () => (/* binding */ realTimeServer),
/* harmony export */   "postFormData": () => (/* binding */ postFormData),
/* harmony export */   "getApiData": () => (/* binding */ getApiData)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global */ "./resources/asset/js/components/global.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios-retry */ "./node_modules/axios-retry/index.js");
/* harmony import */ var axios_retry__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios_retry__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




axios_retry__WEBPACK_IMPORTED_MODULE_3___default()((axios__WEBPACK_IMPORTED_MODULE_2___default()), {
  retries: 3
});
var realTimeServer = function realTimeServer(input, url, outputId) {
  var theInput, inputVal, output;
  theInput = (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)(input);
  output = (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)(outputId);
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
};
/**
 * 
 * @param {the url to post the data to} url 
 * @param {* the id or class of the form} formElement 
 * @param {* the redirect to another page /code or /admin/register} redirect 
 NOTICE:::Make sure you set the notification id as the formId_notification
 */

var postFormData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url, formId) {
    var redirect,
        css,
        notificationId,
        processFormDataAction,
        form,
        formEntries,
        options,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            redirect = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
            css = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
            notificationId = "".concat(formId, "_notification"); // the notification function

            processFormDataAction = function processFormDataAction(addClass, data) {
              (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)(notificationId).style.display = "block"; // unblock the notification

              (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)(notificationId).classList.add(addClass); // add the success class

              (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)('error').innerHTML = data; // error element

              (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)('loader').classList.remove('loader'); // remove loader
            }; // extract the form entries


            form = (0,_global__WEBPACK_IMPORTED_MODULE_1__.id)(formId);
            formEntries = new FormData(form);
            formEntries["delete"]('submit');
            formEntries["delete"]('checkbox_id'); // formEntries.delete('token')

            options = {
              xsrfCookieName: 'XSRF-TOKEN',
              xsrfHeaderName: 'X-XSRF-TOKEN'
            }; // AXIOS POST FUNCTIONALITY

            _context.next = 11;
            return axios__WEBPACK_IMPORTED_MODULE_2___default().post(url, formEntries, options).then(function (response) {
              var theClass;

              if (css === "W3css") {
                theClass = "w3-green";
              } else if (css === 'bulma') {
                theClass = "is-success";
              } else {
                theClass = "is-success";
              }

              processFormDataAction(theClass, response.data.message); // set timer to redirect to the homepage

              // set timer to redirect to the homepage
              if (redirect) {
                setTimeout(function () {
                  //window.location.replace(redirect)
                  window.location.assign(redirect);
                }, 2000);
              } //it clears all the contents


              //it clears all the contents
              formData.clearHtml();
            })["catch"](function (error) {
              (0,_global__WEBPACK_IMPORTED_MODULE_1__.log)(error);
              var theClass;

              if (css === "W3css") {
                theClass = "w3-red";
              } else if (css === 'bulma') {
                theClass = "is-danger";
              } else {
                theClass = "is-danger";
              }

              if (error.response) {
                (0,_global__WEBPACK_IMPORTED_MODULE_1__.log)(error.response);
                processFormDataAction(theClass, error.response.data.message);
              }
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function postFormData(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 
 * @param { the url you want to get} URL 
 * @returns 
 */

var getApiData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(URL) {
    var config;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = {
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            };
            return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_2___default().get(URL, config).then(function (res) {
              return res.data;
            })["catch"](function (err) {
              return err.response.data;
            }));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getApiData(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

}]);
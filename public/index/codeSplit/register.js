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
          var theData = _this3.id("".concat(input[i]));

          if (theData == "") throw "empty dataInput";
          var max = maxi[i];

          var error = _this3.id("".concat(input[i], "_error"));

          if (theData) theData.maxLength = parseInt(max + 1);
          theData.addEventListener('keyup', function () {
            error.innerHTML = theData.value.length > max ? "You have reach the maximum limit" : "";
            _this3.id("".concat(input[i], "_help")).style.color = 'red';
            _this3.id("".concat(input[i], "_help")).style.fontSize = '10px';
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
      firstInput = this.id(first);
      secondInput = this.id(second);
      secondInput.addEventListener('keyup', function () {
        error.innerHTML = firstInput.value !== secondInput.value ? 'Your passwords do not match' : "";
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

/***/ "./resources/asset/js/components/register/formBuilder.js":
/*!***************************************************************!*\
  !*** ./resources/asset/js/components/register/formBuilder.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global */ "./resources/asset/js/global.js");



/**
 * 
 * @param {That is the obj name} objData 
 * @param {* this is the div id} htmlId 
 */

var Input = function Input(objData, htmlId) {
  try {
    // check errors for the input
    if (objData == null) throw " data object is needed";
    if (htmlId == null) throw "html id is required";
    objData.map(function (element) {
      if (element.inputType === 'NORMAL_INPUT') {
        var renderHtml = "\n      <label> <strong>".concat(element.form.toUpperCase(), "</strong> </label>\n      <div class = 'form-group' id=").concat(element.attribute, "_div>\n         <label class='' for =").concat(element.attribute, "> \n         <strong>").concat(element.label.toUpperCase(), "</strong>\n         </label>\n         <input type=\"").concat(element.type, "\" class=\"form-control\" \n         id=\"").concat(element.attribute, "\"\n         name=\"").concat(element.attribute, "\"  placeholder=\"").concat(element.placeholder, "\"\n         />\n        <small id ='").concat(element.attribute, "_help' class='small text-muted'></small>\n            <small id =").concat(element.attribute, "_error class='error text-muted'></small>\n      </div>");
        if (renderHtml == null) throw 'NORMAL INPUT -' + element.attribute;
        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', renderHtml);
      } else if (element.inputType === 'SELECT') {
        var _renderHtml = "\n      <div class = 'form-group' id='".concat(element.attribute, "_div'>\n      <label for =").concat(element.attribute, "> <strong>").concat(element.label.toUpperCase(), "</strong> </label>   \n          <select class=\"form-control\" id=").concat(element.attribute, " name=").concat(element.attribute, ">\n                <option value= 'select'>\n                select\n                </option> \n                ").concat(element.options.map(function (el) {
          return "<option value=".concat(el, ">").concat(el, "</option>");
        }), "               \n          </select>     \n             <small id ='").concat(element.attribute, "_help' class='small text-muted'></small>\n            <small id =").concat(element.attribute, "_error class='error text-muted'></small>\n           </div>\n          ");

        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', _renderHtml);
      } else if (element.inputType === 'FILE') {
        var _renderHtml2 = "\n      <div class = 'form-group input-group mb-3' id='".concat(element.attribute, "_div'>\n       <div class=\"custom-file\">\n          <input type=\"file\" name=\"").concat(element.attribute, "\" class=\"custom-file-input\" id=").concat(element.attribute, ">\n          <label class=\"custom-file-label\" for=").concat(element.attribute, ">").concat(element.label, "</label>\n             <small id ='").concat(element.attribute, "_help' class='small text-muted'></small>\n            <small id =").concat(element.attribute, "_error class='error text-muted'></small>\n           </div>\n          </div>\n          ");

        if (_renderHtml2 == "") throw 'FILE -' + element.attribute;
        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', _renderHtml2);
      } else if (element.inputType === 'RADIO') {
        var _renderHtml3 = "\n      <div class='form-group col' id='".concat(element.attribute, "_div'>\n         <label for =").concat(element.attribute, "> <strong> ").concat(element.label.toUpperCase(), ": </strong>  </label> \n\n        <div class = 'form-check form-check-inline'>\n            ").concat(element.options.map(function (el) {
          return "\n              <input \n              class='form-check-input' \n              type='radio' \n              name=".concat(element.attribute, " \n              id=").concat(element.attribute, "_").concat(el, " \n              value=").concat(el, ">\n\n              <label class= 'form-check-label' > ").concat(el, "</label>");
        }), " \n      </div>  \n        <small id ='").concat(element.attribute, "_help' class='small text-muted'></small>\n            <small id =").concat(element.attribute, "_error class='error text-muted'></small>\n      </div>     \n      ");

        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', _renderHtml3);
      } else if (element.form === '3-col') {
        var _renderHtml4 = "\n      <label> <strong>".concat(element.label.toUpperCase(), "</strong> </label>\n          <div class = 'form-row ").concat(element.unique, "' id='").concat(element.unique, "_div'>\n          <div class='form-group col-md-4'>\n            <label for='").concat(element.options.attribute[0], "'>\n            ").concat(element.options.label[0], "\n            </label>\n            <input type='").concat(element.options.type[0], "' class='form-control' name='").concat(element.options.attribute[0], "'\n            id='").concat(element.options.attribute[0], "' placeholder='").concat(element.options.placeholder[0], "'>\n         <small id ='").concat(element.options.attribute[0], "_help' class='small text-muted'></small>\n            <small id =").concat(element.options.attribute[0], "_error class='error text-muted'></small>\n          </div>\n\n          <div class='form-group col-md-4'>\n            <label for='").concat(element.options.attribute[1], "'>").concat(element.options.label[1], "\n            </label>\n            <input type='").concat(element.options.type[1], "' class='form-control'  \n            id='").concat(element.options.attribute[1], "' name='").concat(element.options.attribute[1], "'\n            placeholder='").concat(element.options.placeholder[1], "'>\n         <small id ='").concat(element.options.attribute[1], "_help' class='small text-muted'></small>\n            <small id =").concat(element.options.attribute[1], "_error class='error text-muted'></small>\n          </div> \n\n          <div class='form-group col-md-4'>\n            <label for='").concat(element.options.attribute[2], "'>").concat(element.options.label[2], "\n            </label>\n            <input type='").concat(element.options.type[2], "' class='form-control' \n            id='").concat(element.options.attribute[2], "' name='").concat(element.options.attribute[2], "' \n            placeholder='").concat(element.options.placeholder[2], "'>\n         <small id ='").concat(element.options.attribute[2], "_help' class='small text-muted'></small>\n            <small id =").concat(element.options.attribute[2], "_error class='error text-muted'></small>\n          </div> \n\n      </div>");

        if (_renderHtml4 == "") {
          throw 'empty 3-col -' + element.options.attribute[1];
        }

        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', _renderHtml4);
      } else if (element.form === '2-col') {
        var _renderHtml5 = "\n         <label> <strong>".concat(element.label.toUpperCase(), "</strong> </label>\n          <div class = 'form-row ").concat(element.unique, "' id='").concat(element.unique, "_div'>\n          <div class='form-group col-md-6'>\n            <label for='").concat(element.options.attribute[0], "'>\n            ").concat(element.options.label[0], "\n            </label>\n            <input type='").concat(element.options.type[0], "' class='form-control' \n            id='").concat(element.options.attribute[0], "' \n            placeholder='").concat(element.options.placeholder[0], "'\n            name='").concat(element.options.attribute[0], "'\n            >\n         <small id ='").concat(element.options.attribute[0], "_help' class='small text-muted'></small>\n            <small id =").concat(element.options.attribute[0], "_error class='error text-muted'></small>\n          </div>\n\n          <div class='form-group col-md-6'>\n            <label for='").concat(element.options.attribute[1], "'>").concat(element.options.label[1], "\n            </label>\n            <input type='").concat(element.options.type[1], "' class='form-control' \n            id='").concat(element.options.attribute[1], "' \n            placeholder='").concat(element.options.placeholder[1], "'\n            name='").concat(element.options.attribute[1], "'\n            >\n         <small id ='").concat(element.options.attribute[1], "_help' class='small text-muted'></small>\n            <small id =").concat(element.options.attribute[1], "_error class='error text-muted'></small>\n          </div> \n\n      </div>");

        if (_renderHtml5 == "") {
          throw 'empty 2-col -' + element.options.attribute[1];
        }

        document.getElementById(htmlId).insertAdjacentHTML('beforebegin', _renderHtml5);
      }
    });
  } catch (e) {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.showError)(e);
  }
};

/***/ }),

/***/ "./resources/asset/js/components/register/index.js":
/*!*********************************************************!*\
  !*** ./resources/asset/js/components/register/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _smallinput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./smallinput */ "./resources/asset/js/components/register/smallinput.js");
/* harmony import */ var _modal_kids__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/kids */ "./resources/asset/js/components/register/modal/kids.js");
/* harmony import */ var _modal_siblings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal/siblings */ "./resources/asset/js/components/register/modal/siblings.js");
/* harmony import */ var _processForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processForm */ "./resources/asset/js/components/register/processForm.js");
/* harmony import */ var _formBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formBuilder */ "./resources/asset/js/components/register/formBuilder.js");






/***/ }),

/***/ "./resources/asset/js/components/register/modal/kids.js":
/*!**************************************************************!*\
  !*** ./resources/asset/js/components/register/modal/kids.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../global */ "./resources/asset/js/global.js");




var show = function show(e) {
  try {
    // what was picked or selected
    var kidsNo = e.target.value; // use the loop to generate the number of input

    for (var i = 0; i < kidsNo; i++) {
      var no = i + 1;
      var msg = no > 1 ? "Please, enter their names and emails" : "Please, enter your child name and email";
      var getSelectHelp = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('kids_help');
      getSelectHelp.innerHTML = msg;
      getSelectHelp.style.fontSize = '1rem';
      var addKids = " <div class=\"field is-horizontal\">\n            <div class=\"field \">\n        \n            <div class=\"control is-expanded has-icons-left\">\n            <input type=\"text\" placeholder = \"Enter child's full name - ".concat(no, "\" name =kid_name").concat(no, " class=\"input input is-medium\" id=\"kid_name").concat(no, "\">\n            </div></div>\n            <div class=\"field \">\n            <div class=\"control is-expanded has-icons-left\">\n           <input type=\"email\" placeholder = \"Enter child's email - ").concat(no, "\" name=kid_email").concat(no, " class=\"input input is-medium\" id=\"kid_email").concat(no, "\">\n           </div>\n        </div></div><br>");
      var insertedContent = document.querySelector(".kid".concat(no));

      if (insertedContent) {
        insertedContent.parentNode.removeChild(insertedContent);
      }

      (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('addChildren').insertAdjacentHTML('afterend', addKids);
    }
  } catch (error) {
    console.log(error.message);
  }
}; // this is to activate the onchange event


(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('kids_id').addEventListener('change', show);

/***/ }),

/***/ "./resources/asset/js/components/register/modal/siblings.js":
/*!******************************************************************!*\
  !*** ./resources/asset/js/components/register/modal/siblings.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../global */ "./resources/asset/js/global.js");




var show = function show(e) {
  var siblingNo = e.target.value; //    const checkAppend = qSel('.appendLabel')
  //         if(checkAppend || id(`noSiblings${no}`) || id(`noSiblingsEmail${no}`)) {
  //             checkAppend.remove()
  //         }
  // use the loop to generate the number of input

  for (var i = 0; i < siblingNo; i++) {
    //    checkAppend && checkAppend.remove()
    var no = i + 1;
    var msg = no > 1 ? "Please, enter their names and emails" : "Please, enter your child name and email";
    var getSelectHelp = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('noSiblings_help');
    getSelectHelp.innerHTML = msg;
    getSelectHelp.style.fontSize = '1rem';
    var addnoSiblings = " <div class=\"row appendLabel\">\n            <div class=\"col\">\n            <input type=\"text\" placeholder = \"Enter sibling's full name - ".concat(no, "\" name =\"sibling_name").concat(no, "\" class=\"form-control\" id=\"sibling_name").concat(no, "\">\n            </div>\n            <div class=\"col\">\n           <input type=\"email\" placeholder = \"Enter sibling's email - ").concat(no, "\" name=\"sibling_email").concat(no, "\" class=\"form-control\" id=\"sibling_email").concat(no, "\">\n           </div>\n        </div><br>");
    if (!(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("noSiblings".concat(no)) || !(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)("noSiblingsEmail".concat(no))) (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('noSiblings_div').insertAdjacentHTML('afterend', addnoSiblings);
  }
}; // this is to activate the onchange event


(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('noSiblings').addEventListener('change', show);

/***/ }),

/***/ "./resources/asset/js/components/register/processForm.js":
/*!***************************************************************!*\
  !*** ./resources/asset/js/components/register/processForm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FormHelper */ "./resources/asset/js/components/FormHelper.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global */ "./resources/asset/js/global.js");
/* harmony import */ var _data_dataToCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/dataToCheck */ "./resources/asset/js/data/dataToCheck.js");





var formInput = document.querySelectorAll('.register');
var formInputArr = Array.from(formInput);
var formData = new _FormHelper__WEBPACK_IMPORTED_MODULE_0__.default(formInputArr);

var process = function process() {
  // clear error from the form
  formData.clearError(); // set the maxlength, check the length of the value, raise error

  formData.realTimeCheckLen(_data_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.maxLength.id, _data_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.maxLength.max); //real time check 
  // formData.realTimeServer('spouseMobile_id',
  // 	`/search?attribute=spouseMobile&subject=spouse&hint`,
  // 	'spouseMobile_error')

  formData.realTimeServer('spouseMobile_id', "/search?attribute=mobile&subject=spouse&hint", 'spouseMobile_error');
  formData.realTimeServer('fatherMobile_id', '/search?attribute=mobile&subject=father&hint', 'fatherMobile_error');
  formData.realTimeServer('motherMobile_id', '/search?attribute=mobile&subject=mother&hint', 'motherMobile_error'); // check if password matches real time

  formData.matchInput(_data_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.password.pwd, _data_dataToCheck__WEBPACK_IMPORTED_MODULE_2__.dataToCheckRegister.password.pwd2 // dataToCheckRegister.password.err
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
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../global */ "./resources/asset/js/global.js");

var maiden = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('motherMaiden_help');
maiden.innerHTML = "Good to identify your family from the mother's side";
var mobile = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('mobile_help');
mobile.innerHTML = "Nigeria: 2348036517179, UK: 447871717809";
var password = (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('password_help');
password.innerHTML = 'Must be 8-20 characters long.';
(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "none";
(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('children2').style.display = "none";

var showSpouse = function showSpouse(e) {
  if (e.target.value === "Yes") {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "block";
  } else {
    (0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('spouse').style.display = "none";
  }
};

(0,_global__WEBPACK_IMPORTED_MODULE_0__.id)('maritalStatus_id').addEventListener('change', showSpouse);

/***/ }),

/***/ "./resources/asset/js/data/dataToCheck.js":
/*!************************************************!*\
  !*** ./resources/asset/js/data/dataToCheck.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dataToCheckRegister": () => (/* binding */ dataToCheckRegister),
/* harmony export */   "dataToCheckLogin": () => (/* binding */ dataToCheckLogin)
/* harmony export */ });


var dataToCheckRegister = {
  maxLength: {
    id: ['firstName', 'lastName', 'alias', 'spouse', 'fatherName', 'motherName', 'motherMaiden', 'address', 'postcode', 'region', 'country', 'mobile', 'email', 'favSport', 'footballTeam', 'passion', 'occupation'],
    max: [15, 15, 15, 15, 30, 30, 15, 50, 10, 15, 15, 13, 45, 25, 30, 40, 20]
  },
  duplicate: {
    email: 'email',
    username: 'username'
  },
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

/***/ })

}]);
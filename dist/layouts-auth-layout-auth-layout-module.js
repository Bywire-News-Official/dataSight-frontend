(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/lock/lock.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/lock/lock.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-gradient-danger py-7 py-lg-8 pt-lg-9\">\n  <div class=\" container\">\n    <div class=\" header-body text-center mb-7\">\n      <div class=\" row justify-content-center\">\n        <div class=\" col-xl-5 col-lg-6 col-md-8 px-5\">\n          <h1 class=\" text-white\">Lock screen</h1>\n\n          <p class=\" text-lead text-white\">Better to be safe than sorry.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\n    <svg\n      x=\"0\"\n      y=\"0\"\n      viewBox=\"0 0 2560 100\"\n      preserveAspectRatio=\"none\"\n      version=\"1.1\"\n      xmlns=\"http://www.w3.org/2000/svg\"\n    >\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n    </svg>\n  </div>\n</div>\n\n<div class=\" container mt--8 pb-5\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-5 col-md-7\">\n      <div class=\" card card-profile bg-secondary mt-5\">\n        <div class=\" row justify-content-center\">\n          <div class=\" col-lg-3 order-lg-2\">\n            <div class=\" card-profile-image\">\n              <img\n                class=\" rounded-circle border-secondary\"\n                src=\"assets/img/theme/team-4.jpg\"\n              />\n            </div>\n          </div>\n        </div>\n\n        <div class=\" card-body pt-7 px-5\">\n          <div class=\" text-center mb-4\"><h3>Jessica Jones</h3></div>\n\n          <form role=\"form\">\n            <div class=\" form-group\" [ngClass]=\"{ focused: focus2 === true }\">\n              <div\n                class=\" input-group input-group-merge input-group-alternative\"\n              >\n                <div class=\" input-group-prepend\">\n                  <span class=\" input-group-text\">\n                    <i class=\" ni ni-lock-circle-open\"> </i>\n                  </span>\n                </div>\n\n                <input\n                  class=\" form-control\"\n                  placeholder=\"Password\"\n                  type=\"password\"\n                  name=\"password\"\n                  (focus)=\"focus2 = true\"\n                  (blur)=\"focus2 = false\"\n                  autocomplete=\"new-password\"\n                />\n              </div>\n            </div>\n\n            <div class=\" text-center\">\n              <button class=\" btn btn-primary mt-2\" type=\"button\">\n                Unlock\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" main-content\">\n  <div class=\" header bg-gradient-danger py-7 py-lg-8 pt-lg-9\">\n    <div class=\" container\">\n      <div class=\" header-body text-center mb-7\">\n        <div class=\" row justify-content-center\">\n          <div class=\" col-xl-5 col-lg-6 col-md-8 px-5\">\n            <h1 class=\" text-white\">Welcome!</h1>\n\n            <p class=\" text-lead text-white\">\n              Use these awesome forms to login or create new account in your\n              project for free.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\" container mt--8 pb-5\">\n    <div class=\" row justify-content-center\">\n      <div class=\" col-lg-5 col-md-7\">\n        <div class=\" card bg-secondary border-0 mb-0\">\n          <div class=\" card-header bg-transparent pb-5\">\n            <div class=\" text-muted text-center mt-2 mb-3\">\n              <small> Sign in with </small>\n            </div>\n\n            <div class=\" btn-wrapper text-center\">\n              <a class=\" btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <span class=\" btn-inner--icon\">\n                  <img src=\"assets/img/icons/common/github.svg\" />\n                </span>\n\n                <span class=\" btn-inner--text\"> Github </span>\n              </a>\n\n              <a class=\" btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <span class=\" btn-inner--icon\">\n                  <img src=\"assets/img/icons/common/google.svg\" />\n                </span>\n\n                <span class=\" btn-inner--text\"> Google </span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\" card-body px-lg-5 py-lg-5\">\n            <div class=\" text-center text-muted mb-4\">\n              <small> Or sign in with credentials </small>\n            </div>\n\n            <form role=\"form\">\n              <div\n                class=\"form-group mb-3\"\n                [ngClass]=\"{ focused: focus === true }\"\n              >\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-email-83\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus = true\"\n                    (blur)=\"focus = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-lock-circle-open\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div\n                class=\"custom-control custom-control-alternative custom-checkbox\"\n              >\n                <input\n                  class=\"custom-control-input\"\n                  id=\" customCheckLogin\"\n                  type=\"checkbox\"\n                />\n                <label class=\"custom-control-label\" for=\" customCheckLogin\">\n                  <span>Remember me</span>\n                </label>\n              </div>\n              <div class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-primary my-4\">\n                  Sign in\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\" row mt-3\">\n          <div class=\" col-6\">\n            <a class=\" text-light\" href=\"javascript:void(0)\">\n              <small> Forgot password? </small>\n            </a>\n          </div>\n\n          <div class=\" col-6 text-right\">\n            <a class=\" text-light\" href=\"javascript:void(0)\">\n              <small> Create new account </small>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/pricing/pricing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/pricing/pricing.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" main-content\">\n  <div class=\" header bg-gradient-danger py-7 py-lg-8 pt-lg-9\">\n    <div class=\" container\">\n      <div class=\" header-body text-center mb-7\">\n        <div class=\" row justify-content-center\">\n          <div class=\" col-xl-5 col-lg-6 col-md-8 px-5\">\n            <h1 class=\" text-white\">Choose the best plan for your business</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\" container mt--8 pb-5\">\n    <div class=\" row justify-content-center\">\n      <div class=\" col-lg-10\">\n        <div class=\" pricing card-group flex-column flex-md-row mb-3\">\n          <div class=\" card card-pricing border-0 text-center mb-4\">\n            <div class=\" card-header bg-transparent\">\n              <h4 class=\" text-uppercase ls-1 text-primary py-3 mb-0\">\n                Bravo pack\n              </h4>\n            </div>\n\n            <div class=\" card-body px-lg-7\">\n              <div class=\" display-2\">$49</div>\n\n              <span class=\" text-muted\"> per application </span>\n\n              <ul class=\" list-unstyled my-4\">\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white\"\n                      >\n                        <i class=\" fas fa-terminal\"> </i>\n                      </div>\n                    </div>\n\n                    <div>\n                      <span class=\" pl-2\"> Complete documentation </span>\n                    </div>\n                  </div>\n                </li>\n\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white\"\n                      >\n                        <i class=\" fas fa-pen-fancy\"> </i>\n                      </div>\n                    </div>\n\n                    <div>\n                      <span class=\" pl-2\"> Working materials in Sketch </span>\n                    </div>\n                  </div>\n                </li>\n\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-gradient-primary shadow rounded-circle text-white\"\n                      >\n                        <i class=\" fas fa-hdd\"> </i>\n                      </div>\n                    </div>\n\n                    <div><span class=\" pl-2\"> 2GB cloud storage </span></div>\n                  </div>\n                </li>\n              </ul>\n\n              <button class=\" btn btn-primary mb-3\" type=\"button\">\n                Start free trial\n              </button>\n            </div>\n\n            <div class=\" card-footer\">\n              <a class=\" text-light\" href=\"javascript:void(0)\">\n                Request a demo\n              </a>\n            </div>\n          </div>\n\n          <div\n            class=\" card card-pricing bg-gradient-success zoom-in shadow-lg rounded border-0 text-center mb-4\"\n          >\n            <div class=\" card-header bg-transparent\">\n              <h4 class=\" text-uppercase ls-1 text-white py-3 mb-0\">\n                Alpha pack\n              </h4>\n            </div>\n\n            <div class=\" card-body px-lg-7\">\n              <div class=\" display-1 text-white\">$199</div>\n\n              <span class=\" text-white\"> per application </span>\n\n              <ul class=\" list-unstyled my-4\">\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-white shadow rounded-circle text-muted\"\n                      >\n                        <i class=\" fas fa-terminal\"> </i>\n                      </div>\n                    </div>\n\n                    <div>\n                      <span class=\" pl-2 text-white\">\n                        Complete documentation\n                      </span>\n                    </div>\n                  </div>\n                </li>\n\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-white shadow rounded-circle text-muted\"\n                      >\n                        <i class=\" fas fa-pen-fancy\"> </i>\n                      </div>\n                    </div>\n\n                    <div>\n                      <span class=\" pl-2 text-white\">\n                        Working materials in Sketch\n                      </span>\n                    </div>\n                  </div>\n                </li>\n\n                <li>\n                  <div class=\" d-flex align-items-center\">\n                    <div>\n                      <div\n                        class=\" icon icon-xs icon-shape bg-white shadow rounded-circle text-muted\"\n                      >\n                        <i class=\" fas fa-hdd\"> </i>\n                      </div>\n                    </div>\n\n                    <div>\n                      <span class=\" pl-2 text-white\"> 2GB cloud storage </span>\n                    </div>\n                  </div>\n                </li>\n              </ul>\n\n              <button class=\" btn btn-secondary mb-3\" type=\"button\">\n                Start free trial\n              </button>\n            </div>\n\n            <div class=\" card-footer bg-transparent\">\n              <a class=\" text-white\" href=\"javascript:void(0)\">\n                Contact sales\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" d-flex justify-content-lg-center px-3 mt-5\">\n      <div>\n        <div\n          class=\" icon icon-shape bg-gradient-white shadow rounded-circle text-primary\"\n        >\n          <i class=\" ni ni-building text-primary\"> </i>\n        </div>\n      </div>\n\n      <div class=\" col-lg-6\">\n        <p class=\" text-white\">\n          <strong> The Arctic Ocean </strong> freezes every winter and much of\n          the sea-ice then thaws every summer, and that process will continue\n          whatever.\n        </p>\n      </div>\n    </div>\n\n    <div class=\" row row-grid justify-content-center\">\n      <div class=\" col-lg-10\">\n        <div class=\" table-responsive\">\n          <table class=\" table table-dark mt-5\">\n            <thead>\n              <tr>\n                <th class=\" px-0 bg-transparent\" scope=\"col\">\n                  <span class=\" text-light font-weight-700\"> Features </span>\n                </th>\n\n                <th class=\" text-center bg-transparent\" scope=\"col\">\n                  Bravo Pack\n                </th>\n\n                <th class=\" text-center bg-transparent\" scope=\"col\">\n                  Alpha Pack\n                </th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <tr>\n                <td class=\" px-0\">IMAP/POP Support</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Email Forwarding</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Active Sync</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Multiple domain hosting</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">\n                  <span class=\" text-sm text-light\">\n                    Limited to 1 domain only\n                  </span>\n                </td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Additional storage upgrade</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">30MB Attachment Limit</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">-</td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Password protected / Expiry links</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">-</td>\n              </tr>\n\n              <tr>\n                <td class=\" px-0\">Unlimited Custom Apps</td>\n\n                <td class=\" text-center\">\n                  <i class=\" fas fa-check text-success\"> </i>\n                </td>\n\n                <td class=\" text-center\">-</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/register/register.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/register/register.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" main-content\">\n  <div class=\" header bg-gradient-danger py-7 py-lg-8 pt-lg-9\">\n    <div class=\" container\">\n      <div class=\" header-body text-center mb-7\">\n        <div class=\" row justify-content-center\">\n          <div class=\" col-xl-5 col-lg-6 col-md-8 px-5\">\n            <h1 class=\" text-white\">Create an account</h1>\n\n            <p class=\" text-lead text-white\">\n              Use these awesome forms to login or create new account in your\n              project for free.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n\n  <div class=\" container mt--8 pb-5\">\n    <div class=\" row justify-content-center\">\n      <div class=\" col-lg-6 col-md-8\">\n        <div class=\" card bg-secondary border-0\">\n          <div class=\" card-header bg-transparent pb-5\">\n            <div class=\" text-muted text-center mt-2 mb-4\">\n              <small> Sign up with </small>\n            </div>\n\n            <div class=\" text-center\">\n              <a\n                class=\" btn btn-neutral btn-icon mr-4\"\n                href=\"javascript:void(0)\"\n              >\n                <span class=\" btn-inner--icon\">\n                  <img src=\"assets/img/icons/common/github.svg\" />\n                </span>\n\n                <span class=\" btn-inner--text\"> Github </span>\n              </a>\n\n              <a class=\" btn btn-neutral btn-icon\" href=\"javascript:void(0)\">\n                <span class=\" btn-inner--icon\">\n                  <img src=\"assets/img/icons/common/google.svg\" />\n                </span>\n\n                <span class=\" btn-inner--text\"> Google </span>\n              </a>\n            </div>\n          </div>\n\n          <div class=\" card-body px-lg-5 py-lg-5\">\n            <div class=\" text-center text-muted mb-4\">\n              <small> Or sign up with credentials </small>\n            </div>\n\n            <form role=\"form\">\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus === true }\">\n                <div class=\"input-group input-group-alternative mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-hat-3\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Name\"\n                    type=\"text\"\n                    (focus)=\"focus = true\"\n                    (blur)=\"focus = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus1 === true }\">\n                <div class=\"input-group input-group-alternative mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-email-83\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Email\"\n                    type=\"email\"\n                    (focus)=\"focus1 = true\"\n                    (blur)=\"focus1 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group\" [ngClass]=\"{ focused: focus2 === true }\">\n                <div class=\"input-group input-group-alternative\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"\n                      ><i class=\"ni ni-lock-circle-open\"></i\n                    ></span>\n                  </div>\n                  <input\n                    class=\"form-control\"\n                    placeholder=\"Password\"\n                    type=\"password\"\n                    (focus)=\"focus2 = true\"\n                    (blur)=\"focus2 = false\"\n                  />\n                </div>\n              </div>\n              <div class=\"text-muted font-italic\">\n                <small\n                  >password strength:\n                  <span class=\"text-success font-weight-700\">strong</span>\n                </small>\n              </div>\n              <div class=\"row my-4\">\n                <div class=\"col-12\">\n                  <div\n                    class=\"custom-control custom-control-alternative custom-checkbox\"\n                  >\n                    <input\n                      class=\"custom-control-input\"\n                      id=\"customCheckRegister\"\n                      type=\"checkbox\"\n                    />\n                    <label\n                      class=\"custom-control-label\"\n                      for=\"customCheckRegister\"\n                    >\n                      <span\n                        >I agree with the\n                        <a href=\"javascript:void(0)\">Privacy Policy</a>\n                      </span>\n                    </label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"text-center\">\n                <button type=\"button\" class=\"btn btn-primary mt-4\">\n                  Create account\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _pages_examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/examples/login/login.component */ "./src/app/pages/examples/login/login.component.ts");
/* harmony import */ var _pages_examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/examples/pricing/pricing.component */ "./src/app/pages/examples/pricing/pricing.component.ts");
/* harmony import */ var _pages_examples_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/examples/lock/lock.component */ "./src/app/pages/examples/lock/lock.component.ts");
/* harmony import */ var _pages_examples_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/examples/register/register.component */ "./src/app/pages/examples/register/register.component.ts");










var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [
                _pages_examples_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _pages_examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _pages_examples_lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["LockComponent"],
                _pages_examples_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_examples_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/examples/login/login.component */ "./src/app/pages/examples/login/login.component.ts");
/* harmony import */ var _pages_examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/examples/pricing/pricing.component */ "./src/app/pages/examples/pricing/pricing.component.ts");
/* harmony import */ var _pages_examples_lock_lock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/examples/lock/lock.component */ "./src/app/pages/examples/lock/lock.component.ts");
/* harmony import */ var _pages_examples_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/examples/register/register.component */ "./src/app/pages/examples/register/register.component.ts");





var AuthLayoutRoutes = [
    {
        path: "",
        children: [
            {
                path: "login",
                component: _pages_examples_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "lock",
                component: _pages_examples_lock_lock_component__WEBPACK_IMPORTED_MODULE_3__["LockComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "register",
                component: _pages_examples_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "pricing",
                component: _pages_examples_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_2__["PricingComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/examples/lock/lock.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/examples/lock/lock.component.ts ***!
  \*******************************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LockComponent = /** @class */ (function () {
    function LockComponent() {
    }
    LockComponent.prototype.ngOnInit = function () { };
    LockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-lock",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/lock/lock.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/examples/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/login/login.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/pricing/pricing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/examples/pricing/pricing.component.ts ***!
  \*************************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () { };
    PricingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-pricing",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pricing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/pricing/pricing.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/examples/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/examples/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/examples/register/register.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map
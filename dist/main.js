(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <footer class=\"footer\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"navbar navbar-top navbar-expand navbar-dark bg-danger border-bottom\"\n  id=\"navbar-main\"\n>\n  <div class=\"container-fluid\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <!-- Search form -->\n      <form\n        class=\"navbar-search navbar-search-light form-inline mr-sm-3\"\n        id=\"navbar-search-main\"\n      >\n        <div class=\"form-group mb-0\" [ngClass]=\"{ focused: focus === true }\">\n          <div class=\"input-group input-group-alternative input-group-merge\">\n            <div class=\"input-group-prepend\">\n              <span class=\"input-group-text\"\n                ><i class=\"fas fa-search\"></i\n              ></span>\n            </div>\n            <input\n              class=\"form-control\"\n              placeholder=\"Search\"\n              type=\"text\"\n              (focus)=\"focus = true\"\n              (blur)=\"focus = false\"\n            />\n          </div>\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"closeSearch()\"\n          data-action=\"search-close\"\n          data-target=\"#navbar-search-main\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">×</span>\n        </button>\n      </form>\n      <!-- Navbar links -->\n      <ul class=\"navbar-nav align-items-center ml-md-auto\">\n        <li class=\"nav-item d-xl-none\">\n          <!-- Sidenav toggler -->\n          <div\n            class=\"pr-3 sidenav-toggler sidenav-toggler-dark\"\n            data-action=\"sidenav-pin\"\n            data-target=\"#sidenav-main\"\n            (click)=\"openSidebar()\"\n          >\n            <div class=\"sidenav-toggler-inner\">\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n              <i class=\"sidenav-toggler-line\"></i>\n            </div>\n          </div>\n        </li>\n        <li class=\"nav-item d-sm-none\">\n          <a class=\"nav-link\" (click)=\"openSearch()\">\n            <i class=\"ni ni-zoom-split-in\"></i>\n          </a>\n        </li>\n        <li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n          <a class=\"nav-link dropdown-toggle\" role=\"button\" dropdownToggle>\n            <i class=\"ni ni-bell-55\"></i>\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-xl dropdown-menu-right py-0 overflow-hidden\"\n            *dropdownMenu\n          >\n            <!-- Dropdown header -->\n            <div class=\"px-3 py-3\">\n              <h6 class=\"text-sm text-muted m-0\">\n                You have <strong class=\"text-primary\">13</strong> notifications.\n              </h6>\n            </div>\n            <!-- List group -->\n            <div class=\"list-group list-group-flush\">\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <!-- Avatar -->\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-1.jpg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div><h4 class=\"mb-0 text-sm\">John Snow</h4></div>\n                      <div class=\"text-right text-muted\">\n                        <small>2 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">\n                      Let's meet at Starbucks at 11:30. Wdyt?\n                    </p>\n                  </div>\n                </div>\n              </a>\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <!-- Avatar -->\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-2.jpg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div><h4 class=\"mb-0 text-sm\">John Snow</h4></div>\n                      <div class=\"text-right text-muted\">\n                        <small>3 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">\n                      A new issue has been reported for Argon.\n                    </p>\n                  </div>\n                </div>\n              </a>\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <!-- Avatar -->\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-3.jpg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div><h4 class=\"mb-0 text-sm\">John Snow</h4></div>\n                      <div class=\"text-right text-muted\">\n                        <small>5 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">\n                      Your posts have been liked a lot.\n                    </p>\n                  </div>\n                </div>\n              </a>\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <!-- Avatar -->\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-4.jpg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div><h4 class=\"mb-0 text-sm\">John Snow</h4></div>\n                      <div class=\"text-right text-muted\">\n                        <small>2 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">\n                      Let's meet at Starbucks at 11:30. Wdyt?\n                    </p>\n                  </div>\n                </div>\n              </a>\n              <a\n                href=\"javascript:void()\"\n                class=\"list-group-item list-group-item-action\"\n              >\n                <div class=\"row align-items-center\">\n                  <div class=\"col-auto\">\n                    <!-- Avatar -->\n                    <img\n                      alt=\"Image placeholder\"\n                      src=\"assets/img/theme/team-5.jpg\"\n                      class=\"avatar rounded-circle\"\n                    />\n                  </div>\n                  <div class=\"col ml--2\">\n                    <div\n                      class=\"d-flex justify-content-between align-items-center\"\n                    >\n                      <div><h4 class=\"mb-0 text-sm\">John Snow</h4></div>\n                      <div class=\"text-right text-muted\">\n                        <small>3 hrs ago</small>\n                      </div>\n                    </div>\n                    <p class=\"text-sm mb-0\">\n                      A new issue has been reported for Argon.\n                    </p>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <!-- View all -->\n            <a\n              href=\"javascript:void()\"\n              class=\"dropdown-item text-center text-primary font-weight-bold py-3\"\n              >View all</a\n            >\n          </div>\n        </li>\n        <li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"javascript:void(0)\"\n            role=\"button\"\n            dropdownToggle\n          >\n            <i class=\"ni ni-ungroup\"></i>\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-lg dropdown-menu-dark bg-default dropdown-menu-right\"\n            *dropdownMenu\n          >\n            <div class=\"row shortcuts px-4\">\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-red\"\n                >\n                  <i class=\"ni ni-calendar-grid-58\"></i>\n                </span>\n                <small>Calendar</small>\n              </a>\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-orange\"\n                >\n                  <i class=\"ni ni-email-83\"></i>\n                </span>\n                <small>Email</small>\n              </a>\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-info\"\n                >\n                  <i class=\"ni ni-credit-card\"></i>\n                </span>\n                <small>Payments</small>\n              </a>\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-green\"\n                >\n                  <i class=\"ni ni-books\"></i>\n                </span>\n                <small>Reports</small>\n              </a>\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-purple\"\n                >\n                  <i class=\"ni ni-pin-3\"></i>\n                </span>\n                <small>Maps</small>\n              </a>\n              <a href=\"javascript:void()\" class=\"col-4 shortcut-item\">\n                <span\n                  class=\"shortcut-media avatar rounded-circle bg-gradient-yellow\"\n                >\n                  <i class=\"ni ni-basket\"></i>\n                </span>\n                <small>Shop</small>\n              </a>\n            </div>\n          </div>\n        </li>\n      </ul>\n      <!-- User -->\n      <ul class=\"navbar-nav align-items-center ml-auto ml-md-0\">\n        <li class=\"nav-item dropdown\" dropdown placement=\"bottom-right\">\n          <a class=\"nav-link pr-0 dropdown-toggle\" role=\"button\" dropdownToggle>\n            <div class=\"media align-items-center\">\n              <span class=\"avatar avatar-sm rounded-circle\">\n                <img\n                  alt=\"Image placeholder\"\n                  src=\"assets/img/theme/team-4.jpg\"\n                />\n              </span>\n              <div class=\"media-body ml-2 d-none d-lg-block\">\n                <span class=\"mb-0 text-sm  font-weight-bold\">John Snow</span>\n              </div>\n            </div>\n          </a>\n          <div\n            class=\"dropdown-menu dropdown-menu-arrow dropdown-menu-right\"\n            *dropdownMenu\n          >\n            <div class=\" dropdown-header noti-title\">\n              <h6 class=\"text-overflow m-0\">Welcome!</h6>\n            </div>\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/user-profile']\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"ni ni-single-02\"></i> <span>My profile</span>\n            </a>\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/user-profile']\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"ni ni-settings-gear-65\"></i> <span>Settings</span>\n            </a>\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/user-profile']\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"ni ni-calendar-grid-58\"></i> <span>Activity</span>\n            </a>\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"['/examples/user-profile']\"\n              class=\"dropdown-item\"\n            >\n              <i class=\"ni ni-support-16\"></i> <span>Support</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a href=\"javascript:void()\" class=\"dropdown-item\">\n              <i class=\"ni ni-user-run\"></i> <span>Logout</span>\n            </a>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div\n  *ngIf=\"sidenavOpen === true\"\n  class=\"backdrop d-xl-none\"\n  (click)=\"toggleSidenav()\"\n></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  class=\"sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white\"\n  id=\"sidenav-main\"\n  (mouseover)=\"onMouseEnterSidenav()\"\n  (mouseout)=\"onMouseLeaveSidenav()\"\n>\n<perfect-scrollbar>\n  <div class=\"scrollbar-inner\">\n    <div class=\"sidenav-header d-flex align-items-center\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n        <img\n          src=\"assets/img/brand/red.png\"\n          class=\"navbar-brand-img\"\n          alt=\"...\"\n        />\n      </a>\n      <div class=\"ml-auto\">\n        <!-- Sidenav toggler -->\n        <div\n          class=\"sidenav-toggler d-none d-xl-block\"\n          data-action=\"sidenav-unpin\"\n          data-target=\"#sidenav-main\"\n          (click)=\"minimizeSidebar()\"\n        >\n          <div class=\"sidenav-toggler-inner\">\n            <i class=\"sidenav-toggler-line\"></i>\n            <i class=\"sidenav-toggler-line\"></i>\n            <i class=\"sidenav-toggler-line\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"navbar-inner\">\n      <div class=\"collapse navbar-collapse\" id=\"sidenav-collapse-main\">\n        <!-- Collapse header -->\n        <ul class=\"navbar-nav\">\n          <li *ngFor=\"let menuitem of menuItems\" class=\"nav-item\">\n            <!--If is a single link-->\n            <a\n              routerLinkActive=\"active\"\n              [routerLink]=\"[menuitem.path]\"\n              *ngIf=\"menuitem.type === 'link'\"\n              class=\"nav-link\"\n            >\n              <i class=\"ni {{ menuitem.icontype }}\"></i>\n              <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n            </a>\n            <!--If it have a submenu-->\n            <a\n              data-toggle=\"collapse\"\n              routerLinkActive=\"active\"\n              *ngIf=\"menuitem.type === 'sub'\"\n              (click)=\"menuitem.isCollapsed = !menuitem.isCollapsed\"\n              [attr.aria-expanded]=\"!menuitem.isCollapsed\"\n              [attr.aria-controls]=\"menuitem.collapse\"\n              class=\"nav-link\"\n            >\n              <i class=\"ni {{ menuitem.icontype }}\"></i>\n              <span class=\"nav-link-text\">{{ menuitem.title }}</span>\n            </a>\n\n            <!--Display the submenu items-->\n            <div\n              id=\"{{ menuitem.collapse }}\"\n              class=\"collapse\"\n              *ngIf=\"menuitem.type === 'sub'\"\n              [collapse]=\"menuitem.isCollapsed\"\n              [isAnimated]=\"true\"\n            >\n              <ul class=\"nav nav-sm flex-column\">\n                <li\n                  *ngFor=\"let childitems of menuitem.children\"\n                  class=\"nav-item\"\n                >\n                  <!--If is a single link-->\n                  <a\n                    routerLinkActive=\"active\"\n                    [routerLink]=\"[menuitem.path, childitems.path]\"\n                    class=\"nav-link\"\n                    *ngIf=\"childitems.type === 'link'\"\n                  >\n                    {{ childitems.title }}\n                  </a>\n                  <!--If it have a submenu-->\n                  <a\n                    data-toggle=\"collapse\"\n                    (click)=\"childitems.isCollapsed = !childitems.isCollapsed\"\n                    [attr.aria-expanded]=\"!childitems.isCollapsed\"\n                    [attr.aria-controls]=\"childitems.collapse\"\n                    *ngIf=\"childitems.type === 'sub'\"\n                    class=\"nav-link\"\n                  >\n                    {{ childitems.title }}\n                  </a>\n                  <!--Display the submenu items-->\n                  <div\n                    id=\"{{ childitems.collapse }}\"\n                    class=\"collapse\"\n                    *ngIf=\"childitems.type === 'sub'\"\n                    [collapse]=\"childitems.isCollapsed\"\n                    [isAnimated]=\"true\"\n                  >\n                    <ul class=\"nav\">\n                      <li\n                        *ngFor=\"let childitem of childitems.children\"\n                        class=\"nav-item\"\n                      >\n                        <a href=\"javascript:void(0)\" class=\"nav-link\">\n                          {{ childitem.title }}\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n        <!-- Divider -->\n        <hr class=\"my-3\" />\n        <!-- Heading -->\n        <h6 class=\"navbar-heading p-0 text-muted\">Documentation</h6>\n        <!-- Navigation -->\n        <ul class=\"navbar-nav mb-md-3\">\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://demos.creative-tim.com/argon-dashboard-pro-angular/#/documentation/overview?ref=adpa-sidebar-area\"\n              target=\"_blank\"\n            >\n              <i class=\"ni ni-spaceship\"></i>\n              <span class=\"nav-link-text\">Getting started</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://demos.creative-tim.com/argon-dashboard-pro-angular/#/documentation/colors?ref=adpa-sidebar-area\"\n              target=\"_blank\"\n            >\n              <i class=\"ni ni-palette\"></i>\n              <span class=\"nav-link-text\">Foundation</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://demos.creative-tim.com/argon-dashboard-pro-angular/#/documentation/alerts?ref=adpa-sidebar-area\"\n              target=\"_blank\"\n            >\n              <i class=\"ni ni-ui-04\"></i>\n              <span class=\"nav-link-text\">Components</span>\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a\n              class=\"nav-link\"\n              href=\"https://demos.creative-tim.com/argon-dashboard-pro-angular/#/documentation/charts?ref=adpa-sidebar-area\"\n              target=\"_blank\"\n            >\n              <i class=\"ni ni-chart-pie-35\"></i>\n              <span class=\"nav-link-text\">Plugins</span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</perfect-scrollbar>\n\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dx-vector-map\n  id=\"vector-map\"\n  [bounds]=\"[0, 0, 0, 0]\"\n  (onClick)=\"click($event)\"\n>\n  <dxo-tooltip [enabled]=\"true\" [customizeTooltip]=\"customizeTooltip\">\n    <dxo-font color=\"#fff\"></dxo-font>\n    <dxo-border [visible]=\"false\"></dxo-border>\n  </dxo-tooltip>\n  <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\"> </dxi-layer>\n</dx-vector-map>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\n<div class=\"\" (window:resize)=\"isMobile($event)\">\n  <app-sidebar\n    [ngClass]=\"{ 'sidenav fixed-left': isMobileResolution === false }\"\n  ></app-sidebar>\n  <div class=\"main-content\">\n    <!-- Top navbar -->\n    <app-navbar></app-navbar>\n    <!-- Pages -->\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            data-toggle=\"tooltip\"\n            data-original-title=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-auth-layout\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<footer class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-footer-admin-layout\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav\n  id=\"navbar-main\"\n  class=\"navbar navbar-horizontal navbar-main navbar-expand-lg navbar-dark bg-danger\"\n>\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/dashboards/dashboard']\">\n      <img src=\"assets/img/brand/white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbar-collapse\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n      (click)=\"isCollapsed = !isCollapsed\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseBasic\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"navbar-collapse navbar-custom-collapse collapse\"\n      id=\"collapseBasic\" [collapse]=\"isCollapsed\"\n    >\n      <div class=\"navbar-collapse-header\">\n        <div class=\"row\">\n          <div class=\"col-6 collapse-brand\">\n            <a [routerLink]=\"['/dashboards/dashboard']\">\n              <img src=\"assets/img/brand/blue.png\" />\n            </a>\n          </div>\n          <div class=\"col-6 collapse-close\">\n            <button\n              type=\"button\"\n              class=\"navbar-toggler\"\n              data-toggle=\"collapse\"\n              data-target=\"#navbar-collapse\"\n              aria-controls=\"navbar-collapse\"\n              aria-expanded=\"false\"\n              aria-label=\"Toggle navigation\"\n              (click)=\"isCollapsed = !isCollapsed\"\n            >\n              <span></span> <span></span>\n            </button>\n          </div>\n        </div>\n      </div>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/dashboards/dashboard']\"\n          >\n            <span class=\"nav-link-inner--text\">Dashboard</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/pricing']\"\n          >\n            <span class=\"nav-link-inner--text\">Pricing</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/login']\"\n          >\n            <span class=\"nav-link-inner--text\">Login</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/register']\"\n          >\n            <span class=\"nav-link-inner--text\">Register</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            routerLinkActive=\"active\"\n            [routerLink]=\"['/examples/lock']\"\n          >\n            <span class=\"nav-link-inner--text\">Lock</span>\n          </a>\n        </li>\n      </ul>\n      <hr class=\"d-lg-none\" />\n      <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.facebook.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Like us on Facebook\"\n          >\n            <i class=\"fab fa-facebook-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Facebook</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://www.instagram.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Instagram\"\n          >\n            <i class=\"fab fa-instagram\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Instagram</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://twitter.com/creativetim\"\n            target=\"_blank\"\n            tooltip=\"Follow us on Twitter\"\n          >\n            <i class=\"fab fa-twitter-square\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Twitter</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link nav-link-icon\"\n            href=\"https://github.com/creativetimofficial\"\n            target=\"_blank\"\n            tooltip=\"Star us on Github\"\n          >\n            <i class=\"fab fa-github\"></i>\n            <span class=\"nav-link-inner--text d-lg-none\">Github</span>\n          </a>\n        </li>\n        <li class=\"nav-item d-none d-lg-block ml-lg-4\">\n          <a\n            href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n            target=\"_blank\"\n            class=\"btn btn-neutral btn-icon\"\n          >\n            <span class=\"btn-inner--icon\">\n              <i class=\"fas fa-shopping-cart mr-2\"></i>\n            </span>\n            <span class=\"nav-link-inner--text\">Purchase now</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"main-content\">\n  <!-- Header -->\n  <div class=\"header bg-danger pt-5 pb-7\">\n    <div class=\"container\">\n      <div class=\"header-body\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-6\">\n            <div class=\"pr-5\">\n              <h1 class=\"display-2 text-white font-weight-bold mb-0\">\n                Argon Dashboard PRO Angular\n              </h1>\n              <h2 class=\"display-4 text-white font-weight-light\">\n                A beautiful premium dashboard for Bootstrap 4 and Angular.\n              </h2>\n              <p class=\"text-white mt-4\">\n                Argon perfectly combines reusable HTML and modular CSS with a\n                modern styling and beautiful markup throughout each HTML\n                template in the pack.\n              </p>\n              <div class=\"mt-5\">\n                <a\n                  [routerLink]=\"['/dashboards/dashboard']\"\n                  class=\"btn btn-neutral my-2\"\n                  >Explore Dashboard</a\n                >\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  class=\"btn btn-default my-2\"\n                  >Purchase now</a\n                >\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-6\">\n            <div class=\"row pt-5\">\n              <div class=\"col-md-6\">\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-red text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Components</h5>\n                    <p>Argon comes with over 70 handcrafted components.</p>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-info text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Plugins</h5>\n                    <p>\n                      Fully integrated and extendable third-party plugins that\n                      you will love.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 pt-lg-5 pt-4\">\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-success text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Pages</h5>\n                    <p>\n                      From simple to complex, you get a beautiful set of 15+\n                      page examples.\n                    </p>\n                  </div>\n                </div>\n                <div class=\"card mb-4\">\n                  <div class=\"card-body\">\n                    <div\n                      class=\"icon icon-shape bg-gradient-warning text-white rounded-circle shadow mb-4\"\n                    >\n                      <i class=\"ni ni-active-40\"></i>\n                    </div>\n                    <h5 class=\"h3\">Documentation</h5>\n                    <p>You will love how easy is to to work with Argon.</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"separator separator-bottom separator-skew zindex-100\">\n      <svg\n        x=\"0\"\n        y=\"0\"\n        viewBox=\"0 0 2560 100\"\n        preserveAspectRatio=\"none\"\n        version=\"1.1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n      >\n        <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\n      </svg>\n    </div>\n  </div>\n  <section class=\"py-6 pb-9 bg-default\">\n    <div class=\"container-fluid\">\n      <div class=\"row justify-content-center text-center\">\n        <div class=\"col-md-6\">\n          <h2 class=\"display-3 text-white\">A complete HTML solution</h2>\n          <p class=\"lead text-white\">\n            Argon is a completly new product built on our newest re-built from\n            scratch framework structure that is meant to make our products more\n            intuitive, more adaptive and, needless to say, so much easier to\n            customize. Let Argon amaze you with its cool features and build tools\n            and get your project to a whole new level.\n          </p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section section-lg pt-lg-0 mt--7\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-primary text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-check-bold\"></i>\n                  </div>\n                  <h4 class=\"h3 text-primary text-uppercase\">\n                    Based on Bootstrap 4\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon is built on top of the most popular open source\n                    toolkit for developing with HTML, CSS, and JS.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >bootstrap 4</span\n                    >\n                    <span class=\"badge badge-pill badge-primary mr-1\"\n                      >dashboard</span\n                    >\n                    <span class=\"badge badge-pill badge-primary\">template</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-success text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-istanbul\"></i>\n                  </div>\n                  <h4 class=\"h3 text-success text-uppercase\">\n                    Integrated build tools\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Use Argons's included npm and gulp scripts to compile source\n                    code, run tests, and more with just a few simple commands.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-success mr-1\">npm</span>\n                    <span class=\"badge badge-pill badge-success mr-1\"\n                      >gulp</span\n                    >\n                    <span class=\"badge badge-pill badge-success\"\n                      >build tools</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-4\">\n              <div class=\"card card-lift--hover shadow border-0\">\n                <div class=\"card-body py-5\">\n                  <div\n                    class=\"icon icon-shape bg-gradient-warning text-white rounded-circle mb-4\"\n                  >\n                    <i class=\"ni ni-planet\"></i>\n                  </div>\n                  <h4 class=\"h3 text-warning text-uppercase\">\n                    Full Sass support\n                  </h4>\n                  <p class=\"description mt-3\">\n                    Argon makes customization easier than ever before. You get\n                    all the tools to make your website building process a\n                    breeze.\n                  </p>\n                  <div>\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >sass</span\n                    >\n                    <span class=\"badge badge-pill badge-warning mr-1\"\n                      >design</span\n                    >\n                    <span class=\"badge badge-pill badge-warning\"\n                      >customize</span\n                    >\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-1.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Awesome features</h1>\n            <p>\n              This dashboard comes with super cool features that are meant to\n              help in the process. Handcrafted components, page examples and\n              functional widgets are just a few things you will see and love at\n              first sight.\n            </p>\n            <ul class=\"list-unstyled mt-5\">\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-settings-gear-65\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Carefully crafted components</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-html5\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Amazing page examples</h4></div>\n                </div>\n              </li>\n              <li class=\"py-2\">\n                <div class=\"d-flex align-items-center\">\n                  <div>\n                    <div class=\"badge badge-circle badge-success mr-3\">\n                      <i class=\"ni ni-satisfied\"></i>\n                    </div>\n                  </div>\n                  <div><h4 class=\"mb-0\">Super friendly support team</h4></div>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6\">\n          <img src=\"assets/img/theme/landing-2.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"pr-md-5\">\n            <h1>Example pages</h1>\n            <p>\n              If you want to get inspiration or just show something directly to\n              your clients, you can jump start your development with our\n              pre-built example pages.\n            </p>\n            <a\n              [routerLink]=\"['/examples/profile']\"\n              class=\"font-weight-bold text-warning mt-5\"\n              >Explore pages</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-6\">\n    <div class=\"container\">\n      <div class=\"row row-grid align-items-center\">\n        <div class=\"col-md-6 order-md-2\">\n          <img src=\"assets/img/theme/landing-3.png\" class=\"img-fluid\" />\n        </div>\n        <div class=\"col-md-6 order-md-1\">\n          <div class=\"pr-md-5\">\n            <h1>Lovable widgets and cards</h1>\n            <p>\n              We love cards and everybody on the web seems to. We have gone\n              above and beyond with options for you to organise your\n              information. From cards designed for content, to pricing cards or\n              user profiles, you will have many options to choose from.\n            </p>\n            <a\n              [routerLink]=\"['/widgets']\"\n              class=\"font-weight-bold text-info mt-5\"\n              >Explore widgets</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7 section-nucleo-icons bg-white overflow-hidden\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">Nucleo Icons</h2>\n          <p class=\"lead\">\n            The official package contains over 21.000 icons which are looking\n            great in combination with Argon Design System. Make sure you check\n            all of them and use those that you like the most.\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              [routerLink]=\"['/documentation/icons']\"\n              target=\"_blank\"\n              class=\"btn btn-primary\"\n              >View demo icons</a\n            >\n            <a\n              href=\"https://nucleoapp.com/?ref=1712\"\n              target=\"_blank\"\n              class=\"btn btn-default mt-3 mt-md-0\"\n              >View all icons</a\n            >\n          </div>\n        </div>\n      </div>\n      <div class=\"blur--hover\">\n        <a [routerLink]=\"['/documentation/icons']\">\n          <div class=\"icons-container blur-item mt-5\">\n            <!-- Center -->\n            <i class=\"icon ni ni-diamond\"></i>\n            <!-- Right 1 -->\n            <i class=\"icon icon-sm ni ni-album-2\"></i>\n            <i class=\"icon icon-sm ni ni-app\"></i>\n            <i class=\"icon icon-sm ni ni-atom\"></i>\n            <!-- Right 2 -->\n            <i class=\"icon ni ni-bag-17\"></i>\n            <i class=\"icon ni ni-bell-55\"></i>\n            <i class=\"icon ni ni-credit-card\"></i>\n            <!-- Left 1 -->\n            <i class=\"icon icon-sm ni ni-briefcase-24\"></i>\n            <i class=\"icon icon-sm ni ni-building\"></i>\n            <i class=\"icon icon-sm ni ni-button-play\"></i>\n            <!-- Left 2 -->\n            <i class=\"icon ni ni-calendar-grid-58\"></i>\n            <i class=\"icon ni ni-camera-compact\"></i>\n            <i class=\"icon ni ni-chart-bar-32\"></i>\n          </div>\n          <span class=\"blur-hidden h5 text-success\"\n            >Explore all the 21.000+ Nucleo Icons</span\n          >\n        </a>\n      </div>\n    </div>\n  </section>\n  <section class=\"py-7\">\n    <div class=\"container\">\n      <div class=\"row row-grid justify-content-center\">\n        <div class=\"col-lg-8 text-center\">\n          <h2 class=\"display-3\">\n            Do you love this awesome\n            <span class=\"text-success\">Dashboard for Bootstrap 4?</span>\n          </h2>\n          <p class=\"lead\">\n            Cause if you do, it can be yours now. Hit the button below to\n            navigate to get the free version or purchase a license for your next\n            project. Build a new web app or give an old Bootstrap project a new\n            look!\n          </p>\n          <div class=\"btn-wrapper\">\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-neutral mb-3 mb-sm-0\"\n              target=\"_blank\"\n            >\n              <span class=\"btn-inner--text\">Get FREE version</span>\n            </a>\n            <a\n              href=\"https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n              class=\"btn btn-primary btn-icon mb-3 mb-sm-0\"\n            >\n              <span class=\"btn-inner--icon\"><i class=\"ni ni-basket\"></i></span>\n              <span class=\"btn-inner--text\">Purchase now</span>\n              <span\n                class=\"badge badge-md badge-pill badge-floating badge-danger border-white\"\n                >$89</span\n              >\n            </a>\n          </div>\n          <div class=\"text-center\">\n            <h4 class=\"display-4 mb-5 mt-5\">Available on these technologies</h4>\n            <div class=\"row justify-content-center\">\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Angular - One framework. Mobile &amp; desktop\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\"https://www.creative-tim.com/product/argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Bootstrap 4 - Most popular front-end component library\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg\"\n                    class=\"img-fluid rounded-circle shadow shadow-lg--hover\"\n                  />\n                </a>\n              </div>\n\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-react?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"React - A JavaScript library for building user interfaces\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-laravel?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Laravel - The PHP Framework For Web Artisans\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/laravel_logo.png\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-nodejs?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Node.js - a JavaScript runtime built on Chrome's V8 JavaScript engine\"\n                >\n                  <img\n                    src=\"https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nodejs-logo.png\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/vue-argon-dashboard-pro?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Vue.js - The progressive javascript framework\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.creative-tim.com/product/argon-dashboard-pro-angular?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"Sketch - Digital design toolkit\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg\"\n                    class=\"img-fluid rounded-circle\"\n                  />\n                </a>\n              </div>\n              <div class=\"my-2 col-3 col-md-2\">\n                <a\n                  href=\" https://www.adobe.com/products/photoshop.html?ref=adpa-presentation-page\"\n                  target=\"_blank\"\n                  tooltip=\"[Coming Soon] Adobe Photoshop - Software for digital images manipulation\"\n                >\n                  <img\n                    src=\"https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg\"\n                    class=\"img-fluid rounded-circle opacity-3\"\n                  />\n                </a>\n              </div>\n            </div>\n            <div class=\"spinner-border\" role=\"status\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n<!-- Footer -->\n<footer class=\"py-5\" id=\"footer-main\">\n  <div class=\"container\">\n    <div class=\"row align-items-center justify-content-xl-between\">\n      <div class=\"col-xl-6\">\n        <div class=\"copyright text-center text-xl-left text-muted\">\n          &copy; {{ test | date: \"yyyy\" }}\n          <a\n            href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n            class=\"font-weight-bold ml-1\"\n            target=\"_blank\"\n            >Creative Tim</a\n          >\n        </div>\n      </div>\n      <div class=\"col-xl-6\">\n        <ul\n          class=\"nav nav-footer justify-content-center justify-content-xl-end\"\n        >\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Creative Tim</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/presentation?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >About Us</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"http://blog.creative-tim.com?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >Blog</a\n            >\n          </li>\n          <li class=\"nav-item\">\n            <a\n              href=\"https://www.creative-tim.com/license?ref=adpa-presentation-page\"\n              class=\"nav-link\"\n              target=\"_blank\"\n              >License</a\n            >\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/auth-layout/auth-layout.module": [
		"./src/app/layouts/auth-layout/auth-layout.module.ts",
		"layouts-auth-layout-auth-layout-module"
	],
	"./pages/calendar/calendar.module": [
		"./src/app/pages/calendar/calendar.module.ts",
		"default~pages-calendar-calendar-module~pages-components-components-module~pages-dashboards-dashboards-module",
		"default~pages-calendar-calendar-module~pages-widgets-widgets-module",
		"default~pages-calendar-calendar-module~pages-components-components-module",
		"pages-calendar-calendar-module"
	],
	"./pages/charts/charts.module": [
		"./src/app/pages/charts/charts.module.ts",
		"default~pages-charts-charts-module~pages-dashboards-dashboards-module~pages-widgets-widgets-module",
		"default~pages-charts-charts-module~pages-dashboards-dashboards-module",
		"pages-charts-charts-module"
	],
	"./pages/components/components.module": [
		"./src/app/pages/components/components.module.ts",
		"default~pages-calendar-calendar-module~pages-components-components-module~pages-dashboards-dashboards-module",
		"default~pages-calendar-calendar-module~pages-components-components-module",
		"pages-components-components-module"
	],
	"./pages/dashboards/dashboards.module": [
		"./src/app/pages/dashboards/dashboards.module.ts",
		"default~pages-dashboards-dashboards-module~pages-examples-examples-module~pages-tables-tables-module~11178cce",
		"default~pages-charts-charts-module~pages-dashboards-dashboards-module~pages-widgets-widgets-module",
		"default~pages-calendar-calendar-module~pages-components-components-module~pages-dashboards-dashboards-module",
		"default~pages-charts-charts-module~pages-dashboards-dashboards-module",
		"pages-dashboards-dashboards-module"
	],
	"./pages/examples/examples.module": [
		"./src/app/pages/examples/examples.module.ts",
		"default~pages-dashboards-dashboards-module~pages-examples-examples-module~pages-tables-tables-module~11178cce",
		"pages-examples-examples-module"
	],
	"./pages/forms/forms.module": [
		"./src/app/pages/forms/forms.module.ts",
		"pages-forms-forms-module"
	],
	"./pages/maps/maps.module": [
		"./src/app/pages/maps/maps.module.ts",
		"pages-maps-maps-module"
	],
	"./pages/tables/tables.module": [
		"./src/app/pages/tables/tables.module.ts",
		"default~pages-dashboards-dashboards-module~pages-examples-examples-module~pages-tables-tables-module~11178cce",
		"pages-tables-tables-module"
	],
	"./pages/widgets/widgets.module": [
		"./src/app/pages/widgets/widgets.module.ts",
		"default~pages-dashboards-dashboards-module~pages-examples-examples-module~pages-tables-tables-module~11178cce",
		"default~pages-charts-charts-module~pages-dashboards-dashboards-module~pages-widgets-widgets-module",
		"default~pages-calendar-calendar-module~pages-widgets-widgets-module",
		"pages-widgets-widgets-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/presentation/presentation.component */ "./src/app/pages/presentation/presentation.component.ts");








var routes = [
    {
        path: "",
        redirectTo: "presentation",
        pathMatch: "full"
    },
    {
        path: "presentation",
        component: _pages_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "dashboards",
                loadChildren: "./pages/dashboards/dashboards.module#DashboardsModule"
            },
            {
                path: "components",
                loadChildren: "./pages/components/components.module#ComponentsModule"
            },
            {
                path: "forms",
                loadChildren: "./pages/forms/forms.module#FormsModules"
            },
            {
                path: "tables",
                loadChildren: "./pages/tables/tables.module#TablesModule"
            },
            {
                path: "maps",
                loadChildren: "./pages/maps/maps.module#MapsModule"
            },
            {
                path: "widgets",
                loadChildren: "./pages/widgets/widgets.module#WidgetsModule"
            },
            {
                path: "charts",
                loadChildren: "./pages/charts/charts.module#ChartsModule"
            },
            {
                path: "calendar",
                loadChildren: "./pages/calendar/calendar.module#CalendarModule"
            },
            {
                path: "examples",
                loadChildren: "./pages/examples/examples.module#ExamplesModule"
            }
        ]
    },
    {
        path: "",
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_6__["AuthLayoutComponent"],
        children: [
            {
                path: "examples",
                loadChildren: "./layouts/auth-layout/auth-layout.module#AuthLayoutModule"
            }
        ]
    },
    {
        path: "**",
        redirectTo: "dashboard"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // Show loading indicator
                window.scrollTo(0, 0);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                // Hide loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "./src/app/layouts/auth-layout/auth-layout.component.ts");
/* harmony import */ var _pages_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/presentation/presentation.module */ "./src/app/pages/presentation/presentation.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_11__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_12__["AuthLayoutComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_15__["ComponentsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                ngx_chips__WEBPACK_IMPORTED_MODULE_8__["TagInputModule"],
                _pages_presentation_presentation_module__WEBPACK_IMPORTED_MODULE_13__["PresentationModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vector-map/vector-map.component */ "./src/app/components/vector-map/vector-map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"].forRoot(),
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxVectorMapModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxPieChartModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _vector_map_vector_map_component__WEBPACK_IMPORTED_MODULE_7__["VectorMapComponent1"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.sidenavOpen = true;
        this.location = location;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                // Show loading indicator
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // Hide loading indicator
                if (window.innerWidth < 1200) {
                    document.body.classList.remove("g-sidenav-pinned");
                    document.body.classList.add("g-sidenav-hidden");
                    _this.sidenavOpen = false;
                }
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "Dashboard";
    };
    NavbarComponent.prototype.openSearch = function () {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    };
    NavbarComponent.prototype.closeSearch = function () {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    };
    NavbarComponent.prototype.openSidebar = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.prototype.toggleSidenav = function () {
        if (document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-pinned");
            document.body.classList.add("g-sidenav-hidden");
            this.sidenavOpen = false;
        }
        else {
            document.body.classList.add("g-sidenav-pinned");
            document.body.classList.remove("g-sidenav-hidden");
            this.sidenavOpen = true;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var misc = {
    sidebar_mini_active: true
};
//Menu Items
var ROUTES = [
    {
        path: "/dashboards",
        title: "Dashboards",
        type: "sub",
        icontype: "ni-shop text-primary",
        isCollapsed: true,
        children: [
            { path: "dashboard", title: "Dashboard", type: "link" },
            { path: "alternative", title: "Alternative", type: "link" }
        ]
    },
    {
        path: "/examples",
        title: "Examples",
        type: "sub",
        icontype: "ni-ungroup text-orange",
        collapse: "examples",
        isCollapsed: true,
        children: [
            { path: "pricing", title: "Pricing", type: "link" },
            { path: "login", title: "Login", type: "link" },
            { path: "register", title: "Register", type: "link" },
            { path: "lock", title: "Lock", type: "link" },
            { path: "timeline", title: "Timeline", type: "link" },
            { path: "profile", title: "Profile", type: "link" }
        ]
    },
    {
        path: "/components",
        title: "Components",
        type: "sub",
        icontype: "ni-ui-04 text-info",
        collapse: "components",
        isCollapsed: true,
        children: [
            { path: "buttons", title: "Buttons", type: "link" },
            { path: "cards", title: "Cards", type: "link" },
            { path: "grid", title: "Grid", type: "link" },
            { path: "notifications", title: "Notifications", type: "link" },
            { path: "icons", title: "Icons", type: "link" },
            { path: "typography", title: "Typography", type: "link" },
            {
                path: "multilevel",
                isCollapsed: true,
                title: "Multilevel",
                type: "sub",
                collapse: "multilevel",
                children: [
                    { title: "Third level menu" },
                    { title: "Just another link" },
                    { title: "One last link" }
                ]
            }
        ]
    },
    {
        path: "/forms",
        title: "Forms",
        type: "sub",
        icontype: "ni-single-copy-04 text-pink",
        collapse: "forms",
        isCollapsed: true,
        children: [
            { path: "elements", title: "Elements", type: "link" },
            { path: "components", title: "Components", type: "link" },
            { path: "validation", title: "Validation", type: "link" }
        ]
    },
    {
        path: "/tables",
        title: "Tables",
        type: "sub",
        icontype: "ni-align-left-2 text-default",
        collapse: "tables",
        isCollapsed: true,
        children: [
            { path: "tables", title: "Tables", type: "link" },
            { path: "sortable", title: "Sortable", type: "link" },
            { path: "ngx-datatable", title: "Ngx Datatable", type: "link" }
        ]
    },
    {
        path: "/maps",
        title: "Maps",
        type: "sub",
        icontype: "ni-map-big text-primary",
        collapse: "maps",
        isCollapsed: true,
        children: [
            { path: "google", title: "Google Maps", type: "link" },
            { path: "vector", title: "Vector Map", type: "link" }
        ]
    },
    {
        path: "/widgets",
        title: "Widgets",
        type: "link",
        icontype: "ni-archive-2 text-green"
    },
    {
        path: "/charts",
        title: "Charts",
        type: "link",
        icontype: "ni-chart-pie-35 text-info"
    },
    {
        path: "/calendar",
        title: "Calendar",
        type: "link",
        icontype: "ni-calendar-grid-58 text-red"
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.prototype.onMouseEnterSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.add("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.onMouseLeaveSidenav = function () {
        if (!document.body.classList.contains("g-sidenav-pinned")) {
            document.body.classList.remove("g-sidenav-show");
        }
    };
    SidebarComponent.prototype.minimizeSidebar = function () {
        var sidenavToggler = document.getElementsByClassName("sidenav-toggler")[0];
        var body = document.getElementsByTagName("body")[0];
        if (body.classList.contains("g-sidenav-pinned")) {
            misc.sidebar_mini_active = true;
        }
        else {
            misc.sidebar_mini_active = false;
        }
        if (misc.sidebar_mini_active === true) {
            body.classList.remove("g-sidenav-pinned");
            body.classList.add("g-sidenav-hidden");
            sidenavToggler.classList.remove("active");
            misc.sidebar_mini_active = false;
        }
        else {
            body.classList.add("g-sidenav-pinned");
            body.classList.remove("g-sidenav-hidden");
            sidenavToggler.classList.add("active");
            misc.sidebar_mini_active = true;
        }
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/components/sidebar/sidebar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #vector-map {\n    min-height: 220px;\n    width: 100%;\n    display: block;\n}\n::ng-deep #vector-map > svg > rect{\n  display: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZWN0b3ItbWFwL3ZlY3Rvci1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjdmVjdG9yLW1hcCB7XG4gICAgbWluLWhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgI3ZlY3Rvci1tYXAgPiBzdmcgPiByZWN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/vector-map/vector-map.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.component.ts ***!
  \***************************************************************/
/*! exports provided: VectorMapComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorMapComponent1", function() { return VectorMapComponent1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/components/vector-map/vector-map.service.ts");




var VectorMapComponent1 = /** @class */ (function () {
    function VectorMapComponent1(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorMapComponent1.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorMapComponent1.prototype.customizeLayers = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            var country = _this.countries[element.attribute("name")];
            if (country) {
                element.applySettings({
                    color: country.color,
                    hoveredColor: country.color,
                    selectedColor: country.color
                });
            }
            else {
                element.applySettings({
                    color: "#e4e4e4",
                    hoveredColor: "#e4e4e4",
                    selectedColor: "#e4e4e4"
                });
            }
        });
    };
    VectorMapComponent1.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorMapComponent1.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    VectorMapComponent1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vector-map-component",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vector-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vector-map/vector-map.component.html")).default,
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vector-map.component.css */ "./src/app/components/vector-map/vector-map.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], VectorMapComponent1);
    return VectorMapComponent1;
}());



/***/ }),

/***/ "./src/app/components/vector-map/vector-map.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/vector-map/vector-map.service.ts ***!
  \*************************************************************/
/*! exports provided: Country, Countries, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");



var popScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])()
    .domain([100, 3000])
    .range(["#AAAAAA", "#444444"]);
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var Countries = /** @class */ (function () {
    function Countries() {
    }
    return Countries;
}());

var countries = {
    Russia: { color: popScale(300) },
    Canada: { color: popScale(120) },
    China: { color: popScale(1300) },
    "United States": { color: popScale(2920) },
    Brazil: { color: popScale(550) },
    Australia: { color: popScale(760) },
    India: { color: popScale(200) },
    Argentina: { color: popScale(240) },
    Romania: { color: popScale(600) },
    Algeria: { color: popScale(540) }
};
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getCountries = function () {
        return countries;
    };
    Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    }
    AdminLayoutComponent.prototype.isMobile = function (event) {
        if (window.innerWidth < 1200) {
            this.isMobileResolution = true;
        }
        else {
            this.isMobileResolution = false;
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:resize", ["$event"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "isMobile", null);
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC1sYXlvdXQvYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        navbar.classList.add("navbar-light");
        navbar.classList.add("navbar-transparent");
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        // html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
        var navbar = document.getElementsByClassName("navbar-horizontal")[0];
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("navbar-transparent");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth-layout.component.scss */ "./src/app/layouts/auth-layout/auth-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn .badge-floating.badge:not(.badge-circle) {\n  -webkit-transform: translate(-30%, 50%);\n          transform: translate(-30%, 50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvU2FrbyBQcm9qZWN0cy9hcmdvbi1kYXNoYm9hcmQtcHJvLWFuZ3VsYXItdjEuMi4wL3NyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNSTtFQUNFLHVDQUFBO1VBQUEsK0JBQUE7QUNMTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL1xuLy8gQmFkZ2UgZmxvYXRpbmdcbi8vXG5cbi5idG4ge1xuICAuYmFkZ2UtZmxvYXRpbmcge1xuICAgICYuYmFkZ2U6bm90KC5iYWRnZS1jaXJjbGUpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIDUwJSk7XG4gICAgfVxuICB9XG59XG4iLCIuYnRuIC5iYWRnZS1mbG9hdGluZy5iYWRnZTpub3QoLmJhZGdlLWNpcmNsZSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCA1MCUpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PresentationComponent = /** @class */ (function () {
    function PresentationComponent() {
        this.test = new Date();
        this.isCollapsed = true;
    }
    PresentationComponent.prototype.ngOnInit = function () { };
    PresentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-presentation",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./presentation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/presentation/presentation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./presentation.component.scss */ "./src/app/pages/presentation/presentation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PresentationComponent);
    return PresentationComponent;
}());



/***/ }),

/***/ "./src/app/pages/presentation/presentation.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/presentation/presentation.module.ts ***!
  \***********************************************************/
/*! exports provided: PresentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModule", function() { return PresentationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _presentation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./presentation.component */ "./src/app/pages/presentation/presentation.component.ts");








var PresentationModule = /** @class */ (function () {
    function PresentationModule() {
    }
    PresentationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_presentation_component__WEBPACK_IMPORTED_MODULE_7__["PresentationComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_5__["CollapseModule"].forRoot()]
        })
    ], PresentationModule);
    return PresentationModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Argon Dashboard PRO Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-angular
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Documents/Sako Projects/argon-dashboard-pro-angular-v1.2.0/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
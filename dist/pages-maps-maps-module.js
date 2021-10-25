(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google/google.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google/google.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Google maps</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Maps </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Google maps\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card border-0\">\n        <div\n          class=\" map-canvas\"\n          data-lat=\"40.748817\"\n          data-lng=\"-73.985428\"\n          id=\"map-custom\"\n          style=\"height: 600px;\"\n        ></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card border-0\">\n        <div\n          class=\" map-canvas\"\n          data-lat=\"40.748817\"\n          data-lng=\"-73.985428\"\n          id=\"map-default\"\n          style=\"height: 600px;\"\n        ></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector/vector.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector/vector.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Vector maps</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Maps </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Vector maps\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card\">\n        <div class=\" card-body pt-0\">\n          <div class=\" vector-map\">\n            <dx-vector-map\n              id=\"vector-map\"\n              [bounds]=\"[0, 0, 0, 0]\"\n              (onClick)=\"click($event)\"\n            >\n              <dxo-size [height]=\"600\" [width]=\"950\"> </dxo-size>\n              <dxo-tooltip\n                [enabled]=\"true\"\n                [customizeTooltip]=\"customizeTooltip\"\n              >\n                <dxo-font color=\"#fff\"></dxo-font>\n                <dxo-border [visible]=\"false\"></dxo-border>\n              </dxo-tooltip>\n              <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\">\n              </dxi-layer>\n            </dx-vector-map>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/maps/google/google.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/maps/google/google.component.ts ***!
  \*******************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var GoogleComponent = /** @class */ (function () {
    function GoogleComponent() {
    }
    GoogleComponent.prototype.ngOnInit = function () {
        var map = document.getElementById("map-custom");
        var lat = map.getAttribute("data-lat");
        var lng = map.getAttribute("data-lng");
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }]
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }]
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }]
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
                }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!"
        });
        var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    };
    GoogleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-google",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/google/google.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/maps/maps.module.ts ***!
  \*******************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps.routing */ "./src/app/pages/maps/maps.routing.ts");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google/google.component */ "./src/app/pages/maps/google/google.component.ts");
/* harmony import */ var _vector_vector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vector/vector.component */ "./src/app/pages/maps/vector/vector.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");









var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_6__["GoogleComponent"], _vector_vector_component__WEBPACK_IMPORTED_MODULE_7__["VectorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_5__["MapsRoutes"]),
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxVectorMapModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_8__["DxPieChartModule"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/pages/maps/maps.routing.ts":
/*!********************************************!*\
  !*** ./src/app/pages/maps/maps.routing.ts ***!
  \********************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google/google.component */ "./src/app/pages/maps/google/google.component.ts");
/* harmony import */ var _vector_vector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector/vector.component */ "./src/app/pages/maps/vector/vector.component.ts");



var MapsRoutes = [
    {
        path: "",
        children: [
            {
                path: "google",
                component: _google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "vector",
                component: _vector_vector_component__WEBPACK_IMPORTED_MODULE_2__["VectorComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/maps/vector/vector-map.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/maps/vector/vector-map.service.ts ***!
  \*********************************************************/
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

/***/ "./src/app/pages/maps/vector/vector.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/maps/vector/vector.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #vector-map {\n  min-height: 220px;\n  width: 100%;\n  display: block;\n}\n\n::ng-deep #vector-map > svg > rect {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9Eb2N1bWVudHMvU2FrbyBQcm9qZWN0cy9hcmdvbi1kYXNoYm9hcmQtcHJvLWFuZ3VsYXItdjEuMi4wL3NyYy9hcHAvcGFnZXMvbWFwcy92ZWN0b3IvdmVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYXBzL3ZlY3Rvci92ZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgI3ZlY3Rvci1tYXAge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOjpuZy1kZWVwICN2ZWN0b3ItbWFwID4gc3ZnID4gcmVjdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCI6Om5nLWRlZXAgI3ZlY3Rvci1tYXAge1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46Om5nLWRlZXAgI3ZlY3Rvci1tYXAgPiBzdmcgPiByZWN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/maps/vector/vector.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/maps/vector/vector.component.ts ***!
  \*******************************************************/
/*! exports provided: VectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorComponent", function() { return VectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/pages/maps/vector/vector-map.service.ts");




var VectorComponent = /** @class */ (function () {
    function VectorComponent(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorComponent.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorComponent.prototype.customizeLayers = function (elements) {
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
    VectorComponent.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorComponent.prototype.ngOnInit = function () { };
    VectorComponent.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    VectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vector",
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/vector/vector.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vector.component.scss */ "./src/app/pages/maps/vector/vector.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], VectorComponent);
    return VectorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-maps-maps-module.js.map
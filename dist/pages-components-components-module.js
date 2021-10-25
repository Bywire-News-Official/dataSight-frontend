(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-components-module"],{

/***/ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js ***!
  \***********************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
    /** @nocollapse */ AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
    /** @nocollapse */ AlertConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ token: AlertConfig, factory: AlertConfig.ɵfac });
    return AlertConfig;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(AlertConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();

function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "button", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"])("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"])(_r7); var ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])(2); return ctx_r6.close(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(1, "span", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(2, "\u00D7");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(3, "span", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"])(4, "Close");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"])(0, "div", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"])("alert alert-" + ctx_r4.type);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngClass", ctx_r4.classes);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx_r4.dismissible);
} }
var _c0 = ["*"];
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        });
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(function () { return _this.close(); }, parseInt(this.dismissOnTimeout, 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    AlertComponent.prototype.close = function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    /** @nocollapse */ AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"])(AlertConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
    /** @nocollapse */ AlertComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"])({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", dismissOnTimeout: "dismissOnTimeout", isOpen: "isOpen" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"])(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"])("ngIf", ctx.isOpen);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2, changeDetection: 0 });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
    return AlertComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'alert,bs-alert',
                templateUrl: './alert.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dismissible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dismissOnTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();

var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    AlertModule.forRoot = function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
    /** @nocollapse */ AlertModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"])({ type: AlertModule });
    /** @nocollapse */ AlertModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"])({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
    return AlertModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"])(AlertModule, { declarations: [AlertComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [AlertComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"])(AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-bootstrap-alert.js.map


/***/ }),

/***/ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js ***!
  \************************************************************************/
/*! exports provided: ClipboardDirective, ClipboardIfSupportedDirective, ClipboardModule, ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */

var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    ClipboardService.prototype.configure = function (config) {
        this.config = config;
    };
    ClipboardService.prototype.copy = function (content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content: content });
        }
        var copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content: content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content: content });
    };
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    ClipboardService.prototype.isTargetValid = function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * Attempts to copy from an input `targetElm`
     */
    ClipboardService.prototype.copyFromInputElement = function (targetElm, isFocus) {
        if (isFocus === void 0) { isFocus = true; }
        try {
            this.selectTarget(targetElm);
            var re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    ClipboardService.prototype.isCopySuccessInIE11 = function () {
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    ClipboardService.prototype.copyFromContent = function (content, container) {
        if (container === void 0) { container = this.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement || undefined);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        var toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement || undefined);
        }
        return toReturn;
    };
    /**
     * Remove temporary textarea if any exists.
     */
    ClipboardService.prototype.destroy = function (container) {
        if (container === void 0) { container = this.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * Select the target html input element.
     */
    ClipboardService.prototype.selectTarget = function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    ClipboardService.prototype.copyText = function () {
        return this.document.execCommand('copy');
    };
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    ClipboardService.prototype.clearSelection = function (inputElement, window) {
        var _a;
        inputElement && inputElement.focus();
        (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.removeAllRanges();
    };
    /**
     * Creates a fake textarea for copy command.
     */
    ClipboardService.prototype.createTempTextArea = function (doc, window) {
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    ClipboardService.prototype.pushCopyResponse = function (response) {
        this.copySubject.next(response);
    };
    /**
     * @deprecated use pushCopyResponse instead.
     */
    ClipboardService.prototype.pushCopyReponse = function (response) {
        this.pushCopyResponse(response);
    };
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] }
    ]; };
    ClipboardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    ClipboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]))
    ], ClipboardService);
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, null); })();
    return ClipboardService;
}());

var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    ClipboardDirective.prototype.ngOnInit = function () { };
    ClipboardDirective.prototype.ngOnDestroy = function () {
        this.clipboardSrv.destroy(this.container);
    };
    ClipboardDirective.prototype.onClick = function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    ClipboardDirective.prototype.handleResult = function (succeeded, copiedContent, event) {
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    };
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ngxClipboard')
    ], ClipboardDirective.prototype, "targetElm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "container", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbSuccessMsg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnSuccess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event.target'])
    ], ClipboardDirective.prototype, "onClick", null);
ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) { return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService)); };
ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardDirective, selectors: [["", "ngxClipboard", ""]], hostBindings: function ClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { targetElm: ["ngxClipboard", "targetElm"], container: "container", cbContent: "cbContent", cbSuccessMsg: "cbSuccessMsg" }, outputs: { cbOnSuccess: "cbOnSuccess", cbOnError: "cbOnError" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboard]'
            }]
    }], function () { return [{ type: ClipboardService }]; }, { cbOnSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cbOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event.target']]
        }], targetElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngxClipboard']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbSuccessMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
    return ClipboardDirective;
}());

var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    ClipboardIfSupportedDirective.prototype.ngOnInit = function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) { return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardIfSupportedDirective, selectors: [["", "ngxClipboardIfSupported", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboardIfSupported]'
            }]
    }], function () { return [{ type: ClipboardService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
    return ClipboardIfSupportedDirective;
}());

var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: function () { return [ClipboardDirective, ClipboardIfSupportedDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ClipboardDirective, ClipboardIfSupportedDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                exports: [ClipboardDirective, ClipboardIfSupportedDirective]
            }]
    }], function () { return []; }, null); })();
    return ClipboardModule;
}());

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm2015/ngx-window-token.js ***!
  \*********************************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document
    ? { providedIn: 'root', factory: () => window }
    : { providedIn: 'root', factory: () => undefined });

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Buttons</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Buttons\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8 card-wrapper ct-example\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Styles</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-primary\" type=\"button\">Button</button>\n\n          <button class=\" btn btn-icon btn-primary\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" ni ni-bag-17\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> With icon </span>\n          </button>\n\n          <button class=\" btn btn-icon btn-primary\" type=\"button\">\n            <span class=\" btn-inner--icon\"> <i class=\" ni ni-atom\"> </i> </span>\n          </button>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Colors</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-default\" type=\"button\">Default</button>\n\n          <button class=\" btn btn-primary\" type=\"button\">Primary</button>\n\n          <button class=\" btn btn-secondary\" type=\"button\">Secondary</button>\n\n          <button class=\" btn btn-info\" type=\"button\">Info</button>\n\n          <button class=\" btn btn-success\" type=\"button\">Success</button>\n\n          <button class=\" btn btn-danger\" type=\"button\">Danger</button>\n\n          <button class=\" btn btn-warning\" type=\"button\">Warning</button>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Outline</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-outline-default\" type=\"button\">\n            Default\n          </button>\n\n          <button class=\" btn btn-outline-primary\" type=\"button\">\n            Primary\n          </button>\n\n          <button class=\" btn btn-outline-secondary\" type=\"button\">\n            Secondary\n          </button>\n\n          <button class=\" btn btn-outline-info\" type=\"button\">Info</button>\n\n          <button class=\" btn btn-outline-success\" type=\"button\">\n            Success\n          </button>\n\n          <button class=\" btn btn-outline-danger\" type=\"button\">Danger</button>\n\n          <button class=\" btn btn-outline-warning\" type=\"button\">\n            Warning\n          </button>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Sizes</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-primary btn-lg\" type=\"button\">\n            Large button\n          </button>\n\n          <button class=\" btn btn-secondary btn-lg\" type=\"button\">\n            Large button\n          </button>\n\n          <hr />\n\n          <button class=\" btn btn-primary btn-sm\" type=\"button\">\n            Small button\n          </button>\n\n          <button class=\" btn btn-secondary btn-sm\" type=\"button\">\n            Small button\n          </button>\n\n          <hr />\n\n          <button class=\" btn btn-primary btn-lg btn-block\" type=\"button\">\n            Block level button\n          </button>\n\n          <button class=\" btn btn-secondary btn-lg btn-block\" type=\"button\">\n            Block level button\n          </button>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Group</h3></div>\n\n        <div class=\" card-body\">\n          <div aria-label=\"Basic example\" class=\" btn-group\" role=\"group\">\n            <button class=\" btn btn-secondary\" type=\"button\">Left</button>\n\n            <button class=\" btn btn-secondary active\" type=\"button\">\n              Middle\n            </button>\n\n            <button class=\" btn btn-secondary\" type=\"button\">Right</button>\n          </div>\n\n          <hr />\n\n          <div class=\" btn-group\">\n            <button class=\" btn btn-info active\" type=\"button\">1</button>\n\n            <button class=\" btn btn-info\" type=\"button\">2</button>\n\n            <button class=\" btn btn-info\" type=\"button\">3</button>\n\n            <button class=\" btn btn-info\" type=\"button\">4</button>\n          </div>\n\n          <div class=\" btn-group\">\n            <button class=\" btn btn-default\" type=\"button\">5</button>\n\n            <button class=\" btn btn-default\" type=\"button\">6</button>\n\n            <button class=\" btn btn-default\" type=\"button\">7</button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Social</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-facebook btn-icon my-2\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-facebook\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Facebook </span>\n          </button>\n\n          <button class=\" btn btn-twitter btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-twitter\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Twitter </span>\n          </button>\n\n          <button class=\" btn btn-google-plus btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-google-plus-g\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Google + </span>\n          </button>\n\n          <button class=\" btn btn-instagram btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-instagram\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Instagram </span>\n          </button>\n\n          <button class=\" btn btn-pinterest btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-pinterest\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Pinterest </span>\n          </button>\n\n          <button class=\" btn btn-youtube btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-youtube\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Youtube </span>\n          </button>\n\n          <button class=\" btn btn-vimeo btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-vimeo-v\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Vimeo </span>\n          </button>\n\n          <button class=\" btn btn-slack btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-slack\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Slack </span>\n          </button>\n\n          <button class=\" btn btn-dribbble btn-icon\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-dribbble\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Dribbble </span>\n          </button>\n\n          <hr />\n\n          <button class=\" btn btn-facebook btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-facebook\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-twitter btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-twitter\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-google-plus btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-google-plus-g\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-instagram btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-instagram\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-pinterest btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-pinterest\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-youtube btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-youtube\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-vimeo btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-vimeo-v\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-slack btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-slack\"> </i>\n            </span>\n          </button>\n\n          <button class=\" btn btn-dribbble btn-icon-only\" type=\"button\">\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-dribbble\"> </i>\n            </span>\n          </button>\n\n          <hr />\n\n          <button\n            class=\" btn btn-facebook btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-facebook\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-twitter btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-twitter\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-google-plus btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-google-plus-g\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-instagram btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-instagram\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-pinterest btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-pinterest\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-youtube btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-youtube\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-vimeo btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-vimeo-v\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-slack btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-slack\"> </i>\n            </span>\n          </button>\n\n          <button\n            class=\" btn btn-dribbble btn-icon-only rounded-circle\"\n            type=\"button\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fab fa-dribbble\"> </i>\n            </span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/cards/cards.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/cards/cards.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Cards</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">Cards</li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n\n      <div class=\" row\">\n        <div class=\" col-xl-3 col-md-6\">\n          <div class=\" card card-stats\">\n            <div class=\" card-body\">\n              <div class=\" row\">\n                <div class=\" col\">\n                  <h5 class=\" card-title text-uppercase text-muted mb-0\">\n                    Total traffic\n                  </h5>\n\n                  <span class=\" h2 font-weight-bold mb-0\"> 350,897 </span>\n                </div>\n\n                <div class=\" col-auto\">\n                  <div\n                    class=\" icon icon-shape bg-gradient-red text-white rounded-circle shadow\"\n                  >\n                    <i class=\" ni ni-active-40\"> </i>\n                  </div>\n                </div>\n              </div>\n\n              <p class=\" mt-3 mb-0 text-sm\">\n                <span class=\" text-success mr-2\">\n                  <i class=\" fa fa-arrow-up\"> </i> 3.48%\n                </span>\n\n                <span class=\" text-nowrap\"> Since last month </span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\" col-xl-3 col-md-6\">\n          <div class=\" card card-stats\">\n            <div class=\" card-body\">\n              <div class=\" row\">\n                <div class=\" col\">\n                  <h5 class=\" card-title text-uppercase text-muted mb-0\">\n                    New users\n                  </h5>\n\n                  <span class=\" h2 font-weight-bold mb-0\"> 2,356 </span>\n                </div>\n\n                <div class=\" col-auto\">\n                  <div\n                    class=\" icon icon-shape bg-gradient-orange text-white rounded-circle shadow\"\n                  >\n                    <i class=\" ni ni-chart-pie-35\"> </i>\n                  </div>\n                </div>\n              </div>\n\n              <p class=\" mt-3 mb-0 text-sm\">\n                <span class=\" text-success mr-2\">\n                  <i class=\" fa fa-arrow-up\"> </i> 3.48%\n                </span>\n\n                <span class=\" text-nowrap\"> Since last month </span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\" col-xl-3 col-md-6\">\n          <div class=\" card card-stats\">\n            <div class=\" card-body\">\n              <div class=\" row\">\n                <div class=\" col\">\n                  <h5 class=\" card-title text-uppercase text-muted mb-0\">\n                    Sales\n                  </h5>\n\n                  <span class=\" h2 font-weight-bold mb-0\"> 924 </span>\n                </div>\n\n                <div class=\" col-auto\">\n                  <div\n                    class=\" icon icon-shape bg-gradient-green text-white rounded-circle shadow\"\n                  >\n                    <i class=\" ni ni-money-coins\"> </i>\n                  </div>\n                </div>\n              </div>\n\n              <p class=\" mt-3 mb-0 text-sm\">\n                <span class=\" text-success mr-2\">\n                  <i class=\" fa fa-arrow-up\"> </i> 3.48%\n                </span>\n\n                <span class=\" text-nowrap\"> Since last month </span>\n              </p>\n            </div>\n          </div>\n        </div>\n\n        <div class=\" col-xl-3 col-md-6\">\n          <div class=\" card card-stats\">\n            <div class=\" card-body\">\n              <div class=\" row\">\n                <div class=\" col\">\n                  <h5 class=\" card-title text-uppercase text-muted mb-0\">\n                    Performance\n                  </h5>\n\n                  <span class=\" h2 font-weight-bold mb-0\"> 49,65% </span>\n                </div>\n\n                <div class=\" col-auto\">\n                  <div\n                    class=\" icon icon-shape bg-gradient-info text-white rounded-circle shadow\"\n                  >\n                    <i class=\" ni ni-chart-bar-32\"> </i>\n                  </div>\n                </div>\n              </div>\n\n              <p class=\" mt-3 mb-0 text-sm\">\n                <span class=\" text-success mr-2\">\n                  <i class=\" fa fa-arrow-up\"> </i> 3.48%\n                </span>\n\n                <span class=\" text-nowrap\"> Since last month </span>\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row card-wrapper\">\n    <div class=\" col-lg-4\">\n      <div class=\" card\">\n        <img\n          alt=\"Image placeholder\"\n          class=\" card-img-top\"\n          src=\"assets/img/theme/img-1-1000x600.jpg\"\n        />\n\n        <ul class=\" list-group list-group-flush\">\n          <li class=\" list-group-item\">Cras justo odio</li>\n\n          <li class=\" list-group-item\">Dapibus ac facilisis in</li>\n\n          <li class=\" list-group-item\">Vestibulum at eros</li>\n        </ul>\n\n        <div class=\" card-body\">\n          <h3 class=\" card-title mb-3\">Card title</h3>\n\n          <p class=\" card-text mb-4\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis\n            non dolore est fuga nobis ipsum illum eligendi nemo iure repellat,\n            soluta, optio minus ut reiciendis voluptates enim impedit veritatis\n            officiis.\n          </p>\n\n          <a class=\" btn btn-primary\" href=\"javascript:void(0)\">\n            Go somewhere\n          </a>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-body\">\n          <h3 class=\" card-title mb-3\">Card title</h3>\n\n          <p class=\" card-text mb-4\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis\n            non dolore est fuga nobis ipsum illum eligendi nemo iure repellat,\n            soluta, optio minus ut reiciendis voluptates enim impedit veritatis\n            officiis.\n          </p>\n\n          <a class=\" btn btn-primary\" href=\"javascript:void(0)\">\n            Go somewhere\n          </a>\n        </div>\n      </div>\n\n      <div class=\" card card-profile\">\n        <img\n          alt=\"Image placeholder\"\n          class=\" card-img-top\"\n          src=\"assets/img/theme/img-1-1000x600.jpg\"\n        />\n\n        <div class=\" row justify-content-center\">\n          <div class=\" col-lg-3 order-lg-2\">\n            <div class=\" card-profile-image\">\n              <a href=\"javascript:void(0)\">\n                <img\n                  class=\" rounded-circle\"\n                  src=\"assets/img/theme/team-4.jpg\"\n                />\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div\n          class=\" card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\"\n        >\n          <div class=\" d-flex justify-content-between\">\n            <a class=\" btn btn-sm btn-info mr-4\" href=\"javascript:void(0)\">\n              Connect\n            </a>\n\n            <a\n              class=\" btn btn-sm btn-default float-right\"\n              href=\"javascript:void(0)\"\n            >\n              Message\n            </a>\n          </div>\n        </div>\n\n        <div class=\" card-body pt-0\">\n          <div class=\" row\">\n            <div class=\" col\">\n              <div class=\" card-profile-stats d-flex justify-content-center\">\n                <div>\n                  <span class=\" heading\"> 22 </span>\n\n                  <span class=\" description\"> Friends </span>\n                </div>\n\n                <div>\n                  <span class=\" heading\"> 10 </span>\n\n                  <span class=\" description\"> Photos </span>\n                </div>\n\n                <div>\n                  <span class=\" heading\"> 89 </span>\n\n                  <span class=\" description\"> Comments </span>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\" text-center\">\n            <h5 class=\" h3\">\n              Jessica Jones<span class=\" font-weight-light\"> , 27 </span>\n            </h5>\n\n            <div class=\" h5 font-weight-300\">\n              <i class=\" ni location_pin mr-2\"> </i> Bucharest, Romania\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" col-lg-4\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h5 class=\" h3 mb-0\">Card title</h5></div>\n\n        <div class=\" card-body\">\n          <p class=\" card-text mb-4\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis\n            non dolore est fuga nobis ipsum illum eligendi nemo iure repellat,\n            soluta, optio minus ut reiciendis voluptates enim impedit veritatis\n            officiis.\n          </p>\n\n          <a class=\" btn btn-primary\" href=\"javascript:void(0)\">\n            Go somewhere\n          </a>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-body\">\n          <div class=\" row align-items-center\">\n            <div class=\" col-auto\">\n              <a\n                class=\" avatar avatar-xl rounded-circle\"\n                href=\"javascript:void(0)\"\n              >\n                <img\n                  alt=\"Image placeholder\"\n                  src=\"assets/img/theme/team-2.jpg\"\n                />\n              </a>\n            </div>\n\n            <div class=\" col ml--2\">\n              <h4 class=\" mb-0\">\n                <a href=\"javascript:void(0)\"> John Snow </a>\n              </h4>\n\n              <p class=\" text-sm text-muted mb-0\">Working remoteley</p>\n\n              <span class=\" text-success\"> ● </span>\n\n              <small> Active </small>\n            </div>\n\n            <div class=\" col-auto\">\n              <button class=\" btn btn-sm btn-primary\" type=\"button\">Add</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-body\">\n          <a href=\"javascript:void(0)\">\n            <img\n              class=\" rounded-circle img-center img-fluid shadow shadow-lg--hover\"\n              src=\"assets/img/theme/team-1.jpg\"\n              style=\"width: 140px;\"\n            />\n          </a>\n\n          <div class=\" pt-4 text-center\">\n            <h5 class=\" h3 title\">\n              <span class=\" d-block mb-1\"> Ryan Tompson </span>\n\n              <small class=\" h4 font-weight-light text-muted\">\n                Web Developer\n              </small>\n            </h5>\n\n            <div class=\" mt-3\">\n              <a\n                class=\" btn btn-twitter btn-icon-only rounded-circle\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fab fa-twitter\"> </i>\n              </a>\n\n              <a\n                class=\" btn btn-facebook btn-icon-only rounded-circle\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fab fa-facebook\"> </i>\n              </a>\n\n              <a\n                class=\" btn btn-dribbble btn-icon-only rounded-circle\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fab fa-dribbble\"> </i>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <img\n          alt=\"Image placeholder\"\n          class=\" card-img-top\"\n          src=\"assets/img/theme/img-1-1000x900.jpg\"\n        />\n\n        <div class=\" card-body\">\n          <h5 class=\" h2 card-title mb-0\">Get started with Argon</h5>\n\n          <small class=\" text-muted\">\n            by John Snow on Oct 29th at 10:23 AM\n          </small>\n\n          <p class=\" card-text mt-4\">\n            Argon is a great free UI package based on Bootstrap 4 that includes\n            the most important components and features.\n          </p>\n\n          <a class=\" btn btn-link px-0\" href=\"javascript:void(0)\">\n            View article\n          </a>\n        </div>\n      </div>\n\n      <div class=\" card bg-gradient-default\">\n        <div class=\" card-body\">\n          <h3 class=\" card-title text-white\">Testimonial</h3>\n\n          <blockquote class=\" blockquote text-white mb-0\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\n              posuere erat a ante.\n            </p>\n\n            <footer class=\" blockquote-footer text-danger\">\n              Someone famous in <cite title=\"Source Title\"> Source Title </cite>\n            </footer>\n          </blockquote>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" col-lg-4\">\n      <div\n        class=\" card card-pricing bg-gradient-success border-0 text-center mb-4\"\n      >\n        <div class=\" card-header bg-transparent\">\n          <h4 class=\" text-uppercase ls-1 text-white py-3 mb-0\">Bravo pack</h4>\n        </div>\n\n        <div class=\" card-body px-lg-7\">\n          <div class=\" display-2 text-white\">$49</div>\n\n          <span class=\" text-white\"> per application </span>\n\n          <ul class=\" list-unstyled my-4\">\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-terminal\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm text-white\">\n                    Complete documentation\n                  </span>\n                </div>\n              </div>\n            </li>\n\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-pen-fancy\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm text-white\">\n                    Working materials in Sketch\n                  </span>\n                </div>\n              </div>\n            </li>\n\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-hdd\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm text-white\">\n                    2GB cloud storage\n                  </span>\n                </div>\n              </div>\n            </li>\n          </ul>\n\n          <button class=\" btn btn-primary mb-3\" type=\"button\">\n            Start free trial\n          </button>\n        </div>\n\n        <div class=\" card-footer bg-transparent\">\n          <a class=\" text-white\" href=\"javascript:void(0)\"> Request a demo </a>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <div class=\" row align-items-center\">\n            <div class=\" col-8\"><h5 class=\" h3 mb-0\">Card title</h5></div>\n\n            <div class=\" col-4 text-right\">\n              <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n                Action\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\" card-body\">\n          <p class=\" card-text mb-4\">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis\n            non dolore est fuga nobis ipsum illum eligendi nemo iure repellat,\n            soluta, optio minus ut reiciendis voluptates enim impedit veritatis\n            officiis.\n          </p>\n\n          <a class=\" btn btn-primary\" href=\"javascript:void(0)\">\n            Go somewhere\n          </a>\n        </div>\n      </div>\n\n      <div class=\" card bg-dark text-white border-0\">\n        <img\n          alt=\"Card image\"\n          class=\" card-img\"\n          src=\"assets/img/theme/img-1-1000x600.jpg\"\n        />\n\n        <div class=\" card-img-overlay d-flex align-items-center\">\n          <div>\n            <h5 class=\" h2 card-title text-white mb-2\">Card title</h5>\n\n            <p class=\" card-text\">\n              This is a wider card with supporting text below as a natural\n              lead-in to additional content. This content is a little bit\n              longer.\n            </p>\n\n            <p class=\" card-text text-sm font-weight-bold\">\n              Last updated 3 mins ago\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card card-pricing border-0 text-center mb-4\">\n        <div class=\" card-header bg-transparent\">\n          <h4 class=\" text-uppercase ls-1 text-primary py-3 mb-0\">\n            Bravo pack\n          </h4>\n        </div>\n\n        <div class=\" card-body px-lg-7\">\n          <div class=\" display-2\">$49</div>\n\n          <span class=\" text-muted\"> per application </span>\n\n          <ul class=\" list-unstyled my-4\">\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-terminal\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm\"> Complete documentation </span>\n                </div>\n              </div>\n            </li>\n\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-pen-fancy\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm\">\n                    Working materials in Sketch\n                  </span>\n                </div>\n              </div>\n            </li>\n\n            <li>\n              <div class=\" d-flex align-items-center\">\n                <div>\n                  <div\n                    class=\" icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle\"\n                  >\n                    <i class=\" fas fa-hdd\"> </i>\n                  </div>\n                </div>\n\n                <div>\n                  <span class=\" pl-2 text-sm\"> 2GB cloud storage </span>\n                </div>\n              </div>\n            </li>\n          </ul>\n\n          <button class=\" btn btn-primary mb-3\" type=\"button\">\n            Start free trial\n          </button>\n        </div>\n\n        <div class=\" card-footer\">\n          <a class=\" text-muted\" href=\"javascript:void(0)\"> Request a demo </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/components/components.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/components/components.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Components</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Components\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8 card-wrapper\"></div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Grid</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">Grid</li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8 card-wrapper\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Grid system</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example\">\n            <div class=\" col-sm\"><span> One of three columns </span></div>\n\n            <div class=\" col-sm\"><span> One of three columns </span></div>\n\n            <div class=\" col-sm\"><span> One of three columns </span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Equal-width</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> 1 of 2 </span></div>\n\n            <div class=\" col\"><span> 2 of 2 </span></div>\n          </div>\n\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> 1 of 3 </span></div>\n\n            <div class=\" col\"><span> 2 of 3 </span></div>\n\n            <div class=\" col\"><span> 3 of 3 </span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h3 class=\" mb-0\">Setting one column width</h3>\n        </div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> 1 of 3 </span></div>\n\n            <div class=\" col-6\"><span> 2 of 3 (wider) </span></div>\n\n            <div class=\" col\"><span> 3 of 3 </span></div>\n          </div>\n\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> 1 of 3 </span></div>\n\n            <div class=\" col-5\"><span> 2 of 3 (wider) </span></div>\n\n            <div class=\" col\"><span> 3 of 3 </span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h3 class=\" mb-0\">Variable width content</h3>\n        </div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example justify-content-md-center\">\n            <div class=\" col col-lg-2\"><span> 1 of 3 </span></div>\n\n            <div class=\" col-md-auto\">\n              <span> Variable width content </span>\n            </div>\n\n            <div class=\" col col-lg-2\"><span> 3 of 3 </span></div>\n          </div>\n\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> 1 of 3 </span></div>\n\n            <div class=\" col-md-auto\">\n              <span> Variable width content </span>\n            </div>\n\n            <div class=\" col col-lg-2\"><span> 3 of 3 </span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h3 class=\" mb-0\">Equal-width multi-row</h3>\n        </div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example\">\n            <div class=\" col\"><span> col </span></div>\n\n            <div class=\" col\"><span> col </span></div>\n\n            <div class=\" w-100\"></div>\n\n            <div class=\" col\"><span> col </span></div>\n\n            <div class=\" col\"><span> col </span></div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Mix and match</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row row-example\">\n            <div class=\" col-12 col-md-8\"><span> .col-12 .col-md-8 </span></div>\n\n            <div class=\" col-6 col-md-4\"><span> .col-6 .col-md-4 </span></div>\n          </div>\n\n          <div class=\" row row-example\">\n            <div class=\" col-6 col-md-4\"><span> .col-6 .col-md-4 </span></div>\n\n            <div class=\" col-6 col-md-4\"><span> .col-6 .col-md-4 </span></div>\n\n            <div class=\" col-6 col-md-4\"><span> .col-6 .col-md-4 </span></div>\n          </div>\n\n          <div class=\" row row-example\">\n            <div class=\" col-6\"><span> .col-6 </span></div>\n\n            <div class=\" col-6\"><span> .col-6 </span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Icons</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">Icons</li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8\">\n      <div class=\" card\">\n        <div class=\" card-header bg-transparent\">\n          <h3 class=\" mb-0\">Icons</h3>\n        </div>\n\n        <div class=\"card-body\">\n          <div class=\"row icon-examples\">\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'active-40' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'active-40'\"\n                (cbOnSuccess)=\"copy = 'active-40'\"\n              >\n                <div>\n                  <i class=\"ni ni-active-40\"></i> <span>active-40</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'air-baloon' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'air-baloon'\"\n                (cbOnSuccess)=\"copy = 'air-baloon'\"\n              >\n                <div>\n                  <i class=\"ni ni-air-baloon\"></i> <span>air-baloon</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'album-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'album-2'\"\n                (cbOnSuccess)=\"copy = 'album-2'\"\n              >\n                <div><i class=\"ni ni-album-2\"></i> <span>album-2</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'align-center' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'align-center'\"\n                (cbOnSuccess)=\"copy = 'align-center'\"\n              >\n                <div>\n                  <i class=\"ni ni-align-center\"></i> <span>align-center</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'align-left-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'align-left-2'\"\n                (cbOnSuccess)=\"copy = 'align-left-2'\"\n              >\n                <div>\n                  <i class=\"ni ni-align-left-2\"></i> <span>align-left-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'ambulance' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'ambulance'\"\n                (cbOnSuccess)=\"copy = 'ambulance'\"\n              >\n                <div>\n                  <i class=\"ni ni-ambulance\"></i> <span>ambulance</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'app' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'app'\"\n                (cbOnSuccess)=\"copy = 'app'\"\n              >\n                <div><i class=\"ni ni-app\"></i> <span>app</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'archive-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'archive-2'\"\n                (cbOnSuccess)=\"copy = 'archive-2'\"\n              >\n                <div>\n                  <i class=\"ni ni-archive-2\"></i> <span>archive-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'atom' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'atom'\"\n                (cbOnSuccess)=\"copy = 'atom'\"\n              >\n                <div><i class=\"ni ni-atom\"></i> <span>atom</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'badge' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'badge'\"\n                (cbOnSuccess)=\"copy = 'badge'\"\n              >\n                <div><i class=\"ni ni-badge\"></i> <span>badge</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bag-17' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bag-17'\"\n                (cbOnSuccess)=\"copy = 'bag-17'\"\n              >\n                <div><i class=\"ni ni-bag-17\"></i> <span>bag-17</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'basket' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'basket'\"\n                (cbOnSuccess)=\"copy = 'basket'\"\n              >\n                <div><i class=\"ni ni-basket\"></i> <span>basket</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bell-55' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bell-55'\"\n                (cbOnSuccess)=\"copy = 'bell-55'\"\n              >\n                <div><i class=\"ni ni-bell-55\"></i> <span>bell-55</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bold-down' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bold-down'\"\n                (cbOnSuccess)=\"copy = 'bold-down'\"\n              >\n                <div>\n                  <i class=\"ni ni-bold-down\"></i> <span>bold-down</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bold-left' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bold-left'\"\n                (cbOnSuccess)=\"copy = 'bold-left'\"\n              >\n                <div>\n                  <i class=\"ni ni-bold-left\"></i> <span>bold-left</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bold-right' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bold-right'\"\n                (cbOnSuccess)=\"copy = 'bold-right'\"\n              >\n                <div>\n                  <i class=\"ni ni-bold-right\"></i> <span>bold-right</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bold-up' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bold-up'\"\n                (cbOnSuccess)=\"copy = 'bold-up'\"\n              >\n                <div><i class=\"ni ni-bold-up\"></i> <span>bold-up</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'bold' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bold'\"\n                (cbOnSuccess)=\"copy = 'bold'\"\n              >\n                <div><i class=\"ni ni-bold\"></i> <span>bold</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'book-bookmark' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'book-bookmark'\"\n                (cbOnSuccess)=\"copy = 'book-bookmark'\"\n              >\n                <div>\n                  <i class=\"ni ni-book-bookmark\"></i> <span>book-bookmark</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'books' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'books'\"\n                (cbOnSuccess)=\"copy = 'books'\"\n              >\n                <div><i class=\"ni ni-books\"></i> <span>books</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'box-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'box-2'\"\n                (cbOnSuccess)=\"copy = 'box-2'\"\n              >\n                <div><i class=\"ni ni-box-2\"></i> <span>box-2</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'briefcase-24' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'briefcase-24'\"\n                (cbOnSuccess)=\"copy = 'briefcase-24'\"\n              >\n                <div>\n                  <i class=\"ni ni-briefcase-24\"></i> <span>briefcase-24</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'building' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'building'\"\n                (cbOnSuccess)=\"copy = 'building'\"\n              >\n                <div><i class=\"ni ni-building\"></i> <span>building</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bulb-61' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bulb-61'\"\n                (cbOnSuccess)=\"copy = 'bulb-61'\"\n              >\n                <div><i class=\"ni ni-bulb-61\"></i> <span>bulb-61</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bullet-list-67' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bullet-list-67'\"\n                (cbOnSuccess)=\"copy = 'bullet-list-67'\"\n              >\n                <div>\n                  <i class=\"ni ni-bullet-list-67\"></i>\n                  <span>bullet-list-67</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'bus-front-12' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'bus-front-12'\"\n                (cbOnSuccess)=\"copy = 'bus-front-12'\"\n              >\n                <div>\n                  <i class=\"ni ni-bus-front-12\"></i> <span>bus-front-12</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'button-pause' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'button-pause'\"\n                (cbOnSuccess)=\"copy = 'button-pause'\"\n              >\n                <div>\n                  <i class=\"ni ni-button-pause\"></i> <span>button-pause</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'button-play' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'button-play'\"\n                (cbOnSuccess)=\"copy = 'button-play'\"\n              >\n                <div>\n                  <i class=\"ni ni-button-play\"></i> <span>button-play</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'button-power' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'button-power'\"\n                (cbOnSuccess)=\"copy = 'button-power'\"\n              >\n                <div>\n                  <i class=\"ni ni-button-power\"></i> <span>button-power</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'calendar-grid-58' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'calendar-grid-58'\"\n                (cbOnSuccess)=\"copy = 'calendar-grid-58'\"\n              >\n                <div>\n                  <i class=\"ni ni-calendar-grid-58\"></i>\n                  <span>calendar-grid-58</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'camera-compact' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'camera-compact'\"\n                (cbOnSuccess)=\"copy = 'camera-compact'\"\n              >\n                <div>\n                  <i class=\"ni ni-camera-compact\"></i>\n                  <span>camera-compact</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'caps-small' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'caps-small'\"\n                (cbOnSuccess)=\"copy = 'caps-small'\"\n              >\n                <div>\n                  <i class=\"ni ni-caps-small\"></i> <span>caps-small</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'cart' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'cart'\"\n                (cbOnSuccess)=\"copy = 'cart'\"\n              >\n                <div><i class=\"ni ni-cart\"></i> <span>cart</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'chart-bar-32' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'chart-bar-32'\"\n                (cbOnSuccess)=\"copy = 'chart-bar-32'\"\n              >\n                <div>\n                  <i class=\"ni ni-chart-bar-32\"></i> <span>chart-bar-32</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'chart-pie-35' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'chart-pie-35'\"\n                (cbOnSuccess)=\"copy = 'chart-pie-35'\"\n              >\n                <div>\n                  <i class=\"ni ni-chart-pie-35\"></i> <span>chart-pie-35</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'chat-round' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'chat-round'\"\n                (cbOnSuccess)=\"copy = 'chat-round'\"\n              >\n                <div>\n                  <i class=\"ni ni-chat-round\"></i> <span>chat-round</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'check-bold' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'check-bold'\"\n                (cbOnSuccess)=\"copy = 'check-bold'\"\n              >\n                <div>\n                  <i class=\"ni ni-check-bold\"></i> <span>check-bold</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'circle-08' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'circle-08'\"\n                (cbOnSuccess)=\"copy = 'circle-08'\"\n              >\n                <div>\n                  <i class=\"ni ni-circle-08\"></i> <span>circle-08</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'cloud-download-95' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'cloud-download-95'\"\n                (cbOnSuccess)=\"copy = 'cloud-download-95'\"\n              >\n                <div>\n                  <i class=\"ni ni-cloud-download-95\"></i>\n                  <span>cloud-download-95</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'cloud-upload-96' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'cloud-upload-96'\"\n                (cbOnSuccess)=\"copy = 'cloud-upload-96'\"\n              >\n                <div>\n                  <i class=\"ni ni-cloud-upload-96\"></i>\n                  <span>cloud-upload-96</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'compass-04' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'compass-04'\"\n                (cbOnSuccess)=\"copy = 'compass-04'\"\n              >\n                <div>\n                  <i class=\"ni ni-compass-04\"></i> <span>compass-04</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'controller' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'controller'\"\n                (cbOnSuccess)=\"copy = 'controller'\"\n              >\n                <div>\n                  <i class=\"ni ni-controller\"></i> <span>controller</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'credit-card' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'credit-card'\"\n                (cbOnSuccess)=\"copy = 'credit-card'\"\n              >\n                <div>\n                  <i class=\"ni ni-credit-card\"></i> <span>credit-card</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'curved-next' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'curved-next'\"\n                (cbOnSuccess)=\"copy = 'curved-next'\"\n              >\n                <div>\n                  <i class=\"ni ni-curved-next\"></i> <span>curved-next</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'delivery-fast' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'delivery-fast'\"\n                (cbOnSuccess)=\"copy = 'delivery-fast'\"\n              >\n                <div>\n                  <i class=\"ni ni-delivery-fast\"></i> <span>delivery-fast</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'diamond' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'diamond'\"\n                (cbOnSuccess)=\"copy = 'diamond'\"\n              >\n                <div><i class=\"ni ni-diamond\"></i> <span>diamond</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'email-83' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'email-83'\"\n                (cbOnSuccess)=\"copy = 'email-83'\"\n              >\n                <div><i class=\"ni ni-email-83\"></i> <span>email-83</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'fat-add' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'fat-add'\"\n                (cbOnSuccess)=\"copy = 'fat-add'\"\n              >\n                <div><i class=\"ni ni-fat-add\"></i> <span>fat-add</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'fat-delete' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'fat-delete'\"\n                (cbOnSuccess)=\"copy = 'fat-delete'\"\n              >\n                <div>\n                  <i class=\"ni ni-fat-delete\"></i> <span>fat-delete</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'fat-remove' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'fat-remove'\"\n                (cbOnSuccess)=\"copy = 'fat-remove'\"\n              >\n                <div>\n                  <i class=\"ni ni-fat-remove\"></i> <span>fat-remove</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'favourite-28' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'favourite-28'\"\n                (cbOnSuccess)=\"copy = 'favourite-28'\"\n              >\n                <div>\n                  <i class=\"ni ni-favourite-28\"></i> <span>favourite-28</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'folder-17' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'folder-17'\"\n                (cbOnSuccess)=\"copy = 'folder-17'\"\n              >\n                <div>\n                  <i class=\"ni ni-folder-17\"></i> <span>folder-17</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'glasses-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'glasses-2'\"\n                (cbOnSuccess)=\"copy = 'glasses-2'\"\n              >\n                <div>\n                  <i class=\"ni ni-glasses-2\"></i> <span>glasses-2</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'hat-3' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'hat-3'\"\n                (cbOnSuccess)=\"copy = 'hat-3'\"\n              >\n                <div><i class=\"ni ni-hat-3\"></i> <span>hat-3</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'headphones' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'headphones'\"\n                (cbOnSuccess)=\"copy = 'headphones'\"\n              >\n                <div>\n                  <i class=\"ni ni-headphones\"></i> <span>headphones</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'html5' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'html5'\"\n                (cbOnSuccess)=\"copy = 'html5'\"\n              >\n                <div><i class=\"ni ni-html5\"></i> <span>html5</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'istanbul' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'istanbul'\"\n                (cbOnSuccess)=\"copy = 'istanbul'\"\n              >\n                <div><i class=\"ni ni-istanbul\"></i> <span>istanbul</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'circle-08' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'circle-08'\"\n                (cbOnSuccess)=\"copy = 'circle-08'\"\n              >\n                <div>\n                  <i class=\"ni ni-circle-08\"></i> <span>circle-08</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'key-25' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'key-25'\"\n                (cbOnSuccess)=\"copy = 'key-25'\"\n              >\n                <div><i class=\"ni ni-key-25\"></i> <span>key-25</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'laptop' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'laptop'\"\n                (cbOnSuccess)=\"copy = 'laptop'\"\n              >\n                <div><i class=\"ni ni-laptop\"></i> <span>laptop</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'like-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'like-2'\"\n                (cbOnSuccess)=\"copy = 'like-2'\"\n              >\n                <div><i class=\"ni ni-like-2\"></i> <span>like-2</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'lock-circle-open' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'lock-circle-open'\"\n                (cbOnSuccess)=\"copy = 'lock-circle-open'\"\n              >\n                <div>\n                  <i class=\"ni ni-lock-circle-open\"></i>\n                  <span>lock-circle-open</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'map-big' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'map-big'\"\n                (cbOnSuccess)=\"copy = 'map-big'\"\n              >\n                <div><i class=\"ni ni-map-big\"></i> <span>map-big</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'mobile-button' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'mobile-button'\"\n                (cbOnSuccess)=\"copy = 'mobile-button'\"\n              >\n                <div>\n                  <i class=\"ni ni-mobile-button\"></i> <span>mobile-button</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'money-coins' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'money-coins'\"\n                (cbOnSuccess)=\"copy = 'money-coins'\"\n              >\n                <div>\n                  <i class=\"ni ni-money-coins\"></i> <span>money-coins</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'note-03' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'note-03'\"\n                (cbOnSuccess)=\"copy = 'note-03'\"\n              >\n                <div><i class=\"ni ni-note-03\"></i> <span>note-03</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'notification-70' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'notification-70'\"\n                (cbOnSuccess)=\"copy = 'notification-70'\"\n              >\n                <div>\n                  <i class=\"ni ni-notification-70\"></i>\n                  <span>notification-70</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'palette' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'palette'\"\n                (cbOnSuccess)=\"copy = 'palette'\"\n              >\n                <div><i class=\"ni ni-palette\"></i> <span>palette</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'paper-diploma' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'paper-diploma'\"\n                (cbOnSuccess)=\"copy = 'paper-diploma'\"\n              >\n                <div>\n                  <i class=\"ni ni-paper-diploma\"></i> <span>paper-diploma</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'pin-3' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'pin-3'\"\n                (cbOnSuccess)=\"copy = 'pin-3'\"\n              >\n                <div><i class=\"ni ni-pin-3\"></i> <span>pin-3</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'planet' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'planet'\"\n                (cbOnSuccess)=\"copy = 'planet'\"\n              >\n                <div><i class=\"ni ni-planet\"></i> <span>planet</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'ruler-pencil' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'ruler-pencil'\"\n                (cbOnSuccess)=\"copy = 'ruler-pencil'\"\n              >\n                <div>\n                  <i class=\"ni ni-ruler-pencil\"></i> <span>ruler-pencil</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'satisfied' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'satisfied'\"\n                (cbOnSuccess)=\"copy = 'satisfied'\"\n              >\n                <div>\n                  <i class=\"ni ni-satisfied\"></i> <span>satisfied</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'scissors' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'scissors'\"\n                (cbOnSuccess)=\"copy = 'scissors'\"\n              >\n                <div><i class=\"ni ni-scissors\"></i> <span>scissors</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'send' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'send'\"\n                (cbOnSuccess)=\"copy = 'send'\"\n              >\n                <div><i class=\"ni ni-send\"></i> <span>send</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'settings-gear-65' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'settings-gear-65'\"\n                (cbOnSuccess)=\"copy = 'settings-gear-65'\"\n              >\n                <div>\n                  <i class=\"ni ni-settings-gear-65\"></i>\n                  <span>settings-gear-65</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'settings' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'settings'\"\n                (cbOnSuccess)=\"copy = 'settings'\"\n              >\n                <div><i class=\"ni ni-settings\"></i> <span>settings</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'single-02' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'single-02'\"\n                (cbOnSuccess)=\"copy = 'single-02'\"\n              >\n                <div>\n                  <i class=\"ni ni-single-02\"></i> <span>single-02</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'single-copy-04' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'single-copy-04'\"\n                (cbOnSuccess)=\"copy = 'single-copy-04'\"\n              >\n                <div>\n                  <i class=\"ni ni-single-copy-04\"></i>\n                  <span>single-copy-04</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'sound-wave' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'sound-wave'\"\n                (cbOnSuccess)=\"copy = 'sound-wave'\"\n              >\n                <div>\n                  <i class=\"ni ni-sound-wave\"></i> <span>sound-wave</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'spaceship' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'spaceship'\"\n                (cbOnSuccess)=\"copy = 'spaceship'\"\n              >\n                <div>\n                  <i class=\"ni ni-spaceship\"></i> <span>spaceship</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'square-pin' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'square-pin'\"\n                (cbOnSuccess)=\"copy = 'square-pin'\"\n              >\n                <div>\n                  <i class=\"ni ni-square-pin\"></i> <span>square-pin</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'support-16' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'support-16'\"\n                (cbOnSuccess)=\"copy = 'support-16'\"\n              >\n                <div>\n                  <i class=\"ni ni-support-16\"></i> <span>support-16</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'tablet-button' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'tablet-button'\"\n                (cbOnSuccess)=\"copy = 'tablet-button'\"\n              >\n                <div>\n                  <i class=\"ni ni-tablet-button\"></i> <span>tablet-button</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'tag' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'tag'\"\n                (cbOnSuccess)=\"copy = 'tag'\"\n              >\n                <div><i class=\"ni ni-tag\"></i> <span>tag</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'tie-bow' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'tie-bow'\"\n                (cbOnSuccess)=\"copy = 'tie-bow'\"\n              >\n                <div><i class=\"ni ni-tie-bow\"></i> <span>tie-bow</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'time-alarm' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'time-alarm'\"\n                (cbOnSuccess)=\"copy = 'time-alarm'\"\n              >\n                <div>\n                  <i class=\"ni ni-time-alarm\"></i> <span>time-alarm</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'trophy' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'trophy'\"\n                (cbOnSuccess)=\"copy = 'trophy'\"\n              >\n                <div><i class=\"ni ni-trophy\"></i> <span>trophy</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'tv-2' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'tv-2'\"\n                (cbOnSuccess)=\"copy = 'tv-2'\"\n              >\n                <div><i class=\"ni ni-tv-2\"></i> <span>tv-2</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'umbrella-13' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'umbrella-13'\"\n                (cbOnSuccess)=\"copy = 'umbrella-13'\"\n              >\n                <div>\n                  <i class=\"ni ni-umbrella-13\"></i> <span>umbrella-13</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'user-run' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'user-run'\"\n                (cbOnSuccess)=\"copy = 'user-run'\"\n              >\n                <div><i class=\"ni ni-user-run\"></i> <span>user-run</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'vector' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'vector'\"\n                (cbOnSuccess)=\"copy = 'vector'\"\n              >\n                <div><i class=\"ni ni-vector\"></i> <span>vector</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'watch-time' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'watch-time'\"\n                (cbOnSuccess)=\"copy = 'watch-time'\"\n              >\n                <div>\n                  <i class=\"ni ni-watch-time\"></i> <span>watch-time</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'world' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'world'\"\n                (cbOnSuccess)=\"copy = 'world'\"\n              >\n                <div><i class=\"ni ni-world\"></i> <span>world</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'zoom-split-in' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'zoom-split-in'\"\n                (cbOnSuccess)=\"copy = 'zoom-split-in'\"\n              >\n                <div>\n                  <i class=\"ni ni-zoom-split-in\"></i> <span>zoom-split-in</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'collection' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'collection'\"\n                (cbOnSuccess)=\"copy = 'collection'\"\n              >\n                <div>\n                  <i class=\"ni ni-collection\"></i> <span>collection</span>\n                </div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'image' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'image'\"\n                (cbOnSuccess)=\"copy = 'image'\"\n              >\n                <div><i class=\"ni ni-image\"></i> <span>image</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{ copy === 'shop' ? 'Copied' : 'Copy to clipboard' }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'shop'\"\n                (cbOnSuccess)=\"copy = 'shop'\"\n              >\n                <div><i class=\"ni ni-shop\"></i> <span>shop</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'ungroup' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'ungroup'\"\n                (cbOnSuccess)=\"copy = 'ungroup'\"\n              >\n                <div><i class=\"ni ni-ungroup\"></i> <span>ungroup</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'world-2' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'world-2'\"\n                (cbOnSuccess)=\"copy = 'world-2'\"\n              >\n                <div><i class=\"ni ni-world-2\"></i> <span>world-2</span></div>\n              </button>\n            </div>\n            <div class=\"col-lg-3 col-md-6\">\n              <button\n                type=\"button\"\n                placement=\"top-center\"\n                triggers=\"hover focus click\"\n                tooltip=\"{{\n                  copy === 'ui-04' ? 'Copied' : 'Copy to clipboard'\n                }}\"\n                class=\"btn-icon-clipboard\"\n                ngxClipboard\n                [cbContent]=\"'ui-04'\"\n                (cbOnSuccess)=\"copy = 'ui-04'\"\n              >\n                <div><i class=\"ni ni-ui-04\"></i> <span>ui-04</span></div>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Notifications</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Notifications\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8 card-wrapper\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Alerts</h3></div>\n\n        <div class=\" card-body\">\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'default'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Default! </strong> This is a default alert—check it out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'primary'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Primary! </strong> This is a primary alert—check it out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'secondary'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Secondary! </strong> This is a secondary alert—check it\n              out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'info'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Info! </strong> This is a info alert—check it out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'success'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Success! </strong> This is a success alert—check it out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n\n            [type]=\"'danger'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Danger! </strong> This is a danger alert—check it out!\n            </span>\n          </alert>\n\n          <alert\n            class=\"alert-dismissible\"\n            [dismissible]=\"dismissible\"\n            [type]=\"'warning'\"\n          >\n            <span class=\" alert-icon\"> <i class=\" ni ni-like-2\"> </i> </span>\n\n            <span class=\" alert-text\">\n              <strong> Warning! </strong> This is a warning alert—check it out!\n            </span>\n          </alert>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Modals</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-md-4\">\n              <button\n                class=\" btn btn-block btn-primary mb-3\"\n                data-target=\"#modal-default\"\n                data-toggle=\"modal\"\n                type=\"button\"\n                (click)=\"openDefaultModal(modalDefault)\"\n              >\n                Default\n              </button>\n              <ng-template #modalDefault>\n                <div class=\" modal-header\">\n                  <h6 class=\" modal-title\" id=\"modal-title-default\">\n                    Type your modal title\n                  </h6>\n\n                  <button\n                    aria-label=\"Close\"\n                    class=\" close\"\n                    data-dismiss=\"modal\"\n                    type=\"button\"\n                    (click)=\"defaultModal.hide()\"\n                  >\n                    <span aria-hidden=\"true\"> × </span>\n                  </button>\n                </div>\n\n                <div class=\" modal-body\">\n                  <p>\n                    Far far away, behind the word mountains, far from the\n                    countries Vokalia and Consonantia, there live the blind\n                    texts. Separated they live in Bookmarksgrove right at the\n                    coast of the Semantics, a large language ocean.\n                  </p>\n\n                  <p>\n                    A small river named Duden flows by their place and supplies\n                    it with the necessary regelialia. It is a paradisematic\n                    country, in which roasted parts of sentences fly into your\n                    mouth.\n                  </p>\n                </div>\n\n                <div class=\" modal-footer\">\n                  <button class=\" btn btn-primary\" type=\"button\">\n                    Save changes\n                  </button>\n\n                  <button\n                    class=\" btn btn-link ml-auto\"\n                    data-dismiss=\"modal\"\n                    type=\"button\"\n                    (click)=\"defaultModal.hide()\"\n                  >\n                    Close\n                  </button>\n                </div>\n              </ng-template>\n            </div>\n\n            <div class=\" col-md-4\">\n              <button\n                class=\" btn btn-block btn-warning mb-3\"\n                data-target=\"#modal-notification\"\n                data-toggle=\"modal\"\n                type=\"button\"\n                (click)=\"openNotificationModal(modalNotification)\"\n              >\n                Notification\n              </button>\n              <ng-template #modalNotification>\n                <div class=\" modal-header\">\n                  <h6 class=\" modal-title\" id=\"modal-title-notification\">\n                    Your attention is required\n                  </h6>\n\n                  <button\n                    aria-label=\"Close\"\n                    class=\" close\"\n                    data-dismiss=\"modal\"\n                    type=\"button\"\n                    (click)=\"notificationModal.hide()\"\n                  >\n                    <span aria-hidden=\"true\"> × </span>\n                  </button>\n                </div>\n\n                <div class=\" modal-body\">\n                  <div class=\" py-3 text-center\">\n                    <i class=\" ni ni-bell-55 ni-3x\"> </i>\n\n                    <h4 class=\" heading mt-4\">You should read this!</h4>\n\n                    <p>\n                      A small river named Duden flows by their place and\n                      supplies it with the necessary regelialia.\n                    </p>\n                  </div>\n                </div>\n\n                <div class=\" modal-footer\">\n                  <button class=\" btn btn-white\" type=\"button\">\n                    Ok, Got it\n                  </button>\n\n                  <button\n                    class=\" btn btn-link text-white ml-auto\"\n                    data-dismiss=\"modal\"\n                    type=\"button\"\n                    (click)=\"notificationModal.hide()\"\n                  >\n                    Close\n                  </button>\n                </div>\n              </ng-template>\n            </div>\n\n            <div class=\" col-md-4\">\n              <button\n                class=\" btn btn-block btn-default\"\n                data-target=\"#modal-form\"\n                data-toggle=\"modal\"\n                type=\"button\"\n                (click)=\"openFormModal(modalForm)\"\n              >\n                Form\n              </button>\n              <ng-template #modalForm>\n                <div class=\" modal-body p-0\">\n                  <div class=\" card bg-secondary border-0 mb-0\">\n                    <div class=\" card-header bg-transparent pb-5\">\n                      <div class=\" text-muted text-center mt-2 mb-3\">\n                        <small> Sign in with </small>\n                      </div>\n\n                      <div class=\" btn-wrapper text-center\">\n                        <a\n                          class=\" btn btn-neutral btn-icon\"\n                          href=\"javascript:void(0)\"\n                        >\n                          <span class=\" btn-inner--icon\">\n                            <img src=\"assets/img/icons/common/github.svg\" />\n                          </span>\n\n                          <span class=\" btn-inner--text\"> Github </span>\n                        </a>\n\n                        <a\n                          class=\" btn btn-neutral btn-icon\"\n                          href=\"javascript:void(0)\"\n                        >\n                          <span class=\" btn-inner--icon\">\n                            <img src=\"assets/img/icons/common/google.svg\" />\n                          </span>\n\n                          <span class=\" btn-inner--text\"> Google </span>\n                        </a>\n                      </div>\n                    </div>\n\n                    <div class=\" card-body px-lg-5 py-lg-5\">\n                      <div class=\" text-center text-muted mb-4\">\n                        <small> Or sign in with credentials </small>\n                      </div>\n\n                      <form role=\"form\">\n                        <div\n                          class=\"form-group mb-3\"\n                          [ngClass]=\"{ focused: focus === true }\"\n                        >\n                          <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\"\n                                ><i class=\"ni ni-email-83\"></i\n                              ></span>\n                            </div>\n                            <input\n                              class=\"form-control\"\n                              placeholder=\"Email\"\n                              type=\"email\"\n                              (focus)=\"focus = true\"\n                              (blur)=\"focus = false\"\n                            />\n                          </div>\n                        </div>\n                        <div\n                          class=\"form-group\"\n                          [ngClass]=\"{ focused: focus1 === true }\"\n                        >\n                          <div class=\"input-group input-group-alternative\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\"\n                                ><i class=\"ni ni-lock-circle-open\"></i\n                              ></span>\n                            </div>\n                            <input\n                              class=\"form-control\"\n                              placeholder=\"Password\"\n                              type=\"password\"\n                              (focus)=\"focus1 = true\"\n                              (blur)=\"focus1 = false\"\n                            />\n                          </div>\n                        </div>\n                        <div\n                          class=\"custom-control custom-control-alternative custom-checkbox\"\n                        >\n                          <input\n                            class=\"custom-control-input\"\n                            id=\" customCheckLogin\"\n                            type=\"checkbox\"\n                          />\n                          <label\n                            class=\"custom-control-label\"\n                            for=\" customCheckLogin\"\n                          >\n                            <span>Remember me</span>\n                          </label>\n                        </div>\n                        <div class=\"text-center\">\n                          <button type=\"button\" class=\"btn btn-primary my-4\">\n                            Sign in\n                          </button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Notifications</h3></div>\n\n        <div class=\" card-body\">\n          <button\n            class=\" btn btn-default\"\n            (click)=\"showNotification('default')\"\n          >\n            Default\n          </button>\n\n          <button class=\" btn btn-info\" (click)=\"showNotification('info')\">\n            Info\n          </button>\n\n          <button\n            class=\" btn btn-success\"\n            (click)=\"showNotification('success')\"\n          >\n            Success\n          </button>\n\n          <button\n            class=\" btn btn-warning\"\n            (click)=\"showNotification('warning')\"\n          >\n            Warning\n          </button>\n\n          <button class=\" btn btn-danger\" (click)=\"showNotification('danger')\">\n            Danger\n          </button>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Sweet alerts</h3></div>\n\n        <div class=\" card-body\">\n          <button class=\" btn btn-primary\" (click)=\"basicSwal()\">\n            Basic alert\n          </button>\n\n          <button class=\" btn btn-info\" (click)=\"infoSwal()\">Info alert</button>\n\n          <button class=\" btn btn-success\" (click)=\"successSwal()\">\n            Success alert\n          </button>\n\n          <button class=\" btn btn-warning\" (click)=\"warningSwal()\">\n            Warning alert\n          </button>\n\n          <button class=\" btn btn-default\" (click)=\"questionSwal()\">\n            Question\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Typography</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Components </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Typography\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row justify-content-center\">\n    <div class=\" col-lg-8 card-wrapper\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Headings</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 1\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h1 class=\" mb-0\">Argon Dashboard PRO</h1>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 2\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h2 class=\" mb-0\">Argon Dashboard PRO</h2>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 3\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h3 class=\" mb-0\">Argon Dashboard PRO</h3>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 4\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h4 class=\" mb-0\">Argon Dashboard PRO</h4>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 5\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h5 class=\" mb-0\">Argon Dashboard PRO</h5>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading 6\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h6 class=\" mb-0\">Argon Dashboard PRO</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Display titles</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Display 1\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h1 class=\" display-1 mb-0\">Argon Dashboard PRO</h1>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Display 2\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h2 class=\" display-2 mb-0\">Argon Dashboard PRO</h2>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Display 3\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h3 class=\" display-3 mb-0\">Argon Dashboard PRO</h3>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Display 4\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h4 class=\" display-4 mb-0\">Argon Dashboard PRO</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h3 class=\" mb-0\">Specialized titles</h3>\n        </div>\n\n        <div class=\" card-body\">\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h3 class=\" heading mb-0\">Argon Dashboard PRO</h3>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading title\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <h3 class=\" heading-title text-warning mb-0\">\n                Argon Dashboard PRO\n              </h3>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Heading seaction\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <div>\n                <h2 class=\" display-3\">Header with small subtitle</h2>\n\n                <p class=\" lead text-muted\">\n                  According to the National Oceanic and Atmospheric\n                  Administration, Ted, Scambos, NSIDClead scentist, puts the\n                  potentially record maximum.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\" card\">\n        <div class=\" card-header\"><h3 class=\" mb-0\">Paragraphs</h3></div>\n\n        <div class=\" card-body\">\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Paragraph\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p>\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers. I understand\n                culture. I am the nucleus. I think that’s a responsibility that\n                I have, to push possibilities, to show people, this is the level\n                that things could be at.\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Lead text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" lead\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers. I understand\n                culture. I am the nucleus. I think that’s a responsibility that\n                I have, to push possibilities, to show people, this is the level\n                that things could be at.\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Quote\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <blockquote class=\" blockquote\">\n                <p class=\" mb-0\">\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n                  Integer posuere erat a ante.\n                </p>\n\n                <footer class=\" blockquote-footer\">\n                  Someone famous in\n                  <cite title=\"Source Title\"> Source Title </cite>\n                </footer>\n              </blockquote>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Muted text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-muted mb-0\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Primary text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-primary\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Info text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-info mb-0\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Success text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-success mb-0\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Warning text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-warning mb-0\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n\n          <div class=\" row py-3 align-items-center\">\n            <div class=\" col-sm-3\">\n              <small class=\" text-uppercase text-muted font-weight-bold\">\n                Danger text\n              </small>\n            </div>\n\n            <div class=\" col-sm-9\">\n              <p class=\" text-danger mb-0\">\n                I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers...\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/components/buttons/buttons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/buttons/buttons.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () { };
    ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-buttons",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/cards/cards.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/cards/cards.component.ts ***!
  \***********************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () { };
    CardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cards",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/cards/cards.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components.routing */ "./src/app/pages/components/components.routing.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/pages/components/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/pages/components/notifications/notifications.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/pages/components/cards/cards.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components.component */ "./src/app/pages/components/components/components.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/components/typography/typography.component.ts");
















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_9__["ButtonsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_10__["GridComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_11__["IconsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_13__["CardsComponent"],
                _components_components_component__WEBPACK_IMPORTED_MODULE_14__["ComponentsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_15__["TypographyComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_components_routing__WEBPACK_IMPORTED_MODULE_8__["ComponentsRoutes"]),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/pages/components/components.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/components.routing.ts ***!
  \********************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/pages/components/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/pages/components/notifications/notifications.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/pages/components/cards/cards.component.ts");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.component */ "./src/app/pages/components/components/components.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/components/typography/typography.component.ts");








var ComponentsRoutes = [
    {
        path: "",
        children: [
            {
                path: "buttons",
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "grid",
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "icons",
                component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "notifications",
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "cards",
                component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "components",
                component: _components_components_component__WEBPACK_IMPORTED_MODULE_6__["ComponentsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "typography",
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/components/components/components.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/components/components.component.ts ***!
  \*********************************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent() {
    }
    ComponentsComponent.prototype.ngOnInit = function () { };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-components",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/components/components.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/grid/grid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/grid/grid.component.ts ***!
  \*********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-grid",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/icons/icons.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/icons/icons.component.ts ***!
  \***********************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () { };
    IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-icons",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/notifications/notifications.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/notifications/notifications.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(modalService, toastr) {
        this.modalService = modalService;
        this.toastr = toastr;
        this.dismissible = true;
        this.default = {
            keyboard: true,
            class: "modal-dialog-centered"
        };
        this.notification = {
            keyboard: true,
            class: "modal-dialog-centered modal-danger"
        };
        this.form = {
            keyboard: true,
            class: "modal-dialog-centered modal-sm"
        };
    }
    NotificationsComponent.prototype.showNotification = function (type) {
        var color = Math.floor(Math.random() * 5 + 1);
        if (type === "default") {
            this.toastr.show('<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>', "", {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                tapToDismiss: false,
                titleClass: "alert-title",
                positionClass: "toast-top-center",
                toastClass: "ngx-toastr alert alert-dismissible alert-default alert-notify"
            });
        }
        if (type === "danger") {
            this.toastr.show('<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>', "", {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                tapToDismiss: false,
                titleClass: "alert-title",
                positionClass: "toast-top-center",
                toastClass: "ngx-toastr alert alert-dismissible alert-danger alert-notify"
            });
        }
        if (type === "success") {
            this.toastr.show('<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>', "", {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                tapToDismiss: false,
                titleClass: "alert-title",
                positionClass: "toast-top-center",
                toastClass: "ngx-toastr alert alert-dismissible alert-success alert-notify"
            });
        }
        if (type === "warning") {
            this.toastr.show('<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>', "", {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                tapToDismiss: false,
                titleClass: "alert-title",
                positionClass: "toast-top-center",
                toastClass: "ngx-toastr alert alert-dismissible alert-warning alert-notify"
            });
        }
        if (type === "info") {
            this.toastr.show('<span class="alert-icon ni ni-bell-55" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">Ngx Toastr</span> <span data-notify="message">Turning standard Bootstrap alerts into awesome notifications</span></div>', "", {
                timeOut: 8000,
                closeButton: true,
                enableHtml: true,
                tapToDismiss: false,
                titleClass: "alert-title",
                positionClass: "toast-top-center",
                toastClass: "ngx-toastr alert alert-dismissible alert-info alert-notify"
            });
        }
    };
    NotificationsComponent.prototype.openDefaultModal = function (modalDefault) {
        this.defaultModal = this.modalService.show(modalDefault, this.default);
    };
    NotificationsComponent.prototype.openNotificationModal = function (modalNotification) {
        this.notificationModal = this.modalService.show(modalNotification, this.notification);
    };
    NotificationsComponent.prototype.openFormModal = function (modalForm) {
        this.formModal = this.modalService.show(modalForm, this.form);
    };
    NotificationsComponent.prototype.ngOnInit = function () { };
    NotificationsComponent.prototype.basicSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Here's a message!",
            text: "A few words about this sweet alert ...",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-primary"
            }
        });
    };
    NotificationsComponent.prototype.infoSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Info",
            text: "A few words about this sweet alert ...",
            icon: "info",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-info"
            }
        });
    };
    NotificationsComponent.prototype.successSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Success",
            text: "A few words about this sweet alert ...",
            icon: "success",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-success"
            }
        });
    };
    NotificationsComponent.prototype.warningSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Warning",
            text: "A few words about this sweet alert ...",
            icon: "warning",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-warning"
            }
        });
    };
    NotificationsComponent.prototype.questionSwal = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "A few words about this sweet alert ...",
            icon: "question",
            buttonsStyling: false,
            customClass: {
                confirmButton: "btn btn-default"
            }
        });
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/typography/typography.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/typography/typography.component.ts ***!
  \*********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-typography",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-components-module.js.map
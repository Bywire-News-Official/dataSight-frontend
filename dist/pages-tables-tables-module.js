(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tables-tables-module"],{

/***/ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js ***!
  \**********************************************************************************************/
/*! exports provided: ClickType, ColumnChangesService, ColumnMode, ContextmenuType, DataTableBodyCellComponent, DataTableBodyComponent, DataTableBodyRowComponent, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableFooterComponent, DataTableFooterTemplateDirective, DataTableHeaderCellComponent, DataTableHeaderComponent, DataTablePagerComponent, DataTableRowWrapperComponent, DataTableSelectionComponent, DataTableSummaryRowComponent, DatatableComponent, DatatableFooterDirective, DatatableGroupHeaderDirective, DatatableGroupHeaderTemplateDirective, DatatableRowDetailDirective, DatatableRowDetailTemplateDirective, DimensionsHelper, DraggableDirective, Keys, LongPressDirective, NgxDatatableModule, OrderableDirective, ProgressBarComponent, ResizeableDirective, RowHeightCache, ScrollbarHelper, ScrollerComponent, SelectionType, SortDirection, SortType, VisibilityDirective, adjustColumnWidths, camelCase, columnGroupWidths, columnTotalWidth, columnsByPin, columnsByPinArr, columnsTotalWidth, deCamelCase, deepValueGetter, elementsFromPoint, emptyStringGetter, forceFillColumnWidths, getTotalFlexGrow, getVendorPrefixedName, getterForProp, groupRowsByParents, id, isNullOrUndefined, nextSortDir, numericIndexGetter, optionalGetterForProp, orderByComparator, selectRows, selectRowsBetween, setColumnDefaults, shallowValueGetter, sortRows, throttle, throttleable, translateTemplates, translateXY, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickType", function() { return ClickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnChangesService", function() { return ColumnChangesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnMode", function() { return ColumnMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextmenuType", function() { return ContextmenuType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyCellComponent", function() { return DataTableBodyCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyComponent", function() { return DataTableBodyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableBodyRowComponent", function() { return DataTableBodyRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellDirective", function() { return DataTableColumnCellDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnCellTreeToggle", function() { return DataTableColumnCellTreeToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnDirective", function() { return DataTableColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableColumnHeaderDirective", function() { return DataTableColumnHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterComponent", function() { return DataTableFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableFooterTemplateDirective", function() { return DataTableFooterTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderCellComponent", function() { return DataTableHeaderCellComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableHeaderComponent", function() { return DataTableHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablePagerComponent", function() { return DataTablePagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableRowWrapperComponent", function() { return DataTableRowWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSelectionComponent", function() { return DataTableSelectionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableSummaryRowComponent", function() { return DataTableSummaryRowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableFooterDirective", function() { return DatatableFooterDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderDirective", function() { return DatatableGroupHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableGroupHeaderTemplateDirective", function() { return DatatableGroupHeaderTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailDirective", function() { return DatatableRowDetailDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableRowDetailTemplateDirective", function() { return DatatableRowDetailTemplateDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DimensionsHelper", function() { return DimensionsHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keys", function() { return Keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongPressDirective", function() { return LongPressDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderableDirective", function() { return OrderableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeableDirective", function() { return ResizeableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowHeightCache", function() { return RowHeightCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollbarHelper", function() { return ScrollbarHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollerComponent", function() { return ScrollerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortDirection", function() { return SortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortType", function() { return SortType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibilityDirective", function() { return VisibilityDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustColumnWidths", function() { return adjustColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnGroupWidths", function() { return columnGroupWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnTotalWidth", function() { return columnTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPin", function() { return columnsByPin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsByPinArr", function() { return columnsByPinArr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnsTotalWidth", function() { return columnsTotalWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deCamelCase", function() { return deCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepValueGetter", function() { return deepValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementsFromPoint", function() { return elementsFromPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyStringGetter", function() { return emptyStringGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forceFillColumnWidths", function() { return forceFillColumnWidths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalFlexGrow", function() { return getTotalFlexGrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVendorPrefixedName", function() { return getVendorPrefixedName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterForProp", function() { return getterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRowsByParents", function() { return groupRowsByParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextSortDir", function() { return nextSortDir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numericIndexGetter", function() { return numericIndexGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionalGetterForProp", function() { return optionalGetterForProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByComparator", function() { return orderByComparator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRows", function() { return selectRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRowsBetween", function() { return selectRowsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setColumnDefaults", function() { return setColumnDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowValueGetter", function() { return shallowValueGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortRows", function() { return sortRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttleable", function() { return throttleable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTemplates", function() { return translateTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateXY", function() { return translateXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/@swimlane/ngx-datatable/node_modules/tslib/tslib.es6.js");






/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */



const _c0 = ["*"];
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.onTreeAction(group_r7); })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, ctx_r15.indexes.first + i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const i_r20 = ctx.index; _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r1.onActivate($event, i_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
} if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r11.rowTrackingFn);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.rowContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r10);
} }
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
} }
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onBodyScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
} }
function DataTableBodyComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const column_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onColumnResized($event, column_r3); })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onLongPressStart($event); })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onLongPressEnd($event); })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onSort($event); })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.select.emit($event); })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.columnContextmenu.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
} }
function DataTableHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DatatableComponent_datatable_header_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onColumnSort($event); })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onColumnResize($event); })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onColumnReorder($event); })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onHeaderSelect($event); })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onColumnContextmenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
} }
function DatatableComponent_datatable_footer_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onFooterPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
} }
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
} }
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.select.emit(!ctx_r5.allRowsSelected); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
} }
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onSort(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableHeaderCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) { }
const _c1 = function (a0, a1, a2, a3, a4) { return { rowCount: a0, pageSize: a1, selectedCount: a2, curPage: a3, offset: a4 }; };
function DataTableFooterComponent_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c1, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
} }
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
} }
function DataTableFooterComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
} }
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.page.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
} }
const _c2 = function (a0) { return { "selected-count": a0 }; };
function DataTablePagerComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const pg_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectPage(pg_r1.number); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
} }
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ii_r5 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onActivate($event, ii_r5); })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
} }
function DataTableBodyRowComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
} }
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
} }
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
} }
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
} }
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) { }
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
} }
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
} }
const _c3 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onCheckboxChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onTreeAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
} }
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) { }
const _c4 = function (a0) { return { cellContext: a0 }; };
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx_r7.cellContext));
} }
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, undefined, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
} }
function DataTableBodyCellComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) { }
function DataTableBodyCellComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
} }
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
} }
class ScrollbarHelper {
    constructor(document) {
        this.document = document;
        this.width = this.getWidth();
    }
    getWidth() {
        const outer = this.document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.width = '100px';
        outer.style.msOverflowStyle = 'scrollbar';
        this.document.body.appendChild(outer);
        const widthNoScroll = outer.offsetWidth;
        outer.style.overflow = 'scroll';
        const inner = this.document.createElement('div');
        inner.style.width = '100%';
        outer.appendChild(inner);
        const widthWithScroll = inner.offsetWidth;
        outer.parentNode.removeChild(outer);
        return widthNoScroll - widthWithScroll;
    }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) { return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
ScrollbarHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScrollbarHelper, factory: ScrollbarHelper.ɵfac });
ScrollbarHelper.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
    getDimensions(element) {
        return element.getBoundingClientRect();
    }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) { return new (t || DimensionsHelper)(); };
DimensionsHelper.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DimensionsHelper, factory: DimensionsHelper.ɵfac });

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
    constructor() {
        this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get columnInputChanges$() {
        return this.columnInputChanges.asObservable();
    }
    onInputChange() {
        this.columnInputChanges.next();
    }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) { return new (t || ColumnChangesService)(); };
ColumnChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColumnChangesService, factory: ColumnChangesService.ɵfac });

class DataTableFooterTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) { return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableFooterTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableFooterTemplateDirective, selectors: [["", "ngx-datatable-footer-template", ""]] });
DataTableFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.isVisible = false;
        this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.runCheck();
    }
    ngOnDestroy() {
        clearTimeout(this.timeout);
    }
    onVisibilityChange() {
        // trigger zone recalc for columns
        this.zone.run(() => {
            this.isVisible = true;
            this.visible.emit(true);
        });
    }
    runCheck() {
        const check = () => {
            // https://davidwalsh.name/offsetheight-visibility
            const { offsetHeight, offsetWidth } = this.element.nativeElement;
            if (offsetHeight && offsetWidth) {
                clearTimeout(this.timeout);
                this.onVisibilityChange();
            }
            else {
                clearTimeout(this.timeout);
                this.zone.runOutsideAngular(() => {
                    this.timeout = setTimeout(() => check(), 50);
                });
            }
        };
        this.timeout = setTimeout(() => check());
    }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) { return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
VisibilityDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: VisibilityDirective, selectors: [["", "visibilityObserver", ""]], hostVars: 2, hostBindings: function VisibilityDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    } }, outputs: { visible: "visible" } });
VisibilityDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
VisibilityDirective.propDecorators = {
    isVisible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.visible',] }],
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
    constructor(element) {
        this.dragX = true;
        this.dragY = true;
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isDragging = false;
        this.element = element.nativeElement;
    }
    ngOnChanges(changes) {
        if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
            this.onMousedown(changes['dragEventTarget'].currentValue);
        }
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    onMouseup(event) {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.element.classList.remove('dragging');
        if (this.subscription) {
            this._destroySubscription();
            this.dragEnd.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    onMousedown(event) {
        // we only want to drag the inner header text
        const isDragElm = event.target.classList.contains('draggable');
        if (isDragElm && (this.dragX || this.dragY)) {
            event.preventDefault();
            this.isDragging = true;
            const mouseDownPos = { x: event.clientX, y: event.clientY };
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup(ev));
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((ev) => this.move(ev, mouseDownPos));
            this.subscription.add(mouseMoveSub);
            this.dragStart.emit({
                event,
                element: this.element,
                model: this.dragModel
            });
        }
    }
    move(event, mouseDownPos) {
        if (!this.isDragging)
            return;
        const x = event.clientX - mouseDownPos.x;
        const y = event.clientY - mouseDownPos.y;
        if (this.dragX)
            this.element.style.left = `${x}px`;
        if (this.dragY)
            this.element.style.top = `${y}px`;
        this.element.classList.add('dragging');
        this.dragging.emit({
            event,
            element: this.element,
            model: this.dragModel
        });
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DraggableDirective, selectors: [["", "draggable", ""]], inputs: { dragX: "dragX", dragY: "dragY", dragEventTarget: "dragEventTarget", dragModel: "dragModel" }, outputs: { dragStart: "dragStart", dragging: "dragging", dragEnd: "dragEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DraggableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DraggableDirective.propDecorators = {
    dragEventTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragY: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dragStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dragEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class ResizeableDirective {
    constructor(element, renderer) {
        this.renderer = renderer;
        this.resizeEnabled = true;
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resizing = false;
        this.element = element.nativeElement;
    }
    ngAfterViewInit() {
        const renderer2 = this.renderer;
        this.resizeHandle = renderer2.createElement('span');
        if (this.resizeEnabled) {
            renderer2.addClass(this.resizeHandle, 'resize-handle');
        }
        else {
            renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
        }
        renderer2.appendChild(this.element, this.resizeHandle);
    }
    ngOnDestroy() {
        this._destroySubscription();
        if (this.renderer.destroyNode) {
            this.renderer.destroyNode(this.resizeHandle);
        }
        else if (this.resizeHandle) {
            this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
        }
    }
    onMouseup() {
        this.resizing = false;
        if (this.subscription && !this.subscription.closed) {
            this._destroySubscription();
            this.resize.emit(this.element.clientWidth);
        }
    }
    onMousedown(event) {
        const isHandle = event.target.classList.contains('resize-handle');
        const initialWidth = this.element.clientWidth;
        const mouseDownScreenX = event.screenX;
        if (isHandle) {
            event.stopPropagation();
            this.resizing = true;
            const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
            this.subscription = mouseup.subscribe((ev) => this.onMouseup());
            const mouseMoveSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((e) => this.move(e, initialWidth, mouseDownScreenX));
            this.subscription.add(mouseMoveSub);
        }
    }
    move(event, initialWidth, mouseDownScreenX) {
        const movementX = event.screenX - mouseDownScreenX;
        const newWidth = initialWidth + movementX;
        const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
        const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
        if (overMinWidth && underMaxWidth) {
            this.element.style.width = `${newWidth}px`;
        }
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) { return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ResizeableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizeableDirective, selectors: [["", "resizeable", ""]], hostVars: 2, hostBindings: function ResizeableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    } }, inputs: { resizeEnabled: "resizeEnabled", minWidth: "minWidth", maxWidth: "maxWidth" }, outputs: { resize: "resize" } });
ResizeableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ResizeableDirective.propDecorators = {
    resizeEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};

class OrderableDirective {
    constructor(differs, document) {
        this.document = document;
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.differ = differs.find({}).create();
    }
    ngAfterContentInit() {
        // HACK: Investigate Better Way
        this.updateSubscriptions();
        this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
    }
    ngOnDestroy() {
        this.draggables.forEach(d => {
            d.dragStart.unsubscribe();
            d.dragging.unsubscribe();
            d.dragEnd.unsubscribe();
        });
    }
    updateSubscriptions() {
        const diffs = this.differ.diff(this.createMapDiffs());
        if (diffs) {
            const subscribe = ({ currentValue, previousValue }) => {
                unsubscribe({ previousValue });
                if (currentValue) {
                    currentValue.dragStart.subscribe(this.onDragStart.bind(this));
                    currentValue.dragging.subscribe(this.onDragging.bind(this));
                    currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
                }
            };
            const unsubscribe = ({ previousValue }) => {
                if (previousValue) {
                    previousValue.dragStart.unsubscribe();
                    previousValue.dragging.unsubscribe();
                    previousValue.dragEnd.unsubscribe();
                }
            };
            diffs.forEachAddedItem(subscribe);
            // diffs.forEachChangedItem(subscribe.bind(this));
            diffs.forEachRemovedItem(unsubscribe);
        }
    }
    onDragStart() {
        this.positions = {};
        let i = 0;
        for (const dragger of this.draggables.toArray()) {
            const elm = dragger.element;
            const left = parseInt(elm.offsetLeft.toString(), 0);
            this.positions[dragger.dragModel.prop] = {
                left,
                right: left + parseInt(elm.offsetWidth.toString(), 0),
                index: i++,
                element: elm
            };
        }
    }
    onDragging({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            if (this.lastDraggingIndex !== target.i) {
                this.targetChanged.emit({
                    prevIndex: this.lastDraggingIndex,
                    newIndex: target.i,
                    initialIndex: prevPos.index
                });
                this.lastDraggingIndex = target.i;
            }
        }
        else if (this.lastDraggingIndex !== prevPos.index) {
            this.targetChanged.emit({
                prevIndex: this.lastDraggingIndex,
                initialIndex: prevPos.index
            });
            this.lastDraggingIndex = prevPos.index;
        }
    }
    onDragEnd({ element, model, event }) {
        const prevPos = this.positions[model.prop];
        const target = this.isTarget(model, event);
        if (target) {
            this.reorder.emit({
                prevIndex: prevPos.index,
                newIndex: target.i,
                model
            });
        }
        this.lastDraggingIndex = undefined;
        element.style.left = 'auto';
    }
    isTarget(model, event) {
        let i = 0;
        const x = event.x || event.clientX;
        const y = event.y || event.clientY;
        const targets = this.document.elementsFromPoint(x, y);
        for (const prop in this.positions) {
            // current column position which throws event.
            const pos = this.positions[prop];
            // since we drag the inner span, we need to find it in the elements at the cursor
            if (model.prop !== prop && targets.find((el) => el === pos.element)) {
                return {
                    pos,
                    i
                };
            }
            i++;
        }
    }
    createMapDiffs() {
        return this.draggables.toArray().reduce((acc, curr) => {
            acc[curr.dragModel.$$id] = curr;
            return acc;
        }, {});
    }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) { return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
OrderableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OrderableDirective, selectors: [["", "orderable", ""]], contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    } }, outputs: { reorder: "reorder", targetChanged: "targetChanged" } });
OrderableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
OrderableDirective.propDecorators = {
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    targetChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DraggableDirective, { descendants: true },] }]
};

class LongPressDirective {
    constructor() {
        this.pressEnabled = true;
        this.duration = 500;
        this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.mouseX = 0;
        this.mouseY = 0;
    }
    get press() {
        return this.pressing;
    }
    get isLongPress() {
        return this.isLongPressing;
    }
    onMouseDown(event) {
        // don't do right/middle clicks
        if (event.which !== 1 || !this.pressEnabled)
            return;
        // don't start drag if its on resize handle
        const target = event.target;
        if (target.classList.contains('resize-handle'))
            return;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
        this.pressing = true;
        this.isLongPressing = false;
        const mouseup = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mouseup');
        this.subscription = mouseup.subscribe((ev) => this.onMouseup());
        this.timeout = setTimeout(() => {
            this.isLongPressing = true;
            this.longPressStart.emit({
                event,
                model: this.pressModel
            });
            this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(mouseup))
                .subscribe((mouseEvent) => this.onMouseMove(mouseEvent)));
            this.loop(event);
        }, this.duration);
        this.loop(event);
    }
    onMouseMove(event) {
        if (this.pressing && !this.isLongPressing) {
            const xThres = Math.abs(event.clientX - this.mouseX) > 10;
            const yThres = Math.abs(event.clientY - this.mouseY) > 10;
            if (xThres || yThres) {
                this.endPress();
            }
        }
    }
    loop(event) {
        if (this.isLongPressing) {
            this.timeout = setTimeout(() => {
                this.longPressing.emit({
                    event,
                    model: this.pressModel
                });
                this.loop(event);
            }, 50);
        }
    }
    endPress() {
        clearTimeout(this.timeout);
        this.isLongPressing = false;
        this.pressing = false;
        this._destroySubscription();
        this.longPressEnd.emit({
            model: this.pressModel
        });
    }
    onMouseup() {
        this.endPress();
    }
    ngOnDestroy() {
        this._destroySubscription();
    }
    _destroySubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) { return new (t || LongPressDirective)(); };
LongPressDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LongPressDirective, selectors: [["", "long-press", ""]], hostVars: 4, hostBindings: function LongPressDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    } }, inputs: { pressEnabled: "pressEnabled", duration: "duration", pressModel: "pressModel" }, outputs: { longPressStart: "longPressStart", longPressing: "longPressing", longPressEnd: "longPressEnd" } });
LongPressDirective.propDecorators = {
    pressEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pressModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    duration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    longPressStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    longPressEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    press: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.press',] }],
    isLongPress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.longpress',] }],
    onMouseDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }]
};

class ScrollerComponent {
    constructor(ngZone, element, renderer) {
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.scrollbarV = false;
        this.scrollbarH = false;
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollYPos = 0;
        this.scrollXPos = 0;
        this.prevScrollYPos = 0;
        this.prevScrollXPos = 0;
        this._scrollEventListener = null;
        this.element = element.nativeElement;
    }
    ngOnInit() {
        // manual bind so we don't always listen
        if (this.scrollbarV || this.scrollbarH) {
            const renderer = this.renderer;
            this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
            this._scrollEventListener = this.onScrolled.bind(this);
            this.parentElement.addEventListener('scroll', this._scrollEventListener);
        }
    }
    ngOnDestroy() {
        if (this._scrollEventListener) {
            this.parentElement.removeEventListener('scroll', this._scrollEventListener);
            this._scrollEventListener = null;
        }
    }
    setOffset(offsetY) {
        if (this.parentElement) {
            this.parentElement.scrollTop = offsetY;
        }
    }
    onScrolled(event) {
        const dom = event.currentTarget;
        requestAnimationFrame(() => {
            this.scrollYPos = dom.scrollTop;
            this.scrollXPos = dom.scrollLeft;
            this.updateOffset();
        });
    }
    updateOffset() {
        let direction;
        if (this.scrollYPos < this.prevScrollYPos) {
            direction = 'down';
        }
        else if (this.scrollYPos > this.prevScrollYPos) {
            direction = 'up';
        }
        this.scroll.emit({
            direction,
            scrollYPos: this.scrollYPos,
            scrollXPos: this.scrollXPos
        });
        this.prevScrollYPos = this.scrollYPos;
        this.prevScrollXPos = this.scrollXPos;
    }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) { return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ScrollerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScrollerComponent, selectors: [["datatable-scroller"]], hostAttrs: [1, "datatable-scroll"], hostVars: 4, hostBindings: function ScrollerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    } }, inputs: { scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth" }, outputs: { scroll: "scroll" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function ScrollerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
ScrollerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
];
ScrollerComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class DatatableGroupHeaderTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) { return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DatatableGroupHeaderTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderTemplateDirective, selectors: [["", "ngx-datatable-group-header-template", ""]] });
DatatableGroupHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DatatableGroupHeaderDirective {
    constructor() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of a group
     */
    toggleExpandGroup(group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    }
    /**
     * Expand all groups
     */
    expandAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * Collapse all groups
     */
    collapseAllGroups() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) { return new (t || DatatableGroupHeaderDirective)(); };
DatatableGroupHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableGroupHeaderDirective, selectors: [["ngx-datatable-group-header"]], contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableGroupHeaderDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
    return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
    if (prop == null) {
        return emptyStringGetter;
    }
    if (typeof prop === 'number') {
        return numericIndexGetter;
    }
    else {
        // deep or simple
        if (prop.indexOf('.') !== -1) {
            return deepValueGetter;
        }
        else {
            return shallowValueGetter;
        }
    }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
    if (row == null) {
        return '';
    }
    // mimic behavior of deepValueGetter
    if (!row || index == null) {
        return row;
    }
    const value = row[index];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
    if (obj == null) {
        return '';
    }
    if (!obj || !fieldName) {
        return obj;
    }
    const value = obj[fieldName];
    if (value == null) {
        return '';
    }
    return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
    if (obj == null) {
        return '';
    }
    if (!obj || !path) {
        return obj;
    }
    // check if path matches a root-level field
    // { "a.b.c": 123 }
    let current = obj[path];
    if (current !== undefined) {
        return current;
    }
    current = obj;
    const split = path.split('.');
    if (split.length) {
        for (let i = 0; i < split.length; i++) {
            current = current[split[i]];
            // if found undefined, return empty string
            if (current === undefined || current === null) {
                return '';
            }
        }
    }
    return current;
}

function optionalGetterForProp(prop) {
    return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
    if (from && to) {
        const nodeById = {};
        const l = rows.length;
        let node = null;
        nodeById[0] = new TreeNode(); // that's the root node
        const uniqIDs = rows.reduce((arr, item) => {
            const toValue = to(item);
            if (arr.indexOf(toValue) === -1) {
                arr.push(toValue);
            }
            return arr;
        }, []);
        for (let i = 0; i < l; i++) {
            // make TreeNode objects for each item
            nodeById[to(rows[i])] = new TreeNode(rows[i]);
        }
        for (let i = 0; i < l; i++) {
            // link all TreeNode objects
            node = nodeById[to(rows[i])];
            let parent = 0;
            const fromValue = from(node.row);
            if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
                parent = fromValue;
            }
            node.parent = nodeById[parent];
            node.row['level'] = node.parent.row['level'] + 1;
            node.parent.children.push(node);
        }
        let resolvedRows = [];
        nodeById[0].flatten(function () {
            resolvedRows = [...resolvedRows, this.row];
        }, true);
        return resolvedRows;
    }
    else {
        return rows;
    }
}
class TreeNode {
    constructor(row = null) {
        if (!row) {
            row = {
                level: -1,
                treeStatus: 'expanded'
            };
        }
        this.row = row;
        this.parent = null;
        this.children = [];
    }
    flatten(f, recursive) {
        if (this.row['treeStatus'] === 'expanded') {
            for (let i = 0, l = this.children.length; i < l; i++) {
                const child = this.children[i];
                f.apply(child, Array.prototype.slice.call(arguments, 2));
                if (recursive)
                    child.flatten.apply(child, arguments);
            }
        }
    }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
    // Replace special characters with a space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
    // put a space before an uppercase letter
    str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
    // Lower case first character and some other stuff
    str = str
        .replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '')
        .trim()
        .toLowerCase();
    // uppercase characters preceded by a space or number
    str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
        return b.trim() + c.toUpperCase();
    });
    return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
    return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
    return ('0000' + ((Math.random() * Math.pow(36, 4)) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
    if (!columns)
        return;
    // Only one column should hold the tree view
    // Thus if multiple columns are provided with
    // isTreeColumn as true we take only the first one
    let treeColumnFound = false;
    for (const column of columns) {
        if (!column.$$id) {
            column.$$id = id();
        }
        // prop can be numeric; zero is valid not a missing prop
        // translate name => prop
        if (isNullOrUndefined(column.prop) && column.name) {
            column.prop = camelCase(column.name);
        }
        if (!column.$$valueGetter) {
            column.$$valueGetter = getterForProp(column.prop);
        }
        // format props if no name passed
        if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = deCamelCase(String(column.prop));
        }
        if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
            column.name = ''; // Fixes IE and Edge displaying `null`
        }
        if (!column.hasOwnProperty('resizeable')) {
            column.resizeable = true;
        }
        if (!column.hasOwnProperty('sortable')) {
            column.sortable = true;
        }
        if (!column.hasOwnProperty('draggable')) {
            column.draggable = true;
        }
        if (!column.hasOwnProperty('canAutoResize')) {
            column.canAutoResize = true;
        }
        if (!column.hasOwnProperty('width')) {
            column.width = 150;
        }
        if (!column.hasOwnProperty('isTreeColumn')) {
            column.isTreeColumn = false;
        }
        else {
            if (column.isTreeColumn && !treeColumnFound) {
                // If the first column with isTreeColumn is true found
                // we mark that treeCoulmn is found
                treeColumnFound = true;
            }
            else {
                // After that isTreeColumn property for any other column
                // will be set as false
                column.isTreeColumn = false;
            }
        }
    }
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
    const result = [];
    for (const temp of templates) {
        const col = {};
        const props = Object.getOwnPropertyNames(temp);
        for (const prop of props) {
            col[prop] = temp[prop];
        }
        if (temp.headerTemplate) {
            col.headerTemplate = temp.headerTemplate;
        }
        if (temp.cellTemplate) {
            col.cellTemplate = temp.cellTemplate;
        }
        if (temp.summaryFunc) {
            col.summaryFunc = temp.summaryFunc;
        }
        if (temp.summaryTemplate) {
            col.summaryTemplate = temp.summaryTemplate;
        }
        result.push(col);
    }
    return result;
}

var ColumnMode;
(function (ColumnMode) {
    ColumnMode["standard"] = "standard";
    ColumnMode["flex"] = "flex";
    ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));

var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));

var SortType;
(function (SortType) {
    SortType["single"] = "single";
    SortType["multi"] = "multi";
})(SortType || (SortType = {}));

var ContextmenuType;
(function (ContextmenuType) {
    ContextmenuType["header"] = "header";
    ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));

class DataTableColumnHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) { return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnHeaderDirective, selectors: [["", "ngx-datatable-header-template", ""]] });
DataTableColumnHeaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnCellDirective {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) { return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnCellDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellDirective, selectors: [["", "ngx-datatable-cell-template", ""]] });
DataTableColumnCellDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) { return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DataTableColumnCellTreeToggle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnCellTreeToggle, selectors: [["", "ngx-datatable-tree-toggle", ""]] });
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) { return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService)); };
DataTableColumnDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DataTableColumnDirective, selectors: [["ngx-datatable-column"]], contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnHeaderDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DataTableColumnCellTreeToggle, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    } }, inputs: { name: "name", prop: "prop", frozenLeft: "frozenLeft", frozenRight: "frozenRight", flexGrow: "flexGrow", resizeable: "resizeable", comparator: "comparator", pipe: "pipe", sortable: "sortable", draggable: "draggable", canAutoResize: "canAutoResize", minWidth: "minWidth", width: "width", maxWidth: "maxWidth", checkboxable: "checkboxable", headerCheckboxable: "headerCheckboxable", headerClass: "headerClass", cellClass: "cellClass", isTreeColumn: "isTreeColumn", treeLevelIndent: "treeLevelIndent", summaryFunc: "summaryFunc", summaryTemplate: "summaryTemplate", _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"], _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"], _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    prop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenLeft: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    frozenRight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    flexGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    resizeable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    comparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    draggable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    canAutoResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    checkboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerCheckboxable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cellClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTreeColumn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeLevelIndent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryFunc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _cellTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _headerTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    _treeToggleTemplateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }]
};

class DatatableRowDetailTemplateDirective {
    constructor(template) {
        this.template = template;
    }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) { return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
DatatableRowDetailTemplateDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailTemplateDirective, selectors: [["", "ngx-datatable-row-detail-template", ""]] });
DatatableRowDetailTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }
];

class DatatableRowDetailDirective {
    constructor() {
        /**
         * The detail row height is required especially
         * when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Row detail row visbility was toggled.
         */
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get template() {
        return this._templateInput || this._templateQuery;
    }
    /**
     * Toggle the expansion of the row
     */
    toggleExpandRow(row) {
        this.toggle.emit({
            type: 'row',
            value: row
        });
    }
    /**
     * API method to expand all the rows.
     */
    expandAllRows() {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    }
    /**
     * API method to collapse all the rows.
     */
    collapseAllRows() {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) { return new (t || DatatableRowDetailDirective)(); };
DatatableRowDetailDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableRowDetailDirective, selectors: [["ngx-datatable-row-detail"]], contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticContentQuery"](dirIndex, DatatableRowDetailTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { rowHeight: "rowHeight", _templateInput: ["template", "_templateInput"] }, outputs: { toggle: "toggle" } });
DatatableRowDetailDirective.propDecorators = {
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true },] }],
    toggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

class DatatableFooterDirective {
    get template() {
        return this._templateInput || this._templateQuery;
    }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) { return new (t || DatatableFooterDirective)(); };
DatatableFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DatatableFooterDirective, selectors: [["ngx-datatable-footer"]], contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    } }, inputs: { footerHeight: "footerHeight", totalMessage: "totalMessage", selectedMessage: "selectedMessage", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", _templateInput: ["template", "_templateInput"] } });
DatatableFooterDirective.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    _templateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['template',] }],
    _templateQuery: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },] }]
};

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
    const ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (const col of cols) {
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
    return {
        left: columnTotalWidth(groups.left),
        center: columnTotalWidth(groups.center),
        right: columnTotalWidth(groups.right),
        total: Math.floor(columnTotalWidth(all))
    };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
    let totalWidth = 0;
    if (columns) {
        for (const c of columns) {
            const has = prop && c[prop];
            const width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
    let totalWidth = 0;
    for (const column of columns) {
        const has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
function columnsByPinArr(val) {
    const colsByPinArr = [];
    const colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
    constructor() {
        /**
         * Tree Array stores the cumulative information of the row heights to perform efficient
         * range queries and updates.  Currently the tree is initialized to the base row
         * height instead of the detail row height.
         */
        this.treeArray = [];
    }
    /**
     * Clear the Tree array.
     */
    clearCache() {
        this.treeArray = [];
    }
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details) {
        const { rows, rowHeight, detailRowHeight, externalVirtual, rowCount, rowIndexes, rowExpansions } = details;
        const isFn = typeof rowHeight === 'function';
        const isDetailFn = typeof detailRowHeight === 'function';
        if (!isFn && isNaN(rowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
        }
        // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
        if (!isDetailFn && isNaN(detailRowHeight)) {
            throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
        }
        const n = externalVirtual ? rowCount : rows.length;
        this.treeArray = new Array(n);
        for (let i = 0; i < n; ++i) {
            this.treeArray[i] = 0;
        }
        for (let i = 0; i < n; ++i) {
            const row = rows[i];
            let currentRowHeight = rowHeight;
            if (isFn) {
                currentRowHeight = rowHeight(row);
            }
            // Add the detail row height to the already expanded rows.
            // This is useful for the table that goes through a filter or sort.
            const expanded = rowExpansions.has(row);
            if (row && expanded) {
                if (isDetailFn) {
                    const index = rowIndexes.get(row);
                    currentRowHeight += detailRowHeight(row, index);
                }
                else {
                    currentRowHeight += detailRowHeight;
                }
            }
            this.update(i, currentRowHeight);
        }
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
     */
    getRowIndex(scrollY) {
        if (scrollY === 0)
            return 0;
        return this.calcRowIndex(scrollY);
    }
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
     */
    update(atRowIndex, byRowHeight) {
        if (!this.treeArray.length) {
            throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
        }
        const n = this.treeArray.length;
        atRowIndex |= 0;
        while (atRowIndex < n) {
            this.treeArray[atRowIndex] += byRowHeight;
            atRowIndex |= atRowIndex + 1;
        }
    }
    /**
     * Range Sum query from 1 to the rowIndex
     */
    query(atIndex) {
        if (!this.treeArray.length) {
            throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
        }
        let sum = 0;
        atIndex |= 0;
        while (atIndex >= 0) {
            sum += this.treeArray[atIndex];
            atIndex = (atIndex & (atIndex + 1)) - 1;
        }
        return sum;
    }
    /**
     * Find the total height between 2 row indexes
     */
    queryBetween(atIndexA, atIndexB) {
        return this.query(atIndexB) - this.query(atIndexA - 1);
    }
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
     */
    calcRowIndex(sum) {
        if (!this.treeArray.length)
            return 0;
        let pos = -1;
        const dataLength = this.treeArray.length;
        // Get the highest bit for the block size.
        const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
        for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
            const nextPos = pos + blockSize;
            if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
                sum -= this.treeArray[nextPos];
                pos = nextPos;
            }
        }
        return pos + 1;
    }
}

const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
const ɵ0 = function () {
    const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    const match = typeof styles !== 'undefined'
        ? Array.prototype.slice
            .call(styles)
            .join('')
            .match(/-(moz|webkit|ms)-/)
        : null;
    const pre = match !== null ? match[1] : undefined;
    // tslint:disable-next-line: tsr-detect-non-literal-regexp
    const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom
        ? {
            dom,
            lowercase: pre,
            css: `-${pre}-`,
            js: pre[0].toUpperCase() + pre.substr(1)
        }
        : undefined;
};
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = (ɵ0)();
function getVendorPrefixedName(property) {
    const name = camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
        }
    }
    else {
        styles.top = `${y}px`;
        styles.left = `${x}px`;
    }
}

class DataTableBodyComponent {
    /**
     * Creates an instance of DataTableBodyComponent.
     */
    constructor(cd) {
        this.cd = cd;
        this.selected = [];
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowHeightsCache = new RowHeightCache();
        this.temp = [];
        this.offsetY = 0;
        this.indexes = {};
        this.rowIndexes = new WeakMap();
        this.rowExpansions = [];
        /**
         * Get the height of the detail row.
         */
        this.getDetailRowHeight = (row, index) => {
            if (!this.rowDetail) {
                return 0;
            }
            const rowHeight = this.rowDetail.rowHeight;
            return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
        };
        // declare fn here so we can get access to the `this` property
        this.rowTrackingFn = (index, row) => {
            const idx = this.getRowIndex(row);
            if (this.trackByProp) {
                return row[this.trackByProp];
            }
            else {
                return idx;
            }
        };
    }
    set pageSize(val) {
        this._pageSize = val;
        this.recalcLayout();
    }
    get pageSize() {
        return this._pageSize;
    }
    set rows(val) {
        this._rows = val;
        this.recalcLayout();
    }
    get rows() {
        return this._rows;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this.columnGroupWidths = columnGroupWidths(colsByPin, val);
    }
    get columns() {
        return this._columns;
    }
    set offset(val) {
        this._offset = val;
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization))
            this.recalcLayout();
    }
    get offset() {
        return this._offset;
    }
    set rowCount(val) {
        this._rowCount = val;
        this.recalcLayout();
    }
    get rowCount() {
        return this._rowCount;
    }
    get bodyWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        else {
            return '100%';
        }
    }
    set bodyHeight(val) {
        if (this.scrollbarV) {
            this._bodyHeight = val + 'px';
        }
        else {
            this._bodyHeight = 'auto';
        }
        this.recalcLayout();
    }
    get bodyHeight() {
        return this._bodyHeight;
    }
    /**
     * Returns if selection is enabled.
     */
    get selectEnabled() {
        return !!this.selectionType;
    }
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll and virtualization. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
     */
    get scrollHeight() {
        if (this.scrollbarV && this.virtualization && this.rowCount) {
            return this.rowHeightsCache.query(this.rowCount - 1);
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
    /**
     * Called after the constructor, initializing input properties
     */
    ngOnInit() {
        if (this.rowDetail) {
            this.listener = this.rowDetail.toggle.subscribe(({ type, value }) => {
                if (type === 'row') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
        if (this.groupHeader) {
            this.listener = this.groupHeader.toggle.subscribe(({ type, value }) => {
                if (type === 'group') {
                    this.toggleRowExpansion(value);
                }
                if (type === 'all') {
                    this.toggleAllRows(value);
                }
                // Refresh rows after toggle
                // Fixes #883
                this.updateIndexes();
                this.updateRows();
                this.cd.markForCheck();
            });
        }
    }
    /**
     * Called once, before the instance is destroyed.
     */
    ngOnDestroy() {
        if (this.rowDetail || this.groupHeader) {
            this.listener.unsubscribe();
        }
    }
    /**
     * Updates the Y offset given a new offset.
     */
    updateOffsetY(offset) {
        // scroller is missing on empty table
        if (!this.scroller) {
            return;
        }
        if (this.scrollbarV && this.virtualization && offset) {
            // First get the row Index that we need to move to.
            const rowIndex = this.pageSize * offset;
            offset = this.rowHeightsCache.query(rowIndex - 1);
        }
        else if (this.scrollbarV && !this.virtualization) {
            offset = 0;
        }
        this.scroller.setOffset(offset || 0);
    }
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
     */
    onBodyScroll(event) {
        const scrollYPos = event.scrollYPos;
        const scrollXPos = event.scrollXPos;
        // if scroll change, trigger update
        // this is mainly used for header cell positions
        if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
            this.scroll.emit({
                offsetY: scrollYPos,
                offsetX: scrollXPos
            });
        }
        this.offsetY = scrollYPos;
        this.offsetX = scrollXPos;
        this.updateIndexes();
        this.updatePage(event.direction);
        this.updateRows();
    }
    /**
     * Updates the page given a direction.
     */
    updatePage(direction) {
        let offset = this.indexes.first / this.pageSize;
        if (direction === 'up') {
            offset = Math.ceil(offset);
        }
        else if (direction === 'down') {
            offset = Math.floor(offset);
        }
        if (direction !== undefined && !isNaN(offset)) {
            this.page.emit({ offset });
        }
    }
    /**
     * Updates the rows in the view port
     */
    updateRows() {
        const { first, last } = this.indexes;
        let rowIndex = first;
        let idx = 0;
        const temp = [];
        // if grouprowsby has been specified treat row paging
        // parameters as group paging parameters ie if limit 10 has been
        // specified treat it as 10 groups rather than 10 rows
        if (this.groupedRows) {
            let maxRowsPerGroup = 3;
            // if there is only one group set the maximum number of
            // rows per group the same as the total number of rows
            if (this.groupedRows.length === 1) {
                maxRowsPerGroup = this.groupedRows[0].value.length;
            }
            while (rowIndex < last && rowIndex < this.groupedRows.length) {
                // Add the groups into this page
                const group = this.groupedRows[rowIndex];
                this.rowIndexes.set(group, rowIndex);
                if (group.value) {
                    // add indexes for each group item
                    group.value.forEach((g, i) => {
                        const _idx = `${rowIndex}-${i}`;
                        this.rowIndexes.set(g, _idx);
                    });
                }
                temp[idx] = group;
                idx++;
                // Group index in this context
                rowIndex++;
            }
        }
        else {
            while (rowIndex < last && rowIndex < this.rowCount) {
                const row = this.rows[rowIndex];
                if (row) {
                    // add indexes for each row
                    this.rowIndexes.set(row, rowIndex);
                    temp[idx] = row;
                }
                idx++;
                rowIndex++;
            }
        }
        this.temp = temp;
    }
    /**
     * Get the row height
     */
    getRowHeight(row) {
        // if its a function return it
        if (typeof this.rowHeight === 'function') {
            return this.rowHeight(row);
        }
        return this.rowHeight;
    }
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group) {
        let rowHeight = 0;
        if (group.value) {
            for (let index = 0; index < group.value.length; index++) {
                rowHeight += this.getRowAndDetailHeight(group.value[index]);
            }
        }
        return rowHeight;
    }
    /**
     * Calculate row height based on the expanded state of the row.
     */
    getRowAndDetailHeight(row) {
        let rowHeight = this.getRowHeight(row);
        const expanded = this.getRowExpanded(row);
        // Adding detail row height if its expanded.
        if (expanded) {
            rowHeight += this.getDetailRowHeight(row);
        }
        return rowHeight;
    }
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
     * @param rows the row that needs to be placed in the 2D space.
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getRowsStyles(rows) {
        const styles = {};
        // only add styles for the group if there is a group
        if (this.groupedRows) {
            styles.width = this.columnGroupWidths.total;
        }
        if (this.scrollbarV && this.virtualization) {
            let idx = 0;
            if (this.groupedRows) {
                // Get the latest row rowindex in a group
                const row = rows[rows.length - 1];
                idx = row ? this.getRowIndex(row) : 0;
            }
            else {
                idx = this.getRowIndex(rows);
            }
            // const pos = idx * rowHeight;
            // The position of this row would be the sum of all row heights
            // until the previous row position.
            const pos = this.rowHeightsCache.query(idx - 1);
            translateXY(styles, 0, pos);
        }
        return styles;
    }
    /**
     * Calculate bottom summary row offset for scrollbar mode.
     * For more information about cache and offset calculation
     * see description for `getRowsStyles` method
     *
     * @returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
    getBottomSummaryRowStyles() {
        if (!this.scrollbarV || !this.rows || !this.rows.length) {
            return null;
        }
        const styles = { position: 'absolute' };
        const pos = this.rowHeightsCache.query(this.rows.length - 1);
        translateXY(styles, 0, pos);
        return styles;
    }
    /**
     * Hides the loading indicator
     */
    hideIndicator() {
        setTimeout(() => (this.loadingIndicator = false), 500);
    }
    /**
     * Updates the index of the rows in the viewport
     */
    updateIndexes() {
        let first = 0;
        let last = 0;
        if (this.scrollbarV) {
            if (this.virtualization) {
                // Calculation of the first and last indexes will be based on where the
                // scrollY position would be at.  The last index would be the one
                // that shows up inside the view port the last.
                const height = parseInt(this.bodyHeight, 0);
                first = this.rowHeightsCache.getRowIndex(this.offsetY);
                last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
            }
            else {
                // If virtual rows are not needed
                // We render all in one go
                first = 0;
                last = this.rowCount;
            }
        }
        else {
            // The server is handling paging and will pass an array that begins with the
            // element at a specified offset.  first should always be 0 with external paging.
            if (!this.externalPaging) {
                first = Math.max(this.offset * this.pageSize, 0);
            }
            last = Math.min(first + this.pageSize, this.rowCount);
        }
        this.indexes = { first, last };
    }
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
     */
    refreshRowHeightCache() {
        if (!this.scrollbarV || (this.scrollbarV && !this.virtualization)) {
            return;
        }
        // clear the previous row height cache if already present.
        // this is useful during sorts, filters where the state of the
        // rows array is changed.
        this.rowHeightsCache.clearCache();
        // Initialize the tree only if there are rows inside the tree.
        if (this.rows && this.rows.length) {
            const rowExpansions = new Set();
            for (const row of this.rows) {
                if (this.getRowExpanded(row)) {
                    rowExpansions.add(row);
                }
            }
            this.rowHeightsCache.initCache({
                rows: this.rows,
                rowHeight: this.rowHeight,
                detailRowHeight: this.getDetailRowHeight,
                externalVirtual: this.scrollbarV && this.externalPaging,
                rowCount: this.rowCount,
                rowIndexes: this.rowIndexes,
                rowExpansions
            });
        }
    }
    /**
     * Gets the index for the view port
     */
    getAdjustedViewPortIndex() {
        // Capture the row index of the first row that is visible on the viewport.
        // If the scroll bar is just below the row which is highlighted then make that as the
        // first index.
        const viewPortFirstRowIndex = this.indexes.first;
        if (this.scrollbarV && this.virtualization) {
            const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
            return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
        }
        return viewPortFirstRowIndex;
    }
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
     */
    toggleRowExpansion(row) {
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
        const expanded = rowExpandedIdx > -1;
        // If the detailRowHeight is auto --> only in case of non-virtualized scroll
        if (this.scrollbarV && this.virtualization) {
            const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
            // const idx = this.rowIndexes.get(row) || 0;
            const idx = this.getRowIndex(row);
            this.rowHeightsCache.update(idx, detailRowHeight);
        }
        // Update the toggled row and update thive nevere heights in the cache.
        if (expanded) {
            this.rowExpansions.splice(rowExpandedIdx, 1);
        }
        else {
            this.rowExpansions.push(row);
        }
        this.detailToggle.emit({
            rows: [row],
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Expand/Collapse all the rows no matter what their state is.
     */
    toggleAllRows(expanded) {
        // clear prev expansions
        this.rowExpansions = [];
        // Capture the row index of the first row that is visible on the viewport.
        const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
        if (expanded) {
            for (const row of this.rows) {
                this.rowExpansions.push(row);
            }
        }
        if (this.scrollbarV) {
            // Refresh the full row heights cache since every row was affected.
            this.recalcLayout();
        }
        // Emit all rows that have been expanded.
        this.detailToggle.emit({
            rows: this.rows,
            currentIndex: viewPortFirstRowIndex
        });
    }
    /**
     * Recalculates the table
     */
    recalcLayout() {
        this.refreshRowHeightCache();
        this.updateIndexes();
        this.updateRows();
    }
    /**
     * Tracks the column
     */
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group) {
        const widths = this.columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = offsetDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row) {
        if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
            for (const group of this.groupedRows) {
                this.rowExpansions.push(group);
            }
        }
        return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
    }
    getRowExpandedIdx(row, expanded) {
        if (!expanded || !expanded.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return expanded.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
    /**
     * Gets the row index given a row
     */
    getRowIndex(row) {
        return this.rowIndexes.get(row) || 0;
    }
    onTreeAction(row) {
        this.treeAction.emit({ row });
    }
}
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) { return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyComponent, selectors: [["datatable-body"]], viewQuery: function DataTableBodyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    } }, hostAttrs: [1, "datatable-body"], hostVars: 4, hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    } }, inputs: { selected: "selected", pageSize: "pageSize", rows: "rows", columns: "columns", offset: "offset", rowCount: "rowCount", bodyHeight: "bodyHeight", offsetX: "offsetX", loadingIndicator: "loadingIndicator", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", externalPaging: "externalPaging", rowHeight: "rowHeight", emptyMessage: "emptyMessage", selectionType: "selectionType", rowIdentity: "rowIdentity", rowDetail: "rowDetail", groupHeader: "groupHeader", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", rowClass: "rowClass", groupedRows: "groupedRows", groupExpansionDefault: "groupExpansionDefault", innerWidth: "innerWidth", groupRowsBy: "groupRowsBy", virtualization: "virtualization", summaryRow: "summaryRow", summaryPosition: "summaryPosition", summaryHeight: "summaryHeight" }, outputs: { scroll: "scroll", page: "page", activate: "activate", select: "select", detailToggle: "detailToggle", rowContextmenu: "rowContextmenu", treeAction: "treeAction" }, decls: 5, vars: 9, consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], [3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]], template: function DataTableBodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) { return ctx.select.emit($event); })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) { return ctx.activate.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableSelectionComponent, ProgressBarComponent, ScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], DataTableSummaryRowComponent, DataTableRowWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableBodyRowComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyComponent.propDecorators = {
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    emptyMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    bodyWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }],
    bodyHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    detailToggle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scroller: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [ScrollerComponent,] }]
};

class DataTableHeaderComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._columnGroupWidths = {
            total: 100
        };
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
        this.destroyed = false;
    }
    set innerWidth(val) {
        this._innerWidth = val;
        setTimeout(() => {
            if (this._columns) {
                const colByPin = columnsByPin(this._columns);
                this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        });
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set headerHeight(val) {
        if (val !== 'auto') {
            this._headerHeight = `${val}px`;
        }
        else {
            this._headerHeight = val;
        }
    }
    get headerHeight() {
        return this._headerHeight;
    }
    set columns(val) {
        this._columns = val;
        const colsByPin = columnsByPin(val);
        this._columnsByPin = columnsByPinArr(val);
        setTimeout(() => {
            this._columnGroupWidths = columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        });
    }
    get columns() {
        return this._columns;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.setStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    onLongPressStart({ event, model }) {
        model.dragging = true;
        this.dragEventTarget = event;
    }
    onLongPressEnd({ event, model }) {
        this.dragEventTarget = event;
        // delay resetting so sort can be
        // prevented if we were dragging
        setTimeout(() => {
            // datatable component creates copies from columns on reorder
            // set dragging to false on new objects
            const column = this._columns.find(c => c.$$id === model.$$id);
            if (column) {
                column.dragging = false;
            }
        }, 5);
    }
    get headerWidth() {
        if (this.scrollbarH) {
            return this.innerWidth + 'px';
        }
        return '100%';
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    onColumnResized(width, column) {
        if (width <= column.minWidth) {
            width = column.minWidth;
        }
        else if (width >= column.maxWidth) {
            width = column.maxWidth;
        }
        this.resize.emit({
            column,
            prevValue: column.width,
            newValue: width
        });
    }
    onColumnReordered({ prevIndex, newIndex, model }) {
        const column = this.getColumn(newIndex);
        column.isTarget = false;
        column.targetMarkerContext = undefined;
        this.reorder.emit({
            column: model,
            prevValue: prevIndex,
            newValue: newIndex
        });
    }
    onTargetChanged({ prevIndex, newIndex, initialIndex }) {
        if (prevIndex || prevIndex === 0) {
            const oldColumn = this.getColumn(prevIndex);
            oldColumn.isTarget = false;
            oldColumn.targetMarkerContext = undefined;
        }
        if (newIndex || newIndex === 0) {
            const newColumn = this.getColumn(newIndex);
            newColumn.isTarget = true;
            if (initialIndex !== newIndex) {
                newColumn.targetMarkerContext = {
                    class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
                };
            }
        }
    }
    getColumn(index) {
        const leftColumnCount = this._columnsByPin[0].columns.length;
        if (index < leftColumnCount) {
            return this._columnsByPin[0].columns[index];
        }
        const centerColumnCount = this._columnsByPin[1].columns.length;
        if (index < leftColumnCount + centerColumnCount) {
            return this._columnsByPin[1].columns[index - leftColumnCount];
        }
        return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
    }
    onSort({ column, prevValue, newValue }) {
        // if we are dragging don't sort!
        if (column.dragging) {
            return;
        }
        const sorts = this.calcNewSorts(column, prevValue, newValue);
        this.sort.emit({
            sorts,
            column,
            prevValue,
            newValue
        });
    }
    calcNewSorts(column, prevValue, newValue) {
        let idx = 0;
        if (!this.sorts) {
            this.sorts = [];
        }
        const sorts = this.sorts.map((s, i) => {
            s = Object.assign({}, s);
            if (s.prop === column.prop) {
                idx = i;
            }
            return s;
        });
        if (newValue === undefined) {
            sorts.splice(idx, 1);
        }
        else if (prevValue) {
            sorts[idx].dir = newValue;
        }
        else {
            if (this.sortType === SortType.single) {
                sorts.splice(0, this.sorts.length);
            }
            sorts.push({ dir: newValue, prop: column.prop });
        }
        return sorts;
    }
    setStylesByGroup() {
        this._styleByGroup.left = this.calcStylesByGroup('left');
        this._styleByGroup.center = this.calcStylesByGroup('center');
        this._styleByGroup.right = this.calcStylesByGroup('right');
        if (!this.destroyed) {
            this.cd.detectChanges();
        }
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'center') {
            translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            const totalDiff = widths.total - this.innerWidth;
            const offset = totalDiff * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderComponent, selectors: [["datatable-header"]], hostAttrs: [1, "datatable-header"], hostVars: 4, hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    } }, inputs: { innerWidth: "innerWidth", headerHeight: "headerHeight", columns: "columns", offsetX: "offsetX", sorts: "sorts", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", scrollbarH: "scrollbarH", dealsWithGroup: "dealsWithGroup", targetMarkerTemplate: "targetMarkerTemplate", sortType: "sortType", allRowsSelected: "allRowsSelected", selectionType: "selectionType", reorderable: "reorderable" }, outputs: { sort: "sort", reorder: "reorder", resize: "resize", select: "select", columnContextmenu: "columnContextmenu" }, decls: 2, vars: 4, consts: [["orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) { return ctx.onColumnReordered($event); })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) { return ctx.onTargetChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableHeaderCellComponent, ResizeableDirective, LongPressDirective, DraggableDirective]; }, encapsulation: 2, changeDetection: 0 });
DataTableHeaderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderComponent.propDecorators = {
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    dealsWithGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    headerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width',] }]
};

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
    options = options || {};
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    function later() {
        previous = options.leading === false ? 0 : +new Date();
        timeout = null;
        result = func.apply(context, args);
    }
    return function () {
        const now = +new Date();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
    return function innerDecorator(target, key, descriptor) {
        return {
            configurable: true,
            enumerable: descriptor.enumerable,
            get: function getter() {
                Object.defineProperty(this, key, {
                    configurable: true,
                    enumerable: descriptor.enumerable,
                    value: throttle(descriptor.value, duration, options)
                });
                return this[key];
            }
        };
    };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
    let totalFlexGrow = 0;
    for (const c of columns) {
        totalFlexGrow += c.flexGrow || 0;
    }
    return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
    const columnsWidth = columnsTotalWidth(allColumns);
    const totalFlexGrow = getTotalFlexGrow(allColumns);
    const colsByGroup = columnsByPin(allColumns);
    if (columnsWidth !== expectedWidth) {
        scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
    }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
    // calculate total width and flexgrow points for coulumns that can be resized
    for (const attr in colsByGroup) {
        for (const column of colsByGroup[attr]) {
            if (!column.canAutoResize) {
                maxWidth -= column.width;
                totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
            }
            else {
                column.width = 0;
            }
        }
    }
    const hasMinWidth = {};
    let remainingWidth = maxWidth;
    // resize columns until no width is left to be distributed
    do {
        const widthPerFlexPoint = remainingWidth / totalFlexGrow;
        remainingWidth = 0;
        for (const attr in colsByGroup) {
            for (const column of colsByGroup[attr]) {
                // if the column can be resize and it hasn't reached its minimum width yet
                if (column.canAutoResize && !hasMinWidth[column.prop]) {
                    const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
                    if (column.minWidth !== undefined && newWidth < column.minWidth) {
                        remainingWidth += newWidth - column.minWidth;
                        column.width = column.minWidth;
                        hasMinWidth[column.prop] = true;
                    }
                    else {
                        column.width = newWidth;
                    }
                }
            }
        }
    } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
    const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
        return c.canAutoResize !== false;
    });
    for (const column of columnsToResize) {
        if (!column.$$oldWidth) {
            column.$$oldWidth = column.width;
        }
    }
    let additionWidthPerColumn = 0;
    let exceedsWindow = false;
    let contentWidth = getContentWidth(allColumns, defaultColWidth);
    let remainingWidth = expectedWidth - contentWidth;
    const columnsProcessed = [];
    const remainingWidthLimit = 1; // when to stop
    // This loop takes care of the
    do {
        additionWidthPerColumn = remainingWidth / columnsToResize.length;
        exceedsWindow = contentWidth >= expectedWidth;
        for (const column of columnsToResize) {
            if (exceedsWindow && allowBleed) {
                column.width = column.$$oldWidth || column.width || defaultColWidth;
            }
            else {
                const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
                if (column.minWidth && newSize < column.minWidth) {
                    column.width = column.minWidth;
                    columnsProcessed.push(column);
                }
                else if (column.maxWidth && newSize > column.maxWidth) {
                    column.width = column.maxWidth;
                    columnsProcessed.push(column);
                }
                else {
                    column.width = newSize;
                }
            }
            column.width = Math.max(0, column.width);
        }
        contentWidth = getContentWidth(allColumns);
        remainingWidth = expectedWidth - contentWidth;
        removeProcessedColumns(columnsToResize, columnsProcessed);
    } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
    for (const column of columnsProcessed) {
        const index = columnsToResize.indexOf(column);
        columnsToResize.splice(index, 1);
    }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
    let contentWidth = 0;
    for (const column of allColumns) {
        contentWidth += column.width || defaultColWidth;
    }
    return contentWidth;
}

var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
    if (sortType === SortType.single) {
        if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else {
            return SortDirection.asc;
        }
    }
    else {
        if (!current) {
            return SortDirection.asc;
        }
        else if (current === SortDirection.asc) {
            return SortDirection.desc;
        }
        else if (current === SortDirection.desc) {
            return undefined;
        }
        // avoid TS7030: Not all code paths return a value.
        return undefined;
    }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
    if (a === null || typeof a === 'undefined')
        a = 0;
    if (b === null || typeof b === 'undefined')
        b = 0;
    if (a instanceof Date && b instanceof Date) {
        if (a < b)
            return -1;
        if (a > b)
            return 1;
    }
    else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
        // Convert to string in case of a=0 or b=0
        a = String(a);
        b = String(b);
        // Isn't a number so lowercase the string to properly compare
        if (a.toLowerCase() < b.toLowerCase())
            return -1;
        if (a.toLowerCase() > b.toLowerCase())
            return 1;
    }
    else {
        // Parse strings as numbers to compare properly
        if (parseFloat(a) < parseFloat(b))
            return -1;
        if (parseFloat(a) > parseFloat(b))
            return 1;
    }
    // equal each other
    return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
    if (!rows)
        return [];
    if (!dirs || !dirs.length || !columns)
        return [...rows];
    /**
     * record the row ordering of results from prior sort operations (if applicable)
     * this is necessary to guarantee stable sorting behavior
     */
    const rowToIndexMap = new Map();
    rows.forEach((row, index) => rowToIndexMap.set(row, index));
    const temp = [...rows];
    const cols = columns.reduce((obj, col) => {
        if (col.comparator && typeof col.comparator === 'function') {
            obj[col.prop] = col.comparator;
        }
        return obj;
    }, {});
    // cache valueGetter and compareFn so that they
    // do not need to be looked-up in the sort function body
    const cachedDirs = dirs.map(dir => {
        const prop = dir.prop;
        return {
            prop,
            dir: dir.dir,
            valueGetter: getterForProp(prop),
            compareFn: cols[prop] || orderByComparator
        };
    });
    return temp.sort(function (rowA, rowB) {
        for (const cachedDir of cachedDirs) {
            // Get property and valuegetters for column to be sorted
            const { prop, valueGetter } = cachedDir;
            // Get A and B cell values from rows based on properties of the columns
            const propA = valueGetter(rowA, prop);
            const propB = valueGetter(rowB, prop);
            // Compare function gets five parameters:
            // Two cell values to be compared as propA and propB
            // Two rows corresponding to the cells as rowA and rowB
            // Direction of the sort for this column as SortDirection
            // Compare can be a standard JS comparison function (a,b) => -1|0|1
            // as additional parameters are silently ignored. The whole row and sort
            // direction enable more complex sort logic.
            const comparison = cachedDir.dir !== SortDirection.desc
                ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir)
                : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
            // Don't return 0 yet in case of needing to sort by next property
            if (comparison !== 0)
                return comparison;
        }
        if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB)))
            return 0;
        /**
         * all else being equal, preserve original order of the rows (stable sort)
         */
        return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
    });
}

class DatatableComponent {
    constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
        this.scrollbarHelper = scrollbarHelper;
        this.dimensionsHelper = dimensionsHelper;
        this.cd = cd;
        this.columnChangesService = columnChangesService;
        this.configuration = configuration;
        /**
         * List of row objects that should be
         * represented as selected in the grid.
         * Default value: `[]`
         */
        this.selected = [];
        /**
         * Enable vertical scrollbars
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
         */
        this.scrollbarH = false;
        /**
         * The row height; which is necessary
         * to calculate the height for the lazy rendering.
         */
        this.rowHeight = 30;
        /**
         * Type of column width distribution formula.
         * Example: flex, force, standard
         */
        this.columnMode = ColumnMode.standard;
        /**
         * The minimum header height in pixels.
         * Pass a falsey for no header
         */
        this.headerHeight = 30;
        /**
         * The minimum footer height in pixels.
         * Pass falsey for no footer
         */
        this.footerHeight = 0;
        /**
         * If the table should use external paging
         * otherwise its assumed that all data is preloaded.
         */
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         */
        this.loadingIndicator = false;
        /**
         * Enable/Disable ability to re-order columns
         * by dragging them.
         */
        this.reorderable = true;
        /**
         * Swap columns on re-order columns or
         * move them.
         */
        this.swapColumns = true;
        /**
         * The type of sorting
         */
        this.sortType = SortType.single;
        /**
         * Array of sorted columns by property and type.
         * Default value: `[]`
         */
        this.sorts = [];
        /**
         * Css class overrides
         */
        this.cssClasses = {
            sortAscending: 'datatable-icon-up',
            sortDescending: 'datatable-icon-down',
            sortUnset: 'datatable-icon-sort-unset',
            pagerLeftArrow: 'datatable-icon-left',
            pagerRightArrow: 'datatable-icon-right',
            pagerPrevious: 'datatable-icon-prev',
            pagerNext: 'datatable-icon-skip'
        };
        /**
         * Message overrides for localization
         *
         * emptyMessage     [default] = 'No data to display'
         * totalMessage     [default] = 'total'
         * selectedMessage  [default] = 'selected'
         */
        this.messages = {
            // Message to show when array is presented
            // but contains no values
            emptyMessage: 'No data to display',
            // Footer total message
            totalMessage: 'total',
            // Footer selected message
            selectedMessage: 'selected'
        };
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * A flag for row virtualization on / off
         */
        this.virtualization = true;
        /**
         * A flag for switching summary row on / off
         */
        this.summaryRow = false;
        /**
         * A height of summary row
         */
        this.summaryHeight = 30;
        /**
         * A property holds a summary row position: top/bottom
         */
        this.summaryPosition = 'top';
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was focused via keyboard or mouse click.
         */
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * A cell or row was selected.
         */
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column sort was invoked.
         */
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The table was paged either triggered by the pager or the body scroll.
         */
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Columns were re-ordered.
         */
        this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Column was resized.
         */
        this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
         */
        this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        /**
         * A row was expanded ot collapsed for tree
         */
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.rowCount = 0;
        this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this._count = 0;
        this._offset = 0;
        this._subscriptions = [];
        /**
         * This will be used when displaying or selecting rows.
         * when tracking/comparing them, we'll use the value of this fn,
         *
         * (`fn(x) === fn(y)` instead of `x === y`)
         */
        this.rowIdentity = (x) => {
            if (this._groupRowsBy) {
                // each group in groupedRows are stored as {key, value: [rows]},
                // where key is the groupRowsBy index
                return x.key;
            }
            else {
                return x;
            }
        };
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
        // apply global settings from Module.forRoot
        if (this.configuration && this.configuration.messages) {
            this.messages = Object.assign({}, this.configuration.messages);
        }
    }
    /**
     * Rows that are displayed in the table.
     */
    set rows(val) {
        this._rows = val;
        if (val) {
            this._internalRows = [...val];
        }
        // auto sort on new updates
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // recalculate sizes/etc
        this.recalculate();
        if (this._rows && this._groupRowsBy) {
            // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
            this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
        }
        this.cd.markForCheck();
    }
    /**
     * Gets the rows.
     */
    get rows() {
        return this._rows;
    }
    /**
     * This attribute allows the user to set the name of the column to group the data with
     */
    set groupRowsBy(val) {
        if (val) {
            this._groupRowsBy = val;
            if (this._rows && this._groupRowsBy) {
                // cretes a new array with the data grouped
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
        }
    }
    get groupRowsBy() {
        return this._groupRowsBy;
    }
    /**
     * Columns to be displayed.
     */
    set columns(val) {
        if (val) {
            this._internalColumns = [...val];
            setColumnDefaults(this._internalColumns);
            this.recalculateColumns();
        }
        this._columns = val;
    }
    /**
     * Get the columns.
     */
    get columns() {
        return this._columns;
    }
    /**
     * The page size to be shown.
     * Default value: `undefined`
     */
    set limit(val) {
        this._limit = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the limit.
     */
    get limit() {
        return this._limit;
    }
    /**
     * The total count of all rows.
     * Default value: `0`
     */
    set count(val) {
        this._count = val;
        // recalculate sizes/etc
        this.recalculate();
    }
    /**
     * Gets the count.
     */
    get count() {
        return this._count;
    }
    /**
     * The current offset ( page - 1 ) shown.
     * Default value: `0`
     */
    set offset(val) {
        this._offset = val;
    }
    get offset() {
        return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
    }
    /**
     * CSS class applied if the header height if fixed height.
     */
    get isFixedHeader() {
        const headerHeight = this.headerHeight;
        return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
    }
    /**
     * CSS class applied to the root element if
     * the row heights are fixed heights.
     */
    get isFixedRow() {
        return this.rowHeight !== 'auto';
    }
    /**
     * CSS class applied to root element if
     * vertical scrolling is enabled.
     */
    get isVertScroll() {
        return this.scrollbarV;
    }
    /**
     * CSS class applied to root element if
     * virtualization is enabled.
     */
    get isVirtualized() {
        return this.virtualization;
    }
    /**
     * CSS class applied to the root element
     * if the horziontal scrolling is enabled.
     */
    get isHorScroll() {
        return this.scrollbarH;
    }
    /**
     * CSS class applied to root element is selectable.
     */
    get isSelectable() {
        return this.selectionType !== undefined;
    }
    /**
     * CSS class applied to root is checkbox selection.
     */
    get isCheckboxSelection() {
        return this.selectionType === SelectionType.checkbox;
    }
    /**
     * CSS class applied to root if cell selection.
     */
    get isCellSelection() {
        return this.selectionType === SelectionType.cell;
    }
    /**
     * CSS class applied to root if single select.
     */
    get isSingleSelection() {
        return this.selectionType === SelectionType.single;
    }
    /**
     * CSS class added to root element if mulit select
     */
    get isMultiSelection() {
        return this.selectionType === SelectionType.multi;
    }
    /**
     * CSS class added to root element if mulit click select
     */
    get isMultiClickSelection() {
        return this.selectionType === SelectionType.multiClick;
    }
    /**
     * Column templates gathered from `ContentChildren`
     * if described in your markup.
     */
    set columnTemplates(val) {
        this._columnTemplates = val;
        this.translateColumns(val);
    }
    /**
     * Returns the column templates.
     */
    get columnTemplates() {
        return this._columnTemplates;
    }
    /**
     * Returns if all rows are selected.
     */
    get allRowsSelected() {
        let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            const indexes = this.bodyComponent.indexes;
            const rowsOnPage = indexes.last - indexes.first;
            allRowsSelected = this.selected.length === rowsOnPage;
        }
        return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
    }
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
     */
    ngOnInit() {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    }
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
     */
    ngAfterViewInit() {
        if (!this.externalSorting) {
            this.sortInternalRows();
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        if (typeof requestAnimationFrame === 'undefined') {
            return;
        }
        requestAnimationFrame(() => {
            this.recalculate();
            // emit page for virtual server-side kickoff
            if (this.externalPaging && this.scrollbarV) {
                this.page.emit({
                    count: this.count,
                    pageSize: this.pageSize,
                    limit: this.limit,
                    offset: 0
                });
            }
        });
    }
    /**
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    ngAfterContentInit() {
        this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
        this.listenForColumnInputChanges();
    }
    /**
     * Translates the templates to the column objects
     */
    translateColumns(val) {
        if (val) {
            const arr = val.toArray();
            if (arr.length) {
                this._internalColumns = translateTemplates(arr);
                setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.sortInternalRows();
                this.cd.markForCheck();
            }
        }
    }
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    groupArrayBy(originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        const map = new Map();
        let i = 0;
        originalArray.forEach((item) => {
            const key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        const addGroup = (key, value) => {
            return { key, value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, x => addGroup(x[0], x[1]));
    }
    /*
     * Lifecycle hook that is called when Angular dirty checks a directive.
     */
    ngDoCheck() {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this.sortInternalRows();
            }
            else {
                this._internalRows = [...this.rows];
            }
            // auto group by parent on new update
            this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
            this.recalculatePages();
            this.cd.markForCheck();
        }
    }
    /**
     * Recalc's the sizes of the grid.
     *
     * Updated automatically on changes to:
     *
     *  - Columns
     *  - Rows
     *  - Paging related
     *
     * Also can be manually invoked or upon window resize.
     */
    recalculate() {
        this.recalculateDims();
        this.recalculateColumns();
        this.cd.markForCheck();
    }
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize() {
        this.recalculate();
    }
    /**
     * Recalulcates the column widths based on column width
     * distribution mode and scrollbar offsets.
     */
    recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
        if (!columns)
            return undefined;
        let width = this._innerWidth;
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === ColumnMode.force) {
            forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === ColumnMode.flex) {
            adjustColumnWidths(columns, width);
        }
        return columns;
    }
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
     */
    recalculateDims() {
        const dims = this.dimensionsHelper.getDimensions(this.element);
        this._innerWidth = Math.floor(dims.width);
        if (this.scrollbarV) {
            let height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    }
    /**
     * Recalculates the pages after a update.
     */
    recalculatePages() {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    }
    /**
     * Body triggered a page event.
     */
    onBodyPage({ offset }) {
        // Avoid pagination caming from body events like scroll when the table
        // has no virtualization and the external paging is enable.
        // This means, let's the developer handle pagination by my him(her) self
        if (this.externalPaging && !this.virtualization) {
            return;
        }
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    }
    /**
     * The body triggered a scroll event.
     */
    onBodyScroll(event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    }
    /**
     * The footer triggered a page event.
     */
    onFooterPage(event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    }
    /**
     * Recalculates the sizes of the page
     */
    calcPageSize(val = this.rows) {
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV && this.virtualization) {
            const size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
        if (this.limit !== undefined) {
            return this.limit;
        }
        // otherwise use row length
        if (val) {
            return val.length;
        }
        // other empty :(
        return 0;
    }
    /**
     * Calculates the row count.
     */
    calcRowCount(val = this.rows) {
        if (!this.externalPaging) {
            if (!val)
                return 0;
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else if (this.treeFromRelation != null && this.treeToRelation != null) {
                return this._internalRows.length;
            }
            else {
                return val.length;
            }
        }
        return this.count;
    }
    /**
     * The header triggered a contextmenu event.
     */
    onColumnContextmenu({ event, column }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
    }
    /**
     * The body triggered a contextmenu event.
     */
    onRowContextmenu({ event, row }) {
        this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
    }
    /**
     * The header triggered a column resize event.
     */
    onColumnResize({ column, newValue }) {
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        let idx;
        const cols = this._internalColumns.map((c, i) => {
            c = Object.assign({}, c);
            if (c.$$id === column.$$id) {
                idx = i;
                c.width = newValue;
                // set this so we can force the column
                // width distribution to be to this value
                c.$$oldWidth = newValue;
            }
            return c;
        });
        this.recalculateColumns(cols, idx);
        this._internalColumns = cols;
        this.resize.emit({
            column,
            newValue
        });
    }
    /**
     * The header triggered a column re-order event.
     */
    onColumnReorder({ column, newValue, prevValue }) {
        const cols = this._internalColumns.map(c => {
            return Object.assign({}, c);
        });
        if (this.swapColumns) {
            const prevCol = cols[newValue];
            cols[newValue] = column;
            cols[prevValue] = prevCol;
        }
        else {
            if (newValue > prevValue) {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i < newValue; i++) {
                    cols[i] = cols[i + 1];
                }
                cols[newValue] = movedCol;
            }
            else {
                const movedCol = cols[prevValue];
                for (let i = prevValue; i > newValue; i--) {
                    cols[i] = cols[i - 1];
                }
                cols[newValue] = movedCol;
            }
        }
        this._internalColumns = cols;
        this.reorder.emit({
            column,
            newValue,
            prevValue
        });
    }
    /**
     * The header triggered a column sort event.
     */
    onColumnSort(event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
        this.sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
            this.sortInternalRows();
        }
        // auto group by parent on new update
        this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    }
    /**
     * Toggle all row selection
     */
    onHeaderSelect(event) {
        if (this.bodyComponent && this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            const first = this.bodyComponent.indexes.first;
            const last = this.bodyComponent.indexes.last;
            const allSelected = this.selected.length === last - first;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            const allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                this.selected.push(...this.rows);
            }
        }
        this.select.emit({
            selected: this.selected
        });
    }
    /**
     * A row was selected from body
     */
    onBodySelect(event) {
        this.select.emit(event);
    }
    /**
     * A row was expanded or collapsed for tree
     */
    onTreeAction(event) {
        const row = event.row;
        // TODO: For duplicated items this will not work
        const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
        this.treeAction.emit({ row, rowIndex });
    }
    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
    /**
     * listen for changes to input bindings of all DataTableColumnDirective and
     * trigger the columnTemplates.changes observable to emit
     */
    listenForColumnInputChanges() {
        this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
            if (this.columnTemplates) {
                this.columnTemplates.notifyOnChanges();
            }
        }));
    }
    sortInternalRows() {
        this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8)); };
DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["ngx-datatable"]], contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, false);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    } }, viewQuery: function DatatableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    } }, hostAttrs: [1, "ngx-datatable"], hostVars: 22, hostBindings: function DatatableComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    } }, inputs: { selected: "selected", scrollbarV: "scrollbarV", scrollbarH: "scrollbarH", rowHeight: "rowHeight", columnMode: "columnMode", headerHeight: "headerHeight", footerHeight: "footerHeight", externalPaging: "externalPaging", externalSorting: "externalSorting", loadingIndicator: "loadingIndicator", reorderable: "reorderable", swapColumns: "swapColumns", sortType: "sortType", sorts: "sorts", cssClasses: "cssClasses", messages: "messages", groupExpansionDefault: "groupExpansionDefault", selectAllRowsOnPage: "selectAllRowsOnPage", virtualization: "virtualization", summaryRow: "summaryRow", summaryHeight: "summaryHeight", summaryPosition: "summaryPosition", rowIdentity: "rowIdentity", rows: "rows", groupedRows: "groupedRows", groupRowsBy: "groupRowsBy", columns: "columns", limit: "limit", count: "count", offset: "offset", targetMarkerTemplate: "targetMarkerTemplate", selectionType: "selectionType", rowClass: "rowClass", selectCheck: "selectCheck", displayCheck: "displayCheck", trackByProp: "trackByProp", treeFromRelation: "treeFromRelation", treeToRelation: "treeToRelation" }, outputs: { scroll: "scroll", activate: "activate", select: "select", sort: "sort", page: "page", reorder: "reorder", resize: "resize", tableContextmenu: "tableContextmenu", treeAction: "treeAction" }, decls: 5, vars: 34, consts: [["visibilityObserver", "", 3, "visible"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], [3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], [3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() { return ctx.recalculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) { return ctx.onBodyPage($event); })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) { return ctx.activate.emit($event); })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) { return ctx.onRowContextmenu($event); })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) { return ctx.onBodySelect($event); })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) { return ctx.onBodyScroll($event); })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) { return ctx.onTreeAction($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    } }, directives: function () { return [VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableBodyComponent, DataTableHeaderComponent, DataTableFooterComponent]; }, pipes: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]]; }, styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"], encapsulation: 2, changeDetection: 0 });
DatatableComponent.ctorParameters = () => [
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: DimensionsHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ColumnChangesService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['configuration',] }] }
];
DatatableComponent.propDecorators = {
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupRowsBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarV: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollbarH: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnMode: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalPaging: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    externalSorting: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    limit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    loadingIndicator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    reorderable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    swapColumns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    messages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupExpansionDefault: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    trackByProp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectAllRowsOnPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    virtualization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeFromRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeToRelation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    summaryPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    reorder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    resize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    tableContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    isFixedHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-header',] }],
    isFixedRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.fixed-row',] }],
    isVertScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-vertical',] }],
    isVirtualized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.virtualized',] }],
    isHorScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.scroll-horz',] }],
    isSelectable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.selectable',] }],
    isCheckboxSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.checkbox-selection',] }],
    isCellSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.cell-selection',] }],
    isSingleSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.single-selection',] }],
    isMultiSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-selection',] }],
    isMultiClickSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.multi-click-selection',] }],
    columnTemplates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [DataTableColumnDirective,] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableRowDetailDirective,] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableGroupHeaderDirective,] }],
    footer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [DatatableFooterDirective,] }],
    bodyComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableBodyComponent,] }],
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [DataTableHeaderComponent,] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
};
Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__decorate"])([
    throttleable(5)
], DatatableComponent.prototype, "onWindowResize", null);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-footer-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[visibilityObserver]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { isVisible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.visible']
        }], visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[draggable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { dragX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragEventTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dragModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[resizeable]',
                host: {
                    '[class.resizeable]': 'resizeEnabled'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { resizeEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[orderable]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, { reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], targetChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], draggables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [DraggableDirective, { descendants: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[long-press]' }]
    }], function () { return []; }, { pressEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], duration: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], longPressStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], longPressing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], longPressEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], press: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.press']
        }], isLongPress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.longpress']
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], pressModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-scroller',
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'datatable-scroll'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngx-datatable-group-header-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-group-header' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableGroupHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-header-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-cell-template]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[ngx-datatable-tree-toggle]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-column' }]
    }], function () { return [{ type: ColumnChangesService }]; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], prop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frozenLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], frozenRight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizeable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pipe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], canAutoResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerCheckboxable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTreeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeLevelIndent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryFunc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _cellTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['cellTemplate']
        }], _cellTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnCellDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }], _headerTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['headerTemplate']
        }], _headerTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnHeaderDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }], _treeToggleTemplateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['treeToggleTemplate']
        }], _treeToggleTemplateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableColumnCellTreeToggle, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngx-datatable-row-detail-template]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-row-detail' }]
    }], function () { return []; }, { rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableRowDetailTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], static: true }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ngx-datatable-footer' }]
    }], null, { footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['template']
        }], _templateQuery: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DataTableFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body',
                template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                host: {
                    class: 'datatable-body'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], detailToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bodyWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], bodyHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], emptyMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [ScrollerComponent]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-header',
                template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
                host: {
                    class: 'datatable-header'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dealsWithGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-datatable',
                template: "<div visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: {
                    class: 'ngx-datatable'
                },
                styles: [".ngx-datatable{display:block;justify-content:center;overflow:hidden;position:relative;transform:translateZ(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable :after,.ngx-datatable :before{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{-webkit-overflow-scrolling:touch;overflow-x:auto}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-header-inner,.ngx-datatable .datatable-row-center{-o-flex-flow:row;display:flex;flex-direction:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{display:inline-block;line-height:1.625;overflow-x:hidden;vertical-align:top}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{-webkit-align-items:stretch;align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{display:inline-block;position:relative}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{cursor:pointer;display:inline-block;line-height:100%;vertical-align:middle}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{bottom:0;display:inline-block;padding:0 4px;position:absolute;right:0;top:0;visibility:hidden;width:5px}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{bottom:0;position:absolute;top:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{display:block;position:relative;z-index:10}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;overflow:auto;width:100%}.ngx-datatable .datatable-footer .datatable-footer-inner{align-items:center;display:flex;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{display:inline-block;list-style:none;margin:0;padding:0}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}"]
            }]
    }], function () { return [{ type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: DimensionsHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: ColumnChangesService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['configuration']
            }] }]; }, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarV: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollbarH: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalPaging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], externalSorting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loadingIndicator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], reorderable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], swapColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], messages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupExpansionDefault: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectAllRowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], virtualization: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], summaryPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], reorder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], tableContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupRowsBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], limit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFixedHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fixed-header']
        }], isFixedRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.fixed-row']
        }], isVertScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.scroll-vertical']
        }], isVirtualized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.virtualized']
        }], isHorScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.scroll-horz']
        }], isSelectable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.selectable']
        }], isCheckboxSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.checkbox-selection']
        }], isCellSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.cell-selection']
        }], isSingleSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.single-selection']
        }], isMultiSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.multi-selection']
        }], isMultiClickSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.multi-click-selection']
        }], columnTemplates: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [DataTableColumnDirective]
        }], 
    /**
     * Window resize handler to update sizes.
     */
    onWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], trackByProp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeFromRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeToRelation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableRowDetailDirective]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableGroupHeaderDirective]
        }], footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [DatatableFooterDirective]
        }], bodyComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DataTableBodyComponent]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [DataTableHeaderComponent]
        }] }); })();

class DataTableHeaderCellComponent {
    constructor(cd) {
        this.cd = cd;
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.sortFn = this.onSort.bind(this);
        this.selectFn = this.select.emit.bind(this.select);
        this.cellContext = {
            column: this.column,
            sortDir: this.sortDir,
            sortFn: this.sortFn,
            allRowsSelected: this.allRowsSelected,
            selectFn: this.selectFn
        };
    }
    set allRowsSelected(value) {
        this._allRowsSelected = value;
        this.cellContext.allRowsSelected = value;
    }
    get allRowsSelected() {
        return this._allRowsSelected;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set sorts(val) {
        this._sorts = val;
        this.sortDir = this.calcSortDir(val);
        this.cellContext.sortDir = this.sortDir;
        this.sortClass = this.calcSortClass(this.sortDir);
        this.cd.markForCheck();
    }
    get sorts() {
        return this._sorts;
    }
    get columnCssClasses() {
        let cls = 'datatable-header-cell';
        if (this.column.sortable)
            cls += ' sortable';
        if (this.column.resizeable)
            cls += ' resizeable';
        if (this.column.headerClass) {
            if (typeof this.column.headerClass === 'string') {
                cls += ' ' + this.column.headerClass;
            }
            else if (typeof this.column.headerClass === 'function') {
                const res = this.column.headerClass({
                    column: this.column
                });
                if (typeof res === 'string') {
                    cls += res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true)
                            cls += ` ${k}`;
                    }
                }
            }
        }
        const sortDir = this.sortDir;
        if (sortDir) {
            cls += ` sort-active sort-${sortDir}`;
        }
        return cls;
    }
    get name() {
        // guaranteed to have a value by setColumnDefaults() in column-helper.ts
        return this.column.headerTemplate === undefined ? this.column.name : undefined;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get width() {
        return this.column.width;
    }
    get isCheckboxable() {
        return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
    }
    onContextmenu($event) {
        this.columnContextmenu.emit({ event: $event, column: this.column });
    }
    ngOnInit() {
        this.sortClass = this.calcSortClass(this.sortDir);
    }
    calcSortDir(sorts) {
        if (sorts && this.column) {
            const sort = sorts.find((s) => {
                return s.prop === this.column.prop;
            });
            if (sort)
                return sort.dir;
        }
    }
    onSort() {
        if (!this.column.sortable)
            return;
        const newValue = nextSortDir(this.sortType, this.sortDir);
        this.sort.emit({
            column: this.column,
            prevValue: this.sortDir,
            newValue
        });
    }
    calcSortClass(sortDir) {
        if (!this.cellContext.column.sortable)
            return;
        if (sortDir === SortDirection.asc) {
            return `sort-btn sort-asc ${this.sortAscendingIcon}`;
        }
        else if (sortDir === SortDirection.desc) {
            return `sort-btn sort-desc ${this.sortDescendingIcon}`;
        }
        else {
            return `sort-btn ${this.sortUnsetIcon}`;
        }
    }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) { return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableHeaderCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableHeaderCellComponent, selectors: [["datatable-header-cell"]], hostAttrs: [1, "datatable-header-cell"], hostVars: 11, hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px")("height", ctx.headerHeight, "px");
    } }, inputs: { allRowsSelected: "allRowsSelected", column: "column", sorts: "sorts", sortType: "sortType", sortAscendingIcon: "sortAscendingIcon", sortDescendingIcon: "sortDescendingIcon", sortUnsetIcon: "sortUnsetIcon", isTarget: "isTarget", targetMarkerTemplate: "targetMarkerTemplate", targetMarkerContext: "targetMarkerContext", selectionType: "selectionType", headerHeight: "headerHeight" }, outputs: { sort: "sort", select: "select", columnContextmenu: "columnContextmenu" }, decls: 6, vars: 6, consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]], template: function DataTableHeaderCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableHeaderCellComponent_4_Template, 1, 2, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() { return ctx.onSort(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableHeaderCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableHeaderCellComponent.propDecorators = {
    sortType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortAscendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortDescendingIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sortUnsetIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isTarget: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    targetMarkerContext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    allRowsSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    headerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.title',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-header-cell',
                template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
                host: {
                    class: 'datatable-header-cell'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columnContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], allRowsSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.title']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.maxWidth.px']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], sortType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortAscendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortDescendingIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sortUnsetIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isTarget: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targetMarkerContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) { return new (t || DataTableFooterComponent)(); };
DataTableFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableFooterComponent, selectors: [["datatable-footer"]], hostAttrs: [1, "datatable-footer"], inputs: { selectedCount: "selectedCount", footerHeight: "footerHeight", rowCount: "rowCount", pageSize: "pageSize", offset: "offset", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon", totalMessage: "totalMessage", footerTemplate: "footerTemplate", selectedMessage: "selectedMessage" }, outputs: { page: "page" }, decls: 4, vars: 8, consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]], template: function DataTableFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.selectedMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], DataTablePagerComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pageSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    totalMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedCount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectedMessage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { selectedCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], footerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowCount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTablePagerComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._count = 0;
        this._page = 1;
        this._size = 0;
    }
    set size(val) {
        this._size = val;
        this.pages = this.calcPages();
    }
    get size() {
        return this._size;
    }
    set count(val) {
        this._count = val;
        this.pages = this.calcPages();
    }
    get count() {
        return this._count;
    }
    set page(val) {
        this._page = val;
        this.pages = this.calcPages();
    }
    get page() {
        return this._page;
    }
    get totalPages() {
        const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
        return Math.max(count || 0, 1);
    }
    canPrevious() {
        return this.page > 1;
    }
    canNext() {
        return this.page < this.totalPages;
    }
    prevPage() {
        this.selectPage(this.page - 1);
    }
    nextPage() {
        this.selectPage(this.page + 1);
    }
    selectPage(page) {
        if (page > 0 && page <= this.totalPages && page !== this.page) {
            this.page = page;
            this.change.emit({
                page
            });
        }
    }
    calcPages(page) {
        const pages = [];
        let startPage = 1;
        let endPage = this.totalPages;
        const maxSize = 5;
        const isMaxSized = maxSize < this.totalPages;
        page = page || this.page;
        if (isMaxSized) {
            startPage = page - Math.floor(maxSize / 2);
            endPage = page + Math.floor(maxSize / 2);
            if (startPage < 1) {
                startPage = 1;
                endPage = Math.min(startPage + maxSize - 1, this.totalPages);
            }
            else if (endPage > this.totalPages) {
                startPage = Math.max(this.totalPages - maxSize + 1, 1);
                endPage = this.totalPages;
            }
        }
        for (let num = startPage; num <= endPage; num++) {
            pages.push({
                number: num,
                text: num
            });
        }
        return pages;
    }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) { return new (t || DataTablePagerComponent)(); };
DataTablePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTablePagerComponent, selectors: [["datatable-pager"]], hostAttrs: [1, "datatable-pager"], inputs: { size: "size", count: "count", page: "page", pagerLeftArrowIcon: "pagerLeftArrowIcon", pagerRightArrowIcon: "pagerRightArrowIcon", pagerPreviousIcon: "pagerPreviousIcon", pagerNextIcon: "pagerNextIcon" }, outputs: { change: "change" }, decls: 14, vars: 21, consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]], template: function DataTablePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() { return ctx.selectPage(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() { return ctx.prevPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() { return ctx.selectPage(ctx.totalPages); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], encapsulation: 2, changeDetection: 0 });
DataTablePagerComponent.propDecorators = {
    pagerLeftArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerRightArrowIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerPreviousIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    pagerNextIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-pager',
                template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
                host: {
                    class: 'datatable-pager'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], count: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerLeftArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerRightArrowIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerPreviousIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pagerNextIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class ProgressBarComponent {
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["datatable-progress"]], decls: 3, vars: 0, consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-progress',
                template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();

var Keys;
(function (Keys) {
    Keys[Keys["up"] = 38] = "up";
    Keys[Keys["down"] = 40] = "down";
    Keys[Keys["return"] = 13] = "return";
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["left"] = 37] = "left";
    Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));

class DataTableBodyRowComponent {
    constructor(differs, scrollbarHelper, cd, element) {
        this.differs = differs;
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
        this.treeStatus = 'collapsed';
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._groupStyles = {
            left: {},
            center: {},
            right: {}
        };
        this._element = element.nativeElement;
        this._rowDiffer = differs.find({}).create();
    }
    set columns(val) {
        this._columns = val;
        this.recalculateColumns(val);
        this.buildStylesByGroup();
    }
    get columns() {
        return this._columns;
    }
    set innerWidth(val) {
        if (this._columns) {
            const colByPin = columnsByPin(this._columns);
            this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        }
        this._innerWidth = val;
        this.recalculateColumns();
        this.buildStylesByGroup();
    }
    get innerWidth() {
        return this._innerWidth;
    }
    set offsetX(val) {
        this._offsetX = val;
        this.buildStylesByGroup();
    }
    get offsetX() {
        return this._offsetX;
    }
    get cssClass() {
        let cls = 'datatable-body-row';
        if (this.isSelected) {
            cls += ' active';
        }
        if (this.rowIndex % 2 !== 0) {
            cls += ' datatable-row-odd';
        }
        if (this.rowIndex % 2 === 0) {
            cls += ' datatable-row-even';
        }
        if (this.rowClass) {
            const res = this.rowClass(this.row);
            if (typeof res === 'string') {
                cls += ` ${res}`;
            }
            else if (typeof res === 'object') {
                const keys = Object.keys(res);
                for (const k of keys) {
                    if (res[k] === true) {
                        cls += ` ${k}`;
                    }
                }
            }
        }
        return cls;
    }
    get columnsTotalWidths() {
        return this._columnGroupWidths.total;
    }
    ngDoCheck() {
        if (this._rowDiffer.diff(this.row)) {
            this.cd.markForCheck();
        }
    }
    trackByGroups(index, colGroup) {
        return colGroup.type;
    }
    columnTrackingFn(index, column) {
        return column.$$id;
    }
    buildStylesByGroup() {
        this._groupStyles.left = this.calcStylesByGroup('left');
        this._groupStyles.center = this.calcStylesByGroup('center');
        this._groupStyles.right = this.calcStylesByGroup('right');
        this.cd.markForCheck();
    }
    calcStylesByGroup(group) {
        const widths = this._columnGroupWidths;
        const offsetX = this.offsetX;
        const styles = {
            width: `${widths[group]}px`
        };
        if (group === 'left') {
            translateXY(styles, offsetX, 0);
        }
        else if (group === 'right') {
            const bodyWidth = parseInt(this.innerWidth + '', 0);
            const totalDiff = widths.total - bodyWidth;
            const offsetDiff = totalDiff - offsetX;
            const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
            translateXY(styles, offset, 0);
        }
        return styles;
    }
    onActivate(event, index) {
        event.cellIndex = index;
        event.rowElement = this._element;
        this.activate.emit(event);
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetRow = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetRow) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                rowElement: this._element
            });
        }
    }
    onMouseenter(event) {
        this.activate.emit({
            type: 'mouseenter',
            event,
            row: this.row,
            rowElement: this._element
        });
    }
    recalculateColumns(val = this.columns) {
        this._columns = val;
        const colsByPin = columnsByPin(this._columns);
        this._columnsByPin = columnsByPinArr(this._columns);
        this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
    }
    onTreeAction() {
        this.treeAction.emit();
    }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) { return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DataTableBodyRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyRowComponent, selectors: [["datatable-body-row"]], hostVars: 6, hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) { return ctx.onMouseenter($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.columnsTotalWidths, "px")("height", ctx.rowHeight, "px");
    } }, inputs: { treeStatus: "treeStatus", columns: "columns", innerWidth: "innerWidth", offsetX: "offsetX", expanded: "expanded", rowClass: "rowClass", row: "row", group: "group", isSelected: "isSelected", rowIndex: "rowIndex", displayCheck: "displayCheck", rowHeight: "rowHeight" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 1, vars: 2, consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]], template: function DataTableBodyRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], DataTableBodyCellComponent]; }, encapsulation: 2, changeDetection: 0 });
DataTableBodyRowComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] },
    { type: ScrollbarHelper, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
DataTableBodyRowComponent.propDecorators = {
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height.px',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columnsTotalWidths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }],
    onMouseenter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseenter', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body-row',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }, { type: ScrollbarHelper, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], columnsTotalWidths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], onMouseenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter', ['$event']]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableRowWrapperComponent {
    constructor(cd, differs) {
        this.cd = cd;
        this.differs = differs;
        this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this._expanded = false;
        this.groupContext = {
            group: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowContext = {
            row: this.row,
            expanded: this.expanded,
            rowIndex: this.rowIndex
        };
        this.rowDiffer = differs.find({}).create();
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.rowContext.rowIndex = val;
        this.groupContext.rowIndex = val;
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set expanded(val) {
        this._expanded = val;
        this.groupContext.expanded = val;
        this.rowContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    ngDoCheck() {
        if (this.rowDiffer.diff(this.row)) {
            this.rowContext.row = this.row;
            this.groupContext.group = this.row;
            this.cd.markForCheck();
        }
    }
    onContextmenu($event) {
        this.rowContextmenu.emit({ event: $event, row: this.row });
    }
    getGroupHeaderStyle() {
        const styles = {};
        styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
        styles['backface-visibility'] = 'hidden';
        styles['width'] = this.innerWidth;
        return styles;
    }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) { return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"])); };
DataTableRowWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableRowWrapperComponent, selectors: [["datatable-row-wrapper"]], hostAttrs: [1, "datatable-row-wrapper"], hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) { return ctx.onContextmenu($event); });
    } }, inputs: { rowIndex: "rowIndex", expanded: "expanded", innerWidth: "innerWidth", rowDetail: "rowDetail", groupHeader: "groupHeader", offsetX: "offsetX", detailRowHeight: "detailRowHeight", row: "row", groupedRows: "groupedRows" }, outputs: { rowContextmenu: "rowContextmenu" }, ngContentSelectors: _c0, decls: 3, vars: 3, consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]], template: function DataTableRowWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableRowWrapperComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }
];
DataTableRowWrapperComponent.propDecorators = {
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowDetail: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    detailRowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    groupedRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onContextmenu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-row-wrapper',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
                host: {
                    class: 'datatable-row-wrapper'
                }
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"] }]; }, { rowContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onContextmenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['contextmenu', ['$event']]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowDetail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], detailRowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], groupedRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class DataTableBodyCellComponent {
    constructor(element, cd) {
        this.cd = cd;
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this)
        };
        this._element = element.nativeElement;
    }
    set group(group) {
        this._group = group;
        this.cellContext.group = group;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get group() {
        return this._group;
    }
    set rowHeight(val) {
        this._rowHeight = val;
        this.cellContext.rowHeight = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowHeight() {
        return this._rowHeight;
    }
    set isSelected(val) {
        this._isSelected = val;
        this.cellContext.isSelected = val;
        this.cd.markForCheck();
    }
    get isSelected() {
        return this._isSelected;
    }
    set expanded(val) {
        this._expanded = val;
        this.cellContext.expanded = val;
        this.cd.markForCheck();
    }
    get expanded() {
        return this._expanded;
    }
    set rowIndex(val) {
        this._rowIndex = val;
        this.cellContext.rowIndex = val;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get rowIndex() {
        return this._rowIndex;
    }
    set column(column) {
        this._column = column;
        this.cellContext.column = column;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get column() {
        return this._column;
    }
    set row(row) {
        this._row = row;
        this.cellContext.row = row;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get row() {
        return this._row;
    }
    set sorts(val) {
        this._sorts = val;
        this.calcSortDir = this.calcSortDir(val);
    }
    get sorts() {
        return this._sorts;
    }
    set treeStatus(status) {
        if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
            this._treeStatus = 'collapsed';
        }
        else {
            this._treeStatus = status;
        }
        this.cellContext.treeStatus = this._treeStatus;
        this.checkValueUpdates();
        this.cd.markForCheck();
    }
    get treeStatus() {
        return this._treeStatus;
    }
    get columnCssClasses() {
        let cls = 'datatable-body-cell';
        if (this.column.cellClass) {
            if (typeof this.column.cellClass === 'string') {
                cls += ' ' + this.column.cellClass;
            }
            else if (typeof this.column.cellClass === 'function') {
                const res = this.column.cellClass({
                    row: this.row,
                    group: this.group,
                    column: this.column,
                    value: this.value,
                    rowHeight: this.rowHeight
                });
                if (typeof res === 'string') {
                    cls += ' ' + res;
                }
                else if (typeof res === 'object') {
                    const keys = Object.keys(res);
                    for (const k of keys) {
                        if (res[k] === true) {
                            cls += ` ${k}`;
                        }
                    }
                }
            }
        }
        if (!this.sortDir) {
            cls += ' sort-active';
        }
        if (this.isFocused) {
            cls += ' active';
        }
        if (this.sortDir === SortDirection.asc) {
            cls += ' sort-asc';
        }
        if (this.sortDir === SortDirection.desc) {
            cls += ' sort-desc';
        }
        return cls;
    }
    get width() {
        return this.column.width;
    }
    get minWidth() {
        return this.column.minWidth;
    }
    get maxWidth() {
        return this.column.maxWidth;
    }
    get height() {
        const height = this.rowHeight;
        if (isNaN(height)) {
            return height;
        }
        return height + 'px';
    }
    ngDoCheck() {
        this.checkValueUpdates();
    }
    ngOnDestroy() {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
    }
    checkValueUpdates() {
        let value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            const val = this.column.$$valueGetter(this.row, this.column.prop);
            const userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    }
    onFocus() {
        this.isFocused = true;
    }
    onBlur() {
        this.isFocused = false;
    }
    onClick(event) {
        this.activate.emit({
            type: 'click',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onDblClick(event) {
        this.activate.emit({
            type: 'dblclick',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element
        });
    }
    onKeyDown(event) {
        const keyCode = event.keyCode;
        const isTargetCell = event.target === this._element;
        const isAction = keyCode === Keys.return ||
            keyCode === Keys.down ||
            keyCode === Keys.up ||
            keyCode === Keys.left ||
            keyCode === Keys.right;
        if (isAction && isTargetCell) {
            event.preventDefault();
            event.stopPropagation();
            this.activate.emit({
                type: 'keydown',
                event,
                row: this.row,
                group: this.group,
                rowHeight: this.rowHeight,
                column: this.column,
                value: this.value,
                cellElement: this._element
            });
        }
    }
    onCheckboxChange(event) {
        this.activate.emit({
            type: 'checkbox',
            event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    }
    calcSortDir(sorts) {
        if (!sorts) {
            return;
        }
        const sort = sorts.find((s) => {
            return s.prop === this.column.prop;
        });
        if (sort) {
            return sort.dir;
        }
    }
    stripHtml(html) {
        if (!html.replace) {
            return html;
        }
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    }
    onTreeAction() {
        this.treeAction.emit(this.row);
    }
    calcLeftMargin(column, row) {
        const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) { return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DataTableBodyCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableBodyCellComponent, selectors: [["datatable-body-cell"]], viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    } }, hostVars: 10, hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) { return ctx.onClick($event); })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) { return ctx.onDblClick($event); })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    } }, inputs: { group: "group", rowHeight: "rowHeight", isSelected: "isSelected", expanded: "expanded", rowIndex: "rowIndex", column: "column", row: "row", sorts: "sorts", treeStatus: "treeStatus", displayCheck: "displayCheck" }, outputs: { activate: "activate", treeAction: "treeAction" }, decls: 5, vars: 6, consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]], template: function DataTableBodyCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataTableBodyCellComponent_4_Template, 2, 2, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"]], encapsulation: 2, changeDetection: 0 });
DataTableBodyCellComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
DataTableBodyCellComponent.propDecorators = {
    displayCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    group: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    column: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    row: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    sorts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    treeStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    treeAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    cellTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true },] }],
    columnCssClasses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.width.px',] }],
    minWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.minWidth.px',] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.maxWidth.px',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click', ['$event'],] }],
    onDblClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['dblclick', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown', ['$event'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-body-cell',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], treeAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], row: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sorts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], treeStatus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columnCssClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.minWidth.px']
        }], maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.maxWidth.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], onDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['dblclick', ['$event']]
        }], onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }], displayCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cellTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cellTemplate', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true }]
        }] }); })();

function selectRows(selected, row, comparefn) {
    const selectedIndex = comparefn(row, selected);
    if (selectedIndex > -1) {
        selected.splice(selectedIndex, 1);
    }
    else {
        selected.push(row);
    }
    return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
    const reverse = index < prevIndex;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const greater = i >= prevIndex && i <= index;
        const lesser = i <= prevIndex && i >= index;
        let range = { start: 0, end: 0 };
        if (reverse) {
            range = {
                start: index,
                end: prevIndex
            };
        }
        else {
            range = {
                start: prevIndex,
                end: index + 1
            };
        }
        if ((reverse && lesser) || (!reverse && greater)) {
            // if in the positive range to be added to `selected`, and
            // not already in the selected array, add it
            if (i >= range.start && i <= range.end) {
                selected.push(row);
            }
        }
    }
    return selected;
}

class DataTableSelectionComponent {
    constructor() {
        this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    selectRow(event, index, row) {
        if (!this.selectEnabled)
            return;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const multi = this.selectionType === SelectionType.multi;
        const multiClick = this.selectionType === SelectionType.multiClick;
        let selected = [];
        if (multi || chkbox || multiClick) {
            if (event.shiftKey) {
                selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
            }
            else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
                selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
            }
            else {
                selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
            }
        }
        else {
            selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
        }
        if (typeof this.selectCheck === 'function') {
            selected = selected.filter(this.selectCheck.bind(this));
        }
        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
        this.prevIndex = index;
        this.select.emit({
            selected
        });
    }
    onActivate(model, index) {
        const { type, event, row } = model;
        const chkbox = this.selectionType === SelectionType.checkbox;
        const select = (!chkbox && (type === 'click' || type === 'dblclick')) || (chkbox && type === 'checkbox');
        if (select) {
            this.selectRow(event, index, row);
        }
        else if (type === 'keydown') {
            if (event.keyCode === Keys.return) {
                this.selectRow(event, index, row);
            }
            else {
                this.onKeyboardFocus(model);
            }
        }
        this.activate.emit(model);
    }
    onKeyboardFocus(model) {
        const { keyCode } = model.event;
        const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
        if (shouldFocus) {
            const isCellSelection = this.selectionType === SelectionType.cell;
            if (!model.cellElement || !isCellSelection) {
                this.focusRow(model.rowElement, keyCode);
            }
            else if (isCellSelection) {
                this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
            }
        }
    }
    focusRow(rowElement, keyCode) {
        const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
        if (nextRowElement)
            nextRowElement.focus();
    }
    getPrevNextRow(rowElement, keyCode) {
        const parentElement = rowElement.parentElement;
        if (parentElement) {
            let focusElement;
            if (keyCode === Keys.up) {
                focusElement = parentElement.previousElementSibling;
            }
            else if (keyCode === Keys.down) {
                focusElement = parentElement.nextElementSibling;
            }
            if (focusElement && focusElement.children.length) {
                return focusElement.children[0];
            }
        }
    }
    focusCell(cellElement, rowElement, keyCode, cellIndex) {
        let nextCellElement;
        if (keyCode === Keys.left) {
            nextCellElement = cellElement.previousElementSibling;
        }
        else if (keyCode === Keys.right) {
            nextCellElement = cellElement.nextElementSibling;
        }
        else if (keyCode === Keys.up || keyCode === Keys.down) {
            const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
            if (nextRowElement) {
                const children = nextRowElement.getElementsByClassName('datatable-body-cell');
                if (children.length)
                    nextCellElement = children[cellIndex];
            }
        }
        if (nextCellElement)
            nextCellElement.focus();
    }
    getRowSelected(row) {
        return this.getRowSelectedIdx(row, this.selected) > -1;
    }
    getRowSelectedIdx(row, selected) {
        if (!selected || !selected.length)
            return -1;
        const rowId = this.rowIdentity(row);
        return selected.findIndex(r => {
            const id = this.rowIdentity(r);
            return id === rowId;
        });
    }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) { return new (t || DataTableSelectionComponent)(); };
DataTableSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSelectionComponent, selectors: [["datatable-selection"]], inputs: { rows: "rows", selected: "selected", selectEnabled: "selectEnabled", selectionType: "selectionType", rowIdentity: "rowIdentity", selectCheck: "selectCheck" }, outputs: { activate: "activate", select: "select" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DataTableSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
DataTableSelectionComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectionType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowIdentity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    selectCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    activate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-selection',
                template: ` <ng-content></ng-content> `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { activate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowIdentity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) { return new (t || DataTableSummaryRowComponent)(); };
DataTableSummaryRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataTableSummaryRowComponent, selectors: [["datatable-summary-row"]], hostAttrs: [1, "datatable-summary-row"], inputs: { rows: "rows", columns: "columns", rowHeight: "rowHeight", offsetX: "offsetX", innerWidth: "innerWidth" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]], template: function DataTableSummaryRowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], DataTableBodyRowComponent], encapsulation: 2 });
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    columns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    offsetX: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    innerWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            }]
    }], function () { return []; }, { rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], innerWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class NgxDatatableModule {
    /**
     * Configure global configuration via INgxDatatableConfig
     * @param configuration
     */
    static forRoot(configuration) {
        return {
            ngModule: NgxDatatableModule,
            providers: [{ provide: 'configuration', useValue: configuration }]
        };
    }
}
NgxDatatableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxDatatableModule });
NgxDatatableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxDatatableModule_Factory(t) { return new (t || NgxDatatableModule)(); }, providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxDatatableModule, { declarations: function () { return [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
                declarations: [
                    DataTableFooterTemplateDirective,
                    VisibilityDirective,
                    DraggableDirective,
                    ResizeableDirective,
                    OrderableDirective,
                    LongPressDirective,
                    ScrollerComponent,
                    DatatableComponent,
                    DataTableColumnDirective,
                    DataTableHeaderComponent,
                    DataTableHeaderCellComponent,
                    DataTableBodyComponent,
                    DataTableFooterComponent,
                    DataTablePagerComponent,
                    ProgressBarComponent,
                    DataTableBodyRowComponent,
                    DataTableRowWrapperComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableBodyCellComponent,
                    DataTableSelectionComponent,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DatatableFooterDirective,
                    DatatableGroupHeaderTemplateDirective,
                    DataTableSummaryRowComponent
                ],
                exports: [
                    DatatableComponent,
                    DatatableRowDetailDirective,
                    DatatableGroupHeaderDirective,
                    DatatableRowDetailTemplateDirective,
                    DataTableColumnDirective,
                    DataTableColumnHeaderDirective,
                    DataTableColumnCellDirective,
                    DataTableColumnCellTreeToggle,
                    DataTableFooterTemplateDirective,
                    DatatableFooterDirective,
                    DataTablePagerComponent,
                    DatatableGroupHeaderTemplateDirective
                ]
            }]
    }], null, null); })();

var ClickType;
(function (ClickType) {
    ClickType["single"] = "single";
    ClickType["double"] = "double";
})(ClickType || (ClickType = {}));

if (typeof document !== 'undefined' && !document.elementsFromPoint) {
    document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
    const elements = [];
    const previousPointerEvents = [];
    let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
    let i;
    let d;
    //if (document === undefined) return elements;
    // get all elements via elementFromPoint, and remove them from hit-testing in order
    while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
        // push the element and its current style
        elements.push(current);
        previousPointerEvents.push({
            value: current.style.getPropertyValue('pointer-events'),
            priority: current.style.getPropertyPriority('pointer-events')
        });
        // add "pointer-events: none", to get to the underlying element
        current.style.setProperty('pointer-events', 'none', 'important');
    }
    // restore the previous pointer-events values
    for (i = previousPointerEvents.length; (d = previousPointerEvents[--i]);) {
        elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
    }
    // return our results
    return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=swimlane-ngx-datatable.js.map

/***/ }),

/***/ "./node_modules/@swimlane/ngx-datatable/node_modules/tslib/tslib.es6.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/list.js/src/add-async.js":
/*!***********************************************!*\
  !*** ./node_modules/list.js/src/add-async.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(list) {
  var addAsync = function(values, callback, items) {
    var valuesToAdd = values.splice(0, 50);
    items = items || [];
    items = items.concat(list.add(valuesToAdd));
    if (values.length > 0) {
      setTimeout(function() {
        addAsync(values, callback, items);
      }, 1);
    } else {
      list.update();
      callback(items);
    }
  };
  return addAsync;
};


/***/ }),

/***/ "./node_modules/list.js/src/filter.js":
/*!********************************************!*\
  !*** ./node_modules/list.js/src/filter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(list) {

  // Add handlers
  list.handlers.filterStart = list.handlers.filterStart || [];
  list.handlers.filterComplete = list.handlers.filterComplete || [];

  return function(filterFunction) {
    list.trigger('filterStart');
    list.i = 1; // Reset paging
    list.reset.filter();
    if (filterFunction === undefined) {
      list.filtered = false;
    } else {
      list.filtered = true;
      var is = list.items;
      for (var i = 0, il = is.length; i < il; i++) {
        var item = is[i];
        if (filterFunction(item)) {
          item.filtered = true;
        } else {
          item.filtered = false;
        }
      }
    }
    list.update();
    list.trigger('filterComplete');
    return list.visibleItems;
  };
};


/***/ }),

/***/ "./node_modules/list.js/src/fuzzy-search.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/fuzzy-search.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var classes = __webpack_require__(/*! ./utils/classes */ "./node_modules/list.js/src/utils/classes.js"),
  events = __webpack_require__(/*! ./utils/events */ "./node_modules/list.js/src/utils/events.js"),
  extend = __webpack_require__(/*! ./utils/extend */ "./node_modules/list.js/src/utils/extend.js"),
  toString = __webpack_require__(/*! ./utils/to-string */ "./node_modules/list.js/src/utils/to-string.js"),
  getByClass = __webpack_require__(/*! ./utils/get-by-class */ "./node_modules/list.js/src/utils/get-by-class.js"),
  fuzzy = __webpack_require__(/*! ./utils/fuzzy */ "./node_modules/list.js/src/utils/fuzzy.js");

module.exports = function(list, options) {
  options = options || {};

  options = extend({
    location: 0,
    distance: 100,
    threshold: 0.4,
    multiSearch: true,
    searchClass: 'fuzzy-search'
  }, options);



  var fuzzySearch = {
    search: function(searchString, columns) {
      // Substract arguments from the searchString or put searchString as only argument
      var searchArguments = options.multiSearch ? searchString.replace(/ +$/, '').split(/ +/) : [searchString];

      for (var k = 0, kl = list.items.length; k < kl; k++) {
        fuzzySearch.item(list.items[k], columns, searchArguments);
      }
    },
    item: function(item, columns, searchArguments) {
      var found = true;
      for(var i = 0; i < searchArguments.length; i++) {
        var foundArgument = false;
        for (var j = 0, jl = columns.length; j < jl; j++) {
          if (fuzzySearch.values(item.values(), columns[j], searchArguments[i])) {
            foundArgument = true;
          }
        }
        if(!foundArgument) {
          found = false;
        }
      }
      item.found = found;
    },
    values: function(values, value, searchArgument) {
      if (values.hasOwnProperty(value)) {
        var text = toString(values[value]).toLowerCase();

        if (fuzzy(text, searchArgument, options)) {
          return true;
        }
      }
      return false;
    }
  };


  events.bind(getByClass(list.listContainer, options.searchClass), 'keyup', function(e) {
    var target = e.target || e.srcElement; // IE have srcElement
    list.search(target.value, fuzzySearch.search);
  });

  return function(str, columns) {
    list.search(str, columns, fuzzySearch.search);
  };
};


/***/ }),

/***/ "./node_modules/list.js/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/list.js/src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var naturalSort = __webpack_require__(/*! string-natural-compare */ "./node_modules/string-natural-compare/natural-compare.js"),
  getByClass = __webpack_require__(/*! ./utils/get-by-class */ "./node_modules/list.js/src/utils/get-by-class.js"),
  extend = __webpack_require__(/*! ./utils/extend */ "./node_modules/list.js/src/utils/extend.js"),
  indexOf = __webpack_require__(/*! ./utils/index-of */ "./node_modules/list.js/src/utils/index-of.js"),
  events = __webpack_require__(/*! ./utils/events */ "./node_modules/list.js/src/utils/events.js"),
  toString = __webpack_require__(/*! ./utils/to-string */ "./node_modules/list.js/src/utils/to-string.js"),
  classes = __webpack_require__(/*! ./utils/classes */ "./node_modules/list.js/src/utils/classes.js"),
  getAttribute = __webpack_require__(/*! ./utils/get-attribute */ "./node_modules/list.js/src/utils/get-attribute.js"),
  toArray = __webpack_require__(/*! ./utils/to-array */ "./node_modules/list.js/src/utils/to-array.js");

module.exports = function(id, options, values) {

  var self = this,
    init,
    Item = __webpack_require__(/*! ./item */ "./node_modules/list.js/src/item.js")(self),
    addAsync = __webpack_require__(/*! ./add-async */ "./node_modules/list.js/src/add-async.js")(self),
    initPagination = __webpack_require__(/*! ./pagination */ "./node_modules/list.js/src/pagination.js")(self);

  init = {
    start: function() {
      self.listClass      = "list";
      self.searchClass    = "search";
      self.sortClass      = "sort";
      self.page           = 10000;
      self.i              = 1;
      self.items          = [];
      self.visibleItems   = [];
      self.matchingItems  = [];
      self.searched       = false;
      self.filtered       = false;
      self.searchColumns  = undefined;
      self.handlers       = { 'updated': [] };
      self.valueNames     = [];
      self.utils          = {
        getByClass: getByClass,
        extend: extend,
        indexOf: indexOf,
        events: events,
        toString: toString,
        naturalSort: naturalSort,
        classes: classes,
        getAttribute: getAttribute,
        toArray: toArray
      };

      self.utils.extend(self, options);

      self.listContainer = (typeof(id) === 'string') ? document.getElementById(id) : id;
      if (!self.listContainer) { return; }
      self.list       = getByClass(self.listContainer, self.listClass, true);

      self.parse        = __webpack_require__(/*! ./parse */ "./node_modules/list.js/src/parse.js")(self);
      self.templater    = __webpack_require__(/*! ./templater */ "./node_modules/list.js/src/templater.js")(self);
      self.search       = __webpack_require__(/*! ./search */ "./node_modules/list.js/src/search.js")(self);
      self.filter       = __webpack_require__(/*! ./filter */ "./node_modules/list.js/src/filter.js")(self);
      self.sort         = __webpack_require__(/*! ./sort */ "./node_modules/list.js/src/sort.js")(self);
      self.fuzzySearch  = __webpack_require__(/*! ./fuzzy-search */ "./node_modules/list.js/src/fuzzy-search.js")(self, options.fuzzySearch);

      this.handlers();
      this.items();
      this.pagination();

      self.update();
    },
    handlers: function() {
      for (var handler in self.handlers) {
        if (self[handler]) {
          self.on(handler, self[handler]);
        }
      }
    },
    items: function() {
      self.parse(self.list);
      if (values !== undefined) {
        self.add(values);
      }
    },
    pagination: function() {
      if (options.pagination !== undefined) {
        if (options.pagination === true) {
          options.pagination = [{}];
        }
        if (options.pagination[0] === undefined){
          options.pagination = [options.pagination];
        }
        for (var i = 0, il = options.pagination.length; i < il; i++) {
          initPagination(options.pagination[i]);
        }
      }
    }
  };

  /*
  * Re-parse the List, use if html have changed
  */
  this.reIndex = function() {
    self.items          = [];
    self.visibleItems   = [];
    self.matchingItems  = [];
    self.searched       = false;
    self.filtered       = false;
    self.parse(self.list);
  };

  this.toJSON = function() {
    var json = [];
    for (var i = 0, il = self.items.length; i < il; i++) {
      json.push(self.items[i].values());
    }
    return json;
  };


  /*
  * Add object to list
  */
  this.add = function(values, callback) {
    if (values.length === 0) {
      return;
    }
    if (callback) {
      addAsync(values, callback);
      return;
    }
    var added = [],
      notCreate = false;
    if (values[0] === undefined){
      values = [values];
    }
    for (var i = 0, il = values.length; i < il; i++) {
      var item = null;
      notCreate = (self.items.length > self.page) ? true : false;
      item = new Item(values[i], undefined, notCreate);
      self.items.push(item);
      added.push(item);
    }
    self.update();
    return added;
  };

	this.show = function(i, page) {
		this.i = i;
		this.page = page;
		self.update();
    return self;
	};

  /* Removes object from list.
  * Loops through the list and removes objects where
  * property "valuename" === value
  */
  this.remove = function(valueName, value, options) {
    var found = 0;
    for (var i = 0, il = self.items.length; i < il; i++) {
      if (self.items[i].values()[valueName] == value) {
        self.templater.remove(self.items[i], options);
        self.items.splice(i,1);
        il--;
        i--;
        found++;
      }
    }
    self.update();
    return found;
  };

  /* Gets the objects in the list which
  * property "valueName" === value
  */
  this.get = function(valueName, value) {
    var matchedItems = [];
    for (var i = 0, il = self.items.length; i < il; i++) {
      var item = self.items[i];
      if (item.values()[valueName] == value) {
        matchedItems.push(item);
      }
    }
    return matchedItems;
  };

  /*
  * Get size of the list
  */
  this.size = function() {
    return self.items.length;
  };

  /*
  * Removes all items from the list
  */
  this.clear = function() {
    self.templater.clear();
    self.items = [];
    return self;
  };

  this.on = function(event, callback) {
    self.handlers[event].push(callback);
    return self;
  };

  this.off = function(event, callback) {
    var e = self.handlers[event];
    var index = indexOf(e, callback);
    if (index > -1) {
      e.splice(index, 1);
    }
    return self;
  };

  this.trigger = function(event) {
    var i = self.handlers[event].length;
    while(i--) {
      self.handlers[event][i](self);
    }
    return self;
  };

  this.reset = {
    filter: function() {
      var is = self.items,
        il = is.length;
      while (il--) {
        is[il].filtered = false;
      }
      return self;
    },
    search: function() {
      var is = self.items,
        il = is.length;
      while (il--) {
        is[il].found = false;
      }
      return self;
    }
  };

  this.update = function() {
    var is = self.items,
			il = is.length;

    self.visibleItems = [];
    self.matchingItems = [];
    self.templater.clear();
    for (var i = 0; i < il; i++) {
      if (is[i].matching() && ((self.matchingItems.length+1) >= self.i && self.visibleItems.length < self.page)) {
        is[i].show();
        self.visibleItems.push(is[i]);
        self.matchingItems.push(is[i]);
      } else if (is[i].matching()) {
        self.matchingItems.push(is[i]);
        is[i].hide();
      } else {
        is[i].hide();
      }
    }
    self.trigger('updated');
    return self;
  };

  init.start();
};


/***/ }),

/***/ "./node_modules/list.js/src/item.js":
/*!******************************************!*\
  !*** ./node_modules/list.js/src/item.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(list) {
  return function(initValues, element, notCreate) {
    var item = this;

    this._values = {};

    this.found = false; // Show if list.searched == true and this.found == true
    this.filtered = false;// Show if list.filtered == true and this.filtered == true

    var init = function(initValues, element, notCreate) {
      if (element === undefined) {
        if (notCreate) {
          item.values(initValues, notCreate);
        } else {
          item.values(initValues);
        }
      } else {
        item.elm = element;
        var values = list.templater.get(item, initValues);
        item.values(values);
      }
    };

    this.values = function(newValues, notCreate) {
      if (newValues !== undefined) {
        for(var name in newValues) {
          item._values[name] = newValues[name];
        }
        if (notCreate !== true) {
          list.templater.set(item, item.values());
        }
      } else {
        return item._values;
      }
    };

    this.show = function() {
      list.templater.show(item);
    };

    this.hide = function() {
      list.templater.hide(item);
    };

    this.matching = function() {
      return (
        (list.filtered && list.searched && item.found && item.filtered) ||
        (list.filtered && !list.searched && item.filtered) ||
        (!list.filtered && list.searched && item.found) ||
        (!list.filtered && !list.searched)
      );
    };

    this.visible = function() {
      return (item.elm && (item.elm.parentNode == list.list)) ? true : false;
    };

    init(initValues, element, notCreate);
  };
};


/***/ }),

/***/ "./node_modules/list.js/src/pagination.js":
/*!************************************************!*\
  !*** ./node_modules/list.js/src/pagination.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classes = __webpack_require__(/*! ./utils/classes */ "./node_modules/list.js/src/utils/classes.js"),
  events = __webpack_require__(/*! ./utils/events */ "./node_modules/list.js/src/utils/events.js"),
  List = __webpack_require__(/*! ./index */ "./node_modules/list.js/src/index.js");

module.exports = function(list) {

  var refresh = function(pagingList, options) {
    var item,
      l = list.matchingItems.length,
      index = list.i,
      page = list.page,
      pages = Math.ceil(l / page),
      currentPage = Math.ceil((index / page)),
      innerWindow = options.innerWindow || 2,
      left = options.left || options.outerWindow || 0,
      right = options.right || options.outerWindow || 0;

    right = pages - right;

    pagingList.clear();
    for (var i = 1; i <= pages; i++) {
      var className = (currentPage === i) ? "active" : "";

      //console.log(i, left, right, currentPage, (currentPage - innerWindow), (currentPage + innerWindow), className);

      if (is.number(i, left, right, currentPage, innerWindow)) {
        item = pagingList.add({
          page: i,
          dotted: false
        })[0];
        if (className) {
          classes(item.elm).add(className);
        }
        addEvent(item.elm, i, page);
      } else if (is.dotted(pagingList, i, left, right, currentPage, innerWindow, pagingList.size())) {
        item = pagingList.add({
          page: "...",
          dotted: true
        })[0];
        classes(item.elm).add("disabled");
      }
    }
  };

  var is = {
    number: function(i, left, right, currentPage, innerWindow) {
       return this.left(i, left) || this.right(i, right) || this.innerWindow(i, currentPage, innerWindow);
    },
    left: function(i, left) {
      return (i <= left);
    },
    right: function(i, right) {
      return (i > right);
    },
    innerWindow: function(i, currentPage, innerWindow) {
      return ( i >= (currentPage - innerWindow) && i <= (currentPage + innerWindow));
    },
    dotted: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
      return this.dottedLeft(pagingList, i, left, right, currentPage, innerWindow) || (this.dottedRight(pagingList, i, left, right, currentPage, innerWindow, currentPageItem));
    },
    dottedLeft: function(pagingList, i, left, right, currentPage, innerWindow) {
      return ((i == (left + 1)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
    },
    dottedRight: function(pagingList, i, left, right, currentPage, innerWindow, currentPageItem) {
      if (pagingList.items[currentPageItem-1].values().dotted) {
        return false;
      } else {
        return ((i == (right)) && !this.innerWindow(i, currentPage, innerWindow) && !this.right(i, right));
      }
    }
  };

  var addEvent = function(elm, i, page) {
     events.bind(elm, 'click', function() {
       list.show((i-1)*page + 1, page);
     });
  };

  return function(options) {
    var pagingList = new List(list.listContainer.id, {
      listClass: options.paginationClass || 'pagination',
      item: "<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",
      valueNames: ['page', 'dotted'],
      searchClass: 'pagination-search-that-is-not-supposed-to-exist',
      sortClass: 'pagination-sort-that-is-not-supposed-to-exist'
    });

    list.on('updated', function() {
      refresh(pagingList, options);
    });
    refresh(pagingList, options);
  };
};


/***/ }),

/***/ "./node_modules/list.js/src/parse.js":
/*!*******************************************!*\
  !*** ./node_modules/list.js/src/parse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(list) {

  var Item = __webpack_require__(/*! ./item */ "./node_modules/list.js/src/item.js")(list);

  var getChildren = function(parent) {
    var nodes = parent.childNodes,
      items = [];
    for (var i = 0, il = nodes.length; i < il; i++) {
      // Only textnodes have a data attribute
      if (nodes[i].data === undefined) {
        items.push(nodes[i]);
      }
    }
    return items;
  };

  var parse = function(itemElements, valueNames) {
    for (var i = 0, il = itemElements.length; i < il; i++) {
      list.items.push(new Item(valueNames, itemElements[i]));
    }
  };
  var parseAsync = function(itemElements, valueNames) {
    var itemsToIndex = itemElements.splice(0, 50); // TODO: If < 100 items, what happens in IE etc?
    parse(itemsToIndex, valueNames);
    if (itemElements.length > 0) {
      setTimeout(function() {
        parseAsync(itemElements, valueNames);
      }, 1);
    } else {
      list.update();
      list.trigger('parseComplete');
    }
  };

  list.handlers.parseComplete = list.handlers.parseComplete || [];

  return function() {
    var itemsToIndex = getChildren(list.list),
      valueNames = list.valueNames;

    if (list.indexAsync) {
      parseAsync(itemsToIndex, valueNames);
    } else {
      parse(itemsToIndex, valueNames);
    }
  };
};


/***/ }),

/***/ "./node_modules/list.js/src/search.js":
/*!********************************************!*\
  !*** ./node_modules/list.js/src/search.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(list) {
  var item,
    text,
    columns,
    searchString,
    customSearch;

  var prepare = {
    resetList: function() {
      list.i = 1;
      list.templater.clear();
      customSearch = undefined;
    },
    setOptions: function(args) {
      if (args.length == 2 && args[1] instanceof Array) {
        columns = args[1];
      } else if (args.length == 2 && typeof(args[1]) == "function") {
        columns = undefined;
        customSearch = args[1];
      } else if (args.length == 3) {
        columns = args[1];
        customSearch = args[2];
      } else {
        columns = undefined;
      }
    },
    setColumns: function() {
      if (list.items.length === 0) return;
      if (columns === undefined) {
        columns = (list.searchColumns === undefined) ? prepare.toArray(list.items[0].values()) : list.searchColumns;
      }
    },
    setSearchString: function(s) {
      s = list.utils.toString(s).toLowerCase();
      s = s.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&"); // Escape regular expression characters
      searchString = s;
    },
    toArray: function(values) {
      var tmpColumn = [];
      for (var name in values) {
        tmpColumn.push(name);
      }
      return tmpColumn;
    }
  };
  var search = {
    list: function() {
      for (var k = 0, kl = list.items.length; k < kl; k++) {
        search.item(list.items[k]);
      }
    },
    item: function(item) {
      item.found = false;
      for (var j = 0, jl = columns.length; j < jl; j++) {
        if (search.values(item.values(), columns[j])) {
          item.found = true;
          return;
        }
      }
    },
    values: function(values, column) {
      if (values.hasOwnProperty(column)) {
        text = list.utils.toString(values[column]).toLowerCase();
        if ((searchString !== "") && (text.search(searchString) > -1)) {
          return true;
        }
      }
      return false;
    },
    reset: function() {
      list.reset.search();
      list.searched = false;
    }
  };

  var searchMethod = function(str) {
    list.trigger('searchStart');

    prepare.resetList();
    prepare.setSearchString(str);
    prepare.setOptions(arguments); // str, cols|searchFunction, searchFunction
    prepare.setColumns();

    if (searchString === "" ) {
      search.reset();
    } else {
      list.searched = true;
      if (customSearch) {
        customSearch(searchString, columns);
      } else {
        search.list();
      }
    }

    list.update();
    list.trigger('searchComplete');
    return list.visibleItems;
  };

  list.handlers.searchStart = list.handlers.searchStart || [];
  list.handlers.searchComplete = list.handlers.searchComplete || [];

  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'keyup', function(e) {
    var target = e.target || e.srcElement, // IE have srcElement
      alreadyCleared = (target.value === "" && !list.searched);
    if (!alreadyCleared) { // If oninput already have resetted the list, do nothing
      searchMethod(target.value);
    }
  });

  // Used to detect click on HTML5 clear button
  list.utils.events.bind(list.utils.getByClass(list.listContainer, list.searchClass), 'input', function(e) {
    var target = e.target || e.srcElement;
    if (target.value === "") {
      searchMethod('');
    }
  });

  return searchMethod;
};


/***/ }),

/***/ "./node_modules/list.js/src/sort.js":
/*!******************************************!*\
  !*** ./node_modules/list.js/src/sort.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(list) {

  var buttons = {
    els: undefined,
    clear: function() {
      for (var i = 0, il = buttons.els.length; i < il; i++) {
        list.utils.classes(buttons.els[i]).remove('asc');
        list.utils.classes(buttons.els[i]).remove('desc');
      }
    },
    getOrder: function(btn) {
      var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
      if (predefinedOrder == "asc" || predefinedOrder == "desc") {
        return predefinedOrder;
      } else if (list.utils.classes(btn).has('desc')) {
        return "asc";
      } else if (list.utils.classes(btn).has('asc')) {
        return "desc";
      } else {
        return "asc";
      }
    },
    getInSensitive: function(btn, options) {
      var insensitive = list.utils.getAttribute(btn, 'data-insensitive');
      if (insensitive === "false") {
        options.insensitive = false;
      } else {
        options.insensitive = true;
      }
    },
    setOrder: function(options) {
      for (var i = 0, il = buttons.els.length; i < il; i++) {
        var btn = buttons.els[i];
        if (list.utils.getAttribute(btn, 'data-sort') !== options.valueName) {
          continue;
        }
        var predefinedOrder = list.utils.getAttribute(btn, 'data-order');
        if (predefinedOrder == "asc" || predefinedOrder == "desc") {
          if (predefinedOrder == options.order) {
            list.utils.classes(btn).add(options.order);
          }
        } else {
          list.utils.classes(btn).add(options.order);
        }
      }
    }
  };

  var sort = function() {
    list.trigger('sortStart');
    var options = {};

    var target = arguments[0].currentTarget || arguments[0].srcElement || undefined;

    if (target) {
      options.valueName = list.utils.getAttribute(target, 'data-sort');
      buttons.getInSensitive(target, options);
      options.order = buttons.getOrder(target);
    } else {
      options = arguments[1] || options;
      options.valueName = arguments[0];
      options.order = options.order || "asc";
      options.insensitive = (typeof options.insensitive == "undefined") ? true : options.insensitive;
    }

    buttons.clear();
    buttons.setOrder(options);


    // caseInsensitive
    // alphabet
    var customSortFunction = (options.sortFunction || list.sortFunction || null),
        multi = ((options.order === 'desc') ? -1 : 1),
        sortFunction;

    if (customSortFunction) {
      sortFunction = function(itemA, itemB) {
        return customSortFunction(itemA, itemB, options) * multi;
      };
    } else {
      sortFunction = function(itemA, itemB) {
        var sort = list.utils.naturalSort;
        sort.alphabet = list.alphabet || options.alphabet || undefined;
        if (!sort.alphabet && options.insensitive) {
          sort = list.utils.naturalSort.caseInsensitive;
        }
        return sort(itemA.values()[options.valueName], itemB.values()[options.valueName]) * multi;
      };
    }

    list.items.sort(sortFunction);
    list.update();
    list.trigger('sortComplete');
  };

  // Add handlers
  list.handlers.sortStart = list.handlers.sortStart || [];
  list.handlers.sortComplete = list.handlers.sortComplete || [];

  buttons.els = list.utils.getByClass(list.listContainer, list.sortClass);
  list.utils.events.bind(buttons.els, 'click', sort);
  list.on('searchStart', buttons.clear);
  list.on('filterStart', buttons.clear);

  return sort;
};


/***/ }),

/***/ "./node_modules/list.js/src/templater.js":
/*!***********************************************!*\
  !*** ./node_modules/list.js/src/templater.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Templater = function(list) {
  var itemSource,
    templater = this;

  var init = function() {
    itemSource = templater.getItemSource(list.item);
    if (itemSource) {
      itemSource = templater.clearSourceItem(itemSource, list.valueNames);
    }
  };

  this.clearSourceItem = function(el, valueNames) {
    for(var i = 0, il = valueNames.length; i < il; i++) {
      var elm;
      if (valueNames[i].data) {
        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
          el.setAttribute('data-'+valueNames[i].data[j], '');
        }
      } else if (valueNames[i].attr && valueNames[i].name) {
        elm = list.utils.getByClass(el, valueNames[i].name, true);
        if (elm) {
          elm.setAttribute(valueNames[i].attr, "");
        }
      } else {
        elm = list.utils.getByClass(el, valueNames[i], true);
        if (elm) {
          elm.innerHTML = "";
        }
      }
      elm = undefined;
    }
    return el;
  };

  this.getItemSource = function(item) {
    if (item === undefined) {
      var nodes = list.list.childNodes,
        items = [];

      for (var i = 0, il = nodes.length; i < il; i++) {
        // Only textnodes have a data attribute
        if (nodes[i].data === undefined) {
          return nodes[i].cloneNode(true);
        }
      }
    } else if (/<tr[\s>]/g.exec(item)) {
      var tbody = document.createElement('tbody');
      tbody.innerHTML = item;
      return tbody.firstChild;
    } else if (item.indexOf("<") !== -1) {
      var div = document.createElement('div');
      div.innerHTML = item;
      return div.firstChild;
    } else {
      var source = document.getElementById(list.item);
      if (source) {
        return source;
      }
    }
    return undefined;
  };

  this.get = function(item, valueNames) {
    templater.create(item);
    var values = {};
    for(var i = 0, il = valueNames.length; i < il; i++) {
      var elm;
      if (valueNames[i].data) {
        for (var j = 0, jl = valueNames[i].data.length; j < jl; j++) {
          values[valueNames[i].data[j]] = list.utils.getAttribute(item.elm, 'data-'+valueNames[i].data[j]);
        }
      } else if (valueNames[i].attr && valueNames[i].name) {
        elm = list.utils.getByClass(item.elm, valueNames[i].name, true);
        values[valueNames[i].name] = elm ? list.utils.getAttribute(elm, valueNames[i].attr) : "";
      } else {
        elm = list.utils.getByClass(item.elm, valueNames[i], true);
        values[valueNames[i]] = elm ? elm.innerHTML : "";
      }
      elm = undefined;
    }
    return values;
  };

  this.set = function(item, values) {
    var getValueName = function(name) {
      for (var i = 0, il = list.valueNames.length; i < il; i++) {
        if (list.valueNames[i].data) {
          var data = list.valueNames[i].data;
          for (var j = 0, jl = data.length; j < jl; j++) {
            if (data[j] === name) {
              return { data: name };
            }
          }
        } else if (list.valueNames[i].attr && list.valueNames[i].name && list.valueNames[i].name == name) {
          return list.valueNames[i];
        } else if (list.valueNames[i] === name) {
          return name;
        }
      }
    };
    var setValue = function(name, value) {
      var elm;
      var valueName = getValueName(name);
      if (!valueName)
        return;
      if (valueName.data) {
        item.elm.setAttribute('data-'+valueName.data, value);
      } else if (valueName.attr && valueName.name) {
        elm = list.utils.getByClass(item.elm, valueName.name, true);
        if (elm) {
          elm.setAttribute(valueName.attr, value);
        }
      } else {
        elm = list.utils.getByClass(item.elm, valueName, true);
        if (elm) {
          elm.innerHTML = value;
        }
      }
      elm = undefined;
    };
    if (!templater.create(item)) {
      for(var v in values) {
        if (values.hasOwnProperty(v)) {
          setValue(v, values[v]);
        }
      }
    }
  };

  this.create = function(item) {
    if (item.elm !== undefined) {
      return false;
    }
    if (itemSource === undefined) {
      throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");
    }
    /* If item source does not exists, use the first item in list as
    source for new items */
    var newItem = itemSource.cloneNode(true);
    newItem.removeAttribute('id');
    item.elm = newItem;
    templater.set(item, item.values());
    return true;
  };
  this.remove = function(item) {
    if (item.elm.parentNode === list.list) {
      list.list.removeChild(item.elm);
    }
  };
  this.show = function(item) {
    templater.create(item);
    list.list.appendChild(item.elm);
  };
  this.hide = function(item) {
    if (item.elm !== undefined && item.elm.parentNode === list.list) {
      list.list.removeChild(item.elm);
    }
  };
  this.clear = function() {
    /* .innerHTML = ''; fucks up IE */
    if (list.list.hasChildNodes()) {
      while (list.list.childNodes.length >= 1)
      {
        list.list.removeChild(list.list.firstChild);
      }
    }
  };

  init();
};

module.exports = function(list) {
  return new Templater(list);
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/classes.js":
/*!***************************************************!*\
  !*** ./node_modules/list.js/src/utils/classes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var index = __webpack_require__(/*! ./index-of */ "./node_modules/list.js/src/utils/index-of.js");

/**
 * Whitespace regexp.
 */

var re = /\s+/;

/**
 * toString reference.
 */

var toString = Object.prototype.toString;

/**
 * Wrap `el` in a `ClassList`.
 *
 * @param {Element} el
 * @return {ClassList}
 * @api public
 */

module.exports = function(el){
  return new ClassList(el);
};

/**
 * Initialize a new ClassList for `el`.
 *
 * @param {Element} el
 * @api private
 */

function ClassList(el) {
  if (!el || !el.nodeType) {
    throw new Error('A DOM element reference is required');
  }
  this.el = el;
  this.list = el.classList;
}

/**
 * Add class `name` if not already present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.add = function(name){
  // classList
  if (this.list) {
    this.list.add(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (!~i) arr.push(name);
  this.el.className = arr.join(' ');
  return this;
};

/**
 * Remove class `name` when present, or
 * pass a regular expression to remove
 * any which match.
 *
 * @param {String|RegExp} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.remove = function(name){
  // classList
  if (this.list) {
    this.list.remove(name);
    return this;
  }

  // fallback
  var arr = this.array();
  var i = index(arr, name);
  if (~i) arr.splice(i, 1);
  this.el.className = arr.join(' ');
  return this;
};


/**
 * Toggle class `name`, can force state via `force`.
 *
 * For browsers that support classList, but do not support `force` yet,
 * the mistake will be detected and corrected.
 *
 * @param {String} name
 * @param {Boolean} force
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.toggle = function(name, force){
  // classList
  if (this.list) {
    if ("undefined" !== typeof force) {
      if (force !== this.list.toggle(name, force)) {
        this.list.toggle(name); // toggle again to correct
      }
    } else {
      this.list.toggle(name);
    }
    return this;
  }

  // fallback
  if ("undefined" !== typeof force) {
    if (!force) {
      this.remove(name);
    } else {
      this.add(name);
    }
  } else {
    if (this.has(name)) {
      this.remove(name);
    } else {
      this.add(name);
    }
  }

  return this;
};

/**
 * Return an array of classes.
 *
 * @return {Array}
 * @api public
 */

ClassList.prototype.array = function(){
  var className = this.el.getAttribute('class') || '';
  var str = className.replace(/^\s+|\s+$/g, '');
  var arr = str.split(re);
  if ('' === arr[0]) arr.shift();
  return arr;
};

/**
 * Check if class `name` is present.
 *
 * @param {String} name
 * @return {ClassList}
 * @api public
 */

ClassList.prototype.has =
ClassList.prototype.contains = function(name){
  return this.list ? this.list.contains(name) : !! ~index(this.array(), name);
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/events.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/utils/events.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = window.addEventListener ? 'addEventListener' : 'attachEvent',
    unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent',
    prefix = bind !== 'addEventListener' ? 'on' : '',
    toArray = __webpack_require__(/*! ./to-array */ "./node_modules/list.js/src/utils/to-array.js");

/**
 * Bind `el` event `type` to `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.bind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    el[i][bind](prefix + type, fn, capture || false);
  }
};

/**
 * Unbind `el` event `type`'s callback `fn`.
 *
 * @param {Element} el, NodeList, HTMLCollection or Array
 * @param {String} type
 * @param {Function} fn
 * @param {Boolean} capture
 * @api public
 */

exports.unbind = function(el, type, fn, capture){
  el = toArray(el);
  for ( var i = 0; i < el.length; i++ ) {
    el[i][unbind](prefix + type, fn, capture || false);
  }
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/extend.js":
/*!**************************************************!*\
  !*** ./node_modules/list.js/src/utils/extend.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Source: https://github.com/segmentio/extend
 */

module.exports = function extend (object) {
    // Takes an unlimited number of extenders.
    var args = Array.prototype.slice.call(arguments, 1);

    // For each extender, copy their properties on our object.
    for (var i = 0, source; source = args[i]; i++) {
        if (!source) continue;
        for (var property in source) {
            object[property] = source[property];
        }
    }

    return object;
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/fuzzy.js":
/*!*************************************************!*\
  !*** ./node_modules/list.js/src/utils/fuzzy.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(text, pattern, options) {
    // Aproximately where in the text is the pattern expected to be found?
    var Match_Location = options.location || 0;

    //Determines how close the match must be to the fuzzy location (specified above). An exact letter match which is 'distance' characters away from the fuzzy location would score as a complete mismatch. A distance of '0' requires the match be at the exact location specified, a threshold of '1000' would require a perfect match to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
    var Match_Distance = options.distance || 100;

    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match (of both letters and location), a threshold of '1.0' would match anything.
    var Match_Threshold = options.threshold || 0.4;

    if (pattern === text) return true; // Exact match
    if (pattern.length > 32) return false; // This algorithm cannot be used

    // Set starting location at beginning text and initialise the alphabet.
    var loc = Match_Location,
        s = (function() {
            var q = {},
                i;

            for (i = 0; i < pattern.length; i++) {
                q[pattern.charAt(i)] = 0;
            }

            for (i = 0; i < pattern.length; i++) {
                q[pattern.charAt(i)] |= 1 << (pattern.length - i - 1);
            }

            return q;
        }());

    // Compute and return the score for a match with e errors and x location.
    // Accesses loc and pattern through being a closure.

    function match_bitapScore_(e, x) {
        var accuracy = e / pattern.length,
            proximity = Math.abs(loc - x);

        if (!Match_Distance) {
            // Dodge divide by zero error.
            return proximity ? 1.0 : accuracy;
        }
        return accuracy + (proximity / Match_Distance);
    }

    var score_threshold = Match_Threshold, // Highest score beyond which we give up.
        best_loc = text.indexOf(pattern, loc); // Is there a nearby exact match? (speedup)

    if (best_loc != -1) {
        score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        // What about in the other direction? (speedup)
        best_loc = text.lastIndexOf(pattern, loc + pattern.length);

        if (best_loc != -1) {
            score_threshold = Math.min(match_bitapScore_(0, best_loc), score_threshold);
        }
    }

    // Initialise the bit arrays.
    var matchmask = 1 << (pattern.length - 1);
    best_loc = -1;

    var bin_min, bin_mid;
    var bin_max = pattern.length + text.length;
    var last_rd;
    for (var d = 0; d < pattern.length; d++) {
        // Scan for the best match; each iteration allows for one more error.
        // Run a binary search to determine how far from 'loc' we can stray at this
        // error level.
        bin_min = 0;
        bin_mid = bin_max;
        while (bin_min < bin_mid) {
            if (match_bitapScore_(d, loc + bin_mid) <= score_threshold) {
                bin_min = bin_mid;
            } else {
                bin_max = bin_mid;
            }
            bin_mid = Math.floor((bin_max - bin_min) / 2 + bin_min);
        }
        // Use the result from this iteration as the maximum for the next.
        bin_max = bin_mid;
        var start = Math.max(1, loc - bin_mid + 1);
        var finish = Math.min(loc + bin_mid, text.length) + pattern.length;

        var rd = Array(finish + 2);
        rd[finish + 1] = (1 << d) - 1;
        for (var j = finish; j >= start; j--) {
            // The alphabet (s) is a sparse hash, so the following line generates
            // warnings.
            var charMatch = s[text.charAt(j - 1)];
            if (d === 0) {    // First pass: exact match.
                rd[j] = ((rd[j + 1] << 1) | 1) & charMatch;
            } else {    // Subsequent passes: fuzzy match.
                rd[j] = (((rd[j + 1] << 1) | 1) & charMatch) |
                                (((last_rd[j + 1] | last_rd[j]) << 1) | 1) |
                                last_rd[j + 1];
            }
            if (rd[j] & matchmask) {
                var score = match_bitapScore_(d, j - 1);
                // This match will almost certainly be better than any existing match.
                // But check anyway.
                if (score <= score_threshold) {
                    // Told you so.
                    score_threshold = score;
                    best_loc = j - 1;
                    if (best_loc > loc) {
                        // When passing loc, don't exceed our current distance from loc.
                        start = Math.max(1, 2 * loc - best_loc);
                    } else {
                        // Already passed loc, downhill from here on in.
                        break;
                    }
                }
            }
        }
        // No hope for a (better) match at greater error levels.
        if (match_bitapScore_(d + 1, loc) > score_threshold) {
            break;
        }
        last_rd = rd;
    }

    return (best_loc < 0) ? false : true;
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/get-attribute.js":
/*!*********************************************************!*\
  !*** ./node_modules/list.js/src/utils/get-attribute.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A cross-browser implementation of getAttribute.
 * Source found here: http://stackoverflow.com/a/3755343/361337 written by Vivin Paliath
 *
 * Return the value for `attr` at `element`.
 *
 * @param {Element} el
 * @param {String} attr
 * @api public
 */

module.exports = function(el, attr) {
  var result = (el.getAttribute && el.getAttribute(attr)) || null;
  if( !result ) {
    var attrs = el.attributes;
    var length = attrs.length;
    for(var i = 0; i < length; i++) {
      if (attr[i] !== undefined) {
        if(attr[i].nodeName === attr) {
          result = attr[i].nodeValue;
        }
      }
    }
  }
  return result;
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/get-by-class.js":
/*!********************************************************!*\
  !*** ./node_modules/list.js/src/utils/get-by-class.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A cross-browser implementation of getElementsByClass.
 * Heavily based on Dustin Diaz's function: http://dustindiaz.com/getelementsbyclass.
 *
 * Find all elements with class `className` inside `container`.
 * Use `single = true` to increase performance in older browsers
 * when only one element is needed.
 *
 * @param {String} className
 * @param {Element} container
 * @param {Boolean} single
 * @api public
 */

var getElementsByClassName = function(container, className, single) {
  if (single) {
    return container.getElementsByClassName(className)[0];
  } else {
    return container.getElementsByClassName(className);
  }
};

var querySelector = function(container, className, single) {
  className = '.' + className;
  if (single) {
    return container.querySelector(className);
  } else {
    return container.querySelectorAll(className);
  }
};

var polyfill = function(container, className, single) {
  var classElements = [],
    tag = '*';

  var els = container.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+className+"(\\s|$)");
  for (var i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      if (single) {
        return els[i];
      } else {
        classElements[j] = els[i];
        j++;
      }
    }
  }
  return classElements;
};

module.exports = (function() {
  return function(container, className, single, options) {
    options = options || {};
    if ((options.test && options.getElementsByClassName) || (!options.test && document.getElementsByClassName)) {
      return getElementsByClassName(container, className, single);
    } else if ((options.test && options.querySelector) || (!options.test && document.querySelector)) {
      return querySelector(container, className, single);
    } else {
      return polyfill(container, className, single);
    }
  };
})();


/***/ }),

/***/ "./node_modules/list.js/src/utils/index-of.js":
/*!****************************************************!*\
  !*** ./node_modules/list.js/src/utils/index-of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};


/***/ }),

/***/ "./node_modules/list.js/src/utils/to-array.js":
/*!****************************************************!*\
  !*** ./node_modules/list.js/src/utils/to-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Source: https://github.com/timoxley/to-array
 *
 * Convert an array-like object into an `Array`.
 * If `collection` is already an `Array`, then will return a clone of `collection`.
 *
 * @param {Array | Mixed} collection An `Array` or array-like object to convert e.g. `arguments` or `NodeList`
 * @return {Array} Naive conversion of `collection` to a new `Array`.
 * @api public
 */

module.exports = function toArray(collection) {
  if (typeof collection === 'undefined') return [];
  if (collection === null) return [null];
  if (collection === window) return [window];
  if (typeof collection === 'string') return [collection];
  if (isArray(collection)) return collection;
  if (typeof collection.length != 'number') return [collection];
  if (typeof collection === 'function' && collection instanceof Function) return [collection];

  var arr = [];
  for (var i = 0; i < collection.length; i++) {
    if (Object.prototype.hasOwnProperty.call(collection, i) || i in collection) {
      arr.push(collection[i]);
    }
  }
  if (!arr.length) return [];
  return arr;
};

function isArray(arr) {
  return Object.prototype.toString.call(arr) === "[object Array]";
}


/***/ }),

/***/ "./node_modules/list.js/src/utils/to-string.js":
/*!*****************************************************!*\
  !*** ./node_modules/list.js/src/utils/to-string.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(s) {
  s = (s === undefined) ? "" : s;
  s = (s === null) ? "" : s;
  s = s.toString();
  return s;
};


/***/ }),

/***/ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js ***!
  \*********************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




// todo: split
/** Provides default values for Pagination and pager components */
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
    /** @nocollapse */ PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
    /** @nocollapse */ PaginationConfig.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PaginationConfig, factory: PaginationConfig.ɵfac });
    return PaginationConfig;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

var _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
var _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PagerComponent; }),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PagerComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PagerComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PagerComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PagerComponent.prototype.getText = function (key) {
        // tslint:disable-next-line:no-any
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PagerComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PagerComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PagerComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PagerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PagerComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PagerComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PagerComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PagerComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */ PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PaginationConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    /** @nocollapse */ PagerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PagerComponent, selectors: [["pager"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ul", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "li", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "a", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "li", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "a", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(6);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"])(ctx.pageBtnClass);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.noPrevious())("previous", ctx.align);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(18, _c0, ctx.align, ctx.align));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.getText("previous"));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"])(ctx.pageBtnClass);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx.noNext())("next", ctx.align);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(21, _c1, ctx.align, ctx.align));
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx.getText("next"));
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
    return PagerComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pager',
                templateUrl: './pager.component.html',
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

var _c0$1 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r43 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r43); var ctx_r42 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r42.selectPage(1, $event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(2, 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    var _r38 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx_r27.noPrevious() || ctx_r27.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r27.customFirstTemplate || _r38)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c0$1, ctx_r27.noPrevious() || ctx_r27.disabled, ctx_r27.page));
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r45 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r45); var ctx_r44 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r44.selectPage(ctx_r44.page - 1, $event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(2, 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    var _r36 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx_r28.noPrevious() || ctx_r28.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r28.customPreviousTemplate || _r36)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c0$1, ctx_r28.noPrevious() || ctx_r28.disabled, ctx_r28.page));
} }
var _c1$1 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r48 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r48); var pg_r46 = ctx.$implicit; var ctx_r47 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r47.selectPage(pg_r46.number, $event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(2, 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var pg_r46 = ctx.$implicit;
    var ctx_r29 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    var _r32 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", pg_r46.active)("disabled", ctx_r29.disabled && !pg_r46.active);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r29.customPageTemplate || _r32)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"])(6, _c1$1, ctx_r29.disabled, pg_r46, ctx_r29.page));
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r50 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r50); var ctx_r49 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r49.selectPage(ctx_r49.page + 1, $event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(2, 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r30 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    var _r34 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx_r30.noNext() || ctx_r30.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r30.customNextTemplate || _r34)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c0$1, ctx_r30.noNext() || ctx_r30.disabled, ctx_r30.page));
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r52 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "a", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r52); var ctx_r51 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r51.selectPage(ctx_r51.totalPages, $event); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(2, 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    var ctx_r31 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    var _r40 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("disabled", ctx_r31.noNext() || ctx_r31.disabled);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r31.customLastTemplate || _r40)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"])(4, _c0$1, ctx_r31.noNext() || ctx_r31.disabled, ctx_r31.page));
} }
function PaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    var page_r53 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(page_r53.text);
} }
function PaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    var ctx_r35 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r35.getText("next"));
} }
function PaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    var ctx_r37 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r37.getText("previous"));
} }
function PaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    var ctx_r39 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r39.getText("first"));
} }
function PaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(0);
} if (rf & 2) {
    var ctx_r41 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r41.getText("last"));
} }
var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PaginationComponent; }),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: function () {
            return this._itemsPerPage;
        },
        set: function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: function () {
            return this._totalItems;
        },
        set: function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: function () {
            return this._totalPages;
        },
        set: function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: function () {
            return this._page;
        },
        set: function (value) {
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.configureOptions = function (config) {
        this.config = Object.assign({}, config);
    };
    PaginationComponent.prototype.ngOnInit = function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    PaginationComponent.prototype.writeValue = function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    PaginationComponent.prototype.getText = function (key) {
        // tslint:disable-next-line:no-any
        return this[key + "Text"] || this.config[key + "Text"];
    };
    PaginationComponent.prototype.noPrevious = function () {
        return this.page === 1;
    };
    PaginationComponent.prototype.noNext = function () {
        return this.page === this.totalPages;
    };
    PaginationComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginationComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginationComponent.prototype.selectPage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    PaginationComponent.prototype.makePage = function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    PaginationComponent.prototype.getPages = function (currentPage, totalPages) {
        var pages = [];
        // Default page limits
        var startPage = 1;
        var endPage = totalPages;
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    PaginationComponent.prototype.calculateTotalPages = function () {
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */ PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PaginationConfig), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    /** @nocollapse */ PaginationComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PaginationComponent, selectors: [["pagination"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ul", 0);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        } if (rf & 2) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngClass", ctx.classMap);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.boundaryLinks);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.directionLinks);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx.pages);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.directionLinks);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.boundaryLinks);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]], encapsulation: 2 });
    return PaginationComponent;
}());
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                templateUrl: './pagination.component.html',
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPageTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customNextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customPreviousTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customFirstTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customLastTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule.forRoot = function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
    /** @nocollapse */ PaginationModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: PaginationModule });
    /** @nocollapse */ PaginationModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
    return PaginationModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(PaginationModule, { declarations: [PagerComponent, PaginationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [PagerComponent, PaginationComponent] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-bootstrap-pagination.js.map


/***/ }),

/***/ "./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js ***!
  \****************************************************************/
/*! exports provided: NgxPrintDirective, NgxPrintModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintDirective", function() { return NgxPrintDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxPrintModule", function() { return NgxPrintModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

var NgxPrintDirective = /** @class */ (function () {
    function NgxPrintDirective() {
        this._printStyle = [];
        /**
         *
         *
         * \@memberof NgxPrintDirective
         */
        this.useExistingCss = false;
        /**
         *
         *
         * @return html for the given tag
         *
         * \@memberof NgxPrintDirective
         */
        this._styleSheetFile = '';
    }
    Object.defineProperty(NgxPrintDirective.prototype, "printStyle", {
        /**
         *
         *
         * @memberof NgxPrintDirective
         */
        set: /**
         *
         *
         * \@memberof NgxPrintDirective
         * @param {?} values
         * @return {?}
         */
        function (values) {
            for (var key in values) {
                if (values.hasOwnProperty(key)) {
                    this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
                }
            }
            this.returnStyleValues();
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    NgxPrintDirective.prototype.returnStyleValues = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?} the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * -join/replace to transform an array objects to css-styled string
     *
     */
    function () {
        return "<style> " + this._printStyle.join(' ').replace(/,/g, ';') + " </style>";
    };
    Object.defineProperty(NgxPrintDirective.prototype, "styleSheetFile", {
        /**
         * @memberof NgxPrintDirective
         * @param cssList
         */
        set: /**
         * \@memberof NgxPrintDirective
         * @param {?} cssList
         * @return {?}
         */
        function (cssList) {
            var e_1, _a;
            /** @type {?} */
            var linkTagFn = (/**
             * @param {?} cssFileName
             * @return {?}
             */
            function (cssFileName) {
                return "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssFileName + "\">";
            });
            if (cssList.indexOf(',') !== -1) {
                /** @type {?} */
                var valueArr = cssList.split(',');
                try {
                    for (var valueArr_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(valueArr), valueArr_1_1 = valueArr_1.next(); !valueArr_1_1.done; valueArr_1_1 = valueArr_1.next()) {
                        var val = valueArr_1_1.value;
                        this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (valueArr_1_1 && !valueArr_1_1.done && (_a = valueArr_1.return)) _a.call(valueArr_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else {
                this._styleSheetFile = linkTagFn(cssList);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    NgxPrintDirective.prototype.returnStyleSheetLinkTags = /**
     * @private
     * @return {?} string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    function () {
        return this._styleSheetFile;
    };
    /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    NgxPrintDirective.prototype.getElementTag = /**
     * @private
     * @param {?} tag
     * @return {?}
     */
    function (tag) {
        /** @type {?} */
        var html = [];
        /** @type {?} */
        var elements = document.getElementsByTagName(tag);
        for (var index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    };
    /**
     *
     *
     * @memberof NgxPrintDirective
     */
    /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    NgxPrintDirective.prototype.print = /**
     *
     *
     * \@memberof NgxPrintDirective
     * @return {?}
     */
    function () {
        /** @type {?} */
        var printContents;
        /** @type {?} */
        var popupWin;
        /** @type {?} */
        var styles = '';
        /** @type {?} */
        var links = '';
        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }
        printContents = document.getElementById(this.printSectionId).innerHTML;
        popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>" + (this.printTitle ? this.printTitle : "") + "</title>\n          " + this.returnStyleValues() + "\n          " + this.returnStyleSheetLinkTags() + "\n          " + styles + "\n          " + links + "\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    NgxPrintDirective.propDecorators = {
        printSectionId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printTitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        useExistingCss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        printStyle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        styleSheetFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        print: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
    };
NgxPrintDirective.ɵfac = function NgxPrintDirective_Factory(t) { return new (t || NgxPrintDirective)(); };
NgxPrintDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NgxPrintDirective, selectors: [["button", "ngxPrint", ""]], hostBindings: function NgxPrintDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NgxPrintDirective_click_HostBindingHandler() { return ctx.print(); });
    } }, inputs: { useExistingCss: "useExistingCss", printStyle: "printStyle", styleSheetFile: "styleSheetFile", printSectionId: "printSectionId", printTitle: "printTitle" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPrintDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: "button[ngxPrint]"
            }]
    }], function () { return []; }, { useExistingCss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], printStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], styleSheetFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], print: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], printSectionId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], printTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgxPrintDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPrintModule = /** @class */ (function () {
    function NgxPrintModule() {
    }
NgxPrintModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxPrintModule });
NgxPrintModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxPrintModule_Factory(t) { return new (t || NgxPrintModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxPrintModule, { declarations: [NgxPrintDirective], exports: [NgxPrintDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxPrintModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [NgxPrintDirective],
                imports: [],
                exports: [NgxPrintDirective]
            }]
    }], function () { return []; }, null); })();
    return NgxPrintModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-print.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/ngxdatatables/ngxdatatables.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/ngxdatatables/ngxdatatables.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Ngx Datatables</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Tables </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Ngx Datatables\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h3 class=\" mb-0\">Ngx Datatables</h3>\n\n          <p class=\" text-sm mb-0\">\n            This is an exmaple of datatable using the well known ngx-datatable\n            plugin. This is a minimal setup in order to get started fast.\n          </p>\n        </div>\n        <div class=\"dataTables_wrapper py-4\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"dataTables_length\" id=\"datatable_length\">\n                <label>\n                  Show\n                  <select\n                    name=\"datatable_length\"\n                    aria-controls=\"datatable\"\n                    class=\"form-control form-control-sm\"\n                    (change)=\"entriesChange($event)\"\n                  >\n                    <option value=\"10\" [selected]=\"entries == 10\">10</option>\n                    <option value=\"25\" [selected]=\"entries == 25\">25</option>\n                    <option value=\"50\" [selected]=\"entries == 50\">50</option>\n                    <option value=\"-1\" [selected]=\"entries == -1\">All</option>\n                  </select>\n                  entries\n                </label>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                <label>\n                  <input\n                    type=\"search\"\n                    class=\"form-control form-control-sm\"\n                    placeholder=\"Search records\"\n                    aria-controls=\"datatable\"\n                    (keyup)=\"filterTable($event)\"\n                  />\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <ngx-datatable\n            class=\"bootstrap selection-cell\"\n            [columnMode]=\"'force'\"\n            [headerHeight]=\"50\"\n            [footerHeight]=\"50\"\n            [rowHeight]=\"'auto'\"\n            [limit]=\"entries != -1 ? entries : undefined\"\n            [rows]=\"temp\"\n            (activate)=\"onActivate($event)\"\n          >\n            <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Position\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Office\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Start\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Salary\"></ngx-datatable-column>\n          </ngx-datatable>\n        </div>\n      </div>\n      <div class=\"card\">\n        <!-- Card header -->\n        <div class=\"card-header\">\n          <h3 class=\"mb-0\">Selecting Rows</h3>\n          <p class=\"text-sm mb-0\">\n            This is an exmaple of datatable using the well known ngx-datatable\n            plugin. This is a minimal setup in order to get started fast.\n          </p>\n        </div>\n        <div class=\"dataTables_wrapper py-4\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"dataTables_length\" id=\"datatable_length\">\n                <label>\n                  Show\n                  <select\n                    name=\"datatable_length\"\n                    aria-controls=\"datatable\"\n                    class=\"form-control form-control-sm\"\n                    (change)=\"entriesChange($event)\"\n                  >\n                    <option value=\"10\" [selected]=\"entries == 10\">10</option>\n                    <option value=\"25\" [selected]=\"entries == 25\">25</option>\n                    <option value=\"50\" [selected]=\"entries == 50\">50</option>\n                    <option value=\"-1\" [selected]=\"entries == -1\">All</option>\n                  </select>\n                  entries\n                </label>\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div id=\"datatable_filter\" class=\"dataTables_filter\">\n                <label>\n                  <input\n                    type=\"search\"\n                    class=\"form-control form-control-sm\"\n                    placeholder=\"Search records\"\n                    aria-controls=\"datatable\"\n                    (keyup)=\"filterTable($event)\"\n                  />\n                </label>\n              </div>\n            </div>\n          </div>\n\n          <ngx-datatable\n            id=\"print-section\"\n            class=\"bootstrap selection-cell\"\n            [columnMode]=\"'force'\"\n            [headerHeight]=\"50\"\n            [footerHeight]=\"50\"\n            [rowHeight]=\"'auto'\"\n            [limit]=\"entries != -1 ? entries : undefined\"\n            [rows]=\"temp\"\n            [selected]=\"selected\"\n            [selectionType]=\"'multiClick'\"\n            (activate)=\"onActivate($event)\"\n            (select)=\"onSelect($event)\"\n          >\n            <ngx-datatable-column name=\"Name\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Position\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Office\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Start\"></ngx-datatable-column>\n            <ngx-datatable-column name=\"Salary\"></ngx-datatable-column>\n          </ngx-datatable>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/sortable/sortable.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/sortable/sortable.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Tables</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Tables </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Tables\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card\">\n        <div class=\" card-header border-0\">\n          <h3 class=\" mb-0\">Light table</h3>\n        </div>\n\n        <div class=\" table-responsive\" id=\"first-list\">\n          <table class=\" table align-items-center table-flush\">\n            <thead class=\" thead-light\">\n              <tr>\n                <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n                <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n                <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n                <th scope=\"col\">Users</th>\n\n                <th class=\" sort\" data-sort=\"completion\" scope=\"col\">\n                  Completion\n                </th>\n\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody class=\" list\">\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/bootstrap.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Argon Design System\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2500 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-warning\"> </i>\n\n                    <span class=\" status\"> pending </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 60% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"warning\" [value]=\"60\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/angular.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Angular Now UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$1800 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\"bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/sketch.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\"> Black Dashboard </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$3150 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-danger\"> </i>\n\n                    <span class=\" status\"> delayed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 72% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"danger\" [value]=\"72\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/react.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        React Material Dashboard\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$4400 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-info\"> </i>\n\n                    <span class=\" status\"> on schedule </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 90% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/vue.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Vue Paper UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2200 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\" card-footer py-4\">\n          <nav aria-label=\"...\">\n            <pagination [totalItems]=\"25\"\n                        class=\"justify-content-end mb-0\"\n                        [customPreviousTemplate]=\"prevTemplate\"\n                        [customNextTemplate]=\"nextTemplate\">\n            </pagination>\n\n            <ng-template #nextTemplate let-currentPage=\"currentPage\">\n              <ng-container *ngIf=\"!disabled\">\n                <i class='fas fa-angle-right'></i>\n              </ng-container>\n            </ng-template>\n\n            <ng-template #prevTemplate let-currentPage=\"currentPage\">\n              <ng-container *ngIf=\"!disabled\">\n                <i class='fas fa-angle-left'></i>\n              </ng-container>\n            </ng-template>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\" card bg-transparent\">\n    <div class=\" card-header bg-transparent border-0\">\n      <h3 class=\" mb-0\">Translucent table</h3>\n    </div>\n\n    <div class=\" table-responsive\" id=\"second-list\">\n      <table class=\" table align-items-center table-flush\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n            <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n            <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n            <th scope=\"col\">Users</th>\n\n            <th class=\" sort\" data-sort=\"completion\" scope=\"col\">Completion</th>\n\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n\n        <tbody class=\" list\">\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/bootstrap.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Argon Design System </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$2500 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-warning\"> </i>\n\n                <span class=\" status\"> pending </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 60% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"warning\" [value]=\"60\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/angular.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\">\n                    Angular Now UI Kit PRO\n                  </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$1800 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-success\"> </i>\n\n                <span class=\" status\"> completed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 100% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"success\" [value]=\"100\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/sketch.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Black Dashboard </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$3150 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-danger\"> </i>\n\n                <span class=\" status\"> delayed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 72% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"danger\" [value]=\"72\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/react.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\">\n                    React Material Dashboard\n                  </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$4400 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-info\"> </i>\n\n                <span class=\" status\"> on schedule </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 90% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/vue.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Vue Paper UI Kit PRO </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$2200 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-success\"> </i>\n\n                <span class=\" status\"> completed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 100% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"success\" [value]=\"100\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\" row\">\n      <div class=\" col\">\n        <div class=\" card bg-default shadow\">\n          <div class=\" card-header bg-transparent border-0\">\n            <h3 class=\" text-white mb-0\">Dark table</h3>\n          </div>\n\n          <div class=\" table-responsive\" id=\"third-list\">\n            <table class=\" table align-items-center table-dark table-flush\">\n              <thead class=\" thead-dark\">\n                <tr>\n                  <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n                  <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n                  <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n                  <th scope=\"col\">Users</th>\n\n                  <th class=\" sort\" data-sort=\"completion\" scope=\"col\">\n                    Completion\n                  </th>\n\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n\n              <tbody class=\" list\">\n                <tr>\n                  <th scope=\"row\">\n                    <div class=\" media align-items-center\">\n                      <a\n                        class=\" avatar rounded-circle mr-3\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/bootstrap.jpg\"\n                        />\n                      </a>\n\n                      <div class=\" media-body\">\n                        <span class=\" name mb-0 text-sm\">\n                          Argon Design System\n                        </span>\n                      </div>\n                    </div>\n                  </th>\n\n                  <td class=\" budget\">$2500 USD</td>\n\n                  <td>\n                    <span class=\" badge badge-dot mr-4\">\n                      <i class=\" bg-warning\"> </i>\n\n                      <span class=\" status\"> pending </span>\n                    </span>\n                  </td>\n\n                  <td>\n                    <div class=\" avatar-group\">\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Ryan Tompson\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-1.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Romina Hadid\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-2.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Alexander Smith\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-3.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Jessica Doe\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-4.jpg\"\n                        />\n                      </a>\n                    </div>\n                  </td>\n\n                  <td>\n                    <div class=\" d-flex align-items-center\">\n                      <span class=\" completion mr-2\"> 60% </span>\n\n                      <div>\n                        <div class=\" progress\">\n                          <progressbar type=\"warning\" [value]=\"60\">\n                          </progressbar>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                  <td class=\" text-right\">\n                    <div class=\"dropdown no-caret\" dropdown>\n                      <a\n                        aria-controls=\"dropdown-basic\"\n                        class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        role=\"button\"\n                      >\n                        <i class=\" fas fa-ellipsis-v\"> </i>\n                      </a>\n\n                      <div\n                        class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                        *dropdownMenu\n                      >\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Another action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Something else here\n                        </a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr>\n                  <th scope=\"row\">\n                    <div class=\" media align-items-center\">\n                      <a\n                        class=\" avatar rounded-circle mr-3\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/angular.jpg\"\n                        />\n                      </a>\n\n                      <div class=\" media-body\">\n                        <span class=\" name mb-0 text-sm\">\n                          Angular Now UI Kit PRO\n                        </span>\n                      </div>\n                    </div>\n                  </th>\n\n                  <td class=\" budget\">$1800 USD</td>\n\n                  <td>\n                    <span class=\" badge badge-dot mr-4\">\n                      <i class=\" bg-success\"> </i>\n\n                      <span class=\" status\"> completed </span>\n                    </span>\n                  </td>\n\n                  <td>\n                    <div class=\" avatar-group\">\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Ryan Tompson\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-1.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Romina Hadid\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-2.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Alexander Smith\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-3.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Jessica Doe\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-4.jpg\"\n                        />\n                      </a>\n                    </div>\n                  </td>\n\n                  <td>\n                    <div class=\" d-flex align-items-center\">\n                      <span class=\" completion mr-2\"> 100% </span>\n\n                      <div>\n                        <div class=\" progress\">\n                          <progressbar type=\"success\" [value]=\"100\">\n                          </progressbar>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                  <td class=\" text-right\">\n                    <div class=\"dropdown no-caret\" dropdown>\n                      <a\n                        aria-controls=\"dropdown-basic\"\n                        class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        role=\"button\"\n                      >\n                        <i class=\" fas fa-ellipsis-v\"> </i>\n                      </a>\n\n                      <div\n                        class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                        *dropdownMenu\n                      >\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Another action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Something else here\n                        </a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr>\n                  <th scope=\"row\">\n                    <div class=\" media align-items-center\">\n                      <a\n                        class=\" avatar rounded-circle mr-3\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/sketch.jpg\"\n                        />\n                      </a>\n\n                      <div class=\" media-body\">\n                        <span class=\" name mb-0 text-sm\">\n                          Black Dashboard\n                        </span>\n                      </div>\n                    </div>\n                  </th>\n\n                  <td class=\" budget\">$3150 USD</td>\n\n                  <td>\n                    <span class=\" badge badge-dot mr-4\">\n                      <i class=\" bg-danger\"> </i>\n\n                      <span class=\" status\"> delayed </span>\n                    </span>\n                  </td>\n\n                  <td>\n                    <div class=\" avatar-group\">\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Ryan Tompson\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-1.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Romina Hadid\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-2.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Alexander Smith\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-3.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Jessica Doe\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-4.jpg\"\n                        />\n                      </a>\n                    </div>\n                  </td>\n\n                  <td>\n                    <div class=\" d-flex align-items-center\">\n                      <span class=\" completion mr-2\"> 72% </span>\n\n                      <div>\n                        <div class=\" progress\">\n                          <progressbar type=\"danger\" [value]=\"72\">\n                          </progressbar>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                  <td class=\" text-right\">\n                    <div class=\"dropdown no-caret\" dropdown>\n                      <a\n                        aria-controls=\"dropdown-basic\"\n                        class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        role=\"button\"\n                      >\n                        <i class=\" fas fa-ellipsis-v\"> </i>\n                      </a>\n\n                      <div\n                        class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                        *dropdownMenu\n                      >\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Another action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Something else here\n                        </a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr>\n                  <th scope=\"row\">\n                    <div class=\" media align-items-center\">\n                      <a\n                        class=\" avatar rounded-circle mr-3\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/react.jpg\"\n                        />\n                      </a>\n\n                      <div class=\" media-body\">\n                        <span class=\" name mb-0 text-sm\">\n                          React Material Dashboard\n                        </span>\n                      </div>\n                    </div>\n                  </th>\n\n                  <td class=\" budget\">$4400 USD</td>\n\n                  <td>\n                    <span class=\" badge badge-dot mr-4\">\n                      <i class=\" bg-info\"> </i>\n\n                      <span class=\" status\"> on schedule </span>\n                    </span>\n                  </td>\n\n                  <td>\n                    <div class=\" avatar-group\">\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Ryan Tompson\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-1.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Romina Hadid\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-2.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Alexander Smith\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-3.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Jessica Doe\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-4.jpg\"\n                        />\n                      </a>\n                    </div>\n                  </td>\n\n                  <td>\n                    <div class=\" d-flex align-items-center\">\n                      <span class=\" completion mr-2\"> 90% </span>\n\n                      <div>\n                        <div class=\" progress\">\n                          <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                  <td class=\" text-right\">\n                    <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                      <a\n                        aria-controls=\"dropdown-basic\"\n                        class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        role=\"button\"\n                      >\n                        <i class=\" fas fa-ellipsis-v\"> </i>\n                      </a>\n\n                      <div\n                        class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                        *dropdownMenu\n                      >\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Another action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Something else here\n                        </a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n\n                <tr>\n                  <th scope=\"row\">\n                    <div class=\" media align-items-center\">\n                      <a\n                        class=\" avatar rounded-circle mr-3\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/vue.jpg\"\n                        />\n                      </a>\n\n                      <div class=\" media-body\">\n                        <span class=\" name mb-0 text-sm\">\n                          Vue Paper UI Kit PRO\n                        </span>\n                      </div>\n                    </div>\n                  </th>\n\n                  <td class=\" budget\">$2200 USD</td>\n\n                  <td>\n                    <span class=\" badge badge-dot mr-4\">\n                      <i class=\" bg-success\"> </i>\n\n                      <span class=\" status\"> completed </span>\n                    </span>\n                  </td>\n\n                  <td>\n                    <div class=\" avatar-group\">\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Ryan Tompson\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-1.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Romina Hadid\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-2.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Alexander Smith\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-3.jpg\"\n                        />\n                      </a>\n\n                      <a\n                        class=\" avatar avatar-sm rounded-circle\"\n                        tooltip=\"Jessica Doe\"\n                        placement=\"top\"\n                        href=\"javascript:void(0)\"\n                      >\n                        <img\n                          alt=\"Image placeholder\"\n                          src=\"assets/img/theme/team-4.jpg\"\n                        />\n                      </a>\n                    </div>\n                  </td>\n\n                  <td>\n                    <div class=\" d-flex align-items-center\">\n                      <span class=\" completion mr-2\"> 100% </span>\n\n                      <div>\n                        <div class=\" progress\">\n                          <progressbar type=\"success\" [value]=\"100\">\n                          </progressbar>\n                        </div>\n                      </div>\n                    </div>\n                  </td>\n\n                  <td class=\" text-right\">\n                    <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                      <a\n                        aria-controls=\"dropdown-basic\"\n                        class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                        dropdownToggle\n                        href=\"javascript:void(0)\"\n                        role=\"button\"\n                      >\n                        <i class=\" fas fa-ellipsis-v\"> </i>\n                      </a>\n\n                      <div\n                        class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                        *dropdownMenu\n                      >\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Another action\n                        </a>\n\n                        <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                          Something else here\n                        </a>\n                      </div>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables/tables.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables/tables.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Tables</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Tables </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Tables\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card\">\n        <div class=\" card-header border-0\">\n          <h3 class=\" mb-0\">Light table</h3>\n        </div>\n\n        <div class=\" table-responsive\">\n          <table class=\" table align-items-center table-flush\">\n            <thead class=\" thead-light\">\n              <tr>\n                <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n                <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n                <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n                <th scope=\"col\">Users</th>\n\n                <th class=\" sort\" data-sort=\"completion\" scope=\"col\">\n                  Completion\n                </th>\n\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody class=\" list\">\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/bootstrap.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Argon Design System\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2500 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-warning\"> </i>\n\n                    <span class=\" status\"> pending </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 60% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"warning\" [value]=\"60\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/angular.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Angular Now UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$1800 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\"bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/sketch.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\"> Black Dashboard </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$3150 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-danger\"> </i>\n\n                    <span class=\" status\"> delayed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 72% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"danger\" [value]=\"72\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/react.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        React Material Dashboard\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$4400 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-info\"> </i>\n\n                    <span class=\" status\"> on schedule </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 90% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/vue.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Vue Paper UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2200 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n        <div class=\" card-footer py-4\">\n          <nav aria-label=\"...\">\n            <pagination [totalItems]=\"25\"\n                        class=\"justify-content-end mb-0\"\n                        [customPreviousTemplate]=\"prevTemplate\"\n                        [customNextTemplate]=\"nextTemplate\">\n            </pagination>\n\n            <ng-template #nextTemplate let-currentPage=\"currentPage\">\n              <ng-container *ngIf=\"!disabled\">\n                <i class='fas fa-angle-right'></i>\n              </ng-container>\n            </ng-template>\n\n            <ng-template #prevTemplate let-currentPage=\"currentPage\">\n              <ng-container *ngIf=\"!disabled\">\n                <i class='fas fa-angle-left'></i>\n              </ng-container>\n            </ng-template>\n\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\" card\">\n    <div class=\" card-header border-0\">\n      <div class=\" row\">\n        <div class=\" col-6\"><h3 class=\" mb-0\">Inline actions</h3></div>\n\n        <div class=\" col-6 text-right\">\n          <a\n            class=\" btn btn-sm btn-neutral btn-round btn-icon\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Edit product\"\n            placement=\"top\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fas fa-user-edit\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Export </span>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" table-responsive\">\n      <table class=\" table align-items-center table-flush\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th>Author</th>\n\n            <th>Created at</th>\n\n            <th>Product</th>\n\n            <th></th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-1.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-2.jpg\"\n              />\n\n              <b> Alex Smith </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 08/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Design System\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-3.jpg\"\n              />\n\n              <b> Samantha Ivy </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 30/08/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Black Dashboard\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-1.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-2.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\" card\">\n    <div class=\" card-header border-0\">\n      <div class=\" row\">\n        <div class=\" col-6\"><h3 class=\" mb-0\">Striped table</h3></div>\n\n        <div class=\" col-6 text-right\">\n          <a\n            class=\" btn btn-sm btn-primary btn-round btn-icon\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Edit product\"\n            placement=\"top\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fas fa-user-edit\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Export </span>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" table-responsive\">\n      <table class=\" table align-items-center table-flush table-striped\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th>Author</th>\n\n            <th>Created at</th>\n\n            <th>Product</th>\n\n            <th></th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-1.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-2.jpg\"\n              />\n\n              <b> Alex Smith </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 08/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Design System\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-3.jpg\"\n              />\n\n              <b> Samantha Ivy </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 30/08/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Black Dashboard\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-1.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n\n          <tr>\n            <td class=\" table-user\">\n              <img\n                class=\" avatar rounded-circle mr-3\"\n                src=\"assets/img/theme/team-2.jpg\"\n              />\n\n              <b> John Michael </b>\n            </td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td class=\" table-actions\">\n              <a\n                class=\"table-action\"\n                tooltip=\"Edit product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-user-edit\"> </i>\n              </a>\n\n              <a\n                class=\" table-action table-action-delete\"\n                tooltip=\"Delete product\"\n                placement=\"top\"\n                href=\"javascript:void(0)\"\n              >\n                <i class=\" fas fa-trash\"> </i>\n              </a>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\" card\">\n    <div class=\" card-header border-0\">\n      <div class=\" row\">\n        <div class=\" col-6\"><h3 class=\" mb-0\">Checkbox + Toggles</h3></div>\n\n        <div class=\" col-6 text-right\">\n          <a\n            class=\" btn btn-sm btn-danger btn-round btn-icon\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Edit product\"\n            placement=\"top\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fas fa-trash\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Delete </span>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" table-responsive\">\n      <table class=\" table align-items-center table-flush table-hover\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <th>Author</th>\n\n            <th>Created at</th>\n\n            <th>Product</th>\n\n            <th>Active</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> Alex Smith </b></td>\n\n            <td><span class=\" text-muted\"> 08/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Design System\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> Samantha Ivy </b></td>\n\n            <td><span class=\" text-muted\"> 30/08/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Black Dashboard\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\" card\">\n    <div class=\" card-header border-0\">\n      <div class=\" row\">\n        <div class=\" col-6\"><h3 class=\" mb-0\">Checkbox + Labels</h3></div>\n\n        <div class=\" col-6 text-right\">\n          <a\n            class=\" btn btn-sm btn-danger btn-round btn-icon\"\n            href=\"javascript:void(0)\"\n            tooltip=\"Edit product\"\n            placement=\"top\"\n          >\n            <span class=\" btn-inner--icon\">\n              <i class=\" fas fa-trash\"> </i>\n            </span>\n\n            <span class=\" btn-inner--text\"> Delete </span>\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" table-responsive\">\n      <table class=\" table align-items-center table-flush table-hover\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <th>Author</th>\n\n            <th>Created at</th>\n\n            <th>Product</th>\n\n            <th>Active</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr class=\" table-success\">\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr class=\" table-\">\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> Alex Smith </b></td>\n\n            <td><span class=\" text-muted\"> 08/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Design System\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr class=\" table-warning\">\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> Samantha Ivy </b></td>\n\n            <td><span class=\" text-muted\"> 30/08/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Black Dashboard\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr class=\" table-\">\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n\n          <tr class=\" table-\">\n            <th>\n              <div class=\" custom-control custom-checkbox\">\n                <input\n                  class=\" custom-control-input\"\n                  id=\"table-check-all\"\n                  type=\"checkbox\"\n                />\n\n                <label class=\" custom-control-label\" for=\"table-check-all\">\n                </label>\n              </div>\n            </th>\n\n            <td class=\" table-user\"><b> John Michael </b></td>\n\n            <td><span class=\" text-muted\"> 10/09/2018 </span></td>\n\n            <td>\n              <a class=\" font-weight-bold\" href=\"javascript:void(0)\">\n                Argon Dashboard PRO\n              </a>\n            </td>\n\n            <td>\n              <label class=\" custom-toggle\">\n                <input checked=\"checked\" type=\"checkbox\" />\n\n                <span\n                  class=\" custom-toggle-slider rounded-circle\"\n                  data-label-off=\"No\"\n                  data-label-on=\"Yes\"\n                >\n                </span>\n              </label>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\" card bg-transparent\">\n    <div class=\" card-header bg-transparent border-0\">\n      <h3 class=\" mb-0\">Translucent table</h3>\n    </div>\n\n    <div class=\" table-responsive\">\n      <table class=\" table align-items-center table-flush\">\n        <thead class=\" thead-light\">\n          <tr>\n            <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n            <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n            <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n            <th scope=\"col\">Users</th>\n\n            <th class=\" sort\" data-sort=\"completion\" scope=\"col\">Completion</th>\n\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n\n        <tbody class=\" list\">\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/bootstrap.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Argon Design System </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$2500 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-warning\"> </i>\n\n                <span class=\" status\"> pending </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 60% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"warning\" [value]=\"60\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/angular.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\">\n                    Angular Now UI Kit PRO\n                  </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$1800 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-success\"> </i>\n\n                <span class=\" status\"> completed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 100% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"success\" [value]=\"100\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/sketch.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Black Dashboard </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$3150 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-danger\"> </i>\n\n                <span class=\" status\"> delayed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 72% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"danger\" [value]=\"72\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown>\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/react.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\">\n                    React Material Dashboard\n                  </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$4400 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-info\"> </i>\n\n                <span class=\" status\"> on schedule </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 90% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <th scope=\"row\">\n              <div class=\" media align-items-center\">\n                <a\n                  class=\" avatar rounded-circle mr-3\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/vue.jpg\"\n                  />\n                </a>\n\n                <div class=\" media-body\">\n                  <span class=\" name mb-0 text-sm\"> Vue Paper UI Kit PRO </span>\n                </div>\n              </div>\n            </th>\n\n            <td class=\" budget\">$2200 USD</td>\n\n            <td>\n              <span class=\" badge badge-dot mr-4\">\n                <i class=\" bg-success\"> </i>\n\n                <span class=\" status\"> completed </span>\n              </span>\n            </td>\n\n            <td>\n              <div class=\" avatar-group\">\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Ryan Tompson\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-1.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Romina Hadid\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-2.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Alexander Smith\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-3.jpg\"\n                  />\n                </a>\n\n                <a\n                  class=\" avatar avatar-sm rounded-circle\"\n                  tooltip=\"Jessica Doe\"\n                  placement=\"top\"\n                  href=\"javascript:void(0)\"\n                >\n                  <img\n                    alt=\"Image placeholder\"\n                    src=\"assets/img/theme/team-4.jpg\"\n                  />\n                </a>\n              </div>\n            </td>\n\n            <td>\n              <div class=\" d-flex align-items-center\">\n                <span class=\" completion mr-2\"> 100% </span>\n\n                <div>\n                  <div class=\" progress\">\n                    <progressbar type=\"success\" [value]=\"100\"> </progressbar>\n                  </div>\n                </div>\n              </div>\n            </td>\n\n            <td class=\" text-right\">\n              <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                <a\n                  aria-controls=\"dropdown-basic\"\n                  class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                  dropdownToggle\n                  href=\"javascript:void(0)\"\n                  role=\"button\"\n                >\n                  <i class=\" fas fa-ellipsis-v\"> </i>\n                </a>\n\n                <div\n                  class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                  *dropdownMenu\n                >\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Another action\n                  </a>\n\n                  <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                    Something else here\n                  </a>\n                </div>\n              </div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card bg-default shadow\">\n        <div class=\" card-header bg-transparent border-0\">\n          <h3 class=\" text-white mb-0\">Dark table</h3>\n        </div>\n\n        <div class=\" table-responsive\">\n          <table class=\" table align-items-center table-dark table-flush\">\n            <thead class=\" thead-dark\">\n              <tr>\n                <th class=\" sort\" data-sort=\"name\" scope=\"col\">Project</th>\n\n                <th class=\" sort\" data-sort=\"budget\" scope=\"col\">Budget</th>\n\n                <th class=\" sort\" data-sort=\"status\" scope=\"col\">Status</th>\n\n                <th scope=\"col\">Users</th>\n\n                <th class=\" sort\" data-sort=\"completion\" scope=\"col\">\n                  Completion\n                </th>\n\n                <th scope=\"col\"></th>\n              </tr>\n            </thead>\n\n            <tbody class=\" list\">\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/bootstrap.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Argon Design System\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2500 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-warning\"> </i>\n\n                    <span class=\" status\"> pending </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 60% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"warning\" [value]=\"60\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/angular.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Angular Now UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$1800 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/sketch.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\"> Black Dashboard </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$3150 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-danger\"> </i>\n\n                    <span class=\" status\"> delayed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 72% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"danger\" [value]=\"72\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown>\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/react.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        React Material Dashboard\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$4400 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-info\"> </i>\n\n                    <span class=\" status\"> on schedule </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 90% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"info\" [value]=\"90\"> </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n\n              <tr>\n                <th scope=\"row\">\n                  <div class=\" media align-items-center\">\n                    <a\n                      class=\" avatar rounded-circle mr-3\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/vue.jpg\"\n                      />\n                    </a>\n\n                    <div class=\" media-body\">\n                      <span class=\" name mb-0 text-sm\">\n                        Vue Paper UI Kit PRO\n                      </span>\n                    </div>\n                  </div>\n                </th>\n\n                <td class=\" budget\">$2200 USD</td>\n\n                <td>\n                  <span class=\" badge badge-dot mr-4\">\n                    <i class=\" bg-success\"> </i>\n\n                    <span class=\" status\"> completed </span>\n                  </span>\n                </td>\n\n                <td>\n                  <div class=\" avatar-group\">\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Ryan Tompson\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-1.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Romina Hadid\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-2.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Alexander Smith\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-3.jpg\"\n                      />\n                    </a>\n\n                    <a\n                      class=\" avatar avatar-sm rounded-circle\"\n                      tooltip=\"Jessica Doe\"\n                      placement=\"top\"\n                      href=\"javascript:void(0)\"\n                    >\n                      <img\n                        alt=\"Image placeholder\"\n                        src=\"assets/img/theme/team-4.jpg\"\n                      />\n                    </a>\n                  </div>\n                </td>\n\n                <td>\n                  <div class=\" d-flex align-items-center\">\n                    <span class=\" completion mr-2\"> 100% </span>\n\n                    <div>\n                      <div class=\" progress\">\n                        <progressbar type=\"success\" [value]=\"100\">\n                        </progressbar>\n                      </div>\n                    </div>\n                  </div>\n                </td>\n\n                <td class=\" text-right\">\n                  <div class=\"dropdown no-caret\" dropdown [dropup]=\"'true'\">\n                    <a\n                      aria-controls=\"dropdown-basic\"\n                      class=\" btn btn-sm btn-icon-only text-light dropdown-toggle\"\n                      dropdownToggle\n                      href=\"javascript:void(0)\"\n                      role=\"button\"\n                    >\n                      <i class=\" fas fa-ellipsis-v\"> </i>\n                    </a>\n\n                    <div\n                      class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\"\n                      *dropdownMenu\n                    >\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Another action\n                      </a>\n\n                      <a href=\"javascript:void(0)\" class=\"dropdown-item\">\n                        Something else here\n                      </a>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/string-natural-compare/natural-compare.js":
/*!****************************************************************!*\
  !*** ./node_modules/string-natural-compare/natural-compare.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet;
var alphabetIndexMap;
var alphabetIndexMapLength = 0;

function isNumberCode(code) {
  return code >= 48 && code <= 57;
}

function naturalCompare(a, b) {
  var lengthA = (a += '').length;
  var lengthB = (b += '').length;
  var aIndex = 0;
  var bIndex = 0;

  while (aIndex < lengthA && bIndex < lengthB) {
    var charCodeA = a.charCodeAt(aIndex);
    var charCodeB = b.charCodeAt(bIndex);

    if (isNumberCode(charCodeA)) {
      if (!isNumberCode(charCodeB)) {
        return charCodeA - charCodeB;
      }

      var numStartA = aIndex;
      var numStartB = bIndex;

      while (charCodeA === 48 && ++numStartA < lengthA) {
        charCodeA = a.charCodeAt(numStartA);
      }
      while (charCodeB === 48 && ++numStartB < lengthB) {
        charCodeB = b.charCodeAt(numStartB);
      }

      var numEndA = numStartA;
      var numEndB = numStartB;

      while (numEndA < lengthA && isNumberCode(a.charCodeAt(numEndA))) {
        ++numEndA;
      }
      while (numEndB < lengthB && isNumberCode(b.charCodeAt(numEndB))) {
        ++numEndB;
      }

      var difference = numEndA - numStartA - numEndB + numStartB; // numA length - numB length
      if (difference) {
        return difference;
      }

      while (numStartA < numEndA) {
        difference = a.charCodeAt(numStartA++) - b.charCodeAt(numStartB++);
        if (difference) {
          return difference;
        }
      }

      aIndex = numEndA;
      bIndex = numEndB;
      continue;
    }

    if (charCodeA !== charCodeB) {
      if (
        charCodeA < alphabetIndexMapLength &&
        charCodeB < alphabetIndexMapLength &&
        alphabetIndexMap[charCodeA] !== -1 &&
        alphabetIndexMap[charCodeB] !== -1
      ) {
        return alphabetIndexMap[charCodeA] - alphabetIndexMap[charCodeB];
      }

      return charCodeA - charCodeB;
    }

    ++aIndex;
    ++bIndex;
  }

  if (aIndex >= lengthA && bIndex < lengthB && lengthA >= lengthB) {
    return -1;
  }

  if (bIndex >= lengthB && aIndex < lengthA && lengthB >= lengthA) {
    return 1;
  }

  return lengthA - lengthB;
}

naturalCompare.caseInsensitive = naturalCompare.i = function(a, b) {
  return naturalCompare(('' + a).toLowerCase(), ('' + b).toLowerCase());
};

Object.defineProperties(naturalCompare, {
  alphabet: {
    get: function() {
      return alphabet;
    },

    set: function(value) {
      alphabet = value;
      alphabetIndexMap = [];

      var i = 0;

      if (alphabet) {
        for (; i < alphabet.length; i++) {
          alphabetIndexMap[alphabet.charCodeAt(i)] = i;
        }
      }

      alphabetIndexMapLength = alphabetIndexMap.length;

      for (i = 0; i < alphabetIndexMapLength; i++) {
        if (alphabetIndexMap[i] === undefined) {
          alphabetIndexMap[i] = -1;
        }
      }
    },
  },
});

module.exports = naturalCompare;


/***/ }),

/***/ "./src/app/pages/tables/ngxdatatables/ngxdatatables.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tables/ngxdatatables/ngxdatatables.component.ts ***!
  \***********************************************************************/
/*! exports provided: SelectionType, NgxDatatablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionType", function() { return SelectionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatablesComponent", function() { return NgxDatatablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var SelectionType;
(function (SelectionType) {
    SelectionType["single"] = "single";
    SelectionType["multi"] = "multi";
    SelectionType["multiClick"] = "multiClick";
    SelectionType["cell"] = "cell";
    SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var NgxDatatablesComponent = /** @class */ (function () {
    function NgxDatatablesComponent() {
        this.entries = 10;
        this.selected = [];
        this.temp = [];
        this.rows = [
            {
                name: "Tiger Nixon",
                position: "System Architect",
                office: "Edinburgh",
                age: "61",
                start: "2011/04/25",
                salary: "$320,800"
            },
            {
                name: "Garrett Winters",
                position: "Accountant",
                office: "Tokyo",
                age: "63",
                start: "2011/07/25",
                salary: "$170,750"
            },
            {
                name: "Ashton Cox",
                position: "Junior Technical Author",
                office: "San Francisco",
                age: "66",
                start: "2009/01/12",
                salary: "$86,000"
            },
            {
                name: "Cedric Kelly",
                position: "Senior Javascript Developer",
                office: "Edinburgh",
                age: "22",
                start: "2012/03/29",
                salary: "$433,060"
            },
            {
                name: "Airi Satou",
                position: "Accountant",
                office: "Tokyo",
                age: "33",
                start: "2008/11/28",
                salary: "$162,700"
            },
            {
                name: "Brielle Williamson",
                position: "Integration Specialist",
                office: "New York",
                age: "61",
                start: "2012/12/02",
                salary: "$372,000"
            },
            {
                name: "Herrod Chandler",
                position: "Sales Assistant",
                office: "San Francisco",
                age: "59",
                start: "2012/08/06",
                salary: "$137,500"
            },
            {
                name: "Rhona Davidson",
                position: "Integration Specialist",
                office: "Tokyo",
                age: "55",
                start: "2010/10/14",
                salary: "$327,900"
            },
            {
                name: "Colleen Hurst",
                position: "Javascript Developer",
                office: "San Francisco",
                age: "39",
                start: "2009/09/15",
                salary: "$205,500"
            },
            {
                name: "Sonya Frost",
                position: "Software Engineer",
                office: "Edinburgh",
                age: "23",
                start: "2008/12/13",
                salary: "$103,600"
            },
            {
                name: "Jena Gaines",
                position: "Office Manager",
                office: "London",
                age: "30",
                start: "2008/12/19",
                salary: "$90,560"
            },
            {
                name: "Quinn Flynn",
                position: "Support Lead",
                office: "Edinburgh",
                age: "22",
                start: "2013/03/03",
                salary: "$342,000"
            },
            {
                name: "Charde Marshall",
                position: "Regional Director",
                office: "San Francisco",
                age: "36",
                start: "2008/10/16",
                salary: "$470,600"
            },
            {
                name: "Haley Kennedy",
                position: "Senior Marketing Designer",
                office: "London",
                age: "43",
                start: "2012/12/18",
                salary: "$313,500"
            },
            {
                name: "Tatyana Fitzpatrick",
                position: "Regional Director",
                office: "London",
                age: "19",
                start: "2010/03/17",
                salary: "$385,750"
            },
            {
                name: "Michael Silva",
                position: "Marketing Designer",
                office: "London",
                age: "66",
                start: "2012/11/27",
                salary: "$198,500"
            },
            {
                name: "Paul Byrd",
                position: "Chief Financial Officer (CFO)",
                office: "New York",
                age: "64",
                start: "2010/06/09",
                salary: "$725,000"
            },
            {
                name: "Gloria Little",
                position: "Systems Administrator",
                office: "New York",
                age: "59",
                start: "2009/04/10",
                salary: "$237,500"
            },
            {
                name: "Bradley Greer",
                position: "Software Engineer",
                office: "London",
                age: "41",
                start: "2012/10/13",
                salary: "$132,000"
            },
            {
                name: "Dai Rios",
                position: "Personnel Lead",
                office: "Edinburgh",
                age: "35",
                start: "2012/09/26",
                salary: "$217,500"
            },
            {
                name: "Jenette Caldwell",
                position: "Development Lead",
                office: "New York",
                age: "30",
                start: "2011/09/03",
                salary: "$345,000"
            },
            {
                name: "Yuri Berry",
                position: "Chief Marketing Officer (CMO)",
                office: "New York",
                age: "40",
                start: "2009/06/25",
                salary: "$675,000"
            },
            {
                name: "Caesar Vance",
                position: "Pre-Sales Support",
                office: "New York",
                age: "21",
                start: "2011/12/12",
                salary: "$106,450"
            },
            {
                name: "Doris Wilder",
                position: "Sales Assistant",
                office: "Sidney",
                age: "23",
                start: "2010/09/20",
                salary: "$85,600"
            },
            {
                name: "Angelica Ramos",
                position: "Chief Executive Officer (CEO)",
                office: "London",
                age: "47",
                start: "2009/10/09",
                salary: "$1,200,000"
            },
            {
                name: "Gavin Joyce",
                position: "Developer",
                office: "Edinburgh",
                age: "42",
                start: "2010/12/22",
                salary: "$92,575"
            },
            {
                name: "Jennifer Chang",
                position: "Regional Director",
                office: "Singapore",
                age: "28",
                start: "2010/11/14",
                salary: "$357,650"
            },
            {
                name: "Brenden Wagner",
                position: "Software Engineer",
                office: "San Francisco",
                age: "28",
                start: "2011/06/07",
                salary: "$206,850"
            },
            {
                name: "Fiona Green",
                position: "Chief Operating Officer (COO)",
                office: "San Francisco",
                age: "48",
                start: "2010/03/11",
                salary: "$850,000"
            },
            {
                name: "Shou Itou",
                position: "Regional Marketing",
                office: "Tokyo",
                age: "20",
                start: "2011/08/14",
                salary: "$163,000"
            },
            {
                name: "Michelle House",
                position: "Integration Specialist",
                office: "Sidney",
                age: "37",
                start: "2011/06/02",
                salary: "$95,400"
            },
            {
                name: "Suki Burks",
                position: "Developer",
                office: "London",
                age: "53",
                start: "2009/10/22",
                salary: "$114,500"
            },
            {
                name: "Prescott Bartlett",
                position: "Technical Author",
                office: "London",
                age: "27",
                start: "2011/05/07",
                salary: "$145,000"
            },
            {
                name: "Gavin Cortez",
                position: "Team Leader",
                office: "San Francisco",
                age: "22",
                start: "2008/10/26",
                salary: "$235,500"
            },
            {
                name: "Martena Mccray",
                position: "Post-Sales support",
                office: "Edinburgh",
                age: "46",
                start: "2011/03/09",
                salary: "$324,050"
            },
            {
                name: "Unity Butler",
                position: "Marketing Designer",
                office: "San Francisco",
                age: "47",
                start: "2009/12/09",
                salary: "$85,675"
            },
            {
                name: "Howard Hatfield",
                position: "Office Manager",
                office: "San Francisco",
                age: "51",
                start: "2008/12/16",
                salary: "$164,500"
            },
            {
                name: "Hope Fuentes",
                position: "Secretary",
                office: "San Francisco",
                age: "41",
                start: "2010/02/12",
                salary: "$109,850"
            },
            {
                name: "Vivian Harrell",
                position: "Financial Controller",
                office: "San Francisco",
                age: "62",
                start: "2009/02/14",
                salary: "$452,500"
            },
            {
                name: "Timothy Mooney",
                position: "Office Manager",
                office: "London",
                age: "37",
                start: "2008/12/11",
                salary: "$136,200"
            },
            {
                name: "Jackson Bradshaw",
                position: "Director",
                office: "New York",
                age: "65",
                start: "2008/09/26",
                salary: "$645,750"
            },
            {
                name: "Olivia Liang",
                position: "Support Engineer",
                office: "Singapore",
                age: "64",
                start: "2011/02/03",
                salary: "$234,500"
            },
            {
                name: "Bruno Nash",
                position: "Software Engineer",
                office: "London",
                age: "38",
                start: "2011/05/03",
                salary: "$163,500"
            },
            {
                name: "Sakura Yamamoto",
                position: "Support Engineer",
                office: "Tokyo",
                age: "37",
                start: "2009/08/19",
                salary: "$139,575"
            },
            {
                name: "Thor Walton",
                position: "Developer",
                office: "New York",
                age: "61",
                start: "2013/08/11",
                salary: "$98,540"
            },
            {
                name: "Finn Camacho",
                position: "Support Engineer",
                office: "San Francisco",
                age: "47",
                start: "2009/07/07",
                salary: "$87,500"
            },
            {
                name: "Serge Baldwin",
                position: "Data Coordinator",
                office: "Singapore",
                age: "64",
                start: "2012/04/09",
                salary: "$138,575"
            },
            {
                name: "Zenaida Frank",
                position: "Software Engineer",
                office: "New York",
                age: "63",
                start: "2010/01/04",
                salary: "$125,250"
            },
            {
                name: "Zorita Serrano",
                position: "Software Engineer",
                office: "San Francisco",
                age: "56",
                start: "2012/06/01",
                salary: "$115,000"
            },
            {
                name: "Jennifer Acosta",
                position: "Junior Javascript Developer",
                office: "Edinburgh",
                age: "43",
                start: "2013/02/01",
                salary: "$75,650"
            },
            {
                name: "Cara Stevens",
                position: "Sales Assistant",
                office: "New York",
                age: "46",
                start: "2011/12/06",
                salary: "$145,600"
            },
            {
                name: "Hermione Butler",
                position: "Regional Director",
                office: "London",
                age: "47",
                start: "2011/03/21",
                salary: "$356,250"
            },
            {
                name: "Lael Greer",
                position: "Systems Administrator",
                office: "London",
                age: "21",
                start: "2009/02/27",
                salary: "$103,500"
            },
            {
                name: "Jonas Alexander",
                position: "Developer",
                office: "San Francisco",
                age: "30",
                start: "2010/07/14",
                salary: "$86,500"
            },
            {
                name: "Shad Decker",
                position: "Regional Director",
                office: "Edinburgh",
                age: "51",
                start: "2008/11/13",
                salary: "$183,000"
            },
            {
                name: "Michael Bruce",
                position: "Javascript Developer",
                office: "Singapore",
                age: "29",
                start: "2011/06/27",
                salary: "$183,000"
            },
            {
                name: "Donna Snider",
                position: "Customer Support",
                office: "New York",
                age: "27",
                start: "2011/01/25",
                salary: "$112,000"
            }
        ];
        this.SelectionType = SelectionType;
        this.temp = this.rows.map(function (prop, key) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, prop), { id: key });
        });
    }
    NgxDatatablesComponent.prototype.entriesChange = function ($event) {
        this.entries = $event.target.value;
    };
    NgxDatatablesComponent.prototype.filterTable = function ($event) {
        var val = $event.target.value;
        this.temp = this.rows.filter(function (d) {
            for (var key in d) {
                if (d[key].toLowerCase().indexOf(val) !== -1) {
                    return true;
                }
            }
            return false;
        });
    };
    NgxDatatablesComponent.prototype.onSelect = function (_a) {
        var _b;
        var selected = _a.selected;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    NgxDatatablesComponent.prototype.onActivate = function (event) {
        this.activeRow = event.row;
    };
    NgxDatatablesComponent.prototype.ngOnInit = function () { };
    NgxDatatablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-ngxdatatables",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ngxdatatables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/ngxdatatables/ngxdatatables.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxDatatablesComponent);
    return NgxDatatablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/sortable/sortable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tables/sortable/sortable.component.ts ***!
  \*************************************************************/
/*! exports provided: SortableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableComponent", function() { return SortableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! list.js */ "./node_modules/list.js/src/index.js");
/* harmony import */ var list_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(list_js__WEBPACK_IMPORTED_MODULE_2__);



var SortableComponent = /** @class */ (function () {
    function SortableComponent() {
    }
    SortableComponent.prototype.ngOnInit = function () {
        new list_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById("first-list"), {
            valueNames: ["name", "budget", "status", "completion"],
            listClass: "list"
        });
        new list_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById("second-list"), {
            valueNames: ["name", "budget", "status", "completion"],
            listClass: "list"
        });
        new list_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById("third-list"), {
            valueNames: ["name", "budget", "status", "completion"],
            listClass: "list"
        });
    };
    SortableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sortable",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sortable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/sortable/sortable.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SortableComponent);
    return SortableComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/__ivy_ngcc__/fesm5/ngx-print.js");
/* harmony import */ var _ngxdatatables_ngxdatatables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ngxdatatables/ngxdatatables.component */ "./src/app/pages/tables/ngxdatatables/ngxdatatables.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/pages/tables/tables/tables.component.ts");
/* harmony import */ var _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sortable/sortable.component */ "./src/app/pages/tables/sortable/sortable.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tables_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tables.routing */ "./src/app/pages/tables/tables.routing.ts");














var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngxdatatables_ngxdatatables_component__WEBPACK_IMPORTED_MODULE_9__["NgxDatatablesComponent"], _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_11__["SortableComponent"], _tables_tables_component__WEBPACK_IMPORTED_MODULE_10__["TablesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(_tables_routing__WEBPACK_IMPORTED_MODULE_13__["TablesRoutes"]),
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_3__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipModule"].forRoot(),
                ngx_print__WEBPACK_IMPORTED_MODULE_8__["NgxPrintModule"]
            ]
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tables/tables.routing.ts ***!
  \************************************************/
/*! exports provided: TablesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutes", function() { return TablesRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngxdatatables_ngxdatatables_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngxdatatables/ngxdatatables.component */ "./src/app/pages/tables/ngxdatatables/ngxdatatables.component.ts");
/* harmony import */ var _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortable/sortable.component */ "./src/app/pages/tables/sortable/sortable.component.ts");
/* harmony import */ var _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables/tables.component */ "./src/app/pages/tables/tables/tables.component.ts");




var TablesRoutes = [
    {
        path: "",
        children: [
            {
                path: "ngx-datatable",
                component: _ngxdatatables_ngxdatatables_component__WEBPACK_IMPORTED_MODULE_1__["NgxDatatablesComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "sortable",
                component: _sortable_sortable_component__WEBPACK_IMPORTED_MODULE_2__["SortableComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "tables",
                component: _tables_tables_component__WEBPACK_IMPORTED_MODULE_3__["TablesComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/tables/tables/tables.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tables/tables/tables.component.ts ***!
  \*********************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    TablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tables",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables/tables.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tables-tables-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Documents\Franzi_lokal\WHK\Projekte\iasa-research_Github\TraceabilityApp\traceapp-UI\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "BPwi":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");







function OverviewComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const issue_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("href", "https://hbrs.atlassian.net/browse/", issue_r6.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r6.summary);
} }
function OverviewComponent_h2_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "There are no issues to review.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function OverviewComponent_mat_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const issue_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("href", "https://hbrs.atlassian.net/browse/", issue_r7.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r7.summary);
} }
function OverviewComponent_h2_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "There are no issues without traces.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function OverviewComponent_mat_card_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const issue_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("href", "https://hbrs.atlassian.net/browse/", issue_r8.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r8.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](issue_r8.summary);
} }
function OverviewComponent_h2_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "There are no issues with traces.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
class OverviewComponent {
    //options = {autoHide: false, scrollbarMinSize: 100}; ?
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getNonTraceableIssues();
            yield this.getTraceableIssues();
            yield this.getRevieableIssues();
        });
    }
    getNonTraceableIssues() {
        this.http.get(`/api/neo4j/nonTraceableIssues`).subscribe((data) => {
            this.nonTraceableIssues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
        });
    }
    getTraceableIssues() {
        this.http.get(`/api/neo4j/traceableIssues`).subscribe((data) => {
            this.traceableIssues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
        });
    }
    getRevieableIssues() {
        this.http.get('/api/neo4j/reviewableIssues').subscribe((data) => {
            this.reviewableIssues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
        });
    }
}
OverviewComponent.??fac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OverviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 19, vars: 6, consts: [[2, "padding-top", "30px", "padding-bottom", "40px", "position", "fixed", "width", "100%"], ["align", "center", 2, "color", "#2c397e", "font-weight", "bold", "padding-bottom", "30px"], [2, "display", "flex", "flex-direction", "row", "width", "100%", "height", "80%", "justify-content", "center", "overflow", "hidden", "margin-bottom", "140px"], [1, "columns"], ["mat-subheader", "", "matTooltip", "This is a list of requirements you should review, because the classes they're implemented in\n         underwent changes. Head to 'Review Changes'."], [4, "ngFor", "ngForOf"], ["style", "text-align: center", 4, "ngIf"], ["mat-subheader", "", "matTooltip", "These requirements haven't been associated with any classes and thus are not traceable."], ["mat-subheader", "", "matTooltip", "These requirements have been associated with classes and thus are traceable."], ["target", "_blank", 2, "font-weight", "bold", 3, "href"], [1, "text"], [2, "text-align", "center"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "body", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](2, "Overview of your requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "To be reviewed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](7, OverviewComponent_mat_card_7_Template, 5, 3, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, OverviewComponent_h2_8_Template, 2, 0, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "Non-traceable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](12, OverviewComponent_mat_card_12_Template, 5, 3, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](13, OverviewComponent_h2_13_Template, 2, 0, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "mat-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](16, "Traceable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](17, OverviewComponent_mat_card_17_Template, 5, 3, "mat-card", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](18, OverviewComponent_h2_18_Template, 2, 0, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.reviewableIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.reviewableIssues.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.nonTraceableIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.nonTraceableIssues.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.traceableIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.traceableIssues.length == 0);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"]], styles: [".text[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.columns[_ngcontent-%COMP%] {\n  width: 27%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.columns[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 16px;\n}\n\n.columns[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  margin: 1px;\n}\n\n.columns[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  margin-top: 16px;\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #F5F5F5;\n}\n\n.columns[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n\n.columns[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  margin-top: 16px;\n  border-radius: 10px;\n  -webkit-box-shadow: inset 0 0 6px rgba(167, 43, 43, 0.3);\n  background-color: #555;\n}\n\n  .mat-card .card {\n  border: 2px red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdEQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0FBQUYiLCJmaWxlIjoib3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uY29sdW1ucyB7XHJcbiAgd2lkdGg6IDI3JTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uY29sdW1ucyBkaXYge1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmNvbHVtbnMgbWF0LWNhcmR7XHJcbiAgbWFyZ2luOiAxcHg7XHJcbn1cclxuXHJcblxyXG4uY29sdW1uczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi5jb2x1bW5zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLmNvbHVtbnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMTY3LCA0MywgNDMsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtY2FyZCAuY2FyZCB7XHJcbiAgYm9yZGVyOiAycHggcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "KffV":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function ReviewComponent_mat_list_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-list-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_mat_list_option_7_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r5); const issue_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); ctx_r4.getReq(issue_r3.key); ctx_r4.getClassesForReq(issue_r3.key); return ctx_r4.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const issue_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", ctx_r0.issues[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](issue_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](issue_r3.summary);
} }
function ReviewComponent_div_8_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](c_r12.name);
} }
function ReviewComponent_div_8_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r7.selectedIssue.fields.assignee.displayName);
} }
function ReviewComponent_div_8_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](0, "td");
} }
function ReviewComponent_div_8_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r9.selectedIssue.fields.reporter.displayName);
} }
function ReviewComponent_div_8_div_47_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const cl_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](cl_r14);
} }
function ReviewComponent_div_8_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ReviewComponent_div_8_div_47_tr_2_Template, 3, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_div_47_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); ctx_r15.edit = true; return ctx_r15.getAvailableClasses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](5, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r10.selectedIssuesClasses);
} }
function ReviewComponent_div_8_div_48_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_div_48_tr_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r22); const cl_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r21.deleteTraceBox(ctx_r21.selectedIssue.key, cl_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const cl_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](cl_r20);
} }
function ReviewComponent_div_8_div_48_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("value", c_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](c_r23);
} }
function ReviewComponent_div_8_div_48_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "Please choose a class.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function ReviewComponent_div_8_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, ReviewComponent_div_8_div_48_tr_2_Template, 7, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, ReviewComponent_div_8_div_48_mat_option_9_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](10, ReviewComponent_div_8_div_48_mat_error_10_Template, 2, 0, "mat-error", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](12, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_div_48_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r24.addTrace(ctx_r24.selectedIssue.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](16, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_div_48_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2); return ctx_r26.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r11.selectedIssuesClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formControl", ctx_r11.classControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r11.availableClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r11.classControl.hasError("required"));
} }
function ReviewComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](6, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r27.finishReview(ctx_r27.selectedIssue.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](10, "Finish Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function ReviewComponent_div_8_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r29.finishAllBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](12, "Finish All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](16, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](17, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](19, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](20, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](21, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](23, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Priority:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](28, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](29, "Component(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](30, ReviewComponent_div_8_td_30_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](31, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](32, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](33, "Assignee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, ReviewComponent_div_8_td_34_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](35, ReviewComponent_div_8_td_35_Template, 1, 0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](36, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, "Reporter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](38, ReviewComponent_div_8_td_38_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](44, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](45, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](46, "Implemented in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](47, ReviewComponent_div_8_div_47_Template, 6, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](48, ReviewComponent_div_8_div_48_Template, 18, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", ctx_r1.selectedIssue.fields.project.name, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????propertyInterpolate1"]("href", "https://hbrs.atlassian.net/browse/", ctx_r1.selectedIssue.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.fields.issuetype.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.fields.status.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.fields.priority.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx_r1.selectedIssue.fields.components);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.selectedIssue.fields.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r1.selectedIssue.fields.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.selectedIssue.fields.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx_r1.selectedIssue.fields.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx_r1.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.edit);
} }
function ReviewComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "h1", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2, "There are no requirements to review.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class ReviewComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.edit = false;
        this.classControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required);
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]();
    }
    ngOnInit() {
        this.http.get('/api/neo4j/reviewableIssues').subscribe((data) => {
            this.issues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
            this.searchIssues = data;
            // console.log(data)
            if (this.issues.length != 0) {
                this.getReq(this.issues[0].key);
                this.getClassesForReq(this.issues[0].key);
            }
        });
    }
    getReq(key) {
        this.http.get(`/api/jira/byKey/${key}`).subscribe((data) => {
            this.selectedIssue = data;
        });
    }
    getAvailableClasses() {
        this.http.get(`/api/neo4j/allClassNames`).subscribe((data) => {
            this.availableClasses = data.filter(n => !this.selectedIssuesClasses.includes(n)).sort();
        });
    }
    getClassesForReq(key) {
        this.http.get(`/api/neo4j/classes/${key}`).subscribe((data) => {
            this.selectedIssuesClasses = data.sort();
        });
    }
    deleteTrace(key, cl) {
        this.http.post('/api/neo4j/deleteTrace', { key: key, filename: cl }, { responseType: 'text' }).subscribe();
        this.getClassesForReq(key);
    }
    deleteTraceBox(key, cl) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Do you really want to delete the trace?',
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteTrace(key, cl);
            }
        });
    }
    addTrace(key) {
        console.log(this.classControl.value);
        this.http.post('/api/neo4j/addTrace', {
            key: key,
            filename: this.classControl.value
        }, { responseType: 'text' }).subscribe(r => {
            this.getClassesForReq(key);
            this.getAvailableClasses();
        });
    }
    searchChange() {
        this.issues = this.searchIssues.filter(i => i.key.toLowerCase().includes(this.searchControl.value.toLowerCase()) ||
            i.summary.toLowerCase().includes(this.searchControl.value.toLowerCase()));
    }
    finishReview(key) {
        this.http.post('/api/neo4j/finishReview', { key: key }, { responseType: "text" }).subscribe(() => {
            this.getIssues();
        });
    }
    getIssues() {
        this.http.get('/api/neo4j/reviewableIssues').subscribe((data) => {
            this.issues = data;
            this.searchIssues = data.sort((a, b) => a.key.localeCompare(b.key));
            ;
            if (this.issues.length != 0) {
                this.getReq(this.issues[0].key);
                this.getClassesForReq(this.issues[0].key);
            }
        });
    }
    finishAllBox() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Do you really want to dismiss every issue warning?',
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.finishAll();
            }
        });
    }
    finishAll() {
        this.http.get('/api/neo4j/setIssuesToFalse', { responseType: "text" }).subscribe((r) => {
            console.log(r);
            this.getIssues();
            this.selectedIssue = null;
        });
    }
}
ReviewComponent.??fac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ReviewComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], decls: 10, vars: 5, consts: [[1, "searchbar", 3, "input"], ["matTooltip", "Enter an issue's key or its summary to search for it.", "appearance", "outline"], ["type", "text", "placeholder", "SEARCH FOR REQUIREMENTS BY KEY OR TITLE", "matInput", "", 3, "formControl", "change"], [1, "main-container"], [1, "issues", 3, "multiple"], ["matTooltip", "A list of all the requirements you should review.", "mat-subheader", "", 2, "color", "#000000", "font-size", "16px"], ["style", "margin: 1px;", 3, "value", "click", 4, "ngFor", "ngForOf"], ["class", "right-container", 4, "ngIf"], [2, "margin", "1px", 3, "value", "click"], [1, "issuekey"], [1, "text"], [1, "right-container"], ["target", "_blank", "matTooltip", "This link takes you to the issue in Jira.", 3, "href"], [2, "display", "flex", "justify-content", "space-between"], [2, "font-weight", "bold"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to finish the review for this specific requirement", 2, "margin-right", "5px", 3, "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to finish the review for all of the shown requirements. It will mark them as reviewed.", 3, "click"], [2, "padding-right", "50px", "font-weight", "bold"], [2, "padding-right", "150px"], [2, "padding-right", "50px"], [2, "font-weight", "bold", "padding-right", "50px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["width", "100%", 1, "classes"], ["style", "height: 41px;", "class", "classes", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to add elements to this requirement.", 3, "click"], [1, "classes", 2, "height", "41px"], [1, "classes"], ["class", "classes", 4, "ngFor", "ngForOf"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["width", "5%", 1, "classes", 2, "padding", "0", "text-align", "center", "vertical-align", "middle"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"], [2, "padding-top", "50px", "text-align", "center"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("input", function ReviewComponent_Template_form_input_0_listener() { return ctx.searchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("change", function ReviewComponent_Template_input_change_2_listener() { return ctx.searchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](7, ReviewComponent_mat_list_option_7_Template, 6, 3, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](8, ReviewComponent_div_8_Template, 49, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](9, ReviewComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.issues);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.selectedIssue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !ctx.selectedIssue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0px !important;\n}\n\n  .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n\n  .mat-list-item-content {\n  padding-right: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQXlELDZCQUFBO0FBRXpEOztBQURBO0VBQTBDLFdBQUE7QUFLMUM7O0FBSEE7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSEE7RUFDRSwyQkFBQTtBQU1GIiwiZmlsZSI6InJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweCAwIDAgMjhweCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMjhweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogIzA0M2I4MiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDI4cHggMjhweCAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDQzYjgyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNGVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "P3Eo":
/*!********************************************************!*\
  !*** ./src/app/requirements/requirements.component.ts ***!
  \********************************************************/
/*! exports provided: RequirementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementsComponent", function() { return RequirementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function RequirementsComponent_mat_list_option_7_h2_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "There are no requirements. Create issues in your Jira project or check the neo4jRouter.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function RequirementsComponent_mat_list_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-list-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RequirementsComponent_mat_list_option_7_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r5); const issue_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); ctx_r4.getReq(issue_r2.key); ctx_r4.getClassesForReq(issue_r2.key); return ctx_r4.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, RequirementsComponent_mat_list_option_7_h2_7_Template, 2, 0, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const issue_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](issue_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](issue_r2.fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r0.issues.length == 0);
} }
function RequirementsComponent_div_8_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](c_r12.name);
} }
function RequirementsComponent_div_8_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r7.selectedIssue.fields.assignee.displayName);
} }
function RequirementsComponent_div_8_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "td");
} }
function RequirementsComponent_div_8_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r9.selectedIssue.fields.reporter.displayName);
} }
function RequirementsComponent_div_8_div_41_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const cl_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](cl_r14);
} }
function RequirementsComponent_div_8_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, RequirementsComponent_div_8_div_41_tr_2_Template, 3, 1, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RequirementsComponent_div_8_div_41_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); ctx_r15.edit = true; return ctx_r15.getAvailableClasses(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r10.selectedIssuesClasses);
} }
function RequirementsComponent_div_8_div_42_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RequirementsComponent_div_8_div_42_tr_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const cl_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r21.deleteTraceBox(ctx_r21.selectedIssue.key, cl_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const cl_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](cl_r20);
} }
function RequirementsComponent_div_8_div_42_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const c_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", c_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](c_r23);
} }
function RequirementsComponent_div_8_div_42_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Please choose a class.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function RequirementsComponent_div_8_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, RequirementsComponent_div_8_div_42_tr_2_Template, 7, 1, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, RequirementsComponent_div_8_div_42_mat_option_9_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, RequirementsComponent_div_8_div_42_mat_error_10_Template, 2, 0, "mat-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RequirementsComponent_div_8_div_42_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r24.addTrace(ctx_r24.selectedIssue.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function RequirementsComponent_div_8_div_42_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r26.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r11.selectedIssuesClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formControl", ctx_r11.classControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r11.availableClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r11.classControl.hasError("required"));
} }
function RequirementsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](10, "Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "Priority:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](22, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "Component(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](24, RequirementsComponent_div_8_td_24_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](27, "Assignee:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](28, RequirementsComponent_div_8_td_28_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](29, RequirementsComponent_div_8_td_29_Template, 1, 0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](30, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](31, "Reporter:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](32, RequirementsComponent_div_8_td_32_Template, 2, 1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](34, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](35, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](38, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](39, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](40, "Implemented in:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](41, RequirementsComponent_div_8_div_41_Template, 6, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, RequirementsComponent_div_8_div_42_Template, 18, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"]("", ctx_r1.selectedIssue.fields.project.name, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("href", "https://hbrs.atlassian.net/browse/", ctx_r1.selectedIssue.key, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.fields.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.fields.issuetype.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.fields.status.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.fields.priority.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r1.selectedIssue.fields.components);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.selectedIssue.fields.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r1.selectedIssue.fields.assignee);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.selectedIssue.fields.reporter);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedIssue.fields.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r1.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.edit);
} }
class RequirementsComponent {
    constructor(http) {
        this.http = http;
        this.edit = false;
        this.classControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    ngOnInit() {
        this.http.get('/api/jira/allIssues').subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.issues = data;
            this.searchIssues = data;
            if (this.issues.length != 0) {
                yield this.getReq(this.issues[0].key);
                yield this.getClassesForReq(this.issues[0].key);
                this.selectedIssue = this.issues[0];
            }
        }));
    }
    getReq(key) {
        this.selectedIssue = this.issues.find(obj => { return obj.key == key; });
        /*
        this.http.get(`/api/jira/byKey/${key}`).subscribe((data: Issue) => {
          this.selectedIssue = data;
        })
    
         */
    }
    getAvailableClasses() {
        this.http.get(`/api/neo4j/allClassNames`).subscribe((data) => {
            this.availableClasses = data.filter(n => !this.selectedIssuesClasses.includes(n)).sort();
        });
    }
    getClassesForReq(key) {
        this.http.get(`/api/neo4j/classes/${key}`).subscribe((data) => {
            this.selectedIssuesClasses = data.sort();
        });
    }
    deleteTrace(key, cl) {
        this.http.post('/api/neo4j/deleteTrace', { key: key, filename: cl }, { responseType: 'text' }).subscribe();
        this.getClassesForReq(key);
    }
    deleteTraceBox(key, cl) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
            title: 'Do you really want to delete the trace?',
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteTrace(key, cl);
            }
        });
    }
    addTrace(key) {
        console.log(this.classControl.value);
        this.http.post('/api/neo4j/addTrace', { key: key, filename: this.classControl.value }, { responseType: 'text' }).subscribe(r => {
            this.getClassesForReq(key);
            this.getAvailableClasses();
        });
    }
    searchIssue() {
        this.issues = this.searchIssues.filter(i => i.key.toLowerCase().includes(this.searchControl.value.toLowerCase()) ||
            i.fields.summary.toLowerCase().includes(this.searchControl.value.toLowerCase()));
    }
}
RequirementsComponent.??fac = function RequirementsComponent_Factory(t) { return new (t || RequirementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RequirementsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: RequirementsComponent, selectors: [["app-requirements"]], decls: 9, vars: 4, consts: [[1, "searchbar", 3, "input"], ["matTooltip", "Enter an issue's key or its summary to search for it.", "appearance", "outline"], ["type", "text", "placeholder", "SEARCH FOR REQUIREMENTS BY KEY OR TITLE", "matInput", "", 3, "formControl"], [1, "main-container"], [1, "issues", 3, "multiple"], ["matTooltip", "A list of all of your requirements.", "mat-subheader", "", 2, "color", "#000000", "font-size", "16px"], ["style", "margin: 1px;", 3, "click", 4, "ngFor", "ngForOf"], ["class", "right-container", 4, "ngIf"], [2, "margin", "1px", 3, "click"], [1, "issuekey"], [1, "text"], ["style", "text-align: center", 4, "ngIf"], [2, "text-align", "center"], [1, "right-container"], ["target", "_blank", "matTooltip", "This link takes you to the issue in Jira.", 3, "href"], [2, "font-weight", "bold"], [2, "padding-right", "50px", "font-weight", "bold"], ["matTooltip", "The tyoe of the issue", 2, "padding-right", "150px"], [2, "padding-right", "50px"], [2, "font-weight", "bold", "padding-right", "50px"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["width", "100%", 1, "classes"], ["style", "height: 41px;", "class", "classes", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Click to add elements to this requirement.", 3, "click"], [1, "classes", 2, "height", "41px"], [1, "classes"], ["class", "classes", 4, "ngFor", "ngForOf"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["width", "5%", 1, "classes", 2, "padding", "0", "text-align", "center", "vertical-align", "middle"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["mat-raised-button", "", "color", "primary", 3, "click"], [3, "value"]], template: function RequirementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("input", function RequirementsComponent_Template_form_input_0_listener() { return ctx.searchIssue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, " Requirements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, RequirementsComponent_mat_list_option_7_Template, 8, 3, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, RequirementsComponent_div_8_Template, 43, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.issues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.selectedIssue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0 !important;\n}\n\n  .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJlcXVpcmVtZW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQXlELDJCQUFBO0FBRXpEOztBQURBO0VBQTBDLFdBQUE7QUFLMUM7O0FBSEE7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0FBTUYiLCJmaWxlIjoicmVxdWlyZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4IDAgMCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDQzYjgyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjhweCAyOHB4IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwNDNiODIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC40ZW0gMCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "T6dB":
/*!********************************************************!*\
  !*** ./src/app/architecture/architecture.component.ts ***!
  \********************************************************/
/*! exports provided: ArchitectureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchitectureComponent", function() { return ArchitectureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















function ArchitectureComponent_mat_list_option_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-list-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ArchitectureComponent_mat_list_option_7_Template_mat_list_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r5); const c_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); ctx_r4.getIssuesForClass(c_r3.filename); ctx_r4.selectedClass = c_r3; return ctx_r4.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](c_r3.filename);
} }
function ArchitectureComponent_div_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("href", "https://github.com/marie-becker/prioTool/blob/master/", ctx_r6.selectedClass.path, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r6.selectedClass.path);
} }
function ArchitectureComponent_div_8_div_13_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const issue_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", issue_r10.key, " - ", issue_r10.summary, "");
} }
function ArchitectureComponent_div_8_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ArchitectureComponent_div_8_div_13_tr_2_Template, 3, 2, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ArchitectureComponent_div_8_div_13_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); ctx_r11.edit = true; return ctx_r11.getAvailableIssues(ctx_r11.selectedClass); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r7.selectedClassIssues);
} }
function ArchitectureComponent_div_8_div_14_tr_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ArchitectureComponent_div_8_div_14_tr_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r19); const issue_r17 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r18.del(issue_r17.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const issue_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", issue_r17.key, " - ", issue_r17.summary, "");
} }
function ArchitectureComponent_div_8_div_14_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const issue_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("value", issue_r20.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"]("", issue_r20.key, " - ", issue_r20.summary, "");
} }
function ArchitectureComponent_div_8_div_14_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Please choose a requirement.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ArchitectureComponent_div_8_div_14_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ArchitectureComponent_div_8_div_14_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](3); return ctx_r21.edit = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function ArchitectureComponent_div_8_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, ArchitectureComponent_div_8_div_14_tr_2_Template, 7, 2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "mat-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, ArchitectureComponent_div_8_div_14_mat_option_9_Template, 2, 3, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](10, ArchitectureComponent_div_8_div_14_mat_error_10_Template, 2, 0, "mat-error", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function ArchitectureComponent_div_8_div_14_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r23.addTrace(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](14, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](16, ArchitectureComponent_div_8_div_14_button_16_Template, 2, 0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r8.selectedClassIssues);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formControl", ctx_r8.issueControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx_r8.availableIssues);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r8.issueControl.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r8.edit);
} }
function ArchitectureComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, ArchitectureComponent_div_8_a_1_Template, 2, 2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7, "Last commit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](8, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](12, "Implements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, ArchitectureComponent_div_8_div_13_Template, 6, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](14, ArchitectureComponent_div_8_div_14_Template, 17, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.selectedClass.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedClass.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](ctx_r1.selectedClass.lastcommit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.edit == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.edit == true);
} }
function ArchitectureComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2, "There are no software classes. Import your Git-repository to show its classes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
class ArchitectureComponent {
    constructor(http) {
        this.http = http;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.edit = false;
        this.issueControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //await this.getAllClasses();
            this.http.get('/api/neo4j/classList').subscribe((data) => {
                console.log(data);
                this.classes = data.sort((a, b) => a.filename.localeCompare(b.filename));
                this.searchClasses = this.classes;
                if (this.classes.length != 0) {
                    this.selectedClass = this.classes[0];
                    this.getIssuesForClass(this.classes[0].filename);
                }
            });
        });
    }
    searchChange() {
        this.classes = this.searchClasses.filter(i => i.filename.toLowerCase().includes(this.searchControl.value.toLowerCase()));
    }
    getAvailableIssues(file) {
        console.log(file);
        this.http.post(`/api/neo4j/availableIssues`, { file: file }).toPromise()
            .then((data) => {
            console.log(data.length);
            this.availableIssues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
        })
            .catch(error => console.log(error));
    }
    getIssuesForClass(filename) {
        this.http.get(`/api/neo4j/issuesOfClass/${filename}`).toPromise()
            .then((data) => {
            this.selectedClassIssues = data.sort((a, b) => a.key.localeCompare(b.key, undefined, { numeric: true }));
        });
    }
    addTrace() {
        this.http.post('/api/neo4j/addTrace', {
            key: this.issueControl.value,
            filename: this.selectedClass.filename
        }, { responseType: 'text' }).toPromise()
            .then((r) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getIssuesForClass(this.selectedClass.filename);
            yield this.getAvailableIssues(this.selectedClass);
        }));
    }
    getAllClasses() {
        this.http.get('/api/neo4j/classList').subscribe((data) => {
            this.classes = data;
            this.searchClasses = data;
        });
    }
    deleteTrace(key) {
        this.http.post('/api/neo4j/deleteTrace', {
            key: key,
            filename: this.selectedClass.filename
        }, { responseType: 'text' }).subscribe();
        this.getIssuesForClass(this.selectedClass.filename);
    }
    del(key) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Do you really want to delete the trace?',
            showCancelButton: true,
            confirmButtonColor: "#1976d2",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
            showConfirmButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteTrace(key);
            }
        });
    }
}
ArchitectureComponent.??fac = function ArchitectureComponent_Factory(t) { return new (t || ArchitectureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ArchitectureComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: ArchitectureComponent, selectors: [["app-architecture"]], decls: 10, vars: 5, consts: [[1, "searchbar", 3, "input"], ["matTooltip", "Enter an issue's key or its summary to search for it.", "appearance", "outline"], ["type", "text", "placeholder", "SEARCH FOR SOFTWARE CLASSES", "matInput", "", 3, "formControl", "change"], [1, "main-container"], [1, "issues", 3, "multiple"], ["mat-subheader", "", "matTooltip", "A list of your projects classes.", 2, "color", "#000000", "font-size", "16px"], ["style", "margin: 1px;", 3, "click", 4, "ngFor", "ngForOf"], ["class", "right-container", 4, "ngIf"], [2, "margin", "1px", 3, "click"], [1, "right-container"], [3, "href", 4, "ngIf"], [2, "font-weight", "bold"], [2, "padding-right", "50px", "font-weight", "bold"], [2, "padding-right", "150px"], [4, "ngIf"], [3, "href"], ["width", "100%", 1, "classes"], ["style", "", "class", "classes", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "classes"], ["class", "classes", 4, "ngFor", "ngForOf"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["width", "5%", 1, "classes", 2, "padding", "0", "text-align", "center", "vertical-align", "middle"], ["mat-icon-button", "", 3, "click"], ["color", "primary"], ["mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], [3, "value"], [2, "padding-top", "50px"]], template: function ArchitectureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("input", function ArchitectureComponent_Template_form_input_0_listener() { return ctx.searchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("change", function ArchitectureComponent_Template_input_change_2_listener() { return ctx.searchChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "mat-selection-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](6, "Software-Classes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, ArchitectureComponent_mat_list_option_7_Template, 3, 1, "mat-list-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, ArchitectureComponent_div_8_Template, 15, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, ArchitectureComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("multiple", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.selectedClass && ctx.selectedClassIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx.selectedClass);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltip"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListOption"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: [".mat-form-field-outline-start {\n  border-radius: 28px 0 0 28px !important;\n  min-width: 28px !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-outline-end {\n  border-radius: 0 28px 28px 0 !important;\n  border-color: #043b82 !important;\n}\n\n  .mat-form-field-flex > .mat-form-field-infix {\n  padding: 0.4em 0 !important;\n}\n\n  .mat-form-field-label-wrapper {\n  top: -1.5em;\n}\n\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  transform: translateY(-1.1em) scale(0.75);\n  width: 133.33333%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFyY2hpdGVjdHVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQXlELDJCQUFBO0FBRXpEOztBQURBO0VBQTBDLFdBQUE7QUFLMUM7O0FBSEE7RUFDRSx5Q0FBQTtFQUNBLGlCQUFBO0FBTUYiLCJmaWxlIjoiYXJjaGl0ZWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcclxuICBib3JkZXItcmFkaXVzOiAyOHB4IDAgMCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDQzYjgyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjhweCAyOHB4IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMwNDNiODIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC40ZW0gMCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHsgdG9wOiAtMS41ZW07IH1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMWVtKSBzY2FsZSguNzUpO1xyXG4gIHdpZHRoOiAxMzMuMzMzMzMlO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "U14K":
/*!************************************************!*\
  !*** ./src/app/app component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class AppComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.title = 'traceapp-UI';
    }
    postJiraToNeo4j() {
        let issues;
        this.http.get(`/api/jira/keysAndSummary`).subscribe((data) => {
            issues = data;
            this.http.post('/api/neo4j/jiraToNeo4j', { issues }, { responseType: 'text' }).subscribe(r => {
                console.log(r);
                window.location.reload();
            });
        });
    }
    updateGit(projectId) {
        if (projectId == null) {
            alert('Please set a project id');
            return;
        }
        this.http.post('/updateproject', { project_id: projectId }, { responseType: 'text' }).subscribe((r) => {
            console.log(r);
            window.location.reload();
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 1, consts: [["matTooltip", "View an overview of your requirements.", "href", "/overview"], ["matTooltip", "View and trace your requirements."], ["href", "/requirements"], ["matTooltip", "View and trace your software classes."], ["href", "/architecture"], ["matTooltip", "Review the Traceability of your requirements."], ["href", "/review"], ["matTooltip", "Read about how to use this tool."], ["href", "/help"], [2, "float", "right"], ["matInput", "", "id", "projectId", "placeholder", "Project Id", "value", "", 2, "background-color", "white", 3, "ngModel", "ngModelChange"], [3, "click"], [2, "float", "right", "border-left", "1px solid #bbb"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Software-Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Review Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_18_listener($event) { return ctx.projectId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_20_listener() { return ctx.updateGit(ctx.projectId); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Git Import");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.postJiraToNeo4j(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Import Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.projectId);
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  height: 50px;\n  background-color: #3f51b5;\n  position: sticky;\n  top: 0;\n  width: 100%;\n}\n\nli[_ngcontent-%COMP%] {\n  float: left;\n  border-right: 1px solid #bbb;\n  height: 50px;\n}\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\nli[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  color: white;\n  text-align: center;\n  text-decoration: none;\n  background-color: #3f51b5;\n  cursor: pointer;\n  border: 0;\n  height: 50px;\n}\n\n\n\nli[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #111;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #4CAF50;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxhcHAlMjBjb21wb25lbnRcXGFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDREY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQSxtREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubGkge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5cclxubGkgYSwgLmJyYW5kIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmxpIGJ1dHRvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgdGhlIGxpbmsgY29sb3IgdG8gIzExMSAoYmxhY2spIG9uIGhvdmVyICovXHJcbmxpIGE6aG92ZXIsIGxpIGJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJ1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XG4gIGhlaWdodDogNTBweDtcbn1cblxubGkgYSwgLmJyYW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubGkgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi8qIENoYW5nZSB0aGUgbGluayBjb2xvciB0byAjMTExIChibGFjaykgb24gaG92ZXIgKi9cbmxpIGE6aG92ZXIsIGxpIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XG59XG5cbi5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app component/app.component */ "U14K");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview/overview.component */ "BPwi");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./requirements/requirements.component */ "P3Eo");
/* harmony import */ var _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./architecture/architecture.component */ "T6dB");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @sweetalert2/ngx-sweetalert2 */ "QJFE");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./help/help.component */ "i2qR");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./review/review.component */ "KffV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_25__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_25__["????defineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
            _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__["SweetAlert2Module"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_25__["????setNgModuleScope"](AppModule, { declarations: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"],
        _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_9__["RequirementsComponent"],
        _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_10__["ArchitectureComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_19__["HelpComponent"],
        _review_review_component__WEBPACK_IMPORTED_MODULE_23__["ReviewComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
        _sweetalert2_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_15__["SweetAlert2Module"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_21__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "i2qR":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");




class HelpComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
    }
    ngOnInit() {
    }
}
HelpComponent.??fac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HelpComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 29, vars: 0, consts: [[2, "padding-left", "15%", "padding-right", "15%"], [2, "padding-top", "10px", "font-weight", "bold"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "How do I use this tool?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "The TraceabilityApp's task is to help you keeping track of the traceability between your requirements and the classes in your software project as well as supporting you when conducting a change impact analysis. In order to do so, your software- and Jira-project need to be known to the tool. Please ask an admin for help, if you don't know how to do that. In the navigation bar, you're finding five different views on the left and two import buttons on the right. If your projects are known to the tool, you can import your Jira issues with the 'Import Jira' button and check for new commits in your repository with the 'Git Import' Button. The different review are explained below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " In the overview, your requirements are divided into three groups. The right list 'Traceable' shows all the issues that were associated with one or more classes from your software-project and thus are traceable. The list in the middles shows all the issues, that do not fall into this category. They have no single association to any class, and are 'Non-traceable'. The list on the left consists of issues that are 'To be reviewed'. These issues were and are associated with classes, but the classes were changed in a commit, after the association. You should review the traces between the issues listed here and their associated classes and confirm that they are still associated to the right class(es). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " The requirements view displays a list of all your Jira-issues. Click an issue in the list to get more information about it on the right side of the page. Below details that are extracted from Jira, you can forward-trace the requirement to the software classes it's implemented in. To add or delete traces, use the 'Edit' button to enter the edit mode. You can delete traces to classes by clicking the trash can on the right or add new traces by choosing a class from the dropdown menu and confirm your choice with the plus symbol on the right. After you're done editing, use the 'Done' button to leave the edit mode. To quickly search for a certain issue, use the search bar on the top. You can either search by entering the issue key or the issue's summary. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Software-Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, " The view Software-Architecture will show you a list of all the classes in your repository. Click a class in the list to get more information about it on the right side of the page. Below the class' path and last commit date, you will find a table to backward-trace the class to the requirements it implements. You can delete traces to requirements by clicking the trash can on the right or add new traces by choosing a requirement from the dropdown menu and confirm your choice with the plus symbol on the right. After you're done editing, use the 'Done' button to leave the edit mode. To quickly search for a certain classes, use the search bar on the top and enter its name. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Review Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, " The review changes view is where you should go, if you got issues in the 'to be reviewed' list in the overview. This view lists all the issues whose software classes they are associated with have changed or were deleted. To maintain a correct traceability between classes and requirements, you should go through every issue and check their traces for correctness. As in the Requirements view, you got a list to your left. Click on a requirement to get more information on the right. Use the edit button to edit the associated classes, by either deleting traces with the trash can symbol, or adding traces by choosing a class from the dropdown menu and confirming your choice with the plus symbol. To leave the edit mode, click the 'Done' button. You can also use the search bar to search for certain requirements by issue key or summary. When you're done reviewing a certain requirement, use the 'Finish Review' button on the top right. If you are certain that there were no change to the traceability to any of the listed issues, you can use the 'Finish All' button to mark the issues as reviewed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWxwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _overview_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview/overview.component */ "BPwi");
/* harmony import */ var _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./architecture/architecture.component */ "T6dB");
/* harmony import */ var _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./requirements/requirements.component */ "P3Eo");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "i2qR");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./review/review.component */ "KffV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: 'overview', component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_1__["OverviewComponent"] },
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: 'architecture', component: _architecture_architecture_component__WEBPACK_IMPORTED_MODULE_2__["ArchitectureComponent"] },
    { path: 'requirements', component: _requirements_requirements_component__WEBPACK_IMPORTED_MODULE_3__["RequirementsComponent"] },
    { path: 'help', component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_5__["ReviewComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
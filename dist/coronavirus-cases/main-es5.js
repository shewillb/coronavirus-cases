(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-cases/add-cases.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-cases/add-cases.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>add-cases works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cases-details/cases-details.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cases-details/cases-details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cases-details works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cases-stat/cases-stat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cases-stat/cases-stat.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>cases-stat works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cases/cases.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cases/cases.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <h2>Corona Virus Cases List</h2>\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"button-row\">\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/add-cases']\"><mat-icon>add</mat-icon> Cases</a>\n      <a mat-flat-button color=\"accent\" [routerLink]=\"['/cases-stat']\"><mat-icon>bar_chart</mat-icon> Statistic</a>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"data\" class=\"example-table\"\n             matSort matSortActive=\"name\" matSortDisableClear matSortDirection=\"asc\">\n  \n        <!-- Cases Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Cases Name</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.name}}</td>\n        </ng-container>\n  \n        <!-- Cases Age Column -->\n        <ng-container matColumnDef=\"age\">\n          <th mat-header-cell *matHeaderCellDef>Age</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.age}}</td>\n        </ng-container>\n  \n        <!-- Cases Status Column -->\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Status</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.status}}</td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/cases-details/', row._id]\"></tr>\n      </table>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-cases/edit-cases.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-cases/edit-cases.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-cases works!</p>\n"

/***/ }),

/***/ "./src/app/add-cases/add-cases.component.scss":
/*!****************************************************!*\
  !*** ./src/app/add-cases/add-cases.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jYXNlcy9hZGQtY2FzZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/add-cases/add-cases.component.ts":
/*!**************************************************!*\
  !*** ./src/app/add-cases/add-cases.component.ts ***!
  \**************************************************/
/*! exports provided: AddCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCasesComponent", function() { return AddCasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddCasesComponent = /** @class */ (function () {
    function AddCasesComponent() {
    }
    AddCasesComponent.prototype.ngOnInit = function () {
    };
    AddCasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-cases',
            template: __webpack_require__(/*! raw-loader!./add-cases.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-cases/add-cases.component.html"),
            styles: [__webpack_require__(/*! ./add-cases.component.scss */ "./src/app/add-cases/add-cases.component.scss")]
        })
    ], AddCasesComponent);
    return AddCasesComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    ApiService.prototype.getCases = function () {
        return this.http.get("" + apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cases) { return console.log('fetched cases'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCases', [])));
    };
    ApiService.prototype.getCasesById = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched cases id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCasesById id=" + id)));
    };
    ApiService.prototype.addCases = function (cases) {
        return this.http.post(apiUrl, cases, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("added cases w/ id=" + c._id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCases')));
    };
    ApiService.prototype.updateCases = function (id, cases) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, cases, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("updated cases id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateCases')));
    };
    ApiService.prototype.deleteCases = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("deleted cases id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteCases')));
    };
    ApiService.prototype.getStatistic = function (status) {
        var url = apiUrl + "/daily/" + status;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched statistic status=" + status); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getStatistic status=" + status)));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_cases_edit_cases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-cases/edit-cases.component */ "./src/app/edit-cases/edit-cases.component.ts");
/* harmony import */ var _add_cases_add_cases_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-cases/add-cases.component */ "./src/app/add-cases/add-cases.component.ts");
/* harmony import */ var _cases_stat_cases_stat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cases-stat/cases-stat.component */ "./src/app/cases-stat/cases-stat.component.ts");
/* harmony import */ var _cases_details_cases_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cases-details/cases-details.component */ "./src/app/cases-details/cases-details.component.ts");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cases/cases.component */ "./src/app/cases/cases.component.ts");








var routes = [
    {
        path: 'cases',
        component: _cases_cases_component__WEBPACK_IMPORTED_MODULE_7__["CasesComponent"],
        data: { title: 'List of Cases' }
    },
    {
        path: 'cases-details/:id',
        component: _cases_details_cases_details_component__WEBPACK_IMPORTED_MODULE_6__["CasesDetailsComponent"],
        data: { title: 'Cases Details' }
    },
    {
        path: 'cases-stat',
        component: _cases_stat_cases_stat_component__WEBPACK_IMPORTED_MODULE_5__["CasesStatComponent"],
        data: { title: 'Cases Statistic' }
    },
    {
        path: 'add-cases',
        component: _add_cases_add_cases_component__WEBPACK_IMPORTED_MODULE_4__["AddCasesComponent"],
        data: { title: 'Add Cases' }
    },
    {
        path: 'edit-cases/:id',
        component: _edit_cases_edit_cases_component__WEBPACK_IMPORTED_MODULE_3__["EditCasesComponent"],
        data: { title: 'Edit Cases' }
    },
    { path: '',
        redirectTo: '/cases',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxjb3JvbmF2aXJ1cy1jYXNlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'coronavirus-cases';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cases/cases.component */ "./src/app/cases/cases.component.ts");
/* harmony import */ var _cases_details_cases_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cases-details/cases-details.component */ "./src/app/cases-details/cases-details.component.ts");
/* harmony import */ var _add_cases_add_cases_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-cases/add-cases.component */ "./src/app/add-cases/add-cases.component.ts");
/* harmony import */ var _edit_cases_edit_cases_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-cases/edit-cases.component */ "./src/app/edit-cases/edit-cases.component.ts");
/* harmony import */ var _cases_stat_cases_stat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cases-stat/cases-stat.component */ "./src/app/cases-stat/cases-stat.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _cases_cases_component__WEBPACK_IMPORTED_MODULE_5__["CasesComponent"],
                _cases_details_cases_details_component__WEBPACK_IMPORTED_MODULE_6__["CasesDetailsComponent"],
                _add_cases_add_cases_component__WEBPACK_IMPORTED_MODULE_7__["AddCasesComponent"],
                _edit_cases_edit_cases_component__WEBPACK_IMPORTED_MODULE_8__["EditCasesComponent"],
                _cases_stat_cases_stat_component__WEBPACK_IMPORTED_MODULE_9__["CasesStatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_24__["MatButtonToggleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], ,
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cases-details/cases-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/cases-details/cases-details.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzLWRldGFpbHMvY2FzZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cases-details/cases-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/cases-details/cases-details.component.ts ***!
  \**********************************************************/
/*! exports provided: CasesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesDetailsComponent", function() { return CasesDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CasesDetailsComponent = /** @class */ (function () {
    function CasesDetailsComponent() {
    }
    CasesDetailsComponent.prototype.ngOnInit = function () {
    };
    CasesDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cases-details',
            template: __webpack_require__(/*! raw-loader!./cases-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/cases-details/cases-details.component.html"),
            styles: [__webpack_require__(/*! ./cases-details.component.scss */ "./src/app/cases-details/cases-details.component.scss")]
        })
    ], CasesDetailsComponent);
    return CasesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/cases-stat/cases-stat.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cases-stat/cases-stat.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzLXN0YXQvY2FzZXMtc3RhdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/cases-stat/cases-stat.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cases-stat/cases-stat.component.ts ***!
  \****************************************************/
/*! exports provided: CasesStatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesStatComponent", function() { return CasesStatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CasesStatComponent = /** @class */ (function () {
    function CasesStatComponent() {
    }
    CasesStatComponent.prototype.ngOnInit = function () {
    };
    CasesStatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cases-stat',
            template: __webpack_require__(/*! raw-loader!./cases-stat.component.html */ "./node_modules/raw-loader/index.js!./src/app/cases-stat/cases-stat.component.html"),
            styles: [__webpack_require__(/*! ./cases-stat.component.scss */ "./src/app/cases-stat/cases-stat.component.scss")]
        })
    ], CasesStatComponent);
    return CasesStatComponent;
}());



/***/ }),

/***/ "./src/app/cases/cases.component.scss":
/*!********************************************!*\
  !*** ./src/app/cases/cases.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZXMvRDpcXFByb2plY3RzXFxjb3JvbmF2aXJ1cy1jYXNlcy9zcmNcXGFwcFxcY2FzZXNcXGNhc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXNlcy9jYXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2Nhc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfSIsIi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cases/cases.component.ts":
/*!******************************************!*\
  !*** ./src/app/cases/cases.component.ts ***!
  \******************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");



var CasesComponent = /** @class */ (function () {
    function CasesComponent(api) {
        this.api = api;
        this.displayedColumns = ['name', 'age', 'status'];
        this.data = [];
        this.isLoadingResults = true;
    }
    CasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getCases()
            .subscribe(function (res) {
            _this.data = res;
            console.log(_this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    CasesComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    CasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cases',
            template: __webpack_require__(/*! raw-loader!./cases.component.html */ "./node_modules/raw-loader/index.js!./src/app/cases/cases.component.html"),
            styles: [__webpack_require__(/*! ./cases.component.scss */ "./src/app/cases/cases.component.scss")]
        })
    ], CasesComponent);
    return CasesComponent;
}());



/***/ }),

/***/ "./src/app/edit-cases/edit-cases.component.scss":
/*!******************************************************!*\
  !*** ./src/app/edit-cases/edit-cases.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY2FzZXMvZWRpdC1jYXNlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-cases/edit-cases.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-cases/edit-cases.component.ts ***!
  \****************************************************/
/*! exports provided: EditCasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCasesComponent", function() { return EditCasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditCasesComponent = /** @class */ (function () {
    function EditCasesComponent() {
    }
    EditCasesComponent.prototype.ngOnInit = function () {
    };
    EditCasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-cases',
            template: __webpack_require__(/*! raw-loader!./edit-cases.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-cases/edit-cases.component.html"),
            styles: [__webpack_require__(/*! ./edit-cases.component.scss */ "./src/app/edit-cases/edit-cases.component.scss")]
        })
    ], EditCasesComponent);
    return EditCasesComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\coronavirus-cases\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
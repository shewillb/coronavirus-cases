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

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <h2>Corona Virus Cases Details</h2>\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"button-row\">\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/cases']\"><mat-icon>list</mat-icon></a>\n    </div>\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <mat-card-title><h2>{{cases[0].countryregion}}</h2></mat-card-title>\n        <mat-card-subtitle>Last Updated: {{cases[0].lastupdate}}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n          <mat-card class=\"docs-component-category-list-item\" style=\"margin-top: 20px;\">\n            <mat-card-header>\n                <mat-card-title><h2 class=\"blue\">{{cases[0].confirmed}}</h2></mat-card-title>\n                <mat-card-subtitle>Confirmed Cases</mat-card-subtitle>\n              </mat-card-header>\n          </mat-card>\n          <mat-card class=\"docs-component-category-list-item\">\n            <mat-card-header>\n                <mat-card-title><h2 class=\"red\">{{cases[0].deaths}}</h2></mat-card-title>\n                <mat-card-subtitle>Deaths</mat-card-subtitle>\n              </mat-card-header>\n          </mat-card>\n          <mat-card class=\"docs-component-category-list-item\">\n            <mat-card-header>\n                <mat-card-title><h2 class=\"green\">{{cases[0].recovered}}</h2></mat-card-title>\n                <mat-card-subtitle>Recovered</mat-card-subtitle>\n              </mat-card-header>\n          </mat-card>\n      </mat-card-content>      \n      <mat-card-actions>\n        <a mat-flat-button color=\"primary\" [routerLink]=\"['/edit-cases', cases._id]\"><mat-icon>edit</mat-icon> Cases</a>\n        <a mat-flat-button color=\"warn\" (click)=\"deleteCases(cases._id)\"><mat-icon>delete</mat-icon> Cases</a>\n      </mat-card-actions>\n    </mat-card>\n  </div>"

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

module.exports = "<div class=\"example-container mat-elevation-z8\">\n    <h2 align=\"center\">Global</h2>\n    <div class=\"example-loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div align=\"center\">\n      <mat-card class=\"docs-component-category-list-item\" style=\"margin-top: 20px;\">\n        <mat-card-header>\n            <mat-card-title ><h2 class=\"blue\">{{globalData.confirmed}}</h2></mat-card-title>\n            <mat-card-subtitle>Confirmed Cases</mat-card-subtitle>\n          </mat-card-header>\n      </mat-card>\n      <mat-card class=\"docs-component-category-list-item\">\n        <mat-card-header>\n            <mat-card-title><h2 class=\"red\">{{globalData.deaths}}</h2></mat-card-title>\n            <mat-card-subtitle>Deaths</mat-card-subtitle>\n          </mat-card-header>\n      </mat-card>\n      <mat-card class=\"docs-component-category-list-item\">\n        <mat-card-header>\n            <mat-card-title><h2 class=\"green\">{{globalData.recovered}}</h2></mat-card-title>\n            <mat-card-subtitle>Recovered</mat-card-subtitle>\n          </mat-card-header>\n      </mat-card>\n    </div>\n    \n    <h2 align=\"center\">Stats by Country</h2>\n    <div class=\"button-row\">\n      <a mat-flat-button color=\"primary\" [routerLink]=\"['/add-cases']\"><mat-icon>add</mat-icon> Cases</a>\n      <a mat-flat-button color=\"accent\" [routerLink]=\"['/cases-stat']\"><mat-icon>bar_chart</mat-icon> Statistic</a>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"data\" class=\"example-table\"\n      matSort matSortActive=\"confirmed\" matSortDisableClear matSortDirection=\"desc\">\n\n     \n        <!-- Country Name Column -->\n        <ng-container matColumnDef=\"countryregion\">\n          <th mat-header-cell *matHeaderCellDef  mat-sort-header>Country Name</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.countryregion}}</td>\n        </ng-container>\n  \n        <!-- Confirmed Case Column -->\n        <ng-container matColumnDef=\"confirmed\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Confirmed Case</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.confirmed}}</td>\n        </ng-container>\n  \n        <!-- Deaths Column -->\n        <ng-container matColumnDef=\"deaths\">\n          <th mat-header-cell *matHeaderCellDef  mat-sort-header>Deaths</th>\n          <td mat-cell *matCellDef=\"let row\">{{row.deaths}}</td>\n        </ng-container>\n\n                \n        <!-- Cases Recovered Column -->\n        <ng-container matColumnDef=\"recovered\">\n            <th mat-header-cell *matHeaderCellDef  mat-sort-header>Recovered</th>\n            <td mat-cell *matCellDef=\"let row\">{{row.recovered}}</td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/cases-details/', row.countrycode? row.countrycode.iso2 : '']\"></tr>\n      </table><mat-paginator [pageSizeOptions]=\"[10, 20, 50]\" showFirstLastButtons></mat-paginator>\n\n    </div>\n  </div>"

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
var apiUrl = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true';
var globalUrl = 'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief';
//https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?iso2=US&onlyCountries=true
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
    ApiService.prototype.getGlobalCases = function () {
        return this.http.get("" + globalUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cases) { return console.log('fetched global cases'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCases')));
    };
    ApiService.prototype.getCases = function () {
        return this.http.get("" + apiUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cases) { return console.log('fetched cases'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCases', [])));
    };
    ApiService.prototype.getCasesById = function (id) {
        var url = apiUrl + "/&iso2=" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log("fetched cases id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCasesById id=" + id)));
    };
    ApiService.prototype.addCases = function (cases) {
        return this.http.post(apiUrl, cases, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (c) { return console.log("added cases w/ id=" + c.countryregion); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addCases')));
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

module.exports = ".container {\n  padding: 20px;\n}\n\n.right {\n  text-align: right;\n}\n\n.left {\n  text-align: left;\n}\n\n.center {\n  text-align: center;\n}\n\n.red {\n  color: #f3413b;\n}\n\n.blue {\n  color: #1c6cd4;\n}\n\n.green {\n  color: #24ad24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFByb2plY3RzXFxjb3JvbmF2aXJ1cy1jYXNlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgY29sb3I6cmdiKDI0MywgNjUsIDU5KVxyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgY29sb3I6IHJnYigyOCwgMTA4LCAyMTIpXHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBjb2xvcjpyZ2IoMzYsIDE3MywgMzYpXHJcbn1cclxuXHJcbiIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmVkIHtcbiAgY29sb3I6ICNmMzQxM2I7XG59XG5cbi5ibHVlIHtcbiAgY29sb3I6ICMxYzZjZDQ7XG59XG5cbi5ncmVlbiB7XG4gIGNvbG9yOiAjMjRhZDI0O1xufSJdfQ== */"

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
                _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]
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

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mat-flat-button {\n  margin: 5px;\n}\n.docs-component-category-list-item {\n  display: inline-block;\n  margin: 20px;\n  vertical-align: top;\n  align-items: center;\n}\n.red {\n  color: #f3413b;\n}\n.blue {\n  color: #1c6cd4;\n}\n.green {\n  color: #24ad24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZXMtZGV0YWlscy9EOlxcUHJvamVjdHNcXGNvcm9uYXZpcnVzLWNhc2VzL3NyY1xcYXBwXFxjYXNlcy1kZXRhaWxzXFxjYXNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXNlcy1kZXRhaWxzL2Nhc2VzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7QURFRTtFQUNFLFdBQUE7QUNDSjtBREVFO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtBQ0FOO0FER0U7RUFDRSxjQUFBO0FDQUo7QURHRTtFQUNBLGNBQUE7QUNBRjtBREdFO0VBQ0UsY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY2FzZXMtZGV0YWlscy9jYXNlcy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWxvYWRpbmctc2hhZGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogNTZweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWF0LWZsYXQtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRvY3MtY29tcG9uZW50LWNhdGVnb3J5LWxpc3QtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAvLyB3aWR0aDogMjYwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucmVkIHtcclxuICAgIGNvbG9yOnJnYigyNDMsIDY1LCA1OSlcclxuICB9XHJcbiAgXHJcbiAgLmJsdWUge1xyXG4gIGNvbG9yOiByZ2IoMjgsIDEwOCwgMjEyKVxyXG4gIH1cclxuICBcclxuICAuZ3JlZW4ge1xyXG4gICAgY29sb3I6cmdiKDM2LCAxNzMsIDM2KVxyXG4gIH1cclxuICAiLCIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTZweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWF0LWZsYXQtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5kb2NzLWNvbXBvbmVudC1jYXRlZ29yeS1saXN0LWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiAjZjM0MTNiO1xufVxuXG4uYmx1ZSB7XG4gIGNvbG9yOiAjMWM2Y2Q0O1xufVxuXG4uZ3JlZW4ge1xuICBjb2xvcjogIzI0YWQyNDtcbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var CasesDetailsComponent = /** @class */ (function () {
    function CasesDetailsComponent(route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.cases = { countryregion: '', confirmed: null, deaths: null, recovered: null, countrycode: null, lastupdate: '' };
        this.isLoadingResults = true;
    }
    CasesDetailsComponent.prototype.ngOnInit = function () {
        this.getCasesDetails(this.route.snapshot.params.id);
    };
    CasesDetailsComponent.prototype.getCasesDetails = function (id) {
        var _this = this;
        this.api.getCasesById(id)
            .subscribe(function (data) {
            _this.cases = data;
            console.log(_this.cases);
            _this.isLoadingResults = false;
        });
    };
    CasesDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
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

module.exports = "/* Structure */\n.example-container {\n  position: relative;\n  padding: 5px;\n}\ntable {\n  width: 100%;\n}\nth.mat-sort-header-sorted {\n  color: black;\n}\n.docs-component-category-list-item {\n  display: inline-block;\n  margin: 20px;\n  vertical-align: top;\n  align-content: center;\n}\n.right {\n  text-align: right;\n}\n.left {\n  text-align: left;\n}\n.center {\n  text-align: center;\n}\n.red {\n  color: #f3413b;\n}\n.blue {\n  color: #1c6cd4;\n}\n.green {\n  color: #24ad24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzZXMvRDpcXFByb2plY3RzXFxjb3JvbmF2aXJ1cy1jYXNlcy9zcmNcXGFwcFxcY2FzZXNcXGNhc2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXNlcy9jYXNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjtBREVFO0VBQ0UsV0FBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0FDQ0o7QURFRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEscUJBQUE7QUNBSjtBREdBO0VBQ0UsaUJBQUE7QUNBRjtBREdBO0VBQ0UsZ0JBQUE7QUNBRjtBREdBO0VBQ0Usa0JBQUE7QUNBRjtBREdBO0VBQ0UsY0FBQTtBQ0FGO0FER0E7RUFDQSxjQUFBO0FDQUE7QURHQTtFQUNFLGNBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2Nhc2VzL2Nhc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXHJcbi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICAuZG9jcy1jb21wb25lbnQtY2F0ZWdvcnktbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAvLyB3aWR0aDogMjYwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gIGNvbG9yOnJnYigyNDMsIDY1LCA1OSlcclxufVxyXG5cclxuLmJsdWUge1xyXG5jb2xvcjogcmdiKDI4LCAxMDgsIDIxMilcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBjb2xvcjpyZ2IoMzYsIDE3MywgMzYpXHJcbn1cclxuIiwiLyogU3RydWN0dXJlICovXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRvY3MtY29tcG9uZW50LWNhdGVnb3J5LWxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWQge1xuICBjb2xvcjogI2YzNDEzYjtcbn1cblxuLmJsdWUge1xuICBjb2xvcjogIzFjNmNkNDtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6ICMyNGFkMjQ7XG59Il19 */"

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
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");






var CasesComponent = /** @class */ (function () {
    function CasesComponent(api) {
        this.api = api;
        this.displayedColumns = ['countryregion', 'confirmed', 'deaths', 'recovered'];
        this.isLoadingResults = true;
    }
    CasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.data.sort = this.sort;
        this.api.getCases()
            .subscribe(function (res) {
            _this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](res);
            _this.data.sort = _this.sort;
            _this.data.paginator = _this.paginator;
            console.log(_this.data);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
        this.api.getGlobalCases()
            .subscribe(function (res) {
            _this.globalData = res;
            console.log(_this.globalData);
            _this.isLoadingResults = false;
        }, function (err) {
            console.log(err);
            _this.isLoadingResults = false;
        });
    };
    CasesComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true })
    ], CasesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
    ], CasesComponent.prototype, "paginator", void 0);
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
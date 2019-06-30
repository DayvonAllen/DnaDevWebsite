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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar> \n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"showcase\">\n    <div class=\"showcase-top\">\n        <h1>Our Story</h1>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"main\">\n        <span class=\"icon\"><i class=\"fas fa-users mt-4\"></i></span>\n        <p class=\"text\">  \n        Developers of the New Age is a family owned business started by three \n        relatives with aspirations of self ownership and community assistance. \n        The company is based out of southern California, but has more than infinite \n        digital offices all over the (World Wide Web). Teamwork, leadership, and \n        innovation are traits we’ve encoded into our business and only wish for it\n         to evolve from that. Each member found their path to technology in a \n         peculiar way. Graphic design, programming, digital art, and web \n         development birthed an  idea which is now a reality. Community, \n         work ethic, persistence, and honesty created the building blocks of \n         D.N.A. and we would like to share our experience and expertise with the \n         world.\n        </p>\n        <p class=\"text mt-6 mb-4 \">\n            D.N.A. Family\n        </p>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <mat-card id=\"background\">\n    <form name=\"contact\" [formGroup]=\"myForm\"  (ngSubmit)=\"onSubmit(myForm)\">\n      <div class=\"input\">\n        <label for=\"name\">Full Name</label><br>\n        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\" John Doe\" formControlName=\"name\">\n        <div>\n          <small class=\"error\"\n            *ngIf=\"(myForm.get('name').touched || myForm.get('name').dirty) && myForm.get('name').errors?.required ||  myForm.get('name').errors?.minlength\">Please\n            enter a name</small>\n        </div>\n      </div>\n      <div class=\"input\">\n        <label for=\"email\">E-mail</label><br>\n        <input type=\"email\" name=\"email\" id=\"email\" placeholder=\" jdoe@gmail.com\" formControlName=\"email\">\n        <div>\n          <small class=\"error\"\n            *ngIf=\"(myForm.get('email').touched || myForm.get('email').dirty) && myForm.get('email').errors?.required || myForm.get('email').errors?.email\">Please\n            enter a valid e-mail</small>\n        </div>\n      </div>\n      <div class=\"input\">\n        <label for=\"phone\">Phone Number</label><br>\n        <input type=\"tel\" name=\"phone\" id=\"phone\" placeholder=\" (888) 231-9023\" formControlName=\"phone\">\n        <div>\n          <small class=\"error\"\n            *ngIf=\"(myForm.get('phone').touched || myForm.get('phone').dirty) && myForm.get('phone').errors?.required || myForm.get('phone').errors?.pattern || myForm.get('phone').errors?.minlength\">Please\n            enter a valid phone number</small>\n        </div>\n      </div>\n      <div class=\"input\">\n        <label for=\"message\">Message</label><br>\n        <textarea rows=\"5\" name=\"message\" id=\"message\" placeholder=\" Your Message...\" formControlName=\"message\"></textarea>\n        <div>\n          <small class=\"error\"\n            *ngIf=\"(myForm.get('message').touched || myForm.get('message').dirty) && myForm.get('message').errors?.minlength\">Please\n            enter at least 5 characters</small>\n        </div>\n      </div>\n      <button mat-raised-button type=\"submit\" id=\"submitBut\" [disabled]=\"myForm.invalid\" (click)=\"submit()\">\n        <span *ngIf=\"loading === false\"> Submit</span>\n        <span id=\"loader\" *ngIf=\"loading === true\"></span>\n      </button>\n    </form>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/error/error.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n   <h3>503 Error</h3>\n   <h5>Server Issue</h5>\n   <button routerLink=\"/\"><i class=\"fas fa-arrow-alt-circle-left\"></i> Go Home</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <div id=\"background\">\n    <div id=\"about\">\n      <h3>DNA Devs</h3>\n      <hr>\n      <p>Developers you can trust.</p>\n      <p>Our code is efficient and fast.</p>\n      <hr class=\"min\">\n    </div>\n    <div id=\"contact\">\n      <h3>Contact</h3>\n      <hr>\n      <a href=\"tel:5554280940\">\n        <p>Call us at 555-428-0940</p></a>\n      <a href=\"mailto:customersupport@dnadevelopers.net\">\n        <p>customersupport@dnadevelopers.net</p>\n      </a>\n      <hr class=\"min\">\n    </div>\n    <div id=\"location\">\n      <h3>Location</h3>\n      <hr>\n      <p>Los Angeles, CA</p>\n      <hr class=\"min\">\n    </div>\n    <div id=\"social-icons\">\n      <h3>Follow Us!</h3>\n      <hr>\n      <div class=\"col-sm-6\">\n        <a href=\"https://www.twitter.com/n_developers\" target=\"_blank\">\n          <i class=\"fab fa-twitter-square\"><span class=\"soc\">Twitter</span></i>\n        </a>\n        <a href=\"https://www.instagram.com/dnadevelopers\" target=\"_blank\">\n          <i class=\"fab fa-instagram\"><span class=\"soc\">Instagram</span></i>\n        </a>\n        <hr class=\"min\">\n      </div>\n    </div>\n    <hr class=\"min\">\n  </div>\n  <div id=\"copy\">\n    &copy; 2019 - DNA Developers | All rights reserved\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-showcase></app-showcase>\n<app-services></app-services>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"container\">\n    <div id=\"left\">\n      <a>\n      <img  routerLink=\"\" id=\"logo\" [src]='photo' alt=\"logo\">\n    </a>\n    </div>\n    <div id=\"right\">\n      <div *ngIf=\"hide(); else nav\">\n        <a routerLink=\"\">Home</a>\n        <a routerLink=\"about\">About</a>\n        <a routerLink=\"contact\">Contact</a>\n      </div>\n      <ng-template #nav>\n            <a *ngIf=\"show; else hideElem\" (click)=\"toggle()\">\n                <img id=\"menu\" [src]='menu' alt=\"menu\">\n            </a>\n            <ng-template #hideElem>\n              <a (click)=\"toggle()\">\n                <img id=\"close\" [src]='close' alt=\"close\">\n                <div id=\"dropdown\">\n                  <div id=\"items\">\n                  <hr>\n                  <a routerLink=\"\">Home</a>\n                  <hr>\n                  <a routerLink=\"about\">About</a>\n                  <hr>\n                  <a routerLink=\"contact\">Contact</a>\n                  <hr>\n                  </div>\n                </div>\n              </a>\n            </ng-template>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n    <h3>404 Error</h3>\n    <h5>Page Not Found</h5>\n    <button routerLink=\"/\"><i class=\"fas fa-arrow-alt-circle-left\"></i> Go Home</button>\n </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/services/services.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n  <div class=\"container\">\n      <div class=\"services\">\n        <div class=\"logo\">\n            <i id=\"design\" class=\"fas fa-briefcase    \"></i>\n        </div>\n        <div class=\"text\">\n            <p>WEB DESIGN</p>\n            <small>We can design a beautiful website for our clients if they need help with expressing their creativity.</small>\n        </div>\n      </div>\n      <div class=\"services\">\n        <div id=\"code\" class=\"logo\">\n            <i class=\"fas fa-code    \"></i>\n        </div>\n        <div class=\"text\">\n            <p>WEB DEVELOPMENT</p>\n            <small>We build a variety of different websites for our clients, we can also add special features that will make your website stand out from your competitors' websites.</small>\n        </div>\n      </div>\n      <div class=\"services\">\n        <div id=\"computer\" class=\"logo\">\n            <i class=\"fas fa-desktop    \"></i>\n        </div>\n        <div class=\"text\">\n            <p>WEB HOSTING/DOMAIN</p>\n            <small>We can acquire domain names and connect them to host servers for our clients.</small>\n        </div>\n      </div>\n      <div class=\"services\">\n        <div id=\"store\" class=\"logo\">\n            <i class=\"fa fa-credit-card    \"></i>\n        </div>\n        <div class=\"text\">\n            <p>E-COMMERCE</p>\n            <small>We create E-commerce stores for customers who are selling products online.</small>\n        </div>\n      </div>\n      <div class=\"services\">\n        <div id=\"marketing\" class=\"logo\">\n            <i class=\"fas fa-calculator\"></i>\n        </div>\n        <div class=\"text\">\n            <p>DIGITAL MARKETING\n              </p>\n            <small>We offer Search Engine Optimization and many other forms of marketing to our customers to ensure that you are found on the world's most popular search engines and social media websites.</small>\n        </div>\n      </div>\n      <div class=\"services\">\n        <div id=\"maintenance\" class=\"logo\">\n            <i class=\"fas fa-pen-square    \"></i>\n        </div>\n        <div class=\"text\">\n            <p>MAINTENANCE</p>\n            <small>Don't want to manage your site? Don't worry, we'll do it for you. We will run your website for you.</small>\n        </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/showcase/showcase.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/showcase/showcase.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"container\">\n      <h1 class=\"uppercase\">Give Your Business a Competitive Edge!</h1>\n      <a routerLink=\"contact\">Consultation</a>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/success/success.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/success/success.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"background\">\n  <mat-card id=\"container\">\n    <div id=\"content\" class=\"text-white\"><h3>You have successfully entered the New Age!</h3></div>\n    <div id=but>\n      <a routerLink=\"/\">\n      <button id=\"button\" mat-raised-button >Return home</button>\n    </a>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/success/success.component */ "./src/app/components/success/success.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");









var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'success', component: _components_success_success_component__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"] },
    { path: 'error', component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_7__["ErrorComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-navbar{\n    position: fixed;\n    width: 100%;\n    z-index: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1uYXZiYXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbn0iXX0= */"

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/showcase/showcase.component */ "./src/app/components/showcase/showcase.component.ts");
/* harmony import */ var _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/services/services.component */ "./src/app/components/services/services.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_success_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/success/success.component */ "./src/app/components/success/success.component.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"],
                _components_services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _components_success_success_component__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"],
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".showcase {\n    height: 40rem !important;\n}\n.showcase-top {\n    background-image: url('/assets/mountain.jpg');\n    background-position: center;\n    background-size: cover;\n    height: 100%;\n    max-width: 100%;\n}\n.showcase-top h1{\n    font-family: 'Raleway', sans-serif;\n    color: white;\n    text-align: center;\n    padding-top: 19rem;\n    font-size: 72px;\n    text-shadow: 2px 2px 5px blue;\n}\n.main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    \n}\n.icon {\n    font-size: 35px;\n    color: teal;\n}\n.text {\n    font-size: 24px;\n    font-family: 'Raleway', sans-serif;\n    color: #006e96;\n}\n.container {\n    width: 60rem;\n}\n.social {\n    padding-left: 30rem;\n    font-size: 35px;\n}\n.i {\n    margin-left: 1rem;\n}\n@media(max-width: 790px) {\n    .main {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n    }\n}\n@media(max-width: 768px) {\n    .main {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n    }\n    .container {\n        width: 100%;\n    }\n}\n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSw2Q0FBNkM7SUFDN0MsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3djYXNlIHtcbiAgICBoZWlnaHQ6IDQwcmVtICFpbXBvcnRhbnQ7XG59XG4uc2hvd2Nhc2UtdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvbW91bnRhaW4uanBnJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbi5zaG93Y2FzZS10b3AgaDF7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxOXJlbTtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNXB4IGJsdWU7XG59XG4ubWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG59XG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiB0ZWFsO1xufVxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjMDA2ZTk2O1xufVxuLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDYwcmVtO1xufVxuLnNvY2lhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHJlbTtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4uaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5AbWVkaWEobWF4LXdpZHRoOiA3OTBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: 'Raleway', sans-serif;\n}\n\n\n#container {\n  height: 55rem;\n  background: #006d95;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\n#background {\n  margin-top: 5rem;\n  /* background: #A393BF; */\n  background: #61D095;\n  border-radius: 10px;\n  /* height: 75vh; */\n  width: 40vw;\n  display: flex;\n  justify-content: center;\n  padding-bottom: 2rem;\n}\n\n\ninput {\n  margin-top: 1rem;\n  height: 2.4rem;\n  width: 20rem;\n  border-radius: 2rem;\n  border: none;\n  outline: none;\n  padding-left: .7rem;\n}\n\n\n::-webkit-input-placeholder {\n  padding-right: 1rem;\n}\n\n\n::-moz-placeholder {\n  padding-right: 1rem;\n}\n\n\n::-ms-input-placeholder {\n  padding-right: 1rem;\n}\n\n\n::placeholder {\n  padding-right: 1rem;\n}\n\n\ntextarea {\n  margin-top: 1rem;\n  height: 8rem;\n  width: 21rem;\n  border-radius: 1rem;\n  border: none;\n  outline: none;\n  padding-left: .7rem;\n}\n\n\n.input label {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 300;\n}\n\n\n.input {\n  margin-top: 1rem;\n  width: 100%;\n  text-align: center;\n}\n\n\n#submitBut {\n  margin-top: 1.3rem;\n  text-align: center;\n  height: 3rem;\n  width: 20rem;\n  background: #7E3F8F;\n  border-radius: 10px;\n  color: #ffffff;\n  margin-left: .5rem;\n  border: none;\n  outline: none\n}\n\n\n#submitBut:hover {\n  background: #942911;\n}\n\n\ninput::-webkit-input-placeholder {\n  text-align: center;\n}\n\n\ninput::-moz-placeholder {\n  text-align: center;\n}\n\n\ninput::-ms-input-placeholder {\n  text-align: center;\n}\n\n\ninput::placeholder {\n  text-align: center;\n}\n\n\n.error {\n  color: red;\n  font-weight: 300;\n  font-size: .8rem;\n}\n\n\n#loader{\n  margin: auto;\n  height: 30px;\n  width: 30px;\n  display: block;\n  border-top: 1px solid #61D095;\n  border-right: 1px solid transparent;\n  border-radius: 50%;\n  -webkit-animation: spinner 0.7s linear infinite;\n          animation: spinner 0.7s linear infinite;\n}\n\n\n@-webkit-keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n\n@keyframes spinner {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n\n@media(max-width: 855px) {\n  #background {\n    margin-top: 5rem;\n    /* background: #A393BF; */\n    background: #61D095;\n    border-radius: 10px;\n    /* height: 75vh; */\n    width: 75vw;\n    display: flex;\n    justify-content: center;\n    padding-bottom: 2rem;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztBQUNwQzs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUZBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFGQTtFQUNFLG1CQUFtQjtBQUNyQjs7O0FBRkE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaO0FBQ0Y7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRkE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUZBO0VBQ0Usa0JBQWtCO0FBQ3BCOzs7QUFGQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsK0NBQXVDO1VBQXZDLHVDQUF1QztBQUN6Qzs7O0FBRUE7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7O0FBSkE7RUFDRTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG59XG5cblxuI2NvbnRhaW5lciB7XG4gIGhlaWdodDogNTVyZW07XG4gIGJhY2tncm91bmQ6ICMwMDZkOTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuI2JhY2tncm91bmQge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICAvKiBiYWNrZ3JvdW5kOiAjQTM5M0JGOyAqL1xuICBiYWNrZ3JvdW5kOiAjNjFEMDk1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKiBoZWlnaHQ6IDc1dmg7ICovXG4gIHdpZHRoOiA0MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgaGVpZ2h0OiAyLjRyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IC43cmVtO1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxudGV4dGFyZWEge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBoZWlnaHQ6IDhyZW07XG4gIHdpZHRoOiAyMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IC43cmVtO1xufVxuXG4uaW5wdXQgbGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW5wdXQge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jc3VibWl0QnV0IHtcbiAgbWFyZ2luLXRvcDogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBiYWNrZ3JvdW5kOiAjN0UzRjhGO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmVcbn1cblxuI3N1Ym1pdEJ1dDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5NDI5MTE7XG59XG5cbmlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAuOHJlbTtcbn1cblxuXG4jbG9hZGVye1xuICBtYXJnaW46IGF1dG87XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzYxRDA5NTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGlubmVyIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW5uZXIge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA4NTVweCkge1xuICAjYmFja2dyb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogNXJlbTtcbiAgICAvKiBiYWNrZ3JvdW5kOiAjQTM5M0JGOyAqL1xuICAgIGJhY2tncm91bmQ6ICM2MUQwOTU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBoZWlnaHQ6IDc1dmg7ICovXG4gICAgd2lkdGg6IDc1dnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.route = 'success';
        this.loading = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        this.myForm.reset();
    };
    ContactComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        this.http.post('https://dna-email-sender.herokuapp.com/postDat', {
            "name": this.myForm.get('name').value,
            "email": this.myForm.get('email').value,
            "message": this.myForm.get('message').value,
            "phone": this.myForm.get('phone').value
        }).subscribe(function (data) {
            console.log('Data successfully sent ', data);
            _this.route = 'success';
            setTimeout(function () {
                _this.loading = false;
                _this.router.navigate([_this.route]);
            }, 1000);
        }, function (error) {
            console.log('Error ', error);
            _this.route = 'error';
            setTimeout(function () {
                _this.loading = false;
                _this.router.navigate([_this.route]);
            }, 1200);
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: #006d95;\n}\n\nh3,h5{\n    font-family: 'Raleway', sans-serif;\n    color: #ffffff;\n}\n\nh3{\n    font-size: 5rem;\n    margin-bottom: 1rem;\n}\n\nh5{\n    font-size: 3rem;\n    font-weight: 300;\n    margin-bottom: 1rem;\n}\n\nbutton{\n    padding: .3rem 4rem;\n    border-radius: 5px;\n    background: #99cd00;\n    color: #ffffff;\n    margin-top: 1rem;\n    border: none;\n}\n\nbutton:hover{\n    background: #5B2A86;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmR7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwNmQ5NTtcbn1cblxuaDMsaDV7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaDN7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmg1e1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmJ1dHRvbntcbiAgICBwYWRkaW5nOiAuM3JlbSA0cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTljZDAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogIzVCMkE4NjtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background {\n  height: 90%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  overflow: hidden;\n}\n\n#footer {\n  padding-top: 1rem;\n  background: #080a17;\n}\n\np {\n  font-size: .8rem;\n  color: #fff;\n}\n\nh3 {\n  color: #fff;\n  font-size: .7rem;\n}\n\nhr {\n  background-color: #fff;\n}\n\n#copy {\n  margin-top: 1rem;\n  font-size: .8rem;\n  font-weight: 300;\n  color: #fff;\n  text-align: center;\n}\n\n.min{\n    display: none;\n}\n\n.soc {\n  margin-left: 0.4rem;\n  font-size: .9rem;\n  color: white;\n}\n\n.icons {\n  color: #006D95;\n  font-size: 1.2rem;\n}\n\na:hover{\n  color:#98CC00 !important;\n  text-decoration: none;\n}\n\n@media(min-width:570px) and (max-width: 791px){\n  #social-icons{\n    display: none !important;\n  }\n}\n\n@media(max-width: 790px) {\n\n  #background {\n    height: 90%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n  }\n\n  p {\n    color: #fff;\n  }\n\n  .min {\n      display: block;\n      background: white;\n  }\n\n  h3 {\n    font-size: .8rem;\n  }\n  #copy {\n    font-size: .7rem;\n    font-weight: 300;\n    color: #fff;\n    margin-top: .5rem;\n  }\n  a,i{\n    display: block;\n  }\n  \n}\n\n@media(max-width: 768px) {\n  \n  #copy {\n    width: 80%;\n    font-size: .7rem;\n    font-weight: 300;\n    color: #fff;\n  }\n  #footer {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    justify-content: center;\n  }\n  .soc {\n   display: block;\n   padding-bottom: .4rem;\n   padding-top: .2rem;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFJQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUNDO0VBQ0Msd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7O0VBRUU7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7TUFDSSxjQUFjO01BQ2QsaUJBQWlCO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7O0FBRUE7O0VBRUU7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix1QkFBdUI7RUFDekI7RUFDQTtHQUNDLGNBQWM7R0FDZCxxQkFBcUI7R0FDckIsa0JBQWtCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiAjMDgwYTE3O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmgzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogLjdyZW07XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuXG5cbiNjb3B5IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1pbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnNvYyB7XG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XG4gIGZvbnQtc2l6ZTogLjlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pY29ucyB7XG4gIGNvbG9yOiAjMDA2RDk1O1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiBhOmhvdmVye1xuICBjb2xvcjojOThDQzAwICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOjU3MHB4KSBhbmQgKG1heC13aWR0aDogNzkxcHgpe1xuICAjc29jaWFsLWljb25ze1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3OTBweCkge1xuXG4gICNiYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5taW4ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICB9XG4gICNjb3B5IHtcbiAgICBmb250LXNpemU6IC43cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogLjVyZW07XG4gIH1cbiAgYSxpe1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuICBcbiAgI2NvcHkge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgZm9udC1zaXplOiAuN3JlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG4gICNmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuc29jIHtcbiAgIGRpc3BsYXk6IGJsb2NrO1xuICAgcGFkZGluZy1ib3R0b206IC40cmVtO1xuICAgcGFkZGluZy10b3A6IC4ycmVtO1xuICB9XG59XG5cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    font-family: 'Raleway', sans-serif;\n}\n\n#container {\n    height: 13vh;\n   position: relative;\n    background:rgba(0, 0, 0, 0.5);\n}\n\n#logo {\n    width: 120px;\n    outline: none\n}\n\n.container {\n    height: 100%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n#right a {\n    padding-left: 1.5rem;\n    font-size: 1.1rem;\n    color: #99cd00;\n}\n\n#right a:hover {\n    text-decoration: none;\n    color: #5682ac !important;\n}\n\ni {\n    color: white;\n}\n\n#menu {\n    width: 30px;\n    color: white !important;\n    color: white;\n}\n\n#close {\n    width: 25px;\n    color: white;\n}\n\na:hover{\n    cursor: pointer;\n}\n\n#dropdown{\n    position: absolute;\n    margin-top: 5.9rem;\n    width: 100vw;\n    background:rgba(0, 0, 0, 0.5);\n    height: 100vh;\n    top:0;\n    left: 0;\n    z-index: 10;\n}\n\n#items{\n    margin-top: 1rem;\n\n}\n\nhr{\n    background: #ffffff\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0dBQ2Isa0JBQWtCO0lBQ2pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWjtBQUNKOztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLEtBQUs7SUFDTCxPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cblxuI2NvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxM3ZoO1xuICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4jbG9nbyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIG91dGxpbmU6IG5vbmVcbn1cblxuXG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jcmlnaHQgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICM5OWNkMDA7XG59XG5cbiNyaWdodCBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM1NjgyYWMgIWltcG9ydGFudDtcbn1cblxuaSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jbWVudSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jY2xvc2Uge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNkcm9wZG93bntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogNS45cmVtO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTA7XG59XG5cbiNpdGVtc3tcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG59XG5cbmhye1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmZcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.photo = '../../../assets/cropped-MasterLogo.png';
        this.menu = '../../../assets/menu_enhanced.svg';
        this.close = '../../../assets/closeButton.svg';
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        this.show = true;
        this.hidden = false;
    }
    NavbarComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngOnChanges = function () {
        this.onResize();
    };
    NavbarComponent.prototype.hide = function () {
        if (this.screenWidth >= 880) {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.hidden = !this.hidden;
    };
    NavbarComponent.prototype.disappear = function () {
        if (this.hidden === true) {
            return 'none';
        }
        else {
            return 'block';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], NavbarComponent.prototype, "onResize", null);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: #006d95;\n}\n\nh3,h5{\n    font-family: 'Raleway', sans-serif;\n    color: #ffffff;\n}\n\nh3{\n    font-size: 5rem;\n    margin-bottom: 1rem;\n}\n\nh5{\n    font-size: 3rem;\n    font-weight: 300;\n    margin-bottom: 1rem;\n}\n\nbutton{\n    padding: .3rem 4rem;\n    border-radius: 5px;\n    background: #99cd00;\n    color: #ffffff;\n    margin-top: 1rem;\n    border: none;\n}\n\nbutton:hover{\n    background: #5B2A86;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWNrZ3JvdW5ke1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICMwMDZkOTU7XG59XG5cbmgzLGg1e1xuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmgze1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5oNXtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5idXR0b257XG4gICAgcGFkZGluZzogLjNyZW0gNHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzk5Y2QwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQ6ICM1QjJBODY7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/services/services.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/services/services.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background {\n    background: #006d95;\n    overflow: hidden;\n    padding-top: 5rem;\n    padding-bottom: 9rem;\n}\n\n\n.container {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2,1fr);\n    grid-gap: .5rem;\n    text-align: center\n}\n\n\n.container div {\n    margin: auto\n}\n\n\n.services{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-content: center;\n    margin-top: 1.5rem !important;\n}\n\n\n.logo{\n    font-size: 2rem;\n    padding-right: 2rem;\n    color: #fff;\n    border: 2px solid #fff;\n    border-radius: 80px;\n    height: 100px;\n    width: 100px;\n    background:#61ce70;\n    display: flex;\n    align-items: center;\n}\n\n\n.logo:hover {\n    background: #5B2A86;\n}\n\n\np{\n    color: #fff;\n    font-weight: 300;\n}\n\n\nsmall{\n    color: #fff;\n    font-size: .9rem;\n}\n\n\n#design{\n    padding-left: 2rem;\n\n}\n\n\n#code {\n    padding-left: 1.7rem;\n}\n\n\n#computer{\n    padding-left: 1.8rem;\n\n}\n\n\n#store {\n    padding-left: 1.8rem;\n}\n\n\n#marketing {\n    padding-left: 2.1rem;\n}\n\n\n#maintenance {\n    padding-left: 2rem;\n}\n\n\n.text {\n    margin-top: .5rem !important;\n}\n\n\n@media(max-width: 768px){\n    .container{\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n    }\n    .services{\n        margin-top: 1.5rem !important;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Y7QUFDSjs7O0FBRUE7SUFDSTtBQUNKOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7OztBQUNBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUNBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7O0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksb0JBQW9COztBQUV4Qjs7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBQ0E7SUFDSSw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQ6ICMwMDZkOTU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXJlbTtcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XG4gICAgZ3JpZC1nYXA6IC41cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlclxufVxuXG4uY29udGFpbmVyIGRpdiB7XG4gICAgbWFyZ2luOiBhdXRvXG59XG5cbi5zZXJ2aWNlc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cbi5sb2dve1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogODBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiM2MWNlNzA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nbzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzVCMkE4Njtcbn1cbnB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbnNtYWxse1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogLjlyZW07XG59XG4jZGVzaWdue1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcblxufVxuI2NvZGUge1xuICAgIHBhZGRpbmctbGVmdDogMS43cmVtO1xufVxuI2NvbXB1dGVye1xuICAgIHBhZGRpbmctbGVmdDogMS44cmVtO1xuXG59XG5cbiNzdG9yZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjhyZW07XG59XG4jbWFya2V0aW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuMXJlbTtcbn1cbiNtYWludGVuYW5jZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLnRleHQge1xuICAgIG1hcmdpbi10b3A6IC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgICAuc2VydmljZXN7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/components/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/components/showcase/showcase.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/showcase/showcase.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    font-family: 'Raleway', sans-serif;\n}\n\n.uppercase{\n    text-transform: uppercase;\n    color: #ffffff;\n}\n\n#container{\n    height: 100vh;\n    background: url('architecture-blue-buildings-747101.jpg');\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    overflow: hidden;\n}\n\n.container{\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    font-weight: 300;\n    font-size: 2.3rem;\n}\n\na{\n    color: #ffffff;\n    background-color: #99cd00;\n    border-radius: 30px;\n    padding: 10px 21px;\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 1.5rem !important;\n    border: none;\n    outline: none;\n    text-decoration: none;\n}\n\na:hover {\n    background: #5B2A86;\n}\n\n@media(max-width: 880px){\n    .container{\n        text-align: center;\n    }\n    a{\n        font-size: .9rem;\n        padding: 10px 15px;\n    }\n    h1 {\n        font-weight: 300;\n        font-size: 1.5rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseURBQXlFO0lBQ3pFLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xufVxuXG4udXBwZXJjYXNle1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNjb250YWluZXJ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9hcmNoaXRlY3R1cmUtYmx1ZS1idWlsZGluZ3MtNzQ3MTAxLmpwZycpO1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyLjNyZW07XG59XG5he1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OWNkMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIxcHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNUIyQTg2O1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA4ODBweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/showcase/showcase.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/showcase/showcase.component.ts ***!
  \***********************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent() {
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showcase',
            template: __webpack_require__(/*! raw-loader!./showcase.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/showcase/showcase.component.html"),
            styles: [__webpack_require__(/*! ./showcase.component.css */ "./src/app/components/showcase/showcase.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/components/success/success.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/success/success.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#background{\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: #006d95;\n}\n\n#container{\n    height: 60%;\n    width: 40%;\n    background: #99cd00;\n    border-radius: 10px;\n}\n\n#content h3 {\n    text-align: center;\n    margin-top: 30%;\n}\n\n#but{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 2rem;\n}\n\n#button {\n    background: #006D95;\n    color: white;\n}\n\nbutton:hover {\n    background: green !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmFja2dyb3VuZHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogIzAwNmQ5NTtcbn1cblxuI2NvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDYwJTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJhY2tncm91bmQ6ICM5OWNkMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRlbnQgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzMCU7XG59XG4jYnV0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuI2J1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogIzAwNkQ5NTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/success/success.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/success/success.component.ts ***!
  \*********************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/components/success/success.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
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

module.exports = __webpack_require__(/*! /Users/dayvonallen/Desktop/angular_projects/dnaDev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
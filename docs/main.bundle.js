webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"element-bg-img\"><img src=\"../hot-weather-widget/assets/images/1.jpg\" alt=\"\" class=\"img-responsive\"> </div>\n  <div class=\"element-left-bottom\">\n    <div class=\"ele-strip\">\n      <ul>\n        <li><a href=\"#\">Hotel</a></li>\n        <li><a href=\"#\">Fishing</a></li>\n        <li><a href=\"#\">Tours</a></li>\n        <li class=\"anc-bor\"><a href=\"#\">Weather</a></li>\n      </ul>\n    </div>\n    <div class=\"village\">\n      <h3>Righteous indignation & like</h3>\n      <span class=\"line\"> </span>\n      <div class=\"activity_box\">\n        <div *ngIf=\"activities$ | async as act; else loadingSpinner\" class=\"scrollbar\" id=\"style-2\">\n          <div *ngFor=\"let activity of act\" class=\"activity-row\">\n            <div class=\"activity-desc\">\n              <h5>Resort Address</h5>\n              <p>{{ activity.address }}</p>\n              <h6>Tel: {{ activity.phone | phoneFormat: '-' }}</h6>\n            </div>\n            <div class=\"activity-img\">\n              <ul>\n                <li><img [src]='\"../hot-weather-widget/assets/images/\" + activity.img1'  alt=\"\"/></li>\n                <li><img [src]='\"../hot-weather-widget/assets/images/\" + activity.img2'  alt=\"\"/></li>\n              </ul>\n            </div>\n            <div class=\"clear\"> </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n<ng-template #loadingSpinner>\n  <div class=\"spinner-container\">\n    <svg>\n      <use xlink:href=\"#loadingSpinner\"></use>\n    </svg>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/activities/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__ = __webpack_require__("../../../../../src/app/services/mock_data_srv.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivitiesComponent = (function () {
    function ActivitiesComponent() {
    }
    ActivitiesComponent.prototype.ngOnInit = function () {
        this.activities$ = __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__["a" /* activities$ */];
    };
    ActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-activities',
            template: __webpack_require__("../../../../../src/app/activities/activities.component.html"),
            styles: [__webpack_require__("../../../../../src/app/activities/activities.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], ActivitiesComponent);
    return ActivitiesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n<!--<h1>-->\n<!--Welcome to {{title}}!-->\n<!--</h1>-->\n<!--<img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">-->\n<!--</div>-->\n<!--<h2>Here are some links to help you start: </h2>-->\n<!--<ul>-->\n<!--<li>-->\n<!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>-->\n<!--</li>-->\n<!--<li>-->\n<!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>-->\n<!--</li>-->\n<!--<li>-->\n<!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>-->\n<!--</li>-->\n<!--</ul>-->\n\n<h1>Hot Weather Widget</h1>\n<div class=\"element\">\n  <div class=\"element-left\">\n    <app-activities></app-activities>\n  </div>\n  <div class=\"element-right\">\n    <app-weather></app-weather>\n    <app-social-info></app-social-info>\n  </div>\n  <div class=\"clear\"> </div>\n</div>\n<div class=\"copy-right\">\n  <p>© 2015 Hot Weather Widget. All rights reserved | Design by  <a href=\"http://w3layouts.com/\" target=\"_blank\">  W3layouts </a></p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_activities_component__ = __webpack_require__("../../../../../src/app/activities/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_info_social_info_component__ = __webpack_require__("../../../../../src/app/social-info/social-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_pipes_phone_formatter_pipe__ = __webpack_require__("../../../../../src/app/common/pipes/phone-formatter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__activities_activities_component__["a" /* ActivitiesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__common_pipes_phone_formatter_pipe__["a" /* PhoneFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_4__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_5__social_info_social_info_component__["a" /* SocialInfoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/pipes/phone-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneFormatterPipe = (function () {
    function PhoneFormatterPipe() {
    }
    PhoneFormatterPipe.prototype.transform = function (phone, delimiter) {
        var output = '+';
        for (var i = 0; i < phone.length; ++i) {
            output += phone[i];
            if (i % 3 === 0 && i !== phone.length - 1) {
                output += delimiter ? delimiter : ' ';
            }
        }
        return output;
    };
    PhoneFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Pipe */])({
            name: 'phoneFormat'
        })
    ], PhoneFormatterPipe);
    return PhoneFormatterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/mock_data_srv.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return activities$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return weather$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return socInfo$; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");

// import { delay } from 'rxjs/operators';


var activities = [
    {
        img1: 'res.jpg',
        img2: 'r1.jpg',
        address: 'Sed perspiciatis Et harum quidem',
        phone: '1285968672'
    },
    {
        img1: 'res.jpg',
        img2: 'r1.jpg',
        address: 'Sed perspiciatis Et harum quidem',
        phone: '1285698684'
    },
    {
        img1: 'res.jpg',
        img2: 'r1.jpg',
        address: 'Sed perspiciatis Et harum quidem',
        phone: '1386347685'
    }
];
var weather = {
    title: 'Et harum quidem',
    icon: 'cloud',
    water_temperature: 20,
    air_temperature: 14
};
var socInfo = {
    followers: 2850,
    following: 675,
    title: 'Et harum quidem',
    img: 'b1.jpg'
};
var activities$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(activities)
    .delay(2000);
var weather$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(weather)
    .delay(2000);
var socInfo$ = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].of(socInfo)
    .delay(2000);


/***/ }),

/***/ "../../../../../src/app/social-info/social-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/social-info/social-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div *ngIf=\"socInfo$ | async as socInfo; else loadingSpinner\">\n    <div class=\"teddy-text\">\n      <h4>{{ socInfo.title }}</h4>\n      <span class=\"w-line\"> </span>\n      <img [src]='\"../hot-weather-widget/assets/images/\" + socInfo.img' alt=\"\" class=\"img-responsive\">\n    </div>\n    <div class=\"teddy-follow\">\n      <ul>\n        <li class=\"folw-h\"><h3>{{ socInfo.followers }}</h3>\n          <p>Followers</p>\n        </li>\n        <li><h3>{{ socInfo.following }}</h3>\n          <p>Following</p>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<ng-template #loadingSpinner>\n  <div class=\"spinner-container\">\n    <svg>\n      <use xlink:href=\"#loadingSpinner\"></use>\n    </svg>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/social-info/social-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__ = __webpack_require__("../../../../../src/app/services/mock_data_srv.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialInfoComponent = (function () {
    function SocialInfoComponent() {
    }
    SocialInfoComponent.prototype.ngOnInit = function () {
        this.socInfo$ = __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__["b" /* socInfo$ */];
    };
    SocialInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-social-info',
            template: __webpack_require__("../../../../../src/app/social-info/social-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/social-info/social-info.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SocialInfoComponent);
    return SocialInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <div *ngIf=\"weather$ | async as weather; else loadingSpinner\">\n    <h5>{{weather.title}}</h5>\n    <span class=\"w-line\"> </span>\n    <span [class]=\"weather.icon\"> </span>\n    <h2>{{weather.air_temperature}}<sup class=\"degree\">°</sup></h2>\n    <h6>Water {{weather.water_temperature}}<sup class=\"degree\">°</sup></h6>\n  </div>\n</div>\n\n<ng-template #loadingSpinner>\n  <div class=\"spinner-container\">\n    <svg>\n      <use xlink:href=\"#loadingSpinner\"></use>\n    </svg>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__ = __webpack_require__("../../../../../src/app/services/mock_data_srv.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.weather$ = __WEBPACK_IMPORTED_MODULE_1__services_mock_data_srv__["c" /* weather$ */];
    };
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
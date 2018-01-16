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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-centered {\r\n  text-align: center;\r\n}\r\n.node-input {\r\n  margin-left: 5px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-flex\">\n  <h1 class=\"text-centered\">Dom nodes app</h1>\n  <label>Enter path to json file:</label>\n  <input class=\"node-input\" #nodeInput (keyup.enter)=\"addDomNode(nodeInput.value)\">\n  <app-mis-surface [pathToNode]=\"pathToNode\"></app-mis-surface>\n</div>\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.addDomNode = function (value) {
        this.pathToNode = value;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_mis_surface_mis_surface_component__ = __webpack_require__("../../../../../src/app/components/mis-surface/mis-surface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_json_loader_service__ = __webpack_require__("../../../../../src/app/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_template_creator_service__ = __webpack_require__("../../../../../src/app/services/template-creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_mis_surface_mis_surface_component__["a" /* MisSurfaceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["a" /* CommonModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_json_loader_service__["a" /* JsonLoaderService */], __WEBPACK_IMPORTED_MODULE_5__services_template_creator_service__["a" /* TemplateCreatorService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/mis-surface/mis-node-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clicked {\n  border: 2px solid black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mis-surface/mis-surface.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".items-surface {\r\n  width: 100%;\r\n  height: 500px;\r\n  border: solid black 2px;\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/mis-surface/mis-surface.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"color-picker\">\n    <span>pick color for component:</span>\n    <button *ngFor=\"let colorButton of colorButtons\"\n            [ngStyle]=\"{'background':colorButton.color}\"\n            (click)=\"setColor(colorButton.color)\">{{colorButton.name}}</button>\n  </div>\n  <div #surface class = \"items-surface\">\n    <ng-container class=\"mis-items-container\" #container></ng-container>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/mis-surface/mis-surface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisSurfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_json_loader_service__ = __webpack_require__("../../../../../src/app/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_template_creator_service__ = __webpack_require__("../../../../../src/app/services/template-creator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MisSurfaceComponent = /** @class */ (function () {
    function MisSurfaceComponent(componentFactoryResolver, compiler, jsonLoader, templateFactory, renderer) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.compiler = compiler;
        this.jsonLoader = jsonLoader;
        this.templateFactory = templateFactory;
        this.renderer = renderer;
        this.colorButtons = [
            { name: 'red', color: 'red' },
            { name: 'green', color: 'green' },
            { name: 'blue', color: 'blue' }
        ];
    }
    MisSurfaceComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.hasOwnProperty('pathToNode')) {
            var currentValue = changes['pathToNode'].currentValue;
            if (currentValue != undefined) {
                this.jsonLoader.loadJson(currentValue).subscribe(function (domNode) {
                    _this.createComponent(domNode);
                });
            }
        }
    };
    MisSurfaceComponent.prototype.setColor = function (color) {
        if (this.componentRef) {
            this.renderer.setStyle(this.componentRef.location.nativeElement.firstChild, 'background-color', color);
        }
    };
    MisSurfaceComponent.prototype.createComponent = function (domNode) {
        var tmpls = this.templateFactory.createTemplate(domNode);
        console.log(tmpls);
        var metadata = {
            selector: "mis-node-item",
            template: this.templateFactory.createTemplate(domNode),
            styles: [__webpack_require__("../../../../../src/app/components/mis-surface/mis-node-item.component.scss")]
        };
        var factory = this.createComponentFactorySync(this.compiler, metadata, null);
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
        this.addMoveEventsToComponents(this.componentRef);
    };
    MisSurfaceComponent.prototype.createComponentFactorySync = function (compiler, metadata, componentClass) {
        var cmpClass = componentClass || /** @class */ (function () {
            function RuntimeComponent() {
                this.name = 'Denys';
            }
            return RuntimeComponent;
        }());
        var decoratedCmp = Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])(metadata)(cmpClass);
        var RuntimeComponentModule = /** @class */ (function () {
            function RuntimeComponentModule() {
            }
            RuntimeComponentModule = __decorate([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({ imports: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */]], declarations: [decoratedCmp] })
            ], RuntimeComponentModule);
            return RuntimeComponentModule;
        }());
        var module = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(function (f) { return f.componentType === decoratedCmp; });
    };
    MisSurfaceComponent.prototype.addMoveEventsToComponents = function (ref) {
        var _this = this;
        var isMove = false;
        var startEvent;
        var currentPosition = { x: 0, y: 0 };
        var oldPosition = {};
        this.renderer.listen(ref.location.nativeElement, 'mousedown', function ($event) {
            isMove = true;
            startEvent = $event;
            Object.assign(oldPosition, currentPosition);
        });
        this.renderer.listen(this.surface.nativeElement, 'mousemove', function ($event) {
            if (isMove !== true)
                return;
            currentPosition.x = oldPosition.x + $event.x - startEvent.x;
            currentPosition.y = oldPosition.y + $event.y - startEvent.y;
            _this.renderer.setStyle(ref.location.nativeElement.firstChild, 'transform', "translate(" + currentPosition.x + "px, " + currentPosition.y + "px)");
        });
        this.renderer.listen(this.surface.nativeElement, 'mouseup', function () {
            isMove = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], MisSurfaceComponent.prototype, "pathToNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewContainerRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewContainerRef */])
    ], MisSurfaceComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('surface'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], MisSurfaceComponent.prototype, "surface", void 0);
    MisSurfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-mis-surface',
            template: __webpack_require__("../../../../../src/app/components/mis-surface/mis-surface.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/mis-surface/mis-surface.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Compiler */],
            __WEBPACK_IMPORTED_MODULE_1__services_json_loader_service__["a" /* JsonLoaderService */],
            __WEBPACK_IMPORTED_MODULE_2__services_template_creator_service__["a" /* TemplateCreatorService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Renderer2 */]])
    ], MisSurfaceComponent);
    return MisSurfaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/json-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JsonLoaderService = /** @class */ (function () {
    function JsonLoaderService(http) {
        this.http = http;
    }
    JsonLoaderService.prototype.loadJson = function (path) {
        return this.http.get(path);
    };
    JsonLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], JsonLoaderService);
    return JsonLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/template-creator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateCreatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TemplateCreatorService = /** @class */ (function () {
    function TemplateCreatorService() {
    }
    TemplateCreatorService.prototype.createTemplate = function (domNode) {
        var _this = this;
        var tagAttributes = this.createAttribute(domNode.attributes);
        debugger;
        var tagContent = '';
        if (domNode.content && domNode.content.length > 0) {
            tagContent = domNode.content.map(function (contentNode) { return _this.createTemplate(contentNode); }).join('\n');
        }
        tagContent += domNode.text || '';
        var openTag = domNode.tag ? "<" + domNode.tag + " " + tagAttributes + ">" : "";
        var closeTag = domNode.tag ? "</" + domNode.tag + ">" : "";
        return openTag + " \n                " + tagContent + "\n            " + closeTag + " ";
    };
    TemplateCreatorService.prototype.createAttribute = function (entries) {
        return entries ? Object.getOwnPropertyNames(entries).map(function (key) { return key + " = \"" + entries[key] + "\""; }).join(' ') : '';
    };
    TemplateCreatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TemplateCreatorService);
    return TemplateCreatorService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
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
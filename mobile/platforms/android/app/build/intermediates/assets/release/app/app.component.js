"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var saver_1 = require("./saver");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>",
            providers: [saver_1.SaveManager]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

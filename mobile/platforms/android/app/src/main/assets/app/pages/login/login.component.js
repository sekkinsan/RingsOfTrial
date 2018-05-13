"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Player_1 = require("../../models/Player");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, playerService, page) {
        this.router = router;
        this.playerService = playerService;
        this.page = page;
        this.player = new Player_1.Player();
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        this.playerService.getPlayer();
        console.log(JSON.stringify(this.player));
        this.router.navigate(["/spell"]);
    };
    LoginComponent.prototype.signUp = function () {
        this.playerService.create(this.player);
        alert("Welcome to the Rings of Trial");
        this.isLoggingIn = true;
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [player_service_1.PlayerService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

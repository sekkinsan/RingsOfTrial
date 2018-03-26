"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Player_1 = require("../../models/Player");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, playerService) {
        this.router = router;
        this.playerService = playerService;
        this.isLoggingIn = true;
        this.player = new Player_1.Player();
        this.player.username = "username";
        this.player.password = "password";
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
        var _this = this;
        this.playerService.login(this.player)
            .subscribe(function () { return _this.router.navigate(["/map"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.playerService.register(this.player)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [player_service_1.PlayerService],
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDhDQUE0QztBQUM1QyxxRUFBbUU7QUFDbkUsMENBQXlDO0FBVXpDO0lBS0Usd0JBQW9CLE1BQWMsRUFBVSxhQUE0QjtRQUFwRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFGeEUsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BDLFNBQVMsQ0FDTixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUE5QixDQUE4QixFQUNwQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxFQUF0RCxDQUFzRCxDQUNwRSxDQUFDO0lBQ0osQ0FBQztJQUNELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDckMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNEQUFzRCxDQUFDLEVBQTdELENBQTZELENBQ3BFLENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUF0Q1UsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUMxQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBTzRCLGVBQU0sRUFBeUIsOEJBQWE7T0FMN0QsY0FBYyxDQXVDMUI7SUFBRCxxQkFBQztDQUFBLEFBdkNELElBdUNDO0FBdkNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIlxyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIudXNlcm5hbWUgPSBcInVzZXJuYW1lXCI7XHJcbiAgICB0aGlzLnBsYXllci5wYXNzd29yZCA9IFwicGFzc3dvcmRcIjtcclxuICB9XHJcbiAgXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcclxuICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWduVXAoKTtcclxuICAgIH1cclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UubG9naW4odGhpcy5wbGF5ZXIpXHJcbiAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYXBcIl0pLFxyXG4gICAgICAgIChlcnJvcikgPT4gYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIilcclxuICAgICk7XHJcbiAgfVxyXG4gIHNpZ25VcCgpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5yZWdpc3Rlcih0aGlzLnBsYXllcilcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgICAgdGhpcy50b2dnbGVEaXNwbGF5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZURpc3BsYXkoKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgfVxyXG59XHJcbiJdfQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ZoneComponent = /** @class */ (function () {
    function ZoneComponent(router, playerService, page) {
        this.router = router;
        this.playerService = playerService;
        this.page = page;
        this.isCleared = true;
        this.player = this.playerService.getPlayer();
    }
    ZoneComponent.prototype.submit = function (roomId) {
        if (this.isCleared) {
            this.enter(roomId);
        }
        else {
            this.warn();
        }
    };
    ZoneComponent.prototype.enter = function (roomId) {
        this.router.navigate(["/room", roomId]);
    };
    ZoneComponent.prototype.warn = function () {
        alert("You can't access this yet!");
    };
    ZoneComponent = __decorate([
        core_1.Component({
            selector: "zone",
            moduleId: module.id,
            templateUrl: "./zone.html",
            providers: [player_service_1.PlayerService],
            styleUrls: ["./zone-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, page_1.Page])
    ], ZoneComponent);
    return ZoneComponent;
}());
exports.ZoneComponent = ZoneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFFbkUsMENBQXlDO0FBQ3pDLGdDQUErQjtBQWMvQjtJQUtFLHVCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBQXhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGNUYsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBeEJVLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBTzRCLGVBQU0sRUFBeUIsOEJBQWEsRUFBZ0IsV0FBSTtPQUxqRixhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhYnNvbHV0ZUxheW91dE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJ6b25lXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3pvbmUuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi96b25lLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBab25lQ29tcG9uZW50e1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBpc0NsZWFyZWQgPSB0cnVlO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQocm9vbUlkOiBOdW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmlzQ2xlYXJlZCkge1xyXG4gICAgICB0aGlzLmVudGVyKHJvb21JZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndhcm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGVyKHJvb21JZDogTnVtYmVyKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcm9vbVwiLCByb29tSWRdKTtcclxuICB9XHJcblxyXG4gIHdhcm4oKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBhY2Nlc3MgdGhpcyB5ZXQhXCIpO1xyXG4gIH1cclxuXHJcbn0iXX0=
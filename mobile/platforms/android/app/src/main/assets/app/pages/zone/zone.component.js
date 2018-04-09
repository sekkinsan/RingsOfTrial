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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFFbkUsMENBQXlDO0FBQ3pDLGdDQUErQjtBQWEvQjtJQUtFLHVCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBQXhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGNUYsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBeEJVLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBTzRCLGVBQU0sRUFBeUIsOEJBQWEsRUFBZ0IsV0FBSTtPQUxqRixhQUFhLENBMEJ6QjtJQUFELG9CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhYnNvbHV0ZUxheW91dE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInpvbmVcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vem9uZS5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3pvbmUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVDb21wb25lbnR7XHJcblxyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIGlzQ2xlYXJlZCA9IHRydWU7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Ym1pdChyb29tSWQ6IE51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaXNDbGVhcmVkKSB7XHJcbiAgICAgIHRoaXMuZW50ZXIocm9vbUlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2FybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW50ZXIocm9vbUlkOiBOdW1iZXIpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yb29tXCIsIHJvb21JZF0pO1xyXG4gIH1cclxuXHJcbiAgd2FybigpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGFjY2VzcyB0aGlzIHlldCFcIik7XHJcbiAgfVxyXG5cclxufSJdfQ==
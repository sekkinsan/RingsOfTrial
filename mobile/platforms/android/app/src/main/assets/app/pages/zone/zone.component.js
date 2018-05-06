"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var ZoneComponent = /** @class */ (function () {
    function ZoneComponent(route, router, playerService, ringService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.ringService = ringService;
        this.page = page;
        this.isCleared = true;
        this.clearedRooms = [];
        this.player = this.playerService.getPlayer();
        this.zone = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    }
    ZoneComponent.prototype.submit = function (roomId) {
        if (this.isCleared) {
            this.enter(roomId);
        }
        else {
            this.warn();
        }
    };
    ZoneComponent.prototype.toMap = function () {
        this.playerService.getPlayer();
        this.router.navigate(["/map"]);
    };
    ZoneComponent.prototype.enter = function (roomId) {
        this.playerService.getPlayer();
        this.router.navigate(["/room", roomId]);
    };
    ZoneComponent.prototype.warn = function () {
        alert("You can't access this yet!");
    };
    ZoneComponent.prototype.check = function () {
        console.log(JSON.stringify(this.player));
    };
    ZoneComponent = __decorate([
        core_1.Component({
            selector: "zone",
            moduleId: module.id,
            templateUrl: "./zone.html",
            providers: [player_service_1.PlayerService, ring_service_1.RingService],
            styleUrls: ["./zone-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, ring_service_1.RingService, page_1.Page])
    ], ZoneComponent);
    return ZoneComponent;
}());
exports.ZoneComponent = ZoneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFHbkUsMENBQTJGO0FBQzNGLGdDQUErQjtBQUkvQiwrREFBNkQ7QUFXN0Q7SUFPRSx1QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsYUFBNEIsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBekksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIN0osY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBckNVLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FTMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF5Qiw4QkFBYSxFQUF1QiwwQkFBVyxFQUFnQixXQUFJO09BUGxKLGFBQWEsQ0F1Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1JpbmdcIjtcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUGFyYW1NYXAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhYnNvbHV0ZUxheW91dE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3JpbmcvcmluZy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiem9uZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi96b25lLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBSaW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3pvbmUtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFpvbmVDb21wb25lbnR7XHJcblxyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIHpvbmU6IFJpbmc7XHJcbiAgaXNDbGVhcmVkID0gdHJ1ZTtcclxuICBjbGVhcmVkUm9vbXMgPSBbXTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHJpbmdTZXJ2aWNlOiBSaW5nU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMuem9uZSA9IHRoaXMucmluZ1NlcnZpY2UuZ2V0UmluZ0J5SWQoTnVtYmVyLnBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgc3VibWl0KHJvb21JZDogTnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pc0NsZWFyZWQpIHtcclxuICAgICAgdGhpcy5lbnRlcihyb29tSWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53YXJuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b01hcCgpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYXBcIl0pO1xyXG4gIH1cclxuXHJcbiAgZW50ZXIocm9vbUlkOiBOdW1iZXIpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yb29tXCIsIHJvb21JZF0pO1xyXG4gIH1cclxuXHJcbiAgd2FybigpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGFjY2VzcyB0aGlzIHlldCFcIik7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
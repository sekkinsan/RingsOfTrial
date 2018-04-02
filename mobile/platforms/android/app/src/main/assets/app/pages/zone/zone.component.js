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
    ZoneComponent.prototype.submit = function () {
        if (this.isCleared) {
            this.enter();
        }
        else {
            this.warn();
        }
    };
    ZoneComponent.prototype.enter = function () {
        this.router.navigate(["/room"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFFbkUsMENBQXlDO0FBQ3pDLGdDQUErQjtBQWEvQjtJQUtFLHVCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBQXhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGNUYsY0FBUyxHQUFHLElBQUksQ0FBQztRQUdmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNFLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF4QlUsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FPNEIsZUFBTSxFQUF5Qiw4QkFBYSxFQUFnQixXQUFJO09BTGpGLGFBQWEsQ0EwQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFic29sdXRlTGF5b3V0TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiem9uZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi96b25lLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vem9uZS1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZUNvbXBvbmVudHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgaXNDbGVhcmVkID0gdHJ1ZTtcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuaXNDbGVhcmVkKSB7XHJcbiAgICAgIHRoaXMuZW50ZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2FybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW50ZXIoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcm9vbVwiXSk7XHJcbiAgfVxyXG5cclxuICB3YXJuKCkge1xyXG4gICAgYWxlcnQoXCJZb3UgY2FuJ3QgYWNjZXNzIHRoaXMgeWV0IVwiKTtcclxuICB9XHJcblxyXG59Il19
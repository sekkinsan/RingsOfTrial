"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var page_1 = require("ui/page");
var ZoneComponent = /** @class */ (function () {
    function ZoneComponent(playerService, page) {
        this.playerService = playerService;
        this.page = page;
        this.cleared = Boolean;
        this.player = this.playerService.getPlayer();
    }
    ZoneComponent.prototype.submit = function () {
        this.enter();
    };
    ZoneComponent.prototype.enter = function () {
        alert("OK!");
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
        __metadata("design:paramtypes", [player_service_1.PlayerService, page_1.Page])
    ], ZoneComponent);
    return ZoneComponent;
}());
exports.ZoneComponent = ZoneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFHbkUsZ0NBQStCO0FBYS9CO0lBS0UsdUJBQW9CLGFBQTRCLEVBQVUsSUFBVTtRQUFoRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGcEUsWUFBTyxHQUFHLE9BQU8sQ0FBQztRQUdoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQXBCVSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztZQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQU9tQyw4QkFBYSxFQUFnQixXQUFJO09BTHpELGFBQWEsQ0FzQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFic29sdXRlTGF5b3V0TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiem9uZVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi96b25lLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vem9uZS1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgWm9uZUNvbXBvbmVudHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgY2xlYXJlZCA9IEJvb2xlYW47XHJcbiAgXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgdGhpcy5lbnRlcigpO1xyXG4gIH1cclxuXHJcbiAgZW50ZXIoKSB7XHJcbiAgICBhbGVydChcIk9LIVwiKTtcclxuICB9XHJcblxyXG4gIHdhcm4oKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBhY2Nlc3MgdGhpcyB5ZXQhXCIpO1xyXG4gIH1cclxuICBcclxufSJdfQ==
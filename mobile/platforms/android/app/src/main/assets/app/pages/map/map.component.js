"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MapComponent = /** @class */ (function () {
    function MapComponent(router, route, playerService, spellService, page) {
        this.router = router;
        this.route = route;
        this.playerService = playerService;
        this.spellService = spellService;
        this.page = page;
        this.isCleared = true;
        this.clearedRings = [];
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
        this.player.clearedRings = [];
    }
    MapComponent.prototype.submit = function (ringId) {
        if (this.isCleared) {
            this.enter(ringId);
        }
        else {
            this.warn();
        }
    };
    MapComponent.prototype.enter = function (ringId) {
        this.playerService.getPlayer();
        this.router.navigate(["/ring", ringId]);
    };
    MapComponent.prototype.warn = function () {
        alert("You already cleared this!");
    };
    MapComponent.prototype.stats = function () {
        console.log(JSON.stringify(this.player));
        //test to see player actually has a spellbook?
    };
    MapComponent.prototype.checkClearedRooms = function () {
        console.log(JSON.stringify(this.player.clearedRooms));
    };
    MapComponent.prototype.checkClearedRings = function () {
        console.log(JSON.stringify(this.player.clearedRings));
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.html",
            providers: [player_service_1.PlayerService, spell_service_1.SpellService],
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, player_service_1.PlayerService, spell_service_1.SpellService, page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUVBQW1FO0FBQ25FLGtFQUFnRTtBQUVoRSwwQ0FBMkY7QUFDM0YsZ0NBQStCO0FBYS9CO0lBUUUsc0JBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBQTNJLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTC9KLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFHaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBRWhDLENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLE1BQWM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsOENBQThDO0lBQ2hELENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCx3Q0FBaUIsR0FBakI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUEzQ1UsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLFlBQVk7WUFDekIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztTQUM3QyxDQUFDO3lDQVM0QixlQUFNLEVBQWlCLHVCQUFjLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FScEosWUFBWSxDQThDeEI7SUFBRCxtQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3JpbmdcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXBcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXAtY29tbW9uLmNzc1wiLCBcIi4vbWFwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgaXNDbGVhcmVkID0gdHJ1ZTtcclxuICBzcGVsbHM6IFNwZWxsW107XHJcbiAgcmluZzogUmluZztcclxuICBjbGVhcmVkUmluZ3MgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBzcGVsbFNlcnZpY2U6IFNwZWxsU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucGxheWVyLnNwZWxscyA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdldFBsYXllclNwZWxscygpO1xyXG4gICAgdGhpcy5wbGF5ZXIuY2xlYXJlZFJpbmdzID0gW107XHJcblxyXG4gIH1cclxuXHJcbiAgc3VibWl0KHJpbmdJZDogTnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5pc0NsZWFyZWQpIHtcclxuICAgICAgdGhpcy5lbnRlcihyaW5nSWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53YXJuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbnRlcihyaW5nSWQ6IE51bWJlcikge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3JpbmdcIiwgcmluZ0lkXSk7XHJcbiAgfVxyXG5cclxuICB3YXJuKCkge1xyXG4gICAgYWxlcnQoXCJZb3UgYWxyZWFkeSBjbGVhcmVkIHRoaXMhXCIpO1xyXG4gIH1cclxuXHJcbiAgc3RhdHMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllcikpO1xyXG4gICAgLy90ZXN0IHRvIHNlZSBwbGF5ZXIgYWN0dWFsbHkgaGFzIGEgc3BlbGxib29rP1xyXG4gIH1cclxuXHJcbiAgY2hlY2tDbGVhcmVkUm9vbXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMpKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQ2xlYXJlZFJpbmdzKCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuY2xlYXJlZFJpbmdzKSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
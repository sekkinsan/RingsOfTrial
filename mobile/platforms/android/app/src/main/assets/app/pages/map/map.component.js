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
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
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
    MapComponent.prototype.clearedRooms = function () {
        console.log(JSON.stringify(this.player.clearedRooms));
    };
    MapComponent.prototype.clearedRings = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUVBQW1FO0FBQ25FLGtFQUFnRTtBQUVoRSwwQ0FBMkY7QUFDM0YsZ0NBQStCO0FBYS9CO0lBTUUsc0JBQW9CLE1BQWMsRUFBVSxLQUFxQixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBQTNJLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSC9KLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUUzRCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNFLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLDhDQUE4QztJQUNoRCxDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFZLEdBQVo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUF4Q1UsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLFlBQVk7WUFDekIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztTQUM3QyxDQUFDO3lDQU80QixlQUFNLEVBQWlCLHVCQUFjLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FOcEosWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3JpbmdcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJtYXBcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXAtY29tbW9uLmNzc1wiLCBcIi4vbWFwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgaXNDbGVhcmVkID0gdHJ1ZTtcclxuICBzcGVsbHM6IFNwZWxsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRQbGF5ZXJTcGVsbHMoKTtcclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQocmluZ0lkOiBOdW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmlzQ2xlYXJlZCkge1xyXG4gICAgICB0aGlzLmVudGVyKHJpbmdJZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndhcm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGVyKHJpbmdJZDogTnVtYmVyKSB7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmluZ1wiLCByaW5nSWRdKTtcclxuICB9XHJcblxyXG4gIHdhcm4oKSB7XHJcbiAgICBhbGVydChcIllvdSBhbHJlYWR5IGNsZWFyZWQgdGhpcyFcIik7XHJcbiAgfVxyXG5cclxuICBzdGF0cygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyKSk7XHJcbiAgICAvL3Rlc3QgdG8gc2VlIHBsYXllciBhY3R1YWxseSBoYXMgYSBzcGVsbGJvb2s/XHJcbiAgfVxyXG5cclxuICBjbGVhcmVkUm9vbXMoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMpKTtcclxuICB9XHJcblxyXG4gIGNsZWFyZWRSaW5ncygpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLmNsZWFyZWRSaW5ncykpO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4gIFxyXG4iXX0=
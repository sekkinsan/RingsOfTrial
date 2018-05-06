"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var MapComponent = /** @class */ (function () {
    function MapComponent(router, route, playerService, spellService, ringService, page) {
        this.router = router;
        this.route = route;
        this.playerService = playerService;
        this.spellService = spellService;
        this.ringService = ringService;
        this.page = page;
        this.isCleared = true;
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
    }
    MapComponent.prototype.submit = function (zoneId) {
        if (this.isCleared) {
            this.enter(zoneId);
        }
        else {
            this.warn();
        }
    };
    MapComponent.prototype.enter = function (zoneId) {
        this.playerService.getPlayer();
        this.router.navigate(["/zone", zoneId]);
    };
    MapComponent.prototype.warn = function () {
        alert("You already cleared this!");
    };
    MapComponent.prototype.test = function () {
        console.log(JSON.stringify(this.player.spells));
        console.log(JSON.stringify(this.player.spells[0]));
        console.log(JSON.stringify(this.player.spells[1]));
        console.log(JSON.stringify(this.player));
        //test to see player actually has a spellbook?
    };
    MapComponent.prototype.clearedRooms = function () {
        console.log(JSON.stringify(this.player.clearedRooms));
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.html",
            providers: [player_service_1.PlayerService, spell_service_1.SpellService, ring_service_1.RingService],
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, player_service_1.PlayerService, spell_service_1.SpellService, ring_service_1.RingService, page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUVBQW1FO0FBQ25FLGtFQUFnRTtBQUVoRSwwQ0FBMkY7QUFDM0YsZ0NBQStCO0FBRy9CLCtEQUE2RDtBQVc3RDtJQU1FLHNCQUFvQixNQUFjLEVBQVUsS0FBcUIsRUFBVSxhQUE0QixFQUFVLFlBQTBCLEVBQVUsV0FBd0IsRUFBVSxJQUFVO1FBQTdLLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIak0sY0FBUyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRzNELENBQUM7SUFFRCw2QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLE1BQWM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsOENBQThDO0lBQ2hELENBQUM7SUFFRCxtQ0FBWSxHQUFaO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBeENVLFlBQVk7UUFQeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksRUFBRSwwQkFBVyxDQUFDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztTQUM3QyxDQUFDO3lDQU80QixlQUFNLEVBQWlCLHVCQUFjLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7T0FOdEwsWUFBWSxDQTJDeEI7SUFBRCxtQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IFJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yaW5nL3Jpbmcuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yaW5nXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibWFwXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL21hcC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgU3BlbGxTZXJ2aWNlLCBSaW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL21hcC1jb21tb24uY3NzXCIsIFwiLi9tYXAuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQge1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBpc0NsZWFyZWQgPSB0cnVlO1xyXG4gIHNwZWxsczogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBzcGVsbFNlcnZpY2U6IFNwZWxsU2VydmljZSwgcHJpdmF0ZSByaW5nU2VydmljZTogUmluZ1NlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRQbGF5ZXJTcGVsbHMoKTtcclxuICAgIFxyXG5cclxuICB9XHJcblxyXG4gIHN1Ym1pdCh6b25lSWQ6IE51bWJlcikge1xyXG4gICAgaWYgKHRoaXMuaXNDbGVhcmVkKSB7XHJcbiAgICAgIHRoaXMuZW50ZXIoem9uZUlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2FybigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW50ZXIoem9uZUlkOiBOdW1iZXIpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi96b25lXCIsIHpvbmVJZF0pO1xyXG4gIH1cclxuXHJcbiAgd2FybigpIHtcclxuICAgIGFsZXJ0KFwiWW91IGFscmVhZHkgY2xlYXJlZCB0aGlzIVwiKTtcclxuICB9XHJcblxyXG4gIHRlc3QoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxsc1swXSkpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzFdKSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllcikpO1xyXG4gICAgLy90ZXN0IHRvIHNlZSBwbGF5ZXIgYWN0dWFsbHkgaGFzIGEgc3BlbGxib29rP1xyXG4gIH1cclxuXHJcbiAgY2xlYXJlZFJvb21zKCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuY2xlYXJlZFJvb21zKSk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
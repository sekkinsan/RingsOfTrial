"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var RingComponent = /** @class */ (function () {
    function RingComponent(route, router, playerService, ringService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.ringService = ringService;
        this.page = page;
        this.isCleared = true;
        this.clearedRooms = [];
        this.player = this.playerService.getPlayer();
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.player.clearedRings = this.player.clearedRings || [];
    }
    RingComponent.prototype.submit = function (roomId) {
        if (this.isCleared) {
            this.enter(roomId);
        }
        else {
            this.warn();
        }
    };
    RingComponent.prototype.toMap = function () {
        this.playerService.getPlayer();
        this.router.navigate(["/map"]);
    };
    RingComponent.prototype.enter = function (roomId) {
        this.playerService.getPlayer();
        this.router.navigate(["/room", roomId]);
    };
    RingComponent.prototype.warn = function () {
        alert("You can't access this yet!");
    };
    RingComponent.prototype.check = function () {
        console.log(JSON.stringify(this.player));
        console.log(JSON.stringify(this.ring));
    };
    RingComponent = __decorate([
        core_1.Component({
            selector: "ring",
            moduleId: module.id,
            templateUrl: "./ring.html",
            providers: [player_service_1.PlayerService, ring_service_1.RingService],
            styleUrls: ["./ring-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, ring_service_1.RingService, page_1.Page])
    ], RingComponent);
    return RingComponent;
}());
exports.RingComponent = RingComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFHbkUsMENBQTJGO0FBQzNGLGdDQUErQjtBQUkvQiwrREFBNkQ7QUFXN0Q7SUFPRSx1QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsYUFBNEIsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBekksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIN0osY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUU1RCxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsNkJBQUssR0FBTCxVQUFNLE1BQWM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw0QkFBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF2Q1UsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsMEJBQVcsQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO3lDQVMyQix1QkFBYyxFQUFrQixlQUFNLEVBQXlCLDhCQUFhLEVBQXVCLDBCQUFXLEVBQWdCLFdBQUk7T0FQbEosYUFBYSxDQXlDekI7SUFBRCxvQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUmluZyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUmluZ1wiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFic29sdXRlTGF5b3V0TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcmluZy9yaW5nLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJyaW5nXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3JpbmcuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIFJpbmdTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vcmluZy1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmluZ0NvbXBvbmVudHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgcmluZzogUmluZztcclxuICBpc0NsZWFyZWQgPSB0cnVlO1xyXG4gIGNsZWFyZWRSb29tcyA9IFtdO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgcmluZ1NlcnZpY2U6IFJpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yaW5nID0gdGhpcy5yaW5nU2VydmljZS5nZXRSaW5nQnlJZChOdW1iZXIucGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykpKTtcclxuICAgIHRoaXMucGxheWVyLmNsZWFyZWRSaW5ncyA9IHRoaXMucGxheWVyLmNsZWFyZWRSaW5ncyB8fCBbXTtcclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQocm9vbUlkOiBOdW1iZXIpIHtcclxuICAgIGlmICh0aGlzLmlzQ2xlYXJlZCkge1xyXG4gICAgICB0aGlzLmVudGVyKHJvb21JZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndhcm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvTWFwKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21hcFwiXSk7XHJcbiAgfVxyXG5cclxuICBlbnRlcihyb29tSWQ6IE51bWJlcikge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jvb21cIiwgcm9vbUlkXSk7XHJcbiAgfVxyXG5cclxuICB3YXJuKCkge1xyXG4gICAgYWxlcnQoXCJZb3UgY2FuJ3QgYWNjZXNzIHRoaXMgeWV0IVwiKTtcclxuICB9XHJcblxyXG4gIGNoZWNrKCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIpKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucmluZykpO1xyXG4gIH1cclxuXHJcbn0iXX0=
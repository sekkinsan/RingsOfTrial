"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var RingComponent = /** @class */ (function () {
    function RingComponent(route, router, playerService, ringService, page) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.ringService = ringService;
        this.page = page;
        this.clearedRooms = [];
        this.isCleared = function (roomId) { return _this.player.clearedRooms && _this.player.clearedRooms.indexOf(roomId) >= 0; };
        this.player = this.playerService.getPlayer();
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.player.clearedRings = this.player.clearedRings || [];
    }
    RingComponent.prototype.submit = function (roomId) {
        if (!this.isCleared(roomId)) {
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
        alert("You've already cleared this!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFHbkUsMENBQTJGO0FBQzNGLGdDQUErQjtBQUkvQiwrREFBNkQ7QUFXN0Q7SUFNRSx1QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsYUFBNEIsRUFBVSxXQUF3QixFQUFVLElBQVU7UUFBN0osaUJBS0M7UUFMbUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGN0osaUJBQVksR0FBRyxFQUFFLENBQUM7UUFTbEIsY0FBUyxHQUFHLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBekUsQ0FBeUUsQ0FBQztRQU5oRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQztJQUU1RCxDQUFDO0lBSUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXhDVSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSwwQkFBVyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBUTJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBeUIsOEJBQWEsRUFBdUIsMEJBQVcsRUFBZ0IsV0FBSTtPQU5sSixhQUFhLENBMEN6QjtJQUFELG9CQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBSaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVscy9SaW5nXCI7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYWJzb2x1dGVMYXlvdXRNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yaW5nL3Jpbmcuc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInJpbmdcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcmluZy5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgUmluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9yaW5nLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSaW5nQ29tcG9uZW50e1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICByaW5nOiBSaW5nO1xyXG4gIGNsZWFyZWRSb29tcyA9IFtdO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgcmluZ1NlcnZpY2U6IFJpbmdTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yaW5nID0gdGhpcy5yaW5nU2VydmljZS5nZXRSaW5nQnlJZChOdW1iZXIucGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykpKTtcclxuICAgIHRoaXMucGxheWVyLmNsZWFyZWRSaW5ncyA9IHRoaXMucGxheWVyLmNsZWFyZWRSaW5ncyB8fCBbXTtcclxuXHJcbiAgfVxyXG5cclxuICBpc0NsZWFyZWQgPSAocm9vbUlkKSA9PiB0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMgJiYgdGhpcy5wbGF5ZXIuY2xlYXJlZFJvb21zLmluZGV4T2Yocm9vbUlkKSA+PSAwO1xyXG5cclxuICBzdWJtaXQocm9vbUlkOiBOdW1iZXIpIHtcclxuICAgIGlmICghdGhpcy5pc0NsZWFyZWQocm9vbUlkKSkge1xyXG4gICAgICB0aGlzLmVudGVyKHJvb21JZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndhcm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvTWFwKCkge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21hcFwiXSk7XHJcbiAgfVxyXG5cclxuICBlbnRlcihyb29tSWQ6IE51bWJlcikge1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Jvb21cIiwgcm9vbUlkXSk7XHJcbiAgfVxyXG5cclxuICB3YXJuKCkge1xyXG4gICAgYWxlcnQoXCJZb3UndmUgYWxyZWFkeSBjbGVhcmVkIHRoaXMhXCIpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2soKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllcikpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yaW5nKSk7XHJcbiAgfVxyXG5cclxufSJdfQ==
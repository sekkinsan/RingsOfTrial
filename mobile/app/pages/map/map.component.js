"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MapComponent = /** @class */ (function () {
    function MapComponent(router, playerService, page) {
        this.router = router;
        this.playerService = playerService;
        this.page = page;
        this.isCleared = true;
        this.player = this.playerService.getPlayer();
    }
    MapComponent.prototype.submit = function () {
        if (this.isCleared) {
            this.enter();
        }
        else {
            this.warn();
        }
    };
    MapComponent.prototype.enter = function () {
        this.router.navigate(["/zone"]);
    };
    MapComponent.prototype.warn = function () {
        alert("You can't access this yet!");
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.html",
            providers: [player_service_1.PlayerService],
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUVBQW1FO0FBRW5FLDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFZL0I7SUFLRSxzQkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsSUFBVTtRQUF4RSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBRjVGLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFHZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELDRCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDRSxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBeEJVLFlBQVk7UUFQeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDMUIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO1NBQzdDLENBQUM7eUNBTTRCLGVBQU0sRUFBeUIsOEJBQWEsRUFBZ0IsV0FBSTtPQUxqRixZQUFZLENBMEJ4QjtJQUFELG1CQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhYnNvbHV0ZUxheW91dE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hcFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXAuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tYXAtY29tbW9uLmNzc1wiLCBcIi4vbWFwLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgaXNDbGVhcmVkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzQ2xlYXJlZCkge1xyXG4gICAgICB0aGlzLmVudGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndhcm4oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVudGVyKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3pvbmVcIl0pO1xyXG4gIH1cclxuXHJcbiAgd2FybigpIHtcclxuICAgIGFsZXJ0KFwiWW91IGNhbid0IGFjY2VzcyB0aGlzIHlldCFcIik7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuICBcclxuIl19
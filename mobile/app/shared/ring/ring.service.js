"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player/player.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RingService = /** @class */ (function () {
    function RingService(playerService) {
        this.playerService = playerService;
        if (!RingService_1.rings) {
            RingService_1.rings = require("../../Assets/rings.json").rings;
        }
    }
    RingService_1 = RingService;
    RingService.prototype.setRingCleared = function (player, id) {
        if (player.clearedRooms.length == 3) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
            //clear out clearedRooms array each time you clear a ring
        }
        //work on loop function to loop through array?
        // for (let i: number = 0; i < player.clearedRooms.length; i++) {
        // }
    };
    RingService.prototype.getRingById = function (id) {
        for (var i = 0; i < RingService_1.rings.length; i++) {
            var ring = RingService_1.rings[i];
            if (ring.id === id) {
                return ring;
            }
        }
        return null;
    };
    RingService = RingService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], RingService);
    return RingService;
    var RingService_1;
}());
exports.RingService = RingService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDJEQUF5RDtBQU16RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQjtJQUdFLHFCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGFBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUM7SUFFSCxDQUFDO29CQVJVLFdBQVc7SUFVdEIsb0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxFQUFVO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2hDLHlEQUF5RDtRQUV6RCxDQUFDO1FBQ0QsOENBQThDO1FBQzlDLGlFQUFpRTtRQUVqRSxJQUFJO0lBQ04sQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2RCxJQUFJLElBQUksR0FBUyxhQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBL0JVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJd0IsOEJBQWE7T0FIckMsV0FBVyxDQWlDdkI7SUFBRCxrQkFBQzs7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1JpbmdcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmluZ1NlcnZpY2Uge1xyXG4gIHN0YXRpYyByaW5ncyA6IFJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIVJpbmdTZXJ2aWNlLnJpbmdzKSB7XHJcbiAgICAgICAgUmluZ1NlcnZpY2UucmluZ3MgPSByZXF1aXJlKFwiLi4vLi4vQXNzZXRzL3JpbmdzLmpzb25cIikucmluZ3M7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNldFJpbmdDbGVhcmVkKHBsYXllcjogUGxheWVyLCBpZDogbnVtYmVyKXtcclxuICAgIGlmIChwbGF5ZXIuY2xlYXJlZFJvb21zLmxlbmd0aCA9PSAzKSB7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UuY2xlYXJlZFJpbmcocGxheWVyLCBpZCk7XHJcbiAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUklORyFcIik7XHJcbiAgICAvL2NsZWFyIG91dCBjbGVhcmVkUm9vbXMgYXJyYXkgZWFjaCB0aW1lIHlvdSBjbGVhciBhIHJpbmdcclxuICAgIFxyXG4gICAgfSBcclxuICAgIC8vd29yayBvbiBsb29wIGZ1bmN0aW9uIHRvIGxvb3AgdGhyb3VnaCBhcnJheT9cclxuICAgIC8vIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBwbGF5ZXIuY2xlYXJlZFJvb21zLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgZ2V0UmluZ0J5SWQoaWQ6IE51bWJlcikgOiBSaW5nIHtcclxuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IFJpbmdTZXJ2aWNlLnJpbmdzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJpbmc6IFJpbmcgPSBSaW5nU2VydmljZS5yaW5nc1tpXTtcclxuICAgICAgICBpZiAocmluZy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG59Il19
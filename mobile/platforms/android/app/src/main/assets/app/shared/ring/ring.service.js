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
        }
        //testing loops?
        //work on loop function to loop through array?
        // let ring1 = [1,2,3];
        // let ring2 = [4,5,6];
        // let ring3 = [7,8,9];
        // let ring4 = [10,11,12];
        // let ring5 = [13,14,15];
        // for (let i: number = 0; i < player.clearedRooms.length; i++) {
        // }
    };
    RingService.prototype.setRing2Cleared = function (player, id) {
        if (player.clearedRooms.length == 6) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setRing3Cleared = function (player, id) {
        if (player.clearedRooms.length == 9) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setRing4Cleared = function (player, id) {
        if (player.clearedRooms.length == 12) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setGameCleared = function (player, id) {
        if (player.clearedRooms.length == 15) {
            this.playerService.clearedRing(player, id);
            alert("YOU ESCAPED!");
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDJEQUF5RDtBQU16RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQjtJQUdFLHFCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGFBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUM7SUFFSCxDQUFDO29CQVJVLFdBQVc7SUFVdEIsb0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxFQUFVO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFSCxnQkFBZ0I7UUFDaEIsOENBQThDO1FBQzlDLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsaUVBQWlFO1FBRWpFLElBQUk7SUFDTixDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixNQUFjLEVBQUUsRUFBVTtRQUN4QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsTUFBYyxFQUFFLEVBQVU7UUFDeEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLE1BQWMsRUFBRSxFQUFVO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxFQUFVO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFXLEdBQVgsVUFBWSxFQUFVO1FBQ3BCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2RCxJQUFJLElBQUksR0FBUyxhQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBaEVVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJd0IsOEJBQWE7T0FIckMsV0FBVyxDQWtFdkI7SUFBRCxrQkFBQzs7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1JpbmdcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUmluZ1NlcnZpY2Uge1xyXG4gIHN0YXRpYyByaW5ncyA6IFJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIVJpbmdTZXJ2aWNlLnJpbmdzKSB7XHJcbiAgICAgICAgUmluZ1NlcnZpY2UucmluZ3MgPSByZXF1aXJlKFwiLi4vLi4vQXNzZXRzL3JpbmdzLmpzb25cIikucmluZ3M7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHNldFJpbmdDbGVhcmVkKHBsYXllcjogUGxheWVyLCBpZDogbnVtYmVyKXtcclxuICAgIGlmIChwbGF5ZXIuY2xlYXJlZFJvb21zLmxlbmd0aCA9PSAzKSB7XHJcbiAgICAgIHRoaXMucGxheWVyU2VydmljZS5jbGVhcmVkUmluZyhwbGF5ZXIsIGlkKTtcclxuICAgICAgYWxlcnQoXCJZT1UgQ0xFQVJFRCBUSElTIFJJTkchXCIpO1xyXG4gICAgICB9IFxyXG5cclxuICAgIC8vdGVzdGluZyBsb29wcz9cclxuICAgIC8vd29yayBvbiBsb29wIGZ1bmN0aW9uIHRvIGxvb3AgdGhyb3VnaCBhcnJheT9cclxuICAgIC8vIGxldCByaW5nMSA9IFsxLDIsM107XHJcbiAgICAvLyBsZXQgcmluZzIgPSBbNCw1LDZdO1xyXG4gICAgLy8gbGV0IHJpbmczID0gWzcsOCw5XTtcclxuICAgIC8vIGxldCByaW5nNCA9IFsxMCwxMSwxMl07XHJcbiAgICAvLyBsZXQgcmluZzUgPSBbMTMsMTQsMTVdO1xyXG4gICAgLy8gZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHBsYXllci5jbGVhcmVkUm9vbXMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICBzZXRSaW5nMkNsZWFyZWQocGxheWVyOiBQbGF5ZXIsIGlkOiBudW1iZXIpe1xyXG4gICAgaWYgKHBsYXllci5jbGVhcmVkUm9vbXMubGVuZ3RoID09IDYpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmNsZWFyZWRSaW5nKHBsYXllciwgaWQpO1xyXG4gICAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUklORyFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSaW5nM0NsZWFyZWQocGxheWVyOiBQbGF5ZXIsIGlkOiBudW1iZXIpe1xyXG4gICAgaWYgKHBsYXllci5jbGVhcmVkUm9vbXMubGVuZ3RoID09IDkpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmNsZWFyZWRSaW5nKHBsYXllciwgaWQpO1xyXG4gICAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUklORyFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRSaW5nNENsZWFyZWQocGxheWVyOiBQbGF5ZXIsIGlkOiBudW1iZXIpIHtcclxuICAgIGlmIChwbGF5ZXIuY2xlYXJlZFJvb21zLmxlbmd0aCA9PSAxMikge1xyXG4gICAgICB0aGlzLnBsYXllclNlcnZpY2UuY2xlYXJlZFJpbmcocGxheWVyLCBpZCk7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIENMRUFSRUQgVEhJUyBSSU5HIVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEdhbWVDbGVhcmVkKHBsYXllcjogUGxheWVyLCBpZDogbnVtYmVyKSB7XHJcbiAgICBpZiAocGxheWVyLmNsZWFyZWRSb29tcy5sZW5ndGggPT0gMTUpIHtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmNsZWFyZWRSaW5nKHBsYXllciwgaWQpO1xyXG4gICAgICBhbGVydChcIllPVSBFU0NBUEVEIVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFJpbmdCeUlkKGlkOiBOdW1iZXIpIDogUmluZyB7XHJcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCBSaW5nU2VydmljZS5yaW5ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByaW5nOiBSaW5nID0gUmluZ1NlcnZpY2UucmluZ3NbaV07XHJcbiAgICAgICAgaWYgKHJpbmcuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBcclxufSJdfQ==
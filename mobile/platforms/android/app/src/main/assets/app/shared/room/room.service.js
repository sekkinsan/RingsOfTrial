"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player/player.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RoomService = /** @class */ (function () {
    function RoomService(playerService) {
        this.playerService = playerService;
        if (!RoomService_1.rooms) {
            RoomService_1.rooms = require("../../Assets/rooms.json").rooms;
        }
    }
    RoomService_1 = RoomService;
    RoomService.prototype.setRoomCleared = function (player, id) {
        this.playerService.clearedRoom(player, id);
    };
    RoomService.prototype.getRoomById = function (id) {
        for (var i = 0; i < RoomService_1.rooms.length; i++) {
            var room = RoomService_1.rooms[i];
            if (room.id === id) {
                return room;
            }
        }
        return null;
    };
    RoomService = RoomService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], RoomService);
    return RoomService;
    var RoomService_1;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDJEQUF5RDtBQU16RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQjtJQUdFLHFCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGFBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUM7SUFFSCxDQUFDO29CQVJVLFdBQVc7SUFVdEIsb0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxFQUFVO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFTLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUF0QlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUl3Qiw4QkFBYTtPQUhyQyxXQUFXLENBd0J2QjtJQUFELGtCQUFDOztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSb29tU2VydmljZSB7XHJcbiAgc3RhdGljIHJvb21zIDogUm9vbVtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgIGlmICghUm9vbVNlcnZpY2Uucm9vbXMpIHtcclxuICAgICAgICBSb29tU2VydmljZS5yb29tcyA9IHJlcXVpcmUoXCIuLi8uLi9Bc3NldHMvcm9vbXMuanNvblwiKS5yb29tcztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2V0Um9vbUNsZWFyZWQocGxheWVyOiBQbGF5ZXIsIGlkOiBudW1iZXIpe1xyXG4gICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmNsZWFyZWRSb29tKHBsYXllciwgaWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Um9vbUJ5SWQoaWQ6IE51bWJlcikgOiBSb29tIHtcclxuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IFJvb21TZXJ2aWNlLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJvb206IFJvb20gPSBSb29tU2VydmljZS5yb29tc1tpXTtcclxuICAgICAgICBpZiAocm9vbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG59Il19
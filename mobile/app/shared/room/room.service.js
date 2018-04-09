"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RoomService = /** @class */ (function () {
    function RoomService() {
        if (!RoomService_1.rooms) {
            RoomService_1.rooms = require("../../Assets/rooms.json").rooms;
        }
    }
    RoomService_1 = RoomService;
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
        __metadata("design:paramtypes", [])
    ], RoomService);
    return RoomService;
    var RoomService_1;
}());
exports.RoomService = RoomService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm9vbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBUzNDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBSy9CO0lBR0U7UUFDRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGFBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUM7SUFFSCxDQUFDO29CQVJVLFdBQVc7SUFXdEIsaUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFTLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFuQlUsV0FBVztRQUR2QixpQkFBVSxFQUFFOztPQUNBLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7O0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zYXZlclwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ab25lXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFJvb21TZXJ2aWNlIHtcclxuICBzdGF0aWMgcm9vbXMgOiBSb29tW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCFSb29tU2VydmljZS5yb29tcykge1xyXG4gICAgICAgIFJvb21TZXJ2aWNlLnJvb21zID0gcmVxdWlyZShcIi4uLy4uL0Fzc2V0cy9yb29tcy5qc29uXCIpLnJvb21zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgZ2V0Um9vbUJ5SWQoaWQ6IE51bWJlcikgOiBSb29tIHtcclxuICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IFJvb21TZXJ2aWNlLnJvb21zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IHJvb206IFJvb20gPSBSb29tU2VydmljZS5yb29tc1tpXTtcclxuICAgICAgICBpZiAocm9vbS5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG4gIFxyXG59Il19
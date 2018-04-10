"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var room_component_1 = require("../../pages/room/room.component");
var CombatService = /** @class */ (function () {
    function CombatService(http, roomComponent) {
        this.http = http;
        this.roomComponent = roomComponent;
    }
    CombatService.prototype.damageDealt = function () {
    };
    CombatService.prototype.damageReceived = function () {
    };
    CombatService.prototype.clearRoom = function () {
        if (this.roomComponent.enemy.health <= 0) {
            alert("YOU CLEARED THIS ROOM!");
        }
        this.roomComponent.cleared = true;
    };
    CombatService.prototype.failRoom = function () {
        if (this.roomComponent.player.health <= 0) {
            alert("YOU FAILED THIS ROOM!");
        }
        this.roomComponent.cleared = false;
    };
    CombatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, room_component_1.RoomComponent])
    ], CombatService);
    return CombatService;
}());
exports.CombatService = CombatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFTcEUsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFJL0Isa0VBQWdFO0FBS2hFO0lBRUUsdUJBQW9CLElBQVUsRUFBVSxhQUE0QjtRQUFoRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFHcEUsQ0FBQztJQUVELG1DQUFXLEdBQVg7SUFFQSxDQUFDO0lBRUQsc0NBQWMsR0FBZDtJQUVBLENBQUM7SUFHRCxpQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQ2hDLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDckMsQ0FBQztJQTVCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7eUNBR2UsV0FBSSxFQUF5Qiw4QkFBYTtPQUZ6RCxhQUFhLENBOEJ6QjtJQUFELG9CQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zYXZlclwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ab25lXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteVNlcnZpY2UgfSBmcm9tIFwiLi4vZW5lbXkvZW5lbXkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Jvb20vcm9vbS5jb21wb25lbnRcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tYmF0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb29tQ29tcG9uZW50OiBSb29tQ29tcG9uZW50KSB7XHJcbiAgICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZGFtYWdlRGVhbHQoKXtcclxuXHJcbiAgfVxyXG5cclxuICBkYW1hZ2VSZWNlaXZlZCgpe1xyXG4gICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgY2xlYXJSb29tKCl7XHJcbiAgICAgIGlmICh0aGlzLnJvb21Db21wb25lbnQuZW5lbXkuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUk9PTSFcIik7XHJcbiAgICAgIH0gXHJcbiAgICAgIHRoaXMucm9vbUNvbXBvbmVudC5jbGVhcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZhaWxSb29tKCl7XHJcbiAgICBpZiAodGhpcy5yb29tQ29tcG9uZW50LnBsYXllci5oZWFsdGggPD0gMCkge1xyXG4gICAgICBhbGVydChcIllPVSBGQUlMRUQgVEhJUyBST09NIVwiKVxyXG4gICAgfVxyXG4gICAgdGhpcy5yb29tQ29tcG9uZW50LmNsZWFyZWQgPSBmYWxzZTtcclxuICB9XHJcbiAgXHJcbn0iXX0=
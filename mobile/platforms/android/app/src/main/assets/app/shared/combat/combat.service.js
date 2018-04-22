"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var room_component_1 = require("../../pages/room/room.component");
var player_service_1 = require("../player/player.service");
var enemy_service_1 = require("../enemy/enemy.service");
var spell_service_1 = require("../spell/spell.service");
var CombatService = /** @class */ (function () {
    function CombatService(http, roomComponent, playerService, enemyService, spellService) {
        this.http = http;
        this.roomComponent = roomComponent;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.spellService = spellService;
        this.combatArray = [];
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
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
        __metadata("design:paramtypes", [http_1.Http, room_component_1.RoomComponent, player_service_1.PlayerService, enemy_service_1.EnemyService, spell_service_1.SpellService])
    ], CombatService);
    return CombatService;
}());
exports.CombatService = CombatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFVcEUsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFDL0Isa0VBQWdFO0FBQ2hFLDJEQUF5RDtBQUN6RCx3REFBc0Q7QUFFdEQsd0RBQXNEO0FBS3REO0lBTUUsdUJBQW9CLElBQVUsRUFBVSxhQUE0QixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxZQUEwQjtRQUE5SixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFIbEwsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFJZixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUczRCxDQUFDO0lBRUQsbUNBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCxzQ0FBYyxHQUFkO0lBRUEsQ0FBQztJQUdELGlDQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7UUFDaEMsQ0FBQztRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBbENVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FPZSxXQUFJLEVBQXlCLDhCQUFhLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQXdCLDRCQUFZO09BTnZLLGFBQWEsQ0FvQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1pvbmVcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJvb21Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcm9vbS9yb29tLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteVNlcnZpY2UgfSBmcm9tIFwiLi4vZW5lbXkvZW5lbXkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21iYXRTZXJ2aWNlIHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgY29tYmF0QXJyYXkgPSBbXTtcclxuICBlbmVteTogRW5lbXk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb29tQ29tcG9uZW50OiBSb29tQ29tcG9uZW50LCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgZW5lbXlTZXJ2aWNlOiBFbmVteVNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcblxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBkYW1hZ2VEZWFsdCgpe1xyXG5cclxuICB9XHJcblxyXG4gIGRhbWFnZVJlY2VpdmVkKCl7XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuICBjbGVhclJvb20oKXtcclxuICAgICAgaWYgKHRoaXMucm9vbUNvbXBvbmVudC5lbmVteS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgIGFsZXJ0KFwiWU9VIENMRUFSRUQgVEhJUyBST09NIVwiKTtcclxuICAgICAgfSBcclxuICAgICAgdGhpcy5yb29tQ29tcG9uZW50LmNsZWFyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZmFpbFJvb20oKXtcclxuICAgIGlmICh0aGlzLnJvb21Db21wb25lbnQucGxheWVyLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIEZBSUxFRCBUSElTIFJPT00hXCIpXHJcbiAgICB9XHJcbiAgICB0aGlzLnJvb21Db21wb25lbnQuY2xlYXJlZCA9IGZhbHNlO1xyXG4gIH1cclxuICBcclxufSJdfQ==
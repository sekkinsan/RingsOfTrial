"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var enemy_service_1 = require("../../shared/enemy/enemy.service");
var room_service_1 = require("../../shared/room/room.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, playerService, enemyService, roomService, spellService, page) {
        this.route = route;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.roomService = roomService;
        this.spellService = spellService;
        this.page = page;
        this.cleared = Boolean;
        this.player = this.playerService.getPlayer();
        this.player.health = 10;
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
        // this.spell = this.spellService.getSpellById(1);
        console.log(JSON.stringify(this.enemy));
        console.log(JSON.stringify(this.spell));
    }
    RoomComponent.prototype.getEnemyHealth = function () {
        alert(this.enemyService.getEnemyHealth(this.enemy));
    };
    RoomComponent.prototype.useSpell = function () {
        console.log(JSON.stringify(this.player.spells));
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: "room",
            moduleId: module.id,
            templateUrl: "./room.html",
            providers: [player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService],
            styleUrls: ["./room-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService, page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFLaEUsMENBQW1GO0FBQ25GLGdDQUErQjtBQWMvQjtJQVNFLHVCQUFvQixLQUFxQixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsSUFBVTtRQUF6TCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUw3TSxZQUFPLEdBQUcsT0FBTyxDQUFDO1FBTWhCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELGtEQUFrRDtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBekJVLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxDQUFDO1lBQ25FLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBVzJCLHVCQUFjLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQXVCLDBCQUFXLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FUbE0sYUFBYSxDQWtDekI7SUFBRCxvQkFBQztDQUFBLEFBbENELElBa0NDO0FBbENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lbmVteS9lbmVteS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFic29sdXRlTGF5b3V0TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInJvb21cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcm9vbS5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgRW5lbXlTZXJ2aWNlLCBSb29tU2VydmljZSwgU3BlbGxTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vcm9vbS1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudHtcclxuXHJcbiAgc3BlbGxib29rOiBTcGVsbFtdO1xyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIGNsZWFyZWQgPSBCb29sZWFuO1xyXG4gIGVuZW15OiBFbmVteTtcclxuICByb29tOiBSb29tO1xyXG4gIHNwZWxsOiBTcGVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBlbmVteVNlcnZpY2U6IEVuZW15U2VydmljZSwgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSAxMDtcclxuICAgIHRoaXMucm9vbSA9IHRoaXMucm9vbVNlcnZpY2UuZ2V0Um9vbUJ5SWQoTnVtYmVyLnBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKSk7XHJcbiAgICB0aGlzLmVuZW15ID0gdGhpcy5lbmVteVNlcnZpY2UuZ2V0UmFuZG9tRW5lbXkodGhpcy5yb29tKTtcclxuICAgIC8vIHRoaXMuc3BlbGwgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRTcGVsbEJ5SWQoMSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmVuZW15KSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnNwZWxsKSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbmVteUhlYWx0aCgpIHtcclxuICAgYWxlcnQodGhpcy5lbmVteVNlcnZpY2UuZ2V0RW5lbXlIZWFsdGgodGhpcy5lbmVteSkpO1xyXG4gIH1cclxuXHJcbiAgdXNlU3BlbGwoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG59Il19
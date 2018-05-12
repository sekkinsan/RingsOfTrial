"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var enemy_service_1 = require("../../shared/enemy/enemy.service");
var room_service_1 = require("../../shared/room/room.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var combat_service_1 = require("../../shared/combat/combat.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, router, playerService, enemyService, roomService, ringService, spellService, combatService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.roomService = roomService;
        this.ringService = ringService;
        this.spellService = spellService;
        this.combatService = combatService;
        this.page = page;
        this.cleared = false;
        this.combatArray = [];
        this.clearedRooms = [];
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
        this.player.health = 60;
        this.player.mana = 60;
        this.player.clearedRooms = this.player.clearedRooms || [];
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
    }
    RoomComponent.prototype.processCombat = function (spell) {
        var result = this.combatService.combatTurn(this.player, this.enemy, spell, this.combatArray);
        switch (result) {
            case combat_service_1.CombatStatus.PlayerDead:
                this.playerService.deadPlayer();
                this.toRing(this.room.ringId);
                break;
            case combat_service_1.CombatStatus.RoomCleared:
                this.clearRoom();
                this.ringService.setRingCleared(this.player, this.room.ringId);
                break;
        }
    };
    RoomComponent.prototype.getEnemySpell = function () {
        return this.spellService.getRandomSpell(this.enemy);
    };
    RoomComponent.prototype.clearRoom = function () {
        if (this.enemy.health <= 0) {
            alert("YOU CLEARED THIS ROOM!");
            console.log(JSON.stringify(this.room.id));
            this.cleared = true;
            this.roomService.setRoomCleared(this.player, this.room.id);
            this.playerService.updateStats(this.player, this.player.health, this.player.mana);
            this.toRing(this.room.ringId);
            console.log(JSON.stringify(this.player.clearedRooms));
        }
    };
    RoomComponent.prototype.failRoom = function () {
        if (this.player.health <= 0) {
            this.playerService.deadPlayer();
        }
        this.cleared = false;
    };
    RoomComponent.prototype.toRing = function (ringId) {
        this.playerService.getPlayer();
        this.router.navigate(["/ring", this.room.ringId]);
    };
    RoomComponent.prototype.where = function () {
        console.log(JSON.stringify(this.ring));
        console.log(JSON.stringify(this.room));
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: "room",
            moduleId: module.id,
            templateUrl: "./room.html",
            providers: [player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService, combat_service_1.CombatService, ring_service_1.RingService],
            styleUrls: ["./room-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, enemy_service_1.EnemyService,
            room_service_1.RoomService, ring_service_1.RingService, spell_service_1.SpellService, combat_service_1.CombatService,
            page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUscUVBQWlGO0FBS2pGLDBDQUEyRjtBQUMzRixnQ0FBK0I7QUFJL0IsK0RBQTZEO0FBWTdEO0lBWUUsdUJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFDbkksV0FBd0IsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsYUFBNEIsRUFDcEksSUFBVTtRQUZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEksU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5sQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBS2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0s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YSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWU7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUF0RVUsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksRUFBRSwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsRUFBRSwwQkFBVyxDQUFDO1lBQy9GLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBYzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBeUIsOEJBQWEsRUFBd0IsNEJBQVk7WUFDdEgsMEJBQVcsRUFBdUIsMEJBQVcsRUFBd0IsNEJBQVksRUFBeUIsOEJBQWE7WUFDOUgsV0FBSTtPQWRQLGFBQWEsQ0F3RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZW5lbXkvZW5lbXkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbWJhdFNlcnZpY2UsIENvbWJhdFN0YXR1cyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29tYmF0L2NvbWJhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUGFyYW1NYXAsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFJpbmdDb21wb25lbnQgfSBmcm9tIFwiLi4vcmluZy9yaW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yaW5nXCI7XHJcbmltcG9ydCB7IFJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yaW5nL3Jpbmcuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJyb29tXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3Jvb20uaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIEVuZW15U2VydmljZSwgUm9vbVNlcnZpY2UsIFNwZWxsU2VydmljZSwgQ29tYmF0U2VydmljZSwgUmluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9yb29tLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ29tcG9uZW50e1xyXG5cclxuICBcclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICByaW5nOiBSaW5nO1xyXG4gIGVuZW15OiBFbmVteTtcclxuICByb29tOiBSb29tO1xyXG4gIHNwZWxsOiBTcGVsbDtcclxuICBjbGVhcmVkID0gZmFsc2U7XHJcbiAgY29tYmF0QXJyYXkgPSBbXTtcclxuICBjbGVhcmVkUm9vbXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBlbmVteVNlcnZpY2U6IEVuZW15U2VydmljZSwgXHJcbiAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIHByaXZhdGUgcmluZ1NlcnZpY2U6IFJpbmdTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIGNvbWJhdFNlcnZpY2U6IENvbWJhdFNlcnZpY2UsXHJcbiAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucGxheWVyLnNwZWxscyA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdldFBsYXllclNwZWxscygpO1xyXG4gICAgdGhpcy5wbGF5ZXIuaGVhbHRoID0gNjA7XHJcbiAgICB0aGlzLnBsYXllci5tYW5hID0gNjA7XHJcbiAgICB0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMgPSB0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMgfHwgW107XHJcbiAgICB0aGlzLnJpbmcgPSB0aGlzLnJpbmdTZXJ2aWNlLmdldFJpbmdCeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5yb29tID0gdGhpcy5yb29tU2VydmljZS5nZXRSb29tQnlJZChOdW1iZXIucGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykpKTtcclxuICAgIHRoaXMuZW5lbXkgPSB0aGlzLmVuZW15U2VydmljZS5nZXRSYW5kb21FbmVteSh0aGlzLnJvb20pO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbWJhdChzcGVsbDogU3BlbGwpIHtcclxuICAgIGxldCByZXN1bHQ6IENvbWJhdFN0YXR1cyA9IHRoaXMuY29tYmF0U2VydmljZS5jb21iYXRUdXJuKHRoaXMucGxheWVyLCB0aGlzLmVuZW15LCBzcGVsbCwgdGhpcy5jb21iYXRBcnJheSk7XHJcbiAgICBzd2l0Y2gocmVzdWx0KXtcclxuICAgICAgY2FzZSBDb21iYXRTdGF0dXMuUGxheWVyRGVhZDogXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmRlYWRQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLnRvUmluZyh0aGlzLnJvb20ucmluZ0lkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDb21iYXRTdGF0dXMuUm9vbUNsZWFyZWQ6XHJcbiAgICAgICAgdGhpcy5jbGVhclJvb20oKTtcclxuICAgICAgICB0aGlzLnJpbmdTZXJ2aWNlLnNldFJpbmdDbGVhcmVkKHRoaXMucGxheWVyLCB0aGlzLnJvb20ucmluZ0lkKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEVuZW15U3BlbGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UmFuZG9tU3BlbGwodGhpcy5lbmVteSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclJvb20oKXtcclxuICAgIGlmICh0aGlzLmVuZW15LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIENMRUFSRUQgVEhJUyBST09NIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb29tLmlkKSk7XHJcbiAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucm9vbVNlcnZpY2Uuc2V0Um9vbUNsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucm9vbS5pZCk7XHJcbiAgICAgIHRoaXMucGxheWVyU2VydmljZS51cGRhdGVTdGF0cyh0aGlzLnBsYXllciwgdGhpcy5wbGF5ZXIuaGVhbHRoLCB0aGlzLnBsYXllci5tYW5hKTtcclxuICAgICAgdGhpcy50b1JpbmcodGhpcy5yb29tLnJpbmdJZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLmNsZWFyZWRSb29tcykpO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIGZhaWxSb29tKCl7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuaGVhbHRoIDw9IDApIHtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmRlYWRQbGF5ZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9SaW5nKHJpbmdJZCA6IE51bWJlcil7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmluZ1wiLCB0aGlzLnJvb20ucmluZ0lkXSk7XHJcbiAgfVxyXG5cclxuICB3aGVyZSgpe1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yaW5nKSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvb20pKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19
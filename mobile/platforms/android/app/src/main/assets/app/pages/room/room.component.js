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
        this.player.clearedRooms = [];
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
    }
    RoomComponent.prototype.processCombat = function (spell) {
        var result = this.combatService.combatTurn(this.player, this.enemy, spell, this.combatArray);
        switch (result) {
            case combat_service_1.CombatStatus.PlayerDead:
                this.playerService.deadPlayer();
                this.toRing(this.ring.id);
                break;
            case combat_service_1.CombatStatus.RoomCleared:
                this.clearRoom();
                this.ringService.setRingCleared(this.player, this.ring.id);
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
            this.toRing(this.ring.id);
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
        this.router.navigate(["/ring", ringId]);
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
            room_service_1.RoomService, ring_service_1.RingService, spell_service_1.SpellService, combat_service_1.CombatService, page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUscUVBQWlGO0FBS2pGLDBDQUEyRjtBQUMzRixnQ0FBK0I7QUFJL0IsK0RBQTZEO0FBWTdEO0lBWUUsdUJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFDbkksV0FBd0IsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBRDVJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTGhLLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFJaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxD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QztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQWpFVSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxFQUFFLDBCQUFXLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDL0YsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FjMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF5Qiw4QkFBYSxFQUF3Qiw0QkFBWTtZQUN0SCwwQkFBVyxFQUF1QiwwQkFBVyxFQUF3Qiw0QkFBWSxFQUF5Qiw4QkFBYSxFQUFnQixXQUFJO09BYnJKLGFBQWEsQ0FtRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZW5lbXkvZW5lbXkuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IENvbWJhdFNlcnZpY2UsIENvbWJhdFN0YXR1cyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29tYmF0L2NvbWJhdC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUGFyYW1NYXAsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFJpbmdDb21wb25lbnQgfSBmcm9tIFwiLi4vcmluZy9yaW5nLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaW5nIH0gZnJvbSBcIi4uLy4uL21vZGVscy9yaW5nXCI7XHJcbmltcG9ydCB7IFJpbmdTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yaW5nL3Jpbmcuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJyb29tXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3Jvb20uaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIEVuZW15U2VydmljZSwgUm9vbVNlcnZpY2UsIFNwZWxsU2VydmljZSwgQ29tYmF0U2VydmljZSwgUmluZ1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9yb29tLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ29tcG9uZW50e1xyXG5cclxuICBcclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICByaW5nOiBSaW5nO1xyXG4gIGVuZW15OiBFbmVteTtcclxuICByb29tOiBSb29tO1xyXG4gIHNwZWxsOiBTcGVsbDtcclxuICBjbGVhcmVkID0gZmFsc2U7XHJcbiAgY29tYmF0QXJyYXkgPSBbXTtcclxuICBjbGVhcmVkUm9vbXMgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBlbmVteVNlcnZpY2U6IEVuZW15U2VydmljZSwgXHJcbiAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIHByaXZhdGUgcmluZ1NlcnZpY2U6IFJpbmdTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIGNvbWJhdFNlcnZpY2U6IENvbWJhdFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRQbGF5ZXJTcGVsbHMoKTtcclxuICAgIHRoaXMucGxheWVyLmhlYWx0aCA9IDYwO1xyXG4gICAgdGhpcy5wbGF5ZXIubWFuYSA9IDYwO1xyXG4gICAgdGhpcy5wbGF5ZXIuY2xlYXJlZFJvb21zID0gW107XHJcbiAgICB0aGlzLnJpbmcgPSB0aGlzLnJpbmdTZXJ2aWNlLmdldFJpbmdCeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5yb29tID0gdGhpcy5yb29tU2VydmljZS5nZXRSb29tQnlJZChOdW1iZXIucGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykpKTtcclxuICAgIHRoaXMuZW5lbXkgPSB0aGlzLmVuZW15U2VydmljZS5nZXRSYW5kb21FbmVteSh0aGlzLnJvb20pO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbWJhdChzcGVsbDogU3BlbGwpIHtcclxuICAgIGxldCByZXN1bHQ6IENvbWJhdFN0YXR1cyA9IHRoaXMuY29tYmF0U2VydmljZS5jb21iYXRUdXJuKHRoaXMucGxheWVyLCB0aGlzLmVuZW15LCBzcGVsbCwgdGhpcy5jb21iYXRBcnJheSk7XHJcbiAgICBzd2l0Y2gocmVzdWx0KXtcclxuICAgICAgY2FzZSBDb21iYXRTdGF0dXMuUGxheWVyRGVhZDogXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmRlYWRQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLnRvUmluZyh0aGlzLnJpbmcuaWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5Sb29tQ2xlYXJlZDpcclxuICAgICAgICB0aGlzLmNsZWFyUm9vbSgpO1xyXG4gICAgICAgIHRoaXMucmluZ1NlcnZpY2Uuc2V0UmluZ0NsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucmluZy5pZCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RW5lbXlTcGVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21TcGVsbCh0aGlzLmVuZW15KTtcclxuICB9XHJcblxyXG4gIGNsZWFyUm9vbSgpe1xyXG4gICAgaWYgKHRoaXMuZW5lbXkuaGVhbHRoIDw9IDApIHtcclxuICAgICAgYWxlcnQoXCJZT1UgQ0xFQVJFRCBUSElTIFJPT00hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvb20uaWQpKTtcclxuICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yb29tU2VydmljZS5zZXRSb29tQ2xlYXJlZCh0aGlzLnBsYXllciwgdGhpcy5yb29tLmlkKTtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLnVwZGF0ZVN0YXRzKHRoaXMucGxheWVyLCB0aGlzLnBsYXllci5oZWFsdGgsIHRoaXMucGxheWVyLm1hbmEpO1xyXG4gICAgICB0aGlzLnRvUmluZyh0aGlzLnJpbmcuaWQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMpKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBmYWlsUm9vbSgpe1xyXG4gICAgaWYgKHRoaXMucGxheWVyLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIHRoaXMucGxheWVyU2VydmljZS5kZWFkUGxheWVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvUmluZyhyaW5nSWQ6IE51bWJlcil7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmluZ1wiLCByaW5nSWRdKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19
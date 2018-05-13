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
                this.ringService.setRing2Cleared(this.player, this.room.ringId);
                this.ringService.setRing3Cleared(this.player, this.room.ringId);
                this.ringService.setRing4Cleared(this.player, this.room.ringId);
                this.ringService.setGameCleared(this.player, this.room.ringId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUscUVBQWlGO0FBS2pGLDBDQUEyRjtBQUMzRixnQ0FBK0I7QUFJL0IsK0RBQTZEO0FBWTdEO0lBWUUsdUJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFDbkksV0FBd0IsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsYUFBNEIsRUFDcEksSUFBVTtRQUZFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEksU0FBSSxHQUFKLElBQUksQ0FBTTtRQU5sQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBS2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0s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U0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxFQUFFLDBCQUFXLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxFQUFFLDBCQUFXLENBQUM7WUFDL0YsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDakMsQ0FBQzt5Q0FjMkIsdUJBQWMsRUFBa0IsZUFBTSxFQUF5Qiw4QkFBYSxFQUF3Qiw0QkFBWTtZQUN0SCwwQkFBVyxFQUF1QiwwQkFBVyxFQUF3Qiw0QkFBWSxFQUF5Qiw4QkFBYTtZQUM5SCxXQUFJO09BZFAsYUFBYSxDQTRFekI7SUFBRCxvQkFBQztDQUFBLEFBNUVELElBNEVDO0FBNUVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lbmVteS9lbmVteS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29tYmF0U2VydmljZSwgQ29tYmF0U3RhdHVzIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21iYXQvY29tYmF0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgUmluZ0NvbXBvbmVudCB9IGZyb20gXCIuLi9yaW5nL3JpbmcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3JpbmdcIjtcclxuaW1wb3J0IHsgUmluZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3JpbmcvcmluZy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInJvb21cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcm9vbS5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgRW5lbXlTZXJ2aWNlLCBSb29tU2VydmljZSwgU3BlbGxTZXJ2aWNlLCBDb21iYXRTZXJ2aWNlLCBSaW5nU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3Jvb20tY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21Db21wb25lbnR7XHJcblxyXG4gIFxyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIHJpbmc6IFJpbmc7XHJcbiAgZW5lbXk6IEVuZW15O1xyXG4gIHJvb206IFJvb207XHJcbiAgc3BlbGw6IFNwZWxsO1xyXG4gIGNsZWFyZWQgPSBmYWxzZTtcclxuICBjb21iYXRBcnJheSA9IFtdO1xyXG4gIGNsZWFyZWRSb29tcyA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIGVuZW15U2VydmljZTogRW5lbXlTZXJ2aWNlLCBcclxuICBwcml2YXRlIHJvb21TZXJ2aWNlOiBSb29tU2VydmljZSwgcHJpdmF0ZSByaW5nU2VydmljZTogUmluZ1NlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgY29tYmF0U2VydmljZTogQ29tYmF0U2VydmljZSxcclxuICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSA2MDtcclxuICAgIHRoaXMucGxheWVyLm1hbmEgPSA2MDtcclxuICAgIHRoaXMucGxheWVyLmNsZWFyZWRSb29tcyA9IHRoaXMucGxheWVyLmNsZWFyZWRSb29tcyB8fCBbXTtcclxuICAgIHRoaXMucmluZyA9IHRoaXMucmluZ1NlcnZpY2UuZ2V0UmluZ0J5SWQoTnVtYmVyLnBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKSk7XHJcbiAgICB0aGlzLnJvb20gPSB0aGlzLnJvb21TZXJ2aWNlLmdldFJvb21CeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5lbmVteSA9IHRoaXMuZW5lbXlTZXJ2aWNlLmdldFJhbmRvbUVuZW15KHRoaXMucm9vbSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tYmF0KHNwZWxsOiBTcGVsbCkge1xyXG4gICAgbGV0IHJlc3VsdDogQ29tYmF0U3RhdHVzID0gdGhpcy5jb21iYXRTZXJ2aWNlLmNvbWJhdFR1cm4odGhpcy5wbGF5ZXIsIHRoaXMuZW5lbXksIHNwZWxsLCB0aGlzLmNvbWJhdEFycmF5KTtcclxuICAgIHN3aXRjaChyZXN1bHQpe1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5QbGF5ZXJEZWFkOiBcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuZGVhZFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMudG9SaW5nKHRoaXMucm9vbS5yaW5nSWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5Sb29tQ2xlYXJlZDpcclxuICAgICAgICB0aGlzLmNsZWFyUm9vbSgpO1xyXG4gICAgICAgIHRoaXMucmluZ1NlcnZpY2Uuc2V0UmluZ0NsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucm9vbS5yaW5nSWQpO1xyXG4gICAgICAgIHRoaXMucmluZ1NlcnZpY2Uuc2V0UmluZzJDbGVhcmVkKHRoaXMucGxheWVyLCB0aGlzLnJvb20ucmluZ0lkKTtcclxuICAgICAgICB0aGlzLnJpbmdTZXJ2aWNlLnNldFJpbmczQ2xlYXJlZCh0aGlzLnBsYXllciwgdGhpcy5yb29tLnJpbmdJZCk7XHJcbiAgICAgICAgdGhpcy5yaW5nU2VydmljZS5zZXRSaW5nNENsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucm9vbS5yaW5nSWQpO1xyXG4gICAgICAgIHRoaXMucmluZ1NlcnZpY2Uuc2V0R2FtZUNsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucm9vbS5yaW5nSWQpO1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0RW5lbXlTcGVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21TcGVsbCh0aGlzLmVuZW15KTtcclxuICB9XHJcblxyXG4gIGNsZWFyUm9vbSgpe1xyXG4gICAgaWYgKHRoaXMuZW5lbXkuaGVhbHRoIDw9IDApIHtcclxuICAgICAgYWxlcnQoXCJZT1UgQ0xFQVJFRCBUSElTIFJPT00hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvb20uaWQpKTtcclxuICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yb29tU2VydmljZS5zZXRSb29tQ2xlYXJlZCh0aGlzLnBsYXllciwgdGhpcy5yb29tLmlkKTtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLnVwZGF0ZVN0YXRzKHRoaXMucGxheWVyLCB0aGlzLnBsYXllci5oZWFsdGgsIHRoaXMucGxheWVyLm1hbmEpO1xyXG4gICAgICB0aGlzLnRvUmluZyh0aGlzLnJvb20ucmluZ0lkKTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuY2xlYXJlZFJvb21zKSk7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgZmFpbFJvb20oKXtcclxuICAgIGlmICh0aGlzLnBsYXllci5oZWFsdGggPD0gMCkge1xyXG4gICAgICB0aGlzLnBsYXllclNlcnZpY2UuZGVhZFBsYXllcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b1JpbmcocmluZ0lkIDogTnVtYmVyKXtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yaW5nXCIsIHRoaXMucm9vbS5yaW5nSWRdKTtcclxuICB9XHJcblxyXG4gIHdoZXJlKCl7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJpbmcpKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm9vbSkpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgXHJcblxyXG4iXX0=
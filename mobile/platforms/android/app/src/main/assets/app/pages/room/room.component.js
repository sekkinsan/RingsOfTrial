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
        console.log(this.player.clearedRooms);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUscUVBQWlGO0FBS2pGLDBDQUEyRjtBQUMzRixnQ0FBK0I7QUFJL0IsK0RBQTZEO0FBWTdEO0lBWUUsdUJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFDbkksV0FBd0IsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBRDVJLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTGhLLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFJaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxD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LENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFsRVUsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksRUFBRSwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsRUFBRSwwQkFBVyxDQUFDO1lBQy9GLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBYzJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBeUIsOEJBQWEsRUFBd0IsNEJBQVk7WUFDdEgsMEJBQVcsRUFBdUIsMEJBQVcsRUFBd0IsNEJBQVksRUFBeUIsOEJBQWEsRUFBZ0IsV0FBSTtPQWJySixhQUFhLENBb0V6QjtJQUFELG9CQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2VuZW15L2VuZW15LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21iYXRTZXJ2aWNlLCBDb21iYXRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbWJhdC9jb21iYXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBSaW5nQ29tcG9uZW50IH0gZnJvbSBcIi4uL3JpbmcvcmluZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmluZyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmluZ1wiO1xyXG5pbXBvcnQgeyBSaW5nU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcmluZy9yaW5nLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicm9vbVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9yb29tLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBFbmVteVNlcnZpY2UsIFJvb21TZXJ2aWNlLCBTcGVsbFNlcnZpY2UsIENvbWJhdFNlcnZpY2UsIFJpbmdTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vcm9vbS1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudHtcclxuXHJcbiAgXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgcmluZzogUmluZztcclxuICBlbmVteTogRW5lbXk7XHJcbiAgcm9vbTogUm9vbTtcclxuICBzcGVsbDogU3BlbGw7XHJcbiAgY2xlYXJlZCA9IGZhbHNlO1xyXG4gIGNvbWJhdEFycmF5ID0gW107XHJcbiAgY2xlYXJlZFJvb21zID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgZW5lbXlTZXJ2aWNlOiBFbmVteVNlcnZpY2UsIFxyXG4gIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLCBwcml2YXRlIHJpbmdTZXJ2aWNlOiBSaW5nU2VydmljZSwgcHJpdmF0ZSBzcGVsbFNlcnZpY2U6IFNwZWxsU2VydmljZSwgcHJpdmF0ZSBjb21iYXRTZXJ2aWNlOiBDb21iYXRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSA2MDtcclxuICAgIHRoaXMucGxheWVyLm1hbmEgPSA2MDtcclxuICAgIHRoaXMucGxheWVyLmNsZWFyZWRSb29tcyA9IHRoaXMucGxheWVyLmNsZWFyZWRSb29tcyB8fCBbXTtcclxuICAgIHRoaXMucmluZyA9IHRoaXMucmluZ1NlcnZpY2UuZ2V0UmluZ0J5SWQoTnVtYmVyLnBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKSk7XHJcbiAgICB0aGlzLnJvb20gPSB0aGlzLnJvb21TZXJ2aWNlLmdldFJvb21CeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5lbmVteSA9IHRoaXMuZW5lbXlTZXJ2aWNlLmdldFJhbmRvbUVuZW15KHRoaXMucm9vbSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tYmF0KHNwZWxsOiBTcGVsbCkge1xyXG4gICAgbGV0IHJlc3VsdDogQ29tYmF0U3RhdHVzID0gdGhpcy5jb21iYXRTZXJ2aWNlLmNvbWJhdFR1cm4odGhpcy5wbGF5ZXIsIHRoaXMuZW5lbXksIHNwZWxsLCB0aGlzLmNvbWJhdEFycmF5KTtcclxuICAgIHN3aXRjaChyZXN1bHQpe1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5QbGF5ZXJEZWFkOiBcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuZGVhZFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMudG9SaW5nKHRoaXMucmluZy5pZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ29tYmF0U3RhdHVzLlJvb21DbGVhcmVkOlxyXG4gICAgICAgIHRoaXMuY2xlYXJSb29tKCk7XHJcbiAgICAgICAgdGhpcy5yaW5nU2VydmljZS5zZXRSaW5nQ2xlYXJlZCh0aGlzLnBsYXllciwgdGhpcy5yaW5nLmlkKTtcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFbmVteVNwZWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlbGxTZXJ2aWNlLmdldFJhbmRvbVNwZWxsKHRoaXMuZW5lbXkpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJSb29tKCl7XHJcbiAgICBpZiAodGhpcy5lbmVteS5oZWFsdGggPD0gMCkge1xyXG4gICAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUk9PTSFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucm9vbS5pZCkpO1xyXG4gICAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnJvb21TZXJ2aWNlLnNldFJvb21DbGVhcmVkKHRoaXMucGxheWVyLCB0aGlzLnJvb20uaWQpO1xyXG4gICAgICB0aGlzLnBsYXllclNlcnZpY2UudXBkYXRlU3RhdHModGhpcy5wbGF5ZXIsIHRoaXMucGxheWVyLmhlYWx0aCwgdGhpcy5wbGF5ZXIubWFuYSk7XHJcbiAgICAgIHRoaXMudG9SaW5nKHRoaXMucmluZy5pZCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLmNsZWFyZWRSb29tcykpO1xyXG4gICAgfSBcclxuICB9XHJcblxyXG4gIGZhaWxSb29tKCl7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuaGVhbHRoIDw9IDApIHtcclxuICAgICAgdGhpcy5wbGF5ZXJTZXJ2aWNlLmRlYWRQbGF5ZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9SaW5nKHJpbmdJZDogTnVtYmVyKXtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucGxheWVyLmNsZWFyZWRSb29tcyk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvcmluZ1wiLCByaW5nSWRdKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19
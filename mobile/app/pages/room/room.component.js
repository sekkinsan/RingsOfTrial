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
var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, router, playerService, enemyService, roomService, spellService, combatService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.roomService = roomService;
        this.spellService = spellService;
        this.combatService = combatService;
        this.page = page;
        this.cleared = false;
        this.combatArray = [];
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
        this.player.health = 10;
        this.player.mana = 10;
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
        this.attack = this.spellService.getRandomAttack();
        console.log(JSON.stringify(this.enemy));
    }
    // useSpell() {
    //   console.log("you are about to use" + JSON.stringify(this.player.spells[0].name))
    //   if (this.player.mana >= this.player.spells[0].mana) {
    //     alert("CASTING {{ this.player.spells[0].name }} ")
    //     this.enemy.health = this.enemy.health - this.player.spells[0].damage
    //     this.player.mana = this.player.mana - this.player.spells[0].mana
    //     console.log("You dealt " + JSON.stringify(this.player.spells[0].damage) + " to" + this.enemy)
    //     console.log("You used " + JSON.stringify(this.player.spells[0].mana) + " mana.");
    //   } else {
    //     alert( "YOU DONT HAVE ENOUGH MANA!")
    //   }
    RoomComponent.prototype.processCombat = function (spell) {
        var result = this.combatService.combatTurn(this.player, this.enemy, spell, this.combatArray);
        switch (result) {
            case combat_service_1.CombatStatus.PlayerDead:
                this.playerService.deadPlayer();
                break;
            case combat_service_1.CombatStatus.RoomCleared:
                this.clearRoom();
                break;
        }
    };
    RoomComponent.prototype.testPlayerCombat = function () {
        var attack = this.attack;
        if (this.player.mana >= 3) {
            this.combatArray.push("Youre about to use " + attack);
            this.enemy.health = this.enemy.health - 2;
            this.player.mana = this.player.mana - 0;
            this.combatArray.push("You dealt 2 damage");
            this.combatArray.push("You used 0 mana");
            this.testEnemyCombat();
            this.failRoom();
        }
        else {
            this.combatArray.push("You don't have enough mana!");
        }
        console.log(JSON.stringify(this.combatArray));
    };
    RoomComponent.prototype.testEnemyCombat = function () {
        if (this.enemy.health <= 0) {
            return this.clearRoom();
        }
        var enemySpell = this.getEnemySpell();
        this.combatArray.push("ENEMY CAST " + enemySpell.name);
        this.enemy.mana = this.enemy.mana - enemySpell.mana;
        this.player.health = this.player.health - enemySpell.damage;
        this.combatArray.push("you lost " + enemySpell.damage);
        console.log(JSON.stringify(this.combatArray));
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
            this.router.navigate(["/zone"]);
            console.log(JSON.stringify(this.player.clearedRooms));
        }
    };
    RoomComponent.prototype.failRoom = function () {
        if (this.player.health <= 0) {
            this.playerService.deadPlayer();
        }
        this.cleared = false;
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: "room",
            moduleId: module.id,
            templateUrl: "./room.html",
            providers: [player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService, combat_service_1.CombatService],
            styleUrls: ["./room-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, enemy_service_1.EnemyService,
            room_service_1.RoomService, spell_service_1.SpellService, combat_service_1.CombatService, page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFDaEUscUVBQWlGO0FBS2pGLDBDQUEyRjtBQUMzRixnQ0FBK0I7QUFhL0I7SUFVRSx1QkFBb0IsS0FBcUIsRUFBVSxNQUFjLEVBQVUsYUFBNEIsRUFBVSxZQUEwQixFQUNuSSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsYUFBNEIsRUFBVSxJQUFVO1FBRDFHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5SCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFR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QUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQTlGVSxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxFQUFFLDBCQUFXLEVBQUUsNEJBQVksRUFBRSw4QkFBYSxDQUFDO1lBQ2xGLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBWTJCLHVCQUFjLEVBQWtCLGVBQU0sRUFBeUIsOEJBQWEsRUFBd0IsNEJBQVk7WUFDdEgsMEJBQVcsRUFBd0IsNEJBQVksRUFBeUIsOEJBQWEsRUFBZ0IsV0FBSTtPQVhuSCxhQUFhLENBZ0d6QjtJQUFELG9CQUFDO0NBQUEsQUFoR0QsSUFnR0M7QUFoR1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2VuZW15L2VuZW15LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21iYXRTZXJ2aWNlLCBDb21iYXRTdGF0dXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbWJhdC9jb21iYXQuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFBhcmFtTWFwLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJyb29tXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3Jvb20uaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIEVuZW15U2VydmljZSwgUm9vbVNlcnZpY2UsIFNwZWxsU2VydmljZSwgQ29tYmF0U2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3Jvb20tY29tbW9uLmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb21Db21wb25lbnR7XHJcblxyXG4gIGF0dGFjazogc3RyaW5nO1xyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIGVuZW15OiBFbmVteTtcclxuICByb29tOiBSb29tO1xyXG4gIHNwZWxsOiBTcGVsbDtcclxuICBjbGVhcmVkID0gZmFsc2U7XHJcbiAgY29tYmF0QXJyYXkgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBlbmVteVNlcnZpY2U6IEVuZW15U2VydmljZSwgXHJcbiAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgY29tYmF0U2VydmljZTogQ29tYmF0U2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucGxheWVyLnNwZWxscyA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdldFBsYXllclNwZWxscygpO1xyXG4gICAgdGhpcy5wbGF5ZXIuaGVhbHRoID0gMTA7XHJcbiAgICB0aGlzLnBsYXllci5tYW5hID0gMTA7XHJcbiAgICB0aGlzLnJvb20gPSB0aGlzLnJvb21TZXJ2aWNlLmdldFJvb21CeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5lbmVteSA9IHRoaXMuZW5lbXlTZXJ2aWNlLmdldFJhbmRvbUVuZW15KHRoaXMucm9vbSk7XHJcbiAgICB0aGlzLmF0dGFjayA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdldFJhbmRvbUF0dGFjaygpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5lbmVteSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXNlU3BlbGwoKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInlvdSBhcmUgYWJvdXQgdG8gdXNlXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0ubmFtZSkpXHJcbiAgLy8gICBpZiAodGhpcy5wbGF5ZXIubWFuYSA+PSB0aGlzLnBsYXllci5zcGVsbHNbMF0ubWFuYSkge1xyXG4gIC8vICAgICBhbGVydChcIkNBU1RJTkcge3sgdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm5hbWUgfX0gXCIpXHJcbiAgLy8gICAgIHRoaXMuZW5lbXkuaGVhbHRoID0gdGhpcy5lbmVteS5oZWFsdGggLSB0aGlzLnBsYXllci5zcGVsbHNbMF0uZGFtYWdlXHJcbiAgLy8gICAgIHRoaXMucGxheWVyLm1hbmEgPSB0aGlzLnBsYXllci5tYW5hIC0gdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm1hbmFcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJZb3UgZGVhbHQgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0uZGFtYWdlKSArIFwiIHRvXCIgKyB0aGlzLmVuZW15KVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIllvdSB1c2VkIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm1hbmEpICsgXCIgbWFuYS5cIik7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBhbGVydCggXCJZT1UgRE9OVCBIQVZFIEVOT1VHSCBNQU5BIVwiKVxyXG4gIC8vICAgfVxyXG5cclxuICBwcm9jZXNzQ29tYmF0KHNwZWxsOiBTcGVsbCkge1xyXG4gICAgbGV0IHJlc3VsdDogQ29tYmF0U3RhdHVzID0gdGhpcy5jb21iYXRTZXJ2aWNlLmNvbWJhdFR1cm4odGhpcy5wbGF5ZXIsIHRoaXMuZW5lbXksIHNwZWxsLCB0aGlzLmNvbWJhdEFycmF5KTtcclxuICAgIHN3aXRjaChyZXN1bHQpe1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5QbGF5ZXJEZWFkOiBcclxuICAgICAgICB0aGlzLnBsYXllclNlcnZpY2UuZGVhZFBsYXllcigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENvbWJhdFN0YXR1cy5Sb29tQ2xlYXJlZDpcclxuICAgICAgICB0aGlzLmNsZWFyUm9vbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdGVzdFBsYXllckNvbWJhdCgpIHtcclxuICAgIGxldCBhdHRhY2s6c3RyaW5nID0gdGhpcy5hdHRhY2s7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIubWFuYSA+PSAzKSB7XHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChgWW91cmUgYWJvdXQgdG8gdXNlICR7YXR0YWNrfWApXHJcbiAgICAgIHRoaXMuZW5lbXkuaGVhbHRoID0gdGhpcy5lbmVteS5oZWFsdGggLSAyO1xyXG4gICAgICB0aGlzLnBsYXllci5tYW5hID0gdGhpcy5wbGF5ZXIubWFuYSAtIDA7XHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChgWW91IGRlYWx0IDIgZGFtYWdlYClcclxuICAgICAgdGhpcy5jb21iYXRBcnJheS5wdXNoKFwiWW91IHVzZWQgMCBtYW5hXCIpXHJcbiAgICAgIHRoaXMudGVzdEVuZW15Q29tYmF0KCk7XHJcbiAgICAgIHRoaXMuZmFpbFJvb20oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChcIllvdSBkb24ndCBoYXZlIGVub3VnaCBtYW5hIVwiKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jb21iYXRBcnJheSkpO1xyXG4gIH1cclxuXHJcbiAgdGVzdEVuZW15Q29tYmF0KCkge1xyXG4gICAgaWYgKHRoaXMuZW5lbXkuaGVhbHRoIDw9IDApIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xlYXJSb29tKCk7XHJcbiAgICB9IFxyXG4gICAgbGV0IGVuZW15U3BlbGw6U3BlbGwgPSB0aGlzLmdldEVuZW15U3BlbGwoKTtcclxuICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChgRU5FTVkgQ0FTVCAke2VuZW15U3BlbGwubmFtZX1gKTtcclxuICAgIHRoaXMuZW5lbXkubWFuYSA9IHRoaXMuZW5lbXkubWFuYSAtIGVuZW15U3BlbGwubWFuYTtcclxuICAgIHRoaXMucGxheWVyLmhlYWx0aCA9IHRoaXMucGxheWVyLmhlYWx0aCAtIGVuZW15U3BlbGwuZGFtYWdlO1xyXG4gICAgdGhpcy5jb21iYXRBcnJheS5wdXNoKGB5b3UgbG9zdCAke2VuZW15U3BlbGwuZGFtYWdlfWApO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jb21iYXRBcnJheSkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW5lbXlTcGVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21TcGVsbCh0aGlzLmVuZW15KTtcclxuICB9XHJcblxyXG4gIGNsZWFyUm9vbSgpe1xyXG4gICAgaWYgKHRoaXMuZW5lbXkuaGVhbHRoIDw9IDApIHtcclxuICAgICAgYWxlcnQoXCJZT1UgQ0xFQVJFRCBUSElTIFJPT00hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnJvb20uaWQpKTtcclxuICAgICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yb29tU2VydmljZS5zZXRSb29tQ2xlYXJlZCh0aGlzLnBsYXllciwgdGhpcy5yb29tLmlkKTtcclxuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3pvbmVcIl0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5jbGVhcmVkUm9vbXMpKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBmYWlsUm9vbSgpe1xyXG4gICAgaWYgKHRoaXMucGxheWVyLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIHRoaXMucGxheWVyU2VydmljZS5kZWFkUGxheWVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsZWFyZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19
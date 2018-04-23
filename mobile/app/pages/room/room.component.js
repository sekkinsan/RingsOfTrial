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
    function RoomComponent(route, router, playerService, enemyService, roomService, spellService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.roomService = roomService;
        this.spellService = spellService;
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
            providers: [player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService],
            styleUrls: ["./room-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, enemy_service_1.EnemyService,
            room_service_1.RoomService, spell_service_1.SpellService, page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFNaEUsMENBQTJGO0FBQzNGLGdDQUErQjtBQWEvQjtJQVVFLHVCQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxhQUE0QixFQUFVLFlBQTBCLEVBQ25JLFdBQXdCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBRHBFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKeEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUlmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFD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QVg3RSxhQUFhLENBb0Z6QjtJQUFELG9CQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbmVteVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2VuZW15L2VuZW15LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBDb21iYXRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jb21iYXQvY29tYmF0LnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicm9vbVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9yb29tLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBFbmVteVNlcnZpY2UsIFJvb21TZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9yb29tLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ29tcG9uZW50e1xyXG5cclxuICBhdHRhY2s6IHN0cmluZztcclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBlbmVteTogRW5lbXk7XHJcbiAgcm9vbTogUm9vbTtcclxuICBzcGVsbDogU3BlbGw7XHJcbiAgY2xlYXJlZCA9IGZhbHNlO1xyXG4gIGNvbWJhdEFycmF5ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgZW5lbXlTZXJ2aWNlOiBFbmVteVNlcnZpY2UsIFxyXG4gIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSAxMDtcclxuICAgIHRoaXMucGxheWVyLm1hbmEgPSAxMDtcclxuICAgIHRoaXMucm9vbSA9IHRoaXMucm9vbVNlcnZpY2UuZ2V0Um9vbUJ5SWQoTnVtYmVyLnBhcnNlSW50KHRoaXMucm91dGUuc25hcHNob3QucGFyYW1NYXAuZ2V0KCdpZCcpKSk7XHJcbiAgICB0aGlzLmVuZW15ID0gdGhpcy5lbmVteVNlcnZpY2UuZ2V0UmFuZG9tRW5lbXkodGhpcy5yb29tKTtcclxuICAgIHRoaXMuYXR0YWNrID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UmFuZG9tQXR0YWNrKCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmVuZW15KSk7XHJcbiAgfVxyXG5cclxuICAvLyB1c2VTcGVsbCgpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwieW91IGFyZSBhYm91dCB0byB1c2VcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxsc1swXS5uYW1lKSlcclxuICAvLyAgIGlmICh0aGlzLnBsYXllci5tYW5hID49IHRoaXMucGxheWVyLnNwZWxsc1swXS5tYW5hKSB7XHJcbiAgLy8gICAgIGFsZXJ0KFwiQ0FTVElORyB7eyB0aGlzLnBsYXllci5zcGVsbHNbMF0ubmFtZSB9fSBcIilcclxuICAvLyAgICAgdGhpcy5lbmVteS5oZWFsdGggPSB0aGlzLmVuZW15LmhlYWx0aCAtIHRoaXMucGxheWVyLnNwZWxsc1swXS5kYW1hZ2VcclxuICAvLyAgICAgdGhpcy5wbGF5ZXIubWFuYSA9IHRoaXMucGxheWVyLm1hbmEgLSB0aGlzLnBsYXllci5zcGVsbHNbMF0ubWFuYVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIllvdSBkZWFsdCBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxsc1swXS5kYW1hZ2UpICsgXCIgdG9cIiArIHRoaXMuZW5lbXkpXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiWW91IHVzZWQgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0ubWFuYSkgKyBcIiBtYW5hLlwiKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGFsZXJ0KCBcIllPVSBET05UIEhBVkUgRU5PVUdIIE1BTkEhXCIpXHJcbiAgLy8gICB9XHJcblxyXG4gIHRlc3RQbGF5ZXJDb21iYXQoKSB7XHJcbiAgICBsZXQgYXR0YWNrOnN0cmluZyA9IHRoaXMuYXR0YWNrO1xyXG4gICAgaWYgKHRoaXMucGxheWVyLm1hbmEgPj0gMykge1xyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goYFlvdXJlIGFib3V0IHRvIHVzZSAke2F0dGFja31gKVxyXG4gICAgICB0aGlzLmVuZW15LmhlYWx0aCA9IHRoaXMuZW5lbXkuaGVhbHRoIC0gMjtcclxuICAgICAgdGhpcy5wbGF5ZXIubWFuYSA9IHRoaXMucGxheWVyLm1hbmEgLSAwO1xyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goYFlvdSBkZWFsdCAyIGRhbWFnZWApXHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChcIllvdSB1c2VkIDAgbWFuYVwiKVxyXG4gICAgICB0aGlzLnRlc3RFbmVteUNvbWJhdCgpO1xyXG4gICAgICB0aGlzLmZhaWxSb29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goXCJZb3UgZG9uJ3QgaGF2ZSBlbm91Z2ggbWFuYSFcIilcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY29tYmF0QXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHRlc3RFbmVteUNvbWJhdCgpIHtcclxuICAgIGlmICh0aGlzLmVuZW15LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyUm9vbSgpO1xyXG4gICAgfSBcclxuICAgIGxldCBlbmVteVNwZWxsOlNwZWxsID0gdGhpcy5nZXRFbmVteVNwZWxsKCk7XHJcbiAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goYEVORU1ZIENBU1QgJHtlbmVteVNwZWxsLm5hbWV9YCk7XHJcbiAgICB0aGlzLmVuZW15Lm1hbmEgPSB0aGlzLmVuZW15Lm1hbmEgLSBlbmVteVNwZWxsLm1hbmE7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSB0aGlzLnBsYXllci5oZWFsdGggLSBlbmVteVNwZWxsLmRhbWFnZTtcclxuICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChgeW91IGxvc3QgJHtlbmVteVNwZWxsLmRhbWFnZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY29tYmF0QXJyYXkpKTtcclxuICB9XHJcblxyXG4gIGdldEVuZW15U3BlbGwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UmFuZG9tU3BlbGwodGhpcy5lbmVteSk7XHJcbiAgfVxyXG5cclxuICBjbGVhclJvb20oKXtcclxuICAgIGlmICh0aGlzLmVuZW15LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIGFsZXJ0KFwiWU9VIENMRUFSRUQgVEhJUyBST09NIVwiKTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5yb29tLmlkKSk7XHJcbiAgICAgIHRoaXMuY2xlYXJlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMucm9vbVNlcnZpY2Uuc2V0Um9vbUNsZWFyZWQodGhpcy5wbGF5ZXIsIHRoaXMucm9vbS5pZCk7XHJcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi96b25lXCJdKTtcclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuY2xlYXJlZFJvb21zKSk7XHJcbiAgICB9IFxyXG4gIH1cclxuXHJcbiAgZmFpbFJvb20oKXtcclxuICAgIGlmICh0aGlzLnBsYXllci5oZWFsdGggPD0gMCkge1xyXG4gICAgICB0aGlzLnBsYXllclNlcnZpY2UuZGVhZFBsYXllcigpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jbGVhcmVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiJdfQ==
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
        this.cleared = false;
        this.combatArray = [];
        this.combatText = "";
        this.player = this.playerService.getPlayer();
        this.player.health = 10;
        this.player.mana = 10;
        // this.player.spells = [];
        // this.player.spells[0].name = "fireball";
        // this.player.spells[0].damage = 2;
        // this.player.spells[0].mana = 2;
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
        // this.spell = this.spellService.getSpellById(1);
        console.log(JSON.stringify(this.enemy));
        // console.log(JSON.stringify(this.player.spells[0].name));
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
        if (this.player.mana >= 3) {
            this.combatArray.push("You're about to use SPELL NAME");
            this.enemy.health = this.enemy.health - 3;
            this.player.mana = this.player.mana - 3;
            this.combatArray.push("You dealt 3 damage");
            this.combatArray.push("You used 3 mana");
            this.testEnemyCombat();
        }
        else {
            this.combatArray.push("You don't have enough mana!");
        }
        console.log(JSON.stringify(this.combatArray));
        // this.combatInterval = setInterval(this.combatArray), 5000);
        // this.combatArray = [];
        // console.log(JSON.stringify(this.combatArray));
    };
    RoomComponent.prototype.testEnemyCombat = function () {
        if (this.enemy.health <= 0) {
            return this.enemyDead();
        }
        var enemySpell = this.getEnemySpell();
        this.combatArray.push("ENEMY CAST " + enemySpell.name);
        this.enemy.mana = this.enemy.mana - enemySpell.mana;
        this.player.health = this.player.health - enemySpell.damage;
        this.combatArray.push("you lost " + enemySpell.damage);
    };
    RoomComponent.prototype.enemyDead = function () {
        this.enemy = this.enemyService.getRandomEnemy(this.room);
        this.cleared = true;
    };
    RoomComponent.prototype.getEnemySpell = function () {
        return this.spellService.getRandomSpell(this.enemy);
    };
    RoomComponent.prototype.displayCombatText = function () {
        for (var i = 0; i < this.combatArray.length; i++) {
        }
        setInterval(this.combatArray, 5000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFLaEUsMENBQW1GO0FBQ25GLGdDQUErQjtBQWMvQjtJQVdFLHVCQUFvQixLQUFxQixFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxXQUF3QixFQUFVLFlBQTBCLEVBQVUsSUFBVTtRQUF6TCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUw3TSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFHZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QiwyQkFBMkI7UUFDM0IsMkNBQTJDO1FBQzNDLG9DQUFvQztRQUNwQyxrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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RUFBQyxDQUFDO1FBRTNELENBQUM7UUFDRCxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBaEZVLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxDQUFDO1lBQ25FLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2pDLENBQUM7eUNBYTJCLHVCQUFjLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQXVCLDBCQUFXLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FYbE0sYUFBYSxDQWtGdkI7SUFBRCxvQkFBQztDQUFBLEFBbEZILElBa0ZHO0FBbEZVLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lbmVteS9lbmVteS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCAqIGFzIGFic29sdXRlTGF5b3V0TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvYWJzb2x1dGUtbGF5b3V0XCI7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInJvb21cIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vcm9vbS5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgRW5lbXlTZXJ2aWNlLCBSb29tU2VydmljZSwgU3BlbGxTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vcm9vbS1jb21tb24uY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbUNvbXBvbmVudHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgZW5lbXk6IEVuZW15O1xyXG4gIHJvb206IFJvb207XHJcbiAgc3BlbGw6IFNwZWxsO1xyXG4gIGNsZWFyZWQgPSBmYWxzZTtcclxuICBjb21iYXRBcnJheSA9IFtdO1xyXG4gIGNvbWJhdEludGVydmFsOiBudW1iZXI7XHJcbiAgY29tYmF0VGV4dCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgZW5lbXlTZXJ2aWNlOiBFbmVteVNlcnZpY2UsIHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuaGVhbHRoID0gMTA7XHJcbiAgICB0aGlzLnBsYXllci5tYW5hID0gMTA7XHJcbiAgICAvLyB0aGlzLnBsYXllci5zcGVsbHMgPSBbXTtcclxuICAgIC8vIHRoaXMucGxheWVyLnNwZWxsc1swXS5uYW1lID0gXCJmaXJlYmFsbFwiO1xyXG4gICAgLy8gdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLmRhbWFnZSA9IDI7XHJcbiAgICAvLyB0aGlzLnBsYXllci5zcGVsbHNbMF0ubWFuYSA9IDI7XHJcbiAgICB0aGlzLnJvb20gPSB0aGlzLnJvb21TZXJ2aWNlLmdldFJvb21CeUlkKE51bWJlci5wYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSkpO1xyXG4gICAgdGhpcy5lbmVteSA9IHRoaXMuZW5lbXlTZXJ2aWNlLmdldFJhbmRvbUVuZW15KHRoaXMucm9vbSk7XHJcbiAgICAvLyB0aGlzLnNwZWxsID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0U3BlbGxCeUlkKDEpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5lbmVteSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm5hbWUpKTtcclxuICB9XHJcblxyXG4gIC8vIHVzZVNwZWxsKCkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJ5b3UgYXJlIGFib3V0IHRvIHVzZVwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm5hbWUpKVxyXG4gIC8vICAgaWYgKHRoaXMucGxheWVyLm1hbmEgPj0gdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm1hbmEpIHtcclxuICAvLyAgICAgYWxlcnQoXCJDQVNUSU5HIHt7IHRoaXMucGxheWVyLnNwZWxsc1swXS5uYW1lIH19IFwiKVxyXG4gIC8vICAgICB0aGlzLmVuZW15LmhlYWx0aCA9IHRoaXMuZW5lbXkuaGVhbHRoIC0gdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLmRhbWFnZVxyXG4gIC8vICAgICB0aGlzLnBsYXllci5tYW5hID0gdGhpcy5wbGF5ZXIubWFuYSAtIHRoaXMucGxheWVyLnNwZWxsc1swXS5tYW5hXHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiWW91IGRlYWx0IFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdLmRhbWFnZSkgKyBcIiB0b1wiICsgdGhpcy5lbmVteSlcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJZb3UgdXNlZCBcIiArIEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxsc1swXS5tYW5hKSArIFwiIG1hbmEuXCIpO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgYWxlcnQoIFwiWU9VIERPTlQgSEFWRSBFTk9VR0ggTUFOQSFcIilcclxuICAvLyAgIH1cclxuXHJcbiAgdGVzdFBsYXllckNvbWJhdCgpIHtcclxuICAgIGlmICh0aGlzLnBsYXllci5tYW5hID49IDMpIHtcclxuICAgICAgdGhpcy5jb21iYXRBcnJheS5wdXNoKFwiWW91J3JlIGFib3V0IHRvIHVzZSBTUEVMTCBOQU1FXCIpXHJcbiAgICAgIHRoaXMuZW5lbXkuaGVhbHRoID0gdGhpcy5lbmVteS5oZWFsdGggLSAzO1xyXG4gICAgICB0aGlzLnBsYXllci5tYW5hID0gdGhpcy5wbGF5ZXIubWFuYSAtIDM7XHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChcIllvdSBkZWFsdCAzIGRhbWFnZVwiKVxyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goXCJZb3UgdXNlZCAzIG1hbmFcIilcclxuICAgICAgdGhpcy50ZXN0RW5lbXlDb21iYXQoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChcIllvdSBkb24ndCBoYXZlIGVub3VnaCBtYW5hIVwiKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5jb21iYXRBcnJheSkpO1xyXG4gICAgLy8gdGhpcy5jb21iYXRJbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMuY29tYmF0QXJyYXkpLCA1MDAwKTtcclxuICAgIC8vIHRoaXMuY29tYmF0QXJyYXkgPSBbXTtcclxuICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY29tYmF0QXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHRlc3RFbmVteUNvbWJhdCgpIHtcclxuICAgIGlmICh0aGlzLmVuZW15LmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmVuZW15RGVhZCgpO1xyXG4gICAgfSBcclxuICAgIGxldCBlbmVteVNwZWxsOlNwZWxsID0gdGhpcy5nZXRFbmVteVNwZWxsKCk7XHJcbiAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goYEVORU1ZIENBU1QgJHtlbmVteVNwZWxsLm5hbWV9YCk7XHJcbiAgICB0aGlzLmVuZW15Lm1hbmEgPSB0aGlzLmVuZW15Lm1hbmEgLSBlbmVteVNwZWxsLm1hbmE7XHJcbiAgICB0aGlzLnBsYXllci5oZWFsdGggPSB0aGlzLnBsYXllci5oZWFsdGggLSBlbmVteVNwZWxsLmRhbWFnZTtcclxuICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChgeW91IGxvc3QgJHtlbmVteVNwZWxsLmRhbWFnZX1gKTtcclxuICB9XHJcblxyXG4gIGVuZW15RGVhZCgpe1xyXG4gICAgdGhpcy5lbmVteSA9IHRoaXMuZW5lbXlTZXJ2aWNlLmdldFJhbmRvbUVuZW15KHRoaXMucm9vbSk7XHJcbiAgICB0aGlzLmNsZWFyZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RW5lbXlTcGVsbCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21TcGVsbCh0aGlzLmVuZW15KTtcclxuICB9XHJcblxyXG4gIGRpc3BsYXlDb21iYXRUZXh0KCkge1xyXG4gICAgZm9yIChsZXQgaSA6IE51bWJlciA9IDA7IGkgPCB0aGlzLmNvbWJhdEFycmF5Lmxlbmd0aDsgaSsrKXtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRJbnRlcnZhbCh0aGlzLmNvbWJhdEFycmF5LCA1MDAwKTtcclxuICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiJdfQ==
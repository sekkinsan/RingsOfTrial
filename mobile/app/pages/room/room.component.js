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
        this.combatText = "";
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
        this.player.health = 10;
        this.player.mana = 10;
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
        this.attack = this.spellService.getRandomAttack();
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
            this.player.mana = this.player.mana - 0;
            this.combatArray.push("You dealt 3 damage");
            this.combatArray.push("You used 0 mana");
            this.testEnemyCombat();
            this.failRoom();
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
    RoomComponent.prototype.displayCombatText = function () {
        for (var i = 0; i < this.combatArray.length; i++) {
        }
        setInterval(this.combatArray, 5000);
    };
    RoomComponent.prototype.clearRoom = function () {
        if (this.enemy.health <= 0) {
            alert("YOU CLEARED THIS ROOM!");
        }
        this.cleared = true;
    };
    RoomComponent.prototype.failRoom = function () {
        if (this.player.health <= 0) {
            alert("YOU FAILED THIS ROOM!");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb29tLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxxRUFBbUU7QUFDbkUsa0VBQWdFO0FBQ2hFLCtEQUE2RDtBQUM3RCxrRUFBZ0U7QUFLaEUsMENBQTJGO0FBQzNGLGdDQUErQjtBQWMvQjtJQVlFLHVCQUFvQixLQUFxQixFQUFVLE1BQWMsRUFBVSxhQUE0QixFQUFVLFlBQTBCLEVBQ25JLFdBQXdCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBRHBFLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkksZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFOeEYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBSWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FB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ZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXlTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9lbmVteS9lbmVteS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFJvb21TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9yb29tL3Jvb20uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBQYXJhbU1hcCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYWJzb2x1dGVMYXlvdXRNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwicm9vbVwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9yb29tLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBFbmVteVNlcnZpY2UsIFJvb21TZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9yb29tLWNvbW1vbi5jc3NcIl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tQ29tcG9uZW50e1xyXG5cclxuICBhdHRhY2s6IHN0cmluZztcclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBlbmVteTogRW5lbXk7XHJcbiAgcm9vbTogUm9vbTtcclxuICBzcGVsbDogU3BlbGw7XHJcbiAgY2xlYXJlZCA9IGZhbHNlO1xyXG4gIGNvbWJhdEFycmF5ID0gW107XHJcbiAgY29tYmF0SW50ZXJ2YWw6IG51bWJlcjtcclxuICBjb21iYXRUZXh0ID0gXCJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBlbmVteVNlcnZpY2U6IEVuZW15U2VydmljZSwgXHJcbiAgcHJpdmF0ZSByb29tU2VydmljZTogUm9vbVNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRQbGF5ZXJTcGVsbHMoKTtcclxuICAgIHRoaXMucGxheWVyLmhlYWx0aCA9IDEwO1xyXG4gICAgdGhpcy5wbGF5ZXIubWFuYSA9IDEwO1xyXG4gICAgdGhpcy5yb29tID0gdGhpcy5yb29tU2VydmljZS5nZXRSb29tQnlJZChOdW1iZXIucGFyc2VJbnQodGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJykpKTtcclxuICAgIHRoaXMuZW5lbXkgPSB0aGlzLmVuZW15U2VydmljZS5nZXRSYW5kb21FbmVteSh0aGlzLnJvb20pO1xyXG4gICAgdGhpcy5hdHRhY2sgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21BdHRhY2soKTtcclxuICAgIC8vIHRoaXMuc3BlbGwgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRTcGVsbEJ5SWQoMSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmVuZW15KSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0ubmFtZSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gdXNlU3BlbGwoKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInlvdSBhcmUgYWJvdXQgdG8gdXNlXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0ubmFtZSkpXHJcbiAgLy8gICBpZiAodGhpcy5wbGF5ZXIubWFuYSA+PSB0aGlzLnBsYXllci5zcGVsbHNbMF0ubWFuYSkge1xyXG4gIC8vICAgICBhbGVydChcIkNBU1RJTkcge3sgdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm5hbWUgfX0gXCIpXHJcbiAgLy8gICAgIHRoaXMuZW5lbXkuaGVhbHRoID0gdGhpcy5lbmVteS5oZWFsdGggLSB0aGlzLnBsYXllci5zcGVsbHNbMF0uZGFtYWdlXHJcbiAgLy8gICAgIHRoaXMucGxheWVyLm1hbmEgPSB0aGlzLnBsYXllci5tYW5hIC0gdGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm1hbmFcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJZb3UgZGVhbHQgXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMF0uZGFtYWdlKSArIFwiIHRvXCIgKyB0aGlzLmVuZW15KVxyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIllvdSB1c2VkIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdLm1hbmEpICsgXCIgbWFuYS5cIik7XHJcbiAgLy8gICB9IGVsc2Uge1xyXG4gIC8vICAgICBhbGVydCggXCJZT1UgRE9OVCBIQVZFIEVOT1VHSCBNQU5BIVwiKVxyXG4gIC8vICAgfVxyXG5cclxuICB0ZXN0UGxheWVyQ29tYmF0KCkge1xyXG4gICAgaWYgKHRoaXMucGxheWVyLm1hbmEgPj0gMykge1xyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goXCJZb3UncmUgYWJvdXQgdG8gdXNlIFNQRUxMIE5BTUVcIilcclxuICAgICAgdGhpcy5lbmVteS5oZWFsdGggPSB0aGlzLmVuZW15LmhlYWx0aCAtIDM7XHJcbiAgICAgIHRoaXMucGxheWVyLm1hbmEgPSB0aGlzLnBsYXllci5tYW5hIC0gMDtcclxuICAgICAgdGhpcy5jb21iYXRBcnJheS5wdXNoKFwiWW91IGRlYWx0IDMgZGFtYWdlXCIpXHJcbiAgICAgIHRoaXMuY29tYmF0QXJyYXkucHVzaChcIllvdSB1c2VkIDAgbWFuYVwiKVxyXG4gICAgICB0aGlzLnRlc3RFbmVteUNvbWJhdCgpO1xyXG4gICAgICB0aGlzLmZhaWxSb29tKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goXCJZb3UgZG9uJ3QgaGF2ZSBlbm91Z2ggbWFuYSFcIilcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuY29tYmF0QXJyYXkpKTtcclxuICAgIC8vIHRoaXMuY29tYmF0SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLmNvbWJhdEFycmF5KSwgNTAwMCk7XHJcbiAgICAvLyB0aGlzLmNvbWJhdEFycmF5ID0gW107XHJcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmNvbWJhdEFycmF5KSk7XHJcbiAgfVxyXG5cclxuICB0ZXN0RW5lbXlDb21iYXQoKSB7XHJcbiAgICBpZiAodGhpcy5lbmVteS5oZWFsdGggPD0gMCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGVhclJvb20oKTtcclxuICAgIH0gXHJcbiAgICBsZXQgZW5lbXlTcGVsbDpTcGVsbCA9IHRoaXMuZ2V0RW5lbXlTcGVsbCgpO1xyXG4gICAgdGhpcy5jb21iYXRBcnJheS5wdXNoKGBFTkVNWSBDQVNUICR7ZW5lbXlTcGVsbC5uYW1lfWApO1xyXG4gICAgdGhpcy5lbmVteS5tYW5hID0gdGhpcy5lbmVteS5tYW5hIC0gZW5lbXlTcGVsbC5tYW5hO1xyXG4gICAgdGhpcy5wbGF5ZXIuaGVhbHRoID0gdGhpcy5wbGF5ZXIuaGVhbHRoIC0gZW5lbXlTcGVsbC5kYW1hZ2U7XHJcbiAgICB0aGlzLmNvbWJhdEFycmF5LnB1c2goYHlvdSBsb3N0ICR7ZW5lbXlTcGVsbC5kYW1hZ2V9YCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmNvbWJhdEFycmF5KSk7XHJcbiAgfVxyXG5cclxuICBnZXRFbmVteVNwZWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3BlbGxTZXJ2aWNlLmdldFJhbmRvbVNwZWxsKHRoaXMuZW5lbXkpO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheUNvbWJhdFRleHQoKSB7XHJcbiAgICBmb3IgKGxldCBpIDogTnVtYmVyID0gMDsgaSA8IHRoaXMuY29tYmF0QXJyYXkubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgIH1cclxuICAgIHNldEludGVydmFsKHRoaXMuY29tYmF0QXJyYXksIDUwMDApO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJSb29tKCl7XHJcbiAgICBpZiAodGhpcy5lbmVteS5oZWFsdGggPD0gMCkge1xyXG4gICAgICBhbGVydChcIllPVSBDTEVBUkVEIFRISVMgUk9PTSFcIik7XHJcbiAgICB9IFxyXG4gICAgdGhpcy5jbGVhcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGZhaWxSb29tKCl7XHJcbiAgICBpZiAodGhpcy5wbGF5ZXIuaGVhbHRoIDw9IDApIHtcclxuICAgICAgYWxlcnQoXCJZT1UgRkFJTEVEIFRISVMgUk9PTSFcIilcclxuICAgIH1cclxuICAgIHRoaXMuY2xlYXJlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuIl19
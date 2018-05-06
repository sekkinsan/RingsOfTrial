"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var saver_1 = require("../../saver");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var spell_service_1 = require("../spell/spell.service");
var CombatStatus;
(function (CombatStatus) {
    CombatStatus[CombatStatus["RoomCleared"] = 0] = "RoomCleared";
    CombatStatus[CombatStatus["PlayerDead"] = 1] = "PlayerDead";
    CombatStatus[CombatStatus["Unresolved"] = 2] = "Unresolved";
})(CombatStatus = exports.CombatStatus || (exports.CombatStatus = {}));
var CombatService = /** @class */ (function () {
    function CombatService(http, saveManager, spellService) {
        this.http = http;
        this.saveManager = saveManager;
        this.spellService = spellService;
    }
    //combat turn
    CombatService.prototype.combatTurn = function (player, enemy, spell, combatArray) {
        this.processPlayerAttack(player, enemy, spell, combatArray);
        if (this.isRoomCleared(enemy)) {
            return CombatStatus.RoomCleared;
        }
        this.processEnemyAttack(player, enemy, combatArray);
        if (this.isPlayerDead(player)) {
            return CombatStatus.PlayerDead;
        }
        return CombatStatus.Unresolved;
    };
    //for attack since attack isn't a spell..
    CombatService.prototype.processPlayerAttack = function (player, enemy, spell, combatArray) {
        combatArray.push("You are about to use " + spell.name);
        enemy.health = enemy.health - spell.damage;
        player.mana = player.mana - spell.mana;
        combatArray.push("You dealt " + spell.damage + " damage using " + spell.mana + " mana");
        console.log(JSON.stringify(combatArray.join('\n')));
    };
    CombatService.prototype.processEnemyAttack = function (player, enemy, combatArray) {
        var enemySpell = this.spellService.getRandomSpell(enemy);
        combatArray.push("ENEMY CAST " + enemySpell.name);
        enemy.mana = enemy.mana - enemySpell.mana;
        player.health = player.health - enemySpell.damage;
        combatArray.push("You lost " + enemySpell.damage + " hp");
        console.log(JSON.stringify(combatArray));
    };
    CombatService.prototype.isRoomCleared = function (enemy) {
        return enemy.health <= 0;
    };
    CombatService.prototype.isPlayerDead = function (player) {
        return player.health <= 0;
    };
    CombatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager, spell_service_1.SpellService])
    ], CombatService);
    return CombatService;
}());
exports.CombatService = CombatService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFHcEUscUNBQTBDO0FBTzFDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHdEQUFzRDtBQUd0RCxJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLDJEQUFjLENBQUE7SUFDZCwyREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUdEO0lBR0UsdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLFlBQTBCO1FBQWhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRXBHLENBQUM7SUFFRCxhQUFhO0lBQ2Isa0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsMkNBQW1CLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQ25GLFdBQVcsQ0FBQyxJQUFJLENBQUMsMEJBQXdCLEtBQUssQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWEsS0FBSyxDQUFDLE1BQU0sc0JBQWlCLEtBQUssQ0FBQyxJQUFJLFVBQU8sQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxLQUFZLEVBQUUsV0FBcUI7UUFDcEUsSUFBSSxVQUFVLEdBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBYyxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEQsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFZLFVBQVUsQ0FBQyxNQUFNLFFBQUssQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxxQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBL0NVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJLEVBQXVCLG1CQUFXLEVBQXdCLDRCQUFZO09BSHpGLGFBQWEsQ0FpRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1pvbmVcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFJvb21Db21wb25lbnQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvcm9vbS9yb29tLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBlbnVtIENvbWJhdFN0YXR1c3tcclxuICAgIFJvb21DbGVhcmVkID0gMCxcclxuICAgIFBsYXllckRlYWQgPSAxLFxyXG4gICAgVW5yZXNvbHZlZCA9IDJcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tYmF0U2VydmljZSB7XHJcblxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2F2ZU1hbmFnZXI6IFNhdmVNYW5hZ2VyLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy9jb21iYXQgdHVyblxyXG4gIGNvbWJhdFR1cm4ocGxheWVyOiBQbGF5ZXIsIGVuZW15OiBFbmVteSwgc3BlbGw6IFNwZWxsLCBjb21iYXRBcnJheTogc3RyaW5nW10pOiBDb21iYXRTdGF0dXN7XHJcbiAgICB0aGlzLnByb2Nlc3NQbGF5ZXJBdHRhY2socGxheWVyLCBlbmVteSwgc3BlbGwsIGNvbWJhdEFycmF5KTtcclxuICAgIGlmICh0aGlzLmlzUm9vbUNsZWFyZWQoZW5lbXkpKSB7XHJcbiAgICAgIHJldHVybiBDb21iYXRTdGF0dXMuUm9vbUNsZWFyZWQ7XHJcbiAgICB9IFxyXG5cclxuICAgIHRoaXMucHJvY2Vzc0VuZW15QXR0YWNrKHBsYXllciwgZW5lbXksIGNvbWJhdEFycmF5KTtcclxuICAgIGlmICh0aGlzLmlzUGxheWVyRGVhZChwbGF5ZXIpKSB7XHJcbiAgICAgIHJldHVybiBDb21iYXRTdGF0dXMuUGxheWVyRGVhZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gQ29tYmF0U3RhdHVzLlVucmVzb2x2ZWQ7XHJcbiAgfVxyXG5cclxuICAvL2ZvciBhdHRhY2sgc2luY2UgYXR0YWNrIGlzbid0IGEgc3BlbGwuLlxyXG4gIHByb2Nlc3NQbGF5ZXJBdHRhY2socGxheWVyOiBQbGF5ZXIsIGVuZW15OiBFbmVteSwgc3BlbGw6IFNwZWxsLCBjb21iYXRBcnJheTogc3RyaW5nW10pe1xyXG4gICAgY29tYmF0QXJyYXkucHVzaChgWW91IGFyZSBhYm91dCB0byB1c2UgJHtzcGVsbC5uYW1lfWApO1xyXG4gICAgZW5lbXkuaGVhbHRoID0gZW5lbXkuaGVhbHRoIC0gc3BlbGwuZGFtYWdlO1xyXG4gICAgcGxheWVyLm1hbmEgPSBwbGF5ZXIubWFuYSAtIHNwZWxsLm1hbmE7XHJcbiAgICBjb21iYXRBcnJheS5wdXNoKGBZb3UgZGVhbHQgJHtzcGVsbC5kYW1hZ2V9IGRhbWFnZSB1c2luZyAke3NwZWxsLm1hbmF9IG1hbmFgKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbWJhdEFycmF5LmpvaW4oJ1xcbicpKSk7XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzRW5lbXlBdHRhY2socGxheWVyOiBQbGF5ZXIsIGVuZW15OiBFbmVteSwgY29tYmF0QXJyYXk6IHN0cmluZ1tdKXtcclxuICAgIGxldCBlbmVteVNwZWxsOlNwZWxsID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UmFuZG9tU3BlbGwoZW5lbXkpO1xyXG4gICAgY29tYmF0QXJyYXkucHVzaChgRU5FTVkgQ0FTVCAke2VuZW15U3BlbGwubmFtZX1gKTtcclxuICAgIGVuZW15Lm1hbmEgPSBlbmVteS5tYW5hIC0gZW5lbXlTcGVsbC5tYW5hO1xyXG4gICAgcGxheWVyLmhlYWx0aCA9IHBsYXllci5oZWFsdGggLSBlbmVteVNwZWxsLmRhbWFnZTtcclxuICAgIGNvbWJhdEFycmF5LnB1c2goYFlvdSBsb3N0ICR7ZW5lbXlTcGVsbC5kYW1hZ2V9IGhwYCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb21iYXRBcnJheSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIGlzUm9vbUNsZWFyZWQoZW5lbXk6IEVuZW15KTogQm9vbGVhbntcclxuICAgIHJldHVybiBlbmVteS5oZWFsdGggPD0gMDtcclxuICB9XHJcblxyXG4gIGlzUGxheWVyRGVhZChwbGF5ZXI6IFBsYXllcik6IEJvb2xlYW57XHJcbiAgICByZXR1cm4gcGxheWVyLmhlYWx0aCA8PSAwO1xyXG4gIH1cclxuICBcclxufSJdfQ==
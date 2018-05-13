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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFHcEUscUNBQTBDO0FBTTFDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHdEQUFzRDtBQUd0RCxJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLDJEQUFjLENBQUE7SUFDZCwyREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUdEO0lBR0UsdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLFlBQTBCO1FBQWhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRXBHLENBQUM7SUFFRCxhQUFhO0lBQ2Isa0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsMkNBQW1CLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQ25GLFdBQVcsQ0FBQyxJQUFJLENBQUMsMEJBQXdCLEtBQUssQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWEsS0FBSyxDQUFDLE1BQU0sc0JBQWlCLEtBQUssQ0FBQyxJQUFJLFVBQU8sQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCLFVBQW1CLE1BQWMsRUFBRSxLQUFZLEVBQUUsV0FBcUI7UUFDcEUsSUFBSSxVQUFVLEdBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0QsV0FBVyxDQUFDLElBQUksQ0FBQyxnQkFBYyxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUM7UUFDbEQsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7UUFDbEQsV0FBVyxDQUFDLElBQUksQ0FBQyxjQUFZLFVBQVUsQ0FBQyxNQUFNLFFBQUssQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFHRCxxQ0FBYSxHQUFiLFVBQWMsS0FBWTtRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBL0NVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJLEVBQXVCLG1CQUFXLEVBQXdCLDRCQUFZO09BSHpGLGFBQWEsQ0FpRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBSb29tQ29tcG9uZW50IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL3Jvb20vcm9vbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBDb21iYXRTdGF0dXN7XHJcbiAgICBSb29tQ2xlYXJlZCA9IDAsXHJcbiAgICBQbGF5ZXJEZWFkID0gMSxcclxuICAgIFVucmVzb2x2ZWQgPSAyXHJcbn1cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbWJhdFNlcnZpY2Uge1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlciwgcHJpdmF0ZSBzcGVsbFNlcnZpY2U6IFNwZWxsU2VydmljZSkge1xyXG5cclxuICB9XHJcblxyXG4gIC8vY29tYmF0IHR1cm5cclxuICBjb21iYXRUdXJuKHBsYXllcjogUGxheWVyLCBlbmVteTogRW5lbXksIHNwZWxsOiBTcGVsbCwgY29tYmF0QXJyYXk6IHN0cmluZ1tdKTogQ29tYmF0U3RhdHVze1xyXG4gICAgdGhpcy5wcm9jZXNzUGxheWVyQXR0YWNrKHBsYXllciwgZW5lbXksIHNwZWxsLCBjb21iYXRBcnJheSk7XHJcbiAgICBpZiAodGhpcy5pc1Jvb21DbGVhcmVkKGVuZW15KSkge1xyXG4gICAgICByZXR1cm4gQ29tYmF0U3RhdHVzLlJvb21DbGVhcmVkO1xyXG4gICAgfSBcclxuXHJcbiAgICB0aGlzLnByb2Nlc3NFbmVteUF0dGFjayhwbGF5ZXIsIGVuZW15LCBjb21iYXRBcnJheSk7XHJcbiAgICBpZiAodGhpcy5pc1BsYXllckRlYWQocGxheWVyKSkge1xyXG4gICAgICByZXR1cm4gQ29tYmF0U3RhdHVzLlBsYXllckRlYWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIENvbWJhdFN0YXR1cy5VbnJlc29sdmVkO1xyXG4gIH1cclxuXHJcbiAgLy9mb3IgYXR0YWNrIHNpbmNlIGF0dGFjayBpc24ndCBhIHNwZWxsLi5cclxuICBwcm9jZXNzUGxheWVyQXR0YWNrKHBsYXllcjogUGxheWVyLCBlbmVteTogRW5lbXksIHNwZWxsOiBTcGVsbCwgY29tYmF0QXJyYXk6IHN0cmluZ1tdKXtcclxuICAgIGNvbWJhdEFycmF5LnB1c2goYFlvdSBhcmUgYWJvdXQgdG8gdXNlICR7c3BlbGwubmFtZX1gKTtcclxuICAgIGVuZW15LmhlYWx0aCA9IGVuZW15LmhlYWx0aCAtIHNwZWxsLmRhbWFnZTtcclxuICAgIHBsYXllci5tYW5hID0gcGxheWVyLm1hbmEgLSBzcGVsbC5tYW5hO1xyXG4gICAgY29tYmF0QXJyYXkucHVzaChgWW91IGRlYWx0ICR7c3BlbGwuZGFtYWdlfSBkYW1hZ2UgdXNpbmcgJHtzcGVsbC5tYW5hfSBtYW5hYCk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb21iYXRBcnJheS5qb2luKCdcXG4nKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0VuZW15QXR0YWNrKHBsYXllcjogUGxheWVyLCBlbmVteTogRW5lbXksIGNvbWJhdEFycmF5OiBzdHJpbmdbXSl7XHJcbiAgICBsZXQgZW5lbXlTcGVsbDpTcGVsbCA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdldFJhbmRvbVNwZWxsKGVuZW15KTtcclxuICAgIGNvbWJhdEFycmF5LnB1c2goYEVORU1ZIENBU1QgJHtlbmVteVNwZWxsLm5hbWV9YCk7XHJcbiAgICBlbmVteS5tYW5hID0gZW5lbXkubWFuYSAtIGVuZW15U3BlbGwubWFuYTtcclxuICAgIHBsYXllci5oZWFsdGggPSBwbGF5ZXIuaGVhbHRoIC0gZW5lbXlTcGVsbC5kYW1hZ2U7XHJcbiAgICBjb21iYXRBcnJheS5wdXNoKGBZb3UgbG9zdCAke2VuZW15U3BlbGwuZGFtYWdlfSBocGApO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tYmF0QXJyYXkpKTtcclxuICB9XHJcblxyXG5cclxuICBpc1Jvb21DbGVhcmVkKGVuZW15OiBFbmVteSk6IEJvb2xlYW57XHJcbiAgICByZXR1cm4gZW5lbXkuaGVhbHRoIDw9IDA7XHJcbiAgfVxyXG5cclxuICBpc1BsYXllckRlYWQocGxheWVyOiBQbGF5ZXIpOiBCb29sZWFue1xyXG4gICAgcmV0dXJuIHBsYXllci5oZWFsdGggPD0gMDtcclxuICB9XHJcbiAgXHJcbn0iXX0=
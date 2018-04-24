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
        console.log(JSON.stringify(combatArray));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmF0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb21iYXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFHcEUscUNBQTBDO0FBTzFDLG1DQUFpQztBQUNqQyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBRS9CLHdEQUFzRDtBQUd0RCxJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDcEIsNkRBQWUsQ0FBQTtJQUNmLDJEQUFjLENBQUE7SUFDZCwyREFBYyxDQUFBO0FBQ2xCLENBQUMsRUFKVyxZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQUl2QjtBQUdEO0lBR0UsdUJBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLFlBQTBCO1FBQWhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRXBHLENBQUM7SUFFRCxhQUFhO0lBQ2Isa0NBQVUsR0FBVixVQUFXLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQztRQUNsQyxDQUFDO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUVELE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsMkNBQW1CLEdBQW5CLFVBQW9CLE1BQWMsRUFBRSxLQUFZLEVBQUUsS0FBWSxFQUFFLFdBQXFCO1FBQ25GLFdBQVcsQ0FBQyxJQUFJLENBQUMsMEJBQXdCLEtBQUssQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUN2RCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQyxNQUFNLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWEsS0FBSyxDQUFDLE1BQU0sc0JBQWlCLEtBQUssQ0FBQyxJQUFJLFVBQU8sQ0FBQyxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLEtBQVksRUFBRSxXQUFxQjtRQUNwRSxJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRCxXQUFXLENBQUMsSUFBSSxDQUFDLGdCQUFjLFVBQVUsQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUNsRCxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUMxQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQVksVUFBVSxDQUFDLE1BQU0sUUFBSyxDQUFDLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUdELHFDQUFhLEdBQWIsVUFBYyxLQUFZO1FBQ3hCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVksR0FBWixVQUFhLE1BQWM7UUFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUEvQ1UsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUllLFdBQUksRUFBdUIsbUJBQVcsRUFBd0IsNEJBQVk7T0FIekYsYUFBYSxDQWlEekI7SUFBRCxvQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgUm9vbUNvbXBvbmVudCB9IGZyb20gXCIuLi8uLi9wYWdlcy9yb29tL3Jvb20uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gQ29tYmF0U3RhdHVze1xyXG4gICAgUm9vbUNsZWFyZWQgPSAwLFxyXG4gICAgUGxheWVyRGVhZCA9IDEsXHJcbiAgICBVbnJlc29sdmVkID0gMlxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb21iYXRTZXJ2aWNlIHtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzYXZlTWFuYWdlcjogU2F2ZU1hbmFnZXIsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvL2NvbWJhdCB0dXJuXHJcbiAgY29tYmF0VHVybihwbGF5ZXI6IFBsYXllciwgZW5lbXk6IEVuZW15LCBzcGVsbDogU3BlbGwsIGNvbWJhdEFycmF5OiBzdHJpbmdbXSk6IENvbWJhdFN0YXR1c3tcclxuICAgIHRoaXMucHJvY2Vzc1BsYXllckF0dGFjayhwbGF5ZXIsIGVuZW15LCBzcGVsbCwgY29tYmF0QXJyYXkpO1xyXG4gICAgaWYgKHRoaXMuaXNSb29tQ2xlYXJlZChlbmVteSkpIHtcclxuICAgICAgcmV0dXJuIENvbWJhdFN0YXR1cy5Sb29tQ2xlYXJlZDtcclxuICAgIH0gXHJcblxyXG4gICAgdGhpcy5wcm9jZXNzRW5lbXlBdHRhY2socGxheWVyLCBlbmVteSwgY29tYmF0QXJyYXkpO1xyXG4gICAgaWYgKHRoaXMuaXNQbGF5ZXJEZWFkKHBsYXllcikpIHtcclxuICAgICAgcmV0dXJuIENvbWJhdFN0YXR1cy5QbGF5ZXJEZWFkO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBDb21iYXRTdGF0dXMuVW5yZXNvbHZlZDtcclxuICB9XHJcblxyXG4gIC8vZm9yIGF0dGFjayBzaW5jZSBhdHRhY2sgaXNuJ3QgYSBzcGVsbC4uXHJcbiAgcHJvY2Vzc1BsYXllckF0dGFjayhwbGF5ZXI6IFBsYXllciwgZW5lbXk6IEVuZW15LCBzcGVsbDogU3BlbGwsIGNvbWJhdEFycmF5OiBzdHJpbmdbXSl7XHJcbiAgICBjb21iYXRBcnJheS5wdXNoKGBZb3UgYXJlIGFib3V0IHRvIHVzZSAke3NwZWxsLm5hbWV9YCk7XHJcbiAgICBlbmVteS5oZWFsdGggPSBlbmVteS5oZWFsdGggLSBzcGVsbC5kYW1hZ2U7XHJcbiAgICBwbGF5ZXIubWFuYSA9IHBsYXllci5tYW5hIC0gc3BlbGwubWFuYTtcclxuICAgIGNvbWJhdEFycmF5LnB1c2goYFlvdSBkZWFsdCAke3NwZWxsLmRhbWFnZX0gZGFtYWdlIHVzaW5nICR7c3BlbGwubWFuYX0gbWFuYWApO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY29tYmF0QXJyYXkpKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NFbmVteUF0dGFjayhwbGF5ZXI6IFBsYXllciwgZW5lbXk6IEVuZW15LCBjb21iYXRBcnJheTogc3RyaW5nW10pe1xyXG4gICAgbGV0IGVuZW15U3BlbGw6U3BlbGwgPSB0aGlzLnNwZWxsU2VydmljZS5nZXRSYW5kb21TcGVsbChlbmVteSk7XHJcbiAgICBjb21iYXRBcnJheS5wdXNoKGBFTkVNWSBDQVNUICR7ZW5lbXlTcGVsbC5uYW1lfWApO1xyXG4gICAgZW5lbXkubWFuYSA9IGVuZW15Lm1hbmEgLSBlbmVteVNwZWxsLm1hbmE7XHJcbiAgICBwbGF5ZXIuaGVhbHRoID0gcGxheWVyLmhlYWx0aCAtIGVuZW15U3BlbGwuZGFtYWdlO1xyXG4gICAgY29tYmF0QXJyYXkucHVzaChgWW91IGxvc3QgJHtlbmVteVNwZWxsLmRhbWFnZX0gaHBgKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbWJhdEFycmF5KSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgaXNSb29tQ2xlYXJlZChlbmVteTogRW5lbXkpOiBCb29sZWFue1xyXG4gICAgcmV0dXJuIGVuZW15LmhlYWx0aCA8PSAwO1xyXG4gIH1cclxuXHJcbiAgaXNQbGF5ZXJEZWFkKHBsYXllcjogUGxheWVyKTogQm9vbGVhbntcclxuICAgIHJldHVybiBwbGF5ZXIuaGVhbHRoIDw9IDA7XHJcbiAgfVxyXG4gIFxyXG59Il19
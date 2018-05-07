"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var saver_1 = require("../../saver");
var spell_1 = require("../../models/spell");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var player_service_1 = require("../player/player.service");
var SpellService = /** @class */ (function () {
    function SpellService(http, saveManager, playerService) {
        this.http = http;
        this.saveManager = saveManager;
        this.playerService = playerService;
        if (!SpellService_1.spells) {
            SpellService_1.spells = require("../../Assets/spells.json").spells;
        }
    }
    SpellService_1 = SpellService;
    SpellService.prototype.create = function (spell) {
        return this.saveManager.saveSpells(spell);
    };
    SpellService.prototype.getPlayerSpells = function () {
        return this.saveManager.loadSpells();
    };
    //need help accessing the appropriate spellset based on enemies "spells"
    SpellService.prototype.getRandomSpell = function (enemy) {
        var rand = Math.floor((Math.random() * SpellService_1.spells[enemy.spells].length)) + 1;
        return this.getSpellById(rand, enemy);
    };
    SpellService.prototype.getSpellById = function (id, enemy) {
        for (var i = 0; i < SpellService_1.spells[enemy.spells].length; i++) {
            var spell = SpellService_1.spells[enemy.spells][i];
            if (spell.id === id) {
                return spell;
            }
        }
        return null;
    };
    SpellService.prototype.generatePlayerAttack = function (name) {
        var spell = new spell_1.Spell();
        spell.name = name;
        spell.mana = 0;
        spell.damage = 2;
        return spell;
    };
    SpellService = SpellService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager, player_service_1.PlayerService])
    ], SpellService);
    return SpellService;
    var SpellService_1;
}());
exports.SpellService = SpellService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQUkxQyw0Q0FBMkM7QUFFM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0IsMkRBQXlEO0FBS3pEO0lBR0Usc0JBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGFBQTRCO1FBQWxGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3BHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsY0FBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQztJQUVILENBQUM7cUJBUlUsWUFBWTtJQVV2Qiw2QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLEtBQVk7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6RSxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUV4QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBNUNVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJLEVBQXVCLG1CQUFXLEVBQXlCLDhCQUFhO09BSDNGLFlBQVksQ0ErQ3hCO0lBQUQsbUJBQUM7O0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zYXZlclwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ab25lXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGVsbFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBzcGVsbHMgOiBTcGVsbFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2F2ZU1hbmFnZXI6IFNhdmVNYW5hZ2VyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgIGlmICghU3BlbGxTZXJ2aWNlLnNwZWxscykge1xyXG4gICAgICAgIFNwZWxsU2VydmljZS5zcGVsbHMgPSByZXF1aXJlKFwiLi4vLi4vQXNzZXRzL3NwZWxscy5qc29uXCIpLnNwZWxscztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKHNwZWxsOiBTcGVsbFtdKSA6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIuc2F2ZVNwZWxscyhzcGVsbCk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGF5ZXJTcGVsbHMoKSA6IFNwZWxsW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIubG9hZFNwZWxscygpO1xyXG5cclxuICB9XHJcblxyXG4gICAgLy9uZWVkIGhlbHAgYWNjZXNzaW5nIHRoZSBhcHByb3ByaWF0ZSBzcGVsbHNldCBiYXNlZCBvbiBlbmVtaWVzIFwic3BlbGxzXCJcclxuICBnZXRSYW5kb21TcGVsbChlbmVteTogRW5lbXkpIDogU3BlbGwge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aCkpICsgMTtcclxuICAgIHJldHVybiB0aGlzLmdldFNwZWxsQnlJZChyYW5kLCBlbmVteSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldFNwZWxsQnlJZChpZDogTnVtYmVyLCBlbmVteTogRW5lbXkpIDogU3BlbGx7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHNwZWxsOiBTcGVsbCA9IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXVtpXTtcclxuICAgICAgaWYgKHNwZWxsLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBzcGVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVBsYXllckF0dGFjayhuYW1lOiBzdHJpbmcpOiBTcGVsbCB7XHJcbiAgICBsZXQgc3BlbGwgPSBuZXcgU3BlbGwoKTtcclxuICAgIFxyXG4gICAgc3BlbGwubmFtZSA9IG5hbWU7XHJcbiAgICBzcGVsbC5tYW5hID0gMDtcclxuICAgIHNwZWxsLmRhbWFnZSA9IDI7XHJcblxyXG4gICAgcmV0dXJuIHNwZWxsO1xyXG4gIH1cclxuXHJcblxyXG59Il19
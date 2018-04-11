"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var saver_1 = require("../../saver");
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
        var spells = [];
        return this.saveManager.saveSpells(spells);
    };
    SpellService.prototype.getPlayerSpells = function (player) {
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
    SpellService = SpellService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager, player_service_1.PlayerService])
    ], SpellService);
    return SpellService;
    var SpellService_1;
}());
exports.SpellService = SpellService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQU0xQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUUvQiwyREFBeUQ7QUFLekQ7SUFHRSxzQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsYUFBNEI7UUFBbEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixjQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxDQUFDO0lBRUgsQ0FBQztxQkFSVSxZQUFZO0lBVXZCLDZCQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLEtBQVk7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6RSxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBbENVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJLEVBQXVCLG1CQUFXLEVBQXlCLDhCQUFhO09BSDNGLFlBQVksQ0FxQ3hCO0lBQUQsbUJBQUM7O0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zYXZlclwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBab25lIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ab25lXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGVsbFNlcnZpY2Uge1xyXG4gIHN0YXRpYyBzcGVsbHMgOiBTcGVsbFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2F2ZU1hbmFnZXI6IFNhdmVNYW5hZ2VyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgIGlmICghU3BlbGxTZXJ2aWNlLnNwZWxscykge1xyXG4gICAgICAgIFNwZWxsU2VydmljZS5zcGVsbHMgPSByZXF1aXJlKFwiLi4vLi4vQXNzZXRzL3NwZWxscy5qc29uXCIpLnNwZWxscztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgY3JlYXRlKHNwZWxsOiBTcGVsbCkgOiBCb29sZWFuIHtcclxuICAgIGxldCBzcGVsbHM6IGFueSA9IFtdO1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIuc2F2ZVNwZWxscyhzcGVsbHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxheWVyU3BlbGxzKHBsYXllcjogUGxheWVyKSA6IFNwZWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRTcGVsbHMoKTtcclxuICB9XHJcblxyXG4gICAgLy9uZWVkIGhlbHAgYWNjZXNzaW5nIHRoZSBhcHByb3ByaWF0ZSBzcGVsbHNldCBiYXNlZCBvbiBlbmVtaWVzIFwic3BlbGxzXCJcclxuICBnZXRSYW5kb21TcGVsbChlbmVteTogRW5lbXkpIDogU3BlbGwge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aCkpICsgMTtcclxuICAgIHJldHVybiB0aGlzLmdldFNwZWxsQnlJZChyYW5kLCBlbmVteSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldFNwZWxsQnlJZChpZDogTnVtYmVyLCBlbmVteTogRW5lbXkpIDogU3BlbGx7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHNwZWxsOiBTcGVsbCA9IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXVtpXTtcclxuICAgICAgaWYgKHNwZWxsLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBzcGVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBcclxufSJdfQ==
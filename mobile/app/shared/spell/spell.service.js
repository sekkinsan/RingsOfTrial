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
    SpellService.prototype.getRandomDamage = function () {
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
    SpellService.prototype.getRandomAttack = function () {
        var attacks = ["punch", "kick", "slap", "poke", "pinch", "knee"];
        var rand = Math.floor((Math.random() * attacks.length)) + 1;
        return this.generatePlayerAttack(attacks[rand]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQUkxQyw0Q0FBMkM7QUFFM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0IsMkRBQXlEO0FBS3pEO0lBR0Usc0JBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGFBQTRCO1FBQWxGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3BHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsY0FBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQztJQUVILENBQUM7cUJBUlUsWUFBWTtJQVV2Qiw2QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxFQUFVLEVBQUUsS0FBWTtRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pFLElBQUksS0FBSyxHQUFVLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ2hFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELDJDQUFvQixHQUFwQixVQUFxQixJQUFZO1FBQy9CLElBQUksS0FBSyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7UUFFeEIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZixLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQXREVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSWUsV0FBSSxFQUF1QixtQkFBVyxFQUF5Qiw4QkFBYTtPQUgzRixZQUFZLENBeUR4QjtJQUFELG1CQUFDOztDQUFBLEFBekRELElBeURDO0FBekRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BlbGxTZXJ2aWNlIHtcclxuICBzdGF0aWMgc3BlbGxzIDogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIVNwZWxsU2VydmljZS5zcGVsbHMpIHtcclxuICAgICAgICBTcGVsbFNlcnZpY2Uuc3BlbGxzID0gcmVxdWlyZShcIi4uLy4uL0Fzc2V0cy9zcGVsbHMuanNvblwiKS5zcGVsbHM7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNyZWF0ZShzcGVsbDogU3BlbGxbXSkgOiBCb29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVTcGVsbHMoc3BlbGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxheWVyU3BlbGxzKCkgOiBTcGVsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRTcGVsbHMoKTtcclxuXHJcbiAgfVxyXG5cclxuICAgIC8vbmVlZCBoZWxwIGFjY2Vzc2luZyB0aGUgYXBwcm9wcmlhdGUgc3BlbGxzZXQgYmFzZWQgb24gZW5lbWllcyBcInNwZWxsc1wiXHJcbiAgZ2V0UmFuZG9tU3BlbGwoZW5lbXk6IEVuZW15KSA6IFNwZWxsIHtcclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXS5sZW5ndGgpKSArIDE7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTcGVsbEJ5SWQocmFuZCwgZW5lbXkpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21EYW1hZ2UoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldFNwZWxsQnlJZChpZDogTnVtYmVyLCBlbmVteTogRW5lbXkpIDogU3BlbGx7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHNwZWxsOiBTcGVsbCA9IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXVtpXTtcclxuICAgICAgaWYgKHNwZWxsLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBzcGVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21BdHRhY2soKSB7XHJcbiAgICBsZXQgYXR0YWNrcyA9IFtcInB1bmNoXCIsIFwia2lja1wiLCBcInNsYXBcIiwgXCJwb2tlXCIsIFwicGluY2hcIiwgXCJrbmVlXCJdXHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBhdHRhY2tzLmxlbmd0aCkpICsgMTtcclxuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUGxheWVyQXR0YWNrKGF0dGFja3NbcmFuZF0pO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQbGF5ZXJBdHRhY2sobmFtZTogc3RyaW5nKTogU3BlbGwge1xyXG4gICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKCk7XHJcbiAgICBcclxuICAgIHNwZWxsLm5hbWUgPSBuYW1lO1xyXG4gICAgc3BlbGwubWFuYSA9IDA7XHJcbiAgICBzcGVsbC5kYW1hZ2UgPSAyO1xyXG5cclxuICAgIHJldHVybiBzcGVsbDtcclxuICB9XHJcblxyXG5cclxufSJdfQ==
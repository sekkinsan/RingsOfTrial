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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQUcxQyw0Q0FBMkM7QUFFM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0IsMkRBQXlEO0FBS3pEO0lBR0Usc0JBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGFBQTRCO1FBQWxGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3BHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsY0FBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQztJQUVILENBQUM7cUJBUlUsWUFBWTtJQVV2Qiw2QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLEtBQVk7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6RSxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkNBQW9CLEdBQXBCLFVBQXFCLElBQVk7UUFDL0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUV4QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNmLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBNUNVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FJZSxXQUFJLEVBQXVCLG1CQUFXLEVBQXlCLDhCQUFhO09BSDNGLFlBQVksQ0ErQ3hCO0lBQUQsbUJBQUM7O0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIEh0dHBNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuLi8uLi9zYXZlclwiO1xyXG5pbXBvcnQgeyBFbmVteSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvRW5lbXlcIjtcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BlbGxTZXJ2aWNlIHtcclxuICBzdGF0aWMgc3BlbGxzIDogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIVNwZWxsU2VydmljZS5zcGVsbHMpIHtcclxuICAgICAgICBTcGVsbFNlcnZpY2Uuc3BlbGxzID0gcmVxdWlyZShcIi4uLy4uL0Fzc2V0cy9zcGVsbHMuanNvblwiKS5zcGVsbHM7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNyZWF0ZShzcGVsbDogU3BlbGxbXSkgOiBCb29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVTcGVsbHMoc3BlbGwpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxheWVyU3BlbGxzKCkgOiBTcGVsbFtdIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRTcGVsbHMoKTtcclxuXHJcbiAgfVxyXG5cclxuICAgIC8vbmVlZCBoZWxwIGFjY2Vzc2luZyB0aGUgYXBwcm9wcmlhdGUgc3BlbGxzZXQgYmFzZWQgb24gZW5lbWllcyBcInNwZWxsc1wiXHJcbiAgZ2V0UmFuZG9tU3BlbGwoZW5lbXk6IEVuZW15KSA6IFNwZWxsIHtcclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXS5sZW5ndGgpKSArIDE7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRTcGVsbEJ5SWQocmFuZCwgZW5lbXkpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRTcGVsbEJ5SWQoaWQ6IE51bWJlciwgZW5lbXk6IEVuZW15KSA6IFNwZWxse1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBzcGVsbDogU3BlbGwgPSBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc11baV07XHJcbiAgICAgIGlmIChzcGVsbC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gc3BlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQbGF5ZXJBdHRhY2sobmFtZTogc3RyaW5nKTogU3BlbGwge1xyXG4gICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKCk7XHJcbiAgICBcclxuICAgIHNwZWxsLm5hbWUgPSBuYW1lO1xyXG4gICAgc3BlbGwubWFuYSA9IDA7XHJcbiAgICBzcGVsbC5kYW1hZ2UgPSAyO1xyXG5cclxuICAgIHJldHVybiBzcGVsbDtcclxuICB9XHJcblxyXG5cclxufSJdfQ==
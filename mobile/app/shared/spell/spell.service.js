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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQUkxQyw0Q0FBMkM7QUFFM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFFL0IsMkRBQXlEO0FBS3pEO0lBR0Usc0JBQW9CLElBQVUsRUFBVSxXQUF3QixFQUFVLGFBQTRCO1FBQWxGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQ3BHLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsY0FBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQztJQUVILENBQUM7cUJBUlUsWUFBWTtJQVV2Qiw2QkFBTSxHQUFOLFVBQU8sS0FBYztRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO0lBRUEsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxFQUFVLEVBQUUsS0FBWTtRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pFLElBQUksS0FBSyxHQUFVLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwyQ0FBb0IsR0FBcEIsVUFBcUIsSUFBWTtRQUMvQixJQUFJLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRXhCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFFakIsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFoRFUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUllLFdBQUksRUFBdUIsbUJBQVcsRUFBeUIsOEJBQWE7T0FIM0YsWUFBWSxDQW1EeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1pvbmVcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwZWxsU2VydmljZSB7XHJcbiAgc3RhdGljIHNwZWxscyA6IFNwZWxsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzYXZlTWFuYWdlcjogU2F2ZU1hbmFnZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkge1xyXG4gICAgaWYgKCFTcGVsbFNlcnZpY2Uuc3BlbGxzKSB7XHJcbiAgICAgICAgU3BlbGxTZXJ2aWNlLnNwZWxscyA9IHJlcXVpcmUoXCIuLi8uLi9Bc3NldHMvc3BlbGxzLmpzb25cIikuc3BlbGxzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoc3BlbGw6IFNwZWxsW10pIDogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlU3BlbGxzKHNwZWxsKTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllclNwZWxscygpIDogU3BlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5sb2FkU3BlbGxzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgICAvL25lZWQgaGVscCBhY2Nlc3NpbmcgdGhlIGFwcHJvcHJpYXRlIHNwZWxsc2V0IGJhc2VkIG9uIGVuZW1pZXMgXCJzcGVsbHNcIlxyXG4gIGdldFJhbmRvbVNwZWxsKGVuZW15OiBFbmVteSkgOiBTcGVsbCB7XHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc10ubGVuZ3RoKSkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3BlbGxCeUlkKHJhbmQsIGVuZW15KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tRGFtYWdlKCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBnZXRTcGVsbEJ5SWQoaWQ6IE51bWJlciwgZW5lbXk6IEVuZW15KSA6IFNwZWxse1xyXG4gICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBzcGVsbDogU3BlbGwgPSBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc11baV07XHJcbiAgICAgIGlmIChzcGVsbC5pZCA9PT0gaWQpIHtcclxuICAgICAgICByZXR1cm4gc3BlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVQbGF5ZXJBdHRhY2sobmFtZTogc3RyaW5nKTogU3BlbGwge1xyXG4gICAgbGV0IHNwZWxsID0gbmV3IFNwZWxsKCk7XHJcbiAgICBcclxuICAgIHNwZWxsLm5hbWUgPSBuYW1lO1xyXG4gICAgc3BlbGwubWFuYSA9IDA7XHJcbiAgICBzcGVsbC5kYW1hZ2UgPSAyO1xyXG5cclxuICAgIHJldHVybiBzcGVsbDtcclxuICB9XHJcblxyXG5cclxufSJdfQ==
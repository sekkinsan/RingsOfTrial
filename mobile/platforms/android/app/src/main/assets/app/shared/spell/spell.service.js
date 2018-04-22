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
    SpellService.prototype.getRandomAttack = function () {
        var attacks = ["punch", "kick", "slap", "poke", "pinch", "knee"];
        var rand = Math.floor((Math.random() * attacks.length)) + 1;
        return attacks[rand];
    };
    SpellService = SpellService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager, player_service_1.PlayerService])
    ], SpellService);
    return SpellService;
    var SpellService_1;
}());
exports.SpellService = SpellService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQU0xQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUUvQiwyREFBeUQ7QUFLekQ7SUFHRSxzQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsYUFBNEI7UUFBbEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixjQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxDQUFDO0lBRUgsQ0FBQztxQkFSVSxZQUFZO0lBVXZCLDZCQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBRXZDLENBQUM7SUFFQyx3RUFBd0U7SUFDMUUscUNBQWMsR0FBZCxVQUFlLEtBQVk7UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0RixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFeEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxFQUFVLEVBQUUsS0FBWTtRQUNuQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3pFLElBQUksS0FBSyxHQUFVLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNmLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQ2hFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQXhDVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSWUsV0FBSSxFQUF1QixtQkFBVyxFQUF5Qiw4QkFBYTtPQUgzRixZQUFZLENBMkN4QjtJQUFELG1CQUFDOztDQUFBLEFBM0NELElBMkNDO0FBM0NZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BlbGxTZXJ2aWNlIHtcclxuICBzdGF0aWMgc3BlbGxzIDogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlKSB7XHJcbiAgICBpZiAoIVNwZWxsU2VydmljZS5zcGVsbHMpIHtcclxuICAgICAgICBTcGVsbFNlcnZpY2Uuc3BlbGxzID0gcmVxdWlyZShcIi4uLy4uL0Fzc2V0cy9zcGVsbHMuanNvblwiKS5zcGVsbHM7XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGNyZWF0ZShzcGVsbDogU3BlbGwpIDogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlU3BlbGxzKHNwZWxsKTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllclNwZWxscygpIDogU3BlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5sb2FkU3BlbGxzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgICAvL25lZWQgaGVscCBhY2Nlc3NpbmcgdGhlIGFwcHJvcHJpYXRlIHNwZWxsc2V0IGJhc2VkIG9uIGVuZW1pZXMgXCJzcGVsbHNcIlxyXG4gIGdldFJhbmRvbVNwZWxsKGVuZW15OiBFbmVteSkgOiBTcGVsbCB7XHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc10ubGVuZ3RoKSkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3BlbGxCeUlkKHJhbmQsIGVuZW15KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0U3BlbGxCeUlkKGlkOiBOdW1iZXIsIGVuZW15OiBFbmVteSkgOiBTcGVsbHtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgc3BlbGw6IFNwZWxsID0gU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdW2ldO1xyXG4gICAgICBpZiAoc3BlbGwuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHNwZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUF0dGFjaygpIHtcclxuICAgIGxldCBhdHRhY2tzID0gW1wicHVuY2hcIiwgXCJraWNrXCIsIFwic2xhcFwiLCBcInBva2VcIiwgXCJwaW5jaFwiLCBcImtuZWVcIl1cclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIGF0dGFja3MubGVuZ3RoKSkgKyAxO1xyXG4gICAgcmV0dXJuIGF0dGFja3NbcmFuZF07XHJcbiAgfVxyXG5cclxuXHJcbn0iXX0=
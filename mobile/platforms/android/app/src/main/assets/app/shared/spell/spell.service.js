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
        var playerSpells = [];
        return this.saveManager.saveSpells(playerSpells);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQU0xQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUUvQiwyREFBeUQ7QUFLekQ7SUFHRSxzQkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsYUFBNEI7UUFBbEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDcEcsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUN2QixjQUFZLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxDQUFDO0lBRUgsQ0FBQztxQkFSVSxZQUFZO0lBVXZCLDZCQUFNLEdBQU4sVUFBTyxLQUFZO1FBQ2pCLElBQUksWUFBWSxHQUFRLEVBQUUsQ0FBQztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHNDQUFlLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUMsd0VBQXdFO0lBQzFFLHFDQUFjLEdBQWQsVUFBZSxLQUFZO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEYsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXhDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsRUFBVSxFQUFFLEtBQVk7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUN6RSxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDZixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsc0NBQWUsR0FBZjtRQUNFLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUNoRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUF6Q1UsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUllLFdBQUksRUFBdUIsbUJBQVcsRUFBeUIsOEJBQWE7T0FIM0YsWUFBWSxDQTRDeEI7SUFBRCxtQkFBQzs7Q0FBQSxBQTVDRCxJQTRDQztBQTVDWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCB7IEVuZW15IH0gZnJvbSBcIi4uLy4uL21vZGVscy9FbmVteVwiO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFpvbmUgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1pvbmVcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNwZWxsU2VydmljZSB7XHJcbiAgc3RhdGljIHNwZWxscyA6IFNwZWxsW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzYXZlTWFuYWdlcjogU2F2ZU1hbmFnZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSkge1xyXG4gICAgaWYgKCFTcGVsbFNlcnZpY2Uuc3BlbGxzKSB7XHJcbiAgICAgICAgU3BlbGxTZXJ2aWNlLnNwZWxscyA9IHJlcXVpcmUoXCIuLi8uLi9Bc3NldHMvc3BlbGxzLmpzb25cIikuc3BlbGxzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoc3BlbGw6IFNwZWxsKSA6IEJvb2xlYW4ge1xyXG4gICAgbGV0IHBsYXllclNwZWxsczogYW55ID0gW107XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlU3BlbGxzKHBsYXllclNwZWxscyk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGF5ZXJTcGVsbHMocGxheWVyOiBQbGF5ZXIpIDogU3BlbGxbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5sb2FkU3BlbGxzKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgICAvL25lZWQgaGVscCBhY2Nlc3NpbmcgdGhlIGFwcHJvcHJpYXRlIHNwZWxsc2V0IGJhc2VkIG9uIGVuZW1pZXMgXCJzcGVsbHNcIlxyXG4gIGdldFJhbmRvbVNwZWxsKGVuZW15OiBFbmVteSkgOiBTcGVsbCB7XHJcbiAgICBsZXQgcmFuZCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc10ubGVuZ3RoKSkgKyAxO1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U3BlbGxCeUlkKHJhbmQsIGVuZW15KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2V0U3BlbGxCeUlkKGlkOiBOdW1iZXIsIGVuZW15OiBFbmVteSkgOiBTcGVsbHtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBTcGVsbFNlcnZpY2Uuc3BlbGxzW2VuZW15LnNwZWxsc10ubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgc3BlbGw6IFNwZWxsID0gU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdW2ldO1xyXG4gICAgICBpZiAoc3BlbGwuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHNwZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFJhbmRvbUF0dGFjaygpIHtcclxuICAgIGxldCBhdHRhY2tzID0gW1wicHVuY2hcIiwgXCJraWNrXCIsIFwic2xhcFwiLCBcInBva2VcIiwgXCJwaW5jaFwiLCBcImtuZWVcIl1cclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSAqIGF0dGFja3MubGVuZ3RoKSkgKyAxO1xyXG4gICAgcmV0dXJuIGF0dGFja3NbcmFuZF07XHJcbiAgfVxyXG5cclxuXHJcbn0iXX0=
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var spell_service_1 = require("../../shared/spell/spell.service");
var spell_1 = require("../../models/spell");
var SpellComponent = /** @class */ (function () {
    function SpellComponent(router, playerService, spellService, page) {
        this.router = router;
        this.playerService = playerService;
        this.spellService = spellService;
        this.page = page;
        this.player = this.playerService.getPlayer();
        this.player.spells = [];
        this.spellNames = [];
    }
    SpellComponent.prototype.submit = function () {
        if (this.spellsMade) {
            this.continue();
        }
        else {
            this.createSpell();
        }
    };
    SpellComponent.prototype.continue = function () {
        console.log(JSON.stringify(this.player.spells));
        this.spellService.getPlayerSpells();
        this.router.navigate(["/map"]);
    };
    SpellComponent.prototype.createSpell = function () {
        var attack = this.spellService.generatePlayerAttack(this.spellNames[0]);
        this.player.spells.push(attack);
        for (var i = 1; i < this.spellNames.length; i++) {
            var newSpell = new spell_1.Spell();
            newSpell.damage = 3;
            newSpell.mana = 2;
            newSpell.name = this.spellNames[i];
            newSpell.id = i;
            this.player.spells.push(newSpell);
        }
        alert(this.spellService.create(this.player.spells));
        console.log(JSON.stringify(this.player.spells));
    };
    SpellComponent.prototype.toggleDisplay = function () {
        this.spellsMade = !this.spellsMade;
    };
    SpellComponent = __decorate([
        core_1.Component({
            selector: "spell",
            moduleId: module.id,
            templateUrl: "./spell.html",
            providers: [player_service_1.PlayerService, spell_service_1.SpellService],
            styleUrls: ["./spell-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, spell_service_1.SpellService, page_1.Page])
    ], SpellComponent);
    return SpellComponent;
}());
exports.SpellComponent = SpellComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFtRTtBQUVuRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBRS9CLGtFQUFnRTtBQUNoRSw0Q0FBMkM7QUFVM0M7SUFPRSx3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBQTVHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM5SCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3JDLENBQUM7SUE5Q1UsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQVE0QixlQUFNLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FQckgsY0FBYyxDQWtEMUI7SUFBRCxxQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInNwZWxsXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NwZWxsLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zcGVsbC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVsbENvbXBvbmVudCB7XHJcblxyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIHNwZWxsczogU3BlbGxbXTtcclxuICBzcGVsbHNNYWRlOiBCb29sZWFuO1xyXG4gIHNwZWxsTmFtZXM6IHN0cmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UsIHByaXZhdGUgc3BlbGxTZXJ2aWNlOiBTcGVsbFNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMgPSBbXTtcclxuICAgIHRoaXMuc3BlbGxOYW1lcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuc3BlbGxzTWFkZSkge1xyXG4gICAgICB0aGlzLmNvbnRpbnVlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZVNwZWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb250aW51ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG4gICAgdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbWFwXCJdKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVNwZWxsKCkge1xyXG4gICAgbGV0IGF0dGFjayA9IHRoaXMuc3BlbGxTZXJ2aWNlLmdlbmVyYXRlUGxheWVyQXR0YWNrKHRoaXMuc3BlbGxOYW1lc1swXSk7XHJcbiAgICB0aGlzLnBsYXllci5zcGVsbHMucHVzaChhdHRhY2spO1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgdGhpcy5zcGVsbE5hbWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IG5ld1NwZWxsID0gbmV3IFNwZWxsKCk7XHJcbiAgICAgIG5ld1NwZWxsLmRhbWFnZSA9IDM7XHJcbiAgICAgIG5ld1NwZWxsLm1hbmEgPSAyO1xyXG4gICAgICBuZXdTcGVsbC5uYW1lID0gdGhpcy5zcGVsbE5hbWVzW2ldO1xyXG4gICAgICBuZXdTcGVsbC5pZCA9IGk7XHJcbiAgICAgIHRoaXMucGxheWVyLnNwZWxscy5wdXNoKG5ld1NwZWxsKTtcclxuICAgIH1cclxuICBcclxuICAgIGFsZXJ0KHRoaXMuc3BlbGxTZXJ2aWNlLmNyZWF0ZSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuc3BlbGxzTWFkZSA9ICF0aGlzLnNwZWxsc01hZGU7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
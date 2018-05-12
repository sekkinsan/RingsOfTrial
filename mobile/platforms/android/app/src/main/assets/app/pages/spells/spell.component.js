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
        this.spellsMade = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFtRTtBQUVuRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBRS9CLGtFQUFnRTtBQUNoRSw0Q0FBMkM7QUFVM0M7SUFPRSx3QkFBb0IsTUFBYyxFQUFVLGFBQTRCLEVBQVUsWUFBMEIsRUFBVSxJQUFVO1FBQTVHLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUM5SCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWhDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQzNCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxRQUFRLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBOUNVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsY0FBYztZQUMzQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzt5Q0FRNEIsZUFBTSxFQUF5Qiw4QkFBYSxFQUF3Qiw0QkFBWSxFQUFnQixXQUFJO09BUHJILGNBQWMsQ0FrRDFCO0lBQUQscUJBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJzcGVsbFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zcGVsbC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgU3BlbGxTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vc3BlbGwtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlbGxDb21wb25lbnQge1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBzcGVsbHM6IFNwZWxsW107XHJcbiAgc3BlbGxzTWFkZTogQm9vbGVhbjtcclxuICBzcGVsbE5hbWVzOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gW107XHJcbiAgICB0aGlzLnNwZWxsTmFtZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLnNwZWxsc01hZGUpIHtcclxuICAgICAgdGhpcy5jb250aW51ZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jcmVhdGVTcGVsbCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29udGludWUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICAgIHRoaXMuc3BlbGxTZXJ2aWNlLmdldFBsYXllclNwZWxscygpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21hcFwiXSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTcGVsbCgpIHtcclxuICAgIGxldCBhdHRhY2sgPSB0aGlzLnNwZWxsU2VydmljZS5nZW5lcmF0ZVBsYXllckF0dGFjayh0aGlzLnNwZWxsTmFtZXNbMF0pO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzLnB1c2goYXR0YWNrKTtcclxuICAgIFxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IHRoaXMuc3BlbGxOYW1lcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBuZXdTcGVsbCA9IG5ldyBTcGVsbCgpO1xyXG4gICAgICBuZXdTcGVsbC5kYW1hZ2UgPSAzO1xyXG4gICAgICBuZXdTcGVsbC5tYW5hID0gMjtcclxuICAgICAgbmV3U3BlbGwubmFtZSA9IHRoaXMuc3BlbGxOYW1lc1tpXTtcclxuICAgICAgbmV3U3BlbGwuaWQgPSBpO1xyXG4gICAgICB0aGlzLnBsYXllci5zcGVsbHMucHVzaChuZXdTcGVsbCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbGVydCh0aGlzLnNwZWxsU2VydmljZS5jcmVhdGUodGhpcy5wbGF5ZXIuc3BlbGxzKSk7XHJcbiAgICB0aGlzLnNwZWxsc01hZGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuc3BlbGxzTWFkZSA9ICF0aGlzLnNwZWxsc01hZGU7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
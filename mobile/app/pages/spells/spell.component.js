"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var spell_service_1 = require("../../shared/spell/spell.service");
var SpellComponent = /** @class */ (function () {
    function SpellComponent(router, playerService, spellService, page) {
        this.router = router;
        this.playerService = playerService;
        this.spellService = spellService;
        this.page = page;
        this.player = this.playerService.getPlayer();
        this.player.spells = [];
    }
    SpellComponent.prototype.submit = function () {
        if (this.spellsMade) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    SpellComponent.prototype.submit2 = function () {
        // need way to push access player spells and have damage/mana cost set up and push directly into it..
        console.log(JSON.stringify(this.player.spells));
        //   this.player.spells.push(spell1);
        //   this,player.spells.push(spell2);
    };
    SpellComponent.prototype.login = function () {
        console.log(JSON.stringify(this.player.spells));
        this.playerService.getPlayer();
        this.spellService.getPlayerSpells();
        this.router.navigate(["/map"]);
    };
    SpellComponent.prototype.signUp = function () {
        this.spellService.create(this.player.spells[0]);
        this.spellService.create(this.player.spells[1]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFtRTtBQUVuRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBRy9CLGtFQUFnRTtBQVdoRTtJQU1FLHdCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxZQUEwQixFQUFVLElBQVU7UUFBNUcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzlILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFHMUIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCxnQ0FBTyxHQUFQO1FBQ0UscUdBQXFHO1FBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFbEQscUNBQXFDO1FBQ3JDLHFDQUFxQztJQUN2QyxDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDckMsQ0FBQztJQTVDVSxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLGNBQWM7WUFDM0IsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBTzRCLGVBQU0sRUFBeUIsOEJBQWEsRUFBd0IsNEJBQVksRUFBZ0IsV0FBSTtPQU5ySCxjQUFjLENBZ0QxQjtJQUFELHFCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFBsYXllclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3BsYXllci9wbGF5ZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgKiBhcyBhYnNvbHV0ZUxheW91dE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiO1xyXG5pbXBvcnQgeyBTcGVsbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3NwZWxsL3NwZWxsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGwgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3NwZWxsXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwic3BlbGxcIixcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vc3BlbGwuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIFNwZWxsU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL3NwZWxsLWNvbW1vbi5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNwZWxsQ29tcG9uZW50IHtcclxuXHJcbiAgcGxheWVyOiBQbGF5ZXI7XHJcbiAgc3BlbGw6IFNwZWxsO1xyXG4gIHNwZWxsc01hZGU6IEJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcGxheWVyU2VydmljZTogUGxheWVyU2VydmljZSwgcHJpdmF0ZSBzcGVsbFNlcnZpY2U6IFNwZWxsU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XHJcbiAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyU2VydmljZS5nZXRQbGF5ZXIoKTtcclxuICAgIHRoaXMucGxheWVyLnNwZWxscyA9IFtdO1xyXG4gICAgXHJcblxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuc3BlbGxzTWFkZSkge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3VibWl0MigpIHtcclxuICAgIC8vIG5lZWQgd2F5IHRvIHB1c2ggYWNjZXNzIHBsYXllciBzcGVsbHMgYW5kIGhhdmUgZGFtYWdlL21hbmEgY29zdCBzZXQgdXAgYW5kIHB1c2ggZGlyZWN0bHkgaW50byBpdC4uXHJcbiAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG5cclxuICAgIC8vICAgdGhpcy5wbGF5ZXIuc3BlbGxzLnB1c2goc3BlbGwxKTtcclxuICAgIC8vICAgdGhpcyxwbGF5ZXIuc3BlbGxzLnB1c2goc3BlbGwyKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKCkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzKSk7XHJcbiAgICB0aGlzLnBsYXllclNlcnZpY2UuZ2V0UGxheWVyKCk7XHJcbiAgICB0aGlzLnNwZWxsU2VydmljZS5nZXRQbGF5ZXJTcGVsbHMoKTtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9tYXBcIl0pO1xyXG4gIH1cclxuXHJcbiAgc2lnblVwKCkge1xyXG4gICAgdGhpcy5zcGVsbFNlcnZpY2UuY3JlYXRlKHRoaXMucGxheWVyLnNwZWxsc1swXSk7XHJcbiAgICB0aGlzLnNwZWxsU2VydmljZS5jcmVhdGUodGhpcy5wbGF5ZXIuc3BlbGxzWzFdKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuc3BlbGxzTWFkZSA9ICF0aGlzLnNwZWxsc01hZGU7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
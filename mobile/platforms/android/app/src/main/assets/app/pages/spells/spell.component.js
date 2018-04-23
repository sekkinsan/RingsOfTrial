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
            this.continue();
        }
        else {
            this.createSpell();
        }
    };
    SpellComponent.prototype.submit2 = function () {
        // need way to push access player spells and have damage/mana cost set up and push directly into it..
        console.log(JSON.stringify(this.player.spells));
        //   this.player.spells.push(spell1);
        //   this,player.spells.push(spell2);
    };
    SpellComponent.prototype.continue = function () {
        console.log(JSON.stringify(this.player.spells));
        this.spellService.getPlayerSpells();
        this.router.navigate(["/map"]);
    };
    SpellComponent.prototype.createSpell = function () {
        alert(this.spellService.create(this.player.spells));
        console.log(JSON.stringify(this.player.spells));
        console.log(JSON.stringify(this.player.spells[0]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFtRTtBQUVuRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBRS9CLGtFQUFnRTtBQVdoRTtJQU1FLHdCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxZQUEwQixFQUFVLElBQVU7UUFBNUcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzlILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsZ0NBQU8sR0FBUDtRQUNFLHFHQUFxRztRQUNuRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRWxELHFDQUFxQztRQUNyQyxxQ0FBcUM7SUFDdkMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQyxDQUFDO0lBMUNVLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsY0FBYztZQUMzQixTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLDRCQUFZLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQzt5Q0FPNEIsZUFBTSxFQUF5Qiw4QkFBYSxFQUF3Qiw0QkFBWSxFQUFnQixXQUFJO09BTnJILGNBQWMsQ0E4QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcGxheWVyL3BsYXllci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFNwZWxsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvc3BlbGwvc3BlbGwuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJzcGVsbFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9zcGVsbC5odG1sXCIsXHJcbiAgcHJvdmlkZXJzOiBbUGxheWVyU2VydmljZSwgU3BlbGxTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFtcIi4vc3BlbGwtY29tbW9uLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3BlbGxDb21wb25lbnQge1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBzcGVsbHM6IFNwZWxsW107XHJcbiAgc3BlbGxzTWFkZTogQm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gW107XHJcblxyXG4gIH1cclxuXHJcbiAgc3VibWl0KCkge1xyXG4gICAgaWYgKHRoaXMuc3BlbGxzTWFkZSkge1xyXG4gICAgICB0aGlzLmNvbnRpbnVlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNyZWF0ZVNwZWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWJtaXQyKCkge1xyXG4gICAgLy8gbmVlZCB3YXkgdG8gcHVzaCBhY2Nlc3MgcGxheWVyIHNwZWxscyBhbmQgaGF2ZSBkYW1hZ2UvbWFuYSBjb3N0IHNldCB1cCBhbmQgcHVzaCBkaXJlY3RseSBpbnRvIGl0Li5cclxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzKSk7XHJcblxyXG4gICAgLy8gICB0aGlzLnBsYXllci5zcGVsbHMucHVzaChzcGVsbDEpO1xyXG4gICAgLy8gICB0aGlzLHBsYXllci5zcGVsbHMucHVzaChzcGVsbDIpO1xyXG4gIH1cclxuXHJcbiAgY29udGludWUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICAgIHRoaXMuc3BlbGxTZXJ2aWNlLmdldFBsYXllclNwZWxscygpO1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL21hcFwiXSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTcGVsbCgpIHtcclxuICAgIGFsZXJ0KHRoaXMuc3BlbGxTZXJ2aWNlLmNyZWF0ZSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdKSk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVEaXNwbGF5KCkge1xyXG4gICAgdGhpcy5zcGVsbHNNYWRlID0gIXRoaXMuc3BlbGxzTWFkZTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuICBcclxuIl19
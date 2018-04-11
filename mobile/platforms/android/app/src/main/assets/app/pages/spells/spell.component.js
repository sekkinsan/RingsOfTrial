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
        // need way to push access player spells and have damage/mana cost set up and push directly into it..
        console.log(JSON.stringify(this.player.spells));
        //   this.player.spells.push(spell1);
        //   this,player.spells.push(spell2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3BlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHFFQUFtRTtBQUVuRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBRy9CLGtFQUFnRTtBQVdoRTtJQUtFLHdCQUFvQixNQUFjLEVBQVUsYUFBNEIsRUFBVSxZQUEwQixFQUFVLElBQVU7UUFBNUcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzlILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFHMUIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxxR0FBcUc7UUFDbkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsRCxxQ0FBcUM7UUFDckMscUNBQXFDO0lBQ3ZDLENBQUM7SUFsQlUsY0FBYztRQVAxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxjQUFjO1lBQzNCLFNBQVMsRUFBRSxDQUFDLDhCQUFhLEVBQUUsNEJBQVksQ0FBQztZQUN4QyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQU00QixlQUFNLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FMckgsY0FBYyxDQXNCMUI7SUFBRCxxQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0ICogYXMgYWJzb2x1dGVMYXlvdXRNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcInNwZWxsXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogXCIuL3NwZWxsLmh0bWxcIixcclxuICBwcm92aWRlcnM6IFtQbGF5ZXJTZXJ2aWNlLCBTcGVsbFNlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogW1wiLi9zcGVsbC1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcGVsbENvbXBvbmVudCB7XHJcblxyXG4gIHBsYXllcjogUGxheWVyO1xyXG4gIHNwZWxsOiBTcGVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gW107XHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICAvLyBuZWVkIHdheSB0byBwdXNoIGFjY2VzcyBwbGF5ZXIgc3BlbGxzIGFuZCBoYXZlIGRhbWFnZS9tYW5hIGNvc3Qgc2V0IHVwIGFuZCBwdXNoIGRpcmVjdGx5IGludG8gaXQuLlxyXG4gICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHMpKTtcclxuXHJcbiAgICAvLyAgIHRoaXMucGxheWVyLnNwZWxscy5wdXNoKHNwZWxsMSk7XHJcbiAgICAvLyAgIHRoaXMscGxheWVyLnNwZWxscy5wdXNoKHNwZWxsMik7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
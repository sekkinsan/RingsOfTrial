"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MapComponent = /** @class */ (function () {
    function MapComponent(router, playerService, spellService, page) {
        this.router = router;
        this.playerService = playerService;
        this.spellService = spellService;
        this.page = page;
        this.isCleared = true;
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
    }
    MapComponent.prototype.submit = function () {
        if (this.isCleared) {
            this.enter();
        }
        else {
            this.warn();
        }
    };
    MapComponent.prototype.enter = function () {
        this.router.navigate(["/zone"]);
    };
    MapComponent.prototype.warn = function () {
        alert("You can't access this yet!");
    };
    MapComponent.prototype.test = function () {
        console.log(JSON.stringify(this.player.spells));
        console.log(JSON.stringify(this.player.spells[0]));
        console.log(JSON.stringify(this.player.spells[1]));
        console.log(JSON.stringify(this.player));
        //test to see player actually has a spellbook?
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.html",
            providers: [player_service_1.PlayerService, spell_service_1.SpellService],
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, player_service_1.PlayerService, spell_service_1.SpellService, page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQscUVBQW1FO0FBQ25FLGtFQUFnRTtBQUVoRSwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBWS9CO0lBTUUsc0JBQW9CLE1BQWMsRUFBVSxhQUE0QixFQUFVLFlBQTBCLEVBQVUsSUFBVTtRQUE1RyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIaEksY0FBUyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRzNELENBQUM7SUFFRCw2QkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRCw0QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0UsS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekMsOENBQThDO0lBQ2hELENBQUM7SUFuQ1UsWUFBWTtRQVB4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLFlBQVk7WUFDekIsU0FBUyxFQUFFLENBQUMsOEJBQWEsRUFBRSw0QkFBWSxDQUFDO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQztTQUM3QyxDQUFDO3lDQU80QixlQUFNLEVBQXlCLDhCQUFhLEVBQXdCLDRCQUFZLEVBQWdCLFdBQUk7T0FOckgsWUFBWSxDQXNDeEI7SUFBRCxtQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3BlbGxTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9zcGVsbC9zcGVsbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4uLy4uL21vZGVscy9zcGVsbFwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcIm1hcFwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9tYXAuaHRtbFwiLFxyXG4gIHByb3ZpZGVyczogW1BsYXllclNlcnZpY2UsIFNwZWxsU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbXCIuL21hcC1jb21tb24uY3NzXCIsIFwiLi9tYXAuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQge1xyXG5cclxuICBwbGF5ZXI6IFBsYXllcjtcclxuICBpc0NsZWFyZWQgPSB0cnVlO1xyXG4gIHNwZWxsczogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwbGF5ZXJTZXJ2aWNlOiBQbGF5ZXJTZXJ2aWNlLCBwcml2YXRlIHNwZWxsU2VydmljZTogU3BlbGxTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcclxuICAgIHRoaXMucGxheWVyID0gdGhpcy5wbGF5ZXJTZXJ2aWNlLmdldFBsYXllcigpO1xyXG4gICAgdGhpcy5wbGF5ZXIuc3BlbGxzID0gdGhpcy5zcGVsbFNlcnZpY2UuZ2V0UGxheWVyU3BlbGxzKCk7XHJcbiAgICBcclxuXHJcbiAgfVxyXG5cclxuICBzdWJtaXQoKSB7XHJcbiAgICBpZiAodGhpcy5pc0NsZWFyZWQpIHtcclxuICAgICAgdGhpcy5lbnRlcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53YXJuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBlbnRlcigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi96b25lXCJdKTtcclxuICB9XHJcblxyXG4gIHdhcm4oKSB7XHJcbiAgICBhbGVydChcIllvdSBjYW4ndCBhY2Nlc3MgdGhpcyB5ZXQhXCIpO1xyXG4gIH1cclxuXHJcbiAgdGVzdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyLnNwZWxscykpO1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5wbGF5ZXIuc3BlbGxzWzBdKSk7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnBsYXllci5zcGVsbHNbMV0pKTtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMucGxheWVyKSk7XHJcbiAgICAvL3Rlc3QgdG8gc2VlIHBsYXllciBhY3R1YWxseSBoYXMgYSBzcGVsbGJvb2s/XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiAgXHJcbiJdfQ==
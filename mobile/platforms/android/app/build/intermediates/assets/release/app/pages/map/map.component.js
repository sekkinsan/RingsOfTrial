"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var MapComponent = /** @class */ (function () {
    function MapComponent(router, route, playerService, spellService, page) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.playerService = playerService;
        this.spellService = spellService;
        this.page = page;
        this.isCleared = function (ringId) { return _this.player.clearedRings && _this.player.clearedRings.indexOf(ringId) >= 0; };
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
    }
    MapComponent.prototype.submit = function (ringId) {
        if (!this.isCleared(ringId)) {
            this.enter(ringId);
        }
        else {
            this.warn();
        }
    };
    MapComponent.prototype.enter = function (ringId) {
        this.playerService.getPlayer();
        this.router.navigate(["/ring", ringId]);
    };
    MapComponent.prototype.warn = function () {
        alert("You already cleared this!");
    };
    MapComponent.prototype.stats = function () {
        alert(JSON.stringify(this.player));
    };
    MapComponent.prototype.checkClearedRooms = function () {
        alert(JSON.stringify(this.player.clearedRooms));
    };
    MapComponent.prototype.checkClearedRings = function () {
        alert(JSON.stringify(this.player.clearedRings));
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: "map",
            moduleId: module.id,
            templateUrl: "./map.html",
            providers: [player_service_1.PlayerService, spell_service_1.SpellService],
            styleUrls: ["./map-common.css", "./map.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, player_service_1.PlayerService, spell_service_1.SpellService, page_1.Page])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;

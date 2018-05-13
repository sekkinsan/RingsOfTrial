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

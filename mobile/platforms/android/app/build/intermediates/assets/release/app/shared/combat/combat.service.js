"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var saver_1 = require("../../saver");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var spell_service_1 = require("../spell/spell.service");
var CombatStatus;
(function (CombatStatus) {
    CombatStatus[CombatStatus["RoomCleared"] = 0] = "RoomCleared";
    CombatStatus[CombatStatus["PlayerDead"] = 1] = "PlayerDead";
    CombatStatus[CombatStatus["Unresolved"] = 2] = "Unresolved";
})(CombatStatus = exports.CombatStatus || (exports.CombatStatus = {}));
var CombatService = /** @class */ (function () {
    function CombatService(http, saveManager, spellService) {
        this.http = http;
        this.saveManager = saveManager;
        this.spellService = spellService;
    }
    //combat turn
    CombatService.prototype.combatTurn = function (player, enemy, spell, combatArray) {
        this.processPlayerAttack(player, enemy, spell, combatArray);
        if (this.isRoomCleared(enemy)) {
            return CombatStatus.RoomCleared;
        }
        this.processEnemyAttack(player, enemy, combatArray);
        if (this.isPlayerDead(player)) {
            return CombatStatus.PlayerDead;
        }
        return CombatStatus.Unresolved;
    };
    //for attack since attack isn't a spell..
    CombatService.prototype.processPlayerAttack = function (player, enemy, spell, combatArray) {
        combatArray[0] = ("You used " + spell.name);
        enemy.health = enemy.health - spell.damage;
        player.mana = player.mana - spell.mana;
        combatArray[1] = ("You dealt " + spell.damage + " damage using " + spell.mana + " mana");
        console.log(JSON.stringify(combatArray.join('\n')));
    };
    CombatService.prototype.processEnemyAttack = function (player, enemy, combatArray) {
        var enemySpell = this.spellService.getRandomSpell(enemy);
        combatArray[2] = ("Enemy casted " + enemySpell.name);
        enemy.mana = enemy.mana - enemySpell.mana;
        player.health = player.health - enemySpell.damage;
        combatArray[3] = ("You lost " + enemySpell.damage + " hp");
        console.log(JSON.stringify(combatArray));
    };
    CombatService.prototype.isRoomCleared = function (enemy) {
        return enemy.health <= 0;
    };
    CombatService.prototype.isPlayerDead = function (player) {
        return player.health <= 0;
    };
    CombatService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager, spell_service_1.SpellService])
    ], CombatService);
    return CombatService;
}());
exports.CombatService = CombatService;

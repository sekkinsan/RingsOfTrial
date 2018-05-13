"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var EnemyService = /** @class */ (function () {
    function EnemyService() {
        if (!EnemyService_1.enemies) {
            EnemyService_1.enemies = require("../../Assets/enemies.json").enemies;
        }
    }
    EnemyService_1 = EnemyService;
    EnemyService.prototype.getRandomEnemy = function (room) {
        var rand = Math.floor((Math.random() * room.mobs.length));
        return this.getEnemyById(room.mobs[rand]);
    };
    EnemyService.prototype.getEnemyById = function (id) {
        for (var i = 0; i < EnemyService_1.enemies.length; i++) {
            var enemy = EnemyService_1.enemies[i];
            if (enemy.id === id) {
                return enemy;
            }
        }
        return null;
    };
    EnemyService = EnemyService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EnemyService);
    return EnemyService;
    var EnemyService_1;
}());
exports.EnemyService = EnemyService;

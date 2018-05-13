"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var enemy_service_1 = require("../../shared/enemy/enemy.service");
var room_service_1 = require("../../shared/room/room.service");
var spell_service_1 = require("../../shared/spell/spell.service");
var combat_service_1 = require("../../shared/combat/combat.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var RoomComponent = /** @class */ (function () {
    function RoomComponent(route, router, playerService, enemyService, roomService, ringService, spellService, combatService, page) {
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.enemyService = enemyService;
        this.roomService = roomService;
        this.ringService = ringService;
        this.spellService = spellService;
        this.combatService = combatService;
        this.page = page;
        this.cleared = false;
        this.combatArray = [];
        this.clearedRooms = [];
        this.player = this.playerService.getPlayer();
        this.player.spells = this.spellService.getPlayerSpells();
        this.player.health = 60;
        this.player.mana = 60;
        this.player.clearedRooms = this.player.clearedRooms || [];
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.enemy = this.enemyService.getRandomEnemy(this.room);
    }
    RoomComponent.prototype.processCombat = function (spell) {
        var result = this.combatService.combatTurn(this.player, this.enemy, spell, this.combatArray);
        switch (result) {
            case combat_service_1.CombatStatus.PlayerDead:
                this.playerService.deadPlayer();
                this.toRing(this.room.ringId);
                break;
            case combat_service_1.CombatStatus.RoomCleared:
                this.clearRoom();
                this.ringService.setRingCleared(this.player, this.room.ringId);
                this.ringService.setRing2Cleared(this.player, this.room.ringId);
                this.ringService.setRing3Cleared(this.player, this.room.ringId);
                this.ringService.setRing4Cleared(this.player, this.room.ringId);
                this.ringService.setGameCleared(this.player, this.room.ringId);
                break;
        }
    };
    RoomComponent.prototype.getEnemySpell = function () {
        return this.spellService.getRandomSpell(this.enemy);
    };
    RoomComponent.prototype.clearRoom = function () {
        if (this.enemy.health <= 0) {
            alert("YOU CLEARED THIS ROOM!");
            console.log(JSON.stringify(this.room.id));
            this.cleared = true;
            this.roomService.setRoomCleared(this.player, this.room.id);
            this.playerService.updateStats(this.player, this.player.health, this.player.mana);
            this.toRing(this.room.ringId);
            console.log(JSON.stringify(this.player.clearedRooms));
        }
    };
    RoomComponent.prototype.failRoom = function () {
        if (this.player.health <= 0) {
            this.playerService.deadPlayer();
        }
        this.cleared = false;
    };
    RoomComponent.prototype.toRing = function (ringId) {
        this.playerService.getPlayer();
        this.router.navigate(["/ring", this.room.ringId]);
    };
    RoomComponent.prototype.where = function () {
        console.log(JSON.stringify(this.ring));
        console.log(JSON.stringify(this.room));
    };
    RoomComponent = __decorate([
        core_1.Component({
            selector: "room",
            moduleId: module.id,
            templateUrl: "./room.html",
            providers: [player_service_1.PlayerService, enemy_service_1.EnemyService, room_service_1.RoomService, spell_service_1.SpellService, combat_service_1.CombatService, ring_service_1.RingService],
            styleUrls: ["./room-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, enemy_service_1.EnemyService,
            room_service_1.RoomService, ring_service_1.RingService, spell_service_1.SpellService, combat_service_1.CombatService,
            page_1.Page])
    ], RoomComponent);
    return RoomComponent;
}());
exports.RoomComponent = RoomComponent;

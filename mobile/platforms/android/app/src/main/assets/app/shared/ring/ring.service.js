"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player/player.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RingService = /** @class */ (function () {
    function RingService(playerService) {
        this.playerService = playerService;
        if (!RingService_1.rings) {
            RingService_1.rings = require("../../Assets/rings.json").rings;
        }
    }
    RingService_1 = RingService;
    RingService.prototype.setRingCleared = function (player, id) {
        if (player.clearedRooms.length == 3) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
        //testing loops?
        //work on loop function to loop through array?
        // let ring1 = [1,2,3];
        // let ring2 = [4,5,6];
        // let ring3 = [7,8,9];
        // let ring4 = [10,11,12];
        // let ring5 = [13,14,15];
        // for (let i: number = 0; i < player.clearedRooms.length; i++) {
        // }
    };
    RingService.prototype.setRing2Cleared = function (player, id) {
        if (player.clearedRooms.length == 6) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setRing3Cleared = function (player, id) {
        if (player.clearedRooms.length == 9) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setRing4Cleared = function (player, id) {
        if (player.clearedRooms.length == 12) {
            this.playerService.clearedRing(player, id);
            alert("YOU CLEARED THIS RING!");
        }
    };
    RingService.prototype.setGameCleared = function (player, id) {
        if (player.clearedRooms.length == 15) {
            this.playerService.clearedRing(player, id);
            alert("YOU ESCAPED!");
        }
    };
    RingService.prototype.getRingById = function (id) {
        for (var i = 0; i < RingService_1.rings.length; i++) {
            var ring = RingService_1.rings[i];
            if (ring.id === id) {
                return ring;
            }
        }
        return null;
    };
    RingService = RingService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], RingService);
    return RingService;
    var RingService_1;
}());
exports.RingService = RingService;

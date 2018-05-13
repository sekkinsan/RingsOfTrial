"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../player/player.service");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var RoomService = /** @class */ (function () {
    function RoomService(playerService) {
        this.playerService = playerService;
        if (!RoomService_1.rooms) {
            RoomService_1.rooms = require("../../Assets/rooms.json").rooms;
        }
    }
    RoomService_1 = RoomService;
    RoomService.prototype.setRoomCleared = function (player, id) {
        this.playerService.clearedRoom(player, id);
    };
    RoomService.prototype.getRoomById = function (id) {
        for (var i = 0; i < RoomService_1.rooms.length; i++) {
            var room = RoomService_1.rooms[i];
            if (room.id === id) {
                return room;
            }
        }
        return null;
    };
    RoomService = RoomService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [player_service_1.PlayerService])
    ], RoomService);
    return RoomService;
    var RoomService_1;
}());
exports.RoomService = RoomService;

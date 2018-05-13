"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var saver_1 = require("../../saver");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var PlayerService = /** @class */ (function () {
    function PlayerService(http, saveManager) {
        this.http = http;
        this.saveManager = saveManager;
    }
    PlayerService.prototype.register = function (player) {
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey, JSON.stringify({
            username: player.username,
            password: player.password,
            spells: player.spells,
            health: player.health,
            mana: player.mana,
            clearedRooms: player.clearedRooms,
            clearedRings: player.clearedRings
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    PlayerService.prototype.create = function (player) {
        return this.saveManager.savePlayer(player);
    };
    PlayerService.prototype.clearedRoom = function (player, roomId) {
        player.clearedRooms.push(roomId);
        this.saveManager.savePlayer(player);
    };
    PlayerService.prototype.clearedRing = function (player, ringId) {
        player.clearedRings = player.clearedRings || [];
        player.clearedRings.push(ringId);
        this.saveManager.savePlayer(player);
    };
    // getPlayerRooms(player: Player): number[] {
    //   return this.saveManager.loadClearedRooms();
    // }
    // getPlayerRings(player: Player): number[] {
    //   return this.saveManager.loadClearedRings();
    // }
    PlayerService.prototype.updateStats = function (player, health, mana) {
        player.health = player.health + 4;
        player.mana = player.mana + 2;
        return this.saveManager.savePlayer(player);
    };
    PlayerService.prototype.getPlayer = function () {
        return this.saveManager.loadPlayer();
    };
    PlayerService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    PlayerService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    PlayerService.prototype.login = function (player) {
        return this.http.post(config_1.Config.apiUrl + "user/" + config_1.Config.appKey + "/login", JSON.stringify({
            username: player.username,
            password: player.password,
            spells: player.spells,
            health: player.health,
            mana: player.mana,
            clearedRooms: player.clearedRooms,
            clearedRings: player.clearedRings
        }), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            config_1.Config.token = data._kmd.authtoken;
        })
            .catch(this.handleErrors);
    };
    PlayerService.prototype.deadPlayer = function () {
        alert("You've failed to complete your trial!");
    };
    PlayerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;

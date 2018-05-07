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
    PlayerService.prototype.clearedRing = function (player, zoneId) {
        player.clearedRings.push(zoneId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFFcEUsOENBQTZDO0FBQzdDLHFDQUEwQztBQUMxQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQixvQ0FBa0M7QUFLbEM7SUFDRSx1QkFBb0IsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFcEUsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxFQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7WUFDakMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1NBQ2xDLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUNyQzthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQVcsR0FB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QUFXO09BRHJELGFBQWEsQ0F3RnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhGRCxJQXdGQztBQXhGWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIlxyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IFJpbmcgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1JpbmdcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiXHJcblxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYXllclNlcnZpY2Uge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzYXZlTWFuYWdlcjogU2F2ZU1hbmFnZXIpIHt9XHJcblxyXG4gIHJlZ2lzdGVyKHBsYXllcjogUGxheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5LFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHBsYXllci51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGxheWVyLnBhc3N3b3JkLFxyXG4gICAgICAgIHNwZWxsczogcGxheWVyLnNwZWxscyxcclxuICAgICAgICBoZWFsdGg6IHBsYXllci5oZWFsdGgsXHJcbiAgICAgICAgbWFuYTogcGxheWVyLm1hbmEsXHJcbiAgICAgICAgY2xlYXJlZFJvb21zOiBwbGF5ZXIuY2xlYXJlZFJvb21zLFxyXG4gICAgICAgIGNsZWFyZWRSaW5nczogcGxheWVyLmNsZWFyZWRSaW5nc1xyXG4gICAgICB9KSxcclxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICApXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKHBsYXllcjogUGxheWVyKSA6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIuc2F2ZVBsYXllcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJlZFJvb20ocGxheWVyOiBQbGF5ZXIsIHJvb21JZDogbnVtYmVyKXtcclxuICAgIHBsYXllci5jbGVhcmVkUm9vbXMucHVzaChyb29tSWQpO1xyXG4gICAgdGhpcy5zYXZlTWFuYWdlci5zYXZlUGxheWVyKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBjbGVhcmVkUmluZyhwbGF5ZXI6IFBsYXllciwgem9uZUlkOiBudW1iZXIpe1xyXG4gICAgcGxheWVyLmNsZWFyZWRSaW5ncy5wdXNoKHpvbmVJZCk7XHJcbiAgICB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVQbGF5ZXIocGxheWVyKTtcclxuICB9XHJcblxyXG4gIC8vIGdldFBsYXllclJvb21zKHBsYXllcjogUGxheWVyKTogbnVtYmVyW10ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIubG9hZENsZWFyZWRSb29tcygpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gZ2V0UGxheWVyUmluZ3MocGxheWVyOiBQbGF5ZXIpOiBudW1iZXJbXSB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5sb2FkQ2xlYXJlZFJpbmdzKCk7XHJcbiAgLy8gfVxyXG5cclxuICB1cGRhdGVTdGF0cyhwbGF5ZXI6IFBsYXllciwgaGVhbHRoOiBudW1iZXIsIG1hbmE6IG51bWJlcil7XHJcbiAgICBwbGF5ZXIuaGVhbHRoID0gcGxheWVyLmhlYWx0aCArIDQ7XHJcbiAgICBwbGF5ZXIubWFuYSA9IHBsYXllci5tYW5hICsgMjtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVQbGF5ZXIocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGdldFBsYXllcigpIDogUGxheWVyIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRQbGF5ZXIoKTtcclxuICB9XHJcblxyXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgQ29uZmlnLmF1dGhIZWFkZXIpO1xyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcclxuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKHBsYXllcjogUGxheWVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBDb25maWcuYXBwS2V5ICsgXCIvbG9naW5cIixcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBwbGF5ZXIudXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBsYXllci5wYXNzd29yZCxcclxuICAgICAgICBzcGVsbHM6IHBsYXllci5zcGVsbHMsXHJcbiAgICAgICAgaGVhbHRoOiBwbGF5ZXIuaGVhbHRoLFxyXG4gICAgICAgIG1hbmE6IHBsYXllci5tYW5hLFxyXG4gICAgICAgIGNsZWFyZWRSb29tczogcGxheWVyLmNsZWFyZWRSb29tcyxcclxuICAgICAgICBjbGVhcmVkUmluZ3M6IHBsYXllci5jbGVhcmVkUmluZ3NcclxuICAgICAgfSksXHJcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgKVxyXG4gICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAuZG8oZGF0YSA9PiB7XHJcbiAgICAgIENvbmZpZy50b2tlbiA9IGRhdGEuX2ttZC5hdXRodG9rZW5cclxuICAgIH0pXHJcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xyXG4gIH1cclxuXHJcbiAgZGVhZFBsYXllcigpIHtcclxuICAgIGFsZXJ0KFwiWW91J3ZlIGZhaWxlZCB0byBjb21wbGV0ZSB5b3VyIHRyaWFsIVwiKVxyXG4gIH1cclxufSJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFFcEUsOENBQTZDO0FBQzdDLHFDQUEwQztBQUMxQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQixvQ0FBa0M7QUFLbEM7SUFDRSx1QkFBb0IsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFcEUsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxFQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07WUFDckIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1lBQ3JCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixZQUFZLEVBQUUsTUFBTSxDQUFDLFlBQVk7WUFDakMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZO1NBQ2xDLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUNyQzthQUNBLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsbUNBQVcsR0FB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Q2hELENBQUM7SUF4RlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO3lDQUVlLFdBQUksRUFBdUIsbUJBQVc7T0FEckQsYUFBYSxDQXlGekI7SUFBRCxvQkFBQztDQUFBLEFBekZELElBeUZDO0FBekZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiXHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUmluZyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUmluZ1wiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCJcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxheWVyU2VydmljZSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlcikge31cclxuXHJcbiAgcmVnaXN0ZXIocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXksXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogcGxheWVyLnVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwbGF5ZXIucGFzc3dvcmQsXHJcbiAgICAgICAgc3BlbGxzOiBwbGF5ZXIuc3BlbGxzLFxyXG4gICAgICAgIGhlYWx0aDogcGxheWVyLmhlYWx0aCxcclxuICAgICAgICBtYW5hOiBwbGF5ZXIubWFuYSxcclxuICAgICAgICBjbGVhcmVkUm9vbXM6IHBsYXllci5jbGVhcmVkUm9vbXMsXHJcbiAgICAgICAgY2xlYXJlZFJpbmdzOiBwbGF5ZXIuY2xlYXJlZFJpbmdzXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgIClcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUocGxheWVyOiBQbGF5ZXIpIDogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlUGxheWVyKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBjbGVhcmVkUm9vbShwbGF5ZXI6IFBsYXllciwgcm9vbUlkOiBudW1iZXIpe1xyXG4gICAgcGxheWVyLmNsZWFyZWRSb29tcy5wdXNoKHJvb21JZCk7XHJcbiAgICB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVQbGF5ZXIocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGNsZWFyZWRSaW5nKHBsYXllcjogUGxheWVyLCByaW5nSWQ6IG51bWJlcil7XHJcbiAgICBwbGF5ZXIuY2xlYXJlZFJpbmdzID0gcGxheWVyLmNsZWFyZWRSaW5ncyB8fCBbXTtcclxuICAgIHBsYXllci5jbGVhcmVkUmluZ3MucHVzaChyaW5nSWQpO1xyXG4gICAgdGhpcy5zYXZlTWFuYWdlci5zYXZlUGxheWVyKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRQbGF5ZXJSb29tcyhwbGF5ZXI6IFBsYXllcik6IG51bWJlcltdIHtcclxuICAvLyAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRDbGVhcmVkUm9vbXMoKTtcclxuICAvLyB9XHJcblxyXG4gIC8vIGdldFBsYXllclJpbmdzKHBsYXllcjogUGxheWVyKTogbnVtYmVyW10ge1xyXG4gIC8vICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIubG9hZENsZWFyZWRSaW5ncygpO1xyXG4gIC8vIH1cclxuXHJcbiAgdXBkYXRlU3RhdHMocGxheWVyOiBQbGF5ZXIsIGhlYWx0aDogbnVtYmVyLCBtYW5hOiBudW1iZXIpe1xyXG4gICAgcGxheWVyLmhlYWx0aCA9IHBsYXllci5oZWFsdGggKyA0O1xyXG4gICAgcGxheWVyLm1hbmEgPSBwbGF5ZXIubWFuYSArIDI7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlUGxheWVyKHBsYXllcik7XHJcbiAgfVxyXG5cclxuICBnZXRQbGF5ZXIoKSA6IFBsYXllciB7XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5sb2FkUGxheWVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDb21tb25IZWFkZXJzKCkge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIENvbmZpZy5hdXRoSGVhZGVyKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xyXG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IuanNvbigpKSk7XHJcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgfVxyXG5cclxuICBsb2dpbihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL2xvZ2luXCIsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICB1c2VybmFtZTogcGxheWVyLnVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBwbGF5ZXIucGFzc3dvcmQsXHJcbiAgICAgICAgc3BlbGxzOiBwbGF5ZXIuc3BlbGxzLFxyXG4gICAgICAgIGhlYWx0aDogcGxheWVyLmhlYWx0aCxcclxuICAgICAgICBtYW5hOiBwbGF5ZXIubWFuYSxcclxuICAgICAgICBjbGVhcmVkUm9vbXM6IHBsYXllci5jbGVhcmVkUm9vbXMsXHJcbiAgICAgICAgY2xlYXJlZFJpbmdzOiBwbGF5ZXIuY2xlYXJlZFJpbmdzXHJcbiAgICAgIH0pLFxyXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cclxuICAgIClcclxuICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgLmRvKGRhdGEgPT4ge1xyXG4gICAgICBDb25maWcudG9rZW4gPSBkYXRhLl9rbWQuYXV0aHRva2VuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGRlYWRQbGF5ZXIoKSB7XHJcbiAgICBhbGVydChcIllvdSd2ZSBmYWlsZWQgdG8gY29tcGxldGUgeW91ciB0cmlhbCFcIilcclxuICB9XHJcbn0iXX0=
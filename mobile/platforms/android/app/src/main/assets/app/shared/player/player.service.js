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
            spells: player.spells
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
            spells: player.spells
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGF5ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBb0U7QUFFcEUsOENBQTZDO0FBQzdDLHFDQUEwQztBQUMxQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUkvQixvQ0FBa0M7QUFLbEM7SUFDRSx1QkFBb0IsSUFBVSxFQUFVLFdBQXdCO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFFcEUsZ0NBQVEsR0FBUixVQUFTLE1BQWM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixlQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxFQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDO2FBQ0EsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksTUFBYyxFQUFFLE1BQWM7UUFDeEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGVBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxvQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELDZCQUFLLEdBQUwsVUFBTSxNQUFjO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsZUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLEdBQUcsZUFBTSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN0QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTixlQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFBO1FBQ3BDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFDRSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBNURVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJLEVBQXVCLG1CQUFXO09BRHJELGFBQWEsQ0E2RHpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL3NhdmVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9QbGF5ZXJcIlxyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Sb29tXCI7XHJcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIlxyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2F2ZU1hbmFnZXI6IFNhdmVNYW5hZ2VyKSB7fVxyXG5cclxuICByZWdpc3RlcihwbGF5ZXI6IFBsYXllcikge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxyXG4gICAgICBDb25maWcuYXBpVXJsICsgXCJ1c2VyL1wiICsgQ29uZmlnLmFwcEtleSxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIHVzZXJuYW1lOiBwbGF5ZXIudXNlcm5hbWUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBsYXllci5wYXNzd29yZCxcclxuICAgICAgICBzcGVsbHM6IHBsYXllci5zcGVsbHNcclxuICAgICAgfSksXHJcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxyXG4gICAgKVxyXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShwbGF5ZXI6IFBsYXllcikgOiBCb29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLnNhdmVQbGF5ZXIocGxheWVyKTtcclxuICB9XHJcblxyXG4gIGNsZWFyZWRSb29tKHBsYXllcjogUGxheWVyLCByb29tSWQ6IG51bWJlcil7XHJcbiAgICBwbGF5ZXIuY2xlYXJlZFJvb21zLnB1c2gocm9vbUlkKTtcclxuICAgIHRoaXMuc2F2ZU1hbmFnZXIuc2F2ZVBsYXllcihwbGF5ZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGxheWVyKCkgOiBQbGF5ZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuc2F2ZU1hbmFnZXIubG9hZFBsYXllcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbW9uSGVhZGVycygpIHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBDb25maWcuYXV0aEhlYWRlcik7XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcblxyXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xyXG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgbG9naW4ocGxheWVyOiBQbGF5ZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgQ29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLFxyXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IHBsYXllci51c2VybmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGxheWVyLnBhc3N3b3JkLFxyXG4gICAgICAgIHNwZWxsczogcGxheWVyLnNwZWxsc1xyXG4gICAgICB9KSxcclxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XHJcbiAgICApXHJcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC5kbyhkYXRhID0+IHtcclxuICAgICAgQ29uZmlnLnRva2VuID0gZGF0YS5fa21kLmF1dGh0b2tlblxyXG4gICAgfSlcclxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XHJcbiAgfVxyXG5cclxuICBkZWFkUGxheWVyKCkge1xyXG4gICAgYWxlcnQoXCJZb3UndmUgZmFpbGVkIHRvIGNvbXBsZXRlIHlvdXIgdHJpYWwhXCIpXHJcbiAgfVxyXG59Il19
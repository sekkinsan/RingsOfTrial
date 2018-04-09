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
    EnemyService.prototype.getBoss = function (zone) {
        return this.getEnemyById(zone.boss);
    };
    EnemyService.prototype.getEnemyHealth = function (enemy) {
        return "This enemy has " + enemy.health + " HP left.";
    };
    EnemyService = EnemyService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], EnemyService);
    return EnemyService;
    var EnemyService_1;
}());
exports.EnemyService = EnemyService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5lbXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZW15LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFTM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFLL0I7SUFHRTtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsY0FBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7cUJBUFUsWUFBWTtJQVV2QixxQ0FBYyxHQUFkLFVBQWUsSUFBVTtRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELG1DQUFZLEdBQVosVUFBYSxFQUFVO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM1RCxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLElBQVU7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELHFDQUFjLEdBQWQsVUFBZSxLQUFLO1FBQ2xCLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztJQUN4RCxDQUFDO0lBaENVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBa0N4QjtJQUFELG1CQUFDOztDQUFBLEFBbENELElBa0NDO0FBbENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbmVteVNlcnZpY2Uge1xyXG4gIHN0YXRpYyBlbmVtaWVzIDogRW5lbXlbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBpZiAoIUVuZW15U2VydmljZS5lbmVtaWVzKSB7XHJcbiAgICAgICAgRW5lbXlTZXJ2aWNlLmVuZW1pZXMgPSByZXF1aXJlKFwiLi4vLi4vQXNzZXRzL2VuZW1pZXMuanNvblwiKS5lbmVtaWVzOyAgICBcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGdldFJhbmRvbUVuZW15KHJvb206IFJvb20pIDogRW5lbXkge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpKnJvb20ubW9icy5sZW5ndGgpKTtcclxuICAgIHJldHVybiB0aGlzLmdldEVuZW15QnlJZChyb29tLm1vYnNbcmFuZF0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGdldEVuZW15QnlJZChpZDogTnVtYmVyKSA6IEVuZW15IHtcclxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBFbmVteVNlcnZpY2UuZW5lbWllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGxldCBlbmVteTogRW5lbXkgPSBFbmVteVNlcnZpY2UuZW5lbWllc1tpXTtcclxuICAgICAgICBpZiAoZW5lbXkuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlbmVteTtcclxuICAgICAgICB9IFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXRCb3NzKHpvbmU6IFpvbmUpIDogRW5lbXkge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRFbmVteUJ5SWQoem9uZS5ib3NzKTtcclxuICB9XHJcblxyXG4gIGdldEVuZW15SGVhbHRoKGVuZW15KSB7XHJcbiAgICByZXR1cm4gXCJUaGlzIGVuZW15IGhhcyBcIiArIGVuZW15LmhlYWx0aCArIFwiIEhQIGxlZnQuXCI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19
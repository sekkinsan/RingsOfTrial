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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5lbXkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVuZW15LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFRM0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFLL0I7SUFHRTtRQUNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsY0FBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDeEUsQ0FBQztJQUNILENBQUM7cUJBUFUsWUFBWTtJQVV2QixxQ0FBYyxHQUFkLFVBQWUsSUFBVTtRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUdELG1DQUFZLEdBQVosVUFBYSxFQUFVO1FBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUM1RCxJQUFJLEtBQUssR0FBVSxjQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBeEJVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTs7T0FDQSxZQUFZLENBMEJ4QjtJQUFELG1CQUFDOztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW5lbXlTZXJ2aWNlIHtcclxuICBzdGF0aWMgZW5lbWllcyA6IEVuZW15W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgaWYgKCFFbmVteVNlcnZpY2UuZW5lbWllcykge1xyXG4gICAgICAgIEVuZW15U2VydmljZS5lbmVtaWVzID0gcmVxdWlyZShcIi4uLy4uL0Fzc2V0cy9lbmVtaWVzLmpzb25cIikuZW5lbWllczsgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBnZXRSYW5kb21FbmVteShyb29tOiBSb29tKSA6IEVuZW15IHtcclxuICAgIGxldCByYW5kID0gTWF0aC5mbG9vcigoTWF0aC5yYW5kb20oKSpyb29tLm1vYnMubGVuZ3RoKSk7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRFbmVteUJ5SWQocm9vbS5tb2JzW3JhbmRdKTtcclxuICB9XHJcblxyXG5cclxuICBnZXRFbmVteUJ5SWQoaWQ6IE51bWJlcikgOiBFbmVteSB7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgRW5lbXlTZXJ2aWNlLmVuZW1pZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICBsZXQgZW5lbXk6IEVuZW15ID0gRW5lbXlTZXJ2aWNlLmVuZW1pZXNbaV07XHJcbiAgICAgICAgaWYgKGVuZW15LmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZW5lbXk7XHJcbiAgICAgICAgfSBcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==
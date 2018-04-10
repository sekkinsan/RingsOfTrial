"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var saver_1 = require("../../saver");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var SpellService = /** @class */ (function () {
    function SpellService(http, saveManager) {
        this.http = http;
        this.saveManager = saveManager;
        if (!SpellService_1.spells) {
            SpellService_1.spells = require("../../Assets/spells.json").spells;
        }
    }
    SpellService_1 = SpellService;
    SpellService.prototype.create = function (spell) {
        var spells = [];
        return this.saveManager.saveSpells(spells);
    };
    SpellService.prototype.getPlayerSpells = function () {
        return this.saveManager.loadSpells();
    };
    //need help accessing the appropriate spellset based on enemies "spells"
    SpellService.prototype.getRandomSpell = function (enemy) {
        var rand = Math.floor((Math.random() * SpellService_1.spells[enemy.spells].length)) + 1;
        return this.getSpellById(rand, enemy);
    };
    SpellService.prototype.getSpellById = function (id, enemy) {
        for (var i = 0; i < SpellService_1.spells[enemy.spells].length; i++) {
            var spell = SpellService_1.spells[enemy.spells][i];
            if (spell.id === id) {
                return spell;
            }
        }
        return null;
    };
    SpellService = SpellService_1 = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, saver_1.SaveManager])
    ], SpellService);
    return SpellService;
    var SpellService_1;
}());
exports.SpellService = SpellService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQW9FO0FBR3BFLHFDQUEwQztBQU0xQyxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQjtJQUdFLHNCQUFvQixJQUFVLEVBQVUsV0FBd0I7UUFBNUMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzlELEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdkIsY0FBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsQ0FBQztJQUVILENBQUM7cUJBUlUsWUFBWTtJQVV2Qiw2QkFBTSxHQUFOLFVBQU8sS0FBWTtRQUNqQixJQUFJLE1BQU0sR0FBUSxFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVDLHdFQUF3RTtJQUMxRSxxQ0FBYyxHQUFkLFVBQWUsS0FBWTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGNBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RGLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV4QyxDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEVBQVUsRUFBRSxLQUFZO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDekUsSUFBSSxLQUFLLEdBQVUsY0FBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWxDVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSWUsV0FBSSxFQUF1QixtQkFBVztPQUhyRCxZQUFZLENBcUN4QjtJQUFELG1CQUFDOztDQUFBLEFBckNELElBcUNDO0FBckNZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgWm9uZSB9IGZyb20gXCIuLi8uLi9tb2RlbHMvWm9uZVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuLi8uLi9tb2RlbHMvc3BlbGxcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BlbGxTZXJ2aWNlIHtcclxuICBzdGF0aWMgc3BlbGxzIDogU3BlbGxbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNhdmVNYW5hZ2VyOiBTYXZlTWFuYWdlcikge1xyXG4gICAgaWYgKCFTcGVsbFNlcnZpY2Uuc3BlbGxzKSB7XHJcbiAgICAgICAgU3BlbGxTZXJ2aWNlLnNwZWxscyA9IHJlcXVpcmUoXCIuLi8uLi9Bc3NldHMvc3BlbGxzLmpzb25cIikuc3BlbGxzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICBjcmVhdGUoc3BlbGw6IFNwZWxsKSA6IEJvb2xlYW4ge1xyXG4gICAgbGV0IHNwZWxsczogYW55ID0gW107XHJcbiAgICByZXR1cm4gdGhpcy5zYXZlTWFuYWdlci5zYXZlU3BlbGxzKHNwZWxscyk7XHJcbiAgfVxyXG5cclxuICBnZXRQbGF5ZXJTcGVsbHMoKSA6IFNwZWxsIHtcclxuICAgIHJldHVybiB0aGlzLnNhdmVNYW5hZ2VyLmxvYWRTcGVsbHMoKTtcclxuICB9XHJcblxyXG4gICAgLy9uZWVkIGhlbHAgYWNjZXNzaW5nIHRoZSBhcHByb3ByaWF0ZSBzcGVsbHNldCBiYXNlZCBvbiBlbmVtaWVzIFwic3BlbGxzXCJcclxuICBnZXRSYW5kb21TcGVsbChlbmVteTogRW5lbXkpIDogU3BlbGwge1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aCkpICsgMTtcclxuICAgIHJldHVybiB0aGlzLmdldFNwZWxsQnlJZChyYW5kLCBlbmVteSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGdldFNwZWxsQnlJZChpZDogTnVtYmVyLCBlbmVteTogRW5lbXkpIDogU3BlbGx7XHJcbiAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgU3BlbGxTZXJ2aWNlLnNwZWxsc1tlbmVteS5zcGVsbHNdLmxlbmd0aDsgaSsrKXtcclxuICAgICAgbGV0IHNwZWxsOiBTcGVsbCA9IFNwZWxsU2VydmljZS5zcGVsbHNbZW5lbXkuc3BlbGxzXVtpXTtcclxuICAgICAgaWYgKHNwZWxsLmlkID09PSBpZCkge1xyXG4gICAgICAgIHJldHVybiBzcGVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBcclxufSJdfQ==
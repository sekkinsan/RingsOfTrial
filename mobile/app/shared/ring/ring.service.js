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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSzNDLDJEQUF5RDtBQU16RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUsvQjtJQUdFLHFCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLGFBQVcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pFLENBQUM7SUFFSCxDQUFDO29CQVJVLFdBQVc7SUFVdEIsb0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxFQUFVO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEVBQVU7UUFDcEIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZELElBQUksSUFBSSxHQUFTLGFBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUF6QlUsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUl3Qiw4QkFBYTtPQUhyQyxXQUFXLENBMkJ2QjtJQUFELGtCQUFDOztDQUFBLEFBM0JELElBMkJDO0FBM0JZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vc2F2ZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyU2VydmljZSB9IGZyb20gXCIuLi9wbGF5ZXIvcGxheWVyLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRW5lbXkgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL0VuZW15XCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1Jvb21cIjtcclxuaW1wb3J0IHsgUmluZyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvUmluZ1wiO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBSaW5nU2VydmljZSB7XHJcbiAgc3RhdGljIHJpbmdzIDogUmluZ1tdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXllclNlcnZpY2U6IFBsYXllclNlcnZpY2UpIHtcclxuICAgIGlmICghUmluZ1NlcnZpY2UucmluZ3MpIHtcclxuICAgICAgICBSaW5nU2VydmljZS5yaW5ncyA9IHJlcXVpcmUoXCIuLi8uLi9Bc3NldHMvcmluZ3MuanNvblwiKS5yaW5ncztcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgc2V0UmluZ0NsZWFyZWQocGxheWVyOiBQbGF5ZXIsIGlkOiBudW1iZXIpe1xyXG4gICAgaWYgKHBsYXllci5jbGVhcmVkUm9vbXMubGVuZ3RoID09IDMpIHtcclxuICAgIHRoaXMucGxheWVyU2VydmljZS5jbGVhcmVkUmluZyhwbGF5ZXIsIGlkKTtcclxuICAgIGFsZXJ0KFwiWU9VIENMRUFSRUQgVEhJUyBSSU5HIVwiKTtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBnZXRSaW5nQnlJZChpZDogTnVtYmVyKSA6IFJpbmcge1xyXG4gICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgUmluZ1NlcnZpY2UucmluZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmluZzogUmluZyA9IFJpbmdTZXJ2aWNlLnJpbmdzW2ldO1xyXG4gICAgICAgIGlmIChyaW5nLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgXHJcbn0iXX0=
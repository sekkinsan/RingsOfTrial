"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var player_service_1 = require("../../shared/player/player.service");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var ring_service_1 = require("../../shared/ring/ring.service");
var RingComponent = /** @class */ (function () {
    function RingComponent(route, router, playerService, ringService, page) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.playerService = playerService;
        this.ringService = ringService;
        this.page = page;
        this.clearedRooms = [];
        this.isCleared = function (roomId) { return _this.player.clearedRooms && _this.player.clearedRooms.indexOf(roomId) >= 0; };
        this.player = this.playerService.getPlayer();
        this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
        this.player.clearedRings = this.player.clearedRings || [];
    }
    RingComponent.prototype.submit = function (roomId) {
        if (!this.isCleared(roomId)) {
            this.enter(roomId);
        }
        else {
            this.warn();
        }
    };
    RingComponent.prototype.toMap = function () {
        this.playerService.getPlayer();
        this.router.navigate(["/map"]);
    };
    RingComponent.prototype.enter = function (roomId) {
        this.playerService.getPlayer();
        this.router.navigate(["/room", roomId]);
    };
    RingComponent.prototype.warn = function () {
        alert("You've already cleared this!");
    };
    RingComponent.prototype.check = function () {
        console.log(JSON.stringify(this.player));
        console.log(JSON.stringify(this.ring));
    };
    RingComponent = __decorate([
        core_1.Component({
            selector: "ring",
            moduleId: module.id,
            templateUrl: "./ring.html",
            providers: [player_service_1.PlayerService, ring_service_1.RingService],
            styleUrls: ["./ring-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, player_service_1.PlayerService, ring_service_1.RingService, page_1.Page])
    ], RingComponent);
    return RingComponent;
}());
exports.RingComponent = RingComponent;

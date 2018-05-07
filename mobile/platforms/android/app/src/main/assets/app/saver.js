"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./models/Item");
var core_1 = require("@angular/core");
var application_settings_1 = require("application-settings");
var SaveManager = /** @class */ (function () {
    function SaveManager() {
    }
    SaveManager.prototype.savePlayer = function (player) {
        var str = JSON.stringify(player);
        application_settings_1.setString("player", str);
        return true;
    };
    SaveManager.prototype.loadPlayer = function () {
        //get string from save  
        var str = application_settings_1.getString("player");
        return JSON.parse(str);
    };
    SaveManager.prototype.loadItems = function () {
        var items = [];
        var itemJson = require('./Assets/items.json');
        for (var i = 0; i < itemJson.length; i++) {
            items.push(new Item_1.Item(itemJson[i].name, i));
        }
        console.log(JSON.stringify(items));
        return items;
    };
    SaveManager.prototype.saveSpells = function (spell) {
        var str = JSON.stringify(spell);
        application_settings_1.setString("spell", str);
        console.log(str);
        return true;
    };
    SaveManager.prototype.loadSpells = function () {
        var str = application_settings_1.getString("spell");
        return JSON.parse(str);
    };
    SaveManager.prototype.saveClearedRooms = function (room) {
        var str = JSON.stringify(room);
        application_settings_1.setString("room", str);
        console.log(str);
        return true;
    };
    SaveManager.prototype.loadClearedRooms = function () {
        var str = application_settings_1.getString("room");
        return JSON.parse(str);
    };
    SaveManager.prototype.saveClearedRings = function (ring) {
        var str = JSON.stringify(ring);
        application_settings_1.setString("ring", str);
        console.log(str);
        return true;
    };
    SaveManager.prototype.loadClearedRings = function () {
        var str = application_settings_1.getString("ring");
        return JSON.parse(str);
    };
    SaveManager = __decorate([
        core_1.Injectable()
    ], SaveManager);
    return SaveManager;
}());
exports.SaveManager = SaveManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxQztBQUlyQyxzQ0FBMkM7QUFFM0MsNkRBVThCO0FBRzlCO0lBQUE7SUE0REEsQ0FBQztJQTNERyxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLGdDQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLGdDQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksR0FBRyxHQUFHLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQ3ZCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsZ0NBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLEdBQUcsR0FBRyxnQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzFCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsSUFBVTtRQUN2QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLGdDQUFTLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0NBQWdCLEdBQWhCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsZ0NBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBM0RRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0E0RHZCO0lBQUQsa0JBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL21vZGVscy9JdGVtXCI7XHJcbmltcG9ydCB7IFNwZWxsIH0gZnJvbSBcIi4vbW9kZWxzL3NwZWxsXCI7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi9tb2RlbHMvUm9vbVwiO1xyXG5pbXBvcnQgeyBSaW5nIH0gZnJvbSBcIi4vbW9kZWxzL1JpbmdcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgc2F2ZVBsYXllcihwbGF5ZXI6IFBsYXllcik6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXIpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInBsYXllclwiLCBzdHIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQbGF5ZXIoKTogUGxheWVyIHtcclxuICAgICAgICAvL2dldCBzdHJpbmcgZnJvbSBzYXZlICBcclxuICAgICAgICBsZXQgc3RyID0gZ2V0U3RyaW5nKFwicGxheWVyXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEl0ZW1zKCk6IEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGl0ZW1Kc29uID0gcmVxdWlyZSgnLi9Bc3NldHMvaXRlbXMuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1Kc29uLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgSXRlbShpdGVtSnNvbltpXS5uYW1lLCBpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3BlbGxzKHNwZWxsOiBTcGVsbFtdKTogQm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHNwZWxsKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJzcGVsbFwiLCBzdHIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFNwZWxscygpOiBTcGVsbFtdIHtcclxuICAgICAgICBsZXQgc3RyID0gZ2V0U3RyaW5nKFwic3BlbGxcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQ2xlYXJlZFJvb21zKHJvb206IFJvb20pOiBCb29sZWFuIHtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkocm9vbSk7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwicm9vbVwiLCBzdHIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZENsZWFyZWRSb29tcygpOiBudW1iZXJbXSB7XHJcbiAgICAgICAgbGV0IHN0ciA9IGdldFN0cmluZyhcInJvb21cIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVDbGVhcmVkUmluZ3MocmluZzogUmluZyk6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShyaW5nKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJyaW5nXCIsIHN0cik7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDbGVhcmVkUmluZ3MoKTogbnVtYmVyW10ge1xyXG4gICAgICAgIGxldCBzdHIgPSBnZXRTdHJpbmcoXCJyaW5nXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcbn0iXX0=
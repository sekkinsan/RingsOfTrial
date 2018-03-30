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
    SaveManager = __decorate([
        core_1.Injectable()
    ], SaveManager);
    return SaveManager;
}());
exports.SaveManager = SaveManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxQztBQUNyQyxzQ0FBMkM7QUFFM0MsNkRBVThCO0FBRzlCO0lBQUE7SUF3QkEsQ0FBQztJQXZCRyxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLGdDQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUF2QlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO09BQ0EsV0FBVyxDQXdCdkI7SUFBRCxrQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vbW9kZWxzL1BsYXllclwiO1xyXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vbW9kZWxzL0l0ZW1cIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgc2F2ZVBsYXllcihwbGF5ZXI6IFBsYXllcik6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXIpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInBsYXllclwiLCBzdHIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQbGF5ZXIoKTogUGxheWVyIHtcclxuICAgICAgICAvL2dldCBzdHJpbmcgZnJvbSBzYXZlICBcclxuICAgICAgICBsZXQgc3RyID0gZ2V0U3RyaW5nKFwicGxheWVyXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEl0ZW1zKCk6IEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGl0ZW1Kc29uID0gcmVxdWlyZSgnLi9Bc3NldHMvaXRlbXMuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1Kc29uLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgSXRlbShpdGVtSnNvbltpXS5uYW1lLCBpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufSJdfQ==
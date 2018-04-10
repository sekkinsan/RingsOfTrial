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
        var spells = [];
        var str = JSON.stringify(spells);
        application_settings_1.setString("spells", str);
        return true;
    };
    SaveManager.prototype.loadSpells = function () {
        var spells = [];
        var str = application_settings_1.getString("spells");
        return JSON.parse(str);
    };
    SaveManager = __decorate([
        core_1.Injectable()
    ], SaveManager);
    return SaveManager;
}());
exports.SaveManager = SaveManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxQztBQUVyQyxzQ0FBMkM7QUFFM0MsNkRBVThCO0FBRzlCO0lBQUE7SUFxQ0EsQ0FBQztJQXBDRyxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLGdDQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBWTtRQUNuQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxnQ0FBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQXBDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBcUN2QjtJQUFELGtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9tb2RlbHMvSXRlbVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRCb29sZWFuLFxyXG4gICAgc2V0Qm9vbGVhbixcclxuICAgIGdldE51bWJlcixcclxuICAgIHNldE51bWJlcixcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZyxcclxuICAgIGhhc0tleSxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZlTWFuYWdlciB7XHJcbiAgICBzYXZlUGxheWVyKHBsYXllcjogUGxheWVyKTogQm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHBsYXllcik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwicGxheWVyXCIsIHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpOiBQbGF5ZXIge1xyXG4gICAgICAgIC8vZ2V0IHN0cmluZyBmcm9tIHNhdmUgIFxyXG4gICAgICAgIGxldCBzdHIgPSBnZXRTdHJpbmcoXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKTogSXRlbVtdIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgICBsZXQgaXRlbUpzb24gPSByZXF1aXJlKCcuL0Fzc2V0cy9pdGVtcy5qc29uJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUpzb24ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5ldyBJdGVtKGl0ZW1Kc29uW2ldLm5hbWUsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTcGVsbHMoc3BlbGw6IFNwZWxsKTogQm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHNwZWxscyA9IFtdO1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShzcGVsbHMpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInNwZWxsc1wiLCBzdHIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRTcGVsbHMoKTogU3BlbGwge1xyXG4gICAgICAgIGxldCBzcGVsbHMgPSBbXTtcclxuICAgICAgICBsZXQgc3RyID0gZ2V0U3RyaW5nKFwic3BlbGxzXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcbn0iXX0=
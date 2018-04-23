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
        // let spells = [];
        // for (let i = 0; i < spells.length; i++){
        //     spells.push(spells[i].name, i);
        // }
        // console.log(JSON.stringify(spells));
        // return spells
    };
    SaveManager = __decorate([
        core_1.Injectable()
    ], SaveManager);
    return SaveManager;
}());
exports.SaveManager = SaveManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxQztBQUVyQyxzQ0FBMkM7QUFFM0MsNkRBVThCO0FBRzlCO0lBQUE7SUE0Q0EsQ0FBQztJQTNDRyxnQ0FBVSxHQUFWLFVBQVcsTUFBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLGdDQUFTLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxHQUFHLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsS0FBYztRQUNyQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLGdDQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLElBQUksR0FBRyxHQUFHLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkIsbUJBQW1CO1FBRW5CLDJDQUEyQztRQUMzQyxzQ0FBc0M7UUFDdEMsSUFBSTtRQUVKLHVDQUF1QztRQUN2QyxnQkFBZ0I7SUFDcEIsQ0FBQztJQTNDUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7T0FDQSxXQUFXLENBNEN2QjtJQUFELGtCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7QUE1Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9tb2RlbHMvUGxheWVyXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9tb2RlbHMvSXRlbVwiO1xyXG5pbXBvcnQgeyBTcGVsbCB9IGZyb20gXCIuL21vZGVscy9zcGVsbFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRCb29sZWFuLFxyXG4gICAgc2V0Qm9vbGVhbixcclxuICAgIGdldE51bWJlcixcclxuICAgIHNldE51bWJlcixcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZyxcclxuICAgIGhhc0tleSxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZlTWFuYWdlciB7XHJcbiAgICBzYXZlUGxheWVyKHBsYXllcjogUGxheWVyKTogQm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KHBsYXllcik7XHJcbiAgICAgICAgc2V0U3RyaW5nKFwicGxheWVyXCIsIHN0cik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBsYXllcigpOiBQbGF5ZXIge1xyXG4gICAgICAgIC8vZ2V0IHN0cmluZyBmcm9tIHNhdmUgIFxyXG4gICAgICAgIGxldCBzdHIgPSBnZXRTdHJpbmcoXCJwbGF5ZXJcIik7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkSXRlbXMoKTogSXRlbVtdIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBbXTtcclxuICAgICAgICBsZXQgaXRlbUpzb24gPSByZXF1aXJlKCcuL0Fzc2V0cy9pdGVtcy5qc29uJyk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbUpzb24ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5ldyBJdGVtKGl0ZW1Kc29uW2ldLm5hbWUsIGkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGl0ZW1zKSk7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTcGVsbHMoc3BlbGw6IFNwZWxsW10pOiBCb29sZWFuIHtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkoc3BlbGwpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInNwZWxsXCIsIHN0cik7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkU3BlbGxzKCk6IFNwZWxsW10ge1xyXG4gICAgICAgIGxldCBzdHIgPSBnZXRTdHJpbmcoXCJzcGVsbFwiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgICAgIC8vIGxldCBzcGVsbHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBzcGVsbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBzcGVsbHMucHVzaChzcGVsbHNbaV0ubmFtZSwgaSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShzcGVsbHMpKTtcclxuICAgICAgICAvLyByZXR1cm4gc3BlbGxzXHJcbiAgICB9XHJcbn0iXX0=
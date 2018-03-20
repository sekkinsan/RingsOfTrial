"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("../../shared/Item");
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
    return SaveManager;
}());
exports.SaveManager = SaveManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDBDQUF5QztBQUV6Qyw2REFVOEI7QUFFOUI7SUFBQTtJQXdCQSxDQUFDO0lBdkJHLGdDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsZ0NBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLEdBQUcsR0FBRyxnQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuLi8uLi9zaGFyZWQvUGxheWVyXCI7XHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL0l0ZW1cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBnZXRCb29sZWFuLFxyXG4gICAgc2V0Qm9vbGVhbixcclxuICAgIGdldE51bWJlcixcclxuICAgIHNldE51bWJlcixcclxuICAgIGdldFN0cmluZyxcclxuICAgIHNldFN0cmluZyxcclxuICAgIGhhc0tleSxcclxuICAgIHJlbW92ZSxcclxuICAgIGNsZWFyXHJcbn0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgc2F2ZVBsYXllcihwbGF5ZXI6IFBsYXllcik6IEJvb2xlYW4ge1xyXG4gICAgICAgIGxldCBzdHIgPSBKU09OLnN0cmluZ2lmeShwbGF5ZXIpO1xyXG4gICAgICAgIHNldFN0cmluZyhcInBsYXllclwiLCBzdHIpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQbGF5ZXIoKTogUGxheWVyIHtcclxuICAgICAgICAvL2dldCBzdHJpbmcgZnJvbSBzYXZlICBcclxuICAgICAgICBsZXQgc3RyID0gZ2V0U3RyaW5nKFwicGxheWVyXCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEl0ZW1zKCk6IEl0ZW1bXSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XHJcbiAgICAgICAgbGV0IGl0ZW1Kc29uID0gcmVxdWlyZSgnLi9Bc3NldHMvaXRlbXMuanNvbicpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1Kc29uLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaXRlbXMucHVzaChuZXcgSXRlbShpdGVtSnNvbltpXS5uYW1lLCBpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShpdGVtcykpO1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxufSJdfQ==
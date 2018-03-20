"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./models/Item");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzYXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFxQztBQUVyQyw2REFVOEI7QUFFOUI7SUFBQTtJQXdCQSxDQUFDO0lBdkJHLGdDQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3JCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsZ0NBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLEdBQUcsR0FBRyxnQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFOUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDLENBQUM7WUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL21vZGVscy9QbGF5ZXJcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL21vZGVscy9JdGVtXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgZ2V0Qm9vbGVhbixcclxuICAgIHNldEJvb2xlYW4sXHJcbiAgICBnZXROdW1iZXIsXHJcbiAgICBzZXROdW1iZXIsXHJcbiAgICBnZXRTdHJpbmcsXHJcbiAgICBzZXRTdHJpbmcsXHJcbiAgICBoYXNLZXksXHJcbiAgICByZW1vdmUsXHJcbiAgICBjbGVhclxyXG59IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVNYW5hZ2VyIHtcclxuICAgIHNhdmVQbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiBCb29sZWFuIHtcclxuICAgICAgICBsZXQgc3RyID0gSlNPTi5zdHJpbmdpZnkocGxheWVyKTtcclxuICAgICAgICBzZXRTdHJpbmcoXCJwbGF5ZXJcIiwgc3RyKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkUGxheWVyKCk6IFBsYXllciB7XHJcbiAgICAgICAgLy9nZXQgc3RyaW5nIGZyb20gc2F2ZSAgXHJcbiAgICAgICAgbGV0IHN0ciA9IGdldFN0cmluZyhcInBsYXllclwiKTtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRJdGVtcygpOiBJdGVtW10ge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgICAgIGxldCBpdGVtSnNvbiA9IHJlcXVpcmUoJy4vQXNzZXRzL2l0ZW1zLmpzb24nKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtSnNvbi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobmV3IEl0ZW0oaXRlbUpzb25baV0ubmFtZSwgaSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoaXRlbXMpKTtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcbn0iXX0=
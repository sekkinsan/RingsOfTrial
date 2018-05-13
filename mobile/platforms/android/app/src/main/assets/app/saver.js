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
    SaveManager = __decorate([
        core_1.Injectable()
    ], SaveManager);
    return SaveManager;
}());
exports.SaveManager = SaveManager;

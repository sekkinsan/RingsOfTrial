"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var Item_1 = require("../../models/Item");
var InventoryService = /** @class */ (function () {
    function InventoryService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
    }
    InventoryService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var inventoryList = [];
            data.forEach(function (grocery) {
                inventoryList.push(new Item_1.Item(item._id, item.name));
            });
            return inventoryList;
        })
            .catch(this.handleErrors);
    };
    InventoryService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    InventoryService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    InventoryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], InventoryService);
    return InventoryService;
}());
exports.InventoryService = InventoryService;

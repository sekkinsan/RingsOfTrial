import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import { Config } from "../config";
import { Item } from "../../models/Item";

@Injectable()
export class InventoryService {
  baseUrl = Config.apiUrl + "appdata/" + Config.appKey + "/Groceries";

  constructor(private http: Http) {}

  load() {
    // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
    let params = new URLSearchParams();
    params.append("sort", "{\"_kmd.lmt\": 1}");

    return this.http.get(this.baseUrl, {
      headers: this.getCommonHeaders(),
      params: params
    })
    .map(res => res.json())
    .map(data => {
      let inventoryList = [];
      data.forEach((grocery) => {
        inventoryList.push(new Item(item._id, item.name));
      });
      return inventoryList;
    })
    .catch(this.handleErrors);
  }

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Kinvey " + Config.token);
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
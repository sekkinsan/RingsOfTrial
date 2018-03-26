import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Player } from "../../models/Player"
import { Config } from "../config"



@Injectable()
export class PlayerService {
  constructor(private http: Http) {}

  register(player: Player) {
    return this.http.post(
      Config.apiUrl + "user/" + Config.appKey,
      JSON.stringify({
        username: player.username,
        password: player.password
      }),
      { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }

  getCommonHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", Config.authHeader);
    return headers;
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

  login(player: Player) {
    return this.http.post(
      Config.apiUrl + "user/" + Config.appKey + "/login",
      JSON.stringify({
        username: player.username,
        password: player.password
      }),
      { headers: this.getCommonHeaders() }
    )
    .map(response => response.json())
    .do(data => {
      Config.token = data._kmd.authtoken
    })
    .catch(this.handleErrors);
  }
}
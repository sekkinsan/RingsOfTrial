import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Player } from "../../models/Player"
import { Room } from "../../models/Room";
import { Ring } from "../../models/Ring";
import { Config } from "../config"



@Injectable()
export class PlayerService {
  constructor(private http: Http, private saveManager: SaveManager) {}

  register(player: Player) {
    return this.http.post(
      Config.apiUrl + "user/" + Config.appKey,
      JSON.stringify({
        username: player.username,
        password: player.password,
        spells: player.spells,
        health: player.health,
        mana: player.mana,
        clearedRooms: player.clearedRooms,
        clearedRings: player.clearedRings
      }),
      { headers: this.getCommonHeaders() }
    )
    .catch(this.handleErrors);
  }

  create(player: Player) : Boolean {
    return this.saveManager.savePlayer(player);
  }

  clearedRoom(player: Player, roomId: number){
    player.clearedRooms.push(roomId);
    this.saveManager.savePlayer(player);
  }

  clearedRing(player: Player, ringId: number){
    player.clearedRings = player.clearedRings || [];
    player.clearedRings.push(ringId);
    this.saveManager.savePlayer(player);
  }

  // getPlayerRooms(player: Player): number[] {
  //   return this.saveManager.loadClearedRooms();
  // }

  // getPlayerRings(player: Player): number[] {
  //   return this.saveManager.loadClearedRings();
  // }

  updateStats(player: Player, health: number, mana: number){
    player.health = player.health + 4;
    player.mana = player.mana + 2;
    return this.saveManager.savePlayer(player);
  }

  getPlayer() : Player {
    return this.saveManager.loadPlayer();
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
        password: player.password,
        spells: player.spells,
        health: player.health,
        mana: player.mana,
        clearedRooms: player.clearedRooms,
        clearedRings: player.clearedRings
      }),
      { headers: this.getCommonHeaders() }
    )
    .map(response => response.json())
    .do(data => {
      Config.token = data._kmd.authtoken
    })
    .catch(this.handleErrors);
  }

  deadPlayer() {
    alert("You've failed to complete your trial!")
  }
}
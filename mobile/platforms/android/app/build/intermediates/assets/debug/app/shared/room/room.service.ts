import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import { PlayerService } from "../player/player.service";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Ring } from "../../models/Ring";
import { Player } from "../../models/Player";
import { Config } from "../config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";



@Injectable()
export class RoomService {
  static rooms : Room[];

  constructor(private playerService: PlayerService) {
    if (!RoomService.rooms) {
        RoomService.rooms = require("../../Assets/rooms.json").rooms;
    }
    
  }

  setRoomCleared(player: Player, id: number){
    this.playerService.clearedRoom(player, id);
  }

  getRoomById(id: Number) : Room {
    for(let i: number = 0; i < RoomService.rooms.length; i++) {
        let room: Room = RoomService.rooms[i];
        if (room.id === id) {
            return room;
        }
    }
    return null;
  }
  
}
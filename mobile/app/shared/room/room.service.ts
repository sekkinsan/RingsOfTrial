import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Zone } from "../../models/Zone";
import { Config } from "../config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";



@Injectable()
export class RoomService {
  static rooms : Room[];

  constructor() {
    if (!RoomService.rooms) {
        RoomService.rooms = require("../../Assets/rooms.json").rooms;
    }
    
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
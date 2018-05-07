import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import { PlayerService } from "../player/player.service";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Ring } from "../../models/Ring";
import { Zone } from "../../models/Zone";
import { Player } from "../../models/Player";
import { Config } from "../config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";



@Injectable()
export class RingService {
  static rings : Ring[];

  constructor(private playerService: PlayerService) {
    if (!RingService.rings) {
        RingService.rings = require("../../Assets/rings.json").rings;
    }
    
  }

  setRingCleared(player: Player, id: number){
    if (this.playerService.clearedRoom.length == 3) {
    this.playerService.clearedRing(player, id);
    alert("YOU CLEARED THIS RING!");
    }
  }

  getRingById(id: Number) : Ring {
    for(let i: number = 0; i < RingService.rings.length; i++) {
        let ring: Ring = RingService.rings[i];
        if (ring.id === id) {
            return ring;
        }
    }
    return null;
  }
  
}
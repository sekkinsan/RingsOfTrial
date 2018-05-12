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
export class RingService {
  static rings : Ring[];

  constructor(private playerService: PlayerService) {
    if (!RingService.rings) {
        RingService.rings = require("../../Assets/rings.json").rings;
    }
    
  }

  setRingCleared(player: Player, id: number){
    if ((player.clearedRooms.indexOf(1) > -1) && (player.clearedRooms.indexOf(2)) > -1 && (player.clearedRooms.indexOf(3) > -1)) {
    this.playerService.clearedRing(player, id);
      if ((player.clearedRooms.indexOf(4) > -1) && (player.clearedRooms.indexOf(5)) > -1 && (player.clearedRooms.indexOf(6) > -1)) {
        this.playerService.clearedRing(player, id);
          if ((player.clearedRooms.indexOf(7) > -1) && (player.clearedRooms.indexOf(8)) > -1 && (player.clearedRooms.indexOf(9) > -1)) {
            this.playerService.clearedRing(player, id);
              if ((player.clearedRooms.indexOf(10) > -1) && (player.clearedRooms.indexOf(11)) > -1 && (player.clearedRooms.indexOf(12) > -1)) {
                this.playerService.clearedRing(player, id);
                  if ((player.clearedRooms.indexOf(13) > -1) && (player.clearedRooms.indexOf(14)) > -1 && (player.clearedRooms.indexOf(15) > -1)) {
                    this.playerService.clearedRing(player, id);
                  } else null
              } else null
          } else null
      } else null

    alert("YOU CLEARED THIS RING!");
    //clear out clearedRooms array each time you clear a ring
    
    } 
    //work on loop function to loop through array?
    // let ring1 = [1,2,3];
    // let ring2 = [4,5,6];
    // let ring3 = [7,8,9];
    // let ring4 = [10,11,12];
    // let ring5 = [13,14,15];
    // for (let i: number = 0; i < player.clearedRooms.length; i++) {

    // }
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
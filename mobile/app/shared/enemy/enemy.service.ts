import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Zone } from "../../models/Zone";
import { Config } from "../config";



@Injectable()
export class EnemyService {
  static enemies : Enemy[];

  constructor() {
    if (!EnemyService.enemies) {
        EnemyService.enemies = require("../../Assets/enemies.json");
    }
  }


  getRandomEnemy(room: Room) : Enemy {
    let rand = Math.floor((Math.random()*room.mobs.length));
    return this.getEnemyById(room.mobs[rand]);
  }

  getEnemyById(id: Number) : Enemy {
    EnemyService.enemies.forEach(enemy => {
        if (enemy.id === id) {
            return enemy;
        } 
    });
    return null;
  }

  getBoss(zone: Zone) : Enemy {
      return this.getEnemyById(zone.boss);
  }

  
}
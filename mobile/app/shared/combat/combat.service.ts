import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import { Player } from "../../models/Player";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Zone } from "../../models/Zone";
import { Spell } from "../../models/spell";
import { Config } from "../config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { RoomComponent } from "../../pages/room/room.component";
import { PlayerService } from "../player/player.service";
import { EnemyService } from "../enemy/enemy.service";
import { RoomService } from "../room/room.service";
import { SpellService } from "../spell/spell.service";



@Injectable()
export class CombatService {

  player: Player;
  combatArray = [];
  enemy: Enemy;

  constructor(private http: Http, private roomComponent: RoomComponent, private playerService: PlayerService, private enemyService: EnemyService, private spellService: SpellService) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells();

    
  }

  damageDealt(){

  }

  damageReceived(){
    
  }


  clearRoom(){
      if (this.roomComponent.enemy.health <= 0) {
        alert("YOU CLEARED THIS ROOM!");
      } 
      this.roomComponent.cleared = true;
  }

  failRoom(){
    if (this.roomComponent.player.health <= 0) {
      alert("YOU FAILED THIS ROOM!")
    }
    this.roomComponent.cleared = false;
  }
  
}
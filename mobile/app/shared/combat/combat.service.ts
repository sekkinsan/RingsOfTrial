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
import { SpellService } from "../spell/spell.service";


export enum CombatStatus{
    RoomCleared = 0,
    PlayerDead = 1,
    Unresolved = 2
}

@Injectable()
export class CombatService {


  constructor(private http: Http, private saveManager: SaveManager, private spellService: SpellService) {

  }

  //combat turn
  combatTurn(player: Player, enemy: Enemy, spell: Spell, combatArray: string[]): CombatStatus{
    this.processPlayerAttack(player, enemy, spell, combatArray);
    if (this.isRoomCleared(enemy)) {
      return CombatStatus.RoomCleared;
    } 

    this.processEnemyAttack(player, enemy, combatArray);
    if (this.isPlayerDead(player)) {
      return CombatStatus.PlayerDead;
    }

    return CombatStatus.Unresolved;
  }

  //for attack since attack isn't a spell..
  processPlayerAttack(player: Player, enemy: Enemy, spell: Spell, combatArray: string[]){
    combatArray.push(`You are about to use ${spell.name}`);
    enemy.health = enemy.health - spell.damage;
    player.mana = player.mana - spell.mana;
    combatArray.push(`You dealt ${spell.damage} damage using ${spell.mana} mana`);
    console.log(JSON.stringify(combatArray));
  }

  processEnemyAttack(player: Player, enemy: Enemy, combatArray: string[]){
    let enemySpell:Spell = this.spellService.getRandomSpell(enemy);
    combatArray.push(`ENEMY CAST ${enemySpell.name}`);
    enemy.mana = enemy.mana - enemySpell.mana;
    player.health = player.health - enemySpell.damage;
    combatArray.push(`You lost ${enemySpell.damage} hp`);
    console.log(JSON.stringify(combatArray));
  }


  isRoomCleared(enemy: Enemy): Boolean{
    return enemy.health <= 0;
  }

  isPlayerDead(player: Player): Boolean{
    return player.health <= 0;
  }
  
}
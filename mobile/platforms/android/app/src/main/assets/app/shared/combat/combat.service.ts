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



@Injectable()
export class CombatService {


  constructor(private http: Http, private roomComponent: RoomComponent, private saveManager: SaveManager;) {
    let combatArray = this.roomComponent.combatArray;
    let player = this.roomComponent.player;
    let enemy = this.roomComponent.enemy;

    
  }
  //for attack since attack isn't a spell..
  damageDealt(){
    if (this.roomComponent.player.mana >= 0) {
      this.roomComponent.combatArray.push(`You are about to use ${this.roomComponent.attack}`)
      this.roomComponent.enemy.health = this.roomComponent.enemy.health - 2;
      this.roomComponent.player.mana = this.roomComponent.player.mana - 0;
      this.roomComponent.combatArray.push(`You dealt 2 damage`)
      this.roomComponent.combatArray.push('You used 0 mana');
      this.damageReceived();
      this.failRoom();
    } else {
      this.roomComponent.combatArray.push("You don't have enough mana!");
    }
    console.log(JSON.stringify(this.roomComponent.combatArray));
    this.clearCombatArray();
    console.log(JSON.stringify(this.roomComponent.combatArray));
  }

  //for player spells, can refactor...
  useSpell1(){
    if (this.roomComponent.player.mana >= this.roomComponent.player.spells[0].mana) {
      this.roomComponent.combatArray.push(`You are about to use ${this.roomComponent.player.spells[0].name}`)
      this.roomComponent.enemy.health = this.roomComponent.enemy.health - this.roomComponent.player.spells[0].damage;
      this.roomComponent.player.mana = this.roomComponent.player.mana - this.roomComponent.player.spells[0].mana;
      this.roomComponent.combatArray.push(`You dealt ${this.roomComponent.player.spells[0].damage} damage`)
      this.roomComponent.combatArray.push(`You used ${this.roomComponent.player.spells[0].mana} mana`);
      this.damageReceived();
      this.failRoom();
    } else {
      this.roomComponent.combatArray.push("You don't have enough mana!");
    }
    console.log(JSON.stringify(this.roomComponent.combatArray));
    this.clearCombatArray();
    console.log(JSON.stringify(this.roomComponent.combatArray));
  }

  useSpell2(){
    if (this.roomComponent.player.mana >= this.roomComponent.player.spells[1].mana) {
      this.roomComponent.combatArray.push(`You are about to use ${this.roomComponent.player.spells[1].name}`)
      this.roomComponent.enemy.health = this.roomComponent.enemy.health - this.roomComponent.player.spells[1].damage;
      this.roomComponent.player.mana = this.roomComponent.player.mana - this.roomComponent.player.spells[1].mana;
      this.roomComponent.combatArray.push(`You dealt ${this.roomComponent.player.spells[1].damage} damage`)
      this.roomComponent.combatArray.push(`You used ${this.roomComponent.player.spells[1].mana} mana`);
      this.damageReceived();
      this.failRoom();
    } else {
      this.roomComponent.combatArray.push("You don't have enough mana!");
    }
    console.log(JSON.stringify(this.roomComponent.combatArray));
    this.clearCombatArray();
    console.log(JSON.stringify(this.roomComponent.combatArray));
  }



  damageReceived(){
    if (this.roomComponent.enemy.health <= 0) {
      return this.clearRoom();
    }
    let enemySpell:Spell = this.roomComponent.getEnemySpell();
    this.roomComponent.combatArray.push(`ENEMY CAST ${enemySpell.name}`);
    this.roomComponent.enemy.mana = this.roomComponent.enemy.mana - enemySpell.mana;
    this.roomComponent.player.health = this.roomComponent.player.health - enemySpell.damage;
    this.roomComponent.combatArray.push(`You lost ${enemySpell.damage} hp`);
    console.log(JSON.stringify(this.roomComponent.combatArray));
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

  displayCombatArray(){

  }

  clearCombatArray(){
    this.roomComponent.combatArray = [];
  }
  
}
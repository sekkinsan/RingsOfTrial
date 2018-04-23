import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { EnemyService } from "../../shared/enemy/enemy.service";
import { RoomService } from "../../shared/room/room.service";
import { SpellService } from "../../shared/spell/spell.service";
import { CombatService } from "../../shared/combat/combat.service";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Player } from "../../models/Player";
import { Spell } from "../../models/spell";
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";



@Component({
  selector: "room",
  moduleId: module.id,
  templateUrl: "./room.html",
  providers: [PlayerService, EnemyService, RoomService, SpellService],
  styleUrls: ["./room-common.css"]
})

export class RoomComponent{

  attack: string;
  player: Player;
  enemy: Enemy;
  room: Room;
  spell: Spell;
  cleared = false;
  combatArray = [];

  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private enemyService: EnemyService, 
  private roomService: RoomService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells();
    this.player.health = 10;
    this.player.mana = 10;
    this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    this.enemy = this.enemyService.getRandomEnemy(this.room);
    this.attack = this.spellService.getRandomAttack();
    console.log(JSON.stringify(this.enemy));
  }

  // useSpell() {
  //   console.log("you are about to use" + JSON.stringify(this.player.spells[0].name))
  //   if (this.player.mana >= this.player.spells[0].mana) {
  //     alert("CASTING {{ this.player.spells[0].name }} ")
  //     this.enemy.health = this.enemy.health - this.player.spells[0].damage
  //     this.player.mana = this.player.mana - this.player.spells[0].mana
  //     console.log("You dealt " + JSON.stringify(this.player.spells[0].damage) + " to" + this.enemy)
  //     console.log("You used " + JSON.stringify(this.player.spells[0].mana) + " mana.");
  //   } else {
  //     alert( "YOU DONT HAVE ENOUGH MANA!")
  //   }

  testPlayerCombat() {
    let attack:string = this.attack;
    if (this.player.mana >= 3) {
      this.combatArray.push(`Youre about to use ${attack}`)
      this.enemy.health = this.enemy.health - 2;
      this.player.mana = this.player.mana - 0;
      this.combatArray.push(`You dealt 2 damage`)
      this.combatArray.push("You used 0 mana")
      this.testEnemyCombat();
      this.failRoom();
    } else {
      this.combatArray.push("You don't have enough mana!")
    }
    console.log(JSON.stringify(this.combatArray));
  }

  testEnemyCombat() {
    if (this.enemy.health <= 0) {
      return this.clearRoom();
    } 
    let enemySpell:Spell = this.getEnemySpell();
    this.combatArray.push(`ENEMY CAST ${enemySpell.name}`);
    this.enemy.mana = this.enemy.mana - enemySpell.mana;
    this.player.health = this.player.health - enemySpell.damage;
    this.combatArray.push(`you lost ${enemySpell.damage}`);
    console.log(JSON.stringify(this.combatArray));
  }

  getEnemySpell() {
    return this.spellService.getRandomSpell(this.enemy);
  }

  clearRoom(){
    if (this.enemy.health <= 0) {
      alert("YOU CLEARED THIS ROOM!");
      console.log(JSON.stringify(this.room.id));
      this.cleared = true;
      this.roomService.setRoomCleared(this.player, this.room.id);
      this.router.navigate(["/zone"]);
      console.log(JSON.stringify(this.player.clearedRooms));
    } 
  }

  failRoom(){
    if (this.player.health <= 0) {
      this.playerService.deadPlayer();
    }
    this.cleared = false;
  }

}







  


import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { EnemyService } from "../../shared/enemy/enemy.service";
import { RoomService } from "../../shared/room/room.service";
import { SpellService } from "../../shared/spell/spell.service";
import { CombatService, CombatStatus } from "../../shared/combat/combat.service";
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
  providers: [PlayerService, EnemyService, RoomService, SpellService, CombatService],
  styleUrls: ["./room-common.css"]
})

export class RoomComponent{

  player: Player;
  enemy: Enemy;
  room: Room;
  spell: Spell;
  cleared = false;
  combatArray = [];
  clearedRooms = [];

  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private enemyService: EnemyService, 
  private roomService: RoomService, private spellService: SpellService, private combatService: CombatService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells();
    this.player.clearedRooms = [];
    this.player.health = 10;
    this.player.mana = 10;
    this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    this.enemy = this.enemyService.getRandomEnemy(this.room);
        console.log(JSON.stringify(this.enemy));
  }

  processCombat(spell: Spell) {
    let result: CombatStatus = this.combatService.combatTurn(this.player, this.enemy, spell, this.combatArray);
    switch(result){
      case CombatStatus.PlayerDead: 
        this.playerService.deadPlayer();
        this.router.navigate(["/zone"]);
        break;
      case CombatStatus.RoomCleared:
        this.clearRoom();
        break;
    }
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
      this.playerService.updateStats(this.player, this.player.health, this.player.mana);
      this.playerService.getPlayer();
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







  


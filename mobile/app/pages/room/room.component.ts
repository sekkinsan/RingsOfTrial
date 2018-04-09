import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { EnemyService } from "../../shared/enemy/enemy.service";
import { RoomService } from "../../shared/room/room.service";
import { SpellService } from "../../shared/spell/spell.service";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Player } from "../../models/Player";
import { Spell } from "../../models/spell";
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";



@Component({
  selector: "room",
  moduleId: module.id,
  templateUrl: "./room.html",
  providers: [PlayerService, EnemyService, RoomService, SpellService],
  styleUrls: ["./room-common.css"]
})

export class RoomComponent{

  player: Player;
  cleared = Boolean;
  enemy: Enemy;
  room: Room;
  spell: Spell;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private enemyService: EnemyService, private roomService: RoomService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.health = 10;
    this.player.mana = 10;
    this.player.spells[0].name = "fireball";
    this.player.spells[0].damage = 2;
    this.player.spells[0].mana = 2;
    this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    this.enemy = this.enemyService.getRandomEnemy(this.room);
    // this.spell = this.spellService.getSpellById(1);
    console.log(JSON.stringify(this.enemy));
    console.log(JSON.stringify(this.player.spells[0].name));
  }

  getEnemyHealth() {
   alert(this.enemyService.getEnemyHealth(this.enemy));
  }

  useSpell() {
    console.log("you are about to use" + JSON.stringify(this.player.spells[0].name))
    if (this.player.mana >= this.player.spells[0].mana) {
      alert("CASTING {{ this.player.spells[0].name }} ");
      this.enemy.health = this.enemy.health - this.player.spells[0].damage;
      this.player.mana = this.player.mana - this.player.spells[0].mana;
      console.log("You dealt {{ this.player.spells[0].damage }} to" + this.enemy);
      console.log("You used" + {{ this.player.spells[0].mana }} + " mana.");
    } else {
      alert( "YOU DONT HAVE ENOUGH MANA!")
    }

  }






  

}
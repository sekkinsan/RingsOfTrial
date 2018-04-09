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

  spellbook: Spell[];
  player: Player;
  cleared = Boolean;
  enemy: Enemy;
  room: Room;
  spell: Spell;

  constructor(private route: ActivatedRoute, private playerService: PlayerService, private enemyService: EnemyService, private roomService: RoomService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.health = 10;
    this.room = this.roomService.getRoomById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    this.enemy = this.enemyService.getRandomEnemy(this.room);
    // this.spell = this.spellService.getSpellById(1);
    console.log(JSON.stringify(this.enemy));
    console.log(JSON.stringify(this.spell));
  }

  getEnemyHealth() {
   alert(this.enemyService.getEnemyHealth(this.enemy));
  }

  useSpell() {
    console.log(JSON.stringify(this.player.spells));
  }






  

}
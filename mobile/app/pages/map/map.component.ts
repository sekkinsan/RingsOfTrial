import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { SpellService } from "../../shared/spell/spell.service";
import { Player } from "../../models/Player";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";
import { Spell } from "../../models/spell";


@Component({
  selector: "map",
  moduleId: module.id,
  templateUrl: "./map.html",
  providers: [PlayerService, SpellService],
  styleUrls: ["./map-common.css", "./map.css"]
})
export class MapComponent {

  player: Player;
  isCleared = true;
  spells: Spell[];

  constructor(private router: Router, private playerService: PlayerService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells(this.player);
    

  }

  submit() {
    if (this.isCleared) {
      this.enter();
    } else {
      this.warn();
    }
  }

  enter() {
    this.router.navigate(["/zone"]);
  }

  warn() {
    alert("You can't access this yet!");
  }

  test() {
    console.log(this.player.spells)
    console.log(JSON.stringify(this.player.username));
    console.log(JSON.stringify(this.player.spells[1]));
  }

}

  

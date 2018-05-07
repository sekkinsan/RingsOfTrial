import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { SpellService } from "../../shared/spell/spell.service";
import { Player } from "../../models/Player";
import { Router, ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Spell } from "../../models/spell";
import { Ring } from "../../models/ring";


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

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells();

  }

  submit(ringId: Number) {
    if (this.isCleared) {
      this.enter(ringId);
    } else {
      this.warn();
    }
  }

  enter(ringId: Number) {
    this.playerService.getPlayer();
    this.router.navigate(["/ring", ringId]);
  }

  warn() {
    alert("You already cleared this!");
  }

  stats() {
    console.log(JSON.stringify(this.player));
    //test to see player actually has a spellbook?
  }

  clearedRooms() {
    console.log(JSON.stringify(this.player.clearedRooms));
  }

  clearedRings() {
    console.log(JSON.stringify(this.player.clearedRings));
  }


}

  

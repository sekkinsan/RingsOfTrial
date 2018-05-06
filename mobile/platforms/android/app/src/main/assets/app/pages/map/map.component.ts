import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { SpellService } from "../../shared/spell/spell.service";
import { Player } from "../../models/Player";
import { Router, ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import { Spell } from "../../models/spell";
import { RingService } from "../../shared/ring/ring.service";
import { Ring } from "../../models/ring";


@Component({
  selector: "map",
  moduleId: module.id,
  templateUrl: "./map.html",
  providers: [PlayerService, SpellService, RingService],
  styleUrls: ["./map-common.css", "./map.css"]
})
export class MapComponent {

  player: Player;
  isCleared = true;
  spells: Spell[];

  constructor(private router: Router, private route: ActivatedRoute, private playerService: PlayerService, private spellService: SpellService, private ringService: RingService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = this.spellService.getPlayerSpells();
    

  }

  submit(zoneId: Number) {
    if (this.isCleared) {
      this.enter(zoneId);
    } else {
      this.warn();
    }
  }

  enter(zoneId: Number) {
    this.playerService.getPlayer();
    this.router.navigate(["/zone", zoneId]);
  }

  warn() {
    alert("You already cleared this!");
  }

  test() {
    console.log(JSON.stringify(this.player.spells));
    console.log(JSON.stringify(this.player.spells[0]));
    console.log(JSON.stringify(this.player.spells[1]));
    console.log(JSON.stringify(this.player));
    //test to see player actually has a spellbook?
  }

  clearedRooms() {
    console.log(JSON.stringify(this.player.clearedRooms));
  }


}

  

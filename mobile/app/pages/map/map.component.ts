import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";


@Component({
  selector: "map",
  moduleId: module.id,
  templateUrl: "./map.html",
  providers: [PlayerService],
  styleUrls: ["./map-common.css", "./map.css"]
})
export class MapComponent {

  player: Player;
  isCleared = true;

  constructor(private router: Router, private playerService: PlayerService, private page: Page) {
    this.player = this.playerService.getPlayer();

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

}

  

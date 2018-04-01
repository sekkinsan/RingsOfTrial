import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";


@Component({
  selector: "zone",
  moduleId: module.id,
  templateUrl: "./zone.html",
  providers: [PlayerService],
  styleUrls: ["./zone-common.css"]
})

export class ZoneComponent{

  player: Player;
  cleared = Boolean;
  
  constructor(private playerService: PlayerService, private page: Page) {
    this.player = this.playerService.getPlayer();
  
  }

  submit() {
    this.enter();
  }

  enter() {
    alert("OK!");
  }

  warn() {
    alert("You can't access this yet!");
  }
  
}
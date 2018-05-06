import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";
import { Ring } from "../../models/Ring";
import { Router, ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";
import { SpellService } from "../../shared/spell/spell.service";
import { RingService } from "../../shared/ring/ring.service";


@Component({
  selector: "zone",
  moduleId: module.id,
  templateUrl: "./zone.html",
  providers: [PlayerService, RingService],
  styleUrls: ["./zone-common.css"]
})

export class ZoneComponent{

  player: Player;
  ring: Ring;
  isCleared = true;
  clearedRooms = [];
  
  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private ringService: RingService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));

  }

  submit(roomId: Number) {
    if (this.isCleared) {
      this.enter(roomId);
    } else {
      this.warn();
    }
  }

  toMap() {
    this.playerService.getPlayer();
    this.router.navigate(["/map"]);
  }

  enter(roomId: Number) {
    this.playerService.getPlayer();
    this.router.navigate(["/room", roomId]);
  }

  warn() {
    alert("You can't access this yet!");
  }

  check() {
    console.log(JSON.stringify(this.player));
  }

}
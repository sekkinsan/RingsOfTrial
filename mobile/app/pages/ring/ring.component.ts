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
  selector: "ring",
  moduleId: module.id,
  templateUrl: "./ring.html",
  providers: [PlayerService, RingService],
  styleUrls: ["./ring-common.css"]
})

export class RingComponent{

  player: Player;
  ring: Ring;
  clearedRooms = [];
  
  constructor(private route: ActivatedRoute, private router: Router, private playerService: PlayerService, private ringService: RingService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.ring = this.ringService.getRingById(Number.parseInt(this.route.snapshot.paramMap.get('id')));
    this.player.clearedRings = this.player.clearedRings || [];

  }

  isCleared = (roomId) => this.player.clearedRooms && this.player.clearedRooms.indexOf(roomId) >= 0;

  submit(roomId: Number) {
    if (!this.isCleared(roomId)) {
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
    alert("You've already cleared this!");
  }

  check() {
    console.log(JSON.stringify(this.player));
    console.log(JSON.stringify(this.ring));
  }

}
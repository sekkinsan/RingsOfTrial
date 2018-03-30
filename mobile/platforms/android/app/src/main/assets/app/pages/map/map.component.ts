import { Component } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";


@Component({
  selector: "map",
  moduleId: module.id,
  templateUrl: "./map.html",
  providers: [PlayerService],
  styleUrls: ["./map-common.css", "./map.css"]
})
export class MapComponent {
  player: Player;
  constructor(private playerService: PlayerService) {
    this.player = this.playerService.getPlayer();
  }
}
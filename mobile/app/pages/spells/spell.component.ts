import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
import * as absoluteLayoutModule from "tns-core-modules/ui/layouts/absolute-layout";
import { SpellService } from "../../shared/spell/spell.service";
import { Spell } from "../../models/spell";


@Component({
  selector: "spell",
  moduleId: module.id,
  templateUrl: "./spell.html",
  providers: [PlayerService, SpellService],
  styleUrls: ["./spell-common.css"]
})
export class SpellComponent {

  player: Player;
  spell: Spell;
  isSetUp: Boolean;

  constructor(private router: Router, private playerService: PlayerService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = [];
    

  }

  submit() {
    // need way to push access player spells and have damage/mana cost set up and push directly into it..
      console.log(JSON.stringify(this.player.spells));

    //   this.player.spells.push(spell1);
    //   this,player.spells.push(spell2);
  }

  

}

  

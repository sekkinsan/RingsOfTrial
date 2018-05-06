import { Component, OnInit } from "@angular/core";
import { PlayerService } from "../../shared/player/player.service";
import { Player } from "../../models/Player";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { View } from "ui/core/view";
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
  spells: Spell[];
  spellsMade: Boolean;
  spellNames: string[];

  constructor(private router: Router, private playerService: PlayerService, private spellService: SpellService, private page: Page) {
    this.player = this.playerService.getPlayer();
    this.player.spells = [];
    this.spellNames = [];
  }

  submit() {
    if (this.spellsMade) {
      this.continue();
    } else {
      this.createSpell();
    }
  }

  continue() {
    console.log(JSON.stringify(this.player.spells));
    this.spellService.getPlayerSpells();
    this.router.navigate(["/map"]);
  }

  createSpell() {
    let attack = this.spellService.generatePlayerAttack(this.spellNames[0]);
    this.player.spells.push(attack);
    
    for(let i = 1; i < this.spellNames.length; i++){
      let newSpell = new Spell();
      newSpell.damage = 3;
      newSpell.mana = 2;
      newSpell.name = this.spellNames[i];
      newSpell.id = i;
      this.player.spells.push(newSpell);
    }
  
    alert(this.spellService.create(this.player.spells));
    console.log(JSON.stringify(this.player.spells));
  }

  toggleDisplay() {
    this.spellsMade = !this.spellsMade;
  }

  

}

  

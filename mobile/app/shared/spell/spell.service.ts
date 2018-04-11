import { Injectable } from "@angular/core";
import { Http, Headers, Response, HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { SaveManager } from "../../saver";
import { Enemy } from "../../models/Enemy";
import { Room } from "../../models/Room";
import { Zone } from "../../models/Zone";
import { Spell } from "../../models/spell";
import { Config } from "../config";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { Player } from "../../models/Player";
import { PlayerService } from "../player/player.service";



@Injectable()
export class SpellService {
  static spells : Spell[];

  constructor(private http: Http, private saveManager: SaveManager, private playerService: PlayerService) {
    if (!SpellService.spells) {
        SpellService.spells = require("../../Assets/spells.json").spells;
    }
    
  }

  create(spell: Spell) : Boolean {
    let spells: any = [];
    return this.saveManager.saveSpells(spells);
  }

  getPlayerSpells(player: Player) : Spell {
    return this.saveManager.loadSpells();
  }

    //need help accessing the appropriate spellset based on enemies "spells"
  getRandomSpell(enemy: Enemy) : Spell {
    let rand = Math.floor((Math.random() * SpellService.spells[enemy.spells].length)) + 1;
    return this.getSpellById(rand, enemy);
    
  }

  getSpellById(id: Number, enemy: Enemy) : Spell{
    for (let i: number = 0; i < SpellService.spells[enemy.spells].length; i++){
      let spell: Spell = SpellService.spells[enemy.spells][i];
      if (spell.id === id) {
        return spell;
      }
    }
    return null;
  }

  
}
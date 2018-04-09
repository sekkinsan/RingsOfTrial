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



@Injectable()
export class SpellService {
  static spells : Spell[];

  constructor() {
    if (!SpellService.spells) {
        SpellService.spells = require("../../Assets/spells.json").spells;
    }
    
  }

//   getSpellsByName(name: String) : Spell {
//     for(let i: number = 0; i < SpellService.spells.length; i++) {
//       let spell: Spell = SpellService.spells[i];
//       if (spell.name === name) {
//       return SpellService.spells["Jacob"];
//     }
//   }
//   return null;
// }


  // getSpellById(id: Number) : Spell {
  //   for(let i: number = 0; i < SpellService.spells.length; i++) {
  //       let spell: Spell = SpellService.spells[i];
  //       if (spell.id === id) {
  //           return spell;
  //       }
  //   }
  //   return null;
  // }


  
}
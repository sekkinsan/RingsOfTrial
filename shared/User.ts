import { Spell } from "./spell";
import { Inventory } from "./inventory";
import { Zone } from "./zone";

export class User {
  id: number;
  health: number;
  mana: number;
  spellbook: Spell[];
  inventory: Inventory;
  currentRing: number;
  currentZone: number;
  currentRoom: number;
  

  constructor(){
    this.spellbook[0].mana = 20
  }
}
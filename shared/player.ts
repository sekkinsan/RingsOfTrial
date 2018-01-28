import { Spell } from "./spell";
import { Inventory } from "./inventory";

export class Player {
  health: number;
  mana: number;
  name: string;
  isMale: boolean;
  currentFloor: number;
  currentRoom: number;
  spellbook: Spell[];
  inventory: Inventory;

  constructor(){
    this.spellbook[0].mana = 20
  }
}
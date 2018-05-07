import { Spell } from "./spell";
import { Inventory } from "./inventory";
import { Ring } from "./ring";
import { Room } from "./room";

export class Enemy {
  id: number;
  name: string;
  health: number;
  mana: number;
  spells: string;
  inventory: Inventory;
  currentRing: number;
  currentRoom: number;
  

  //constructor(){
  //  this.spells[0].mana = 20;
  //  this.inventory.length = 10;
  //}
}
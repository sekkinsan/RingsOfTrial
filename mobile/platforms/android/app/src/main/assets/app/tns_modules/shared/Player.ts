import { Spell } from "./spell";
import { Inventory } from "./inventory";
import { Zone } from "./zone";
import { Ring } from "./ring";
import { Room } from "./room";

export class Player {
  id: number;
  username: string;
  password: string;
  health: number;
  mana: number;
  //spells: Spell[];
  inventory: Inventory;
  currentRing: number;
  currentZone: number;
  currentRoom: number;
  

  //constructor(){
  //  this.spells[0].mana = 20;
  //  this.inventory.length = 10;
  //}
}
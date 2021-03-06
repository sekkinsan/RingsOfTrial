import { Spell } from "./spell";
import { Inventory } from "./inventory";
import { Ring } from "./ring";
import { Room } from "./room";

export class Player {
  spellService: any;
  id: number;
  username: string;
  password: string;
  health: number;
  mana: number;
  spells: Spell[];
  inventory: Inventory;
  currentRing: number;
  currentRoom: number;
  clearedRooms: number[];
  clearedRings: number[];
  

  //constructor(){
  //  this.spells[0].mana = 20;
  //  this.inventory.length = 10;
  //}
}
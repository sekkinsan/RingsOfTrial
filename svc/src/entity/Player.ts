import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { Spell } from "../entity/Spell";
import { Inventory } from "../entity/Inventory";
import { Ring } from "../entity/Ring";
import { Zone } from "../entity/Zone";
import { Room } from "../entity/Room";


@Entity()
export class Player {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    health: number;

    @Column()
    mana: number;

   // @Column()
   // spellbook: Spell[];

  //  @Column()
  //  inventory: Inventory[];

    @Column()
    currentRing: number;

    @Column()
    currentZone: number;

    @Column()
    currentRoom: number;

}

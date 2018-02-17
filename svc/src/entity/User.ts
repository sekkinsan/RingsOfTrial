import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    health: number;

    @Column()
    mana: number;

    @Column()
    spellbook: Spell;

    @Column()
    inventory: Inventory;

    @Column()
    currentRing: number;

    @Column()
    currentZone: number;

    @Column()
    currentRoom: number;

}

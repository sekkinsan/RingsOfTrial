import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { Spell } from "./Spell";
import { Inventory } from "./Inventory";
import { Item } from "./Item";
import { Ring } from "./Ring";
import { Zone } from "./Zone";
import { Room } from "./Room";


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

    @Column()
    currentRing: number;

    @Column()
    currentZone: number;

    @Column()
    currentRoom: number;

    @OneToOne(type => Inventory, inventory => inventory.player)
    @JoinColumn()
    inventory: Inventory;
    
    @OneToMany(type => Spell, spell => spell.player)
    spells: Spell[];

    @OneToOne(type => Ring, ring => ring.player)
    @JoinColumn()
    ring: Ring;

}

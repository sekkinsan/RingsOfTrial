import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn} from "typeorm";
import { Spell } from "./Spell";
import { Inventory } from "./Inventory";
import { Item } from "./Item";
import { Ring } from "./Ring";
import { Zone } from "./Zone";
import { Room } from "./Room";


@Entity()
export class Enemy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;wwwwww

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

    @OneToOne(type => Inventory, inventory => inventory.enemy)
    @JoinColumn()
    inventory: Inventory;
    
    @OneToMany(type => Spell, spell => spell.enemy)
    spells: Spell[];

    @OneToOne(type => Ring, ring => ring.enemy)
    @JoinColumn()
    ring: Ring;

}

import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, OneToOne, OneToMany} from "typeorm";
import {Player} from "./Player";
import {Item} from "./Item";
import { Enemy } from "./Enemy";

@Entity()
export class Inventory{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @OneToOne(type => Player, player => player.inventory)
    player: Player;

    @OneToOne(type => Enemy, enemy => enemy.inventory)
    enemy: Enemy;

    @OneToMany(type => Item, item => item.inventory)
    items: Item[];
}

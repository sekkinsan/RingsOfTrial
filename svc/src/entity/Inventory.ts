import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany} from "typeorm";
import {Player} from "./Player";
import {Item} from "./Item";

@Entity()
export class Inventory{

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @OneToOne(type => Player, player => player.inventory)
    player: Player;

    @OneToMany(type => Item, item => item.inventory)
    items: Item[];


}

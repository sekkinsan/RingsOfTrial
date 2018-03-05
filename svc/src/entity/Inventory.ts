import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, OneToOne} from "typeorm";
import {Player} from "./Player"

@Entity()
export class Inventory{

    @PrimaryColumn("int")
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @OneToOne(type => Player, player => player.inventory)
    player: Player;

}

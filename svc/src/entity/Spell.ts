import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, OneToOne} from "typeorm";
import {Player} from "./Player"


@Entity()
export class Spell{
    @PrimaryColumn({ length: 100})
    name: string; 

    @Column()
    mana: number;

    @Column()
    damage: number;

    @OneToOne(type => Player, player => player.spell)
    player: Player;

}



import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, OneToOne, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Player} from "./Player"


@Entity()
export class Spell{

    @PrimaryGeneratedColumn()
    id: number;
    
    @PrimaryColumn({ length: 100})
    name: string; 

    @Column()
    mana: number;

    @Column()
    damage: number;

    @ManyToOne(type => Player, player => player.spells)
    player: Player;

}



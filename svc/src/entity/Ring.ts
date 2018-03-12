import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, OneToMany, OneToOne} from "typeorm";
import {Zone} from "./Zone"
import {Player} from "./Player"
import { Enemy } from "./Enemy";

@Entity()
export class Ring {

    @PrimaryColumn()
    ring: number;

    @OneToMany(type => Zone, zone => zone.ring)
    zones: Zone[];

    @OneToOne(type => Player, player => player.ring)
    player: Player;

    @OneToOne(type => Enemy, enemy => enemy.ring)
    enemy: Enemy;


}
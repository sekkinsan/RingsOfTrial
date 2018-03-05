import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Zone} from "./Zone"
import {Player} from "./Player"

@Entity()
export class Ring {

    @PrimaryColumn()
    ring: number;

    @OneToMany(type => Zone, zone => zone.ring)
    zones: Zone[];

    @ManyToOne(type => Player, player => player.rings)
    player: Player;
}
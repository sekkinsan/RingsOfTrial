import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, ManyToOne} from "typeorm";
import {Zone} from "./Zone"
import {Player} from "./Player"


@Entity()
export class Room{

    @PrimaryColumn()
    room: number;

    @ManyToOne(type => Zone, zone => zone.rooms)
    zone: Zone;

    
}
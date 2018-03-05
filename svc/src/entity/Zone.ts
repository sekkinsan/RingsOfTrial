import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Ring} from "./Ring"
import {Room} from "./Room"
import {Player} from "./Player"

@Entity()
export class Zone{

    @PrimaryColumn()
    zone: number;

    @ManyToOne(type => Ring, ring => ring.zones)
    ring: Ring;

    @OneToMany(type => Room, room => room.zone)
    rooms: Room[];

}
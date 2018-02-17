import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Zone{

    @PrimaryColumn()
    ring: number;

    @Column()
    zone: number;

    @Column()
    room: number;

}
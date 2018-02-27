import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Ring {

    @PrimaryColumn()
    ring: number;
}
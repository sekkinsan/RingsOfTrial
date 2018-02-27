import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column} from "typeorm";


@Entity()
export class Spell{
    @PrimaryColumn({ length: 100})
    name: string; 

    @Column()
    mana: number;

    @Column()
    damage: number;

}



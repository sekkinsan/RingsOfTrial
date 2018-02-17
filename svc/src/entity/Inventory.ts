import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryColumn, Column} from "typeorm";

@Entity()
export class Inventory{

    @PrimaryColumn("int")
    id: number;

    @Column("varchar", { length: 200 })
    name: string;
}

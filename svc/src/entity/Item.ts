import { BaseEntity } from "typeorm/repository/BaseEntity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Inventory } from "./Inventory";

@Entity()
export class Item{ 

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 200 })
    name: string;

    @ManyToOne(type => Inventory, inventory => inventory.items)
    inventory: Inventory;

}

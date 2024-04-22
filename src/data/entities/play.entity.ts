import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Members} from "./members.entity";

@Entity("entity")
export class PlayEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Members) @JoinTable()
    members: Members[];
}
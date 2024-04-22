import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {MatchesEntity} from "./matches.entity";

@Entity("entity")
export class PlayEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => Members) @JoinTable()
    members: Members[];

    @ManyToMany(type => MatchesEntity) @JoinTable()
    matches: MatchesEntity[];
}
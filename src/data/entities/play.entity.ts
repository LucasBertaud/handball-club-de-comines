import {Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {MatchesEntity} from "./matches.entity";
import {MembersEntity} from "./members.entity";

@Entity("entity")
export class PlayEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(type => MembersEntity) @JoinTable()
    members: MembersEntity[];

    @ManyToMany(type => MatchesEntity) @JoinTable()
    matches: MatchesEntity[];
}
import {Entity, JoinTable, ManyToOne, PrimaryColumn} from "typeorm";
import {MatchesEntity} from "./matches.entity";
import {MembersEntity} from "./members.entity";

@Entity("play")
export class PlayEntity {

    @PrimaryColumn()
    @ManyToOne(type => MembersEntity) @JoinTable()
    members: MembersEntity[];

    @PrimaryColumn()
    @ManyToOne(type => MatchesEntity) @JoinTable()
    matches: MatchesEntity[];
} 
import {Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {MatchesEntity} from "./matches.entity";
import {MembersEntity} from "./members.entity";

@Entity("play")
export class PlayEntity {

    @PrimaryColumn()
    memberId: string;

    @ManyToOne(() => MembersEntity, member => member.plays)
    @JoinColumn({ name: 'memberId' })
    member: MembersEntity;

    @PrimaryColumn()
    matchId: number;

    @ManyToOne(() => MatchesEntity, match => match.plays)
    @JoinColumn({ name: 'matchId' })
    match: MatchesEntity;
} 
import {MembersEntity} from "../../data/entities/members.entity";
import {MatchesEntity} from "../../data/entities/matches.entity";

export class CreatePlayDto {
    memberId: number;
    member: MembersEntity;
    matchId: number;
    match: MatchesEntity;
} 
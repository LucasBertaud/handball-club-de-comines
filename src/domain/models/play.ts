import {MembersEntity} from "../../data/entities/members.entity";
import {MatchesEntity} from "../../data/entities/matches.entity";

export class Play {
  memberId: number;
  member: MembersEntity;
  matchId: number;
  match: MatchesEntity;

  constructor(
    memberId: number,
    member: MembersEntity,
    matchId: number,
    match: MatchesEntity,
  ) {
      this.memberId = memberId;
      this.member = member;
      this.matchId = matchId;
      this.match = match;
  }
}
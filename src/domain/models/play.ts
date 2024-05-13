export class Play {
  memberId: string;
  matchId: number;

  constructor(
    memberId: string,
    matchId: number,
  ) {
      this.memberId = memberId;
      this.matchId = matchId;
  }
}
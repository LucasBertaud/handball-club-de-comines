import { AdversaryTeamsEntity } from "src/data/entities/adversary_teams.entity";
import { PlayEntity } from "src/data/entities/play.entity";

export class Matches {
  adversary_score: number;
  hcc_score: number;
  start_date: Date;
  adversaryId?: number;
  plays?: string[];

  constructor(
    adversary_score: number,
    hcc_score: number,
    start_date: Date,
    adversaryId: number,
    plays: string[]
  ) {
      this.adversary_score = adversary_score;
      this.hcc_score = hcc_score;
      this.start_date = start_date;
      this.adversaryId = adversaryId;
      this.plays = plays;
  }
}
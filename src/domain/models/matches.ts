import { AdversaryTeamsEntity } from "src/data/entities/adversary_teams.entity";
import { PlayEntity } from "src/data/entities/play.entity";

export class Matches {
  adversary_score: number;
  hcc_score: number;
  start_date: Date;
  adversary: AdversaryTeamsEntity;
  plays: PlayEntity[];

  constructor(
    adversary_score: number,
    hcc_score: number,
    start_date: Date,
    adversary: AdversaryTeamsEntity,
    plays: PlayEntity[]
  ) {
      this.adversary_score = adversary_score;
      this.hcc_score = hcc_score;
      this.start_date = start_date;
      this.adversary = adversary;
      this.plays = plays;
  }
}
import { AdversaryTeamsEntity } from "src/data/entities/adversary_teams.entity";
import { PlayEntity } from "src/data/entities/play.entity";

export class CreateMatchesDto {
    adversary_score: number;
    hcc_score: number;
    start_date: Date;
    adversary: AdversaryTeamsEntity;
    plays: PlayEntity[];
}
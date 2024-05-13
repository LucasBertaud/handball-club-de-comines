import { PlayEntity } from "src/data/entities/play.entity";

export class CreateMatchesDto {
    adversary_score: number;
    hcc_score: number;
    start_date: Date;
    adversaryId: number;
    plays: string[];
}
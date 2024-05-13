import { Injectable } from '@nestjs/common';
import { Matches } from '../models/matches';
import { MatchesService } from 'src/data/services/matches.service';

@Injectable()
export class UpdateMatchUsecase {
    constructor(private matchesService: MatchesService) { }
    public execute(id: number, matchData: Partial<Matches>): Promise<Matches> {
        return this.matchesService.updateMatches(id, matchData);
    }
}
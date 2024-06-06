import { Injectable } from '@nestjs/common';
import { MatchesService } from 'src/data/services/matches.service';

@Injectable()
export class DeleteMatchesUsecase {
    constructor(private matchesService: MatchesService) { }
    public execute(id: number): any {
        return this.matchesService.deleteMatches(id);
    }
}
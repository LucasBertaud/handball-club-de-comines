import { Injectable } from '@nestjs/common';
import { AdversaryTeamsService } from 'src/data/services/adversary_teams.service';
import { AdversaryTeams } from 'src/domain/models/adversary_teams';

@Injectable()
export class CreateAdversaryTeamsUsecase {
    constructor(private adversaryTeamsService: AdversaryTeamsService) { }
    public execute(adversaryTeams: AdversaryTeams): any {
        return this.adversaryTeamsService.createAdversaryTeams(adversaryTeams);
    }
}
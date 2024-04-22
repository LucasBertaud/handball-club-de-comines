import { Injectable } from '@nestjs/common';
import { AdversaryTeamsService } from 'src/data/services/adversary_teams.service';

@Injectable()
export class GetAllAdversaryTeamsUsecase {
    constructor(private adversaryTeamsService: AdversaryTeamsService) { }
    public execute(): any {
        return this.adversaryTeamsService.findAll();
    }
}
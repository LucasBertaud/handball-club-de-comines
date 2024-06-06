import {Injectable} from "@nestjs/common";
import {AdversaryTeamsService} from "src/data/services/adversary_teams.service";

@Injectable()
export class DeleteAdversaryTeamsUsecase {
    constructor(private adversaryTeamsService: AdversaryTeamsService) {
    }

    public execute(id: number): any {
        return this.adversaryTeamsService.deleteAdversaryTeams(id);
    }
}
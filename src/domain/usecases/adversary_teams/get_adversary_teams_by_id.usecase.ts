import {Injectable} from "@nestjs/common";
import {AdversaryTeamsService} from "../../../data/services/adversary_teams.service";

@Injectable()
export class GetAdversaryTeamsByIdUsecase {
    constructor(private adversaryTeamsService: AdversaryTeamsService) {
    }

    public execute(id: number): any {
        return this.adversaryTeamsService.findById(id);
    }
}
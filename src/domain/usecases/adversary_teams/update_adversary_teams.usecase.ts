import {Injectable} from "@nestjs/common";
import {AdversaryTeamsService} from "../../../data/services/adversary_teams.service";
import {AdversaryTeams} from "../../models/adversary_teams";

@Injectable()
export class UpdateAdversaryTeamsUsecase {
    constructor(private adversaryTeamsService: AdversaryTeamsService) {
    }

    public execute(id: number, adversaryTeamsData: Partial<AdversaryTeams>): Promise<AdversaryTeams> {
        return this.adversaryTeamsService.updateAdversaryTeams(id, adversaryTeamsData);
    }
}
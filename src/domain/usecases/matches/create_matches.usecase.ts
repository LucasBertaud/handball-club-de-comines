import {Injectable} from "@nestjs/common";
import {MatchesService} from "../../../data/services/matches.service";
import {Matches} from "../../models/matches";

@Injectable()
export class CreateMatchesUsecase {
    constructor(private matchesService: MatchesService) {
    }

    public execute(matches: Matches): any {
        return this.matchesService.createMatches(matches);
    }
}
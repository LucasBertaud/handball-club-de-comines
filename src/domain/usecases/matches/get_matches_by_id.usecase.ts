import {Injectable} from "@nestjs/common";
import {MatchesService} from "../../../data/services/matches.service";

@Injectable()
export class GetMatchesByIdUsecase {
    constructor(private matchesService: MatchesService) {
    }

    public execute(id: number): any {
        return this.matchesService.findById(id);
    }
}


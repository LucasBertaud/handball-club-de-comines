import {Injectable} from "@nestjs/common";
import {MatchesService} from "../../../data/services/matches.service";

@Injectable()
export class GetAllMatchesUsecase {
    constructor(private matchesService: MatchesService) {
    }

    public execute(): any {
        return this.matchesService.findAll();
    }
} 
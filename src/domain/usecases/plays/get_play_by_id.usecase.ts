import {Injectable} from "@nestjs/common";
import {PlayService} from "../../../data/services/play.service";

@Injectable()
export class GetPlayByIdUsecase {
    constructor(private playService: PlayService) {
    }

    public execute(memberId: string, matchId: number): any {
        return this.playService.findOneById(memberId, matchId);
    }
} 
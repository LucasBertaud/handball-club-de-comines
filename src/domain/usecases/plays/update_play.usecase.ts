import {Injectable} from "@nestjs/common";
import {PlayService} from "../../../data/services/play.service";
import {Play} from "../../models/play";

@Injectable()
export class UpdatePlayUsecase {
    constructor(private playService: PlayService) {
    }

    public execute(memberId: string, matchId: number, playData: Partial<Play>): Promise<Play> {
        return this.playService.updatePlay(memberId, matchId, playData);
    }
} 
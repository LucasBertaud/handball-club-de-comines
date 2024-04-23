import {Injectable} from "@nestjs/common";
import {PlayService} from "../../data/services/play.service";
import {Play} from "../models/play";

@Injectable()
export class CreatePlayUsecase {
    constructor(private playService: PlayService) {
    }

    public execute(play: Play): any {
        return this.playService.createPlay(play);
    }
}
import {Injectable} from "@nestjs/common";
import {PlayService} from "../../data/services/play.service";

@Injectable()
export class GetAllPlayUsecase {
    constructor(private playService: PlayService) {
    }

    public execute(): any {
        return this.playService.findAll(); 
    }
} 
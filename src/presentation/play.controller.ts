import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Play} from "src/domain/models/play";
import {CreatePlayDto} from "./dtos/create_play.dto";
import {ApiTags} from "@nestjs/swagger";
import {GetAllPlayUsecase} from "src/domain/usecases/plays/get_all_play.usecase";
import {CreatePlayUsecase} from "src/domain/usecases/plays/create_play.usecase";
import {UpdatePlayUsecase} from "../domain/usecases/plays/update_play.usecase";
import {DeletePlaysUsecase} from "../domain/usecases/plays/delete_plays.usecase";
import {GetPlayByIdUsecase} from "../domain/usecases/plays/get_play_by_id.usecase";

@ApiTags("Play")
@Controller("Play")
export class PlayController {
    constructor(
        private getAllPlayUsecase: GetAllPlayUsecase,
        private getPlayByIdUsecase: GetPlayByIdUsecase,
        private createPlayUsecase: CreatePlayUsecase,
        private updatePlayUsecase: UpdatePlayUsecase,
        private deletePlayUsecase: DeletePlaysUsecase,
    ) {
    }

    @Get()
    getPlays() {
        return this.getAllPlayUsecase.execute();
    }

    @Get(":memberId" && ":matchId")
    getPlaysById(@Param("memberId") memberId: string, @Param("matchId") matchId: number) {
        return this.getPlayByIdUsecase.execute(memberId, matchId);
    }

    @Post()
    createPlay(
        @Body() dto: CreatePlayDto,
    ) {
        const play = new Play(dto.memberId, dto.matchId);
        return this.createPlayUsecase.execute(play);
    }

    @Put(":memberId/:matchId")
    async updatePlay(
        @Param("memberId") memberId: string,
        @Param("matchId") matchId: number,
        @Body() playData: CreatePlayDto,
    ): Promise<Play> {
        return this.updatePlayUsecase.execute(memberId, matchId, playData);
    }

    @Delete(":memberId/:matchId")
    async deletePlay(
        @Param("memberId") memberId: string,
        @Param("matchId") matchId: number,
    ) {
        return this.deletePlayUsecase.execute(memberId, matchId);
    }
}
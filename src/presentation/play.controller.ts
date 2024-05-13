import { Body, Controller, Get, Post } from '@nestjs/common';
import { Play } from 'src/domain/models/play';
import { CreatePlayDto } from './dtos/create_play.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetAllPlayUsecase } from 'src/domain/usecases/get_all_play.usecase';
import {CreatePlayUsecase} from 'src/domain/usecases/create_play.usecase';

@ApiTags('Play')
@Controller('Play')
export class PlayController {
    constructor(
        private getAllPlayUsecase: GetAllPlayUsecase,
        private createPlayUsecase: CreatePlayUsecase
    ) { }

    @Get()
    getPlays() {
        return this.getAllPlayUsecase.execute();
    }
    
    @Post()
    createPlay(
        @Body() dto: CreatePlayDto
    ) {
        const play = new Play(dto.memberId, dto.matchId);
        return this.createPlayUsecase.execute(play);
    } 
}
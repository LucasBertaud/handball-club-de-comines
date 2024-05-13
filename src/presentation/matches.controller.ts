import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {CreateMatchesUsecase} from 'src/domain/usecases/create_matches.usecase';
import { CreateMatchesDto } from './dtos/create_matches.dto';
import { Matches } from 'src/domain/models/matches';
import { GetAllMatchesUsecase } from 'src/domain/usecases/get_all_matches.usecase';
import { DeleteMatchesUsecase } from 'src/domain/usecases/delete_matches.usecase';
import { UpdateMatchUsecase } from 'src/domain/usecases/update_match.usecase';

@ApiTags('Match')
@Controller('Match')
export class MatchesController {
    constructor(
        private createMatchesUsecase: CreateMatchesUsecase,
        private getAllMatchesUsecase: GetAllMatchesUsecase,
        private deleteMatchesUsecase: DeleteMatchesUsecase,
        private updateMatchUsecase: UpdateMatchUsecase
    ) { }

    @Get()
    async getMatches() {
        return this.getAllMatchesUsecase.execute();
    }
    
    @Post()
    async createMatches(
        @Body() dto: CreateMatchesDto
    ) {
        const match = new Matches(dto.adversary_score, dto.hcc_score, dto.start_date, dto.adversary, dto.plays);
        return this.createMatchesUsecase.execute(match);
    } 

    @Put(':id')
    async updateMatch(
        @Param('id') id: number,
        @Body() matchData: CreateMatchesDto
    ) : Promise<Matches> {
        return this.updateMatchUsecase.execute(id, matchData);
    }

    @Delete(':id')
    async deleteMatch(@Param('id') id: number)
    {
        return this.deleteMatchesUsecase.execute(id);
    }
}
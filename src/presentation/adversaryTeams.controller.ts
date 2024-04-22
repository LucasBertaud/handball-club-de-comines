import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAdversaryTeamsUsecase } from 'src/domain/usecases/create_adversary_teams.usecase';
import { GetAllAdversaryTeamsUsecase } from 'src/domain/usecases/get_all_adversary_teams.usecase';
import { AdversaryTeams } from 'src/domain/models/adversary_teams';
import { CreateAdversaryTeamsDto } from './dtos/create_adversary_teams.dto';

@Controller('adversaryTeams')
export class AdversaryTeamsController {
    constructor(
        private getAllAdversaryTeamsUsecase: GetAllAdversaryTeamsUsecase,
        private CreateAdversaryTeamsUsecase: CreateAdversaryTeamsUsecase
    ) { }

    @Get()
    getAdversaryTeamss() {
        return this.getAllAdversaryTeamsUsecase.execute();
    }
    
    @Post()
    createAdversaryTeams(
        @Body() dto: CreateAdversaryTeamsDto
    ) {
        const adversaryTeams = new AdversaryTeams(dto.logo, dto.name);
        return this.CreateAdversaryTeamsUsecase.execute(adversaryTeams);
    }
}
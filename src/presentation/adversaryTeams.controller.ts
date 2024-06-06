import {Body, Controller, Get, Param, Post, Put, Delete} from "@nestjs/common";
import {CreateAdversaryTeamsUsecase} from "src/domain/usecases/adversary_teams/create_adversary_teams.usecase";
import {GetAllAdversaryTeamsUsecase} from "src/domain/usecases/adversary_teams/get_all_adversary_teams.usecase";
import {AdversaryTeams} from "src/domain/models/adversary_teams";
import {CreateAdversaryTeamsDto} from "./dtos/create_adversary_teams.dto";
import {ApiTags} from "@nestjs/swagger";
import {GetAdversaryTeamsByIdUsecase} from "../domain/usecases/adversary_teams/get_adversary_teams_by_id.usecase";
import {UpdateAdversaryTeamsUsecase} from "../domain/usecases/adversary_teams/update_adversary_teams.usecase";
import { DeleteAdversaryTeamsUsecase } from "src/domain/usecases/adversary_teams/delete_adversary_teams.usecase";

@ApiTags("Adversary Teams")
@Controller("adversaryTeams")
export class AdversaryTeamsController {
    constructor(
        private getAllAdversaryTeamsUsecase: GetAllAdversaryTeamsUsecase,
        private getAdversaryTeamsByIdUsecase: GetAdversaryTeamsByIdUsecase,
        private CreateAdversaryTeamsUsecase: CreateAdversaryTeamsUsecase,
        private UpdateAdversaryTeamsUsecase: UpdateAdversaryTeamsUsecase,
        private deleteAdversaryTeamsUsecase: DeleteAdversaryTeamsUsecase,
    ) {
    }

    @Get()
    getAdversaryTeamss() {
        return this.getAllAdversaryTeamsUsecase.execute();
    }

    @Get(":id")
    async getNewsById(
        @Param("id") id: number,
    ) {
        return this.getAdversaryTeamsByIdUsecase.execute(id);
    }

    @Post()
    createAdversaryTeams(
        @Body() dto: CreateAdversaryTeamsDto,
    ) {
        const adversaryTeams = new AdversaryTeams(dto.logo, dto.name);
        return this.CreateAdversaryTeamsUsecase.execute(adversaryTeams);
    }

    @Put(":id")
    async updateAdversaryTeams(
        @Param("id") id: number,
        @Body() adversaryTeamsData: CreateAdversaryTeamsDto,
    ): Promise<AdversaryTeams> {
        return this.UpdateAdversaryTeamsUsecase.execute(id, adversaryTeamsData);
    }

    @Delete(":id")
    async deleteAdversaryTeams(@Param("id") id: number) {
        return this.deleteAdversaryTeamsUsecase.execute(id);
    }
}
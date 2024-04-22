import {Body, Controller, Get, Post} from "@nestjs/common";
import {GetAllMembersUsecase} from "../domain/usecases/get_all_members.usecase";
import {CreateMembersUsecase} from "../domain/usecases/create_members.usecase";
import {CreateMembersDto} from "./dtos/create_members.dto";
import {Members} from "../domain/models/members";

@Controller("members")
export class MembersController {
    constructor(
        private getAllMembersUsecase: GetAllMembersUsecase,
        private createMembersUsecase: CreateMembersUsecase,
    ) {
    }

    @Get()
    getArticles() {
        return this.getAllMembersUsecase.execute();
    }

    @Post()
    createArticle(
        @Body() dto: CreateMembersDto,
    ) {
        const article = new Members(
            dto.email,
            dto.firstname,
            dto.lastname,
            dto.password,
            dto.role,
            dto.birthdate,
            dto.register_date,
            dto.news,
            dto.plays,
        );

        return this.createMembersUsecase.execute(article);
    }
}
import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {GetAllMembersUsecase} from "../domain/usecases/members/get_all_members.usecase";
import {CreateMembersUsecase} from "../domain/usecases/members/create_members.usecase";
import {CreateMembersDto} from "./dtos/create_members.dto";
import {Members} from "../domain/models/members";
import { ApiTags } from "@nestjs/swagger";
import {DeleteMembersUsecase} from "../domain/usecases/members/delete_members.usecase";
import {UpdateMembersUsecase} from "../domain/usecases/members/update_members.usecase";
import {GetMembersByEmailUsecase} from "../domain/usecases/get_members_by_email.usecase";


@ApiTags('Members')
@Controller("members")
export class MembersController {
    constructor(
        private getAllMembersUsecase: GetAllMembersUsecase,
        private getMembersByEmailUsecase: GetMembersByEmailUsecase,
        private createMembersUsecase: CreateMembersUsecase,
        private deleteMembersUsecase: DeleteMembersUsecase,
        private updateMembersUsecase: UpdateMembersUsecase,
    ) {
    }

    @Get()
    getMembers() {
        return this.getAllMembersUsecase.execute();
    }

    @Get(":email")
    async getMembersByEmail(
        @Param("email") email: string,
    ) {
        return this.getMembersByEmailUsecase.execute(email);
    }

    @Post()
    createMembers(
        @Body() dto: CreateMembersDto,
    ) {
        dto.birthdate = new Date();
        dto.register_date = new Date();

        const member = new Members(
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

        return this.createMembersUsecase.execute(member);
    }

    @Put(":email")
    async updateMembers(
        @Param("email") email: string,
        @Body() membersData: CreateMembersDto,
    ): Promise<Members> {
        return this.updateMembersUsecase.execute(email, membersData);
    }

    @Delete(":email")
    async deleteMembers(@Param("email") email: string) {
        return this.deleteMembersUsecase.execute(email);
    }

}
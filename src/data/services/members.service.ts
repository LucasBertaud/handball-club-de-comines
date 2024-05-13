import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {MembersEntity} from "../entities/members.entity";
import {Members} from "src/domain/models/members";

@Injectable()
export class MembersService {
    constructor(
        @InjectRepository(MembersEntity)
        private membersRepository: Repository<MembersEntity>,
    ) {
    }

    async findAll(): Promise<MembersEntity[]> {
        return this.membersRepository.find();
    }

    async createMember(members: Members): Promise<any> {
        const memberEntity = this.membersRepository.create({
            email: members.email,
            firstname: members.firstname,
            lastname: members.lastname,
            role: members.role,
            password: members.password,
            register_date: members.register_date,
            news: members.news,
            plays: members.plays,
            birthdate: members.birthdate,
        });
        return this.membersRepository.save(memberEntity);
    }

    async deleteMember(id: number): Promise<void> {
        await this.membersRepository.delete(id);
    }

    async updateMember(id: number, members: Members): Promise<void> {
        await this.membersRepository.update(id, {
            email: members.email,
            firstname: members.firstname,
            lastname: members.lastname,
            birthdate: members.birthdate,
            password: members.password,
            role: members.role,
            register_date: members.register_date,
            news: members.news,
            plays: members.plays,
        });
    }
}
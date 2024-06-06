import {Injectable, NotFoundException} from "@nestjs/common";
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

    async findByEmail(email: string): Promise<MembersEntity[]> {
        return this.membersRepository.find({
            where: {
                email: email,
            },
        });
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

    async deleteMember(email: string): Promise<void> {
        await this.membersRepository.delete(email);
    }

    async updateMembers(email: string, members: Partial<Members>): Promise<any> {
        const member = await this.membersRepository.findOne({ where: { email } });
        if (!member) {
            throw new NotFoundException(`Member with ID ${email} not found`);
        }
        Object.assign(member, members);
        await this.membersRepository.save(member);
        return member;
    }
}
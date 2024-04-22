import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {MembersEntity} from "../entities/members.entity";

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

    async createUser(members: MembersEntity): Promise<any> {
        // Crée une nouvelle instance d'ArticleEntity à partir des propriétés de l'objet Article
        const memberEntity = this.membersRepository.create({
            email: members.email,
            firstname: members.firstname,
            lastname: members.lastname,
            role: members.role,
            password: members.password,
            register_date: members.register_date,
            news: members.news,
            plays: members.plays,
        });
        // Enregistre l'entité dans la base de données et retourne l'instance sauvegardée,
        // qui inclura l'ID généré et d'autres modifications potentielles effectuées lors de la sauvegarde
        return this.membersRepository.save(memberEntity);
    }
}
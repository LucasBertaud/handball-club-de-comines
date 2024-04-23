import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {AdversaryTeamsEntity} from "../entities/adversary_teams.entity";
import {AdversaryTeams} from "src/domain/models/adversary_teams";

@Injectable()
export class AdversaryTeamsService {
    constructor(
        @InjectRepository(AdversaryTeamsEntity)
        private adversaryTeamsRepository: Repository<AdversaryTeamsEntity>,
    ) {
    }

    async findAll(): Promise<AdversaryTeamsEntity[]> {
        return this.adversaryTeamsRepository.find();
    }

    async createAdversaryTeams(adversaryTeams: AdversaryTeams): Promise<any> {
        const articleEntity = this.adversaryTeamsRepository.create({
            name: adversaryTeams.name,
            logo: adversaryTeams.logo,
        });
        return this.adversaryTeamsRepository.save(articleEntity);
    }

    async deleteAdversaryTeams(id: number): Promise<void> {
        await this.adversaryTeamsRepository.delete(id);
    }

    async updateAdversaryTeams(id: number, adversaryTeams: AdversaryTeams): Promise<void> {
        await this.adversaryTeamsRepository.update(id, {
            name: adversaryTeams.name,
            logo: adversaryTeams.logo,
        })
    }
}
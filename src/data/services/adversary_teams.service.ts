import {Injectable, NotFoundException} from "@nestjs/common";
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

    async findById(id: number): Promise<AdversaryTeamsEntity[]> {
        return this.adversaryTeamsRepository.find({
            where: {
                id: id,
            },
        });
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

    async updateAdversaryTeams(id: number, adversaryTeamsData: Partial<AdversaryTeams>): Promise<AdversaryTeams> {
        const adversaryTeams = await this.adversaryTeamsRepository.findOne({where: {id}});
        if (!adversaryTeams) {
            throw new NotFoundException(`AdversaryTeams with ID ${id} not found`);
        }
        Object.assign(adversaryTeams, adversaryTeamsData);
        await this.adversaryTeamsRepository.save(adversaryTeams);
        return adversaryTeams;
    }
}
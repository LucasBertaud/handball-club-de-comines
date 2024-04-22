import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AdversaryTeamsEntity } from "../entities/adversary_teams.entity";
import { AdversaryTeams } from "src/domain/models/adversary_teams";

@Injectable()
export class AdversaryTeamsService {
    constructor(
        @InjectRepository(AdversaryTeamsEntity)
        private adversaryTeamsRepository: Repository<AdversaryTeamsEntity>,
    ) { }
    async findAll(): Promise<AdversaryTeamsEntity[]> {
        return this.adversaryTeamsRepository.find();
    }
    async createAdversaryTeams(adversaryTeams: AdversaryTeams): Promise<any> {
        // Crée une nouvelle instance d'ArticleEntity à partir des propriétés de l'objet Article
        const articleEntity = this.adversaryTeamsRepository.create({
            name: adversaryTeams.name,
            logo: adversaryTeams.logo
        });
        // Enregistre l'entité dans la base de données et retourne l'instance sauvegardée,
        // qui inclura l'ID généré et d'autres modifications potentielles effectuées lors de la sauvegarde
        return this.adversaryTeamsRepository.save(articleEntity);
    }
}
import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { MatchesEntity } from "../entities/matches.entity";
import { Matches } from "src/domain/models/matches";

@Injectable()
export class MatchesService {
    constructor(
        @InjectRepository(MatchesEntity)
        private matchesRepository: Repository<MatchesEntity>,
    ) {
    }

    async findAll(): Promise<MatchesEntity[]> {
        return this.matchesRepository.find();
    }

    async createMatches(matches: Matches): Promise<any> {
        const matchesEntity = this.matchesRepository.create({
            adversary: matches.adversary,
            adversary_score: matches.adversary_score,
            hcc_score: matches.hcc_score,
            plays: matches.plays,
            start_date: matches.start_date
        });
        return this.matchesRepository.save(matchesEntity);
    }

    async deleteMatches(id: number): Promise<void> {
        await this.matchesRepository.delete(id);
    }

    async updateMatches(id: number, matches: Partial<Matches>): Promise<Matches> {
        const match = await this.matchesRepository.findOne({ where: { id } });
        if (!match) {
            throw new NotFoundException(`Match with ID ${id} not found`);
        }
        Object.assign(match, matches);
        await this.matchesRepository.save(match);
        return match;
    }
}